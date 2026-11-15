# Design: Barbearia Navalha

> Especificação para o `desenvolvedor-frontend` e o `gerador-imagens`. Entradas: `briefing.md` e `pesquisa.md`. Data: 2026-11-14.

---

## 1. Conceito e justificativa

**Conceito em uma frase:** "Brasão clássico em fundo carvão: tipografia serifada grande, um único acento latão e muito respiro."

Justificativa ligada à pesquisa:
- O nicho trabalha com fundo preto ou carvão e **um único acento** metálico quente (pesquisa: resumo executivo e "Riscos"). Aqui o latão `#D4A94F` é o **único** acento. Não há segunda cor de destaque, nem vermelho de poste de barbearia, nem gradiente colorido.
- Ainda não temos fotos. Por isso o centro visual do hero é um **brasão/monograma SVG grande**, como no padrão "Master Barbers LA": a tipografia e o brasão carregam a marca.
- Os serviços com preço vêm logo depois do hero (padrão "Ironside & Crowe"), e o botão "Agendar" fica sempre visível no cabeçalho fixo.
- A headline cita a cidade ("no Centro de São Paulo"), na linha do padrão "Imperium".
- **Gesto visual forte (um só):** o título do hero em Playfair Display muito grande, ao lado do brasão em traço latão. Nada de texturas, ruído, madeira ou ornamentos em excesso (risco "clichês vintage" da pesquisa). O único ornamento repetido é um filete fino com uma pequena navalha/losango no centro, usado como divisor sob os títulos das seções.

---

## 2. Tokens

### 2.1 Cores

| Token | Hex | Uso |
|---|---|---|
| `--color-bg` | `#141414` | Fundo da página (carvão) |
| `--color-surface` | `#1E1E1E` | Fundo de cards, seções alternadas e cabeçalho com scroll |
| `--color-border` | `#2E2E2E` | Divisórias e bordas **decorativas** de cards (não precisa de 3:1) |
| `--color-border-strong` | `#7A7368` | Bordas que identificam componentes (botão secundário, campos), precisam de 3:1 |
| `--color-text` | `#F2EDE4` | Texto principal (off-white quente) |
| `--color-text-muted` | `#B5ADA1` | Texto secundário, descrições, legendas |
| `--color-accent` | `#D4A94F` | **Único acento (latão).** Botão primário, preços, eyebrows, ícones, foco, links |
| `--color-accent-hover` | `#E2BE6E` | Hover/active do botão primário e dos links |
| `--color-on-accent` | `#141414` | Texto sobre o latão (botão primário) |
| `--color-disabled-bg` | `#2E2E2E` | Fundo de botão desabilitado |
| `--color-disabled-text` | `#8A847B` | Texto desabilitado (WCAG isenta componentes inativos, mas mantemos legível) |

**Contrastes verificados** (cálculo pela fórmula de luminância relativa do WCAG 2.x, arredondado; conferir no WebAIM ao implementar):

| Par (frente / fundo) | Razão | Mínimo | Resultado |
|---|---|---|---|
| Texto `#F2EDE4` / bg `#141414` | ~15,8:1 | 4,5:1 | Passa AA/AAA |
| Texto `#F2EDE4` / surface `#1E1E1E` | ~14,3:1 | 4,5:1 | Passa AA/AAA |
| Muted `#B5ADA1` / bg `#141414` | ~8,3:1 | 4,5:1 | Passa AA/AAA |
| Muted `#B5ADA1` / surface `#1E1E1E` | ~7,5:1 | 4,5:1 | Passa AA/AAA |
| Latão `#D4A94F` / bg `#141414` (texto pequeno, preços, links) | ~8,4:1 | 4,5:1 | Passa AA/AAA |
| Latão `#D4A94F` / surface `#1E1E1E` | ~7,6:1 | 4,5:1 | Passa AA/AAA |
| Texto `#141414` / botão `#D4A94F` | ~8,4:1 | 4,5:1 | Passa AA/AAA |
| Texto `#141414` / botão hover `#E2BE6E` | ~10,4:1 | 4,5:1 | Passa AA/AAA |
| Borda forte `#7A7368` / bg `#141414` | ~3,9:1 | 3:1 (UI) | Passa |
| Borda forte `#7A7368` / surface `#1E1E1E` | ~3,6:1 | 3:1 (UI) | Passa |
| Anel de foco `#D4A94F` / bg ou surface | 7,6 a 8,4:1 | 3:1 | Passa |

Sobre o risco do "dourado sobre carvão": o latão escolhido é claro o bastante (luminância ~0,43) para passar até em texto pequeno. **Não escurecer o acento** (ex.: `#9C7A2E` ficaria perto de 4,5:1 e reprovaria em alguns pares). **Proibido:** texto off-white sobre o latão (~2:1, reprova) e texto latão sobre off-white.

