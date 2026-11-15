# Inspeção visual: Diaconia Catedral Baleia

## Ambiente
- Navegador: Microsoft Edge 157.0.4341.46 (headless), via `playwright-core` (`channel: 'msedge'`)
- Método: A (Playwright), com o site aberto por `file:///.../site/index.html`. O servidor local `http-server` foi bloqueado pela permissão do ambiente.
- Data: 2026-11-15
- Iteração: 1 (primeira inspeção, sem rodada anterior)
- Larguras: celular 360x800 (isMobile, toque), tablet 768x1024, desktop 1440x900

## Resumo
**PROBLEMAS ENCONTRADOS**: 1 bloqueante, 1 importante, 3 menores.

Não há rolagem horizontal, imagem quebrada, erro de console nem requisição com falha. As fontes do design (Lora e Source Sans 3) carregaram. O foco do teclado aparece em todos os 15 primeiros elementos. O defeito principal é o menu do celular e do tablet: ao abrir, ele mostra só o primeiro item.

## Achados

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V1 | celular e tablet (< 1100px) | Cabeçalho / menu | Com o menu aberto, só "Quem somos" aparece numa faixa de 65px; os outros 5 links e o botão do WhatsApp ficam escondidos (só aparecem rolando dentro da faixa). O `#menu` tem `position: fixed; top: header-h; bottom: 0`, mas está dentro do `.cabecalho`, que usa `backdrop-filter: blur(8px)` (styles.css 365-371). O `backdrop-filter` faz o cabeçalho virar o bloco de referência dos filhos fixos, então o painel fica preso à altura do cabeçalho. | `capturas/celular-menu-aberto.png` (captura feita 1,5 s após abrir); medido: altura do `#menu` = 65px e `scrollHeight` = 472px, estável em 100, 600 e 1500 ms | bloqueante |
| V2 | celular | Agenda (tabela Cultos) | A coluna do nome fica estreita e quebra palavra por palavra ("Culto / da / manhã", 3 linhas); a coluna do dia também ocupa 3-4 linhas. A leitura fica truncada, mas sem corte nem sobreposição. | `capturas/celular-agenda-tabela.png` | importante |
| V3 | todas | Liderança | Placeholders de nome visíveis: "[Nome do coordenador da diaconia]", "[Nome do vice-coordenador]", "[Nome do secretário da diaconia]", com selo "A CONFIRMAR" e avatar genérico. Parece intencional (dados pendentes), mas está visível na página. | `capturas/desktop-inteira.jpg` (seção "Quem coordena o serviço"), `capturas/celular-inteira.png` | menor (pendência de conteúdo) |
| V4 | celular | Localização | O e-mail "secretaria@catedralbaleia.com.br" quebra em "...com." / "br". | `capturas/celular-secao-localizacao.png` | menor |
| V5 | celular | Links inline | Alvos de toque com menos de 44px: link "Precisa de ajuda?" (138x24), link "WhatsApp" no texto (72x24), "CC BY 3.0" no rodapé (57x21), links do rodapé "Servir" (37x44) e "Ajuda" (36x44). Os 3 radios (20x20) ficam dentro de cartões-rótulo clicáveis grandes, então na prática passam. | valores medidos (`getBoundingClientRect`) | menor |

Observações (não são defeitos):
- **Mapa do Google**: o iframe é lazy. Na captura da página inteira do desktop (`desktop-inteira.jpg`), a área do mapa sai como um bloco cinza, porque o screenshot fullPage não dispara o carregamento. Depois de rolar até a seção, o mapa carregou com o pino certo (frame `google.com/maps/embed`, 673x700 no desktop, 318x238 no celular): `capturas/desktop-secao-localizacao.png`.
- `onda-hero.svg` aparece esticado (proporção natural 2:1, exibido em 1440x285, 360x394 etc.), mas o arquivo tem `preserveAspectRatio="none"` e é decorativo (`alt=""`). É intencional.
- No hero do desktop, as linhas decorativas de onda passam por trás da citação de Marcos 10.45. A citação continua legível (`desktop-dobra.png`).
- A âncora do menu funciona: `scroll-margin-top` de 88px; ao clicar em "Quem somos", "Agenda" e "Localização", o h2 para abaixo do cabeçalho de 72px.
- No celular, o menu fecha com Esc e ao clicar num link (`aria-expanded` volta a "false").
- Contraste aparente: dourado só sobre marinho, dourado-escuro nos rótulos sobre claro, e o selo "A CONFIRMAR" legível, como manda o design.md. Nenhum texto sobre foto.

