# Design: Futebol Kids (escolinha de futebol infantil, 4 a 12 anos)

> Entradas: `briefing.md`, `dados-negocio.md`, `pesquisa.md`. Os dados de contato vêm **só** de `dados-negocio.md` (todos FICTÍCIOS).
> Este documento é a especificação para o `redator`, o `gerador-imagens` e o `desenvolvedor-frontend`. Não contém HTML de produção.
> **Revisão 2026-11-17 (pedido do usuário):** o hero passou de "foto em tela cheia" para **vídeo de fundo** no desktop (≥ 900px), com a foto vertical mantida no celular. Mudaram §1 (gesto visual), §2.2 (contrastes do hero), §2.8 (token `--overlay-hero-lateral`), §3.0, §3.1, §3.3, §5, §6, §7.2 e §8. O restante do design não mudou.

---

## 1. Conceito

**"Dia de jogo no gramado": verde-gramado vivo, sol amarelo e céu azul, linhas de campo desenhadas e tipografia redonda e encorpada. Infantil sem ser bobo, confiável para os pais.**

Ligação com a pesquisa:
- **Diversão primeiro, segurança logo depois** (Project Play: diversão 48%, amigos 47%; AAP e SBP: sem pressão). O hero mostra criança e bola em movimento no campo, e o título fala de diversão. Segurança e qualificação aparecem já no bloco de turmas e nos diferenciais.
- **Turmas com nome + idade + "Sub-X"** (os nomes variam entre federações, RBFF). As turmas são o centro da página: o hero já pergunta a idade da criança e leva direto ao card certo.
- **Metodologia jogo, habilidade, jogo** (FIFA Play-Practice-Play) vira uma linha do tempo em 3 passos sobre o campo verde-escuro.
- **Imagem de crianças:** fotos e vídeo de banco com crianças **de costas, de longe, desfocadas ou só pés e bola**. Nunca dizer que são alunas e nunca usar legenda com nome de criança.
- **LGPD/ECA:** **nenhum formulário** coleta dados da criança. Toda conversão vai para o WhatsApp do responsável.

**Gesto visual forte (um só):** o hero em tela cheia, com **vídeo de fundo** no desktop (foto no celular), a borda de baixo em **arco** (lembra o círculo central) e um **"placar" branco** com o seletor de idade sobreposto a essa borda. O resto tem contenção: linhas de campo finas como textura, confete só em 2 lugares (hero e CTA final) e cores fortes usadas em superfícies, nunca em texto pequeno.

---

## 2. Tokens

### 2.1 Cores

| Token | Hex | Uso |
|---|---|---|
| `--verde-900` | `#14532D` | Fundos escuros (Metodologia, CTA final), títulos fortes |
| `--verde-950` | `#0B2E1A` | Rodapé, base do overlay do hero |
| `--verde-800` | `#166534` | Hover do botão primário, botão flutuante do WhatsApp, H2 sobre claro |
| `--verde-700` | `#15803D` | **Botão primário sobre fundo claro**, ícones, links de destaque grandes |
| `--verde-400` | `#4ADE80` | Só decoração (linhas de campo, confete, ícones grandes sobre escuro). Nunca como texto sobre claro |
| `--verde-100` | `#DCFCE7` | Fundo suave de ícones e chips |
| `--amarelo-400` | `#FACC15` | Botão primário sobre fundo escuro (texto `--tinta`), selos, destaque do plano, turma Fraldinha. **Nunca como texto sobre branco ou creme** |
| `--amarelo-100` | `#FEF9C3` | Fundo do selo "desconto para irmãos" |
| `--azul-700` | `#1D4ED8` | Links em texto, anel de foco sobre fundos claros |
| `--azul-300` | `#7DD3FC` | Turma Pré-mirim (fundo, texto `--tinta`), decoração |
| `--azul-100` | `#E0F2FE` | Fundo de seções alternadas (Benefícios, Planos) |
| `--coral-700` | `#C2410C` | Selos "Sub-X" (texto branco), acento de destaque |
| `--coral-300` | `#FDBA74` | Turma Infantil (fundo, texto `--tinta`), decoração |
| `--coral-500` | `#F97316` | Só decoração (confete, bola, traços) |
| `--verde-300` | `#86EFAC` | Turma Mirim (fundo, texto `--tinta`) |
| `--tinta` | `#1F2937` | Texto principal |
| `--tinta-suave` | `#4B5563` | Texto secundário, legendas |
| `--creme` | `#FFFBF0` | Fundo principal da página |
| `--branco` | `#FFFFFF` | Cards, placar do hero, cabeçalho |
| `--borda` | `#E5E1D3` | Bordas decorativas de cards (não carregam informação) |
| `--borda-campo` | `#8A8574` | Borda de campos e controles que precisam de 3:1 |

### 2.2 Contrastes verificados (WCAG 2.x, luminância relativa calculada)

| Par | Contraste | Resultado |
|---|---|---|
| `--tinta` #1F2937 sobre `--branco` | ~14,7:1 | AAA |
| `--tinta` sobre `--creme` #FFFBF0 | ~13,8:1 | AAA |
| `--tinta-suave` #4B5563 sobre `--branco` | ~7,6:1 | AAA |
| `--tinta-suave` sobre `--creme` | ~7,2:1 | AAA |
| `--tinta` sobre `--azul-100` #E0F2FE | ~12,8:1 | AAA |
| Branco sobre `--verde-700` #15803D (botão primário) | ~5,0:1 | AA |
| `--verde-700` sobre `--creme` (texto em negrito ≥ 18,5px, links grandes) | ~4,7:1 | AA |
| Branco sobre `--verde-800` #166534 | ~7,1:1 | AAA |
| `--verde-800` sobre `--creme` (H2) | ~6,7:1 | AA |
| `--verde-800` sobre `--azul-100` | ~6,2:1 | AA |
| Branco sobre `--verde-900` #14532D | ~9,1:1 | AAA |
| Branco sobre `--verde-950` #0B2E1A | ~13,9:1 | AAA |
| `--tinta` sobre `--amarelo-400` #FACC15 (botão sobre escuro, selos) | ~9,6:1 | AAA |
| `--verde-900` sobre `--amarelo-400` | ~5,9:1 | AA |
| `--amarelo-400` sobre `--verde-900` (texto de destaque, anel de foco no escuro) | ~5,9:1 | AA |
| `--amarelo-400` sobre `--verde-950` | ~9,0:1 | AAA |
| Botão amarelo contra o fundo verde-900 (limite do componente) | ~5,9:1 | ≥ 3:1 |
| `--tinta` sobre `--azul-300` #7DD3FC | ~8,8:1 | AAA |
| `--tinta` sobre `--verde-300` #86EFAC | ~10,5:1 | AAA |
| `--tinta` sobre `--coral-300` #FDBA74 | ~8,7:1 | AAA |
| Branco sobre `--coral-700` #C2410C (selo Sub-X) | ~5,2:1 | AA |
| `--azul-700` #1D4ED8 sobre `--branco` (links, foco) | ~6,7:1 | AA |
| `--azul-700` sobre `--creme` | ~6,3:1 | AA |
| `--azul-700` sobre `--azul-100` | ~5,8:1 | AA |
| `--borda-campo` #8A8574 sobre `--branco` (borda de controles) | ~3,6:1 | ≥ 3:1 |
| **Hero (vídeo, desktop):** branco sobre pixel branco do vídeo sob só o degradê vertical a 70% de `--verde-950` (pior caso, borda direita da coluna de texto) | ~5,6:1 | AA |
| **Hero (vídeo, desktop):** branco sobre pixel branco sob vertical 70% + lateral 55% (borda esquerda; opacidade combinada ~86%) | ~9,7:1 | AAA |
| **Hero (vídeo, desktop):** branco sob vertical 70% + lateral 25% (a 45% da largura; combinada ~77%) | ~7,0:1 | AAA |
| **Hero (foto, mobile):** branco sobre pixel branco sob 80% de `--verde-950` (faixa do título) | ≥ 8,4:1 | AAA |
| Botão pausar/reproduzir: borda e ícone brancos sobre `rgba(11,46,26,.6)` em cima do vídeo (pior caso, pixel branco por baixo + overlay do hero) | ≥ 4,5:1 | ≥ 3:1 |

Cálculo do hero: mistura em sRGB de `#0B2E1A` com `#FFFFFF` na opacidade indicada, luminância relativa do resultado e contraste com branco. Opacidades combinadas = 1 − (1 − a_vertical) × (1 − a_lateral).

**Proibido:** amarelo, verde-400, azul-300, coral-300 ou coral-500 como cor de texto sobre branco ou creme (todos abaixo de 3:1). Branco sobre amarelo (~1,5:1) também é proibido.

### 2.3 Tipografia

Google Fonts, só 2 famílias, `display=swap`, só os pesos usados:
`https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap`
com `<link rel="preconnect">` para `fonts.googleapis.com` e `fonts.gstatic.com` (crossorigin).

