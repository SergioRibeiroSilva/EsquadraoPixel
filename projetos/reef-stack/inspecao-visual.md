# Inspeção visual: Reef Stack

## Ambiente
- **Navegador:** Microsoft Edge 157.0.4341.60 (headless, via `playwright-core`, `channel: 'msedge'`)
- **Método:** A (Playwright + navegador instalado), site servido por `npx http-server site/ -p 8080` (servidor parado no fim)
- **Data:** 2026-11-16
- **Iteração:** 1 (primeira inspeção; não há rodada anterior)
- **Larguras:** celular 360 x 800, tablet 768 x 1024, desktop 1280 x 800 (pedido do orquestrador)
- **Scripts:** pasta temporária da sessão (fora de `projetos/`)

## Resumo
**PROBLEMAS ENCONTRADOS** (nenhum bloqueante): 1 importante, 4 menores.
Sem rolagem horizontal, sem imagens quebradas, sem erros de console nem requisições com falha. Foco visível, abas, menu e botão de pausa funcionam como o `design.md` pede. O contraste do texto sobre o degradê dos cartões-caminho passa com folga em todas as larguras (pior caso medido: 6,46:1).

## Tabela de achados

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V1 | todas | Parâmetros, aba Marinho | Duas etiquetas "Revisão técnica pendente" aparecem para o visitante, nas linhas pH ("Alcalino e estável") e Nitrato ("Baixo e estável"). É uma marca de pendência visível no site. | `capturas/celular-tabela-parametros-marinho.png`, `capturas/tablet-abas-parametros-marinho.png`; `index.html` linhas 607 e 609 | importante |
| V2 | desktop 1280 x 800 | Hero | O hero mede ~873 px de altura (mais o cabeçalho de 64 px), mais que a janela de 800 px. O título do cartão "Mergulhar no marinho" fica cortado na borda inferior da primeira dobra, e o botão de pausa (bottom = 921 px) fica abaixo da dobra. | `capturas/desktop-dobra.png`; medida `getBoundingClientRect` do `.botao-pausa` | menor |
| V3 | celular 360 | Hero | O botão de pausa fica logo abaixo da primeira dobra (bottom = 827 px numa janela de 800 px). Só aparece depois de rolar um pouco. | `capturas/celular-dobra.png`, `capturas/celular-hero-caminhos.png` | menor |
| V4 | celular 360 | Hero, cartões-caminho | Com o título em 3 linhas ("Começar / na água / doce"), a faixa do degradê ocupa cerca de 60% da altura do cartão. Por isso a foto só aparece no terço superior. O design (§5.4) fala em 55% inferiores. A legibilidade não é afetada. | `capturas/celular-hero-caminhos.png` | menor |
| V5 | tablet 768 e desktop | Global (botão flutuante do WhatsApp) | Com o hero fora da tela, o botão flutuante de 56 px (right 16 px em < 900 px) cobre parte do texto da coluna de conteúdo. Exemplo: ele cobre o fim da linha "Confirme a faixa ideal... com um" na tabela de parâmetros marinhos. No desktop, ele cobre a borda direita do 4º cartão de espécies. | `capturas/tablet-abas-parametros-marinho.png`, `capturas/celular-tabela-parametros-marinho.png` | menor |

Observação sobre as capturas: na primeira passada, as fotos com `loading="lazy"` (espécies, clube, depoimentos, vitrine) saíram em branco nas capturas de página inteira. A causa foi a captura, não o site. Por isso as capturas de página inteira e das abas de espécies foram refeitas com as imagens já carregadas (todas as 20 `img` com `complete` e `naturalWidth > 0`). A foto "Frags de corais moles" carrega normalmente (`capturas/celular-especie-coral.png`).

## Verificações pedidas

### Cartões-caminho do hero: contraste sobre o degradê
Método: a faixa de cada texto foi capturada com o texto transparente, e o contraste da cor do texto foi calculado contra o **pixel mais claro** do fundo real (foto + degradê), pela fórmula WCAG.

