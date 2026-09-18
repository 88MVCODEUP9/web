import ProductCard from './ProductCard.jsx';
import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function ProductGrid({ products, loading, error, reload, onOpen, paused }) {
  const { config } = useSiteConfig();
  return <main id="catalog" className="catalog-main">
    {(loading || error || !products.length) && <div className="catalog-status" role="status">
      <p>{loading ? config.labels.loading : error ? config.labels.error : config.labels.empty}</p>
      {error && <button type="button" onClick={reload}>{config.labels.retry}</button>}
    </div>}
    {!!products.length && <div className="products-grid">{products.map(product => <ProductCard key={product.id} product={product} onOpen={onOpen} paused={paused} />)}</div>}
  </main>;
}
