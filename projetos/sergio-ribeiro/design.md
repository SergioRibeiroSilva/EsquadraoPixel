# Design: Sergio Ribeiro, "Influenciador de Esperança"

> Especificação do designer-ui, 2026-11-17. Entradas: `briefing.md`, `pesquisa.md` e `dados-negocio.md` (PROVISÓRIO).
> Este arquivo não traz HTML de produção. Os textos finais vêm do `conteudo.md` (redator). Os exemplos de texto abaixo servem só para dimensionar o layout.

---

## 1. Conceito

**Em uma frase:** "luz da manhã": editorial acolhedor em creme e azul-profundo, com a margarida 🌼 como único gesto gráfico e o amarelo-sol só como acento.

**Por quê (ligação com a pesquisa):**
- **Margarida e "novas são cada manhã" (Lm 3.23).** A bio usa a 🌼 como assinatura. A margarida vira o grafismo da marca (SVG próprio, abre e gira uma única vez no hero), e a luz de manhã aparece na foto do hero. O resultado é esperança sem clichê religioso pesado.
- **Fraunces + Inter** (pesquisa 2.2). A serifa suave (eixo SOFT em 100) dá calor e tom devocional. A Inter faz a ponte com a carreira em tecnologia e garante leitura em tela.
- **Azul-profundo + amarelo-margarida + creme** (pesquisa 2.3). Paleta de 2 cores e neutros, com fundos claros e escuros alternados entre seções (padrão de sites de igreja, pesquisa seção 1). O amarelo **nunca** é cor de texto sobre fundo claro.
- **Gesto visual forte:** título enorme em Fraunces, foto do hero recortada em **arco** (uma "janela de luz") e a margarida sobreposta ao canto do arco. Fora isso, contenção: sem vídeo, sem parallax, sem gradientes chamativos.
- **Um CTA dominante:** "Fale comigo" (WhatsApp), repetido no hero, no fim do Sobre e no Contato, mais o secundário "Siga no Instagram" em estilo contorno (pesquisa 2.1, padrão de nickvujicic.com).
- **Frentes de atuação** (Ministério, Tecnologia, Pontes) numeradas 01/02/03 em blocos alternados (zigue-zague), seguindo o padrão "frentes em cards/blocos" da pesquisa sem virar uma grade genérica.

---

## 2. Tokens

### 2.1 Cores

Luminâncias relativas calculadas pela fórmula WCAG 2.x (cálculo próprio do designer; o avaliador técnico pode conferir no WebAIM).

| Token | Hex | Uso |
|---|---|---|
| `--color-azul` | `#1E3A5F` | Títulos, texto de destaque, botão primário em fundo claro, fundo das seções escuras (Esperança e Contato), foco em fundo claro |
| `--color-azul-noite` | `#132840` | Rodapé e hover do botão primário em fundo claro |
| `--color-azul-card` | `#24466F` | Cards sobre fundo azul (Esperança e Contato) |
| `--color-amarelo` | `#F5C518` | Botão primário em fundo escuro, ícones e textos curtos **só sobre azul**, pétalas da margarida, foco em fundo escuro. Em fundo claro, só como decoração |
| `--color-amarelo-claro` | `#FFD84D` | Hover do botão amarelo |
| `--color-dourado` | `#8A6100` | Eyebrows (rótulos pequenos) e links em hover sobre fundo claro, sublinhado do link de navegação ativo, miolo da margarida |
| `--color-creme` | `#FFF8E7` | Fundo principal (cabeçalho, hero, Ministério, Instagram) e texto sobre azul |
| `--color-branco` | `#FFFFFF` | Fundo do Sobre e da Tecnologia, cards em fundo claro |
| `--color-areia` | `#F7EBCF` | Fundo do Pontes e das tags/chips |
| `--color-texto` | `#1F2937` | Texto corrido em fundo claro |
| `--color-texto-suave` | `#4B5563` | Texto secundário, legendas, referências em fundo claro |
| `--color-texto-suave-escuro` | `#C9D6E3` | Texto secundário sobre azul |
| `--color-borda` | `#EADFC4` | Bordas decorativas de cards e divisórias (não carrega informação) |
| `--color-borda-forte` | `#8C7B5E` | Bordas que precisam de 3:1 (campos, chips interativos, se houver) |
| `--color-erro` | `#B42318` | Mensagens de erro (reserva; o site não tem formulário) |

**Contrastes verificados (texto ou elemento sobre fundo):**

| Par | Contraste | Resultado |
|---|---|---|
| texto `#1F2937` sobre creme `#FFF8E7` | ~13,9:1 | AA/AAA |
| texto `#1F2937` sobre branco `#FFFFFF` | ~14,7:1 | AA/AAA |
| texto `#1F2937` sobre areia `#F7EBCF` | ~12,4:1 | AA/AAA |
| azul `#1E3A5F` sobre creme | ~10,9:1 | AA/AAA |
| azul `#1E3A5F` sobre branco | ~11,5:1 | AA/AAA |
| azul `#1E3A5F` sobre areia | ~9,7:1 | AA/AAA |
| azul sobre o brilho amarelo do hero (pior ponto, 25% amarelo sobre creme ≈ `#FDEBB3`) | ~9,7:1 | AA/AAA |
| texto-suave `#4B5563` sobre creme | ~7,1:1 | AA/AAA |
| texto-suave `#4B5563` sobre branco | ~7,6:1 | AA/AAA |
| texto-suave `#4B5563` sobre areia | ~6,4:1 | AA |
| dourado `#8A6100` sobre creme | ~5,2:1 | AA |
| dourado `#8A6100` sobre branco | ~5,5:1 | AA |
| dourado `#8A6100` sobre areia | ~4,7:1 | AA (no limite; usar só em eyebrow de 13px+ em peso 600) |
| creme `#FFF8E7` sobre azul `#1E3A5F` | ~10,9:1 | AA/AAA |
| branco sobre azul | ~11,5:1 | AA/AAA |
| amarelo `#F5C518` sobre azul `#1E3A5F` (e azul sobre amarelo, botão) | ~7,1:1 | AA/AAA |
| azul sobre amarelo-claro `#FFD84D` (hover) | ~8,3:1 | AA/AAA |
| texto-suave-escuro `#C9D6E3` sobre azul | ~7,8:1 | AA/AAA |
| creme sobre azul-card `#24466F` | ~9,1:1 | AA/AAA |
| amarelo sobre azul-card | ~5,9:1 | AA |
| texto-suave-escuro sobre azul-card | ~6,5:1 | AA |
| creme sobre azul-noite `#132840` | ~14,1:1 | AA/AAA |
| texto-suave-escuro sobre azul-noite | ~10,1:1 | AA/AAA |
| amarelo sobre azul-noite | ~9,2:1 | AA/AAA |
| creme sobre azul-noite (hover do primário) | ~14,1:1 | AA/AAA |
| borda-forte `#8C7B5E` sobre branco / creme | ~4,1:1 / ~3,9:1 | ≥3:1 (não texto) |
| erro `#B42318` sobre branco / creme | ~6,6:1 / ~6,2:1 | AA |
| **amarelo `#F5C518` sobre creme ou branco** | **~1,6:1** | **REPROVA: proibido para texto ou ícone com significado. Só decoração** |
| contorno de foco azul sobre creme / amarelo sobre azul | ~10,9:1 / ~7,1:1 | ≥3:1 (2.4.7 / 2.4.13) |

