# Design: Rosa Bordô | bonecas de pano

> Etapa 2 (designer-ui), 2026-11-17. Entradas: `briefing.md`, `dados-negocio.md`, `pesquisa.md`.
> Dados de contato: **FICTÍCIOS** (exceto Instagram @arosabordo). Usar sempre os valores e links de `dados-negocio.md`.

---

## 1. Conceito e justificativa

**Conceito em uma frase:** "ateliê de costura em tela cheia": fotos grandes que se revezam como as páginas de um álbum de retalhos, com bordô profundo, creme de linho e o pesponto tracejado como assinatura gráfica.

- **Gesto visual forte (um só):** o carrossel de fotos em tela cheia no topo, com título grande em Fraunces sobre um véu bordô. O resto da página é contido: fundos lisos (creme, rosa claro, bordô), sem gradientes chamativos nem parallax.
- **Assinatura gráfica:** linha de **pesponto tracejado** (`2px dashed` ou SVG `stroke-dasharray`) em divisores, molduras de foto, cards e no caminho dos passos de encomenda. Isso substitui as ilustrações feitas à mão da referência Bamboletta (pesquisa, "Referências visuais"). Os cantos dos cards lembram **etiquetas de tecido** (eyebrow numa "etiqueta" com borda tracejada).
- **Paleta:** vem do nome (rosa + bordô) e foi validada na pesquisa (bordô `#6E1A37` sobre creme ≈ 10,4:1). O rosa médio fica só como fundo/decoração ou como texto sobre o bordô (nunca com texto branco, que reprova com ≈ 2,0:1).
- **Tom:** afetivo e de "livro de histórias" (pesquisa, Resumo 1). Liderar pela artesã e pelo processo (Freshy Sites): seção "Sobre" com voz em 1ª pessoa e foto das mãos.
- **Mobile first:** a visitante vem do Instagram pelo celular (briefing). O carrossel tem recorte próprio 4:5 no celular (direção de arte), CTA no polegar e alvos de 44px.
- **Cuidado legal (Inmetro, pesquisa "Riscos"):** a vitrine é apresentada como **"modelos de inspiração para a sua encomenda"**. Não há carrinho, preço de checkout, "comprar agora", selo Inmetro nem as palavras "certificada", "100% segura" ou "segura para bebês". Os CTAs são "Encomendar", "Quero um modelo assim" e "Conversar no WhatsApp". Ver também o alerta sobre "pronta-entrega" na seção 3.5.

---

## 2. Tokens de design

### 2.1 Cores

| Token | Hex | Uso |
|---|---|---|
| `--c-bordo` | `#6E1A37` | Cor primária: títulos sobre claro, botão primário, links, foco, faixa do topo, faixa "Personalize" |
| `--c-bordo-hover` | `#5A1530` | Hover/ativo do botão primário |
| `--c-bordo-900` | `#4A1024` | Rodapé, fundo dos slides em retrato, base do véu do hero |
| `--c-veu` | `#2A0E18` | Cor do overlay (véu) sobre as fotos do hero |
| `--c-creme` | `#FBF5EF` | Fundo geral; texto e botões sobre bordô e sobre o hero |
| `--c-branco` | `#FFFFFF` | Fundo dos cards e campos |
| `--c-rosa-claro` | `#F6DDE3` | Fundo de seções alternadas (diferenciais, depoimentos, CTA final) |
| `--c-rosa` | `#E8A3B5` | Acento: ornamentos, pesponto sobre bordô, selo "Sob encomenda", eyebrow sobre bordô |
| `--c-texto` | `#3A2A2E` | Texto de corpo |
| `--c-texto-suave` | `#6B5A5E` | Texto de apoio, legendas, "a partir de" |
| `--c-salvia` | `#7A8F6E` | Só elementos gráficos (ícones, linhas), nunca texto |
| `--c-salvia-escuro` | `#4F6146` | Texto de etiquetas (tamanho, "bordado à mão") |
| `--c-borda` | `#E6D6CF` | Bordas finas de cards e campos (decorativas) |
| `--c-borda-forte` | `#8A6F76` | Borda de campos e controles que precisam de 3:1 |

**Contrastes verificados** (fórmula de luminância relativa da WCAG; arredondados):

| Combinação | Contraste | Resultado |
|---|---|---|
| texto `#3A2A2E` sobre creme `#FBF5EF` | ~12,5:1 | AA/AAA |
| texto `#3A2A2E` sobre rosa claro `#F6DDE3` | ~10,5:1 | AA/AAA |
| bordô `#6E1A37` sobre creme | ~10,4:1 | AA/AAA |
| bordô sobre branco | ~11,3:1 | AA/AAA |
| bordô sobre rosa claro | ~8,8:1 | AA/AAA |
| bordô sobre rosa `#E8A3B5` (selo) | ~5,5:1 | AA |
| branco sobre bordô (botão primário) | ~11,3:1 | AA/AAA |
| branco sobre bordô-hover `#5A1530` | ~13,2:1 | AA/AAA |
| creme sobre bordô | ~10,4:1 | AA/AAA |
| creme sobre bordô-900 `#4A1024` (rodapé) | ~14,0:1 | AA/AAA |
| rosa `#E8A3B5` sobre bordô (eyebrow na faixa escura) | ~5,5:1 | AA |
| rosa `#E8A3B5` sobre bordô-900 (rodapé, títulos pequenos) | ~7,5:1 | AA/AAA |
| texto-suave `#6B5A5E` sobre creme | ~6,0:1 | AA |
| texto-suave sobre rosa claro | ~5,0:1 | AA |
| texto-suave sobre branco | ~6,4:1 | AA |
| sálvia-escuro `#4F6146` sobre creme | ~6,2:1 | AA |
| sálvia `#7A8F6E` sobre creme | ~3,2:1 | só gráficos (3:1) |
| borda-forte `#8A6F76` sobre branco | ~4,8:1 | 3:1 para componentes OK |
| **branco sobre rosa `#E8A3B5`** | ~2,0:1 | **PROIBIDO** |
| **rosa sobre creme** | ~1,9:1 | só decorativo |

**Texto sobre foto (hero):** ver 3.2.4. O véu garante no mínimo **~7,2:1** para texto creme/branco no pior caso (pixel branco da foto) na zona do texto.

### 2.2 Tipografia (Google Fonts, 2 famílias)

- **Fraunces** (títulos): serifada "soft", eixos `opsz`, `wght`, `SOFT`. Pesos 500 e 600; itálico 500 para palavras de ênfase (`<em>` nos títulos). `font-variation-settings: "SOFT" 100;` (com `"WONK" 0`). Fallback: `Georgia, "Times New Roman", serif`.
- **Nunito** (texto e interface): 400, 600, 700, 800. Fallback: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- Link (com `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com` com `crossorigin`):
  `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,500..600,100;1,9..144,500,100&family=Nunito:wght@400;600;700;800&display=swap`
  Se a URL com `SOFT` falhar no teste, usar `family=Fraunces:ital,opsz,wght@0,9..144,500..600;1,9..144,500` e remover o `font-variation-settings`.

| Token | Valor | Uso | Família / peso / entrelinha |
|---|---|---|---|
| `--fs-display` | `clamp(2.5rem, 1.55rem + 4.2vw, 5rem)` (40 → 80px) | h1 / títulos dos slides do hero | Fraunces 600, 1.05, `letter-spacing: -0.015em` |
| `--fs-h2` | `clamp(2rem, 1.55rem + 1.9vw, 3.25rem)` (32 → 52px) | Títulos de seção | Fraunces 600, 1.12 |
| `--fs-h3` | `clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)` (20 → 24px) | Títulos de cards, passos, FAQ | Fraunces 500, 1.25 |
| `--fs-lead` | `clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)` (18 → 21px) | Subtítulo do hero e de seções | Nunito 400, 1.55 |
| `--fs-body` | `1.0625rem` (17px), `1.125rem` (18px) a partir de 1024px | Corpo | Nunito 400, 1.65 |
| `--fs-small` | `0.9375rem` (15px) | Legendas, rodapé, "a partir de" | Nunito 400/600, 1.5 |
| `--fs-eyebrow` | `0.8125rem` (13px) | Sobretítulos em caixa alta | Nunito 800, `letter-spacing: 0.14em`, uppercase |
| `--fs-btn` | `1rem` (16px) | Botões | Nunito 700, `letter-spacing: 0.01em` |