## Métricas

| Métrica | celular | tablet | desktop |
|---|---|---|---|
| Rolagem horizontal (`scrollWidth` / `innerWidth`) | 360/360: não | 768/768: não | 1440/1440: não |
| Imagens quebradas (de 12) | 0 | 0 | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Requisições com falha (≥ 400) | 0 | 0 | 0 |
| Alvos < 44px | 8 (ver V5) | não aplicável | não aplicável |
| Fontes carregadas | Lora 500/500i/600/700, Source Sans 3 400/600/700 | igual | igual |
| Placeholders `[PENDENTE`/`Lorem` | nenhum (só "[Nome do ...]", ver V3) | igual | igual |

**Foco do teclado (desktop, 15 Tabs)**: pular-link, marca, 6 links do menu, CTA do cabeçalho, botões do hero, links dos cartões de informação e "Quero servir". Todos com `outline` sólido de 3px: petróleo #1F6F78 no claro e dourado #D4AF5A no escuro. Evidência: `capturas/desktop-foco.png` (foco em "O que fazemos").

**Lighthouse**: não medido. O servidor local foi bloqueado pela permissão do ambiente, e o Lighthouse falhou ao rodar com a URL `file://` (erro em `navigationGather`).

## Capturas (`capturas/`)
- Celular: `celular-dobra.png`, `celular-inteira.png`, `celular-menu-fechado.png`, `celular-menu-aberto.png`, `celular-agenda-tabela.png`, `celular-secao-{informacoes,o-que-fazemos,agenda,ajuda,localizacao,contato}.png`, `celular-rodape.png`
- Tablet: `tablet-dobra.png`, `tablet-inteira.jpg`
- Desktop: `desktop-dobra.png`, `desktop-inteira.jpg`, `desktop-foco.png`, `desktop-foco-tab15.png`, `desktop-secao-{informacoes,o-que-fazemos,agenda,ajuda,localizacao,contato}.png`, `desktop-rodape.png`

Nota: nas capturas de seção, o topo de cada seção fica sob o cabeçalho fixo porque elas foram feitas com `scrollIntoView`. Isso é efeito do método de captura, não da navegação por âncora (veja acima).

## Comparação com a rodada anterior
Não se aplica (primeira inspeção).

---

# Ciclo 2

## Ambiente
- Navegador: Microsoft Edge 157.0.4341.46 (headless), via `playwright-core` (`channel: 'msedge'`)
- Método: A (Playwright), com o site aberto por `file:///.../site/index.html`. Para o Lighthouse, o site foi servido com `http-server` em 127.0.0.1:8080, e o servidor foi encerrado no fim.
- Data: 2026-11-15
- Iteração: 2 (reinspeção após o CHANGELOG v2; o `site/` agora é autocontido, com os assets em `site/assets/`)
- Larguras: celular 360x800 (isMobile, toque), tablet 768x1024, desktop 1440x900

## Resumo
**OK, com 2 ressalvas menores**: 0 bloqueantes, 0 importantes e 2 menores (1 resíduo de V5 e 1 pendência de conteúdo, V3).

Os itens V1, V2 e V4 do ciclo 1 foram resolvidos, e V5 foi resolvido quase por completo. A mudança de caminhos para `site/assets/` não quebrou nada: 0 imagens quebradas e 0 requisições com falha nas 3 larguras. O `srcset` escolhe a versão de 640px no celular. Não há erros de console nem rolagem horizontal, e as capturas não mostram sobreposições.

