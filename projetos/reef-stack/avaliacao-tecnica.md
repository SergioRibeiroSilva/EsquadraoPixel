# Avaliação técnica: Reef Stack

- **Avaliador:** avaliador-tecnico
- **Data:** 2026-11-16 (ciclo 2; o ciclo 1 segue no fim, como histórico)
- **Entradas do ciclo 2:** `site/index.html` (1.074 linhas), `site/styles.css` (1.659), `site/script.js` (348), `site/assets/fonts/`, `site/CHANGELOG.md` (iteração 2), `inspecao-visual.md` (seção "Ciclo 2"), `capturas/ciclo2-*` e a avaliação do ciclo 1
- **Ferramentas:** parser HTML próprio (equilíbrio de tags, IDs duplicados, referências `aria-*` e âncoras, hierarquia de títulos, caminhos de assets do HTML e do CSS) e leitura do código. As medições de navegador e o Lighthouse vêm do `inspetor-visual` e não foram refeitas. O `html-validate` via `npx` **não rodou neste ciclo**, porque a permissão foi negada no ambiente. A validação estrutural foi feita pelo parser próprio.

# Ciclo 2

## Veredito: APROVADO COM RESSALVAS

Não há bloqueantes. O único bloqueante do ciclo 1 (B1, WCAG 2.5.3) foi corrigido, assim como I1, M1, M2, M4, M5 e M6. Não há regressão estrutural: as tags estão balanceadas, não há ID duplicado, há um único `h1`, a hierarquia de títulos não salta níveis e todas as referências internas e caminhos de assets existem, no HTML e no CSS, inclusive `assets/fonts/*.woff2`. Lighthouse celular: 86–88 / 100 / 100 / 100.

As ressalvas são 2 itens importantes e 4 menores. Os 2 importantes merecem correção já neste ciclo, porque cada um se resolve com poucas linhas no `<head>`:
1. **C2-I1**: quando o site é aberto com duplo clique (`file://`), que é a forma prevista nas convenções do projeto, o `preload` das fontes gera 4 erros e 2 avisos no console.
2. **C2-I2**: o LCP caiu de 3,5 s para 3,1 s, mas continua acima da meta de 2,5 s. A causa mudou: agora é a descoberta tardia de `causticas.svg`, e não mais as fontes.

I3 (domínio real) e M7 (compressão) continuam pendentes para a publicação, como já estava previsto.

## Situação dos itens do ciclo 1

| ID | Situação | Evidência |
|---|---|---|
| B1 | **Resolvido.** `aria-label="Pedir no WhatsApp (abre o WhatsApp)"` contém o rótulo visível "Pedir no WhatsApp". | `index.html:1069`, `index.html:1071` |
| I1 | **Resolvido.** As etiquetas "Revisão técnica pendente" saíram. pH e Nitrato mostram texto voltado ao visitante, e a classe `.etiqueta-pendente` não aparece mais no CSS (busca sem resultados). | `index.html:607-609`; `ciclo2-*-abas-parametros-marinho.png` |
| I2 | **Parcial.** O Google Fonts e os `preconnect` saíram. As fontes estão em `assets/fonts/`, com `@font-face`, `font-display: swap` e `unicode-range` (`styles.css:6-21`), e deixaram de bloquear a renderização. O LCP foi de 3,5 s para 3,1 s, mas não chegou à meta (ver C2-I2). O preload gerou o problema C2-I1. | `index.html:25-27`; `inspecao-visual.md` V7 |
| I3 | **Pendente (antes de publicar).** `SEU-DOMINIO` continua em `canonical`, `og:url` e `og:image`. | `index.html:9-17` |
| M1 | **Resolvido.** O botão de pausa (`top: 12px`) aparece na primeira dobra nas 3 larguras. No desktop, o hero termina em 800 px. | `styles.css:687-689`, `styles.css:732`; `ciclo2-*-dobra.png` |
| M2 | **Resolvido, com efeito colateral.** O degradê ficou como no design §5.4, mas o pior pixel atrás do título caiu para 4,05:1 (ver C2-M2). | `styles.css:649-654` |
| M3 | **Parcial.** Há `scroll-padding-bottom: 88px` (`styles.css:126`). O botão some no hero, em `#visite` e no rodapé (`script.js:137-149`) e mede 48 px abaixo de 600 px (`styles.css:1633-1636`). No celular, ainda cobre o fim de linhas em 29% das posições de rolagem (ver C2-M1). | `inspecao-visual.md` V5 |
| M4 | **Resolvido.** `sizes` corrigido na loja, no clube e na vitrine. O Lighthouse não aponta mais a foto da loja. | `index.html:243-244`, `639-640`, `990-991` |
| M5 | **Resolvido.** As regiões têm nomes distintos ("Parâmetros de água doce" e "Parâmetros de marinho"), e o `tabindex` só entra quando há rolagem. Essa correção trouxe o reflow forçado de C2-M3. | `index.html:570`, `index.html:594`; `script.js:205-216` |
| M6 | **Resolvido.** Instagram e YouTube viraram `<span class="rede-em-breve">`, sem foco e com texto oculto. Nenhuma rede usa mais `href="#"`. O único `href="#"` que sobrou é o `.form-fallback`: ele fica dentro da mensagem de sucesso oculta e recebe o link real no envio (`script.js:304`), então não é defeito. O texto "em breve" ainda depende de validação do redator, o que não é questão técnica. | `index.html:1039-1044` |
| M7 | **Pendente (na publicação).** `styles.css` tem 54.948 bytes, sem minificação, e bloqueia a renderização por cerca de 300 ms no servidor local sem gzip. | `inspecao-visual.md` V7 |

