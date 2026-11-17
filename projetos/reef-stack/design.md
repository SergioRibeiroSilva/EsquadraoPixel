# Design: Reef Stack (loja e clube de aquarismo, água doce e marinho)

> Designer UI, 2026-11-16. Entradas: `briefing.md` (com a "Atualização 2026-11-16": loja + clube Reef Stack, 12 seções revisadas) e `pesquisa.md`. Este documento é a especificação para o `desenvolvedor-frontend`, o `redator` e o `gerador-imagens`. Não contém HTML de produção.

---

## 1. Conceito

**Frase-conceito:** *"Camadas de água": um aquário visto de lado, em estratos empilhados (rio, lagoa, recife), com fundo azul-abismo, verde de aquário plantado, turquesa de água clara e um único acento coral.*

**Justificativa (ligada à pesquisa e ao briefing)**
- **"Stack" = camadas.** O recife é feito de camadas de esqueleto calcário, e um aquário bem montado também: substrato, rocha, água, luz. O gesto visual forte é a **"pilha de camadas"**: (a) o logotipo é formado por três faixas onduladas empilhadas (verde, turquesa e coral); (b) os divisores entre seções são **três ondas sobrepostas** em tons próximos (estratos); (c) os cartões de destaque têm uma **"sombra em pilha"**, com duas lâminas coloridas deslocadas por baixo, como placas empilhadas.
- **Doce não fica em segundo plano.** A pesquisa diz que a água doce é o melhor começo (`pesquisa.md` §1.1). Por isso a pilha começa pelo **verde** (rio/plantado, a camada de base) e sobe até o **coral** (recife). Em todo o site, **doce = verde** e **marinho = azul-oceano + coral**, como sugere a pesquisa (§2.2).
- **Loja e clube com autoridade.** Fundo escuro no hero e no clube transmite imersão (foto iluminada sobre fundo escuro, a composição típica dos bancos de imagem, §2.1). As seções de guia ficam claras e arejadas para leitura longa no celular.
- **Contenção.** Duas famílias tipográficas, uma cor de ação (coral), animação só no hero e no clube, com pausa e `prefers-reduced-motion` (§2.2, WCAG 2.2.2).

---

## 2. Tokens

### 2.1 Cores

Contrastes calculados pela fórmula de luminância relativa da WCAG 2.x (arredondados para baixo). Referência: AA = 4,5:1 para texto normal, 3:1 para texto grande (≥ 24 px, ou ≥ 18,66 px em negrito) e componentes de interface.

| Token | Hex | Função |
|---|---|---|
| `--abismo-950` | `#071C2C` | Rodapé, faixa mais profunda |
| `--abismo-900` | `#0B2A3F` | Base escura: cabeçalho, hero, clube; cor de texto principal sobre fundos claros |
| `--oceano-700` | `#12476B` | Superfície escura secundária (cartões sobre fundo escuro, cabeçalho "Marinho" nas tabelas) |
| `--lagoa-600` | `#0A6E78` | Turquesa escuro: links e ícones sobre fundo claro, botão secundário |
| `--lagoa-400` | `#2EC4C6` | Turquesa claro: destaques **sobre fundo escuro** e fundo para texto escuro. **Nunca com texto branco** |
| `--musgo-600` | `#1F6B4A` | Verde água doce: rótulos, ícones e bordas do tema doce sobre fundo claro; fundo para texto branco |
| `--musgo-300` | `#6FD49A` | Verde claro: destaques do tema doce **sobre fundo escuro** |
| `--coral-400` | `#FF7A59` | Acento de ação **sobre fundo escuro** (botão principal com texto `--abismo-900`) |
| `--coral-300` | `#FF9475` | Hover do botão coral sobre fundo escuro |
| `--coral-700` | `#B8432A` | Acento de ação **sobre fundo claro** (botão principal com texto branco) |
| `--coral-800` | `#9A3520` | Hover do botão coral sobre fundo claro |
| `--coral-50` | `#FBE9E4` | Fundo de etiquetas de alerta e de ícones coral (claro) |
| `--texto-900` | `#0B2A3F` | Títulos sobre fundo claro (mesmo hex de `--abismo-900`) |
| `--texto-700` | `#2E4656` | Texto corrido sobre fundo claro |
| `--neutro-500` | `#5A7383` | Texto auxiliar (legendas, créditos) e **bordas de campos** sobre fundo claro |
| `--espuma-300` | `#A9C4D3` | Texto secundário sobre fundo escuro |
| `--branco` | `#FFFFFF` | Texto sobre fundos escuros; superfície de cartões |
| `--espuma-50` | `#F3F8F9` | Fundo claro padrão das seções |
| `--musgo-50` | `#E6F2EA` | Fundo claro do tema doce |
| `--mare-50` | `#E5F1F7` | Fundo claro do tema marinho |
| `--linha-200` | `#C9D9E1` | Divisórias decorativas (sem função informativa) |

**Contrastes verificados (pares permitidos)**

| Primeiro plano | Fundo | Contraste | Uso permitido |
|---|---|---|---|
| `#FFFFFF` | `#0B2A3F` abismo-900 | ~14,8:1 | Qualquer texto |
| `#FFFFFF` | `#071C2C` abismo-950 | ~17,3:1 | Qualquer texto |
| `#FFFFFF` | `#12476B` oceano-700 | ~9,8:1 | Qualquer texto |
| `#A9C4D3` espuma-300 | `#0B2A3F` | ~8,1:1 | Texto secundário |
| `#A9C4D3` espuma-300 | `#071C2C` | ~9,5:1 | Texto do rodapé |
| `#A9C4D3` espuma-300 | `#12476B` | ~5,3:1 | Texto e bordas de campo no painel do clube |
| `#2EC4C6` lagoa-400 | `#0B2A3F` | ~6,9:1 | Destaques, ícones, foco sobre escuro |
| `#2EC4C6` lagoa-400 | `#12476B` | ~4,6:1 | Texto normal (no limite), prefira texto grande |
| `#6FD49A` musgo-300 | `#0B2A3F` | ~8,1:1 | Destaques do tema doce sobre escuro |
| `#FF7A59` coral-400 | `#0B2A3F` | ~5,7:1 | Texto e ícones coral sobre escuro |
| `#0B2A3F` | `#FF7A59` coral-400 | ~5,7:1 | **Texto do botão principal sobre escuro** |
| `#0B2A3F` | `#FF9475` coral-300 | ~6,8:1 | Botão principal em hover |
| `#0B2A3F` | `#2EC4C6` lagoa-400 | ~6,9:1 | Selos e etiquetas turquesa |
| `#FFFFFF` | `#B8432A` coral-700 | ~5,4:1 | **Texto do botão principal sobre claro** |
| `#FFFFFF` | `#9A3520` coral-800 | ~7,2:1 | Botão principal claro em hover |
| `#B8432A` coral-700 | `#F3F8F9` | ~5,0:1 | Texto e links coral sobre claro |
| `#B8432A` coral-700 | `#FBE9E4` coral-50 | ~4,6:1 | Etiqueta de alerta (Inter 600, ≥ 14 px) |
| `#0B2A3F` texto-900 | `#F3F8F9` | ~13,8:1 | Títulos |
| `#0B2A3F` texto-900 | `#E6F2EA` / `#E5F1F7` | ~12,9:1 | Títulos nos fundos temáticos |
| `#2E4656` texto-700 | `#F3F8F9` | ~9,2:1 | Texto corrido |
| `#2E4656` texto-700 | `#FFFFFF` | ~9,9:1 | Texto corrido em cartões |
| `#2E4656` texto-700 | `#E6F2EA` / `#E5F1F7` | ~8,6:1 | Texto corrido nos fundos temáticos |
| `#5A7383` neutro-500 | `#FFFFFF` | ~4,9:1 | Legenda; borda de campo (exige 3:1) |
| `#5A7383` neutro-500 | `#F3F8F9` | ~4,6:1 | Legenda (no limite: não usar abaixo de 14 px) |
| `#0A6E78` lagoa-600 | `#FFFFFF` | ~5,9:1 | Links |
| `#0A6E78` lagoa-600 | `#F3F8F9` | ~5,5:1 | Links |
| `#0A6E78` lagoa-600 | `#E5F1F7` | ~5,2:1 | Links no fundo marinho |
| `#FFFFFF` | `#0A6E78` lagoa-600 | ~5,9:1 | Botão secundário em hover, rádio selecionado |
| `#1F6B4A` musgo-600 | `#FFFFFF` | ~6,4:1 | Rótulos do tema doce |
| `#1F6B4A` musgo-600 | `#E6F2EA` | ~5,6:1 | Rótulos do tema doce no fundo verde |
| `#FFFFFF` | `#1F6B4A` musgo-600 | ~6,4:1 | Etiqueta "Água doce" e aba selecionada |

**Pares proibidos (reprovam no AA)**
- Branco sobre `#2EC4C6` lagoa-400: ~2,1:1. Branco sobre `#FF7A59` coral-400: ~2,5:1. Branco sobre `#E8603C` (o coral sugerido na pesquisa): ~3,4:1, por isso foi descartado.
- `#0B2A3F` sobre `#E8603C`: ~4,3:1, também descartado.
- `#2EC4C6`, `#6FD49A` ou `#FF7A59` como texto sobre fundos claros: entre ~1,7:1 e ~2,4:1.
- `#FF7A59` sobre `#12476B` oceano-700: ~3,8:1. Só para ícones e texto ≥ 24 px.

### 2.2 Tipografia (Google Fonts, 2 famílias)

