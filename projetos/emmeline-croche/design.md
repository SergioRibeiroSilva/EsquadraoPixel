# Design — Emmeline Crochê

> Feito pelo `designer-ui` em 2026-11-15 a partir de `briefing.md`, `pesquisa.md` e `dados-negocio.md`.
> Todos os dados de contato, preços e prazos são **FICTÍCIOS** (ver `dados-negocio.md`). Fotos de banco são provisórias e devem ser trocadas antes de publicar.
> Os contrastes vêm da tabela da pesquisa ou foram calculados pela fórmula de luminância relativa da WCAG 2.x (marcados com "calc."). Confira os pares finais numa ferramenta de contraste antes de publicar.

---

## 1. Conceito

**"Ateliê editorial em vinho: elegância serifada, creme quente e a textura do ponto de crochê como assinatura."**

Justificativa ligada à pesquisa:
- **Foto real e limpa do produto em primeiro plano.** A Baymard mostra que a primeira ação de 56% das usuárias é olhar as fotos. Por isso o hero é dividido (texto e foto lado a lado) e não põe texto sobre a imagem: o contraste fica garantido e a bolsa aparece inteira. Não há carrossel (NN/g, Baymard).
- **O processo como sinal de confiança** (Festela, Emma Bridgewater). A seção "O feito à mão" usa um mosaico de closes (Lili Arnold) e etapas numeradas.
- **Vinho como identidade, com contenção.** Cerca de 60% creme/off-white, 25% vinho/marsala e 15% rosé. O dourado aparece só em filetes, ícones e detalhes sobre fundo escuro.
- **Um gesto visual forte:** títulos grandes em Cormorant Garamond, com uma palavra em itálico vinho ("*ponto a ponto*"), e um padrão SVG de ponto de crochê em baixa opacidade nas faixas rosé e vinho escuro.
- **WhatsApp acessível:** o botão é vinho com texto branco (9,9:1). Não usamos verde `#25D366` com texto branco, que dá 1,98:1 e reprova.

---

## 2. Tokens

### 2.1 Cores

| Token | Hex | Uso |
|---|---|---|
| `--c-vinho-900` | `#5E1A2B` | Fundo da faixa de CTA final e do rodapé; hover do botão primário |
| `--c-vinho-700` | `#7A2338` | Cor primária: botões, títulos h2, preço, links, anel de foco sobre fundo claro |
| `--c-marsala-500` | `#955251` | Tom médio: eyebrows (rótulos acima de títulos), números das etapas, ícones de linha |
| `--c-creme-100` | `#F7F0E8` | Fundo principal da página |
| `--c-offwhite-50` | `#FBF7F2` | Fundo de cards, FAQ e campos |
| `--c-rose-200` | `#EAD5CC` | Fundo das seções alternadas (Sobre, Depoimentos) e do botão secundário em hover |
| `--c-texto-900` | `#2B1A1E` | Texto principal |
| `--c-texto-600` | `#6B5A55` | Texto secundário (descrições, medidas, legendas) e borda de campos |
| `--c-ouro-300` | `#D9B77E` | Acento **somente sobre vinho**: eyebrow, filetes, anel de foco em fundo escuro |
| `--c-ouro-700` | `#7C5E2C` | Acento dourado legível sobre fundo claro (selo "peça única", estrelas) |
| `--c-linha-200` | `#E3D3C8` | Bordas decorativas de cards e divisores (não transmitem informação) |
| `--c-branco` | `#FFFFFF` | Texto de botão primário |

### 2.2 Pares de contraste aprovados (texto / fundo)

| Texto | Fundo | Razão | Resultado | Onde usar |
|---|---|---|---|---|
| `#2B1A1E` | `#F7F0E8` | 14,6:1 | AA/AAA | Texto corrido |
| `#2B1A1E` | `#FBF7F2` | 15,5:1 | AA/AAA | Texto em cards e FAQ |
| `#2B1A1E` | `#EAD5CC` | ~11,7:1 (calc.) | AA/AAA | Texto corrido nas seções rosé |
| `#7A2338` | `#F7F0E8` | 8,75:1 | AA/AAA | Títulos, links, preço |
| `#7A2338` | `#FBF7F2` | 9,3:1 | AA/AAA | Nome e preço no card |
| `#7A2338` | `#EAD5CC` | 7,0:1 | AA/AAA | Títulos nas seções rosé |
| `#6B5A55` | `#F7F0E8` | 5,8:1 | AA | Texto secundário |
| `#6B5A55` | `#FBF7F2` | ~6,1:1 (calc.) | AA | Medidas e descrição no card |
| `#6B5A55` | `#EAD5CC` | ~4,6:1 (calc.) | AA (no limite) | Só legendas curtas. Para parágrafo em rosé, use `#2B1A1E` |
| `#955251` | `#F7F0E8` | 5,2:1 | AA | Eyebrow e números de etapa em creme |
| `#955251` | `#EAD5CC` | 4,1:1 | só texto grande | **Não** usar eyebrow marsala em rosé. Use `#7A2338` |
| `#FFFFFF` | `#7A2338` | 9,9:1 | AA/AAA | Botão primário |
| `#FFFFFF` | `#5E1A2B` | ~12,7:1 (calc.) | AA/AAA | Botão primário em hover |
| `#F7F0E8` | `#5E1A2B` | 11,2:1 | AA/AAA | Texto na faixa vinho e no rodapé |
| `#EAD5CC` | `#5E1A2B` | ~9,0:1 (calc.) | AA/AAA | Texto secundário no rodapé |
| `#D9B77E` | `#5E1A2B` | 6,6:1 | AA | Eyebrow e links em hover no rodapé |
| `#D9B77E` | `#7A2338` | 5,2:1 | AA | Selo dourado sobre vinho |
| `#7A2338` | `#F7F0E8` (botão invertido) | 8,75:1 | AA/AAA | Botão claro sobre a faixa vinho |
| `#5E1A2B` | `#D9B77E` | 6,6:1 | AA | Botão invertido em hover |
| `#7C5E2C` | `#F7F0E8` | 5,3:1 | AA | Selo "peça única" e estrelas |

**Proibido:** dourado `#D9B77E`/`#B08D57` como texto sobre creme (1,7 a 2,7:1); texto branco sobre `#25D366` (1,98:1).

**Componentes não textuais (WCAG 1.4.11, mínimo 3:1):** borda de campo `#6B5A55` sobre `#FBF7F2` dá ~6,1:1. O anel de foco `#7A2338` dá 8,75:1 em creme e 7,0:1 em rosé, e o `#D9B77E` dá 6,6:1 sobre vinho escuro. A borda `--c-linha-200` é só decorativa.

### 2.3 Tipografia