## Tabela de achados (ciclo 2)

| ID | Área | Arquivo:linha | Problema (evidência) | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| C2-I1 | Robustez e console (`file://`) | `index.html:26-27` | No site aberto com duplo clique, o Edge bloqueia os 2 `preload` com `crossorigin`, porque a origem é `null`. O console mostra 2 erros de CORS, 2 `net::ERR_FAILED` e 2 avisos de "preload não usado: modo de credenciais diferente". As fontes aparecem mesmo assim, pelo `@font-face`. Por http não há erro. Evidência: `inspecao-visual.md` (Fontes locais e preload) e `ciclo2-celular-file-dobra.png`. Como as convenções do projeto mandam o site abrir com duplo clique, esse é o estado padrão no uso local. | importante | **Não basta remover o `crossorigin`.** O navegador sempre busca fontes em modo CORS. Sem o atributo, o preload deixa de casar com a requisição do `@font-face`, a fonte é baixada duas vezes e o aviso "preload não usado" passa a aparecer **também por http**. **Recomendado (opção A):** apagar as linhas 26-27 e criar os preloads por script só fora de `file://`, num `<script>` inline colocado **antes** do `<link rel="stylesheet">` (ver C2-I2, item 2): `if (location.protocol !== 'file:') ['sora','inter'].forEach(function (f) { var l = document.createElement('link'); l.rel = 'preload'; l.as = 'font'; l.type = 'font/woff2'; l.crossOrigin = 'anonymous'; l.href = 'assets/fonts/' + f + '-latin-var.woff2'; document.head.appendChild(l); });`. Assim o site publicado mantém o ganho do preload e o console fica limpo no duplo clique. **Opção B (mais simples, também aceitável):** só remover as 2 linhas de preload. O custo é baixo: o elemento de LCP não é texto, as fontes são locais e pequenas (73 KB) e há `font-display: swap`. Depois, confirmar que o CLS continua 0. |
| C2-I2 | Desempenho (LCP) | `styles.css:556-567`; `index.html:28-29` | O LCP ficou em 3,1 s nas 3 rodadas (meta: abaixo de 2,5 s). O elemento de LCP é `section#inicio`, por causa do fundo `assets/causticas.svg` em `.hero::before`. O navegador só descobre essa imagem depois de baixar e processar o `styles.css` (Lighthouse: "discoverable in initial document: não" e "fetchpriority=high: não"). O `styles.css` bloqueia cerca de 300 ms. Além disso, o `<script>` inline da linha 29 vem depois do stylesheet, e nessa posição ele espera o CSS carregar para rodar, o que segura o parser. | importante | 1) No `<head>`, antes do stylesheet: `<link rel="preload" href="assets/causticas.svg" as="image" fetchpriority="high">`. Imagem não usa CORS, então funciona em `file://` sem erro. 2) Mover o `<script>document.documentElement.classList.add('js');</script>` (junto com o script de preload de C2-I1) para **antes** do `<link rel="stylesheet">`. 3) Na publicação, aplicar M7: com gzip ou brotli, os 55 KB de CSS caem para cerca de 11 KB. Pedir ao `inspetor-visual` uma nova medição. Se o LCP só ficar acima de 2,5 s por causa da latência do servidor local sem compressão, aceitar e registrar. |
| C2-M1 | Responsividade (V5) | `styles.css:1601-1636` | O botão flutuante ainda invade 40–42 px da coluna de conteúdo. Ele cobre o fim de linhas em 24 de 83 posições de rolagem no celular, em 2 de 54 no tablet e em 3 de 41 no desktop. Não viola a WCAG 2.1: o conteúdo fica acessível ao rolar, e o `scroll-padding-bottom` protege o foco por Tab. Evidência: `ciclo2-celular-flutuante-viewport.png`. | menor | Opcional: abaixo de 900 px, esconder o botão enquanto a página rola para baixo e mostrá-lo quando a rolagem para ou volta para cima. Basta um ouvinte de `scroll` com `requestAnimationFrame` que alterna a classe `.escondido`, que já existe. Outra saída é aceitar o comportamento atual: o ganho de conversão do botão fixo compensa. |
| C2-M2 | Contraste sobre foto (V6) | `styles.css:649-654` (degradê abaixo de 600 px), `styles.css:657-666` | Em 360 px, o pior pixel atrás do título branco "Começar na água doce" dá 4,05:1. O título tem 17 px em peso 700, então não conta como texto grande. Esse pixel fica numa folha clara da foto, no topo da primeira linha, e o trecho abaixo de 4,5:1 é 0,09% da área do título. A média é 16,3:1, e o cartão "Marinho" fica em 5,56:1. Evidência: `ciclo2-celular-cartoes-zoom.png`. | menor | Abaixo de 600 px, somar `text-shadow: 0 1px 3px rgb(7 28 44 / .85)` ao `.caminho-link` e ao `.caminho-apoio`. Isso não reduz a área visível da foto. Outra opção é começar o degradê em `rgb(7 28 44 / .35) 100%` em vez de 0. Depois, medir de novo (meta: pior pixel com 4,5:1 ou mais). |
| C2-M3 | Desempenho (TBT) (V8) | `script.js:206-210`, chamada em `script.js:233` e `script.js:270` | Na carga inicial, `atualizarRegioesRolaveis()` lê `scrollWidth`/`clientWidth` logo depois de `ativarAba()` mudar `hidden` e `aria-selected`. Isso força um layout síncrono de cerca de 211 ms, segundo o Lighthouse, e pesa no TBT (270–320 ms). | menor | A tabela só rola quando o `min-width: 600px` está ativo e o container tem menos de 600 px, o que acontece entre 600 e cerca de 700 px de viewport (`styles.css:921-922`). No início da função: `if (!window.matchMedia('(min-width: 600px) and (max-width: 720px)').matches) { regioesRolaveis.forEach(function (r) { r.removeAttribute('tabindex'); }); return; }`. Em `ativarAba`, chamar a função dentro de `requestAnimationFrame(...)`. |
| C2-M4 | Desempenho (imagens) | `index.html:130-131`, `index.html:141-142` | O Lighthouse (`image-delivery`, celular de 412 px) aponta `foto-caminho-{doce,marinho}-480.webp` (480 x 600) exibidas a cerca de 309 x 387, com economia estimada de 55 KiB. O `srcset` não tem versão menor que 480w, então ajustar só o `sizes` não resolve. | menor | Opcional: gerar `foto-caminho-*-320.webp/.jpg` e incluir `320w` no `srcset`. |