### 2.2 Tipografia (Google Fonts, 2 famílias)

- **Títulos:** Playfair Display, pesos **600** e **700** (sem itálico, para carregar menos).
- **Texto e interface:** Inter, pesos **400** e **600**.
- Carregar com `<link rel="preconnect">` para `fonts.googleapis.com` e `fonts.gstatic.com` (com `crossorigin`) e `display=swap`. URL sugerida:
  `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@600;700&display=swap`
- Fallbacks: `Georgia, "Times New Roman", serif` / `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

| Token | Valor (fluido) | Família / peso | line-height | Uso |
|---|---|---|---|---|
| `--fs-display` | `clamp(2.5rem, 1.6rem + 4.5vw, 4.5rem)` | Playfair 700 | 1.05 | H1 do hero |
| `--fs-h2` | `clamp(2rem, 1.5rem + 2.5vw, 3rem)` | Playfair 700 | 1.15 | Títulos de seção |
| `--fs-h3` | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` | Playfair 600 | 1.25 | Títulos de card, nomes |
| `--fs-lead` | `clamp(1.125rem, 1rem + 0.5vw, 1.3125rem)` | Inter 400 | 1.6 | Subtítulo do hero e intro de seção |
| `--fs-body` | `1.0625rem` (17px) | Inter 400 | 1.65 | Texto corrido |
| `--fs-small` | `0.875rem` (14px) | Inter 400 | 1.5 | Legendas, rodapé, nota "exemplo" |
| `--fs-eyebrow` | `0.8125rem` (13px) | Inter 600, MAIÚSCULAS, `letter-spacing: 0.16em` | 1.4 | Rótulo acima do H2, cor latão |
| `--fs-price` | `1.5rem` | Playfair 700 | 1 | Preço nos cards de serviço, cor latão |
| Botões | `1rem` | Inter 600, `letter-spacing: 0.02em` | 1 | Todos os botões |

Largura máxima de parágrafo: `65ch`. Títulos com `text-wrap: balance`.

### 2.3 Espaçamento (base 4px)

`--space-1: 4px` · `--space-2: 8px` · `--space-3: 12px` · `--space-4: 16px` · `--space-5: 24px` · `--space-6: 32px` · `--space-7: 48px` · `--space-8: 64px` · `--space-9: 96px` · `--space-10: 128px`

- Padding vertical das seções: `--section-y: clamp(64px, 8vw, 128px)`.
- Padding lateral do container: `--gutter: clamp(20px, 5vw, 40px)`.
- Container: `max-width: 1120px; margin-inline: auto`.
- Gap das grades: `--space-5` (mobile) e `--space-6` (≥900px).

### 2.4 Raios

`--radius-sm: 4px` (tags, badges) · `--radius-md: 8px` (botões, cards) · `--radius-lg: 16px` (bloco do mapa, CTA final) · `--radius-full: 999px` (avatares).
Cantos discretos: o clássico pede ângulos quase retos.

### 2.5 Sombras

O tema escuro se apoia em borda e superfície, não em sombra.
- `--shadow-card: 0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.35)` (cards no hover)
- `--shadow-header: 0 1px 0 #2E2E2E` (cabeçalho depois do scroll)

### 2.6 Movimento

- `--ease: cubic-bezier(0.2, 0.7, 0.2, 1)` · `--dur-fast: 150ms` · `--dur: 250ms` · `--dur-reveal: 500ms`.
- Revelação ao rolar: opacidade 0 a 1 e `translateY(16px)` para 0, uma vez por elemento (IntersectionObserver). **Só dentro de `@media (prefers-reduced-motion: no-preference)`.** Sem JS ou com `reduce`, o conteúdo aparece visível desde o início. Nunca esconda conteúdo por padrão no CSS sem a classe adicionada pelo JS.
- `scroll-behavior: smooth` só com `no-preference`.

### 2.7 Bloco `:root` pronto para copiar

```css
:root {
  /* Cores */
  --color-bg: #141414;
  --color-surface: #1E1E1E;
  --color-border: #2E2E2E;
  --color-border-strong: #7A7368;
  --color-text: #F2EDE4;
  --color-text-muted: #B5ADA1;
  --color-accent: #D4A94F;
  --color-accent-hover: #E2BE6E;
  --color-on-accent: #141414;
  --color-disabled-bg: #2E2E2E;
  --color-disabled-text: #8A847B;

  /* Tipografia */
  --font-display: "Playfair Display", Georgia, "Times New Roman", serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-display: clamp(2.5rem, 1.6rem + 4.5vw, 4.5rem);
  --fs-h2: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --fs-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --fs-lead: clamp(1.125rem, 1rem + 0.5vw, 1.3125rem);
  --fs-body: 1.0625rem;
  --fs-small: 0.875rem;
  --fs-eyebrow: 0.8125rem;
  --fs-price: 1.5rem;

  /* Espaçamento */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
  --section-y: clamp(64px, 8vw, 128px);
  --gutter: clamp(20px, 5vw, 40px);
  --container: 1120px;
  --header-h: 64px; /* 72px a partir de 900px */

  /* Raios */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 999px;

  /* Sombras */
  --shadow-card: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 8px 24px rgba(0, 0, 0, 0.35);
  --shadow-header: 0 1px 0 #2E2E2E;

  /* Movimento */
  --ease: cubic-bezier(0.2, 0.7, 0.2, 1);
  --dur-fast: 150ms;
  --dur: 250ms;
  --dur-reveal: 500ms;

  /* Foco */
  --focus-ring: 2px solid var(--color-accent);
  --focus-offset: 3px;
}

@media (min-width: 900px) {
  :root { --header-h: 72px; }
}

html { scroll-padding-top: calc(var(--header-h) + 16px); }
```