- **Títulos:** Cormorant Garamond, pesos **500** e **600**, mais **500 itálico** para a palavra de destaque. Use só a partir de 24px e nunca em texto corrido, botões ou rótulos.
- **Texto e interface:** Lato, pesos **400** e **700**.
- Carregamento:
  - `<link rel="preconnect" href="https://fonts.googleapis.com">`
  - `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
  - `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Lato:wght@400;700&display=swap`
- Pilhas de fallback: `"Cormorant Garamond", "Georgia", "Times New Roman", serif` e `"Lato", "Segoe UI", system-ui, -apple-system, sans-serif`.

| Token | Família / peso | Tamanho (mobile → desktop) | Altura de linha | Uso |
|---|---|---|---|---|
| `--fs-display` | Cormorant 600 | `clamp(2.5rem, 1.6rem + 4vw, 4.5rem)` (40 → 72px) | 1.05 | h1 do hero |
| `--fs-h2` | Cormorant 600 | `clamp(2rem, 1.5rem + 2.2vw, 3rem)` (32 → 48px) | 1.1 | Títulos de seção |
| `--fs-h3` | Cormorant 600 | `clamp(1.5rem, 1.35rem + 0.6vw, 1.75rem)` (24 → 28px) | 1.2 | Nome da bolsa, título de etapa ou diferencial |
| `--fs-quote` | Cormorant 500 itálico | `clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)` (24 → 30px) | 1.35 | Citação da artesã e depoimentos |
| `--fs-lead` | Lato 400 | `clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)` (18 → 20px) | 1.6 | Subtítulo do hero e introdução de seção |
| `--fs-body` | Lato 400 | `1.0625rem` (17px) | 1.65 | Texto corrido |
| `--fs-small` | Lato 400 | `0.9375rem` (15px) | 1.5 | Medidas, legendas, rodapé |
| `--fs-eyebrow` | Lato 700, CAIXA ALTA, `letter-spacing: 0.14em` | `0.8125rem` (13px) | 1.4 | Rótulo acima do h2 (ex.: "COLEÇÃO") |
| `--fs-button` | Lato 700, `letter-spacing: 0.02em` | `1rem` (16px) | 1 | Botões |

- Medida máxima do texto corrido: `65ch`. Títulos: `20ch`.
- Palavra de destaque no h1/h2: `<em>` em Cormorant 500 itálico, cor `--c-vinho-700`.

### 2.4 Espaçamento (base 4px)

| Token | Valor |
|---|---|
| `--sp-1` | 4px |
| `--sp-2` | 8px |
| `--sp-3` | 12px |
| `--sp-4` | 16px |
| `--sp-5` | 24px |
| `--sp-6` | 32px |
| `--sp-7` | 48px |
| `--sp-8` | 64px |
| `--sp-9` | 96px |
| `--sp-10` | 128px |
| `--sp-section` | `clamp(4rem, 2.5rem + 6vw, 8rem)` (64 → 128px, padding vertical das seções) |

### 2.5 Raios, sombras, bordas e movimento

| Token | Valor | Uso |
|---|---|---|
| `--r-sm` | 6px | Campos, tags |
| `--r-md` | 12px | Cards, itens do FAQ |
| `--r-lg` | 24px | Imagens do hero e do mosaico |
| `--r-arch` | `999px 999px 24px 24px` | Moldura em arco da foto do hero (gesto de assinatura) |
| `--r-pill` | 999px | Botões, selo, botão flutuante |
| `--sh-1` | `0 1px 2px rgba(43,26,30,.06), 0 2px 8px rgba(43,26,30,.06)` | Card em repouso |
| `--sh-2` | `0 6px 16px rgba(43,26,30,.10), 0 18px 40px rgba(94,26,43,.10)` | Card em hover, botão flutuante |
| `--bd-1` | `1px solid var(--c-linha-200)` | Borda de card |
| `--focus-ring` | `3px solid var(--c-vinho-700)`, `outline-offset: 3px` | Foco em fundo claro |
| `--focus-ring-dark` | `3px solid var(--c-ouro-300)` | Foco em fundo vinho |
| `--ease` | `cubic-bezier(.2,.7,.2,1)` | |
| `--dur-1` | 150ms | Cor e borda |
| `--dur-2` | 300ms | Elevação, transformação |
| `--dur-reveal` | 600ms | Revelação ao rolar |

### 2.6 Bloco `:root` pronto para copiar

```css
:root {
  /* Cores */
  --c-vinho-900: #5E1A2B;
  --c-vinho-700: #7A2338;
  --c-marsala-500: #955251;
  --c-creme-100: #F7F0E8;
  --c-offwhite-50: #FBF7F2;
  --c-rose-200: #EAD5CC;
  --c-texto-900: #2B1A1E;
  --c-texto-600: #6B5A55;
  --c-ouro-300: #D9B77E;
  --c-ouro-700: #7C5E2C;
  --c-linha-200: #E3D3C8;
  --c-branco: #FFFFFF;

  /* Papéis */
  --bg: var(--c-creme-100);
  --bg-card: var(--c-offwhite-50);
  --bg-alt: var(--c-rose-200);
  --bg-dark: var(--c-vinho-900);
  --text: var(--c-texto-900);
  --text-muted: var(--c-texto-600);
  --primary: var(--c-vinho-700);
  --primary-hover: var(--c-vinho-900);
  --accent: var(--c-ouro-300);

  /* Tipografia */
  --ff-display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --ff-body: "Lato", "Segoe UI", system-ui, -apple-system, sans-serif;
  --fs-display: clamp(2.5rem, 1.6rem + 4vw, 4.5rem);
  --fs-h2: clamp(2rem, 1.5rem + 2.2vw, 3rem);
  --fs-h3: clamp(1.5rem, 1.35rem + 0.6vw, 1.75rem);
  --fs-quote: clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem);
  --fs-lead: clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem);
  --fs-body: 1.0625rem;
  --fs-small: 0.9375rem;
  --fs-eyebrow: 0.8125rem;
  --fs-button: 1rem;
  --lh-tight: 1.1;
  --lh-body: 1.65;

  /* Espaçamento */
  --sp-1: 4px;  --sp-2: 8px;  --sp-3: 12px; --sp-4: 16px; --sp-5: 24px;
  --sp-6: 32px; --sp-7: 48px; --sp-8: 64px; --sp-9: 96px; --sp-10: 128px;
  --sp-section: clamp(4rem, 2.5rem + 6vw, 8rem);

  /* Layout */
  --container: 1200px;
  --container-narrow: 760px;
  --gutter: clamp(20px, 4vw, 48px);
  --header-h: 64px;

  /* Raios, sombras e bordas */
  --r-sm: 6px;
  --r-md: 12px;
  --r-lg: 24px;
  --r-arch: 999px 999px 24px 24px;
  --r-pill: 999px;
  --sh-1: 0 1px 2px rgba(43,26,30,.06), 0 2px 8px rgba(43,26,30,.06);
  --sh-2: 0 6px 16px rgba(43,26,30,.10), 0 18px 40px rgba(94,26,43,.10);
  --bd-1: 1px solid var(--c-linha-200);

  /* Movimento */
  --ease: cubic-bezier(.2,.7,.2,1);
  --dur-1: 150ms;
  --dur-2: 300ms;
  --dur-reveal: 600ms;

  /* Alvos */
  --tap: 44px;
}

