# Inspeção visual: Futebol Kids

## Ambiente
- **Navegador principal:** Microsoft Edge 157.0.4341.60 (headless), via `playwright-core` (`channel: 'msedge'`)
- **Navegador extra:** Firefox 159.0 (build do Playwright, baixado só na pasta temporária de scripts), usado para testar a reprodução do MP4
- **Método:** A (Playwright com o navegador instalado), mais Lighthouse via `npx` (Edge)
- **Servidor:** servidor estático local em Node (porta 8090, com suporte a `Range`, sem compressão), encerrado no fim
- **Data:** 2026-11-17
- **Iteração:** ciclo 2 (vídeo de fundo no hero, `site/CHANGELOG.md` "Iteração 2" e `design.md` §3.3). Comparação com o ciclo 1 no fim.
- **Larguras:** celular 360x800, tablet 768x1024, desktop 1440x900. Extras: 899 e 900 (limite do vídeo) e redimensionamento ao vivo 1440 → 800 → 1440.

## Resumo
**PROBLEMAS ENCONTRADOS**: nenhum bloqueante, 1 importante (V2, que vem do ciclo 1) e 2 menores (V4 do ciclo 1 e N1, novo). O vídeo do hero se comporta como pede a §3.3:
- Ele é criado e toca a partir de 900px. Em 360, 768 e 899px, e também com movimento reduzido, nenhuma requisição ao MP4 é feita.
- O botão pausar/reproduzir funciona com clique, Enter e Espaço. O `aria-label` alterna, o foco é visível (anel amarelo de 3px) e a pausa fica salva.
- O contraste do título, do lead e dos botões passa no AA sobre o poster e sobre os quadros de 0, 8 e 15 s. O pior caso do H1 subiu de 4,47:1 no ciclo 1 para 6,07:1.
- O MP4 fragmentado toca e repete em loop no Firefox.
- Não há rolagem horizontal, imagens quebradas nem erros de console em nenhuma largura.

## Tabela de achados

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V2 | tablet, desktop | Diferenciais (grade "bento") | **Persiste.** A grade continua com buracos. No desktop, "Relatório para os pais" fica sozinho na última linha, com cerca de 2/3 da largura vazios. No tablet aparecem os mesmos buracos do ciclo 1 | `capturas/desktop-inteira.jpg` e `capturas/tablet-inteira.jpg` (seção "Cuidado que os pais enxergam") | importante |
| V4 | desktop (900 e 1440) | Hero | **Persiste.** Confetes passam por cima do botão amarelo "Agendar aula grátis": há triângulos e pontos sobre "aula grátis" e logo abaixo do botão. Eles vêm do confete do placar (`.placar-confete`), não do confete do topo do hero (que fica em x 1096–1416, y 101–301) | `capturas/desktop-dobra.png`, `capturas/desktop900-dobra.png`, `capturas/desktop-hero-video-8s.jpg` | menor |
| N1 | celular | Desempenho | A nota de desempenho do Lighthouse no celular caiu de 91 (ciclo 1) para **82, 87 e 89** em 3 rodadas (mediana 87). O LCP foi de 3,3 s para 3,5–3,6 s, e o TBT variou de 0 a 330 ms entre as rodadas. O celular **não** baixa o MP4 (0 requisições no Lighthouse). O tempo de CPU está em `index.html` (estilo e layout, 1,6–2,1 s) e não em `script.js` (cerca de 55 ms). Parte da variação é ruído da máquina | `lh-mobile*.json` (pasta temporária): perf 82/87/89, LCP 3,6/3,5/3,5 s, TBT 330/170/0 ms | menor |

Itens do ciclo 1 que não foram medidos de novo (essas seções não mudaram nesta iteração, segundo o `CHANGELOG.md`): V1 (cartão sobre o mapa), V3 (confetes no CTA final), V6 (passo 3 da metodologia desalinhado), V7 (espaçamento do plano 1x) e V8 (quebra do e-mail e dos telefones no celular). Na `desktop-inteira.jpg` deste ciclo, as seções de Metodologia, Planos e CTA final aparecem com a mesma composição do ciclo 1.