- **Títulos:** Baloo 2 (600 a 800). Redonda, encorpada e legível. Fredoka foi descartada para manter 2 famílias. A Baloo 2 rende melhor em H3 e em selos pequenos.
- **Texto e interface:** Nunito (400, 600, 700, 800). Corpo de 17px, entrelinha 1,6.
- Fallback: `"Baloo 2", "Trebuchet MS", system-ui, sans-serif` e `"Nunito", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

| Token | Valor | Família / peso | Entrelinha | Uso |
|---|---|---|---|---|
| `--fs-display` | `clamp(2.5rem, 1.6rem + 4.4vw, 5rem)` (40 → 80px) | Baloo 2 800, `letter-spacing: -0.01em` | 1.0 | H1 do hero |
| `--fs-h2` | `clamp(2rem, 1.5rem + 2.2vw, 3.25rem)` (32 → 52px) | Baloo 2 800 | 1.05 | Títulos de seção |
| `--fs-h3` | `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)` (22 → 28px) | Baloo 2 700 | 1.15 | Títulos de card, turma, plano |
| `--fs-lead` | `clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)` (18 → 21px) | Nunito 600 | 1.55 | Subtítulo do hero, intro de seção |
| `--fs-body` | `1.0625rem` (17px) | Nunito 400 | 1.6 | Texto corrido |
| `--fs-small` | `0.9375rem` (15px) | Nunito 600 | 1.5 | Legendas, notas, rodapé |
| `--fs-eyebrow` | `0.875rem` (14px), `uppercase`, `letter-spacing: 0.08em` | Nunito 800 | 1.3 | Rótulo acima do H2 |
| `--fs-sub` | `clamp(2.5rem, 2rem + 2vw, 3.5rem)` | Baloo 2 800 | 1 | Número do selo "Sub-X" nos cards de turma |

Largura de leitura: parágrafos com `max-width: 62ch`.

### 2.4 Espaçamento (base 4px)

`--sp-1: 4px` · `--sp-2: 8px` · `--sp-3: 12px` · `--sp-4: 16px` · `--sp-5: 24px` · `--sp-6: 32px` · `--sp-7: 48px` · `--sp-8: 64px` · `--sp-9: 96px` · `--sp-10: 128px`
Padding vertical de seção: `--sp-secao: clamp(64px, 8vw, 112px)`.

### 2.5 Raios

`--r-sm: 8px` (chips, campos) · `--r-md: 16px` (botões grandes, cards pequenos) · `--r-lg: 24px` (cards, fotos, mapa) · `--r-xl: 32px` (placar do hero, painéis) · `--r-pill: 999px` (botões, selos, chips de idade) · `--r-circulo: 50%` (fotos da equipe, ícones).

### 2.6 Sombras

- `--sh-1: 0 2px 6px rgba(20, 83, 45, 0.08)`: cabeçalho ao rolar, chips
- `--sh-2: 0 10px 24px -8px rgba(20, 83, 45, 0.18)`: cards
- `--sh-3: 0 24px 48px -16px rgba(11, 46, 26, 0.35)`: placar do hero, card de plano em destaque, card do mapa
- `--sh-pop: 0 6px 0 0 rgba(20, 83, 45, 0.9)`: "sombra dura" de botões grandes (efeito de botão de brinquedo; some no `:active`)

### 2.7 Movimento

`--dur-rapida: 150ms` · `--dur-base: 250ms` · `--dur-lenta: 600ms` · `--ease-out: cubic-bezier(.2,.8,.2,1)` · `--ease-mola: cubic-bezier(.34,1.56,.64,1)` (só em hover de cards e na bola).

### 2.8 Bloco `:root` pronto para copiar

```css
:root {
  /* Cores */
  --verde-950: #0B2E1A;
  --verde-900: #14532D;
  --verde-800: #166534;
  --verde-700: #15803D;
  --verde-400: #4ADE80;   /* só decoração */
  --verde-300: #86EFAC;   /* turma Mirim (texto --tinta) */
  --verde-100: #DCFCE7;
  --amarelo-400: #FACC15; /* nunca texto sobre claro */
  --amarelo-100: #FEF9C3;
  --azul-700: #1D4ED8;
  --azul-300: #7DD3FC;    /* turma Pré-mirim (texto --tinta) */
  --azul-100: #E0F2FE;
  --coral-700: #C2410C;
  --coral-500: #F97316;   /* só decoração */
  --coral-300: #FDBA74;   /* turma Infantil (texto --tinta) */
  --tinta: #1F2937;
  --tinta-suave: #4B5563;
  --creme: #FFFBF0;
  --branco: #FFFFFF;
  --borda: #E5E1D3;
  --borda-campo: #8A8574;

  /* Cores das turmas */
  --turma-fraldinha: var(--amarelo-400);
  --turma-premirim: var(--azul-300);
  --turma-mirim: var(--verde-300);
  --turma-infantil: var(--coral-300);

  /* Overlay do hero */
  --overlay-hero: linear-gradient(0deg, rgba(11,46,26,.90) 0%, rgba(11,46,26,.78) 40%, rgba(11,46,26,.35) 75%, rgba(11,46,26,.15) 100%);
  --overlay-hero-lateral: linear-gradient(90deg, rgba(11,46,26,.55) 0%, rgba(11,46,26,.25) 45%, rgba(11,46,26,0) 70%); /* só desktop, sobre o vídeo/poster */
  --overlay-hero-mobile: linear-gradient(0deg, rgba(11,46,26,.92) 0%, rgba(11,46,26,.82) 55%, rgba(11,46,26,.40) 85%, rgba(11,46,26,.20) 100%);
  --hero-midia-pos: 60% 45%;        /* object-position do vídeo e do poster (desktop) */
  --hero-midia-pos-mobile: 50% 35%; /* object-position da foto 4:5 */

  /* Tipografia */
  --ff-titulo: "Baloo 2", "Trebuchet MS", system-ui, sans-serif;
  --ff-texto: "Nunito", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-display: clamp(2.5rem, 1.6rem + 4.4vw, 5rem);
  --fs-h2: clamp(2rem, 1.5rem + 2.2vw, 3.25rem);
  --fs-h3: clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem);
  --fs-lead: clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem);
  --fs-body: 1.0625rem;
  --fs-small: 0.9375rem;
  --fs-eyebrow: 0.875rem;
  --fs-sub: clamp(2.5rem, 2rem + 2vw, 3.5rem);

  /* Espaçamento */
  --sp-1: 4px;  --sp-2: 8px;  --sp-3: 12px; --sp-4: 16px; --sp-5: 24px;
  --sp-6: 32px; --sp-7: 48px; --sp-8: 64px; --sp-9: 96px; --sp-10: 128px;
  --sp-secao: clamp(64px, 8vw, 112px);
  --container: 1200px;
  --gutter: clamp(20px, 4vw, 48px);

  /* Raios */
  --r-sm: 8px; --r-md: 16px; --r-lg: 24px; --r-xl: 32px; --r-pill: 999px;
  --arco-hero: clamp(32px, 6vw, 88px);

  /* Sombras */
  --sh-1: 0 2px 6px rgba(20, 83, 45, 0.08);
  --sh-2: 0 10px 24px -8px rgba(20, 83, 45, 0.18);
  --sh-3: 0 24px 48px -16px rgba(11, 46, 26, 0.35);
  --sh-pop: 0 6px 0 0 rgba(20, 83, 45, 0.9);

  /* Foco */
  --foco-claro: 3px solid var(--azul-700);
  --foco-escuro: 3px solid var(--amarelo-400);
  --foco-offset: 3px;

  /* Cabeçalho e área segura */
  --header-h: 64px;          /* 76px a partir de 900px */
  --fab-area: 88px;          /* espaço reservado ao botão flutuante no mobile */

  /* Movimento */
  --dur-rapida: 150ms; --dur-base: 250ms; --dur-lenta: 600ms;
  --ease-out: cubic-bezier(.2,.8,.2,1);
  --ease-mola: cubic-bezier(.34,1.56,.64,1);
}
@media (min-width: 900px) { :root { --header-h: 76px; } }
```

---

## 3. Estrutura da página

### 3.0 Escolha do hero

**Hero escolhido: vídeo de fundo em tela cheia (desktop, ≥ 900px), com texto sobreposto alinhado embaixo à esquerda, e a foto vertical em tela cheia no celular. Mantém o seletor de idade em destaque (variação do "hero com busca") num placar branco sobre a borda em arco, e o confete.**

- **Decisão do usuário (2026-11-17):** a primeira versão deste design descartou o vídeo (risco de imagem de crianças e peso no celular). **O usuário pediu explicitamente o vídeo de fundo** ("esporte de ação, vai ficar interessante"), e esse descarte está **revogado**. Os dois riscos foram tratados: o clipe escolhido pelo `gerador-imagens` (Pexels 8938341, `imagens.md` §2.3) mostra a criança do primeiro plano **sempre de costas** e as outras de longe, sob overlay de 70–90%; e o vídeo **não é baixado** no celular, com movimento reduzido ou com economia de dados (só o poster ou a foto).
- **Por que serve:** futebol é ação; o movimento do chute num campo ao entardecer passa a emoção do "dia de jogo" melhor que uma foto parada. Logo abaixo, o placar responde "tem turma para o meu filho?": os chips de idade (4–5, 6–7, 8–9, 10–12) levam direto ao card da turma, **sem coletar nenhum dado** (são só âncoras).
- **Projetos anteriores:** `sergio-ribeiro` (mais recente) usou **split assimétrico** com foto em arco e título tipográfico grande. `reef-stack` usou **hero escuro com texto e cartões-caminho sobre fundo animado** (cáusticas). Antes deles: `arena-fight-sobradinho` (foto com overlay diagonal), `diaconia-catedral-baleia` (split com foto em arco), `barbearia-navalha` (brasão + tipografia). Nenhum dos 2 mais recentes usou vídeo de fundo.
- **Descartados:** *carrossel* (há uma oferta só, a aula grátis), *split* (usado nos 2 últimos), *tipográfico* (a marca não é pessoal), *mapa* (encontrar o lugar não é o objetivo principal), *só foto em tela cheia* (substituída pelo vídeo a pedido do usuário; continua no celular).

### 3.1 Ritmo da página

Cada seção tem um ritmo diferente para evitar "título + 3 cards" repetido:

| # | Seção | `id` | Fundo | Ritmo |
|---|---|---|---|---|
| 1 | Cabeçalho fixo | - | branco | barra |
| 2 | Hero | `inicio` | vídeo de fundo (foto no celular) + overlay verde | tela cheia com placar sobreposto |
| 3 | Por que futebol faz bem | `beneficios` | `--azul-100` | faixa de ícones grandes (5) |
| 4 | Turmas por idade | `turmas` | `--creme` | 4 cards coloridos tipo "figurinha" |
| 5 | Metodologia | `metodologia` | `--verde-900` + linhas de campo | linha do tempo em 3 passos |
| 6 | Diferenciais | `diferenciais` | `--creme` | grade bento (1 foto grande + 6 blocos) |
| 7 | Horários | `horarios` | `--branco` | tabela / lista por turma |
| 8 | Professores | `equipe` | `--creme` | 3 "figurinhas de álbum" |
| 9 | Planos | `planos` | `--azul-100` | 3 planos, o do meio em destaque |
| 10 | Depoimentos | `depoimentos` | `--creme` | carrossel horizontal (scroll-snap) |
| 11 | Perguntas frequentes | `faq` | `--branco` | 2 colunas: título fixo + acordeão |
| 12 | Localização e contato | `contato` | `--creme` | mapa grande com card sobreposto |
| 13 | CTA final | `aula-gratis` | `--verde-900` + círculo central | faixa centralizada com confete |
| 14 | Rodapé | - | `--verde-950` | 3 colunas |

**Cabeçalho padrão de seção** (exceto hero e CTA final): eyebrow (Nunito 800, `--verde-700` sobre creme/branco, `--verde-800` sobre azul-100; sobre `--verde-900` usar `--amarelo-400`), H2 (Baloo 2 800, `--verde-800` sobre claro, branco sobre escuro), e um lead opcional (`--tinta-suave`, 62ch). Abaixo do H2, um traço curto `assets/svg/traco-chute.svg` (64x12, coral-500, decorativo, `aria-hidden`). Alinhamento: centralizado em Benefícios, Turmas, Planos, Depoimentos e Metodologia; à esquerda nas demais. Margem entre cabeçalho e conteúdo: `--sp-7`.

**Grid:** container `max-width: var(--container)`, `padding-inline: var(--gutter)`, centralizado. A partir de 1200px, grade de 12 colunas com `gap: 24px`. Antes disso, grids específicas de cada seção (abaixo).

---

### 3.2 Cabeçalho fixo

- **Objetivo:** navegar e chegar ao CTA "Aula grátis" de qualquer ponto.
- **Comportamento:** `position: sticky; top: 0; z-index: 50`, altura `--header-h`, fundo `--branco`. Sem sombra no topo da página; ao rolar mais de 8px, ganha `--sh-1` e borda inferior de 1px `--borda` (classe via JS; sem JS, sempre com a borda).
- **Conteúdo:**
  - Link "Pular para o conteúdo" (primeiro item focável; fica fora da tela e aparece no foco no canto superior esquerdo, fundo `--verde-800`, texto branco, raio `--r-md`, padding 12x16).
  - Logo `assets/svg/logo.svg` (altura 40px mobile / 48px desktop) com link para `#inicio` e `aria-label="Futebol Kids, voltar ao início"`.
  - Navegação (`<nav aria-label="Principal">`): Benefícios, Turmas, Metodologia, Horários, Planos, Dúvidas, Contato. Nunito 700, 16px, `--tinta`. Hover: sublinhado de 3px `--verde-700` que cresce do centro (`transform: scaleX`). Página atual na rolagem (scrollspy opcional): `aria-current="true"` e sublinhado fixo.
  - Botão "Aula grátis" (primário verde, tamanho compacto, altura 44px) com o link de WhatsApp com mensagem de `dados-negocio.md`. `target="_blank" rel="noopener"`, e o texto acessível avisa da nova aba (ex.: `<span class="sr-only">(abre o WhatsApp em nova aba)</span>`).
