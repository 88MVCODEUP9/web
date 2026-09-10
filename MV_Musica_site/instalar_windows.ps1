Write-Host "=== MV Downloader - instalacao ===" -ForegroundColor Green
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { Write-Host "Instale Node.js LTS antes de continuar." -ForegroundColor Yellow; exit 1 }
if (-not (Get-Command yt-dlp -ErrorAction SilentlyContinue)) { Write-Host "Instalando yt-dlp via winget..."; winget install --id yt-dlp.yt-dlp -e }
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) { Write-Host "Instalando FFmpeg via winget..."; winget install --id Gyan.FFmpeg -e }
npm install
Write-Host "Pronto. Execute: npm start" -ForegroundColor Green
Write-Host "Depois abra: http://localhost:3030"
