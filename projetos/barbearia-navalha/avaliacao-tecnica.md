# Avaliação técnica: Barbearia Navalha

Data: 2026-11-14 · Arquivos avaliados: `site/index.html` (432 linhas), `site/styles.css` (1209), `site/script.js` (111), comparados com `design.md` e `briefing.md`.
Método: leitura do código, checagem automática de HTML com script Python (tags balanceadas, IDs duplicados, âncoras), cálculo de contraste pela fórmula de luminância relativa do WCAG 2.x e Microsoft Edge headless (medições de DOM e capturas de tela em 320, 360, 768 e 1280 px).

> **Veredito atual (ciclo 3): APROVADO COM RESSALVAS.** Veja a seção "Reavaliação — ciclo 3" no fim do arquivo. As seções anteriores (ciclo 1 e ciclo 2) ficam como histórico.

## Veredito (ciclo 1): REPROVADO

Motivo: o menu mobile (todas as larguras abaixo de 900 px) não funciona. O painel aberto fica com 64 px de altura e mostra só o link "Serviços". Os outros 4 links ficam inacessíveis (achado T1). Corrigido isso, o site sobe para APROVADO COM RESSALVAS: o restante do código está sólido.

## Achados

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T1 | Responsividade / Acessibilidade (WCAG 2.1.1, 2.4.5) | `styles.css:337-343` em conjunto com `styles.css:421-432` | `.site-header` recebe `backdrop-filter: blur(8px)`. Em navegadores modernos, `backdrop-filter` cria um *containing block* para descendentes `position: fixed`. Por isso o `.nav` (filho do header), com `inset: var(--header-h) 0 0 0`, passa a ser medido em relação ao header de 64 px, e não em relação à viewport. **Medido no Edge headless** em 320, 360 e 768 px com o menu aberto: `.nav` com top 64 e **height 64 px**. Os links vão até y=352 e são cortados pelo `overflow-y: auto` do painel. No centro da tela aparece o `h1` do hero, e não o menu. Na captura, só "Serviços" fica visível e o conteúdo da página continua à mostra embaixo. | **Bloqueante** | Tirar o blur do próprio header: aplicar `backdrop-filter` e o fundo translúcido em `.site-header::before` (com `position:absolute; inset:0; z-index:-1`), ou desativar o `backdrop-filter` abaixo de 900 px. Outra opção é tirar o painel do header. Depois, testar de novo com o menu aberto. |
| T2 | Responsividade / Reflow (WCAG 1.4.10) | `index.html:24-25` + `styles.css:358-369` | Abaixo de 360 px, o `<source>` troca o logo pelo `monograma.svg` (1:1). Como `.logo img { width:100% }` e o `flex-basis` é 160 px, o monograma é renderizado com **106,8 x 106,8 px dentro de um header de 64 px** (medido em 320 px). Ele transborda o header e fica cortado no topo. 320 px CSS também é a largura de referência do critério de reflow (zoom de 400% em 1280 px). | Importante | Limitar a altura: `.logo img { height: 40px; width: auto; }` ou `max-height: 40px`. Colocar `width="32" height="32"` no `<source>` para manter a proporção correta. |
| T3 | SEO | `index.html:4-16` | Não há Open Graph (`og:title`, `og:description`, `og:image`, `og:type`, `og:locale`). O link compartilhado no WhatsApp, que é o canal principal do briefing, fica sem prévia. | Importante | Adicionar as metas OG (imagem 1200x630 em `assets/`, por exemplo uma versão PNG do brasão sobre carvão) e `og:locale="pt_BR"`. |
| T4 | Publicação | `index.html:9, 25, 118, 239, 373, 382, 398` | Todos os assets usam `../assets/`, fora da pasta `site/`. Se só a pasta `site/` for publicada (o que é comum), o favicon, os logos, os avatares, o mapa e os divisores quebram. Localmente funciona: todos os 9 caminhos referenciados existem. | Importante | Antes de publicar, copiar os assets usados para `site/assets/` e trocar `../assets/` por `assets/`, ou documentar que a raiz publicada deve ser a pasta do projeto. |
| T5 | Conformidade com o design | `styles.css:672-677` (vs `design.md:239`) | O design pede que a última linha de serviços (2 cards) fique centralizada em ≥900 px. Com `repeat(auto-fit, minmax(280px,340px))` + `justify-content:center`, o que se centraliza é a grade inteira. A captura em 1280 px mostra os 2 últimos cards alinhados à esquerda, sob os 2 primeiros. | Menor | Usar flex com `flex-wrap: wrap; justify-content: center` e cards com `flex: 0 1 340px`, ou posicionar a 2ª linha explicitamente. |
| T6 | SEO | `index.html:4-16` | Faltam `<link rel="canonical">` e dados estruturados `BarberShop`/`LocalBusiness` (endereço, horário, telefone), que são úteis para busca local. | Menor | Adicionar JSON-LD `BarberShop` com `address`, `openingHoursSpecification`, `telephone` e `priceRange`. Incluir o canonical quando houver domínio. |
| T7 | Desempenho | `index.html:12` | São 4 arquivos de fonte (Inter 400/600, Playfair 600/700) carregados de um domínio externo, sem preload. Têm `display=swap` e preconnect, então o impacto é pequeno. Está dentro do limite de 2 famílias do briefing. | Menor | Opcional: hospedar as fontes localmente (woff2, subset latin), ou dispensar o Playfair 600 e usar só o 700. |