- **Mobile (< 900px):** logo à esquerda, botão "Aula grátis" compacto (em < 360px vira só "Aula grátis" com padding 12px) e botão de menu (hambúrguer, 44x44, `aria-expanded`, `aria-controls="menu"`, rótulo "Abrir menu"/"Fechar menu"). O menu abre como painel em tela cheia abaixo do cabeçalho, fundo `--branco`, links em Baloo 2 700 24px, um por linha, altura 56px cada, separados por borda `--borda`. Esc fecha e devolve o foco ao botão. Clicar num link fecha o menu. Corpo com `overflow: hidden` enquanto aberto.

### 3.3 Hero (`#inicio`): vídeo de fundo

- **Objetivo:** em 5 segundos, dizer o que é (escolinha de futebol infantil), para quem (4 a 12 anos), a promessa (diversão com cuidado) e a ação (aula experimental grátis no WhatsApp).
- **Conteúdo** (copy do `redator`, sem mudança):
  - Selo pequeno acima do título: "4 a 12 anos · meninos e meninas" (chip `--amarelo-400`, texto `--tinta`, Nunito 800 14px, raio pill, padding 6x14).
  - H1 (único da página), 2 a 3 linhas.
  - Lead de 1 a 2 frases.
  - CTA primário "Agendar aula grátis" (botão amarelo, variante para fundo escuro) → WhatsApp com mensagem.
  - CTA secundário "Ver turmas" (botão contorno branco) → `#turmas`.
  - Botão pausar/reproduzir o vídeo (só quando o vídeo existe; ver abaixo).
  - Placar com o seletor de idade (ver abaixo).

#### 3.3.1 Camadas do fundo (de baixo para cima)

Contêiner de mídia `.hero__midia`: `position: absolute; inset: 0; z-index: 0; overflow: hidden`, dentro do hero (que tem `position: relative; isolation: isolate`).

1. **Imagem base (sempre presente no HTML; é o LCP e o fallback):** `<picture>` com
   - `<source media="(max-width: 899px)">` → `assets/fotos/hero-mobile.webp` / `.jpg` (1080x1350, 4:5);
   - `<img>` padrão (≥ 900px) → `assets/videos/hero-poster.jpg` (1600x900, 158 KB; é o 1º quadro do vídeo, por isso a troca para o vídeo é invisível).
   - `width="1600" height="900"`, `fetchpriority="high"`, `decoding="async"`, **sem** `loading="lazy"`, `alt=""` (decorativa). `object-fit: cover`; `object-position: var(--hero-midia-pos)` (60% 45%) no desktop e `var(--hero-midia-pos-mobile)` (50% 35%) no mobile.
   - `hero.jpg`/`hero-1280.jpg` (foto do parque) saem do hero desktop. Ficam em `assets/` como reserva (e na origem do `og-image.jpg`); o desenvolvedor não precisa copiá-las para `site/` se não usar.
2. **Vídeo (só desktop e só quando permitido; inserido pelo JS):** `<video>` com `src="assets/videos/hero.mp4"` (type `video/mp4`), atributos `muted autoplay loop playsinline disablepictureinpicture`, `preload="auto"` (só é criado quando vai tocar), `poster="assets/videos/hero-poster.jpg"`, `aria-hidden="true"`, `tabindex="-1"`, **sem** `controls`. Mesmo `object-fit: cover` e `object-position: var(--hero-midia-pos)` da imagem, `position: absolute; inset: 0; width: 100%; height: 100%`.
   - Começa com `opacity: 0` e passa a `opacity: 1` (transição de 400ms) no evento `playing`. Se `play()` rejeitar ou der `error`, o vídeo é removido e a imagem continua (nenhum botão aparece).
   - **Por que via JS e não no HTML:** um `<video>` no HTML é baixado mesmo escondido no celular; criar o elemento só quando as condições abaixo são verdadeiras garante que o celular, o movimento reduzido e a economia de dados **não baixem os 3,26 MB**. Sem JS: só a imagem, e a página fica completa.
   - **Condições para criar o vídeo** (todas): `matchMedia('(min-width: 900px)').matches`; `!matchMedia('(prefers-reduced-motion: reduce)').matches`; `!navigator.connection?.saveData`; `navigator.connection?.effectiveType` não é `slow-2g` nem `2g`; `!matchMedia('(prefers-reduced-data: reduce)').matches` (onde houver suporte); e o usuário não deixou o vídeo pausado antes (`localStorage['fk-hero-video'] !== 'pausado'`; se estiver, cria o vídeo pausado no 1º quadro, com o botão em "Reproduzir"). Criar depois do evento `load` (ou em `requestIdleCallback`, com limite de 2 s), para não competir com o LCP.
   - **Mudanças em tempo real:** se `prefers-reduced-motion` mudar para `reduce`, pausar, remover o vídeo e o botão. Se a janela encolher para < 900px, pausar e esconder o vídeo (a imagem mobile assume pelo `<picture>`); ao voltar a ≥ 900px, retomar só se o usuário não pausou.
   - **Economia de CPU:** pausar quando o hero sai da tela (IntersectionObserver, `threshold: 0`) e quando `document.hidden`; retomar ao voltar, **só se** o usuário não pausou pelo botão.
3. **Overlay (pseudo-elemento `::after` de `.hero__midia`, `z-index: 1`, `pointer-events: none`):**
   - **Desktop (≥ 900px):** duas camadas na cor `--verde-950` #0B2E1A: `background: var(--overlay-hero-lateral), var(--overlay-hero);`
     - Vertical (`--overlay-hero`): 90% na base, 78% a 40% da altura, 35% a 75% e 15% no topo.
     - Lateral (`--overlay-hero-lateral`): 55% na borda esquerda, 25% a 45% da largura, 0% a partir de 70%. Ela existe porque a criança em primeiro plano (camiseta clara) e o céu claro do entardecer ficam **na esquerda**, sob a coluna de texto.
     - **O texto ocupa só os 55% inferiores e as colunas 1 a 8**, onde a opacidade combinada vai de ~86% (borda esquerda) a ≥ 70% (borda direita da coluna). Contraste do branco no pior caso (pixel branco do vídeo): **~9,7:1** na esquerda, **~7,0:1** a 45% da largura e **~5,6:1** no extremo direito da coluna (AA em todo o bloco). O desenvolvedor confere na captura real do poster e de 3 quadros do vídeo (0 s, 8 s e 15 s), com o texto oculto.
   - **Mobile (< 900px):** só `--overlay-hero-mobile` (92% na base, 82% a 55%, 40% a 85%, 20% no topo), sobre a foto 4:5. Branco na faixa do título: ≥ 8,4:1.
4. **Confete:** `assets/svg/confete.svg` no canto superior direito (30% de opacidade, `z-index: 2`, largura `clamp(160px, 22vw, 320px)`), e outro sobre a borda do placar (100%), `aria-hidden`, nunca atrás do texto. O confete do topo fica sobre o céu do vídeo, onde não há texto.
5. **Conteúdo** (`z-index: 3`).

#### 3.3.2 Forma e layout

- **Forma:** a borda inferior do hero faz um arco: `border-radius: 0 0 50% 50% / 0 0 var(--arco-hero) var(--arco-hero)` com `overflow: hidden` (corta também o vídeo e o overlay).
- **Layout desktop (≥ 900px):** altura `min(calc(100svh - var(--header-h)), 820px)`, mínimo 600px. Texto alinhado à esquerda, nas colunas 1 a 8 (máx. 720px), encostado na base com `padding-bottom` que deixa espaço para o placar (cerca de 140px). Título branco `--fs-display`; lead **branco 100%** (sobre o vídeo, não usar 92% de opacidade, para manter o pior caso em ≥ 5,6:1); `text-shadow: 0 2px 12px rgba(11,46,26,.45)` no H1 e no lead como reforço (não entra no cálculo). Botões lado a lado, gap 16.
- **`object-position` (desktop): `60% 45%`.** Entre 900 e 1199px o hero fica mais "alto" que 16:9 e o vídeo corta as laterais: 60% preserva a bola e o goleiro (centro-direita) e corta mais a esquerda, que já fica sob o texto e o overlay. Acima de 1440px o hero fica mais "largo" e o corte é em cima e embaixo: 45% vertical mantém a criança do quadril para cima e o gol. Use o mesmo valor na imagem e no vídeo, para a troca não "pular".
- **Mobile (< 900px):** **mantém a foto vertical atual** (`hero-mobile.jpg` 4:5), sem vídeo. Justificativa: o vídeo é 16:9 e num hero de 88svh em retrato o `cover` mostraria só ~35% da largura do quadro (perde a bola ou o goleiro); além disso, 3,26 MB em dados móveis e o autoplay em economia de bateria do iOS pesam contra. Uso 900px (e não 768px) porque é o mesmo ponto em que o hero já troca de layout (texto centralizado, CTAs empilhados) e o cabeçalho troca de menu; entre 768 e 899px o recorte do vídeo ainda cortaria demais a cena. Altura mínima `88svh` (mínimo 560px), texto centralizado na base da foto, CTAs empilhados com largura total (máx. 400px), gap 12. O placar vem logo abaixo, com margem lateral `--gutter` e `margin-top: -48px`, chips em 2x2 com gap 12.