## Verificações pedidas neste ciclo

### 1. Vídeo criado só a partir de 900px (requisições de rede)
| Largura / condição | `<video>` criado | Tocando | Requisições ao `hero.mp4` | Imagem da `<picture>` | Botão pausar |
|---|---|---|---|---|---|
| 360 (celular) | não | — | **0** | `hero-mobile.webp` | não existe |
| 768 (tablet) | não | — | **0** | `hero-mobile.webp` | não existe |
| 899 | não | — | **0** | `hero-mobile.webp` | não existe |
| 900 | sim | sim | 2 | `hero-poster.jpg` | existe |
| 1440 | sim | sim (`currentTime` 3,71 → 5,22 s em 1,5 s) | 7 (pedidos `Range` 206) | `hero-poster.jpg` | existe |
| 1440 + movimento reduzido | não | — | **0** | `hero-poster.jpg` | não existe |

- **Atributos do vídeo:** `muted loop playsinline disablepictureinpicture aria-hidden="true" tabindex="-1" poster preload="auto" autoplay`, sem `controls`. A resolução é 1280x720 e a duração 17,35 s. O `object-position` é `60% 45%` no vídeo e no poster, como pede a spec.
- **Momento do pedido:** o primeiro pedido ao MP4 saiu a 1.063 ms, depois do `load` (983 ms). O LCP medido no navegador foi o `IMG hero-poster.jpg` a 584 ms, antes do vídeo.
- **Requisições do MP4 abortadas:** no Edge, 6 das 7 requisições do MP4 aparecem como `net::ERR_ABORTED`. É o comportamento normal do player do Chromium, que cancela pedidos por faixa (`Range`) e pede outros. Nenhuma resposta teve status ≥ 400 e o vídeo tocou sem erro (`readyState` 4).
- **Redimensionamento ao vivo de 1440 para 800:** o vídeo e o botão ficam com `display: none`, o vídeo pausa e a imagem troca para `hero-mobile.webp`, sem rolagem horizontal (`scrollWidth` 800). De volta a 1440, o vídeo retoma.
- **Pausa fora da tela (IntersectionObserver):** com a página rolada até y=2500, o vídeo fica pausado. Ao voltar ao topo, ele retoma, porque o usuário não tinha pausado.

### 2. Contraste no hero desktop (poster e quadros de 0, 8 e 15 s)
Como foi medido:
- o texto do hero, o cabeçalho, os confetes, o placar e o botão de pausa foram ocultados com `visibility: hidden`, que mantém o layout;
- o vídeo foi pausado e posicionado em 0, 8 e 15 s;
- em cada quadro, a luminância de todos os pixels foi medida dentro das caixas de linha de cada texto e comparada com o branco.

O poster foi medido com o MP4 bloqueado: nesse caso o vídeo e o botão são removidos e fica só o poster, sem botão órfão.

| Elemento (branco sobre overlay) | Poster: pior / p99 | 0 s | 8 s | 15 s | Exigido |
|---|---|---|---|---|---|
| H1 (texto grande) | **6,07** / 7,46 | 6,33 / 7,48 | 7,07 / 7,98 | 6,15 / 7,37 | 3:1 |
| Lead (texto normal) | 11,39 / 11,78 | 11,51 / 11,76 | 12,33 / 12,53 | **10,07** / 12,35 | 4,5:1 |
| Botão "Ver turmas" (contorno e texto brancos) | 12,57 | 12,73 | 12,71 | 13,28 | 4,5:1 |
| Botão pausar (borda e ícone brancos sobre o fundo atrás dele) | — | 12,01 | 13,61 | **10,26** | 3:1 |
| Fundo atrás do selo (pior) | 6,22 | 5,95 | 6,34 | 5,95 | — |