- Largura de leitura: parágrafos com `max-width: 62ch`.
- Ênfase nos títulos: `<em>` em Fraunces itálico 500, na mesma cor (sem sublinhado).
- Apenas um `<h1>`: o título do **slide 1**. Os títulos dos slides 2 a 4 são `<h2>` com a mesma classe visual (`.slide__titulo`).

### 2.3 Espaçamento (base 4px)

`--sp-1: 4px` · `--sp-2: 8px` · `--sp-3: 12px` · `--sp-4: 16px` · `--sp-5: 24px` · `--sp-6: 32px` · `--sp-7: 48px` · `--sp-8: 64px` · `--sp-9: 96px` · `--sp-10: 128px`

- Padding vertical de seção: `--sp-secao: clamp(64px, 5vw + 40px, 128px)`.
- Container: `max-width: 1200px`, padding lateral `clamp(20px, 4vw, 40px)`. Variante estreita (FAQ, citações): `760px`.
- Gap de grade: `--sp-5` (mobile) e `--sp-6` (≥ 768px).

### 2.4 Raios, bordas e sombras

- `--r-sm: 6px` (chips, campos pequenos) · `--r-md: 14px` (botões, cards) · `--r-lg: 24px` (fotos, painéis) · `--r-pill: 999px` (indicadores, chips, botões circulares).
- **Sem moldura em arco** (já usada em sergio-ribeiro, diaconia e emmeline). Aqui a forma-assinatura é o **retângulo com pesponto**: borda `2px dashed` a 8px para dentro da foto/card (pseudo-elemento `::after` com `inset: 8px; border: 2px dashed; border-radius: calc(var(--r-lg) - 8px)`).
- `--pesponto-claro: 2px dashed rgba(110, 26, 55, 0.35)` (sobre creme/branco, decorativo) · `--pesponto-escuro: 2px dashed rgba(232, 163, 181, 0.6)` (sobre bordô/foto).
- `--sh-1: 0 1px 2px rgba(58, 42, 46, 0.06), 0 2px 8px rgba(58, 42, 46, 0.06)` (cards em repouso)
- `--sh-2: 0 12px 28px -10px rgba(74, 16, 36, 0.28)` (card em hover, foto da artesã)
- `--sh-3: 0 24px 48px -16px rgba(42, 14, 24, 0.45)` (moldura da foto em retrato no hero)

### 2.5 Movimento

- `--dur-rapida: 150ms` (hover de botões) · `--dur-base: 250ms` (cards, acordeão) · `--dur-slide: 700ms` (crossfade do carrossel) · `--ease: cubic-bezier(.2,.7,.2,1)`.
- `--autoplay: 7500ms` (intervalo do carrossel; ver 3.2.6).
- Com `prefers-reduced-motion: reduce`: todas as durações viram `0.01ms`, sem zoom lento, sem autoplay, sem barra de progresso.

### 2.6 Bloco `:root` pronto para copiar

```css
:root {
  /* Cores */
  --c-bordo: #6E1A37;
  --c-bordo-hover: #5A1530;
  --c-bordo-900: #4A1024;
  --c-veu: #2A0E18;
  --c-creme: #FBF5EF;
  --c-branco: #FFFFFF;
  --c-rosa-claro: #F6DDE3;
  --c-rosa: #E8A3B5;
  --c-texto: #3A2A2E;
  --c-texto-suave: #6B5A5E;
  --c-salvia: #7A8F6E;
  --c-salvia-escuro: #4F6146;
  --c-borda: #E6D6CF;
  --c-borda-forte: #8A6F76;

  /* Tipografia */
  --ff-titulo: "Fraunces", Georgia, "Times New Roman", serif;
  --ff-texto: "Nunito", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-display: clamp(2.5rem, 1.55rem + 4.2vw, 5rem);
  --fs-h2: clamp(2rem, 1.55rem + 1.9vw, 3.25rem);
  --fs-h3: clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem);
  --fs-lead: clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem);
  --fs-body: 1.0625rem;
  --fs-small: 0.9375rem;
  --fs-eyebrow: 0.8125rem;
  --fs-btn: 1rem;

  /* Espaçamento */
  --sp-1: 4px;  --sp-2: 8px;  --sp-3: 12px; --sp-4: 16px; --sp-5: 24px;
  --sp-6: 32px; --sp-7: 48px; --sp-8: 64px; --sp-9: 96px; --sp-10: 128px;
  --sp-secao: clamp(64px, 5vw + 40px, 128px);
  --container: 1200px;
  --container-estreito: 760px;
  --gutter: clamp(20px, 4vw, 40px);

  /* Raios */
  --r-sm: 6px;
  --r-md: 14px;
  --r-lg: 24px;
  --r-pill: 999px;

  /* Pesponto e sombras */
  --pesponto-claro: 2px dashed rgba(110, 26, 55, 0.35);
  --pesponto-escuro: 2px dashed rgba(232, 163, 181, 0.6);
  --sh-1: 0 1px 2px rgba(58, 42, 46, 0.06), 0 2px 8px rgba(58, 42, 46, 0.06);
  --sh-2: 0 12px 28px -10px rgba(74, 16, 36, 0.28);
  --sh-3: 0 24px 48px -16px rgba(42, 14, 24, 0.45);

  /* Foco */
  --foco: 0 0 0 3px var(--c-creme), 0 0 0 6px var(--c-bordo);

  /* Layout */
  --faixa-h: 36px;
  --header-h: 64px;   /* 76px a partir de 1024px */

  /* Movimento */
  --dur-rapida: 150ms;
  --dur-base: 250ms;
  --dur-slide: 700ms;
  --ease: cubic-bezier(.2, .7, .2, 1);
  --autoplay: 7500ms;
}

@media (min-width: 1024px) {
  :root { --fs-body: 1.125rem; --header-h: 76px; }
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur-rapida: 0.01ms; --dur-base: 0.01ms; --dur-slide: 0.01ms; }
}
```

---

## 3. Estrutura da página

### 3.0 Escolha do hero

**Hero escolhido: carrossel grande / slideshow em tela cheia (4 slides de foto), com texto sobreposto embaixo à esquerda sobre véu bordô.**

- **Por quê:** é um **requisito do usuário** (briefing, seção 2) e serve ao propósito: a Rosa Bordô tem várias frentes igualmente fortes (a coleção, a boneca personalizada, o feito à mão, o presente afetivo). Cada slide vende uma delas com CTA próprio, e a foto grande faz o trabalho emocional que uma vitrine de Instagram faz.
- **Heros dos projetos anteriores:** futebol-kids (mais recente) = vídeo de fundo em tela cheia; sergio-ribeiro = split com foto em arco; diaconia-catedral-baleia = split com foto em arco sobre marinho; emmeline-croche = split 7/5 com foto em arco. O carrossel não repete nenhum dos dois mais recentes.
- **Descartados:** vídeo de fundo (repetiria o futebol-kids, e não há vídeo da artesã); mosaico/bento (bom para artesanato, mas o usuário pediu carrossel); split com arco (repetido em três projetos).

### 3.1 Ordem das seções e ritmo

| # | Seção | `id` | Fundo | Ritmo / layout |
|---|---|---|---|---|
| 1 | Faixa do topo | — | bordô | faixa fina de texto |
| 2 | Cabeçalho | — | creme | sticky |
| 3 | **Hero carrossel** | `inicio` | fotos + véu | tela cheia |
| 4 | Faixa de diferenciais ("costura") | — | rosa claro | faixa horizontal com pesponto |
| 5 | Coleção (vitrine de inspiração) | `colecao` | creme | grade de 6 cards |
| 6 | Sobre a artesã | `sobre` | creme → branco | editorial assimétrico 5/7 + citação + materiais |
| 7 | Personalize | `personalize` | bordô (escuro) | faixa escura em tela cheia com amostras |
| 8 | Como encomendar | `como-encomendar` | creme | caminho de pesponto com 4 passos |
| 9 | Depoimentos | `depoimentos` | rosa claro | 3 "retalhos" desencontrados |
| 10 | Perguntas frequentes | `perguntas` | creme | 2 colunas: título fixo + acordeão |
| 11 | CTA final + Instagram | `encomendar` | rosa claro | mosaico de 6 fotos + chamada centralizada |
| 12 | Rodapé | `contato` | bordô-900 | 3 colunas |
| — | Botão flutuante WhatsApp (mobile) | — | bordô | fixo embaixo |

