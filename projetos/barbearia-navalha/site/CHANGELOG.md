# CHANGELOG: Barbearia Navalha (site)

## Iteração 7: correções rápidas da reavaliação do ciclo 3 (2026-11-15)

Fonte: seção "Reavaliação — ciclo 3" de `../avaliacao.md` e `../avaliacao-tecnica.md` (T9, T10, T12, T13).

### Feito
- **T10 (botões em 1 linha):** novo `@media (max-width: 399px)` com `.btn` usando gap de 8px, `padding-inline: 16px`, `font-size: 0.9375rem` (15px) e `letter-spacing: 0.01em`, e `.btn--large` com `padding-inline: 16px`. Abaixo de 400px, o `.cta-final` passa a ter `padding-inline: var(--space-3)`. A altura mínima (48/56px) e as cores não mudaram, então o contraste é o mesmo.
- **T13 (horários):** no hero e no rodapé, cada faixa ("Seg a Sex 08:00–18:00" e "Sáb 08:00–12:00") agora fica em `span.nowrap`. No hero, as duas ficam dentro de um `<span>` extra, porque `.hero-hours` é flex e, sem ele, cada span virava um item flex e causava rolagem horizontal em 320px.
- **T12:** o comentário da seção de contato (desatualizado, dizia "número de teste") agora diz: "Dados reais (dados-negocio.md): endereço, telefone/WhatsApp e horários".
- **T9 (logo):** abaixo de 360px, `.logo` tem `min-width: 44px` e `justify-content: center`, e o link fica com 44x44.

### Verificações (Edge headless, iframes sem barra de rolagem)
- **320px:** `scrollWidth` 320. Os botões medem 44, 50, 48, 50, 50 e 58px (large) de altura, todos em uma linha. Logo com 44x44. Cada horário fica numa linha só (o hero quebra entre as duas faixas, nunca no meio delas).
- **360px:** `scrollWidth` 360. Botões em uma linha (o large com 58px). Horários inteiros.
- **1280px:** `scrollWidth` 1280. Sem mudanças visuais (as regras novas só valem abaixo de 400px).

## Iteração 6: fotos reais no hero, na equipe e no ambiente (2026-11-15)

Fonte: `../imagens.md` (F1, F1b, F2, E1 a E3) e a regra "Fotos reais".

### Feito
- **Hero (Opção A do imagens.md):** a foto agora é fundo CSS da `.hero`, e cada largura baixa só uma imagem. Abaixo de 900px entra `hero.jpg` (`center 30% / cover`) com gradiente vertical carvão de 0,80 a 0,92. A partir de 900px entra `hero-wide.jpg` com o gradiente horizontal do imagens.md (0,94 → 0,82 aos 45% → 0,55), mais um brilho radial latão sutil atrás do brasão. A prioridade vem de dois `<link rel="preload" as="image" fetchpriority="high">` com `media` complementar (`max-width: 899px` / `min-width: 900px`), sem lazy. O brasão inline segue na coluna direita com a mesma animação; no desktop ganhou um halo `drop-shadow` carvão para separar os traços da parte clara da foto. O comentário `PENDENTE F1` foi removido.
- **Equipe:** `barbeiro-N.svg` deu lugar a `membro-N.jpg` (480x480), com `width/height=160`, `loading="lazy"`, `decoding="async"` e o `alt` "Foto ilustrativa..." do imagens.md. O recorte circular e a borda latão continuam iguais nos três cards. A classe `.avatar--alto` (`object-position: center 35%`) entra em membro-1 e membro-3. Os SVG ficam em `assets/` como fallback.
- **Sobre:** `figure.sobre-foto` com `ambiente-1.jpg` (1200x800, `aspect-ratio: 3/2`, `object-position: center 60%`, raio `--radius-lg`, borda `--color-border`, lazy, `alt` do imagens.md). No mobile a ordem é título, foto, diferenciais. No desktop usei `grid-template-areas` "head lista / foto lista": a foto fica abaixo do texto na coluna 5fr e a lista de diferenciais fica centralizada na vertical da coluna 7fr.
- **Rodapé:** o aviso agora diz "Site de demonstração — preços, equipe e depoimentos são ilustrativos (fotos de banco de imagem, CC0)." Não há crédito de autor, porque a licença CC0 não exige.

