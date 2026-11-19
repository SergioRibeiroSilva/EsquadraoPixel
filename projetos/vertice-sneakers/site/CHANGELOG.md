# CHANGELOG: Vértice Sneakers

## Etapa 5, primeira versão (18/11/2026)

### Feito
- `index.html`, `styles.css` e `script.js` (HTML/CSS/JS puros, mobile first), com os tokens do `design.md` 2.5 no `:root` e as seções na ordem do design: cabeçalho fixo, hero carrossel, coleções (mosaico), produtos com filtro, diferenciais, a boutique (faixa osso com foto sangrada), faixa de ambiente, experiência (linha do tempo + formulário sticky), depoimentos escalonados, dúvidas (`details`), visite, CTA final, rodapé e barra fixa no celular.
- **Hero carrossel com 4 slides, no padrão APG (variante com abas):** a ordem no DOM é Pausar → Anterior → Próximo → `tablist` → slides. Slides com `role="tabpanel"`, `aria-roledescription="slide"` e "N de 4", e a região com `aria-roledescription="carrossel"` e `aria-label="Destaques"`. As abas têm tabindex itinerante e respondem a ← → Home End. As setas não movem o foco. Os slides inativos ficam com `inert` e `visibility: hidden`. O wrapper usa `aria-live` off quando gira e polite quando está parado. O botão muda o rótulo ("Pausar apresentação"/"Retomar apresentação"), sem `aria-pressed`. Contador "01 / 04" com `aria-hidden`. A barra de progresso champanhe é controlada por rAF (7 s) e fica cheia quando parada. O carrossel para no hover (só mouse) e no foco de teclado, que não volta sozinho. Também para com a aba do navegador oculta e no swipe (Pointer Events, > 50 px; o arraste não dispara o clique no CTA). Crossfade de 700 ms, sem Ken Burns.
- **Imagens do hero:** `<picture>` com recorte 9:16 (≤767 px) e 16:9, em WebP + JPEG. O slide 1 tem `fetchpriority="high"`, não é lazy e tem `preload` por recorte (com `media`). Os slides 2 a 4 são `loading="lazy"`, e o JS pré-carrega o slide seguinte. O `object-position` de cada foto segue o `imagens.md`.
- **Sem JS:** só o slide 1 aparece (os demais vêm com `hidden`), os controles, os chips e o formulário ficam ocultos, e aparece o botão direto "Agendar pelo WhatsApp". No celular, o hambúrguer é trocado pelo botão "Agendar atendimento".
- O formulário monta a mensagem `wa-form`, valida o nome (vazio ou com menos de 2 letras) com `aria-invalid` e `aria-describedby`, e mostra um link de recurso se o pop-up for bloqueado.
- Os CTAs do hero e os tiles com `data-filtro` ativam o chip correspondente. Há anúncio da contagem em `aria-live`.
- JSON-LD `ShoeStore` sem `geo` e sem `aggregateRating`. Metatags OG com URL da vitrine.
- Créditos das fotos no rodapé (lista sugerida no `imagens.md` 8), junto com o aviso de site de demonstração.
- O dia atual da tabela de horários aparece em champanhe (JS).
- `logo-vertice-escuro.svg` não era carregado pela página e foi movido para `projetos/vertice-sneakers/fontes-svg/`.

### Divergências do design (com motivo)
- **Autoplay ligado também no celular** (o design pedia começar parado abaixo de 768 px). A decisão é do orquestrador, porque o usuário pediu o carrossel. O autoplay só fica desligado com `prefers-reduced-motion: reduce`.
- Alt ajustados à foto real (o `conteudo.md` autoriza esse ajuste):
  - hero 1: couro branco com recortes grafite, sobre banqueta;
  - hero 2: cano alto em couro preto fosco;
  - hero 3: malha técnica suspensa;
  - hero 4: pedestal espelhado;
  - tile Edições limitadas: par de couro vermelho;
  - tiles Couro, Performance e Clássicos: seguem o `imagens.md`;
  - visite-interior: estantes com calçados de couro preto (são sapatos sociais).
- Os alt dos produtos seguem o formato "[nome], tênis de ..." e descrevem a cor real de cada foto.
- Os tiles de coleção são links com `aria-label` "Explorar a coleção X" e o título tem `role="heading" aria-level="3"`, para não colocar `h3` como filho direto de um link de bloco.

### Pendências
- **Material × foto dos produtos (para o redator):** RESOLVIDA na revisão abaixo. Registro original: o texto de alguns cards não combinava com a foto, e trocar a ordem dentro da coleção não resolvia.
  - Noturno 01: "couro envernizado preto", mas a foto é branca e areia.
  - Mosaico Low: "jacquard estampado", mas a foto é de couro verde-água.
  - Linha Branca: "couro napa branco", mas a foto é de couro preto.
  - Cânone Court: "tom creme", mas a foto é de camurça azul.
- Fotos de depoimento e de produtos: substituir por fotos reais antes de publicar.
- Todos os dados de contato, produtos e políticas são fictícios.