**Contagem do ciclo 2:** 0 bloqueantes, 2 importantes (C2-I1 e C2-I2) e 4 menores (C2-M1 a C2-M4). Pendentes para a publicação: I3 e M7.

## Lista priorizada de correções (desenvolvedor-frontend)

1. **C2-I1 e C2-I2 (juntos, só no `<head>`, cerca de 5 linhas):** apagar `index.html:26-27`. Antes do `<link rel="stylesheet">`, colocar: (a) o `<script>` com `classList.add('js')` e a criação condicional dos preloads de fonte (`location.protocol !== 'file:'`); (b) `<link rel="preload" href="assets/causticas.svg" as="image" fetchpriority="high">`. Depois, conferir o console sem erros em `file://` e em http, e medir o LCP de novo.
2. **C2-M3:** limitar `atualizarRegioesRolaveis` à faixa de 600 a 720 px e adiar a chamada com `requestAnimationFrame`.
3. **C2-M2:** `text-shadow` no título e no texto de apoio dos cartões abaixo de 600 px; depois, medir o pior pixel de novo.
4. **C2-M1 e C2-M4 (opcionais):** comportamento do botão flutuante durante a rolagem e versão 320w das fotos dos cartões.
5. **Na publicação:** I3 (domínio real em `canonical` e `og:*`) e M7 (gzip ou brotli).

## Métricas (ciclo 2)