### 2.2 Tipografia

**Famílias (Google Fonts, 2 famílias):**
- **Fraunces** (títulos, versículos, número das frentes, monograma de texto). Variável, com `font-variation-settings: "SOFT" 100, "WONK" 0;` em todos os usos e `font-optical-sizing: auto`.
- **Inter** (texto, navegação, botões, rótulos).

**Carregamento:**
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,600..700,100;1,9..144,400,100&family=Inter:wght@400;500;600&display=swap
```
Se a URL com o eixo SOFT não carregar, use `family=Fraunces:ital,opsz,wght@0,9..144,600..700;1,9..144,400` (perde só o arredondamento suave). Pilhas de fallback: `Georgia, "Times New Roman", serif` e `system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`.

**Pesos usados:** Fraunces 600 (h2, h3), 700 (h1), 400 itálico (versículos). Inter 400 (texto), 500 (navegação), 600 (botões, eyebrows, referências).

**Escala (fluida, mobile 320px → desktop 1280px):**

| Token | Valor | Família / peso | Altura de linha | Uso |
|---|---|---|---|---|
| `--fs-display` | `clamp(2.75rem, 1.9rem + 4.2vw, 5.25rem)` (44 → 84px) | Fraunces 700 | 1.04; `letter-spacing: -0.02em` | h1 do hero |
| `--fs-h2` | `clamp(2rem, 1.5rem + 2.2vw, 3.25rem)` (32 → 52px) | Fraunces 600 | 1.12; `-0.015em` | Títulos de seção |
| `--fs-h3` | `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)` (22 → 28px) | Fraunces 600 | 1.25 | Títulos de card |
| `--fs-quote` | `clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)` (20 → 26px) | Fraunces 400 itálico | 1.4 | Versículos e frase "O portfólio fala por você" |
| `--fs-lead` | `clamp(1.125rem, 1rem + 0.5vw, 1.375rem)` (18 → 22px) | Inter 400 | 1.55 | Parágrafo de abertura de seção |
| `--fs-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.125rem)` (17 → 18px) | Inter 400 | 1.65 | Texto corrido |
| `--fs-small` | `0.9375rem` (15px) | Inter 400/500 | 1.5 | Legendas, créditos, navegação |
| `--fs-eyebrow` | `0.8125rem` (13px) | Inter 600, CAIXA-ALTA, `letter-spacing: 0.12em` | 1.4 | Rótulos acima dos títulos ("01 · Ministério") |
| `--fs-number` | `clamp(3rem, 2.4rem + 3vw, 5rem)` | Fraunces 600 | 1 | Número decorativo "01/02/03" das frentes (cor `--color-borda`, `aria-hidden`) |

- Largura de leitura: parágrafos com `max-width: 62ch`; lead com `max-width: 54ch`.
- `text-wrap: balance` em h1, h2 e h3; `text-wrap: pretty` em parágrafos.
- Proporção título/texto ≥ 2:1 em todas as larguras (pesquisa 2.2).

### 2.3 Espaçamento (base 4px)

| Token | Valor |
|---|---|
| `--space-1` | 0.25rem (4px) |
| `--space-2` | 0.5rem (8px) |
| `--space-3` | 0.75rem (12px) |
| `--space-4` | 1rem (16px) |
| `--space-5` | 1.5rem (24px) |
| `--space-6` | 2rem (32px) |
| `--space-7` | 3rem (48px) |
| `--space-8` | 4rem (64px) |
| `--space-9` | 6rem (96px) |
| `--space-10` | 8rem (128px) |
| `--section-pad` | `clamp(4rem, 2.5rem + 6vw, 8rem)` (padding vertical de cada seção) |
| `--gutter` | `clamp(1.25rem, 4vw, 2.5rem)` (padding lateral do container) |

Ritmo interno: eyebrow → h2 = `--space-3`; h2 → lead = `--space-5`; parágrafo → parágrafo = `--space-4`; texto → botões = `--space-6`; título da seção → grade de cards = `--space-7`.

### 2.4 Raios

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 8px | Chips, campos, pequenos blocos |
| `--radius-md` | 16px | Cards |
| `--radius-lg` | 28px | Fotos de seção, cards grandes de contato |
| `--radius-arch` | `999px 999px 28px 28px` | Foto do hero e retrato do Sobre (formato de arco) |
| `--radius-pill` | 999px | Botões e tags |

### 2.5 Sombras (tom azul, suaves)

| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(30, 58, 95, 0.08), 0 1px 1px rgba(30, 58, 95, 0.04)` | Cards em repouso, cabeçalho rolado |
| `--shadow-md` | `0 10px 24px -10px rgba(30, 58, 95, 0.22)` | Hover de botão e card, menu mobile |
| `--shadow-lg` | `0 28px 56px -20px rgba(30, 58, 95, 0.30)` | Foto em arco do hero |

### 2.6 Motion

| Token | Valor |
|---|---|
| `--ease-out` | `cubic-bezier(0.2, 0.7, 0.2, 1)` |
| `--dur-fast` | 150ms (cor, sublinhado) |
| `--dur-base` | 250ms (botões, cards, menu) |
| `--dur-slow` | 700ms (entrada na tela) |
| `--dur-bloom` | 1600ms (margarida do hero, uma vez) |

### 2.7 Bloco `:root` pronto para copiar