- **Títulos:** **Sora**, pesos 600 e 700. Sans geométrica de traço limpo e levemente técnico, que combina com "Stack" sem ficar fria.
- **Corpo e interface:** **Inter**, pesos 400, 500 e 600 (700 só para a aba selecionada). Muito legível em telas pequenas, com algarismos tabulares (`font-variant-numeric: tabular-nums`) para a tabela de parâmetros.
- Carregamento: um único `<link>` do Google Fonts com `display=swap` e `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`. Pilhas de fallback: `"Sora", "Segoe UI", system-ui, sans-serif` e `"Inter", "Segoe UI", system-ui, sans-serif`.

| Token | Tamanho (mobile → desktop) | Família / peso | Altura de linha | Uso |
|---|---|---|---|---|
| `--fs-display` | `clamp(2.25rem, 1.5rem + 3.4vw, 4rem)` (36 → 64 px) | Sora 700, `letter-spacing: -0.02em` | 1.05 | H1 do hero |
| `--fs-h2` | `clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem)` (28 → 44 px) | Sora 700, `-0.015em` | 1.15 | Títulos de seção |
| `--fs-h3` | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` (20 → 24 px) | Sora 600 | 1.25 | Títulos de cartão |
| `--fs-lead` | `clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)` (18 → 21 px) | Inter 400 | 1.55 | Subtítulos e intro de seção |
| `--fs-body` | `1rem` → `1.0625rem` a partir de 900 px (16 → 17 px) | Inter 400 | 1.65 | Texto corrido |
| `--fs-small` | `0.875rem` (14 px) | Inter 500 | 1.5 | Legendas, créditos, etiquetas |
| `--fs-eyebrow` | `0.8125rem` (13 px), caixa alta, `letter-spacing: 0.12em` | Inter 600 | 1.4 | Sobretítulo acima do H2 (ex.: "LOJA", "CLUBE") |

O sobretítulo (eyebrow) usa a cor temática: `--lagoa-600` ou `--musgo-600` sobre claro, `--lagoa-400` sobre escuro. Com 13 px em peso 600, use só cores com contraste ≥ 4,5:1 da tabela.

Largura de leitura: parágrafos com `max-width: 65ch`.

### 2.3 Espaçamento (base 4 px)

`--sp-1` 4 · `--sp-2` 8 · `--sp-3` 12 · `--sp-4` 16 · `--sp-5` 24 · `--sp-6` 32 · `--sp-7` 48 · `--sp-8` 64 · `--sp-9` 96 · `--sp-10` 128 px.

- Respiro vertical das seções: `--sec-pad: clamp(64px, 8vw, 128px)` no topo e na base.
- Do eyebrow ao H2: `--sp-2`. Do H2 ao lead: `--sp-4`. Do lead ao conteúdo: `--sp-7`.

### 2.4 Raios

`--r-sm` 8 px (campos, etiquetas) · `--r-md` 16 px (cartões) · `--r-lg` 28 px (fotos de destaque, painéis) · `--r-pill` 999 px (botões, chips, abas).

### 2.5 Sombras

- `--sh-1`: `0 1px 2px rgb(11 42 63 / .06), 0 2px 8px rgb(11 42 63 / .06)`: cartões em repouso.
- `--sh-2`: `0 6px 24px rgb(11 42 63 / .12)`: cartões em hover e painel do menu.
- `--sh-stack` (assinatura "pilha", só em cartões de destaque: kit iniciante, próximo encontro do clube, endereço): `0 8px 0 -3px var(--lagoa-400), 0 16px 0 -6px var(--musgo-300)`. São duas lâminas deslocadas por baixo do cartão. Sobre fundo escuro, troque para `0 8px 0 -3px var(--oceano-700), 0 16px 0 -6px var(--lagoa-600)` (já previsto em `.tema-escuro`). As lâminas são decorativas: o cartão tem borda ou contraste próprio de fundo.

### 2.6 Movimento

- `--dur-fast` 150 ms, `--dur-med` 250 ms, `--ease` `cubic-bezier(.2,.7,.2,1)`.
- Bolhas: 18 s a 28 s por ciclo. Cáusticas: 24 s por ciclo. Só `transform` e `opacity` (nada de animar `background-position` ou `filter`).

### 2.7 Bloco `:root` pronto para copiar

```css
:root {
  /* Cores: base */
  --abismo-950: #071C2C;
  --abismo-900: #0B2A3F;
  --oceano-700: #12476B;
  /* Cores: turquesa */
  --lagoa-600: #0A6E78;
  --lagoa-400: #2EC4C6;
  /* Cores: água doce */
  --musgo-600: #1F6B4A;
  --musgo-300: #6FD49A;
  /* Cores: acento coral */
  --coral-50: #FBE9E4;
  --coral-300: #FF9475;
  --coral-400: #FF7A59;
  --coral-700: #B8432A;
  --coral-800: #9A3520;
  /* Texto e neutros */
  --texto-900: #0B2A3F;
  --texto-700: #2E4656;
  --neutro-500: #5A7383;
  --espuma-300: #A9C4D3;
  --linha-200: #C9D9E1;
  --branco: #FFFFFF;
  /* Fundos claros */
  --espuma-50: #F3F8F9;
  --musgo-50: #E6F2EA;
  --mare-50: #E5F1F7;

  /* Papéis de contexto (sobrescritos em .tema-escuro) */
  --bg: var(--espuma-50);
  --fg: var(--texto-700);
  --fg-forte: var(--texto-900);
  --fg-suave: var(--neutro-500);
  --link: var(--lagoa-600);
  --foco: var(--abismo-900);
  --acao-bg: var(--coral-700);
  --acao-fg: var(--branco);
  --acao-bg-hover: var(--coral-800);

  /* Tipografia */
  --font-titulo: "Sora", "Segoe UI", system-ui, sans-serif;
  --font-corpo: "Inter", "Segoe UI", system-ui, sans-serif;
  --fs-display: clamp(2.25rem, 1.5rem + 3.4vw, 4rem);
  --fs-h2: clamp(1.75rem, 1.35rem + 1.8vw, 2.75rem);
  --fs-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --fs-lead: clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem);
  --fs-body: 1rem;
  --fs-small: 0.875rem;
  --fs-eyebrow: 0.8125rem;

  /* Espaçamento */
  --sp-1: 4px;  --sp-2: 8px;  --sp-3: 12px; --sp-4: 16px; --sp-5: 24px;
  --sp-6: 32px; --sp-7: 48px; --sp-8: 64px; --sp-9: 96px; --sp-10: 128px;
  --sec-pad: clamp(64px, 8vw, 128px);
  --container: 1200px;
  --gutter: 20px;
  --header-h: 64px;

  /* Raios */
  --r-sm: 8px;
  --r-md: 16px;
  --r-lg: 28px;
  --r-pill: 999px;

  /* Sombras */
  --sh-1: 0 1px 2px rgb(11 42 63 / .06), 0 2px 8px rgb(11 42 63 / .06);
  --sh-2: 0 6px 24px rgb(11 42 63 / .12);
  --sh-stack: 0 8px 0 -3px var(--lagoa-400), 0 16px 0 -6px var(--musgo-300);

  /* Movimento */
  --dur-fast: 150ms;
  --dur-med: 250ms;
  --ease: cubic-bezier(.2, .7, .2, 1);

  /* Alvo de toque */
  --alvo: 44px;
}

@media (min-width: 600px) { :root { --gutter: 32px; } }
@media (min-width: 900px) { :root { --fs-body: 1.0625rem; --gutter: 40px; --header-h: 72px; } }

