# Inspeção visual: Vértice Sneakers

## Ambiente
- Navegador: Microsoft Edge 157.0.4341.60, sem janela (Playwright `playwright-core`, `channel: 'msedge'`)
- Método: **A** (Playwright). O site foi servido por `http-server` local na porta 8080, sem cache, e o servidor foi parado no fim.
- Data: 19/11/2026
- Iteração: **ciclo 2** (depois das correções do ciclo 1, ver `site/CHANGELOG.md`)
- Os dados de contato, produtos e depoimentos são fictícios por pedido do usuário. Isso não conta como falha.

## Resumo
**OK, com 1 achado menor residual.** Os 7 achados do ciclo 1 foram conferidos. Seis estão resolvidos (V1, V2, V3, V4, V5, V7). No V6, o problema ficou mais fraco: o cadarço do slide 3 ainda passa atrás do símbolo "Λ" no celular, mas o logo continua legível. O carrossel funciona por completo nas 3 larguras. Não há rolagem horizontal, imagem quebrada, erro de console nem requisição com falha. O Lighthouse dá 94/100/100/100 no celular e 100/100/100/100 no desktop.

Contagem: **0 bloqueantes, 0 importantes, 1 menor.**

## O que mudou desde o ciclo 1

| ID ciclo 1 | Situação | Evidência |
|---|---|---|
| V1, menu cortado após rolar (bloqueante) | **Resolvido** | Painel medido com rolagem 0, 100 e 2500: 736 px no celular (64+736) e 960 px no tablet (64+960). Nas três rolagens, aparecem os 6 links, o botão "Agendar pelo WhatsApp" e o endereço. Capturas: `celular-menu-aberto-rolado.png`, `tablet-menu-aberto-rolado.png` e `celular-menu-aberto.png` (topo) |
| V2, rádios ovais (importante) | **Resolvido** | 3 rádios de 20x20 px, redondos (`border-radius: 50%`); o marcado tem o ponto champanhe centralizado. Rótulos de 75x44, 67x44 e 110x44. Capturas: `desktop-radios-periodo.png`, `desktop-radios-periodo-marcado.png` |
| V3, faixa da boutique com loja de talheres (importante) | **Resolvido** | A foto nova (`faixa-loja-2400x1029.webp`) mostra tênis de lona brancos pendurados numa prateleira de madeira, com etiquetas de numeração. Captura: `desktop-foto-faixa.jpg` |
| V4, acento solto na Cormorant (menor) | **Resolvido** | "Tênis", "à mão", "ateliê", "você", "tênis" (A boutique), "já" e "experiência" (Depoimentos), e também "Experiência" e "Dúvidas" no menu: o acento fica junto da letra. Não há diferença visível de peso nem de altura entre as letras com recorte EB Garamond e as letras vizinhas em Cormorant. A família "Vertice Acentos" carregou nos pesos 500, 600 e 500 itálico. Capturas: `desktop-zoom-titulo-acento.png` (2x), `celular-zoom-titulo-acento.png` (2x) e `celular-slide-3.png` |
| V5, texto sobre o tênis no tablet em retrato (menor) | **Resolvido** | O tablet 768x1024 carrega o recorte retrato `hero-01-couro-900x1600.webp` (`object-position` 50% 30%). O tênis fica na metade de cima e o título começa em y=605. Só as pontas do cadarço descem até a altura do título, e o texto continua legível. Captura: `tablet-dobra.png` |
| V6, cadarço atrás do logo no slide 3 do celular (menor) | **Atenuado, persiste** | Ver o achado C2-1 abaixo |
| V7, Visite com sapatos sociais (menor) | **Resolvido** | A foto nova (`visite-interior-1200x900.webp`) mostra 4 tênis em prateleiras de madeira, e o alt descreve a cena. Captura: `desktop-foto-visite.jpg` |

## Tabela de achados

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| C2-1 (antigo V6) | celular 360 | Hero, slide 3 | Com o cabeçalho transparente no topo, o cadarço da foto ainda passa atrás do símbolo "Λ" do logotipo. O degradê mais forte (.85→.4→0) escureceu o cadarço, e o logo ("Λ VÉRTICE") continua legível. Resta só um cruzamento visual ao lado do símbolo. | `celular-slide-3-logo-zoom.png` (3x), `celular-slide-3.png` | menor |

Itens conferidos sem problema:
- Placeholders: nenhum `[PLACEHOLDER`, `[PENDENTE`, "Lorem", `undefined` ou `NaN` no texto visível.
- Reveal ao rolar: os 25 elementos `.reveal` apareceram nas 3 larguras.
- Créditos do rodapé: entraram "H&CO" e "Adrian Frentescu" (Pexels), e Elist Nguyen e Tahir Xəlfəquliyev saíram.
- Selos "EXEMPLO" nos depoimentos: presentes.

## Carrossel do hero (4 slides)