```css
:root {
  /* Cores */
  --color-azul: #1E3A5F;
  --color-azul-noite: #132840;
  --color-azul-card: #24466F;
  --color-amarelo: #F5C518;          /* só sobre azul ou como decoração */
  --color-amarelo-claro: #FFD84D;
  --color-dourado: #8A6100;
  --color-creme: #FFF8E7;
  --color-branco: #FFFFFF;
  --color-areia: #F7EBCF;
  --color-texto: #1F2937;
  --color-texto-suave: #4B5563;
  --color-texto-suave-escuro: #C9D6E3;
  --color-borda: #EADFC4;
  --color-borda-forte: #8C7B5E;
  --color-erro: #B42318;
  --color-foco: var(--color-azul);   /* em seções escuras: var(--color-amarelo) */

  /* Tipografia */
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --fs-display: clamp(2.75rem, 1.9rem + 4.2vw, 5.25rem);
  --fs-h2: clamp(2rem, 1.5rem + 2.2vw, 3.25rem);
  --fs-h3: clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem);
  --fs-quote: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --fs-lead: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --fs-body: clamp(1.0625rem, 1rem + 0.2vw, 1.125rem);
  --fs-small: 0.9375rem;
  --fs-eyebrow: 0.8125rem;
  --fs-number: clamp(3rem, 2.4rem + 3vw, 5rem);
  --lh-tight: 1.08;
  --lh-heading: 1.2;
  --lh-body: 1.65;

  /* Espaçamento */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
  --space-10: 8rem;
  --section-pad: clamp(4rem, 2.5rem + 6vw, 8rem);
  --gutter: clamp(1.25rem, 4vw, 2.5rem);
  --container: 1200px;
  --container-narrow: 760px;
  --header-h: 64px;                  /* 72px a partir de 1024px */

  /* Raios */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-arch: 999px 999px 28px 28px;
  --radius-pill: 999px;

  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(30, 58, 95, 0.08), 0 1px 1px rgba(30, 58, 95, 0.04);
  --shadow-md: 0 10px 24px -10px rgba(30, 58, 95, 0.22);
  --shadow-lg: 0 28px 56px -20px rgba(30, 58, 95, 0.30);

  /* Motion */
  --ease-out: cubic-bezier(0.2, 0.7, 0.2, 1);
  --dur-fast: 150ms;
  --dur-base: 250ms;
  --dur-slow: 700ms;
  --dur-bloom: 1600ms;

  /* Alvos de toque */
  --tap: 48px;
}

@media (min-width: 1024px) {
  :root { --header-h: 72px; }
}
```

---

## 3. Grid e container

- **Container:** `width: min(100% - 2 * var(--gutter), var(--container))`, centralizado. Versão estreita (`--container-narrow`, 760px) para o Pontes e textos centralizados.
- **Grade:** 4 colunas no mobile (gap 16px), 8 colunas a partir de 768px (gap 24px), 12 colunas a partir de 1024px (gap 32px). Implementar com CSS Grid; `grid-template-columns: repeat(12, 1fr)` no desktop.
- **Blocos divididos (hero, Sobre, Ministério, Tecnologia):** no desktop, texto em 6 a 7 colunas e imagem em 5 colunas, com 1 coluna de respiro entre eles. No mobile, empilhados.
- **Âncoras:** `scroll-margin-top: calc(var(--header-h) + 16px)` em todas as seções; `html { scroll-behavior: smooth }` só dentro de `prefers-reduced-motion: no-preference`.

---

## 4. Estrutura da página

Ordem e fundo das seções (claro e escuro alternados):

| # | Seção | `id` | Fundo | Na navegação? |
|---|---|---|---|---|
| 0 | Link "Pular para o conteúdo" | - | - | - |
| 1 | Cabeçalho | - | creme translúcido | - |
| 2 | Hero | `inicio` | creme + brilho amarelo | - |
| 3 | Sobre | `sobre` | branco | Sobre |
| 4 | Esperança em palavras | `esperanca` | **azul** | Esperança |
| 5 | Frente 01: Ministério | `ministerio` | creme | Ministério |
| 6 | Frente 02: Tecnologia | `tecnologia` | branco | Tecnologia |
| 7 | Frente 03: Pontes e comunidades | `pontes` | areia | - |
| 8 | Instagram | `instagram` | creme | - |
| 9 | Contato | `contato` | **azul** | Contato |
| 10 | Rodapé | - | azul-noite | - |
| + | Barra fixa "Fale comigo" (só mobile) | - | creme | - |

### 4.0 Link de pular
- Primeiro elemento focável: "Pular para o conteúdo" → `#conteudo` (o `<main>`).
- Escondido visualmente até receber foco. Com foco: canto superior esquerdo, fundo azul, texto creme, padding `--space-3 --space-5`, raio pill, `z-index` acima do cabeçalho.

### 4.1 Cabeçalho
- **Objetivo:** identidade e acesso rápido ao CTA.
- **Layout:** `position: sticky; top: 0`, altura `--header-h`. Container com 3 zonas em flex (`justify-content: space-between`):
  - Esquerda: `logo-sr.svg` (40px no mobile, 44px no desktop) + texto "Sergio Ribeiro" em Fraunces 600, 1.125rem, azul. O conjunto é um link para `#inicio` com `aria-label="Sergio Ribeiro, voltar ao início"`. No mobile abaixo de 360px, esconda o texto e deixe só o monograma.
  - Centro/direita (≥1024px): navegação com 5 âncoras (Sobre, Esperança, Ministério, Tecnologia, Contato), Inter 500, `--fs-small`, azul, gap `--space-6`.
  - Direita: botão primário compacto "Fale comigo" (altura 44px, padding horizontal `--space-5`). Visível em ≥600px. Abaixo de 600px, ele fica dentro do menu e na barra fixa inferior.
  - Abaixo de 1024px: botão de menu (hambúrguer) de 48×48px, ícone `icon-menu.svg` / `icon-close.svg`, `aria-expanded`, `aria-controls="menu-principal"`, rótulo "Abrir menu" / "Fechar menu".
- **Fundo:** `rgba(255, 248, 231, 0.92)` com `backdrop-filter: blur(10px)`; sem suporte a backdrop-filter, creme sólido. Os contrastes valem sobre creme sólido.
- **Ao rolar (>8px):** adicionar classe `is-scrolled` → `border-bottom: 1px solid var(--color-borda)` + `--shadow-sm`. Transição `--dur-base`.
- **Link ativo:** a seção visível (IntersectionObserver) recebe `aria-current="true"` no link; estilo: sublinhado de 2px dourado `#8A6100` a 6px do texto (não depende só de cor: há o sublinhado).
- **Menu mobile (<1024px):** painel que desce abaixo do cabeçalho, largura total, fundo creme sólido, `--shadow-md`, padding `--space-5 --gutter --space-6`. Links empilhados com 56px de altura cada, Fraunces 600 1.5rem, azul, separados por borda de 1px `--color-borda`. No fim, botão primário "Fale comigo" de largura total. Comportamento: abre e fecha com `--dur-base` (opacidade + `translateY(-8px)` → 0); fecha com Esc, ao clicar num link ou fora do painel; devolve o foco ao botão de menu; trava a rolagem do `body` enquanto aberto.

