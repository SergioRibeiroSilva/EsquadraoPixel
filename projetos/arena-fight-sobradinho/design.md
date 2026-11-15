# Design: Arena Fight Sobradinho

> Etapa 2 (designer-ui), 2026-11-15. Entradas: `briefing.md` (atualizado com Jiu-Jitsu), `pesquisa.md`, `entrevista.md` (fase PREPARAR, ainda sem respostas).
> **Escopo atual: 4 modalidades** (Karatê, Muay Thai, Wrestling, Jiu-Jitsu), com posicionamento de **formação completa para o MMA** (trocação, clinch, quedas e solo).
> O usuário mandou prosseguir com **dados de exemplo**. Todo dado fictício (nome provisório, telefone, endereço, horários, valores, professores, depoimentos) deve aparecer **claramente marcado** no site com o componente "Selo de exemplo" (seção 4.9) e comentado no HTML com `<!-- EXEMPLO: substituir -->`.

---

## 1. Conceito

**"Tatame escuro, corte vermelho": uma landing esportiva de alto contraste, com títulos condensados, recortes diagonais e uma só ação (aula experimental grátis pelo WhatsApp)."**

Justificativa, com base na pesquisa:
- **Uma oferta e uma ação.** O padrão que converte no nicho é o CTA "aula experimental grátis" na primeira dobra, repetido ao longo da página e fixo no celular, com microcopy de redução de risco (pesquisa, resumo 1; Clubworx, Gymdesk). Por isso o vermelho fica **reservado ao CTA** e a poucos destaques. Se tudo fosse vermelho, o botão deixaria de chamar atenção.
- **Título com modalidade + público + local** ("MMA", "Sobradinho") no H1 (pesquisa, resumo 2).
- **Estética do briefing** (escuro, vermelho, condensada, diagonais), que a pesquisa confirma como padrão do nicho. Os recortes diagonais são o **gesto visual forte** da página: hero com base inclinada, faixa de CTA final inclinada e o motivo "/" (barra) no logo e nos eyebrows. Fora isso, a página é contida: sem parallax, sem vídeo e sem efeitos de brilho em excesso.
- **Acolhe o iniciante.** Tom enérgico, mas respeitoso. Nada de sangue, punhos cerrados em close nem linguagem de briga. Fotos de treino com técnica e foco, não de nocaute.
- **Formação completa.** Com o Jiu-Jitsu, as quatro modalidades cobrem todas as fases da luta. A frase-mestra é **"Em pé, nas quedas e no chão: formação completa para o MMA"**. A pesquisa lembra que o MMA nasceu do vale-tudo brasileiro (pesquisa, seção MMA), o que dá ao Jiu-Jitsu um gancho local e histórico. Mesmo assim, nada de títulos, campeões ou números sem confirmação.
- **Nota de conteúdo:** `pesquisa.md` não detalha o Jiu-Jitsu. A copy usa só fatos amplamente estabelecidos: arte desenvolvida no Brasil a partir do judô/jujutsu, com foco em solo, guarda, raspagens, passagens e finalizações, treinada com quimono (gi) e sem quimono (no-gi). Não inclua datas nem nomes além de "família Gracie" (já citada na pesquisa).

---

## 2. Tokens

### 2.1 Cores

Luminâncias calculadas pela fórmula WCAG 2.x (sRGB linearizado). Os valores foram arredondados para baixo.

| Token | Hex | Uso |
|---|---|---|
| `--c-bg` | `#0E0E10` | Fundo base da página (quase preto, levemente frio) |
| `--c-surface` | `#18181B` | Seções alternadas, cards, header sólido |
| `--c-surface-2` | `#232327` | Cards sobre `--c-surface`, linhas zebradas da tabela |
| `--c-border` | `#3F3F46` | Divisores e contornos **decorativos** (não informativos) |
| `--c-border-strong` | `#71717A` | Contorno de botão secundário, chips e controles (precisa de 3:1) |
| `--c-text` | `#F5F5F4` | Texto principal, títulos |
| `--c-text-muted` | `#A1A1AA` | Texto secundário, legendas, metadados |
| `--c-red` | `#DC2626` | **Fundo** do CTA primário, faixas e formas diagonais, títulos/números ≥ 24px |
| `--c-red-hover` | `#B91C1C` | Hover/active do CTA primário |
| `--c-red-light` | `#F87171` | Vermelho **para texto pequeno** sobre fundo escuro (eyebrows, links, ícones finos) |
| `--c-white` | `#FFFFFF` | Texto sobre vermelho, anel de foco |
| `--c-amber` | `#FBBF24` | **Exclusivo** do selo "Exemplo / substituir" (não usar em mais nada) |

**Contrastes verificados**

| Par (frente sobre fundo) | Razão | Resultado |
|---|---|---|
| `#F5F5F4` sobre `#0E0E10` | ~17,6:1 | AA/AAA, qualquer tamanho |
| `#F5F5F4` sobre `#18181B` | ~16,2:1 | AA/AAA |
| `#F5F5F4` sobre `#232327` | ~14,3:1 | AA/AAA |
| `#A1A1AA` sobre `#0E0E10` | ~7,5:1 | AA texto normal |
| `#A1A1AA` sobre `#18181B` | ~6,9:1 | AA texto normal |
| `#A1A1AA` sobre `#232327` | ~6,1:1 | AA texto normal |
| `#FFFFFF` sobre `#DC2626` (botão) | ~4,8:1 | AA texto normal (botão 16px/700 ok) |
| `#FFFFFF` sobre `#B91C1C` (hover) | ~6,5:1 | AA texto normal |
| `#F87171` sobre `#0E0E10` | ~7,0:1 | AA texto pequeno |
| `#F87171` sobre `#18181B` | ~6,4:1 | AA texto pequeno |
| `#F87171` sobre `#232327` | ~5,7:1 | AA texto pequeno |
| `#DC2626` sobre `#0E0E10` | ~4,0:1 | **Reprovado para texto < 24px**. Aprovado apenas para texto grande (≥ 24px, ou ≥ 18,66px em negrito) e componentes de UI (3:1) |
| `#DC2626` sobre `#18181B` | ~3,7:1 | Mesmo caso: só texto grande e UI |
| `#0E0E10` (botão escuro) sobre faixa `#DC2626` | ~4,0:1 | Componente de UI ≥ 3:1, ok |
| `#F5F5F4` sobre botão `#0E0E10` | ~17,6:1 | AA |
| `#71717A` (borda) sobre `#18181B` | ~3,7:1 | 3:1 de UI ok |
| `#71717A` sobre `#0E0E10` | ~4,0:1 | 3:1 de UI ok |
| `#FBBF24` sobre `#18181B` (selo) | ~10,6:1 | AA |
| `#FBBF24` sobre `#0E0E10` | ~11,5:1 | AA |
| Anel de foco `#FFFFFF` sobre `#0E0E10` | ~19,3:1 | ok |
| Anel de foco `#FFFFFF` sobre `#DC2626` | ~4,8:1 | ok (≥ 3:1) |
| `#3F3F46` sobre `#0E0E10` | ~1,8:1 | **Somente decorativo.** Nunca como única indicação de estado |

