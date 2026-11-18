# CHANGELOG: Rosa Bordô

## Iteração 2 (2026-11-17): correções do ciclo 1

### Obrigatórias (avaliacao.md, seção b)
- **Menu do celular e do tablet (T1/V1):** o `backdrop-filter` saiu do `.cabecalho` e foi para `.cabecalho::before` (fundo creme a 96% + desfoque, `z-index: -1`). O `.nav` voltou a cobrir a tela inteira: medido [0, 0, 360, 800] a 360 px e [0, 0, 768, 1024] a 768 px, com todos os links visíveis. O painel ganhou o botão "Encomendar" (WhatsApp, `.nav__cta`, oculto a partir de 1024 px), porque o "Encomendar" do cabeçalho fica atrás do painel aberto.
- **Marcação dos slides (T2):** `ul.hero__slides` / `li.slide` viraram `div` (padrão APG), mantendo `role="group"`, `aria-roledescription`, `aria-label`, `aria-hidden` e `inert`.
- **Contraste da etiqueta do hero no celular (T3):** abaixo de 768 px, a `.slide__etiqueta` tem fundo próprio `rgba(42, 14, 24, .72)`. O pior caso (sobre branco) fica em cerca de 6,7:1.
- **Recorte mobile do hero (V4):** nova variável `--sobe-m` por slide, que amplia a foto para cima no celular (`top: -X%; height: 100% + X%`), e `--foco-m` ajustado no eixo horizontal (no celular a foto 4:5 é recortada só na largura, por isso o eixo vertical do `object-position` não tinha efeito). Valores: slide 1 `45%` / 10%, slide 2 `37%` / 34%, slide 3 `41%` / 50%, slide 4 `89%` / 25%. Conferido em 360×800: o rosto (slides 1, 2 e 4) e as mãos com a agulha (slide 3) ficam acima da etiqueta. No slide 4 a chupeta fica fora do quadro no celular. Os `<source>` mobile dos slides 2 a 4 têm `sizes` maiores (200 a 235vw) para não ampliar a foto de 540w.
- **Textos da vitrine (conteudo.md, Revisões > Ciclo 1):** descrições e `alt` dos 6 cards; Joaquim virou Matilde (título, link de WhatsApp e rótulo acessível); sem a etiqueta "Bordado à mão" em Matilde e Maria Flor; depoimento 2 com "Modelo Lia"; depoimento 3 com o texto novo e "Modelo Matilde". Os `alt` dos slides 1 e 3 passaram a ser os do `conteudo.md`. O crédito do rodapé ("Pexels e Pixabay") já estava certo.

### Recomendadas
- **Fontes (T4):** a folha do Google Fonts carrega como `preload` com `onload` (mais `<noscript>`), sem bloquear a renderização. Os `preconnect` ficaram. Os eixos da Fraunces não mudaram, para não alterar o design.
- **Slide 2 (T5):** na inicialização, o próximo slide só carrega depois do evento `load`. Nas trocas seguintes, o pré-carregamento continua igual.
- **LCP (T10):** saiu `decoding="async"` da imagem do slide 1.
- **Faixa do topo (T8/V7):** a frase longa só aparece a partir de 400 px; de 360 a 399 px aparece a curta, em 1 linha.
- **Controles do hero (V5):** a partir de 768 px, a barra fica à esquerda, alinhada ao texto, e não cobre mais a moldura das composições dos slides 2 e 4. É uma divergência do design (controles à direita), registrada aqui pelo motivo acima.
- **Foco em alto contraste (T9):** `:focus-visible` usa `outline: 2px solid transparent` no lugar de `outline: none`.

### Conferido
- Tags balanceadas, sem IDs duplicados, 1 `<h1>`, todos os `../assets/` existem e `node --check script.js` sem erro.
- Capturas no Edge headless (360, 768 e 1440 px): sem rolagem horizontal, menu em tela cheia e controles fora da moldura.

### Pendências (sem mudança)
- Fotos reais do @arosabordo, dados fictícios, nome da artesã, modelos reais, depoimentos reais, Inmetro/OCP.
- `og:image` absoluto, `og:url` e `canonical` quando houver domínio (T6). Publicar a raiz do projeto ou copiar `assets/` para `site/` (T7).
- No desktop, a foto do slide 4 ainda mostra a chupeta (V6, opcional). Isso depende de outra foto ou de um novo recorte 16:9 (`gerador-imagens`).

## Iteração 1 (2026-11-17): primeira versão

