# CHANGELOG: Padaria Trigo Doce

## Iteração 1 (2026-11-15): primeira versão

### Feito
- `index.html` com as seções na ordem do design (3.0 a 3.11): link "Pular para o conteúdo", cabeçalho fixo (sticky), hero, Destaques (8 cards com filtro), Encomendas (3 cards e "Como encomendar" em `ol`), Sobre, Equipe, Depoimentos, Horários e endereço, CTA final, rodapé e barra fixa de encomenda no celular.
- Tokens do `design.md` 2.6 em `:root` (`styles.css`), mobile first, com breakpoints em 560, 768, 900, 1024 e 1200 px.
- Sprite `icones.svg` colado inline logo após `<body>` (funciona em `file://`). O ramo de trigo virou o símbolo `#d-ramo` no mesmo bloco inline, e a onda está inline em cada divisor, as duas com `currentColor`.
- Hero: `srcset` com `hero-paes-800.jpg 800w` e `hero-paes.jpg 1120w`, `fetchpriority="high"`, sem lazy, mais `preload` da imagem. Selo gira em 40s só sem `prefers-reduced-motion`.
- As 5 URLs `wa.me` exatas do design, todas com `target="_blank" rel="noopener"` e o aviso sr-only "(abre o WhatsApp em nova aba)". Não há verde do WhatsApp.
- Todas as 21 fotos estão em uso, com `alt` do `imagens.md`, `width`/`height` reais, `object-fit: cover` e `loading="lazy"` abaixo da dobra. Avatares de depoimento com `alt=""` e selo "Exemplo". A equipe tem `alt` "Foto ilustrativa..." e legenda de demonstração.
- Sem mapa interativo (não há coordenadas). Em vez dele: endereço em `address`, botão "Como chegar" (busca do Google Maps) e a ilustração da fachada.
- Metas OG com `og-image.jpg`. O `og:url` ficou comentado porque ainda não há domínio.
- O rodapé tem o aviso de site de demonstração e os créditos CC BY obrigatórios (F3, F8, F9, F11), com links para as páginas das fotos e para as licenças.
- `script.js` (defer, sem dependências) cuida de:
  - sombra no cabeçalho ao rolar;
  - menu móvel com `aria-expanded`, que fecha com Esc, com clique em link e com clique fora, e devolve o foco ao botão;
  - chips de filtro com `aria-pressed` e contagem em `aria-live`;
  - destaque do dia atual na tabela de horários;
  - fade-in com IntersectionObserver;
  - barra fixa que aparece depois do hero e some no CTA final;
  - item ativo na navegação.
- Sem JS: os chips ficam ocultos e o menu aparece como linha de links abaixo do logo. A barra fixa fica sempre visível e todo o conteúdo aparece.

### Divergências do design (com motivo)
- **Cabeçalho `sticky` em vez de `fixed`**: o resultado visual é o mesmo e não é preciso compensar a altura no `body`.
- **Hero ≥1024px com colunas `1fr / 496px` em vez de `5fr / 6fr`**: a foto já é limitada a 620 px de altura (496 px de largura em 4:5). Com 5fr/6fr, a coluna de texto ficava estreita e os dois CTAs quebravam em duas linhas.
- **Cabeçalho abaixo de 480px**: logo com 32 px de altura e botão "Encomendar" sem ícone, para logo, botão e hambúrguer caberem em uma linha a 360 px. Abaixo de 340 px, aparece só o símbolo do logo (obs. C do `imagens.md`).
- **Sobre** com `padding-top` reduzido: vem logo depois de Encomendas, que tem o mesmo fundo creme, e os dois paddings somados deixavam um vazio grande. Não usei a onda aqui porque as duas seções têm a mesma cor.
- **Barra fixa**: a folga fica no `padding-bottom` do rodapé (o design também prevê isso), em vez de no `body`.

### Verificação (Edge headless, via CDP)
- 360 px e 1280 px: `scrollWidth` igual à largura da janela, sem rolagem horizontal. Nenhuma imagem quebrada (`ambiente-loja.jpg` não carrega a 360 px porque fica oculta abaixo de 768 px, como o design pede). Há um único H1, Fraunces carregada e nenhum erro de JS.
- Menu móvel abre, fecha com Esc e devolve o foco ao botão. A barra fixa fica oculta no hero e visível no meio da página (360 px), e não aparece a 1280 px.
- HTML com tags balanceadas, sem IDs duplicados, todos os assets referenciados existem e não há `!important`.

### Pendências
- Antes de publicar: trocar as fotos de equipe e depoimentos por fotos reais com autorização, e trocar os dados fictícios (endereço, telefone, preços, história).
- Definir o domínio e preencher `og:url` e a URL absoluta de `og:image`.
