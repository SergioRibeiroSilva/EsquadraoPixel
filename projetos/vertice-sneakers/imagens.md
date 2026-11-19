# Imagens: Vértice Sneakers

> Etapa 4 (gerador-imagens), 18/11/2026. Entrada: `design.md`, seção 6, e `pesquisa.md` ("Fotos candidatas").
> Todos os arquivos ficam em `site/assets/`. No HTML, use os caminhos `assets/...`.
> Fotos reais de bancos com licença livre para uso comercial: **Unsplash** (Unsplash License, todas gratuitas, **nenhuma Unsplash+**) e **Pexels** (Pexels License). Abri cada foto e conferi: **nenhum logotipo de marca legível** em todos os recortes entregues. Os nomes dos produtos devem ser fictícios.
> Processamento feito com Pillow: recorte, redimensionamento LANCZOS, **WebP q80 (method 6) + JPEG q80 progressivo** em cada tamanho. Todos os 109 arquivos abrem como imagem válida, nas dimensões indicadas. Peso total: cerca de 5,9 MB, somando JPEG e WebP (o navegador baixa só um formato por imagem).
> Data de download de todas as fotos: 18/11/2026.

## Observação sobre os recortes do hero (composição)
As fotos originais do hero são verticais. Para gerar o 16:9 com o **produto no terço direito** e a metade esquerda escura para o texto, e o 9:16 com o produto no terço superior, usei uma **extensão de fundo**: as bordas da própria foto são esticadas, desfocadas e escurecidas, com uma transição suave. O tênis e o cenário imediato não foram alterados. O mesmo recurso foi usado em `colecao-performance`, `produto-02`, `produto-03` e `produto-07`, para completar a proporção pedida.

## 1. Hero: 4 fotos distintas (`site/assets/fotos/`)

Cada foto tem 4 arquivos × 2 formatos: `-1920` (1920x1080), `-1280` (1280x720), `-900x1600` e `-600x1067`, em `.webp` e `.jpg`.

| Arquivo-base | Conteúdo | Peso WebP (1920 / 1280 / 900x1600 / 600x1067) | Banco · autor · página | `object-position` | `alt` sugerido | Status |
|---|---|---|---|---|---|---|
| `hero-01-couro` | Par de tênis de couro branco com recortes em camurça grafite e forro caramelo, sobre banqueta de madeira, fundo preto, luz lateral | 29 / 16 / 32 / 18 KB (meta ≤ 250 / ≤ 120 atendida) | Unsplash · Kimia Zarifi (@kimzifi) · https://unsplash.com/photos/a-pair-of-white-shoes-sitting-on-top-of-a-wooden-stool-1NXsoyQaP5M | desktop `70% 50%` · celular `50% 30%` | "Par de tênis de couro branco com recortes grafite, sobre banqueta de madeira em fundo escuro" | pronto |
| `hero-02-edicoes` | Par de tênis de cano alto em couro preto fosco, costura aparente, sobre superfície de concreto grafite | 38 / 19 / 37 / 17 KB | Unsplash · Zac Wolff (@zacwolff) · https://unsplash.com/photos/a-pair-of-black-shoes-sitting-on-top-of-a-table-BDlI_FuKqms | desktop `70% 50%` · celular `50% 30%` | "Par de tênis de cano alto em couro preto fosco sobre superfície de concreto escuro" | pronto |
| `hero-03-performance` | Tênis esportivo branco em malha técnica, suspenso no ar com o cadarço solto, fundo preto | 48 / 26 / 56 / 32 KB | Pexels · Pranay Patel · https://www.pexels.com/photo/product-shot-of-a-sports-shoe-23491456/ (orig. 1808x2571) | desktop `72% 50%` · celular `50% 35%` | "Tênis esportivo branco em malha técnica, suspenso no ar, em fundo preto" | pronto |
| `hero-04-boutique` | Par de tênis de couro claro com sola de borracha cor de mel, exposto em pedestal espelhado dentro de uma loja com luz baixa | 44 / 24 / 31 / 18 KB | Pexels · Luis Quintero (@jibarofoto) · https://www.pexels.com/photo/shoes-on-display-13536939/ (orig. 4000x6000) | desktop `68% 50%` · celular `50% 32%` | "Par de tênis de couro claro exposto em pedestal espelhado na boutique" | pronto |

