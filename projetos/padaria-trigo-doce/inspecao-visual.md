# Inspeção visual: Padaria Trigo Doce

## Ambiente
- **Navegador:** Microsoft Edge 157.0.4341.60 (headless, via `playwright-core`, `channel: 'msedge'`)
- **Método:** A (Playwright com o navegador instalado) + Lighthouse (via `npx`, Edge como `CHROME_PATH`)
- **Página:** `site/index.html` aberta por `file:///` (capturas e medições); servida por `http-server` local na porta 8080 só para o Lighthouse (servidor encerrado no fim)
- **Data:** 2026-11-18
- **Iteração:** ciclo 1 (primeira inspeção; não há rodada anterior)
- **Observação:** protótipo sem `conteudo.md` e sem `dados-negocio.md`; os textos estão no `index.html` e os dados fictícios estão no `briefing.md`.

## Resumo
**OK, com ressalvas.** Não encontrei nenhum problema bloqueante. Não há rolagem horizontal, imagem quebrada, erro de console nem requisição com falha. As fontes carregam, o menu do celular, os chips de filtro e a barra fixa de WhatsApp funcionam, e não aparece placeholder no texto. Registrei 2 achados importantes (dobra no tablet e LCP no celular) e 4 menores.

## Tabela de achados

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V1 | tablet (768) | Hero | A foto 4:5 ocupa a largura toda (cerca de 704x880 px). Com isso, o H1, o subtítulo e os botões do hero ficam todos abaixo da primeira dobra. Só o eyebrow aparece, na borda inferior (y≈1018 de 1024). Pelo design, o hero só passa para 2 colunas a partir de 1024px, então o layout segue a especificação, mas o resultado é uma primeira tela sem nenhum texto. | `capturas/tablet-dobra.png` | importante |
| V2 | celular (Lighthouse) | Desempenho | O LCP fica em 4,0 s. O elemento do LCP é a `img.hero__foto` (`hero-paes-800.jpg`, 122 KB), com 794 ms de "element render delay". O CSS do Google Fonts e o `styles.css` bloqueiam a renderização (economia estimada de 660 ms). O Lighthouse estima 162 KiB de economia nas imagens (hero-800: 41 KB; cada card de produto: 19 a 28 KB). | `lh.json` (scratchpad), nota 86 em Desempenho | importante |
| V3 | desktop (1440) | Hero | O ramo de trigo decorativo (`trigo-ramo.svg`) passa por cima do fim do H1 ("dia.") e da primeira linha do subtítulo ("Bairro Jardim."). O traço é claro e o texto continua legível, mas há sobreposição de decoração com texto. | `capturas/desktop-dobra.png` | menor |
| V4 | celular (360) | Hero | O botão "Encomendar pelo WhatsApp" do hero fica abaixo da primeira dobra: a foto ocupa y 97 a 497 e o subtítulo termina perto de y 800. O botão "Encomendar" do cabeçalho continua visível. A barra fixa só aparece depois que o hero sai da tela, como o design pede. | `capturas/celular-dobra.png` | menor |
| V5 | todas | Rodapé e Horários | Há alvos de toque com menos de 44 px de altura. No rodapé, os links de navegação (Produtos 61x32, Encomendas 86x32, Sobre 40x32, Depoimentos 90x32, Horários 57x32) e "WhatsApp (00) 90000-0000" (196x32). No card de Contato, os links WhatsApp (136x27) e Instagram (150x27). Todos passam o mínimo de 24 px (WCAG 2.5.8), mas ficam abaixo dos 44 px usados como referência nesta inspeção. | medição automática (celular, tablet e desktop) | menor |
| V6 | desktop (1440) | Cabeçalho | O link "Sobre" do menu mede 43x44 px, 1 px abaixo de 44 na largura. | medição automática (desktop) | menor |

Itens conferidos sem problema:
- **Menu do celular:** abre e fecha. O `aria-expanded` muda de false para true, o rótulo muda de "Abrir menu" para "Fechar menu" e a tecla Esc fecha o menu. Evidência: `celular-menu-fechado.png` e `celular-menu-aberto.png`.
- **Chips de filtro:** quebram em 2 linhas no celular, sem corte. O clique em "Bolos" deixa 2 cards visíveis (os dois de bolos), marca `aria-pressed="true"` só nesse chip e anuncia "2 produtos em Bolos" no `aria-live`. Evidência: `celular-chips.png` e `celular-chips-bolos.png`.
- **Barra fixa de WhatsApp:** fica oculta no hero (classe `barra-mobile--oculta`) e aparece no meio da página (top=727, altura 73). No fim da página ela não cobre o conteúdo do rodapé, que tem padding inferior extra. Fica oculta (`display:none`) no tablet e no desktop. Evidência: `celular-dobra.png`, `celular-barra-meio.png` e `celular-fim.png`.
- **Foco por teclado:** a ordem do Tab segue a página: link "Pular para o conteúdo", logo, 5 links do menu, "Encomendar", CTAs do hero e chips. O foco é visível: contorno sólido de 3 px em #3B2A1E. Evidência: `desktop-foco.png`.
- **Fotos:** nenhuma imagem distorcida (as que não têm proporção natural usam `object-fit` diferente de `fill`). Os rostos da equipe e dos avatares aparecem inteiros nos círculos. Evidência: `desktop-inteira.jpg`.
- **Comparação com o design.md:** as cores, o hero dividido no desktop com o texto fora da foto, o selo mel sobre a foto, os divisores em onda, a foto secundária no Sobre (≥768px), o CTA final em fundo café com botão mel e o rodapé em 4 colunas batem com o especificado. Não aparece verde do WhatsApp em lugar nenhum.