.tema-escuro {
  --bg: var(--abismo-900);
  --fg: var(--espuma-300);
  --fg-forte: var(--branco);
  --fg-suave: var(--espuma-300);
  --link: var(--lagoa-400);
  --foco: var(--lagoa-400);
  --acao-bg: var(--coral-400);
  --acao-fg: var(--abismo-900);
  --acao-bg-hover: var(--coral-300);
  --sh-stack: 0 8px 0 -3px var(--oceano-700), 0 16px 0 -6px var(--lagoa-600);
}
```

O cabeçalho, o hero, o clube e o rodapé recebem a classe `.tema-escuro`.

---

## 3. Grid e regras gerais de layout

- **Container:** `width: min(100% - 2 * var(--gutter), var(--container)); margin-inline: auto`.
- **Grid de colunas:** 4 colunas abaixo de 600 px (gap 16 px), 8 colunas de 600 a 899 px (gap 24 px), 12 colunas a partir de 900 px (gap 32 px). Na prática, use `display: grid` com `grid-template-columns: repeat(auto-fit, minmax(…, 1fr))` para listas de cartões e grids explícitos só onde indicado.
- **Âncoras:** `html { scroll-padding-top: calc(var(--header-h) + 16px); }`. O `scroll-behavior: smooth` vai dentro de `@media (prefers-reduced-motion: no-preference)`.
- **Cabeçalho de seção (padrão):** eyebrow, H2 e lead, alinhados à esquerda no mobile e centralizados (`max-width: 720px; margin-inline: auto; text-align: center`) a partir de 900 px nas seções de cartões (Loja, Clube, Depoimentos). Nas seções de guia (Doce × Marinho, Primeiros passos, Parâmetros, FAQ), sempre à esquerda.
- **Divisor de camadas** (`assets/divisor-camadas.svg`, ver §8): três ondas sobrepostas, com altura de 48 px no mobile e 80 px no desktop, `width: 100%`, `display: block`, `aria-hidden="true"`. As três camadas usam `currentColor` com opacidades 1, .55 e .25, de modo que o mesmo SVG (inline, para herdar `color`) serve em qualquer transição: a cor é a do fundo da seção **seguinte**, e o fundo do divisor é o da seção anterior. Use-o só nas transições claro ↔ escuro (hero → loja, parâmetros → clube, clube → compromisso, visite → rodapé). Entre seções claras, basta trocar o fundo.

---

## 4. Estrutura da página

Ordem, `id` e fundo. A alternância de fundos forma os "estratos".

| # | Seção | `id` | Fundo |
|---|---|---|---|
| 0 | Link "Pular para o conteúdo" | — | — |
| 1 | Cabeçalho | `topo` | `--abismo-900` (sólido) |
| 2 | Hero | `inicio` | `--abismo-900` + cáusticas + bolhas |
| 3 | Na loja | `loja` | `--espuma-50` |
| 4 | Água doce × Marinho + espécies | `doce-marinho` | `--branco` com painéis temáticos |
| 5 | Primeiros passos / kit iniciante | `primeiros-passos` | `--espuma-50` |
| 6 | Parâmetros da água | `parametros` | `--branco` |
| 7 | Clube Reef Stack | `clube` | `--abismo-900` + cáusticas (tema escuro) |
| 8 | Compromisso (bem-estar e procedência) | `compromisso` | `--musgo-50` |
| 9 | Depoimentos (exemplo) | `depoimentos` | `--espuma-50` |
| 10 | Perguntas frequentes e erros comuns | `faq` | `--branco` |
| 11 | Visite a loja | `visite` | `--mare-50` |
| 12 | Rodapé | — | `--abismo-950` |
| — | Botão flutuante do WhatsApp | — | — |

### 4.0 Pular para o conteúdo
Link visualmente escondido que aparece no foco, fixo no topo à esquerda, `z-index` acima do cabeçalho, fundo `--lagoa-400` e texto `--abismo-900` (~6,9:1), padding 12 × 16, raio `--r-sm`. Aponta para `#conteudo` (o `<main>`).

### 4.1 Cabeçalho
- **Objetivo:** identidade, navegação por âncoras e o CTA principal (WhatsApp) sempre à mão.
- **Conteúdo:** logo (SVG, link para `#inicio`, com `aria-label="Reef Stack, início"`), navegação com 6 itens (Loja, Doce × Marinho, Primeiros passos, Parâmetros, Clube, Visite), botão "Pedir no WhatsApp".
- **Layout:** `position: sticky; top: 0`, altura `--header-h`, fundo **sólido** `--abismo-900` e linha inferior de 1 px `rgb(255 255 255 / .08)`. Logo à esquerda (altura 32 px no mobile, 36 px no desktop).
  - **Mobile e tablet (< 900 px):** logo + botão de menu (ícone de três faixas onduladas empilhadas que vira "X"; 44 × 44, `aria-expanded`, `aria-controls="menu-principal"`, rótulo "Abrir menu"/"Fechar menu"). O painel do menu é `position: fixed; inset: var(--header-h) 0 0 0`, com fundo `--abismo-900`, links em coluna (Sora 600, 22 px, cada um com altura mínima de 56 px e divisória `rgb(255 255 255 / .08)`) e o botão WhatsApp de largura total no fim. Ao abrir: `overflow: hidden` no `body`, foco no primeiro link, `Esc` fecha e devolve o foco ao botão, e clicar num link fecha o painel. Fechado, o painel recebe `hidden` (ou `visibility: hidden`) para sair da ordem de tabulação.
  - **Desktop (≥ 900 px):** links em linha (Inter 500, 15 px, `--espuma-300`; ativo/hover `--branco` com sublinhado de 2 px `--lagoa-400`, `text-underline-offset: 6px`) + botão WhatsApp compacto à direita.
- **Lição de projeto anterior (obrigatória):** **não usar `backdrop-filter`, `filter`, `transform`, `perspective`, `contain` nem `will-change` no cabeçalho** nem em ancestrais do painel do menu. Essas propriedades criam um novo bloco de contenção, e o painel `position: fixed` fica preso dentro da altura do cabeçalho. O fundo do cabeçalho é cor sólida.
- **Rolagem:** depois de 24 px de rolagem, o cabeçalho ganha `box-shadow: 0 2px 12px rgb(0 0 0 / .25)` (classe via `IntersectionObserver` num sentinela, sem listener de scroll pesado).
- **Item ativo:** destaque o link da seção visível com `aria-current="true"` (via `IntersectionObserver`), usando o mesmo estilo do hover.

### 4.2 Hero (`#inicio`)
- **Objetivo:** dizer em 3 segundos que a Reef Stack é loja + clube dos dois mundos, oferecer o CTA do WhatsApp e os dois caminhos "Água doce" e "Marinho".
- **Conteúdo (o texto vem do redator):** eyebrow ("Loja e clube de aquarismo"), H1 (slogan curto; até ~8 palavras), lead (1 a 2 frases), botão principal "Pedir no WhatsApp", botão secundário fantasma "Conhecer o clube" (`#clube`) e **dois cartões-caminho** com foto: "Água doce" e "Marinho", cada um com uma linha de apoio (ex.: "Plantados, peixes de cativeiro, camarões") e uma seta.
- **Layout mobile (< 900 px):** texto no topo, CTAs empilhados em largura total (gap 12), depois os dois cartões-caminho **lado a lado** (2 colunas, gap 12), cada um com foto em proporção 4:5, raio `--r-md`, legenda sobre um degradê inferior (ver §5.4). Altura do hero: conteúdo + `--sp-8`. Não force `100vh`.
- **Layout desktop (≥ 900 px):** grid de 12 colunas. Texto nas colunas 1 a 6, centralizado na vertical. Nas colunas 7 a 12, os **dois cartões empilhados em cascata** ("stack"): o cartão "Água doce" acima e à esquerda, o cartão "Marinho" abaixo e à direita, sobrepondo uns 15% do primeiro. Cada cartão tem 4:5 e largura de ~62% da área. `min-height: min(760px, 88vh)`.
- **Fundo:** `--abismo-900` com degradê radial de `--oceano-700` (canto superior direito, 60% de opacidade), mais a camada de **cáusticas** (`assets/causticas.svg` em `::before`, opacidade .12, `mix-blend-mode: screen`) e a camada de **bolhas** (ver §6.1). O texto nunca fica sobre foto, então o contraste é o do fundo escuro (branco ~14,8:1; `--espuma-300` ~8,1:1).
- **Detalhe de marca:** o H1 pode ter uma palavra-chave sublinhada por uma onda SVG de 3 traços (verde, turquesa, coral), reaproveitando o logo. É decorativa (`aria-hidden`).
- **Botão de pausa das animações:** no canto inferior direito do hero (ver §6.3).
- **Saída:** divisor de camadas na cor `--espuma-50`.

### 4.3 Na loja (`#loja`)
- **Objetivo:** mostrar as categorias e levar ao pedido pelo WhatsApp.
- **Conteúdo:** eyebrow "Na loja", H2, lead; **7 cartões de categoria**: peixes de cativeiro; corais e frags; plantas aquáticas; camarões; equipamentos; rações e testes; montagem e manutenção. Cada cartão tem ícone SVG, título H3, 1 a 2 linhas de descrição e, quando houver, um chip "a partir de R$ X" (valor fictício, marcado pelo redator). No fim, uma faixa com CTA "Pedir orçamento no WhatsApp" e uma foto do ambiente da loja.
- **Layout:**
  - < 600 px: 1 coluna; cartão horizontal (ícone 48 px à esquerda, texto à direita), gap 12.
  - 600 a 899 px: 2 colunas, cartões verticais; o 7º cartão ocupa as 2 colunas.
  - ≥ 900 px: 4 colunas. O 7º cartão ("Montagem e manutenção") ocupa 2 colunas e usa a variante de destaque escura (fundo `--abismo-900`, texto branco, chip turquesa), fechando a grade sem buraco (4 + 2 simples + 1 duplo = 2 linhas cheias).
  - **Faixa de CTA:** grid de 2 colunas a partir de 900 px. À esquerda, foto do ambiente da loja (16:10, `--r-lg`); à direita, H3, uma frase e o botão principal. No mobile, a foto vem antes e tudo fica empilhado.
- **Ícones:** a cor segue o mundo da categoria: `--musgo-600` (plantas, camarões), `--lagoa-600` (corais, peixes, equipamentos, rações e testes), `--coral-700` (montagem). Fundo do ícone: círculo de 48 px em `--musgo-50` / `--mare-50` / `--coral-50` (decorativo).