| Largura | Cartão | Elemento (tamanho) | Pior caso | Média |
|---|---|---|---|---|
| 360 | Água doce | título branco (17 px, 700) | 9,40:1 | 16,9:1 |
| 360 | Água doce | apoio `#A9C4D3` (13 px) | 7,35:1 | 9,3:1 |
| 360 | Marinho | título branco (17 px, 700) | 11,11:1 | 16,7:1 |
| 360 | Marinho | apoio `#A9C4D3` (13 px) | **6,46:1** | 8,8:1 |
| 768 | Água doce | título / apoio | 11,50 / 7,12 | 16,9 / 9,0 |
| 768 | Marinho | título / apoio | 10,27 / 6,60 | 14,8 / 8,9 |
| 1280 | Água doce | título (24 px) / apoio (14 px) | 11,36 / 7,14 | 16,9 / 9,0 |
| 1280 | Marinho | título / apoio | 10,09 / 6,73 | 14,8 / 9,0 |

Todos passam o AA (4,5:1). O título branco passa dos 7:1 previstos no design. O texto de apoio fica entre 6,5 e 7,4:1. Etiquetas "Água doce" (musgo + branco) e "Marinho" (lagoa + abismo) estão legíveis nas capturas. Capturas: `celular-hero-caminhos.png`, `tablet-hero-caminhos.png`, `desktop-hero-caminhos.png`.

Contraste dos fundos sólidos (varredura de todos os textos visíveis no celular): nenhum par abaixo do AA. O script acusou só "Marinho" branco sobre branco, um falso positivo: o indicador escuro da aba é um pseudo-elemento, e a captura mostra a pílula escura (`celular-abas-especies-marinho.png`).

### Botão de pausa das animações
- Presente no canto inferior direito do hero. No celular, só ícone, 46 x 44 px. Em ≥ 600 px, rótulo "Pausar animação", 174 x 44 px.
- Ao clicar: `aria-pressed="true"`, `aria-label` "Retomar animação de fundo", rótulo "Retomar animação", classe `movimento-pausado` no `<html>`, `animation-play-state: paused` nas bolhas e nas cáusticas, `localStorage.reefstack-movimento = "pausado"`. Ao clicar de novo, volta a `false` / `"ativo"`.
- Com `prefers-reduced-motion: reduce`, o botão fica com `display: none`, as bolhas com `display: none` e as cáusticas com `animation-name: none`.
- Capturas: `celular-pausa-pausado.png`, `desktop-pausa-pausado.png`.

### Abas doce / marinho
- Espécies e Parâmetros: o clique alterna `aria-selected` e mostra só o painel ativo. A seta para a esquerda leva o foco à aba "Água doce" e a seleciona. As abas dos dois grupos ficam sincronizadas: escolher Marinho em Espécies também seleciona Marinho em Parâmetros.
- Abrir `#especies-marinho` na URL ativa a aba Marinho.
- A seleção se distingue por cor, peso e ícone de check.
- Capturas: `{celular,tablet,desktop}-abas-especies-{doce,marinho}.png`, `{celular,tablet,desktop}-abas-parametros-{doce,marinho}.png`.

### Tabelas no celular
- Abaixo de 600 px, as 3 tabelas ficam com `display: block` e `thead` em `position: absolute` (escondido). Cada linha vira um cartão com rótulos "FAIXA DE REFERÊNCIA" / "OBSERVAÇÃO". Em 768 e 1280, voltam a ser tabela com cabeçalho colorido (musgo no doce, oceano no marinho) e zebra.
- Capturas: `celular-tabela-comparativo.png`, `celular-tabela-parametros-doce.png`, `celular-tabela-parametros-marinho.png`, `tablet-tabela-comparativo.png`, `desktop-tabela-comparativo.png`.

### Menu do celular
- Aberto: `aria-expanded="true"`, rótulo "Fechar menu", painel de 360 x 736 a partir de y = 64, `body.menu-aberto`. Esc fecha o menu e devolve o foco ao botão.
- Capturas: `celular-menu-fechado.png`, `celular-menu-aberto.png`.

