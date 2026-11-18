# Design: Padaria Trigo Doce

Data: 2026-11-15. Entradas: `briefing.md` e `pesquisa.md`. Projeto de teste, com dados fictícios.

---

## 1. Conceito

**"Fornada da manhã: editorial caseiro, claro e quente, com a foto do pão como protagonista."**

Justificativa (ligada à pesquisa):
- Os sites de padaria que funcionam mostram o produto como visual principal, passam credibilidade logo no início e têm **uma única ação** (pesquisa: Zarla, Colorlib, Hostinger). Aqui a ação é **"Encomendar pelo WhatsApp"**, repetida no cabeçalho, no hero, em Encomendas e no CTA final, com uma barra fixa no celular.
- O fundo é creme com texto marrom-café, e o acento é terracota escuro, o único tom terracota aprovado para texto e botão. O mel aparece só como fundo e decoração. Isso atende ao pedido "claro e quente" do briefing sem os pares que a pesquisa reprovou.
- **Gesto visual forte:** títulos grandes em Fraunces com SOFT 100 (formas arredondadas, "massa macia") e um hero dividido com foto grande de pães com cantos bem arredondados, além de um pequeno selo circular "Fermentação natural" sobre a foto. Fora isso, há poucos efeitos.
- No hero, o texto **nunca fica sobre a foto**. O texto fica em painel creme ao lado da foto (desktop) ou abaixo dela (mobile), o que elimina o risco de contraste em imagem (pesquisa, WebAIM).

---

## 2. Tokens

### 2.1 Cores (hex, uso e contraste verificado)

Calculei os contrastes pela fórmula de luminância relativa da WCAG. Os valores batem com a tabela da pesquisa nos pares em comum.

| Token | Hex | Uso |
|---|---|---|
| `--cor-creme` | #FBF5EC | Fundo principal da página |
| `--cor-mel-claro` | #F6E7C8 | Fundo de seções alternadas (Destaques, Equipe, Horários) |
| `--cor-branco` | #FFFFFF | Fundo de cards |
| `--cor-cafe` | #3B2A1E | Texto principal, fundo da seção CTA final e do rodapé, contorno de foco |
| `--cor-marrom` | #6B4F3A | Texto secundário (descrições, legendas, metadados) |
| `--cor-terracota` | #A0482A | Botão primário, links, preços, eyebrow (rótulo acima do título) |
| `--cor-terracota-escuro` | #87391F | Hover/active do botão primário e dos links |
| `--cor-mel` | #D9A441 | Decoração (selo, divisores, estrelas), botão no fundo café e texto de destaque sobre café |
| `--cor-borda` | #E6D5BC | Bordas decorativas de cards e divisórias (não carrega informação) |
| `--cor-borda-forte` | #8A6F58 | Borda do botão secundário (componente de interface, precisa de 3:1) |

**Pares aprovados (use somente estes):**

| Par | Contraste | Resultado |
|---|---|---|
| #3B2A1E sobre #FBF5EC (texto principal / creme) | ~12.6:1 | AAA |
| #3B2A1E sobre #F6E7C8 (texto / mel claro) | ~11.2:1 | AAA |
| #3B2A1E sobre #FFFFFF (texto / card) | ~13.7:1 | AAA |
| #6B4F3A sobre #FBF5EC (secundário / creme) | ~6.9:1 | AA |
| #6B4F3A sobre #F6E7C8 (secundário / mel claro) | ~6.1:1 | AA |
| #6B4F3A sobre #FFFFFF (secundário / card) | ~7.5:1 | AAA |
| #A0482A sobre #FBF5EC (link, preço, eyebrow / creme) | ~5.6:1 | AA |
| #A0482A sobre #FFFFFF (preço / card) | ~6.1:1 | AA |
| #A0482A sobre #F6E7C8 (link / mel claro) | ~5.0:1 | AA |
| #FFFFFF sobre #A0482A (texto do botão primário) | ~6.1:1 | AA |
| #FFFFFF sobre #87391F (botão primário em hover) | ~8.0:1 | AAA |
| #FBF5EC sobre #3B2A1E (texto no CTA final e no rodapé) | ~12.6:1 | AAA |
| #D9A441 sobre #3B2A1E (destaque e links no rodapé) | ~6.1:1 | AA |
| #3B2A1E sobre #D9A441 (botão mel no CTA final) | ~6.1:1 | AA |
| #8A6F58 sobre #FBF5EC (borda do botão secundário) | ~4.3:1 | passa 3:1 (não textual) |
| Foco #3B2A1E sobre creme/mel claro/branco | ≥11:1 | passa 3:1 |
| Foco #D9A441 sobre #3B2A1E (seções escuras) | ~6.1:1 | passa 3:1 |

**Proibido:**
- #CC7A50 e #B5532E em qualquer texto.
- Texto branco sobre verde WhatsApp #25D366 (~2:1). **Não use o verde WhatsApp em nenhum lugar.** Todos os CTAs de WhatsApp usam o botão terracota (ou mel, no fundo café) com o ícone do WhatsApp em SVG monocromático.
- #D9A441 como texto sobre fundos claros.
- #A0482A como texto sobre #3B2A1E (contraste baixo).

### 2.2 Tipografia

Duas famílias do Google Fonts:
- **Títulos:** Fraunces (variável), pesos 600 e 700, eixos `opsz` automático e **`SOFT` 100**, `WONK` 0.
- **Texto e interface:** Nunito Sans, pesos 400, 600 e 700. É uma sans humanista arredondada que combina com o SOFT da Fraunces e tem boa legibilidade em 16 a 18px.

URL sugerida (confira a ordem dos eixos no Google Fonts; se `SOFT` não carregar, use só `opsz,wght` e aplique `font-variation-settings`):
```
https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,600..700,100&family=Nunito+Sans:wght@400;600;700&display=swap
```
Use `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`. Não use script: o tom artesanal vem do SOFT.