- As 4 fotos são de tênis, ângulos e composições diferentes, e nenhuma é reaproveitada em outra seção (a `og-image` é derivada do hero 1, conforme o pedido).
- `hero-01`: o design pedia "detalhe dourado". A foto tem forro caramelo e a madeira quente, o que conversa com o champanhe. A candidata H1 da pesquisa (Jordan Hou) foi **descartada**: tem um emblema dourado de marca (Li-Ning) em destaque.
- Todos os recortes de um mesmo slide têm as mesmas dimensões intrínsecas (16:9 e 9:16), como pede o CLS.

## 2. Coleções (`site/assets/fotos/`)

| Arquivo | Tamanhos (WebP / JPEG) | Conteúdo | Banco · autor · página | `alt` sugerido | Status |
|---|---|---|---|---|---|
| `colecao-couro-1200x1500`, `-800x1000` | 94 / 139 KB; 54 / 73 KB | Close de calçado em couro marrom granulado com cadarço encerado, luz quente, fundo escuro (é um sapato social: mostra o couro e o ofício) | Unsplash · rupixen (@rupixen) · https://unsplash.com/photos/pair-of-brown-leather-shoes-r6yad26A_qc | "Detalhe de couro marrom granulado com cadarço encerado" | pronto |
| `colecao-performance-1600x900`, `-800x450` | 83 / 122 KB; 24 / 35 KB | Solado técnico vazado (estrutura em treliça), visto de baixo, sobre tecido escuro, meia-luz | Unsplash · Đào Hiếu (@hieu101193) · https://unsplash.com/photos/a-pair-of-shoes-sitting-on-top-of-a-carpet-L9J3Fgi0hUs | "Solado técnico vazado de um tênis, sobre tecido escuro" | pronto |
| `colecao-edicoes-1200x900`, `-800x600` | 62 / 110 KB; 34 / 56 KB | Par de tênis de couro vermelho intenso com cadarço branco, fundo preto | Pexels · Ahimsa - OM (@ahimsa) · https://www.pexels.com/photo/vibrant-red-sneakers-on-black-background-31688978/ | "Par de tênis de couro vermelho com cadarço branco, em fundo preto" | pronto |
| `colecao-classicos-1200x900`, `-800x600` | 151 / 192 KB; 65 / 90 KB | Parede de tênis brancos minimalistas enfileirados, luz suave | Pexels · Dmitry Alexandrovich · https://www.pexels.com/photo/white-sneakers-display-in-shoe-store-34003822/ | "Fileiras de tênis brancos minimalistas expostos na parede" | pronto (WebP 1200 com 151 KB, dentro da meta de ≤ 160) |

- Pedido do design não seguido à risca: em `colecao-edicoes` não há um "low-top estampado". As candidatas estampadas tinham logo (Nike, Louis Vuitton). Usei o par vermelho, que tem visual de edição especial.

## 3. Produtos: 8 fotos (`site/assets/fotos/`, 4:5)

Cada produto: `produto-0N-1000x1250` e `produto-0N-600x750`, em `.webp` e `.jpg`. WebP 600 entre 10 e 21 KB (meta ≤ 90 atendida).

