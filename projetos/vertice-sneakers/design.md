# Design — Vértice Sneakers (etapa 2)

> Entradas: `briefing.md`, `dados-negocio.md` (dados fictícios), `pesquisa.md`. Data: 18/11/2026.
> Este documento é a especificação para o `redator`, o `gerador-imagens` e o `desenvolvedor-frontend`. Não contém HTML de produção.

---

## 1. Conceito

**"Vitrine noturna editorial":** fundo quase preto, fotos de estúdio iluminadas como joias, serifa de alto contraste em tamanho grande e um único acento champanhe usado como filete, número e CTA.

**Justificativa (ligada à pesquisa):**
- O "quiet luxury" (pesquisa, resumo 1 e "Referências visuais") pede navegação mínima, muito respiro e foto grande de produto. A estética escura (Kith, SSENSE) põe o foco na silhueta do tênis.
- O tom do briefing ("curadoria", "edição limitada", "feito à mão") pede ritmo de revista: índices numerados (01, 02...), filetes finos, legendas em caixa alta espaçada. Isso substitui ícones coloridos e cards com sombra.
- O acento champanhe aparece em no máximo 10% da tela. O cobre da pesquisa foi descartado: tem só ~5,1:1 de contraste e competiria com o champanhe.
- **Gesto visual forte:** o carrossel do hero em tela cheia, com um **"índice editorial"** embaixo (abas numeradas com o nome de cada coleção e uma barra de progresso champanhe). Todo o resto da página é contido.

---

## 2. Tokens

### 2.1 Cores (contrastes calculados com a fórmula de luminância relativa da WCAG 2.x)

| Token | Hex | Uso | Contraste verificado |
|---|---|---|---|
| `--cor-fundo` | `#0E0E10` | fundo principal | referência (L ≈ 0,0045) |
| `--cor-superficie` | `#1A1A1D` | faixas alternadas, fundo das fotos de produto, cartão do formulário | — |
| `--cor-superficie-2` | `#232326` | hover de linhas do FAQ, menu móvel | — |
| `--cor-texto` | `#F2EEE6` | texto principal, títulos | **16,7:1** sobre `#0E0E10`; **15,0:1** sobre `#1A1A1D` |
| `--cor-texto-suave` | `#A8A29A` | legendas, metadados, placeholder, abas inativas | **7,6:1** sobre `#0E0E10`; **6,9:1** sobre `#1A1A1D` |
| `--cor-acento` | `#C9A96E` | CTA primário, preços, números, filetes, foco | **8,6:1** sobre `#0E0E10`; **7,8:1** sobre `#1A1A1D` |
| `--cor-acento-hover` | `#DCC08A` | hover do CTA primário e de links | **11,0:1** sobre `#0E0E10` |
| `--cor-sobre-acento` | `#0E0E10` | texto dentro do botão champanhe | **8,6:1** sobre `#C9A96E`; **11,0:1** sobre `#DCC08A` |
| `--cor-borda` | `#2E2C2A` | filetes decorativos (não informativos) | decorativo, sem exigência |
| `--cor-borda-forte` | `#777169` | borda de campos, chips e botões fantasmas (componente de interface) | **4,0:1** sobre `#0E0E10`; **3,6:1** sobre `#1A1A1D` (≥ 3:1, WCAG 1.4.11) |
| `--cor-erro` | `#F08A7E` | mensagens e borda de erro | **7,9:1** sobre `#0E0E10`; **7,1:1** sobre `#1A1A1D` |
| `--cor-osso` | `#ECE6DA` | fundo claro da seção "A boutique" (única faixa clara) | — |
| `--cor-tinta` | `#0E0E10` | texto sobre `--cor-osso` | **15,5:1** sobre `#ECE6DA` |
| `--cor-tinta-suave` | `#5C564E` | texto secundário sobre osso | **5,8:1** sobre `#ECE6DA` |
| `--cor-bronze` | `#7A5A2B` | acento (eyebrow, filetes, foco) sobre osso | **5,1:1** sobre `#ECE6DA` |

Proibido: champanhe `#C9A96E` como texto sobre osso (1,8:1, falha). Na faixa clara, o acento é sempre `--cor-bronze`.

### 2.2 Overlays sobre foto (contraste no pior caso: pixel branco puro sob o véu)

| Onde | Véu | Contraste resultante, pior caso |
|---|---|---|
| Hero, área do texto (≥768) | `#0E0E10` a **≥ 84%** atrás de todo o bloco de texto (ver gradiente em 3.2) | texto `#F2EEE6` **≈ 10,5:1**; champanhe `#C9A96E` **≈ 5,4:1** |
| Hero, área do índice (base, todas as larguras) | `#0E0E10` a **90%** nos 160px inferiores | texto **≈ 12,5:1**; texto-suave **≈ 5,7:1** |
| Hero celular (<768) | `#0E0E10` a ≥ 86% na metade inferior | texto **≈ 11,3:1**; champanhe **≈ 5,8:1** |
| Tiles de coleção | gradiente de baixo, `#0E0E10` a ≥ 85% sob o texto | texto **≈ 11,0:1**; champanhe **≈ 5,7:1** |
| CTA final | `#0E0E10` a 78% uniforme | texto **≈ 8,4:1**; o botão champanhe é sólido (8,6:1 interno) |

### 2.3 Tipografia (Google Fonts, 2 famílias)