| Métrica | Ciclo 2 | Ciclo 1 | Fonte |
|---|---|---|---|
| Lighthouse celular (Desempenho / Acessibilidade / Boas práticas / SEO) | 86–88 / 100 / 100 / 100 | 89 / 100 / 100 / 100 | `inspecao-visual.md` |
| LCP / FCP / TBT / CLS | 3,1 s / 1,6–2,0 s / 270–320 ms / 0 | 3,5 s / 2,1 s / não registrado / 0 | `inspecao-visual.md` |
| Rolagem horizontal (360 / 768 / 1280) | não / não / não | não / não / não | `inspecao-visual.md` |
| Imagens quebradas | 0 de 20 | 0 de 20 | `inspecao-visual.md` |
| Console por http / por `file://` | 0 / 4 erros e 2 avisos (preload) | 0 / não medido | `inspecao-visual.md` |
| Alvos de toque menores que 44 px | 0 reais (`.caminho-link` usa a área do cartão via `::after`; o pular-link fica escondido) | 0 reais | `inspecao-visual.md` + `styles.css:671` |
| Requisições externas na carga | 0 (Google Fonts removido) | 2 origens | leitura de `index.html:1-35` |
| HTML + CSS + JS (sem compressão) | 154.454 bytes (84.992 + 54.948 + 14.514) | 154.572 bytes | `wc -c` |
| Fontes locais | 73.540 bytes (Inter variável 48.256 + Sora variável 25.284) | externas | `ls -l site/assets/fonts` |
| Estrutura HTML | tags balanceadas, 0 IDs duplicados, 1 `h1`, 0 saltos de título, 0 referências quebradas, 0 assets ausentes | igual | parser próprio |
| `html-validate` | não medido (permissão negada para o `npx` neste ciclo) | 0 erros estruturais | — |
| Pior contraste sobre a foto dos cartões (360) | 4,05:1 no pior pixel (média 16,3:1) | 6,46:1 a 9,40:1 | `inspecao-visual.md` V6 |

## Itens verificados sem problema (ciclo 2)

- `@font-face` com `font-weight` em faixa (Inter 400 700, Sora 600 700), `font-display: swap` e `unicode-range` latin. Os arquivos existem, e os caminhos são relativos ao CSS (`styles.css:6-21`). A licença OFL está registrada em comentário no HTML e no CSS.
- Botão flutuante: nome acessível correto (B1). Quando escondido, usa `opacity` e `visibility: hidden`, o que o tira da ordem de Tab (`styles.css:1625-1630`). Com o menu aberto, fica fora da tela.
- Redes "em breve": não recebem foco, têm texto alternativo oculto e a nota visível tem `aria-hidden`, então nada é anunciado em dobro. A borda tracejada é decorativa e dispensa contraste mínimo, porque os elementos não são interativos. O texto `espuma-300` sobre `abismo-950` dá 9,51:1.
- Regiões de tabela: `tabindex` só quando há rolagem, nomes únicos e recálculo ao redimensionar, com espera de 150 ms (`script.js:211-216`).
- Botão de pausa: 44 px de altura, `aria-pressed` e oculto com `prefers-reduced-motion` (`styles.css:1647`). As animações continuam só com `transform`.
- `prefers-reduced-motion`, foco visível, menu mobile (`inert`, Esc e retorno do foco), abas WAI-ARIA e formulário sem regressão (`inspecao-visual.md`, "Regressões verificadas").
- SEO: `title`, `description`, Open Graph, `twitter:card`, favicons e `theme-color` sem mudança e completos. Nenhum placeholder visível.

---

# Ciclo 1 (histórico)

## Veredito: REPROVADO (1 bloqueante, de correção trivial)

O site está tecnicamente sólido: HTML sem erros estruturais, Lighthouse com Acessibilidade, Boas práticas e SEO em 100, sem rolagem horizontal, sem imagens quebradas, sem erros de console e com os contrastes dentro do AA. A reprovação vem de **um único item**: o botão flutuante do WhatsApp viola o critério WCAG 2.5.3 (nível A), porque o nome acessível não contém o texto visível. A correção é trocar uma palavra no `aria-label` (B1). Com B1 corrigido, o veredito passa a **APROVADO COM RESSALVAS** (I1 a I3 e menores).

Sobre os dados fictícios: a decisão é do usuário e está bem sinalizada. Há comentários `FICTÍCIO` no código, o número único do WhatsApp fica em `script.js:10`, há etiquetas "Dados de exemplo", "(exemplo)" nos depoimentos e o aviso no rodapé (`index.html:1062`, coral-400 sobre abismo-950, 6,75:1). O JSON-LD foi omitido de propósito. Nada disso foi tratado como defeito. O único caso que pede ajuste é V1/I1, porque ali o que falta é conteúdo técnico, não um dado de contato.

## Tabela de achados