---

## 3. Link de agendamento (WhatsApp)

**Todos** os botões "Agendar" apontam para o mesmo link (definir uma vez e reutilizar):

```
https://wa.me/5511900000000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Navalha.
```

- Número no formato internacional: `55` + `11` + `900000000`, **sem** `+`, parênteses, espaços ou traços. Uma barra só depois de `wa.me`.
- Mensagem decodificada: "Olá! Gostaria de agendar um horário na Barbearia Navalha." (`á` = `%C3%A1`, espaço = `%20`). Se gerar por JS, usar `encodeURIComponent`.
- Atributos: `target="_blank" rel="noopener"`. O texto acessível deve deixar claro o destino, por exemplo "Agendar pelo WhatsApp" (ou um `aria-label` com essa frase quando o texto visível for só "Agendar"). Indicar "abre em nova aba" com texto visualmente oculto.
- **Copy:** nunca prometer "agendamento confirmado". Usar "Fale com a gente no WhatsApp e escolha seu horário" e, perto do CTA final, a microcopy "Você será levado ao WhatsApp com uma mensagem pronta. É só enviar."
- Número exibido em texto (rodapé/horários): `(11) 90000-0000`, com `tel:+5511900000000` como link secundário. No `tel:`, o `+` é correto.

---

## 4. Estrutura da página (ordem)

Ritmo de fundo: as seções alternam `--color-bg` e `--color-surface` para separar blocos sem precisar de linhas. A ordem: Hero (bg), Serviços (surface), Sobre (bg), Equipe (surface), Depoimentos (bg), Horários (surface), CTA final (bg, com bloco destacado), Rodapé (surface).

Padrão de cabeçalho de seção (todas exceto o hero): eyebrow latão, depois o H2, depois o divisor-ornamento SVG (`assets/divisor.svg`, 96x12, latão), depois o parágrafo lead em muted (opcional), max 60ch. Alinhamento centralizado no mobile e no desktop (seções Sobre e Horários: à esquerda no desktop).

### 4.0 Link "Pular para o conteúdo"
Primeiro elemento focável, visualmente oculto até receber foco. No foco aparece no topo à esquerda: fundo latão, texto `#141414`, padding 12px 16px, `z-index` acima do header.

### 4.1 Cabeçalho (`<header>`, fixo)
- **Objetivo:** navegação e agendamento sempre à mão.
- **Layout:** `position: sticky; top: 0`, altura `--header-h`. Container flex: logo à esquerda, nav no centro/direita, botão "Agendar" à direita.
- **Estado inicial:** fundo `rgba(20,20,20,0.85)` com `backdrop-filter: blur(8px)` (fallback `--color-bg` sólido). Depois de rolar 8px: fundo `--color-surface` e `--shadow-header` (classe via JS).
- **Logo:** `assets/logo-navalha.svg` (horizontal: monograma + "NAVALHA"), altura 32px no mobile e 36px no desktop, dentro de um link para `#inicio` com `aria-label="Barbearia Navalha, início"`.
- **Nav (≥900px):** links Serviços, Sobre, Equipe, Depoimentos, Contato. Inter 600, 0.9375rem, cor `--color-text`, padding 12px 8px (alvo ≥44px de altura), gap 24px. Hover/ativo: cor latão + sublinhado de 2px latão com `text-underline-offset: 6px`. Link da seção atual com `aria-current="true"` (opcional, via IntersectionObserver).
- **Mobile (<900px):** botão hambúrguer 44x44 (`assets/icones/menu.svg` / `fechar.svg`, 24px, cor `--color-text`) com `aria-expanded`, `aria-controls="menu"` e `aria-label="Abrir menu"`/"Fechar menu". O botão "Agendar" compacto (padding 10px 16px, min-height 44px) fica visível ao lado do hambúrguer em todas as larguras ≥360px. Menu aberto: painel em tela cheia abaixo do header, fundo `--color-bg`, links empilhados em Playfair 600 1.75rem, 56px de altura cada, borda inferior `--color-border`. Esc fecha o menu e devolve o foco ao hambúrguer. Clicar num link fecha o menu. Bloquear o scroll do body enquanto o menu está aberto.

