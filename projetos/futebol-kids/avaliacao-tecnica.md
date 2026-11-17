# Avaliação técnica: Futebol Kids (ciclo 2)

- **Data:** 2026-11-17
- **Escopo do ciclo:** vídeo de fundo no hero desktop (pedido do usuário), contra `design.md` §3.3, `site/CHANGELOG.md` ("Iteração 2") e `inspecao-visual.md` (ciclo 2).
- **Arquivos avaliados:** `site/index.html` (936 linhas, 65,3 KB), `site/styles.css` (1063 linhas, 49,0 KB), `site/script.js` (395 linhas, 15,7 KB), `site/assets/videos/hero.mp4` (3,26 MB) e `hero-poster.jpg` (1600x900, 158 KB).
- **Evidências usadas:** `inspecao-visual.md` e `capturas/` do ciclo 2 (Edge 157 e Firefox 159 headless, Playwright e Lighthouse). Também os JSON brutos do Lighthouse que o inspetor gravou na pasta temporária (`lh-mobile.json`, `lh-mobile2.json`, `lh-mobile3.json`), o `git diff` contra o ciclo 1 e a leitura do código, com scripts locais para checar balanceamento de tags, IDs e caminhos.

## Veredito

**APROVADO COM RESSALVAS**

Nenhum bloqueante. O vídeo atende a §3.3 e às regras de acessibilidade:
- **WCAG 2.2.2:** há botão de pausar que funciona com teclado, guarda a preferência e mantém a pausa feita pelo usuário.
- **Movimento reduzido:** o vídeo não é criado e, se a preferência mudar durante a visita, ele é removido.
- **Celular:** o MP4 não é baixado (0 requisições em 360, 768 e 899 px).
- **Vídeo fora da árvore de acessibilidade:** tem `aria-hidden` e `tabindex="-1"`, sem `controls`.
- **Contraste:** passa no AA em todos os quadros medidos.

Não houve regressão funcional. O achado T8 do ciclo 1 (contraste do H1) foi resolvido. Os achados importantes T1, T2 e T3 continuam do ciclo 1, porque estas seções não mudaram. O T3 foi atualizado com a investigação do LCP no celular.

Contagem: **0 bloqueantes, 3 importantes, 9 menores.**

## Investigação: queda do Lighthouse no celular (91 → 82/87/89, LCP 3,3 → 3,5 s)

Conclusão: **não é preload duplo nem download de vídeo.** A queda da nota vem principalmente da variação do TBT. O LCP é limitado pela banda simulada, e a parte que cabe ao ciclo 2 é pequena (cerca de 50 ms de bytes a mais).

1. **Não há download duplicado.** No `network-requests` das 3 rodadas, `hero-mobile.webp` aparece **uma única vez** (123 KB, prioridade High). `hero-poster.jpg` e `hero.mp4` **não aparecem**. O preload com `media="(min-width: 900px)"` é ignorado no celular, como deve ser. O Firefox registra esse descarte como aviso ("Preload … ignored due to non-matching media").
2. **A descoberta do LCP melhorou.** `lcp-discovery-insight` agora **passa** (fetchpriority aplicado, recurso no HTML inicial e sem lazy). No ciclo 1, essa auditoria falhava.
3. **A nota caiu sobretudo por causa do TBT.** O TBT variou entre 330, 170 e 0 ms nas 3 rodadas, com `benchmarkIndex` entre 1058 e 1302, o que indica máquina sob carga. O LCP ficou estável (3,55 / 3,55 / 3,53 s). A rodada com TBT 0 deu 89. A diferença para o 91 do ciclo 1 é só o LCP de +0,2 s.
4. **De onde vem o LCP de 3,5 s.** O Lighthouse simula a rede (`throttlingMethod: simulate`, 1,47 Mbps ≈ 184 KB/s, latência de 562 ms por requisição) e mostra `render-blocking` com economia **0 ms no LCP**. Ou seja, o LCP depende de bytes e de idas e voltas, não da CPU. Antes do LCP passam cerca de 330 KB sem compressão: HTML 64 KB, `styles.css` 48 KB, `script.js` 16 KB, `hero-mobile.webp` 123 KB, 2 woff2 com 70 KB e logo e confete com 10 KB. Somam-se 3 idas e voltas em sequência (HTML → CSS das Google Fonts → woff2).
5. **O que o ciclo 2 acrescentou ao caminho crítico:** `script.js` passou de 9,2 para 15,7 KB (+6,5 KB) e `styles.css` cresceu 2 KB. São cerca de 8,5 KB, o que dá ~50 ms na banda simulada. O restante da diferença (~150 ms) se explica pela troca de servidor de teste (`http-server` na porta 8083 no ciclo 1, servidor Node na 8090 agora) e pela rodada única do ciclo 1. A comparação direta não é conclusiva.
6. **Como baixar de 2,5 s:** veja T3 (compressão no servidor, foto do hero no tamanho certo e Google Fonts sem bloquear a renderização).

