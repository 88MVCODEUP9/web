import { useSiteConfig } from '../context/SiteConfigContext.jsx';
export default function CatalogFilters({ category, colors, sizes, color, size, setColor, setSize, count, clear }) {
  const { config } = useSiteConfig();
  const labels = config.labels;
  return <section className="catalog-toolbar" aria-label={labels.filters}>
    <div className="collection-heading"><span className="collection-eyebrow">{labels.collectionEyebrow}</span><h1>{category}</h1><p>{labels.collectionDescription}</p>{labels.collectionNote && <span className="collection-note">{labels.collectionNote}</span>}</div>
    <div className="filter-panel"><div className="filter-fields">
      <label className="filter-field"><span>{labels.color}</span><select value={color} onChange={event => setColor(event.target.value)}><option value="">{labels.allColors}</option>{colors.map(option => <option key={option}>{option}</option>)}</select></label>
      <label className="filter-field"><span>{labels.size}</span><select value={size} onChange={event => setSize(event.target.value)}><option value="">{labels.allSizes}</option>{sizes.map(option => <option key={option}>{option}</option>)}</select></label>
    </div><div className="filter-summary"><span aria-live="polite">{count} {count === 1 ? labels.productSingular : labels.productPlural}</span>{(color || size) && <button type="button" onClick={clear}>{labels.clearFilters} <span aria-hidden="true">×</span></button>}</div></div>
  </section>;
}