### 4.4 Água doce × Marinho (`#doce-marinho`)
- **Objetivo:** ajudar a escolher o caminho e apresentar espécies boas para iniciantes, com a divisão visual doce × marinho mais clara do site.
- **Bloco A, comparativo:** tabela semântica (`<table>`, `<caption>`, `<th scope="col">` e `<th scope="row">`) com 3 colunas: Critério | Água doce | Marinho. Linhas: custo inicial, preço dos animais, dificuldade, manutenção semanal, equipamentos extras, para quem é. Nada de preços em reais (`pesquisa.md` §1.1).
  - **Cabeçalhos coloridos:** a célula "Água doce" tem fundo `--musgo-600` com texto branco (~6,4:1) e ícone de folha; "Marinho" tem fundo `--oceano-700` com texto branco (~9,8:1) e ícone de coral. As colunas de dados têm fundo `--musgo-50` e `--mare-50` (texto `--texto-700`, ~8,6:1). A coluna Critério fica em branco, com texto `--texto-900` Inter 600.
  - **≥ 600 px:** tabela normal, largura 100%, células com padding 16 × 20, raio externo `--r-md` (`border-collapse: separate; border-spacing: 0; overflow: hidden`).
  - **< 600 px (empilhada):** cada `<tr>` vira um cartão (`display: block`, borda 1 px `--linha-200`, raio `--r-md`, margem inferior 12). O `<th scope="row">` vira o título do cartão (Sora 600, 18 px). Cada `<td>` vira uma linha com rótulo antes do valor via `td::before { content: attr(data-label) }` (Inter 600, 13 px, caixa alta, `--musgo-600` para "Água doce" e `--lagoa-600` para "Marinho") e uma barra lateral esquerda de 4 px verde (`--musgo-600`) ou azul (`--oceano-700`). O `<thead>` é escondido visualmente (classe `visually-hidden`, não `display: none`). Para manter a semântica de tabela nos leitores de tela ao mudar o `display`, aplique `role="table"`, `role="rowgroup"`, `role="row"`, `role="rowheader"`, `role="columnheader"` e `role="cell"` nos elementos.
  - Abaixo da tabela, nota em `--fs-small`: "Comparação em proporções; valores variam conforme tamanho e equipamento."
- **Bloco B, alternador doce × marinho (espécies para iniciantes):** componente de **abas** (§5.6) com duas abas, "Água doce" e "Marinho", centralizadas acima do painel.
  - Painel "Água doce" (`id="especies-doce"`, fundo `--musgo-50`, raio `--r-lg`, padding 24 no mobile e 40 no desktop): 4 cartões de espécie: tetra-neon, guppy (lebiste), betta (com o aviso "um macho por aquário") e camarão *Neocaridina*. Mais uma linha sobre plantas fáceis (texto + chip "Plantas na loja").
  - Painel "Marinho" (`id="especies-marinho"`, fundo `--mare-50`): 4 cartões: palhaço de cativeiro (*Amphiprion ocellaris*), grama-real (*Gramma loreto*), gobi/firefish e frags de corais moles. Inclui o selo "Criado em cativeiro" onde couber.
  - Cartão de espécie: foto 4:3 no topo, nome popular (H3), nome científico em itálico (`--fg-suave`), 2 a 3 chips ("Nível: fácil", "Cardume", "Aquário comunitário") e uma linha de cuidado.
  - Grade dos cartões: 1 coluna < 600 px; 2 colunas de 600 a 1199 px; 4 colunas ≥ 1200 px.
  - **Sem JS:** os dois painéis aparecem um após o outro, cada um com seu H3 ("Água doce para começar", "Marinho para começar"). O JS adiciona os roles ARIA e esconde o painel inativo.
  - **Sincronização:** os cartões-caminho do hero apontam para `#especies-doce` e `#especies-marinho`. O JS, ao detectar esse hash (no clique, no carregamento e no `hashchange`), ativa a aba do painel antes de rolar. A aba escolhida também vale para a seção Parâmetros (§4.6) e fica guardada em `sessionStorage`.

### 4.5 Primeiros passos / kit iniciante (`#primeiros-passos`)
- **Objetivo:** mostrar o passo a passo seguro (com ciclagem) e vender o kit iniciante.
- **Conteúdo:** H2, lead; **lista ordenada de 6 passos** (`pesquisa.md` §1.4): escolher tipo e tamanho; montar substrato, rocha e equipamentos; tratar a água; **ciclar sem peixes**; introduzir poucos peixes com aclimatação/quarentena; manter a rotina. Ilustração do **ciclo do nitrogênio** em SVG. **Cartão "Kit iniciante"** com a lista de itens (filtro, aquecedor com termostato, termômetro, luz com timer, testes, condicionador, sifão) e CTA "Montar meu kit no WhatsApp".
- **Layout:**
  - Mobile: lista de passos em coluna. Cada passo tem marcador numerado (círculo de 40 px, Sora 700, fundo `--abismo-900`, número `--lagoa-400`, ~6,9:1), ligado ao próximo por uma linha vertical tracejada de 2 px `--linha-200` (a "pilha" de etapas). O passo 4 (ciclagem) é destacado: fundo `--branco`, borda esquerda de 4 px `--coral-700`, etiqueta "Essencial" (fundo `--coral-700`, texto branco, ~5,4:1) e a ilustração do ciclo do nitrogênio dentro dele. Depois vem o cartão do kit.
  - ≥ 900 px: 2 colunas (7/5). À esquerda, a lista de passos; à direita, o cartão "Kit iniciante" `position: sticky; top: calc(var(--header-h) + 24px)` com `--sh-stack`.
  - Ilustração do ciclo: SVG com `role="img"` e `<title>`/`<desc>` (ex.: "Ciclo do nitrogênio: restos de comida viram amônia, bactérias a transformam em nitrito e depois em nitrato, removido nas trocas de água e pelas plantas"). Mobile: fluxo vertical (amônia → nitrito → nitrato); ≥ 600 px: fluxo horizontal (duas versões via `<picture>` com `media="(min-width: 600px)"`). Rótulos do SVG em texto real (`<text>`, Inter), com ≥ 14 px na tela.
  - Cartão kit: liste os itens comuns e um bloco "No marinho, some:" (sal, refratômetro, skimmer, bombas, rocha) com marcador coral. Não precisa de abas.

### 4.6 Parâmetros da água (`#parametros`)
- **Objetivo:** referência técnica rápida, com a ressalva de que são **faixas de referência**.
- **Conteúdo:** H2, lead e um **aviso destacado** acima da tabela: "Faixas de referência: a espécie manda e estabilidade vale mais que um número exato. No marinho, consulte um especialista." (texto final do redator; caixa com fundo `--mare-50`, borda esquerda de 4 px `--lagoa-600`, ícone de informação). Abas "Água doce" / "Marinho" (mesmo componente do §4.4, sincronizadas). Cada painel tem uma tabela de 3 colunas: Parâmetro | Faixa de referência | Observação.
  - Doce: temperatura, pH, amônia, nitrito, nitrato, GH, KH.
  - Marinho: temperatura, densidade/salinidade (recifal × FOWLR), pH, amônia/nitrito, nitrato, cálcio, alcalinidade, magnésio. As linhas com valor a confirmar (pH e nitrato do marinho, `pesquisa.md` §1.7) recebem a etiqueta "Revisão técnica pendente" (fundo `--coral-50`, texto `--coral-700`, ~4,6:1; Inter 600 14 px, nunca menor).
- **Tabela:** `font-variant-numeric: tabular-nums`; coluna Faixa em Inter 600 `--texto-900`; linhas zebradas (`--espuma-50` nas pares, texto `--texto-700` ~9,2:1); cabeçalho com fundo `--musgo-600` (aba doce) ou `--oceano-700` (aba marinho) e texto branco.
  - **≥ 600 px:** tabela normal. Se faltar largura entre 600 e 700 px, a tabela fica num contêiner `overflow-x: auto` com `tabindex="0"`, `role="region"` e `aria-label` ("Tabela de parâmetros, role para o lado"), com foco visível.
  - **< 600 px:** **empilhada**, igual ao comparativo (§4.4): cada linha vira um cartão com o nome do parâmetro como título, e "Faixa de referência" e "Observação" como pares rótulo/valor via `data-label`. A faixa aparece em Sora 600, 20 px, para leitura rápida.
- Abaixo: link "Precisa testar sua água? Traga uma amostra à loja" (texto do redator), estilo link padrão.
- **Saída:** divisor de camadas na cor `--abismo-900`.

### 4.7 Clube Reef Stack (`#clube`), tema escuro
- **Objetivo:** converter em participação no clube ("Quero participar").
- **Conteúdo:** eyebrow "Clube", H2, lead; **4 benefícios** (encontros mensais, oficinas práticas, troca de mudas e frags, grupo de conversa), cada um com ícone, título e uma linha; um **cartão "Próximo encontro"** (data, horário e tema fictícios, marcados "exemplo"); foto de um encontro (pessoas diante de um aquário); **formulário de interesse** que monta a mensagem para o WhatsApp (§5.7); CTA "Quero participar".
- **Fundo:** classe `.tema-escuro`, `--abismo-900`, camada de cáusticas (a mesma do hero, opacidade .08) **sem bolhas**. A pausa global (§6.3) também para as cáusticas daqui.
- **Layout:**
  - Mobile: cabeçalho de seção; foto 16:10 (`--r-lg`); benefícios em 1 coluna (ícone 40 px `--lagoa-400`, título branco, texto `--espuma-300`); cartão "Próximo encontro" (fundo `--oceano-700`, `--sh-stack` versão escura, data em Sora 700 32 px `--coral-400`, ~3,8:1 sobre oceano-700, permitido por ser texto grande; o resto do texto em branco); formulário; botão principal de largura total.
  - 600 a 899 px: benefícios em 2 colunas.
  - ≥ 900 px: grid de 12 colunas. Colunas 1 a 6: cabeçalho, benefícios (2 × 2) e cartão "Próximo encontro". Colunas 7 a 12: foto (4:3) e, abaixo, o formulário num painel `--oceano-700` com raio `--r-lg` e padding 32.
- Ícones de benefício: traço de 2 px, `--lagoa-400` (~6,9:1); o de "troca de mudas e frags" usa `--musgo-300`, lembrando a água doce.
- **Saída:** divisor de camadas na cor `--musgo-50`.

