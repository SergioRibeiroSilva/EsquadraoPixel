# Imagens: Padaria Trigo Doce

> Etapa 3 (gerador-imagens), 2026-11-15. Entrada: `design.md`, seção 6 (F1 a F21 e S1 a S9).
> **Todos os assets ficam dentro de `site/assets/`** (fotos em `site/assets/img/`, SVGs em `site/assets/svg/`). No HTML, use caminhos relativos `assets/img/...` e `assets/svg/...`. Assim o site funciona publicando só a pasta `site/`.
> Fotos reais de bancos públicos com licença livre para uso comercial: Unsplash (Unsplash License) e Wikimedia Commons (CC0, CC BY 2.0, CC BY 3.0 BR e CC BY 4.0). Nenhuma foto é CC BY-SA, NC ou ND. Recorte e compressão feitos com Pillow: JPEG progressivo, qualidade de 67 a 82. Todas as fotos foram verificadas (abrem como JPEG válido e têm as dimensões indicadas).

## 1. Fotos (`site/assets/img/`)

| # | Arquivo | Uso | Dimensões · peso | Banco · autor · página da foto | Licença | Original | `alt` sugerido | Status |
|---|---|---|---|---|---|---|---|---|
| F1 | `hero-paes.jpg` | Hero (4:5), `srcset` 1400w | 1120×1400 · 215 KB | Unsplash · Diego Arenas de Rodrigo · https://unsplash.com/photos/a-rustic-loaf-of-sourdough-bread-on-a-wooden-board-guFjW-4kjCc | Unsplash License | 4800×6000 | "Pão artesanal de casca dourada sobre tábua de madeira, com ramos de trigo" | pronto (ver obs. 1) |
| F1b | `hero-paes-800.jpg` | Hero, `srcset` 800w | 800×1000 · 120 KB | (mesma foto do F1) | Unsplash License | n/a | idem F1 | pronto |
| F1c | `hero-paes-480.jpg`, `hero-paes-640.jpg` | Hero, `srcset` 480w e 640w (JPEG de reserva) | 480×600 · 59 KB; 640×800 · 97 KB | (mesma foto do F1, redimensionada com Pillow, LANCZOS, JPEG q78 progressivo) | Unsplash License | n/a | idem F1 | pronto (ciclo 2, desenvolvedor) |
| F1d | `hero-paes-480.webp`, `hero-paes-640.webp`, `hero-paes-800.webp`, `hero-paes.webp` | Hero ≥768px, `<source type="image/webp">` 480w a 1120w | 39 KB; 62 KB; 91 KB; 160 KB | (mesma foto do F1, WebP q68, method 6) | Unsplash License | n/a | idem F1 | pronto (ciclo 2, desenvolvedor) |
| F1e | `hero-paes-faixa-{480,640,720,960}.webp` e `.jpg` | Hero <768px (direção de arte 16:10 via `<source media>`) | 480×300 a 960×600 · WebP 24/40/50/82 KB, JPEG 32/54/68/113 KB | (recorte 16:10 do F1, centrado a 55% da altura; WebP q68, JPEG q76) | Unsplash License | n/a | idem F1 | pronto (ciclo 2, desenvolvedor) |
| F2 | `produto-pao-natural.jpg` | Destaques: Pão de fermentação natural (4:3) | 800×600 · 79 KB | Unsplash · Vicky Ng · https://unsplash.com/photos/bread-on-brown-wooden-table-yL9qjDDmmMU | Unsplash License | 3454×4605 | "Pão de fermentação natural cortado, com miolo aerado" | pronto |
| F3 | `produto-pao-frances.jpg` | Destaques: Pão francês | 800×600 · 76 KB | Wikimedia Commons · Roosewelt Pinheiro/ABr (Agência Brasil) · https://commons.wikimedia.org/wiki/File:Pao_frances.jpg | **CC BY 3.0 BR** (crédito obrigatório) | 1654×2497 | "Pães franceses fresquinhos e dourados" | pronto |
| F4 | `produto-sonho.jpg` | Destaques: Sonho de creme | 800×600 · 53 KB | Unsplash · Nick Fewings · https://unsplash.com/photos/a-powdered-doughnut-with-a-bite-taken-out-of-it-kbAleG71EUc | Unsplash License | 6000×4000 | "Sonho recheado com creme e polvilhado com açúcar" | pronto |
| F5 | `produto-brigadeiro.jpg` | Destaques: Brigadeiro gourmet | 800×600 · 66 KB | Unsplash · Ediglecio Lêla · https://unsplash.com/photos/three-chocolate-cupcakes-on-brown-wooden-table-jGh5Qj4jQ-s | Unsplash License | 3000×4000 | "Dois brigadeiros gourmet com lascas de chocolate em forminhas" | pronto |
| F6 | `produto-bolo-cenoura.jpg` | Destaques: Bolo de cenoura com chocolate | 800×600 · 78 KB | Unsplash · Amanda Kariella · https://unsplash.com/photos/a-bundt-cake-with-chocolate-icing-on-a-plate-44OrVdYKni0 | Unsplash License | 3746×2997 | "Bolo de cenoura recebendo calda de chocolate" | pronto |
| F7 | `produto-bolo-fuba.jpg` | Destaques: Fatia de bolo de fubá | 800×600 · 65 KB | Wikimedia Commons · Wilfredor · https://commons.wikimedia.org/wiki/File:Bolo_de_Fub%C3%A1.jpg | CC0 1.0 | 6885×4821 | "Bolo de fubá caseiro sobre mesa de madeira" | pronto (ver obs. 2) |
| F8 | `produto-coxinha.jpg` | Destaques: Coxinha | 800×600 · 54 KB | Wikimedia Commons · Romerito Pontes · https://commons.wikimedia.org/wiki/File:(2014-11-22)_La_Donosti_-_Agudos_-_Coxinha_de_Leitoa_Romerito_Pontes_(15870107515).jpg | **CC BY 2.0** (crédito obrigatório) | 3000×2000 | "Coxinhas douradas servidas em papel" | pronto |
| F9 | `produto-pao-de-queijo.jpg` | Destaques: Pão de queijo | 800×600 · 77 KB | Wikimedia Commons · Horacio Cambeiro · https://commons.wikimedia.org/wiki/File:Pan_de_queso_(p%C3%A3o_de_queijo)_con_cebollitas_de_verdeo_de_la_Provincia_de_Misiones_(Argentina).jpg | **CC BY 4.0** (crédito obrigatório) | 4000×3000 | "Pães de queijo quentinhos em uma cesta" | pronto (ver obs. 3) |
| F10 | `encomenda-bolo.jpg` | Encomendas: Bolos personalizados (3:2) | 900×600 · 78 KB | Unsplash · Tuva Mathilde Løland · https://unsplash.com/photos/strawberry-cake-4rfVL3NNGrA | Unsplash License | 3528×4732 | "Bolo de aniversário de chocolate decorado com frutas vermelhas" | pronto |
| F11 | `encomenda-salgados.jpg` | Encomendas: Kits de salgados | 900×600 · 94 KB | Wikimedia Commons · Horacio Cambeiro · https://commons.wikimedia.org/wiki/File:Empanadas_y_Coxinha_(hechas_en_%22La_Misionera%22_en_Puerto_Iguaz%C3%BA,_Argentina).jpg | **CC BY 4.0** (crédito obrigatório) | 4000×3000 | "Cesta com salgados variados, como coxinha e esfirras" | pronto (peso acima de 80 KB, ver obs. 4) |
| F12 | `encomenda-cesta.jpg` | Encomendas: Cestas de café da manhã | 900×600 · 80 KB | Unsplash · Phil Desforges · https://unsplash.com/photos/a-table-topped-with-pastries-next-to-a-basket-of-bread-S7Kp0-vwIp8 | Unsplash License | 3884×4855 | "Cesta de café da manhã com pães, doces, ovos e suco" | pronto |
| F13 | `sobre-maos-massa.jpg` | Sobre, foto principal (4:5) | 900×1125 · 117 KB | Unsplash · Skyler Ewing · https://unsplash.com/photos/a-person-kneading-a-ball-of-dough-on-top-of-a-table-2uiZDQYTHBM | Unsplash License | 5233×7850 | "Mãos sovando massa de pão sobre bancada enfarinhada" | pronto |
| F14 | `ambiente-loja.jpg` | Sobre, foto secundária (1:1, ≥768px) | 600×600 · 69 KB | Unsplash · Ines Iachelini · https://unsplash.com/photos/assortment-of-fresh-baked-breads-in-wicker-baskets-va95n2gZ43E | Unsplash License | 4157×2772 | "Prateleiras da padaria com pães artesanais em cestos de vime" | pronto |
| F15 | `equipe-padeiro.jpg` | Equipe: Seu Antônio (1:1) | 480×480 · 29 KB | Unsplash · Rawan Yasser · https://unsplash.com/photos/a-man-leans-on-a-counter-in-his-shop-1rW3RIxLu7E | Unsplash License | 3685×5528 | "Foto ilustrativa de padeiro apoiado no balcão, ao lado de pães" | **substituir antes de publicar** |
| F16 | `equipe-confeiteira.jpg` | Equipe: Marina (1:1) | 480×480 · 22 KB | Unsplash · Arsham Baseri · https://unsplash.com/photos/baker-placing-fresh-bread-rolls-on-a-tray-RQdXS861Tyc | Unsplash License | 4000×5000 | "Foto ilustrativa de confeiteira de dólmã branco e touca" | **substituir antes de publicar** |
| F17 | `equipe-atendente.jpg` | Equipe: Lucas (1:1) | 480×480 · 24 KB | Unsplash · Cemrecan Yurtman · https://unsplash.com/photos/a-man-standing-behind-a-counter-filled-with-food-LiLddquRiNU | Unsplash License | 6240×4160 | "Foto ilustrativa de atendente de avental atrás do balcão" | **substituir antes de publicar** |
| F18 | `depoimento-1.jpg` | Avatar: Carla M. (1:1) | 160×160 · 5,5 KB | Unsplash · Hícaro de Castro · https://unsplash.com/photos/a-person-smiling-for-the-camera-RNjQBvQH_Js | Unsplash License | 6000×4000 | `alt=""` (o nome aparece ao lado, conforme design 3.7) | **substituir antes de publicar** |
| F19 | `depoimento-2.jpg` | Avatar: Roberto S. (1:1) | 160×160 · 4,8 KB | Unsplash · Daria Trofimova · https://unsplash.com/photos/a-man-smiling-for-the-camera-HIik8xvKkcI | Unsplash License | 5472×3664 | `alt=""` | **substituir antes de publicar** |
| F20 | `depoimento-3.jpg` | Avatar: Juliana P. (1:1) | 160×160 · 4,9 KB | Unsplash · Luis Villasmil · https://unsplash.com/photos/smiling-woman-wearing-blue-necklace-6qf1uljGpU4 | Unsplash License | 3872×2592 | `alt=""` | **substituir antes de publicar** |
| F21 | `og-image.jpg` | Meta `og:image` | 1200×630 · 120 KB | Composição do gerador: recorte horizontal do F1 + painel creme com `logo.svg`, a frase "Feito com carinho, todo dia.", "Encomendas pelo WhatsApp" e o selo. Renderizado no Chrome headless | Unsplash License (foto F1) | n/a | não se aplica | pronto |