## Contrastes (calculados, fórmula de luminância relativa WCAG 2.x)

Todas as razões declaradas em `design.md` (linhas 42-52) foram conferidas e estão **corretas** (diferença ≤0,01).

| Par | design.md | Calculado | Exigido | Resultado |
|---|---|---|---|---|
| `#F2EDE4` / `#141414` | ~15,8 | 15,80 | 4,5 | Passa |
| `#F2EDE4` / `#1E1E1E` | ~14,3 | 14,30 | 4,5 | Passa |
| `#B5ADA1` / `#141414` | ~8,3 | 8,30 | 4,5 | Passa |
| `#B5ADA1` / `#1E1E1E` | ~7,5 | 7,51 | 4,5 | Passa |
| `#D4A94F` / `#141414` | ~8,4 | 8,41 | 4,5 | Passa |
| `#D4A94F` / `#1E1E1E` | ~7,6 | 7,61 | 4,5 | Passa |
| `#141414` / `#D4A94F` (botão) | ~8,4 | 8,41 | 4,5 | Passa |
| `#141414` / `#E2BE6E` (hover) | ~10,4 | 10,37 | 4,5 | Passa |
| `#7A7368` / `#141414` (borda UI) | ~3,9 | 3,93 | 3,0 | Passa |
| `#7A7368` / `#1E1E1E` (borda UI) | ~3,6 | 3,56 | 3,0 | Passa |
| Foco `#D4A94F` / bg e surface | 7,6-8,4 | 7,61-8,41 | 3,0 | Passa |
| Extra: pico do brilho radial do hero (≈`#27231A`): muted / latão / texto | n/d | 7,05 / 7,15 / 13,42 | 4,5 | Passa |
| Extra: `#8A847B` / `#2E2E2E` (desabilitado, não usado) | n/d | 3,66 | isento | n/a |
| Luminância do latão | ~0,43 | 0,429 | n/a | Confere |

## Métricas

- **Peso local** (HTML+CSS+JS+SVGs de `assets/`, sem compressão): 60,8 KB no total. `index.html` 26,8 KB, `styles.css` 21,7 KB, `script.js` 3,7 KB.
- **Requisições**: cerca de 11 locais (HTML, CSS, JS, favicon, 2 logos, divisor, 3 avatares, mapa, monograma). Externas: 1 CSS do Google Fonts + os arquivos woff2. Nenhum iframe e nenhum script de terceiros.
- **Overflow horizontal** (Edge headless): nenhum em 320, 360, 768 e 1280 px (`scrollWidth` ≤ viewport e nenhum elemento além da borda direita).
- **Alvos de toque**: nenhum `a`/`button` visível com menos de 44x44 px nas 4 larguras (medido por `getBoundingClientRect`).
- **h1 calculado**: 40 px (320), 41,8 px (360), 60,2 px (768), 72 px (1280), coerente com o `clamp()`.
- **Lighthouse**: não medido. Exigiria baixar o pacote via `npx` (acesso externo) e não era indispensável.
- **Limitação**: em headless, o IntersectionObserver da revelação ao rolar não disparou de forma confiável para os blocos do fim da página (mapa e CTA final) durante rolagem programática. O código (`script.js:96-110`) está correto e só esconde os elementos quando o JS marca `.reveal-ready`. Por isso não reportei como defeito, mas vale conferir rolando num navegador real.