- **Cormorant Garamond** (títulos, citações, números grandes): 500, 600 e itálico 500. Nunca abaixo de 24px (traço fino; ver pesquisa).
- **Manrope** (texto, interface, botões, preços, rótulos): 400, 500, 600.
- Link: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap`, com `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com` (crossorigin).
- Números de preço, contador e índice: `font-variant-numeric: tabular-nums lining-nums` (Manrope).

| Token | Valor | Família / peso | Uso |
|---|---|---|---|
| `--fs-display` | `clamp(2.75rem, 1.6rem + 5.2vw, 6rem)` | Cormorant 500, `line-height 1.0`, `letter-spacing -0.01em` | título do slide do hero |
| `--fs-h2` | `clamp(2.25rem, 1.5rem + 3vw, 4rem)` | Cormorant 500, lh 1.05 | títulos de seção |
| `--fs-h3` | `clamp(1.5rem, 1.3rem + 0.8vw, 2rem)` | Cormorant 600, lh 1.15 | nome de produto, coleção, passo |
| `--fs-quote` | `clamp(1.5rem, 1.2rem + 1.4vw, 2.5rem)` | Cormorant itálico 500, lh 1.25 | citação da boutique |
| `--fs-num` | `clamp(3rem, 2rem + 4vw, 5.5rem)` | Cormorant 500, lh 1 | contadores e numerais dos diferenciais |
| `--fs-lead` | `clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)` | Manrope 400, lh 1.6 | parágrafo de abertura |
| `--fs-body` | `1rem` (16px) | Manrope 400, lh 1.7 | texto corrido |
| `--fs-small` | `0.875rem` | Manrope 400/500, lh 1.5 | material, legendas, rodapé |
| `--fs-eyebrow` | `0.75rem` | Manrope 600, caixa alta, `letter-spacing 0.16em` | rótulos acima dos títulos, abas |
| `--fs-button` | `0.875rem` | Manrope 600, caixa alta, `letter-spacing 0.1em` | botões |

Medida de linha: texto corrido com `max-width: 62ch`; lead com `max-width: 52ch`.

### 2.4 Espaçamento, grid, raios, sombras, movimento

- Escala (4px base): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Padding vertical de seção: `clamp(72px, 10vw, 144px)`.
- Contêiner: `max-width: 1280px`; padding lateral `clamp(20px, 5vw, 64px)`. Seções "sangradas" (hero, faixa da loja, CTA final) ocupam 100% da largura.
- Grid: 4 colunas (<768, gutter 16px), 8 colunas (768–1023, gutter 24px), 12 colunas (≥1024, gutter 32px).
- Raios: luxo pede cantos secos. `--raio-0: 0` (fotos, tiles), `--raio-sm: 2px` (botões, campos), `--raio-pill: 999px` (chips, botões redondos de controle, fotos de depoimento).
- Sombras: quase nenhuma. `--sombra-menu: 0 24px 48px -24px rgba(0,0,0,.7)` só no menu móvel e no cabeçalho rolado.
- Movimento: `--dur-rapida: 180ms`, `--dur-media: 400ms`, `--dur-lenta: 700ms`, `--ease: cubic-bezier(.2,.7,.2,1)`. Entrada de seções: opacity 0 → 1 e translateY 12px → 0 em 500ms (IntersectionObserver, uma vez; sem JS o conteúdo já aparece visível). Com `prefers-reduced-motion: reduce`, tudo é estático (sem translate) e as transições caem para ≤ 150ms de opacidade.

### 2.5 Bloco `:root` pronto para copiar

```css
:root {
  /* cores */
  --cor-fundo: #0E0E10;
  --cor-superficie: #1A1A1D;
  --cor-superficie-2: #232326;
  --cor-texto: #F2EEE6;
  --cor-texto-suave: #A8A29A;
  --cor-acento: #C9A96E;
  --cor-acento-hover: #DCC08A;
  --cor-sobre-acento: #0E0E10;
  --cor-borda: #2E2C2A;
  --cor-borda-forte: #777169;
  --cor-erro: #F08A7E;
  --cor-osso: #ECE6DA;
  --cor-tinta: #0E0E10;
  --cor-tinta-suave: #5C564E;
  --cor-bronze: #7A5A2B;
  --veu-hero-desktop: linear-gradient(90deg, rgba(14,14,16,.90) 0%, rgba(14,14,16,.84) 45%, rgba(14,14,16,.35) 72%, rgba(14,14,16,0) 100%);
  --veu-hero-base: linear-gradient(0deg, rgba(14,14,16,.90) 0, rgba(14,14,16,.90) 160px, rgba(14,14,16,0) 320px);
  --veu-hero-celular: linear-gradient(0deg, rgba(14,14,16,.94) 0%, rgba(14,14,16,.86) 50%, rgba(14,14,16,.2) 78%, rgba(14,14,16,0) 100%);
  --veu-tile: linear-gradient(0deg, rgba(14,14,16,.88) 0%, rgba(14,14,16,.85) 28%, rgba(14,14,16,0) 65%);
  --veu-cta: rgba(14,14,16,.78);

  /* tipografia */
  --ff-titulo: "Cormorant Garamond", "Cormorant", Georgia, "Times New Roman", serif;
  --ff-texto: "Manrope", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-display: clamp(2.75rem, 1.6rem + 5.2vw, 6rem);
  --fs-h2: clamp(2.25rem, 1.5rem + 3vw, 4rem);
  --fs-h3: clamp(1.5rem, 1.3rem + 0.8vw, 2rem);
  --fs-quote: clamp(1.5rem, 1.2rem + 1.4vw, 2.5rem);
  --fs-num: clamp(3rem, 2rem + 4vw, 5.5rem);
  --fs-lead: clamp(1.0625rem, 1rem + 0.35vw, 1.25rem);
  --fs-body: 1rem;
  --fs-small: 0.875rem;
  --fs-eyebrow: 0.75rem;
  --fs-button: 0.875rem;
  --ls-caps: 0.16em;

  /* espaço e layout */
  --esp-1: 4px; --esp-2: 8px; --esp-3: 12px; --esp-4: 16px; --esp-5: 24px;
  --esp-6: 32px; --esp-7: 48px; --esp-8: 64px; --esp-9: 96px; --esp-10: 128px;
  --secao-py: clamp(72px, 10vw, 144px);
  --container: 1280px;
  --gutter-x: clamp(20px, 5vw, 64px);
  --header-h: 64px; /* 76px a partir de 1024px */

  /* forma */
  --raio-0: 0;
  --raio-sm: 2px;
  --raio-pill: 999px;
  --sombra-menu: 0 24px 48px -24px rgba(0,0,0,.7);

  /* foco */
  --foco: 2px solid var(--cor-acento);
  --foco-offset: 3px;

  /* movimento */
  --dur-rapida: 180ms;
  --dur-media: 400ms;
  --dur-lenta: 700ms;
  --ease: cubic-bezier(.2,.7,.2,1);
  --carrossel-intervalo: 7000ms;
}
@media (min-width: 1024px) { :root { --header-h: 76px; } }
html { scroll-padding-top: calc(var(--header-h) + 16px); }
```

---

## 3. Estrutura da página

Landmarks: `header`, `nav`, `main#conteudo`, `footer`. Cada `section` tem `aria-labelledby` apontando para seu título. Primeiro elemento focável: link "Pular para o conteúdo" (oculto até o foco; com foco aparece no topo esquerdo, fundo champanhe, texto `#0E0E10`, padding 12px 16px).

**Links do WhatsApp** (número fictício de `dados-negocio.md`): sempre `target="_blank" rel="noopener"` e texto acessível terminado em "(abre o WhatsApp em nova aba)" via `.sr-only`. O `href` final existe no HTML (funciona sem JS).

| ID | Onde | Mensagem | URL |
|---|---|---|---|
| `wa-geral` | menu móvel, barra fixa, CTA final, rodapé, localização, slide 4, fallback do formulário | "Olá! Vim pelo site da Vértice e gostaria de agendar um atendimento." | `https://wa.me/5500900000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20V%C3%A9rtice%20e%20gostaria%20de%20agendar%20um%20atendimento.` |
| `wa-produto` | botão "Reservar" de cada produto | "Olá! Vim pelo site da Vértice e gostaria de reservar o [NOME DO PRODUTO]." | URL codificada com `encodeURIComponent`, gravada pronta no `href` de cada card |
| `wa-form` | formulário de agendamento (montado por JS) | ver 3.8 | — |

### 3.0 Escolha do hero

**Hero escolhido: carrossel grande em tela cheia (4 slides de foto), com véu lateral escuro, texto à esquerda centralizado na vertical e um "índice editorial" de abas numeradas na base.**

