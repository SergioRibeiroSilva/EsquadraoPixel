# Avaliação técnica: Padaria Trigo Doce

- **Data:** 2026-11-18
- **Ciclo:** 1
- **Escopo:** `site/index.html` (530 linhas), `site/styles.css` (763), `site/script.js` (131), `site/assets/`, cruzados com `design.md` e com as medições de `inspecao-visual.md` e `capturas/`
- **Observação:** é um protótipo anterior ao redator e ao entrevistador. Por isso não existem `conteudo.md` nem `dados-negocio.md`, e a ausência deles não conta como falha. Os dados de contato são fictícios e foram autorizados no `briefing.md`.

## Veredito

**REPROVADO** (1 bloqueante, com correção simples)

O único bloqueante é o selo do hero, que gira sem parar e não tem como ser pausado. Isso fere o critério WCAG 2.2.2 (nível A). A correção é de uma ou duas linhas de CSS. O restante do site está tecnicamente sólido: o HTML é válido e balanceado, todos os caminhos ficam dentro de `site/`, o contraste passa no AA, o Lighthouse dá 100 em Acessibilidade, Boas práticas e SEO, e não há erro de console nem rolagem horizontal. Corrigido o T1, o veredito passa a **APROVADO COM RESSALVAS**. As ressalvas principais são o LCP no celular e o hero no tablet.