### 4.8 Compromisso: bem-estar animal e procedência legal (`#compromisso`)
- **Objetivo:** confiança e responsabilidade (`pesquisa.md` §1.9).
- **Conteúdo:** H2, lead; **4 compromissos**: animais de cativeiro e aquicultura sempre que possível; procedência legal e fornecedores regularizados; orientação honesta (não vendemos espécie inadequada para o seu aquário); **nunca solte peixes, plantas ou água de aquário na natureza** (redação segura da pesquisa). Mais uma faixa de diferenciais curtos (ex.: quarentena na loja, testes de água, entrega).
- **Layout:** fundo `--musgo-50`. Mobile: 4 itens em coluna, cada um com ícone em círculo de 56 px (fundo `--branco`, traço `--musgo-600`) + H3 + texto. 600 a 899 px: 2 colunas. ≥ 900 px: 4 colunas. O compromisso "Nunca solte na natureza" usa a variante de alerta: borda superior de 4 px `--coral-700` e ícone `--coral-700`.
- Diferenciais: chips em linha que quebram (`flex-wrap`), fundo `--branco`, texto `--musgo-600` Inter 600 (~6,4:1), altura 40 px (são informativos, não clicáveis).

### 4.9 Depoimentos (exemplo) (`#depoimentos`)
- **Objetivo:** prova social. **São exemplos, marcados "substituir antes de publicar"** (o `gerador-imagens` e o redator marcam nos arquivos).
- **Conteúdo:** H2; 3 depoimentos: citação (`<blockquote>`), nome, perfil curto ("Aquarista de plantados, 2 anos"), foto redonda de 56 px e etiqueta "Doce" ou "Marinho". Uma nota pequena: "Depoimentos ilustrativos." (recomendo deixá-la visível enquanto forem exemplos; decisão final do redator).
- **Layout:** sem carrossel (evita animação automática e controles extras). Mobile: 1 coluna. 600 a 899 px: 2 colunas, terceiro cartão com largura total. ≥ 900 px: 3 colunas.
- Cartão: fundo `--branco`, `--sh-1`, raio `--r-md`, padding 24; aspas decorativas em SVG `--lagoa-400` de 40 px (decorativas, `aria-hidden`); citação em `--fs-lead` `--texto-900`.

### 4.10 Perguntas frequentes e erros comuns (`#faq`)
- **Objetivo:** tirar dúvidas de compra, entrega, clube e iniciante; reforçar boas práticas.
- **Conteúdo:** H2; dois grupos com H3: "Dúvidas sobre a loja e o clube" (6 a 8 perguntas) e "Erros comuns de iniciante" (5 a 7 itens, `pesquisa.md` §1.8). Cada item é um `<details>/<summary>`. No fim, "Não achou sua dúvida?" + botão secundário "Perguntar no WhatsApp".
- **Layout:** mobile: grupos empilhados. ≥ 900 px: 2 colunas (loja/clube à esquerda; erros comuns à direita, com ícone de alerta coral em cada `summary`). Ver o acordeão em §5.8.
- Não prometer rich result de FAQ (`pesquisa.md` §2.2). JSON-LD de FAQPage é opcional.

### 4.11 Visite a loja (`#visite`)
- **Objetivo:** endereço, horários e contato. **Sem mapa interativo** (dados fictícios; uma coordenada fictícia apontaria para um lugar real).
- **Conteúdo:** H2; cartão de endereço (rua, bairro, cidade, CEP fictícios), horários (seg. a sex., sáb., dom./feriados), telefone/WhatsApp, e-mail, Instagram; botões "Pedir no WhatsApp" (principal) e "Ligar" (secundário, `tel:`). **Não** incluir "Como chegar" nem link do Google Maps enquanto o endereço for fictício. Imagem: **mapa ilustrativo em SVG** (abstrato: quarteirões, um rio, um pino coral), com legenda visível "Mapa ilustrativo" e `alt="Mapa ilustrativo, sem localização real"`. Opcionalmente, foto da vitrine/interior da loja.
- **Layout:** fundo `--mare-50`. Mobile: cartão de endereço (`--branco`, `--sh-stack`, padding 24) e mapa ilustrativo abaixo (16:10, `--r-lg`). ≥ 900 px: 2 colunas (5/7), cartão à esquerda, ilustração à direita.
- **Horários:** lista de definições (`<dl>`) em 2 colunas (dia | horário), que funciona no celular sem empilhar. Dia de hoje destacado (opcional, via JS): Inter 600 + marcador `--lagoa-600`.
- Ícones de linha (pino, relógio, telefone, e-mail) de 20 px em `--lagoa-600`.
- **Saída:** divisor de camadas na cor `--abismo-950`.

### 4.12 Rodapé
- **Fundo:** `--abismo-950`, texto `--espuma-300` (~9,5:1), títulos `--branco`, links `--lagoa-400` em hover.
- **Conteúdo:** logo + slogan; navegação (as mesmas âncoras); contato (WhatsApp, e-mail, endereço resumido); redes (Instagram, YouTube, Facebook, fictícias) como **ícones de 44 × 44** com `aria-label`; **créditos das fotos** (arquivo/uso, autor, banco, licença, link) dentro de um `<details>` "Créditos das fotos"; linha legal ("© 2026 Reef Stack. CNPJ fictício."); aviso discreto "Dados de contato fictícios" enquanto não houver dados reais (decisão do redator/orquestrador).
- **Layout:** mobile: 1 coluna, blocos separados por 32 px. 600 a 899 px: 2 colunas. ≥ 900 px: 4 colunas (marca 4 / navegação 2 / contato 3 / redes 3, de 12). Créditos e linha legal ocupam a largura toda abaixo, separados por 1 px `rgb(255 255 255 / .1)`.
- **Alvos de toque (lição anterior):** **todos os links do rodapé com área mínima de 44 × 44 px**. Links de texto em lista com `display: inline-flex; align-items: center; min-height: 44px`; ícones de rede em caixa de 44 × 44 com gap de 8 px; links dos créditos e o `summary` do `<details>` também com `min-height: 44px`.
- **Espaço para o botão flutuante:** `padding-bottom: 96px` no mobile, para o botão do WhatsApp não cobrir o último link.

### 4.13 Botão flutuante do WhatsApp
- Círculo de 56 px, `position: fixed; right: 16px; bottom: 16px` (24 px a partir de 900 px), fundo `--coral-400`, ícone do WhatsApp em `--abismo-900` (~5,7:1), `--sh-2`, `aria-label="Pedir pelo WhatsApp (abre o WhatsApp)"`. Aparece só depois que o hero sai da tela (`IntersectionObserver`; transição de `opacity` + `translateY(8px)`; com reduced-motion, só `opacity`). Escondido enquanto o menu mobile está aberto. `z-index` abaixo do cabeçalho e do painel do menu.
- Opcional a partir de 900 px: expande para a pílula "Pedir no WhatsApp" no hover/foco.
- Foco: outline 3 px `--abismo-900` com offset 3 e, por fora, `box-shadow: 0 0 0 6px var(--branco)` para ficar visível sobre fundos claros e escuros.

---

## 5. Componentes e estados

Regra geral de foco (todos os interativos): `:focus-visible { outline: 3px solid var(--foco); outline-offset: 3px; }`. `--foco` é `--abismo-900` sobre claro (~13,8:1 contra `--espuma-50`) e `--lagoa-400` sobre escuro (~6,9:1 contra `--abismo-900`). Nunca remover o outline sem substituto. Transições: `--dur-fast` em cor/sombra, `--dur-med` em transform; desligadas com reduced-motion.

### 5.1 Botões

Altura mínima 48 px (44 px no cabeçalho desktop), padding 0 24 px, raio `--r-pill`, Inter 600 16 px, `gap: 8px` para o ícone (20 px). Largura total em < 600 px quando estiver em grupo de CTAs. Use os papéis `--acao-bg`, `--acao-fg` e `--acao-bg-hover` para que o mesmo botão funcione em contexto claro e escuro.

| Variante | Normal | Hover | Foco | Ativo (pressionado) | Desabilitado |
|---|---|---|---|---|---|
| **Principal sobre claro** | fundo `--coral-700`, texto branco (~5,4:1) | fundo `--coral-800` (~7,2:1), `translateY(-1px)`, `--sh-2` | outline 3 px `--abismo-900`, offset 3 | fundo `--coral-800`, `translateY(0)`, sem sombra | fundo `--linha-200`, texto `--neutro-500`, `cursor: not-allowed`, `aria-disabled="true"` |
| **Principal sobre escuro** (`.tema-escuro`) | fundo `--coral-400`, texto `--abismo-900` (~5,7:1) | fundo `--coral-300` (~6,8:1), `translateY(-1px)` | outline 3 px `--lagoa-400` | fundo `--coral-300`, `translateY(0)` | fundo `rgb(255 255 255 / .12)`, texto `--espuma-300` |
| **Secundário sobre claro** (contorno) | borda 2 px `--lagoa-600`, texto `--lagoa-600` (~5,5:1), fundo transparente | fundo `--lagoa-600`, texto branco (~5,9:1) | outline `--abismo-900` | fundo `#085A62`, texto branco | borda e texto `--neutro-500` com opacidade .6 |
| **Secundário sobre escuro** (fantasma) | borda 2 px `rgb(255 255 255 / .6)`, texto branco | fundo `rgb(255 255 255 / .1)`, borda branca | outline `--lagoa-400` | fundo `rgb(255 255 255 / .16)` | opacidade .5 |
| **Link de texto** | `--link`, sublinhado 1 px, `text-underline-offset: 3px` | sublinhado 2 px | outline 3 px `--foco`, raio 4 px | — | — |

