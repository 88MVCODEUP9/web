export function productUrl(id, location = window.location.href) {
  const url = new URL(location);
  url.searchParams.set('produto', id);
  return url.href;
}
export function whatsappUrl(base, { product, color, size, url }, labels) {
  try {
    const destination = new URL(base);
    const number = destination.hostname === 'wa.me' ? destination.pathname.slice(1) : destination.searchParams.get('phone');
    if (!['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(destination.hostname) || !/^\d{10,15}$/.test(number || '')) return '';
    destination.searchParams.set('text', [labels.whatsappGreeting, `${labels.reference}: ${product.sku || product.id}`, color && `${labels.color}: ${color}`, size && `${labels.size}: ${size}`, url].filter(Boolean).join('\n'));
    return destination.href;
  } catch { return ''; }
}
export function filterProducts(products, { category = 'todos', color = '', size = '' }) {
  return products.filter(product => (category === 'todos' || product.category === category) && (!color || product.colors.some(option => option.name === color)) && (!size || product.sizes.includes(size)));
}