Escala fluida (mobile → desktop):

| Token | Valor | Uso |
|---|---|---|
| `--fs-display` | clamp(2.5rem, 1.6rem + 4.5vw, 4.5rem) | H1 do hero (Fraunces 700, line-height 1.05, letter-spacing -0.01em) |
| `--fs-h2` | clamp(1.875rem, 1.4rem + 2.2vw, 3rem) | Títulos de seção (Fraunces 600, lh 1.15) |
| `--fs-h3` | clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem) | Títulos de card (Fraunces 600, lh 1.25) |
| `--fs-lead` | clamp(1.125rem, 1rem + 0.5vw, 1.3125rem) | Subtítulo do hero e introdução das seções (Nunito 400, lh 1.55) |
| `--fs-body` | 1.0625rem (17px) | Corpo (Nunito 400, lh 1.6) |
| `--fs-small` | 0.9375rem (15px) | Legendas, metadados, aviso de demonstração (lh 1.5) |
| `--fs-eyebrow` | 0.875rem (14px) | Rótulo acima do H2: Nunito 700, maiúsculas, letter-spacing 0.12em, cor terracota |
| `--fs-price` | 1.25rem | Preço: Nunito 700, terracota, `font-variant-numeric: tabular-nums` |

O comprimento de linha do texto corrido vai até 65ch.

### 2.3 Espaçamento (base de 4px)

`--sp-1` 4px, `--sp-2` 8px, `--sp-3` 12px, `--sp-4` 16px, `--sp-5` 24px, `--sp-6` 32px, `--sp-7` 48px, `--sp-8` 64px, `--sp-9` 96px, `--sp-10` 128px.
- Padding vertical das seções: `clamp(64px, 10vw, 128px)` (`--sp-section`).
- Container: `max-width: 1180px`, padding lateral de 20px (mobile), 32px (≥768px) e 40px (≥1200px).
- Gap dos grids: 24px (mobile) e 32px (≥1024px).

### 2.4 Raios

`--raio-sm` 8px (inputs, tags), `--raio-md` 16px (cards), `--raio-lg` 28px (fotos grandes: hero e Sobre), `--raio-pill` 999px (botões, selo, chips).

### 2.5 Sombras (tom café, suaves)

- `--sombra-1`: `0 1px 2px rgba(59,42,30,.06), 0 2px 8px rgba(59,42,30,.06)` (cards em repouso, cabeçalho rolado)
- `--sombra-2`: `0 4px 12px rgba(59,42,30,.08), 0 12px 32px rgba(59,42,30,.10)` (card em hover, barra fixa do celular)

### 2.6 Bloco `:root` pronto para copiar

```css
:root {
  /* Cores */
  --cor-creme: #FBF5EC;
  --cor-mel-claro: #F6E7C8;
  --cor-branco: #FFFFFF;
  --cor-cafe: #3B2A1E;
  --cor-marrom: #6B4F3A;
  --cor-terracota: #A0482A;
  --cor-terracota-escuro: #87391F;
  --cor-mel: #D9A441;
  --cor-borda: #E6D5BC;
  --cor-borda-forte: #8A6F58;
  --cor-foco: #3B2A1E;
  --cor-foco-escuro: #D9A441;

  /* Tipografia */
  --font-titulo: "Fraunces", Georgia, "Times New Roman", serif;
  --font-texto: "Nunito Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --fs-display: clamp(2.5rem, 1.6rem + 4.5vw, 4.5rem);
  --fs-h2: clamp(1.875rem, 1.4rem + 2.2vw, 3rem);
  --fs-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --fs-lead: clamp(1.125rem, 1rem + 0.5vw, 1.3125rem);
  --fs-body: 1.0625rem;
  --fs-small: 0.9375rem;
  --fs-eyebrow: 0.875rem;
  --fs-price: 1.25rem;
  --lh-titulo: 1.15;
  --lh-texto: 1.6;

  /* Espaçamento */
  --sp-1: 4px;  --sp-2: 8px;  --sp-3: 12px; --sp-4: 16px; --sp-5: 24px;
  --sp-6: 32px; --sp-7: 48px; --sp-8: 64px; --sp-9: 96px; --sp-10: 128px;
  --sp-section: clamp(64px, 10vw, 128px);
  --container: 1180px;
  --header-h: 72px;
  --barra-mobile-h: 72px;

  /* Raios */
  --raio-sm: 8px;
  --raio-md: 16px;
  --raio-lg: 28px;
  --raio-pill: 999px;

  /* Sombras */
  --sombra-1: 0 1px 2px rgba(59,42,30,.06), 0 2px 8px rgba(59,42,30,.06);
  --sombra-2: 0 4px 12px rgba(59,42,30,.08), 0 12px 32px rgba(59,42,30,.10);

  /* Movimento */
  --transicao: 180ms ease-out;
}

h1, h2, h3 { font-family: var(--font-titulo); font-variation-settings: "SOFT" 100, "WONK" 0; }
html { scroll-padding-top: calc(var(--header-h) + 16px); }
@media (max-width: 767px) {
  html { scroll-padding-bottom: calc(var(--barra-mobile-h) + 16px); }
}
```

---

## 3. Estrutura da página (ordem do HTML)

Landmarks: `header`, `nav`, `main#conteudo`, `footer`. Cada seção usa um `section` com `aria-labelledby` apontando para o seu H2. Há um único H1 (no hero).

### Links do WhatsApp (número fictício 5500900000000)

Sempre com `target="_blank" rel="noopener"` e rótulo acessível terminado em "(abre o WhatsApp em nova aba)". Pode ser via texto `.sr-only` dentro do link. Os textos abaixo já estão codificados como `encodeURIComponent` faria.