- **Selo:** o texto `#1F2937` fica sobre o fundo próprio `#FACC15`, com **9,6:1** calculado pelos estilos computados. Por isso o selo não depende do vídeo. A linha "fundo atrás do selo" mostra que a área ao redor do chip também fica escura.
- **H1:** o pior caso do H1 fica entre 6,07 e 7,07:1. Isso está acima da meta de ~5,6:1 da §3.3.1 para a borda direita da coluna, mas abaixo dos ~9,7:1 previstos para a borda esquerda. O motivo é que os pixels mais claros (camiseta clara da criança à esquerda, no poster e aos 15 s) caem sob a 1ª e a 2ª linhas do título. Mesmo assim, passa no AA com folga.
- **Capturas sem texto:** `desktop-hero-sem-texto-poster.jpg`, `desktop-hero-sem-texto-0s.jpg`, `-8s.jpg` e `-15s.jpg`.
- **Capturas com texto:** `desktop-hero-poster.jpg`, `desktop-hero-video-0s.jpg`, `-8s.jpg` e `-15s.jpg`.
- **O que aparece (descrição):** a criança do primeiro plano aparece de costas ou de lado na borda esquerda. Aos 15 s, uma criança grande aparece de costas na borda direita, sob o botão de pausa. O goleiro aparece de frente, pequeno e ao fundo, no poster e aos 0 s.

### 3. Botão pausar/reproduzir
| Ação | `video.paused` | `aria-label` (e `title`) | `localStorage['fk-hero-video']` |
|---|---|---|---|
| Estado inicial | false | Pausar vídeo de fundo | (vazio) |
| Clique | true (tempo parado em 3,49 s) | Reproduzir vídeo de fundo | pausado |
| Clique | false | Pausar vídeo de fundo | tocando |
| Tab a partir de "Ver turmas" e Enter | true | Reproduzir vídeo de fundo | pausado |
| Espaço | false | Pausar vídeo de fundo | tocando |
| Pausado pelo usuário, rolar para fora e voltar | true (não retoma sozinho) | Reproduzir vídeo de fundo | pausado |
| Recarregar com `pausado` salvo | vídeo criado parado em 0 s, `preload="metadata"`, sem autoplay | Reproduzir vídeo de fundo | pausado |

- **Atributos:** não há `aria-pressed`. A ordem de Tab é: "Agendar aula grátis" → "Ver turmas" → **botão do vídeo** → chips do placar.
- **Foco:** `outline` sólido de 3px em `rgb(250,204,21)` com offset de 3px. A captura `desktop-foco-botao-video.png` mostra o anel amarelo nítido sobre o fundo verde. Nesse momento o botão estava em hover (fundo branco, ícone de play verde), porque o mouse tinha ficado sobre ele.
- **Pausado:** `desktop-hero-pausado.png` mostra o ícone de play.
- **Tamanho e posição:** o botão mede 48x48. Ele não cruza o placar:
  - em 1440, fica em x 1272–1320 e y 667–715, e o placar começa em y 825 (folga de 110px);
  - em 900, fica em y 699–747, e o placar começa em y 825 (folga de 78px).

### 4. Movimento reduzido (emulado)
- **Ao carregar com `reduce`:** nenhum `<video>`, nenhum botão e nenhuma requisição ao MP4. Fica o poster (`desktop-movimento-reduzido.png`).
- **Mudança ao vivo** (página carregada com vídeo, e depois `emulateMedia({reducedMotion:'reduce'})`): o vídeo e o botão são removidos. Ao voltar para `no-preference`, o vídeo é recriado e toca.

