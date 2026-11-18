# Avaliação técnica: Rosa Bordô

- Data: 2026-11-17 · Iteração 2 (reavaliação após as correções do ciclo 1, ver `site/CHANGELOG.md`)
- Entradas: `site/index.html` (59,0 KB), `site/styles.css` (36,5 KB), `site/script.js` (10,9 KB), `design.md`, `inspecao-visual.md` (iteração 2), `capturas/`
- Método: leitura de código, verificação por script (tags balanceadas, IDs duplicados, hierarquia de títulos, caminhos `../assets/` e âncoras), `node --check script.js` e cálculo de contraste (luminância relativa WCAG). As métricas de navegador (Lighthouse, rolagem, console, alvos) vêm do `inspecao-visual.md` e não foram refeitas.

## Veredito: APROVADO COM RESSALVAS

0 bloqueantes, 0 importantes novos, 4 menores novos (T11 a T14). Os 3 bloqueantes do ciclo 1 (T1, T2, T3) foram resolvidos, assim como T4, T5 e T8 a T10. Continuam pendentes só T6 (`og:image` absoluto, `og:url`, `canonical`) e T7 (publicar a raiz do projeto), que dependem do domínio e devem ser resolvidos **antes de publicar**, mas não impedem a aprovação desta versão local. Acessibilidade no Lighthouse subiu de 96 para 100.

## Situação dos achados do ciclo 1

| ID | Achado | Situação | Evidência |
|---|---|---|---|
| T1 | Menu do celular e do tablet recortado (`backdrop-filter` no `.cabecalho`) | **resolvido** | `styles.css:213-223`: o desfoque foi para `.cabecalho::before` (absoluto, `z-index: -1`, `pointer-events: none`), dentro de `@supports`; o `.cabecalho` não tem mais `backdrop-filter`, `transform`, `filter` nem `will-change`. Medido pelo inspetor: `#menu` = [0, 0, 360, 800] e [0, 0, 768, 1024]; Esc e clique em link funcionam (`celular-menu-aberto.png`, `tablet-menu-aberto.png`) |
| T2 | `ul`/`li` com `role="group"` (falha `list`, WCAG 1.3.1) | **resolvido** | `index.html:177` `<div class="hero__slides">` e `index.html:180, 209, 238, 262` `<div class="slide" role="group" aria-roledescription="slide">`. Falha `list` sumiu do Lighthouse (Acessibilidade 100) |
| T3 | Etiqueta do hero abaixo de 4,5:1 no celular | **resolvido** | `styles.css:371-373`: abaixo de 768 px, fundo `rgba(42,14,24,.72)`. Calculado no pior caso (sobre pixel branco): composto ≈ `#665159`, creme `#FBF5EF` sobre ele = **6,70:1** (AA) |
| T4 | Folha do Google Fonts bloqueando a renderização | **resolvido** (com efeito colateral, ver T11) | `index.html:28-29`: `preload` + `onload` e `<noscript>`. O Lighthouse não aponta mais as fontes como bloqueantes; só o `styles.css` (~230 ms), o que é esperado |
| T5 | Slide 2 disputando banda com o LCP | **resolvido** | `script.js:154` (`if (iniciado)`) e `script.js:260-262` (próximo slide só após `load`) |
| T6 | `og:image` relativo, sem `og:url` e `canonical` | **pendente** (depende do domínio) | `index.html:16` continua `../assets/fotos/og-image.jpg`; sem `og:url` e `canonical`. Registrado no CHANGELOG como pendência |
| T7 | Assets fora de `site/` | **pendente** (decisão de publicação) | Referências `../assets/` mantidas. Registrado no CHANGELOG |
| T8 | Faixa do topo em 2 linhas a 360 px | **resolvido** | `styles.css:198-201` (`min-width: 400px`); inspetor: 1 linha, 36 px (`celular-dobra.png`) |
| T9 | Foco sem indicador em `forced-colors` | **resolvido** | `styles.css:108`: `outline: 2px solid transparent; outline-offset: 2px` |
| T10 | `decoding="async"` na imagem do LCP | **resolvido** | `index.html:190`: só `fetchpriority="high"`; `decoding="async"` ficou nos slides 2 a 4 (`index.html:219, 248, 272`) |

