# MV STYLE — loja React

Projeto integrado a partir dos quatro `App.jsx` fornecidos. Os arquivos originais nas pastas `Header`, `Menu lateral`, `Cards` e `Footer` foram preservados. O fundo principal veio do componente Cards; não havia uma referência separada de fundo/render.

## Executar

```powershell
npm.cmd install
npm.cmd run dev
```

Abra o endereço informado pelo Vite, normalmente http://127.0.0.1:5173/.

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

O build gera `dist/`, que pode ser servido por uma hospedagem estática com HTTPS. Este projeto não foi publicado em um serviço externo.

## Editar o conteúdo

- `public/data/products.json`: catálogo único. Cada produto tem `id`, `category`, `active`, `order`, `images`, `colors` e `sizes`. Campos adicionais são permitidos, mas nomes e preços não são exibidos nos cards.
- `public/data/site-config.json`: nome, logo, favicon, redes sociais, frase do Footer, cores da interface, textos e rótulos das categorias.
- `public/produtos/`: imagens demonstrativas locais. Substitua por fotos reais e atualize seus caminhos no catálogo. SVG, WebP, PNG e JPEG são aceitos, assim como URLs HTTPS.

Foram incluídos três produtos demonstrativos com fotos de referência do Pexels, salvas no projeto para não depender do servidor externo. As fontes e os autores estão em `public/photo-credits.json`. As ilustrações anteriores continuam disponíveis. A logo também é demonstrativa. Os links Instagram e WhatsApp são exemplos; preencha seus endereços reais na configuração. Redes com endereço vazio não aparecem. Redes adicionais válidas aparecem com o mesmo botão do Footer.

O Footer preserva o texto em duas linhas: uma quebra `\n` na mensagem separa a linha normal da linha destacada. A fonte visual permanece a mesma dos componentes enviados.

## Catálogo e atualização

O React faz `fetch` dos arquivos públicos com `cache: "no-store"` e parâmetro `?t=Date.now()`. A configuração é carregada uma única vez pelo Provider por abertura da página. O catálogo é consultado ao abrir, a cada 60 segundos enquanto a aba está visível e quando a página recupera o foco. Dados idênticos mantêm as referências dos produtos, evitando remontagem dos cards.

Se uma atualização do catálogo falhar, os últimos produtos válidos continuam visíveis e aparece uma mensagem discreta com botão para tentar novamente. JSON vazio mostra o estado sem produtos; JSON inválido mostra o estado de erro. Imagens quebradas usam uma imagem alternativa local. Cores e tamanhos ausentes não quebram a interface. Produtos inválidos ou com IDs duplicados são ignorados.

Produtos sem `active` são considerados ativos e sem `order` seguem a ordem do arquivo, para aceitar o formato simplificado do documento. Recomenda-se que o futuro editor sempre grave ambos os campos.

Categorias internas ficam sem acentos. `bermuda` e `short` são aceitas separadamente, pois ambos os nomes aparecem nas instruções. Uma nova categoria no catálogo surge automaticamente no menu com o ícone de cabide. Para personalizar o rótulo, acrescente-a à lista `categories` na configuração.

## Tema

As cores gerais são aplicadas como variáveis CSS pelo `SiteConfigProvider`. `palette.css` centraliza as variações de brilho e sombra originais; o Provider deriva essas variações das cores configuradas. Com o tema padrão, os valores RGB originais são preservados. As cores de `product.colors` permanecem independentes do tema.

## Compartilhamento, filtros e atendimento

Os links usam o endereço atual da loja; para outras pessoas acessarem pela internet, é necessário publicar a hospedagem. Cada produto abre pela URL `?produto=UUID`, inclusive ao acessar o link diretamente ou recarregar a página. O botão Compartilhar produto copia esse endereço; quando o navegador bloqueia a área de transferência, mostra o link para cópia manual. Links de produtos desativados ou removidos mostram uma mensagem de indisponibilidade. Os filtros por categoria, cor e tamanho são combinados; as opções vêm exclusivamente do catálogo. O botão Limpar filtros remove cor e tamanho, mantendo a categoria atual.

O modal prepara uma mensagem de WhatsApp com referência, cor, tamanho e link do produto. Informe um endereço como `https://wa.me/55DDDNUMERO` em `social.whatsapp`, substituindo as letras pelos dígitos reais. Enquanto existir apenas um endereço de exemplo, o botão fica desativado e mostra atendimento em breve. A loja nunca envia a mensagem automaticamente: o cliente confirma o envio no WhatsApp.

Os novos textos da coleção, dos filtros e dos botões também ficam em `site-config.json`.

## Futuro painel

`src/lib/catalog.js` exporta `createProduct`, que gera `crypto.randomUUID()`, normaliza a categoria e adiciona automaticamente estado ativo, ordem e datas. Ele pode ser reaproveitado pelo futuro projeto administrativo. O ID é criado ao cadastrar, nunca a cada leitura da loja.

A loja pública apenas lê os arquivos. Salvar produtos ou configurações em uma hospedagem/repositório precisará de um backend autenticado no futuro painel. Credenciais não fazem parte do React público. Em uma hospedagem estática, atualize os arquivos do catálogo e as imagens publicados; atualizar somente a cópia local não modifica a hospedagem.

## Estrutura

```text
public/
  data/products.json
  data/site-config.json
  produtos/
  logo.svg
  placeholder.svg
src/
  components/Header.jsx
  components/Sidebar.jsx
  components/ProductCard.jsx
  components/ProductGrid.jsx
  components/Footer.jsx
  context/SiteConfigContext.jsx
  hooks/useProducts.js
  lib/
  styles/
  App.jsx
  main.jsx
tests/catalog.test.js
```

Os carrosséis funcionam apenas para cards visíveis com mais de uma imagem e são pausados na aba oculta ou no produto expandido. O modal tem navegação manual, miniaturas, seletores, fechamento pelo botão, pelo fundo ou por ESC, bloqueio de rolagem e controle de foco.

## Verificação

O build de produção e os seis testes de dados passaram. No navegador foram verificados filtros, expansão do menu, modal, navegação manual, cores, tamanhos, larguras de 320, 375, 768 e 1440 pixels, catálogos com 1–5 imagens, produto desativado, categoria nova, imagem ausente, JSON vazio e JSON inválido. Uma configuração temporária confirmou a troca de nome, mensagem, redes visíveis e tema para verde apenas pelo JSON. Os dados demonstrativos foram restaurados após as verificações.