### Foco visível (teclado, desktop)
- A ordem do Tab é: pular-link, logo, Loja, Doce × Marinho, Primeiros passos, Parâmetros, Clube, Visite, WhatsApp (menu), WhatsApp (hero), Conhecer o clube, cartão água doce, cartão marinho, Pausar animação, Agendar montagem.
- Contorno: 3 px sólido `#2EC4C6` nos links. Nos cartões-caminho, o contorno aparece no cartão inteiro (`:focus-within`, 3 px `#2EC4C6`).
- Capturas: `desktop-foco.png` (foco em "Loja") e `desktop-foco-caminho.png`.

### Sobreposições
Nenhuma sobreposição real de texto nas capturas. A varredura automática só apontou falsos positivos: respostas de `<details>` fechados do FAQ e o CTA do menu escondido.

## Métricas

| Métrica | Celular 360 | Tablet 768 | Desktop 1280 |
|---|---|---|---|
| Rolagem horizontal (scrollWidth / innerWidth) | não (360/360) | não (768/768) | não (1280/1280) |
| Imagens quebradas | 0 de 20 | 0 de 20 | 0 de 20 |
| Imagens distorcidas (proporção natural x caixa, sem object-fit) | 0 | 0 | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Requisições com status ≥ 400 ou falha | 0 | 0 | 0 |
| Alvos < 44 px | 1* | 2* | 2* |
| Fontes carregadas | Inter 400/500/600/700, Sora 600/700 | idem | idem |
| Placeholders (`[PENDENTE`, `[PLACEHOLDER`, Lorem) | 0 (ver V1: etiqueta "Revisão técnica pendente") | 0 | 0 |
| Altura da página | 25.341 px | 18.419 px | 14.170 px |

\* Os únicos casos são o `.caminho-link` (texto do cartão-caminho, ex.: 126 x 41 px no celular) e o pular-link (1 x 1 px enquanto escondido). O link do cartão tem `::after` com `inset` que cobre o cartão inteiro, então a área clicável real é o cartão todo (≥ 150 x 190 px). Não foram reportados como achado.

**Lighthouse 13.6.0** (celular emulado, Edge headless, servidor local sem compressão):

| Desempenho | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|
| 89 | 100 | 100 | 100 |

- LCP 3,5 s, FCP 2,1 s, CLS 0.
- O elemento de LCP é a `section#inicio` (fundo do hero), que não aparece como recurso no HTML inicial.
- Recursos que bloqueiam a renderização: Google Fonts (~1.040 ms estimados) e `styles.css` (~600 ms).
- `image-delivery`: a foto `foto-loja-ambiente-1200.webp` é servida a 338 px de largura (economia estimada de 123 KiB).
- O `bfcache` falha por 2 motivos.
- A latência do documento reflete o servidor local sem gzip, não a hospedagem final.

## Lista de capturas (`capturas/`)
- Página inteira: `celular-inteira.jpg` (+ `celular-inteira-parte1..4.jpg` para leitura), `tablet-inteira.jpg`, `desktop-inteira.jpg`
- Primeira dobra: `celular-dobra.png`, `tablet-dobra.png`, `desktop-dobra.png`
- Hero e cartões-caminho: `celular-hero-caminhos.png`, `tablet-hero-caminhos.png`, `desktop-hero-caminhos.png`
- Foco: `desktop-foco.png`, `desktop-foco-caminho.png`
- Menu: `celular-menu-fechado.png`, `celular-menu-aberto.png`
- Pausa: `celular-pausa-pausado.png`, `desktop-pausa-pausado.png`
- Abas: `{celular,tablet,desktop}-abas-{especies,parametros}-{doce,marinho}.png`
- Tabelas: `{celular,tablet,desktop}-tabela-comparativo.png`, `celular-tabela-parametros-{doce,marinho}.png`
- Extra: `celular-especie-coral.png`

As páginas inteiras foram salvas em JPEG (qualidade 70) para ficar abaixo de 1,5 MB.

## Comparação com a rodada anterior
Não se aplica (primeira inspeção).

---

# Ciclo 2

## Ambiente
- **Navegador:** Microsoft Edge 157.0.4341.60 (headless, `playwright-core`, `channel: 'msedge'`)
- **Método:** A. Site servido por `npx http-server site -p 8080 -s -c-1` (servidor parado no fim) e também aberto por `file://` para o teste do preload.
- **Data:** 2026-11-16
- **Iteração:** 2 (compara com o ciclo 1 acima)
- **Larguras:** celular 360 x 800, tablet 768 x 1024, desktop 1280 x 800 (as mesmas do ciclo 1)
- **Capturas:** prefixo `ciclo2-` em `capturas/`. As capturas do ciclo 1 foram mantidas.

