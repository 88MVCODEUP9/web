import { useCallback, useEffect, useRef, useState } from 'react';
import { normalizeCatalog } from '../lib/catalog.js';
import { fetchJson } from '../lib/json.js';

export function useProducts() {
  const [state, setState] = useState({ products: [], loading: true, error: false });
  const controllerRef = useRef(null);
  const previousJson = useRef('');
  const load = useCallback(async () => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    try {
      const data = await fetchJson('products.json', controller.signal);
      const serialized = JSON.stringify(data);
      const products = normalizeCatalog(data);
      if (controller.signal.aborted) return;
      const changed = previousJson.current !== serialized;
      previousJson.current = serialized;
      setState(previous => ({ products: changed ? products : previous.products, loading: false, error: false }));
    } catch (error) {
      if (error.name !== 'AbortError') setState(previous => ({ ...previous, loading: false, error: true }));
    }
  }, []);
  useEffect(() => {
    load();
    const interval = setInterval(() => { if (!document.hidden) load(); }, 60000);
    const onVisible = () => { if (!document.hidden) load(); };
    window.addEventListener('focus', onVisible);
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearInterval(interval);
      controllerRef.current?.abort();
      window.removeEventListener('focus', onVisible);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [load]);
  return { ...state, reload: load };
}