### Feito
- `index.html`, `styles.css` e `script.js` em HTML/CSS/JS puro, mobile first, com os tokens do `design.md` (2.6) no `:root`. Fontes Fraunces e Nunito do Google Fonts com `display=swap`.
- Seções na ordem do design (3.1): faixa do topo, cabeçalho sticky com menu em tela cheia no celular (foco preso, Esc, `aria-expanded`), hero carrossel, diferenciais, coleção (6 cards), sobre, personalize, como encomendar, depoimentos, FAQ (`<details>`), CTA final com faixa do Instagram, rodapé com JSON-LD e botão flutuante do WhatsApp (só abaixo de 1024px, aparece depois do hero e some no CTA final e no rodapé).
- **Hero carrossel (padrão WAI-ARIA APG):** 4 slides com `<picture>` (WebP com srcset 768/1024/1440/1920 e reserva JPEG; recorte 4:5 no celular com srcset 540/720/1080), `--foco`/`--foco-m` por slide. Slide 1 com `fetchpriority="high"`, sem lazy e com `preload` por media; slides 2 a 4 com `loading="lazy"` e `fetchpriority="low"`, e o próximo slide é pré-carregado. Controles antes dos slides no DOM: pausar/retomar (troca só o rótulo e o ícone), anterior, 4 indicadores (`aria-current` + `aria-disabled`), próximo. Teclado ← → Home End, swipe com Pointer Events e `touch-action: pan-y`, crossfade de 700 ms, zoom lento, barra de progresso. Autoplay de 7,5 s que pausa no hover, no foco (só volta com "Retomar"), com a aba oculta e com o hero fora da tela. Sem autoplay, fade, zoom nem barra com `prefers-reduced-motion`. Slides ocultos com `aria-hidden` e `inert`, `aria-live` off/polite. Sem JS, só o slide 1 aparece e os controles ficam com `hidden`.
- O avanço automático é disparado pelo `animationend` da barra de progresso, então pausar a barra pausa a troca (sem descompasso entre o timer e a barra).
- Sprite `icones.svg` copiado inline no `<body>`, para os ícones funcionarem também ao abrir com duplo clique (`file://`).
- Dados fictícios marcados com `<!-- FICTÍCIO: substituir antes de publicar -->`. Fotos de banco marcadas com `<!-- FOTOS DE BANCO: ... -->`. Depoimentos com o selo "Exemplo" e o comentário de substituição.
- Conferido: 1 `<h1>`, tags balanceadas, os 95 caminhos de `../assets/` existem, JS sem erro de sintaxe. Capturas rápidas em 360px e 1366px sem rolagem horizontal.

### Divergências do design ou da copy (com motivo)
- **Alts dos slides e dos cards:** ajustados para as fotos entregues (`imagens.md`), como prevê o `conteudo.md`. Alt do slide 4 informado pelo orquestrador depois da troca da foto: "Boneca de pano de linho cru, com touquinha e olhos bordados, sentada numa cadeirinha de palha (foto ilustrativa)"; recorte do celular com `--foco-m: 50% 25%`. A copy do slide 4 não fala em berço nem em segurança para bebês.
- **Fotos dos cards reordenadas** para combinar melhor com os textos: Aurora (coelhinha) usa `modelo-6` (coelhinhas), Benedita (casaquinho) usa `modelo-2`, Cecília usa `modelo-3`, Joaquim usa `modelo-4`, Maria Flor usa `modelo-5`. As descrições continuam as do redator e não batem 100% com as fotos (ex.: Joaquim é "boneco de jardineira jeans", e a foto mostra uma boneca de jardineira pink). Isso some quando entrarem as fotos reais.
- **Crédito do rodapé:** "Pexels, Pixabay e Unsplash" virou "Pexels e Pixabay", porque nenhuma foto do Unsplash foi usada (`imagens.md`, seção 4).
- **Slides 2 e 4:** sem `.slide--retrato`, porque o gerador entregou composições prontas em 1920×1080 (opção alternativa do design 3.2.5). Usam o mesmo véu dos outros slides.
- **Controles do hero abaixo de 400px:** botões circulares com 44px (o design pede 48px), para os 7 controles caberem em 320px úteis. O alvo mínimo de 44px continua.
- **Faixa do topo entre 360 e 400px:** o texto longo quebra em 2 linhas (a altura mínima de 36px se mantém). O design só pede a versão curta abaixo de 360px.
- **Agulha do fim do caminho dos passos:** feita com `::after` em CSS (decorativa) no lugar de um `<img>`.

### Pendências
- Todas as fotos são de banco: trocar pelas fotos reais do @arosabordo.
- Dados fictícios: WhatsApp, e-mail, cidade, horários, envio, prazos, pagamento e preços (`dados-negocio.md`).
- [PENDENTE] Nome da artesã (h2 do Sobre e assinatura), modelos reais da coleção, materiais, prática de detalhes bordados para bebês, consulta ao Inmetro/OCP sobre bonecas prontas e 3 depoimentos reais.
- `og:image` com caminho relativo: trocar pela URL absoluta quando houver domínio.