@media (min-width: 900px) {
  :root { --header-h: 76px; }
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur-1: 0ms; --dur-2: 0ms; --dur-reveal: 0ms; }
  html { scroll-behavior: auto; }
}
```

---

## 3. Grid e breakpoints

Mobile-first, com media queries `min-width`.

| Nome | Faixa | Colunas | Gap | Margem lateral |
|---|---|---|---|---|
| base (celular) | 0–599px | 4 (na prática, 1 coluna de conteúdo) | 16px | 20px |
| `sm` | ≥ 600px | 8 | 24px | 32px |
| `md` | ≥ 900px | 12 | 32px | 40px |
| `lg` | ≥ 1200px | 12 | 32px | 48px, container de no máximo 1200px centralizado |

- `.container { width: min(100% - 2*var(--gutter), var(--container)); margin-inline: auto; }`
- `.container--narrow` (FAQ, textos longos): no máximo 760px.
- Seções: `padding-block: var(--sp-section)`. Cabeçalho de seção (eyebrow + h2 + lead) centralizado, com `margin-bottom: var(--sp-7)`.
- `html { scroll-behavior: smooth; scroll-padding-top: calc(var(--header-h) + 16px); }`, para que as âncoras não fiquem atrás do cabeçalho fixo.
- Teste também em 320px de largura: sem rolagem horizontal e com texto ampliado a 200%.

---

## 4. Estrutura da página (ordem e ids das âncoras)

Ritmo de fundos: creme → creme → rosé → creme → creme → rosé → creme → vinho → vinho escuro. Uma seção rosé e uma creme nunca se repetem lado a lado sem divisor. Quando duas seções creme forem vizinhas, coloque entre elas o `divisor-ponto.svg`, centralizado e com 160px de largura.

### 4.1 Cabeçalho (`<header>`, fixo)
- **Objetivo:** dar identidade e acesso rápido ao pedido.
- **Conteúdo:** link "Pular para o conteúdo" (visível no foco), logo `logo-emmeline.svg` (link para `#inicio`; nome acessível pelo `alt="Emmeline Crochê, início"` da imagem, que reproduz o texto do logotipo), navegação (Coleção `#colecao` · Feito à mão `#sobre` · Como encomendar `#como-encomendar` · Dúvidas `#duvidas`) e o botão primário pequeno "Encomendar" (WhatsApp, mensagem geral).
- **Layout:**
  - Mobile: altura de 64px. Logo à esquerda (altura de 28px) e, à direita, o botão hambúrguer de 44×44 (`icon-menu.svg`, `aria-expanded`, `aria-controls="menu"`). O botão "Encomendar" fica dentro do menu e no botão flutuante.
  - ≥ 900px: altura de 76px. Logo com 34px de altura, navegação inline à direita (Lato 700 15px, cor `--text`, gap de 32px) e o botão "Encomendar" no fim.
- **Comportamento:** fundo `rgba(247,240,232,.92)` com `backdrop-filter: blur(8px)` (fallback: creme sólido). Depois de 8px de rolagem, ganha a classe `.is-scrolled` e passa a ter `border-bottom: var(--bd-1)` e sombra `--sh-1`.
- **Menu mobile:** painel que desce do topo e ocupa a largura toda, abaixo do header, com fundo creme e links empilhados (Lato 700 18px, altura de 56px cada, separados por `--bd-1`) e o botão "Encomendar pelo WhatsApp" com largura total no fim. Fecha com Esc, ao clicar num link e no botão `icon-fechar.svg`. O foco vai para o primeiro link ao abrir e volta ao hambúrguer ao fechar. Enquanto aberto, o body fica com `overflow:hidden`.
- **Link ativo:** use `aria-current="true"` na âncora da seção visível (IntersectionObserver), sublinhado de 2px vinho com `text-underline-offset: 6px`.

### 4.2 Hero (`#inicio`, fundo creme)
- **Objetivo:** dizer em 3 segundos o que é, transmitir o valor do feito à mão e levar ao pedido.
- **Conteúdo (copy de exemplo):**
  - Eyebrow: "BOLSAS DE CROCHÊ FEITAS À MÃO" (`--c-marsala-500`)
  - h1: "Bolsas tecidas *ponto a ponto*, do jeito que você sonhou" (o trecho "ponto a ponto" em `<em>`)
  - Lead: "Cada peça nasce nas minhas mãos, sob encomenda, com fios escolhidos a dedo e as cores que você preferir."
  - CTA primário: "Encomendar pelo WhatsApp" (ícone + texto; mensagem geral do `dados-negocio.md`)
  - CTA secundário (botão contorno): "Ver a coleção" → `#colecao`
  - Linha de confiança (`--fs-small`, `--text-muted`, com ícones de 18px em marsala): "Feita sob encomenda · Envio para todo o Brasil · Pix ou até 3x"
- **Imagem:** `hero-bolsa-croche.jpg` (4:5) dentro de uma moldura em arco (`border-radius: var(--r-arch)`). Atrás da foto, um bloco rosé deslocado 24px para baixo e para a direita, também em arco, com `textura-ponto-croche.svg` a 35% de opacidade, o que cria profundidade. Um selo circular de 96px (`selo-feito-a-mao.svg`) fica sobre a borda inferior esquerda da foto: fundo vinho e texto "FEITO À MÃO · PEÇA ÚNICA ·" em dourado claro, em círculo. É decorativo, com `aria-hidden`.
- **Layout:**
  - Mobile: texto primeiro e imagem depois, em coluna. Imagem com 100% da largura (máx. 420px), centralizada. Botões empilhados e com largura total. `padding-top: calc(var(--header-h) + 32px)`.
  - ≥ 600px: botões lado a lado, com largura automática.
  - ≥ 900px: grid de 12 colunas, com texto nas colunas 1–6 e imagem nas 8–12, centralizados na vertical. `min-height: min(88vh, 820px)`.
- **Performance:** a imagem do hero não usa lazy-load. Use `fetchpriority="high"`, `width`/`height` explícitos e `srcset` (800w e 1200w).
- **Sem carrossel, sem vídeo e sem texto sobre a foto.**