## Métricas

| Métrica | Celular 360x800 | Tablet 768x1024 | Desktop 1440x900 |
|---|---|---|---|
| Rolagem horizontal | não (scrollWidth 360) | não (768) | não (1440) |
| Elementos além da largura | só os ramos de trigo decorativos do CTA final, cortados pelo `overflow` da seção, sem efeito na página | idem | idem |
| Imagens quebradas | 0 | 0 | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Requisições com falha (≥400) | 0 | 0 | 0 |
| Alvos < 44 px (fora de links inline em parágrafo) | 8 (ver V5) | 8 | 9 (V5 + V6) |
| Placeholders visíveis (`[PLACEHOLDER`, `[PENDENTE`, Lorem) | nenhum | nenhum | nenhum |
| Altura da página | 15 354 px | 13 307 px | 8 295 px |

- **Fontes:** Fraunces (600 a 700) e Nunito Sans (400, 600 e 700) com status `loaded`. O H1 usa Fraunces com `font-variation-settings: "SOFT" 100, "WONK" 0`, nos tamanhos 41,8 px (celular), 60,2 px (tablet) e 72 px (desktop), de acordo com o `--fs-display`.
- **Links inline de créditos** no rodapé (20 px de altura, dentro de parágrafo): fora da exigência de tamanho (exceção de texto inline). Registro apenas para constar.
- **Lighthouse (celular, servidor local):**

| Categoria | Nota |
|---|---|
| Desempenho | 86 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |

FCP 1,8 s; LCP 4,0 s; TBT 0 ms; CLS 0; Speed Index 2,0 s. Os avisos de cache (445 KiB) e de latência do documento vêm do servidor de teste local, que roda sem cache e sem compressão. Eles não indicam problema do site.

## Capturas
Pasta: `projetos/padaria-trigo-doce/capturas/`.
- `celular-dobra.png`, `celular-inteira.jpg`, `celular-menu-fechado.png`, `celular-menu-aberto.png`, `celular-chips.png`, `celular-chips-bolos.png`, `celular-barra-meio.png`, `celular-fim.png`
- `tablet-dobra.png`, `tablet-inteira.jpg`
- `desktop-dobra.png`, `desktop-inteira.jpg`, `desktop-foco.png`

As capturas de página inteira saíram em JPEG (qualidade 80) para ficar abaixo de 1,5 MB.

## Comparação com a rodada anterior
Não se aplica: esta é a primeira inspeção.


---

# Ciclo 2

## Ambiente
- **Navegador:** Microsoft Edge 157.0.4341.60 (headless, `playwright-core`, `channel: 'msedge'`)
- **Método:** A, mais Lighthouse 13.6.0 (3 rodadas no celular, `http-server` local na porta 8080, encerrado no fim)
- **Página:** `site/index.html` por `file:///` (capturas e medições)
- **Data:** 2026-11-18
- **Iteração:** ciclo 2, depois das correções do `CHANGELOG.md` (seção "Ciclo 2")

## Resumo
**OK, com ressalvas.** Todos os itens do ciclo 1 foram resolvidos, menos o V5, que ficou parcial (1 link a 40 px de largura). Não encontrei nenhum problema bloqueante. Não há rolagem horizontal, imagem quebrada, erro de console nem requisição com falha. Há 1 achado novo importante (custo de estilo e layout, com TBT e LCP instáveis no Lighthouse) e 2 menores.

## Status dos itens do ciclo 1