#### 3.3.3 Botão pausar/reproduzir (WCAG 2.2.2)

- **Quando aparece:** é criado pelo JS **junto com o vídeo** e removido com ele. Sem vídeo (celular, movimento reduzido, economia de dados, sem JS), o botão não existe.
- **Ordem no DOM:** logo depois dos 2 CTAs do hero, dentro do bloco de conteúdo (assim o foco chega a ele depois das ações principais e antes do placar). Posição visual com `position: absolute` em relação ao hero.
- **Posição:** canto inferior direito, `right: var(--gutter)`, `bottom: calc(var(--arco-hero) + 96px)` (fica acima da curva do arco e da metade do placar, que cruza a base). Em ≥ 1200px, alinhar a direita ao container: `right: max(var(--gutter), calc((100vw - var(--container)) / 2 + var(--gutter)))`.
- **Estilo:** círculo de **48x48px** (alvo ≥ 44px), fundo `rgba(11,46,26,.6)` com `backdrop-filter: blur(4px)` (opcional), borda 2px `--branco`, ícone SVG branco de 20px (pausa: duas barras de 4x16 com raio 2; play: triângulo arredondado deslocado 2px à direita). Contraste da borda e do ícone ≥ 4,5:1 no pior caso (≥ 3:1 exigido para componentes).
  - Hover: fundo `--branco`, ícone `--verde-900` (9,1:1). Foco (`:focus-visible`): `--foco-escuro` (anel amarelo 3px, offset 3px; 5,9:1 sobre verde-900). Ativo: `scale(.94)` (só sem movimento reduzido). Não há estado desabilitado.
- **Acessibilidade:** `<button type="button">` com `aria-label="Pausar vídeo de fundo"` enquanto toca e `aria-label="Reproduzir vídeo de fundo"` quando pausado (troca o rótulo e o ícone; **não** usar `aria-pressed` junto). `aria-controls` apontando para o `id` do vídeo. Tooltip nativo opcional com `title` igual ao rótulo. Ícones com `aria-hidden="true"`.
- **Comportamento:** clique ou Enter/Espaço alterna `video.pause()` / `video.play()` e grava `localStorage['fk-hero-video'] = 'pausado' | 'tocando'`. A pausa manual tem prioridade sobre a retomada automática (IntersectionObserver, `visibilitychange`).

#### 3.3.4 LCP e desempenho

- O elemento LCP esperado é o **poster** (`hero-poster.jpg`, desktop) ou a **foto mobile** (`hero-mobile.jpg`), ou o H1, dependendo da tela. Os dois são a `<img>` do `<picture>`, com `fetchpriority="high"`.
- Preload no `<head>`, um por faixa:
  - `<link rel="preload" as="image" href="assets/videos/hero-poster.jpg" media="(min-width: 900px)" fetchpriority="high">`
  - `<link rel="preload" as="image" href="assets/fotos/hero-mobile.webp" type="image/webp" media="(max-width: 899px)" fetchpriority="high">`
- **Não** fazer preload do `hero.mp4`. O vídeo entra depois do `load`, nunca bloqueia o LCP e não conta no peso inicial.
- O H1 não pode começar com `opacity: 0` sem animação CSS garantida (§5.1).
- O MP4 atual é fragmentado e sem `faststart` (`imagens.md` §2.3): toca no Edge/Chrome, mas o avaliador deve conferir o início da reprodução no Firefox e no Safari. Se não tocar, o fallback já é o poster (sem quebra visual).

#### 3.3.5 Placar do seletor de idade (sem mudança)

- Card `--branco`, raio `--r-xl`, `--sh-3`, padding `--sp-5`/`--sp-6`. Fica centralizado, com largura até 960px, e é posicionado para cruzar a borda em arco: metade sobre o vídeo/foto, metade sobre o creme (`margin-top: -72px`, `position: relative; z-index: 4`). Ele fica **fora** do `<section>` da mídia no DOM para não depender de posicionamento absoluto: é o primeiro filho do `<main>` depois do hero, ou o último filho do hero com `translateY(50%)`. Escolha a opção que não corte o card no zoom de 200%.
- Título do placar: "Quantos anos tem a criança?" (Baloo 2 700, 22px, `--verde-800`).
- 4 chips-link em linha (desktop) ou grade 2x2 (mobile): cada chip mostra **idade em destaque + nome da turma + Sub-X**, ex.: "4 e 5 anos" (Baloo 2 700 20px) / "Fraldinha · Sub-6" (Nunito 700 14px). Fundo na cor da turma (`--turma-*`), texto `--tinta` (contrastes de 8,7:1 a 10,5:1), raio `--r-lg`, altura mínima 64px, borda de 2px `transparent`.
- Hover: `translateY(-3px)` e borda de 2px `--tinta`. Foco: anel `--foco-claro`. `:active`: volta a 0.
- Cada chip é `<a href="#turma-fraldinha">` (e `#turma-pre-mirim`, `#turma-mirim`, `#turma-infantil`). Com JS: ao clicar, rolar até o card e aplicar a classe `.is-destacado` por 1,6s (anel de 4px na cor `--verde-700` e um pulso de escala 1 → 1.03 → 1, só sem movimento reduzido). Mover o foco para o H3 do card (`tabindex="-1"`).
- Uma bola SVG pequena (`assets/svg/bola.svg`, 40px) "pousa" no canto superior direito do placar (ver Animações).
- O botão pausar/reproduzir nunca fica por cima do placar (a posição da §3.3.3 garante isso; conferir em 900px e em 1440px).

### 3.4 Por que futebol faz bem (`#beneficios`)

- **Objetivo:** mostrar aos pais os benefícios com respaldo, sem exagero (verbos "ajuda", "estimula", "contribui", conforme a pesquisa).
- **Conteúdo:** eyebrow + H2 + lead curto. **5 itens**: Coordenação motora, Amizades e trabalho em equipe, Autoestima, Saúde e energia (60 min/dia), Valores (respeito e disciplina). Cada item: ícone + título curto (H3) + 1 frase.
- **Layout:** faixa `--azul-100` com padding `--sp-secao`. Os itens **não** são cards: ícone em círculo de 88px (fundo `--branco`, ícone de 48px nas cores da marca) + texto centralizado abaixo.
  - < 600px: lista de 1 coluna com ícone à esquerda (64px) e texto à direita, gap 16.
  - 600–899px: 2 colunas (o 5º item centralizado na última linha).
  - 900–1199px: 3 + 2 centralizados.
  - ≥ 1200px: 5 colunas.
- **Decoração:** uma linha de campo branca (`assets/svg/linhas-campo.svg`, meia-lua da área) no canto inferior direito, 40% de opacidade, `aria-hidden`.
- **Nota de fonte:** abaixo da grade, uma linha `--fs-small` `--tinta-suave`: "Recomendação de 60 minutos diários de atividade física: OMS e Sociedade Brasileira de Pediatria." (texto final do redator).

### 3.5 Turmas por idade (`#turmas`)

- **Objetivo:** cada responsável encontra a turma do filho e entende o foco daquela fase. Regra da pesquisa: **sempre nome + idade + Sub-X**.
- **Dados das turmas:**

| `id` do card | Nome | Idade | Equivalente | Cor | Foto |
|---|---|---|---|---|---|
| `turma-fraldinha` | Fraldinha | 4 e 5 anos | Sub-6 | `--turma-fraldinha` (amarelo) | `turma-fraldinha.jpg` |
| `turma-pre-mirim` | Pré-mirim | 6 e 7 anos | Sub-8 | `--turma-premirim` (azul) | `turma-pre-mirim.jpg` |
| `turma-mirim` | Mirim | 8 e 9 anos | Sub-10 | `--turma-mirim` (verde) | `turma-mirim.jpg` |
| `turma-infantil` | Infantil | 10 a 12 anos | Sub-12 | `--turma-infantil` (coral) | `turma-infantil.jpg` |

- **Card "figurinha":** `<article>` com fundo `--branco`, borda de 6px na cor da turma, raio `--r-lg`, `--sh-2`, overflow hidden.
  - Topo: foto 4:3 (`object-fit: cover`), com um selo redondo **"Sub-X"** sobreposto ao canto inferior direito da foto e metade para fora (círculo de 84px, fundo `--coral-700`, borda de 4px `--branco`, texto branco: "SUB" Nunito 800 12px em cima e o número em Baloo 2 800 32px; contraste 5,2:1). O selo tem texto real e `aria-hidden="true"`, porque a informação se repete no corpo.
  - Faixa na cor da turma com a **idade** em Baloo 2 800 24px `--tinta` (ex.: "4 e 5 anos").
  - Corpo (padding `--sp-5`): H3 com o nome ("Fraldinha"), e logo abaixo, linha `--fs-small` `--tinta-suave` com "Equivalente Sub-6". Depois, "Foco da fase" em 3 itens com check (`assets/svg/icones/check.svg` `--verde-700`), e por fim o link "Agendar aula grátis desta turma" (link de texto com seta, `--azul-700`, 700, altura de alvo 44px), que vai para o WhatsApp com a mensagem padrão. Pode-se acrescentar a turma ao texto: `...%20para%20a%20turma%20Fraldinha.` (só o nome da turma, nenhum dado da criança).
  - A Fraldinha diz "aprender brincando", sem tática nem competição (pesquisa, AAP/SBP).