### 4.3 Coleção (`#colecao`, fundo creme)
- **Objetivo:** mostrar as bolsas com preço e medida e permitir o pedido direto de cada modelo.
- **Cabeçalho:** eyebrow "COLEÇÃO", h2 "Escolha a sua *companheira*" e lead "Seis modelos para começar. Todos podem ser feitos na cor e no tamanho que você preferir."
- **Grade:** 1 coluna (base), 2 colunas (≥ 600px) e 3 colunas (≥ 900px). Gap de 24px no mobile e 32px no desktop. Sem carrossel.
- **Card de produto** (`<article>`), em ordem:
  1. Foto 4:5 com `object-fit: cover`, raio `--r-md` só no topo e `loading="lazy"`. Selo opcional "Mais pedida" (pílula off-white, texto `--c-ouro-700`, borda `--c-ouro-700`, 13px Lato 700) no canto superior esquerdo, em no máximo 1 card.
  2. Nome (h3, Cormorant 600, `--primary`).
  3. Frase de uso, com 1 linha e até 15 palavras (`--text`).
  4. Medidas e material (`--fs-small`, `--text-muted`), ex.: "24 × 16 cm · fio de algodão · forrada".
  5. Linha de rodapé do card: preço à esquerda ("a partir de" em `--fs-small` `--text-muted`, valor em Lato 700 20px `--primary`) e, abaixo dele no mobile ou à direita a partir de 600px, o botão primário "Quero esta" com ícone do WhatsApp. **Não use `aria-label`** (ele substituiria o texto visível e violaria o WCAG 2.5.3): complete o nome com texto oculto depois do rótulo visível, `Quero esta<span class="sr-only">: Bolsa Lua, pelo WhatsApp (abre em nova aba)</span>`.
- **Modelos de exemplo (copy e preços FICTÍCIOS, dentro de R$ 120–380):**

| # | Nome | Frase de uso | Medidas · material | A partir de | Arquivo da foto |
|---|---|---|---|---|---|
| 1 | Bolsa Lua | Retangular de tiracolo, com aba e flores bordadas à mão. | 24 × 16 cm · algodão · forrada | R$ 160 | `bolsa-lua.jpg` |
| 2 | Bolsa Feira | A grandona de ombro que leva o domingo inteiro. | 40 × 35 cm · fio de malha | R$ 220 | `bolsa-feira.jpg` |
| 3 | Bolsa Bombom | Pequena de mão, para o essencial e um batom. | 18 × 14 cm · algodão · forrada | R$ 120 | `bolsa-bombom.jpg` |
| 4 | Bolsa Marsala | Baguete de ombro em tons de vinho, para o dia a dia. | 30 × 14 cm · algodão mercerizado | R$ 180 | `bolsa-marsala.jpg` |
| 5 | Bolsa Jardim | Quadradinhos floridos unidos à mão, um a um. | 28 × 26 cm · algodão · forrada | R$ 260 | `bolsa-jardim.jpg` |
| 6 | Bolsa Noite | Clutch delicada para jantares e festas. | 26 × 14 cm · fio fosco em ponto pipoca · forrada | R$ 340 | `bolsa-noite.jpg` |

- **Nota abaixo da grade** (centralizada, `--fs-small`, `--text-muted`): "Cada peça é feita à mão, por isso pequenas variações fazem parte do seu charme. Fotos ilustrativas." Em seguida, um link-texto vinho: "Não achou o que queria? Peça uma bolsa sob medida →" (WhatsApp, mensagem "personalizada").
- **Comentário HTML:** `<!-- FICTÍCIO: modelos, preços e fotos de banco; substituir antes de publicar -->`.

### 4.4 Sobre / O feito à mão (`#sobre`, fundo rosé `--bg-alt`)
- **Objetivo:** criar vínculo com a artesã e mostrar o processo.
- **Conteúdo:**
  - Eyebrow "O FEITO À MÃO" (cor `--c-vinho-700`, porque marsala sobre rosé reprova) e h2 "Cada bolsa leva *tempo, cuidado e afeto*".
  - Texto em primeira pessoa (2 parágrafos curtos, `--text` `#2B1A1E`), ex.: "Aprendi o crochê olhando as mãos da minha avó. Hoje, cada bolsa que sai do meu ateliê é tecida sem pressa, ponto a ponto, para durar." (copy de exemplo, sem números inventados).
  - Citação destacada em `--fs-quote`, Cormorant itálico vinho, com filete vertical de 3px `--c-marsala-500` à esquerda: "Não existem duas bolsas iguais, e é isso que eu mais amo."
  - Linha de processo com 4 etapas, numeradas (01–04) em Cormorant 600 32px `--c-vinho-700`: **Fio** (escolha do fio e da cor) → **Ponto** (a trama tecida à mão) → **Acabamento** (forro, alça e fecho) → **Embalagem** (pronta para presentear). Cada etapa tem título h3 e 1 linha de texto.
- **Mosaico de imagens:** `processo-maos-tecendo.jpg` (4:5, grande), `fios-novelos.jpg` (1:1) e `detalhe-ponto-croche.jpg` (1:1), com raio `--r-lg`.
- **Layout:**
  - Mobile: h2 → texto → mosaico (grade de 2 colunas, com a foto grande ocupando 2 colunas em 4:5 e as duas quadradas lado a lado abaixo) → citação → etapas em lista vertical (número à esquerda, texto à direita).
  - ≥ 900px: 2 colunas, com o mosaico nas colunas 1–6 (foto grande à esquerda e as duas quadradas empilhadas à direita) e texto e citação nas colunas 8–12. As etapas vêm abaixo, em largura total, numa linha de 4 colunas ligadas por um filete pontilhado de 1px `--c-marsala-500` (decorativo).
- **Fundo:** `textura-ponto-croche.svg` repetida, com opacidade de 0,08, por cima do rosé. Garanta que o contraste do texto continue AA, porque a textura não deve escurecer o fundo além de `#E3CCC2`.

### 4.5 Como encomendar (`#como-encomendar`, fundo creme)
- **Objetivo:** tirar a insegurança do pedido por mensagem.
- **Cabeçalho:** eyebrow "COMO ENCOMENDAR", h2 "Do primeiro *olá* à sua porta" e lead "Simples, sem pressa e com acompanhamento em cada etapa."
- **4 passos** (lista ordenada `<ol>`), cada um num card off-white com `--bd-1` e raio `--r-md`:
  1. **Escolha o modelo**: "Na coleção ou com uma ideia sua."
  2. **Personalize**: "Defina cor, tamanho e detalhes comigo pelo WhatsApp."
  3. **Produção**: "Com o sinal de 50%, começo a tecer. São de 7 a 15 dias úteis." [FICTÍCIO]
  4. **Entrega**: "Envio para todo o Brasil pelos Correios, com código de rastreio." [FICTÍCIO; o rastreio também deve ser confirmado]
- **Card do passo:** ícone de 40px em círculo rosé de 64px (traço `--c-vinho-700`), número "Passo 1" em eyebrow marsala, título h3 e texto.
- **Layout:** 1 coluna (base), 2×2 (≥ 600px) e 4 colunas (≥ 1200px; em 900–1199px fica 2×2). No desktop, uma seta fina em SVG entre os cards (decorativa, `aria-hidden`).
- **Abaixo:** botão primário centralizado "Começar minha encomenda" (WhatsApp, mensagem geral) e a linha "Pagamento: Pix ou cartão em até 3x · 50% de sinal" (`--fs-small`, `--text-muted`). [FICTÍCIO]