## Tabela de achados

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T1 | Acessibilidade / layout | `styles.css:865`, `styles.css:893` | **Persiste (ciclo 1).** O cartão de contato fica sobre o mapa: margem `-32px` no celular e `grid-column: 8 / span 5` no desktop, que cruza com o mapa. O cartão cobre a atribuição e controles do Google Maps. Evidência: V1, `capturas/celular-mapa.png`, `capturas/desktop-mapa.png`. | importante | No desktop, mapa em `1 / span 7` e cartão em `8 / span 5`. No celular, trocar a margem negativa por `margin-top: 16px`. |
| T2 | SEO | `index.html:15`, `index.html:43` | **Persiste.** `og:image` e o `image` do JSON-LD usam caminho relativo (`assets/fotos/og-image.jpg`). Sem URL absoluta, as redes sociais não mostram a prévia. | importante | Usar a URL absoluta quando houver domínio, e registrar isso como pendência de publicação. |
| T3 | Desempenho | `index.html:25`, `styles.css:997-1001`, servidor | **Persiste, com dados atualizados.** No celular, o LCP é de **3,5 s** nas 3 rodadas, acima da meta de 2,5 s. O elemento LCP é a `<img>` do hero (`hero-mobile.webp`). Causas medidas: (a) CSS das Google Fonts bloqueando a renderização, com 1,03 s estimados de desperdício no FCP; (b) cerca de 330 KB sem compressão no caminho crítico (ver investigação); (c) `hero-mobile.webp` em 1080x1350 (123 KB) para uma tela de 412 px (`image-delivery` 39 KiB); (d) título e lead do hero começam com `opacity: 0` (`@keyframes entrada`). O ciclo 2 **não** causou a queda, porque o celular não baixa o vídeo nem o poster. | importante | (1) Na publicação, servir HTML/CSS/JS com gzip ou brotli. Isso tira cerca de 100 KB do caminho crítico, o maior ganho. (2) Criar `hero-mobile-720.webp` (~50–60 KB) e usar `srcset` com `sizes="100vw"` no `<source>` e no preload (`imagesrcset`). (3) Auto-hospedar as fontes com `preload` ou carregar o CSS do Google Fonts sem bloquear. (4) Animar só o `transform` no H1. |
| T4 | Desempenho | `index.html:25` | **Persiste.** A URL das fontes pede Baloo 2 600, peso que a página não usa. | menor | `family=Baloo+2:wght@700;800`. |
| T5 | Responsividade | `styles.css:877` | **Persiste.** Com `overflow-wrap: anywhere`, o e-mail e os telefones quebram no meio a 360 px (V8). | menor | `overflow-wrap: break-word`, mais `white-space: nowrap` nos números e `<wbr>` antes do `@`. |
| T6 | SEO | `index.html:3-32` | **Persiste.** Faltam `<link rel="canonical">` e `og:url`. | menor | Incluir os dois com a URL final. |
| T7 | Desempenho | `index.html:418-419` | **Persiste.** A partir de 900 px, a foto do bento é `campo-sintetico.webp` em 1200x1200, para uma área de ~600 px. No desktop, `image-delivery` soma 274 KiB. | menor | Versão de ~900 px ou `srcset` com `sizes`. |
| T9 | Legibilidade | `styles.css:385`, `styles.css:416` | **Persiste.** O confete do placar (`.placar-confete`) passa sobre o botão "Agendar aula grátis" no desktop (V4: `capturas/desktop-dobra.png`, `capturas/desktop900-dobra.png`). Os confetes do CTA final também continuam (V3, não medido de novo). | menor | Afastar `.placar-confete` do bloco de CTAs (`top` e `left`) ou reduzir a área dele. |
| T10 | Publicação | `index.html:34-58` e cartão e rodapé | **Persiste.** Os dados de contato são fictícios (autorizados para a demonstração). | menor (pendência de publicação) | Trocar pelos dados reais antes de publicar. |
| T11 | Acessibilidade (foco) | `styles.css:330`, `script.js:290-293` | **Novo.** Se o botão de pausar estiver focado e a janela ficar abaixo de 900 px (redimensionando ou com zoom acima de ~160% numa tela de 1440), o CSS aplica `display: none` ao botão e o foco cai num elemento oculto. Isso não acontece quando o botão é removido, porque `remove()` devolve o foco ao CTA (`script.js:182-185`). O vídeo pausa nesse caso, então a WCAG 2.2.2 não é afetada. | menor | No ouvinte de `mqLargura`, quando `!mqLargura.matches && document.activeElement === botao`, mover o foco para o 1º CTA, como já faz `remove()`. |
| T12 | Desempenho | `index.html:27`, `index.html:148` | **Novo.** O poster do desktop (o LCP) é JPG de 158 KB, sem WebP ou AVIF. O LCP no desktop está bom (1,1 s, nota 98), por isso a severidade é menor. | menor | Gerar `hero-poster.webp` (~90 KB) e usar `<source type="image/webp">` para ≥ 900 px, com preload `type="image/webp"`. O atributo `poster` do vídeo pode continuar em JPG. |
| T13 | Publicação / mídia | `site/assets/videos/hero.mp4` | **Novo.** O MP4 é fragmentado e sem `faststart` (`CHANGELOG.md`, Pendências). Ele toca no Edge e no Firefox, mas o Safari não foi testado (indisponível no Windows). O vídeo é ilustrativo (Pexels) e está marcado "substituir antes de publicar". | menor (pendência de publicação) | Recodificar com `-movflags +faststart` (e de preferência ≤ 2 MB) e testar no Safari/iOS antes de publicar. Se não tocar, o poster já é o fallback. |