Âncoras do menu: Coleção · Sobre · Personalize · Como encomendar · Perguntas · Contato.

### 3.2 Hero carrossel (`#inicio`)

#### 3.2.1 Dimensões

- Largura total (sangra até as bordas, sem container).
- Altura:
  - **Mobile (< 768px):** `height: clamp(560px, 88svh, 780px)`. Use `svh`, com fallback `vh` na linha anterior.
  - **Tablet (768–1023px):** `height: clamp(560px, 86svh, 860px)`.
  - **Desktop (≥ 1024px):** `height: clamp(600px, calc(100svh - var(--faixa-h) - var(--header-h)), 1000px)`. Em 1920×1080 isso dá ~968px (≈ 90vh); em 1366×768, 656px (≈ 85vh). Assim o hero ocupa toda a primeira dobra visível abaixo do cabeçalho.
- Todos os slides empilhados na mesma célula de grid (`display: grid; grid-template-areas: "s"`; cada slide em `grid-area: s`). A altura é fixa no contêiner, não depende do slide (CLS = 0).

#### 3.2.2 Estrutura (padrão WAI-ARIA Carousel, APG)

Ordem no DOM (o desenvolvedor escreve o HTML; aqui vai só a estrutura):

1. `<section class="hero" id="inicio" aria-roledescription="carrossel" aria-label="Destaques da Rosa Bordô">`
2. Barra de controles `.hero__controles` (vem **antes** dos slides no DOM, como pede o APG; visualmente fica embaixo à direita, com `position: absolute`). Ordem dos botões no DOM e na tela: **Pausar/Retomar → Anterior → indicadores → Próximo**.
   - Botão pausar: `<button>` nativo, rótulo `aria-label="Pausar apresentação"` / `"Retomar apresentação"` (trocar só o rótulo e o ícone; **não recriar o botão** e **não usar `aria-pressed`**).
   - Setas: `aria-label="Slide anterior"` / `"Próximo slide"`; `aria-controls` apontando para o wrapper dos slides.
   - Indicadores: grupo `role="group" aria-label="Escolher slide"` com 4 `<button>`; rótulos "Coleção (1 de 4)", "Personalizadas (2 de 4)", "Feito à mão (3 de 4)", "Presente (4 de 4)". O atual recebe `aria-disabled="true"` (não `disabled`, para continuar focável) e `aria-current="true"`.
3. Wrapper dos slides `.hero__slides` com `aria-atomic="false"` e `aria-live="off"` enquanto gira / `aria-live="polite"` quando parado.
4. Cada slide: `role="group" aria-roledescription="slide" aria-label="1 de 4"` (sem repetir a palavra "slide"). Slides ocultos: `aria-hidden="true"` **e** `inert`.

**Sem JS:** só o slide 1 aparece (CSS: `.slide:not(:first-child) { display: none; }` até o JS adicionar `.hero--pronto` no contêiner). A barra de controles começa com o atributo `hidden` e o JS remove. O slide 1 funciona sozinho (título, texto e CTA).

#### 3.2.3 Composição de cada slide

Camadas (de baixo para cima):

1. **Foto** (`<picture>` com direção de arte; ver 6.2), `object-fit: cover`, `object-position: var(--foco, 60% 50%)` definido por slide em atributo `style`.
2. **Véu** (pseudo-elemento `::after` da área da foto). Ver 3.2.4.
3. **Conteúdo** `.slide__conteudo`, dentro de um container de 1200px:
   - Desktop: alinhado **embaixo à esquerda**, `max-width: 620px`, `padding-bottom: 112px` (para não colidir com os controles, que ficam à direita na mesma altura da base).
   - Mobile: embaixo, largura total menos o gutter, `padding-bottom: 96px` (os controles ficam numa linha abaixo do texto).
   - Ordem: etiqueta (eyebrow) → título → subtítulo → botões.
   - **Etiqueta:** pílula com fundo `rgba(251,245,239,0.14)`, borda `var(--pesponto-escuro)`, texto creme `--fs-eyebrow`, padding `6px 14px`, `--r-pill`. Lembra uma etiqueta de tecido costurada.
   - **Título:** `--fs-display`, Fraunces 600, cor `--c-creme`, `text-wrap: balance`, máx. ~3 linhas no desktop, 4 no celular. `text-shadow: 0 1px 2px rgba(42,14,24,.35)` (reforço, não substitui o véu).
   - **Subtítulo:** `--fs-lead`, Nunito 400, cor `--c-creme`, `max-width: 46ch`, margem `--sp-4` acima.
   - **Botões:** margem `--sp-6` acima; primário `.btn--creme` + secundário `.btn--contorno-claro` (ver 4.1). Mobile: empilhados e largura total (até 420px); ≥ 480px: lado a lado.

Conteúdo sugerido por slide (**a copy final é do redator**; manter títulos com até ~45 caracteres e subtítulos com até ~110):

| # | Rótulo | Foto (pesquisa) | Tratamento | Etiqueta | Título (sugestão) | Subtítulo (sugestão) | CTA primário | CTA secundário |
|---|---|---|---|---|---|---|---|---|
| 1 (h1, LCP) | Coleção | #1 bonecas sobre tecido bordado (Pexels 27782862, paisagem) | paisagem, `--foco: 62% 50%` | Feitas à mão, sob encomenda | Bonecas de pano feitas *ponto a ponto* | Modelos para inspirar a sua encomenda, costurados com carinho em cada detalhe. | "Encomendar minha boneca" → WhatsApp encomenda | "Ver os modelos" → `#colecao` |
| 2 | Personalizadas | #6 boneca de casaco rosa (Pixabay 3361741) ou #3 (Pexels 38286876) | **retrato** (3.2.5) | Do seu jeitinho | Com a pele, o cabelo e o *nome* de quem vai ganhar | Você escolhe os detalhes e eu bordo cada um deles à mão. | "Quero uma personalizada" → WhatsApp personalizada | "Como personalizar" → `#personalize` |
| 3 | Feito à mão | #2 mãos costurando (Pexels 6876052, paisagem) | paisagem, `--foco: 65% 45%` | No meu ateliê | Cada ponto é dado *à mão* | Do molde ao bordado do rostinho, tudo passa pelas minhas mãos. | "Conhecer a artesã" → `#sobre` | — |
| 4 | Presente | #8 boneca e flores secas (Unsplash 5CvJwtQsMnU) ou #4 (Pexels 35343461) | retrato ou paisagem, conforme a foto baixada | Presente com memória | Um presente para guardar *por muitos anos* | Conte para quem é e para quando, e combinamos tudo pelo WhatsApp. | "Como encomendar" → `#como-encomendar` | "Ver no Instagram" → instagram.com/arosabordo (nova aba, com aviso) |

- CTA para WhatsApp: `target="_blank" rel="noopener"` + texto oculto " (abre o WhatsApp)" ou ícone com `aria-hidden` e rótulo completo.
- Nenhum slide usa "comprar", "loja", "pronta-entrega", "certificada", "100% segura" ou "segura para bebês".

#### 3.2.4 Véu (overlay) e contraste

- **Desktop/tablet (≥ 768px):** `linear-gradient(90deg, rgba(42,14,24,0.80) 0%, rgba(42,14,24,0.72) 38%, rgba(42,14,24,0.30) 62%, rgba(42,14,24,0.10) 100%)` **somado a** `linear-gradient(0deg, rgba(42,14,24,0.55) 0%, rgba(42,14,24,0) 35%)` (escurece a base para os controles à direita).
- **Mobile (< 768px):** `linear-gradient(0deg, rgba(42,14,24,0.88) 0%, rgba(42,14,24,0.78) 45%, rgba(42,14,24,0.20) 72%, rgba(42,14,24,0.05) 100%)`. O texto ocupa só os 45% inferiores.
- **Cor base do véu:** `#2A0E18` (bordô quase preto).
- **Contraste resultante:** na zona do texto a opacidade mínima é **0,72**. No pior caso (pixel branco puro da foto), a cor resultante é ~`#665159`, e o texto creme `#FBF5EF` sobre ela dá **~7,0:1** (o branco dá ~7,2:1). Isso passa AA para texto normal e para o título. Com 0,60, ficaria ~4,7:1, que ainda passa AA, mas não deve ser usado na zona de texto.
- **Controles** (creme sobre a base escurecida, opacidade ≥ 0,55): no pior caso ~4,7:1, acima de 3:1 (WCAG 1.4.11).
- **Slides em retrato (3.2.5):** fundo sólido bordô-900. O texto creme fica sobre `#4A1024` a ~14:1, sem depender do véu.
- O inspetor-visual deve conferir cada slide com a foto real; se alguma área clara ficar atrás do título, ajustar `--foco` ou subir o véu para 0,80.

