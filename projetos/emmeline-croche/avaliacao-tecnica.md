# Avaliação técnica: Emmeline Crochê (reavaliação após o ciclo 1)

- Data: 2026-11-15
- Escopo: `site/index.html` (698 linhas), `site/styles.css` (1275), `site/script.js` (165), comparados com `design.md` e com a avaliação anterior (ver `site/CHANGELOG.md`, Iteração 2)
- Método: leitura do código; análise estática em Python (balanceamento de tags, IDs, âncoras, `aria-*`, JSON-LD, referências de assets); medição no Google Chrome headless via DevTools Protocol, com `Emulation.setDeviceMetricsOverride` (`mobile: true`), emulação de toque e user agent Android em 360×800 (DPR 1 e 3) e 768×1024 (DPR 2), e desktop em 1280×800 (DPR 1). Também medi com `prefers-reduced-motion: reduce`, com `script.js` bloqueado e com `script.js` bloqueado + `#menu`. A árvore de acessibilidade foi lida com `Accessibility.getFullAXTree`.

## Veredito: APROVADO COM RESSALVAS

O bloqueante B1 foi corrigido e confirmado pela árvore de acessibilidade. I1, M1, M3 e M5 também foram resolvidos e medidos. Não há rolagem horizontal nem erros de console nas três larguras. A ressalva que sobra é I2: as URLs absolutas de `og:image`/`twitter:image`, `og:url` e `canonical` dependem do domínio final. Elas estão prontas como PLACEHOLDER comentado e precisam ser aplicadas antes de publicar.

Contagem: 0 bloqueantes, 1 importante (I2, pendente de domínio), 3 menores (M2 e M4 continuam; M6 é novo).

## Situação dos achados anteriores

| ID | Situação | Evidência |
|---|---|---|
| B1 (WCAG 2.5.3) | **Corrigido** | `index.html:218, 236, 254, 272, 290, 308`: `Quero esta<span class="sr-only">: Bolsa X, pelo WhatsApp (abre em nova aba)</span>`, sem `aria-label`. Nomes na árvore de acessibilidade (360 e 1280): "Quero esta : Bolsa Lua, pelo WhatsApp (abre em nova aba)" etc., e os 6 começam pelo texto visível. CTA do cabeçalho (`:146`): "Encomendar pelo WhatsApp (abre em nova aba)", que contém o rótulo visível "Encomendar" (desktop) e "Encomendar pelo WhatsApp" (mobile). A variante oculta fica em `display:none`, então não duplica o nome. Flutuante (`:695`): "Encomendar pelo WhatsApp (abre em nova aba)". Logo (`:124`): nome do link "Emmeline Crochê, início", vindo do `alt`, que começa pelo texto da imagem. Só restam 3 `aria-label`: botão de menu só com ícone (`:127`), `nav` (`:136`) e `ol` (`:358`). Nenhum deles diverge de texto visível. |
| I1 (classe `js`) | **Corrigido** | Não há script inline no `<head>`. A classe é adicionada em `script.js:10`. Com `script.js` bloqueado (medido): `html.className = ""`, 0 de 26 `.reveal` ocultos, FAB visível e conteúdo inteiro visível. |
| I2 (URLs absolutas OG) | **Pendente (depende do domínio)** | `index.html:28-32, 39`: `og:image`/`twitter:image` ainda relativos. `canonical` e `og:url` estão comentados como PLACEHOLDER. |
| M1 (navegação sem JS) | **Corrigido** | `index.html:132-134` e `styles.css:386-404`. Sem JS, em 360 px: `.menu-link` em `inline-flex` 44×44 e `.menu-toggle` em `none`. Com `#menu`: `#menu:target` vale, `nav` fica em `block` e os 4 links aparecem (captura conferida). Com JS: `.menu-toggle` 44×44 e `.menu-link` em `none`. Como os dois têm o mesmo tamanho, a troca não desloca o layout. |
| M2 (caminhos `../assets/`) | Continua (menor) | Os 31 caminhos reais existem. A decisão de publicação está registrada nas pendências do CHANGELOG. |
| M3 (alvos dos créditos) | **Corrigido** | `index.html:682-685`, `styles.css:1212-1219`. Medido nas 3 larguras: "Pexels License" 94×44 e "Unsplash License" 112×44. |
| M4 (JSON-LD sem url/logo/image) | Parcial (menor) | `index.html:62-64` tem `url`, `logo` e `image`, mas com caminho relativo (`"./"`, `"../assets/..."`). O schema.org e o Google esperam URL absoluta. Há um comentário explicativo em `:52-55`. |
| M5 (srcset) | **Corrigido** | `index.html:209…299`: `srcset` 400w/800w + `sizes`. As 6 versões de 400 px existem (42,6 a 47,5 KB). Medido: em 360 DPR 1 e em 1280 DPR 1 o navegador escolhe `-400.jpg`; em 360 DPR 3 e em 768 DPR 2 escolhe a de 800 px, como esperado. Em DPR 1, o peso das 6 fotos cai de cerca de 975 KB para cerca de 273 KB. |