| Arquivo | Coleção | Descrição para o redator (cor, material aparente) | Banco · autor · página | `alt` sugerido | Status |
|---|---|---|---|---|---|
| `produto-01` | Couro artesanal | Low-top em couro granulado azul-marinho, sola branca, cadarço branco, forro caramelo | Pexels · saeed karimi · https://www.pexels.com/photo/trainer-in-midair-by-wall-20755674/ | "Tênis de couro azul-marinho com sola branca" | pronto |
| `produto-02` | Couro artesanal | Par de chukka/cano médio em camurça (nobuck) caramelo, cadarço rosado encerado, sola escura; fundo preto. Fica no topo do quadro (`object-position: 50% 0`) | Pexels · Moussa Idrissi · https://www.pexels.com/photo/close-up-of-stylish-brown-suede-shoes-29999842/ | "Par de calçados de camurça caramelo em fundo escuro" | pronto |
| `produto-03` | Performance premium | Tênis de corrida em malha técnica preta, sola preta texturizada, cadarço solto, fundo cinza-claro | Unsplash · Nikolai Chernichenko (@perfectcoding) · https://unsplash.com/photos/unpaired-black-low-top-sneaker-wodKMXpXsMA | "Tênis de corrida em malha preta, suspenso no ar" | pronto |
| `produto-04` | Performance premium | Par de tênis de corrida em malha grafite, entressola branca espessa e inserto verde translúcido no calcanhar, pendurado pelos cadarços | Pexels · Rohit Sharma · https://www.pexels.com/photo/hanging-modern-sports-sneakers-against-gray-wall-28375816/ | "Par de tênis de corrida grafite com sola branca, pendurado na parede" | pronto |
| `produto-05` | Edições limitadas | Low-top color-block: couro branco e painéis em nobuck areia, aba laranja no calcanhar, sola branca, sobre pedras em fundo laranja | Unsplash · Mojtaba Fahiminia (@fahiminia) · https://unsplash.com/photos/a-pair-of-shoes-sitting-on-top-of-a-rock-q7lul0zB0Lg | "Tênis de couro branco e areia equilibrado sobre pedras" | pronto |
| `produto-06` | Edições limitadas | Par de tênis em couro granulado verde-água, biqueira em camurça perfurada, sola cor creme, suspensos no ar | Pexels · José Martin Segura Benites · https://www.pexels.com/photo/zapatillas-verde-27503504/ | "Par de tênis de couro verde-água com sola creme" | pronto (ver obs. 1) |
| `produto-07` | Clássicos atemporais | Low-top em couro liso preto, sola plataforma branco-acinzentada, cadarço cinza, aba branca no calcanhar | Unsplash · Ghavam Cheraghali (@ghavix) · https://unsplash.com/photos/black-leather-sneaker-with-white-sole-RCMqaBKPLqY | "Tênis de couro preto com sola branca" | pronto |
| `produto-08` | Clássicos atemporais | Par de sapatênis em camurça azul com costura tipo mocassim, sola cinza | Pexels · Valentin Ivantsov · https://www.pexels.com/photo/stylish-blue-suede-casual-shoes-for-men-40263252/ | "Par de sapatênis de camurça azul" | pronto |

- **Uniformidade:** os produtos 01, 03, 04, 06, 07 e 08 têm fundo neutro claro ou cinza (o branco do 06 e do 08 foi escurecido em 6% para não ofuscar no tema escuro). O 02 tem fundo preto e o 05 tem fundo laranja. Não encontrei 8 fotos de tênis **sem logo** com o mesmo fundo escuro. As séries de estúdio uniformes que achei tinham marca legível na lingueta (Bigioni, Calvin Klein, Nike) e foram descartadas.
- Obs. 1: o `produto-06` tem uma pequena plaqueta metálica na lateral com uma gravação. A gravação **não fica legível** no recorte de 600 px e é discreta no de 1000 px. Se o avaliador preferir, troque esta foto.
- Tentei apagar os nomes de marca das fotos da série Bigioni com retoque local, mas o resultado ficou artificial e alteraria o produto. Por isso essas fotos foram descartadas, sem retoque.

## 4. Ambiente, ofício e loja (`site/assets/fotos/`)

| Arquivo | Tamanhos · peso (WebP / JPEG) | Conteúdo | Banco · autor · página | `alt` sugerido | Status |
|---|---|---|---|---|---|
| `sobre-artesao-1200x1500`, `-800x1000` (4:5) e `-1200x900` (4:3, celular) | 45/109; 26/54; 37/79 KB | Mãos de artesão costurando à mão uma peça de couro escuro, luz quente lateral | Pexels · shoreline vehicles · https://www.pexels.com/photo/skilled-artisan-crafting-leather-goods-by-hand-30902508/ | "Mãos de artesão costurando couro à mão" | pronto |
| `faixa-loja-2400x1029`, `-1600x686` (21:9) e `-1200x900` (4:3) · **trocada no ciclo 1** | 51/139; 28/73; 26/67 KB | Interior de loja de tênis: tênis brancos de lona pendurados em cabides numa prateleira de madeira, plaquinhas de tamanho "22cm" e "22.5cm", fundo escuro e luz baixa e quente. Sem logos (as etiquetas pequenas de composição são ilegíveis no tamanho de uso). Original 4896x3264; recorte 21:9 = faixa central (y 387 a 2486), 4:3 = largura 27 a 4379 | Pexels · H&CO (@hngstrm) · https://www.pexels.com/photo/pair-of-white-low-top-sneakers-lot-2547007/ · Pexels License · baixada em 19/11/2026 | `alt=""` (decorativa, design 3.7). Se deixar de ser decorativa: "Tênis brancos de lona pendurados em prateleira de madeira, com plaquinhas de tamanho, sob luz baixa" | pronto. `object-position: 50% 50%` (padrão; os dois recortes já saem enquadrados) |
| `visite-interior-1200x900`, `-800x600` · **trocada no ciclo 1** | 105/178; 47/82 KB | Parede de tábuas de madeira escura com prateleiras: em cima um par de tênis brancos de sola vermelha, embaixo um par cinza-oliva de sola branca, luz quente de vitrine. Sem logos. Original 6000x4000; recorte 4:3 com largura 153 a 5486 (altura toda) | Pexels · Adrian Frentescu (@frentescuphotography) · https://www.pexels.com/photo/sneakers-displayed-on-a-wooden-wall-13807630/ · Pexels License · baixada em 19/11/2026 | "Prateleiras de madeira escura com pares de tênis expostos sob luz quente de vitrine" | pronto. `object-position: 50% 50%` |
| `cta-fundo-1920x1080`, `-1280x720` (16:9) e `-900x1200` (3:4) | 34/110; 18/50; 18/48 KB | Close de agulha e linha atravessando couro preto, quase todo em sombra; o centro tem pouco detalhe (recebe o texto) | Pexels · cottonbro studio · https://www.pexels.com/photo/pieces-of-leather-being-sewn-together-6660959/ | `alt=""` (decorativa, design 3.12) | pronto |