### 4.2 Hero (`#inicio`)
- **Objetivo:** posicionamento em 5 segundos ("Influenciador de Esperança") e o CTA principal.
- **Conteúdo (do `conteudo.md`):** eyebrow "Pr. Sergio Ribeiro"; h1 "Influenciador de Esperança"; lead de 1 ou 2 frases; versículo curto (sugestão da pesquisa: Lm 3.22-23, trecho "Novas são cada manhã; grande é a tua fidelidade.", com a referência "Lamentações 3.23, ARC"); botões "Fale comigo" (primário, WhatsApp) e "Siga no Instagram" (secundário, contorno).
- **Layout desktop (≥1024px):** altura mínima `min(88vh, 820px)`, conteúdo alinhado ao centro na vertical, padding-top `--space-8`.
  - Texto: colunas 1-7. Eyebrow dourado → h1 `--fs-display` azul (máx. 11ch, quebra natural em "Influenciador / de Esperança") → lead `--fs-lead` texto-suave → versículo → botões em linha (gap `--space-4`).
  - A palavra "Esperança" do h1 recebe por baixo o traço `traco-sublinhado.svg` (pincelada amarela, `aria-hidden`, posição absoluta, 100% da largura da palavra, 0.18em de altura, a 0.02em abaixo da linha de base). O traço é decorativo; o texto continua azul.
  - Versículo: `<blockquote>` com `border-left: 3px solid var(--color-amarelo)` (decorativo), padding-left `--space-4`, texto `--fs-quote` Fraunces itálico azul, referência em Inter 600 `--fs-small` texto-suave na linha de baixo. Margem `--space-6` acima e abaixo.
  - Imagem: colunas 9-12 (ou 8-12), `foto-hero.jpg` em proporção 4:5, `border-radius: var(--radius-arch)`, `object-fit: cover`, `--shadow-lg`. A `margarida.svg` (160px, decorativa) fica sobreposta ao canto inferior esquerdo do arco, deslocada -40px para fora.
  - Fundo: creme com `radial-gradient(circle at 78% 30%, rgba(245, 197, 24, 0.25), transparent 55%)` atrás da foto. Pior ponto sob texto ≈ `#FDEBB3`, com azul a ~9,7:1.
- **Tablet (768-1023px):** 2 colunas 8-grid: texto em 5 colunas e foto em 3, ou empilhado se o h1 quebrar em mais de 3 linhas. Preferir empilhado com a foto à direita do texto só a partir de 900px.
- **Mobile (<768px):** empilhado: texto primeiro, foto depois. Foto com largura de 86% centrada, máx. 360px, proporção 4:5, arco mantido; margarida com 110px, sobreposta ao canto inferior esquerdo. Botões empilhados em largura total (primário em cima). Padding-top `--space-7`, padding-bottom `--space-8`.
- **Imagem:** `<img>` com `width`/`height` declarados, `loading="eager"`, `fetchpriority="high"`, `decoding="async"`, `alt` descritivo do ambiente (ex.: "Campo de margaridas iluminado pelo sol da manhã"), não da pessoa. Tamanho final ≤ 250 KB.
- **Motion:** ver seção 6 (a margarida abre uma única vez).

### 4.3 Sobre (`#sobre`)
- **Objetivo:** conexão pessoal (fé e família) antes das frentes.
- **Conteúdo:** eyebrow "Sobre mim"; h2; 2 ou 3 parágrafos curtos; lista de "traços" com ícone; CTA "Fale comigo".
- **Lista de traços (4 itens, com ícone azul de 24px num círculo areia de 44px):**
  - `icon-cruz.svg`: "Cristão"
  - `icon-coracao.svg`: "Casado com Mônica" (só texto, sem link, conforme briefing)
  - `icon-familia.svg`: "Pai de três filhos" (sem nomes)
  - `icon-pin.svg`: "Brasília/DF" `<!-- PENDENTE: confirmar cidade -->`
  - Layout: 2×2 no desktop e no tablet, 1 coluna abaixo de 480px. Texto Inter 500 `--fs-body` azul.
- **Layout desktop:** retrato à esquerda (colunas 1-5), texto à direita (colunas 7-12), alinhados ao centro na vertical.
  - Retrato: `retrato-placeholder.jpg` (ou `retrato-placeholder.svg` como fallback) 4:5, `--radius-arch`, sem sombra, com borda de 8px creme e um anel externo de 1px `--color-borda`. Abaixo, legenda pequena (`--fs-small`, texto-suave): "Foto ilustrativa" `<!-- PENDENTE: trocar pela foto do Sergio -->`.
  - Ornamento: `margarida-mini.svg` (48px) no canto superior direito do retrato, decorativa.
- **Mobile:** retrato no topo, 70% da largura, máx. 300px, centrado; texto abaixo; botão em largura total.

### 4.4 Esperança em palavras (`#esperanca`), seção escura
- **Objetivo:** o coração do "Influenciador de Esperança": versículos curtos com uma linha de reflexão.
- **Fundo:** azul `#1E3A5F`. Foco em amarelo nesta seção. Ornamento opcional: `ornamento-margaridas-fundo.svg` (contornos de margarida em creme a 6% de opacidade) no canto superior direito, decorativo, sem interferir no texto.
- **Cabeçalho da seção (centralizado, máx. 760px):** eyebrow em amarelo ("Esperança em palavras"); h2 creme; lead texto-suave-escuro.
- **Cards (4):** sugestão da pesquisa: Rm 15.13, Lm 3.22-23, Hb 6.19 (trecho "âncora da alma segura e firme") e Is 40.31. A escolha final é do redator.
  - Card: fundo `--color-azul-card`, raio `--radius-md`, padding `--space-6`, borda 1px `rgba(255, 248, 231, 0.10)`, sem sombra.
  - Conteúdo, de cima para baixo: ícone amarelo 28px (`icon-sol`, `icon-amanhecer`, `icon-ancora`, `icon-asas`; um por versículo) → versículo em Fraunces itálico `--fs-quote`, creme (como `<blockquote>`) → referência em Inter 600 `--fs-eyebrow` caixa-alta, amarelo, `letter-spacing: 0.1em` (ex.: "ROMANOS 15.13 · ARC") → linha de reflexão em Inter 400 `--fs-small`, texto-suave-escuro.
  - Os cards **não** são clicáveis: sem hover de elevação.
- **Grade:** 1 coluna (<768px), 2 colunas (768-1199px), 4 colunas (≥1200px), gap `--space-5`. Cards com altura igual (`align-items: stretch`); a referência e a reflexão ficam presas à base (flex column, `margin-top: auto` na referência).
- **Fecho:** abaixo da grade, centralizado, link de texto em creme "Receba uma palavra no Instagram" → Instagram (estilo link sobre fundo escuro).

### 4.5 Frente 01: Ministério (`#ministerio`)
- **Objetivo:** apresentar o ministério de homens da AD Catedral Baleia e convidar a participar, sem datas inventadas.
- **Cabeçalho comum das frentes:** número decorativo "01" em Fraunces `--fs-number`, cor `--color-borda` (`aria-hidden="true"`), acima do eyebrow "Ministério" dourado; depois h2 azul.
- **Layout desktop:** foto à esquerda (colunas 1-6), texto à direita (colunas 8-12).
  - Foto: `foto-ministerio.jpg` 4:3, `--radius-lg`. Sobre o canto inferior direito da foto, um selo/card branco (raio `--radius-md`, `--shadow-md`, padding `--space-4 --space-5`) com ícone `icon-igreja.svg` azul + texto em 2 linhas: "AD Catedral Baleia" (Inter 600 azul) / "Asa Sul, Brasília/DF" (Inter 400 texto-suave) `<!-- PENDENTE: autorização para citar a igreja -->`. No mobile, o selo deixa de sobrepor e fica logo abaixo da foto, com margem negativa de -24px para "encaixar".
  - Texto: lead + parágrafo; lista de 3 itens com ícone azul 24px (`icon-pessoas`, `icon-mesa`/confraternização, `icon-maos`/oração), cada item com título Inter 600 azul e uma linha Inter 400 texto-suave. Depois, nota em texto-suave `--fs-small`: "Datas e encontros são divulgados no Instagram" (texto final do redator). Botão secundário (contorno) "Quero participar" → WhatsApp.