### Divergências justificadas
- **Gradiente do mobile:** usei 0,80 → 0,92 (mais escuro embaixo) em vez do 0,92 → 0,75 sugerido. No celular o brasão fica em cima e o texto embaixo, então a parte mais escura precisa ficar atrás do texto.
- **Foto no Sobre:** o design não previa imagem nessa seção. Ela foi colocada na coluna do título para não alterar a lista de diferenciais.

### Verificações (Edge headless)
- **Sem rolagem horizontal:** `scrollWidth` igual a `clientWidth` em 360 (via iframe) e em 1280.
- **Uma foto de hero por largura:** o fundo calculado é `hero.jpg` em 360 e `hero-wide.jpg` em 1280.
- **Imagens:** todas carregaram depois da rolagem (`naturalWidth > 0`). Membros com 88px em 360 e 160px em 1280; ambiente com 318x212 e 438x292; `object-position` de 35% aplicado em 1 e 3.
- **Contraste do hero:** medido em capturas com o texto oculto, sobre o pixel mais claro da área do texto (pior caso). Em 1280: texto 10,1:1, muted 5,3:1, latão (eyebrow) 5,4:1. Em 360: 10,8:1, 5,7:1 e 5,8:1. Tudo passa AA.
- **Peso das imagens:** no hero, 164 KB (mobile) ou 73 KB (desktop). As imagens lazy somam 248 KB (ambiente, equipe e depoimentos), e HTML, CSS e JS somam 61 KB. Total sem as fontes: cerca de 475 KB no mobile e 385 KB no desktop.
- Tags balanceadas (parser) e nenhum `!important`.

### Pendências
- Equipe, depoimentos e ambiente usam fotos ilustrativas (CC0): trocar por fotos reais antes de publicar.
- Opcional: uma versão menor e mais leve de `hero.jpg` (ex.: 800px em WebP), porque no mobile ela fica sob um overlay de 0,8 ou mais.

## Iteração 5: telefone real, mapa interativo e fotos de depoimentos (2026-11-14)

Fonte: `../dados-negocio.md` e `../imagens.md`.

### Feito
- **Telefone/WhatsApp real:** o número exibido no contato e no rodapé agora é "(61) 98585-7623", com `tel:+5561985857623`. Os 6 links `wa.me` apontam para `https://wa.me/5561985857623` e mantêm a mesma mensagem codificada. No JSON-LD, `telephone` passou a ser `+55-61-98585-7623`, e o comentário de pendência agora cita só `url`. Nos trechos de histórico deste CHANGELOG, o número de teste foi trocado por uma descrição, para o grep de verificação ficar limpo.
- **Mapa interativo do Google:** a `<img>` ilustrativa deu lugar a um `<iframe>` (`maps?q=-15.641449,-47.789564&z=16&output=embed`) com `title`, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"` e `allowfullscreen`. Ele fica dentro de `div.mapa`, que tem borda `--color-border`, `--radius-lg`, `overflow: hidden` e `aspect-ratio` 4/3 no celular e 16/10 a partir de 600px. O iframe tem `border: 0` e ocupa 100%. O `mapa-placeholder.svg` serve de fundo enquanto o mapa carrega. Endereço em texto e links "Abrir no Google Maps"/"Como chegar" mantidos.
- **Fotos de depoimentos:** cada card ganhou um avatar circular de 56px (`.avatar-depoimento`, borda `--color-border-strong`, `object-fit: cover`), com `width`/`height`, `loading="lazy"` e `decoding="async"`. Os textos de `alt` vêm de `imagens.md` (D1 Marcelo T., D2 André P., D3 Felipe R.). A figcaption virou linha (foto + `.author-info` com nome e "Cliente desde"). O selo "Exemplo" e o aviso da seção continuam. Não há crédito no rodapé, porque a licença é CC0.
- **Rodapé:** o aviso agora diz "Site de demonstração — preços, equipe e depoimentos são ilustrativos." (sem citar o telefone).