Botões que abrem o WhatsApp levam o ícone do WhatsApp à esquerda, `target="_blank"`, `rel="noopener"` e o texto "(abre o WhatsApp)" visualmente escondido.

### 5.2 Navegação
- Links desktop: ver §4.1. Área clicável de 44 px de altura (padding vertical).
- Botão de menu: 44 × 44, ícone 24 px branco. Hover: fundo `rgb(255 255 255 / .08)`, raio `--r-sm`. Foco: outline `--lagoa-400`. Aberto: o ícone vira "X" (transição de 200 ms nas três faixas; com reduced-motion, troca instantânea).
- Links do painel mobile: hover/foco com fundo `rgb(255 255 255 / .06)` e marcador de 4 px `--lagoa-400` à esquerda; atual (`aria-current`) com texto `--lagoa-400`.

### 5.3 Cartões (base)
- Fundo `--branco`, raio `--r-md`, padding 24 (20 em < 600 px), `--sh-1`, borda 1 px `--linha-200` (decorativa; o cartão não é interativo por padrão).
- **Cartão clicável** (quando o cartão inteiro é link, ex.: cartões-caminho): um único `<a>` no título, com a área expandida por `::after { content: ""; position: absolute; inset: 0 }`. Hover: `--sh-2` e `translateY(-2px)`. Foco: outline no cartão inteiro (`:focus-within`). Ativo: `translateY(0)`.
- **Variante destaque escura:** fundo `--abismo-900`, título branco, texto `--espuma-300`, chip `--lagoa-400` com texto `--abismo-900`.
- **Variante "pilha":** adiciona `--sh-stack` e `margin-bottom: 16px` para as lâminas não colidirem com o conteúdo de baixo.

### 5.4 Cartão-caminho do hero (Água doce / Marinho)
- Foto em `object-fit: cover`, proporção 4:5, raio `--r-md` (mobile) / `--r-lg` (desktop), borda 2 px `rgb(255 255 255 / .14)`, `overflow: hidden`.
- Rodapé do cartão sobre a foto: degradê `linear-gradient(to top, rgb(7 28 44 / .92) 0%, rgb(7 28 44 / .75) 45%, transparent 100%)` cobrindo os 55% inferiores. O texto fica sempre na faixa com opacidade ≥ .75, então o branco passa de 7:1 mesmo sobre foto clara (verificar na inspeção visual). Etiqueta superior: "Água doce" (fundo `--musgo-600`, texto branco ~6,4:1) ou "Marinho" (fundo `--lagoa-400`, texto `--abismo-900` ~6,9:1). Título em Sora 700 20 px (mobile) / 24 px (desktop), branco, com seta.
- Hover: a foto faz `scale(1.04)` em 400 ms (com reduced-motion, sem escala) e a seta anda 4 px. Foco: outline 3 px `--lagoa-400`, offset 4. Ativo: escala 1.02.
- Destino: `#especies-doce` / `#especies-marinho` (ativa a aba correspondente, §4.4).

### 5.5 Chips e etiquetas
- Altura 28 px, padding 0 12 px, raio `--r-pill`, Inter 600 13 px.
- Doce: fundo `--musgo-50`, texto `--musgo-600` (~5,6:1). Marinho: fundo `--mare-50`, texto `--lagoa-600` (~5,2:1). Preço "a partir de": fundo `--espuma-50`, borda 1 px `--linha-200`, texto `--texto-900`. Essencial: fundo `--coral-700`, texto branco (~5,4:1). Revisão pendente: fundo `--coral-50`, texto `--coral-700`, **14 px** (~4,6:1).
- Chips não são clicáveis (sem hover). Se algum virar filtro, passa a seguir as regras de aba (altura 44 px).

### 5.6 Abas (alternador doce × marinho)
- Padrão ARIA Tabs: `role="tablist"` com `aria-label="Escolha o tipo de aquário"`, botões `role="tab"`, `aria-selected`, `aria-controls`, `tabindex` móvel (0 na selecionada, −1 nas outras), painéis `role="tabpanel"` com `aria-labelledby` e `tabindex="0"`. Setas esquerda/direita alternam, Home/End vão para as pontas, ativação automática.
- Visual: **controle segmentado em pílula**. Contêiner com fundo `--branco`, borda 1 px `--neutro-500` (≥ 3:1, delimita o componente), raio `--r-pill`, padding 4. Cada aba: altura mínima de 44 px, padding 0 20, Inter 600 15 px, ícone de folha (doce) ou coral (marinho) de 20 px.

| Estado | Aba "Água doce" | Aba "Marinho" |
|---|---|---|
| Normal (não selecionada) | fundo transparente, texto `--texto-700` (~9,9:1) | idem |
| Hover | fundo `--musgo-50`, texto `--musgo-600` (~5,6:1) | fundo `--mare-50`, texto `--lagoa-600` (~5,2:1) |
| Selecionada | fundo `--musgo-600`, texto branco (~6,4:1), Inter 700, ícone de check | fundo `--oceano-700`, texto branco (~9,8:1), Inter 700, ícone de check |
| Foco | outline 3 px `--abismo-900`, offset 2 | idem |
| Ativo (pressionando) | `scale(.98)` | idem |

- O indicador de seleção desliza entre as abas (`transform`, 250 ms); sem deslize em reduced-motion. A seleção se distingue também por peso e ícone de check, não só pela cor.
- Troca de painel: fade de 150 ms (nenhum em reduced-motion).

### 5.7 Formulário de interesse do clube (sem backend)
Monta a mensagem e abre `https://wa.me/<numero>?text=<mensagem codificada>`. O site não envia nada a servidores. Texto pequeno abaixo do botão: "Ao enviar, abrimos o WhatsApp com sua mensagem pronta."
- Campos: **Nome** (texto, obrigatório, `autocomplete="given-name"`), **Interesse** (3 opções em rádio estilizado como chips grandes: "Água doce", "Marinho", "Os dois"; `<fieldset>` + `<legend>`), **Experiência** (`<select>`: "Estou começando", "Até 2 anos", "Mais de 2 anos"), botão "Quero participar".
- Rótulo sempre visível acima do campo (Inter 600 15 px); nada de placeholder como rótulo. Obrigatório indicado por "(obrigatório)" no rótulo, não só asterisco.
- Campo: altura 48 px, padding 0 16, raio `--r-sm`, Inter 16 px (evita zoom no iOS). O formulário fica no painel `--oceano-700` (escuro); a coluna "sobre claro" vale se ele for reaproveitado em fundo claro.

| Estado | Sobre claro | Sobre escuro (painel `--oceano-700` do clube) |
|---|---|---|
| Normal | fundo branco, borda 1,5 px `--neutro-500` (~4,9:1, acima dos 3:1 exigidos), texto `--texto-900` | fundo `--abismo-900`, borda 1,5 px `--espuma-300` (~5,3:1 contra o painel), texto branco (~14,8:1) |
| Hover | borda `--texto-700` | borda branca |
| Foco | borda 2 px `--lagoa-600` + outline 3 px `--abismo-900`, offset 2 | borda 2 px `--lagoa-400` + outline 3 px `--lagoa-400`, offset 2 |
| Erro | borda 2 px `--coral-700` + mensagem abaixo em `--coral-700` 14 px com ícone de alerta (texto, não só cor), `aria-invalid="true"`, `aria-describedby` | borda 2 px `--coral-400` + mensagem dentro de um chip `--coral-400` com texto `--abismo-900` (~5,7:1) e ícone. **Não** usar texto coral solto sobre `--oceano-700` (~3,8:1) |
| Desabilitado | fundo `--espuma-50`, borda `--linha-200`, texto `--neutro-500` | opacidade .5 |

- Rádios-chip: altura 44 px, borda 1,5 px igual à do campo. Selecionado: fundo `--lagoa-400` e texto `--abismo-900` (escuro) ou fundo `--lagoa-600` e texto branco (claro), mais um ícone de check. O input real fica visualmente escondido (não `display: none`) e o foco aparece no chip (`input:focus-visible + label`).
- Validação só no envio (sem mensagens enquanto a pessoa digita); o foco vai para o primeiro campo com erro.

### 5.8 Acordeão (FAQ)
- `<details>` com `<summary>` de altura mínima 56 px, padding 16 × 20, Sora 600 17 px `--texto-900`, chevron 20 px à direita (`--lagoa-600`) que gira 180° quando aberto. Esconder o marcador nativo (`summary { list-style: none }` e `summary::-webkit-details-marker { display: none }`).
- Separador: borda inferior de 1 px `--linha-200`.
- Hover: fundo `--espuma-50`. Foco: outline 3 px `--abismo-900`, offset −3 (para dentro). Aberto: `summary` com texto `--lagoa-600`; conteúdo com padding 0 20 20, Inter `--fs-body` `--texto-700`.
- Grupo "Erros comuns": ícone de alerta `--coral-700` de 20 px antes do texto da pergunta.

### 5.9 Tabelas (comparativo e parâmetros)
Ver §4.4 e §4.6. Resumo para o CSS: abaixo de 600 px, `table, thead, tbody, tr, th, td { display: block }`; `thead` visualmente escondido; `td::before { content: attr(data-label) }`; roles ARIA explícitos para preservar a semântica; cada linha vira cartão. A partir de 600 px, tabela normal com cabeçalho colorido e zebra.

### 5.10 Ícones
SVG de linha, traço 2 px (`stroke-linecap: round; stroke-linejoin: round`), `viewBox="0 0 24 24"`, cor por `currentColor`. Decorativos com `aria-hidden="true"`; quando o ícone é o único conteúdo de um link ou botão, o elemento interativo leva `aria-label`.