### 4.6 Diferenciais (`#diferenciais`, fundo creme, separado por `divisor-ponto.svg`)
- **Objetivo:** reforçar o valor percebido.
- **Cabeçalho:** eyebrow "POR QUE EMMELINE", h2 "Feita para ser *só sua*".
- **4 itens** (sem card, só ícone e texto, para dar respiro): ícone de 48px em linha `--c-vinho-700`, título h3 e 1–2 linhas de texto.
  - **Peça exclusiva** (`icon-agulha.svg`): "Tecida à mão, uma a uma. Nenhuma sai igual à outra."
  - **Fios de qualidade** (`icon-novelo.svg`): "Algodão macio e resistente, escolhido a dedo."
  - **Sob medida** (`icon-regua.svg`): "Cor, tamanho e alça do seu jeito."
  - **Pronta para presentear** (`icon-presente.svg`): "Chega embalada com carinho, com bilhete se você quiser."
- **Layout:** 1 coluna (base) com ícone à esquerda e texto à direita; 2×2 (≥ 600px); 4 colunas centralizadas (≥ 900px), com ícone acima do texto.

### 4.7 Depoimentos (`#depoimentos`, fundo rosé)
- **Objetivo:** prova social. **Os depoimentos são de exemplo** e devem ser identificados assim no código e na página.
- **Cabeçalho:** eyebrow "QUEM JÁ TEM" (vinho), h2 "Histórias que *carregam* afeto".
- **3 cards** off-white (`--bd-1`, `--r-md`, `--sh-1`, padding de 32px):
  - Ícone de aspas decorativo (`icon-aspas.svg`, 32px, `--c-marsala-500`, `aria-hidden`).
  - Texto em Lato 400 itálico 17px `--text`, com 2–3 linhas.
  - Rodapé com **avatar de iniciais** (círculo de 48px, fundo `--c-vinho-700`, iniciais em Lato 700 branco: 9,9:1), nome e cidade (Lato 700 / `--fs-small` `--text-muted`) e o modelo comprado ("Bolsa Lua"). **Sem fotos de rosto**: é a recomendação da pesquisa para depoimentos fictícios.
  - Exemplos: "Mariana S., Campinas/SP", "Patrícia L., Belo Horizonte/MG", "Júlia R., Curitiba/PR".
- **Layout:** pilha vertical (base), 3 colunas (≥ 900px). Sem carrossel.
- **Nota abaixo** (`--fs-small`, `--c-texto-900`, porque `#6B5A55` em rosé fica no limite): "Depoimentos ilustrativos." Comentário HTML: `<!-- EXEMPLO: substituir por depoimentos reais com autorização -->`.

### 4.8 Perguntas frequentes (`#duvidas`, fundo creme, `.container--narrow`)
- **Cabeçalho:** eyebrow "DÚVIDAS", h2 "Perguntas *frequentes*".
- **Acordeão** com `<details>/<summary>` nativos, cada item num bloco off-white com `--bd-1`, raio `--r-md` e 12px de espaço entre itens.
  - `summary`: Lato 700 18px `--text`, padding de 20px 24px, altura mínima de 56px e `icon-caret.svg` de 20px à direita, em vinho, que gira 180° quando aberto (`details[open]`). Remova o marcador nativo (`list-style:none` e `::-webkit-details-marker{display:none}`).
  - Resposta: Lato 400 17px, padding de 0 24px 24px.
- **Perguntas e respostas (FICTÍCIAS onde houver dado):**
  1. *Qual é o prazo de produção?* De 7 a 15 dias úteis depois da confirmação do sinal, mais o prazo dos Correios.
  2. *Como cuidar da minha bolsa?* Lavar à mão em água fria com sabão neutro, secar na sombra e na horizontal, sem torcer. Guardar com papel dentro para manter a forma.
  3. *Vocês enviam para todo o Brasil?* Sim, pelos Correios, com código de rastreio. O frete é calculado no atendimento.
  4. *Quais as formas de pagamento?* Pix ou cartão de crédito em até 3x, com 50% de sinal na encomenda.
  5. *Posso escolher cor e tamanho?* Sim. Todas as bolsas são feitas sob encomenda e podem ser personalizadas.
  6. *Posso retirar pessoalmente?* O ateliê fica em São Paulo/SP e não tem atendimento presencial; todas as entregas são feitas por envio.
- **Abaixo:** "Ficou com alguma dúvida?" + link-botão contorno "Perguntar no WhatsApp" (mensagem "dúvida").

### 4.9 CTA final (`#encomendar`, fundo vinho escuro `--bg-dark`)
- **Objetivo:** o último empurrão para o pedido.
- **Fundo:** `#5E1A2B` com `textura-ponto-croche-claro.svg` (traço `#D9B77E`) a 10% de opacidade. Filete dourado de 1px e 64px de largura acima do eyebrow.
- **Conteúdo** (centralizado, no máximo 640px):
  - Eyebrow "SUA BOLSA, DO SEU JEITO" em `--c-ouro-300` (6,6:1).
  - h2 "Vamos criar a *sua* bolsa?" em `--c-creme-100` (11,2:1). O `<em>` aqui fica em `--c-ouro-300`.
  - Texto "Me conte a cor, o tamanho e a ocasião. Eu respondo rapidinho." em `--c-creme-100`.
  - Botão **invertido** (fundo `#F7F0E8`, texto `#7A2338`: 8,75:1) "Encomendar pelo WhatsApp" (mensagem "personalizada") e link secundário "ou siga no Instagram @emmelinecroche" (texto `--c-creme-100`, sublinhado, hover `--c-ouro-300`).
  - Horário: "Atendimento: seg a sex, 09:00–18:00 · sáb, 09:00–12:00" (`--fs-small`, `--c-rose-200`, ~9,0:1). [FICTÍCIO]
- **Padding:** `--sp-section`. Em mobile, o botão tem largura total.

### 4.10 Rodapé (`<footer>`, fundo vinho escuro, separado do CTA final por um filete de 1px `rgba(217,183,126,.3)`)
- **Conteúdo:**
  - Coluna 1: `logo-emmeline-claro.svg` (altura de 32px) e a frase "Bolsas de crochê feitas à mão, sob encomenda."
  - Coluna 2, "Contato": WhatsApp (11) 90000-0000 · contato@emmelinecroche.com.br · Instagram @emmelinecroche, cada um com ícone de 20px dourado e linha clicável de no mínimo 44px de altura.
  - Coluna 3, "Atendimento": São Paulo/SP · ateliê sem atendimento presencial · envio para todo o Brasil · horário.
  - Linha final: "© 2026 Emmeline Crochê. Fotos ilustrativas de bancos de imagem livres; créditos em `imagens.md`." (o desenvolvedor pode pôr um link "Créditos das fotos" que abre um `<details>` com autor e licença).
