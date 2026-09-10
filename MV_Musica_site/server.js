import express from 'express';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const jobs = new Map();

function cleanName(name = 'download') {
  return name.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').slice(0, 120) || 'download';
}

function run(cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { cwd, windowsHide: true });
    let stdout = '';
    let stderr = '';
    p.stdout.on('data', d => stdout += d.toString());
    p.stderr.on('data', d => stderr += d.toString());
    p.on('error', reject);
    p.on('close', code => code === 0 ? resolve({ stdout, stderr }) : reject(new Error(stderr || `${cmd} exited with ${code}`)));
  });
}

async function ytDlpAvailable() {
  try { await run('yt-dlp', ['--version']); return true; } catch { return false; }
}

app.get('/api/health', async (_req, res) => {
  res.json({ ok: true, ytDlp: await ytDlpAvailable() });
});

app.post('/api/info', async (req, res) => {
  const { url } = req.body || {};
  if (!url || !/^https?:\/\//i.test(url)) return res.status(400).json({ error: 'URL inválida.' });
  try {
    const { stdout } = await run('yt-dlp', ['--dump-single-json', '--no-playlist', url]);
    const data = JSON.parse(stdout);
    res.json({
      title: data.title || 'Mídia',
      thumbnail: data.thumbnail || '',
      duration: data.duration || 0,
      webpage_url: data.webpage_url || url,
      extractor: data.extractor_key || data.extractor || 'desconhecido'
    });
  } catch (e) {
    res.status(500).json({ error: 'Não foi possível ler esse link. Verifique se o yt-dlp está instalado e se a fonte permite o acesso.', details: e.message.slice(0, 700) });
  }
});

app.post('/api/download', async (req, res) => {
  const { url, format = 'mp3', quality = '192' } = req.body || {};
  if (!url || !/^https?:\/\//i.test(url)) return res.status(400).json({ error: 'URL inválida.' });
  if (!['mp3','m4a','mp4'].includes(format)) return res.status(400).json({ error: 'Formato inválido.' });

  const id = randomUUID();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mv-downloader-'));
  const outTpl = path.join(dir, '%(title).120s.%(ext)s');
  const args = ['--no-playlist', '--restrict-filenames', '-o', outTpl];

  if (format === 'mp3') {
    args.push('-x', '--audio-format', 'mp3', '--audio-quality', `${quality}K`);
  } else if (format === 'm4a') {
    args.push('-x', '--audio-format', 'm4a');
  } else {
    args.push('-f', 'bv*+ba/b', '--merge-output-format', 'mp4');
  }
  args.push(url);

  jobs.set(id, { status: 'running', dir, file: null, error: null });
  const p = spawn('yt-dlp', args, { windowsHide: true });
  let err = '';
  p.stderr.on('data', d => err += d.toString());
  p.on('error', e => jobs.set(id, { status: 'error', dir, file: null, error: e.message }));
  p.on('close', code => {
    if (code !== 0) return jobs.set(id, { status: 'error', dir, file: null, error: err || `yt-dlp saiu com código ${code}` });
    const files = fs.readdirSync(dir).filter(f => !f.endsWith('.part') && !f.endsWith('.ytdl'));
    if (!files.length) return jobs.set(id, { status: 'error', dir, file: null, error: 'Arquivo final não encontrado.' });
    const file = files.sort((a,b) => fs.statSync(path.join(dir,b)).size - fs.statSync(path.join(dir,a)).size)[0];
    jobs.set(id, { status: 'done', dir, file, error: null });
  });
  res.json({ id });
});

app.get('/api/job/:id', (req, res) => {
  const job = jobs.get(req.params.id);
  if (!job) return res.status(404).json({ error: 'Download não encontrado.' });
  res.json({ status: job.status, error: job.error, readyUrl: job.status === 'done' ? `/api/file/${req.params.id}` : null });
});

app.get('/api/file/:id', (req, res) => {
  const job = jobs.get(req.params.id);
  if (!job || job.status !== 'done' || !job.file) return res.status(404).send('Arquivo não disponível.');
  const full = path.join(job.dir, job.file);
  res.download(full, cleanName(job.file), err => {
    if (!err) {
      setTimeout(() => {
        try { fs.rmSync(job.dir, { recursive: true, force: true }); } catch {}
        jobs.delete(req.params.id);
      }, 60_000);
    }
  });
});

app.listen(PORT, () => {
  console.log(`MV Downloader: http://localhost:${PORT}`);
});