- **Por quê:** é **requisito do briefing** (seção 2) e serve ao propósito: a Vértice tem quatro frentes igualmente fortes (couro artesanal, edições limitadas, performance premium e o atendimento com hora marcada), cada uma com CTA próprio. A foto de estúdio em tela cheia faz o papel da vitrine de uma boutique.
- **Projetos anteriores:** `padaria-trigo-doce` (o mais recente) usou split assimétrico 5fr/6fr com foto 4:5; `rosa-bordo` usou carrossel em tela cheia com texto embaixo à esquerda sobre véu bordô; `futebol-kids` usou vídeo de fundo. O carrossel repete o tipo da `rosa-bordo` **por exigência do briefing**; para não repetir a composição, aqui o texto fica no meio da altura (não colado embaixo), o véu é lateral e os indicadores são **abas nomeadas com barra de progresso** (variante "tabbed" do APG), não pontos.
- **Descartados:** vídeo de fundo (o briefing pede fotos e carrossel; vídeo de tênis premium sem logo é raro nos bancos), foto única em tela cheia (não atende ao mínimo de 4 imagens), mosaico (fica com a seção Coleções), split (usado na padaria).

### 3.1 Cabeçalho (`header`, fixo)
- **Conteúdo:** logo SVG `logo-vertice.svg` (link para `#inicio`, `alt="Vértice Sneakers, início"`), nav com âncoras: Coleções (`#colecoes`), Produtos (`#produtos`), A boutique (`#boutique`), Experiência (`#experiencia`), Dúvidas (`#duvidas`), Visite (`#visite`), e botão fantasma pequeno "Agendar atendimento" (âncora `#agendar`).
- **Estado sobre o hero:** fundo transparente com `linear-gradient(180deg, rgba(14,14,16,.7), rgba(14,14,16,0))` (garante ≥ 7:1 dos links claros no pior caso).
- **Estado rolado (>24px):** `rgba(14,14,16,.92)` + `backdrop-filter: blur(10px)` (progressivo), filete inferior 1px `--cor-borda`, `--sombra-menu`. Transição de 180ms.
- **Desktop (≥1024):** altura 76px. Logo 28px de altura à esquerda; links Manrope 500 14px, `letter-spacing .04em`, cor `--cor-texto`, gap 32px; hover/ativo (seção visível): cor champanhe e filete de 1px a 6px abaixo. Botão à direita.
- **Celular (<1024):** altura 64px. Logo + botão hambúrguer 44x44 (`aria-expanded`, `aria-controls="menu"`, rótulo "Abrir menu"/"Fechar menu"; ícone de 2 linhas finas que vira X). O menu abre em painel de tela cheia `--cor-superficie-2`, links em Cormorant 600 32px empilhados (alvo ≥ 56px), filete entre itens, e no fim o botão primário "Agendar pelo WhatsApp" (`wa-geral`) e o endereço curto. Fecha com Esc, clique em link ou no X; foco preso no painel enquanto aberto; ao fechar, o foco volta ao hambúrguer. `body` sem rolagem com o menu aberto.

### 3.2 Hero carrossel (`#inicio`)

**Objetivo:** encantar e direcionar para coleção ou agendamento. As coleções e o agendamento se repetem nas seções seguintes (NN/g: muitos só veem o slide 1).

#### Slides (o redator escreve os textos finais; aqui ficam tema, CTA e foto)

| # | Aba (rótulo) | Título (≤ 6 palavras) | Lead (≤ 18 palavras) | CTA (primário) | Destino | Foto |
|---|---|---|---|---|---|---|
| 1 | Couro artesanal | tema: couro nobre, feito à mão | material e acabamento | "Descobrir a coleção" | `#produtos` com filtro "Couro artesanal" | `hero-01-couro` |
| 2 | Edições limitadas | tema: pares raros, numerados | curadoria e autenticidade | "Explorar edições limitadas" | `#produtos` com filtro "Edições limitadas" | `hero-02-edicoes` |
| 3 | Performance premium | tema: leveza e tecnologia com acabamento de luxo | conforto e material técnico | "Conhecer a linha" | `#produtos` com filtro "Performance premium" | `hero-03-performance` |
| 4 | Hora marcada | tema: a boutique reservada para você | sala privativa, atendimento sem pressa | "Agendar atendimento" | `#agendar` | `hero-04-boutique` |

- Cada slide: eyebrow (o rótulo da aba, caixa alta champanhe, precedido de um filete de 32px), título, lead (`--fs-lead`, `--cor-texto`), CTA primário. Só o slide 4 tem também um link de texto secundário "Ou fale pelo WhatsApp" (`wa-geral`).
- Os CTAs que levam a `#produtos` usam `href="#produtos"` e `data-filtro="couro|edicoes|performance"`; o JS ativa o chip correspondente. Sem JS, só rolam até a grade.
- Títulos: o do **slide 1 é o `h1`** da página; os dos slides 2 a 4 são `h2` com o mesmo estilo visual (classe compartilhada).

#### Layout
- **Altura:** desktop `height: 100svh; min-height: 620px; max-height: 1080px`. Celular: `height: 100svh; min-height: 600px; max-height: 900px`. Fallback `vh` antes do `svh`. As fotos preenchem com `object-fit: cover` e `object-position` definido por foto (padrão `70% 50%` no desktop, para o tênis ficar à direita, fora do texto).
- **Desktop (≥1024):** véus `--veu-hero-desktop` (lateral) + `--veu-hero-base` (base) sobrepostos à foto, em `::before`/`::after` de cada slide. Bloco de texto no contêiner, colunas 1 a 6 de 12 (`max-width: 34rem`), centralizado na vertical do espaço entre o cabeçalho e o índice. Para 1024–1279px, o gradiente mantém ≥ .84 até 55% da largura (stop ajustado por media query).
- **Tablet (768–1023):** igual ao desktop, mas o texto vai até a coluna 6 de 8 e o véu lateral mantém ≥ .84 até 65%.
- **Celular (<768):** foto vertical (recorte 9:16) com o tênis no terço superior; `--veu-hero-celular`; texto ancorado logo acima do índice, alinhado à esquerda, CTA com 100% de largura. Abaixo de 380px de largura o lead pode ser ocultado se não couber; título e CTA sempre ficam.