**Regra fixa: vermelho em texto.** `--c-red` (#DC2626) **não** é usado em texto menor que 24px sobre preto ou grafite. Para texto pequeno em vermelho, use `--c-red-light` (#F87171). Texto sobre fundo vermelho é sempre `#FFFFFF`.

**Texto sobre foto (hero).** O overlay precisa ter no mínimo **82% de opacidade** de `#0E0E10` na área do texto. No pior caso (foto branca), a cor resultante fica em ~#3E3E3E, e os contrastes ficam assim: branco ~10,7:1 e `#F87171` ~3,9:1. Por isso, no hero o `#F87171` só aparece em texto ≥ 24px. O eyebrow e o lead do hero são brancos ou `--c-text`.

### 2.2 Tipografia (2 famílias Google Fonts)

| Papel | Família | Pesos carregados | Observação |
|---|---|---|---|
| Títulos, números, rótulos de destaque | **Barlow Condensed** | 600, 800 | Condensada, pesada e mais amigável que a Bebas. Tem minúsculas e vários pesos (pesquisa, tipografia). Títulos em CAIXA ALTA |
| Corpo, botões, navegação | **Inter** | 400, 600, 700 | Largura normal, alta legibilidade no celular |

URL única:
`https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=Inter:wght@400;600;700&display=swap`
Use `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com` (crossorigin). Fallbacks: `"Arial Narrow", "Roboto Condensed", Impact, sans-serif` para títulos e `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` para o corpo.

**Escala (mobile → desktop)**

| Token | Uso | Família/peso | Tamanho | Altura de linha | Extra |
|---|---|---|---|---|---|
| `--fs-display` | H1 do hero | Barlow C. 800 | `clamp(2.75rem, 1.5rem + 5.6vw, 5.75rem)` (44 → 92px) | 0.95 | uppercase, `letter-spacing: -0.01em` |
| `--fs-h2` | Título de seção | Barlow C. 800 | `clamp(2.125rem, 1.4rem + 3vw, 3.5rem)` (34 → 56px) | 1.0 | uppercase |
| `--fs-h3` | Título de card | Barlow C. 600 | `clamp(1.5rem, 1.2rem + 1.2vw, 2rem)` (24 → 32px) | 1.1 | uppercase, `letter-spacing: .01em` |
| `--fs-stat` | Números grandes (preço, etapas) | Barlow C. 800 | `clamp(2.5rem, 2rem + 2vw, 3.5rem)` | 1.0 | `tabular-nums` |
| `--fs-lead` | Subtítulo do hero, intro de seção | Inter 400 | `clamp(1.125rem, 1rem + .5vw, 1.3125rem)` (18 → 21px) | 1.55 | máx. 60ch |
| `--fs-body` | Texto corrido | Inter 400 | 16px, 17px a partir de 1024px | 1.65 | máx. 68ch |
| `--fs-small` | Legendas, microcopy, rodapé | Inter 400 | 14px | 1.5 | `--c-text-muted` |
| `--fs-eyebrow` | Sobretítulo de seção | Inter 700 | 13px | 1.2 | uppercase, `letter-spacing: .14em`, `--c-red-light`, prefixo "/" |
| botão | Botões | Inter 700 | 16px (17px no `lg`) | 1 | sentence case (não uppercase) |

### 2.3 Espaçamento (base 4px)

`--sp-1: 4px` · `--sp-2: 8px` · `--sp-3: 12px` · `--sp-4: 16px` · `--sp-5: 24px` · `--sp-6: 32px` · `--sp-7: 48px` · `--sp-8: 64px` · `--sp-9: 96px` · `--sp-10: 128px`

- Padding vertical de seção: `--section-y: clamp(64px, 8vw, 128px)`.
- Título de seção → conteúdo: 48px. Eyebrow → H2: 12px. H2 → lead: 16px.
- Gap entre cards: 24px no mobile e 32px no desktop.

### 2.4 Raios

`--r-sm: 4px` (selos pequenos) · `--r-md: 8px` (botões, cards) · `--r-lg: 12px` (imagens grandes, mapa) · `--r-pill: 999px` (chips, selo de exemplo). Raios pequenos, porque o visual esportivo pede cantos firmes.

### 2.5 Sombras e efeitos

- `--shadow-card: 0 1px 0 rgba(255,255,255,.04) inset, 0 8px 24px rgba(0,0,0,.45)`
- `--shadow-cta: 0 6px 20px rgba(220,38,38,.35)` (só no hover do CTA primário)
- `--shadow-bar: 0 -8px 24px rgba(0,0,0,.55)` (barra fixa mobile)
- Diagonais: `--cut: min(6vw, 72px)`. Exemplo de hero: `clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--cut)), 0 100%)`.
- Transições: `--t-fast: 150ms ease-out`, `--t-base: 250ms cubic-bezier(.2,.7,.2,1)`.

### 2.6 Bloco pronto para copiar

```css
:root {
  /* Cores */
  --c-bg: #0E0E10;
  --c-surface: #18181B;
  --c-surface-2: #232327;
  --c-border: #3F3F46;
  --c-border-strong: #71717A;
  --c-text: #F5F5F4;
  --c-text-muted: #A1A1AA;
  --c-red: #DC2626;
  --c-red-hover: #B91C1C;
  --c-red-light: #F87171;
  --c-white: #FFFFFF;
  --c-amber: #FBBF24;
  --overlay-hero: linear-gradient(90deg, rgba(14,14,16,.94) 0%, rgba(14,14,16,.85) 50%, rgba(14,14,16,.40) 100%);
  --overlay-hero-mobile: linear-gradient(180deg, rgba(14,14,16,.55) 0%, rgba(14,14,16,.85) 40%, rgba(14,14,16,.96) 100%);

  /* Tipografia */
  --ff-display: "Barlow Condensed", "Arial Narrow", "Roboto Condensed", Impact, sans-serif;
  --ff-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-display: clamp(2.75rem, 1.5rem + 5.6vw, 5.75rem);
  --fs-h2: clamp(2.125rem, 1.4rem + 3vw, 3.5rem);
  --fs-h3: clamp(1.5rem, 1.2rem + 1.2vw, 2rem);
  --fs-stat: clamp(2.5rem, 2rem + 2vw, 3.5rem);
  --fs-lead: clamp(1.125rem, 1rem + .5vw, 1.3125rem);
  --fs-body: 1rem;
  --fs-small: .875rem;
  --fs-eyebrow: .8125rem;
  --lh-tight: .95;
  --lh-heading: 1.05;
  --lh-body: 1.65;

  /* Espaçamento */
  --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px; --sp-5: 24px;
  --sp-6: 32px; --sp-7: 48px; --sp-8: 64px; --sp-9: 96px; --sp-10: 128px;
  --section-y: clamp(64px, 8vw, 128px);
  --container: 1200px;
  --gutter: 20px;

  /* Raios */
  --r-sm: 4px; --r-md: 8px; --r-lg: 12px; --r-pill: 999px;

  /* Sombras e efeitos */
  --shadow-card: 0 1px 0 rgba(255,255,255,.04) inset, 0 8px 24px rgba(0,0,0,.45);
  --shadow-cta: 0 6px 20px rgba(220,38,38,.35);
  --shadow-bar: 0 -8px 24px rgba(0,0,0,.55);
  --cut: min(6vw, 72px);
  --focus-ring: 3px solid #FFFFFF;
  --focus-offset: 3px;
  --t-fast: 150ms ease-out;
  --t-base: 250ms cubic-bezier(.2,.7,.2,1);

  /* Camadas */
  --z-bar: 90; --z-header: 100; --z-menu: 110; --z-skip: 200;

  /* Alturas */
  --header-h: 64px;
  --bar-h: 72px;
}
@media (min-width: 768px)  { :root { --gutter: 32px; } }
@media (min-width: 1024px) { :root { --gutter: 40px; --header-h: 76px; --fs-body: 1.0625rem; } }
```

---

## 3. Estrutura da página

### Grid geral
- `.container`: `max-width: 1200px`, `margin-inline: auto`, `padding-inline: var(--gutter)`.
- Colunas: **4** no mobile (gap 16px), **8** no tablet ≥ 768px (gap 24px) e **12** no desktop ≥ 1024px (gap 32px). Implementar com CSS Grid.
- Fundo alternado das seções (`bg` / `surface`) para dar ritmo.
- Toda seção tem `id` e `scroll-margin-top: calc(var(--header-h) + 16px)`.

### Ordem das seções

| # | id | Seção | Fundo |
|---|---|---|---|
| 0 | n/a | Link "Pular para o conteúdo" | n/a |
| 1 | n/a | Header fixo | transparente → `surface` |
| 2 | `inicio` | Hero | foto + overlay, base diagonal |
| 3 | n/a | Faixa de prova rápida (3 itens) | `surface` |
| 4 | `modalidades` | Modalidades (4 cards) | `bg` |
| 5 | `metodo` | Caminho do aluno (4 etapas) + "Sua primeira aula" | `surface` |
| 6 | `diferenciais` | Diferenciais (4) + foto do ambiente | `bg` |
| 7 | `horarios` | Grade de horários (tabela) | `surface` |
| 8 | `planos` | Planos (3) | `bg` |
| 9 | `professores` | Professores (4) | `surface` |
| 10 | `depoimentos` | Depoimentos (3) | `bg` |
| 11 | `faq` | Perguntas frequentes | `surface` |
| 12 | `contato` | Localização e contato | `bg` |
| 13 | n/a | CTA final (faixa diagonal vermelha) | `red` |
| 14 | n/a | Rodapé | `bg` + borda-topo `--c-border` |
| 15 | n/a | Barra CTA fixa (mobile) | `surface` com sombra |

---

### 3.0 Pular para o conteúdo
Link `.skip-link` "Pular para o conteúdo" que leva a `#conteudo` (o `<main>`). Fica fora da tela até receber foco. Com foco, aparece no topo à esquerda, com fundo branco, texto `--c-bg`, padding 12px 16px e `z-index: var(--z-skip)`.

### 3.1 Header fixo
- **Conteúdo:** logo SVG (link para `#inicio`, `aria-label="Arena Fight Sobradinho, início"`). Navegação com Modalidades · Método · Horários · Planos · Professores · FAQ · Contato. Botão primário `sm` "Aula experimental".
- **Mobile (< 1024px):** altura 64px, logo (altura 32px) e botão hambúrguer de 48×48px (`aria-expanded`, `aria-controls="menu"`, rótulo "Abrir menu"/"Fechar menu"). Sem botão de CTA no header, porque a barra fixa inferior cumpre esse papel.
- **Desktop (≥ 1024px):** altura 76px, logo (altura 40px), navegação à direita (Inter 600, 15px, gap 28px) e botão "Aula experimental".
- **Rolagem:** no topo da página, o fundo é transparente sobre o hero. Depois de 24px de rolagem, ganha a classe `.is-scrolled`, com fundo `rgba(24,24,27,.96)`, `backdrop-filter: blur(8px)` e borda inferior 1px `--c-border`. Sem suporte a blur, o fundo fica sólido `--c-surface`.
- **Link de navegação:** sublinhado de 2px `--c-red` que surge da esquerda no hover (`scaleX`). Seção ativa (opcional, via IntersectionObserver): `aria-current="true"` + sublinhado fixo.
- **Menu mobile:** painel de tela cheia `--c-bg` abaixo do header, com links Barlow C. 800 32px uppercase, alvos de 56px e divisores `--c-border`. No fim, CTA primário em largura total e linha de contato. Fecha com Esc, com clique em link e com o botão. O foco vai para o primeiro link ao abrir e volta ao hambúrguer ao fechar. Enquanto aberto, `body { overflow: hidden }`.

### 3.2 Hero (`#inicio`)
- **Objetivo:** dizer em 3 segundos o que é (MMA completo), onde fica (Sobradinho) e qual é a ação (aula grátis).
- **Conteúdo:**
  - Eyebrow (branco): `/ ESCOLA DE MMA · SOBRADINHO-DF`
  - H1: **"Formação completa para o MMA em Sobradinho"**. Destaque opcional: "MMA" em `--c-red-light`, permitido por ser ≥ 44px sobre overlay de 85% ou mais.
  - Lead: "Em pé, nas quedas e no chão: Karatê, Muay Thai, Wrestling e Jiu-Jitsu na mesma escola. Turmas para quem nunca treinou e para quem quer competir."
  - Linha de 4 chips de modalidade (abaixo do lead, opcional se o espaço permitir): Karatê · Muay Thai · Wrestling · Jiu-Jitsu (chip 4.10, versão estática, não clicável). Cada chip é âncora para o card da modalidade (`#mod-karate` etc.), com alvo ≥ 44px.
  - CTA primário `lg`: **"Agendar aula experimental grátis"** + ícone WhatsApp (mensagem geral).
  - CTA secundário (contorno): "Ver horários" → `#horarios`.
  - Microcopy (`--fs-small`, `--c-text`, ícone de check): "Não precisa de experiência. Sem compromisso."
- **Layout:**
  - Mobile: `min-height: 88svh` (fallback `vh`), foto de fundo, overlay `--overlay-hero-mobile` e conteúdo alinhado embaixo (padding-bottom = `--cut` + 40px). Botões empilhados em largura total, com gap 12px. Os chips quebram linha com gap 8px.
  - Desktop: `min-height: min(92vh, 860px)`, overlay `--overlay-hero` e conteúdo nas colunas 1 a 7, centralizado na vertical. Botões lado a lado.
  - Base inclinada via `clip-path` com `--cut`.
  - Decoração: palavra "MMA" gigante (Barlow C. 800, ~28vw) com contorno 1px `rgba(255,255,255,.08)` e sem preenchimento, no canto inferior direito. `aria-hidden="true"` e oculta abaixo de 768px.
- **Imagem:** `<picture>` (WebP + JPG, recorte mobile separado) com `fetchpriority="high"`, sem lazy, `width`/`height`, `object-fit: cover` e `alt=""` (decorativa, porque o H1 já transmite a mensagem).
- **Entrada:** eyebrow, H1, lead e botões sobem 16px com fade em sequência (60ms de intervalo). Com `prefers-reduced-motion`, não há animação.

### 3.3 Faixa de prova rápida
- 3 itens com ícone SVG + texto, sem números inventados:
  1. "4 modalidades: em pé, quedas e solo"
  2. "Turmas por nível, do zero ao competidor"
  3. "1ª aula grátis, sem compromisso"
  - Item opcional "Nota X no Google": fica comentado no HTML até haver dado real.
- **Layout:** fundo `surface`, padding vertical 32px, com `margin-top: calc(var(--cut) * -1)` para ocupar o espaço do recorte do hero. No mobile, itens em coluna (ícone 28px `--c-red-light` + texto Inter 600 16px). No md+, 3 colunas iguais com divisores verticais `--c-border`.

### 3.4 Modalidades (`#modalidades`)
- **Objetivo:** ajudar o iniciante a escolher por onde começar (seletor de caminho em cartões) e mostrar que as quatro juntas formam o MMA.
- **Cabeçalho:** eyebrow `/ MODALIDADES`. H2: "Quatro artes, um lutador completo". Lead: "Cada modalidade treina uma fase da luta. Juntas, cobrem tudo o que o MMA exige: trocação, clinch, quedas e solo."
- **Mini-diagrama (opcional, logo abaixo do lead):** barra horizontal dividida em 3 zonas, "EM PÉ" (Karatê, Muay Thai) → "CLINCH E QUEDAS" (Muay Thai, Wrestling) → "SOLO" (Wrestling, Jiu-Jitsu). Rótulos em Inter 700 13px `--c-text`, segmentos em `surface-2` com borda `--c-border-strong` e o segmento ativo em vermelho no hover do card correspondente (apenas reforço visual, `aria-hidden`). Se complicar, omitir. Os chips dos cards já transmitem a informação.
- **Cards** (componente 4.3), × 4, com `id` `mod-karate`, `mod-muay-thai`, `mod-wrestling`, `mod-jiu-jitsu`:

| | Karatê | Muay Thai | Wrestling | Jiu-Jitsu |
|---|---|---|---|---|
| Chip (papel no MMA) | "Distância e timing" | "Trocação e clinch" | "Quedas e controle" | "Solo e finalizações" |
| Resumo | Base móvel, entradas e saídas rápidas e chutes precisos. Treino em kihon (fundamentos), kata (formas) e kumite (combate). | A "arte das oito armas": socos, cotoveladas, joelhadas e chutes, além do clinch para controlar a postura do adversário. | Estilos livre e greco-romano: quedas, defesa de quedas (sprawl) e controle. Uma das bases mais valorizadas no MMA. | Arte desenvolvida no Brasil para a luta no chão: guarda, raspagens, passagens e finalizações. Treino com e sem quimono. |
| Você aprende (3 bullets) | Controle de distância · Chutes e contra-ataques · Disciplina e foco | Combinações de golpes · Chutes baixos e defesa · Clinch e joelhadas | Quedas (double/single leg) · Sprawl e defesa · Controle por cima | Guarda e raspagens · Passagens e posições dominantes · Finalizações e defesa |
| Para quem é | Iniciantes de todas as idades; quem gosta de técnica e precisão | Quem quer condicionamento intenso e trocação completa | Quem quer força, controle e decidir onde a luta acontece | Quem quer técnica acima da força e segurança na luta de chão |
| CTA | "Quero experimentar Karatê" | "Quero experimentar Muay Thai" | "Quero experimentar Wrestling" | "Quero experimentar Jiu-Jitsu" |

- **Layout:** mobile com 1 coluna e gap 24px. Tablet ≥ 768px e desktop com **grid 2×2** (desktop: 6/12 cada). Foto no topo em 16:10 e card vertical. Ordem: Karatê, Muay Thai, Wrestling, Jiu-Jitsu (do "em pé" ao "solo"). Não usar 4 colunas, porque em 1200px os cards ficariam estreitos demais para o conteúdo.

### 3.5 Método (`#metodo`)
- **Cabeçalho:** eyebrow `/ MÉTODO`. H2: "Do primeiro treino ao primeiro combate". Lead: "Você evolui no seu ritmo. Competir é opção, não obrigação."
- **4 etapas** (`<ol>`):
  1. **Fundamentos**: postura, base, guarda, movimentação e quedas seguras (amortecimento). Sem sparring nas primeiras aulas *(confirmar política: selo de exemplo)*.
  2. **Técnica**: combinações, chutes, clinch, quedas e posições de solo, com parceiro e em aparelhos.
  3. **Integração**: aulas de MMA que conectam as quatro fases (trocação → clinch → queda → solo).
  4. **Competição (opcional)**: sparring controlado e preparação para eventos amadores de MMA, Jiu-Jitsu ou Muay Thai.
- **Layout da etapa:** número "01" a "04" (Barlow C. 800, `--fs-stat`, cor `--c-red`, ok por ser ≥ 40px), H3 e texto `--c-text-muted`. No mobile, lista vertical com linha guia de 2px `--c-border` à esquerda ligando os números. No desktop, 4 colunas (3/12), com a linha guia horizontal no topo. A linha é decorativa.
- **Bloco "Sua primeira aula"** (abaixo): card `surface-2`. No desktop, foto à esquerda (5/12, 4:3) e texto à direita (7/12). No mobile, empilhado.
  - H3 "Sua primeira aula". Lista com ícones: "Chegue 10 minutos antes" · "Roupa confortável (camiseta e bermuda) e garrafa de água" · "No Jiu-Jitsu, a primeira aula pode ser sem quimono *(exemplo: confirmar)*" · "Emprestamos luvas e caneleiras na aula experimental *(exemplo: confirmar)*" · "O professor adapta a aula ao seu nível".
  - CTA primário "Agendar minha primeira aula" (mensagem geral).

### 3.6 Diferenciais (`#diferenciais`)
- **Cabeçalho:** eyebrow `/ POR QUE A ARENA`. H2: "Treino sério, ambiente acolhedor".
- **4 itens** (ícone de 24px dentro de quadrado 56×56 `surface-2`, raio `--r-md`, ícone `--c-red-light`):
  1. **Professores especialistas**: um professor dedicado para cada uma das 4 modalidades. *(Sem citar CREF nem graduações até haver dados reais.)*
  2. **Ambiente seguro**: tatame e equipamentos higienizados, sparring sempre supervisionado.
  3. **Turmas por nível**: iniciante, intermediário e avançado.
  4. **Preparação física**: condicionamento integrado às aulas.
- **Layout:** mobile com a foto do ambiente no topo (16:10, `--r-lg`) e os itens em 1 coluna. Tablet com os itens em 2×2. Desktop com a foto nas colunas 1 a 6 (4:5) e o grid 2×2 nas colunas 7 a 12.

### 3.7 Horários (`#horarios`)
- **Cabeçalho:** eyebrow `/ HORÁRIOS`. H2: "Grade de aulas". Selo "Horários de exemplo".
- **Filtro (JS progressivo):** chips "Todas · Karatê · Muay Thai · Wrestling · Jiu-Jitsu" (componente 4.10, `aria-pressed`). O filtro esmaece (`opacity: .35`) as células de outras modalidades e as marca com `aria-hidden` no conteúdo. Mais simples e seguro: adicionar a classe `.is-dim` e manter o texto legível para leitores de tela. Sem JS, tudo aparece.
- **Tabela** com `<caption>` "Grade semanal de aulas (exemplo)" e `<th scope="col">`/`<th scope="row">`. Colunas: Horário · Seg · Ter · Qua · Qui · Sex · Sáb.
- **Dados de exemplo:**

| Horário | Seg | Ter | Qua | Qui | Sex | Sáb |
|---|---|---|---|---|---|---|
| 06:30 | Muay Thai (todos) | Wrestling (todos) | Muay Thai (todos) | Wrestling (todos) | Muay Thai (todos) | n/a |
| 09:00 | n/a | n/a | n/a | n/a | n/a | Integração MMA (inter./avançado) |
| 10:30 | n/a | n/a | n/a | n/a | n/a | Jiu-Jitsu (todos) |
| 12:00 | Jiu-Jitsu (todos) | n/a | Jiu-Jitsu (todos) | n/a | Jiu-Jitsu (todos) | n/a |
| 17:30 | Karatê Kids/Teen (7 a 13) | Jiu-Jitsu Kids/Teen (7 a 13) | Karatê Kids/Teen (7 a 13) | Jiu-Jitsu Kids/Teen (7 a 13) | n/a | n/a |
| 19:00 | Karatê (todos) | Muay Thai (iniciante) | Karatê (todos) | Muay Thai (iniciante) | Wrestling (todos) | n/a |
| 20:15 | Muay Thai (avançado) | Wrestling (inter.) | Muay Thai (avançado) | Wrestling (inter.) | Sparring MMA supervisionado | n/a |
| 21:15 | Jiu-Jitsu (com quimono) | Jiu-Jitsu (sem quimono) | Jiu-Jitsu (com quimono) | Jiu-Jitsu (sem quimono) | n/a | n/a |

- **Célula de aula:** marcador de modalidade de 20px (S11: K, MT, W, JJ) + nome em Inter 600 + nível em `--fs-small` muted, com barra vertical de 3px `--c-red` à esquerda. A diferenciação vem do **marcador com letras**, não da cor. Célula vazia: "n/a" em `--c-text-muted` com `<span class="sr-only">sem aula</span>`.
- **Responsivo:** no desktop, a tabela aparece completa, com zebra `surface`/`surface-2`. No mobile (< 768px), o container recebe `overflow-x: auto`, `tabindex="0"`, `role="region"` e `aria-label="Grade de horários, role para o lado"`, com coluna "Horário" fixa (`position: sticky; left: 0; background: var(--c-surface)`) e dica visível "Arraste para ver os outros dias →". Larguras: coluna de horário 72px e dias com `min-width` de 140px.
- **Abaixo:** "Funcionamento (exemplo): seg a sex 06:00–22:30 · sáb 08:30–12:00 · dom fechado." Botão secundário "Quero experimentar uma aula" (mensagem geral) + link "Turma Kids/Teen: falar no WhatsApp" (mensagem kids).

### 3.8 Planos (`#planos`)
- **Cabeçalho:** eyebrow `/ PLANOS`. H2: "Escolha seu ritmo". Lead: "A primeira aula é por nossa conta. Depois, você escolhe o plano." Selo "Valores de exemplo".
- **3 cards** (componente 4.4), nesta ordem no HTML:
  1. **Foco**: 1 modalidade, até 3x por semana. **R$ 149**/mês *(exemplo)*.
  2. **Base MMA** (destaque, selo "Mais escolhido (exemplo)"): 2 modalidades à escolha, horário livre. **R$ 209**/mês *(exemplo)*.
  3. **Arena Completo**: as 4 modalidades + aulas de Integração MMA + sparring supervisionado. **R$ 269**/mês *(exemplo)*.
  - Linha comum (`--fs-small`): "Turma Kids/Teen: consulte pelo WhatsApp · Matrícula isenta *(exemplo)*".
- **Layout:** mobile com cards empilhados na ordem do HTML. Desktop com 3 colunas (4/12), sendo o destaque o do meio, com borda 2px `--c-red` e padding maior, sem `transform: scale`.
- **CTA:** "Começar com aula grátis". Destaque com botão primário e os demais com secundário. Mensagem wa.me do plano (6.2).

### 3.9 Professores (`#professores`)
- **Cabeçalho:** eyebrow `/ EQUIPE`. H2: "Quem vai te treinar". Selo "Perfis de exemplo: substituir antes de publicar".
- **4 cards** (componente 4.5):
  - "Prof. Rafael Souza *(exemplo)*", Karatê: "Especialista em distância e contra-ataque."
  - "Prof.ª Camila Torres *(exemplo)*", Muay Thai: "Técnica de clinch e condicionamento."
  - "Prof. Diego Martins *(exemplo)*", Wrestling: "Quedas, sprawl e controle para o MMA."
  - "Prof. Bruno Almeida *(exemplo)*", Jiu-Jitsu: "Guarda, passagens e finalizações aplicadas ao MMA."
  - Em todos: "Graduação: a informar". Não inventar faixas, títulos nem registro profissional.
- **Layout:** mobile com 1 coluna (lista vertical, sem carrossel). Tablet com 2×2. Desktop ≥ 1024px com 4 colunas (3/12), foto 4:5 e raio `--r-lg`. Foto com `grayscale(100%) contrast(1.1)` no estado normal, que passa para cor no hover/focus-within (só com `hover: hover`). Com reduced-motion, a troca é instantânea.

### 3.10 Depoimentos (`#depoimentos`)
- **Cabeçalho:** eyebrow `/ ALUNOS`. H2: "Quem treina, recomenda". Selo "Depoimentos de exemplo".
- **3 cards** (componente 4.6), máx. 220 caracteres cada:
  - "Nunca tinha treinado nada. Na primeira aula de Muay Thai já me senti parte da turma." *Lucas, 27, aluno de Muay Thai (exemplo)*
  - "No Jiu-Jitsu aprendi que técnica vence força. Treino pesado, mas sempre com segurança." *Ana, 31, aluna de Jiu-Jitsu (exemplo)*
  - "Meu filho ganhou foco e disciplina no Karatê. Os professores são muito atenciosos." *Marcos, pai de aluno da turma Kids/Teen (exemplo)*
- **Layout:** aspas "“" grandes decorativas (Barlow C. 800, 96px, `--c-red`, `aria-hidden`), citação em Inter 400 18px (sem itálico), avatar circular de 56px, nome em Inter 600 e contexto em `--fs-small` muted. Estrutura `<figure>` com `<blockquote>` e `<figcaption>`. Mobile com 1 coluna e desktop com 3. Sem carrossel automático.
- Abaixo, CTA primário centralizado "Agendar aula experimental grátis".

### 3.11 FAQ (`#faq`)
- **Cabeçalho:** eyebrow `/ DÚVIDAS`. H2: "Perguntas frequentes".
- **Layout:** no desktop, título + "Não achou sua dúvida?" + botão secundário "Falar no WhatsApp" (mensagem dúvida) à esquerda (4/12, `position: sticky`), e acordeões à direita (8/12). No mobile, empilhado.
- **Itens** (`<details>/<summary>`):
  1. Preciso ter experiência ou condicionamento? Não. As turmas de iniciante começam pelos fundamentos e o professor adapta a intensidade.
  2. Vou ter que lutar na primeira aula? Não. Sparring só depois dos fundamentos, sempre supervisionado e opcional *(confirmar política)*.
  3. O que levar? Roupa confortável e água. Luvas, caneleiras e protetor bucal vêm depois. No Karatê e no Jiu-Jitsu com quimono, o kimono/quimono será pedido mais adiante *(confirmar)*.
  4. Preciso de quimono para o Jiu-Jitsu? Não para começar. Há turmas sem quimono (no-gi), e a aula experimental pode ser feita com roupa de treino *(exemplo)*.
  5. Qual a idade mínima? Tem turma kids? Turmas Kids/Teen de 7 a 13 anos no Karatê e no Jiu-Jitsu *(exemplo)*.
  6. Preciso treinar as quatro modalidades? Não. Você pode começar por uma. Para o MMA, o plano Arena Completo reúne as quatro e as aulas de integração.
  7. Mulheres podem treinar? Sim, todas as turmas são mistas. O wrestling livre feminino é olímpico desde 2004.
  8. Vou ficar dolorido? Nas primeiras semanas é normal sentir dor muscular. Ela diminui com a adaptação.
  9. A aula experimental é gratuita? Como agendo? Sim. Toque em "Agendar aula experimental" e envie a mensagem pronta no WhatsApp.
- Opcional: JSON-LD `FAQPage` (sem expectativa de rich result).

### 3.12 Localização e contato (`#contato`)
- **Cabeçalho:** eyebrow `/ CONTATO`. H2: "Venha treinar em Sobradinho". Lead: "Atendemos alunos de Sobradinho, Sobradinho II, Planaltina e Lago Oeste."
- **Layout:** no desktop, 2 colunas, com card de informações (5/12) e mapa (7/12, 4:3, `--r-lg`). No mobile, card primeiro e mapa abaixo.
- **Card de informações** (`<address>`, ícones `--c-red-light` de 20px):
  - Endereço: "Quadra X, Conjunto Y, Loja Z, Sobradinho/DF *(exemplo)*"
  - WhatsApp: "(61) 90000-0000 *(exemplo)*" (wa.me, mensagem geral)
  - E-mail: "contato@exemplo.com.br *(exemplo)*" (`mailto:`)
  - Funcionamento: seg a sex 06:00–22:30 · sáb 08:30–12:00 · dom fechado *(exemplo)*
  - Instagram: "@arenafight.exemplo *(exemplo)*"
  - Selo "Dados de exemplo". Botões: primário "Agendar pelo WhatsApp" e secundário "Abrir no Google Maps" (oculto até haver endereço real).
- **Mapa:** **sem iframe por enquanto** (sem coordenadas reais). No lugar, `mapa-placeholder.svg` com o texto central "Mapa interativo será exibido quando o endereço real for confirmado". Com as coordenadas da entrevista, o desenvolvedor troca por um iframe do Google Maps com `title="Mapa: localização da Arena Fight Sobradinho"`, `loading="lazy"` e `referrerpolicy="no-referrer-when-downgrade"` (autorizado de forma permanente pelo usuário).
- **SEO:** JSON-LD `ExerciseGym` com dados de exemplo, **sem** `aggregateRating`. O `geo` só entra com coordenadas reais.

### 3.13 CTA final
- **Fundo:** `--c-red` com recortes diagonais em cima e embaixo (`clip-path: polygon(0 var(--cut), 100% 0, 100% calc(100% - var(--cut)), 0 100%)`) e `padrao-barras.svg` decorativo à direita.
- **Conteúdo:** H2 branco "Sua primeira aula é grátis". Texto branco 18px: "Escolha a modalidade, mande uma mensagem e venha conhecer o tatame." Botão **escuro** "Agendar aula experimental grátis" com ícone WhatsApp. Microcopy branca: "Não precisa de experiência. Sem compromisso."
- Centralizado, com largura máxima de 720px e padding vertical de `--section-y` + `--cut`. Sem foto de fundo, para garantir o 4,8:1 do texto branco.

### 3.14 Rodapé
- **Conteúdo:** logo monocromático claro, frase "Formação completa para o MMA em Sobradinho-DF: trocação, clinch, quedas e solo.", navegação curta, contato *(exemplo)*, redes (Instagram, Facebook, TikTok) com ícones de 24px em alvo de 44×44 e `aria-label`, e "© 2026 Arena Fight Sobradinho (nome provisório)".
- **Nota de exemplo** (obrigatória enquanto houver dados fictícios), com selo âmbar: "Este site contém dados e imagens de exemplo (horários, valores, professores, depoimentos e contato) que devem ser substituídos antes da publicação." Créditos das fotos com autor e licença quando a licença exigir (CC BY). Os demais créditos ficam em imagens.md.
- **Layout:** mobile em 1 coluna. Desktop em 4 colunas (4/2/3/3). No mobile, `padding-bottom` extra igual a `--bar-h` + safe-area.

### 3.15 Barra CTA fixa (mobile)
- **Exibição:** apenas abaixo de 1024px.
- **Visual:** `position: fixed; bottom: 0; inset-inline: 0`, fundo `rgba(24,24,27,.97)`, borda-topo `--c-border`, `--shadow-bar` e padding de `12px var(--gutter)` + `env(safe-area-inset-bottom)`.
- **Conteúdo:** botão primário de largura total e 52px de altura, com ícone WhatsApp + "Agendar aula experimental grátis" (mensagem geral). Abaixo de 360px, o texto encurta para "Aula experimental grátis".
- **Comportamento (IntersectionObserver):**
  - Oculta (`translateY(100%)` + `visibility: hidden` após a transição) enquanto o CTA do hero, o CTA final ou o rodapé estão visíveis, e enquanto o menu mobile está aberto.
  - Transição `--t-base`. Com reduced-motion, aparece e some sem deslizar.
  - `body` recebe `padding-bottom: calc(var(--bar-h) + env(safe-area-inset-bottom))` no mobile.
  - Sem JS, fica sempre visível.

---

## 4. Componentes

**Foco global:** `:focus-visible { outline: var(--focus-ring); outline-offset: var(--focus-offset); }`. Branco sobre fundos escuros dá ~19:1 e sobre vermelho ~4,8:1. Nunca remover o outline sem substituto.

### 4.1 Botões

| Variante | Normal | Hover | Foco | Active | Desabilitado |
|---|---|---|---|---|---|
| **Primário** | fundo `--c-red`, texto `#FFF` (4,8:1), Inter 700, ícone de 20px | fundo `--c-red-hover` (6,5:1), `--shadow-cta`, `translateY(-1px)` | anel branco de 3px + offset de 3px | `translateY(0)`, sem sombra | fundo `#3F3F46`, texto `#A1A1AA`, `cursor: not-allowed`, `aria-disabled="true"` |
| **Secundário** | transparente, borda 2px `--c-border-strong`, texto `--c-text` | borda `--c-text`, fundo `rgba(255,255,255,.06)` | anel branco | fundo `rgba(255,255,255,.10)` | borda `--c-border`, texto `#71717A` |
| **Escuro** (só na faixa vermelha) | fundo `--c-bg`, texto `--c-text` | fundo `#000`, `translateY(-1px)` | anel branco | `translateY(0)` | n/a |
| **Link de texto** | `--c-red-light`, sublinhado 1px, offset 3px | sublinhado 2px, cor `--c-text` | anel branco | n/a | n/a |

Tamanhos: `sm` com 44px de altura e padding 0 18px · `md` com 48px e padding 0 24px · `lg` com 56px, padding 0 32px e 17px. Raio `--r-md`, gap ícone-texto de 10px e altura mínima de 44px em todos.
Links wa.me: `target="_blank" rel="noopener"` + `aria-label="… (abre o WhatsApp em nova aba)"`. O ícone fica com `aria-hidden`.

### 4.2 Navegação
Descrita em 3.1. Links Inter 600 15px com alvo ≥ 44px. Hambúrguer de 48×48px com ícone que vira X (200ms, sem animação com reduced-motion).

### 4.3 Card de modalidade
- Fundo `--c-surface`, borda 1px `--c-border`, raio `--r-md`, `overflow: hidden`, `--shadow-card` e flex em coluna.
- Foto 16:10 no topo, com recorte diagonal de 24px na base. No canto superior esquerdo, o chip de papel no MMA (fundo `rgba(14,14,16,.85)`, texto `--c-text` Inter 700 13px uppercase, pill), com contraste garantido pelo fundo do chip.
- Corpo com padding 24px (mobile) / 32px (desktop): H3, resumo (muted), "Você aprende" com 3 checks `--c-red-light`, "Para quem é" (`--fs-small`) e o CTA secundário de largura total no rodapé (`margin-top: auto`).
- **Hover** (`@media (hover: hover)`): borda `--c-red`, foto `scale(1.04)` e o CTA vira primário. **Focus-within:** borda `--c-red`. Só o botão é clicável.

### 4.4 Card de plano
- Fundo `--c-surface`, borda 1px `--c-border`, raio `--r-md`, padding 32px e flex em coluna.
- Nome (Barlow C. 600 24px uppercase), descrição, preço (`--fs-stat`, `--c-text`) + "/mês" (small muted), selo âmbar "Exemplo", lista de inclusos com checks e o CTA no rodapé.
- **Destaque:** borda 2px `--c-red` e faixa superior "Mais escolhido (exemplo)" com fundo `--c-red`, texto branco Inter 700 13px uppercase (4,8:1).
- **Hover:** borda `--c-border-strong`, `translateY(-4px)` (sem movimento com reduced-motion).

### 4.5 Card de professor
- Foto 4:5 com raio `--r-lg` e filtro grayscale→cor. Selo âmbar "Substituir antes de publicar" sobre a foto, no canto superior.
- Nome em H3, chip de modalidade (borda `--c-border-strong`, pill), destaque em muted e "Graduação: a informar".
- `alt` da foto: "Foto ilustrativa de professor de [modalidade]".

### 4.6 Card de depoimento
- Fundo `--c-surface`, borda-esquerda 3px `--c-red` (decorativa), raio `--r-md` e padding 28px.
- Aspas, citação, avatar de 56px (`alt=""`), nome, contexto e selo "Exemplo".

### 4.7 Formulário
Não há formulário: a conversão é pelo WhatsApp. Se for pedido no futuro: input de 48px, fundo `--c-surface-2`, borda 1px `--c-border-strong` (~3,7:1 sobre surface), label visível, placeholder `--c-text-muted`, foco com borda branca + anel, erro com borda e mensagem `--c-red-light` + ícone + `aria-describedby`, e desabilitado com fundo `--c-surface` e texto `#71717A`.

### 4.8 Acordeão (FAQ)
- `<details>` com borda inferior `--c-border`. `<summary>` com no mínimo 56px, Inter 600 17px e ícone "+" de 24px `--c-red-light` à direita, que gira 45° quando `[open]`.
- Hover: texto `--c-red-light`. Foco: anel branco. Conteúdo em muted, máx. 65ch, padding-bottom de 20px.
- Remover o marcador nativo (`list-style: none`, `::-webkit-details-marker { display: none }`).

### 4.9 Selo de exemplo
- Chip inline: fundo `rgba(251,191,36,.12)`, borda 1px `--c-amber`, texto `--c-amber` Inter 700 12px uppercase, `letter-spacing: .08em`, pill, padding 4px 10px e ícone de alerta de 14px.
- Textos: "Exemplo", "Valores de exemplo", "Horários de exemplo", "Substituir antes de publicar".
- Classe `.badge-exemplo` + comentário `<!-- EXEMPLO: substituir -->`. Dados em linha recebem "(exemplo)" no próprio texto, para não depender só de cor.

### 4.10 Chips (filtro e modalidades do hero)
- Altura 44px, padding 0 18px, pill, borda 1px `--c-border-strong` e texto `--c-text` Inter 600 14px.
- Filtro com `aria-pressed="true"`: fundo `--c-red`, texto branco (4,8:1). Hover: fundo `rgba(255,255,255,.06)`. Foco: anel branco.
- No hero (âncoras): fundo `rgba(14,14,16,.6)`, a mesma borda e hover com borda `--c-text`.

---

## 5. Breakpoints e comportamento mobile

Mobile first, com `min-width`:

| Nome | Largura | Mudanças principais |
|---|---|---|
| base | 0–479px | 1 coluna, botões do hero em largura total, barra CTA fixa, hambúrguer, tabela rolável |
| `sm` | ≥ 480px | Botões do hero lado a lado se couberem (`flex-wrap`) |
| `md` | ≥ 768px | Grid de 8 colunas, modalidades em 2×2, diferenciais em 2×2, professores em 2×2, faixa de prova em 3 colunas, "MMA" decorativo visível |
| `lg` | ≥ 1024px | Grid de 12 colunas, navegação completa, **sem barra fixa**, professores em 4 colunas, planos e depoimentos em 3, FAQ e contato em 2 colunas |
| `xl` | ≥ 1280px | Container travado em 1200px, só aumenta o respiro |

- Hero com `svh` (fallback `vh`). Imagens com `srcset` (640/960/1440/1920) e `sizes`, `loading="lazy"` e `decoding="async"` (menos o hero), e `width`/`height` sempre.
- Hover só dentro de `@media (hover: hover)`.
- Abaixo de 360px: H1 de 44px e texto curto na barra fixa.

---

## 6. Links wa.me por modalidade e por seção

Número **fictício**: `5561900000000` (com `<!-- EXEMPLO: trocar pelo WhatsApp real (dados-negocio.md) -->`). Os `href` vão prontos no HTML, para funcionar sem JS. Opcionalmente, o número pode ser centralizado em `script.js` (atributo `data-wa-msg`) reescrevendo os `href`, mantendo o fallback.

Formato: `https://wa.me/5561900000000?text=<mensagem codificada>`

### 6.1 Mensagens

| Origem | Mensagem | `text=` codificado |
|---|---|---|
| Geral: header, hero, barra fixa, primeira aula, depoimentos, CTA final, contato, "Integração MMA" e "Sparring" na grade | Olá! Quero agendar uma aula experimental gratuita na Arena Fight Sobradinho. | `Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20gratuita%20na%20Arena%20Fight%20Sobradinho.` |
| Karatê (card + grade) | Olá! Quero agendar uma aula experimental gratuita de Karatê. | `Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20gratuita%20de%20Karat%C3%AA.` |
| Muay Thai | Olá! Quero agendar uma aula experimental gratuita de Muay Thai. | `Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20gratuita%20de%20Muay%20Thai.` |
| Wrestling | Olá! Quero agendar uma aula experimental gratuita de Wrestling. | `Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20gratuita%20de%20Wrestling.` |
| Jiu-Jitsu | Olá! Quero agendar uma aula experimental gratuita de Jiu-Jitsu. | `Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20gratuita%20de%20Jiu-Jitsu.` |
| Turma Kids/Teen | Olá! Quero informações sobre a turma kids/teen e agendar uma aula experimental. | `Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20a%20turma%20kids%2Fteen%20e%20agendar%20uma%20aula%20experimental.` |
| FAQ | Olá! Tenho uma dúvida sobre as aulas da Arena Fight Sobradinho. | `Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20aulas%20da%20Arena%20Fight%20Sobradinho.` |

### 6.2 Planos

| Plano | Mensagem | `text=` codificado |
|---|---|---|
| Foco | Olá! Tenho interesse no plano Foco e quero agendar uma aula experimental gratuita. | `Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20Foco%20e%20quero%20agendar%20uma%20aula%20experimental%20gratuita.` |
| Base MMA | Olá! Tenho interesse no plano Base MMA e quero agendar uma aula experimental gratuita. | `Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20Base%20MMA%20e%20quero%20agendar%20uma%20aula%20experimental%20gratuita.` |
| Arena Completo | Olá! Tenho interesse no plano Arena Completo e quero agendar uma aula experimental gratuita. | `Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20Arena%20Completo%20e%20quero%20agendar%20uma%20aula%20experimental%20gratuita.` |

Na grade, cada célula com aula pode ser um link discreto (`--c-text`, sublinhado no hover) com a mensagem da modalidade. As turmas Kids/Teen usam a mensagem kids.

---

## 7. Pedidos de imagem (para o `gerador-imagens`, registrar em `imagens.md`)

**Regras para fotos:**
- Fotos reais de Unsplash, Pexels, Pixabay ou Wikimedia Commons (CC0/CC BY), em boa definição (lado maior ≥ 1920px no hero e ≥ 1200px no resto), ligadas à modalidade. Registrar autor, link e licença.
- Evitar sangue, nocaute, expressões de raiva, close de punho cerrado, evento profissional com marcas (UFC etc.), atletas famosos identificáveis e logotipos de terceiros visíveis.
- Preferir luz dramática, fundo escuro, técnica e foco, e diversidade (homens, mulheres, idades variadas).
- Professores e depoimentos levam a marca **"substituir antes de publicar"**.
- Exportar JPG (qualidade ~80) + WebP. Nomes em kebab-case, em `assets/`.

### 7.1 Fotos (banco livre)

| # | Arquivo | Seção | Proporção / tamanhos | Busca sugerida | Direção |
|---|---|---|---|---|---|
| F1 | `hero-treino` | Hero | 16:9 (1920×1080, 1440×810, 960×540) + `hero-treino-mobile` 4:5 (900×1125) | "mma training gym dark", "muay thai pad work dramatic light", "mixed martial arts sparring" | Atleta treinando (chute ou combinação na manopla), luz lateral dramática, fundo escuro. **Sujeito no terço direito** (texto à esquerda). Sem expressão agressiva |
| F2 | `modalidade-karate` | Card Karatê | 16:10 (1200×750, 800×500) | "karate kumite training", "karate kick dojo" | Karateca de kimono em chute ou kumite, fundo escuro de preferência |
| F3 | `modalidade-muay-thai` | Card Muay Thai | 16:10 (1200×750, 800×500) | "muay thai clinch", "muay thai pads training" | Clinch ou manopla, luvas e bandagens visíveis |
| F4 | `modalidade-wrestling` | Card Wrestling | 16:10 (1200×750, 800×500) | "wrestling takedown training", "freestyle wrestling practice" | Queda (double leg) ou luta em pé no tatame. Mulher lutando é um bônus |
| F5 | `modalidade-jiu-jitsu` | Card Jiu-Jitsu | 16:10 (1200×750, 800×500) | "brazilian jiu jitsu training", "bjj guard gi", "jiu jitsu rolling mat" | Dois praticantes de quimono no solo (guarda ou passagem), tatame visível, técnica clara. Evitar estrangulamento com expressão de dor |
| F6 | `ambiente-academia` | Diferenciais | 4:5 (1200×1500) + `ambiente-academia-mobile` 16:10 (1200×750) | "martial arts gym interior mats", "boxing gym heavy bags dark" | Academia com tatame e sacos de pancada, luz baixa, espaço limpo e organizado |
| F7 | `primeira-aula` | "Sua primeira aula" | 4:3 (1200×900) | "martial arts instructor teaching beginner", "coach teaching kickboxing" | Professor corrigindo a postura de iniciante, clima acolhedor (sorriso ok) |
| F8 | `professor-karate` | Professores | 4:5 (800×1000) | "karate instructor portrait", "karate black belt portrait" | Retrato da cintura para cima, de kimono, fundo escuro. **Substituir antes de publicar** |
| F9 | `professora-muay-thai` | Professores | 4:5 (800×1000) | "female muay thai coach portrait", "woman boxer portrait gloves" | Mulher com luvas ou bandagens, fundo escuro. **Substituir antes de publicar** |
| F10 | `professor-wrestling` | Professores | 4:5 (800×1000) | "wrestling coach portrait", "athletic man portrait gym" | Atleta ou treinador, fundo escuro. **Substituir antes de publicar** |
| F11 | `professor-jiu-jitsu` | Professores | 4:5 (800×1000) | "bjj black belt portrait", "jiu jitsu instructor gi portrait" | Retrato de quimono com faixa (sem logotipos de equipe legíveis), fundo escuro. **Substituir antes de publicar** |
| F12 | `depoimento-lucas` | Depoimentos | 1:1 (240×240) | "young man portrait gym smiling" | Rosto de adulto jovem sorrindo. **Substituir antes de publicar** |
| F13 | `depoimento-ana` | Depoimentos | 1:1 (240×240) | "woman athlete portrait smiling" | Mulher de ~30 anos, roupa de treino. **Substituir antes de publicar** |
| F14 | `depoimento-marcos` | Depoimentos | 1:1 (240×240) | "man portrait casual smiling 40s" | Homem de ~40 anos (pai de aluno). **Substituir antes de publicar** |

### 7.2 SVGs (gerados pelo time)

Cores: `#DC2626`, `#F5F5F4`, `#0E0E10`, e `currentColor` nos ícones. Ícones com traço de 2px, `viewBox="0 0 24 24"`, `stroke-linecap="square"`, estilo de linha consistente e sem texto embutido.

| # | Arquivo | Uso | Especificação |
|---|---|---|---|
| S1 | `logo-arena-fight.svg` | Header | Horizontal, ~200×48. Símbolo: escudo/octógono anguloso cortado por uma barra diagonal "/" vermelha. Wordmark "ARENA FIGHT" condensado pesado (em path) em `#F5F5F4` e "SOBRADINHO" menor e espaçado embaixo. `role="img"` + `<title>` |
| S2 | `logo-arena-fight-mono.svg` | Rodapé | Mesma forma em `currentColor` |
| S3 | `favicon.svg` | Favicon | Só o símbolo, 64×64, legível em 16px. Fundo `#0E0E10`, barra vermelha |
| S4 | `og-image.svg` (+ `og-image.png` 1200×630, se for possível exportar) | Open Graph | Fundo escuro, barra diagonal vermelha, logo e "Formação completa para o MMA · Sobradinho-DF". Sem PNG, registrar como pendência |
| S5 | `padrao-barras.svg` | CTA final | Tile 48×48 com barras "/" em `#000` a 12% de opacidade |
| S6 | `forma-corte-diagonal.svg` | Opcional (fallback do `clip-path`) | 1440×72, `preserveAspectRatio="none"` |
| S7 | `mapa-placeholder.svg` | Contato | 800×600: ruas estilizadas `#3F3F46` sobre `#232327` e pino `#DC2626` no centro, sem nomes reais |
| S8 | `icone-professor.svg`, `icone-seguranca.svg`, `icone-niveis.svg`, `icone-preparo.svg` | Diferenciais | Medalha/apito, escudo com check, 3 barras crescentes, haltere |
| S9 | `icone-modalidades.svg`, `icone-turmas.svg`, `icone-gratis.svg` | Prova rápida | 4 losangos em grade, pessoas, ticket |
| S10 | Sprite `icones.svg` (`<symbol>`): whatsapp (monocromático simplificado), instagram, facebook, tiktok, local, relogio, telefone, email, check, menu, fechar, mais, seta, alerta | UI geral | 24×24, `currentColor` |
| S11 | `marca-k.svg`, `marca-mt.svg`, `marca-w.svg`, `marca-jj.svg` | Grade de horários e chips | 20×20, monograma em quadrado anguloso, para diferenciar modalidades sem depender de cor |

---

## 8. Checklist de acessibilidade previsto

- [ ] Contraste AA em todos os pares da tabela 2.1. O #DC2626 nunca aparece em texto < 24px sobre escuro, e o texto pequeno em vermelho usa #F87171.
- [ ] Overlay do hero ≥ 82% na área do texto. O eyebrow e o lead do hero são claros.
- [ ] `lang="pt-BR"`, um único `<h1>` e hierarquia h2 → h3 sem saltos.
- [ ] Landmarks `<header>`, `<nav aria-label="Principal">`, `<main id="conteudo">` e `<footer>`, mais o link "Pular para o conteúdo".
- [ ] Foco visível (anel branco de 3px com offset de 3px) em todos os interativos, e ordem de foco igual à ordem visual.
- [ ] Alvos ≥ 44×44px: botões, links de navegação, redes, hambúrguer, summary, chips.
- [ ] Menu mobile com `aria-expanded`/`aria-controls`, fechamento por Esc e retorno do foco.
- [ ] Links wa.me com `aria-label` ("abre o WhatsApp em nova aba") e `rel="noopener"`.
- [ ] Tabela com `<caption>`, `<th scope>`, região rolável focável e rotulada, e modalidades diferenciadas por monograma (K/MT/W/JJ), não por cor.
- [ ] FAQ com `<details>/<summary>` nativos.
- [ ] `alt` descritivo em modalidades, ambiente, primeira aula e professores. `alt=""` no hero de fundo, nos avatares (nome adjacente) e nos padrões. SVGs decorativos com `aria-hidden="true"`.
- [ ] `prefers-reduced-motion: reduce` remove entradas, deslize da barra, `translate` e zoom.
- [ ] Barra fixa não cobre conteúdo (padding no body) e some com o menu aberto.
- [ ] Zoom de texto a 200% sem perda (rem, sem alturas fixas em blocos de texto).
- [ ] Mapa (quando houver) com `title`, e endereço textual também fora do mapa.
- [ ] Dados fictícios identificáveis pelo selo âmbar **e** pela palavra "exemplo".
- [ ] Copy sem títulos, campeões, números de alunos ou notas inventados. As 4 modalidades aparecem no hero, nos cards, na grade, nos professores, no FAQ e no JSON-LD.

**`<title>`:** "Academia de MMA em Sobradinho-DF | Karatê, Muay Thai, Wrestling e Jiu-Jitsu"
**Meta description:** "Formação completa para o MMA em Sobradinho-DF: Karatê, Muay Thai, Wrestling e Jiu-Jitsu para iniciantes e competidores. Agende sua aula experimental grátis."