## Itens verificados sem problema

- HTML: tags balanceadas, nenhum ID duplicado, todas as âncoras internas (`#servicos`, `#sobre`, `#equipe`, `#depoimentos`, `#contato`, `#inicio`, `#conteudo`) existem. `lang="pt-BR"`, `charset`, `viewport`, `<title>` e `<meta description>` estão presentes e específicos.
- Títulos: um único `h1`. Hierarquia h1 > h2 > h3 sem saltos. Os h2 do rodapé são adequados.
- Imagens: todas com `width`/`height`. As decorativas têm `alt=""`, o mapa tem alt descritivo e o brasão inline tem `role="img"` + `<title>`. `loading="lazy"` só abaixo da dobra. `max-width:100%` global.
- Acessibilidade: skip link funcional (`main` com `tabindex="-1"`), `:focus-visible` global de 2 px em latão com offset de 3 px, `scroll-padding-top` que compensa o header fixo (WCAG 2.2, 2.4.11). Links que abrem em nova aba avisam com texto oculto. Botões só com ícone têm `aria-label`. Tabela de horários com `caption` e `th scope`. Depoimentos de exemplo marcados de forma visível.
- Menu (lógica JS): `aria-expanded`/`aria-label` alternados, Esc fecha e devolve o foco, clicar num link fecha o menu, foco contido no header, fecha ao passar para o desktop, rolagem do body bloqueada. Sem JS, a nav aparece em linha (fallback). O defeito T1 é só de CSS.
- `prefers-reduced-motion`: animações, hover com translate, `scroll-behavior: smooth` e a revelação ao rolar só valem com `no-preference`. O JS também verifica.
- Responsividade: mobile-first, breakpoints 600/900 px iguais aos do design, tipografia com `clamp()`, nenhuma largura fixa grande, layouts em 360/768/1280 conferidos nas capturas.
- Desempenho: `script.js` com `defer`, fontes com `display=swap` e preconnect, sem frameworks, hero sem imagem raster (LCP é texto/SVG inline).
- Tokens: as cores em `styles.css:8-18` batem exatamente com `design.md:26-36`. Não há texto off-white sobre latão.


---

## Reavaliação — ciclo 2

Data: 2026-11-14 · Base: `site/CHANGELOG.md` (Iteração 2) e `avaliacao.md` (ITERAR, ciclo 1). Arquivos: `site/index.html` (479 linhas, 29,4 KB), `site/styles.css` (1243 linhas, 23,8 KB) e `site/script.js` (111 linhas, sem mudanças).
Método: Microsoft Edge headless controlado por CDP (Chrome DevTools Protocol, via Node), com a página servida em `127.0.0.1`, viewport emulado em 320, 360, 600, 700, 768 e 1280 px, **cliques reais de mouse e teclas Tab, Shift+Tab, Enter e Esc reais** (`Input.dispatch*`) e capturas de tela. Também usei parser HTML em Python e `JSON.parse` do JSON-LD.

### Veredito: APROVADO COM RESSALVAS

O bloqueante T1 foi corrigido e confirmado com o menu aberto em 320, 360 e 768 px. T2, T3, T5 e T6 (parte 1) também foram corrigidos. Não encontrei regressão bloqueante nem importante. Seguem abertos os itens adiados de propósito (T4, canonical do T6, T7) e 2 achados menores novos (T8, T9).

### Situação dos achados anteriores