### Verificações
- Grep pelo número de teste em `site/`: nenhum resultado. São 6 links `wa.me/5561985857623?text=...` com a mensagem idêntica e 2 `tel:+5561985857623`. O JSON-LD é JSON válido e as tags estão balanceadas (parser).
- Edge headless, em iframe de 360px e em 1280px: `scrollWidth` igual a `clientWidth` nas duas larguras (sem rolagem horizontal). O mapa mede 318x238 (4:3) em 360 e 614x383 (16:10) em 1280. Os avatares têm 56px, são circulares e carregaram as fotos de 320x320. Os três cards mostram o selo "Exemplo" e o aviso da seção aparece.
- Rede: a URL de embed responde (redireciona para `maps/embed`, HTTP 200). No headless o iframe carrega mas fica cinza, sem os blocos do mapa (provável limitação de WebGL/GPU no headless, não um bloqueio de rede). O layout, a borda e os cantos do contêiner estão corretos. Falta conferir o mapa renderizado num navegador comum.

### Pendências
- Conferir o mapa renderizado num navegador comum.
- Fotos de depoimentos (CC0) e textos são de exemplo: substituir por clientes reais, com autorização de uso de imagem, antes de publicar.

## Iteração 4: cidade, CEP, e-mail e aviso de demonstração (2026-11-14)

Fonte: `../dados-negocio.md` (atualizado).

### Feito
- **Cidade "Sobradinho/DF":** endereço exibido "Quadra 11, Casa 40 – Sobradinho/DF – CEP 73040-114" no contato e no rodapé. O trecho "CEP 73040-114" fica em `span.nowrap`, assim o CEP não quebra no hífen em 360px. Também ajustei `<title>`, `meta description`, `og:title`/`og:description`, a descrição do JSON-LD, o eyebrow e o lead do hero, a frase do rodapé e o `alt` do mapa.
- **JSON-LD:** inclui `email` e `postalCode` "73040-114"; `addressLocality` "Sobradinho" e `addressRegion` "DF" mantidos. O comentário de pendência agora cita apenas `url` e o telefone de teste.
- **E-mail:** link `mailto:pastorsergioribeiro@gmail.com` no contato (nova `.info-line`) e no rodapé (dentro de `<address>`). Como não havia ícone de e-mail em `assets/icones/`, criei um SVG inline de envelope (24x24, `currentColor`, traço 1.5, `aria-hidden`). Nova classe `.text-link--mail` com `gap` e `overflow-wrap: anywhere`.
- **Brasão inline:** a legenda do arco inferior passou a ser "SOBRADINHO · DF", igual a `assets/brasao-hero.svg`. Coube no arco sem tocar o círculo interno nem a faixa "EST. 2026" (conferido em 360 e 1280).
- **Rodapé:** voltou o aviso visível "Site de demonstração — telefone, preços, equipe e depoimentos são ilustrativos." (`.footer-demo`, na cor de texto principal), acima de "© 2026 Barbearia Navalha. Todos os direitos reservados.".

### Verificações
- Grep em `index.html`/`styles.css`/`script.js` por "São Paulo", "SÃO PAULO", "Brasília/DF", "Palmeiras", "11 9" e "barbearianavalha": nenhum resultado (as únicas ocorrências estão no histórico deste CHANGELOG).
- O JSON-LD é JSON válido e as tags estão balanceadas (parser).
- Edge headless em 360px (via iframe de 360px, porque a janela headless tem largura mínima de ~500px) e em 1280px: hero com brasão, contato e rodapé ok, sem rolagem horizontal.

