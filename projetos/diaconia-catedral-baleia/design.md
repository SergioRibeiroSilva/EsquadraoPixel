# Design: Corpo Diaconal, Assembleia de Deus Catedral Baleia (Brasília/DF)

> Autor: designer-ui · 2026-11-15 · Entradas: `briefing.md` (inclui a "Atualização 2026-11-15"), `pesquisa.md` e `entrevista.md` (fase PREPARAR).
> **Ainda não existe `dados-negocio.md`.** O usuário respondeu "siga com o que encontrar", então todos os dados de contato, horários e coordenadas vêm de `pesquisa.md` e aparecem no site com o marcador **"a confirmar"** (componente 4.8). Quando `dados-negocio.md` existir, ele passa a valer no lugar destes dados.

---

## 1. Conceito

**"Serviço que acolhe como água mansa"**: um visual sóbrio em azul-marinho, creme e dourado, com um único gesto forte. São linhas de onda desenhadas do zero que lembram o espelho d'água e a curva do templo em forma de baleia. A tipografia serifada é grande e reverente.

### Justificativa (ligada à pesquisa)
- **Identidade de fato = o templo.** A pesquisa não achou cores, logotipo nem manual de marca oficiais (pesquisa 1.3). A marca pública é a arquitetura: baleia, fachada de vidro e espelho d'água (pesquisa 1.1). Por isso o grafismo é de **ondas e um arco suave**, em desenho original e abstrato. Não há silhueta de baleia literal nem reprodução do logotipo da CONAMAD ou da igreja (pesquisa 4).
- **Paleta curta.** Os sites de igreja de referência usam de 2 a 3 cores e alternam fundos claros e escuros (pesquisa 3.1). Mantive azul-marinho, dourado e creme, como no briefing, e acrescentei o **azul-petróleo** que a pesquisa sugere (3.2) para lembrar a água e o vidro. Ele aparece só em ícones, foco e detalhes.
- **Dourado com cautela.** A pesquisa avisa que dourado sobre creme reprova no contraste (3.2). O dourado claro só aparece **sobre azul-marinho**. Sobre fundos claros entra um **dourado-escuro** (#7C5E17), que foi verificado e passa no AA.
- **Público de todas as idades, no celular.** Por isso o corpo de texto tem 17px, os alvos de toque têm 44px ou mais e há um CTA principal único e repetido: **"Fale com a diaconia" (WhatsApp)**. Horários e localização ficam visíveis logo após o hero, porque é o que os visitantes procuram primeiro (pesquisa 3.2).
- **Neutralidade.** Nada de imagens de autoridades ou eventos políticos, e nada que lembre a Catedral Metropolitana (pesquisa 4).

---

## 2. Tokens

### 2.1 Cores

Os contrastes abaixo foram calculados pela fórmula de luminância relativa da WCAG 2.x e arredondados para baixo.

| Token | Hex | Uso |
|---|---|---|
| `--cor-marinho` | `#0E2A47` | Cor principal: fundo do hero, base bíblica e CTA final, títulos sobre claro, botão primário em fundo claro |
| `--cor-marinho-900` | `#091C30` | Rodapé |
| `--cor-marinho-700` | `#163A5F` | Hover do botão marinho |
| `--cor-dourado` | `#D4AF5A` | **Só sobre marinho**: botão primário em fundo escuro, eyebrow no escuro, filetes, números dos passos, foco no escuro |
| `--cor-dourado-claro` | `#E3C47C` | Hover do botão dourado |
| `--cor-dourado-escuro` | `#7C5E17` | Dourado **sobre fundo claro**: eyebrows, texto do selo "a confirmar", filete decorativo |
| `--cor-petroleo` | `#1F6F78` | Acento "água": ícones, links no hover, anel de foco no claro, ondas |
| `--cor-creme` | `#F7F3EA` | Fundo base da página |
| `--cor-branco` | `#FFFFFF` | Cards, seções alternadas |
| `--cor-agua` | `#E6F0F0` | Fundo das seções Agenda e Localização |
| `--cor-texto` | `#2B3442` | Corpo de texto sobre claro |
| `--cor-texto-suave` | `#5A6472` | Legendas, notas, metadados |
| `--cor-texto-claro` | `#C9D6E3` | Texto secundário sobre marinho |
| `--cor-borda` | `#E3DCCB` | Divisórias decorativas (não informativas) |
| `--cor-borda-campo` | `#7A8494` | Borda de campos de formulário (precisa de 3:1) |
| `--cor-erro` | `#A32D2D` | Mensagens de erro |
| `--cor-selo-bg` | `#FBEFCF` | Fundo do selo "a confirmar" |
| `--cor-desab-bg` | `#D9DDE3` | Botão desabilitado (fundo) |
| `--cor-desab-texto` | `#6B7480` | Botão desabilitado (texto) |

#### Contrastes verificados

| Combinação | Contraste | Resultado |
|---|---|---|
| Texto `#2B3442` sobre creme `#F7F3EA` | ~11,3:1 | AA/AAA |
| Texto `#2B3442` sobre branco | ~12,5:1 | AA/AAA |
| Texto `#2B3442` sobre água `#E6F0F0` | ~10,8:1 | AA/AAA |
| Títulos marinho `#0E2A47` sobre creme | ~13,1:1 | AA/AAA |
| Marinho sobre branco | ~14,5:1 | AA/AAA |
| Marinho sobre água | ~12,5:1 | AA/AAA |
| Texto suave `#5A6472` sobre creme | ~5,4:1 | AA |
| Texto suave sobre branco | ~6,0:1 | AA |
| Texto suave sobre água | ~5,1:1 | AA |
| Branco sobre marinho (hero, botão marinho) | ~14,5:1 | AA/AAA |
| Branco sobre marinho-700 `#163A5F` (hover) | ~11,6:1 | AA/AAA |
| Branco sobre marinho-900 (rodapé) | ~17,2:1 | AA/AAA |
| Texto claro `#C9D6E3` sobre marinho | ~9,8:1 | AA/AAA |
| Texto claro sobre marinho-900 | ~11,6:1 | AA/AAA |
| **Dourado `#D4AF5A` sobre marinho** | **~7,0:1** | AA/AAA (texto e botão) |
| Marinho sobre dourado (texto do botão dourado) | ~7,0:1 | AA/AAA |
| Marinho sobre dourado-claro `#E3C47C` (hover) | > 8:1 | AA/AAA |
| Dourado sobre marinho-900 | ~8,2:1 | AA/AAA |
| **Dourado `#D4AF5A` sobre creme** | **~1,9:1** | **REPROVA: proibido para texto ou ícone informativo** |
| **Dourado-escuro `#7C5E17` sobre creme** | **~5,4:1** | AA |
| Dourado-escuro sobre branco | ~6,0:1 | AA |
| Dourado-escuro sobre água | ~5,2:1 | AA |
| Dourado-escuro sobre selo `#FBEFCF` | ~5,2:1 | AA |
| Petróleo `#1F6F78` sobre creme | ~5,2:1 | AA (texto e foco) |
| Petróleo sobre branco | ~5,8:1 | AA |
| Petróleo sobre água | ~5,0:1 | AA |
| Branco sobre petróleo | ~5,8:1 | AA |
| Erro `#A32D2D` sobre branco | ~7,0:1 | AA/AAA |
| Erro sobre creme | ~6,3:1 | AA |
| Borda de campo `#7A8494` sobre branco | ~3,7:1 | 1.4.11 (≥ 3:1) |
| Borda de campo sobre creme | ~3,4:1 | 1.4.11 (≥ 3:1) |
| Texto desabilitado `#6B7480` sobre `#D9DDE3` | ~3,4:1 | isento (1.4.3), mas legível |
| Texto claro `#C9D6E3` sobre card translúcido no marinho (≈ `#1A3552`) | ~8:1 | AA/AAA |

**Regras práticas para o desenvolvedor**
1. `--cor-dourado` (#D4AF5A) **nunca** vai sobre creme, branco ou água. No claro, use `--cor-dourado-escuro`.
2. Ondas e filetes são decorativos (isentos de contraste) e levam `aria-hidden="true"`.
3. Link no texto corrido sobre claro: cor marinho, sublinhado sempre visível (`text-underline-offset: .2em`). No hover vira petróleo com sublinhado de 2px.

### 2.2 Tipografia (Google Fonts, 2 famílias)

| Papel | Família | Pesos |
|---|---|---|
| Títulos, versículos, logotipo | **Lora** (serifada, reverente e legível em telas) | 500, 600, 700 e itálico 500 |
| Corpo, navegação, botões, formulários | **Source Sans 3** (sans humanista, ótima para leitores mais velhos) | 400, 600, 700 |

Link de carregamento (com `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com` com `crossorigin`):
```
https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Source+Sans+3:wght@400;600;700&display=swap
```
Fallbacks: `Georgia, "Times New Roman", serif` e `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

#### Escala (mobile first, fluida)
| Token | Valor | Uso | Família / peso / altura de linha |
|---|---|---|---|
| `--fs-display` | `clamp(2.25rem, 1.6rem + 3.2vw, 4rem)` | H1 do hero (36 a 64px) | Lora 700 / 1.1 / letter-spacing -0.01em |
| `--fs-h2` | `clamp(1.75rem, 1.4rem + 1.8vw, 2.75rem)` | Títulos de seção (28 a 44px) | Lora 600 / 1.2 |
| `--fs-h3` | `clamp(1.25rem, 1.15rem + .5vw, 1.5rem)` | Títulos de card (20 a 24px) | Lora 600 / 1.3 |
| `--fs-verso` | `clamp(1.375rem, 1.2rem + 1vw, 2rem)` | Citação bíblica de destaque | Lora itálico 500 / 1.45 |
| `--fs-lead` | `clamp(1.125rem, 1.05rem + .4vw, 1.3125rem)` | Parágrafo de abertura (18 a 21px) | Source Sans 3 400 / 1.6 |
| `--fs-body` | `1.0625rem` | Corpo (17px) | Source Sans 3 400 / 1.65 |
| `--fs-small` | `0.9375rem` | Notas, legendas, rodapé (15px) | Source Sans 3 400 / 1.5 |
| `--fs-eyebrow` | `0.8125rem` | Rótulo acima do H2 (13px), CAIXA ALTA, letter-spacing .12em | Source Sans 3 700 |
| `--fs-botao` | `1.0625rem` | Botões | Source Sans 3 700 / 1 |

Largura de leitura: parágrafos com `max-width: 65ch`.

### 2.3 Espaçamento (base 4px)
`--sp-1: .25rem` (4) · `--sp-2: .5rem` (8) · `--sp-3: .75rem` (12) · `--sp-4: 1rem` (16) · `--sp-5: 1.5rem` (24) · `--sp-6: 2rem` (32) · `--sp-7: 3rem` (48) · `--sp-8: 4rem` (64) · `--sp-9: 6rem` (96) · `--sp-10: 8rem` (128)
- Respiro vertical de seção: `--sp-secao: clamp(4rem, 3rem + 5vw, 7.5rem)`
- Espaço entre o cabeçalho da seção (eyebrow + H2 + lead) e o conteúdo: `--sp-7`
- Gap de grids: `--sp-5` no mobile e `--sp-6` a partir de 900px

### 2.4 Raios
`--raio-sm: 6px` (selos, campos) · `--raio-md: 12px` (botões, cards) · `--raio-lg: 20px` (fotos, mapa, painéis) · `--raio-arco: 999px 999px 20px 20px` (moldura em arco da foto do hero, evoca a abóbada e o dorso curvo do templo) · `--raio-pill: 999px` (chips)

### 2.5 Sombras (tingidas de marinho, suaves)
- `--sombra-1: 0 1px 2px rgba(14,42,71,.06), 0 2px 8px rgba(14,42,71,.06)`: cards em repouso
- `--sombra-2: 0 4px 12px rgba(14,42,71,.08), 0 12px 32px rgba(14,42,71,.10)`: hover de card, faixa de informações
- `--sombra-3: 0 20px 48px rgba(9,28,48,.25)`: foto do hero

### 2.6 Movimento
- `--dur: 200ms`, `--ease: cubic-bezier(.2,.7,.2,1)`
- Entrada das seções: fade + translateY(12px) em 400ms, uma vez (IntersectionObserver). O conteúdo **precisa ser visível sem JS**: aplique a classe de animação só depois que o JS rodar.
- `@media (prefers-reduced-motion: reduce)`: sem transform nem animação, transições ≤ 1ms e `scroll-behavior: auto`.

### 2.7 Bloco `:root` pronto para copiar

```css
:root {
  /* Cores */
  --cor-marinho: #0E2A47;
  --cor-marinho-900: #091C30;
  --cor-marinho-700: #163A5F;
  --cor-dourado: #D4AF5A;         /* só sobre marinho */
  --cor-dourado-claro: #E3C47C;   /* hover do botão dourado */
  --cor-dourado-escuro: #7C5E17;  /* dourado sobre fundos claros */
  --cor-petroleo: #1F6F78;
  --cor-creme: #F7F3EA;
  --cor-branco: #FFFFFF;
  --cor-agua: #E6F0F0;
  --cor-texto: #2B3442;
  --cor-texto-suave: #5A6472;
  --cor-texto-claro: #C9D6E3;
  --cor-borda: #E3DCCB;
  --cor-borda-campo: #7A8494;
  --cor-erro: #A32D2D;
  --cor-selo-bg: #FBEFCF;
  --cor-desab-bg: #D9DDE3;
  --cor-desab-texto: #6B7480;
  --cor-card-escuro: rgba(255,255,255,.06);
  --cor-borda-escuro: rgba(212,175,90,.35);

  /* Tipografia */
  --ff-titulo: "Lora", Georgia, "Times New Roman", serif;
  --ff-texto: "Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-display: clamp(2.25rem, 1.6rem + 3.2vw, 4rem);
  --fs-h2: clamp(1.75rem, 1.4rem + 1.8vw, 2.75rem);
  --fs-h3: clamp(1.25rem, 1.15rem + .5vw, 1.5rem);
  --fs-verso: clamp(1.375rem, 1.2rem + 1vw, 2rem);
  --fs-lead: clamp(1.125rem, 1.05rem + .4vw, 1.3125rem);
  --fs-body: 1.0625rem;
  --fs-small: .9375rem;
  --fs-eyebrow: .8125rem;
  --lh-titulo: 1.2;
  --lh-texto: 1.65;

  /* Espaçamento */
  --sp-1: .25rem; --sp-2: .5rem; --sp-3: .75rem; --sp-4: 1rem;
  --sp-5: 1.5rem; --sp-6: 2rem; --sp-7: 3rem; --sp-8: 4rem;
  --sp-9: 6rem;  --sp-10: 8rem;
  --sp-secao: clamp(4rem, 3rem + 5vw, 7.5rem);

  /* Layout */
  --container: 1180px;
  --container-texto: 760px;
  --gutter: clamp(1.25rem, 4vw, 2rem);
  --header-h: 64px;               /* 72px a partir de 1100px */

  /* Raios */
  --raio-sm: 6px;
  --raio-md: 12px;
  --raio-lg: 20px;
  --raio-arco: 999px 999px 20px 20px;
  --raio-pill: 999px;

  /* Sombras */
  --sombra-1: 0 1px 2px rgba(14,42,71,.06), 0 2px 8px rgba(14,42,71,.06);
  --sombra-2: 0 4px 12px rgba(14,42,71,.08), 0 12px 32px rgba(14,42,71,.10);
  --sombra-3: 0 20px 48px rgba(9,28,48,.25);

  /* Foco */
  --foco-claro: 3px solid var(--cor-petroleo);
  --foco-escuro: 3px solid var(--cor-dourado);
  --foco-offset: 3px;

  /* Movimento */
  --dur: 200ms;
  --ease: cubic-bezier(.2,.7,.2,1);
}
@media (min-width: 1100px) { :root { --header-h: 72px; } }
```

---

## 3. Grid e estrutura de página

### 3.1 Grid
- `.container`: `width: min(100% - 2*var(--gutter), var(--container))`, centralizado.
- `.container--texto`: até 760px, para FAQ e blocos de leitura.
- Mobile: 1 coluna. A partir de 600px: grids de 2 colunas. A partir de 900px: 12 colunas (as divisões estão descritas em cada seção).
- Toda seção com `id` usa `scroll-margin-top: calc(var(--header-h) + 16px)`.
- Cabeçalho de seção padrão (`.secao__cabecalho`): eyebrow, depois H2 (`--sp-3` abaixo do eyebrow), depois lead (`--sp-4` abaixo, até 60ch). Alinhado à esquerda no mobile. Centralizado a partir de 900px **só** nas seções O que fazemos, Liderança e Perguntas.

### 3.2 Ordem das seções e fundos (alternância claro/escuro)

| # | Seção | `id` | Fundo |
|---|---|---|---|
| 0 | Link "Pular para o conteúdo" | – | – |
| 1 | Cabeçalho fixo | – | creme 92% + blur |
| 2 | Hero | `inicio` | marinho + ondas |
| 3 | Faixa de informações rápidas | `informacoes` | creme (cards brancos sobrepostos ao fim do hero) |
| 4 | Quem somos | `quem-somos` | creme |
| 5 | Base bíblica | `base-biblica` | marinho |
| 6 | O que fazemos | `o-que-fazemos` | branco |
| 7 | Liderança / coordenação | `lideranca` | creme |
| 8 | Escala e reuniões (agenda) | `agenda` | água |
| 9 | Quer servir conosco? | `servir` | branco |
| 10 | Precisa de ajuda? | `ajuda` | creme |
| 11 | Perguntas frequentes | `perguntas` | branco |
| 12 | Localização e contato | `localizacao` | água |
| 13 | CTA final | `contato` | marinho, com onda no topo |
| 14 | Rodapé | – | marinho-900 |

Legenda: **[A CONFIRMAR]** marca onde fica um dado da pesquisa que precisa levar o selo "a confirmar" no site (componente 4.8) e um comentário HTML `<!-- A CONFIRMAR: ... -->` no código.

### 3.3 Seções em detalhe

#### 1. Cabeçalho (`<header>`, fixo no topo)
- **Objetivo**: identificar o site e dar acesso ao CTA de qualquer ponto da página.
- **Conteúdo**: logotipo tipográfico (SVG `logo-diaconia.svg`, com símbolo de ondas + "Corpo Diaconal" em Lora 600 + "AD Catedral Baleia" em Source Sans 3 700, caixa alta, 11px, letter-spacing .14em) que leva a `#inicio`. Navegação: Quem somos · O que fazemos · Agenda · Servir · Ajuda · Localização. Botão primário (versão marinho) "Fale com a diaconia" com ícone do WhatsApp.
- **Layout**: altura `--header-h`. Fundo `rgba(247,243,234,.92)` com `backdrop-filter: blur(8px)` (sem suporte: creme sólido). Ao rolar mais de 8px, ganha borda inferior de 1px `--cor-borda` e `--sombra-1`.
- **Mobile (< 1100px)**: logo à esquerda e, à direita, um botão de ícone do WhatsApp (44x44, marinho, `aria-label="Fale com a diaconia pelo WhatsApp"`) e o botão de menu (44x44, ícone hambúrguer, `aria-expanded`, `aria-controls="menu"`). O menu abre como painel em tela cheia abaixo do cabeçalho, fundo creme, links em Lora 600 de 24px, um por linha, cada um com 56px de altura e divisórias `--cor-borda`. Ao fim do painel, o botão "Fale com a diaconia" em largura total. Fecha com Esc, com clique em link ou no X. O foco fica preso no painel enquanto ele está aberto e volta ao botão ao fechar. Trave o scroll do `body`.
- **Desktop (≥ 1100px)**: links inline em Source Sans 3 600, 16px, marinho, gap `--sp-5`. O link da seção visível recebe um sublinhado dourado-escuro de 2px (scroll-spy opcional, com `aria-current="true"`).

#### 2. Hero (`#inicio`)
- **Objetivo**: dizer em 3 segundos quem são e oferecer o contato.
- **Conteúdo** (textos finais são do redator):
  - Eyebrow em dourado sobre marinho: "Corpo Diaconal · Assembleia de Deus Catedral Baleia"
  - H1 branco, `--fs-display`, sobre servir (ex.: "Servir com alegria, acolher com amor")
  - Lead em `--cor-texto-claro`, até 46ch
  - Versículo curto em Lora itálico, `--cor-texto-claro`, com filete dourado vertical de 3px à esquerda e referência "(ARC)" em Source Sans 600 14px dourado. Sugestão ao redator: Marcos 10.45.
  - Botões: **primário dourado** "Fale com a diaconia" (WhatsApp) e **secundário contorno claro** "Ver horários e agenda" (âncora `#agenda`)
  - Foto `hero-servico.jpg` em moldura com topo em arco (`--raio-arco`), `--sombra-3` e um contorno dourado deslocado 12px atrás (pseudo-elemento, 1px `--cor-borda-escuro`)
  - Grafismo `onda-hero.svg`: 3 linhas de onda horizontais (petróleo 40%, dourado 35%, branco 12%) no terço inferior, atrás do texto, `aria-hidden`
  - A borda inferior do hero termina com `divisor-onda.svg` (forma cheia na cor creme), que faz a transição para a seção seguinte
- **Layout mobile**: 1 coluna, nesta ordem: eyebrow, H1, lead, botões empilhados em largura total (gap `--sp-3`), versículo, foto (proporção 4:3, `--raio-lg` em vez de arco no < 600px). Padding: `calc(var(--header-h) + var(--sp-7))` no topo e `--sp-10` embaixo (espaço para a faixa sobreposta).
- **≥ 900px**: grid de 12 colunas com texto nas colunas 1-7 e foto nas 8-12 (proporção 4:5, moldura em arco), alinhados ao centro. Botões lado a lado. `min-height: min(88vh, 780px)`.
- **Sem texto sobre a foto**: o contraste do texto é sempre o do marinho sólido.

#### 3. Faixa de informações rápidas (`#informacoes`)
- **Objetivo**: mostrar logo de cara o que o visitante procura (horário, endereço, contato).
- **Conteúdo**: 3 cards brancos, cada um com ícone petróleo de 28px num círculo `--cor-agua` de 48px, rótulo (eyebrow dourado-escuro) e valor (Source Sans 600 18px marinho):
  1. **Cultos**: "Domingo, 10h e 18h" **[A CONFIRMAR: horários vêm de diretório sem data]**, com selo, mais o link "Ver agenda" para `#agenda`
  2. **Endereço**: "SGAS 910, Asa Sul (W5), Brasília/DF", com o link "Como chegar" para `#localizacao`. O endereço é confirmado; o CEP não aparece aqui.
  3. **WhatsApp**: "(61) 9905-5252" **[A CONFIRMAR: número de fonte não verificada, possivelmente incompleto]**, com selo, mais o link "Abrir conversa"
- **Layout**: o container sobe `margin-top: calc(-1 * var(--sp-8))` para se sobrepor ao fim do hero (z-index acima do divisor). Mobile: cards empilhados, gap `--sp-3`, padding `--sp-5`, `--raio-md`, `--sombra-2`. A partir de 600px: 3 colunas iguais. O card inteiro **não** é clicável; só os links internos (alvo de 44px de altura).

#### 4. Quem somos (`#quem-somos`)
- **Objetivo**: apresentar o Corpo Diaconal e sua ligação com o ministério pastoral.
- **Conteúdo**: eyebrow "Quem somos", H2, 2 ou 3 parágrafos curtos e uma lista de 3 valores (Serviço · Ordem · Unidade) com ícone de check petróleo. Se o redator citar o pastor presidente ("Pr. João Adair"), o nome leva selo **[A CONFIRMAR: nome e autorização de publicação]**. Menção opcional à CONAMAD / Ministério de Madureira (fato confirmado); nunca citar ADEB.
- **Imagem**: `templo-catedral-baleia.jpg` (foto real CC BY da Agência Brasília, se o gerador-imagens obtiver; senão, `quem-somos-acolhimento.jpg` de banco) com `--raio-lg` e uma legenda `<figcaption>` em `--fs-small` com o crédito obrigatório.
- **Layout**: mobile com texto e foto abaixo (16:10). A partir de 900px: foto nas colunas 1-5 e texto nas 7-12. Uma onda fina dourado-escuro (`onda-linha.svg`, 120x12) aparece acima do H2 como assinatura (repetida só aqui e em Servir).

#### 5. Base bíblica (`#base-biblica`)
- **Objetivo**: mostrar o fundamento bíblico do diaconato, de forma curta.
- **Conteúdo**: eyebrow dourado e H2 branco, mais uma **citação de destaque** (Atos 6.3, ARC) em `<blockquote>` com `--fs-verso` branco, aspas decorativas grandes (Lora 120px, dourado 50%, `aria-hidden`) e `<cite>` em dourado. Abaixo, 3 cards: **Atos 6.1-7** (a origem do serviço) · **1 Timóteo 3.8-13** (o caráter do diácono) · **Filipenses 1.1** (função reconhecida na igreja local). Cada card tem a referência em Source Sans 700 dourado, um título em Lora 600 branco e 2 a 3 linhas em `--cor-texto-claro`.
- **Cards escuros**: fundo `--cor-card-escuro`, borda de 1px `--cor-borda-escuro`, `--raio-md`, padding `--sp-5`.
- **Grafismo**: `onda-fundo.svg` muito sutil (linhas brancas a 6%) ancorado no canto inferior direito, `aria-hidden`.
- **Layout**: citação centralizada até 820px. Cards em 1 coluna no mobile e em 3 colunas a partir de 900px.

#### 6. O que fazemos (`#o-que-fazemos`)
- **Objetivo**: mostrar as áreas de serviço.
- **Conteúdo**: 7 cards de área + 1 card-CTA:
  1. Recepção e acolhimento (`icone-recepcao.svg`)
  2. Ordem e reverência nos cultos (`icone-ordem.svg`)
  3. Santa Ceia (`icone-ceia.svg`)
  4. Apoio ao batismo (`icone-batismo.svg`)
  5. Ação social e cestas (`icone-acao-social.svg`)
  6. Visitas a enfermos e famílias (`icone-visitas.svg`)
  7. Apoio a eventos (`icone-eventos.svg`)
  8. **Card-CTA** (fundo marinho): "Sente o chamado para servir?", com botão dourado "Quero servir" para `#servir`
- Nota abaixo do grid, em `--fs-small` e `--cor-texto-suave`: "Áreas em que a diaconia costuma servir; a atuação pode variar conforme a programação da igreja." **[A CONFIRMAR: áreas reais com o usuário (pesquisa 2.2)]**. Não usar o selo em cada card, só nesta nota.
- **Card**: fundo creme, `--raio-md`, padding `--sp-5`, ícone de 32px petróleo num quadrado `--cor-branco` de 56px com `--raio-md` e borda `--cor-borda`, H3 de 20 a 24px marinho e texto de 2 linhas. Hover (só com `@media (hover:hover)`): `--sombra-2`, translateY(-2px) e ícone com fundo `--cor-agua`. O card não é link.
- **Layout**: 1 coluna (< 600) · 2 colunas (600 a 899) · 3 colunas (900 a 1099, com o card-CTA ocupando a linha final inteira) · 4 colunas (≥ 1100, 2 linhas de 4).

#### 7. Liderança / coordenação (`#lideranca`)
- **Objetivo**: mostrar quem coordena, com nomes reais só quando autorizados.
- **Conteúdo**: 3 cards de pessoa com `avatar-placeholder.svg` (círculo de 120px, silhueta neutra em `--cor-agua` e marinho 30%). Nome placeholder "[Nome do(a) coordenador(a)]" em Lora 600, função (ex.: "Coordenação da diaconia", "Vice-coordenação", "Secretaria da diaconia") em `--cor-texto-suave` e selo **[A CONFIRMAR: nomes, cargos e fotos; publicar só com autorização]**.
- **Não** usar fotos de banco com rostos para representar pessoas reais da liderança.
- **Layout**: 1 coluna no mobile (card horizontal: avatar de 80px à esquerda e texto à direita) e 3 colunas centralizadas a partir de 600px (avatar de 120px no topo, texto centralizado). Cards brancos, `--sombra-1`, `--raio-md`.

#### 8. Escala e reuniões (`#agenda`)
- **Objetivo**: informar horários de cultos e da diaconia.
- **Conteúdo**: cabeçalho com selo **[A CONFIRMAR]** ao lado do H2 e aviso em `--fs-small`: "Horários sujeitos a confirmação. Em caso de dúvida, fale com a diaconia." Dois painéis brancos (`--raio-lg`, padding `--sp-6`):
  - **Cultos**: lista em `<dl>` ou `<table>` com caption visualmente oculto. Cada linha tem o dia (Source Sans 700 marinho), o nome do culto e o horário (Lora 600 20px marinho, alinhado à direita), com divisória `--cor-borda`. Linhas iniciais: Domingo 10h às 13h e Domingo 18h às 20h30 (fonte: diretório) e "Culto de ensino, 19h30 (dia a confirmar)". **Tudo [A CONFIRMAR]**.
  - **Diaconia**: "Reunião da diaconia: [dia e horário a confirmar]" e "Escala de serviço: divulgada pela coordenação". Ícone de relógio petróleo.
  - Linha extra opcional: "Santa Ceia: [periodicidade a confirmar]".
- **Layout**: painéis empilhados no mobile e lado a lado (7/5 colunas) a partir de 900px.

#### 9. Quer servir conosco? (`#servir`)
- **Objetivo**: converter irmãos interessados em servir.
- **Conteúdo**: à esquerda, texto e **requisitos** inspirados em 1 Tm 3.8-13 (lista com ícone de check petróleo e o rótulo "Inspirado em 1 Timóteo 3.8-13", sem apresentar como regimento oficial). À direita, **passos** em linha do tempo vertical, 4 passos (ex.: 1 Converse com a coordenação · 2 Conversa com o pastor · 3 Período de acompanhamento · 4 Apresentação à igreja) **[A CONFIRMAR: passos reais de ingresso]**. Cada número fica num círculo marinho de 44px com número dourado em Lora 700 (7,0:1), ligado ao próximo por uma linha vertical de 2px `--cor-borda`. Ao fim, o botão primário marinho "Quero servir" abre o WhatsApp com a mensagem pronta "Olá! Tenho interesse em servir na diaconia."
- **Layout**: 1 coluna no mobile (requisitos e depois passos) e 2 colunas (6/6) a partir de 900px. Assinatura `onda-linha.svg` acima do H2.
- **Foto opcional**: `servir-cestas.jpg` (16:9, `--raio-lg`) acima dos requisitos só a partir de 900px. No mobile fica oculta para encurtar a página.

#### 10. Precisa de ajuda? (`#ajuda`)
- **Objetivo**: facilitar pedidos de oração, visita ou apoio social.
- **Conteúdo**: H2, lead acolhedor e um **formulário que monta a mensagem do WhatsApp** (nada é enviado nem gravado pelo site):
  1. Grupo de rádio em cards (`<fieldset>` + `<legend>` "Como podemos ajudar?"): **Oração** (`icone-oracao.svg`) · **Visita** (`icone-visitas.svg`) · **Apoio social** (`icone-acao-social.svg`). Cada card tem no mínimo 88px de altura, com rádio nativo visível (acessível) e, quando marcado, borda de 2px marinho, fundo `--cor-agua` e check.
  2. Campo "Seu nome" (opcional), `autocomplete="name"`.
  3. Campo "Bairro ou região" (opcional, útil para visitas).
  4. Textarea "Mensagem" (opcional, 4 linhas).
  5. Botão primário marinho "Enviar pelo WhatsApp", que abre `https://wa.me/<numero>?text=<mensagem codificada>` em nova aba.
  - Nota de privacidade abaixo do botão, em `--fs-small`: "Este site não guarda seus dados. A mensagem é aberta no seu WhatsApp para você revisar e enviar."
  - Validação: só o tipo de ajuda é obrigatório. Sem seleção, mostrar o erro "Escolha uma opção de ajuda." em `--cor-erro` com ícone, ligado por `aria-describedby`, e mover o foco para o primeiro rádio.
- **Layout**: mobile com cards de rádio empilhados (1 coluna) e campos em largura total. A partir de 600px, rádios em 3 colunas. A partir de 900px, painel branco centralizado de até 760px, `--raio-lg`, `--sombra-1`, padding `--sp-7`. À esquerda do painel (≥ 1100px, colunas 1-4) fica a foto `ajuda-oracao.jpg` (3:4, `--raio-lg`); o painel ocupa as colunas 6-12.

#### 11. Perguntas frequentes (`#perguntas`)
- **Conteúdo**: 5 a 7 perguntas do redator (ex.: "O que faz um diácono?", "Quem pode servir?", "Como peço uma visita?", "A ajuda social é só para membros?" [A CONFIRMAR], "Preciso ser membro para ser recebido?").
- **Componente**: `<details>`/`<summary>` nativo (funciona sem JS), descrito em 4.6.
- **Layout**: `.container--texto` (760px), cabeçalho centralizado a partir de 900px.

#### 12. Localização e contato (`#localizacao`)
- **Objetivo**: ajudar a chegar e dar todos os canais.
- **Conteúdo, coluna de informações** (card branco, `--raio-lg`, padding `--sp-6`):
  - **Endereço**: "Assembleia de Deus Catedral Baleia, SGAS 910, Asa Sul (via W5), Brasília/DF" (confirmado). **CEP: 70390-100 [A CONFIRMAR: fontes divergem com 70200-050]**. Sugestão: omitir o CEP até confirmar ou mostrá-lo com selo.
  - Ponto de referência: "Templo em forma de baleia, com fachada de vidro e espelho d'água." Ajuda a evitar confusão com a Catedral Metropolitana.
  - **WhatsApp**: (61) 9905-5252 **[A CONFIRMAR]**
  - **Telefone fixo**: (61) 3242-7119 **[A CONFIRMAR: só em diretórios]**
  - **E-mail**: secretaria@catedralbaleia.com.br **[A CONFIRMAR]**
  - Botões: "Como chegar" (secundário, abre `https://www.google.com/maps/dir/?api=1&destination=-15.813602,-47.913748` em nova aba, com aviso "(abre em nova aba)" visualmente oculto) e "Fale com a diaconia" (primário marinho).
  - Cada linha tem ícone petróleo de 20px (pin, WhatsApp, telefone, e-mail), rótulo em eyebrow e valor como link (`tel:`, `mailto:`, `wa.me`) com área de toque de 44px.
- **Mapa interativo do Google (iframe)**:
  - `src="https://www.google.com/maps?q=-15.813602,-47.913748&z=16&output=embed"`
  - Coordenadas **-15.813602, -47.913748**, vindas de `pesquisa.md` 1.2 **[A CONFIRMAR: fonte única (agregador); trocar pelas coordenadas de `dados-negocio.md` quando existir]**
  - Atributos: `title="Mapa: localização da Assembleia de Deus Catedral Baleia, SGAS 910, Asa Sul, Brasília"`, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"`, `allowfullscreen`, sem borda.
  - Moldura: `--raio-lg`, `overflow: hidden`, borda de 1px `--cor-borda`, `--sombra-1`. Proporção 4:3 no mobile e 16:11 a partir de 900px (altura mínima de 320px).
  - Fallback: abaixo do mapa, o link de texto "Abrir no Google Maps" (`https://www.google.com/maps?q=-15.813602,-47.913748`). O iframe é a única chamada externa além das fontes (autorizada pelo usuário, conforme CLAUDE.md).
  - Selo "localização aproximada, a confirmar" em `--fs-small`, logo abaixo do mapa, ao lado do link.
- **Layout**: mobile com informações e mapa abaixo. A partir de 900px: informações nas colunas 1-5 e mapa nas 6-12, com a mesma altura (`align-items: stretch`).

#### 13. CTA final (`#contato`)
- **Conteúdo**: `divisor-onda.svg` invertido no topo (forma na cor água vinda da seção anterior sobre o marinho). H2 branco centralizado ("Estamos aqui para servir você"), lead em `--cor-texto-claro` e botão primário **dourado** grande (altura de 56px) "Fale com a diaconia pelo WhatsApp". Abaixo, em `--fs-small` `--cor-texto-claro`: "Atendimento pela diaconia da AD Catedral Baleia · número a confirmar" **[A CONFIRMAR]**.
- **Layout**: centralizado, até 640px, padding `--sp-secao`. Grafismo `onda-hero.svg` reaproveitado em 50% de opacidade na base.

#### 14. Rodapé
- **Conteúdo**: logo em versão clara (`logo-diaconia-claro.svg`), linha "Corpo Diaconal · Assembleia de Deus Catedral Baleia · Ministério de Madureira (CONAMAD)", endereço curto e redes da igreja com ícones de 24px em botões de 44x44:
  - Facebook `https://www.facebook.com/catedralbaleia/` (confirmado)
  - YouTube `https://www.youtube.com/c/CATEDRALBALEIA` (confirmado)
  - Instagram `@catedralbaleia` **[A CONFIRMAR]**
  - Não incluir X/Twitter (possivelmente inativo).
- Links rápidos (as mesmas âncoras da navegação), "Voltar ao topo" e créditos das fotos ("Fotos: Unsplash/Pexels/…; foto do templo: Gabriel Jabur/Agência Brasília, CC BY 2.0"), além da nota "Imagens ilustrativas; substituir por fotos da diaconia antes de publicar".
- **Cores**: fundo marinho-900, texto `--cor-texto-claro` (11,6:1), títulos em eyebrow dourado (8,2:1), links brancos sublinhados no hover, ícones sociais brancos com hover dourado.
- **Layout**: 1 coluna no mobile (logo, contato, links, redes, créditos), 3 colunas (5/4/3) a partir de 900px, e uma linha final com divisória `rgba(255,255,255,.12)` e "© 2026".

---

## 4. Componentes

Todos os interativos: área mínima de **44x44px**, `cursor: pointer`, transição `var(--dur) var(--ease)` em cor, fundo, borda, sombra e transform.

### 4.1 Botões
Base: Source Sans 3 700, `--fs-botao`, altura mínima de 48px (56px na variante `--grande`), padding `0 var(--sp-5)`, `--raio-md`, `display:inline-flex`, gap `--sp-2` com ícone de 20px. Largura total no mobile quando estiver em grupo.

| Variante | Normal | Hover | Foco (`:focus-visible`) | Ativo | Desabilitado |
|---|---|---|---|---|---|
| **Primário dourado** (só em fundo marinho) | fundo `#D4AF5A`, texto `#0E2A47` (7,0:1) | fundo `#E3C47C`, translateY(-1px), `--sombra-2` | contorno de 3px dourado com offset de 3px (7,0:1 contra o marinho) | translateY(0), fundo `#D4AF5A` | fundo `#D9DDE3`, texto `#6B7480`, sem sombra, `cursor:not-allowed`, `aria-disabled` |
| **Primário marinho** (fundos claros) | fundo `#0E2A47`, texto branco (14,5:1) | fundo `#163A5F` (11,6:1), translateY(-1px), `--sombra-2` | contorno de 3px petróleo com offset de 3px (5,2:1 sobre creme) | translateY(0) | como acima |
| **Secundário claro** (contorno, em fundos claros) | fundo transparente, borda de 2px marinho, texto marinho | fundo `--cor-agua` | contorno de 3px petróleo com offset de 3px | fundo `#D5E5E5` | borda e texto `#6B7480` |
| **Secundário escuro** (contorno, no marinho) | borda de 2px `rgba(255,255,255,.7)`, texto branco | fundo `rgba(255,255,255,.08)`, borda branca | contorno de 3px dourado com offset de 3px | fundo `rgba(255,255,255,.14)` | opacidade .5 |
| **Ícone** (menu, WhatsApp do cabeçalho) | 44x44, `--raio-md` | fundo `--cor-agua` (no claro) | contorno petróleo | – | – |

Botões que abrem o WhatsApp: ícone `icone-whatsapp.svg` à esquerda, `target="_blank"`, `rel="noopener"` e texto oculto "(abre o WhatsApp em nova aba)".

**Número do WhatsApp**: defina **uma única constante** (ex.: `data-whatsapp="556199055252"` no `<body>` ou `const WHATSAPP = "..."` no `script.js`) e monte todos os links a partir dela, para trocar num só lugar depois da confirmação. Valor provisório da pesquisa: (61) 9905-5252, provavelmente com um dígito faltando **[A CONFIRMAR]**. Enquanto não houver confirmação, use `556199055252` e deixe o comentário `<!-- A CONFIRMAR: número do WhatsApp -->`.

### 4.2 Links de texto
Normal: marinho com sublinhado de 1px e offset de .2em. Hover: petróleo com sublinhado de 2px. Foco: contorno de 3px petróleo, offset de 2px, `--raio-sm`. No escuro: branco sublinhado, hover dourado, foco dourado.

### 4.3 Navegação
- Links do desktop: altura de 44px, padding horizontal `--sp-2`, marinho. Hover: sublinhado dourado-escuro de 2px (5,4:1). Ativo/atual: o mesmo sublinhado, permanente. Foco: contorno petróleo.
- Menu mobile: descrito na seção 1. Ícone hambúrguer/X com transição de 200ms (sem animação se `reduced-motion`).
- O link "Pular para o conteúdo" fica oculto até receber foco. Aí aparece no canto superior esquerdo com fundo marinho, texto branco, padding `--sp-3 --sp-4`, `--raio-md` e z-index máximo.

### 4.4 Cards
- **Card claro**: fundo branco (em seção creme) ou creme (em seção branca), `--raio-md`, padding `--sp-5` (`--sp-6` a partir de 900px), borda de 1px `--cor-borda`, `--sombra-1`. Hover (só se houver link interno ou na seção O que fazemos): `--sombra-2` e translateY(-2px).
- **Card escuro**: descrito na seção 5.
- **Card-CTA**: fundo marinho, H3 branco, texto `--cor-texto-claro`, botão dourado.
- **Card de pessoa**: descrito na seção 7.

### 4.5 Formulário (seção Ajuda)
- **Rótulo**: Source Sans 600 16px marinho, sempre visível acima do campo (nunca só placeholder). Os opcionais levam "(opcional)" em `--cor-texto-suave`.
- **Campo**: altura de 48px (textarea com mínimo de 120px), fundo branco, borda de 1px `--cor-borda-campo` (3,7:1), `--raio-sm`, padding `--sp-3 --sp-4`, texto `--fs-body` `--cor-texto`, placeholder `--cor-texto-suave` (6,0:1).

| Estado | Visual |
|---|---|
| Normal | borda de 1px `#7A8494` |
| Hover | borda de 1px marinho |
| Foco | borda de 2px marinho + `box-shadow: 0 0 0 3px rgba(31,111,120,.35)` + `outline: 2px solid transparent` (preserva o modo de alto contraste) |
| Erro | borda de 2px `#A32D2D`, mensagem abaixo em `#A32D2D` 15px com ícone de alerta, `aria-invalid="true"` e `aria-describedby` |
| Desabilitado | fundo `#F0F1F3`, borda `#D9DDE3`, texto `#6B7480` |

- **Card de rádio**: `<label>` envolvendo o rádio nativo (20px, `accent-color: var(--cor-marinho)`), ícone de 28px petróleo e título. Normal: borda de 1px `--cor-borda-campo`, fundo branco. Hover: borda marinho. Marcado (`:has(:checked)`, com fallback de classe via JS): borda de 2px marinho e fundo `--cor-agua`. Foco (`:has(:focus-visible)`): contorno de 3px petróleo com offset de 2px.

### 4.6 Acordeão (FAQ)
- `<details>` com borda inferior de 1px `--cor-borda`. `<summary>` com no mínimo 56px de altura, Lora 600 de 18 a 20px marinho, padding vertical `--sp-4`, ícone "+" à direita (círculo de 32px com borda `--cor-borda-campo`) que vira "−" quando aberto (`details[open]`). Remover o marcador nativo (`list-style:none` e `::-webkit-details-marker`).
- Hover no summary: texto petróleo. Foco: contorno de 3px petróleo com offset de 2px. Aberto: ícone com fundo marinho e símbolo branco.
- Resposta: `--fs-body`, `--cor-texto`, padding inferior `--sp-5`, até 65ch.

### 4.7 Citação bíblica
`<blockquote>` + `<p>` + `<footer><cite>`. Variante clara (hero e corpo): filete de 3px à esquerda (dourado no escuro, dourado-escuro no claro) e padding-left `--sp-4`. Variante destaque (Base bíblica): centralizada, aspas decorativas. Sempre indicar "(ARC)".

### 4.8 Selo "a confirmar"
- Elemento inline `<span class="selo-confirmar">a confirmar</span>` logo após o dado.
- No claro: fundo `#FBEFCF`, texto `#7C5E17` (5,2:1), Source Sans 700 12px, caixa alta, letter-spacing .08em, padding 2px 8px, `--raio-sm`, ícone de relógio/alerta de 12px. **Não** é interativo.
- No escuro (hero, CTA final, base): fundo transparente, borda de 1px dourado, texto dourado (7,0:1).
- Acessibilidade: o texto "a confirmar" é lido normalmente. Acrescente `<span class="visualmente-oculto">(informação a confirmar)</span>` quando o selo estiver dentro de um link.
- Remoção: quando `dados-negocio.md` confirmar o dado, apagar só o `<span>`, sem mexer no layout.

### 4.9 Divisor de onda
SVG inline ou `<img>` com `aria-hidden="true"`, largura de 100%, altura `clamp(40px, 6vw, 96px)`, `preserveAspectRatio="none"`, `display:block` para evitar fresta. Usar **apenas** em: hero → faixa e localização → CTA final.

---

## 5. Breakpoints e comportamento mobile

| Nome | Faixa | Mudanças principais |
|---|---|---|
| Base (mobile) | < 600px | 1 coluna; botões em largura total; foto do hero 4:3 com `--raio-lg`; cards de liderança horizontais; foto de Servir oculta; mapa 4:3 |
| `sm` | ≥ 600px | Grids de 2 colunas (O que fazemos); faixa de informações em 3 colunas; rádios da Ajuda em 3 colunas; liderança em 3 colunas |
| `md` | ≥ 900px | Grid de 12 colunas; hero em 2 colunas com foto em arco 4:5; Quem somos, Agenda, Servir e Localização em 2 colunas; O que fazemos em 3 colunas; rodapé em 3 colunas; cabeçalhos de seção centralizados nas seções indicadas |
| `lg` | ≥ 1100px | Navegação desktop inline (some o hambúrguer); header de 72px; O que fazemos em 4 colunas; foto lateral na seção Ajuda |
| `xl` | ≥ 1440px | Só aumenta o respiro; o container fica em 1180px |

Regras gerais de mobile:
- Testar a 320px sem rolagem horizontal (WCAG 1.4.10). Selos e números longos quebram linha (`overflow-wrap: anywhere` nos valores de contato).
- Zoom de 200% sem perda de conteúdo. Unidades em `rem`.
- Imagens com `width`/`height` explícitos e `loading="lazy"`, exceto a do hero (`fetchpriority="high"`). Usar `<picture>` com WebP + JPG quando o gerador-imagens fornecer os dois formatos.
- O iframe do mapa usa `loading="lazy"`.
- O CTA do WhatsApp fica sempre a um toque, pelo ícone fixo do cabeçalho. **Não** usar botão flutuante extra, para evitar sobreposição ao conteúdo.

---

## 6. Pedidos de imagem (para o gerador-imagens → `imagens.md` e `assets/`)

Fotos: bancos aceitos (Unsplash, Pexels, Pixabay, Wikimedia Commons CC0/CC BY), com autor, licença e URL registrados em `imagens.md`. Todas marcadas **"substituir antes de publicar"** (ideal: fotos reais da diaconia). Evitar rostos de políticos e autoridades, imagens da Catedral Metropolitana, símbolos de outras denominações em destaque (crucifixo católico, vestes litúrgicas) e logotipos.

### 6.1 Fotos

| Arquivo | Seção | Tamanho / proporção | Prompt de busca sugerido | Observações |
|---|---|---|---|---|
| `hero-servico.jpg` (+ `.webp`) | Hero | 1200x1500 (4:5), mín. 900px de largura; recorte central 4:3 para mobile | "church volunteers welcoming people at door", "usher greeting church", "hands serving church community" | Tom quente, luz natural; pessoas de costas ou desfocadas são preferíveis; sem texto na imagem |
| `templo-catedral-baleia.jpg` | Quem somos | 1600x1000 (16:10) | Foto da reinauguração: https://www.flickr.com/photos/agenciabrasilia/19614789331 | **CC BY 2.0**: crédito obrigatório "Gabriel Jabur/Agência Brasília". Conferir a licença na página antes de baixar. Se não for possível, usar `quem-somos-acolhimento.jpg` |
| `quem-somos-acolhimento.jpg` | Quem somos (alternativa) | 1600x1000 (16:10) | "handshake welcome church", "community helping each other church hall" | Plano B da linha acima |
| `servir-cestas.jpg` | Servir (≥ 900px) | 1600x900 (16:9) | "volunteers packing food baskets donation", "food bank volunteers boxes" | Remete à ação social; sem marcas visíveis |
| `ajuda-oracao.jpg` | Ajuda (≥ 1100px) | 900x1200 (3:4) | "hands praying bible", "visiting elderly holding hands" | Íntima e respeitosa; sem rosto identificável de pessoa doente |
| `og-image.jpg` | Metadados (compartilhamento) | 1200x630 | Composição: fundo marinho + ondas + "Corpo Diaconal · AD Catedral Baleia" em Lora | Pode ser gerado a partir do SVG `og-image.svg` e exportado para JPG/PNG |

### 6.2 SVGs (desenho original, traço consistente)
Padrão dos ícones: grid de 24x24, traço de 1,75px, `stroke-linecap/linejoin: round`, sem preenchimento, `stroke="currentColor"` (a cor vem do CSS), `viewBox="0 0 24 24"`, `aria-hidden="true"` quando acompanhados de texto.

| Arquivo | Uso | Descrição |
|---|---|---|
| `logo-diaconia.svg` | Cabeçalho | Símbolo de 32px: círculo com 2 linhas de onda e um arco suave por cima (espelho d'água + curva do templo), em marinho e petróleo; ao lado, "Corpo Diaconal" (Lora 600) e "AD CATEDRAL BALEIA" (sans 700, caixa alta). Converter o texto em contornos ou usar `<text>` com fallback. **Não reproduzir logotipos oficiais** |
| `logo-diaconia-claro.svg` | Rodapé | Mesma arte em branco e dourado |
| `favicon.svg` | Aba | Só o símbolo, marinho sobre creme, legível em 16px |
| `onda-hero.svg` | Hero e CTA final | 1440x240, 3 linhas de onda paralelas com amplitudes diferentes (petróleo 40%, dourado 35%, branco 12%), traço de 1,5 a 2px, `preserveAspectRatio="none"` |
| `divisor-onda.svg` | Transições | 1440x96, forma cheia com borda superior ondulada, preenchimento `currentColor` |
| `onda-linha.svg` | Assinatura acima do H2 | 120x12, uma onda simples, dourado-escuro `#7C5E17` |
| `onda-fundo.svg` | Fundo da Base bíblica | 800x600, linhas concêntricas onduladas, branco a 6% |
| `avatar-placeholder.svg` | Liderança | Círculo `#E6F0F0` com silhueta neutra (cabeça e ombros) em marinho a 30% |
| `icone-recepcao.svg` | O que fazemos | Porta aberta com mão acenando |
| `icone-ordem.svg` | O que fazemos | Fileira de bancos/assentos |
| `icone-ceia.svg` | O que fazemos | Cálice e pão |
| `icone-batismo.svg` | O que fazemos | Gota sobre linhas de água |
| `icone-acao-social.svg` | O que fazemos / Ajuda | Cesta com alimentos |
| `icone-visitas.svg` | O que fazemos / Ajuda | Casa com coração |
| `icone-eventos.svg` | O que fazemos | Calendário com estrela |
| `icone-oracao.svg` | Ajuda | Mãos em oração |
| `icone-whatsapp.svg` | Botões de CTA | Balão com telefone (desenho próprio, simplificado) |
| `icone-relogio.svg`, `icone-pin.svg`, `icone-telefone.svg`, `icone-email.svg` | Faixa, Agenda, Localização | Ícones utilitários |
| `icone-check.svg`, `icone-alerta.svg`, `icone-mais.svg`, `icone-menu.svg`, `icone-fechar.svg`, `icone-seta.svg` | Listas, erros, FAQ, menu | Ícones de interface |
| `icone-facebook.svg`, `icone-youtube.svg`, `icone-instagram.svg` | Rodapé | Glifos simples monocromáticos (formas genéricas reconhecíveis) |

---

## 7. Checklist de acessibilidade previsto

- [ ] `lang="pt-BR"`, `<title>` e `meta description` descritivos; um único `<h1>` (hero) e hierarquia H2/H3 sem saltos.
- [ ] Landmarks: `<header>`, `<nav aria-label="Principal">`, `<main id="conteudo">`, `<footer>`; link "Pular para o conteúdo" como primeiro elemento focável.
- [ ] Todos os pares de cor da tabela 2.1 respeitados; **dourado claro nunca sobre fundo claro**.
- [ ] Foco visível em todos os interativos (petróleo no claro, dourado no escuro, 3px), sem `outline: none` sem substituto.
- [ ] Alvos de toque ≥ 44x44px (botões, links de contato, ícones sociais, summary do FAQ, rádios).
- [ ] Menu mobile com `aria-expanded`, `aria-controls`, foco preso, fechamento com Esc e retorno do foco.
- [ ] Formulário: rótulos visíveis, `fieldset`/`legend` nos rádios, erro com texto e ícone (não só cor), `aria-invalid` e `aria-describedby`, foco no primeiro campo com erro.
- [ ] Links que abrem em nova aba (WhatsApp, Maps, redes) avisam por texto oculto.
- [ ] Iframe do mapa com `title` descritivo e link de texto alternativo "Abrir no Google Maps".
- [ ] Imagens de conteúdo com `alt` descritivo (redator/desenvolvedor); grafismos, ondas e ícones decorativos com `alt=""`/`aria-hidden="true"`.
- [ ] Citações em `<blockquote>` com `<cite>` e versão "(ARC)".
- [ ] Selos "a confirmar" legíveis por leitor de tela e com contraste ≥ 4,5:1.
- [ ] `prefers-reduced-motion` respeitado; conteúdo visível sem JS (FAQ nativo, animações progressivas).
- [ ] Reflow a 320px e zoom de 200% sem rolagem horizontal nem corte.
- [ ] Agenda com estrutura semântica (`<table>` com `<caption>` ou `<dl>`).
- [ ] Nenhuma informação transmitida só por cor (ex.: card de rádio marcado também mostra o ícone de check).

---

## 8. Resumo dos pontos "a confirmar" no layout

| Dado | Onde aparece | Fonte provisória |
|---|---|---|
| Horários de culto | Faixa (card Cultos), Agenda | Diretório e Facebook, sem data (pesquisa 1.2) |
| Reunião e escala da diaconia, Santa Ceia | Agenda | Não encontrado |
| WhatsApp (61) 9905-5252 | Faixa, Localização, CTA final, constante única do JS | Facebook via buscador |
| Telefone fixo (61) 3242-7119 | Localização | Diretórios |
| E-mail secretaria@catedralbaleia.com.br | Localização | Facebook via buscador |
| CEP (70390-100 × 70200-050) | Localização (ou omitido) | Diretórios divergentes |
| Coordenadas -15.813602, -47.913748 | Iframe do mapa e links "Como chegar" | Wanderlog (fonte única) |
| Instagram @catedralbaleia | Rodapé | Metadados do YouTube |
| Nome do pastor presidente (Pr. João Adair) | Quem somos (se usado) | Matéria de 2024 |
| Nomes e cargos da coordenação | Liderança (placeholders) | Não encontrado |
| Áreas de atuação e passos de ingresso | O que fazemos (nota), Servir | Padrão assumido (pesquisa 2.2) |
