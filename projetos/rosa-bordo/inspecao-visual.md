# Inspeção visual: Rosa Bordô

## Ambiente
- Navegador: Microsoft Edge 157.0.4341.60 (headless), via `playwright-core` (canal `msedge`)
- Método: A (Playwright + Lighthouse)
- Site servido por `http-server` na raiz do projeto (`/site/index.html`, para resolver `../assets`), cache desligado (`-c-1`)
- Data: 2026-11-17
- Iteração: 2 (reinspeção após as correções do ciclo 1, ver `site/CHANGELOG.md`)

## Resumo
**OK, com ressalvas menores**: 0 bloqueantes, 0 importantes, 4 menores.

Todos os pontos pedidos foram confirmados. O menu do celular e o do tablet abrem em tela cheia, com todos os links visíveis. Os 4 slides do carrossel mostram o assunto acima do texto no celular. A etiqueta dos slides tem fundo próprio e fica legível. No desktop, os controles ficam à esquerda e não cobrem a moldura. Os 6 cards da vitrine têm descrições que batem com as fotos, e Matilde substituiu Joaquim. Não há rolagem horizontal, imagens quebradas nem erros de console. O LCP no celular caiu de 4,7 s para 4,0 a 4,1 s. Em compensação, o CLS (0,083) e o TBT (290 a 430 ms) pioraram em relação ao ciclo 1, e a nota de Performance caiu.

## Tabela de achados

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V8 | celular | Hero (todos os slides) | Lighthouse mede uma mudança de layout no bloco de texto do slide 1 (`div.slide__conteudo`), com CLS 0,083. No ciclo 1, o CLS era 0. A mudança aparece depois que a folha do Google Fonts passou a carregar sem bloquear a renderização (T4): é provável que a troca de fonte mude a altura do título | `lh-mobile.json` (auditorias `layout-shifts` e `cls-culprits-insight`); 0,083 nas 2 execuções | menor |
| V9 | celular | Desempenho | TBT de 290 ms e 430 ms (era 0 ms). O Lighthouse aponta reflow forçado em `script.js` linha 9 (134 ms) e linha 121 (11 ms). Performance caiu de 82 para 79 e 75 | `lh-mobile.json` (`forced-reflow-insight`), `lh-mobile2.json` | menor |
| V10 | celular (e tablet) | Sobre | O fundo da seção é um degradê com corte seco (`linear-gradient(#FBF5EF 50%, #FFF 50%)`). No celular, a seção fica empilhada e a linha creme/branco atravessa o texto entre o 1º e o 2º parágrafo | captura de tela em y≈6970 de `celular-inteira.jpg`; computado: `section.sobre` background-image `linear-gradient(rgb(251,245,239) 50%, rgb(255,255,255) 5…` | menor |
| V11 | todas | Cabeçalho / menu | Depois de rolar a página e voltar ao topo (hero), o link "Coleção" continua marcado como seção atual (sublinhado / `aria-current`), embora a seção visível seja o hero. Numa página recém-carregada, nenhum link aparece marcado | `desktop-slide-1.png` (Coleção sublinhado) x `desktop-foco.png` (sem marcação); medido no celular em scrollY=0: link atual = "Coleção" | menor |

Registros que seguem do ciclo 1, sem mudança (fora do escopo desta correção): no desktop, a foto do slide 4 ainda mostra a chupeta (V6, `desktop-slide-4.png`). No celular, a chupeta fica fora do quadro (`celular-slide-4.png`).

## Verificações pedidas pelo orquestrador

| Item | Resultado | Evidência |
|---|---|---|
| Menu do celular em tela cheia | sim: `#menu` = [0, 0, 360, 800], 6 links e o botão "Encomendar" visíveis (`elementFromPoint` confirma), foco vai para "Fechar menu", Esc fecha e devolve o foco a "Abrir menu", clicar num link fecha o menu e rola até `#sobre` | `celular-menu-aberto.png`, `celular-menu-fechado.png` |
| Menu do tablet em tela cheia | sim: `#menu` = [0, 0, 768, 1024], links com 707x56 px, todos visíveis; Esc e clique no link funcionam | `tablet-menu-aberto.png`, `tablet-menu-fechado.png` |
| Slides no celular: assunto acima do texto | sim. Slide 1: rosto da boneca central em y≈180 a 300, etiqueta em y=307. Slide 2: rosto inteiro acima da etiqueta (y=333). Slide 3: mãos com a linha acima da etiqueta (y=409). Slide 4: rosto da boneca de linho acima da etiqueta (y=307), sem chupeta | `celular-slide-1..4.png` |
| Etiqueta legível no celular | sim: fundo `rgba(42,14,24,.72)` e texto `#FBF5EF` nos 4 slides | `celular-slide-1..4.png` |
| Controles no desktop à esquerda, fora da moldura | sim: barra em x 120 a 464, y 822 a 870, alinhada ao texto; a moldura dos slides 2 e 4 começa em x≈770 e fica livre | `desktop-slide-2.png`, `desktop-slide-4.png` |
| Fotos dos 4 slides carregadas | celular: `hero-1-colecao-m-540`, `hero-2-…-m-1080`, `hero-3-…-m-1080`, `hero-4-…-m-720` (webp); desktop: `hero-N-…-1440.webp` | medido (`complete && naturalWidth > 0`) |
| Vitrine coerente com as fotos | sim nos 6 cards. **Lia**: cachos ruivos, laço branco, vestido estampado preto e branco. **Cecília**: maria-chiquinha, bochechas, vestido amarelo com renda. **Matilde**: jardineira pink, meias listradas, cabelo vermelho (sem "Bordado à mão"). **Maria Flor**: boina e saia jeans, sapatos vermelhos, bonequinha (sem "Bordado à mão"). **Aurora**: coelhinhas de jardineira pastel. **Benedita**: cabelo turquesa, casaquinho rosa, vestido de bolinhas | `desktop-colecao.jpg` |
| Depoimentos | depoimento 2 com "Modelo Lia"; depoimento 3 com o texto da jardineira pink e "Modelo Matilde" | `celular-inteira.jpg` |
| Faixa do topo a 360 px | 1 linha, 36 px: "Feito à mão · Enviamos para todo o Brasil" | `celular-dobra.png` |

