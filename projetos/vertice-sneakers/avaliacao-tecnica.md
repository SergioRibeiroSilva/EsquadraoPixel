# Avaliação técnica: Vértice Sneakers

- Etapa 7, ciclo 2. Data: 19/11/2026.
- Base: `site/index.html` (888 linhas), `site/styles.css` (832), `site/script.js` (379), `site/CHANGELOG.md` (etapa 9, ciclo 1), `design.md` e as medições do `inspecao-visual.md` do ciclo 2 e de `capturas/` (Edge 157 sem janela, Playwright, Lighthouse). Não refiz as medições do inspetor. Fiz só um teste A/B próprio de Lighthouse para investigar o TBT (ver Métricas).
- Dados fictícios (contatos, produtos, depoimentos) são pedido do usuário e não contam como falha.

## Veredito: APROVADO

Os 9 achados do ciclo 1 (T1 a T9) foram resolvidos e conferidos no código e nas medições do inspetor. Não encontrei achado novo bloqueante nem importante. A queda do TBT no celular (40 → 250 ms) não vem das fontes de recorte EB Garamond: no teste A/B, a variação entre rodadas da mesma versão foi maior que a diferença entre as versões. Por isso, não recomendo nenhuma mudança.

Contagem: **0 bloqueantes, 0 importantes, 0 menores.** O C2-1 do inspetor (cadarço atrás do logo, slide 3 no celular) é estético e fica com o avaliador de resultado.

## Comparação com o ciclo 1

| ID | Severidade no ciclo 1 | Situação | Evidência no ciclo 2 |
|---|---|---|---|
| T1, menu cortado após rolar | bloqueante | **Resolvido** | styles.css:209 (`isolation: isolate` em `.cabecalho`), :219-223 (desfoque em `.cabecalho::before`, só em `.is-rolado`). O `<header>` deixa de ser o bloco de contenção do painel fixo. O inspetor mediu o painel com 736 px (360) e 960 px (768) nas rolagens 0, 100 e 2500, com todos os links visíveis (`celular-menu-aberto-rolado.png`, `tablet-menu-aberto-rolado.png`). |
| T2, nome das abas sem o número visível (WCAG 2.5.3) | bloqueante | **Resolvido** | index.html:150, 155, 160, 165: `.aba__num` sem `aria-hidden`. O nome passa a ser "01 Couro artesanal" etc. |
| T3, nome do Instagram sem o texto visível (WCAG 2.5.3) | bloqueante | **Resolvido** | index.html:864-866: sem `aria-label`, com "@verticesneakers" seguido de `.sr-only` " no Instagram (abre em nova aba)". |
| T4, rádios ovais de 30x52 | importante | **Resolvido** | styles.css:682 e seguintes. O inspetor mediu 20x20, com rótulos de 75x44, 67x44 e 110x44 (`desktop-radios-periodo*.png`). |
| T5, h1 sumindo com `inert` no slide 1 | importante | **Resolvido** | index.html:130: `<h1 class="sr-only">` fora dos slides. Slides 1 a 4 com `h2` (index.html:184, 204, 224, 244). Sequência de títulos no documento: 1, 2, 2, 2, 2, 2, 3…, sem saltos. A divergência do design.md:200 está registrada no CHANGELOG. |
| T6, sem canonical | menor | **Resolvido** | index.html:23. |
| T7, logo SVG no JSON-LD | menor | **Resolvido** | index.html:45 aponta para `assets/logo-vertice.png`, que existe (8 KB). |
| T8, alvos abaixo de 44 px | menor | **Resolvido** | styles.css:767 (`.contatos a` em inline-flex com 44 px) e :795 (`.rodape ul a` com 44x44 no mínimo). Na lista do inspetor, os únicos alvos abaixo de 44 px agora são os 3 rádios, que estão dentro de rótulos de 44 px de altura. |
| T9, celular sem navegação sem JS | menor | **Resolvido** | index.html:98 (link "Menu" para `#rodape-nav`); styles.css:238-241 (aparece só com `.no-js`, 44x44) e :279 (oculto a partir de 1024 px). |

## Tabela de achados

Nenhum achado técnico neste ciclo.