#### 3.2.5 Fotos em retrato no desktop

Muitas fotos boas de bonecas são retrato (2:3 ou 3:4). Num slide 16:9, o `cover` corta a boneca. Regra:

- **Mobile (< 768px):** o recorte é 4:5, então fotos em retrato funcionam bem com `object-fit: cover` (boneca no terço superior, `--foco: 50% 25%`). Nenhum tratamento especial.
- **Desktop (≥ 768px), classe `.slide--retrato`:** layout "foto emoldurada sobre tecido":
  - Fundo do slide: `--c-bordo-900` com a textura `textura-linho.svg` em `opacity: .18` (repetida).
  - Foto em retrato **inteira** (`object-fit: cover` dentro da própria proporção 4:5), em moldura do lado **direito**: altura `78%` do hero, proporção `4 / 5`, `right: max(var(--gutter), calc((100vw - 1200px)/2 + 40px))`, centralizada na vertical, `border-radius: var(--r-lg)`, `--sh-3`, leve rotação `rotate(-2deg)` (estática). Pesponto interno com `--pesponto-escuro` a 10px da borda.
  - Atrás da moldura, um retângulo rosa `#E8A3B5` a 30% de opacidade, deslocado 20px para baixo e para a esquerda, `rotate(3deg)` (efeito de "retalho"). É decorativo.
  - Texto à esquerda, como nos outros slides, sobre o fundo sólido (contraste ~14:1). Sem véu.
  - Arquivos: o `gerador-imagens` entrega a foto em 4:5 (ver 6.2), usada tanto no mobile quanto na moldura do desktop. Assim há um só recorte.
- **Alternativa**, se o gerador conseguir processar imagens (ImageMagick/sharp): compor um arquivo 1920×1080 com a foto em retrato à direita e o fundo bordô-900 com linho, mantendo as mesmas dimensões intrínsecas dos outros slides. Nesse caso, o slide usa o tratamento normal de paisagem com véu leve. O gerador informa em `imagens.md` qual opção entregou.
- **O slide 1 (LCP) é sempre paisagem.**

#### 3.2.6 Comportamento

- **Autoplay:** começa ligado, com intervalo de **7500ms** (`--autoplay`). Transição em **crossfade** (`opacity` 0 → 1 em `--dur-slide`, `--ease`). Só a foto do slide ativo tem um zoom lento (`transform: scale(1)` → `scale(1.04)` ao longo de 8s). Animar só `transform` e `opacity`.
- **Barra de progresso:** linha de 2px creme a 70% de opacidade sob os indicadores, que cresce com `transform: scaleX(0 → 1)` em 7,5s. Reinicia a cada troca e congela quando pausa. Decorativa (`aria-hidden`).
- **Pausa:**
  - **Hover** do mouse sobre o hero: pausa e retoma ao sair, se a pessoa não tiver pausado pelo botão.
  - **Foco** do teclado entrando no carrossel: para a rotação, que **só volta se a pessoa clicar em "Retomar"** (APG).
  - **Botão** pausar/retomar: estado persistente na sessão da página.
  - **Aba oculta** (`visibilitychange`) ou hero fora da tela (IntersectionObserver com `threshold: 0.25`): pausa automática e retoma ao voltar, se não estiver pausado pelo usuário.
- **`prefers-reduced-motion: reduce`** (CSS e `matchMedia`, escutando mudanças): **sem autoplay** (o botão começa em "Retomar apresentação"; se a pessoa clicar, o autoplay liga), troca instantânea (sem fade nem zoom) e sem barra de progresso.
- **Teclado:** Tab/Shift+Tab percorre pausar → anterior → indicadores → próximo → links do slide visível. Com o foco dentro do hero, as setas ← e → trocam de slide; Home/End vão ao primeiro e ao último. Setas e indicadores **não movem o foco**.
- **Swipe:** Pointer Events no wrapper dos slides, com `touch-action: pan-y` (rolagem vertical continua livre). Gesto horizontal acima de 50px, ou acima de 30px com velocidade maior que 0,3px/ms, troca o slide. O swipe para o autoplay até a pessoa retomar.
- **Ciclo:** depois do último vem o primeiro (loop), tanto no autoplay quanto nas setas.
- **Desempenho:** todos os slides ficam no HTML. Slide 1: `fetchpriority="high"`, **sem** `loading="lazy"`, `decoding="async"`. Slides 2 a 4: `loading="lazy"` e `fetchpriority="low"`. O JS faz o pré-carregamento do slide seguinte (troca para eager) assim que o slide atual aparece. Todos têm `width="1920" height="1080"` (paisagem) ou `width="1080" height="1350"` (retrato) declarados.

#### 3.2.7 Controles: visual

- Barra `.hero__controles`: `position: absolute; bottom: var(--sp-6); right: gutter alinhado ao container`. No mobile fica centralizada, `bottom: var(--sp-5)`, abaixo dos botões do slide.
- **Pausar, Anterior e Próximo:** botões circulares de **48×48px**, fundo `rgba(251,245,239,0.14)`, borda `1.5px solid rgba(251,245,239,0.85)`, ícone creme de 20px (SVG inline, `aria-hidden`). Hover: fundo `--c-creme`, ícone `--c-bordo` (10,4:1). Foco: `box-shadow: var(--foco)`. Ativo: `transform: scale(.96)`.
- **Indicadores:** cada botão tem área de 44×44px. O ponto visível tem 12px (círculo com borda creme de 2px e preenchimento transparente). O atual vira uma pílula de 32×12px com preenchimento creme (transição de `width` desligada; usar `transform: scaleX` num pseudo-elemento). Gap visual de 0 entre áreas de 44px (os pontos ficam a ~32px de distância).
- No mobile, as setas continuam visíveis (não depender só do swipe).
- Os controles **não aparecem nem somem no hover** (sem CLS e sem esconder affordance).

### 3.3 Faixa do topo e cabeçalho

**Faixa do topo** (`--faixa-h: 36px`): fundo `--c-bordo`, texto `--c-creme` `--fs-small` 600, centralizado: "Feito à mão · Sob encomenda · Enviamos para todo o Brasil" (copy final do redator). Separadores "·" em `--c-rosa`. No mobile, com menos de 360px, mostrar só "Feito à mão · Enviamos para todo o Brasil". Não é fixa: rola junto.

**Cabeçalho** (`--header-h` 64/76px): `position: sticky; top: 0`, fundo `--c-creme` a 96% de opacidade com `backdrop-filter: blur(8px)` (fallback sólido). Borda inferior `--pesponto-claro` aparece só depois de rolar 8px (classe `.is-rolado`).
- Esquerda: logo SVG (`logo-rosa-bordo.svg`, altura 36px mobile / 44px desktop), link para `#inicio`, `aria-label="Rosa Bordô, início"`.
- Centro/direita (≥ 1024px): navegação com 6 links, Nunito 700 16px, cor `--c-texto`; hover: cor `--c-bordo` com sublinhado tracejado (`text-decoration: underline dashed 2px; text-underline-offset: 6px`). Link da seção visível: `aria-current="true"` + sublinhado contínuo bordô.
- Direita: botão `.btn--primario` compacto "Encomendar" (altura 44px) → WhatsApp encomenda.
- **< 1024px:** botão hambúrguer de 44×44px (`aria-expanded`, `aria-controls="menu"`, rótulo "Abrir menu"/"Fechar menu") + "Encomendar" compacto (só a partir de 400px; abaixo disso, o botão flutuante cobre). O menu abre como painel em tela cheia, fundo creme, links em Fraunces 500 28px empilhados (alvo de 56px), com divisores de pesponto. Fecha com Esc, com clique num link e no botão. O foco fica preso no painel enquanto está aberto e volta ao hambúrguer ao fechar.

### 3.4 Faixa de diferenciais