| ID | Onde | Mensagem pronta | URL |
|---|---|---|---|
| `wa-geral` | Cabeçalho, hero, barra fixa no celular, CTA final, rodapé | "Olá, Trigo Doce! Vim pelo site e quero fazer uma encomenda." | `https://wa.me/5500900000000?text=Ol%C3%A1%2C%20Trigo%20Doce!%20Vim%20pelo%20site%20e%20quero%20fazer%20uma%20encomenda.` |
| `wa-bolo` | Card "Bolos personalizados" | "Olá, Trigo Doce! Quero encomendar um bolo personalizado." | `https://wa.me/5500900000000?text=Ol%C3%A1%2C%20Trigo%20Doce!%20Quero%20encomendar%20um%20bolo%20personalizado.` |
| `wa-salgados` | Card "Kits de salgados" | "Olá, Trigo Doce! Quero encomendar um kit de salgados para festa." | `https://wa.me/5500900000000?text=Ol%C3%A1%2C%20Trigo%20Doce!%20Quero%20encomendar%20um%20kit%20de%20salgados%20para%20festa.` |
| `wa-cesta` | Card "Cestas de café da manhã" | "Olá, Trigo Doce! Quero encomendar uma cesta de café da manhã." | `https://wa.me/5500900000000?text=Ol%C3%A1%2C%20Trigo%20Doce!%20Quero%20encomendar%20uma%20cesta%20de%20caf%C3%A9%20da%20manh%C3%A3.` |
| `wa-destaques` | Link ao fim dos Destaques do dia | "Olá, Trigo Doce! Quero saber o que tem de fresquinho hoje." | `https://wa.me/5500900000000?text=Ol%C3%A1%2C%20Trigo%20Doce!%20Quero%20saber%20o%20que%20tem%20de%20fresquinho%20hoje.` |

O desenvolvedor pode gerar essas URLs em JS com `encodeURIComponent` a partir de `data-wa-msg`, mas o `href` final **deve existir no HTML** para o link funcionar sem JS.

### 3.0 Link "Pular para o conteúdo"
Primeiro elemento focável. Fica oculto até receber foco; com foco, aparece no topo esquerdo com fundo café, texto creme, padding 12px 16px e raio de 8px.

### 3.1 Cabeçalho (`header`, fixo)
- **Objetivo:** identidade e atalho permanente para encomendar.
- **Conteúdo:** logo SVG (link para `#inicio`), nav com as âncoras "Produtos" (`#destaques`), "Encomendas" (`#encomendas`), "Sobre" (`#sobre`), "Depoimentos" (`#depoimentos`) e "Horários" (`#horarios`), e o botão primário pequeno "Encomendar" (`wa-geral`).
- **Layout:** altura de 72px, fundo creme a 95% de opacidade (`rgba(251,245,236,.95)`) com `backdrop-filter: blur(8px)` como progressivo. Ao rolar mais de 8px, ganha `--sombra-1` e borda inferior `--cor-borda`. Logo à esquerda; nav e botão à direita.
- **Mobile (<1024px):** logo, botão "Encomendar" compacto (44px de altura) e botão hambúrguer (44x44, `aria-expanded`, `aria-controls="menu"`, rótulo "Abrir menu"/"Fechar menu"). O menu abre como painel abaixo do cabeçalho, em largura total, fundo creme, links empilhados com 56px de altura cada. Fecha com Esc, ao clicar em um link e ao clicar fora; ao fechar, o foco volta ao botão.
- **Desktop (≥1024px):** links inline com gap de 28px, Nunito 600 a 16px, cor café. No hover/ativo, a cor vira terracota com sublinhado de 2px e offset de 6px.

### 3.2 Hero (`#inicio`)
- **Objetivo:** emoção ("cheirinho de pão quente") e primeiro CTA.
- **Conteúdo:**
  - Eyebrow: "Padaria e confeitaria artesanal"
  - H1: "Feito com carinho, todo dia."
  - Lead: "Pães de fermentação natural, bolos caseiros e salgados fresquinhos, saindo do forno desde as 6h, aqui no Bairro Jardim."
  - CTAs: primário "Encomendar pelo WhatsApp" com ícone (`wa-geral`) e secundário "Ver produtos do dia" (âncora `#destaques`).
  - Prova rápida abaixo dos CTAs, em linha de chips com ícone, texto `--fs-small` na cor marrom: "Fermentação natural", "Desde 1998" (fictício) e "Seg a Sáb, 6h às 20h".
  - Foto: `hero-paes.jpg`.
  - Selo circular SVG "Fermentação natural · Desde 1998 ·" sobreposto no canto inferior esquerdo da foto: 112px de diâmetro no desktop (96px de 768 a 1023px, 64px abaixo de 768px), fundo mel, texto café. É decorativo (`aria-hidden`, informação repetida nos chips). **Ciclo 2:** dá uma única volta de 4s ao carregar e para (WCAG 2.2.2), apenas sem `prefers-reduced-motion`; o texto "Forno a lenha" saiu porque a página não sustenta essa promessa.
- **Layout mobile (<768px):** foto no topo (proporção **16:10** desde o ciclo 2, cortada por `object-fit: cover`, raio `--raio-lg`, margem lateral de 20px) e texto abaixo sobre creme, para o H1 e o CTA principal caberem na 1ª tela a 360x800. Os CTAs ocupam 100% da largura, empilhados, com gap de 12px.
- **Layout 768 a 1023px (ciclo 2):** 2 colunas (texto `1fr`, foto 4:5 com até 320px de largura), alinhadas ao centro, para o H1 e o CTA aparecerem sem rolar a 768x1024.
- **Layout ≥1024px:** grid de 2 colunas (texto 5fr, foto 6fr) alinhado ao centro, com `min-height: min(88vh, 760px)`. A foto fica em 4:5 com no máximo 620px de altura. CTAs lado a lado.
- **Decoração:** um ramo de trigo SVG (`trigo-ramo.svg`) acima do eyebrow, em mel a 25% de opacidade, só no desktop (`aria-hidden`). Desde o ciclo 2, não cruza o H1 nem o subtítulo.
- **Desempenho:** a foto do hero **não** recebe lazy loading. Use `fetchpriority="high"`, `width`/`height` explícitos e `<picture>` com WebP e JPEG (ciclo 2): abaixo de 768px, recorte 16:10 (`hero-paes-faixa-*`, 480w a 960w, `sizes="calc(100vw - 40px)"`); a partir de 768px, a foto 4:5 em 480w, 640w, 800w e 1120w com `sizes="(min-width: 1024px) 496px, 320px"`. `preload` com `media` para cada caso.