| ID | Situação | Evidência |
|---|---|---|
| T1 (bloqueante) | **Corrigido** | `styles.css:328-363`: o fundo e o `backdrop-filter` estão em `.site-header::before`, e o header tem só `isolation: isolate`, que não cria containing block para `position: fixed`. Medido com o menu aberto em **320, 360 e 768 px**: `.nav` com top 64 e **height 636 px** (viewport de 700 menos 64), `visibility: visible`, `opacity: 1`, fundo `rgb(20,20,20)` opaco. Os 5 links ficam em y = 80, 136, 192, 248 e 304, com 56 px cada, e `elementFromPoint` no centro de cada um devolve o próprio link. Nas capturas, o painel cobre a tela inteira abaixo do header e nada do conteúdo aparece por baixo. O body fica com `overflow: hidden`. |
| T2 | **Corrigido** | `index.html:68` (`<source ... width="32" height="32">`) e `styles.css:387-396`. Em 320 px: `monograma.svg` com 32 x 32 px, top 16, dentro do header de 64 px, sem corte (confirmado na captura). Em 360 px o logo completo fica com 146,8 x 29,4 px e em 768 px com 160 x 32 px. |
| T3 | **Corrigido (parcial e documentado)** | `index.html:9-21`: `og:type`, `og:locale=pt_BR`, `og:site_name`, `og:title`, `og:description` e `twitter:card`. `og:image` e `og:url` ficam comentados como PENDENTE, porque dependem de PNG 1200x630 e de domínio absoluto. Isso está de acordo com a orientação de `avaliacao.md`. Sem `og:image`, a prévia no WhatsApp sai só com texto: precisa ser resolvido antes de publicar. |
| T5 | **Corrigido** | `styles.css:686-708` (flex + `justify-content: center`). Em 1280 px (viewport útil de 1265): a 1ª linha vai de 91 a 1175 e a 2ª de 277 a 989, com centro em 633, igual ao centro da grade (633). A captura confirma. Entre 600 e 899 px, o 5º card sozinho também fica centralizado (600 px: 167-418 de 585; 700 px: 195-490 de 685). Essa divergência do design está registrada no CHANGELOG e não traz problema técnico. |
| T6 | **Parte 1 corrigida**, canonical adiado | `index.html:22-54`: JSON-LD `BarberShop` válido (`JSON.parse` sem erro). Os dados batem com o conteúdo visível: telefone `+55 11 90000-0000` (`index.html:403`), endereço Rua das Palmeiras, 120 (`index.html:386`), horários Ter-Sex 9h-20h e Sáb 8h-18h (`index.html:395-397`) e faixa de preço R$ 20 a R$ 85 (preços em `index.html:173-218`). Canonical e `url` dependem de domínio. |
| T4 | Aberto (adiado) | Continuam os caminhos `../assets/`. Os 8 arquivos referenciados existem. Bloqueia apenas uma publicação que suba só a pasta `site/`. |
| T7 | Aberto (adiado) | Sem mudança, segue menor. |

### Novos achados (ciclo 2)

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T8 | Acessibilidade / teclado | `script.js:55-60` | Com o menu aberto, a contenção de foco devolve o foco ao botão "Fechar menu" em vez de fazer um ciclo. Medido com Tab real: Serviços > Sobre > Equipe > Depoimentos > Contato > Agendar > **Fechar menu > Fechar menu > Fechar menu...** O foco não volta ao logo nem a "Serviços". Não é armadilha de teclado (WCAG 2.1.2 atendido: Shift+Tab funciona, medido Agendar > Contato > Depoimentos, e Esc fecha e devolve o foco ao botão), mas o Tab "trava" no botão sem sinal de que acabou. | Menor | No `focusin` fora do header, mandar o foco para o primeiro elemento focável do header (logo) ou para o primeiro link do menu, fazendo um ciclo. Outra opção é tratar Tab/Shift+Tab no último/primeiro elemento. |
| T9 | Acessibilidade / alvo de toque | `styles.css:387-396` | Abaixo de 360 px, `.logo` com `flex: none` passa a ter a largura do monograma: o link "Barbearia Navalha, início" fica com **32 x 44 px** (medido em 320 px), abaixo dos 44 x 44 px do checklist. Atende ao WCAG 2.5.8 (24 px, nível AA na 2.2), por isso não é bloqueante. É efeito colateral da correção do T2: antes o link tinha cerca de 107 px de largura. | Menor | Adicionar `min-width: 44px` (com `justify-content: center`) a `.logo` dentro de `@media (max-width: 359px)`. |

