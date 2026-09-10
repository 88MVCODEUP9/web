const $ = s => document.querySelector(s);
const url = $('#url'), status = $('#status'), media = $('#media'), format = $('#format'), quality = $('#quality');
function setStatus(text, type=''){ status.textContent=text; status.className='status '+type; }
function dur(s){ if(!s) return 'duração desconhecida'; const m=Math.floor(s/60), r=Math.floor(s%60); return `${m}:${String(r).padStart(2,'0')}`; }
format.addEventListener('change',()=>{ quality.closest('div').style.opacity = format.value==='mp3' ? '1' : '.45'; quality.disabled = format.value!=='mp3'; });
$('#analisar').onclick = async()=>{
  setStatus('Analisando link...'); media.classList.add('hidden');
  try{
    const r=await fetch('/api/info',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url:url.value.trim()})});
    const j=await r.json(); if(!r.ok) throw new Error(j.error||'Falha');
    $('#title').textContent=j.title; $('#meta').textContent=`${dur(j.duration)} • ${j.extractor}`; $('#thumb').src=j.thumbnail||''; media.classList.remove('hidden'); setStatus('Link reconhecido.','ok');
  }catch(e){ setStatus(e.message,'error'); }
};
$('#baixar').onclick = async()=>{
  setStatus('Preparando download...');
  try{
    const r=await fetch('/api/download',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url:url.value.trim(),format:format.value,quality:quality.value})});
    const j=await r.json(); if(!r.ok) throw new Error(j.error||'Falha');
    const id=j.id;
    const timer=setInterval(async()=>{
      const rr=await fetch('/api/job/'+id); const jj=await rr.json();
      if(jj.status==='done'){ clearInterval(timer); setStatus('Pronto. Iniciando download...','ok'); window.location.href=jj.readyUrl; }
      else if(jj.status==='error'){ clearInterval(timer); setStatus(jj.error||'Erro no download.','error'); }
      else setStatus('Baixando e processando...');
    },1200);
  }catch(e){ setStatus(e.message,'error'); }
};