## Achados (ciclo 2)

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V3 | todas | Liderança | Continua igual: os nomes "[Nome do coordenador da diaconia]", "[Nome do vice-coordenador]" e "[Nome do secretário da diaconia]" aparecem com o avatar genérico e o selo "A CONFIRMAR". É uma pendência de conteúdo, não de código. | `capturas/ciclo2-celular-secao-lideranca.png`, `capturas/ciclo2-desktop-inteira.jpg` | menor (pendência de conteúdo) |
| V5r | celular | Rodapé (créditos) | O link "CC BY 3.0" mede 57x39 e ainda fica abaixo de 44px de altura. Passa no WCAG 2.5.8 (24px), mas não na meta de 44px do processo. Os demais links medidos têm 44px ou mais. Os 3 radios (20x20) ficam dentro de cartões-rótulo clicáveis de cerca de 272x88. | valor medido (`getBoundingClientRect`) | menor |

Observações (não são defeitos):
- **Mapa**: nas capturas de página inteira, o iframe sai como um bloco cinza (o fullPage não pinta o iframe lazy, como no ciclo 1). Com a seção à vista, o mapa carrega com o pino (frame `google.com/maps/embed?...-15.813602,-47.913748`, 318x238 no celular, 705x528 no tablet e 673x700 no desktop): `capturas/ciclo2-desktop-secao-localizacao.png`.
- **Animações de entrada**: antes de rolar, 34 elementos do `main` ficam com opacidade < 0,5; depois de rolar a página (passos de 200px), sobram 0 em 360 e em 1440px. Uma rolagem automática muito rápida pode deixar blocos em branco nas capturas, mas isso não ocorre na rolagem normal.
- `onda-hero.svg` continua esticado de propósito (`preserveAspectRatio="none"`, decorativo).
- A linha de cabeçalho da tabela da agenda (Culto | Dia | Horário) fica oculta visualmente nas 3 larguras (8x52px), mas está presente para leitores de tela.

## Conferência dos itens do ciclo 1

| ID | Situação | Evidência |
|---|---|---|
| V1 menu mobile | **resolvido** | 360px: `#menu` com top=64 e altura=736px (`scrollHeight` 735, sem rolagem interna). Os 6 links (320x56) e o botão "Fale com a diaconia" (320x48, bottom=489) ficam visíveis. 768px: altura=960px e todos os itens visíveis (707x56). `main` fica `inert` com o menu aberto. O Esc fecha o menu (`aria-expanded=false`), tira o `inert` e devolve o foco ao `.menu-botao`, e o clique num link também fecha. Capturas: `ciclo2-celular-menu-aberto.png`, `ciclo2-tablet-menu-aberto.png`, `ciclo2-celular-menu-fechado.png` |
| V2 agenda no celular | **resolvido** | Cada linha virou um bloco: nome em negrito numa linha (28px de altura), dia abaixo (25px) e horário à direita (30px). Não há quebra palavra por palavra. Medido: "Culto da manhã" 175x28 e "Santa Ceia" 250x28. Capturas: `ciclo2-celular-agenda-tabela.png`, `ciclo2-celular-secao-agenda.png` |
| V3 placeholders da liderança | persiste (pendência de conteúdo) | ver tabela acima |
| V4 e-mail | **resolvido** | Na localização, o e-mail quebra em "secretaria@" / "catedralbaleia.com.br" (2 linhas, 240x56), sem cortar o domínio. No rodapé fica numa linha só (211x44). Captura: `ciclo2-celular-secao-localizacao.png` |
| V5 alvos de toque | **resolvido em parte** | Os links do rodapé "Servir" e "Ajuda" medem 44x44. "Precisa de ajuda?" e o "WhatsApp" do texto saíram da lista de alvos < 44px. Resta só "CC BY 3.0" (57x39, V5r). A contagem de alvos < 44px caiu de 8 para 4 (3 radios dentro de rótulos grandes + CC BY 3.0) |