### Regressões verificadas (nenhuma encontrada além de T9)

- **Rolagem horizontal**: não há em 320, 360, 600, 700, 768 e 1280 px (`scrollWidth` igual à viewport útil, e nenhum elemento fora de `.nav` passa da borda direita).
- **Header**: 64 px no mobile e 72 px no desktop, com fundo translúcido + blur no `::before`. Em `.is-scrolled`, o fundo `surface` e a sombra continuam. Em 1280 px a nav fica em linha (`display: flex`), o hambúrguer não aparece e a ordem de Tab é: pular conteúdo > logo > 5 links > Agendar.
- **Menu (comportamento)**, medido em 320, 360 e 768 px: clique abre com `aria-expanded="true"` e `aria-label="Fechar menu"`, e o foco vai para "Serviços". Pelo teclado (Tab até o botão e Enter), o menu abre e "Serviços" recebe foco com `:focus-visible` (outline sólido de 2 px `#D4A94F`). Esc fecha (`aria-expanded="false"`, `visibility: hidden`, overflow do body restaurado) e devolve o foco ao botão. Clicar em "Equipe" fecha o menu e rola até `#equipe` (top 80 = header 64 + `scroll-padding`). Se a viewport passa para 1280 px com o menu aberto, ele fecha e libera o overflow.
- **Sem JS**: o fallback (`html:not(.js)`, `styles.css:482-507`) não mudou.
- **HTML**: tags balanceadas, nenhum ID duplicado, um único `h1`, hierarquia h1 > h2 > h3 sem saltos, todas as âncoras internas existem e os 8 caminhos de `../assets/` existem.
- **Contraste**: a paleta não mudou, então os valores da tabela do ciclo 1 continuam válidos. O painel do menu usa texto `#F2EDE4` sobre `#141414` (15,80:1).
- **Alvos de toque**: fora o T9, nenhum `a`/`button` visível tem menos de 44 x 44 px em 320, 360, 768 e 1280 px. Os links do menu mobile têm 56 px de altura.
- **h1**: 40 / 41,8 / 60,2 / 72 px (320 / 360 / 768 / 1280), igual ao ciclo 1.

### Métricas (ciclo 2)

- Peso local de HTML + CSS + JS: 56,9 KB (antes 52,2 KB). O aumento vem do Open Graph, do JSON-LD e do CSS do `::before` e da grade flex. Os SVGs de `assets/` não mudaram.
- Requisições: as mesmas do ciclo 1. O JSON-LD é inline e não gera requisição.
- Lighthouse: não medido, pelo mesmo motivo do ciclo 1 (exigiria baixar pacote externo via `npx`).
- Limitação: o teste foi feito no Edge (Chromium) emulando viewport, sem toque real e sem Safari/iOS. A correção do T1 usa CSS padrão (`::before` + `isolation`), sem dependência de motor, mas vale conferir num iPhone real antes de publicar.

### Pendências antes de publicar (não bloqueiam a aprovação do código)

1. T4: decidir a raiz publicada ou copiar `assets/` para `site/assets/`.
2. T3/T6: `og:image` (PNG/JPG 1200x630), `og:url`, `canonical` e `url` no JSON-LD quando houver domínio.
3. Substituir os dados fictícios (endereço, telefone, preços, depoimentos), inclusive no JSON-LD.


---

## Reavaliação — ciclo 3

Data: 2026-11-15 · Base: `site/CHANGELOG.md` (Iterações 3 a 6), `dados-negocio.md`, `imagens.md`, `briefing.md` e `design.md`. Arquivos: `site/index.html` (516 linhas, 32,6 KB), `site/styles.css` (24,7 KB) e `site/script.js` (3,7 KB, sem mudanças desde o ciclo 1).
Método: página servida em `127.0.0.1` e aberta no Microsoft Edge headless controlado por CDP (Node 24), com viewport emulado em 320, 360, 768 e 1280 px. Usei clique de mouse e tecla Tab reais (`Input.dispatch*`), medições de DOM e de rede, e capturas de tela. O contraste sobre a foto foi medido em capturas com o texto do hero transparente, e foi calculado com a fórmula de luminância WCAG sobre o **pixel mais claro** de cada caixa de texto (pior caso). Também usei parser HTML em Python, `json.loads` no JSON-LD e grep de dados antigos.