- **Objetivo:** confiança rápida logo depois do hero.
- **Conteúdo:** 4 itens com ícone e texto curto (copy do redator): "Costurada à mão" (ícone agulha), "Olhinhos bordados, sem peças soltas" (ícone linha bordada), "Personalize do seu jeito" (ícone coração com pesponto), "Envio para todo o Brasil" (ícone caixa/envio). Não usar "segura" nem "antialérgica certificada".
- **Layout:** fundo `--c-rosa-claro`, padding vertical `--sp-6`. Mobile: grade 2×2, ícone (32px, traço bordô) acima do texto (`--fs-small` 700, `--c-texto`). ≥ 1024px: 4 colunas em linha, ícone à esquerda do texto, separadas por linhas verticais de pesponto (`border-left: var(--pesponto-claro)`). Uma linha de pesponto horizontal decorativa corre no topo da faixa, a 10px da borda.

### 3.5 Coleção: modelos de inspiração (`#colecao`)

- **Objetivo:** mostrar 6 modelos como **inspiração para a encomenda**, sem cara de loja.
- **Cabeçalho da seção** (alinhado à esquerda, não centralizado): eyebrow "Coleção" (bordô) → h2 (ex.: "Modelos para inspirar a *sua* boneca") → parágrafo de apoio (`--c-texto-suave`, `max-width: 56ch`) explicando que cada boneca é feita sob encomenda e pode ser adaptada. No desktop, o cabeçalho tem duas colunas: título à esquerda (7 col.) e o parágrafo + link "Como encomendar →" à direita (5 col., alinhado à base).
- **Grade:** 1 coluna (< 560px), 2 colunas (560–1023px), 3 colunas (≥ 1024px). Gap `--sp-6`.
- **Card de modelo** (ver 4.2): foto 4:5 com pesponto interno; selo "Sob encomenda" no canto superior esquerdo; nome (h3); descrição de 1 linha; etiquetas (tamanho, ex.: "35 cm", e "Bordado à mão") em `--c-salvia-escuro`; linha "a partir de **R$ 189**" (valores fictícios, do redator, dentro da faixa de `dados-negocio.md`); link-botão "Quero um modelo assim" → WhatsApp com a mensagem `Olá, Rosa Bordô! Vim pelo site e gostei do modelo [Nome]. Pode me contar como encomendar?` (URL-encode).
- **Sem** carrinho, sem "comprar", sem "adicionar", sem quantidade, sem "pronta-entrega".
- **Alerta para redator/orquestrador:** `dados-negocio.md` fala em "pronta-entrega: postagem em até 3 dias úteis". Pela pesquisa, peças expostas para venda direta em catálogo perdem a isenção de "sob encomenda". **Não exibir "pronta-entrega" na vitrine nem no hero**; se for mantido em algum lugar, deixar só no FAQ, com redação genérica, e registrar como pendência para a artesã confirmar com o Inmetro/OCP.
- Abaixo da grade: nota em `--fs-small`, `--c-texto-suave`, centralizada, com ícone de informação: "As fotos são exemplos. Cada boneca é única e feita sob encomenda: cores e detalhes podem variar." + aviso HTML `<!-- FOTOS DE BANCO: substituir pelas fotos do @arosabordo -->`.

### 3.6 Sobre a artesã (`#sobre`)

- **Objetivo:** liderar pela pessoa e pelo processo (pesquisa: Freshy Sites).
- **Layout editorial assimétrico** (≥ 1024px, grade de 12 colunas):
  - Colunas 1–5: foto `sobre-maos-costurando.jpg` (4:5) com `--r-lg`, `--sh-2` e pesponto interno. Uma segunda foto menor, `sobre-detalhe-bordado.jpg` (1:1, 42% da largura da primeira), sobrepõe o canto inferior direito, deslocada 32px para fora, com borda creme de 8px (efeito de retalho). No mobile, a foto menor fica escondida.
  - Colunas 7–12: eyebrow "Sobre a artesã" → h2 (ex.: "Oi, eu sou a Rosa *do Bordô*", conforme o redator) → 2 ou 3 parágrafos em 1ª pessoa → **citação** em Fraunces itálico 500, `--fs-h3` maior (24–28px), cor `--c-bordo`, com aspas decorativas grandes em `--c-rosa` (decorativas, `aria-hidden`) e borda esquerda de pesponto → lista de **materiais** em linha (3 itens, com ícones de 24px em sálvia): "Tecidos 100% algodão", "Enchimento de fibra siliconizada", "Bordados feitos à mão" (copy final do redator; evitar "antialérgico" como garantia).
- **Mobile:** foto principal primeiro (largura total, máx. 480px), depois texto.
- **Fundo:** creme. Uma faixa branca ocupa a metade inferior da seção atrás da foto (dá profundidade sem gradiente).
- **Assinatura:** depois da citação, o nome da artesã em Fraunces itálico, com um pequeno ornamento `ornamento-coracao-linha.svg` (coração desenhado com linha tracejada, 48px, bordô).

### 3.7 Personalize (`#personalize`)

- **Objetivo:** mostrar o que pode ser escolhido e levar ao WhatsApp de personalizada.
- **Faixa escura em tela cheia:** fundo `--c-bordo`, textura `textura-linho.svg` a 10% de opacidade. Pesponto `--pesponto-escuro` a 16px das bordas superior e inferior, em toda a largura.
- **Conteúdo:** eyebrow "Do seu jeitinho" (`--c-rosa`, 5,5:1) → h2 creme (ex.: "Monte a boneca de quem você ama") → lead creme → **4 grupos de opções** → CTA.
- **Grupos de opções** (ilustrativos, **não interativos**; listas `<ul>` com rótulo h3):
  1. **Cor de pele:** 6 círculos de 40px com tons de pele (ex.: `#F3D6C1`, `#E8B896`, `#C98E63`, `#A86B42`, `#7A4A2A`, `#4E2E1A`), com borda creme de 2px e legenda abaixo em `--fs-small`. A informação vem da legenda, não só da cor (WCAG 1.4.1).
  2. **Cabelo:** chips com nome e mini-amostra (cacheado, liso, trancinhas, coque; cores de lã).
  3. **Roupinha:** chips (vestido, jardineira, macacão, conjunto) com ícone de tecido.
  4. **Nome bordado:** um "retalho" creme com pesponto bordô e um nome de exemplo em Fraunces itálico bordô ("Helena"), mostrando o bordado. Abaixo, nota em creme `--fs-small`: "Para bebês, os detalhes são todos bordados, sem acessórios soltos." (redação final do redator, como cuidado, não como certificação).
  - Chips: fundo `rgba(251,245,239,0.10)`, borda `1.5px solid rgba(251,245,239,0.5)`, texto creme `--fs-small` 700, altura 36px, `--r-pill`.
- **Layout:** mobile 1 coluna (grupos empilhados com pesponto entre eles); ≥ 768px 2×2; ≥ 1200px, 4 colunas. Cabeçalho à esquerda e CTA abaixo dos grupos, alinhado à esquerda.
- **CTA:** `.btn--creme` "Quero uma personalizada" → WhatsApp personalizada. Ao lado, em texto creme `--fs-small`: "A partir de R$ 189 · 15 a 25 dias úteis de produção" (FICTÍCIO, comentário HTML).
- Foto opcional (≥ 1024px): `personalize-detalhe.jpg` (4:5) recortada à direita do cabeçalho, com a mesma moldura do slide retrato (rotação -2deg). Se a foto não ficar boa, omitir.

### 3.8 Como encomendar (`#como-encomendar`)

- **Objetivo:** tirar o medo do processo; 4 passos.
- **Cabeçalho centralizado** (única seção centralizada, para variar): eyebrow "Passo a passo" → h2 (ex.: "Como encomendar a sua boneca").
- **Caminho de pesponto:** os 4 passos ligados por uma linha tracejada bordô (SVG `stroke-dasharray: 8 8`, `stroke-width: 2`, `opacity: .5`) com uma pequena agulha no fim (`ornamento-agulha.svg`).
  - **Desktop (≥ 1024px):** 4 colunas; a linha passa horizontalmente pelo centro dos números e faz uma leve onda (path SVG `caminho-pesponto-h.svg`, esticado com `preserveAspectRatio="none"`).
  - **Mobile:** lista vertical; a linha corre na vertical à esquerda (`border-left: 2px dashed` em `rgba(110,26,55,.5)`), passando pelos números.