### 4.2 Hero (`#inicio`)
- **Objetivo:** mensagem forte e CTA de agendamento acima da dobra.
- **Conteúdo (copy de exemplo):**
  - Eyebrow: "BARBEARIA CLÁSSICA · CENTRO DE SÃO PAULO"
  - H1: "Corte preciso. Barba na navalha. Tempo para você."
  - Lead: "Atendimento sem pressa, toalha quente e acabamento feito à mão, na Rua das Palmeiras, no Centro de São Paulo."
  - Botão primário: "Agendar pelo WhatsApp" (ícone WhatsApp 20px à esquerda)
  - Botão secundário (ghost): "Ver serviços e preços" para `#servicos`
  - Linha de apoio (small, muted), com ícone de relógio: "Ter a Sex 9h às 20h · Sáb 8h às 18h"
- **Layout mobile:** uma coluna, centralizada. Brasão `assets/brasao-hero.svg` no topo (largura 160px), depois o texto. Botões empilhados com largura 100% (máx. 360px), gap 12px. Padding top `calc(var(--header-h) + 48px)`, bottom 64px. Altura mínima `min(100svh, 760px)`.
- **Layout ≥900px:** grade 2 colunas `7fr 5fr`, alinhamento vertical central. Texto à esquerda e alinhado à esquerda. Brasão à direita, com largura até 420px. Botões lado a lado.
- **Fundo:** `--color-bg` com um brilho radial muito sutil atrás do brasão: `radial-gradient(circle at 70% 45%, rgba(212,169,79,0.10), transparent 55%)`. É o único "gradiente" do site e não afeta o contraste do texto (texto sempre sobre ~`#141414`).
- **Animação (no-preference):** o traço do brasão se desenha uma vez (`stroke-dashoffset`, 1200ms) e o texto faz fade-in em sequência (100ms entre os itens). Com `reduce`: estático.
- **Foto futura:** quando houver foto real (ver imagens), ela substitui o brasão na coluna direita com `aspect-ratio: 4/5`, `--radius-lg` e borda de 1px latão a 40% de opacidade. Não colocar foto atrás do texto.

### 4.3 Serviços (`#servicos`)
- **Objetivo:** mostrar preço e duração sem precisar perguntar.
- **Cabeçalho:** eyebrow "SERVIÇOS" · H2 "Serviços e preços" · lead "Valores fixos, sem surpresa no final."
- **Conteúdo (preços de exemplo):**
  | Serviço | Descrição | Duração | Preço |
  |---|---|---|---|
  | Corte | Tesoura e máquina, lavagem e finalização com pomada. | 45 min | R$ 55 |
  | Barba | Toalha quente, navalha e balm hidratante. | 30 min | R$ 40 |
  | Corte + Barba | O ritual completo, com preço de combo. | 75 min | R$ 85 |
  | Pigmentação | Preenche falhas na barba ou no cabelo com acabamento natural. | 30 min | R$ 35 |
  | Sobrancelha | Alinhamento na navalha ou na pinça. | 15 min | R$ 20 |
- **Componente:** card de serviço (seção 5.3). "Corte + Barba" recebe o badge "Mais pedido" (latão em contorno, ver 5.3) e borda de 1px latão.
- **Layout:** mobile, 1 coluna; ≥600px, 2 colunas; ≥900px, 3 colunas (5 cards: o último linha fica com 2 cards, centralizados via `justify-content: center` em grid com `grid-template-columns: repeat(auto-fit, minmax(280px, 340px))`).
- Abaixo da grade, centralizado: botão primário "Agendar pelo WhatsApp" + small muted "Formas de pagamento: Pix, débito e crédito."
- Semântica: lista `<ul>` de cards; preço com texto real ("R$ 55"), não imagem.

### 4.4 Sobre / Diferenciais (`#sobre`)
- **Objetivo:** transmitir a experiência (ambiente, profissionais, produtos).
- **Cabeçalho:** eyebrow "A CASA" · H2 "Clássico no ritual, moderno no resultado." · parágrafo (2 a 3 frases): "A Navalha nasceu para devolver ao homem o tempo da barbearia de verdade: conversa boa, cadeira confortável e um trabalho feito com calma. Aqui cada detalhe é pensado para você sair melhor do que entrou."
- **Diferenciais (3 itens), com ícone em linha latão 40px:**
  1. Ícone `ambiente.svg` · "Ambiente acolhedor" · "Café, música boa e cadeiras clássicas restauradas."
  2. Ícone `profissionais.svg` · "Barbeiros experientes" · "Equipe com formação contínua em cortes clássicos e atuais."
  3. Ícone `produtos.svg` · "Produtos selecionados" · "Pomadas, óleos e balms de qualidade, que você também leva para casa."