- Obs. 2 (ciclo 1): `faixa-loja` (antes Elist Nguyen, loja de talheres/cerâmica) e `visite-interior` (antes Tahir Xəlfəquliyev, sapatos sociais) foram trocadas por interiores com tênis, distintas entre si, do hero 4 (pedestal espelhado) e de `colecao-classicos` (close de biqueiras). Descartadas nesta busca: Unsplash `JIVDJ5xZrWA` ("miu miu" legível), `I8-T4lMCA6k` (monograma Louis Vuitton nos tênis e no baú), `joHasPcobwg`/`O8_sTTWaJ14` (Jordan), `Mw9JbxuQPjI`/`v1UDAHfmdZ8` (loja Nike, "JUST DO IT"), `YtKrSQOLubY` (P&B, logo no piso), `OcngxKY6n_k` (Jordan), `_quIwjzkI3I` (três listras); Pexels 12252411 (Nike), 2331069 (texto impresso no calcanhar).

## 5. Depoimentos (`site/assets/depoimentos/`): **substituir antes de publicar**

| Arquivo | Tamanho · peso (WebP / JPEG) | Conteúdo | Banco · autor · página | `alt` sugerido | Status |
|---|---|---|---|---|---|
| `depoimento-01` | 400x400 · 5 / 10 KB | Homem adulto sorrindo, paletó escuro, fundo preto | Pexels · Artem Smoldarev · https://www.pexels.com/photo/a-man-in-black-suit-smiling-7408085/ | "Foto ilustrativa de cliente" (ou `alt=""` se o nome aparecer ao lado) | **substituir antes de publicar** |
| `depoimento-02` | 400x400 · 8 / 14 KB | Mulher adulta, gola alta escura, fundo cinza-escuro | Pexels · Oliver Dohrn · https://www.pexels.com/photo/studio-portrait-of-thoughtful-woman-in-turtleneck-31530222/ | "Foto ilustrativa de cliente" | **substituir antes de publicar** |
| `depoimento-03` | 400x400 · 8 / 15 KB | Homem de 30 a 45 anos, jaqueta, fundo escuro neutro | Pexels · Rene Terp · https://www.pexels.com/photo/portrait-of-a-man-16684688/ | "Foto ilustrativa de cliente" | **substituir antes de publicar** |

São pessoas reais em depoimentos inventados. O card mantém o aviso "Depoimentos ilustrativos", o `alt` diz "foto ilustrativa" e as fotos devem ser trocadas por clientes reais, com autorização. Recorte 1:1 com o rosto centralizado. Exibir em 56 px, redondo.

## 6. SVG e social (`site/assets/`)