Data de download de todas as fotos: 2026-11-15. Todas as fotos do Unsplash são gratuitas (servidas por `images.unsplash.com`, nenhuma é Unsplash+), e cada página foi conferida com o aviso "Free to use under the Unsplash License".

### Licenças e créditos
- **Unsplash License** (https://unsplash.com/license): uso gratuito, comercial ou não, sem precisar de permissão nem de crédito. Não é permitido vender a foto sem modificação nem montar um serviço concorrente.
- **CC0 1.0** (F7): domínio público, sem nenhuma obrigação.
- **CC BY 2.0 / CC BY 3.0 BR / CC BY 4.0** (F3, F8, F9, F11): uso comercial permitido, mas **o crédito é obrigatório**. O rodapé já remete a `imagens.md`. Como esse arquivo não é publicado com a pasta `site/`, **inclua no rodapé (ou numa linha de créditos) o texto abaixo**:

  > Fotos: Unsplash (diversos autores); Roosewelt Pinheiro/Agência Brasil (CC BY 3.0 BR); Romerito Pontes (CC BY 2.0); Horacio Cambeiro (CC BY 4.0) e Wilfredor (CC0), via Wikimedia Commons.

  Opcionalmente, ligue os nomes às páginas das fotos na tabela e às licenças (https://creativecommons.org/licenses/by/2.0/, https://creativecommons.org/licenses/by/3.0/br/, https://creativecommons.org/licenses/by/4.0/). As fotos CC BY foram recortadas e redimensionadas, e isso pode ser indicado como "adaptadas".
- **Pessoas retratadas** (F15 a F20): são pessoas reais e desconhecidas, fotografadas por terceiros. Equipe e depoimentos são **ilustrativos**. Mantenha a legenda "Nomes e fotos ilustrativos", o selo "Exemplo" nos depoimentos e o `alt` "Foto ilustrativa..." na equipe. Antes de publicar, troque pelas fotos reais da equipe e de clientes (com autorização por escrito).

### Observações para o desenvolvedor
1. **Hero (F1):** pão redondo sobre tábua escura, com linho e espigas de trigo. O canto inferior esquerdo tem madeira escura e é o lugar do selo. Use `object-fit: cover; object-position: center 55%`. Peso de 215 KB no 1400w (o design pede até 180 KB): a textura da casca e da madeira não comprime bem sem perder nitidez. O 800w (120 KB) atende o mobile. Exemplo:
   ```html
   <img src="assets/img/hero-paes-800.jpg"
        srcset="assets/img/hero-paes-800.jpg 800w, assets/img/hero-paes.jpg 1120w"
        sizes="(min-width: 1024px) 50vw, 100vw"
        width="1120" height="1400" fetchpriority="high" decoding="async"
        alt="Pão artesanal de casca dourada sobre tábua de madeira, com ramos de trigo">
   ```
   **Ciclo 2:** o snippet acima foi substituído por um `<picture>` com WebP/JPEG e recorte 16:10 no celular (F1c a F1e); veja `site/index.html`.
   O design cita "1400w" para o arquivo maior: ele tem 1120 px de largura (1400 é a altura), então declare `1120w` no `srcset`.
2. **Bolo de fubá (F7):** é um bolo inteiro de fubá (com furo central), sem xícara de café. Por isso o `alt` foi ajustado. Não há foto livre de "fatia de fubá com café" com qualidade suficiente. Se quiser, mude o nome do card para "Bolo de fubá" ou mantenha "Fatia de bolo de fubá" (a foto continua coerente).
3. **Pão de queijo (F9):** é pão de queijo com cebolinha verde (feito na região de Misiones, Argentina, vizinha do Brasil), em cesta de vime. Visualmente é o produto certo.
4. **Salgados (F11):** cesta com coxinha, esfirras/empanadas e pastéis assados sobre guardanapo xadrez. O fundo detalhado deixa o arquivo com 94 KB (meta de 80 KB). Se precisar, sirva com `loading="lazy"` (já previsto).
5. **Equipe:** as três fotos são de ensaios diferentes (luz quente no padeiro e no atendente, luz clara na confeiteira). No recorte circular com borda creme, o conjunto fica coerente. Enquadramento já centralizado no rosto: `object-fit: cover; object-position: center`. A confeiteira olha para baixo, para a bandeja (pose de trabalho).
6. **Avatares:** 160×160 para exibição a 56 px (cobre telas de 2x e 3x).
7. **Destaques e encomendas:** todos já estão na proporção final (4:3 e 3:2). Use `width`/`height` reais (800×600 e 900×600), `loading="lazy"` e `object-fit: cover`.

## 2. SVGs (`site/assets/svg/`)

Todos gerados pelo time. XML validado. Sem scripts, sem fontes externas (os textos estão em path, desenhados a partir da Fraunces, licença OFL) e sem imagens embutidas. As cores usam só tokens da paleta (`#3B2A1E`, `#6B4F3A`, `#A0482A`, `#D9A441`, `#E6D5BC`, `#F6E7C8`, `#FBF5EC`) ou `currentColor`.

| # | Arquivo | Uso | viewBox · peso | Acessibilidade | Status |
|---|---|---|---|---|---|
| S1 | `svg/logo.svg` | Cabeçalho | 0 0 195 48 · 23 KB | `role="img"` + `<title>` "Padaria Trigo Doce". Dentro do link para `#inicio`: `alt=""` no `<img>` e `aria-label="Padaria Trigo Doce, início"` no link | pronto |
| S2 | `svg/logo-claro.svg` | Rodapé (fundo café) | 0 0 195 48 · 23 KB | Igual ao S1. Símbolo mel com espiga café, wordmark creme | pronto |
| S3 | `svg/favicon.svg` | Favicon | 0 0 32 32 · 0,8 KB | `<link rel="icon" type="image/svg+xml" href="assets/svg/favicon.svg">` | pronto |
| S4 | `svg/icones.svg` (sprite) + `svg/icones/*.svg` (16 arquivos) | Ícones da interface | 0 0 24 24 · sprite 5,2 KB | Todos `aria-hidden="true"`. IDs do sprite: `i-whatsapp`, `i-relogio`, `i-alfinete`, `i-telefone`, `i-instagram`, `i-lista`, `i-balao`, `i-calendario`, `i-espiga`, `i-ingrediente`, `i-forno`, `i-menu`, `i-fechar`, `i-seta-direita`, `i-estrela` (preenchida), `i-aspas` (preenchida) | usado inline no `index.html`; `icones.svg` e `icones/` movidos para `projetos/padaria-trigo-doce/fontes-svg/` no ciclo 2 (fora de `site/`) |
| S5 | `svg/selo-fermentacao.svg` | Selo do hero | 0 0 120 120 · 28 KB | `aria-hidden="true"` no arquivo. No `<img>`, use `alt=""`. Texto circular "FERMENTAÇÃO NATURAL · DESDE 1998 ·" em café sobre mel, com espiga no centro. Ciclo 2: texto regerado em curvas a partir da Fraunces (opsz 24, wght 700, SOFT 100, licença OFL) com fontTools, precisão de 1 casa decimal (26 KB) | pronto (ver obs. B) |
| S6 | `svg/trigo-ramo.svg` | Decoração do hero e do CTA final | 0 0 120 240 · 1,4 KB | Decorativo, `stroke="currentColor"` | usado inline (`#d-ramo`); arquivo-fonte movido para `projetos/padaria-trigo-doce/fontes-svg/` no ciclo 2 |
| S7 | `svg/divisor-onda.svg` | Entre seções | 0 0 1440 40 · 0,2 KB | Decorativo, `preserveAspectRatio="none"`, `fill="currentColor"` | usado inline; arquivo-fonte movido para `fontes-svg/` no ciclo 2 |
| S8 | `svg/espiga-marcador.svg` | Marcador de lista nos cards de encomenda | 0 0 16 16 · 0,8 KB | Terracota fixo. Funciona com `list-style-image: url(assets/svg/espiga-marcador.svg)` ou em `::before` | pronto |
| S9 | `svg/fachada-ilustracao.svg` | Horários (no lugar do mapa) | 0 0 440 360 · 9,7 KB | Decorativo: `alt=""`. Fachada com toldo listrado terracota/creme, placa "Trigo Doce", vitrine com pães e doces, porta com janela em arco e vaso | pronto |

### Observações sobre os SVGs
- **A. `currentColor`:** os ícones (S4), o ramo de trigo (S6) e a onda (S7) só herdam a cor do CSS quando estão **inline** no HTML. Em `<img>` ou `background-image`, o `currentColor` vira preto. Recomendações:
  - Ícones: cole o conteúdo de `icones.svg` logo após `<body>` (ele já tem `style="display:none"`) e use `<svg class="icone" aria-hidden="true"><use href="#i-whatsapp"/></svg>`. **Não use `<use href="assets/svg/icones.svg#i-whatsapp">` externo**, porque o Chrome bloqueia sprites externos quando a página é aberta por duplo clique (`file://`).
  - Ramo e onda: inline, ou `mask-image: url(assets/svg/divisor-onda.svg)` com `background-color` no token desejado (com `mask-size: 100% 100%` para a onda).
- **B. Peso do selo e dos logos (23 a 28 KB):** ficam acima da meta de 20 KB porque o texto foi convertido em curvas (garante a Fraunces sem carregar a fonte). Com gzip/brotli, que todo servidor estático aplica, cada um cai para cerca de 8 a 10 KB. O selo pode girar com CSS, mas só uma volta de até 5 s (ciclo 2: `animation: girar 4s ... 1`, dentro de `@media (prefers-reduced-motion: no-preference)`, por causa do WCAG 2.2.2); o centro do giro é o centro do viewBox.
- **C. Logo em telas estreitas:** a proporção é de cerca de 4:1. Com 40 px de altura, ocupa 162 px de largura. Abaixo de 360 px, se faltar espaço, use só o favicon (símbolo) como logo.

## 3. Pendências
- Nenhuma lacuna de foto. Todos os 21 itens fotográficos e os 9 SVGs estão prontos. Não foi preciso criar `prompts-imagens.md`.
- Antes de publicar: substituir F15 a F20 (equipe e depoimentos) por fotos reais com autorização e incluir no rodapé os créditos CC BY (seção 1, "Licenças e créditos").