Observação, sem severidade: os `@font-face` "Vertice Acentos" (styles.css:9-26) ligam o arquivo de peso 400 ao `font-weight: 500` e o de 500 ao `600`. Pelo CHANGELOG, isso é de propósito, para igualar a espessura da Cormorant. O inspetor confirmou que não há diferença visível de peso (`desktop-zoom-titulo-acento.png`). A licença OFL está em `assets/fontes/OFL-EB-Garamond.txt`.

## Métricas

Medições do inspetor-visual, ciclo 2 (não refeitas aqui):

| Métrica | Celular 360 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Rolagem horizontal | não há | não há | não há |
| Imagens quebradas (de 25) | 0 | 0 | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Requisições ≥ 400 | 0 | 0 | 0 |

- Lighthouse celular: 94 / 100 / 100 / 100 (LCP 1,8 s, FCP 1,8 s, CLS 0, TBT 250 ms). Desktop: 100 / 100 / 100 / 100 (TBT 0 ms).
- Tamanho do código: HTML 67 KB, CSS 43 KB, JS 16 KB, sem compressão. Fontes de recorte: 3 WOFF de cerca de 2,2 KB cada, servidas do próprio site e baixadas só quando aparece um dos caracteres do `unicode-range`.
- Requisições externas: continuam 2 origens (Google Fonts), com `preconnect` e `display=swap`.

**Investigação do TBT (teste A/B próprio).** Copiei `site/` para uma pasta temporária em duas versões. A é o site atual. B é igual, mas sem os 3 `@font-face` "Vertice Acentos" e sem a família em `--ff-titulo`. Rodei o Lighthouse 13 (o mesmo do inspetor, via cache do npx) no perfil celular, Edge sem janela, servidor local, 7 vezes cada, alternando A e B:

| Versão | TBT por rodada (ms) | Mediana | Nota de desempenho |
|---|---|---|---|
| A (com recortes) | 366, 42, 194, 162, 12, 319, 38 | 162 | 89 a 98 |
| B (sem recortes) | 79, 115, 1572, 82, 234, 436, 65 | 115 | 72 a 98 |

A variação dentro de cada versão (de 12 a 366 ms em A, de 65 a 1572 ms em B) é muito maior que a diferença entre as medianas. O TBT simulado do Lighthouse multiplica a carga real da CPU da máquina, e essa carga muda de uma rodada para outra. Não há sinal de que os recortes, ou qualquer mudança do ciclo 1, causem o aumento. O inspetor também viu uma distribuição de trabalho parecida nos dois ciclos (styleLayout de 2356 ms contra 2047 ms). **Não recomendo mudança.** Se quiser uma medição mais estável, use a mediana de 5 rodadas ou meça na URL publicada.

**Contraste:** os tokens de cor não mudaram desde o ciclo 1 (styles.css `:root`), então os valores calculados continuam válidos. Texto 16,67:1, texto-suave 7,62:1, acento 8,62:1, botão primário 8,62:1, faixa osso 15,52 / 5,83 / 5,08:1 e bordas de componente ≥ 3,6:1, todos dentro do WCAG AA. O degradê do cabeçalho ficou mais escuro (V6), o que só melhora o contraste do logo e dos links.

## Itens verificados sem problema

- Tags balanceadas (verificado por parser: 0 erros), `lang="pt-BR"`, `viewport`, `<title>` e `<meta description>` únicos, um único `<h1>` e hierarquia sem saltos.
- Caminhos novos existem e ficam dentro de `site/`: `assets/fontes/*.woff`, `assets/logo-vertice.png` e as fotos trocadas da faixa e da Visite (0 imagens quebradas). Nenhum `../`. As `url()` do CSS são só as das fontes locais, que são relativas.
- O `preload` do hero acompanha a nova regra do recorte retrato (index.html:26 e 28). Os `media` das duas variantes não se sobrepõem, então só uma imagem é pré-carregada.
- Sem JS, o painel do menu continua oculto abaixo de 1024 px, e o link "Menu" substitui o hambúrguer. A partir de 1024 px, o painel aparece em linha (styles.css:280).
- Continuam válidos os itens do ciclo 1: carrossel APG (abas, `inert`, `aria-live`, pausa, `prefers-reduced-motion`), formulário com rótulos e erros acessíveis, foco visível em 64 paradas, `scroll-padding`, Open Graph completo e JSON-LD `ShoeStore`.