O T8 do ciclo 1 (contraste do H1 de 4,47:1) foi **resolvido**: o pior caso agora fica entre 6,07 e 7,07:1 (poster e quadros de 0, 8 e 15 s).

Os achados V2 (buracos na grade bento), V6 e V7 da inspeção visual são de composição e ficam para o avaliador de resultado.

## Verificações do ciclo 2 (vídeo de fundo)

| Requisito (`design.md` §3.3 / WCAG) | Evidência | Resultado |
|---|---|---|
| Imagem base no HTML como LCP e fallback: `<picture>` com fonte mobile < 900 px, poster ≥ 900 px, `fetchpriority="high"`, sem lazy, `alt=""`, `width`/`height` | `index.html:143-149`. LCP no desktop = poster (584 ms no navegador, 1,1 s no Lighthouse). LCP no celular = `hero-mobile.webp` | passa |
| Um preload por faixa, sem preload do MP4 | `index.html:27-28`. O celular não baixa o poster (rede do Lighthouse) | passa |
| Vídeo criado pelo JS depois do `load`/`requestIdleCallback` | `script.js:267-276`. 1ª requisição a 1.063 ms, depois do `load` (983 ms) | passa |
| Condições de criação: ≥ 900 px, sem movimento reduzido, sem `prefers-reduced-data`, sem `saveData`, sem 2g | `script.js:151-159`. Inspetor: 0 requisições ao MP4 em 360, 768 e 899 px e com movimento reduzido | passa |
| Atributos: `muted autoplay loop playsinline disablepictureinpicture`, `poster`, `aria-hidden="true"`, `tabindex="-1"`, sem `controls` | `script.js:210-233`. Atributos confirmados pelo inspetor no DOM | passa |
| Falha de reprodução: remove o vídeo e o botão e mantém o poster | `script.js:196-199`, `232`. Com o MP4 bloqueado, não sobra botão | passa |
| **WCAG 2.2.2 (pausar):** botão nativo, 48x48, clique, Enter e Espaço, `aria-label` que alterna, `aria-controls`, sem `aria-pressed`, preferência guardada, pausa do usuário com prioridade | `script.js:236-255`, `styles.css:353-371`. Tabela 3 do inspetor (todas as ações conferidas). Recarregar com "pausado" cria o vídeo parado | passa |
| Ordem de foco: CTA → CTA → botão → placar. Foco visível | `script.js:255`. Inspetor: anel amarelo de 3px (`desktop-foco-botao-video.png`) | passa |
| Contraste do botão: borda e ícone ≥ 3:1 (meta de 4,5:1). Hover branco/`--verde-900` | Medido: 10,26–13,61:1. Hover: 9,1:1 (calculado no design) | passa |
| Botão fora do placar em 900 e 1440 px | Folga de 78 px e 110 px (inspetor) | passa |
| **Movimento reduzido:** o vídeo não é criado e é removido se a preferência mudar durante a visita. Fade e `scale` só sem redução | `script.js:284-287`, `styles.css:1018-1019` (dentro de `no-preference`) e `desktop-movimento-reduzido.png` | passa |
| Economia: pausa fora da tela e com a aba oculta, e retoma só se o usuário não pausou | `script.js:160-162`, `257-263`, `294`. Inspetor: pausa em y=2500 e retoma ao voltar | passa |
| Redimensionamento ao vivo: abaixo de 900 px esconde e pausa, e ao voltar retoma | `styles.css:296-301`, `344`, `script.js:290-293`. Sem rolagem horizontal em 800 px | passa (ver T11 sobre o foco) |
| **Contraste do texto sobre o vídeo** (texto oculto, poster e quadros de 0, 8 e 15 s) | H1 ≥ 6,07:1 (exigido 3:1). Lead ≥ 10,07:1 (exigido 4,5:1). "Ver turmas" ≥ 12,57:1. Selo 9,6:1 sobre fundo próprio | passa |
| Overlay desktop com 2 camadas e lead branco 100% | `styles.css:37-39`, `342`, `325-327` | passa |
| Compatibilidade: MP4 fragmentado | Edge e Firefox 159 tocam e repetem. Safari não testado (T13) | passa (com ressalva) |
| Crédito do vídeo no rodapé | `index.html:925-926` | passa |