## Tabela de achados novos (ciclo 2)

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T11 | Desempenho (CLS) | `index.html:28` (fontes assíncronas) + `styles.css:355-358` (`.slide__conteudo` ancorado na base do hero, com `padding-bottom: 96px`) | Com a folha de fontes sem bloquear (T4), o texto do hero pinta primeiro com a fonte reserva e depois troca para Fraunces/Nunito. O título (`--fs-display`, `line-height: 1.05`) muda de altura e, como o bloco está ancorado embaixo, a etiqueta e o título se deslocam. Medido: **CLS 0,083** nas 2 execuções, culpado `div.slide__conteudo` (inspetor, V8). Fica abaixo do limite "bom" de 0,1, mas era 0 no ciclo 1 | menor | Opção 1 (sem mudar o carregamento): declarar uma fonte reserva com métricas ajustadas e colocá-la logo depois da Fraunces e da Nunito no `font-family`, por exemplo `@font-face { font-family: "Fraunces Fallback"; src: local("Georgia"); size-adjust: …; ascent-override: …; descent-override: …; }` (e o mesmo para a Nunito com `local("Arial")`), com valores calibrados até o deslocamento sumir. Opção 2: hospedar as fontes em `assets/fontes/` (woff2, subconjunto latino) com `<link rel="preload" as="font" crossorigin>` só para a Fraunces 600 do `h1`. Opção 3 (mais simples): `display=optional` no pedido do Google Fonts (sem troca tardia, mas a 1ª visita pode ficar com a fonte reserva) |
| T12 | Desempenho (TBT) | `script.js:9-13` (`aoRolar()` chamado na execução do script, lendo `window.scrollY`); `script.js:122` (`void progresso.offsetWidth` em `mostrar(0)`) | A leitura de `window.scrollY` logo na execução do script força o primeiro cálculo de layout da página inteira dentro da tarefa do JS. O Lighthouse atribui **134 ms** de reflow forçado à linha 9 e 11 ms à linha 121/122 (inspetor, V9). TBT medido: **290 ms e 430 ms** (era 0), acima do alvo de 200 ms no perfil de celular; Performance caiu para 79 e 75 | menor | Não chamar `aoRolar()` de forma síncrona na carga: trocar a linha 13 por `requestAnimationFrame(aoRolar);` (ou só chamar se `location.hash` existir, já que a página carrega no topo). Alternativa sem leitura de layout: um `IntersectionObserver` num elemento sentinela de 8 px no topo, que alterna `is-rolado`. Para a linha 122, na inicialização, adicionar `hero--animando` num `requestAnimationFrame` em vez de forçar o reflow com `offsetWidth`. Medir de novo depois |
| T13 | Responsividade (Sobre) | `styles.css:590-592` (`.sobre { background: linear-gradient(to bottom, var(--c-creme) 50%, var(--c-branco) 50%); }`), aplicado em todas as larguras; a grade só fica lado a lado a partir de 1024 px (`styles.css:640-641`) | O corte seco do degradê foi pensado para o layout em colunas. No celular e no tablet, com a seção empilhada, a linha creme/branco atravessa o bloco de texto entre o 1º e o 2º parágrafo (inspetor, V10, `celular-inteira.jpg` em y≈6970). O contraste não é afetado (texto 12,5:1 no creme e ~13:1 no branco), mas a divisão corta o conteúdo no meio | menor | Fundo liso abaixo de 1024 px e o degradê só no desktop: `.sobre { background: var(--c-creme); } @media (min-width: 1024px) { .sobre { background: linear-gradient(to bottom, var(--c-creme) 50%, var(--c-branco) 50%); } }` |
| T14 | Acessibilidade / estado do menu | `script.js:71-78` (observador do link ativo) | O callback só age quando uma seção **entra** na faixa central (`if (!en.isIntersecting) return;`) e o hero (`#inicio`) não está entre as seções observadas, pois não há link para ele. Ao voltar ao topo, nenhuma seção entra na faixa e "Coleção" continua com `aria-current="true"` e sublinhado (inspetor, V11: medido em scrollY=0, `desktop-slide-1.png`). O estado anunciado ao leitor de tela fica errado | menor | No callback, quando uma entrada sai da faixa e o link dela é o atual, remover o `aria-current`: `if (!en.isIntersecting) { var l = mapa[en.target.id]; if (l) l.removeAttribute('aria-current'); return; }`. Outra opção: observar também `#inicio` e, quando ele estiver na faixa, limpar todos os links |

## Métricas