### Veredito: APROVADO COM RESSALVAS

Não há achado bloqueante. O único item importante é o T4, que foi adiado e só vale para a publicação. Os dados reais batem com `dados-negocio.md` em todos os pontos (texto visível, links e JSON-LD), e não sobrou número de teste nem endereço antigo visível. Seguem abertos T7, T8 e T9 (menores), e há 4 achados menores novos (T10 a T13). Um deles é a quebra do botão do CTA final, que continua.

### Situação dos achados anteriores

| ID | Situação | Evidência |
|---|---|---|
| T4 (importante, publicação) | **Aberto (adiado)** | São 14 caminhos `../assets/` em `index.html` e em `url()` de `styles.css:605, 663, 1115`. Todos existem localmente. Uma publicação que suba só `site/` quebra o favicon, os logos, as fotos (inclusive o fundo do hero) e o placeholder do mapa. |
| T6 (canonical/`url`) | Aberto (depende de domínio) | `index.html:22` (comentário PENDENTE). |
| T3 (`og:image`/`og:url`) | Aberto (depende de domínio) | `index.html:15-20` comentados. Agora já existe foto que pode virar a base de uma imagem OG 1200x630 (por exemplo, recortar `hero-wide.jpg` com o brasão). |
| T7 (menor) | **Aberto** | `index.html:67`: 4 pesos de fonte externos. Medido: 2 woff2 baixados (Inter e Playfair, subset latin). |
| T8 (menor) | **Aberto, sem mudança** | `script.js:55-60`. Tab real em 360 px com o menu aberto: Serviços > Sobre > Equipe > Depoimentos > Contato > Agendar > **Fechar menu > Fechar menu > Fechar menu...** O foco não faz ciclo. |
| T9 (menor) | **Aberto, sem mudança** | `styles.css:391-400`. Em 320 px, o link do logo continua com **32 x 44 px** e é o único alvo abaixo de 44 x 44 px na página. Atende ao WCAG 2.5.8 AA (24 px). |
| CTA final em 2 linhas (citado em `avaliacao.md`) | **Aberto**, agora registrado como T10 | Veja abaixo. |

### Novos achados (ciclo 3)

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T10 | Responsividade | `styles.css:297-300` (`.btn--large`, padding 18px 32px) + `styles.css:1142-1152` (`.cta-final`, padding 24px) | O botão "Agendar pelo WhatsApp" do CTA final quebra em 2 linhas no mobile ("Agendar pelo / WhatsApp"). Medido: altura de **70 px em 320 e em 360 px**, contra 58 px em 768 e 1280 px (1 linha). A captura em 360 px confirma. Em 320 px, os outros 3 botões "Agendar pelo WhatsApp" (hero, serviços e contato) também quebram: altura de 62 px, contra 50 px em uma linha. | Menor | Abaixo de 400 px, reduzir o padding lateral de `.btn--large` para 20-24px e o de `.cta-final` para 16-20px, ou usar `white-space: nowrap` com `font-size` um pouco menor nos botões. Depois, conferir que nada transborda em 320 px. |
| T11 | Acessibilidade / foco (WCAG 2.4.7) | `index.html:454` + `styles.css:1111-1125` | Com Tab, o foco entra no `iframe` do mapa (em 1280 px, `activeElement` = IFRAME depois de "Como chegar"). Na página, porém, nada mostra isso: `iframe:focus`, `:focus-visible` e `.mapa:focus-within` não casam (o foco está dentro do documento de outra origem), e o `outline` é `none`. Só o próprio Google Maps pode desenhar o foco por dentro. Isso não deu para conferir porque o mapa fica cinza no headless. | Menor (verificar) | Conferir num navegador comum se o embed mostra foco visível nos controles. Se não mostrar, uma saída é colocar antes do iframe um link de pular ("Pular mapa") ou dar `tabindex="-1"` ao iframe. Os links "Abrir no Google Maps" e "Como chegar" já oferecem a mesma função. |
| T12 | Conteúdo / manutenção | `index.html:406` | Comentário desatualizado: `<!-- Dados reais (dados-negocio.md). Telefone/WhatsApp ainda é número de teste -->`. O número já é o real (98585-7623). O comentário não aparece na página, mas engana quem for manter o código e contradiz a instrução 1 de `dados-negocio.md`. | Menor | Trocar por `<!-- Dados reais (dados-negocio.md) -->`. |
| T13 | Responsividade / legibilidade | `index.html:125` | Em 320 px, a linha de horários do hero quebra dentro do intervalo: "Seg a Sex 08:00–18:00 · Sáb 08:00–" / "12:00" (captura em 320 px). A quebra acontece depois do traço. | Menor | Envolver cada intervalo em `span.nowrap` (a classe já existe), por exemplo `<span class="nowrap">Sáb 08:00–12:00</span>`. O mesmo vale para o rodapé (`index.html:491`). |