| ID | Área | Arquivo:linha | Problema (evidência) | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| B1 | Acessibilidade (WCAG 2.5.3 Rótulo no nome, A) | `index.html:1068-1070`; `styles.css:1599` | O nome acessível é `aria-label="Pedir pelo WhatsApp (abre o WhatsApp)"`, mas o rótulo que aparece no hover/foco do desktop (≥ 900 px) é "Pedir **no** WhatsApp". O nome não contém o texto visível, e quem usa comando de voz e diz "Pedir no WhatsApp" pode não acionar o botão. | **bloqueante** | Trocar para `aria-label="Pedir no WhatsApp (abre o WhatsApp)"`. Também resolve: remover o `aria-label` e o `aria-hidden` do rótulo, deixar o `<span>` como `visually-hidden` no celular e somar o `<span class="visually-hidden"> (abre o WhatsApp)</span>`, como nos outros botões. |
| I1 | Conteúdo técnico / apresentação (V1 do inspetor) | `index.html:607`, `index.html:609` | Na tabela marinha, pH ("Alcalino e estável") e Nitrato ("Baixo e estável") são as únicas linhas sem faixa numérica, e cada uma leva uma etiqueta coral "Revisão técnica pendente" que o visitante vê. A etiqueta parece uma marca do fluxo interno, e a coluna "Faixa de referência" fica sem número. Evidência: `capturas/celular-tabela-parametros-marinho.png`, `capturas/tablet-abas-parametros-marinho.png`. O contraste da etiqueta passa (coral-700 sobre coral-50, 4,61:1, 14 px 600). | importante | **Pelo redator** (a regra do fluxo diz que correções de texto passam por ele): (a) colocar as faixas usuais com fonte em `pesquisa.md` (ex.: pH em torno de 8,1–8,4; nitrato com alvo separado para recifal e FOWLR) e tirar as etiquetas; ou (b) se o usuário quiser manter a pendência, trocar por um texto para o visitante, como "Faixa varia conforme o sistema: confirme com um especialista", sem a palavra "pendente". O desenvolvedor só tira o `<span class="etiqueta etiqueta-pendente">`. |
| I2 | Desempenho (LCP) | `index.html:25-28` | Lighthouse celular: Desempenho 89, LCP 3,5 s, FCP 2,1 s. A folha do Google Fonts bloqueia a renderização por cerca de 1.040 ms estimados e soma 2 origens externas (`fonts.googleapis.com` e `fonts.gstatic.com`). O LCP é o conteúdo do `section#inicio` (texto do hero), que espera a fonte. | importante | Hospedar as fontes no próprio site: baixar Inter (400–700) e Sora (600–700) em woff2, só o subconjunto latin, para `site/assets/fontes/`; declarar `@font-face` com `font-display: swap` no topo do `styles.css`; usar `<link rel="preload" as="font" type="font/woff2" crossorigin>` só para Sora 700 (H1) e Inter 400. Isso tira o CSS externo e os 2 `preconnect`. Se preferir manter o Google Fonts, carregar sem bloquear: `<link rel="preload" as="style" href="…" onload="this.onload=null;this.rel='stylesheet'">` com `<noscript>` de reserva. |
| I3 | SEO / compartilhamento (antes de publicar) | `index.html:10`, `index.html:16`, `index.html:17` | `canonical`, `og:url` e `og:image` apontam para `https://SEU-DOMINIO/`. Sem domínio real, a prévia ao compartilhar sai sem imagem e o canonical indica um host que não existe. Está marcado com comentário na linha 9 e não afeta o site aberto localmente. | importante (pré-publicação) | Trocar pelo domínio real antes de publicar. Se ainda não houver domínio, remover o `canonical` e o `og:url` e deixar a pendência no `CHANGELOG.md`. |
| M1 | Responsividade / WCAG 2.2.2 (descoberta da pausa) (V2, V3) | `styles.css:660-663`, `styles.css:708`, `styles.css:715` | O botão de pausa (`position:absolute; bottom:24px`) fica abaixo da primeira dobra: bottom = 921 px no desktop 1280 x 800 e 827 px no celular 360 x 800. O hero mede cerca de 873 px no desktop por causa da cascata (`.caminho-marinho { margin-top: 72% }`), e o título do cartão marinho fica cortado na dobra (`capturas/desktop-dobra.png`). O mecanismo de pausa existe e funciona, mas só aparece depois de rolar. | menor | Mover o botão para o canto superior do hero (`top: 16px; bottom: auto`), ou para logo abaixo dos botões de ação. No desktop, reduzir a cascata (ex.: `margin-top: 48%`) e o `padding` do hero (`--sp-8 0 --sp-7`) para caber em 800 px menos o cabeçalho. |
| M2 | Responsividade (V4) | `styles.css:628-633` | Em 360 px, o título do cartão quebra em 3 linhas e a faixa escura do degradê cobre cerca de 60% do cartão, contra os 55% do `design.md` §5.4 (`capturas/celular-hero-caminhos.png`). A legibilidade não muda (pior caso medido: 6,46:1). | menor | Abaixo de 600 px: `padding-top: 32px` em `.caminho-conteudo` e paradas do degradê em `rgb(7 28 44 / .92) 0%, rgb(7 28 44 / .8) 55%, transparent 100%`. Medir o contraste de novo depois. |
| M3 | Responsividade / foco (V5) | `styles.css:1565-1569`, `styles.css:104` | O botão flutuante de 56 px (right 16 px abaixo de 900 px) cobre o fim de linhas de texto e a borda do 4º cartão de espécies (`capturas/tablet-abas-parametros-marinho.png`, `capturas/celular-tabela-parametros-marinho.png`). Ele também pode esconder um elemento focado perto do canto inferior direito (WCAG 2.2, 2.4.11, fora do escopo 2.1). | menor | Somar `scroll-padding-bottom: 88px` ao `html` (o foco por Tab rola acima do botão). Esconder o botão quando o rodapé ou a seção `#visite` (que já tem botões de WhatsApp) estiver visível, com o mesmo `IntersectionObserver` de `script.js:142-147`. Opcional: 48 px e `right: 12px` abaixo de 600 px. |
| M4 | Desempenho (imagens) | `index.html:243-244` | Lighthouse `image-delivery`: `foto-loja-ambiente-1200.webp` exibida a cerca de 338 px (economia estimada de 123 KiB). O `sizes="… 100vw"` exagera a largura real (container menos o padding da `.faixa-cta`). O mesmo acontece, em menor grau, em `index.html:639-640` (clube) e `index.html:990-991` (vitrine). | menor | Loja: `sizes="(min-width: 900px) 560px, calc(100vw - 74px)"`. Clube e vitrine: `calc(100vw - 40px)` abaixo de 600 px e `calc(100vw - 64px)` entre 600 e 899 px. Com isso o navegador escolhe a versão de 640w. |
| M5 | Acessibilidade (regiões) | `index.html:570`, `index.html:594` | As duas `role="region"` têm o mesmo nome, "Tabela de parâmetros, role para o lado" (`html-validate`: `unique-landmark`). No celular a tabela vira cartões e não rola, mas a região continua com `tabindex="0"`: é uma parada de Tab inútil, com uma instrução que não vale ali. | menor | Nomes distintos, como "Parâmetros de água doce" e "Parâmetros de marinho" (ou `aria-labelledby` apontando para o `caption`). Tirar a frase "role para o lado" e só aplicar `tabindex="0"` quando houver rolagem (`scrollWidth > clientWidth`), via JS. |
| M6 | Acessibilidade / links | `index.html:1039`, `index.html:1041`; `script.js:30-32` | Os links do Instagram e do YouTube têm `href="#"`, e o JS cancela o clique. O leitor de tela anuncia "link, Instagram da Reef Stack", mas nada acontece. | menor | Enquanto os perfis forem fictícios, mostrar só o ícone como `<span>` (sem link), com o texto "Instagram (perfil de exemplo)", ou usar `aria-disabled="true"` com esse rótulo. Na publicação, colocar as URLs reais de `dados-negocio.md` §2. |
| M7 | Desempenho (CSS) | `index.html:28`; `styles.css` (55.024 bytes) | O Lighthouse aponta o `styles.css` como bloqueante (cerca de 600 ms estimados) num servidor local sem compressão. O arquivo não está minificado. | menor | Na publicação, servir com gzip/brotli (a maioria das hospedagens estáticas já faz isso) e, se quiser, gerar uma cópia minificada. Não é preciso mudar o código-fonte. |