#### Índice editorial (controles), dentro da área do carrossel, na base
- **Desktop/tablet (≥768):** uma linha no contêiner, a 32px da base. À esquerda, o grupo de controles: **[Pausar] [Anterior] [Próximo]** (botões redondos 44x44, borda 1px `--cor-borda-forte`, fundo `rgba(14,14,16,.6)`, ícone 18px `--cor-texto`) e o contador **"01 / 04"** (Manrope 600 14px tabular; "01" em `--cor-texto`, "/ 04" em `--cor-texto-suave`; `aria-hidden="true"`, pois o rótulo do slide já informa a posição). À direita, ocupando o restante, as **4 abas** em colunas iguais: cada aba tem um trilho de 2px no topo (`rgba(242,238,230,.24)`), sobre o qual a aba ativa mostra a barra de progresso champanhe (`transform: scaleX(0→1)` em 7s, `transform-origin: left`; parada, a barra fica cheia); abaixo, "01" (Manrope 600 12px champanhe) e o rótulo (Manrope 500 14px). Aba inativa: rótulo `--cor-texto-suave`; aba ativa: `--cor-texto` + trilho preenchido. Altura mínima da aba: 56px; a área clicável cobre número, rótulo e trilho.
- **Celular (<768):** duas linhas. Linha 1: [Pausar] [Anterior] [Próximo] à esquerda e contador "01 / 04" à direita. Linha 2: 4 abas em colunas iguais, cada uma com 44px de altura, mostrando só o trilho de 3px e o número; o rótulo fica em `.sr-only` (nome acessível completo, ex.: "Couro artesanal").
- Os controles **estão sempre visíveis** (não aparecem no hover), para evitar CLS.

#### Comportamento e acessibilidade (padrão APG Carousel, variante tabbed)
- **Estrutura:** `section` com `aria-roledescription="carrossel"` e `aria-label="Destaques"` (sem a palavra "carrossel" no nome). Ordem no DOM: botão Pausar → Anterior → Próximo → `tablist` (`aria-label="Escolha o destaque"`) → contêiner dos slides. O botão pausar é o **primeiro foco** dentro do carrossel. O contêiner dos slides fica acima visualmente (CSS grid/posicionamento), sem alterar a ordem do DOM.
- **Slides:** `role="tabpanel"`, `aria-roledescription="slide"`, `aria-label="1 de 4"` etc., ligados às abas por `aria-controls`. Abas com `role="tab"`, `aria-selected`, tabindex itinerante (só a ativa tem `tabindex="0"`).
- **Slides inativos:** `inert` + `visibility: hidden` após o fade (transição de `visibility` com atraso igual à duração), para que o CTA de slides ocultos não receba foco.
- **Wrapper dos slides:** `aria-atomic="false"`; `aria-live="off"` enquanto gira sozinho, `aria-live="polite"` quando parado.
- **Botão Pausar/Retomar:** `<button>` nativo, sem `aria-pressed`; o rótulo descreve a próxima ação: "Pausar apresentação" (ícone ‖) / "Retomar apresentação" (ícone ▶). A pausa feita pelo usuário vale até ele retomar.
- **Autoplay:** intervalo de **7s**, loop infinito (após o 4 vem o 1). Liga só se: JS ativo, **largura ≥ 768px** e sem `prefers-reduced-motion: reduce`. No celular (<768) começa parado (a NN/g desaconselha autoplay no celular), com o botão mostrando "Retomar apresentação", e o usuário pode ligar. Com reduced-motion, começa parado em qualquer largura e a barra de progresso não anima.
- **Pausa automática:** para enquanto o mouse está sobre o carrossel (retoma ao sair, se o usuário não pausou nem focou); **para quando qualquer elemento do carrossel recebe foco de teclado e não volta sozinho** (o botão passa a "Retomar apresentação"). Também para com a aba do navegador oculta (`visibilitychange`) e retoma ao voltar, se estava girando.
- **Teclado:** nas abas, ← → movem e ativam o slide anterior/próximo (com volta), Home/End vão ao primeiro/último. Anterior/Próximo: Enter/Espaço, **sem mover o foco**. Tab sai do tablist para o CTA do slide ativo.
- **Toque:** swipe com Pointer Events no contêiner dos slides (`touch-action: pan-y`); troca se o deslocamento horizontal for > 50px e maior que o vertical. Um arraste não dispara o clique no CTA. O swipe pausa o autoplay.
- **Transição:** crossfade de opacidade 700ms (`--ease`) entre slides empilhados (`position:absolute; inset:0`), e o texto do slide que entra faz opacity + translateY 12px → 0 em 500ms com 150ms de atraso. **Sem zoom nem pan (Ken Burns).** Reduced-motion: fade de 150ms, sem translate.
- **Sem JS:** só o slide 1 é exibido (os slides 2 a 4 vêm com `hidden`, removido pelo JS), e o grupo de controles e as abas ficam ocultos (o JS os revela). O slide 1 funciona sozinho.
- **Desempenho:** todos os slides estão no HTML (nada injetado por JS). Slide 1: `<picture>` com `<source media="(max-width: 767px)">` para o recorte 9:16 e `srcset` WebP/JPEG; `<img>` com `fetchpriority="high"`, **sem** `loading="lazy"`, `decoding="async"`, `width`/`height` explícitos. `<link rel="preload" as="image" fetchpriority="high" imagesrcset=... media=...>` para cada recorte do slide 1. Slides 2–4: `loading="lazy"` e as mesmas dimensões intrínsecas. Ao exibir o slide N, o JS pode pré-carregar o N+1 (trocar `loading` para `eager`). Animar só `opacity`/`transform`. Meta: slide 1 ≤ 250 KB (WebP 1920) e ≤ 120 KB (WebP 900x1600).
- `sizes="100vw"`. `alt` descritivo e curto para cada foto (o redator escreve), sem nome de marca.

### 3.3 Coleções (`#colecoes`, fundo `--cor-fundo`) — mosaico
- **Objetivo:** navegação por categoria (repete o conteúdo do hero, NN/g).
- **Conteúdo:** eyebrow "Coleções", H2, lead curto; 4 tiles: Couro artesanal, Performance premium, Edições limitadas, Clássicos atemporais. Cada tile: foto, nome (Cormorant 600 `--fs-h3`, `h3`), uma linha de descrição (`--fs-small`), "Explorar →" (eyebrow champanhe). O tile inteiro é um link (um só foco por tile) para `#produtos` com `data-filtro`; o JS ativa o chip correspondente e rola até a grade.
- **Layout ≥1024:** grid 12 colunas, 2 linhas de 280px: tile 1 (Couro) nas colunas 1–6 ocupando as 2 linhas (retrato); tile 2 (Performance) colunas 7–12, linha 1; tiles 3 e 4 dividem as colunas 7–12 da linha 2 (3 colunas cada). Gap 16px. Cabeçalho da seção acima: H2 nas colunas 1–6 e lead nas colunas 8–12, alinhados pela base.
- **768–1023:** 2 colunas; tile 1 ocupa as 2 colunas (16:9), tiles 2 e 3 lado a lado (4:3), tile 4 em largura total (16:9).
- **<768:** coluna única, tiles em 4:3, gap 12px.
- **Hover/foco:** foto `scale(1.04)` em 700ms; seta de "Explorar →" desloca 4px; o foco usa o anel padrão no tile inteiro (offset 3px). Reduced-motion: sem scale.
- Véu `--veu-tile`; texto sempre na faixa inferior coberta pelo véu.