### 3.3 Destaques do dia (`#destaques`, fundo mel claro)
- **Objetivo:** mostrar variedade e preço de referência.
- **Conteúdo:** eyebrow "Saindo do forno", H2 "Destaques do dia" e lead "Preços de exemplo. Consulte a disponibilidade do dia." Depois, filtro por chips: "Todos", "Pães", "Doces", "Bolos" e "Salgados".
  - Os chips são botões `aria-pressed`, com 44px de altura. Com JS, filtram os cards. Sem JS, todos os cards aparecem e os chips ficam ocultos.
- **Cards (8, 2 por categoria):** foto 4:3, tag de categoria, nome (H3), descrição de uma linha e preço.
  - Pães: "Pão de fermentação natural": "Casca crocante, miolo macio, 48h de fermentação." R$ 18,00 (500 g). "Pão francês": "Quentinho de hora em hora." R$ 0,90 (unidade).
  - Doces: "Sonho de creme": R$ 7,50. "Brigadeiro gourmet": R$ 3,50.
  - Bolos: "Bolo de cenoura com chocolate": R$ 42,00 (inteiro). "Fatia de bolo de fubá": R$ 8,00.
  - Salgados: "Coxinha de frango": R$ 7,00. "Pão de queijo": R$ 4,00.
- **Layout:** grid de 1 coluna (<560px), 2 colunas (≥560px), 3 (≥900px) e 4 (≥1200px).
- **Rodapé da seção:** link de texto terracota "Quer saber o que tem de fresquinho hoje? Pergunte no WhatsApp →" (`wa-destaques`).

### 3.4 Encomendas para festas (`#encomendas`, fundo creme)
- **Objetivo:** principal conversão.
- **Conteúdo:** eyebrow "Para os seus momentos", H2 "Encomendas para festas" e lead "Aniversário, chá, reunião de família ou aquele café da manhã surpresa: a gente prepara."
- **3 cards de encomenda (componente "card de encomenda"):** foto 3:2, H3, descrição, lista curta (3 itens com marcador de espiga SVG), "a partir de" com preço e botão primário em largura total.
  1. **Bolos personalizados**: "Massa, recheio e decoração do seu jeito." Itens: "Do mini (10 fatias) ao grande (40 fatias)", "Recheios clássicos e da casa", "Topo personalizado". A partir de R$ 95,00. Botão "Encomendar bolo" (`wa-bolo`).
  2. **Kits de salgados**: "Fritos e assados na hora da retirada." Itens: "Kits de 50, 100 e 200 unidades", "Coxinha, risoles, quibe, esfiha", "Opção de mini pães de queijo". A partir de R$ 75,00 (50 un.). Botão "Encomendar salgados" (`wa-salgados`).
  3. **Cestas de café da manhã**: "Um presente com cheirinho de pão quente." Itens: "Pães, bolo, frutas e suco", "Cartão com mensagem", "Retirada ou entrega no bairro". A partir de R$ 120,00. Botão "Encomendar cesta" (`wa-cesta`).
- **Passo a passo "Como encomendar"** (abaixo dos cards, em `ol` semântica, com H3 "Como encomendar"): 3 passos, cada um com círculo numerado de 56px (fundo mel, número em Fraunces 700 café), ícone SVG, título e texto.
  1. **Escolha** (ícone lista): "Veja as opções acima e escolha o que combina com a sua festa."
  2. **Chame no WhatsApp** (ícone balão): "Toque no botão: a mensagem já vem pronta, é só completar com data e quantidade e enviar."
  3. **Combine e retire** (ícone calendário): "A gente confirma valor, data e horário pelo WhatsApp. Encomendas com pelo menos 48h de antecedência."
  - Nota em `--fs-small`, cor marrom: "O pedido só é confirmado depois da nossa resposta no WhatsApp." Isso deixa claro o que acontece depois do clique, como recomenda a pesquisa.
- **Layout:** cards em 1 coluna (mobile), 3 colunas (≥900px). Passos em lista vertical (mobile) e 3 colunas (≥768px), com linha tracejada `--cor-borda-forte` ligando os círculos no desktop (decorativa).

### 3.5 Sobre a padaria (`#sobre`, fundo creme, separado de Encomendas por um divisor SVG)
- **Objetivo:** afeto e credibilidade.
- **Conteúdo:** foto `sobre-maos-massa.jpg` (4:5) e uma foto menor sobreposta `ambiente-loja.jpg` (1:1, 45% da largura da foto principal, deslocada para baixo e à direita, borda creme de 6px, raio `--raio-md`), só a partir de 768px. No mobile, aparece só a foto principal.
  - Eyebrow "Nossa história", H2 "Uma receita de família desde 1998".
  - 2 parágrafos de exemplo: história da família, a avó que começou com bolos por encomenda, a fermentação natural.
  - 3 diferenciais em lista com ícone SVG de 32px em terracota: "Fermentação natural" ("Massa madre alimentada todo dia, sem pressa."), "Ingredientes selecionados" ("Farinha de moinho, ovos caipiras e manteiga de verdade.") e "Feito no dia" ("O que não sai fresquinho, não vai para a vitrine.").
- **Layout ≥1024px:** 2 colunas, imagem 5fr à esquerda e texto 6fr à direita. No mobile, a imagem vem antes do texto.