## Achados atuais

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| I2 | SEO / compartilhamento | `index.html:28-32, 39` | `og:image` e `twitter:image` usam caminho relativo, e `og:url`/`canonical` estão comentados. As prévias no WhatsApp, Facebook e X saem sem imagem. | Importante (só antes de publicar) | Ao definir o domínio, descomentar `canonical` e `og:url` e trocar para `https://<dominio>/assets/fotos/og-image.jpg`. |
| M2 | Implantação / caminhos | `index.html` (todos os `../assets/`), `styles.css:503, 696, 1085` | Os assets ficam fora de `site/`. Se só a pasta `site/` for publicada, as imagens quebram. | Menor | Publicar a pasta do projeto inteira, ou copiar `assets/` para `site/assets/` e ajustar os caminhos. |
| M4 | SEO / JSON-LD | `index.html:62-64` | `url`, `logo` e `image` estão com caminho relativo. O JSON é válido (parse OK, `@type: Store`, 16 propriedades). | Menor | Trocar por URLs absolutas junto com o I2. |
| M6 | Navegação sem JS | `index.html:132`, `styles.css:404` | Com o painel aberto via `:target`, não há controle para fechá-lo sem navegar: o `.menu-link` continua com `href="#menu"`. O painel só fecha ao escolher um link ou ao voltar no navegador. Afeta só quem está sem JS. | Menor | Opcional: dentro do `nav`, acrescentar um link "Fechar menu" (`href="#topo"`, alvo ≥ 44 px) visível só em `html:not(.js) .site-nav:target`. |

## Tratamento CSS do hero (verificação pedida)

- **Contraste de textos:** sem impacto. `filter: saturate(.82) hue-rotate(-8deg)` (`styles.css:536`) e o véu `::before` com `mix-blend-mode: multiply` (`:537-540`) ficam dentro de `.hero__frame`, que tem `overflow:hidden` e não contém texto. Medido: nenhum elemento de `.hero__text` cruza o retângulo da moldura nas 3 larguras (0 sobreposições). O selo fica fora da moldura (`z-index: 2`, decorativo, `aria-hidden`) e não é afetado. Os pares de contraste do hero não mudaram: `#2B1A1E`/`#F7F0E8` 14,64, `#955251`/`#F7F0E8` 5,16, `#6B5A55`/`#F7F0E8` 5,77 e botão `#FFF`/`#7A2338` 9,88.
- **Desempenho:** o filtro e o blend são estáticos, sem animação nem transição nesses elementos, então o custo é de uma composição por pintura. Medido em 1280 px (`file://`): FCP 148 ms, LCP 148 ms (elemento `.hero__img`) e CLS 0. Nenhuma requisição extra: é só CSS. O `preload` e o `fetchpriority="high"` da imagem continuam ativos.
- **Observação:** o `alt` ("bolsa de crochê vermelha") continua correto depois do tratamento (a bolsa fica carmim). O bloco está marcado no CSS para remoção quando chegar a foto real.