### 3.4 Produtos em destaque (`#produtos`, fundo `--cor-fundo`) — grade com filtro
- **Conteúdo:** eyebrow "Curadoria da estação", H2, nota "Preços de exemplo, sujeitos à disponibilidade de numeração." (`--fs-small`, texto-suave). Chips de filtro: Todos, Couro artesanal, Performance premium, Edições limitadas, Clássicos atemporais (`<button aria-pressed>` dentro de um grupo com `aria-label="Filtrar por coleção"`; sem JS, os chips ficam ocultos e tudo aparece). Uma região `aria-live="polite"` `.sr-only` anuncia a contagem ("8 modelos", "2 modelos").
- **8 produtos** (nomes fictícios, sem marcas; o redator define nome, material e preço entre R$ 1.200 e R$ 4.900), 2 por coleção, fotos `produto-01` a `produto-08`.
- **Card (sem caixa):** foto 4:5 sobre `--cor-superficie` (raio 0); selo opcional no canto superior esquerdo ("Edição limitada", "Feito à mão": eyebrow champanhe sobre `rgba(14,14,16,.85)`, padding 6px 10px; ≥ 7:1). Abaixo: coleção (eyebrow texto-suave), nome (Cormorant 600 `--fs-h3`, `h3`), material (`--fs-small` texto-suave), linha com preço (Manrope 500 18px champanhe, ex.: "R$ 2.890") e o link "Reservar" (botão fantasma pequeno, 44px de altura, `wa-produto`, nome acessível "Reservar [nome] pelo WhatsApp (abre em nova aba)").
- **Layout:** 2 colunas (<768, gap 16px horizontal e 32px vertical; o "Reservar" vira link de texto com seta para caber, ainda com 44px de altura), 3 colunas (768–1279), 4 colunas (≥1280). Gap 24px horizontal e 48px vertical.
- **Hover:** foto `scale(1.03)` 600ms; reduced-motion: sem scale. Imagens com `loading="lazy"` e `width`/`height`.
- Ao filtrar: cards fora do filtro recebem `hidden`; fade de 200ms nos que entram (sem reflow animado).

### 3.5 Diferenciais (`#diferenciais`, fundo `--cor-superficie`) — lista editorial numerada
- **Conteúdo:** H2 curto e visível, e 4 itens: Curadoria, Autenticidade garantida, Atendimento personalizado, Cuidado pós-venda / higienização.
- **Layout ≥1024:** faixa de 4 colunas separadas por filetes verticais de 1px `--cor-borda`; cada item: numeral "01"–"04" em Cormorant `--fs-num` champanhe, ícone de linha 28px (`aria-hidden`) ao lado do numeral, título Manrope 600 18px (`h3`), texto `--fs-body` texto-suave (máx. 32 palavras). Sem cards, sem fundo extra.
- **768–1023:** 2x2 com filetes horizontais e verticais. **<768:** lista vertical com filete horizontal entre itens; numeral à esquerda (coluna de 64px) e texto à direita.

### 3.6 A boutique / Sobre (`#boutique`, fundo `--cor-osso`) — a única faixa clara
- **Objetivo:** história, curadoria, materiais nobres; quebra o ritmo escuro.
- **Conteúdo:** eyebrow bronze "A boutique", H2 (`--cor-tinta`), 2 parágrafos (texto corrido em `--cor-tinta`; legendas e textos secundários em `--cor-tinta-suave`), uma citação em destaque (Cormorant itálico `--fs-quote`, `--cor-tinta`, filete bronze de 48px acima) e 3 contadores (ex.: anos de boutique, pares autenticados, horas de cuidado pós-venda; números fictícios definidos pelo redator) em Cormorant `--fs-num` cor `--cor-tinta`, com legenda eyebrow `--cor-tinta-suave`.
- **Foto:** `sobre-artesao` (artesão costurando couro).
- **Layout ≥1024:** foto 4:5 nas colunas 7–12 **sangrando até a borda direita da tela** (sai do contêiner), altura ~640px; texto nas colunas 1–6. Ordem no texto: parágrafos → citação → contadores em linha, separados por filetes verticais bronze a 30% (decorativos).
- **<1024:** foto em largura total (sangrada nos dois lados), recorte 4:3, no topo; texto abaixo; contadores em 3 colunas (≥480) ou empilhados (<480).
- Foco nesta seção: anel `2px solid var(--cor-bronze)` (5,1:1 sobre osso). Logo e botões que aparecerem aqui usam as variantes escuras (ver seção 4).
- Contadores estáticos (sem animação de contagem).

### 3.7 Faixa de ambiente (decorativa, entre Sobre e Experiência)
- Foto `faixa-loja` em largura total, 21:9 (≥768) e 4:3 (<768) via `<picture>`, sem texto e com `alt=""` (decorativa). `loading="lazy"`. Sem parallax.

### 3.8 Experiência com hora marcada (`#experiencia`, fundo `--cor-fundo`) — linha do tempo + formulário
- **Conteúdo:** eyebrow "Experiência", H2, lead; **4 passos** (ex.: 1 Agende, 2 Receba uma pré-seleção, 3 Experimente na sala privativa, 4 Leve com cuidado pós-venda; texto final do redator), em `<ol>`.
- **Linha do tempo:** vertical, com uma linha de 1px champanhe a 40% ligando círculos de 40px (borda 1px champanhe, número Manrope 600 14px champanhe dentro). Título do passo Cormorant 600 `--fs-h3` (`h3`), texto `--fs-body` texto-suave. Gap de 40px entre passos.
- **Formulário de agendamento (`#agendar`, `aria-labelledby` no título "Agende seu atendimento"):** cartão `--cor-superficie`, padding 32px (24px no celular), filete superior de 2px champanhe. Campos:
  1. Nome (obrigatório, `autocomplete="name"`)
  2. Coleção de interesse (select: as 4 coleções + "Ainda não sei")
  3. Numeração (select 34 a 45 + "Não sei")
  4. Dia preferido (select: Segunda a Sábado; domingo fechado)
  5. Período (radios em linha: Manhã, Tarde, Fim de tarde, em `fieldset` com `legend`)
  - Botão primário de largura total "Enviar pelo WhatsApp" (ícone WhatsApp 18px). O JS valida (só Nome é obrigatório), monta a mensagem ("Olá! Vim pelo site da Vértice e gostaria de agendar um atendimento. Nome: X. Interesse: Y. Numeração: Z. Preferência: dia, período.", omitindo campos vazios) e abre `https://wa.me/5500900000000?text=...` em nova aba.
  - Abaixo: `--fs-small` texto-suave "Seus dados vão só para a conversa no WhatsApp; nada fica salvo no site." e link "Prefere ligar? (00) 3000-0000" (`tel:+550030000000`).
  - **Sem JS:** o formulário vem com `hidden` (removido pelo JS) e, no lugar, aparece um botão primário "Agendar pelo WhatsApp" (`wa-geral`), que o JS oculta quando o formulário é exibido.
- **Layout ≥1024:** linha do tempo nas colunas 1–6; formulário nas colunas 8–12, `position: sticky; top: calc(var(--header-h) + 32px)`. **<1024:** linha do tempo e depois o formulário, em largura total.