### 3.6 Equipe (`#equipe`, fundo mel claro)
- **Conteúdo:** eyebrow "Quem faz", H2 "Mãos que fazem a Trigo Doce" e 3 cards de pessoa: foto 1:1 com raio de 50% (círculo de 160px no mobile e 200px no desktop), nome (H3), função em terracota (Nunito 700, `--fs-small`, maiúsculas) e uma frase curta.
  - "Seu Antônio": Padeiro. "Acordo às 4h para o pão sair na hora certa."
  - "Marina": Confeiteira. "Cada bolo é pensado para a festa de alguém."
  - "Lucas": Atendimento. "Sou eu quem responde o seu WhatsApp!"
- Legenda da seção em `--fs-small`: "Nomes e fotos ilustrativos (site de demonstração)."
- **Layout:** 1 coluna (mobile), 3 (≥768px), tudo centralizado.

### 3.7 Depoimentos (`#depoimentos`, fundo creme)
- **Conteúdo:** eyebrow "Quem prova, volta", H2 "O que dizem os vizinhos" e 3 cards de depoimento, cada um em `figure` com `blockquote` e `figcaption`: 5 estrelas SVG em mel (decorativas; texto `.sr-only` "Avaliação: 5 de 5"), citação em Nunito 400 itálico a 18px, avatar de 56px circular, nome e bairro.
  - "O bolo de aniversário da minha filha foi o mais elogiado da festa." Carla M., Bairro Jardim.
  - "O pão de fermentação natural é o melhor da região. Compro toda semana." Roberto S., Vila Nova.
  - "Encomendei a cesta pelo WhatsApp em 5 minutos. Chegou linda!" Juliana P., Centro.
- Selo visível em cada card, no topo à direita: tag "Exemplo" (fundo mel claro, texto café, raio pill, `--fs-small`). Também há uma nota abaixo da seção: "Depoimentos ilustrativos."
- **Layout (ciclo 2):** 1 coluna (mobile). A partir de 900px, grade `1.35fr 1fr`: o 1º depoimento vira destaque (fundo café, citação em Fraunces 600 grande, ocupa 2 linhas) e os outros 2 ficam empilhados à direita, para quebrar a sequência de seções "título + 3 cards". Sem carrossel.
- **Detalhe:** aspas grandes em SVG, em mel a 40%, no topo esquerdo de cada card (decorativas).

### 3.8 Horários e localização (`#horarios`, fundo mel claro)
- **Sem mapa interativo, iframe ou coordenadas.**
- **Conteúdo:** eyebrow "Venha nos visitar", H2 "Horários e endereço".
  - Card "Horários" (ícone relógio), com tabela semântica `table` de 2 colunas e `caption` visualmente oculto: "Segunda a sábado: 06:00 às 20:00" e "Domingo: 06:00 às 12:00". Use `<time>` nos horários. Com JS opcional, destaque o dia atual com fundo creme e o texto "Hoje" em terracota. Sem JS, nada se perde.
  - Card "Endereço" (ícone alfinete), com `address`: "Rua das Flores, 250 — Bairro Jardim, Cidade Exemplo/UF". Botão secundário "Como chegar", que leva a um link genérico de busca do Google Maps com o endereço em texto (`https://www.google.com/maps/search/?api=1&query=Rua%20das%20Flores%2C%20250%2C%20Bairro%20Jardim`), com `target="_blank" rel="noopener"` e sr-only "(abre em nova aba)". Logo abaixo, nota em `--fs-small`: "Endereço fictício (demonstração)."
  - Card "Contato" (ícone telefone/WhatsApp): "(00) 90000-0000" como link `wa-geral` e "@padariatrigodoce" como link para Instagram (`https://instagram.com/padariatrigodoce`, fictício).
  - Ilustração em vez do mapa: `fachada-ilustracao.svg` (fachada simples da padaria com toldo) ao lado dos cards no desktop. É decorativa, com `alt=""`.
- **Layout:** cards empilhados (mobile), 3 colunas (≥900px) e ilustração acima dos cards, centralizada, com no máximo 360px de largura.