## Métricas

### Medidas pelo inspetor visual (ciclo 2)
| Métrica | Celular 360 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Rolagem horizontal | não | não | não (899 e 900 também não) |
| Imagens e mídia quebradas | 0 | 0 | 0 (vídeo com `readyState` 4) |
| Erros de console | 0 | 0 | 0 |
| Requisições com status ≥ 400 | 0 | 0 | 0 (os `ERR_ABORTED` do MP4 são cancelamentos de `Range` do player) |
| Requisições ao `hero.mp4` | 0 | 0 | 7 no Edge, 1 no Firefox |
| Alvos de toque < 44 px | 0 | 0 | 0 |

**Lighthouse** (Edge headless, servidor local sem compressão):

| Perfil | Desempenho | Acessibilidade | Boas práticas | SEO | FCP | LCP | TBT | CLS | Peso |
|---|---|---|---|---|---|---|---|---|---|
| Celular (3 rodadas) | 82 / 87 / 89 | 100 | 100 | 100 | 1,9 s | 3,55 / 3,55 / 3,53 s | 326 / 174 / 0 ms | 0 | 439 KiB |
| Desktop | 98 | 100 | 100 | 100 | 0,7 s | 1,1 s | 0 ms | 0 | 3.853 KiB (com o MP4, carregado depois do `load`) |
| Celular, ciclo 1 (referência) | 91 | 100 | 100 | 100 | 1,9 s | 3,3 s | 0 ms | 0 | — |

**Detalhamento do LCP no celular** (fases observadas, rodada 2): TTFB 12 ms, atraso de carga 42 ms, duração da carga 33 ms e atraso de renderização 868 ms. A thread principal levou 2,3–3,2 s, a maior parte em `styleLayout` (1,2–1,6 s, atribuído ao `index.html`). O `script.js` levou ~54 ms.

### Medidas nesta avaliação
- **Peso dos arquivos-fonte:** 130,1 KB (HTML 65,3, CSS 49,0, JS 15,7), contra 121,3 KB no ciclo 1 (+8,8 KB, quase tudo do código do vídeo).
- **Balanceamento de tags:** nenhuma tag aberta nem fechada fora de ordem (`html.parser`), nenhum ID duplicado, um único `<h1>`. Nenhum `!important` no CSS.
- **Caminhos:** todos os `src`, `srcset` e `href` locais existem, incluindo `assets/videos/hero-poster.jpg` e `hero.mp4`. O `hero-poster.jpg` tem 1600x900 reais (lido no SOF), igual ao `width`/`height` do HTML.

## Itens verificados sem problema
- Estrutura: `lang="pt-BR"`, `viewport`, `<title>` e `<meta description>` únicos, `og:title`/`og:description`/`og:image:*` e `twitter:card`, JSON-LD bem formado. A hierarquia de títulos não mudou.
- O `<source>` mobile tem `width`/`height` próprios (1080x1350), e por isso o CLS fica em 0 nas duas faixas.
- Camadas do hero: mídia (0), overlay `::after` (1, `pointer-events: none`), confete (2) e conteúdo (3). O placar e o menu não mudaram (menu mobile conferido pelo inspetor).
- Sem JS, a página fica completa, só com a imagem e sem botão órfão.
- O script principal tem `defer`. O código do vídeo não roda no celular além das checagens de `matchMedia`.
- As fontes usam `display=swap` e `preconnect`. Acessibilidade 100 e SEO 100 no Lighthouse nos dois perfis.