### Pendências
- Telefone/WhatsApp de teste continuava provisório (resolvido na Iteração 5). O aviso de demonstração deve sair quando entrarem número, preços, equipe e depoimentos reais.

## Iteração 3 — dados reais (2026-11-14)

Fonte única: `../dados-negocio.md`. Todos os dados fictícios de contato foram trocados em `index.html` (`script.js` e `styles.css` não tinham dados de contato).

### Feito
- **Endereço:** "Quadra 11, Casa 40 – Sobradinho, Brasília/DF" no contato e no rodapé. Também atualizei `<title>`, `meta description`, `og:title`/`og:description`, o eyebrow e o lead do hero, a frase do rodapé e o `alt` do mapa, que antes falavam em "Centro de São Paulo" ou "Rua das Palmeiras".
- **Telefone/WhatsApp:** os 6 links `wa.me` agora apontam para o número de teste (`wa.me/<número de teste>?text=...`) (a mensagem é a mesma, com `!` codificado como `%21`, igual em dados-negocio.md). Os 2 `tel:` usam o `tel:` do número de teste, exibido com DDD 61.
- **Instagram:** `https://www.instagram.com/pr.sergioribeiro/`, com o aria-label atualizado para "@pr.sergioribeiro".
- **Horários:** a tabela ficou "Segunda a sexta 08:00–18:00 / Sábado 08:00–12:00 / Domingo e feriados: Fechado". No hero aparece "Seg a Sex 08:00–18:00 · Sáb 08:00–12:00" e no rodapé a mesma linha, mais "Domingo e feriados: fechado".
- **Mapa:** o link antigo de busca por endereço deu lugar a dois links com coordenadas, "Abrir no Google Maps" (`maps?q=-15.641449,-47.789564`) e "Como chegar" (`maps/dir/?api=1&destination=...`). Os dois usam `target="_blank" rel="noopener"`, ícone externo e "(abre em nova aba)" oculto. Sem iframe.
- **JSON-LD:** atualizei `telephone`, `address` (Sobradinho/DF/BR), `openingHoursSpecification` (Seg–Sex 08–18, Sáb 08–12) e `sameAs`. Acrescentei `geo` e `hasMap`. Não há `postalCode` nem `email`, e o comentário de pendência foi atualizado.
- **Brasão inline do hero:** a legenda inferior passou de "SÃO PAULO" para "BRASÍLIA · DF".
- **Rodapé:** troquei "Site de demonstração com dados fictícios." por "Todos os direitos reservados.".

### Verificações
- Grep em `site/` por Palmeiras, São Paulo, /SP, 90000, 5511, +55-11, barbearianavalha, horários antigos, "Dom e Seg" e "fictíc": nenhum resultado real. Os únicos acertos foram falsos positivos ("%20hor" na URL do WhatsApp e "18h4" num path de SVG).
- O JSON-LD é JSON válido (`json.loads`), sem `postalCode`/`email`. As tags estão balanceadas (parser). Todos os links `http(s)` têm `target="_blank" rel="noopener"`.

### Pendências
- `../assets/mapa-placeholder.svg` (fora de `site/`) ainda tem o texto "R. das Palmeiras" desenhado e um `<title>` antigo. Como é usado via `<img>` com `alt` próprio, o `<title>` não é anunciado, mas o texto visível precisa ser ajustado pelo gerador de imagens. O mesmo vale para `../assets/brasao-hero.svg` ("SÃO PAULO"), que não é usado no site porque o brasão está inline.
- A confirmar com o usuário (ver dados-negocio.md): CEP, conjunto/setor, se o número de teste é o real e se o perfil do Instagram é o correto.

## Iteração 2 (2026-11-14): ciclo de correção 1

Base: `avaliacao.md` (ITERAR, ciclo 1) e `avaliacao-tecnica.md` (T1 a T7).