- **Cores:** títulos de coluna em Lato 700 eyebrow `--c-ouro-300`; texto `--c-creme-100`; secundário `--c-rose-200`; links com hover `--c-ouro-300` e sublinhado.
- **Layout:** pilha vertical (base), 3 colunas (≥ 900px, proporção 1.4fr 1fr 1fr).
- **Sem endereço e sem mapa.** Comentário `<!-- FICTÍCIO: substituir antes de publicar (ver dados-negocio.md) -->`.
- Padding inferior extra no mobile (`padding-bottom: 96px`) para o botão flutuante não cobrir o texto.

### 4.11 Botão flutuante de WhatsApp (somente < 900px)
- Pílula fixa no canto inferior direito, a `16px + env(safe-area-inset-bottom)` da borda, com fundo `--c-vinho-700`, texto branco, ícone e o texto "Encomendar" (Lato 700 15px), altura de 52px, padding de 0 20px e sombra `--sh-2`.
- **Visibilidade:** aparece só depois que o CTA do hero sai da tela e some quando a seção `#encomendar` ou o rodapé entram na tela (IntersectionObserver), para nunca cobrir conteúdo nem o rodapé. Transição de opacidade e translateY(16px) em `--dur-2`.
- Nome acessível: `Encomendar<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span>` (sem `aria-label`, para o nome começar pelo texto visível). Mensagem geral.

---

## 5. Links de WhatsApp (mensagens pré-preenchidas)

Número FICTÍCIO: `5511900000000`. Todos os links levam `target="_blank" rel="noopener"`, rótulo visível seguido de texto `.sr-only` com o complemento (" pelo WhatsApp", " (abre em nova aba)"); evite `aria-label` em links com texto visível, porque o nome acessível precisa começar pelo texto visível (WCAG 2.5.3), e o ícone `icon-whatsapp.svg` com `aria-hidden="true"`. O botão é sempre vinho (ou creme na faixa escura) e **nunca verde com texto branco**.

| Uso | Mensagem | Link |
|---|---|---|
| **Geral** (header, hero, Como encomendar, botão flutuante) | "Olá! Vi o site da Emmeline Crochê e quero encomendar uma bolsa." | `https://wa.me/5511900000000?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Emmeline%20Croch%C3%AA%20e%20quero%20encomendar%20uma%20bolsa.` |
| **Personalizada** (nota da coleção, CTA final) | "Olá, Emmeline! Quero uma bolsa personalizada, com cores e tamanho do meu jeito." | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Emmeline%21%20Quero%20uma%20bolsa%20personalizada%2C%20com%20cores%20e%20tamanho%20do%20meu%20jeito.` |
| **Dúvida** (FAQ) | "Olá, Emmeline! Tenho uma dúvida sobre as encomendas." | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Emmeline%21%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20encomendas.` |
| **Por modelo** (botão "Quero esta" de cada card) | "Olá, Emmeline! Tenho interesse na Bolsa {Modelo}. Quais cores estão disponíveis?" | prefixo + nome + sufixo (abaixo) |

Montagem do link por modelo (os nomes dos 6 modelos não têm acento nem espaço, então entram como estão):
- Prefixo: `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Emmeline%21%20Tenho%20interesse%20na%20Bolsa%20`
- Nome: `Lua` | `Feira` | `Bombom` | `Marsala` | `Jardim` | `Noite`
- Sufixo: `.%20Quais%20cores%20est%C3%A3o%20dispon%C3%ADveis%3F`
- Exemplo completo: `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Emmeline%21%20Tenho%20interesse%20na%20Bolsa%20Lua.%20Quais%20cores%20est%C3%A3o%20dispon%C3%ADveis%3F`

Os hrefs devem ficar estáticos no HTML, para funcionar sem JS. Se o desenvolvedor preferir gerar por JS, use `encodeURIComponent` e mantenha o href estático como fallback.

Instagram: `https://www.instagram.com/emmelinecroche/` · E-mail: `mailto:contato@emmelinecroche.com.br` (ambos FICTÍCIOS).

---

## 6. Componentes e estados

Regra geral: todo elemento interativo tem no mínimo 44×44px, `cursor:pointer` e `:focus-visible` com `--focus-ring` (ou `--focus-ring-dark` em fundo vinho). O foco **nunca** é removido, nem com `prefers-reduced-motion`. As transições de cor usam `--dur-1` e as de elevação, `--dur-2`.

### 6.1 Botão primário (`.btn--primary`)
| Estado | Estilo |
|---|---|
| Normal | Fundo `#7A2338`, texto `#FFFFFF` (9,9:1), Lato 700 16px, altura mínima de 48px, padding de 14px 28px, `--r-pill`, ícone de 20px à esquerda com gap de 10px |
| Hover | Fundo `#5E1A2B` (texto ~12,7:1), `translateY(-1px)`, sombra `--sh-1` |
| Ativo | `translateY(0)`, sem sombra |
| Foco | Anel de 3px `#7A2338` com offset de 3px (8,75:1 em creme) |
| Desabilitado | Fundo `#EAD5CC`, texto `#6B5A55`, `cursor:not-allowed`, sem hover, `aria-disabled="true"` (não deve ocorrer na landing; previsto para futuro formulário) |

Variante pequena `.btn--sm` (header desktop): altura de 44px, padding de 10px 20px, 15px.

### 6.2 Botão secundário (`.btn--outline`)
| Estado | Estilo |
|---|---|
| Normal | Fundo transparente, borda de 1.5px `#7A2338`, texto `#7A2338` (8,75:1 em creme) |
| Hover | Fundo `#EAD5CC`, texto `#7A2338` (7,0:1) |
| Foco | Anel de 3px `#7A2338` com offset de 3px |
| Desabilitado | Borda e texto `#6B5A55` e opacidade de 0,7 |

### 6.3 Botão invertido (`.btn--light`, só sobre vinho)
| Estado | Estilo |
|---|---|
| Normal | Fundo `#F7F0E8`, texto `#7A2338` (8,75:1) |
| Hover | Fundo `#D9B77E`, texto `#5E1A2B` (6,6:1) |
| Foco | Anel de 3px `#D9B77E` com offset de 3px (6,6:1 sobre `#5E1A2B`) |

### 6.4 Link de texto
- Cor `#7A2338`, sublinhado de 1px com `text-underline-offset: 4px`. No hover, sublinhado de 2px e cor `#5E1A2B`. No foco, `--focus-ring` com raio de 2px.
- Links dentro do texto corrido devem estar sempre sublinhados (não depender só da cor).