## Resumo
**PROBLEMAS ENCONTRADOS** (nenhum bloqueante): 1 importante, 3 menores.
V1, V2, V3 e V4 foram resolvidos. V5 persiste, mas ficou mais brando. A meta de LCP (< 2,5 s) **não foi atingida**: 3,1 s nas 3 rodadas do Lighthouse, contra 3,5 s no ciclo 1. As fontes locais carregam nas 3 larguras e não geram erro de console por http. Por `file://`, o preload gera erros de CORS no console, mas as fontes aparecem mesmo assim. Sem rolagem horizontal, sem imagens quebradas, sem requisições com falha por http.

## Comparação com o ciclo 1

| ID | Item | Situação | Evidência |
|---|---|---|---|
| V1 | Etiquetas "Revisão técnica pendente" na tabela marinha | **Resolvido.** pH mostra "Alcalino e estável" e Nitrato mostra "Baixo e controlado", sem etiqueta. A busca por "pendente", "revisão técnica", `[PENDENTE`, `[PLACEHOLDER` e "Lorem" no texto visível não encontrou nada nas 3 larguras. A única ocorrência de "lorem" vem de "colorem", um falso positivo. | `ciclo2-celular-abas-parametros-marinho.png`, `ciclo2-tablet-abas-parametros-marinho.png`, `ciclo2-desktop-abas-parametros-marinho.png` |
| V2 | Dobra do hero em 1280 x 800 | **Resolvido.** O hero termina exatamente em 800 px (`heroBottom = 800`). O cartão "Mergulhar no marinho" aparece inteiro na dobra, com título e apoio visíveis. | `ciclo2-desktop-dobra.png` |
| V3 | Botão de pausa na dobra (360 e 1280) | **Resolvido.** O botão está no canto superior direito do hero: cerca de 76–120 px no celular (46 x 44), 76–120 px no tablet e 84–128 px no desktop (174 x 44). Pausar e retomar continuam funcionando: `aria-pressed`, a classe `movimento-pausado`, `animation-play-state: paused` nas bolhas e nas cáusticas, e o `localStorage`. Com `prefers-reduced-motion`, o botão fica com `display: none`. | `ciclo2-celular-dobra.png`, `ciclo2-desktop-dobra.png`, `ciclo2-celular-pausa-pausado.png`, `ciclo2-desktop-pausa-pausado.png` |
| V4 | Degradê do cartão em 360 | **Resolvido.** O degradê do `.caminho-conteudo` agora vai de 0,92 (base) a 0,8 em 55% e chega a transparente no topo, com `padding-top` de 32 px. A faixa com opacidade de 0,8 ou mais cobre cerca de 48% do cartão "Água doce" e 42% do "Marinho". A foto aparece em mais da metade superior dos dois cartões. Ver efeito colateral em V6. | `ciclo2-celular-cartoes-zoom.png` (2x), `ciclo2-celular-hero-caminhos.png` |
| V5 | Botão flutuante do WhatsApp cobrindo conteúdo | **Persiste, mais brando.** O botão agora fica escondido no hero, em `#visite` e no rodapé, conferido nas 3 larguras. `scroll-padding-bottom` mede 88 px. Ainda invade 40–42 px da coluna de conteúdo: no celular, o botão começa em x = 300 e o conteúdo vai até 340; no tablet, 694 e 736; no desktop, 1198 e 1240. Numa varredura a cada 250 px de rolagem, o botão visível ficou sobre texto em 24 de 83 posições no celular (29%), em 2 de 54 no tablet e em 3 de 41 no desktop. | `ciclo2-celular-flutuante-viewport.png` (cobre o fim de "alcalina. Mais importante que um"), `ciclo2-tablet-flutuante-viewport.png` (cobre parte de "ler o seu") |