- **Passo:** número em círculo de 56px (fundo `--c-rosa-claro`, borda `2px dashed --c-bordo`, número Fraunces 600 24px bordô, 8,8:1) → h3 → texto curto (`--c-texto-suave`).
  - Passos sugeridos: 1. "Escolha um modelo ou conte sua ideia"; 2. "Combinamos os detalhes pelo WhatsApp"; 3. "Sinal de 50% e mãos à obra"; 4. "Sua boneca chega pelos Correios". (Copy final do redator; prazos e pagamento de `dados-negocio.md`, FICTÍCIOS.)
- Usar `<ol>` semântico.
- Abaixo: `.btn--primario` "Começar minha encomenda" → WhatsApp encomenda, centralizado.

### 3.9 Depoimentos (`#depoimentos`)

- **Fundo:** `--c-rosa-claro`.
- **Cabeçalho** alinhado à esquerda: eyebrow "Carinho de quem recebeu" → h2.
- **3 "retalhos"** (cards brancos com pesponto interno bordô a 35%), desencontrados: no desktop, grade de 3 colunas com o card do meio deslocado 40px para baixo e rotações estáticas de `-1deg`, `0.5deg` e `-0.5deg` (sem animação). No mobile, empilhados sem rotação.
- **Card:** aspas decorativas em Fraunces 64px `--c-rosa` (`aria-hidden`) → texto `<blockquote>` (`--fs-body`, `--c-texto`, itálico não) → rodapé com **avatar de iniciais** (círculo de 44px, fundo `--c-bordo`, iniciais creme em Fraunces 600, 11,3:1), nome e cidade (`--fs-small`, nome 700, cidade `--c-texto-suave`). Opcional: "comprou: Boneca Lia".
- **Sem fotos de rosto de banco** nos depoimentos (licença do Pexels proíbe sugerir endosso de pessoas identificáveis; pesquisa). Marcar com `<!-- DEPOIMENTOS DE EXEMPLO: substituir antes de publicar -->`.

### 3.10 Perguntas frequentes (`#perguntas`)

- **Layout (≥ 1024px):** 2 colunas, 4/8. À esquerda, eyebrow + h2 + parágrafo "Não achou sua dúvida?" + botão `.btn--contorno` "Perguntar no WhatsApp", com `position: sticky; top: calc(var(--header-h) + 32px)`. À direita, o acordeão. **Mobile:** empilhado.
- **Acordeão** com `<details>/<summary>` nativo (ver 4.5). 6 a 8 perguntas (prazo, cuidados para bebês, lavagem, envio, pagamento, personalização, troca). A resposta sobre bebês segue a pesquisa: olhos e boca bordados, sem peças soltas, costuras reforçadas, e "não deixe a boneca no berço durante o sono do bebê". Nada de "certificada" ou "100% segura".

### 3.11 CTA final + Instagram (`#encomendar`)

- **Fundo:** `--c-rosa-claro`.
- **Layout (≥ 1024px):** mosaico de 6 fotos quadradas (3×2) ao redor da chamada: grade de 12 colunas, com a chamada no centro (colunas 4–9) e as fotos em duas colunas de cada lado (3 de cada lado, em escada). Mais simples, que o desenvolvedor pode adotar: **chamada no centro em cima** e **faixa de 6 fotos quadradas** em linha abaixo (6 colunas no desktop, 3×2 no tablet, rolagem horizontal com `scroll-snap` no mobile, mostrando 2,5 fotos). **Adotar a versão simples.**
- **Chamada:** ornamento coração-linha → h2 (ex.: "Vamos criar a sua boneca?") → lead → botões: `.btn--primario` "Encomendar pelo WhatsApp" e `.btn--contorno` "Seguir @arosabordo" (Instagram, nova aba).
- **Fotos:** `instagram-1..6.jpg` (1:1, 600×600), `--r-md`, cada uma é link para o Instagram (`aria-label="Ver mais no Instagram @arosabordo (abre em nova aba)"`; um único link envolvendo a faixa inteira é aceitável e evita 6 paradas de Tab, preferível). Hover: `scale(1.03)` na imagem e ícone do Instagram aparecendo no centro (só com `prefers-reduced-motion: no-preference`).

### 3.12 Rodapé (`#contato`)

- **Fundo:** `--c-bordo-900`; pesponto `--pesponto-escuro` no topo, a 12px da borda.
- **3 colunas (≥ 768px) / empilhado (mobile):**
  1. Logo em versão creme (`logo-rosa-bordo-claro.svg`), frase curta, Instagram.
  2. "Fale comigo" (título Nunito 800 `--fs-eyebrow` em `--c-rosa`, 7,5:1): WhatsApp (11) 90000-0000, e-mail, São Paulo – SP, horário curto "Seg a sex, 9h às 18h · Sáb, 9h às 13h". Todos FICTÍCIOS, com comentário HTML.
  3. "Encomendas": envio, prazo de personalizadas e pagamento (de `dados-negocio.md`, versão curta).
- Links creme com sublinhado; hover: `--c-rosa`. Ícones de 20px.
- Linha final: "© 2026 Rosa Bordô · Feito à mão com carinho" + créditos das fotos ("Fotos ilustrativas: Pexels, Pixabay e Unsplash; créditos em imagens.md") em `--fs-small`, creme a 80% de opacidade (~11:1).
- Incluir o JSON-LD de `dados-negocio.md`.

### 3.13 Botão flutuante do WhatsApp (mobile)

- Só em < 1024px. Pílula fixa em `bottom: 16px; right: 16px` (respeitar `env(safe-area-inset-bottom)`), altura 52px, fundo `--c-bordo`, texto creme "Encomendar" + ícone do WhatsApp. `--sh-2`.
- Aparece só depois que o hero sai da tela (IntersectionObserver) e some quando a seção `#encomendar` ou o rodapé estão visíveis. Escondido com `visibility: hidden` (sai da ordem de Tab). Transição `translateY` em `--dur-base`.

---

## 4. Componentes

Todos os interativos têm alvo mínimo de **44×44px** e foco visível com `box-shadow: var(--foco)` (anel creme de 3px + anel bordô de 3px: funciona sobre claro, escuro e foto) via `:focus-visible`. Nunca `outline: none` sem substituto.

### 4.1 Botões

Base `.btn`: altura mínima 48px (44px na versão compacta do cabeçalho), padding `0 24px`, `--r-md`, Nunito 700 `--fs-btn`, ícone opcional de 20px com gap de 10px, transição de `background-color`, `color`, `transform` e `box-shadow` em `--dur-rapida`.

| Variante | Normal | Hover | Foco | Ativo | Desabilitado |
|---|---|---|---|---|---|
| `.btn--primario` (sobre claro) | fundo `--c-bordo`, texto branco (11,3:1) | fundo `--c-bordo-hover` (13,2:1), `translateY(-1px)`, `--sh-2` | `--foco` | `translateY(0)`, sem sombra | fundo `#D9C9CD`, texto `#6B5A5E` (~4,6:1), `cursor: not-allowed`, sem hover |
| `.btn--contorno` (sobre claro) | transparente, borda 2px `--c-bordo`, texto `--c-bordo` (10,4:1) | fundo `--c-bordo`, texto branco | `--foco` | `scale(.98)` | borda e texto `#A8979B`, sem hover |
| `.btn--creme` (sobre bordô/foto) | fundo `--c-creme`, texto `--c-bordo` (10,4:1) | fundo `--c-branco`, texto `--c-bordo-hover`, `translateY(-1px)` | `--foco` (o anel bordô externo fica visível sobre o véu porque o anel creme interno o separa) | `translateY(0)` | fundo creme a 50%, texto bordô a 60% |
| `.btn--contorno-claro` (sobre bordô/foto) | transparente, borda 2px creme, texto creme (≥ 7:1 no véu) | fundo `rgba(251,245,239,0.16)` | `--foco` | `scale(.98)` | opacidade .5 |
| `.btn--icone` (controles do hero, hambúrguer) | ver 3.2.7 e 3.3 | idem | `--foco` | `scale(.96)` | — |

- Links que abrem WhatsApp/Instagram em nova aba têm o aviso " (abre em nova aba)" em texto visualmente oculto (`.sr-only`).
- Botões só com ícone sempre têm `aria-label`.

### 4.2 Card de modelo (coleção)