| Arquivo | Especificação | Peso | `alt` / uso | Status |
|---|---|---|---|---|
| `logo-vertice.svg` | Wordmark "VÉRTICE" geométrico desenhado em traços (paths, sem fonte), cor `#F2EEE6`, traço 2.4, espaçamento de ~0,28em. Símbolo de ápice em dois traços de 1.5 em `#C9A96E`. `viewBox="0 0 158 34"` (proporção ~4,6:1, um pouco menos alongado que os ~6:1 pedidos, para o acento do É caber) | 0,7 KB | `alt="Vértice Sneakers"` | pronto |
| `logo-vertice-escuro.svg` | Mesma forma, wordmark `#0E0E10` e símbolo `#7A5A2B`, para a faixa osso | 0,7 KB | idem | pronto |
| `favicon.svg` | Ápice champanhe (traço 2.4, para ficar legível em 16-32 px) sobre quadrado `#0E0E10`, 32x32 | 0,3 KB | `<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">` | pronto |
| `og-image.jpg` | 1200x630, recorte do `hero-01-couro` com véu à esquerda, o `logo-vertice.svg` e um filete champanhe de 64 px (renderizado no Chrome headless) | 36 KB | `og:image` | pronto |

Os 3 SVGs foram validados como XML (`xml.dom.minidom`) e conferidos visualmente no navegador. Não têm fontes externas, scripts nem imagens embutidas. Só usam cores da paleta.

## 7. Uso sugerido no HTML (para o desenvolvedor)
- Hero slide 1: `<picture>` com `<source media="(max-width: 767px)" type="image/webp" srcset="assets/fotos/hero-01-couro-600x1067.webp 600w, assets/fotos/hero-01-couro-900x1600.webp 900w">`, um `<source media="(max-width: 767px)">` em JPEG equivalente, `<source type="image/webp" srcset="...-1280.webp 1280w, ...-1920.webp 1920w">` e `<img src="assets/fotos/hero-01-couro-1920.jpg" srcset="...-1280.jpg 1280w, ...-1920.jpg 1920w" sizes="100vw" width="1920" height="1080" fetchpriority="high" decoding="async">`. Slides 2 a 4 iguais, com `loading="lazy"`.
- Produtos: `srcset` 600w/1000w, `width="1000" height="1250"`, `object-fit: cover`.
- Faixa da loja: `<picture>` com o 4:3 abaixo de 768 px e o 21:9 acima.

## 8. Licenças e créditos
- **Unsplash License** (https://unsplash.com/license): uso gratuito, comercial ou não, sem precisar de permissão nem de crédito. Não é permitido vender a foto sem modificação nem montar um serviço concorrente. Fotos usadas: hero-01, hero-02, colecao-couro, colecao-performance, produto-03, produto-05, produto-07.
- **Pexels License** (https://www.pexels.com/license/): uso gratuito, sem crédito obrigatório. É proibido sugerir que pessoas ou marcas da foto endossam o produto, e vender a foto sem modificação. Por isso não há logos visíveis, e os retratos são marcados como ilustrativos. Fotos usadas: hero-03, hero-04, colecao-edicoes, colecao-classicos, produtos 01, 02, 04, 06 e 08, sobre-artesao, faixa-loja, visite-interior, cta-fundo e depoimentos.
- Nenhuma foto é CC BY, então não há crédito obrigatório. Crédito opcional sugerido para o rodapé (design 3.13): "Fotos: Unsplash (Kimia Zarifi, Zac Wolff, rupixen, Đào Hiếu, Nikolai Chernichenko, Mojtaba Fahiminia, Ghavam Cheraghali) e Pexels (Pranay Patel, Luis Quintero, Ahimsa - OM, Dmitry Alexandrovich, saeed karimi, Moussa Idrissi, Rohit Sharma, José Martin Segura Benites, Valentin Ivantsov, shoreline vehicles, H&CO, Adrian Frentescu, cottonbro studio, Artem Smoldarev, Oliver Dohrn, Rene Terp)."

## 9. Candidatas da pesquisa descartadas (logo ou marca em destaque)
H1 Jordan Hou (emblema Li-Ning), H2/H3/H4 Ashis Sarker (monograma e nome Louis Vuitton), H5 e `4GPdcyXH7hs` Bennett (Nike), H6 hamza01nsr (Nike: etiqueta e "AIR" visíveis), H7 howard-senton (três listras), `GliJrDnMqO4` (estrela Converse), Pexels 21070422 (nome Saint Laurent impresso), 4271584 (Converse), 39559877 (design icônico de marca), série Bigioni 27503500/502/505 (nome na lingueta), Unsplash `2BjiamqPUtU`/`7JqxMmIN5sw` (Calvin Klein).

## Pendências
- Nenhuma foto obrigatória ficou faltando, e `prompts-imagens.md` não foi necessário.
- Antes de publicar, trocar os 3 retratos de depoimento por fotos de clientes reais, com autorização. Também é recomendável trocar as fotos de produto pelas fotos reais do estoque.