### 5. Firefox (MP4 fragmentado sem `faststart`)
- **Ambiente:** Firefox 159.0 (Playwright, headless) em 1440x900.
- **Suporte ao formato:** `canPlayType('video/mp4; codecs="avc1.42E01E"')` respondeu `"probably"`.
- **Reprodução:** o vídeo foi criado e **toca**: `currentTime` foi de 4,77 para 6,75 s em 2 s, com `readyState` 4, sem `error` e opacidade 1, numa única requisição ao MP4.
- **Loop:** ao pular para 0,5 s antes do fim, o vídeo voltou a 1,37 s e continuou tocando.
- **Console:** 1 aviso, "Preload of hero-mobile.webp was ignored due to … non-matching media attribute". É o comportamento esperado do preload condicionado por `media` no desktop, e não um erro.
- **Captura:** `firefox-desktop-dobra.png`. A fonte do menu aparece com outra renderização (Nunito ligeiramente mais larga), mas sem quebra.
- **Safari:** não testado (não está disponível no Windows).

### 6. LCP e regressões
- **LCP:**
  - No desktop, o elemento LCP é o `<img>` do poster: 584 ms no navegador e 1,1 s no Lighthouse desktop.
  - No celular, o elemento LCP é a `<img>` da `<picture>` (`hero-mobile`): 3,5–3,6 s no Lighthouse móvel.
  - CLS 0 nos dois.
- **Rolagem horizontal, imagens quebradas e console:** sem regressão nas 3 larguras (ver Métricas).
- **Menu do celular:** abre com `aria-expanded="true"` e rótulo "Fechar menu", o foco vai para "Benefícios", e o Esc fecha (`aria-expanded="false"`). Capturas: `celular-menu-aberto.png` e `celular-menu-fechado.png`.
- **Foco no menu do desktop:** a sequência de Tab é "Pular para o conteúdo" → logo → Benefícios → Turmas → Metodologia → Horários. A captura `desktop-foco.png` mostra o contorno azul em "Horários".
- **Captura de página inteira:** na primeira tentativa, a rolagem foi rápida demais (400px a cada 60 ms) e a captura saiu com seções vazias, porque os `.reveal` ainda não tinham sido ativados. Com rolagem a 60% da altura a cada 350 ms, os 32 `.reveal` ficaram visíveis e as capturas `*-inteira.jpg` saíram completas. Esse é um efeito do método de captura, e não do site.

## Métricas

| Métrica | Celular | Tablet | Desktop |
|---|---|---|---|
| Rolagem horizontal (`scrollWidth` / `innerWidth`) | 360 / 360: **não** | 768 / 768: **não** | 1440 / 1440: **não** (899 e 900 também não) |
| Imagens quebradas | 0 | 0 | 0 |
| Mídia quebrada (vídeo) | não se aplica (sem vídeo) | não se aplica | 0 (`readyState` 4, sem `error`) |
| Imagens não carregadas no fim da rolagem | 3 (`treino-cones.jpg`, `trajetoria-bola.svg`, `bola-apito.svg`: ocultas nessa largura e com carregamento adiado, igual ao ciclo 1) | 3 (as mesmas) | 0 |
| Erros de console | 0 | 0 | 0 (no Firefox, 1 aviso de preload ignorado, esperado) |
| Requisições com status ≥ 400 | 0 | 0 | 0 (as requisições do MP4 marcadas como `ERR_ABORTED` são cancelamentos normais do player) |
| Requisições ao `hero.mp4` | **0** | **0** | 7 no Edge, 1 no Firefox |
| Alvos de toque < 44 px | 0 | 0 | 0 (botão de vídeo 48x48) |
| Placeholders visíveis | 0 | 0 | 0 |
| Altura da página | 19.728 px | 15.837 px | 12.451 px (igual ao ciclo 1) |

**Fontes** (`document.fonts`): Baloo 2 700/800 e Nunito 400/600/700/800 carregadas, e `document.fonts.check` deu verdadeiro para as duas famílias, nas 3 larguras.

**Lighthouse** (Edge headless, servidor local sem compressão):