### 3.9 Depoimentos (`#depoimentos`, fundo `--cor-superficie`) — 3 citações escalonadas
- **Conteúdo:** eyebrow "Clientes", H2, e aviso visível em `--fs-small` texto-suave: "Depoimentos ilustrativos, para demonstração." Três depoimentos: citação em Cormorant itálico 500, `clamp(1.25rem, 1.1rem + .6vw, 1.625rem)` (≥ 20px; aceitável porque o itálico 500 é mais encorpado, mas não descer disso), aspas decorativas "“" em Cormorant 96px champanhe (`aria-hidden`), foto redonda 56px (`depoimento-01..03`), nome (Manrope 600 16px) e contexto (`--fs-small`, ex.: "Colecionador, cliente desde 2021").
- Marcação: `figure` > `blockquote` + `figcaption`.
- **Layout ≥1024:** 3 colunas, a do meio deslocada 64px para baixo (ritmo escalonado), filete superior de 1px `--cor-borda` em cada. **768–1023:** 2 + 1 (a terceira centralizada, 50% da largura). **<768:** empilhadas. **Sem carrossel** (o hero já é um).

### 3.10 Perguntas frequentes (`#duvidas`, fundo `--cor-fundo`) — acordeão em 2 colunas
- **Conteúdo:** coluna esquerda com eyebrow "Dúvidas", H2, texto curto e link "Fale com um consultor" (`wa-geral`); na direita, 6 a 8 perguntas (trocas, autenticidade, numeração, envio, higienização, pagamento/parcelamento, reserva).
- **Componente:** `<details>`/`<summary>` nativo. Summary: Manrope 500 18px `--cor-texto`, padding 24px 0, filete inferior 1px `--cor-borda`, ícone "+" de 16px champanhe à direita que gira 45° (vira ×) quando aberto (sem giro com reduced-motion). Hover: fundo `--cor-superficie-2` em toda a linha (padding lateral 16px). Resposta: `--fs-body` texto-suave, `max-width: 62ch`, padding-bottom 24px.
- **Layout ≥1024:** coluna esquerda (1–4) sticky; lista (6–12). **<1024:** empilhado.

### 3.11 Visite a boutique (`#visite`, fundo `--cor-superficie`) — endereço e horários, sem mapa
- **Conteúdo:** eyebrow "Visite", H2; `<address>` com o endereço de `dados-negocio.md`; tabela de horários (Seg a Sex 10h–20h, Sáb 10h–18h, Dom fechado; nota "Atendimento com hora marcada todos os dias úteis"); telefone, WhatsApp e e-mail; botões: primário "Agendar atendimento" (`#agendar`) e fantasma "Abrir no Google Maps" (`https://www.google.com/maps/search/?api=1&query=` + endereço codificado, nova aba, com aviso acessível). Sem iframe (não há coordenadas).
- **Foto:** `visite-interior` 4:3 (interior diferente do hero 4 e da faixa).
- **Layout ≥1024:** texto (1–5) e foto (7–12). Tabela: dias em texto-suave à esquerda, horas em `--cor-texto` tabular à direita, filetes de 1px entre linhas. Opcional: o dia atual em champanhe via JS. **<1024:** foto em cima (largura do contêiner), texto embaixo.

### 3.12 CTA final (`#agende`, sangrado)
- Foto `cta-fundo` em largura total, véu `--veu-cta` (`#0E0E10` a 78%, uniforme). Conteúdo centralizado, `max-width: 40rem`: eyebrow champanhe, H2 (`--fs-h2`), uma linha de apoio, botão primário "Agendar pelo WhatsApp" (`wa-geral`) e link de texto "Ou visite a boutique" (`#visite`). Padding vertical `clamp(96px, 14vw, 192px)`. Foto com `loading="lazy"` em `<img>` posicionado atrás (não em CSS), `alt=""`.

### 3.13 Rodapé (`footer`, fundo `--cor-fundo`, filete superior `--cor-borda`)
- **≥1024:** 4 colunas: (1) logo + frase curta; (2) navegação; (3) contato (endereço curto, telefone, WhatsApp, e-mail); (4) redes (Instagram, ícone 20px dentro de alvo 44x44, `aria-label="Instagram da Vértice (abre em nova aba)"`) e horário resumido. **480–1023:** 2 colunas; **<480:** 1 coluna.
- Linha inferior: "© 2026 Vértice Sneakers" + **aviso: "Site de demonstração. Marca, endereço, contatos, produtos e depoimentos são fictícios."** + créditos das fotos (lista curta de autores e bancos, conforme `imagens.md`). `--fs-small` texto-suave.

### 3.14 Barra fixa no celular
- **<768**: aparece depois que o hero sai da tela (IntersectionObserver) e some quando o CTA final ou o rodapé entram. Barra inferior `rgba(14,14,16,.95)` + blur, filete superior, padding 12px + `env(safe-area-inset-bottom)`, botão primário de largura total "Agendar pelo WhatsApp" (`wa-geral`), 48px de altura. Aparece/some com translateY (sem animação com reduced-motion). Definir `scroll-padding-bottom` equivalente à altura da barra.

### Ritmo da página (verificação de variedade)
Tela cheia (carrossel) → mosaico → grade com filtro → faixa numerada em superfície → seção clara com foto sangrada e contadores → faixa de foto → linha do tempo + formulário → citações escalonadas → acordeão em 2 colunas → endereço + foto → CTA sangrado. Nenhuma sequência "título + 3 cards" nem zigue-zague repetido.

---

## 4. Componentes e estados

Foco padrão (todos os interativos): `outline: 2px solid var(--cor-acento); outline-offset: 3px` com `:focus-visible`. Na seção osso: `--cor-bronze`. Nunca remover o outline sem substituto.