- **Layout mobile:** texto e depois os 3 itens empilhados (ícone acima do título, alinhados à esquerda, gap 32px).
- **Layout ≥900px:** 2 colunas `5fr 7fr`. Texto à esquerda; à direita, os 3 diferenciais em lista vertical, cada um com ícone à esquerda (grid `48px 1fr`) e separados por `--color-border`.
- Sem cards aqui (para variar o ritmo).

### 4.5 Equipe (`#equipe`)
- **Objetivo:** humanizar e gerar confiança.
- **Cabeçalho:** eyebrow "EQUIPE" · H2 "Quem cuida de você"
- **Conteúdo (nomes fictícios):**
  - Rafael Moreira · "Fundador e barbeiro" · "Especialista em degradê e cortes clássicos."
  - Diego Santos · "Barbeiro" · "Barba na navalha e desenho de contorno."
  - Lucas Almeida · "Barbeiro" · "Cortes texturizados e pigmentação."
- **Componente:** card de equipe (5.4) com avatar `assets/equipe/barbeiro-1.svg` (2 e 3), um placeholder ilustrado de silhueta.
- **Layout:** mobile, 1 coluna (cards horizontais: avatar 88px à esquerda e texto à direita); ≥600px, 3 colunas com o card vertical (avatar 160px no topo, centralizado).
- Link para o Instagram de cada um: **não** incluir (dados inexistentes).

### 4.6 Depoimentos (`#depoimentos`)
- **Objetivo:** prova social. **Os depoimentos são fictícios e devem estar marcados como exemplo.**
- **Cabeçalho:** eyebrow "DEPOIMENTOS" · H2 "O que dizem nossos clientes"
- **Marcação obrigatória de exemplo:** logo abaixo do H2, um aviso em `--fs-small`, cor muted, com ícone de info: "Depoimentos ilustrativos (exemplo). Serão substituídos por avaliações reais de clientes." E em cada card, um badge "Exemplo" no canto superior direito (estilo badge neutro, 5.3). No HTML, comentário `<!-- EXEMPLO: substituir por depoimento real -->` em cada card.
- **Conteúdo:**
  1. "Melhor barba que já fiz. A toalha quente faz toda a diferença." · Marcelo T. · Cliente desde 2024
  2. "Atendimento pontual e um corte que dura. Virei cliente fixo." · André P. · Cliente desde 2025
  3. "Ambiente tranquilo, gente boa e acabamento impecável." · Felipe R. · Cliente desde 2025
- **Componente:** card de depoimento (5.5): `<figure>` com `<blockquote>` e `<figcaption>`. Sem estrelas (evita simular avaliação pública).
- **Layout:** mobile, 1 coluna; ≥900px, 3 colunas. Sem carrossel (mais simples e acessível).

### 4.7 Horários e localização (`#contato`)
- **Objetivo:** dizer quando e onde, sem atrito.
- **Cabeçalho:** eyebrow "VISITE" · H2 "Horários e localização"
- **Coluna de informações:**
  - Endereço (ícone pin): "Rua das Palmeiras, 120, Centro, São Paulo/SP" em `<address>`.
  - Tabela de horários (`<table>` com `<caption>` visualmente oculto "Horário de funcionamento"):
    | Dia | Horário |
    |---|---|
    | Terça a sexta | 9h às 20h |
    | Sábado | 8h às 18h |
    | Domingo e segunda | Fechado |
    Linhas com borda inferior `--color-border`, padding 12px 0. "Fechado" em muted. Dia à esquerda e horário à direita (`text-align: right`).
  - WhatsApp (ícone): link `tel:` "(11) 90000-0000" e botão primário "Agendar pelo WhatsApp".
  - Link "Como chegar" (estilo link) para `https://www.google.com/maps/search/?api=1&query=Rua%20das%20Palmeiras%2C%20120%2C%20S%C3%A3o%20Paulo` com `target="_blank" rel="noopener"`. Endereço fictício: deixar um comentário de pendência no HTML.
- **Mapa:** imagem `assets/mapa-placeholder.svg` (16:10), `--radius-lg`, borda `--color-border`, `alt="Mapa ilustrativo da região da Rua das Palmeiras, 120, Centro, São Paulo"`. Sem iframe do Google Maps (privacidade, peso e nada externo).
- **Layout:** mobile, informações e depois o mapa; ≥900px, 2 colunas `5fr 7fr` (informações à esquerda, mapa à direita).