- **Mobile:** foto no topo, texto depois, botão em largura total.

### 4.6 Frente 02: Tecnologia (`#tecnologia`)
- **Objetivo:** mostrar a carreira em tecnologia com a mensagem "o portfólio fala por você".
- **Layout desktop:** espelhado em relação ao Ministério: texto à esquerda (colunas 1-6), foto à direita (colunas 8-12). Número "02" e eyebrow "Tecnologia".
  - Frase de destaque: "O portfólio fala por você." em Fraunces itálico `--fs-quote` (no desktop, até 2rem), azul, com marca-texto amarelo atrás da metade inferior das letras: `background: linear-gradient(transparent 62%, rgba(245, 197, 24, 0.55) 62%)`. Pior caso: azul sobre amarelo puro ~7,1:1, então o contraste está garantido.
  - Parágrafo curto.
  - Áreas de atuação: chips `[PENDENTE]` (fundo areia, texto azul Inter 500 `--fs-small`, raio pill, padding `--space-2 --space-4`, altura mínima 36px, não interativos). Enquanto pendente: um único chip "Áreas de atuação em breve" `<!-- PENDENTE -->`.
  - Links profissionais (LinkedIn, portfólio/GitHub): **não** criar links ativos (dados-negocio, seção 6). Mostrar uma linha de texto-suave "LinkedIn e portfólio em breve". Quando chegarem, usar botões secundários com `icon-seta-externa.svg`.
  - Foto: `foto-tecnologia.jpg` 4:3, `--radius-lg`. Detalhe decorativo: um quadrado de 96px com raio `--radius-md` em amarelo atrás do canto superior direito da foto (deslocado 20px), `aria-hidden`.
- **Mobile:** foto no topo, texto depois (mesma ordem de leitura de todas as frentes no mobile: imagem → texto).

### 4.7 Frente 03: Pontes e comunidades (`#pontes`)
- **Objetivo:** mostrar as relações institucionais e a amizade entre povos em tom genérico, sem nomes, países ou cargos.
- **Layout (todas as larguras):** bloco centralizado no `--container-narrow`, texto centralizado. De cima para baixo: `ilustracao-pontes.svg` (largura 240px no desktop e 180px no mobile, decorativa) → número "03" + eyebrow "Pontes e comunidades" → h2 → parágrafo de no máximo 70 palavras → (opcional) 3 valores em linha, como chips de borda 1px `--color-borda-forte` (texto azul), com texto final do redator.
- Sem foto, de propósito: evita sugerir cargo diplomático e dá respiro antes do Instagram.

### 4.8 Instagram (`#instagram`)
- **Objetivo:** levar a seguir @pr.sergioribeiro, sem embed, sem glyph redesenhado e sem dar ao Instagram mais destaque que ao nome (pesquisa 2.6).
- **Layout:** faixa no creme com um card branco grande no container (raio `--radius-lg`, borda 1px `--color-borda`, padding `--space-7` no desktop e `--space-6` no mobile). Dentro, flex em linha no desktop (texto à esquerda, botão à direita) e empilhado no mobile:
  - Esquerda: `margarida-mini.svg` (40px) + eyebrow "No dia a dia" + handle "@pr.sergioribeiro" em Fraunces 600 `--fs-h3` azul (menor que o h2 das seções e muito menor que o h1) + uma linha de texto-suave.
  - Direita: botão secundário "Siga @pr.sergioribeiro no Instagram" com `icon-seta-externa.svg`. Abrir **na mesma aba** (preferência da pesquisa). Se o desenvolvedor optar por nova aba, acrescentar "(abre em nova aba)" ao texto visível ou a um `<span class="sr-only">` e usar `rel="noopener noreferrer"`.
- Sem logo do Instagram. Se um dia o glyph oficial for usado, só o arquivo do Brand Resource Center da Meta, em uma cor.

### 4.9 Contato (`#contato`), seção escura
- **Objetivo:** conversão. Dizer o que acontece depois do clique.
- **Fundo:** azul, com `margarida.svg` grande (420px, contornos em amarelo a 12% de opacidade, decorativa) cortada no canto inferior direito. Foco em amarelo.
- **Cabeçalho (centralizado, máx. 760px):** eyebrow amarelo "Contato"; h2 creme (ex.: "Vamos conversar?"); lead texto-suave-escuro explicando que ele responde pelo WhatsApp.
- **Cards de canal (3):** fundo `--color-azul-card`, raio `--radius-lg`, padding `--space-6`, texto creme.
  1. **WhatsApp (destaque):** ícone `icon-conversa.svg` amarelo 32px; título "WhatsApp" (Fraunces 600 `--fs-h3`); número "(61) 90000-0000" `<!-- PENDENTE -->`; linha "Respondo assim que puder" (texto do redator); **botão primário amarelo** "Fale comigo" de largura total. Borda de 2px amarelo para marcar o card principal.
  2. **E-mail:** ícone `icon-email.svg` amarelo; título; endereço "contato@exemplo.com" `<!-- PENDENTE -->` (quebra com `overflow-wrap: anywhere`); botão secundário escuro (contorno creme) "Enviar e-mail".
  3. **Instagram:** ícone `icon-seta-externa.svg` ou `margarida-mini.svg` (sem glyph do Instagram); título "Instagram"; "@pr.sergioribeiro"; botão secundário escuro "Abrir perfil".
- **Grade:** 1 coluna (<768px, WhatsApp primeiro), 3 colunas (≥1024px), e no tablet o WhatsApp em largura total com os outros 2 lado a lado. Cards com altura igual e botão preso à base.
- **Linha de localização abaixo dos cards:** `icon-pin` + "Brasília/DF" `<!-- PENDENTE -->` em texto-suave-escuro, centralizado. Sem mapa (não há coordenadas).

### 4.10 Rodapé
- **Fundo:** azul-noite; texto creme e texto-suave-escuro; links creme sublinhados; foco amarelo.
- **Layout desktop (3 colunas):**
  1. `logo-sr.svg` (versão clara) + "Sergio Ribeiro" em Fraunces 600 + "Influenciador de Esperança 🌼" (o emoji em `<span aria-hidden="true">`).
  2. Navegação repetida (as 5 âncoras), em coluna, Inter 400 `--fs-small`, cada link com no mínimo 44px de altura de toque (padding vertical).
  3. Instagram (link de texto) + botão "Voltar ao topo" (`icon-seta-cima.svg`, 44×44px, contorno creme).