### 6.5 Card de produto
| Estado | Estilo |
|---|---|
| Normal | Fundo `#FBF7F2`, `--bd-1`, `--r-md`, `--sh-1`, `overflow:hidden` |
| Hover (dispositivos com `hover:hover`) | `translateY(-4px)`, sombra `--sh-2` e zoom da foto `scale(1.03)` em 600ms |
| Foco interno | O card **não** é focável. Só o botão "Quero esta" recebe foco, com anel normal, e o card ganha `:focus-within` com borda `#7A2338` |
| Reduced motion | Sem transform. Só muda a sombra |

### 6.6 Navegação
- Link: Lato 700 15px `--text`. No hover, a cor fica `--primary` e aparece um sublinhado de 2px que cresce do centro (`scaleX` 0 → 1). No ativo, `aria-current` com sublinhado fixo. Área de clique com no mínimo 44px de altura (padding vertical).
- Hambúrguer: 44×44, ícone de 24px `--text`; no hover, fundo `#EAD5CC` com raio de 8px.

### 6.7 Acordeão (FAQ)
| Estado | Estilo |
|---|---|
| Fechado | Fundo `#FBF7F2`, `--bd-1` |
| Hover no summary | Texto `--primary`, borda `#7A2338` |
| Foco no summary | `--focus-ring` |
| Aberto | Borda esquerda de 3px `#7A2338` e caret girado 180° |

### 6.8 Formulários (não há formulário na landing; padrão para uso futuro)
| Estado | Estilo |
|---|---|
| Normal | Fundo `#FBF7F2`, borda de 1px `#6B5A55` (~6,1:1), `--r-sm`, altura de 48px, Lato 17px `--text`, label visível acima em Lato 700 15px |
| Hover | Borda `#2B1A1E` |
| Foco | Borda `#7A2338` mais `--focus-ring` |
| Erro | Borda `#7A2338` de 2px, ícone e mensagem em texto `#7A2338` abaixo (nunca só pela cor) e `aria-invalid="true"` com `aria-describedby` |
| Desabilitado | Fundo `#EAD5CC` e texto `#6B5A55` |

### 6.9 Animações
- **Revelação ao rolar:** elementos com `.reveal` começam em `opacity:0; transform: translateY(16px)` e passam para o estado final em `--dur-reveal` com `--ease` (IntersectionObserver, threshold 0,15, uma vez só). Nos cards da grade, há um atraso escalonado de 80ms por item (máx. 400ms). Sem JS, ou com `prefers-reduced-motion: reduce`, os elementos ficam visíveis desde o início (a classe que esconde só é aplicada por JS).
- Nada de parallax, autoplay ou animação em loop.

---

## 7. Breakpoints: resumo do comportamento

| Elemento | Base (< 600) | ≥ 600 | ≥ 900 | ≥ 1200 |
|---|---|---|---|---|
| Header | 64px, hambúrguer | igual | 76px, navegação inline + botão | igual |
| Hero | Coluna (texto → foto), botões com largura total | botões lado a lado | 2 colunas (6/5) | container de 1200px |
| Coleção | 1 coluna | 2 colunas | 3 colunas | 3 colunas |
| Sobre | Pilha, mosaico 2×(1+2) | igual | 2 colunas, etapas em 4 colunas | igual |
| Como encomendar | 1 coluna | 2×2 | 2×2 | 4 colunas |
| Diferenciais | 1 coluna (ícone ao lado) | 2×2 | 4 colunas | 4 colunas |
| Depoimentos | Pilha | Pilha | 3 colunas | 3 colunas |
| FAQ | Largura total | no máximo 760px | no máximo 760px | no máximo 760px |
| Rodapé | Pilha + padding inferior de 96px | igual | 3 colunas | igual |
| Botão flutuante | Visível (regras da seção 4.11) | Visível | Oculto | Oculto |

---

## 8. Pedidos de imagem

O `gerador-imagens` deve registrar tudo em `projetos/emmeline-croche/imagens.md`, com autor, link, banco e licença, e salvar os arquivos em `projetos/emmeline-croche/assets/`. Todas as fotos ficam marcadas como **"substituir antes de publicar"** pelas fotos reais da Emmeline.

### 8.1 Fotos de banco público (Pexels, Pixabay, Unsplash ou Wikimedia Commons em CC0/CC BY)
Critérios gerais: luz natural, fundos neutros quentes (linho, madeira clara, creme), **predominância de vinho/bordô/marsala, rosé ou creme** nas bolsas, sem logo ou etiqueta visível, **sem bolsas Wayuu**, sem rosto reconhecível. Entregue em JPG (ou WebP com JPG de fallback) com qualidade de ~78%, em sRGB, até ~220 KB cada (hero até ~300 KB).

| Arquivo | Proporção | Tamanho de entrega | Uso | Termos de busca sugeridos |
|---|---|---|---|---|
| `hero-bolsa-croche.jpg` (+ `hero-bolsa-croche-800.jpg`) | 4:5 | 1200×1500 (e 800×1000) | Hero, moldura em arco (o centro deve conter a bolsa inteira, porque o topo é arredondado) | `burgundy crochet bag`, `wine red crochet handbag`, `crochet bag` + filtro de cor vermelho |
| `bolsa-lua.jpg` | 4:5 | 800×1000 | Card 1: tiracolo retangular com aba (antes "meia-lua"; ajustado à foto no ciclo 1) | `crochet crossbody bag`, `half moon crochet bag` |
| `bolsa-feira.jpg` | 4:5 | 800×1000 | Card 2: tote grande de ombro (de preferência no ombro, sem rosto, para mostrar a escala) | `crochet tote bag`, `woman holding crochet bag` |
| `bolsa-bombom.jpg` | 4:5 | 800×1000 | Card 3: bolsa pequena de mão | `small crochet purse`, `mini crochet bag` |
| `bolsa-marsala.jpg` | 4:5 | 800×1000 | Card 4: baguete de ombro em vinho | `maroon knitted bag`, `crochet shoulder bag` |
| `bolsa-jardim.jpg` | 4:5 | 800×1000 | Card 5: granny square, florida | `granny square bag`, `crochet flower bag` |
| `bolsa-noite.jpg` | 4:5 | 800×1000 | Card 6: clutch delicada | `crochet clutch`, `crochet evening bag` |
| `processo-maos-tecendo.jpg` | 4:5 | 900×1125 | Mosaico "Sobre" (foto grande): mãos com agulha e fio, de preferência em tom vinho | `crochet hands`, `crocheting hands`, `crochet hook yarn` |
| `fios-novelos.jpg` | 1:1 | 700×700 | Mosaico "Sobre": novelos em vinho, rosé e creme | `burgundy yarn`, `yarn balls`, `bordeaux yarn` |
| `detalhe-ponto-croche.jpg` | 1:1 | 700×700 | Mosaico "Sobre": close da trama | `crochet texture close up`, `crochet stitch` |
| `og-image.jpg` | 1,91:1 | 1200×630 | Compartilhamento (Open Graph): recorte da foto do hero sobre fundo creme, com o logo à esquerda (pode ser composto a partir das outras imagens) | — |

