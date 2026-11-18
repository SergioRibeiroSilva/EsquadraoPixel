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

## Ciclo 2 (2026-11-18): correções da avaliação do ciclo 1

### Correções obrigatórias
- **T1 (WCAG 2.2.2, bloqueante):** o selo do hero agora dá **uma única volta de 4 s** (`animation: girar 4s cubic-bezier(.25,.6,.3,1) 1`) e para, só com `prefers-reduced-motion: no-preference`. Conferido no Edge: 5 s depois de carregar, `document.getAnimations()` não tem nada rodando. Registrado no `design.md` (3.2 e 4.9).
- **V1/V4/T3 (hero abaixo de 1024 px):**
  - 768 a 1023 px: hero em 2 colunas (texto `1fr` + foto 4:5 com até 320 px). A 768x1024, o H1 termina em y=329 e o CTA "Encomendar pelo WhatsApp" em y=541.
  - Abaixo de 768 px: foto em 16:10 (era 4:5), selo de 64 px, `gap` e `padding` do hero menores. A 360x800, o H1 termina em y=479 e o CTA principal em y=680 (o secundário também aparece).
- **T2/V2 (LCP no celular):**
  - `<picture>` com WebP e JPEG de reserva. Abaixo de 768 px há direção de arte com recorte 16:10 (`hero-paes-faixa-480/640/720/960`, de 24 a 82 KB em WebP). A partir de 768 px, a foto 4:5 em 480w, 640w, 800w e 1120w.
  - `sizes="(min-width: 1024px) 496px, (min-width: 768px) 320px, calc(100vw - 40px)"`, com `preload` (com `media`) para cada caso.
  - Tirei o `decoding="async"` da imagem do LCP e mantive `fetchpriority="high"`.
  - Google Fonts sem bloquear a renderização: `preload` + `media="print" onload`, com `<noscript>` de reserva.
  - As imagens novas foram geradas com Pillow a partir do `hero-paes.jpg` e estão registradas no `imagens.md` (F1c, F1d, F1e).
  - Lighthouse no celular (servidor local, 3 rodadas): **LCP de 2,3 s, 2,4 s e 2,4 s**, Desempenho de 94, 92 e 91, CLS 0. Uma rodada anterior isolada deu 3,9 s: a variação vem do tempo de estilo e layout simulado nesta máquina, não da rede.
- **Item 4 (texto do selo):** "Forno a lenha" virou "Desde 1998". O `selo-fermentacao.svg` foi regerado com o texto em curvas a partir da Fraunces (opsz 24, 700, SOFT 100; fontTools), com 1 casa decimal: 26 KB (eram 28 KB). `design.md` e `imagens.md` atualizados.

### Melhorias opcionais feitas
- **V3/T14:** o ramo de trigo do hero ficou menor (100x200) e foi para cima do eyebrow. Não cruza mais o H1 nem o subtítulo (conferido a 1280 e 1440).
- **M1 (variedade):** a partir de 900 px, Depoimentos passou a ter 1 citação grande em destaque (fundo café, Fraunces 600, ocupa 2 linhas) e 2 cards menores empilhados ao lado. Só CSS, sem biblioteca. O selo "Exemplo" continua em todos os cards. Contraste: creme e mel-claro sobre café ≥ 11:1, estrelas mel sobre café 6,08:1.
- **T6:** o link "Pular para o conteúdo" usa o contorno café padrão (12,6:1 sobre o cabeçalho creme). Antes era mel, com 2,08:1.
- **T7:** a transição da barra fixa só existe com `prefers-reduced-motion: no-preference`.
- **T8:** com JS, a barra fixa já começa oculta (`.js .barra-mobile:not(.barra-mobile--pronta)`). O script marca `--pronta` depois do 1º estado, então ela não desliza ao carregar. Sem JS (classe `js` ausente), a barra continua sempre visível; conferido no Edge com JS desligado. Se o `script.js` não carregar, só a barra some: ela repete um CTA que o cabeçalho já tem, então nenhum conteúdo fica escondido.
- **T5/V5/V6:** alvos de 44 px nos links do rodapé, nos links WhatsApp e Instagram do card de Contato e no "Sobre" do menu (`min-width: 44px`).
- **T12:** `icones.svg`, `icones/` (16 arquivos), `divisor-onda.svg` e `trigo-ramo.svg` não tinham nenhuma referência em HTML, CSS ou JS. Movi todos (com `git mv`) para `projetos/padaria-trigo-doce/fontes-svg/`, fora de `site/`, para guardar a fonte.
- **T10:** o `<title>` passou a ter 60 caracteres ("Padaria Trigo Doce: pães e bolos artesanais no Bairro Jardim") e a description, 141.

### Divergências do design (com motivo)
- **Hero de 768 a 1023 px em 2 colunas** (o design previa a partir de 1024 px) e **foto 16:10 no celular** (o design previa 4:5): é o que a avaliação pediu para o H1 e o CTA aparecerem na 1ª tela. O `design.md` foi atualizado.
- **Depoimentos com destaque** em vez de 3 colunas iguais (M1), também registrado no `design.md` (3.7 e 5).

### Verificação (Edge headless, playwright-core)
- 360, 768, 1280 e 1440 px: `scrollWidth` igual à largura da janela, 0 imagens quebradas, 0 erros de console, Fraunces carregada.
- Critérios do item 2 atendidos: H1 e CTA principal visíveis sem rolar a 768x1024 e a 360x800.
- 42 referências de assets, todas existem. Nenhum `../`, nenhum `!important`, tags balanceadas, um único H1.
- Lighthouse no celular: Acessibilidade, Boas práticas e SEO em 100.

### Pendências (sem mudança)
- Dados reais, fotos de equipe e depoimentos reais, domínio (`og:url`, `canonical`, `og:image` absoluto) e JSON-LD `Bakery` (T9, T11) dependem do usuário.
- Ainda não feitos (opcionais): M3 (Destaques em 2 colunas no celular), T4 (`srcset` 400w nos cards de produto) e T13 (SVGO nos logos).