- **Linha inferior** (borda superior 1px `rgba(255, 248, 231, 0.12)`, padding `--space-5` 0): "© 2026 Sergio Ribeiro" à esquerda; à direita, "Créditos das fotos" (link para uma lista `<details>` ou âncora com autor, banco e licença de cada foto, conforme `imagens.md`; obrigatório para CC BY).
- **Mobile:** colunas empilhadas, alinhadas à esquerda, gap `--space-6`. Padding inferior extra de 80px para não ficar sob a barra fixa.

### 4.11 Barra fixa "Fale comigo" (só <768px)
- Barra no rodapé da viewport (`position: fixed; bottom: 0`), fundo creme com borda superior 1px `--color-borda` e `--shadow-md` invertida (`0 -8px 24px -12px rgba(30,58,95,.22)`), padding `--space-3 --gutter` + `env(safe-area-inset-bottom)`.
- Conteúdo: botão primário azul "Fale comigo" de largura total e 48px de altura, com `icon-conversa.svg`.
- Aparece só depois que o hero sai da tela (IntersectionObserver no hero) e some quando a seção Contato está visível (evita CTA duplicado). Transição: `translateY(100%)` → 0 em `--dur-base`. Quando escondida, `visibility: hidden` para sair da ordem de tabulação.
- Deve ter `aria-label` próprio no contêiner (ex.: `<div role="region" aria-label="Atalho de contato">`) ou ser um simples `<a>` com o texto visível.

---

## 5. Componentes e estados

Regras gerais: altura mínima de toque de 48px em botões e 44px em links de navegação e ícones; foco **sempre** com `:focus-visible` (nunca `outline: none` sem substituto); transições de `--dur-base` com `--ease-out`.

### 5.1 Botões
Base comum: `display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2)`; Inter 600, 1rem; `min-height: 48px`; padding `0.875rem 1.625rem`; raio pill; ícone opcional de 20px à direita (seta) ou à esquerda (canal).

| Variante | Normal | Hover | Foco (`:focus-visible`) | Ativo | Desabilitado |
|---|---|---|---|---|---|
| **Primário claro** (em fundo claro) | fundo azul, texto creme (~10,9:1) | fundo azul-noite (~14,1:1), `translateY(-1px)`, `--shadow-md`; a seta desliza 3px para a direita | `outline: 3px solid var(--color-azul); outline-offset: 3px` | `translateY(0)`, sem sombra | `aria-disabled="true"`: fundo `#E5DDCB`, texto `#5B5446`, `cursor: not-allowed`, sem hover (componente inativo, isento de 1.4.3, mas legível) |
| **Primário escuro** (em fundo azul) | fundo amarelo, texto azul (~7,1:1) | fundo amarelo-claro (~8,3:1), `translateY(-1px)`, sombra `0 10px 24px -10px rgba(0,0,0,.35)` | `outline: 3px solid var(--color-amarelo); outline-offset: 3px` | `translateY(0)` | fundo `rgba(255,248,231,.15)`, texto `#C9D6E3` |
| **Secundário claro** (contorno) | transparente, borda 2px azul, texto azul (~10,9:1) | fundo azul, texto creme | igual ao primário claro | `translateY(0)` | borda e texto `#8C7B5E`, sem hover |
| **Secundário escuro** (contorno) | transparente, borda 2px creme, texto creme | fundo creme, texto azul | `outline: 3px solid var(--color-amarelo); outline-offset: 3px` | `translateY(0)` | borda e texto `rgba(255,248,231,.45)` |
| **Ícone** (menu, voltar ao topo) | 48×48px (44px no rodapé), raio pill, sem fundo, ícone 24px na cor do contexto | fundo `rgba(30,58,95,.08)` (claro) / `rgba(255,248,231,.12)` (escuro) | outline 3px da cor de foco do contexto, offset 2px | - | - |

Mobile: botões dos blocos de CTA em largura total abaixo de 480px; no cabeçalho, nunca.

### 5.2 Links de texto
- **Fundo claro:** azul, `text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 0.2em`. Hover: cor dourado (~5,2:1 sobre creme) e espessura de 2px. Foco: outline 3px azul, offset 2px, raio 4px.
- **Fundo escuro:** creme sublinhado. Hover: amarelo (~7,1:1). Foco: outline 3px amarelo.
- **Navegação do cabeçalho:** sem sublinhado em repouso; hover e ativo com sublinhado de 2px dourado (`text-underline-offset: 6px`); área clicável com padding vertical de 12px (≥44px).
- Links externos: `icon-seta-externa.svg` de 16px depois do texto, `aria-hidden`.

### 5.3 Cards

| Tipo | Fundo | Borda | Raio | Padding | Sombra | Hover |
|---|---|---|---|---|---|---|
| Versículo (Esperança) | azul-card | 1px `rgba(255,248,231,.10)` | md | `--space-6` | nenhuma | nenhum (não clicável) |
| Canal (Contato) | azul-card | 1px `rgba(255,248,231,.10)`; WhatsApp: 2px amarelo | lg | `--space-6` | nenhuma | nenhum no card; só no botão |
| Selo da igreja (Ministério) | branco | nenhuma | md | `--space-4 --space-5` | md | nenhum |
| Instagram | branco | 1px `--color-borda` | lg | `--space-7` / `--space-6` | sm | nenhum |
| Traço (Sobre) | sem card; ícone em círculo areia de 44px | - | pill | - | - | - |

Regra: card só ganha hover de elevação se o card inteiro for um link. Nesta página nenhum é; a interação fica nos botões.

### 5.4 Chips / tags
Fundo areia, texto azul (~9,7:1), Inter 500 `--fs-small`, raio pill, padding `--space-2 --space-4`, `min-height: 36px`. Não interativos (sem hover nem foco). Variante contorno (Pontes): fundo transparente, borda 1px `--color-borda-forte`.

### 5.5 Navegação
Especificada em 4.1 (desktop, ativo, menu mobile, Esc, retorno de foco, trava de rolagem) e 4.11 (barra fixa).

### 5.6 Formulários
**Não há formulário** neste site (contato por WhatsApp e e-mail, sem backend). Se for preciso no futuro: campo com fundo branco, borda 1px `--color-borda-forte` (~4,1:1), raio `--radius-sm`, altura 48px, rótulo visível acima (Inter 500 azul); hover com borda azul; foco com borda azul 2px + `box-shadow: 0 0 0 4px rgba(30,58,95,.15)`; erro com borda `--color-erro`, mensagem em texto `--color-erro` com ícone e `aria-describedby`; desabilitado com fundo `#F3EEE2` e texto `#6B6457`.

### 5.7 Versículo (blockquote)
`<figure>` com `<blockquote>` (texto) + `<figcaption>` (referência). Aspas tipográficas “ ” em Fraunces; a aspa de abertura pode ficar pendurada (`text-indent: -0.4em` no desktop). No hero, borda esquerda amarela de 3px; nos cards, sem borda.