## Métricas (ciclo 2)

| Métrica | celular | tablet | desktop |
|---|---|---|---|
| Rolagem horizontal (`scrollWidth` / `innerWidth`) | 360/360: não | 768/768: não | 1440/1440: não |
| Elementos além da largura | 0 | 0 | 0 |
| Imagens quebradas (de 12) | 0 | 0 | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Requisições com falha (≥ 400) | 0 | 0 | 0 |
| Alvos < 44px | 4 (3 radios dentro de rótulos grandes + "CC BY 3.0" 57x39) | não aplicável | não aplicável |
| Fontes | Lora e Source Sans 3 carregadas (`document.fonts.check` true) | igual | igual |
| Placeholders `[PENDENTE`/`[PLACEHOLDER`/`Lorem` visíveis | nenhum (só "[Nome do ...]", V3) | igual | igual |

**`srcset` / caminhos `site/assets/`** (`currentSrc` depois de rolar):
- 360px: `hero-servico-640.webp` (exibida em 320x240) e `templo-catedral-baleia-640.webp` (320x200). As fotos de Servir e Ajuda ficam ocultas nessa largura e não são baixadas (lazy + `display:none`).
- 768px: `hero-servico.webp` e `templo-catedral-baleia.webp` (versões grandes, exibidas em 707px).
- 1440px: `hero-servico-640.webp` (moldura em arco, cerca de 470px), `templo-catedral-baleia.webp`, `servir-cestas.webp` e `ajuda-oracao-640.webp`. Todas com `complete=true` e `naturalWidth > 0`.
- SVGs (`onda-*`, `avatar-placeholder`): todos carregados a partir de `assets/`.

**Foco do teclado (desktop, 15 Tabs)**: a mesma sequência do ciclo 1 (pular-link, marca, 6 links do menu, CTA, botões do hero, links dos cartões, "Quero servir"), toda com `outline` sólido de 3px (petróleo no claro, dourado no escuro). Evidência: `ciclo2-desktop-foco.png` (foco em "O que fazemos") e `ciclo2-desktop-foco-tab15.png`.

**Lighthouse 13.6.0 (celular, via http://127.0.0.1:8080/)**: Performance **91**, Acessibilidade **100**, Boas práticas **100**, SEO **100**. FCP 1,8 s, LCP 3,3 s, TBT 0 ms, CLS 0.

## Capturas do ciclo 2 (`capturas/`, prefixo `ciclo2-`)
- Celular: `ciclo2-celular-dobra.png`, `ciclo2-celular-inteira.png`, `ciclo2-celular-menu-fechado.png`, `ciclo2-celular-menu-aberto.png`, `ciclo2-celular-agenda-tabela.png`, `ciclo2-celular-secao-{informacoes,o-que-fazemos,agenda,ajuda,localizacao,contato,lideranca,servir}.png`, `ciclo2-celular-rodape.png`
- Tablet: `ciclo2-tablet-dobra.png`, `ciclo2-tablet-inteira.jpg`, `ciclo2-tablet-menu-aberto.png`
- Desktop: `ciclo2-desktop-dobra.png`, `ciclo2-desktop-inteira.jpg`, `ciclo2-desktop-foco.png`, `ciclo2-desktop-foco-tab15.png`, `ciclo2-desktop-secao-{informacoes,o-que-fazemos,agenda,ajuda,localizacao,contato}.png`, `ciclo2-desktop-rodape.png`

As capturas `ciclo2-` do desenvolvedor com o mesmo nome foram substituídas pelas desta inspeção. `ciclo2-celular-agenda.png` e `ciclo2-celular-contato.png` continuam sendo do desenvolvedor, porque nenhuma captura desta inspeção tem esses nomes. As capturas do ciclo 1 foram mantidas. Todos os arquivos têm menos de 1,5 MB (o maior é `ciclo2-celular-inteira.png`, com 1211 KB).