### 3.9 CTA final (`#encomendar`, fundo café #3B2A1E)
- **Conteúdo:** H2 em creme "Bateu vontade? A gente prepara para você.", texto em creme "Encomende pelo WhatsApp e retire quentinho na loja." e botão **mel** (fundo #D9A441, texto café, ~6.1:1) "Encomendar pelo WhatsApp" com ícone (`wa-geral`). O foco nesta seção usa o contorno mel.
- **Layout:** centralizado, max-width de 720px, padding `--sp-section`. Ramo de trigo SVG em mel a 15% nos cantos (decorativo).

### 3.10 Rodapé (`footer`, fundo café, continuação do CTA com borda superior `rgba(251,245,236,.12)`)
- **Conteúdo:** logo em versão clara (`logo-claro.svg`), frase "Feito com carinho, todo dia.", colunas "Navegue" (âncoras), "Contato" (WhatsApp, endereço) e "Siga" (ícones Instagram e WhatsApp de 44x44 com `aria-label`).
- Links em creme, sublinhados; no hover, ficam mel.
- Linha final em `--fs-small`: "© 2026 Padaria Trigo Doce. **Site de demonstração: nomes, endereço, telefone, preços e depoimentos são fictícios.** Fotos de bancos de imagens gratuitos (créditos em imagens.md)."
- **Layout:** colunas empilhadas (mobile) e 4 colunas (≥900px). No mobile, o rodapé tem `padding-bottom` extra de `calc(var(--barra-mobile-h) + 24px)` para a barra fixa não cobrir o conteúdo.

### 3.11 Barra fixa de encomenda (somente <768px)
- Botão primário em largura total, "Encomendar pelo WhatsApp" (`wa-geral`), dentro de uma barra fixa no rodapé da tela: fundo creme a 96%, `--sombra-2`, padding de 12px 16px e `padding-bottom: max(12px, env(safe-area-inset-bottom))`. Altura total de cerca de 72px.
- Aparece depois que o hero sai da tela (IntersectionObserver) e some quando a seção CTA final fica visível, para não duplicar. Sem JS, fica sempre visível.
- Para evitar falha no 2.4.11, use `scroll-padding-bottom` no `html` (já está no `:root`) e `padding-bottom` no `body` igual à altura da barra.

---

## 4. Componentes

Regra geral: transição `var(--transicao)` em cor, fundo, sombra e transform. Com `prefers-reduced-motion: reduce`, remova transform e animações.

**Foco (todos os interativos):** `outline: 3px solid var(--cor-foco); outline-offset: 3px;` via `:focus-visible`. Em fundo café, use `--cor-foco-escuro` (mel). Nunca use `outline: none` sem substituto.

### 4.1 Botões
Base: Nunito 700 a 17px, `min-height: 48px` (44px no compacto do cabeçalho), padding de 14px 24px, raio pill, `display: inline-flex`, gap de 10px, ícone de 20px. Texto nunca quebra em mais de 2 linhas.

| Variante | Normal | Hover | Active | Foco | Desabilitado |
|---|---|---|---|---|---|
| **Primário** (terracota) | fundo #A0482A, texto #FFF (6.1:1), ícone #FFF | fundo #87391F (8.0:1), `translateY(-1px)`, `--sombra-1` | fundo #87391F, sem translate | contorno café de 3px com offset de 3px | fundo #E6D5BC, texto #6B4F3A, `cursor: not-allowed`, `aria-disabled="true"` (não há caso previsto, fica só como padrão) |
| **Secundário** (contorno) | fundo transparente, borda de 2px #8A6F58 (4.3:1), texto #3B2A1E | fundo #F6E7C8, borda #3B2A1E | fundo #E6D5BC | contorno café de 3px | borda #E6D5BC, texto #6B4F3A |
| **Mel** (só sobre café) | fundo #D9A441, texto #3B2A1E (6.1:1) | fundo #E4B65E, texto café (mais claro, contraste maior que 6.1:1) | fundo #D9A441 | contorno **mel** de 3px com offset de 3px sobre café (6.1:1) | não se aplica |
| **Link de texto** | #A0482A, sublinhado de 1px com offset de 3px | #87391F, sublinhado de 2px | igual ao hover | contorno café de 3px, raio de 4px | não se aplica |

### 4.2 Card de produto (Destaques)
- Fundo branco, raio `--raio-md`, borda de 1px `--cor-borda`, `--sombra-1`, `overflow: hidden`.
- Foto 4:3 no topo (`object-fit: cover`, `loading="lazy"`, `width`/`height` definidos). Corpo com padding de 20px: tag de categoria (pill, fundo mel claro, texto café, `--fs-small` 600), H3, descrição na cor marrom e preço terracota com unidade em marrom `--fs-small`.
- Hover (só com `@media (hover: hover)`): `--sombra-2` e zoom de 1.04 na foto (overflow hidden). O card **não** é um link; não há foco no card.

### 4.3 Card de encomenda
- Como o card de produto, com foto 3:2 e o botão primário em largura total no rodapé do card (`margin-top: auto`, card em flex coluna, para alinhar os botões entre os cards).
- "A partir de" em `--fs-small` marrom; valor em `--fs-price` terracota.

### 4.4 Card de pessoa, card de depoimento e card de info
- Pessoa: sem fundo (sobre mel claro), centralizado, foto circular com borda de 4px creme e `--sombra-1`.
- Depoimento: fundo branco, raio `--raio-md`, padding de 28px, borda de 1px `--cor-borda`.
- Info (horários, endereço, contato): fundo creme sobre mel claro, raio `--raio-md`, padding de 24px, ícone terracota de 28px em círculo mel claro de 48px.

### 4.5 Navegação
- Itens com área de clique de pelo menos 44px de altura (padding vertical).
- Estado ativo por seção (opcional, via IntersectionObserver): cor terracota com `aria-current="true"`.
- Hambúrguer: 3 traços SVG café; aberto, vira X. Desabilitado: não se aplica.

### 4.6 Chips de filtro
- Normal: fundo creme, borda de 1px #8A6F58, texto café, `min-height: 44px`, padding de 0 18px.
- Hover: fundo branco.
- Selecionado (`aria-pressed="true"`): fundo café, texto creme (12.6:1).
- Foco: contorno café de 3px com offset de 3px.

### 4.7 Formulários
**Não há formulário**, porque a conversão é pelo WhatsApp. Se o desenvolvedor precisar de algum campo no futuro, siga este padrão:
- Input com fundo branco, borda de 1px #8A6F58 (3:1+), raio `--raio-sm`, altura de 48px, label visível acima (café 600).
- Placeholder #6B4F3A (7.5:1 sobre branco).
- Foco com borda café e contorno de 3px.
- Erro com texto terracota e ícone, mensagem ligada via `aria-describedby`.
- Desabilitado com fundo #F6E7C8 e texto marrom.

### 4.8 Divisores e decorações SVG
- `divisor-onda.svg`: onda suave em largura total, 40px de altura (mobile 24px), na cor do fundo da seção seguinte. Fica entre seções de cores diferentes (hero → destaques, destaques → encomendas, equipe → depoimentos), como `aria-hidden="true"`.
- `trigo-ramo.svg`: decoração no hero e no CTA final.
- `espiga-marcador.svg`: marcador de lista nos cards de encomenda (via `list-style-image` ou `::before`).

### 4.9 Animação
- Fade-in com subida de 12px (400ms) em cards e títulos, ao entrar na tela via IntersectionObserver, uma única vez. O conteúdo fica visível por padrão sem JS (a classe de "oculto" só é aplicada pelo JS).
- Selo do hero (ciclo 2): uma única volta de 4s com desaceleração ao carregar; depois fica parado. Nada se move sozinho por mais de 5s (WCAG 2.2.2).
- Com `prefers-reduced-motion: reduce`: sem fade, sem rotação do selo, sem translate no hover, sem deslize da barra fixa e `scroll-behavior: auto`.

---

## 5. Breakpoints e comportamento mobile

Mobile first, com `min-width`:

| Nome | Largura | Mudanças principais |
|---|---|---|
| base | 0 a 559px | 1 coluna; CTAs em largura total; barra fixa de encomenda; menu hambúrguer; hero com foto em cima |
| sm | ≥560px | Destaques em 2 colunas |
| md | ≥768px | Hero em 2 colunas (ciclo 2); passos e equipe em 3 colunas; foto secundária no Sobre; **barra fixa removida**; container com padding de 32px |
| lg | ≥900px | Encomendas, info e rodapé em 3/4 colunas; depoimentos com 1 citação grande em destaque e 2 menores (ciclo 2); Destaques em 3 colunas |
| xl | ≥1024px | Nav inline; hero e Sobre em 2 colunas; ramo de trigo no hero |
| 2xl | ≥1200px | Destaques em 4 colunas; container de 1180px com padding de 40px |

Testar em 360px, 390px, 768px, 1024px e 1440px. Sem rolagem horizontal em 320px. Com zoom de 200%, o texto refluí sem cortes (1.4.10).

---

## 6. Pedidos de imagem (para o gerador-imagens, que registra tudo em `imagens.md`)

**Todos os arquivos ficam em `projetos/padaria-trigo-doce/site/assets/`**, com caminhos relativos no HTML (`assets/img/...`, `assets/svg/...`). Assim o site funciona publicando só a pasta `site/`.

Fotos: reais, de bancos públicos com licença livre (por exemplo Unsplash ou Pexels). Registre autor, URL e licença em `imagens.md`. Use JPG (ou WebP com fallback JPG) em qualidade de cerca de 75–80, com tons quentes e luz natural, evitando fundos frios ou azulados. Cada foto vem com o texto alternativo sugerido. Se não for possível baixar, crie um placeholder SVG com a mesma proporção e nome `.svg` e registre como pendência.

### 6.1 Fotos

| # | Arquivo | Onde entra | Proporção / tamanho | Busca sugerida / descrição | Alt sugerido |
|---|---|---|---|---|---|
| F1 | `img/hero-paes.jpg` (+ `hero-paes-800.jpg`) | Hero | 4:5, 1120x1400 (e 800x1000) | "artisan sourdough bread loaves on wooden table warm light". Pães rústicos de casca dourada sobre madeira, luz lateral quente, fundo escuro desfocado. Espaço livre no canto inferior esquerdo para o selo | "Pães artesanais de casca dourada sobre bancada de madeira" |
| F2 | `img/produto-pao-natural.jpg` | Destaques: Pão de fermentação natural | 4:3, 800x600 | "sourdough bread sliced crumb" | "Pão de fermentação natural cortado, com miolo aerado" |
| F3 | `img/produto-pao-frances.jpg` | Destaques: Pão francês | 4:3, 800x600 | "french bread rolls basket" ou "brazilian pão francês" | "Cesta com pães franceses fresquinhos" |
| F4 | `img/produto-sonho.jpg` | Destaques: Sonho de creme | 4:3, 800x600 | "cream filled doughnut powdered sugar" | "Sonho recheado com creme e polvilhado com açúcar" |
| F5 | `img/produto-brigadeiro.jpg` | Destaques: Brigadeiro | 4:3, 800x600 | "brigadeiro chocolate truffles" | "Brigadeiros de chocolate em forminhas" |
| F6 | `img/produto-bolo-cenoura.jpg` | Destaques: Bolo de cenoura | 4:3, 800x600 | "carrot cake chocolate frosting" (bolo caseiro com cobertura de chocolate) | "Bolo de cenoura com cobertura de chocolate" |
| F7 | `img/produto-bolo-fuba.jpg` | Destaques: Fatia de fubá | 4:3, 800x600 | "cornmeal cake slice coffee" | "Fatia de bolo de fubá ao lado de uma xícara de café" |
| F8 | `img/produto-coxinha.jpg` | Destaques: Coxinha | 4:3, 800x600 | "coxinha brazilian snack" | "Coxinhas douradas em um prato" |
| F9 | `img/produto-pao-de-queijo.jpg` | Destaques: Pão de queijo | 4:3, 800x600 | "pão de queijo cheese bread" | "Pães de queijo quentinhos em uma cesta" |
| F10 | `img/encomenda-bolo.jpg` | Encomendas: Bolos personalizados | 3:2, 900x600 | "decorated birthday cake pastel" (bolo decorado, sem marcas nem nomes legíveis) | "Bolo de aniversário decorado com chantili e frutas" |
| F11 | `img/encomenda-salgados.jpg` | Encomendas: Kits de salgados | 3:2, 900x600 | "party snacks platter fried savory" (bandeja de salgadinhos de festa) | "Bandeja com salgadinhos de festa variados" |
| F12 | `img/encomenda-cesta.jpg` | Encomendas: Cestas de café da manhã | 3:2, 900x600 | "breakfast basket bread fruit coffee gift" | "Cesta de café da manhã com pães, frutas e suco" |
| F13 | `img/sobre-maos-massa.jpg` | Sobre (principal) | 4:5, 900x1125 | "baker hands kneading dough flour" | "Mãos de padeiro sovando massa sobre bancada enfarinhada" |
| F14 | `img/ambiente-loja.jpg` | Sobre (secundária, ≥768px) | 1:1, 600x600 | "bakery shop interior display warm" (vitrine/balcão aconchegante, sem logos de terceiros legíveis) | "Balcão da padaria com pães e doces expostos" |
| F15 | `img/equipe-padeiro.jpg` | Equipe: Seu Antônio | 1:1, 480x480 | "senior baker portrait apron smiling" (rosto centralizado) | "Seu Antônio, padeiro, sorrindo de avental" |
| F16 | `img/equipe-confeiteira.jpg` | Equipe: Marina | 1:1, 480x480 | "pastry chef woman portrait decorating cake" | "Marina, confeiteira, decorando um bolo" |
| F17 | `img/equipe-atendente.jpg` | Equipe: Lucas | 1:1, 480x480 | "young man bakery counter portrait smiling" | "Lucas, atendente, no balcão da padaria" |
| F18 | `img/depoimento-1.jpg` | Depoimento Carla | 1:1, 160x160 | Retrato de mulher adulta, sorriso, fundo neutro quente | "" (decorativo; o nome já aparece ao lado) |
| F19 | `img/depoimento-2.jpg` | Depoimento Roberto | 1:1, 160x160 | Retrato de homem de 50 a 60 anos, fundo neutro | "" |
| F20 | `img/depoimento-3.jpg` | Depoimento Juliana | 1:1, 160x160 | Retrato de mulher de 30 a 40 anos, fundo neutro | "" |
| F21 | `img/og-image.jpg` | Meta `og:image` | 1200x630 | Recorte horizontal de F1 com o logo sobreposto em painel creme | não se aplica |

Diretrizes: diversidade nos retratos, nada de marcas ou textos legíveis, fotos com luz quente e coerentes entre si. Peso alvo: hero de até 180 KB, cards de até 80 KB e avatares de até 15 KB.

### 6.2 SVGs (criados pelo gerador)

| # | Arquivo | Uso | Especificação |
|---|---|---|---|
| S1 | `svg/logo.svg` | Cabeçalho | Horizontal, viewBox de cerca de 200x48: símbolo de espiga de trigo estilizada dentro de um círculo terracota #A0482A, mais o wordmark "Trigo Doce" em Fraunces 700 SOFT (convertido em path) na cor café #3B2A1E. Linha menor "padaria & confeitaria" em café. `role="img"` e `<title>` "Padaria Trigo Doce" |
| S2 | `svg/logo-claro.svg` | Rodapé | Mesmo desenho, com wordmark em creme #FBF5EC e símbolo em mel #D9A441 |
| S3 | `svg/favicon.svg` | Favicon | Só o símbolo (espiga em círculo terracota), 32x32 legível |
| S4 | `svg/icones.svg` (sprite com `<symbol>`) ou arquivos separados | Ícones da interface | Traço de 2px, cantos arredondados, 24x24, `currentColor`: `whatsapp`, `relogio`, `alfinete`, `telefone`, `instagram`, `lista`, `balao`, `calendario`, `espiga`, `ingrediente` (saco de farinha), `forno` (feito no dia), `menu`, `fechar`, `seta-direita`, `estrela` (preenchida) e `aspas` |
| S5 | `svg/selo-fermentacao.svg` | Hero | Círculo mel #D9A441 com texto circular "FERMENTAÇÃO NATURAL · DESDE 1998 ·" em café (path) e espiga no centro |
| S6 | `svg/trigo-ramo.svg` | Decoração do hero e do CTA final | Ramo de trigo em linha, monocromático com `currentColor` (aplicado em mel com opacidade via CSS) |
| S7 | `svg/divisor-onda.svg` | Entre seções | Onda suave, viewBox 1440x40, `preserveAspectRatio="none"`, `fill="currentColor"` |
| S8 | `svg/espiga-marcador.svg` | Marcador de lista | Espiga de 16x16 em terracota #A0482A |
| S9 | `svg/fachada-ilustracao.svg` | Horários (no lugar do mapa) | Fachada simples com toldo listrado terracota/creme, vitrine com pães, porta e placa "Trigo Doce". Paleta só com os tokens, traço café, de 360 a 480px de largura |

---

## 7. Checklist de acessibilidade previsto

- [ ] `lang="pt-BR"`, um único H1, hierarquia H2/H3 sem saltos, landmarks `header`/`nav`/`main`/`footer`.
- [ ] Link "Pular para o conteúdo" como primeiro elemento focável.
- [ ] Contraste: só os pares da seção 2.1. Nada de #CC7A50/#B5532E em texto, nada de branco sobre #25D366 e nada de texto sobre foto.
- [ ] Foco visível em todos os interativos (3px café, ou mel no fundo café, com offset de 3px), pelo menos 3:1.
- [ ] 2.4.11: `scroll-padding-top` (cabeçalho) e `scroll-padding-bottom` (barra no celular). Rodapé e `body` com padding extra no mobile.
- [ ] Alvos de toque: CTAs com 48px, cabeçalho/hambúrguer/chips/ícones sociais com pelo menos 44x44 e links de texto inline com espaçamento adequado (pelo menos 24px).
- [ ] Links do WhatsApp e externos com `target="_blank" rel="noopener"` e aviso "(abre o WhatsApp em nova aba)" ou "(abre em nova aba)" no nome acessível. `href` completo no HTML (funciona sem JS).
- [ ] Ícones decorativos com `aria-hidden="true"` e `focusable="false"`. Botões só com ícone têm `aria-label`.
- [ ] `alt` descritivo nas fotos de conteúdo; `alt=""` em avatares de depoimento, ilustração da fachada e decorações.
- [ ] Menu móvel com `aria-expanded`/`aria-controls`, fechando com Esc e devolvendo o foco ao botão.
- [ ] Chips de filtro com `aria-pressed`, e a contagem de resultados anunciada em `aria-live="polite"` (ex.: "2 produtos em Pães").
- [ ] Tabela de horários com `caption`/`th scope`. Endereço em `address`.
- [ ] Depoimentos marcados como "Exemplo"; aviso de site de demonstração no rodapé.
- [ ] `prefers-reduced-motion` respeitado (fade, selo giratório, hover translate, smooth scroll).
- [ ] Zoom de 200% e largura de 320px sem perda de conteúdo nem rolagem horizontal.
- [ ] Imagens com `width`/`height` (sem layout shift), `loading="lazy"` fora do hero e `fetchpriority="high"` no hero.
- [ ] Fontes com `display=swap` e fallbacks definidos no `:root`.
