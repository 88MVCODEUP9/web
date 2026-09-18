import { useCallback, useEffect, useState } from 'react';
import { productUrl } from '../lib/productLinks.js';
const currentId = () => new URL(window.location.href).searchParams.get('produto') || '';
export function useProductLink() {
  const [id, setId] = useState(currentId);
  const [selection, setSelection] = useState(null);
  useEffect(() => {
    const onPop = () => { setId(currentId()); setSelection(null); };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const open = useCallback((product, values) => {
    if (currentId() !== product.id) window.history.pushState({ ...window.history.state, mvProduct: true, mvProductReturn: window.location.href }, '', productUrl(product.id));
    setSelection(values); setId(product.id);
  }, []);
  const close = useCallback(() => {
    if (window.history.state?.mvProduct && window.history.state?.mvProductReturn) window.history.back();
    else {
      const url = new URL(window.location.href);
      url.searchParams.delete('produto');
      window.history.replaceState(window.history.state, '', url);
      setId('');
    }
  }, []);
  return { id, selection, open, close };
}