| ID | Item | Status | Evidência |
|---|---|---|---|
| T1 | O selo do hero gira uma única vez e para | **resolvido** | Logo depois do `load`, a única animação ativa é `girar` em `.hero__selo` (`iterations: 1`, `duration: 4000`). Aos 5,3 s, `document.getAnimations()` não tem nada em `running` nas 3 larguras, e o `transform` do selo é `none`. Com `prefers-reduced-motion: reduce`, não roda nenhuma animação. |
| V1/T3 | 768x1024: H1 e CTA principal visíveis sem rolar | **resolvido** | O H1 ocupa y 139 a 329, o CTA "Encomendar pelo WhatsApp" y 492 a 541 e o secundário y 553 a 602. Hero em 2 colunas, com a foto em x 416 a 736. Ver `ciclo2-tablet-dobra.png`. |
| V4 | 360x800: H1 e pelo menos um CTA visíveis sem rolar | **resolvido** | Foto 16:10 em y 89 a 289, H1 em y 347 a 479, CTA principal em y 631 a 680 e secundário em y 692 a 741. As provas ("Fermentação natural", "Desde 1998") também aparecem. Ver `ciclo2-celular-dobra.png`. |
| T2/V2 | LCP no celular ≤ 2,5 s | **resolvido (com ressalva)** | 3 rodadas do Lighthouse: LCP de 2,3 s, 2,4 s e 3,9 s, com **mediana de 2,4 s**. O elemento do LCP é a `img.hero__foto`, e a 360 px carrega `hero-paes-faixa-480.webp`. Uma das 3 rodadas passou da meta (ver N1). |
| V3 | O ramo de trigo não sobrepõe o H1 nem o subtítulo no desktop | **resolvido** | A 1440 px, o ramo ocupa x 553 a 698 e y 47 a 265, sem interseção com o eyebrow (y 291), o H1 ou o lead. O ramo fica oculto (`display: none`) a 360 e a 768. Há um efeito novo no topo do ramo (ver N2). |
| V5 | Alvos < 44 px no rodapé e no Contato | **parcial** | Os links do rodapé e do card de Contato agora têm 44 px de altura. Sobra o link "Sobre" do rodapé, com **39 a 40 x 44 px** nas 3 larguras (`min-width: 0px`). Ainda passa os 24 px da WCAG 2.5.8. |
| V6 | "Sobre" do menu a 43x44 | **resolvido** | Agora mede 44x44 (`min-width: 44px`) no desktop. |
| Item 4 | O selo diz "Desde 1998" | **resolvido** | O selo diz "DESDE 1998 · FERMENTAÇÃO NATURAL", com a espiga no centro. Fica legível na captura ampliada (3x) a 360 px. Ver `ciclo2-celular-dobra.png` e `ciclo2-desktop-dobra.png`. |

## Nova seção de Depoimentos (M1)
- **≥ 900 px (1440):** 1 card de destaque à esquerda (x 130, 659x583, fundo `rgb(59,42,30)`, citação em Fraunces 37,6 px creme) e 2 cards brancos empilhados à direita (x 821, 489x276 cada, Nunito Sans 18 px itálico). As alturas fecham: 583 = 276 + 31 + 276. O selo "Exemplo" aparece nos 3 cards e a nota "Depoimentos ilustrativos." fica abaixo. Ver `ciclo2-desktop-depoimentos.png`.
- **768 e 360:** 1 coluna. O destaque continua com fundo café (26,8 px a 768 e 22 px a 360) e os outros 2 vêm logo abaixo, sem corte nem sobreposição. Ver `ciclo2-celular-depoimentos.png` e `ciclo2-tablet-inteira.jpg`.
- Na captura de elemento a 360 px (`ciclo2-celular-depoimentos.png`), o cabeçalho fixo e a barra de WhatsApp aparecem por cima dos cards. Isso vem do modo de captura de um elemento mais alto que a janela, não do layout: na captura de página inteira, os cards aparecem limpos.

## Novos achados (ciclo 2)

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| N1 | celular (Lighthouse) | Desempenho | O trabalho na thread principal subiu em relação ao ciclo 1. **TBT de 160, 450 e 370 ms** (era 0 ms), com nota de Desempenho de 97, 87 e 79 (mediana 87). "Style & Layout" toma de 1 070 a 1 183 ms e há uma tarefa longa de cerca de 300 a 320 ms atribuída ao documento, em torno de 0,8 a 1,1 s. O "element render delay" do LCP vai de 311 a 486 ms, e numa das 3 rodadas o LCP foi de 3,9 s. TTFB, atraso e carga da imagem ficam abaixo de 90 ms cada, então o gargalo é a renderização, não a rede. | `lh1.json`, `lh2.json` e `lh3.json` (scratchpad `insp-c2`), auditorias `mainthread-work-breakdown`, `long-tasks` e `lcp-breakdown-insight` | importante |
| N2 | desktop (1440) | Hero | O topo do ramo de trigo (y 47) fica atrás do cabeçalho sticky (y 0 a 73), então a ponta da espiga aparece cortada reto na borda inferior do cabeçalho. | `ciclo2-desktop-ramo.png`, medição (`.cabecalho` bottom 73, `.hero__ramo` top 47) | menor |
| N3 | todas | Rodapé | O link "Sobre" do rodapé mede 39 a 40 x 44 px (resto do V5). | medição automática | menor |