### 4.8 CTA final (`#agendar`)
- **Objetivo:** última chance de conversão.
- **Layout:** bloco centralizado dentro do container, com fundo `--color-surface`, borda de 1px `--color-accent` a 35% de opacidade (`rgba(212,169,79,0.35)`, decorativa), `--radius-lg`, padding `--space-8` (mobile `--space-7` `--space-5`). Monograma `assets/monograma.svg` de 56px no topo.
- **Copy:** H2 "Sua cadeira está esperando." · lead "Fale com a gente no WhatsApp e escolha o melhor horário." · botão primário grande (min-height 56px, padding 18px 32px) "Agendar pelo WhatsApp" · microcopy small muted "Você será levado ao WhatsApp com uma mensagem pronta. É só enviar."

### 4.9 Rodapé (`<footer>`)
- **Layout mobile:** empilhado e centralizado: logo (28px), frase curta muted "Barbearia clássica no Centro de São Paulo.", ícones sociais, contato e copyright.
- **≥900px:** 3 colunas: (logo + frase) | (Contato: endereço, telefone, horários resumidos) | (Redes: Instagram, WhatsApp).
- **Redes:** links de ícone 44x44 (ícone 24px, cor `--color-text`, hover latão), com `aria-label` "Instagram da Barbearia Navalha (@barbearianavalha)" para `https://www.instagram.com/barbearianavalha/` e "WhatsApp da Barbearia Navalha" para o link wa.me.
- Linha final separada por `--color-border`: "© 2026 Barbearia Navalha. Site de demonstração com dados fictícios." em small muted.

---

## 5. Componentes

Regra geral de foco para **todos** os elementos interativos: `:focus-visible { outline: var(--focus-ring); outline-offset: var(--focus-offset); }`. Nunca `outline: none` sem substituto. Em botões latão, o offset de 3px garante que o anel fique sobre o carvão (8,4:1).

### 5.1 Botão primário (`.btn--primary`)
- Fundo `--color-accent`, texto `--color-on-accent`, Inter 600 1rem, padding 14px 24px, `min-height: 48px`, `--radius-md`, `display: inline-flex; gap: 10px; align-items: center`. Ícone de 20px herdando `currentColor`.
- **Hover:** fundo `--color-accent-hover`, `translateY(-1px)` (só no-preference), transição `--dur-fast`.
- **Active:** `translateY(0)`, fundo `--color-accent-hover`.
- **Foco:** anel latão de 2px, offset 3px.
- **Desabilitado** (`[disabled]`/`aria-disabled="true"`): fundo `--color-disabled-bg`, texto `--color-disabled-text`, `cursor: not-allowed`, sem hover. (Não deve haver nenhum desabilitado na versão atual.)
- Variante compacta (header): padding 10px 16px, `min-height: 44px`, fonte 0.9375rem.

### 5.2 Botão secundário (`.btn--ghost`)
- Fundo transparente, borda 1px `--color-border-strong` (3,9:1), texto `--color-text`, mesmas dimensões do primário.
- **Hover:** borda e texto `--color-accent`.
- **Foco:** anel latão.
- **Desabilitado:** borda `--color-border`, texto `--color-disabled-text`.

### 5.3 Card de serviço (`.card-servico`) e badges
- Fundo `--color-bg` (a seção é surface), borda 1px `--color-border`, `--radius-md`, padding `--space-5` (≥900px `--space-6`).
- Estrutura: linha superior com o nome (H3) à esquerda e o preço à direita (`--fs-price`, latão), alinhados pela base. Depois a descrição (muted, body). No rodapé do card, a duração com ícone relógio 16px (small, muted).
- **Hover** (só em dispositivos com `hover: hover`): borda `--color-border-strong`, `--shadow-card`. O card não é clicável e não recebe foco.
- **Destaque:** borda 1px `--color-accent` + badge.
- **Badge "Mais pedido":** Inter 600, 0.75rem, maiúsculas, `letter-spacing: 0.1em`, texto latão, borda 1px latão, fundo transparente, padding 4px 8px, `--radius-sm`.
- **Badge "Exemplo"** (depoimentos): mesmo formato, texto `--color-text-muted`, borda `--color-border-strong`. É neutro de propósito, para não competir com o acento.

### 5.4 Card de equipe (`.card-equipe`)
- Fundo `--color-bg`, borda `--color-border`, `--radius-md`, padding `--space-5`.
- Avatar circular (`--radius-full`) com borda 2px latão e `alt=""` (decorativo: o nome está no texto ao lado). Nome em H3, função em eyebrow-style (latão, 0.75rem), especialidade em muted.

### 5.5 Card de depoimento (`.card-depoimento`)
- Fundo `--color-surface`, borda `--color-border`, `--radius-md`, padding `--space-6`, `position: relative` (para o badge "Exemplo" no topo direito, a 16px das bordas).
- Aspas decorativas: caractere "“" em Playfair 700, 4rem, latão, `aria-hidden="true"`, no topo.
- Citação em Inter 400 1.0625rem, cor `--color-text`, itálico **não** (Inter sem itálico carregado).
- `figcaption`: nome em Inter 600 e linha "Cliente desde..." em small muted.