## Tabela de achados

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T1 | Acessibilidade (WCAG 2.2.2 Pausar, parar, ocultar, nível A) | `styles.css:341-344` (+ `index.html:93`) | O `.hero__selo` gira em `animation: girar 40s linear infinite`. A animação começa sozinha, dura mais de 5 s, aparece junto com o conteúdo principal e não tem controle de pausa. O `prefers-reduced-motion` reduz o problema, mas não é aceito como mecanismo de pausa pelo critério. O selo também tem texto circular ("FERMENTAÇÃO NATURAL · FORNO A LENHA"). | bloqueante | Tirar o loop infinito: rodar uma vez só e parar (`animation: girar 4s ease-out 1`), ou remover a animação, ou limitar o total a 5 s ou menos. Manter tudo dentro de `@media (prefers-reduced-motion: no-preference)`. |
| T2 | Desempenho (LCP) | `index.html:26`, `index.html:88-91` | O LCP no celular é de 4,0 s (V2; a meta é ≤ 2,5 s). Há quatro causas. (a) O `srcset` só tem 800w e 1120w: num celular de 360 px com DPR 3, o navegador baixa o `hero-paes.jpg` de 1120w (220 KB). (b) O `sizes="(min-width: 1024px) 50vw, 100vw"` não reflete o `max-width: 496px` da foto no desktop (`styles.css:742`), então em 1440 px ele pede 720 px. (c) O `decoding="async"` na imagem do LCP pode atrasar a pintura (o Lighthouse mediu 794 ms de render delay). (d) O CSS do Google Fonts bloqueia a renderização (economia estimada de 660 ms). | importante | Gerar versões de 480w e 640w e oferecer WebP ou AVIF (com `<picture>`). Ajustar para `sizes="(min-width: 1024px) 496px, calc(100vw - 40px)"`. Remover o `decoding="async"` da `.hero__foto`. Hospedar as fontes localmente (woff2 com subconjunto latino e `font-display: swap`) ou carregar o CSS das fontes sem bloquear a renderização. |
| T3 | Responsividade (hero) | `styles.css:318-322` | A `.hero__foto` usa `aspect-ratio: 4/5` na largura total até 1023 px. No tablet (768) a foto fica com cerca de 704x880 e empurra H1, subtítulo e CTAs para baixo da dobra (V1, `capturas/tablet-dobra.png`). No celular (360), o CTA do hero também cai abaixo da dobra (V4). | importante | Abaixo de 1024 px, usar uma proporção mais baixa (por exemplo `aspect-ratio: 4/3` de 560 a 1023 px e `5/4` ou `max-height: 50svh` abaixo de 560 px), ou passar o hero para 2 colunas a partir de 768 px. |
| T4 | Desempenho (imagens) | `index.html:122-185` | Os 8 cards de produto usam arquivos de 800x600 (somam cerca de 559 KB). Eles aparecem com cerca de 270 a 360 px de largura (4 colunas a partir de 1200 px, `styles.css:762`). O Lighthouse estima de 19 a 28 KB de sobra por card (162 KiB no total, junto com o hero). O `loading="lazy"` já está aplicado. | menor | Adicionar `srcset` com 400w e 800w e `sizes` de acordo com a grade. Recomprimir os arquivos (qualidade de 70 a 75, ou WebP). |
| T5 | Alvos de toque | `styles.css:637`; `styles.css:587-589`; `styles.css:270-273` | Os links do rodapé têm 32 px de altura (V5). Os links WhatsApp e Instagram do card de Contato têm 27 px de altura (o `li` tem 44 px, mas o `<a>` é inline). O link "Sobre" do menu no desktop tem 43x44 (V6). Todos passam os 24 px do 2.5.8 (WCAG 2.2 AA). O 2.5.5 (44 px) é AAA, então nada disso é bloqueante pelo WCAG 2.1 AA, mas fica abaixo da referência de 44 px do time. | menor | `min-height: 44px` em `.rodape__col li > a`. `.contatos a { display:inline-flex; align-items:center; min-height:44px }`. `min-width: 44px; justify-content:center` em `.nav__lista a`. |
| T6 | Foco visível | `styles.css:142` | No foco, o link "Pular para o conteúdo" muda o contorno para mel (#D9A441). Esse contorno fica a 3 px do botão, sobre o cabeçalho creme: contraste de **2,08:1** (calculado). O próprio link fica visível (café sobre creme, 12,6:1), então o 2.4.7 é atendido, mas o contorno em si quase não se vê. | menor | Remover o `outline-color` da `.pular:focus` (o padrão café dá 12,6:1 sobre creme) ou usar `outline-offset: -5px` para o contorno mel ficar dentro do fundo café. |
| T7 | Movimento reduzido | `styles.css:666` | A transição da `.barra-mobile` (`transform 250ms`, a barra desliza) não fica dentro do `prefers-reduced-motion`. | menor | Aplicar a transição de `transform` só dentro de `@media (prefers-reduced-motion: no-preference)`. |
| T8 | Carregamento inicial | `index.html:523` | A `.barra-mobile` começa sem a classe `barra-mobile--oculta`. No celular, ela aparece sobre o hero até o `script.js` (defer) rodar, e depois desliza para fora. | menor | Esconder a barra no CSS inicial quando houver JS (`.js .barra-mobile:not(.barra-mobile--visivel)`), ou colocar a classe direto no HTML e removê-la no script. Assim ela continua visível sem JS. |
| T9 | SEO e compartilhamento | `index.html:16`, `index.html:20` | O `og:image` usa caminho relativo, mas o Open Graph exige URL absoluta. O `og:url` está comentado (aguarda o domínio) e não há `<link rel="canonical">`. | menor (resolver ao publicar) | Quando houver domínio, usar URL absoluta no `og:image`, descomentar o `og:url` e adicionar o `canonical`. |
| T10 | SEO | `index.html:6-7` | O `<title>` tem 82 caracteres e a `description` tem 167. Nos resultados de busca, o título costuma ser cortado em cerca de 60 caracteres e a descrição em cerca de 155. | menor | Encurtar (por exemplo, "Padaria Trigo Doce: pães e bolos artesanais no Bairro Jardim", com 60 caracteres). É texto, então passa pelo redator. |
| T11 | SEO local | `index.html:3-30` | Não há dados estruturados (`application/ld+json`) do tipo `Bakery`/`LocalBusiness` com endereço, horário e telefone. | menor | Adicionar JSON-LD `Bakery` quando os dados reais existirem (os atuais são fictícios). |
| T12 | Arquivos | `site/assets/svg/icones/` (16 arquivos, 20 KB), `icones.svg`, `divisor-onda.svg`, `trigo-ramo.svg` | São arquivos que nenhuma página usa: zero referências em `index.html`, `styles.css` e `script.js` (os ícones e o ramo estão inline como `<symbol>`). Eles não pesam no carregamento, mas vão junto na publicação. | menor | Remover ou mover para fora de `site/` (por exemplo para `projetos/padaria-trigo-doce/assets/`). |
| T13 | Peso dos SVGs | `site/assets/svg/logo.svg`, `logo-claro.svg` (23,6 KB cada), `selo-fermentacao.svg` (28,4 KB) | Os textos foram convertidos em path, o que deixa esses SVGs pesados para um logo e um selo (cerca de 75 KB juntos). | menor | Otimizar com SVGO (reduzir a precisão dos paths) e conferir o resultado visualmente. |
| T14 | Sobreposição decorativa | `styles.css:744-753` | No desktop, o `.hero__ramo` (opacidade 0,25) passa por cima do fim do H1 e da primeira linha do subtítulo (V3, `capturas/desktop-dobra.png`). O texto continua legível. | menor | Ajustar `top`/`right` (por exemplo `right: -120px`) ou usar `z-index: -1` no ramo. |

## Métricas

| Métrica | Valor | Fonte |
|---|---|---|
| Lighthouse celular | Desempenho 86, Acessibilidade 100, Boas práticas 100, SEO 100 | `inspecao-visual.md` |
| Web Vitals (celular, laboratório) | FCP 1,8 s; **LCP 4,0 s**; TBT 0 ms; CLS 0; Speed Index 2,0 s | `inspecao-visual.md` |
| Rolagem horizontal (360, 768 e 1440) | nenhuma | `inspecao-visual.md` |
| Imagens quebradas, erros de console, requisições com falha | 0, 0, 0 | `inspecao-visual.md` |
| Tamanho do HTML, CSS e JS | 40,1 KB, 24,9 KB, 5,1 KB (sem minificar) | medido (`ls`) |
| Imagens carregadas pela página (sem o og-image e o hero de 1120w) | cerca de 1,22 MB de JPG + cerca de 85 KB de SVG | medido (soma dos arquivos referenciados) |
| Tamanho total de `site/` | 1,74 MB (inclui CHANGELOG, og-image, hero de 1120w e SVGs sem uso) | medido |
| Requisições externas | 2 (CSS do Google Fonts + woff2 em fonts.gstatic.com), com `preconnect` e `display=swap` | leitura de `index.html:23-25` |
| Imagens sem `width`/`height` | 0 de 25 `<img>`. As dimensões declaradas batem com a proporção real dos arquivos (conferido lendo os cabeçalhos dos JPG) | medido |
| Scripts bloqueantes | nenhum (`script.js` com `defer`; só um script inline de 1 linha que adiciona a classe `js`) | leitura de `index.html:27-29` |
| Contraste | ver a tabela abaixo | calculado (luminância relativa) |
| Validação W3C externa | não medido (não enviei o código a um serviço externo). Fiz uma verificação local de balanceamento de tags com o `html.parser` do Python: 0 erros | medido localmente |

### Contraste calculado (fórmula de luminância relativa do WCAG)

| Combinação | Uso | Razão | Resultado |
|---|---|---|---|
| #3B2A1E / #FBF5EC | texto principal / creme | 12,61:1 | AAA |
| #3B2A1E / #F6E7C8 | texto / mel claro, tags | 11,19:1 | AAA |
| #3B2A1E / #FFFFFF | texto / cards | 13,67:1 | AAA |
| #6B4F3A / #FBF5EC | texto secundário / creme | 6,91:1 | AA |
| #6B4F3A / #F6E7C8 | texto secundário / mel claro | 6,13:1 | AA |
| #6B4F3A / #FFFFFF | descrição dos cards | 7,49:1 | AAA |
| #A0482A / #FBF5EC | eyebrow, links, preços / creme | 5,61:1 | AA |
| #A0482A / #F6E7C8 | eyebrow, selo "Hoje" / mel claro | 4,97:1 | AA |
| #A0482A / #FFFFFF | preço / card | 6,08:1 | AA |
| #FFFFFF / #A0482A | texto do botão primário | 6,08:1 | AA |
| #FFFFFF / #87391F | botão primário em hover | 7,97:1 | AAA |
| #FBF5EC / #3B2A1E | CTA final, rodapé, chip ativo | 12,61:1 | AAA |
| #D9A441 / #3B2A1E | títulos e frase do rodapé, foco escuro | 6,08:1 | AA |
| #3B2A1E / #D9A441 | botão mel, número dos passos | 6,08:1 | AA |
| #3B2A1E / #E4B65E | botão mel em hover | 7,26:1 | AAA |
| #8A6F58 / #FBF5EC | borda do botão secundário e dos chips (não textual) | 4,31:1 | passa 3:1 |
| #8A6F58 / #F6E7C8 | borda dos chips na seção mel claro | 3,82:1 | passa 3:1 |
| #D9A441 / #FBF5EC | contorno de foco do link "pular" | 2,08:1 | ver T6 |

## Itens verificados sem problema

- **Estrutura:** `<!DOCTYPE html>`, `lang="pt-BR"`, `charset`, `viewport`, `<title>` e `<meta description>` presentes. As tags estão balanceadas (0 erros no parser) e não há IDs duplicados.
- **Títulos:** um único `<h1>` (`index.html:72`). A sequência é H1 → H2 → H3, sem saltos (32 títulos conferidos). Os títulos das colunas do rodapé são H2, o que é coerente.
- **Caminhos:** os 29 recursos locais referenciados (HTML, `srcset`, `imagesrcset` e `url()` do CSS) existem. Há **0** ocorrências de `../` no HTML e no CSS, então tudo fica dentro de `site/`. Todas as âncoras internas (`#destaques`, `#encomendas`, `#sobre`, `#depoimentos`, `#horarios`, `#inicio`, `#conteudo`) têm destino.
- **Semântica:** `header`, `nav` com `aria-label` (Principal e Rodapé), `main` com `tabindex="-1"` para o link de pular, `section` com `aria-labelledby`, `figure`/`blockquote`/`figcaption` nos depoimentos, `table` com `caption` e `th scope="row"` nos horários, `<time datetime>` e `<address>`.
- **Texto alternativo:** as fotos têm `alt` descritivo. Os decorativos (selo, fachada, avatares, logo dentro de link com `aria-label`) usam `alt=""`. Os SVGs inline têm `aria-hidden="true"` e `focusable="false"`. As estrelas têm texto `sr-only` ("Avaliação: 5 de 5").
- **Links externos:** todos têm `target="_blank"` com `rel="noopener"` e um aviso `sr-only` de "abre em nova aba". Os ícones sociais do rodapé têm `aria-label`.
- **Formulários:** o site não tem formulário, então não há `label` para verificar.
- **Teclado e foco:** contorno de 3 px (café nas seções claras, mel nas escuras, `styles.css:101-104` e `600`). A ordem de Tab é lógica (conferida no navegador, `capturas/desktop-foco.png`). O menu móvel tem `aria-expanded`, `aria-controls` e rótulo dinâmico, fecha com Esc devolvendo o foco e fica fora da ordem de Tab quando está fechado (`display:none`). Os chips usam `aria-pressed`, e o filtro é anunciado por `aria-live="polite"`.
- **Movimento:** `scroll-behavior`, a revelação na rolagem, o hover dos botões e o zoom das imagens dos cards ficam dentro de `prefers-reduced-motion: no-preference`. O script também verifica `reduce` e mostra tudo de imediato (`script.js:5`, `82-83`). Exceções: T1 e T7.
- **Sem JS:** o menu aparece em linha, os filtros ficam ocultos (`.js .filtros`) e os cards aparecem (`.revelar` só fica invisível com a classe `.js`).
- **Responsividade:** é mobile first, com breakpoints em 339, 479, 560, 768, 900, 1024 e 1200 px. A tipografia usa `clamp()`, há `img { max-width:100%; height:auto }` e um container de 1180 px com padding lateral. Não há larguras fixas grandes, e o `overflow-x: clip` não esconde estouro real (o `scrollWidth` é igual à viewport nas 3 larguras). O `scroll-padding-top` e o `scroll-padding-bottom` compensam o cabeçalho fixo e a barra fixa.
- **Alvos principais:** botões com `min-height` de 48 px (44 px no compacto), chips com 44 px, botão do menu com 44x44, ícones sociais com 44x44 e links do menu com 44 px de altura (56 px no painel móvel).
- **Desempenho (o que está certo):** a imagem do LCP tem `preload` com `imagesrcset` e `fetchpriority="high"`. As demais imagens usam `loading="lazy"`. O script tem `defer`. As fontes usam `display=swap` com `preconnect`. Há `width`/`height` em todas as imagens (CLS 0). Nenhuma biblioteca externa.
- **SEO e Open Graph:** título e descrição únicos, `og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:image` com dimensões e `alt`, e `twitter:card`. O `og-image.jpg` existe e tem 1200x630. O comentário com `[PLACEHOLDER: domínio]` (`index.html:20`) é um comentário HTML e não aparece na página.
- **Tokens:** as cores de `:root` (`styles.css:5-17`) batem com a seção de cores do `design.md`. Nenhum uso do verde do WhatsApp nem das combinações proibidas pelo design.

---

# Ciclo 2

- **Data:** 2026-11-18
- **Escopo:** `site/index.html` (544 linhas), `site/styles.css` (797), `site/script.js` (134), `site/assets/`, cruzados com `site/CHANGELOG.md` (seção "Ciclo 2"), `inspecao-visual.md` (seção "Ciclo 2"), `capturas/ciclo2-*` e os relatórios do Lighthouse do inspetor (`lh1.json`, `lh2.json`, `lh3.json`, mais o `lh.json` do ciclo 1, para comparar)
- **Investigação do TBT:** tracei a carga no Edge headless (playwright-core, CDP), a 360x800 com CPU 4x mais lenta, por `file:///`, numa **cópia** do site no scratchpad. Fiz testes A/B mudando uma coisa por vez na cópia. O site original não foi alterado.
- Como no ciclo 1, a falta de `conteudo.md` e `dados-negocio.md` e os dados fictícios não contam como falha.

## Veredito (ciclo 2)

**APROVADO COM RESSALVAS** (0 bloqueantes, 1 importante, 6 menores)

O bloqueante do ciclo 1 (T1) está resolvido. O HTML continua válido e balanceado, todos os caminhos ficam dentro de `site/`, todo asset referenciado existe e nenhum arquivo de `site/assets/` está sem uso. O Lighthouse dá 100 em Acessibilidade, Boas práticas e SEO. A ressalva principal é o N1: o custo de layout no carregamento, que agora aparece no TBT e às vezes atrasa o LCP.

## Status dos achados do ciclo 1

| ID | Status | Evidência no código |
|---|---|---|
| T1 (bloqueante, WCAG 2.2.2) | **resolvido** | `styles.css:343-347`: `animation: girar 4s cubic-bezier(.25,.6,.3,1) 1`, dentro de `prefers-reduced-motion: no-preference`. Uma volta de 4 s (menos de 5 s) e para. O inspetor mediu 0 animações ativas aos 5,3 s. |
| T2 (LCP) | **resolvido, com ressalva** | (a) `<picture>` com WebP e direção de arte 16:10 em 480w a 960w (`index.html:91-106`). (b) `sizes` coerente com o layout: 496px / 320px / `calc(100vw - 40px)` (`:100`, `:103`), e preload com `media` e `imagesizes` iguais (`:25-26`). (c) A imagem do LCP não tem mais `decoding="async"` (`:101-105`). (d) As fontes não bloqueiam mais a renderização (`:27-29`), e o Lighthouse não aponta mais as fontes como bloqueantes. LCP mediano de 2,4 s, mas uma rodada deu 3,9 s (ver N1). |
| T3 (hero abaixo de 1024 px) | **resolvido** | `styles.css:322` (16:10 no celular) e `:713-720` (2 colunas a partir de 768 px). H1 e CTA aparecem sem rolar a 360x800 e a 768x1024 (inspeção do ciclo 2). |
| T4 (imagens dos cards) | **não resolvido** (opcional, adiado no CHANGELOG) | `index.html:136-199`: os 8 cards ainda usam um único arquivo de 800x600, sem `srcset`. |
| T5 (alvos de toque) | **parcial** | Resolvido no contato (`styles.css:605`), nos links do rodapé (altura, `:653`) e no menu (`min-width: 44px`, `:275`). Falta a largura do link "Sobre" do rodapé (ver N3). |
| T6 (contorno do "pular") | **resolvido** | `styles.css:142`: sem `outline-color` próprio. Usa o contorno café, com 12,61:1 sobre creme. |
| T7 (transição da barra) | **resolvido** | `styles.css:686-688`: a transição só existe com `no-preference`. |
| T8 (barra ao carregar) | **resolvido** | `styles.css:684-685` mais `script.js:100` e `:116` (classe `--pronta` no 1º quadro). Sem JS, a barra continua visível. |
| T9 (OG absoluto, canonical) | **não resolvido** (aguarda o domínio) | `index.html:16`, `:20`. Pendência de publicação, não de protótipo. |
| T10 (título e descrição longos) | **resolvido** | `index.html:6-7`: título com 60 caracteres e descrição com 141 (medido). |
| T11 (JSON-LD Bakery) | **não resolvido** (aguarda dados reais) | Ainda não há `application/ld+json` no `<head>`. |
| T12 (SVGs sem uso em `site/`) | **resolvido** | `site/assets/svg/` tem só 6 arquivos, todos referenciados (favicon, logo, logo-claro, selo, fachada e espiga-marcador). Os demais estão em `fontes-svg/`, fora de `site/`. |
| T13 (peso dos SVGs) | **parcial** | `selo-fermentacao.svg` passou de 28,4 para 26,3 KB. `logo.svg` e `logo-claro.svg` continuam com 23,6 KB cada (85 KB de SVG no total). |
| T14 (ramo sobre o H1) | **resolvido** | `styles.css:778-787`: o ramo ficou em 100x200 e foi para `top: -235px`. Não cruza mais o H1 nem o lead. Isso criou o N2. |

## Causa do TBT (N1): o que mostra a investigação

1. **O trabalho não é novo, o que mudou foi a janela da medição.** No ciclo 1, o Lighthouse já media cerca de 1,1 s de "Style & Layout" (`lh.json`: 1 109 ms) e uma tarefa longa de 410 ms aos 916 ms. Mas o FCP era 1,8 s, e o TBT só conta as tarefas entre o FCP e o TTI. Por isso deu 0. Agora as fontes não bloqueiam a renderização, o FCP caiu para 1,1 s e essas mesmas tarefas (310 a 320 ms aos 825 a 1 066 ms, mais outras de 75 a 150 ms até cerca de 1,7 s) passam a contar: TBT de 160 a 450 ms.
2. **O custo é de layout, não de script.** O `script.js` gasta cerca de 60 ms no total (`bootup-time`), o `forced-reflow-insight` está vazio e o DOM tem só 573 elementos. No trace, o tempo vai para eventos `Layout` de cerca de 930 objetos, ou seja, a página inteira, que tem 15 153 px de altura a 360 px. São 3 ou 4 layouts completos de 140 a 630 ms cada, num total de **cerca de 1,0 a 1,3 s de Layout**, mais cerca de 200 ms de recálculo de estilo.
3. **O gatilho principal é a troca das fontes web.** As fontes chegam depois da 1ª pintura (CSS assíncrono e `display=swap`). Cada família que chega (Fraunces e Nunito Sans) força um novo layout da página inteira. Testes A/B na cópia (Layout total em ms, por rodada):

| Variante (cópia) | Layout por rodada (ms) | Efeito |
|---|---|---|
| Base (igual ao site) | 1 157 / 827 / 1 053 / 1 273 / 1 088 / 945 / 1 011 | referência (mediana de cerca de 1 050) |
| Sem as fontes do Google | 529 / 480 / 791 / 599 / 688 / 557 | **cerca de metade** |
| `display=optional` no lugar de `swap` | 865 / 638 / 698 / 585 | cerca de 35 % a menos |
| `content-visibility: auto` em `.secao`, `.cta-final` e `.rodape` | 738 / 472 / 600 / 504 | **cerca de 50 % a menos**, tarefas longas de no máximo cerca de 270 ms depois do FCP |
| Sem `text-wrap: balance` | 1 099 / 929 / 1 080 | sem efeito |
| Sem nenhum `<use>` de ícone | 1 233 / 1 423 / 1 086 | sem efeito |
| Sem `backdrop-filter`, sem JS ou sem a animação do selo (sobre a variante sem fontes) | 480 a 713 | sem efeito além do ruído |

4. **Efeito no LCP:** o "element render delay" (311 a 486 ms) e a rodada de 3,9 s vêm da imagem do hero esperando a thread principal sair desses layouts. A rede não é o gargalo: TTFB, atraso e carga ficam abaixo de 90 ms cada.

**Correção indicada** (por ordem de impacto e simplicidade; é preciso medir de novo depois):
- (a) **Hospedar as fontes localmente** em `site/assets/fonts/`: woff2 só com o subconjunto latino, só os eixos e pesos usados (Fraunces 600–700 com SOFT 100; Nunito Sans 400, 600 e 700). Usar `<link rel="preload" as="font" type="font/woff2" crossorigin>` para as duas famílias e `@font-face` com `font-display: swap` (ou `optional`) no `styles.css`. Tirar as linhas `index.html:23-24` e `:27-29`. As fontes chegam junto com o CSS, antes do 1º layout completo, e as relayouts de troca somem ou diminuem. Isso também elimina 3 requisições externas.
- (b) **`content-visibility: auto` nas seções abaixo da dobra**, com `contain-intrinsic-size: auto 900px` (ou outra altura aproximada por seção). Usar em `.secao`, `.cta-final` e `.rodape`, nunca no `.hero`. Depois, conferir se os links de âncora do menu (`#horarios` e `#depoimentos`) caem no lugar certo e se a barra fixa e o "revelar" continuam funcionando.
- (c) Alternativa mínima, se (a) não for feito: trocar `display=swap` por `display=optional` nas URLs das fontes (`index.html:27-29`). O ganho é menor, e numa rede lenta a 1ª visita pode ficar com a fonte do sistema.

## Achados novos (ciclo 2)

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| N1 | Desempenho (TBT/LCP) | `index.html:23-29`; `styles.css` (sem `content-visibility`) | TBT de 160 a 450 ms (mediana de 370) e LCP instável (2,3 / 2,4 / 3,9 s). A causa são 3 ou 4 layouts da página inteira (cerca de 1,0 a 1,3 s com CPU 4x), puxados sobretudo pela troca tardia das fontes web, que agora acontece depois do FCP (ver a investigação acima). | importante | (a) fontes locais com preload, ou (b) `content-visibility: auto` nas seções abaixo da dobra. De preferência os dois. Medir de novo e buscar TBT ≤ 200 ms e LCP ≤ 2,5 s nas 3 rodadas. |
| N2 | Sobreposição decorativa (desktop) | `styles.css:781-782` | Com `top: -235px` e 100x200, o topo do `.hero__ramo` (y 47 a 1440x900) fica atrás do cabeçalho sticky (y 0 a 73, `z-index: 50`, fundo 95 % opaco), e a ponta da espiga aparece cortada reto (`capturas/ciclo2-desktop-ramo.png`). Como o `.hero__grade` usa `min-height: min(88vh, 760px)` com `align-items: center`, a posição muda com a altura da janela. | menor | Ramo menor e mais baixo, por exemplo `width: 80px; height: 160px; top: -190px` (cálculo: topo em cerca de y 94 e base em cerca de y 268, abaixo do cabeçalho e acima do eyebrow em y 291). Conferir a 1440x900 e a 1280x720. |
| N3 | Alvos de toque | `styles.css:653` | `.rodape__col li > a` tem `min-height: 44px`, mas não tem largura mínima. O "Sobre" do rodapé mede 39 a 40 x 44 px (inspeção). Passa os 24 px do 2.5.8 (AA); fica abaixo da referência de 44 px do time (2.5.5 é AAA). | menor | Acrescentar `min-width: 44px` ao seletor. |

Os menores que vêm do ciclo 1 continuam valendo: T4 (cards sem `srcset`), T13 (logos de 23,6 KB), T9 (OG absoluto e canonical, ao publicar) e T11 (JSON-LD, com dados reais).

## Métricas (ciclo 2)

| Métrica | Valor | Fonte |
|---|---|---|
| Lighthouse celular (3 rodadas) | Desempenho 97 / 87 / 79 (mediana de 87); Acessibilidade, Boas práticas e SEO em 100 | `inspecao-visual.md` |
| Web Vitals (mediana) | FCP 1,1 s (era 1,8); LCP 2,4 s (era 4,0); TBT 370 ms (era 0); CLS 0; SI 1,3 s | `inspecao-visual.md`, `lh1-3.json` |
| Style & Layout (Lighthouse) | 1 070 a 1 183 ms (ciclo 1: 1 109 ms) | `mainthread-work-breakdown` |
| Layout no trace (CPU 4x, 360x800) | cerca de 1 050 ms de mediana; cerca de 530 sem fontes web; cerca de 580 com `content-visibility` | medido (trace CDP, cópia) |
| Script (avaliação e compilação) | cerca de 60 ms; nenhum reflow forçado | `bootup-time`, `forced-reflow-insight` |
| DOM | 573 elementos, profundidade 11 | `dom-size-insight` |
| Rolagem horizontal, imagens quebradas, console, requisições com falha | nenhuma, 0, 0, 0 | `inspecao-visual.md` |
| HTML, CSS e JS | 41,0 KB, 26,1 KB, 5,3 KB (sem minificar) | medido |
| `site/` no total | 2,73 MB (2,56 MB de imagens, porque o hero agora tem variantes em WebP e JPEG; cada visita baixa só uma variante) | medido |
| Requisições externas | 3 (CSS do Google Fonts + 2 woff2), não bloqueantes | `index.html:27-29`, `network-requests` |
| Assets locais referenciados | todos existem; 0 `../`; 0 arquivos sem uso em `site/assets/` | medido (script local) |
| Tags balanceadas, IDs duplicados, âncoras sem destino | 0, 0, 0 | `html.parser` local |
| Imagens sem `width`/`height` | 0 (as `<source>` do hero 16:10 declaram 960x600) | medido |

## Itens verificados sem problema (ciclo 2)

- **Estrutura:** `lang`, `charset`, `viewport`, título (60 caracteres) e descrição (141). Um único `<h1>` (`index.html:75`) e hierarquia sem saltos. 0 `!important`.
- **Hero responsivo:** a direção de arte (`<source media="(max-width: 767px)">`) e o preload têm a mesma `media` e os mesmos `sizes`, então não há download duplicado. O JPEG de reserva fica no `<img srcset>`. `fetchpriority="high"` só na imagem do LCP.
- **Fontes sem JS:** o `<noscript>` com a folha normal (`index.html:29`) mantém as fontes quando o JS está desligado.
- **Depoimento em destaque (M1):** creme sobre café dá 12,61:1, mel-claro sobre café (bairro) 11,19:1, a tag "Exemplo" (café sobre mel-claro) 11,19:1 e as estrelas mel sobre café 6,08:1 (passa 3:1 como elemento gráfico). As aspas são decorativas (`aria-hidden`). A estrutura `figure`/`blockquote`/`figcaption` foi mantida.
- **Movimento:** o selo, a barra fixa, o revelar, a rolagem suave e os hovers dependem de `prefers-reduced-motion: no-preference`. Não sobra nenhuma animação infinita.
- **Foco:** contorno café de 3 px nas áreas claras e mel nas escuras (`styles.css:101-104`, `:616`). A ordem do Tab foi conferida pelo inspetor.
- **Tokens:** `:root` (`styles.css:3-55`) igual ao do ciclo 1, de acordo com o `design.md`.