**Contagem:** 1 bloqueante, 3 importantes, 7 menores.

## Lista priorizada de correções

1. **B1** (desenvolvedor, 1 linha): `aria-label` do `.wa-flutuante` = "Pedir no WhatsApp (abre o WhatsApp)".
2. **I1** (redator, depois desenvolvedor): dar faixas numéricas para pH e Nitrato no marinho, ou reescrever a ressalva para o visitante, e tirar as etiquetas "Revisão técnica pendente".
3. **I2** (desenvolvedor): fontes hospedadas no site com `preload` (ou Google Fonts carregado sem bloquear). Meta: LCP abaixo de 2,5 s no Lighthouse celular.
4. **M1** (desenvolvedor): botão de pausa visível na primeira dobra e hero do desktop cabendo em 800 px.
5. **M3** (desenvolvedor): `scroll-padding-bottom` e esconder o botão flutuante perto do rodapé/`#visite`.
6. **M4** (desenvolvedor): corrigir `sizes` das fotos da loja, do clube e da vitrine.
7. **M5, M6** (desenvolvedor): nomes únicos nas regiões das tabelas e redes fictícias sem link vazio.
8. **M2** (desenvolvedor): ajustar o degradê do cartão em < 600 px.
9. **I3, M7** (na publicação): domínio real em canonical/og e compressão no servidor.