- **Hover (desktop com ponteiro):** `translateY(-6px) rotate(-0.5deg)` em `--dur-base` `--ease-mola` e sombra `--sh-3`. O card inteiro **não** é um link (só o link interno), para não criar um alvo enorme ambíguo.
- **Layout:** 1 coluna < 600px; 2 colunas 600–1199px; 4 colunas ≥ 1200px; gap 24.
- **Nota abaixo da grade** (`--fs-small`, centralizada, `--tinta-suave`): os nomes das turmas são da escola e a idade de referência é a do ano (texto final do redator).
- **CTA repetido** (pesquisa): botão primário verde centralizado "Agendar aula experimental grátis" abaixo da nota.

### 3.6 Metodologia (`#metodologia`)

- **Objetivo:** mostrar como é uma aula (jogo, habilidade, jogo), turmas reduzidas e jogos em espaço pequeno.
- **Fundo:** `--verde-900` com `assets/svg/campo-fundo.svg` (linhas de campo brancas a 8% de opacidade, `background-size: cover`, `background-position: center`). Textos brancos (9,1:1), eyebrow `--amarelo-400` (5,9:1).
- **Conteúdo:** eyebrow + H2 + lead. **Linha do tempo de 3 passos:** 1. Jogo de aquecimento, 2. Desafio de habilidade, 3. Jogo final. Cada passo: número dentro de uma bola (círculo de 72px, fundo `--amarelo-400`, número Baloo 2 800 32px `--tinta`, contraste 9,6:1), ícone, H3 branco e 1–2 frases brancas.
- **Abaixo da linha do tempo:** 3 "selos" de fatos em linha (pill com borda de 2px `--verde-400` e texto branco Nunito 700): "Turmas reduzidas", "Jogos de até 4 contra 4", "Muito toque na bola". Contraste do branco sobre `--verde-900`: 9,1:1. A borda verde-400 contra verde-900 é decorativa.
- **Layout:**
  - < 900px: linha do tempo **vertical**, com os números à esquerda ligados por uma linha tracejada vertical de 3px (`--amarelo-400` a 60%) e o texto à direita.
  - ≥ 900px: **horizontal** em 3 colunas, com a trajetória `assets/svg/trajetoria-bola.svg` (arco tracejado amarelo que passa por cima dos 3 números) ao fundo.
- **Foto opcional (≥ 1200px):** `treino-cones.jpg` em círculo de 280px à direita do cabeçalho da seção, com borda de 6px `--amarelo-400`.

### 3.7 Diferenciais (`#diferenciais`)

- **Objetivo:** responder às dúvidas de segurança e qualidade (pesquisa: líderes qualificados, ambiente seguro).
- **Conteúdo:** eyebrow + H2. **6 diferenciais:** Professores formados em Educação Física com registro no CREF (diferencial, nunca "exigido por lei"), Campo de grama sintética, Segurança (entrada controlada e entrega da criança só a responsáveis cadastrados), Uniforme incluso, Festivais e amistosos, Relatório para os pais. Opcional: primeiros socorros, água e sombra no intervalo (o redator decide se entra dentro de "Segurança").
- **Layout bento (≥ 900px):** grade de 4 colunas por 3 linhas, gap 16.
  - Bloco grande (2 col x 2 lin, à esquerda): foto `campo-sintetico.jpg` com raio `--r-lg`, e na base uma etiqueta branca (`--branco`, raio `--r-md`, padding 12x16) com o H3 "Campo de grama sintética" e 1 frase em `--tinta`. A etiqueta fica sobre a foto, com fundo sólido, então não depende de overlay.
  - 5 blocos menores (1 col x 1 lin, com o de "Segurança" ocupando 2 colunas): fundo `--branco` com borda de 1px `--borda`, raio `--r-lg`, padding `--sp-5`. Ícone de 40px em quadrado `--verde-100` raio `--r-md`, H3 (`--fs-h3` reduzido a 22px) e 1–2 frases.
  - O bloco "Segurança" usa fundo `--amarelo-100` e ícone de escudo, porque é o ponto que mais tranquiliza os pais. Contraste de `--tinta` sobre `#FEF9C3`: ~13,7:1.
- **600–899px:** foto em largura total (16:9) e os blocos em 2 colunas.
- **< 600px:** foto 4:3 e blocos em 1 coluna, cada um com ícone à esquerda.

### 3.8 Grade de horários (`#horarios`)

- **Objetivo:** mostrar dias e horários de exemplo por turma.
- **Conteúdo:** eyebrow + H2 + aviso curto "Horários de exemplo, confirme pelo WhatsApp" + a grade (dados do redator; fictícios).
- **Desktop (≥ 900px):** `<table>` real com `<caption>` (visível, `--fs-small`), cabeçalho de colunas: Turma, Idade, Dias, Horário, Duração. As linhas têm, à esquerda, uma barra de 8px na cor da turma, e a coluna Turma traz o nome + selo pequeno "Sub-X" (pill `--coral-700`, texto branco 13px 800). Cabeçalho: fundo `--verde-900`, texto branco Nunito 800. Linhas zebradas `--creme` / `--branco`. Células com padding 16x20. Raio `--r-lg` no contêiner com overflow hidden.
- **Mobile (< 900px):** a mesma tabela vira uma lista de cards (`display: block` nas linhas, com o rótulo de cada célula vindo de `data-label` via `::before`, em Nunito 800 `--tinta-suave`). Cada card tem a borda superior de 6px na cor da turma. Se o desenvolvedor preferir, pode usar uma lista de cards no HTML para o mobile e esconder a tabela, mas **o conteúdo deve existir uma vez só para leitores de tela** (não duplicar).
- **Abaixo:** link "Não achou um horário bom? Fale com a gente" (link de texto `--azul-700` → WhatsApp).

### 3.9 Professores (`#equipe`)

- **Objetivo:** dar rosto e credencial à equipe. Os 3 professores são **exemplo** ("substituir antes de publicar").
- **Card "figurinha de álbum":** fundo `--branco`, raio `--r-lg`, borda de 2px `--borda`, padding `--sp-5`, `--sh-2`, levemente rotacionado (-1deg, 0, +1deg alternados; rotação 0 no mobile e com movimento reduzido).
  - Foto 1:1 em círculo de 160px com borda de 6px `--verde-300`, e um "número da camisa" (círculo de 40px `--verde-700`, número branco Baloo 2 800, contraste 5,0:1) no canto. O número é decorativo (`aria-hidden`).
  - H3 com o nome, cargo (Nunito 700 `--verde-700`... **não**: usar `--verde-800` por ser texto de 16px; contraste 6,7:1 sobre branco ~7,1:1), registro de exemplo "CREF 000000-G/UF" (`--fs-small` `--tinta-suave`), 1 frase de apresentação.
  - Rodapé do card com 2 chips de especialidade (fundo `--verde-100`, texto `--tinta`, 14px 700).
- **Layout:** 1 coluna < 600px (cards horizontais: foto de 112px à esquerda e texto à direita); 3 colunas ≥ 900px; entre 600 e 899px, 2 colunas + 1 centralizado.
- **Aviso:** abaixo, linha `--fs-small` "Fotos e nomes ilustrativos." (texto do redator).

### 3.10 Planos e mensalidades (`#planos`)

- **Objetivo:** mostrar preços de exemplo e o desconto para irmãos, e levar à aula grátis.
- **Conteúdo:** eyebrow + H2 + lead. **3 planos** (exemplo): 1x por semana, 2x por semana (destaque, "Mais escolhido"), 3x por semana. Cada um: nome (H3), preço grande (Baloo 2 800 48px `--tinta`, "R$" e "/mês" em Nunito 700 18px), 3–4 itens com check, botão. Abaixo dos 3: faixa do **desconto para irmãos**.
- **Card padrão:** fundo `--branco`, raio `--r-lg`, padding `--sp-6`, borda de 2px `--borda`. Botão secundário (contorno verde) "Começar com aula grátis".
- **Card em destaque (2x):** borda de 4px `--verde-700`, `--sh-3`, escala 1.04 no desktop, selo no topo centralizado "Mais escolhido" (pill `--amarelo-400`, texto `--tinta` Nunito 800 14px, 9,6:1) e botão primário verde. No DOM ele fica na ordem natural (2º); no mobile, fica em primeiro com `order: -1` **somente se** a ordem de leitura continuar fazendo sentido. Preferência: manter a ordem 1x, 2x, 3x também no mobile.
- **Faixa "irmãos":** caixa larga `--amarelo-100`, borda tracejada de 2px `--coral-700`, raio `--r-lg`, padding `--sp-5`, ícone de duas camisas (`icones/irmaos.svg`) à esquerda, texto `--tinta` em Nunito 700 18px (ex.: "Irmãos ganham X% de desconto"; valor do redator). Contraste da borda coral-700 sobre amarelo-100: ~4,9:1.
- **Nota:** "Valores de exemplo. Uniforme incluso." (`--fs-small`, `--tinta-suave` sobre azul-100: ~6,8:1).
- **Layout:** 1 coluna < 900px (cards empilhados, gap 24, sem escala); 3 colunas ≥ 900px, alinhados pela base.

### 3.11 Depoimentos de pais (`#depoimentos`)

- **Objetivo:** prova social. Os 3 depoimentos são **exemplo** ("substituir antes de publicar").
- **Formato:** carrossel horizontal com **scroll-snap nativo** (sem avanço automático, por isso não precisa de botão de pausa).
  - Trilho: `<ul>` com `overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--gutter)`, gap 24. Cada item `scroll-snap-align: start`, largura 86% (mobile), 60% (600–899px) e `calc((100% - 48px) / 3)` a partir de 1200px, onde os 3 aparecem lado a lado e as setas somem.
  - Card: fundo `--branco`, raio `--r-xl`, padding `--sp-6`, `--sh-2`. Aspas grandes decorativas (Baloo 2 800 96px `--amarelo-400`, `aria-hidden`; decorativas, não são texto). Texto do depoimento (`<blockquote>`, Nunito 400 18px, `--tinta`). Rodapé: foto 1:1 em círculo de 56px + nome (Nunito 800) + "mãe do(a) [idade/turma]" (`--fs-small` `--tinta-suave`). Sem nome de criança.
  - 5 estrelas opcionais em `--coral-700` (ícone com texto alternativo "5 de 5 estrelas").
  - **Controles (< 1200px):** botões anterior/próximo de 48x48 (círculo, fundo `--branco`, borda 2px `--verde-700`, seta `--verde-700`; hover: fundo `--verde-700` e seta branca; desabilitado no início/fim: borda `--borda`, seta `--tinta-suave`, `aria-disabled="true"`) e indicadores (pontos de 12px visuais dentro de alvos de 44x44; o atual em `--verde-700`, os outros com borda 2px `--borda-campo`, ~3,6:1).
  - **Acessibilidade:** região com `aria-roledescription="carrossel"` e `aria-label="Depoimentos de pais"`. Cada item com `aria-roledescription="slide"` e `aria-label="1 de 3"`. Setas ← → movem quando o foco está no trilho. Swipe nativo. Sem JS, o trilho continua rolável e todos os cards ficam acessíveis.