### Obrigatórias
- **T1 (bloqueante), menu mobile < 900px:** o fundo translúcido e o `backdrop-filter` saíram de `.site-header` e foram para `.site-header::before` (`position:absolute; inset:0; z-index:-1`). O header ganhou `isolation: isolate`. Com isso, o header deixa de ser containing block do `.nav` fixo. O estado `.is-scrolled` agora troca o fundo no `::before`, e a sombra continua no header. Resultado medido: o painel ocupa `top = 64` e `height = viewport - 64`, tem fundo `#141414` opaco e os 5 links ficam visíveis e clicáveis (56px cada, `elementFromPoint` confirma que nada fica por cima).
- **T2, monograma < 360px:** em `@media (max-width: 359px)`, `.logo` fica com `flex: none` e `.logo img` com `height: 32px; width: auto`. O `<source>` ganhou `width="32" height="32"`. Medido em 320px: 32x32, centralizado no header de 64px.
- **T5, serviços em >= 900px:** a grade virou flex com `flex-wrap: wrap; justify-content: center`. Os cards são 100% no mobile, metade a partir de 600px e um terço (máx. 340px) a partir de 900px. Medido em 1280px: 3 cards na 1ª linha e 2 centralizados na 2ª (margens de 272px dos dois lados).
  - Divergência menor: entre 600 e 899px, o 5º card (sozinho na 3ª linha) também fica centralizado, em vez de alinhado à esquerda. É consequência do flex centralizado e mantém a simetria pedida no design 4.3.

### Recomendadas
- **T3, Open Graph:** `og:type`, `og:locale=pt_BR`, `og:site_name`, `og:title`, `og:description` e `twitter:card=summary`. `og:image` e `og:url` ficam comentados como PENDENTE, porque exigem PNG/JPG 1200x630 e URL absoluta, que dependem do domínio.
- **T6 (parte 1), JSON-LD `BarberShop`:** nome, descrição, telefone, `priceRange` (R$ 20 - R$ 85, dos preços do site), endereço, `openingHoursSpecification` (Ter-Sex 9h-20h, Sáb 8h-18h) e Instagram em `sameAs`, todos com os dados fictícios do briefing e um comentário de pendência. Sem `url` e sem canonical.

### Adiados (como decidido na avaliação)
- T4 (caminhos `../assets/`, resolver ao preparar a publicação), canonical (depende de domínio) e T7 (fontes locais).

### Verificações (Edge headless)
- Medições via iframes de 320, 360 e 768px e janela de 1280px. Não há rolagem horizontal em nenhuma largura (`scrollWidth <= clientWidth`).
- Menu aberto em 320, 360 e 768px: o painel tem 636px de altura num viewport de 700px e os 5 links aparecem. Ao abrir, o foco vai para "Serviços". Com o foco num elemento de `main`, ele volta para o botão (foco contido). Esc fecha, ajusta `aria-expanded=false` e devolve o foco ao botão, que reabre o menu. Ordem de Tab no header aberto: logo, os 5 links, Agendar, Fechar menu. O Tab foi conferido pela ordem do DOM e pelo foco programático, porque o modo headless sem CDP não envia tecla Tab real.
- Capturas: menu aberto em 320 e 360px, topo em 320px (monograma 32px) e página em 1280px (serviços centralizados).
- HTML com tags balanceadas, JSON-LD válido (`json.loads`) e nenhum `!important`.

## Iteração 1 (2026-11-14): primeira implementação