## Métricas

| Métrica | Valor | Fonte |
|---|---|---|
| Lighthouse celular (Desempenho / Acessibilidade / Boas práticas / SEO) | 89 / 100 / 100 / 100 | `inspecao-visual.md` |
| LCP / FCP / CLS | 3,5 s / 2,1 s / 0 | `inspecao-visual.md` |
| Rolagem horizontal (360 / 768 / 1280) | não / não / não | `inspecao-visual.md` |
| Imagens quebradas | 0 de 20 nas 3 larguras | `inspecao-visual.md` |
| Erros de console / requisições com falha | 0 / 0 | `inspecao-visual.md` |
| Alvos de toque < 44 px | 0 reais (`.caminho-link` tem área do cartão inteiro via `::after`; pular-link escondido) | `inspecao-visual.md` + `styles.css:646` |
| Tamanho HTML + CSS + JS (sem compressão) | 154.572 bytes (85,5 KB + 55,0 KB + 14,0 KB) | `du -b` |
| Requisições externas | Google Fonts (CSS + arquivos de fonte em `fonts.gstatic.com`); links `wa.me` só ao clicar | leitura de `index.html:25-27` |
| `og-image.jpg` / `apple-touch-icon.png` / `favicon-32.png` | 1200 x 630 / 180 x 180 / 32 x 32 | leitura do cabeçalho dos arquivos |
| Validação HTML (`html-validate`) | 0 erros estruturais. Avisos: papéis ARIA redundantes (intencionais, ver abaixo), `unique-landmark` (M5), `prefer-native-element` em `ol role="list"` (intencional) e `tel-non-breaking` (estilo) | `npx html-validate@9` |
| bfcache | falha por 2 motivos segundo o Lighthouse; causa não investigada (pode vir do servidor local) | não medido em detalhe |
| Reflow em 320 px | não medido (o inspetor usou 360 px). Pela leitura do CSS, não há larguras fixas acima de 280 px abaixo de 600 px (`.tabela-parametros { min-width: 600px }` só vale a partir de 600 px) | leitura |

### Contrastes calculados (WCAG 2.x)

| Par | Contraste | Uso | Resultado |
|---|---|---|---|
| texto-700 `#2E4656` / espuma-50 `#F3F8F9` | 9,22:1 | texto corrido | passa |
| neutro-500 `#5A7383` / branco | 4,98:1 | `.nota`, nome científico, rótulos de contato | passa |
| neutro-500 / espuma-50 | 4,65:1 | `.nota` 14 px 500 | passa (no limite) |
| neutro-500 / maré-50 `#E5F1F7` | 4,33:1 | **par não usado**: todas as `.nota` e `.contato-rotulo` de `#visite` ficam dentro do cartão branco | não aplicável (não usar no futuro) |
| branco / coral-700 `#B8432A` | 5,42:1 | botão principal em fundo claro | passa |
| abismo-900 / coral-400 `#FF7A59` | 5,77:1 | botão principal em fundo escuro, botão flutuante | passa |
| coral-700 / coral-50 | 4,61:1 | etiquetas de alerta/pendente/exemplo (14 px 600) | passa |
| lagoa-600 `#0A6E78` / branco, espuma, maré | 5,98 / 5,58 / 5,19:1 | links, eyebrow, rótulos da tabela | passa |
| musgo-600 / musgo-50 | 5,60:1 | chips e eyebrow do doce | passa |
| espuma-300 `#A9C4D3` / abismo-900, abismo-950, oceano-700 | 8,13 / 9,51 / 5,39:1 | texto secundário no escuro, ajuda do formulário | passa |
| coral-400 / oceano-700 | 3,82:1 | `.encontro-data` (32 px, 700 = texto grande) | passa (AA texto grande ≥ 3:1) |
| lagoa-400 / oceano-700 | 4,59:1 | contorno de foco no formulário (exige 3:1) | passa |
| espuma-300 / oceano-700 | 5,39:1 | borda dos campos (exige 3:1) | passa |
| neutro-500 / branco | 4,98:1 | borda das abas (exige 3:1) | passa |
| abismo-900 / espuma-50 | 13,83:1 | contorno de foco em fundo claro | passa |
| Texto sobre o degradê dos cartões-caminho | pior caso 6,46:1 | medido pelo inspetor | passa |