### 3.12 Perguntas frequentes (`#faq`)

- **Objetivo:** tirar as dúvidas que travam a matrícula: idade, o que levar, precisa saber jogar, meninas podem, chuva, pais podem assistir. O redator pode acrescentar "como funciona a aula grátis" e "segurança na entrada e saída".
- **Layout ≥ 900px:** 2 colunas (5/12 e 7/12). Esquerda, **fixa** com `position: sticky; top: calc(var(--header-h) + 32px)`: eyebrow, H2, um parágrafo curto, ilustração `assets/svg/bola-apito.svg` (200px, decorativa) e o botão secundário "Perguntar no WhatsApp". Direita: acordeão.
- **< 900px:** 1 coluna, com o botão "Perguntar no WhatsApp" no fim.
- **Acordeão:** `<details>`/`<summary>` nativos. Cada item: fundo `--creme`, raio `--r-md`, margem de 12px entre itens. `<summary>` com Nunito 800 18px `--tinta`, padding 20x24, altura mínima 56px, ícone "+" à direita (círculo de 32px `--verde-100`, sinal `--verde-800`) que gira para "×" (`rotate(45deg)`) quando aberto. Esconder o marcador nativo (`list-style: none` e `::-webkit-details-marker { display: none }`). Hover: fundo `--verde-100`. Aberto: borda esquerda de 4px `--verde-700`. Resposta: padding 0x24x24, `--tinta`, 62ch.

### 3.13 Localização e contato (`#contato`)

- **Objetivo:** mostrar onde fica e todos os canais. Dados **só** de `dados-negocio.md` (fictícios).
- **Mapa:** o iframe de `dados-negocio.md` §5, sem alterar `src`, `title`, `loading="lazy"`, `referrerpolicy` e `allowfullscreen`. No CSS: `width: 100%; height: auto; aspect-ratio: 16 / 9` (mobile `4 / 3`), `border: 0`, raio `--r-lg` (no contêiner com overflow hidden), fundo `--verde-100` com o ícone de pin centralizado enquanto carrega (placeholder no contêiner, atrás do iframe).
- **Card de contato** (fundo `--branco`, raio `--r-xl`, `--sh-3`, padding `--sp-6`):
  - H3 "Futebol Kids" e o endereço completo em texto (`<address>`).
  - Lista com ícones de 24px (pin, WhatsApp, telefone, e-mail, Instagram, relógio): cada linha é um link com altura mínima de 44px, texto `--tinta` e sublinhado no hover; o link de e-mail e o de Instagram em `--azul-700`.
  - Tabela curta de horário de atendimento (Seg a Sex 08:00–20:00; Sáb 08:00–12:00; Dom fechado), `--fs-small`.
  - 2 botões: "Como chegar" (primário verde, link de rota) e "Abrir no Google Maps" (secundário contorno), ambos `target="_blank" rel="noopener"` com aviso de nova aba para leitor de tela.
  - Etiqueta discreta "Dados fictícios de demonstração" (pill `--amarelo-100`, texto `--tinta`, 13px 700).
- **Layout ≥ 900px:** mapa nas colunas 1 a 8 (proporção 16:9, altura mínima 420px). O card ocupa as colunas 8 a 12 e **sobrepõe** a borda direita do mapa (`margin-left: -64px`, `z-index: 2`), centralizado na vertical.
- **< 900px:** mapa em largura total (4:3) e o card abaixo, subindo 32px sobre o mapa (`margin-top: -32px`, margem lateral 16px).

### 3.14 CTA final (`#aula-gratis`)

- **Objetivo:** fechar com a ação principal.
- **Fundo:** `--verde-900` com `assets/svg/circulo-central.svg` (círculo central + linha do meio de campo, branco a 10%, centralizado e maior que a seção) e confete (`confete.svg`) nos 2 cantos superiores. A seção tem o topo em arco invertido (mesma curva do hero, `border-radius: 50% 50% 0 0 / var(--arco-hero) var(--arco-hero) 0 0`) e fica colada ao rodapé.
- **Conteúdo centralizado (máx. 720px):** H2 branco (9,1:1), lead branco a 90%, botão primário amarelo grande (altura 60px, Baloo 2 700 22px, `--sh-pop` na cor `rgba(0,0,0,.35)`) "Agendar aula experimental grátis" → WhatsApp com mensagem. Abaixo, linha de microcopy `--fs-small` branca a 85% (contraste ≥ 7:1): "Resposta no horário de atendimento. Sem compromisso."
- Bola `bola.svg` de 56px quicando ao lado do botão (ver Animações).

### 3.15 Rodapé

- **Fundo:** `--verde-950`. Texto branco a 88% (contraste ≥ 11:1), títulos de coluna em `--amarelo-400` (9,0:1), Nunito 800 14px uppercase.
- **3 colunas ≥ 900px** (1 coluna no mobile, centralizada):
  1. `logo-branco.svg` (altura 48px) + 1 frase.
  2. Contato: endereço, WhatsApp, e-mail, horário curto (`Seg a Sex: 08:00–20:00 · Sáb: 08:00–12:00 · Dom: fechado`).
  3. Redes: Instagram (ícone em círculo de 44px com borda 2px branca; hover: fundo `--amarelo-400` e ícone `--tinta`) + links rápidos.
- **Linha inferior** (borda superior de 1px branca a 15%): "© 2026 Futebol Kids" · **"Site de demonstração — dados fictícios"** (obrigatório) · créditos das fotos e do vídeo (link para a lista de créditos ou texto curto "Fotos: Unsplash · Vídeo: Pexels, ver créditos") · link "Voltar ao topo".
- Links do rodapé: branco, sublinhados; hover: `--amarelo-400`.
- No mobile, `padding-bottom: calc(var(--sp-7) + var(--fab-area))` para o botão flutuante não cobrir o aviso.

### 3.16 Botão flutuante de WhatsApp (mobile)

- Só abaixo de 900px. Círculo de 60px fixo em `right: 16px; bottom: max(16px, env(safe-area-inset-bottom))`, fundo `--verde-800`, ícone `whatsapp.svg` branco 30px (7,1:1), `--sh-3`, `aria-label="Agendar aula grátis pelo WhatsApp (abre em nova aba)"`.
- Aparece depois que o placar do hero sai da tela e some quando o CTA final ou o contato estão visíveis (IntersectionObserver). Quando escondido, `visibility: hidden` (sai da ordem de tabulação) com transição de `opacity` + `translateY(16px)`.
- Sem JS: sempre visível.

---

## 4. Componentes e estados

### 4.1 Botões

Base: Nunito 800 17px, `min-height: 48px` (compacto: 44px; grande: 60px), padding 12x28, raio `--r-pill`, `display: inline-flex; align-items: center; gap: 10px`, ícone opcional de 20px. Transições de `background-color`, `color`, `transform` e `box-shadow` em `--dur-rapida`.

| Variante | Normal | Hover | Foco (`:focus-visible`) | Ativo | Desabilitado |
|---|---|---|---|---|---|
| **Primário (claro)** | fundo `--verde-700`, texto branco (5,0:1), `--sh-pop` | fundo `--verde-800` (7,1:1), `translateY(-2px)` | anel `--foco-claro` com offset 3px | `translateY(4px)`, sombra 0 | fundo `#D1D5DB`, texto `#4B5563` (~5,9:1), sem sombra, `cursor: not-allowed`, `aria-disabled` |
| **Primário (escuro)** | fundo `--amarelo-400`, texto `--tinta` (9,6:1), sombra dura `0 6px 0 rgba(0,0,0,.35)` | fundo `#FDE047` (texto ~11:1), `translateY(-2px)` | anel `--foco-escuro`... **sobre amarelo o anel amarelo some**: usar anel branco de 3px + offset 3px (branco sobre verde-900: 9,1:1) | `translateY(4px)` | igual ao do claro |
| **Secundário (claro)** | fundo transparente, borda 2px `--verde-700`, texto `--verde-800` (6,7:1 no creme) | fundo `--verde-100`, texto `--verde-900` | anel `--foco-claro` | fundo `--verde-100`, `translateY(1px)` | borda `#D1D5DB`, texto `--tinta-suave` |
| **Contorno (escuro/hero)** | transparente, borda 2px branca, texto branco | fundo branco, texto `--verde-900` (9,1:1) | anel `--foco-escuro` (amarelo, 5,9:1 sobre verde-900) | `translateY(1px)` | - |
| **Ícone de mídia (hero)** | círculo 48x48, fundo `rgba(11,46,26,.6)`, borda 2px branca, ícone branco 20px | fundo branco, ícone `--verde-900` (9,1:1) | anel `--foco-escuro`, offset 3px | `scale(.94)` | - (não existe; o botão some sem vídeo) |
| **Link de texto** | `--azul-700`, 700, sublinhado de 2px com offset 4px | `--verde-800`, sublinhado de 3px | anel `--foco-claro`, raio 4px | - | - |

Todos os links de WhatsApp: `target="_blank" rel="noopener"` e aviso de nova aba no texto acessível.

### 4.2 Cards

- Base: fundo `--branco`, raio `--r-lg`, `--sh-2`. Hover (só com `@media (hover: hover)`): `translateY(-4px)` e `--sh-3`. Quando o card contém um link e o foco está nele, o card ganha `:focus-within` com borda de 2px `--azul-700` (além do anel no link).
- Variantes: turma (§3.5), diferencial (§3.7), professor (§3.9), plano (§3.10), depoimento (§3.11), contato (§3.13).

### 4.3 Navegação

- Links do cabeçalho: normal `--tinta`; hover com sublinhado `--verde-700` de 3px; foco com anel `--foco-claro` (raio `--r-sm`); atual com `aria-current` e sublinhado fixo.
- Botão de menu: 44x44, 3 traços de 3px `--tinta` que viram "×" (sem animação com movimento reduzido). Foco: anel `--foco-claro`.

