import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';
import { useSiteConfig } from './context/SiteConfigContext.jsx';
import { useProducts } from './hooks/useProducts.js';
import { normalizeCategory } from './lib/catalog.js';
import { filterProducts } from './lib/productLinks.js';
import { useProductLink } from './hooks/useProductLink.js';
import CatalogFilters from './components/CatalogFilters.jsx';
import ProductCard from './components/ProductCard.jsx';
import './styles/integration.css';
import './styles/refinements.css';

export default function App() {
  const { config, error: configError } = useSiteConfig();
  const { products, loading, error, reload } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const productLink = useProductLink();
  const categories = useMemo(() => {
    const map = new Map(config.categories.map(item => [normalizeCategory(item.id), { id: normalizeCategory(item.id), label: item.label }]));
    for (const product of products) if (!map.has(product.category)) map.set(product.category, { id: product.category, label: product.category.charAt(0).toUpperCase() + product.category.slice(1) });
    return [...map.values()];
  }, [config.categories, products]);
  const categoryProducts = useMemo(() => filterProducts(products, { category: selectedCategory }), [products, selectedCategory]);
  const filterOptions = useMemo(() => ({ colors: [...new Set(categoryProducts.flatMap(product => product.colors.map(option => option.name)))].sort((a,b) => a.localeCompare(b,'pt-BR')), sizes: [...new Set(categoryProducts.flatMap(product => product.sizes))].sort((a,b) => a.localeCompare(b,'pt-BR',{numeric:true})) }), [categoryProducts]);
  const filteredProducts = useMemo(() => filterProducts(products, { category: selectedCategory, color, size }), [products, selectedCategory, color, size]);
  const selectedProduct = products.find(product => product.id === productLink.id);
  function selectCategory(category) {
    setSelectedCategory(category);
    setColor(''); setSize('');
    if (window.matchMedia('(max-width: 700px)').matches) setSidebarOpen(false);
  }
  return <div className={`store-shell ${sidebarOpen ? 'menu-open' : ''}`}>
    <Header />
    <div className="store-body">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} active={selectedCategory} onSelect={selectCategory} categories={categories} />
      <div className="store-content">
        {configError && <p className="config-status" role="status">{config.labels.configError}</p>}
        <CatalogFilters category={selectedCategory === 'todos' ? config.labels.collectionTitle : categories.find(category => category.id === selectedCategory)?.label} colors={filterOptions.colors} sizes={filterOptions.sizes} color={color} size={size} setColor={setColor} setSize={setSize} count={filteredProducts.length} clear={() => { setColor(''); setSize(''); }} />
        <ProductGrid products={filteredProducts} loading={loading} error={error} reload={reload} onOpen={productLink.open} paused={!!productLink.id} />
        <Footer />
      </div>
    </div>
    {selectedProduct && <ProductCard key={selectedProduct.id} product={selectedProduct} modalOnly initialSelection={productLink.selection} onClose={productLink.close} />}
    {productLink.id && !selectedProduct && !loading && !error && <div className="product-modal-overlay" onClick={productLink.close}><div className="link-unavailable" role="dialog" aria-modal="true" aria-label={config.labels.unavailableProduct} onClick={event => event.stopPropagation()} onKeyDown={event => { if (event.key === 'Escape') productLink.close(); }}><p>{config.labels.unavailableProduct}</p><button type="button" autoFocus onClick={productLink.close}>{config.labels.backToCollection}</button></div></div>}
  </div>;
}