---

## 6. Motion e `prefers-reduced-motion`

**Princípio:** micro-interações leves, nada em loop, nada que se mova sozinho por mais de 5 segundos (WCAG 2.2.2).

1. **Margarida do hero ("bloom"), uma vez no carregamento:** o grupo `#petalas` da `margarida.svg` vai de `scale(0.6) rotate(-25deg); opacity: 0` para `scale(1) rotate(0); opacity: 1` em `--dur-bloom` com `--ease-out`, e o miolo (`#miolo`) entra 200ms depois com fade. Para isso, o SVG deve vir **inline** no HTML (ou animar o `<img>` inteiro, se ele vier como arquivo). Depois disso, a margarida fica parada.
2. **Entrada ao rolar:** elementos com `data-reveal` (cabeçalhos de seção, cards, fotos) vão de `opacity: 0; transform: translateY(16px)` para o estado final em `--dur-slow` quando 15% do elemento entra na tela (IntersectionObserver, uma vez só, depois `unobserve`). Cards em grade com atraso escalonado de 80ms (máx. 4 itens). **Aprimoramento progressivo:** o estado escondido só se aplica quando o JS adiciona a classe `js` ao `<html>`; sem JS, tudo aparece.
3. **Hovers:** botões com `translateY(-1px)` + sombra; seta interna com `translateX(3px)`; links com troca de cor e espessura do sublinhado. Tudo em 150-250ms.
4. **Cabeçalho:** borda e sombra ao rolar (`--dur-base`). Menu mobile: fade + `translateY(-8px)`. Barra fixa: `translateY(100%)` → 0.
5. **Rolagem suave** das âncoras via CSS (`scroll-behavior: smooth`), só sem preferência por movimento reduzido.

**Movimento reduzido (CSS, técnica C39, e JS, SCR40):**
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  [data-reveal] { opacity: 1 !important; transform: none !important; }
}
```
No JS: `const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;`. Com `reduz`, não registrar o observer de entrada (marcar tudo como visível) e não disparar o bloom. As mudanças de cor no hover continuam (não são movimento).

---

## 7. Breakpoints e comportamento responsivo

Mobile first: os estilos base valem para 320px; as media queries são `min-width`.

| Nome | Faixa | Mudanças principais |
|---|---|---|
| base | 320-599px | Tudo em 1 coluna; botões de CTA em largura total; menu hambúrguer; "Fale comigo" escondido no cabeçalho; barra fixa inferior ativa; traços do Sobre em 1 coluna abaixo de 480px; logo só monograma abaixo de 360px |
| `sm` | ≥600px | "Fale comigo" compacto volta ao cabeçalho; traços do Sobre em 2×2; botões do hero em linha |
| `md` | ≥768px | Grade de 8 colunas; cards da Esperança em 2×2; Contato com WhatsApp em largura total + 2 lado a lado; barra fixa desativada; card do Instagram em linha |
| `lg` | ≥1024px | Grade de 12 colunas; navegação completa (sem hambúrguer); `--header-h` 72px; blocos divididos lado a lado (hero, Sobre, Ministério, Tecnologia); Contato em 3 colunas; rodapé em 3 colunas |
| `xl` | ≥1200px | Esperança em 4 colunas; container no máximo de 1200px |

Regras gerais de mobile:
- Sem rolagem horizontal em 320px (WCAG 1.4.10): `overflow-wrap: anywhere` em e-mail e handle; elementos decorativos deslocados (margaridas, quadrado amarelo) presos ao contêiner com `overflow: clip` na seção.
- Ordem de leitura igual à visual: no mobile, imagem antes do texto nas frentes; no hero, texto antes da foto.
- Imagens com `srcset` (800w, 1200w, 1600w quando houver) e `sizes` coerentes com o layout: hero `(min-width:1024px) 40vw, 86vw`; frentes `(min-width:1024px) 45vw, 100vw`.
- Zoom de texto a 200% sem perda de conteúdo: nada de altura fixa em contêiner de texto.

---

## 8. Pedidos de imagem (para o `gerador-imagens`)

O `gerador-imagens` grava os arquivos em `projetos/sergio-ribeiro/assets/` e documenta tudo em `projetos/sergio-ribeiro/imagens.md` (autor, banco, URL, licença e marcação "substituir antes de publicar" quando couber). **Nada do Instagram.** Fotos só de Unsplash, Pexels, Pixabay ou Wikimedia Commons (CC0/CC BY).

### 8.1 SVGs (gerados pelo time)
Regras: `viewBox` definido, sem `width`/`height` fixos, sem texto como `<text>` dependente de fonte (converter em paths ou desenhar formas), cores da paleta, `<title>` só nos que forem informativos, IDs nos grupos animáveis. Peso alvo de até 6 KB cada.

| Arquivo | Uso | Proporção / viewBox | Descrição |
|---|---|---|---|
| `logo-sr.svg` | Cabeçalho | 1:1, `0 0 64 64` | Monograma "SR": círculo azul `#1E3A5F`; letras S e R entrelaçadas em formas inspiradas numa serifa suave (estilo Fraunces), em creme `#FFF8E7`; uma pequena margarida de 5 pétalas amarela `#F5C518` no lugar do ponto da perna do R, ou no canto superior direito. Legível a 32px |
| `logo-sr-claro.svg` | Rodapé (fundo azul-noite) | 1:1 | Mesmo desenho com círculo creme e letras azuis (ou círculo transparente com contorno creme e letras creme) |
| `favicon.svg` | `<link rel="icon">` | 1:1, `0 0 32 32` | Versão simplificada do monograma (só "SR" em creme sobre círculo azul, sem a margarida pequena se ela sumir no tamanho) |
| `margarida.svg` | Hero (sobreposta ao arco), Contato (fundo) | 1:1, `0 0 200 200` | Margarida estilizada e moderna: 14 a 16 pétalas alongadas e arredondadas, em amarelo `#F5C518` com leve variação (`#FFD84D` em metade das pétalas); miolo circular em dourado `#8A6100` com textura de pontos `#6E4D00`. Grupos `id="petalas"` e `id="miolo"` para a animação. Variante `margarida-contorno.svg`: só contornos de 2px em amarelo, sem preenchimento (para o Contato, a 12% de opacidade) |
| `margarida-mini.svg` | Sobre, Instagram, divisores | 1:1, `0 0 48 48` | Margarida simples de 8 pétalas, amarelo e dourado |
| `traco-sublinhado.svg` | Sob "Esperança" no h1 | ~10:1, `0 0 300 30` | Pincelada orgânica em amarelo `#F5C518`, levemente curva, com pontas afinando. `preserveAspectRatio="none"` |
| `ornamento-margaridas-fundo.svg` | Fundo da seção Esperança | 1:1, `0 0 400 400` | 3 margaridas de tamanhos diferentes, só contornos 1.5px creme `#FFF8E7` (opacidade aplicada no CSS) |
| `ilustracao-pontes.svg` | Seção Pontes | 2:1, `0 0 320 160` | Ilustração em traço (stroke 2.5px, pontas arredondadas): um arco de ponte em azul ligando dois pequenos grupos de pontos/círculos (pessoas abstratas), com uma margarida-mini amarela no topo do arco. Sem bandeiras, mapas ou símbolos nacionais |
| `retrato-placeholder.svg` | Fallback do retrato (Sobre) | 4:5, `0 0 400 500` | Fundo areia `#F7EBCF`, silhueta de busto genérica em `#EADFC4`, monograma SR pequeno em azul na base. Comentário no arquivo: "substituir antes de publicar" |
| Ícones (`icon-*.svg`) | Vários | 1:1, `0 0 24 24` | Linha, stroke 1.75px, `stroke-linecap="round"`, `stroke-linejoin="round"`, `fill="none"`, `stroke="currentColor"` (a cor vem do CSS). Lista abaixo |