### 5.6 Navegação
Ver 4.1. Estados dos links: normal `--color-text`; hover/ativo, latão + sublinhado de 2px; foco, anel latão; atual, `aria-current` + sublinhado fixo.

### 5.7 Links em texto
Cor latão, sublinhado `text-decoration-thickness: 1px; text-underline-offset: 3px`. Hover: `--color-accent-hover` e sublinhado de 2px. Foco: anel. Links externos com ícone de seta 14px `aria-hidden` + texto oculto "(abre em nova aba)".

### 5.8 Formulários
**Não há formulário nesta versão** (agendamento via WhatsApp). Caso seja adicionado no futuro: campo com fundo `--color-bg`, borda 1px `--color-border-strong` (3,9:1), texto `--color-text`, label visível acima (Inter 600 0.875rem), altura 48px, `--radius-md`; foco com borda latão + anel; desabilitado com fundo `--color-surface` e texto `--color-disabled-text`; erro com texto e ícone (não só cor) e `aria-describedby`.

### 5.9 Ícones
SVG inline ou `<img>`, traço de 1.5px, `stroke="currentColor"`, cantos arredondados. Decorativos com `aria-hidden="true"`. Cor padrão latão nos diferenciais e `--color-text` nos utilitários (menu, redes).

---

## 6. Breakpoints e comportamento mobile

Mobile first. Media queries com `min-width`:

| Nome | Faixa | Mudanças principais |
|---|---|---|
| base | 0 a 599px | 1 coluna; hambúrguer; botões do hero com largura total; equipe em cards horizontais |
| `sm` | ≥600px | Serviços 2 col.; equipe 3 col. verticais |
| `md` | ≥900px | Nav visível, sem hambúrguer; header 72px; hero 2 col.; serviços 3 col.; Sobre, Horários e rodapé 2 a 3 col.; depoimentos 3 col. |
| `lg` | ≥1200px | Só respiro: container fixo em 1120px, gaps de 32px |

- Testar em 360px (o menor): logo, botão "Agendar" compacto e hambúrguer devem caber na mesma linha. Se não couberem, abaixo de 360px esconder o texto "NAVALHA" do logo e manter só o monograma.
- Sem rolagem horizontal em nenhuma largura. Imagens com `max-width: 100%; height: auto` e `width`/`height` declarados para evitar CLS.
- Alvos de toque ≥44x44 em todos os links de nav, ícones sociais, hambúrguer e botões; ≥8px entre alvos adjacentes.
- `scroll-padding-top` garante que as âncoras e o foco não fiquem sob o header fixo (WCAG 2.4.11).

---

## 7. Pedidos de imagem (para o `gerador-imagens`, que registra em `imagens.md`)

Todos os SVG: paleta restrita a latão `#D4A94F`, off-white `#F2EDE4` e carvão `#141414`/`#1E1E1E`; traço limpo, sem texturas nem gradientes complexos; otimizados (sem metadados), com `viewBox` e sem dimensões fixas desnecessárias. Os SVGs com significado precisam de `<title>`.

| # | Arquivo | Tipo | Tamanho / proporção | Descrição / prompt |
|---|---|---|---|---|
| 1 | `assets/logo-navalha.svg` | SVG | viewBox ~200x40 (5:1) | Logotipo horizontal: monograma "N" dentro de um escudo simples + palavra "NAVALHA" em serifada de alto contraste (desenhar em paths, não depender da fonte). Latão no monograma, off-white no texto. |
| 2 | `assets/monograma.svg` | SVG | 1:1, viewBox 64x64 | Só o escudo com "N" e uma pequena navalha diagonal. Latão. Usado no CTA final e de base para o favicon. |
| 3 | `assets/favicon.svg` | SVG | 1:1, 32x32 | Monograma simplificado, latão sobre fundo carvão `#141414` com cantos 6px. Legível em 16px. |
| 4 | `assets/brasao-hero.svg` | SVG | 1:1, viewBox 400x400 | Brasão de barbearia em traço latão (stroke 2px, sem preenchimento sólido): escudo, navalha e tesoura cruzadas, faixa com "BARBEARIA NAVALHA", "EST. 2026" e "SÃO PAULO". Linhas desenhadas como paths com stroke (para a animação de `stroke-dashoffset`). Com `<title>Brasão da Barbearia Navalha</title>`. |
| 5 | `assets/divisor.svg` | SVG | 8:1, viewBox 96x12 | Filete fino horizontal latão com um pequeno losango (ou navalha mínima) no centro. Decorativo. |
| 6 | `assets/icones/ambiente.svg` | SVG ícone | 24x24 viewBox, stroke 1.5 | Poltrona de barbeiro clássica em linha. |
| 7 | `assets/icones/profissionais.svg` | SVG ícone | 24x24 | Tesoura e pente em linha. |
| 8 | `assets/icones/produtos.svg` | SVG ícone | 24x24 | Frasco/pote de pomada em linha. |
| 9 | `assets/icones/relogio.svg`, `pin.svg`, `telefone.svg`, `info.svg`, `seta-externa.svg`, `menu.svg`, `fechar.svg` | SVG ícones | 24x24, `currentColor` | Utilitários em linha, mesmo estilo. |
| 10 | `assets/icones/whatsapp.svg`, `instagram.svg` | SVG ícones | 24x24, `currentColor` | Símbolos das marcas simplificados e monocromáticos (uso permitido para links de perfil). |
| 11 | `assets/equipe/barbeiro-1.svg`, `barbeiro-2.svg`, `barbeiro-3.svg` | SVG | 1:1, viewBox 160x160 | Avatares placeholder: silhueta de busto masculino estilizada em off-white a 70% sobre fundo `#1E1E1E`, cada um com um detalhe diferente (barba cheia, cabelo com topete, boné/coque) para distinguir. Sem rosto detalhado. |
| 12 | `assets/mapa-placeholder.svg` | SVG | 16:10, viewBox 800x500 | Mapa ilustrativo abstrato: quarteirões em `#1E1E1E`, ruas em `#2E2E2E`, uma rua nomeada "R. das Palmeiras" em off-white muted, pino latão no centro. Fundo `#141414`. Deixar claro que é ilustrativo (sem marcas do Google). |

