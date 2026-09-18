import { useState } from 'react';
import { useSiteConfig } from '../context/SiteConfigContext.jsx';
import { productUrl, whatsappUrl } from '../lib/productLinks.js';
export default function ProductActions({ product, color, size }) {
  const { config } = useSiteConfig();
  const [status, setStatus] = useState('');
  const [fallback, setFallback] = useState(false);
  const url = productUrl(product.id);
  const contact = whatsappUrl(config.social.whatsapp, { product, color, size, url }, config.labels);
  async function share() {
    try {
      await navigator.clipboard.writeText(url); setStatus(config.labels.linkCopied);
    } catch (error) {
      if (error.name !== 'AbortError') { setFallback(true); setStatus(config.labels.copyLinkManually); }
    }
  }
  return <div className="modal-actions">
    {contact ? <a className="contact-product" href={contact} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.4 7.8L3 21l1.7-4.6A9 9 0 1 1 21 11.5Z"/><path d="M8 7c0 5 4 9 9 9l1-3-3-1-1 1-3-3 1-1-1-3Z"/></svg>{config.labels.consultWhatsapp}<span aria-hidden="true">↗</span></a> : <button className="contact-product" type="button" disabled>{config.labels.consultWhatsapp}</button>}
    {!contact && <p className="contact-pending">{config.labels.whatsappPending}</p>}
    <button className="share-product" type="button" onClick={share}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 16V3m-4 4 4-4 4 4M5 12v8h14v-8"/></svg>{config.labels.shareProduct}</button>
    <span role="status" className="share-status">{status}</span>
    {fallback && <input aria-label={config.labels.productLink} className="share-link-input" value={url} readOnly onFocus={event => event.target.select()} />}
  </div>;
}
