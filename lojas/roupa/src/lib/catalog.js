export const normalizeCategory = value => String(value || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');

export function safeLink(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(value, 'https://store.example/');
    return ['http:', 'https:'].includes(url.protocol) ? value.trim() : '';
  } catch { return ''; }
}

export function normalizeCatalog(data) {
  if (!data || !Array.isArray(data.products)) throw new Error('Catálogo inválido.');
  const ids = new Set();
  return data.products.flatMap((raw, index) => {
    if (!raw || typeof raw.id !== 'string' || !raw.id.trim() || ids.has(raw.id.trim()) || !normalizeCategory(raw.category)) return [];
    ids.add(raw.id.trim());
    const product = {
      ...raw,
      id: raw.id.trim(),
      category: normalizeCategory(raw.category),
      active: raw.active !== false,
      order: Number.isFinite(raw.order) ? raw.order : index,
      images: Array.isArray(raw.images) ? raw.images.map(safeLink).filter(Boolean).slice(0, 5) : [],
      colors: Array.isArray(raw.colors) ? raw.colors.filter(color => color && typeof color.name === 'string' && typeof color.value === 'string').filter((color, index, all) => all.findIndex(item => item.name === color.name) === index) : [],
      sizes: Array.isArray(raw.sizes) ? [...new Set(raw.sizes.filter(size => ['string', 'number'].includes(typeof size)).map(String))] : [],
    };
    return product.active ? [product] : [];
  }).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
}

// Reusable by a separate future admin. The public store never writes files.
export function createProduct({ category, images, colors = [], sizes = [] }, order = 0) {
  const safeImages = Array.isArray(images) ? images.map(safeLink).filter(Boolean) : [];
  if (!normalizeCategory(category) || safeImages.length < 1 || safeImages.length > 5) throw new Error('Informe uma categoria e de 1 a 5 imagens válidas.');
  const now = new Date().toISOString();
  return { id: crypto.randomUUID(), category: normalizeCategory(category), active: true, order, images: safeImages, colors, sizes, createdAt: now, updatedAt: now };
}