**Ícones necessários** (todos com `aria-hidden="true"` no uso, porque sempre acompanham texto):
`icon-menu`, `icon-close`, `icon-seta-direita`, `icon-seta-externa` (seta para cima e direita), `icon-seta-cima`, `icon-conversa` (balão de conversa genérico, **não** o logo do WhatsApp), `icon-email`, `icon-pin`, `icon-cruz`, `icon-coracao`, `icon-familia` (3 figuras simples), `icon-igreja`, `icon-pessoas` (grupo), `icon-mesa` (confraternização: xícaras ou mesa), `icon-maos` (mãos em oração ou mãos dadas), `icon-codigo` (`</>`), `icon-sol`, `icon-amanhecer` (sol nascendo no horizonte), `icon-ancora`, `icon-asas` (asa ou pássaro em voo).
Proibido: redesenhar os glyphs do Instagram ou do WhatsApp (pesquisa 2.6).

### 8.2 Fotos (bancos livres)

| Arquivo | Seção | Tamanho e proporção | O que buscar (termos sugeridos) | Observações |
|---|---|---|---|---|
| `foto-hero.jpg` | Hero (arco) | 1200×1500 (4:5); exportar também 800×1000 | "daisy field morning sunlight", "margaridas luz do sol", "wild daisies backlit sunrise" | Luz dourada da manhã, margaridas brancas com miolo amarelo em primeiro plano, fundo desfocado (bokeh) quente. Precisa funcionar recortada em arco (assunto no centro e no terço inferior). Sem pessoas. ≤ 250 KB |
| `foto-ministerio.jpg` | Ministério | 1600×1200 (4:3); também 800×600 | "men small group prayer", "men fellowship bible study", "group of men talking church", "brotherhood coffee conversation" | Homens adultos em comunhão (conversa, oração, mãos nos ombros, café). Preferir rostos não centrais ou de costas/perfil. Clima caloroso. Marcar "ambiente ilustrativo; substituir por foto real do ministério antes de publicar". ≤ 220 KB |
| `foto-tecnologia.jpg` | Tecnologia | 1600×1200 (4:3); também 800×600 | "laptop code natural light desk", "hands typing laptop warm light", "developer workspace minimal" | Notebook com código ou interface na tela, mesa clara, luz natural, tons neutros ou quentes que conversem com o creme. Sem marcas visíveis em destaque. ≤ 220 KB |
| `retrato-placeholder.jpg` | Sobre (retrato) | 800×1000 (4:5) | "man reading bible window light back view", "silhouette man sunrise", "man holding bible hands close up" | **Não** pode parecer um retrato do Sergio: pessoa de costas, em silhueta contra a luz, ou só mãos com Bíblia. Marcar "substituir antes de publicar pela foto do Sergio". Se não houver foto adequada, usar o `retrato-placeholder.svg`. ≤ 150 KB |
| `og-image.jpg` | Compartilhamento (meta `og:image`) | 1200×630 (1.91:1) | Recorte da `foto-hero.jpg` | Opcional: o gerador pode compor a foto com faixa azul à esquerda e o monograma. Sem texto pequeno |

Formato: JPG progressivo, qualidade 75 a 80, sRGB. Registrar no `imagens.md`, para cada foto: URL da página da foto, autor, banco, licença e se exige atribuição (CC BY → crédito no rodapé, seção 4.10).

---

## 9. Checklist de acessibilidade previsto

- [ ] `lang="pt-BR"` no `<html>`; `<title>` e `meta description` descritivos.
- [ ] Link "Pular para o conteúdo" como primeiro elemento focável.
- [ ] Marcos semânticos: `<header>`, `<nav aria-label="Principal">`, `<main id="conteudo">`, `<section aria-labelledby>` em cada seção, `<footer>`.
- [ ] Um único `<h1>` (hero); `<h2>` por seção; `<h3>` nos cards. Sem pular níveis.
- [ ] Todos os pares de cor da seção 2.1 respeitados; **nenhum texto amarelo em fundo claro**.
- [ ] Foco visível em todos os interativos: azul em fundo claro e amarelo em fundo escuro, 3px, com offset.
- [ ] Alvos de toque: botões com 48px e links de navegação e ícones com ≥44px; nenhum alvo abaixo de 24×24px (2.5.8).
- [ ] Menu mobile com `aria-expanded`, `aria-controls`, fechamento por Esc e retorno do foco; ordem de tabulação lógica.
- [ ] Link ativo da navegação com `aria-current` e indicação que não depende só de cor (sublinhado).
- [ ] Imagens de ambiente com `alt` que descreve a cena (sem fingir que é o Sergio); SVGs decorativos (margaridas, traço, ornamentos, quadrado amarelo, números 01/02/03) com `aria-hidden="true"` ou `alt=""`.
- [ ] Emoji 🌼 em `<span aria-hidden="true">` quando decorativo.
- [ ] Versículos como `<figure><blockquote>…</blockquote><figcaption>…</figcaption></figure>`.
- [ ] Links com texto que faz sentido fora de contexto ("Siga @pr.sergioribeiro no Instagram", "Fale comigo pelo WhatsApp"); links externos em nova aba avisam isso no texto.
- [ ] `prefers-reduced-motion` respeitado em CSS e JS (seção 6); nenhuma animação em loop.
- [ ] Reflow em 320px sem rolagem horizontal; zoom de 200% sem cortes.
- [ ] Barra fixa mobile fora da ordem de tabulação quando escondida, sem cobrir o conteúdo final (padding inferior no rodapé).
- [ ] Imagens com `width`/`height` (sem CLS); `loading="lazy"` em tudo abaixo da dobra; fontes com `display=swap`.
- [ ] Dados `[PENDENTE]` com comentário `<!-- PENDENTE -->` no HTML; nenhum link ativo para URL fictícia de LinkedIn ou portfólio.
- [ ] Créditos de fotos acessíveis no rodapé (CC BY).
