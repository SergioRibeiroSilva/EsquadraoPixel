# Imagens: Rosa Bordô | bonecas de pano

> Gerado em 2026-11-17 pelo `gerador-imagens` a partir de `design.md` (seção 6) e `pesquisa.md`.
> Data do download de todas as fotos: **2026-11-17**. Cada foto foi baixada, aberta e conferida visualmente (nenhuma traz gato, logo, marca d'água, rosto identificável nem boneca quebrada ou assustadora).
>
> **STATUS DE TODAS AS FOTOS: SUBSTITUIR PELAS FOTOS REAIS DO @arosabordo ANTES DE PUBLICAR.** As fotos são de bancos públicos e mostram bonecas de outros artesãos. Servem só de ilustração. No HTML, manter `<!-- FOTOS DE BANCO: substituir pelas fotos do @arosabordo -->` e, nos `alt`, deixar claro que é foto ilustrativa quando for o caso.

## 1. Pasta e formatos

- Fotos: `assets/fotos/` (WebP como formato principal, JPEG progressivo como reserva).
- SVG e ícones do site: `assets/` (raiz).
- Nenhuma lacuna: não foi preciso criar `assets/prompts-imagens.md`.
- Ferramentas usadas: Python + Pillow (recorte, redimensionamento, WebP/JPEG, composição) e fontTools (logo convertido em path).

## 2. Carrossel do hero (4 slides, todos com 1920×1080 e 1080×1350)

Opção entregue para fotos de origem em retrato (design 3.2.5): **composição pronta em 1920×1080** (slides 2 e 4). A foto 4:5 fica emoldurada à direita (rotação de -2°, pesponto creme interno, sombra e "retalho" rosa a 30%) sobre fundo bordô-900 `#4A1024` com trama de linho. Assim **os 4 slides são paisagem com as mesmas dimensões intrínsecas** e usam o tratamento normal de paisagem. Nos slides 2 e 4, a metade esquerda já é bordô sólido, então o véu pode ser leve (ou o mesmo dos outros, sem prejuízo). A classe `.slide--retrato` deixa de ser necessária.

Arquivos de cada slide (`<base>` = `hero-1-colecao`, `hero-2-personalizada`, `hero-3-feito-a-mao`, `hero-4-presente`):
- Paisagem (`media="(min-width: 768px)"`): `<base>-1920.webp`, `-1440.webp`, `-1024.webp`, `-768.webp` + reserva `<base>-1920.jpg` e `<base>-1024.jpg`.
- Celular 4:5 (`media="(max-width: 767px)"`): `<base>-m-1080.webp`, `-m-720.webp`, `-m-540.webp` + reserva `<base>-m-1080.jpg`.
- Atributos de `<img>`: `width="1920" height="1080"` (o `<source>` do celular com `width="1080" height="1350"`).

| Slide | Foto de origem | Peso WebP 1920 / 1440 / 1024 / 768 (KB) | Peso WebP celular 1080 / 720 / 540 (KB) | `--foco` sugerido | Alt sugerido |
|---|---|---|---|---|---|
| 1 Coleção (LCP) | Pexels 27782862 (paisagem) | 192 / 128 / 82 / 56 | 162 / 91 / 59 | paisagem `50% 50%` (o recorte já empurra as bonecas para a direita); celular `50% 40%` | Bonecas de pano artesanais com roupas coloridas e bordadas, lado a lado sobre uma toalha de tecido bordado (foto ilustrativa) |
| 2 Personalizadas | Pexels 38286866 (retrato → composição) | 79 / 42 / 26 / 18 | 78 / 45 / 32 | paisagem `50% 50%`; celular `50% 25%` | Boneca de pano de cabelo cacheado de lã, laço vermelho e vestido xadrez vermelho e branco (foto ilustrativa) |
| 3 Feito à mão | Pexels 6876052 (paisagem) | 57 / 38 / 24 / 16 | 45 / 24 / 17 | paisagem `50% 50%`; celular `55% 40%` | Mãos de uma artesã costurando um tecido branco com agulha e linha (foto ilustrativa) |
| 4 Presente | Pexels 11808264 (retrato → composição) | 71 / 40 / 24 / 15 | 126 / 48 / 31 | paisagem `50% 50%`; celular `50% 25%` | Boneca de pano de linho cru, com touquinha e olhos bordados, sentada numa cadeirinha de palha (foto ilustrativa) |

JPEG de reserva: slide 1: 304 KB (1920), 113 KB (1024), 238 KB (celular 1080); slide 2: 298 / 75 / 166; slide 3: 141 / 52 / 106; slide 4: 300 / 73 / 204. Todos os WebP ficaram dentro dos limites do design (6.1).

Observações para o desenvolvedor e o inspetor:
- **Slide 1:** as bonecas ocupam de ~15% a 90% da largura, então parte delas fica sob o véu escuro da esquerda (é o esperado). Ao fundo, no alto, há um quadro desfocado com texto ilegível. Não é marca.
- **Slide 3:** aparecem só as mãos e a blusa da artesã (sem rosto). O assunto fica no centro (de 20% a 90%), não só na metade direita.
- **Slide 4 (trocado em 2026-11-17 a pedido do orquestrador):** a ratinha de pano deu lugar a uma boneca humana de pano (Pexels 11808264), sem repetir a foto do `modelo-5`. Os nomes, tamanhos e formatos dos arquivos não mudaram. Na foto aparecem uma chupeta de madeira e uma manta perto da boneca: são só objetos de cena, e o texto do slide não deve sugerir uso no berço nem segurança para bebês.

## 3. Demais fotos

| Arquivo(s) | Uso | Dimensões | Peso WebP / JPG (KB) | Alt sugerido |
|---|---|---|---|---|
| `modelo-1-800.webp/.jpg`, `modelo-1-480.*` | Coleção, card 1 | 800×1000 e 480×600 | 57 / 108 · 32 / 50 | Boneca de pano de cabelo ruivo de lã e vestido estampado em preto e branco (foto ilustrativa) |
| `modelo-2-*` | Coleção, card 2 | idem | 28 / 66 · 13 / 26 | Boneca de pano de cabelo azul-turquesa de lã, casaquinho rosa e vestido de bolinhas (foto ilustrativa) |
| `modelo-3-*` | Coleção, card 3 | idem | 71 / 119 · 33 / 49 | Boneca de pano de maria-chiquinha, rostinho bordado e vestido amarelo, deitada sobre a grama (foto ilustrativa) |
| `modelo-4-*` | Coleção, card 4 | idem | 68 / 113 · 33 / 49 | Boneca de pano de cabelo vermelho de lã, jardineira pink e meias listradas, sentada numa prateleira (foto ilustrativa) |
| `modelo-5-*` | Coleção, card 5 | idem | 116 / 131 · 54 / 67 | Boneca de pano de cabelo longo, boina jeans e sapatinhos vermelhos, segurando uma bonequinha (foto ilustrativa) |
| `modelo-6-*` | Coleção, card 6 | idem | 59 / 108 · 26 / 45 | Coelhinhas de tecido com jardineiras em tons pastel (foto ilustrativa) |
| `sobre-maos-costurando-960.*`, `-640.*` | Sobre (foto principal 4:5) | 960×1200 e 640×800 | 46 / 111 · 25 / 52 | Mãos amarrando linha numa pequena boneca de tecido, sobre a mesa de trabalho (foto ilustrativa) |
| `sobre-detalhe-bordado-600.*` | Sobre (foto menor 1:1) | 600×600 | 64 / 77 | Decorativa: `alt=""` (close de mãos bordando com linha laranja) |
| `personalize-detalhe-800.*` | Personalize (opcional, 4:5) | 800×1000 | 56 / 103 | Bonecas de pano com tons de pele, cabelos e roupinhas diferentes (foto ilustrativa) |
| `instagram-1..6-600.*` | Faixa do Instagram (CTA final) | 600×600 | 56/53 · 24/46 · 30/50 · 39/57 · 31/47 · 16/33 | Se a faixa for um único link, as fotos podem ter `alt=""` e o link leva `aria-label="Ver mais no Instagram @arosabordo (abre em nova aba)"` |
| `og-image.jpg` | `og:image` | 1200×630 | 115 (JPG) | Não se aplica (meta tag). Faixa bordô de 40% com "Rosa Bordô" em Fraunces itálico creme e pesponto rosa |

- `modelo-5` (botões no lugar dos olhos) e `modelo-4` (olhos aplicados) **não** mostram o padrão "olhos bordados" que o site promete para bebês. Como são fotos de exemplo, tudo bem, mas é mais um motivo para trocar pelas fotos da artesã.
- `modelo-4` vem do Pixabay, que só libera 1280 px sem login. O recorte 4:5 tinha 682×853 e foi ampliado ~17% para 800×1000, com leve perda de nitidez. A versão de 480×600 está perfeita.
- `modelo-N-detalhe.jpg`: **não entregue**, porque não há close de nenhum desses modelos (design 6.2: "se não houver, não entregar").
- Instagram: 1 bonecas mexicanas de pano; 2 tesoura, tecido florido e boneca de retalho; 3 bonecas de cabelo de lã colorido; 4 bonecas de retalho estampado e novelos; 5 ratinha de linho (close); 6 mãos costurando tecido cinza.

## 4. Créditos e licenças (todas as fotos)

Licença Pexels: uso gratuito, inclusive comercial, sem atribuição obrigatória. Proíbe sugerir endosso de pessoas identificáveis e usar a foto como marca. https://www.pexels.com/license/
Licença Pixabay (Pixabay Content License): uso gratuito, inclusive comercial, sem atribuição obrigatória. https://pixabay.com/service/license-summary/
Nenhuma foto CC BY foi usada, então o crédito no rodapé não é obrigatório. Sugestão (do design): "Fotos ilustrativas: Pexels e Pixabay; créditos em imagens.md".

| Foto de origem | Arquivos gerados | Autor | Banco / licença | Tamanho original (baixado) | Status |
|---|---|---|---|---|---|
| https://www.pexels.com/photo/a-group-of-dolls-on-a-table-with-a-tablecloth-27782862/ | `hero-1-colecao-*`, `og-image.jpg` | Mariya Klyachko | Pexels License | 6537×4358 (baixada em 3400×2267) | substituir antes de publicar |
| https://www.pexels.com/photo/handcrafted-fabric-dolls-with-checkered-dress-38286866/ | `hero-2-personalizada-*` | Enio Engenheiro | Pexels License | retrato (baixada em 2400×3600) | substituir antes de publicar |
| https://www.pexels.com/photo/photo-of-a-woman-s-hands-sewing-6876052/ | `hero-3-feito-a-mao-*` | Sara Puig Sanz | Pexels License | 5184×3456 (baixada em 3400×2267) | substituir antes de publicar |
| https://www.pexels.com/photo/doll-with-a-pacifier-on-a-childrens-chair-11808264/ | `hero-4-presente-*` | Mathias Reding (@matreding) | Pexels License | 4160×6240 (baixada em 2400×3600) | substituir antes de publicar |
| https://www.pexels.com/photo/charming-handmade-doll-display-with-dark-hair-38286876/ | `modelo-1-*` | Enio Engenheiro | Pexels License | 3456×5184 (baixada em 2400×3600) | substituir antes de publicar |
| https://pixabay.com/photos/doll-handmade-toy-hair-fashion-3361741/ | `modelo-2-*` | ErikaWittlieb | Pixabay Content License | 3527×3917 (baixada em 1153×1280) | substituir antes de publicar |
| https://pixabay.com/photos/doll-baby-doll-rag-doll-baby-toy-1550807/ | `modelo-3-*` | jennifervara | Pixabay Content License | 3456×4608 (baixada em 960×1280) | substituir antes de publicar |
| https://pixabay.com/photos/doll-rag-doll-toys-299992/ | `modelo-4-*` | onzesuus | Pixabay Content License | 3456×2304 (baixada em 1280×853) | substituir antes de publicar |
| https://www.pexels.com/photo/handmade-doll-with-miniature-companion-35343461/ | `modelo-5-*` | bahar (@bahar-406314994) | Pexels License | 4993×6659 (baixada em 2400×3201) | substituir antes de publicar |
| https://www.pexels.com/photo/charming-handmade-fabric-rabbit-dolls-in-pastel-dresses-38238529/ | `modelo-6-*` | Zeynep Shoots | Pexels License | 4000×6000 (baixada em 2400×3600) | substituir antes de publicar |
| https://www.pexels.com/photo/two-hands-holding-threads-27782858/ | `sobre-maos-costurando-*` | Mariya Klyachko | Pexels License | baixada em 2400×1600 | substituir antes de publicar |
| https://www.pexels.com/photo/traditional-embroidery-with-colorful-patterns-29796875/ | `sobre-detalhe-bordado-*` | danghai | Pexels License | baixada em 2400×1884 | substituir antes de publicar |
| https://www.pexels.com/photo/colorful-handmade-fabric-dolls-collection-38286862/ | `personalize-detalhe-*` | Enio Engenheiro | Pexels License | baixada em 2400×3600 | substituir antes de publicar |
| https://www.pexels.com/photo/dolls-26955420/ | `instagram-1-*` | Andrea NM | Pexels License | baixada em 2400×1600 | substituir antes de publicar |
| https://www.pexels.com/photo/close-up-of-scissors-and-figurine-14364797/ | `instagram-2-*` | nana (@nana-307954832) | Pexels License | baixada em 2400×3624 | substituir antes de publicar |
| https://www.pexels.com/photo/colorful-handmade-dolls-display-at-market-38286864/ | `instagram-3-*` | Enio Engenheiro | Pexels License | baixada em 2400×3600 | substituir antes de publicar |
| https://www.pexels.com/photo/colorful-handcrafted-dolls-on-display-29301848/ | `instagram-4-*` | Sergei Starostin (@sejio402) | Pexels License | baixada em 2400×1600 | substituir antes de publicar |
| https://www.pexels.com/photo/stuffed-toy-mouse-9870763/ | `instagram-5-*` | Ron Lach | Pexels License | baixada em 2400×3600 | substituir antes de publicar |
| https://www.pexels.com/photo/close-up-of-woman-hands-sewing-11482124/ | `instagram-6-*` | Gabriel Frank | Pexels License | baixada em 2400×1600 | substituir antes de publicar |

Fotos do Unsplash indicadas na pesquisa (5CvJwtQsMnU, 92bwSf5NecY, xssNT5VjsyM): **não usadas**, porque o download direto foi bloqueado. Foram trocadas por equivalentes do Pexels. Substituída: Pexels 29955402 (ratinha de tecido, de Alena Evseenko), que era o slide 4 e não é mais usada. Descartadas na conferência visual: Pexels 33043840 (garrafa com logo visível), 7456865 e 7456861 (bichos de tricô, não pano), 6141328 (bonecas de resina), 31640251 (boneca industrial).

## 5. SVG e ícones (gerados, prontos)

Todos foram validados como XML, renderizados no Edge sem janela e usam só as cores da paleta (`#6E1A37`, `#4A1024`, `#E8A3B5`, `#FBF5EF`, ou `currentColor`). Não usam fontes externas nem scripts.

| Arquivo | Uso | Tamanho | Alt / acessibilidade | Status |
|---|---|---|---|---|
| `logo-rosa-bordo.svg` | Cabeçalho | viewBox 220×48, 11 KB | `<title>Rosa Bordô</title>`, `role="img"`; no `<img>`, `alt="Rosa Bordô"` | pronto |
| `logo-rosa-bordo-claro.svg` | Rodapé (fundo bordô) | idem | idem | pronto |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (180×180) | Favicon | 64×64 / 32 / 180 | n/a | pronto |
| `icones.svg` (sprite com `<symbol>`) | Diferenciais, cards, rodapé, controles | viewBox 24×24, traço 1.75, `currentColor`, 5 KB | `aria-hidden="true"` no `<svg>` de uso | pronto |
| `textura-linho.svg` | Fundo de Personalize e de slides (repetir em 64px) | 64×64 | decorativo (CSS `background`) | pronto |
| `caminho-pesponto-h.svg` | Como encomendar (desktop) | viewBox 1000×60, `preserveAspectRatio="none"` | `aria-hidden` | pronto |
| `ornamento-agulha.svg` | Fim do caminho de passos | 40×40 | `aria-hidden` | pronto |
| `ornamento-coracao-linha.svg` | Assinatura no Sobre, CTA final | 48×48 | `aria-hidden` | pronto |
| `divisor-pesponto.svg` (extra) | Divisor entre blocos (tracejado bordô + florzinha rosa) | 240×24 | `aria-hidden` | pronto |
| `moldura-pesponto.svg` (extra) | Pesponto creme sobre fotos 4:5 (alternativa ao `::after` com `border: dashed`) | viewBox 400×500, `non-scaling-stroke` | `aria-hidden` | pronto |

IDs do sprite (uso: `<svg class="icone" aria-hidden="true"><use href="assets/icones.svg#i-agulha"/></svg>`):
`i-agulha`, `i-olho-bordado`, `i-coracao`, `i-caixa`, `i-tesoura`, `i-carretel`, `i-info`, `i-whatsapp`, `i-instagram`, `i-email`, `i-relogio`, `i-local`, `i-seta-esquerda`, `i-seta-direita`, `i-pausa`, `i-play`, `i-mais`, `i-menu`, `i-fechar`, `i-seta-link`.
Os ícones de WhatsApp e Instagram são desenhos simplificados de linha, não os logotipos oficiais. O sprite externo funciona servido por HTTP. Se abrir com duplo clique (`file://`) e algum navegador bloquear o `<use>` externo, colar o sprite inline no início do `<body>`.

Logo: texto em Fraunces itálico (SOFT 100, peso 600, OFL) convertido em path, com espaço extra entre o "d" (que no itálico tem a haste curvada) e o "ô", para o acento não encostar. A linha de costura tracejada rosa sai do "ô" e termina numa flor de 5 pétalas.