## Métricas
| Métrica | Celular 360 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Rolagem horizontal (scrollWidth) | não (360) | não (768) | não (1440) |
| Elementos além da largura | só a imagem do hero com zoom e a faixa do Instagram (rolagem interna), sem efeito na página | só a imagem do hero com zoom (R779) | só a imagem do hero com zoom (R1460) |
| Imagens quebradas | 0 | 0 | 0 |
| Erros de console / requisições ≥ 400 | 0 / 0 | 0 / 0 | 0 / 0 |
| Alvos < 44 px | 0 | 0 | 0 |
| Fontes carregadas | Fraunces 500/600 + 500 itálico; Nunito 400/600/700/800 (conferem com o design) | idem | idem |
| Placeholders visíveis ([PENDENTE, Lorem) | 0 | 0 | 0 |

- Ordem de Tab no desktop: pular para o conteúdo → logo → 6 links do menu → Encomendar → controles do hero. O anel de foco aparece no link "Coleção" (`desktop-foco.png`).
- **Lighthouse (celular, Edge headless, 2 execuções)**

| Execução | Performance | Acessibilidade | Boas práticas | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| Ciclo 1 | 82 | 96 | 100 | 100 | 4,7 s | 0 ms | 0 |
| Ciclo 2, 1ª | 79 | 100 | 100 | 100 | **4,1 s** | 290 ms | 0,083 |
| Ciclo 2, 2ª | 75 | 100 | 100 | 100 | **4,0 s** | 430 ms | 0,083 |

  Elemento LCP: imagem do slide 1 (`hero-1-colecao-m-1080.webp`); atraso de renderização de 429 ms. O `styles.css` ainda bloqueia a renderização (cerca de 230 ms). A falha de `list` do ciclo 1 sumiu. A falha de `bf-cache` vem do `Cache-Control: no-store` do servidor local de teste, e não do site.

- Observação de método: a captura de página inteira com emulação mobile (`isMobile`) saiu com a seção Sobre em branco (artefato do modo de captura; ao vivo, a seção aparece normal). Por isso, `celular-inteira.jpg` foi refeita com viewport 360 px sem emulação mobile.

## Capturas
`capturas/`: celular-dobra.png, celular-inteira.jpg, celular-menu-aberto.png, celular-menu-fechado.png, celular-slide-1..4.png, tablet-dobra.png, tablet-inteira.jpg, tablet-menu-aberto.png, tablet-menu-fechado.png, desktop-dobra.png, desktop-inteira.jpg, desktop-foco.png, desktop-colecao.jpg (era .png), desktop-slide-1..4.png. Todas abaixo de 1,5 MB.

## Comparação com a rodada anterior
| ID | Achado do ciclo 1 | Situação |
|---|---|---|
| V1 | Menu do celular recortado (bloqueante) | **resolvido** (tela cheia no celular e no tablet) |
| V2 | 4 cards com descrição incoerente com a foto | **resolvido** (Joaquim virou Matilde; textos descrevem as fotos) |
| V3 | Aurora e Benedita coerentes só em parte | **resolvido** |
| V4 | Assunto atrás do texto no hero do celular | **resolvido** (4 slides) |
| V5 | Controles cobrindo a moldura dos slides 2 e 4 no desktop | **resolvido** (barra à esquerda) |
| V6 | Chupeta no slide 4 | **persiste no desktop** (resolvido no celular); opcional, depende de outra foto |
| V7 | Faixa do topo em 2 linhas a 360 px | **resolvido** |
| — | Lighthouse: LCP 4,7 s, falha `list` | LCP **melhorou** (4,0 a 4,1 s); `list` **resolvido**; novos: CLS 0,083 e TBT 290 a 430 ms (V8, V9) |