### 4.4 Chips de idade (hero)

Normal: fundo da turma, texto `--tinta`, borda 2px transparente. Hover: `translateY(-3px)` e borda `--tinta`. Foco: anel `--foco-claro`. Ativo: `translateY(0)`. Não há estado desabilitado.

### 4.5 Formulários

**Não há formulário** (decisão da pesquisa, LGPD art. 14 e ECA): nenhum campo com nome, idade ou dados da criança. Toda conversão vai para o WhatsApp. Se no futuro for adicionado algum campo, use: altura 48px, borda 2px `--borda-campo` (3,6:1), raio `--r-sm`, foco com borda `--azul-700` + anel, erro com borda e mensagem em `#B91C1C` (~6,5:1 sobre branco) e ícone, rótulo visível sempre.

### 4.6 Foco visível (regra geral)

- `:focus-visible { outline: var(--foco-claro); outline-offset: var(--foco-offset); }` em todos os interativos. Em seções escuras (`.tema-escuro`: hero, metodologia, CTA final, rodapé): `outline: var(--foco-escuro)`. Exceção: botão amarelo usa anel branco (§4.1).
- Nunca `outline: none` sem substituto.
- **Foco não encoberto pelo cabeçalho fixo nem pelo botão flutuante (WCAG 2.4.11):**
  - `html { scroll-padding-top: calc(var(--header-h) + 24px); scroll-padding-bottom: var(--fab-area); }` (no desktop, `scroll-padding-bottom: 24px`).
  - `[id] { scroll-margin-top: calc(var(--header-h) + 24px); }` para as âncoras.
  - O menu mobile aberto fica abaixo do cabeçalho e prende o foco dentro dele (cabeçalho + painel) até fechar.
  - O botão flutuante fica no canto e é pequeno; com `scroll-padding-bottom`, o navegador rola o elemento focado para cima dele.

---

## 5. Animações (todas opcionais e leves)

Regra: **todas** as animações e transições de movimento ficam dentro de `@media (prefers-reduced-motion: no-preference)`. Com `reduce`: sem animação, sem `transform` de hover (só mudança de cor), `scroll-behavior: auto`, elementos `.reveal` com opacidade 1, nada fica escondido à espera do JS, e **o vídeo do hero não é criado** (só o poster/foto). Nada pisca mais de 3 vezes por segundo. As animações de interface não passam de 5 s; a única mídia em movimento contínuo é o vídeo do hero, que por isso tem botão de pausar (§3.3.3, WCAG 2.2.2).

1. **Entrada do hero (no carregamento):** selo, H1, lead e botões em fade + `translateY(16px → 0)`, 80ms entre eles, `--dur-lenta`. O H1 pode ser o LCP e **não** pode começar com `opacity: 0` sem animação CSS garantida: use `@keyframes` em CSS puro (não dependa do JS).
2. **Vídeo do hero:** entra com fade de `opacity` 0 → 1 em 400ms no evento `playing`, sobre o poster idêntico (§3.3.1). Loop nativo (`loop`); o corte do fim para o início é o mesmo plano e não precisa de transição.
3. **Bola do placar:** `bola.svg` cai de -60px e quica 2 vezes até parar (`--ease-mola`, 1,2s, uma vez), com uma sombra elíptica que cresce embaixo. Depois, fica parada.
4. **Revelar ao rolar:** seções com `.reveal` sobem 24px e aparecem (fade) em `--dur-lenta` quando 15% entram na tela (IntersectionObserver, uma vez). Sem JS ou com `reduce`: visíveis desde o início (a classe que esconde só é aplicada pelo JS, ex.: `html.js .reveal`).
5. **Trajetória da metodologia:** o arco tracejado se desenha (`stroke-dashoffset`) em 1,2s quando a seção entra na tela; os números aparecem em sequência.
6. **Hover:** cards (§4.2), chips (§4.4) e botões (§4.1).
7. **Bola do CTA final:** quica 3 vezes quando a seção entra na tela e para.
8. **Destaque da turma** ao vir do seletor de idade (§3.3.5): pulso único.

---

## 6. Breakpoints e comportamento mobile

Mobile first. Media queries com `min-width`.

| Nome | Faixa | Mudanças principais |
|---|---|---|
| base | 0–599px | 1 coluna; menu hambúrguer; botão flutuante do WhatsApp; hero com `hero-mobile.jpg` 4:5 **sem vídeo**, texto centralizado, CTAs empilhados; placar com chips 2x2; benefícios em lista; turmas em 1 coluna; linha do tempo vertical; diferenciais em 1 coluna; horários em cards; professores em cards horizontais; planos empilhados; depoimentos com 86% de largura; mapa 4:3 |
| `sm` | 600–899px | Hero ainda com a foto 4:5 e sem vídeo; benefícios e turmas em 2 colunas; diferenciais em 2 colunas; depoimentos com 60%; botões do hero lado a lado |
| `md` | 900–1199px | Navegação completa (sem hambúrguer); `--header-h` 76px; sem botão flutuante; hero com **vídeo de fundo** (poster `hero-poster.jpg` como LCP/fallback), overlay vertical + lateral, texto à esquerda, botão pausar/reproduzir; chips em linha; linha do tempo horizontal; bento de diferenciais; tabela de horários real; professores e planos em 3 colunas; FAQ em 2 colunas; mapa com card sobreposto |
| `lg` | ≥ 1200px | Grade de 12 colunas; botão de pausa alinhado ao container; benefícios em 5 colunas; turmas em 4 colunas; depoimentos 3 lado a lado sem setas; foto circular na metodologia |

Outros cuidados:
- Testar em 320px: nada de rolagem horizontal (exceto o trilho de depoimentos, que é intencional). O H1 não pode quebrar palavras; se preciso, `--fs-display` mínimo de 2.25rem abaixo de 360px.
- Zoom de 200% e texto ampliado: o placar e os cards crescem em altura, sem alturas fixas. Com zoom de 200% num desktop de 1280px, a largura útil cai para 640px e o hero passa ao modo mobile (foto, sem vídeo): comportamento esperado.
- Imagens com `srcset` e `sizes`: hero mobile `100vw`; poster desktop é um arquivo só (1600w); turmas `(min-width:1200px) 280px, (min-width:600px) 45vw, 92vw`; campo `(min-width:900px) 50vw, 100vw`; equipe 160px (2x = 320px); depoimentos 56px (2x = 112px).
- Todas as imagens com `width`/`height` e `loading="lazy"`, exceto a imagem do hero (`fetchpriority="high"`, com os 2 `<link rel="preload" as="image">` com `media` da §3.3.4).
- O vídeo do hero nunca é baixado abaixo de 900px, com `prefers-reduced-motion: reduce`, com `saveData` ou em conexão 2g (§3.3.1).
- Iframe do mapa com `loading="lazy"`.

---

## 7. Pedidos de imagem (para o `gerador-imagens`; resultado em `imagens.md` e `assets/`)

Pastas: `assets/svg/`, `assets/svg/icones/`, `assets/fotos/`, `assets/videos/`. Nomes em kebab-case, sem acentos.

### 7.1 SVG (criados pelo time)

Regras gerais dos SVG: `viewBox` definido, sem dimensões fixas internas, cores da paleta (hex), traços com `stroke-linecap="round"` e `stroke-linejoin="round"`, otimizados (sem metadados). Ícones com `currentColor` para herdar a cor do CSS. Decorativos sem `<title>` (o HTML usa `aria-hidden`); logo com `<title>`.

| Arquivo | Uso | Tamanho / proporção | Descrição |
|---|---|---|---|
| `svg/logo.svg` | Cabeçalho | `viewBox 0 0 240 64` (horizontal) | Bola de futebol estilizada e simpática (hexágonos/pentágonos simplificados, preenchimento branco, gomos `--verde-900`, contorno `--verde-900` de 3px) com um pequeno "risco de movimento" amarelo atrás, à esquerda. Ao lado, "Futebol" em Baloo 2 800 `--verde-800` e "Kids" em Baloo 2 800 `--coral-700`, levemente maior e inclinado (-4deg). **Converter o texto em paths.** `<title>Futebol Kids</title>` |
| `svg/logo-branco.svg` | Rodapé | igual | Mesma composição com "Futebol" branco, "Kids" `--amarelo-400`, bola branca com gomos `--verde-950` |
| `svg/favicon.svg` | Favicon | `0 0 64 64` | Só a bola, em círculo `--verde-700` |
| `svg/bola.svg` | Placar do hero, CTA final | `0 0 64 64` | Bola isolada (sem o risco), branca com gomos `--tinta`; grupo `id="sombra"` separado (elipse `rgba(0,0,0,.2)`) para animar |
| `svg/confete.svg` | Hero, CTA final | `0 0 320 200` | 14 a 18 confetes soltos (retângulos arredondados, círculos e pequenos triângulos) em amarelo, azul-300, coral-500, verde-400 e branco, girados aleatoriamente; espaço vazio no centro |
| `svg/campo-fundo.svg` | Fundo da Metodologia | `0 0 1440 900`, `preserveAspectRatio="xMidYMid slice"` | Linhas de um campo inteiro visto de cima (laterais, meio de campo, círculo central, áreas, meias-luas), traço branco de 3px, sem preenchimento. A opacidade é aplicada no CSS |
| `svg/circulo-central.svg` | CTA final | `0 0 800 800` | Círculo central + ponto central + linha do meio de campo atravessando, traço branco de 4px |
| `svg/linhas-campo.svg` | Benefícios (canto) | `0 0 400 300` | Canto de área com meia-lua e marca do pênalti, traço branco de 4px |
| `svg/trajetoria-bola.svg` | Metodologia (desktop) | `0 0 1200 200`, `preserveAspectRatio="none"` | Arco tracejado (`stroke-dasharray="10 14"`) `--amarelo-400` de 4px, que sobe e desce passando sobre 3 pontos igualmente espaçados (25%, 50%, 75%), com a bola pequena no fim. `path` com `id="trajeto"` para a animação |
| `svg/traco-chute.svg` | Abaixo dos H2 | `0 0 64 12` | Traço curto curvo `--coral-500` de 4px com 2 riscos de movimento |
| `svg/bola-apito.svg` | FAQ | `0 0 240 240` | Ilustração simples: bola + apito + 2 cones, cores da paleta, traço `--verde-900` de 3px |