## Achados do ciclo 2

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V5 | todas (sobretudo celular) | Global, botão flutuante | Persiste (ver tabela acima). O botão cobre o fim das linhas de texto que passam por baixo dele em 29% das posições de rolagem no celular. | `ciclo2-celular-flutuante-viewport.png`, `ciclo2-tablet-flutuante-viewport.png`; varredura com `caretPositionFromPoint` | menor |
| V6 | celular 360 | Hero, cartão "Água doce" | Efeito colateral da correção V4: com o degradê mais leve no topo, o contraste do título branco no pior pixel do fundo caiu de 9,40:1 para **4,05:1**. A média continua em 16,3:1. Os pixels abaixo de 4,5:1 somam 0,09% da área do título e ficam só na parte de cima da primeira linha ("Começar"), onde há uma folha clara da foto. O título tem 17 px em peso 700, então não conta como texto grande. Os outros elementos dos cartões passam: no "Marinho", o título fica em 5,56:1 e o apoio em 5,97:1 no pior pixel. Em 768 e 1280 nada mudou: 10,1:1 ou mais nos títulos e 6,6:1 ou mais no apoio. | `ciclo2-celular-cartoes-zoom.png`; medida de contraste por pixel com o texto transparente | menor |
| V7 | celular (Lighthouse) | Desempenho, hero | LCP de **3,1 s** nas 3 rodadas, acima da meta de 2,5 s (no ciclo 1 era 3,5 s). O elemento de LCP é a `section#inicio`, porque a imagem `assets/causticas.svg` vem do CSS (`.hero::before`). O Lighthouse aponta "Request is discoverable in initial document: não" e "fetchpriority=high: não". O `styles.css` (55 KB) ainda bloqueia a renderização (cerca de 300 ms estimados). As fontes saíram da lista de bloqueio. | `lcp-discovery-insight`, `render-blocking-insight` e `largest-contentful-paint` do Lighthouse 13.6.0 | importante |
| V8 | celular (Lighthouse) | Script | Novo no ciclo 2: reflow forçado de cerca de 211 ms em `script.js` linha 207, na função `atualizarRegioesRolaveis`, que lê `scrollWidth`/`clientWidth` das regiões de tabela. Isso pesa no TBT (270–320 ms). | `forced-reflow-insight` do Lighthouse | menor |

Observações que não viraram achado:
- No celular e no tablet, a caixa do botão de pausa encosta na caixa do parágrafo `.eyebrow` (sobreposição de 8 px entre as caixas). O texto "LOJA E CLUBE DE AQUARISMO" termina antes do botão, então não há sobreposição visível (`ciclo2-celular-dobra.png`, `ciclo2-tablet-dobra.png`).
- `image-delivery` agora acusa as fotos dos cartões-caminho no celular emulado de 412 px: `foto-caminho-{doce,marinho}-480.webp` (480 x 600) aparecem a 309 x 387, com economia estimada de cerca de 55 KiB. O apontamento do ciclo 1 sobre `foto-loja-ambiente-1200.webp` sumiu.

## Fontes locais e preload

| Contexto | Console | Fontes visíveis? |
|---|---|---|
| http (servidor local), 3 larguras | 0 erros e 0 avisos. `sora-latin-var.woff2` e `inter-latin-var.woff2` são pedidas uma vez cada pelo `link` de preload (7–17 ms). Nenhuma requisição ao Google Fonts. | Sim. `document.fonts`: Inter 400–700 e Sora 600–700 `loaded`; `check('700 20px Sora')` e `check('400 16px Inter')` = true |
| `file://` (duplo clique), 360 | **Sim, há erros.** 2 erros "Access to font at 'file:///.../sora-latin-var.woff2' (e inter) from origin 'null' has been blocked by CORS policy", 2 "Failed to load resource: net::ERR_FAILED" e 2 avisos "A preload ... is found, but is not used because the request credentials mode does not match". | **Sim.** Inter e Sora ficam com status `loaded` e o `h1` é renderizado em Sora, como mostra a captura. |

Captura: `ciclo2-celular-file-dobra.png`, igual a `ciclo2-celular-dobra.png` servida por http.