---

## 6. Animações (sutis, com controle)

### 6.1 Bolhas (só no hero)
- 10 a 12 elementos decorativos (`<span>` dentro de um contêiner `aria-hidden="true"`) com `left` variado, de 6 a 18 px de diâmetro, preenchimento `rgb(255 255 255 / .10)` e borda 1 px `rgb(255 255 255 / .25)`.
- `@keyframes subir`: `translateY(0)` → `translateY(-110vh)`, com leve deriva lateral (`translateX(±12px)`) e `opacity` 0 → .7 → 0. Duração de 18 a 28 s, `animation-delay` negativo diferente em cada uma (já começam espalhadas), `linear infinite`.
- Ficam atrás do texto (`z-index` menor) e concentradas na metade direita no desktop, para não passar sob o H1. `pointer-events: none`. O contêiner do hero tem `overflow: hidden`.
- No mobile (< 600 px), use só 6 bolhas.

### 6.2 Cáusticas (hero e clube)
- `assets/causticas.svg`: padrão de linhas orgânicas claras (ver §8) aplicado num `::before` com `background-size: 600px`, `inset: -10%`, opacidade .12 (hero) / .08 (clube), `mix-blend-mode: screen`.
- Animação: `transform: translate3d(0, 0, 0)` → `translate3d(-4%, 3%, 0)` com `alternate`, 24 s, `ease-in-out infinite`. Só `transform`, sem `background-position` nem `filter`.

### 6.3 Controle de pausa (WCAG 2.2.2)
- Botão no canto inferior direito do hero (`position: absolute; right: var(--gutter); bottom: 24px`), altura 44 px (44 × 44 no mobile), raio `--r-pill`, fundo `rgb(7 28 44 / .7)`, borda 1 px `rgb(255 255 255 / .3)`, ícone branco de pausa/play. Rótulo visível a partir de 600 px ("Pausar animação" / "Retomar animação"); no mobile só o ícone, com `aria-label` equivalente. `aria-pressed="true"` quando pausado.
- Ao clicar, alterna a classe `.movimento-pausado` no `<html>`, que aplica `animation-play-state: paused` em bolhas e cáusticas (hero **e** clube). A preferência fica em `localStorage` (`reefstack-movimento`).
- Estados: hover com fundo `rgb(7 28 44 / .9)`; foco com outline `--lagoa-400`; ativo `scale(.96)`.
- Também pausar quando o hero ou o clube estiver fora da tela (`IntersectionObserver`), para economizar bateria. Isso é interno e não altera a preferência salva.

### 6.4 `prefers-reduced-motion: reduce`
- Bolhas: `display: none`. Cáusticas: estáticas (sem animação, opacidade mantida). Botão de pausa: escondido (não há o que pausar).
- Sem `scroll-behavior: smooth`, sem `translateY` em hovers, sem escala nas fotos, sem deslize do indicador das abas, sem transição de movimento no botão flutuante (só aparece/some).
- **Não usar** animações de entrada de seção ao rolar (fade-up). Isso mantém o site leve e evita conteúdo invisível se o JS falhar.

---

## 7. Breakpoints e comportamento mobile

| Nome | Faixa | Principais mudanças |
|---|---|---|
| Base (mobile) | 0 a 599 px | 1 coluna; menu em painel fixo; **tabelas empilhadas em cartões**; CTAs em largura total; hero com cartões-caminho lado a lado; 6 bolhas; rodapé em 1 coluna com `padding-bottom: 96px` |
| `sm` | ≥ 600 px | Tabelas voltam ao formato normal; grades de 2 colunas (loja, espécies, benefícios do clube, compromissos, depoimentos, rodapé); ciclo do nitrogênio na horizontal; rótulo visível no botão de pausa |
| `md` | ≥ 900 px | Navegação em linha no cabeçalho (some o botão de menu); hero em 2 colunas com cartões em cascata; loja em 4 colunas; Primeiros passos 7/5 com kit sticky; clube 6/6; compromissos em 4 colunas; depoimentos em 3; FAQ em 2 colunas; Visite 5/7; rodapé em 4 colunas; corpo 17 px |
| `lg` | ≥ 1200 px | Espécies em 4 colunas; container no máximo (1200 px) |

- Media queries **mobile-first** (`min-width`). Testar também em 320 px de largura: nada de rolagem horizontal (exceto o contêiner rolável da tabela, se usado).
- Imagens: `<img>` com `width`/`height` declarados, `loading="lazy"` e `decoding="async"` abaixo da dobra; as fotos dos cartões-caminho do hero **sem** lazy, com `fetchpriority="high"` só na primeira. `srcset` com 2 larguras nas fotos grandes (ver §8).
- Toque: todos os interativos com área ≥ 44 × 44 px (inclusive rodapé, rádios-chip, abas e botão de pausa), com pelo menos 8 px entre alvos vizinhos.

---

## 8. Pedidos de imagem (para o `gerador-imagens`, registrar em `imagens.md`)

**Regras:** todos os arquivos finais ficam em **`site/assets/`** (o site é autocontido; caminhos relativos `assets/...` no HTML e no CSS). Cópias de trabalho podem ficar em `projetos/reef-stack/assets/`, mas o site só referencia `site/assets/`. Fotos: Unsplash, Pexels, Pixabay ou Wikimedia Commons **CC0/CC BY** (nada de CC BY-SA), registrando autor, banco, licença e URL. Exportar em **WebP** (qualidade ~78) nas larguras indicadas. **Não usar foto de peixe na natureza com legenda de aquário**, nem cirurgião-patela/peixe-leão como peixe de iniciante (`pesquisa.md` §3 e Riscos). Encontro do clube e depoimentos são marcados "**substituir antes de publicar**".

### 8.1 SVGs (feitos pelo time)

| Arquivo | Tamanho / viewBox | Descrição e prompt |
|---|---|---|
| `logo.svg` | viewBox 220 × 40 | Símbolo: três faixas onduladas empilhadas, de baixo para cima: verde `#6FD49A` (doce), turquesa `#2EC4C6`, coral `#FF7A59` (recife), dentro de um quadrado de 32 × 32 com cantos arredondados. Ao lado, "Reef Stack" em Sora 700 convertido em contornos, branco. Versão para fundo escuro (a usada no cabeçalho e no rodapé). |
| `logo-escuro.svg` | idem | Mesmo símbolo com verde `#1F6B4A`, turquesa `#0A6E78` e coral `#B8432A` (≥ 3:1 sobre claro) e texto `#0B2A3F`. Para fundos claros (uso eventual, ex.: mapa ilustrativo). |
| `favicon.svg` | 32 × 32 | Só o símbolo das três faixas sobre fundo `#0B2A3F`, cantos de 6 px. Exportar também `favicon-32.png` e `apple-touch-icon.png` (180 × 180). |
| `divisor-camadas.svg` | viewBox 1440 × 80, `preserveAspectRatio="none"` | Três ondas sobrepostas, com amplitude e fase diferentes, preenchidas com `currentColor` nas opacidades 0.25 (trás), 0.55 e 1 (frente). A onda da frente fecha na base cobrindo toda a largura. Será inserido inline. |
| `causticas.svg` | 600 × 600, padrão contínuo (tileable) | Rede de linhas orgânicas finas e irregulares, como a luz refletida no fundo de um aquário (células tipo Voronoi suavizadas), traço branco de 1,5 a 3 px, sem fundo, bordas casando para repetição. Peso alvo < 12 KB. |
| `onda-sublinhado.svg` | viewBox 200 × 16 | Três traços ondulados finos empilhados (verde `#6FD49A`, turquesa `#2EC4C6`, coral `#FF7A59`) para sublinhar a palavra-chave do H1. |
| `ciclo-nitrogenio.svg` (640 × 260, horizontal) e `ciclo-nitrogenio-vertical.svg` (320 × 520) | ver ao lado | Fluxo: "Restos de comida e excrementos" → "Amônia (tóxica)" → bactérias → "Nitrito (tóxico)" → bactérias → "Nitrato (menos tóxico)" → "Trocas de água e plantas". Caixas arredondadas brancas: amônia e nitrito com borda `#B8432A`, nitrato com borda `#1F6B4A`; setas `#0A6E78`; textos `#0B2A3F` em `<text>` Inter. `<title>` e `<desc>` em português. **Não dizer que o nitrato zera** (`pesquisa.md` §1.5). |
| `mapa-ilustrativo.svg` | viewBox 700 × 440 | Mapa abstrato e genérico (não baseado em cidade real): quarteirões em `#E5F1F7` e `#FFFFFF`, ruas brancas, um rio sinuoso `#2EC4C6` a 40%, uma área verde `#E6F2EA`, pino `#B8432A` com o símbolo do logo. Texto "Mapa ilustrativo" no canto, `#2E4656`. |
| Ícones de categoria (7): `icone-peixe.svg`, `icone-coral.svg`, `icone-planta.svg`, `icone-camarao.svg`, `icone-equipamento.svg` (filtro/aquecedor), `icone-racao-teste.svg` (pote + tubo de ensaio), `icone-montagem.svg` (aquário + chave) | 24 × 24, traço 2 px, `currentColor` | Linha simples e consistente, cantos arredondados. |
| Ícones do clube (4): `icone-encontro.svg` (calendário + bolha), `icone-oficina.svg` (mão + ferramenta), `icone-troca.svg` (duas setas em círculo + folha/frag), `icone-grupo.svg` (balões de conversa) | 24 × 24 | Idem. |
| Ícones de compromisso (4): `icone-cativeiro.svg` (peixe dentro de um escudo), `icone-procedencia.svg` (selo com check), `icone-orientacao.svg` (balão com "i"), `icone-nao-soltar.svg` (peixe e seta para um rio, cortados) | 24 × 24 | Idem. |
| Ícones de abas: `icone-folha.svg` (doce), `icone-coral-mini.svg` (marinho), `icone-check.svg` | 24 × 24 | Idem. |
| Utilitários: `icone-whatsapp.svg`, `icone-instagram.svg`, `icone-youtube.svg`, `icone-facebook.svg`, `icone-telefone.svg`, `icone-email.svg`, `icone-pino.svg`, `icone-relogio.svg`, `icone-info.svg`, `icone-alerta.svg`, `icone-chevron.svg`, `icone-seta.svg`, `icone-pausa.svg`, `icone-play.svg`, `icone-menu.svg` (três faixas onduladas), `icone-fechar.svg`, `aspas.svg` | 24 × 24 | Marcas (WhatsApp, Instagram etc.) em versão monocromática simplificada, respeitando o guia de cada marca. |