## Itens verificados sem problema

**Estrutura e HTML**
- `<!DOCTYPE html>`, `lang="pt-BR"`, `charset`, `viewport`, `<title>` (50 caracteres) e `meta description` (136 caracteres) presentes (`index.html:1-7`).
- Tags balanceadas, nenhum ID duplicado, **um único `<h1>`** (`index.html:115`) e hierarquia de títulos sem saltos (h1 > h2 > h3 > h4; os h2 do rodapé abrem um novo bloco).
- Todas as âncoras internas (`#loja`, `#especies-doce`, `#conteudo` etc.) e todas as referências `aria-controls`, `aria-labelledby` e `aria-describedby` apontam para IDs que existem.
- Todos os caminhos de assets do HTML (`src`, `srcset`, `href`) e do CSS (`causticas.svg`, `onda-sublinhado.svg`) existem em `site/assets/`.
- Todas as `<img>` têm `width` e `height` (CLS 0). Abaixo da dobra, `loading="lazy"` e `decoding="async"`. Hero com `fetchpriority="high"`. Formatos WebP com JPEG de reserva.
- `script.js` com `defer`, sem dependências e sem erros de console. A classe `js` permite melhoria progressiva: sem JS, menu em lista, abas escondidas e os dois painéis visíveis.

**Acessibilidade**
- Link "Pular para o conteúdo" (`index.html:73`) para `main#conteudo` com `tabindex="-1"`.
- Foco visível global de 3 px (`styles.css:147-150`), com cor por contexto (`--foco`). Ordem de Tab lógica, conforme o inspetor.
- Texto alternativo em todas as imagens de conteúdo. Logo do cabeçalho com `alt=""` dentro de link com `aria-label`. Ícones SVG com `aria-hidden` e `focusable="false"`.
- Formulário: `label for` em todos os campos, `fieldset`/`legend` nos rádios, ajuda e erro ligados por `aria-describedby`, `aria-invalid`, foco no campo com erro e região `role="status"` para o retorno (`index.html:690-727`, `script.js:289-313`).
- Abas no padrão WAI-ARIA Tabs (setas, Home/End, `aria-selected`, `tabindex` móvel, `role="tabpanel"` com `aria-labelledby`). Menu com `aria-expanded`, `inert` no restante da página, Esc devolve o foco e Tab fica preso no cabeçalho.
- Tabelas com `caption`, `th scope` e papéis ARIA explícitos (redundantes no HTML, mas necessários porque o CSS usa `display:block` no celular, que alguns navegadores tratam como perda da semântica de tabela).
- Links que abrem o WhatsApp ou uma nova aba avisam com texto `visually-hidden`.
- `prefers-reduced-motion`: sem bolhas, sem animação das cáusticas, botão de pausa oculto, transições zeradas, `scroll-behavior` só com `no-preference`, `scrollIntoView` sem suavização (`styles.css:107-109`, `1603-1612`). Pausa manual com `aria-pressed` e preferência salva, e animações pausadas fora da tela (WCAG 2.2.2).
- Alvos de toque: botões de 48 px, abas, rádios, links de seta, rodapé e créditos com 44 px no mínimo.

**Responsividade**
- CSS mobile first com breakpoints em 600, 900, 1100 e 1200 px. Tipografia fluida com `clamp()`. `img { max-width: 100% }`. Container `min(100% - 2*gutter, 1200px)`. Tabelas viram cartões abaixo de 600 px, e a tabela larga só rola dentro de uma região com foco. Sem rolagem horizontal nas 3 larguras medidas.

**Desempenho**
- Fontes com `display=swap` e `preconnect`. Imagens responsivas com `srcset`/`sizes` (exceto M4). Animações só com `transform`/`opacity`.

**SEO**
- Título e descrição únicos. Open Graph completo (`og:title`, `og:description`, `og:type`, `og:locale`, `og:image` 1200 x 630 com `alt`). `twitter:card`. Favicons SVG e PNG, `apple-touch-icon` 180 x 180, `theme-color`. Semântica com `header`, `nav` rotulada, `main`, `section` com `aria-labelledby`, `footer`. JSON-LD omitido de propósito enquanto os dados forem fictícios (`index.html:31-34`).

**Licenças**
- Créditos no rodapé com autor, link e licença de cada foto CC BY (Wikimedia) e menção às licenças Unsplash e Pexels (`index.html:1047-1058`).