## Regressões verificadas (sem problema)
- **Menu mobile (360):** abre com `aria-expanded="true"` e rótulo "Fechar menu". O painel vai de 0,64 até 360 x 736. Esc fecha e devolve o foco ao `.menu-botao` (`ciclo2-celular-menu-aberto.png`, `ciclo2-celular-menu-fechado.png`).
- **Abas:** Espécies e Parâmetros alternam `aria-selected` e o painel. Os dois grupos ficam sincronizados, a seta para a esquerda funciona e o hash `#especies-marinho` abre a aba certa, nas 3 larguras (`ciclo2-*-abas-*.png`).
- **Tabelas:** viram cartões abaixo de 600 px (`display: block`, `thead` absoluto) e são tabela normal em 768 e 1280.
- **Foco por teclado (1280):** o 3º Tab chega a "Loja", com contorno de 3 px `#2EC4C6` (`ciclo2-desktop-foco.png`). O cartão-caminho mostra o contorno no cartão inteiro (`ciclo2-desktop-foco-caminho.png`).
- **Imagens:** 0 quebradas de 20. Depois da rolagem, só as 4 fotos do painel marinho de espécies, que está oculto, continuam sem carregar (`loading="lazy"`), como esperado.

## Métricas (ciclo 2)

| Métrica | Celular 360 | Tablet 768 | Desktop 1280 |
|---|---|---|---|
| Rolagem horizontal | não (360/360) | não (768/768) | não (1280/1280) |
| Imagens quebradas | 0 de 20 | 0 de 20 | 0 de 20 |
| Erros/avisos de console (http) | 0 | 0 | 0 |
| Requisições ≥ 400 ou com falha (http) | 0 | 0 | 0 |
| Alvos < 44 px | 1* | 2* | 2* |
| Fontes carregadas | Inter 400–700, Sora 600–700 (locais) | idem | idem |
| Placeholders/pendências visíveis | 0 | 0 | 0 |
| Altura da página | 25.372 px | 18.419 px | 14.025 px |

\* Os mesmos casos do ciclo 1: o `.caminho-link` (por exemplo, 126 x 41 no celular), cuja área clicável real é o cartão inteiro por `::after`, e o pular-link escondido (1 x 1).

**Lighthouse 13.6.0** (celular emulado, Edge headless, servidor local sem compressão, 3 rodadas):

| Rodada | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | FCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| 1 | 86 | 100 | 100 | 100 | 3,1 s | 2,0 s | 300 ms | 0 |
| 2 | 88 | não medido | não medido | não medido | 3,1 s | 1,6 s | 270 ms | - |
| 3 | 86 | não medido | não medido | não medido | 3,1 s | 1,6 s | 320 ms | - |

Meta de LCP < 2,5 s: **não atingida** (3,1 s; ciclo 1: 3,5 s). O `bf-cache` falha por `Cache-Control: no-store`, por causa da flag `-c-1` do servidor de teste, e não por causa do site. A latência do documento reflete o servidor local sem gzip.

## Capturas do ciclo 2 (`capturas/`)
- Página inteira: `ciclo2-celular-inteira.jpg`, `ciclo2-tablet-inteira.jpg`, `ciclo2-desktop-inteira.jpg` (JPEG, com as imagens lazy já carregadas)
- Dobra: `ciclo2-celular-dobra.png`, `ciclo2-tablet-dobra.png`, `ciclo2-desktop-dobra.png`, `ciclo2-celular-file-dobra.png` (file://)
- Hero e cartões: `ciclo2-{celular,tablet,desktop}-hero-caminhos.png`, `ciclo2-celular-cartoes-zoom.png`
- Foco: `ciclo2-desktop-foco.png`, `ciclo2-desktop-foco-caminho.png`
- Menu: `ciclo2-celular-menu-fechado.png`, `ciclo2-celular-menu-aberto.png`
- Pausa: `ciclo2-celular-pausa-pausado.png`, `ciclo2-desktop-pausa-pausado.png`
- Abas: `ciclo2-{celular,tablet,desktop}-abas-{especies,parametros}-{doce,marinho}.png`
- Tabelas: `ciclo2-{celular,tablet,desktop}-tabela-comparativo.png`
- Botão flutuante: `ciclo2-celular-flutuante-viewport.png`, `ciclo2-tablet-flutuante-viewport.png`