| Métrica | Ciclo 1 | Ciclo 2 | Fonte |
|---|---|---|---|
| Lighthouse celular: Performance | 82 | 79 · 75 | inspecao-visual.md |
| Lighthouse celular: Acessibilidade | 96 | **100** | inspecao-visual.md |
| Boas práticas / SEO | 100 / 100 | 100 / 100 | inspecao-visual.md |
| LCP (celular) | 4,7 s | **4,1 s · 4,0 s** | inspecao-visual.md |
| TBT (celular) | 0 ms | 290 ms · 430 ms (ver T12) | inspecao-visual.md |
| CLS (celular) | 0 | 0,083 (ver T11) | inspecao-visual.md |
| Falhas do Lighthouse | `list`, `bf-cache` | só `bf-cache` (vem do `Cache-Control: no-store` do servidor de teste; não há `unload`/`beforeunload` em `script.js`) | inspecao-visual.md + leitura |
| Rolagem horizontal | não (360, 768, 1440) | não (360, 768, 1440) | inspecao-visual.md |
| Imagens quebradas / erros de console / requisições ≥ 400 | 0 / 0 / 0 | 0 / 0 / 0 | inspecao-visual.md |
| Alvos < 44 px | 0 | 0 | inspecao-visual.md |
| Peso do código (sem compressão) | 106 KB | 106,5 KB (HTML 59,0 + CSS 36,5 + JS 10,9) | medido (`wc -c`) |
| Requisições externas | 1 CSS do Google Fonts + woff2 | igual, agora sem bloquear a renderização | leitura (`index.html:28`) |

### Contrastes

Os contrastes da paleta calculados no ciclo 1 continuam válidos (as cores não mudaram): texto/creme 12,52:1; texto-suave/creme 5,97:1; texto-suave/branco 6,46:1; bordô/creme 10,40:1; creme/bordô-900 13,96:1; rosa/bordô 5,54:1; sálvia-escuro/branco 6,71:1; creme sobre o véu do hero (pior caso) 6,72:1. Novo cálculo deste ciclo:

| Combinação | Uso | Contraste | Resultado |
|---|---|---|---|
| creme `#FBF5EF` sobre `rgba(42,14,24,.72)` em cima de branco (pior caso) | etiqueta do hero no celular | 6,70:1 | AA |
| texto `#3A2A2E` sobre branco | metade inferior da seção Sobre | ~13,3:1 | AA |

## Itens verificados sem problema

- **HTML**: tags balanceadas e sem IDs duplicados (verificado por parser); `lang="pt-BR"`, `<title>`, `<meta description>`, `viewport`, `charset` e `theme-color` presentes. Um único `h1` (`index.html`, slide 1); hierarquia h1 → h2 → h3 sem saltos nas 29 ocorrências.
- **Caminhos e âncoras**: todos os `../assets/...` do HTML e do CSS existem (a única ocorrência sem arquivo correspondente é texto de comentário em `index.html:78`). Todas as âncoras internas têm alvo, inclusive o novo botão `.nav__cta`.
- **JS**: `node --check script.js` sem erro. Um só script, com `defer`. Ouvinte de rolagem `passive`.
- **Menu**: tela cheia no celular e no tablet; foco preso, Esc devolve o foco, `aria-expanded` e `aria-controls`; `.nav__cta` oculto a partir de 1024 px (`styles.css:258-260`), junto com o botão de abrir e o topo do painel.
- **Carrossel (APG)**: wrapper e slides em `div`, com `role="group"`, `aria-roledescription`, `aria-label`, `aria-hidden` e `inert` nos inativos; `aria-live` alterna entre `off` e `polite`; controles antes dos slides, pausar primeiro (WCAG 2.2.2). Recorte do celular com `--sobe-m` e `--foco-m` sem rolagem horizontal (só a imagem com zoom passa da largura dentro do hero, sem efeito na página).
- **Movimento reduzido**: sem mudança desde o ciclo 1 (durações mínimas, sem autoplay, sem barra, sem zoom).
- **Foco**: anel visível (`desktop-foco.png`) e contorno transparente para `forced-colors` (T9).
- **Imagens**: `width`/`height` em todas; `fetchpriority="high"` e `preload` com `media` na imagem do LCP; `lazy` abaixo da dobra; `alt` descritivo nas fotos de conteúdo.
- **Responsividade**: mobile first, `clamp()` na tipografia, `max-width: 100%` global, sem larguras fixas grandes; faixa do topo em 1 linha a 360 px.
- **SEO**: título e descrição únicos, Open Graph (`og:title`, `og:description`, `og:type`, `og:locale`, `og:site_name`, `og:image:*`), estrutura semântica e JSON-LD. Pendências só as de domínio (T6).
