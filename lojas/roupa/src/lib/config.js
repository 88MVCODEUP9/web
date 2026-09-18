import { safeLink } from './catalog.js';

export const defaultConfig = {
  site: { name: 'Minha Loja', logo: '', favicon: '' },
  social: { instagram: '', whatsapp: '' },
  footer: { message: '' },
  theme: {
    primary: '#D4AF37', secondary: '#F4D675', background: '#050505', backgroundSecondary: '#0D0D0D',
    surface: '#111111', surfaceSecondary: '#181818', text: '#FFFFFF', textSecondary: '#A5A5A5', border: 'rgba(212, 175, 55, 0.25)'
  },
  labels: {
    collectionEyebrow: 'SELEÇÃO EXCLUSIVA', collectionTitle: 'Sua próxima escolha.', collectionDescription: 'Explore os detalhes. Encontre o seu estilo.', filters: 'Filtrar coleção', color: 'Cor', size: 'Tamanho', allColors: 'Todas as cores', allSizes: 'Todos os tamanhos', clearFilters: 'Limpar filtros', productSingular: 'produto', productPlural: 'produtos', chooseOptions: 'Escolha a cor e o tamanho para consultar a disponibilidade.', consultWhatsapp: 'Consultar no WhatsApp', whatsappPending: 'Atendimento disponível em breve.', shareProduct: 'Compartilhar produto', linkCopied: 'Link copiado!', copyLinkManually: 'Copie o link abaixo.', productLink: 'Link do produto', reference: 'Referência', whatsappGreeting: 'Olá! Tenho interesse neste produto:', unavailableProduct: 'Este produto não está disponível.', backToCollection: 'Voltar à coleção',
    menu: 'Guarda-Roupa', categories: 'Categorias', allProducts: 'Todos os produtos', loading: 'Carregando produtos…',
    empty: 'Nenhum produto disponível.', error: 'Não foi possível carregar os produtos.', retry: 'Tentar novamente',
    configError: 'Não foi possível carregar as configurações. Exibindo o tema padrão.', openProduct: 'Ampliar produto',
    productDetails: 'Detalhes do produto', productImage: 'Imagem do produto', close: 'Fechar', previousImage: 'Imagem anterior', nextImage: 'Próxima imagem', viewImage: 'Ver imagem'
  },
  categories: [
    { id: 'camisa', label: 'Camisa' }, { id: 'chapeu', label: 'Chapéu' }, { id: 'sapato', label: 'Sapato' },
    { id: 'chinelo', label: 'Chinelo' }, { id: 'camiseta', label: 'Camiseta' }, { id: 'bermuda', label: 'Bermuda' },
    { id: 'short', label: 'Short' }, { id: 'calca', label: 'Calça' }
  ]
};

export function mergeConfig(value) {
  const config = {};
  for (const section of ['site', 'social', 'footer', 'theme', 'labels']) {
    config[section] = { ...defaultConfig[section] };
    if (value?.[section] && typeof value[section] === 'object' && !Array.isArray(value[section])) {
      for (const [key, item] of Object.entries(value[section])) {
        if (typeof item === 'string') config[section][key] = item.trim() || defaultConfig[section][key] || '';
      }
    }
  }
  config.site.logo = safeLink(config.site.logo);
  config.site.favicon = safeLink(config.site.favicon);
  config.categories = Array.isArray(value?.categories) ? value.categories.filter(item => typeof item?.id === 'string' && typeof item?.label === 'string') : defaultConfig.categories;
  return config;
}
