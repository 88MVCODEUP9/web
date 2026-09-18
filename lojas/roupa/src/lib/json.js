export async function fetchJson(filename, signal) {
  const url = `${import.meta.env.BASE_URL}data/${filename}?t=${Date.now()}`;
  const response = await fetch(url, { cache: 'no-store', signal });
  if (!response.ok) throw new Error(`Falha ao carregar ${filename}: ${response.status}`);
  const content = await response.text();
  return content.trim() ? JSON.parse(content) : { products: [] };
}