**Fotografias pendentes** (não geradas pelo time; só registrar os prompts em `imagens.md` para ferramenta externa ou fotos reais do cliente):

| # | Arquivo futuro | Proporção / tamanho | Prompt sugerido |
|---|---|---|---|
| F1 | `assets/fotos/hero.jpg` | 4:5, 1200x1500 (+ versão 800w) | "Barbeiro aplicando toalha quente em cliente numa barbearia clássica e moderna, luz quente lateral, tons carvão e latão, profundidade de campo rasa, fotografia editorial, sem texto, sem logotipos" |
| F2 | `assets/fotos/ambiente.jpg` | 3:2, 1600x1067 | "Interior de barbearia com poltronas clássicas de couro escuro, espelhos com moldura de latão, iluminação quente, ambiente limpo e minimalista, fotografia de arquitetura" |
| F3 | `assets/fotos/barbeiro-1.jpg` a `-3.jpg` | 1:1, 640x640 | "Retrato de barbeiro brasileiro de 25 a 40 anos, avental escuro, fundo carvão desfocado, luz suave quente, expressão confiante e acolhedora" (fotos reais da equipe são preferíveis) |

Formato final das fotos: WebP + JPG de fallback, `loading="lazy"` (exceto o hero), `alt` descritivo.

---

## 8. Checklist de acessibilidade previsto

- [ ] Todos os pares de cor da seção 2.1 aplicados conforme a tabela (texto ≥4,5:1; UI e texto grande ≥3:1). Nenhum texto off-white sobre latão.
- [ ] `lang="pt-BR"`, `<title>` e meta description.
- [ ] Link "Pular para o conteúdo" funcional; `<main id="conteudo">`.
- [ ] Landmarks: `header`, `nav` (com `aria-label="Principal"`), `main`, `footer`; um único `h1`; H2 por seção, H3 nos cards, sem pular níveis.
- [ ] Foco visível em todos os interativos (anel latão 2px, offset 3px); ordem de foco igual à ordem visual.
- [ ] `scroll-padding-top` evita que o header fixo cubra âncoras e foco (2.4.11).
- [ ] Alvos de toque ≥44x44 (mínimo absoluto 24x24, 2.5.8).
- [ ] Menu mobile: `aria-expanded`, `aria-controls`, Esc fecha, foco volta ao botão; operável só pelo teclado.
- [ ] Links do WhatsApp com texto acessível "Agendar pelo WhatsApp" e aviso de nova aba; link wa.me exatamente como na seção 3.
- [ ] Ícones decorativos com `aria-hidden="true"`; brasão e mapa com `alt`/`<title>` significativos; avatares com `alt=""` (nome no texto).
- [ ] Endereço e horários em texto (não só no mapa); tabela de horários com `caption` e `th scope`.
- [ ] Depoimentos marcados como exemplo (aviso visível + badge em cada card + comentário no HTML).
- [ ] `prefers-reduced-motion: reduce` desliga revelação, desenho do brasão, smooth scroll e translate nos hovers; o conteúdo continua visível sem JS.
- [ ] Zoom de 200% e largura de 320px sem perda de conteúdo nem rolagem horizontal (1.4.10).
- [ ] Informação nunca transmitida só pela cor (badge com texto, "Fechado" escrito).
- [ ] Copy não promete "agendamento confirmado".