### Feito
- `index.html` com uma página só, na ordem do design: pular para o conteúdo, header fixo, hero, serviços, sobre, equipe, depoimentos, horários e localização, CTA final e rodapé. Um único `h1`, um `h2` por seção, `h3` nos cards, landmarks e `nav aria-label="Principal"`.
- `styles.css`, mobile first, com os tokens do `design.md` 2.7 no `:root`. Breakpoints de 600, 900 e 1200px. Sem `!important`.
- `script.js` (com defer, sem dependências): header muda ao rolar 8px; menu mobile com `aria-expanded`/`aria-label` dinâmicos, Esc fecha e devolve o foco, clique num link fecha, o scroll do body fica bloqueado e o menu fecha ao passar para o desktop; `aria-current` na seção atual; revelação ao rolar com IntersectionObserver.
- Os 6 links de agendamento usam exatamente o link wa.me da seção 3 do design. Todos com `target="_blank" rel="noopener"` e "(abre em nova aba)" em texto oculto.
- Depoimentos marcados como exemplo: aviso visível, badge "Exemplo" em cada card e o comentário `<!-- EXEMPLO -->`.
- Tabela de horários com `caption` e `th scope`. Endereço em `<address>`. Mapa como imagem com `alt`, sem iframe.

### Decisões sobre os assets
- **Os assets são referenciados por caminho relativo `../assets/...`** (não foram copiados para `site/`). Assim há uma única fonte, sem duplicação. Para publicar, suba a pasta do projeto inteira (`site/` e `assets/`) ou copie `assets/` e ajuste os caminhos.
- **Inline no HTML:** todos os ícones (para herdar o `currentColor`) e o brasão do hero (para a animação de `stroke-dashoffset`). Usei `<img>` no logo, no monograma, no divisor, nos avatares, no mapa e no favicon.
- Brasão inline: o `stroke`/`fill` `#D4A94F` virou `currentColor` (a cor vem de `.hero-media { color: var(--color-accent) }`, o mesmo valor). Coloquei `pathLength="1"` em cada traço para a animação dispensar o JS. Os IDs `arc-top`/`arc-bot` viraram `brasao-arc-top`/`brasao-arc-bot`, e o `<title>` foi ligado por `aria-labelledby`. Os textos em Georgia fazem fade-in depois do desenho.
- Logo: abaixo de 360px, um `<picture>` troca para `monograma.svg`, como prevê a seção 6 do design.

### Divergências justificadas do design
- **Padding superior do hero:** usei `48px` em vez de `calc(var(--header-h) + 48px)`. O header é `sticky`, então já ocupa espaço no fluxo, e somar a altura dele dobraria o respiro.
- **Logo no header:** ela pode encolher (`flex: 0 1 160px`) para garantir que logo, "Agendar" e hambúrguer caibam juntos em 360px. Na prática fica com cerca de 160x32, e no desktop com 180x36 (36px de altura, como no design).
- **"Agendar" no header:** em vez de `aria-label`, o texto visível é "Agendar" e o complemento " pelo WhatsApp (abre em nova aba)" fica em texto oculto. Isso mantém o critério label-in-name.
- **Sem JS:** o hambúrguer some e a nav vira uma linha de links abaixo do header (mobile), assim a navegação nunca fica inacessível. A classe `js` é adicionada por um script inline de uma linha no `<head>`.
- **Animação do hero:** como as animações de entrada são feitas em CSS, só rodam com `prefers-reduced-motion: no-preference` e terminam visíveis, o conteúdo não depende do JS.

### Verificações
- Estrutura das tags balanceada (parser), sem IDs duplicados, hierarquia de títulos correta, os 8 arquivos de `../assets/` referenciados existem.
- Render com o Edge headless: em 360px não há rolagem horizontal (`scrollWidth = 360`) e o header cabe numa linha. Em 1280px, o layout tem 2 colunas no hero e a nav está visível.

### Pendências
- [PLACEHOLDER: fotos F1 (hero), F2 (ambiente) e F3 (equipe)]: há comentários `PENDENTE` no HTML. Por enquanto o brasão e os avatares SVG ficam no lugar.
- [PLACEHOLDER: dados reais]: endereço, telefone, Instagram, preços, nomes da equipe e depoimentos são fictícios.
- Não testei em leitor de tela real nem fiz medições de Lighthouse.