### Verificações do ciclo 3 sem problema

**Dados reais (vs `dados-negocio.md`)**
- O endereço "Quadra 11, Casa 40 – Sobradinho/DF – CEP 73040-114" aparece em `index.html:409` e `:487`. O telefone "(61) 98585-7623" aparece com `tel:+5561985857623` em 2 lugares (`:426`, `:488`). Os links `wa.me/5561985857623` com a mensagem codificada idêntica à de `dados-negocio.md:42` são 6. O e-mail tem `mailto:` em 2 lugares, o Instagram está em `:498`, e "Abrir no Google Maps" e "Como chegar" usam os links exatos (`:439`, `:444`). Os horários batem na tabela, no hero e no rodapé.
- JSON-LD (`index.html:23-63`): é JSON válido. `telephone`, `email`, `address` (com `postalCode` 73040-114), `geo`, `hasMap`, `openingHoursSpecification` e `sameAs` são **idênticos** ao bloco sugerido em `dados-negocio.md:52-88`. `description`, `priceRange` e `currenciesAccepted` são extras coerentes com o conteúdo visível.
- Grep em `site/` por `99999`, `5561999`, Palmeiras, São Paulo, Brasília, `90000`, `5511`, `barbearianavalha`, "fictíc" e "teste": a única ocorrência é o comentário do T12. `assets/mapa-placeholder.svg` e `assets/brasao-hero.svg` não têm mais textos antigos.

**HTML**
- Tags balanceadas, nenhum ID duplicado, todas as âncoras internas existem e um único `h1`. A hierarquia h1 > h2 > h3 não tem saltos. Os 14 caminhos de assets existem.

**Imagens e mapa**
- `alt` das fotos: as 3 da equipe e as 3 de depoimentos começam com "Foto ilustrativa...", e a do ambiente é descritiva. Todos são iguais aos de `imagens.md`. As fotos de fundo do hero são decorativas (CSS) e não precisam de `alt`. O brasão tem `role="img"` + `<title>`. Todas as `<img>` têm `width`/`height`.
- Iframe (`index.html:454`): tem `title` descritivo ("Mapa: localização da Barbearia Navalha, Quadra 11, Casa 40, Sobradinho/DF"), `loading="lazy"`, `referrerpolicy` e `allowfullscreen`. O `src` é exatamente o de `dados-negocio.md:47`. Não tem `width`/`height` no HTML, mas o contêiner `.mapa` reserva o espaço com `aspect-ratio` (4:3, e 16:10 a partir de 600 px), então não há deslocamento de layout. Medidas: 280x210 (320), 320x240 (360), 691x432 (768) e 616x385 (1280). Endereço e links continuam visíveis junto do mapa. O mapa cinza no headless é limitação conhecida e avaliei só a marcação.

**Contraste do texto sobre a foto do hero (pior pixel / percentil 95)**