## Regressões conferidas (sem problema)
- **Rolagem horizontal:** não há. `scrollWidth` é 360, 768 e 1440. Só os ramos decorativos do CTA final passam da largura, cortados pelo `overflow` da seção, como no ciclo 1.
- **Imagens quebradas:** 0 nas 3 larguras. A 360 px, `ambiente-loja.jpg` fica sem carregar porque está em `display: none` com `loading="lazy"`, como esperado.
- **Console e rede:** 0 erros ou avisos e 0 requisições com falha nas 3 larguras.
- **Fontes:** Fraunces (600 a 700) e Nunito Sans (400, 600 e 700) com status `loaded`, mesmo com o CSS do Google Fonts agora carregado sem bloquear a renderização.
- **Revelar ao rolar:** depois de rolar a página, nenhum `.revelar` fica com opacidade menor que 1.
- **Menu do celular:** o `aria-expanded` vai de false a true, o rótulo muda para "Fechar menu" e Esc fecha o menu. Ver `ciclo2-celular-menu-fechado.png` e `ciclo2-celular-menu-aberto.png`.
- **Chips:** "Bolos" deixa 2 cards visíveis, só esse chip fica com `aria-pressed="true"` e o `aria-live` anuncia "2 produtos em Bolos". Ver `ciclo2-celular-chips-bolos.png`.
- **Barra fixa:** no topo, tem as classes `barra-mobile--pronta barra-mobile--oculta` e fica `visibility: hidden`, fora da tela (top 807). No meio da página aparece (top 727, altura 73). No fim não cobre o rodapé. Fica em `display: none` a 768 e a 1440. Ver `ciclo2-celular-barra-meio.png` e `ciclo2-celular-fim.png`.
- **Foco:** ordem do Tab: "Pular para o conteúdo", logo, 5 links do menu, "Encomendar", 2 CTAs do hero e 5 chips. Todos com contorno sólido de 3 px em `rgb(59,42,30)`. O link "Pular" agora usa o contorno café. Ver `ciclo2-desktop-foco.png` (foco em "Encomendas") e `ciclo2-desktop-pular.png`.
- **Placeholders:** nenhum `[PLACEHOLDER`, `[PENDENTE` ou "Lorem".

## Métricas (ciclo 2)

| Métrica | Celular 360x800 | Tablet 768x1024 | Desktop 1440x900 |
|---|---|---|---|
| Rolagem horizontal | não (360) | não (768) | não (1440) |
| Imagens quebradas | 0 | 0 | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Requisições com falha | 0 | 0 | 0 |
| Alvos < 44 px | 1 ("Sobre" do rodapé, 40x44) | 1 | 1 |
| Animações ativas aos 5,3 s | 0 | 0 | 0 |
| Altura da página | 15 153 px | 12 693 px | 8 594 px |

**Lighthouse (celular, 3 rodadas):**

| Rodada | Desempenho | Acessibilidade | Boas práticas | SEO | FCP | LCP | TBT | CLS | SI |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 97 | 100 | 100 | 100 | 1,1 s | 2,3 s | 160 ms | 0 | 1,1 s |
| 2 | 87 | 100 | 100 | 100 | 1,1 s | 2,4 s | 450 ms | 0 | 1,3 s |
| 3 | 79 | 100 | 100 | 100 | 1,1 s | 3,9 s | 370 ms | 0 | 1,5 s |
| **Mediana** | **87** | 100 | 100 | 100 | 1,1 s | **2,4 s** | 370 ms | 0 | 1,3 s |

## Capturas do ciclo 2
Pasta: `projetos/padaria-trigo-doce/capturas/` (as capturas do ciclo 1, sem prefixo, ficaram para comparação).
- `ciclo2-celular-dobra.png`, `ciclo2-celular-inteira.jpg`, `ciclo2-celular-menu-fechado.png`, `ciclo2-celular-menu-aberto.png`, `ciclo2-celular-chips-bolos.png`, `ciclo2-celular-barra-meio.png`, `ciclo2-celular-fim.png`, `ciclo2-celular-depoimentos.png`
- `ciclo2-tablet-dobra.png`, `ciclo2-tablet-inteira.jpg`, `ciclo2-tablet-depoimentos.png`
- `ciclo2-desktop-dobra.png`, `ciclo2-desktop-inteira.jpg`, `ciclo2-desktop-foco.png`, `ciclo2-desktop-pular.png`, `ciclo2-desktop-depoimentos.png`, `ciclo2-desktop-ramo.png`

As capturas de dobra foram feitas durante a volta do selo, por isso ele aparece em ângulos diferentes.