## Métricas

| Métrica | Valor | Fonte |
|---|---|---|
| Rolagem horizontal | 360 (DPR 1 e 3): `scrollWidth` 360. 768: 768. 1280: 1265 (= `clientWidth`, descontada a barra de rolagem). 0 elementos visíveis fora da viewport. Também 360 com o menu aberto, sem JS e com movimento reduzido | Chrome headless (CDP) |
| Erros de console / exceções / falhas de rede | 0 nas 3 larguras e nos modos de movimento reduzido e sem JS. A única falha de rede é o `script.js` bloqueado de propósito no teste sem JS | Chrome headless |
| Status HTTP ≥ 400 / imagens quebradas | 0 / 0 | Chrome headless |
| Alvos interativos < 44 px | 0 nas 3 larguras (inclui os links de licença, agora com 44 px de altura) | Chrome headless |
| Menu mobile com JS (360) | Ao abrir: `aria-expanded="true"`, rótulo "Fechar menu", foco em "Coleção", `body` com `overflow:hidden` e `scrollWidth` 360. Com Esc: fecha e devolve o foco ao botão | Chrome headless |
| Revelação ao rolar | Rolagem lenta em 360: 25 de 26 com `is-visible`. O 26º é `.about__text`, que no celular tem `display: contents` (`styles.css:712`) e por isso não gera caixa. Sem caixa, `opacity`/`transform` não têm efeito e o conteúdo dele aparece normalmente (captura conferida). Movimento reduzido: 0 de 26 ocultos | Chrome headless |
| Botão flutuante | Oculto no topo, visível no meio da página (161×52), `display:none` em 1280 | Chrome headless |
| h1 | 40 px (360), 56,32 px (768), 72 px (1280) | Chrome headless |
| HTML / CSS / JS | 45,2 KB / 31,1 KB / 6,0 KB (sem minificação) | `wc -c` |
| Requisições externas | 1 CSS do Google Fonts + 6 woff2 (`display=swap`, com `preconnect`) | Chrome headless |
| JSON-LD | Parse OK, `@type: Store` | Python `json` + DOM |
| Lighthouse | **Não medido**: o Lighthouse não está instalado e não baixei pacotes externos. Substituído por FCP/LCP/CLS via `PerformanceObserver` (acima), que vale para `file://` e não representa a rede real | — |
| Validação W3C | **Não executada**: depende de serviço externo. Substituída por parse local: tags balanceadas, 0 IDs duplicados, todas as âncoras e `aria-controls`/`aria-labelledby` resolvem | Python `html.parser` |

## Itens verificados sem problema

- **Estrutura:** `lang="pt-BR"`, `charset`, `viewport`, `<title>` e `meta description` únicos, um único `h1`, hierarquia h1 → h2 → h3 sem saltos e landmarks válidos.
- **Imagens:** todas têm `alt` e `width`/`height`. As decorativas usam `alt=""`. Os ícones SVG têm `aria-hidden`/`focusable="false"`.
- **Links externos:** todos os `target="_blank"` têm `rel="noopener"` (0 sem) e aviso "(abre em nova aba)" em `.sr-only`.
- **Foco:** o anel `:focus-visible` não mudou (vinho 8,75:1, e dourado 6,65:1 em fundo escuro). O skip link funciona.
- **Contraste:** a paleta e os pares não mudaram desde a avaliação anterior. Todos passam AA, e a tabela anterior continua valendo. Os novos elementos (filete do hero, lista de licenças em `#F7F0E8` sobre `#5E1A2B`, 11,20:1) estão em conformidade.
- **Responsividade:** breakpoints de 600, 900 e 1200 px, `clamp()` e `img{max-width:100%}`. O mosaico de desktop novo (`styles.css:790-809`) não gera estouro em 1280.
- **`prefers-reduced-motion`:** sem revelações, sem `transform` de hover e com `scroll-behavior: auto` (medido).
- **Assets:** todos os caminhos reais referenciados existem, incluindo as 6 versões `-400.jpg`.