| Componente | Normal | Hover | Foco | Ativo / selecionado | Desabilitado |
|---|---|---|---|---|---|
| **Botão primário** | fundo `--cor-acento`, texto `--cor-sobre-acento` (8,6:1), Manrope 600 `--fs-button` caixa alta, altura 52px (44px no cabeçalho), padding 0 28px, raio 2px, seta 16px opcional à direita | fundo `--cor-acento-hover` (texto 11,0:1), seta desloca 4px | anel padrão | `transform: translateY(1px)` | `aria-disabled="true"`, fundo `#3A3834`, texto `#8C867E`, cursor `not-allowed` (isento de contraste) |
| **Botão fantasma** | transparente, borda 1px `--cor-borda-forte` (4,0:1), texto `--cor-texto` | borda `--cor-acento`, fundo `rgba(201,169,110,.10)` | anel padrão | translateY(1px) | borda `#3A3834`, texto `#6B665F` |
| **Botão primário na faixa osso** | fundo `--cor-tinta`, texto `--cor-texto` (16,7:1) | fundo `#2A2826` | anel bronze | translateY(1px) | — |
| **Link de texto** | `--cor-acento`, sublinhado 1px com offset 5px | `--cor-acento-hover`, sublinhado 2px | anel padrão | — | — |
| **Controle do carrossel** (pausar, setas) | círculo 44x44, borda 1px `--cor-borda-forte`, fundo `rgba(14,14,16,.6)`, ícone 18px `--cor-texto` | borda e ícone `--cor-acento` | anel padrão (offset 3px) | escala .96 | — (o carrossel faz loop; as setas nunca desabilitam) |
| **Aba do índice** | trilho 2px claro a 24%, número champanhe, rótulo texto-suave | rótulo `--cor-texto`, trilho a 48% | anel padrão envolvendo a aba | `aria-selected="true"`: rótulo `--cor-texto`, trilho champanhe (progresso) | — |
| **Chip de filtro** | altura 44px, raio pill, borda 1px `--cor-borda-forte`, texto `--cor-texto` Manrope 500 14px, padding 0 20px | borda `--cor-acento` | anel padrão | `aria-pressed="true"`: fundo `--cor-acento`, texto `--cor-sobre-acento` (8,6:1), ícone ✓ 14px | — |
| **Campo (input/select)** | altura 52px, fundo `--cor-fundo` (dentro do cartão superfície), borda 1px `--cor-borda-forte`, raio 2px, texto `--cor-texto` 16px (evita zoom no iOS), rótulo acima Manrope 500 14px `--cor-texto`, placeholder texto-suave (7,6:1) | borda `--cor-texto-suave` | borda `--cor-acento` + anel padrão | — | fundo `--cor-superficie-2`, texto `#6B665F` |
| **Campo com erro** | borda `--cor-erro`, `aria-invalid="true"`, mensagem abaixo em `--cor-erro` 14px com ícone "!" e `aria-describedby`; ao enviar, o foco vai ao primeiro campo inválido | — | anel padrão | — | — |
| **Radio** | círculo 20px com borda `--cor-borda-forte`, rótulo clicável, linha de 44px de altura | borda champanhe | anel padrão no círculo | marcado: ponto interno de 10px champanhe | — |
| **Card de produto** | sem caixa; foto + textos | foto scale 1.03 | foco só no "Reservar" | — | — |
| **Tile de coleção** | foto + véu + texto | foto scale 1.04, seta move 4px | anel padrão no tile | — | — |
| **Item do FAQ** | linha com filete | fundo `--cor-superficie-2` | anel padrão no summary | aberto: ícone ×, pergunta em champanhe | — |
| **Link do menu** | `--cor-texto` | champanhe + filete | anel padrão | seção atual: champanhe, `aria-current="true"` | — |

Ícones: SVG inline de linha, traço 1.5px, `currentColor`, `aria-hidden="true"` quando acompanham texto. Conjunto: seta →, seta ←, pausa, play, mais (+), check, WhatsApp, Instagram, telefone, e-mail, pino, relógio, e 4 ícones dos diferenciais (lupa = curadoria, selo com check = autenticidade, calendário = atendimento, gota com brilho = cuidado).

---

## 5. Breakpoints e comportamento mobile

| Faixa | Mudanças principais |
|---|---|
| **< 480px** | contêiner 20px; hero com lead oculto abaixo de 380px; contadores empilhados; rodapé em 1 coluna; produtos em 2 colunas com "Reservar" em link de texto |
| **480–767px** | produtos em 2 colunas; contadores em 3 colunas; tiles de coleção em 4:3 empilhados; barra fixa de WhatsApp ativa; índice do hero em 2 linhas, sem autoplay inicial |
| **768–1023px** | grid de 8 colunas; autoplay ligado; índice em 1 linha com rótulos; produtos em 3 colunas; diferenciais 2x2; menu ainda em hambúrguer |
| **1024–1279px** | grid de 12 colunas; nav completa; cabeçalho 76px; mosaico completo; formulário sticky; foto da boutique sangrada |
| **≥ 1280px** | produtos em 4 colunas; contêiner limitado a 1280px |

Mobile first: CSS base é o celular; `min-width` para ampliar. Sem rolagem horizontal em 320px. Alvos de toque ≥ 44x44 em todos os controles. `font-size` dos campos ≥ 16px. Usar `svh` com fallback em `vh`.

---

## 6. Pedidos de imagem (para o `gerador-imagens`, que registra tudo em `imagens.md`)

Regras gerais:
- Fotos reais de **Unsplash** (licença grátis; **não usar Unsplash+**) ou **Pexels**, com autor, URL e licença registrados em `imagens.md`. Candidatas em `pesquisa.md` ("Fotos candidatas"); abrir cada uma e conferir.
- **Sem logotipos de marca visíveis em destaque** (swoosh, três listras, monogramas, etiquetas legíveis). Se houver, recortar o enquadramento ou trocar a foto. Nomes de produtos são fictícios.
- Paleta: fundos escuros ou neutros, iluminação de estúdio/low-key; se necessário, dessaturar levemente ou escurecer o fundo para harmonizar, sem alterar o produto de forma enganosa.
- Entregar **JPEG (qualidade ~80) + WebP (~75)** em cada largura listada, em `site/assets/fotos/` (depoimentos em `site/assets/depoimentos/`, SVGs em `site/assets/`). Nomes em kebab-case, sem acentos (ex.: `hero-01-couro-1920.webp`, `hero-01-couro-900x1600.jpg`).
- As 4 fotos do hero devem ser **distintas entre si** (tênis, ângulos e composições diferentes) e não podem ser reaproveitadas em produtos, coleções ou outras seções.
- Informar ao desenvolvedor o `object-position` ideal de cada foto do hero.

### 6.1 Hero (4 fotos, cada uma em dois recortes com o mesmo produto)

| Arquivo-base | Recorte desktop (16:9) | Recorte celular (9:16) | Conteúdo / espaço livre | Candidatas (pesquisa) |
|---|---|---|---|---|
| `hero-01-couro` | 1920x1080, 1280x720 | 900x1600, 600x1067 | tênis de couro branco/creme com detalhe dourado, luz lateral dramática; **produto no terço direito**, metade esquerda escura (texto) | H1 (Jordan Hou, Unsplash) |
| `hero-02-edicoes` | 1920x1080, 1280x720 | 900x1600, 600x1067 | par de design marcante em estúdio escuro (preto, cinza, marrom); produto à direita | H2/H3 (Ashis Sarker, Pexels), conferir logos |
| `hero-03-performance` | 1920x1080, 1280x720 | 900x1600, 600x1067 | tênis esportivo branco equilibrado na ponta ou em ângulo dinâmico, fundo preto | H6, H7 ou H8 |
| `hero-04-boutique` | 1920x1080, 1280x720 | 900x1600, 600x1067 | tênis brancos sobre pedestais, interior minimalista e "moody" (ambiente de boutique) | Unsplash `869UYsCv7fg` (atelierbyvineeth) |

- No recorte 9:16, o produto fica no **terço superior/médio** (a metade inferior recebe o texto).
- Peso: slide 1 ≤ 250 KB (WebP 1920) e ≤ 120 KB (WebP 900x1600); demais ≤ 300 KB / 150 KB.
- Termos de busca: `sneaker dark background studio`, `white leather sneaker dramatic light`, `sneaker low key photography`, `sneaker on pedestal minimal`.

### 6.2 Coleções (4)