## Revisão de texto dos produtos 05 a 08 (18/11/2026)

Aplicadas as revisões do `conteudo.md` (seção "Revisões"), para o material e o nome combinarem com a foto:
- Produto 05: "Noturno 01" passa a "Duna 01". Material, alt, `aria-label` e mensagem do link `wa.me` atualizados.
- Produto 06 (Mosaico Low): material e alt atualizados.
- Produto 07: "Linha Branca" passa a "Ônix Plataforma". Material, alt, `aria-label` e mensagem do link `wa.me` (`%C3%94nix%20Plataforma`) atualizados.
- Produto 08 (Cânone Court): material e alt atualizados.
- Os nomes antigos não aparecem em `data-`, JSON-LD nem `script.js`. A busca por "Noturno" e "Linha Branca" em `site/` só encontra este CHANGELOG.

## Etapa 9, ciclo 1: correções da avaliação (19/11/2026)

### Obrigatórias
- **T1/V1, menu cortado após rolar:** o `backdrop-filter` saiu do `<header>` e foi para `.cabecalho::before` (com `isolation: isolate` no cabeçalho). O filtro tornava o cabeçalho o bloco de contenção do painel fixo. Medido no Edge sem janela: o painel fica com 736 px em 360x800 e 960 px em 768x1024, com rolagem 0, 100 e 2500, e mostra os 6 links, o WhatsApp e o endereço.
- **T2, abas do carrossel:** saiu o `aria-hidden` de `.aba__num`. Nome acessível: "01 Couro artesanal" etc.
- **T3, Instagram:** saiu o `aria-label`. Depois de "@verticesneakers" entrou `<span class="sr-only"> no Instagram (abre em nova aba)</span>`.
- **T4/V2, rádios do Período:** `.radio input` recebeu `min-height: 0; padding: 0; flex: none`. Medido: 20x20 px.
- **T5, h1 permanente:** `<h1 class="sr-only">Vértice Sneakers, boutique de tênis de alto padrão</h1>` no início da `section.hero`, fora dos slides. O título do slide 1 passou a `h2`, como os outros. O texto do h1 é o mesmo do `og:title`. Divergência do design.md:200, que punha o h1 no slide 1; registrada aqui por acessibilidade.
- **Fotos trocadas (faixa-loja e visite-interior, mesmos nomes):** o alt da Visite agora é "Prateleiras de madeira escura com pares de tênis expostos sob luz quente de vitrine". A faixa continua com `alt=""`. Nos créditos do rodapé saíram Elist Nguyen e Tahir Xəlfəquliyev e entraram H&CO e Adrian Frentescu (Pexels), como no `imagens.md` 8.

### Recomendadas
- **V4, acento solto na Cormorant:** a causa é o desenho da fonte. O circunflexo é alto e estreito, com topo em 730/1000 e altura-x de 395. A fonte não tem recurso OpenType para baixá-lo (só calt, ccmp, liga, lnum, tnum e frações), e o `line-height` não muda a posição dele. Solução: a família "Vertice Acentos" (`@font-face` com `unicode-range` só para á à â ã é ê í ó ô õ ú) aponta para recortes da EB Garamond, que tem licença OFL e também é uma Garamond, em `assets/fontes/` (3 arquivos WOFF de cerca de 2 KB, nos pesos 400, 500 e 400 itálico). Os recortes usam `size-adjust: 94%` para casar com a altura-x da Cormorant, e a família entra primeiro em `--ff-titulo`. As outras letras continuam em Cormorant Garamond. Comparado em captura: "Tênis", "ateliê" e "você" ficam com o acento junto da letra, sem diferença visível de peso. É uma divergência do design (uma fonte de apoio só para os acentos), registrada aqui.
- **V5, tablet em retrato:** o recorte 9:16 vale também para `(max-width: 1023px) and (orientation: portrait)`, nas `<source>` do hero e no `preload`. Nessa faixa, o slide usa a composição do celular: texto na base, véu de baixo para cima e `object-position` do celular. O tênis fica acima do texto.
- **V6, logo sobre o slide 3 no celular:** o degradê do cabeçalho transparente ficou mais forte (de .7→0 para .85→.4→0).
- **T6:** `<link rel="canonical">` com a URL da vitrine.
- **T7:** gerado o `assets/logo-vertice.png` (512x512, fundo #0E0E10), agora usado no `logo` do JSON-LD.
- **T8:** `.rodape ul a` recebeu `min-width: 44px`, e `.contatos a` passou a `inline-flex` com `min-height: 44px`.
- **T9, sem JS:** abaixo de 1024 px aparece o link "Menu" (44 px), que leva à navegação do rodapé (`#rodape-nav`). Com JS, ele fica oculto.

### Pendências
- Continuam as do ciclo anterior: dados fictícios, fotos de depoimentos de banco e fotos de produtos de banco.
- A EB Garamond (SIL OFL 1.1) é usada em recortes próprios. A licença permite isso, mas, se o projeto exigir, inclua o texto da OFL junto ao código-fonte.