| Perfil | Desempenho | Acessibilidade | Boas práticas | SEO | FCP | LCP | TBT | CLS | Peso total |
|---|---|---|---|---|---|---|---|---|---|
| Celular (3 rodadas) | **82 / 87 / 89** | 100 | 100 | 100 | 1,9 s | 3,6 / 3,5 / 3,5 s | 330 / 170 / 0 ms | 0 | 439 KiB (sem MP4) |
| Desktop | **98** | 100 | 100 | 100 | 0,7 s | 1,1 s | 0 ms | 0 | 3.853 KiB (inclui o MP4 de 3,26 MB) |

- **Alertas no celular:** `render-blocking` (est. 450 ms), `unused-css-rules` (16 KiB), CSS/JS sem minificação (8 + 4 KiB), `image-delivery` (39 KiB), `cache-insight` e `document-latency`. Os dois últimos vêm do servidor local de teste.
- **Alertas no desktop:** `total-byte-weight` (3.853 KiB, por causa do vídeo, que entra depois do `load` como prevê o design), `image-delivery` (274 KiB), `render-blocking` (370 ms) e `cache-insight`.

## Capturas (`capturas/`)
- **Ciclo 2 (novas ou substituídas):**
  - `celular-inteira.jpg`, `tablet-inteira.jpg`, `desktop-inteira.jpg` (JPEG q75)
  - `celular-dobra.png`, `tablet-dobra.png`, `desktop-dobra.png` (vídeo tocando), `desktop900-dobra.png`
  - `desktop-foco.png` (foco em "Horários") e `desktop-foco-botao-video.png` (anel de foco no botão do vídeo)
  - `desktop-hero-pausado.png`
  - `celular-menu-aberto.png`, `celular-menu-fechado.png`
  - `desktop-hero-poster.jpg` e `desktop-hero-video-0s.jpg`, `-8s.jpg`, `-15s.jpg` (com texto)
  - `desktop-hero-sem-texto-poster.jpg` e `desktop-hero-sem-texto-0s.jpg`, `-8s.jpg`, `-15s.jpg` (base da medição)
  - `desktop-movimento-reduzido.png`
  - `firefox-desktop-dobra.png`
- **Mantidas do ciclo 1** (seções sem mudança): `celular-hero-sem-texto.png` (o hero do celular continua com a mesma foto), `celular-mapa.png`, `desktop-mapa.png`, `celular-cta-final.png`.
- **Removida:** `desktop-hero-sem-texto.png` do ciclo 1, porque mostrava a foto antiga do parque.

## Comparação com a rodada anterior (ciclo 1)

| ID | Situação | Observação |
|---|---|---|
| V1 cartão sobre o mapa | não medido de novo | Seção não alterada (`CHANGELOG.md`). Evidência anterior: `celular-mapa.png` e `desktop-mapa.png` |
| V2 buracos na grade "bento" | **persiste** | `desktop-inteira.jpg`, `tablet-inteira.jpg` |
| V3 confetes no CTA final | não medido de novo | Seção não alterada. Na `desktop-inteira.jpg`, a composição do CTA final é a mesma do ciclo 1 |
| V4 confetes sobre o CTA do hero | **persiste** | `desktop-dobra.png`, `desktop900-dobra.png` |
| V5 título sobre camisa branca (4,47:1) | **resolvido** | O hero desktop agora usa o poster/vídeo com overlay lateral. Pior caso do H1: 6,07:1 (poster) a 7,07:1 (8 s) |
| V6 passo 3 desalinhado | não medido de novo | Seção não alterada |
| V7 espaçamento do plano 1x | não medido de novo | Seção não alterada |
| V8 quebra do e-mail e dos telefones no celular | não medido de novo | Seção não alterada |
| Lighthouse no celular | piorou um pouco (N1) | Desempenho 91 → mediana 87. LCP 3,3 → 3,5 s. Acessibilidade, Boas práticas e SEO seguem em 100 |