- `<article>` com fundo `--c-branco`, `--r-lg`, `--sh-1`, borda 1px `--c-borda`, `overflow: hidden`.
- **Foto:** 4:5, `object-fit: cover`, `loading="lazy"`, `width="800" height="1000"`. Pesponto interno (`::after`, `inset: 10px`, `--pesponto-escuro`, só sobre a foto).
- **Foto de detalhe no hover/foco** (pesquisa, Duda): se houver `modelo-N-detalhe.jpg`, ela aparece por crossfade (`opacity`) quando o card recebe hover ou `:focus-within`. Opcional: sem a foto, nada acontece. Com `prefers-reduced-motion`, a troca é instantânea.
- **Selo "Sob encomenda":** canto superior esquerdo da foto, a 16px, fundo `--c-rosa`, texto `--c-bordo` `--fs-eyebrow` 800 (5,5:1), `--r-pill`, padding `4px 12px`.
- **Corpo** (padding `--sp-5`): h3 (Fraunces 500, `--c-bordo`) → descrição de 1 linha (`--c-texto-suave`) → etiquetas (chips com borda 1px `--c-borda`, texto `--c-salvia-escuro` `--fs-small` 700, altura 28px; não são interativas) → rodapé do card em flex com espaço entre: "a partir de" (`--fs-small`, `--c-texto-suave`) + preço (Fraunces 600 22px, `--c-texto`) à esquerda; link "Quero um modelo assim" à direita (estilo link bordô 700 com seta, área de 44px; no mobile, ocupa a largura toda abaixo do preço como `.btn--contorno`).
- **Estados:** hover do card: `translateY(-4px)` + `--sh-2` (só com `no-preference`). Foco dentro: `:focus-within` aplica a mesma elevação e o link recebe `--foco`. O card inteiro **não** é um link (só o CTA).

### 4.3 Navegação

Ver 3.3. Estados dos links: normal `--c-texto`; hover `--c-bordo` + sublinhado tracejado; foco `--foco` com `--r-sm`; atual `aria-current` + sublinhado contínuo 2px bordô. Skip link "Pular para o conteúdo" como primeiro elemento focável: fica escondido até receber foco e aparece no canto superior esquerdo como `.btn--primario`.

### 4.4 Chips e etiquetas

- Chips informativos (cards, personalize) **não são interativos**: sem hover nem cursor de mão.
- Etiqueta do hero: ver 3.2.3.

### 4.5 Acordeão (FAQ)

- `<details>` com borda inferior `--pesponto-claro` entre itens; o primeiro com borda superior também.
- `<summary>`: área mínima de 56px de altura, padding `--sp-4 0`, Fraunces 500 `--fs-h3`, `--c-texto`; ícone "+" à direita (24px, bordô) que gira 45° para virar "×" quando aberto (`transform`, `--dur-base`). Remover o marcador nativo (`list-style: none` e `::-webkit-details-marker { display: none }`).
- Hover: texto `--c-bordo`. Foco: `--foco` com `--r-sm`. Aberto: texto `--c-bordo`.
- Resposta: `--fs-body`, `--c-texto`, padding-bottom `--sp-5`, `max-width: 62ch`.

### 4.6 Formulários

O site **não tem formulário** (encomendas pelo WhatsApp). Se um dia houver: campos com altura de 48px, fundo branco, borda 1.5px `--c-borda-forte` (4,8:1), `--r-sm`, rótulo visível acima (Nunito 700); foco `--foco`; erro com borda e texto `#A3122A` (~7:1 sobre branco) + ícone + mensagem associada por `aria-describedby`; desabilitado com fundo `#F1EAE6` e texto `#6B5A5E`.

---

## 5. Breakpoints e comportamento mobile

| Nome | Faixa | Principais mudanças |
|---|---|---|
| base | < 480px | Uma coluna; botões do hero empilhados com largura total; faixa do topo encurtada (< 360px); botão flutuante no lugar do "Encomendar" do cabeçalho (< 400px) |
| `sm` | ≥ 480px | Botões do hero lado a lado |
| `md` | ≥ 768px | Hero troca para o recorte 16:9 e o véu horizontal; `.slide--retrato` com moldura; grade da coleção em 2 colunas (já a partir de 560px); Personalize 2×2; rodapé em 3 colunas |
| `lg` | ≥ 1024px | Navegação completa (sem hambúrguer); `--header-h` 76px; coleção em 3 colunas; Sobre em 5/7; FAQ em 4/8 com coluna fixa; passos na horizontal; depoimentos desencontrados; diferenciais em linha; sem botão flutuante |
| `xl` | ≥ 1280px | Container de 1200px centralizado; Personalize em 4 colunas (a partir de 1200px) |

- **Mobile first:** CSS base para o celular; `min-width` nas media queries.
- **Ordem de leitura = ordem visual** em todos os tamanhos (no Sobre, foto antes do texto; no hero, os controles vêm antes no DOM por exigência do APG, mas visualmente ficam embaixo; isso é aceito pelo padrão).
- **Hero no celular:** recorte 4:5 (`<source media="(max-width: 767px)">`); boneca no terço superior, texto nos 45% inferiores; controles centralizados em linha abaixo dos botões; swipe ativo.
- **Toque:** nenhuma informação só no hover (a foto de detalhe do card é bônus).
- **`sizes` das imagens:** hero `100vw`; coleção `(min-width:1024px) 360px, (min-width:560px) 45vw, 92vw`; sobre `(min-width:1024px) 440px, 92vw`; instagram `(min-width:1024px) 190px, 40vw`.

---

## 6. Pedidos de imagem (para o `gerador-imagens`; resultado em `imagens.md`)

Regras gerais:
- Fotos reais de **Unsplash, Pexels, Pixabay ou Wikimedia Commons** (CC0/CC BY). Conferir a licença na página de cada foto (Unsplash+ é pago). Registrar autor, URL e licença em `imagens.md`. **Todas as fotos marcadas "substituir antes de publicar" pelas fotos reais do @arosabordo.**
- Busca: "handmade doll", "cloth doll", "rag doll toy" (evitar "ragdoll", que traz gatos). Evitar bonecas assustadoras, sujas ou quebradas; preferir luz natural, fundos neutros/quentes e tons que conversem com rosa, bordô, creme e sálvia.
- Sem pessoas identificáveis (mãos são OK).
- Formatos: **WebP** (qualidade ~72–78) como principal + **JPEG** progressivo (qualidade ~78) como fallback. Nomes em kebab-case sem acento, em `assets/`.

### 6.1 Carrossel do hero: tamanhos

| Recorte | Proporção | Larguras para `srcset` | Peso máximo (WebP) | Uso |
|---|---|---|---|---|
| **Paisagem (desktop/tablet)** | **16:9** | **1920×1080**, 1440×810, 1024×576, 768×432 | 1920: ≤ 260 KB · 1440: ≤ 170 KB · 1024: ≤ 100 KB · 768: ≤ 70 KB | `<source media="(min-width: 768px)">` |
| **Retrato (celular)** | **4:5** | **1080×1350**, 720×900, 540×675 | 1080: ≤ 180 KB · 720: ≤ 95 KB · 540: ≤ 60 KB | `<source media="(max-width: 767px)">` |

- Nomes: `hero-1-colecao-1920.webp` (e `-1440`, `-1024`, `-768`, mais `.jpg` 1920 e 1024 de fallback); `hero-1-colecao-m-1080.webp` (e `-720`, `-540`).
- **Todos os slides paisagem com as mesmas dimensões intrínsecas** (1920×1080), e todos os retratos com 1080×1350.
- **Zona livre de texto no recorte paisagem:** o assunto principal deve ficar entre x = 800 e 1840 px (a metade esquerda recebe o texto e o véu mais escuro). Faixa inferior de 160px livre de detalhes importantes (controles à direita).
- **Zona livre no recorte 4:5:** assunto entre y = 60 e 700 px (terço superior/meio); os 45% inferiores recebem o texto.
- **Foto de origem em retrato** (para `.slide--retrato`): entregar apenas o recorte 4:5 (1080/720/540), que serve no celular e na moldura do desktop. Se o gerador puder compor imagens, pode entregar também a versão 1920×1080 composta (ver 3.2.5) e informar em `imagens.md`.
- **Slide 1 obrigatoriamente com foto de origem paisagem** (é o LCP).

### 6.2 Lista de imagens