Os textos `alt` sugeridos ficam com o desenvolvedor, descrevendo a bolsa (ex.: "Bolsa de crochê meia-lua em vinho com alça de tiracolo"). As imagens decorativas usam `alt=""`.

Depoimentos: **não usar foto**. São avatares de iniciais feitos em CSS (seção 4.7).

### 8.2 SVGs (criados pelo `gerador-imagens`)
Estilo dos ícones: linha de 1.5px em `viewBox` 24×24, cantos e terminações arredondados, `stroke="currentColor"`, `fill="none"` (a cor vem do CSS) e sem texto embutido.

| Arquivo | Proporção / viewBox | Uso | Descrição |
|---|---|---|---|
| `logo-emmeline.svg` | ~5:1 (ex.: 240×48) | Header | Logotipo tipográfico: "Emmeline" em serifa de alto contraste (desenhada como path, para não depender da fonte), cor `#7A2338`, com "CROCHÊ" pequeno em caixa alta espaçada abaixo ou ao lado, em `#955251`. Um pequeno laço ou ponto de crochê estilizado substitui o pingo do "i" ou fica antes do nome. `<title>Emmeline Crochê</title>` |
| `logo-emmeline-claro.svg` | igual | Rodapé | Mesma arte, com o nome em `#F7F0E8` e "CROCHÊ" e o ornamento em `#D9B77E` |
| `favicon.svg` | 1:1 (32×32) | Favicon | Monograma "E" em serifa `#F7F0E8` sobre círculo `#7A2338` (9,9:1+). Gerar também `favicon-32.png` e `apple-touch-icon.png` (180×180, com fundo vinho preenchido) |
| `textura-ponto-croche.svg` | tile 48×48, sem emendas | Fundos das seções rosé e do bloco atrás do hero | Padrão repetível de pontos de crochê (correntinhas e pontos altos em leque) com traço de 1px `#7A2338`. A opacidade é aplicada pelo CSS |
| `textura-ponto-croche-claro.svg` | tile 48×48 | Fundo do CTA final | Mesmo padrão, com traço `#D9B77E` |
| `divisor-ponto.svg` | 8:1 (160×20) | Separador entre seções creme | Linha de "correntinha" de crochê com um pequeno leque central, em `#955251`. Decorativo |
| `selo-feito-a-mao.svg` | 1:1 (96×96) | Selo no hero | Círculo `#7A2338` com o texto em arco "FEITO À MÃO · PEÇA ÚNICA ·" em `#D9B77E` (5,2:1) e uma agulha de crochê no centro. Decorativo, com `aria-hidden` |
| `icon-whatsapp.svg` | 24×24 | Todos os botões de WhatsApp | Símbolo de balão com telefone, em `currentColor` (fica branco sobre vinho, nunca verde) |
| `icon-instagram.svg` | 24×24 | Rodapé, CTA final | Câmera arredondada |
| `icon-email.svg` | 24×24 | Rodapé | Envelope |
| `icon-localizacao.svg` | 24×24 | Rodapé ("São Paulo/SP") | Pino |
| `icon-envio.svg` | 24×24 | Linha de confiança do hero, passo 4 | Caixa com seta ou caminhão |
| `icon-pagamento.svg` | 24×24 | Linha de confiança do hero | Cartão |
| `icon-relogio.svg` | 24×24 | Passo 3, horário | Relógio |
| `icon-escolha.svg` | 24×24 | Passo 1 | Bolsa com coração |
| `icon-paleta.svg` | 24×24 | Passo 2 (personalizar) | Três novelos ou paleta de cores |
| `icon-agulha.svg` | 24×24 | Diferencial: exclusiva | Agulha de crochê com laço de fio |
| `icon-novelo.svg` | 24×24 | Diferencial: fios | Novelo |
| `icon-regua.svg` | 24×24 | Diferencial: sob medida | Fita métrica |
| `icon-presente.svg` | 24×24 | Diferencial: embalagem | Caixa com laço |
| `icon-aspas.svg` | 24×24 | Depoimentos | Aspas serifadas |
| `icon-caret.svg` | 24×24 | FAQ | Seta para baixo |
| `icon-menu.svg` | 24×24 | Hambúrguer | Três linhas |
| `icon-fechar.svg` | 24×24 | Fechar o menu | X |
| `icon-seta.svg` | 24×24 | Links "→" e setas entre passos | Seta para a direita |

---

## 9. Checklist de acessibilidade previsto

- [ ] `<html lang="pt-BR">`. Landmarks `header`, `nav` (com `aria-label="Principal"`), `main` e `footer`. Um único `h1` e hierarquia h2 → h3 sem saltos.
- [ ] Link "Pular para o conteúdo" como primeiro foco, visível ao receber foco.
- [ ] Todos os pares de texto da seção 2.2 em AA. Nada de dourado sobre creme, marsala em texto pequeno sobre rosé ou branco sobre verde.
- [ ] `:focus-visible` com anel de 3px (vinho em fundo claro, dourado em fundo vinho), contraste de 3:1 ou mais e nunca removido.
- [ ] Alvos de 44×44px ou mais (botões, links do rodapé, hambúrguer, summary do FAQ, botão flutuante).
- [ ] Links de WhatsApp e Instagram com texto visível e aviso "(abre em nova aba)" em texto `.sr-only` (não em `aria-label`). Ícones com `aria-hidden="true"`.
- [ ] Botões "Quero esta" com nome único por modelo via `.sr-only` após o texto visível (sem `aria-label`; WCAG 2.5.3).
- [ ] Menu mobile com `aria-expanded` e `aria-controls`, fechamento com Esc, gestão de foco e sem armadilha de foco.
- [ ] FAQ com `<details>/<summary>` nativos, operável por teclado.
- [ ] Imagens de conteúdo com `alt` descritivo, decorativas (texturas, selo, divisor, aspas) com `alt=""` ou aplicadas via CSS, e logo com `<title>` ou `aria-label`.
- [ ] `prefers-reduced-motion: reduce` desliga as revelações, o zoom e o smooth scroll, e o conteúdo fica visível sem JS.
- [ ] Texto redimensionável até 200% sem perda de conteúdo e sem rolagem horizontal em 320px (reflow).
- [ ] Links no texto corrido sublinhados (sem depender só da cor). Erros de formulário futuros indicados por texto e ícone.
- [ ] O botão flutuante não cobre conteúdo nem o rodapé e some quando o CTA final está visível.
- [ ] Texturas não reduzem o contraste do texto (opacidade de no máximo 0,10 atrás de texto).
- [ ] Dados fictícios, fotos de banco e depoimentos de exemplo identificados com comentários HTML e nota visível ("Fotos ilustrativas", "Depoimentos ilustrativos").
- [ ] `width`/`height` em todas as imagens (evita CLS), `loading="lazy"` fora do hero e fontes com `display=swap` e `preconnect`.