| Verificação | Celular 360 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Imagem por slide (recorte) | 1 a 4 OK: `hero-0N-*-600x1067.webp` | 1 a 4 OK: `hero-0N-*-900x1600.webp` (retrato, novo) | 1 a 4 OK: `*-1920.webp` |
| Slide ocupa a tela | 360x800 | 768x1024 | 1440x900 |
| Barra de progresso (aos 3 s) | 0,72; barra com 54/74 px | 0,73; 73/99 px | 0,71; 153/214 px |
| Autoplay | 01→02 em cerca de 7 s | 01→02 | 01→02 |
| Seta próxima no slide 4 / anterior no slide 1 | 04→01 / 01→04 | igual | igual |
| Clique na aba | troca o slide e pausa ("Retomar apresentação") | igual | igual |
| Botão pausar/retomar | pausado: ficou 8 s em 01; retomado: 04→01 | pausado: ficou 8 s | pausado: ficou 10,5 s em 01 (barra cheia); retomado: 01→02 |
| Pausa com o mouse em cima | (não se aplica) | (não medido) | parou com o mouse sobre o hero (8 s em 02) |
| Swipe | 04→01 | 01→02, e o carrossel pausa | (não se aplica) |
| `prefers-reduced-motion: reduce` | começa parado, 9 s em 01 | começa parado, 9 s em 01 | começa parado, 9 s em 01 |
| Teclado nas abas | (não medido) | → 03, End 04, Home 01, ← 04 | → 02, → 03, ← 02, End 04, → 01, Home 01, ← 04; o foco acompanha a aba ativa |
| Foco de teclado entra no carrossel | (não medido) | (não medido) | o autoplay pausa |

Capturas: `celular-slide-1..4.png`, `desktop-slide-1..4.png`, `celular-progresso-3s.png`, `desktop-progresso-3s.png`, `desktop-abas-teclado.png`.

## Foco visível e menu
- Desktop: 64 paradas de Tab, todas com contorno sólido champanhe e `:focus-visible`. Nenhum elemento ficou sob o cabeçalho fixo depois da rolagem. A única exceção esperada é "Pular para o conteúdo", que aparece sobre o cabeçalho. Capturas: `desktop-foco.png` (foco em "Produtos"), `desktop-foco-meio.png`.
- Celular: 58 paradas de Tab. Numa medição durante a rolagem suave, o campo "Nome" pareceu ficar sob a barra fixa. Repetindo com espera, ele para em 375-427 px, acima da barra (727 px). Não é um defeito. Captura: `celular-foco-formulario.png`.
- Menu do celular: `aria-expanded` alterna entre true e false, o rótulo muda entre "Abrir menu" e "Fechar menu", e Esc fecha o menu. Capturas: `celular-menu-aberto.png`, `celular-menu-fechado.png`.

## Métricas

| Métrica | Celular 360 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Rolagem horizontal (`scrollWidth`/`innerWidth`) | 360/360, sem rolagem | 768/768, sem rolagem | 1440/1440, sem rolagem |
| Imagens quebradas (de 25) | 0 | 0 | 0 |
| Erros e avisos de console | 0 | 0 | 0 |
| Requisições com falha (≥ 400) | 0 | 0 | 0 |
| Fontes | Cormorant Garamond 500, 500i e 600; Manrope 400, 500 e 600; Vertice Acentos 500, 600 e 500i: todas carregadas | igual | igual |

**Alvos menores que 44px (celular):** só os 3 `input[type=radio]` (20x20, que é o tamanho do componente). Os rótulos clicáveis em volta têm 75x44, 67x44 e 110x44. Os links do rodapé que apareciam no ciclo 1 saíram da lista.

**Lighthouse (Edge sem janela, servidor local):**

| Perfil | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | FCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| Celular | 94 | 100 | 100 | 100 | 1,8 s | 1,8 s | 0 | 250 ms |
| Desktop | 100 | 100 | 100 | 100 | 0,6 s | 0,6 s | 0,001 | 0 ms |

Observação: no celular, o TBT foi de 40 ms no ciclo 1 para 250 ms (2 medições iguais), e o desempenho de 98 para 94. A maior tarefa longa é de estilo e layout do documento (737 ms simulados). A distribuição do trabalho é parecida com a do ciclo 1 (styleLayout 2356 ms contra 2047 ms). A nota continua acima de 90.

## Observações sobre as capturas
- `*-inteira.jpg`: os `.reveal` foram forçados a aparecer só na hora da captura, sem mudar os arquivos do site. Na página inteira, o hero às vezes aparece com outro slide ou sem a foto, por causa da altura esticada. As fotos do hero estão nas capturas de dobra e de cada slide.
- Elementos fixos (cabeçalho, barra do WhatsApp) podem aparecer repetidos no meio das capturas inteiras. Isso é efeito da captura.
- `desktop-foto-faixa.jpg`: a faixa osso no topo é a base do bloco "A boutique", cortada pela posição da rolagem.

## Arquivos em `capturas/`
celular-dobra.png, celular-inteira.jpg, celular-slide-1..4.png, celular-slide-3-logo-zoom.png, celular-progresso-3s.png, celular-menu-aberto.png, celular-menu-aberto-rolado.png, celular-menu-fechado.png, celular-foco-formulario.png, celular-zoom-titulo-acento.png, tablet-dobra.png, tablet-inteira.jpg, tablet-menu-aberto-rolado.png, desktop-dobra.png, desktop-inteira.jpg, desktop-slide-1..4.png, desktop-progresso-3s.png, desktop-abas-teclado.png, desktop-foco.png, desktop-foco-meio.png, desktop-zoom-titulo-acento.png, desktop-radios-periodo.png, desktop-radios-periodo-marcado.png, desktop-foto-faixa.jpg, desktop-foto-visite.jpg