| Arquivo | Tamanhos | Conteúdo |
|---|---|---|
| `colecao-couro` | 1200x1500 e 800x1000 (4:5) | tênis de couro marrom/branco ou detalhe do couro; assunto central (o tile vira 16:9 e 4:3 em outras larguras) |
| `colecao-performance` | 1600x900 e 800x450 (16:9) | tênis técnico em superfície escura |
| `colecao-edicoes` | 1200x900 e 800x600 (4:3) | low-top estampado/raro sobre superfície escura |
| `colecao-classicos` | 1200x900 e 800x600 (4:3) | tênis branco minimalista clássico, luz suave |

Todas com o assunto centralizado e a faixa inferior sem detalhe importante (recebe o título). Peso ≤ 160 KB (WebP maior).

### 6.3 Produtos (8, uniformes)

| Arquivo | Tamanhos | Coleção |
|---|---|---|
| `produto-01` | 1000x1250 e 600x750 (4:5) | Couro artesanal |
| `produto-02` | idem | Couro artesanal |
| `produto-03` | idem | Performance premium |
| `produto-04` | idem | Performance premium |
| `produto-05` | idem | Edições limitadas |
| `produto-06` | idem | Edições limitadas |
| `produto-07` | idem | Clássicos atemporais |
| `produto-08` | idem | Clássicos atemporais |

- Um tênis (ou par) por foto, centralizado, ocupando ~70% da largura, fundo escuro ou neutro uniforme, mesma linguagem de luz em todas. Diferentes das fotos do hero e das coleções. Peso ≤ 90 KB (WebP 600).
- Registrar em `imagens.md` uma descrição curta de cada (cor, material aparente) para o redator casar nome e material.

### 6.4 Ambiente, ofício e loja

| Arquivo | Tamanhos | Conteúdo | Candidatas |
|---|---|---|---|
| `sobre-artesao` | 1200x1500 e 800x1000 (4:5) + 1200x900 (4:3, celular) | artesão costurando couro, mãos em destaque | Pexels 13354699 (tkirkgoz) |
| `faixa-loja` | 2400x1029 e 1600x686 (21:9) + 1200x900 (4:3, celular) | interior de loja de calçados, luz baixa, prateleiras | Unsplash `5_O_7Mu89Z8` ou `aMjub3ilWa8` |
| `visite-interior` | 1200x900 e 800x600 (4:3) | interior moderno da loja (diferente do hero 4 e da faixa) | Unsplash `QOS6ykz0fKw` ou Pexels 33812005 |
| `cta-fundo` | 1920x1080 e 1280x720 (16:9) + 900x1200 (3:4, celular) | close de tênis em superfície escura ou textura de couro/costura; pouco detalhe no centro (recebe texto) | Unsplash `sLsIeWssEDQ` (conferir logos) ou busca `leather stitching close up` |

### 6.5 Depoimentos (3) — **substituir antes de publicar**

| Arquivo | Tamanho | Conteúdo |
|---|---|---|
| `depoimento-01` | 400x400 (1:1) | retrato de homem adulto, fundo escuro, luz suave |
| `depoimento-02` | 400x400 | retrato de mulher adulta, fundo escuro |
| `depoimento-03` | 400x400 | retrato de adulto (30–50 anos), fundo neutro |

Busca: `portrait dark background man`, `portrait woman studio low key`. Peso ≤ 30 KB (WebP).

### 6.6 SVG e social

| Arquivo | Especificação |
|---|---|
| `logo-vertice.svg` | wordmark "VÉRTICE" em caixa alta, sans geométrica (no estilo da Manrope 600, convertida em path), `letter-spacing` ~0.28em, cor `#F2EEE6`; símbolo à esquerda: um ápice (V invertido) de dois traços finos de 1.5px, em `#C9A96E`. Proporção ~6:1, viewBox justo. Variante `logo-vertice-escuro.svg` (wordmark `#0E0E10`, símbolo `#7A5A2B`) para fundo claro, se usada. |
| `favicon.svg` | só o símbolo do ápice champanhe sobre quadrado `#0E0E10`, 32x32 |
| `og-image.jpg` | 1200x630, recorte do `hero-01-couro` com o logo aplicado à esquerda, ≤ 150 KB |

Ícones de interface: SVG inline no HTML, feitos pelo desenvolvedor (sem arquivo).

---

## 7. Checklist de acessibilidade previsto

- [ ] Contraste: todos os pares das seções 2.1 e 2.2 ≥ 4,5:1 (texto) e ≥ 3:1 (bordas de componentes); champanhe nunca sobre osso.
- [ ] Texto sobre foto sempre sobre véu com a opacidade mínima especificada; nenhum texto embutido nas imagens.
- [ ] Carrossel conforme APG: `aria-roledescription="carrossel"`, `aria-label="Destaques"`, slides `tabpanel` com `aria-roledescription="slide"` e "N de 4", abas com tabindex itinerante, pausar primeiro no Tab, rótulo de ação sem `aria-pressed`, `aria-live` off/polite, setas não movem o foco, slides inativos `inert`.
- [ ] WCAG 2.2.2: autoplay pausável, para no foco e não volta sozinho, para no hover, desligado com `prefers-reduced-motion` e, por padrão, no celular.
- [ ] Teclado completo: ← → Home End nas abas, Enter/Espaço nos botões, Esc fecha o menu, foco preso no menu aberto e devolvido ao fechar.
- [ ] Foco visível (2px champanhe/bronze, offset 3px) em todos os interativos; `scroll-padding-top` com a altura do cabeçalho (2.4.11) e `scroll-padding-bottom` com a barra fixa no celular.
- [ ] Alvos ≥ 44x44 nos controles principais (setas, pausar, abas, chips, hambúrguer, radios, links de rede).
- [ ] Um único `h1` (título do slide 1); hierarquia h2/h3 sem saltos; landmarks e "Pular para o conteúdo".
- [ ] Imagens com `alt` descritivo (sem marcas); decorativas com `alt=""`; ícones `aria-hidden`.
- [ ] Formulário: rótulos visíveis ligados aos campos, `fieldset`/`legend` nos radios, erros com `aria-invalid` + `aria-describedby`, foco no primeiro erro; sem JS, botão direto de WhatsApp.
- [ ] Links que abrem nova aba avisam no nome acessível.
- [ ] Filtro de produtos com `aria-pressed` e anúncio da contagem em região `aria-live="polite"`.
- [ ] `prefers-reduced-motion`: sem translate, sem scale, sem barra de progresso animada, fades ≤ 150ms.
- [ ] Desempenho: slide 1 com `fetchpriority="high"` e preload, sem lazy; slides 2+ lazy com dimensões iguais; nada do carrossel injetado por JS; só `opacity`/`transform` animados; controles sem CLS.
- [ ] `lang="pt-BR"`, JSON-LD `ShoeStore` sem `geo` e sem `aggregateRating`, aviso de site de demonstração no rodapé.
- [ ] Sem rolagem horizontal em 320px; zoom de 200% sem perda de conteúdo.