### 8.2 Fotos de banco público

| Arquivo (em `site/assets/`) | Uso | Proporção / larguras | Busca sugerida e candidatas (`pesquisa.md` §3) |
|---|---|---|---|
| `foto-caminho-doce.webp` | Cartão-caminho "Água doce" (hero) | 4:5; 480 e 800 px | Aquário plantado exuberante, fundo escuro, verdes saturados. Candidatas: [Commons, Nature Aquarium Aquascape.jpg (CC0)](https://commons.wikimedia.org/wiki/File:Nature_Aquarium_Aquascape.jpg) (confirmar que é foto real, não IA) ou [Unsplash, Christian Ang](https://unsplash.com/photos/a-fish-tank-filled-with-water-and-plants-9tbRnu_DxPY). Recorte vertical com a parte de baixo mais escura, para a legenda. |
| `foto-caminho-marinho.webp` | Cartão-caminho "Marinho" (hero) | 4:5; 480 e 800 px | Aquário recifal sob luz azul/actínica com corais e, de preferência, peixe-palhaço. [Pexels: reef tank](https://www.pexels.com/search/reef%20tank/), [Pexels: reef aquarium](https://www.pexels.com/search/reef%20aquarium/). Precisa ser aquário, não mar aberto. |
| `foto-loja-ambiente.webp` | Faixa de CTA da loja | 16:10; 640 e 1200 px | Interior de loja de aquarismo com fileiras de aquários iluminados. Busca: "aquarium shop", "fish store" (Pexels/Unsplash/Pixabay). Sem logotipos de marcas reais visíveis. |
| `foto-clube-encontro.webp` | Clube | 4:3; 640 e 1100 px | Pessoas observando ou conversando diante de um aquário. Busca: "people aquarium", "aquarium hobby". Marcar "substituir antes de publicar". |
| `especie-neon.webp` | Espécies doce | 4:3; 480 e 720 px | [Commons, Neonsalmler Paracheirodon innesi.jpg, Holger Krisp (CC BY 3.0)](https://commons.wikimedia.org/wiki/File:Neonsalmler_Paracheirodon_innesi.jpg). Crédito obrigatório. |
| `especie-guppy.webp` | Espécies doce | 4:3; 480 e 720 px | Guppy macho colorido em aquário. Busca: "guppy" (Pexels/Unsplash/Pixabay). |
| `especie-betta.webp` | Espécies doce | 4:3; 480 e 720 px | Betta macho em aquário plantado (não em copo ou pote). [Pexels: betta fish](https://www.pexels.com/search/betta%20fish/). O arquivo do Commons citado na pesquisa é CC BY-SA, **fora da regra**. |
| `especie-neocaridina.webp` | Espécies doce | 4:3; 480 e 720 px | Camarão red cherry (*Neocaridina*) sobre musgo ou planta. Busca: "cherry shrimp", "red shrimp aquarium". |
| `especie-palhaco.webp` | Espécies marinho | 4:3; 480 e 720 px | Peixe-palhaço (*A. ocellaris*) **em aquário**, de preferência em coral mole ou anêmona de aquário. Busca: "clownfish aquarium" (Pexels/Unsplash). O Commons de Nick Hobgood é CC BY-SA e na natureza: **fora**. |
| `especie-grama.webp` | Espécies marinho | 4:3; 480 e 720 px | Grama-real (*Gramma loreto*) em aquário. Busca: "royal gramma". Se não houver foto livre adequada, avisar o orquestrador (busca extra pelo `pesquisador-fontes`). |
| `especie-gobi.webp` | Espécies marinho | 4:3; 480 e 720 px | Firefish (*Nemateleotris magnifica*) ou gobi em aquário. Busca: "firefish goby", "goby aquarium". Mesmo aviso acima. |
| `especie-coral-mole.webp` | Espécies marinho (frags) | 4:3; 480 e 720 px | Corais moles (zoanthus, sarcophyton, cogumelos) em aquário, ou frags em plugues. [Pexels: aquarium coral](https://www.pexels.com/search/aquarium%20coral/). |
| `depoimento-1.webp`, `depoimento-2.webp`, `depoimento-3.webp` | Depoimentos (exemplo) | 1:1; 112 px (2× de 56) | Retratos neutros e diversos (idade, gênero), luz natural, fundo simples. Busca: "portrait smiling" (Pexels/Unsplash). **Marcar "substituir antes de publicar".** Alternativa sem foto: avatar com iniciais em círculo `--mare-50` e texto `--lagoa-600` (~5,2:1). |
| `foto-vitrine.webp` (opcional) | Visite a loja | 16:10; 640 e 1000 px | Aquário grande de vitrine ou balcão. Busca: "large aquarium display". |
| `og-image.jpg` | Compartilhamento (Open Graph) | 1200 × 630 | Composição com `foto-caminho-doce` e `foto-caminho-marinho` lado a lado sobre `#0B2A3F`, com o logo. Pode ser montada pelo time a partir das fotos licenciadas. |

Peso alvo: fotos ≤ 150 KB na largura maior, retratos ≤ 20 KB, SVGs ≤ 12 KB (ícones ≤ 2 KB). Se faltar foto adequada (grama-real, gobi, encontro do clube), o `gerador-imagens` deve avisar. A alternativa é uma ilustração SVG simples do peixe, no mesmo estilo de linha, sobre fundo `--mare-50`.

---

## 9. Checklist de acessibilidade previsto

- [ ] `<html lang="pt-BR">`, `<title>` e meta description únicos; um único `<h1>`; H2 por seção e H3 nos cartões, sem pular níveis.
- [ ] Link "Pular para o conteúdo" visível no foco, levando ao `<main id="conteudo">`.
- [ ] Todos os pares de cor da §2.1 respeitados; nenhum texto branco sobre `--lagoa-400` ou `--coral-400`; nenhum texto turquesa, verde-claro ou coral-claro sobre fundo claro.
- [ ] Texto sobre foto só nos cartões-caminho, sempre sobre o degradê com opacidade ≥ .75; conferir na inspeção visual.
- [ ] Foco visível (outline 3 px, offset 3) em todos os interativos, com a cor por contexto; foco não encoberto pelo cabeçalho fixo (`scroll-padding-top`, WCAG 2.4.11).
- [ ] Alvos de toque ≥ 44 × 44 px em todo o site, **inclusive o rodapé** (links de texto, redes, créditos), abas, rádios-chip, botão de menu e botão de pausa.
- [ ] Menu mobile: `aria-expanded`, `aria-controls`, `Esc` fecha, foco gerenciado, painel fora da tabulação quando fechado; **cabeçalho sem `backdrop-filter`, `filter`, `transform` ou `will-change`**.
- [ ] Abas com o padrão ARIA completo e navegação por setas; seleção indicada também por peso da fonte e ícone (não só cor); sem JS, os dois painéis aparecem.
- [ ] Tabelas com `<caption>` e `th scope`; **empilhadas abaixo de 600 px** com `data-label` e roles ARIA explícitos; contêiner rolável (se usado) focável e rotulado.
- [ ] FAQ com `<details>/<summary>` nativos.
- [ ] Formulário: rótulos visíveis, `fieldset/legend` nos rádios, obrigatório escrito por extenso, erros com texto + ícone, `aria-invalid` e `aria-describedby`, foco no primeiro erro.
- [ ] Animações: só `transform`/`opacity`; botão de pausa com `aria-pressed` e preferência salva; `prefers-reduced-motion` remove bolhas, congela cáusticas e desliga transições de movimento; sem animação de entrada de seção.
- [ ] Imagens: `alt` descritivo nas fotos de conteúdo (espécies, loja, clube); `alt=""` nas decorativas; SVGs informativos (ciclo do nitrogênio, mapa ilustrativo) com `role="img"` e `<title>`/`<desc>`; ícones decorativos com `aria-hidden`.
- [ ] Links externos (WhatsApp, redes) com aviso "abre em nova aba" / "abre o WhatsApp" visualmente escondido.
- [ ] Sem mapa interativo nem link "Como chegar" enquanto os dados forem fictícios; dados fictícios marcados nos arquivos de conteúdo.
- [ ] Site autocontido: todas as imagens em `site/assets/`, caminhos relativos; só o Google Fonts é externo.
- [ ] Zoom de 200% e largura de 320 px sem perda de conteúdo nem rolagem horizontal.