| Largura | Eyebrow `#D4A94F` | h1 `#F2EDE4` | Lead `#B5ADA1` | Horários `#B5ADA1` | Borda do botão ghost `#7A7368` |
|---|---|---|---|---|---|
| 320 | 6,22 / 6,51 | 10,88 / 12,29 | 6,05 / 7,41 | abaixo da dobra (gradiente mais escuro, 0,92) | abaixo da dobra |
| 360 | 6,12 / 6,46 | 10,85 / 12,32 | 6,05 / 7,49 | abaixo da dobra | 3,07 |
| 768 | 6,12 / 6,47 | 11,02 / 12,46 | 6,22 / 7,67 | abaixo da dobra | 3,18 |
| 1280 | 7,68 / 7,84 | 10,25 / 13,56 | 7,00 / 7,85 | 7,93 / 8,07 | 3,75 |

Todos os textos passam AA (4,5:1) mesmo no pior pixel, e a borda do botão passa o mínimo de componente de UI (3:1). A borda fica mais perto do limite no mobile, com 3,07. O restante da paleta não mudou, então a tabela do ciclo 1 continua válida.

**Responsividade, foco e toque**
- Rolagem horizontal: nenhuma em 320, 360, 768 e 1280 px (`scrollWidth` = `clientWidth`, e nenhum elemento passa da borda).
- Fundo do hero: `hero.jpg` abaixo de 900 px e `hero-wide.jpg` a partir de 900 px (estilo computado). Cada largura baixa **só uma** das duas.
- O `:focus-visible` global segue ativo. O skip link e o `scroll-padding` não mudaram. Fora o T9, nenhum alvo tem menos de 44 x 44 px nas 4 larguras.
- h1: 40 / 41,8 / 60,2 / 72 px, sem mudança.

**Desempenho**
- Preload do hero com `media` complementar (`index.html:70-71`) e `fetchpriority="high"`. No carregamento a frio em 320 px, antes de rolar, só foram pedidos o CSS das fontes, `hero.jpg` e os 2 woff2. As fotos lazy (ambiente, equipe e depoimentos) só carregaram ao rolar. Todas têm `loading="lazy"` e `decoding="async"`, e o hero não usa lazy.
- Todas as fotos carregaram (`naturalWidth > 0`).

### Métricas (ciclo 3)

- Peso local: HTML + CSS + JS = 60,9 KB. Fotos: `hero.jpg` 164 KB (1200x1500), `hero-wide.jpg` 73 KB (1600x900), `ambiente-1.jpg` 125 KB (1200x800), equipe 66 KB (3 x 480x480) e depoimentos 57 KB (3 x 320x320).
- Primeira dobra: cerca de 225 KB no mobile (HTML/CSS/JS + `hero.jpg`) e cerca de 134 KB no desktop, sem contar as fontes. Página completa sem o mapa: cerca de 470 KB no mobile e 380 KB no desktop.
- Requisições externas: Google Fonts (1 CSS + 2 woff2) e, depois de rolar, o embed do Google Maps (iframe lazy, com scripts e tiles de terceiros, peso não medido porque o headless não renderiza o mapa).
- Observação (opcional, não é achado): `hero.jpg` tem 1200 px de largura e fica sob um overlay de 0,80 a 0,92 no mobile. Uma versão de 800 px em WebP com `image-set()` cortaria cerca de 100 KB do LCP mobile.
- Lighthouse: não medido, pelo mesmo motivo dos ciclos anteriores (exigiria baixar pacote externo via `npx`).
- Limitação: o mapa fica cinza no headless (WebGL), então não conferi o render nem o foco interno do embed (T11). O teste foi feito em Chromium emulando viewport, sem Safari/iOS e sem leitor de tela real.

### Pendências antes de publicar (não bloqueiam a aprovação do código)

1. T4: decidir a raiz publicada ou copiar `assets/` para `site/assets/` e ajustar os caminhos no HTML e no CSS.
2. T3/T6: `og:image` 1200x630, `og:url`, `canonical` e `url` no JSON-LD quando houver domínio.
3. Conteúdo de exemplo (`briefing.md:3`): fotos e nomes da equipe, depoimentos e preços. O `priceRange` "R$ 20 - R$ 85" do JSON-LD vem dos preços de exemplo e precisa ser revisto junto com eles. O aviso do rodapé (`index.html:511`) deve sair quando o conteúdo real entrar.
4. Conferir o mapa (render e foco) num navegador comum.