Os ícones de pausa e play do botão de mídia do hero são SVG inline simples (duas barras / triângulo, `currentColor`), desenhados pelo desenvolvedor; não precisam de arquivo novo.

**Ícones** (`svg/icones/`, `viewBox 0 0 48 48`, traço de 3px `currentColor`, estilo arredondado e consistente, com detalhes de preenchimento leve opcionais):

| Grupo | Arquivos |
|---|---|
| Benefícios | `coordenacao.svg` (criança/figura em movimento com bola), `amizade.svg` (duas mãos batendo "toca aqui"), `autoestima.svg` (estrela com sorriso ou troféu pequeno), `saude.svg` (coração com batimento), `valores.svg` (aperto de mãos) |
| Metodologia | `jogo.svg` (2 gols pequenos e bola), `habilidade.svg` (cones em zigue-zague com bola), `apito.svg` |
| Diferenciais | `cref.svg` (diploma/medalha com check), `gramado.svg` (tufos de grama e linha de campo), `seguranca.svg` (escudo com check), `uniforme.svg` (camisa), `festival.svg` (troféu com confete), `relatorio.svg` (prancheta com gráfico) |
| Planos / turmas | `check.svg` (círculo com check), `irmaos.svg` (duas camisas, uma maior) |
| Contato / interface | `whatsapp.svg` (logotipo simplificado, preenchido), `telefone.svg`, `email.svg`, `instagram.svg`, `pin.svg`, `relogio.svg`, `rota.svg`, `seta-direita.svg`, `seta-esquerda.svg`, `menu.svg`, `fechar.svg`, `mais.svg`, `estrela.svg` |

### 7.2 Fotos e vídeo reais (bancos públicos: Unsplash, Pexels, Pixabay, Wikimedia Commons CC0/CC BY)

**Regras para fotos e vídeos com crianças (pesquisa, riscos):** preferir crianças **de costas, de longe, em movimento desfocado ou só pés e bola**. Evitar rostos nítidos de frente, crianças em situação constrangedora ou logotipos de clubes/marcas em destaque. Registrar autor, URL e licença em `imagens.md`. Todas as fotos e vídeos com crianças e as fotos de equipe/depoimentos marcados **"substituir por material próprio com autorização dos responsáveis antes de publicar"**. Não usar legenda com nome de criança nem dizer que são alunos.

Formato: JPG de qualidade 78–82 + WebP. Tons ensolarados, grama verde, céu azul quando houver. Sem texto na imagem.

| Arquivo | Uso | Tamanho / proporção | Termos de busca | Prompt / critério de escolha | Peso alvo |
|---|---|---|---|---|---|
| `videos/hero.mp4` | **Hero desktop (≥ 900px), vídeo de fundo** | 1280x720 (16:9), H.264, 8–20 s em loop, sem áudio | (já entregue: Pexels 8938341, `imagens.md` §2.3) | Criança em primeiro plano **de costas** na esquerda, bola e goleiro no centro-direita, estádio ao entardecer, câmera fixa. Área do texto (inferior esquerda) sob overlay. Se refeito com ffmpeg: `-an -movflags +faststart`, 1600px, CRF 26 | ≤ 4 MB (atual: 3,26 MB) |
| `videos/hero-poster.jpg` | Poster do vídeo, LCP no desktop e imagem para movimento reduzido/economia de dados | 1600x900 (16:9) | 1º quadro do vídeo | Idêntico ao 1º quadro (troca invisível). Opcional: gerar também `hero-poster.webp` | ≤ 180 KB (atual: 158 KB) |
| `fotos/hero.jpg` (+ `hero-1280.jpg`) | **Reserva** (saiu do hero desktop com a troca para vídeo); origem do `og-image.jpg` | 2400x1350 (16:9) e 1280x720 | (já entregue) | Mantida em `assets/` | ≤ 300 KB (2400) / ≤ 160 KB (1280) |
| `fotos/hero-mobile.jpg` | Hero mobile (< 900px), sem vídeo | 1080x1350 (4:5) | recorte da mesma foto ou outra com composição vertical | Mesmo critério; assunto nos 45% superiores | ≤ 180 KB |
| `fotos/turma-fraldinha.jpg` | Card Fraldinha | 800x600 (4:3) | `toddler soccer`, `preschool soccer`, `little kid soccer ball` | Criança bem pequena (4–5 anos) com a bola, de costas ou só pés e bola, clima de brincadeira | ≤ 90 KB |
| `fotos/turma-pre-mirim.jpg` | Card Pré-mirim | 800x600 | `kids soccer practice`, `children soccer drills` | Crianças de 6–7 anos num exercício com cones, de longe | ≤ 90 KB |
| `fotos/turma-mirim.jpg` | Card Mirim | 800x600 | `girls soccer`, `kids soccer game` | Crianças de 8–9 anos em jogo; **de preferência com meninas** (pesquisa: FAQ "meninas podem?") | ≤ 90 KB |
| `fotos/turma-infantil.jpg` | Card Infantil | 800x600 | `youth soccer game`, `kids soccer match` | Crianças de 10–12 anos disputando a bola, de longe ou desfocadas | ≤ 90 KB |
| `fotos/campo-sintetico.jpg` | Diferenciais (bloco grande) | 1200x1200 (1:1) e 800x600 (4:3 para mobile) | `artificial turf soccer field`, `synthetic grass football pitch`, `soccer field lines` | Campo de grama sintética bem cuidado, com linhas brancas e talvez um gol pequeno; sem pessoas. A base da foto pode ser mais escura (a etiqueta branca fica ali) | ≤ 160 KB |
| `fotos/treino-cones.jpg` | Metodologia (círculo, ≥ 1200px) | 600x600 (1:1) | `soccer training cones`, `soccer ball grass` | Bola e cones coloridos na grama, close; sem pessoas ou só pés | ≤ 70 KB |
| `fotos/equipe-1.jpg`, `equipe-2.jpg`, `equipe-3.jpg` | Professores | 640x640 (1:1), recorte em círculo | `soccer coach portrait`, `sports coach whistle`, `physical education teacher` | Adultos (2 homens e 1 mulher, ou o inverso), sorrindo, roupa esportiva, ao ar livre, rosto centralizado. **"Substituir antes de publicar"** | ≤ 60 KB cada |
| `fotos/depoimento-1.jpg`, `-2.jpg`, `-3.jpg` | Depoimentos | 240x240 (1:1), recorte em círculo | `parent portrait outdoor`, `mother smiling park`, `father smiling` | Retrato de adulto (mãe/pai), fundo neutro de parque; sem crianças. **"Substituir antes de publicar"** | ≤ 25 KB cada |
| `fotos/og-image.jpg` | `og:image` | 1200x630 | recorte do hero | Recorte do hero com faixa `--verde-900` à esquerda e o logo branco; sem texto pequeno (continua com a foto, não muda com o vídeo) | ≤ 200 KB |

Se faltar foto adequada (principalmente sem rosto nítido), o `gerador-imagens` deve avisar para o orquestrador pedir uma busca extra ao `pesquisador-fontes`.

---

## 8. Checklist de acessibilidade previsto

- [ ] Idioma `lang="pt-BR"`; `<title>` e `meta description` próprios.
- [ ] Link "Pular para o conteúdo" como primeiro item focável, levando ao `<main id="conteudo">`.
- [ ] Marcos: `<header>`, `<nav aria-label="Principal">`, `<main>`, `<footer>`; cada seção com `aria-labelledby` no seu H2.
- [ ] Um único `<h1>` (hero); `<h2>` por seção; `<h3>` em cards, turmas, passos e planos. Sem pular níveis.
- [ ] Todos os pares de cor da §2.2 (AA). Nenhum texto amarelo, verde-400, azul-300 ou coral-300/500 sobre claro. Contraste do hero conferido na captura real (poster + quadros de 0, 8 e 15 s do vídeo, e foto mobile).
- [ ] **Vídeo do hero:** `muted`, sem áudio, `aria-hidden="true"`, `tabindex="-1"`, sem `controls`; botão pausar/reproduzir visível, 48x48, com `aria-label` que alterna "Pausar vídeo de fundo"/"Reproduzir vídeo de fundo", alcançável por teclado e com foco amarelo (WCAG 2.2.2).
- [ ] Vídeo **não** criado com `prefers-reduced-motion: reduce`, `saveData`, conexão 2g ou largura < 900px; mudança para `reduce` em tempo real remove o vídeo.
- [ ] Sem JS ou se o vídeo falhar: poster/foto visíveis, sem botão órfão e sem área vazia.
- [ ] Turmas sempre com **nome + idade + Sub-X em texto** (a cor não é a única forma de identificar a turma).
- [ ] Foco visível em tudo (`--foco-claro` / `--foco-escuro`; anel branco no botão amarelo), nunca encoberto pelo cabeçalho fixo nem pelo botão flutuante (`scroll-padding-top`/`-bottom` e `scroll-margin-top`).
- [ ] Alvos de toque ≥ 44x44 (botões principais 48–60px; botão de mídia 48px; chips de idade 64px; pontos do carrossel com área de 44px).
- [ ] Menu mobile com `aria-expanded`, `aria-controls`, Esc para fechar, foco devolvido ao botão.
- [ ] Carrossel de depoimentos: `aria-roledescription`, rótulos "n de 3", setas no teclado, sem avanço automático, funciona sem JS.
- [ ] FAQ com `<details>/<summary>` nativo.
- [ ] Tabela de horários com `<caption>` e `<th scope>`; no mobile, sem duplicar conteúdo para leitor de tela.
- [ ] Imagens com `alt` útil (definido pelo redator); decorativas (incluindo poster e vídeo) com `alt=""` ou `aria-hidden`. Sem legendas com nome de criança.
- [ ] Links que abrem nova aba (WhatsApp, Maps, Instagram) avisam no texto acessível.
- [ ] Iframe do mapa com `title` (de `dados-negocio.md`) e endereço também em texto.
- [ ] `prefers-reduced-motion: reduce` desliga todas as animações, transforms e o vídeo; animações de interface ≤ 5 s; nada pisca.
- [ ] Conteúdo visível sem JS (reveal, hero, carrossel, FAQ).
- [ ] Zoom de 200% e largura de 320px sem perda de conteúdo nem rolagem horizontal da página.
- [ ] Nenhum formulário coletando dados de criança; conversão só por WhatsApp.
- [ ] Rodapé com "Site de demonstração — dados fictícios" visível e não coberto pelo botão flutuante; créditos incluem o vídeo (Kampus Production, Pexels).