| Arquivo | Seção | Tamanho / proporção | Fonte sugerida / busca | Descrição e prompt de busca |
|---|---|---|---|---|
| `hero-1-colecao` (paisagem + `-m`) | Hero slide 1 (LCP) | 1920×1080 (16:9) + 1080×1350 (4:5) | Pesquisa #1: Pexels 27782862 (Mariya Klyachko, 6537×4358) | Várias bonecas de pano coloridas sobre toalha bordada; bonecas agrupadas à direita do recorte paisagem. Busca alternativa: "handmade cloth dolls group table" |
| `hero-2-personalizada` (retrato, `-m`) | Hero slide 2 | 1080×1350 (4:5) | Pesquisa #6: Pixabay 3361741 (ErikaWittlieb) ou #3: Pexels 38286876 (Enio Engenheiro) | Uma boneca de pano com cabelo de lã e roupinha estampada, fundo claro; boneca inteira, centralizada, com margem acima da cabeça |
| `hero-3-feito-a-mao` (paisagem + `-m`) | Hero slide 3 | 1920×1080 + 1080×1350 | Pesquisa #2: Pexels 6876052 (Sara Puig Sanz) | Mãos costurando tecido, luz natural; mãos na metade direita. Alternativa: Pexels 11482124 |
| `hero-4-presente` (paisagem ou retrato) | Hero slide 4 | 1920×1080 e/ou 1080×1350 | Pesquisa #8: Unsplash 5CvJwtQsMnU (Kate Andress) ou #4: Pexels 35343461 | Boneca de pano com flores secas, clima afetivo de presente, tons quentes. Busca: "cloth doll gift flowers" |
| `modelo-1..6.jpg` (+ `.webp`) | Coleção (6 cards) | 800×1000 (4:5), também 480×600; ≤ 120 KB | Pesquisa #3, #4, #5, #6, #7, #9 e Wikimedia "Category:Rag dolls" | Uma boneca por foto, inteira, fundo neutro ou parede clara; variedade de tons de pele, cabelos e roupas. Não repetir a foto usada no hero no mesmo recorte (pode reutilizar com outro enquadramento, se faltar opção) |
| `modelo-N-detalhe.jpg` (opcional) | Coleção (hover) | 800×1000 (4:5) | mesmas fontes | Close do rosto bordado/detalhe da roupa do mesmo modelo. Se não houver foto do mesmo modelo, **não entregar** |
| `sobre-maos-costurando.jpg` | Sobre | 960×1200 (4:5), também 640×800; ≤ 160 KB | Pexels 11482124 ou 27782858 | Mãos de mulher costurando ou bordando boneca/tecido, luz de janela, sem rosto |
| `sobre-detalhe-bordado.jpg` | Sobre (foto menor) | 600×600 (1:1); ≤ 70 KB | Pexels 29796875 ou Unsplash xssNT5VjsyM (carretéis, Victor Volkov) | Close de bordado ou carretéis de linha coloridos (textura de ateliê) |
| `personalize-detalhe.jpg` (opcional) | Personalize | 800×1000 (4:5) | Pexels 7456865 ou similares | Duas ou mais bonecas com tons de pele/cabelos diferentes, para sugerir personalização |
| `instagram-1..6.jpg` | CTA final | 600×600 (1:1); ≤ 60 KB cada | Reaproveitar recortes das fotos acima | Mosaico variado: boneca inteira, rosto bordado, mãos, linhas, tecidos, grupo de bonecas |
| `og-image.jpg` | `og:image` | 1200×630 (1.91:1); ≤ 200 KB | Recorte de `hero-1-colecao` | Foto com faixa bordô à esquerda (40%) e o logo creme; sem texto pequeno |

### 6.3 SVG (o gerador cria)

| Arquivo | Uso | Especificação |
|---|---|---|
| `logo-rosa-bordo.svg` | Cabeçalho | Logotipo tipográfico "Rosa Bordô" em serifada soft itálica (traços convertidos em path, não depender da fonte), cor `#6E1A37`; uma linha de costura tracejada `#E8A3B5` sai do "a" final e termina numa pequena flor/rosa de 5 pétalas em linha. `viewBox` horizontal ~ 220×48. Incluir `<title>Rosa Bordô</title>` |
| `logo-rosa-bordo-claro.svg` | Rodapé, og-image | Mesmo logo em `#FBF5EF` com a linha em `#E8A3B5` |
| `favicon.svg` (+ `favicon-32.png`, `apple-touch-icon.png` 180×180) | Favicon | Monograma "RB" em Fraunces itálico creme sobre círculo bordô, com pesponto rosa no contorno |
| `icones.svg` (sprite) ou arquivos separados | Diferenciais, cards, rodapé, controles | Traço de 1.75px, cantos arredondados, `currentColor`, `viewBox 0 0 24 24`: agulha-e-linha, linha-bordada (olho bordado), coração-pesponto, caixa-envio, tesoura, carretel, informação, whatsapp, instagram, e-mail, relógio, local, seta-esquerda, seta-direita, pausa, play, mais (+), menu, fechar |
| `textura-linho.svg` | Slides em retrato, Personalize | Padrão repetível 64×64 de trama de linho (linhas finas horizontais e verticais irregulares) em `#FBF5EF`; usado com opacidade de 10–18% |
| `caminho-pesponto-h.svg` | Como encomendar (desktop) | Path ondulado horizontal, `stroke="#6E1A37"`, `stroke-width="2"`, `stroke-dasharray="8 8"`, `fill="none"`, `vector-effect="non-scaling-stroke"`, `viewBox 0 0 1000 60` |
| `ornamento-agulha.svg` | Fim do caminho de passos | Agulha com linha, 40×40, bordô |
| `ornamento-coracao-linha.svg` | Sobre (assinatura), CTA final | Coração desenhado com linha tracejada que continua num rabicho, 48×48, bordô |

Todos os SVG decorativos com `aria-hidden="true"` no uso; o logo com `<title>`.

---

## 7. Checklist de acessibilidade previsto

- [ ] `lang="pt-BR"`; um único `<h1>` (título do slide 1); `<h2>` por seção e nos slides 2 a 4; `<h3>` nos cards, passos e grupos. Sem pular níveis.
- [ ] Landmarks: `header`, `nav` (com `aria-label="Principal"`), `main`, `footer`; skip link "Pular para o conteúdo".
- [ ] Contraste AA em todas as combinações (tabela 2.1); texto sobre foto com véu ≥ 0,72 na zona do texto (~7:1 no pior caso); controles do hero ≥ 3:1.
- [ ] Nenhum texto branco/creme sobre `#E8A3B5`; rosa sobre creme só decorativo.
- [ ] Foco visível em todos os interativos (`--foco`, anel duplo); ordem de Tab lógica.
- [ ] Alvos de toque ≥ 44×44px (controles do hero 48px; indicadores com área de 44px; summary 56px).
- [ ] **Carrossel (APG + WCAG 2.2.2):** `aria-roledescription="carrossel"` + `aria-label`; slides `role="group"` + `aria-roledescription="slide"` + "N de 4"; botão pausar/retomar nativo, primeiro na ordem, só troca o rótulo; `aria-live` off/polite; indicador atual com `aria-disabled="true"` e `aria-current`; slides ocultos com `aria-hidden` + `inert`; pausa no hover, no foco (só retoma por comando), na aba oculta e fora da tela; ← → Home End; swipe com `touch-action: pan-y`; setas visíveis no mobile.
- [ ] `prefers-reduced-motion`: sem autoplay, sem fade/zoom, sem barra de progresso, sem elevação de cards.
- [ ] Slide 1 funciona sem JS; controles com `hidden` até o JS estar pronto.
- [ ] Imagens com `alt` descritivo (fotos de conteúdo) ou `alt=""` (decorativas); `width`/`height` em todas; slide 1 com `fetchpriority="high"` e sem lazy.
- [ ] Links externos com aviso "(abre em nova aba)"; botões só com ícone com `aria-label`.
- [ ] Menu mobile: `aria-expanded`, foco preso, Esc fecha, foco volta ao botão.
- [ ] Amostras de cor de pele com legenda em texto (não só cor, WCAG 1.4.1).
- [ ] Zoom de 200% e largura de 320px sem rolagem horizontal (exceto a faixa de fotos do Instagram, que é rolagem intencional com `scroll-snap`, focável por teclado: `tabindex="0"` + `aria-label`, se não for um link único).
- [ ] Dados fictícios marcados com `<!-- FICTÍCIO: substituir antes de publicar -->`; fotos de banco marcadas para substituição.
- [ ] Copy sem "comprar", "carrinho", "loja", "pronta-entrega" (na vitrine/hero), "certificada", "100% segura", "segura para bebês" e sem selo Inmetro.
