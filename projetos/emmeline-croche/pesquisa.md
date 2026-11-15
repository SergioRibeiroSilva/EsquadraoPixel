# Pesquisa — Emmeline Crochê

> Pesquisa feita em 2026-11-15 pelo `pesquisador-fontes` a partir de `briefing.md`. Todas as afirmações trazem a URL de origem. Os valores de contraste foram **calculados** com a fórmula de luminância relativa da WCAG (não vêm de uma fonte pronta). Confira os pares finais numa ferramenta de contraste antes de publicar. Fontes secundárias (blogs de fornecedores) estão marcadas como tal.

## Perguntas de pesquisa
1. Que estrutura de página e que padrões visuais as marcas artesanais e de moda autoral usam para transmitir valor e confiança?
2. Que paleta vinho/marsala com neutros quentes passa no WCAG AA, e com quais pares de contraste?
3. Que pares de fontes do Google (serifada elegante + sans) servem a esse tom e têm suporte a português?
4. Quais são as boas práticas de vitrine de produto e de CTA de encomenda pelo WhatsApp?
5. Como escrever copy que valorize o feito à mão, e que termos de busca rendem fotos livres de crochê?

---

## Resumo executivo
- Estrutura recomendada: hero com foto real da bolsa, depois uma vitrine curta, o processo à mão mostrado em etapas e a história da artesã. Marcas artesanais usam o processo como sinal de confiança ([Wix/Festela](https://www.wix.com/explore/websites/site/festela-store), [Emma Bridgewater via ecomm.design](https://ecomm.design/?p=13891)).
- Paleta: vinho `#7A2338` sobre creme `#F7F0E8` dá 8,75:1 e passa no AA para qualquer tamanho de texto. O dourado só serve para texto se for o claro `#D9B77E` sobre vinho; sobre creme, use-o apenas como enfeite ([W3C 1.4.3](https://w3c.github.io/wcag/understanding/contrast-minimum.html)).
- Fontes: **Cormorant Garamond + Lato** (opção principal) ou **Fraunces + Inter**. As quatro têm licença OFL e cobrem latin-ext ([google/fonts](https://github.com/google/fonts)).
- CTA: link `wa.me` com mensagem pronta que já diz o nome do modelo, num botão vinho com o ícone do WhatsApp. O verde oficial `#25D366` com texto branco dá só 1,98:1 e reprova no contraste ([WhatsApp FAQ](https://faq.whatsapp.com/en/general/26000030)).
- Fotos de banco: Pexels e Pixabay têm muito mais resultados para "crochet bag" do que o Unsplash. Identifique-as como provisórias, porque foto de banco tira credibilidade de marca artesanal ([Seahawk](https://seahawkmedia.com/design/woodworking-websites/)).

---

## Referências visuais
(Servem só como inspiração de padrões. Não copiar textos, imagens nem layout literal.)

| Referência | O que observar | Como aplicar |
|---|---|---|
| [Festela (vitrine Wix)](https://www.wix.com/explore/websites/site/festela-store) | A página "Sobre" mostra a produção inteira, do moodboard à peça pronta, com foto em cada etapa (análise de fonte secundária: [Wix explore](https://www.wix.com/explore/websites/site/festela-store)). | Seção "O feito à mão" em 3 ou 4 etapas com foto: fio → ponto → acabamento → embalagem. |
| [Lili Arnold (vitrine Wix)](https://www.wix.com/explore/websites/site/lili-arnold) | Não há hero tradicional: a home é um mosaico de peças prontas, ferramentas e closes do processo. | Mosaico assimétrico na seção "Sobre", juntando close do ponto, novelos e mãos tecendo. |
| [Emma Bridgewater (via ecomm.design)](https://ecomm.design/?p=13891) | O processo vem antes da história da fundadora, com as etapas em sequência. | Na seção "Como encomendar" e no "Feito à mão", numere as etapas. |
| [Scandinazn (vitrine Wix)](https://www.wix.com/explore/websites/site/scandinazn) | A história da marca aparece ao longo da compra, e não só no "Sobre". | Coloque microfrases da artesã nos cards da vitrine (ex.: "cerca de X horas de trabalho"; o dado real deve vir da Emmeline). |
| [Unsplash: busca "crochet bag"](https://unsplash.com/s/photos/crochet-bag) | Mostra as tags associadas: *artisanal, slow fashion, textile art, craftsmanship, handcrafted, bohemian style*. | Indica o vocabulário visual do nicho: luz natural, fundos de madeira e linho, flores. |
| [Pantone Marsala 18-1438](https://www.cijintl.com/in-the-press/pantone-reveals-color-of-the-year-for-2015-pantone-18-1438-marsala.html) | Pantone descreve a cor como um vinho tinto "robusto e terroso" ([CIJ](https://www.cijintl.com/in-the-press/pantone-reveals-color-of-the-year-for-2015-pantone-18-1438-marsala.html)). Uma fonte dá o equivalente HTML `#955251` ([modeinfo](https://modeinfo.co.uk/Pantone-Color-of-the-year-2015-MARSALA-18-1438/)). | Use como tom médio da paleta (marsala), entre o vinho escuro e o rosé. |

---

## Padrões recomendados

### Layout e seções
- **Hero:** abra com uma foto real e limpa da bolsa. Guias de foto para vendedores de artesanato recomendam deixar a foto limpa do produto em primeiro lugar e as fotos de estilo de vida (bolsa no ombro) em segundo ou terceiro ([Alan Ranger](https://www.alanranger.com/blog-on-photography/etsy-product-photography-rules); fonte secundária).
- **Sem carrossel automático no hero.** Carrosséis que avançam sozinhos reduzem a visibilidade do conteúdo e prejudicam quem precisa de mais tempo para ler ([NN/g](https://www.nngroup.com/articles/designing-effective-carousels/), [Yale Usability](https://usability.yale.edu/usability-best-practices/hero-imagescarousels)). Pela Baymard, 46% dos sites com carrossel na home têm problemas de usabilidade ([Baymard](https://baymard.com/research-articles/homepage-carousel)). Prefira uma imagem estática.
- **Vitrine:** grade de 6 cards (1 coluna no celular, 2 no tablet, 3 no desktop), cada um com foto, nome, descrição de uma linha, "a partir de R$" e o botão "Quero esta". Na Baymard, a primeira ação de 56% dos usuários foi explorar as imagens do produto ([Baymard](https://baymard.com/blog/current-state-ecommerce-product-page-ux)). Fotos são o que mais pesa.
- **Mostrar o tamanho:** segundo a Baymard, 42% dos usuários tentam deduzir o tamanho do produto pelas fotos ([via letsenhance](https://letsenhance.io/blog/all/product-image-quality/); dado de fonte secundária). Em cada card, informe as medidas (ex.: "28 × 22 cm") e, quando der, use uma foto da bolsa no ombro ou na mão.
- **Processo e história:** um mosaico de closes (ponto, fio, mãos) mais um texto curto em primeira pessoa, seguindo o padrão das referências acima.
- **FAQ:** acordeão com `<details>/<summary>` nativos e ícone de seta (caret), o formato que mais corresponde ao que o usuário espera segundo pesquisa da NN/g citada por [LogRocket](https://blog.logrocket.com/ux-design/accordion-ui-design) (fonte secundária). Não encontrei o artigo original da NN/g sobre FAQ.

### Cor (pares calculados pela fórmula WCAG; limites: 4,5:1 para texto normal, 3:1 para texto grande a partir de 24px, ou 18,5px em negrito; [W3C 1.4.3](https://w3c.github.io/wcag/understanding/contrast-minimum.html))

| Papel | Hex |
|---|---|
| Vinho escuro (fundo de seções e rodapé) | `#5E1A2B` |
| Vinho (primária, botões, títulos) | `#7A2338` |
| Marsala (tom médio) | `#955251` |
| Creme (fundo principal) | `#F7F0E8` |
| Off-white (cards) | `#FBF7F2` |
| Rosé / rosa antigo (fundo alternado) | `#EAD5CC` |
| Texto principal (marrom quase preto) | `#2B1A1E` |
| Texto secundário | `#6B5A55` |
| Dourado claro (acento sobre vinho) | `#D9B77E` |
| Dourado escuro (acento sobre claro) | `#7C5E2C` |

| Par (texto / fundo) | Razão | Resultado |
|---|---|---|
| `#2B1A1E` / `#F7F0E8` | 14,6:1 | AA e AAA |
| `#2B1A1E` / `#FBF7F2` | 15,5:1 | AA e AAA |
| `#7A2338` / `#F7F0E8` | 8,75:1 | AA e AAA |
| `#7A2338` / `#FBF7F2` | 9,3:1 | AA e AAA |
| `#7A2338` / `#EAD5CC` | 7,0:1 | AA e AAA |
| `#5E1A2B` / `#F7F0E8` | 11,2:1 | AA e AAA |
| `#5E1A2B` / `#EAD5CC` | 9,0:1 | AA e AAA |
| `#FFFFFF` / `#7A2338` (botão) | 9,9:1 | AA e AAA |
| `#F7F0E8` / `#5E1A2B` | 11,2:1 | AA e AAA |
| `#6B5A55` / `#F7F0E8` | 5,8:1 | AA |
| `#955251` / `#F7F0E8` | 5,2:1 | AA |
| `#FFFFFF` / `#955251` | 5,8:1 | AA |
| `#955251` / `#EAD5CC` | 4,1:1 | só texto grande |
| `#D9B77E` / `#5E1A2B` | 6,6:1 | AA |
| `#D9B77E` / `#7A2338` | 5,2:1 | AA |
| `#7C5E2C` / `#F7F0E8` | 5,3:1 | AA |
| `#B08D57` / `#F7F0E8` (dourado médio) | 2,7:1 | **reprova** (só enfeite) |
| `#D9B77E` / `#F7F0E8` | 1,7:1 | **reprova** (só enfeite) |
| `#FFFFFF` / `#25D366` (verde WhatsApp) | 1,98:1 | **reprova** |
| `#2B1A1E` / `#25D366` | 8,3:1 | AA (se usar o verde, texto escuro) |

- Distribuição sugerida: cerca de 60% creme/off-white, 25% vinho/marsala e 15% rosé, com o dourado só em filetes, ícones e detalhes (proporção assumida, sem fonte).
- Anel de foco: `#7A2338` sobre fundo claro dá 8,75:1 e `#D9B77E` sobre vinho dá mais de 5:1. Ambos passam o mínimo de 3:1 para componentes de interface (WCAG 1.4.11).

### Tipografia
| Opção | Títulos | Texto | Observações |
|---|---|---|---|
| **A (recomendada)** | Cormorant Garamond (variável, wght 300–700, com itálico; de Christian Thalmann; OFL; latin-ext) [METADATA](https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/METADATA.pb) | Lato (9 pesos com itálico; OFL; latin-ext) [METADATA](https://raw.githubusercontent.com/google/fonts/main/ofl/lato/METADATA.pb) | Os detalhes semiarredondados da Lato trazem calor ao par ([bonfx](https://bonfx.com/what-fonts-go-with-cormorant-garamond/); fonte secundária). A Cormorant é fina: use a partir de 32px, no peso 500 ou 600, e nunca em texto corrido. |
| B | Fraunces (variável: wght, opsz, SOFT e WONK; OFL) [METADATA](https://raw.githubusercontent.com/google/fonts/main/ofl/fraunces/METADATA.pb) | Inter (variável; OFL) [METADATA](https://raw.githubusercontent.com/google/fonts/main/ofl/inter/METADATA.pb) | Par editorial recomendado em [jukeboxprint](https://www.jukeboxprint.com/fonts/font-pairing/editorial-font-pairing). O eixo SOFT deixa a serifa mais macia, o que combina com o tom artesanal. |
| C | Playfair Display (wght 400–900; OFL) [METADATA](https://raw.githubusercontent.com/google/fonts/main/ofl/playfairdisplay/METADATA.pb) | Inter ou Lato | É mais comum, logo dá menos identidade. Não combinar Playfair com Cormorant: duas serifas de alto contraste competem entre si ([fonte secundária](https://maxibestof.nuxt.dev/typefaces/playfair/pairing/cormorant-garamond)). |

- Carregamento: use `preconnect` para `fonts.googleapis.com` e para `fonts.gstatic.com` (este com `crossorigin`), e `display=swap` ([web.dev](https://web.dev/articles/font-best-practices)). Carregue só os pesos que forem usados.
- Texto corrido com 16–18px e altura de linha entre 1,5 e 1,7 (valores usuais, sem fonte específica).

### Animação
- Use apenas revelações suaves (fade/translate curtos ao rolar) e hover discreto nos cards, desligando tudo com `@media (prefers-reduced-motion: reduce)`. Os indicadores de foco devem continuar visíveis mesmo com o movimento reduzido ([MDN, espelho](https://docs.w3cub.com/css/@media/prefers-reduced-motion), [specification.website](https://specification.website/spec/accessibility/reduced-motion/)).

### CTA de encomenda pelo WhatsApp
- Formato oficial: `https://wa.me/<número internacional só com dígitos>?text=<mensagem URL-encoded>`, sem "+", zeros, parênteses ou traços ([WhatsApp FAQ](https://faq.whatsapp.com/en/general/26000030)). Exemplo de estrutura: `https://wa.me/55DDNNNNNNNNN?text=Ol%C3%A1%2C%20Emmeline!%20Tenho%20interesse%20na%20bolsa%20...`.
- Cada card da vitrine leva uma mensagem própria com o nome do modelo, o que poupa a cliente de digitar. A mensagem continua editável antes do envio ([Bird](https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link); fonte secundária). O WhatsApp não oferece métricas de clique ([Bird](https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link)).
- Botões com no mínimo 44×44px (o mínimo AA é 24×24px; 44×44px é o nível AAA) ([W3C novidades 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/), [BOIA](https://www.boia.org/blog/understanding-target-size-under-wcag-2.2-and-how-it-affects-people-with-disabilities)).
- Dê aos links um rótulo claro, por exemplo "Encomendar pelo WhatsApp", em vez de só o ícone. Adicione `target="_blank" rel="noopener"` e um aviso de que o link abre o WhatsApp (recomendação de acessibilidade usual).
- Botão flutuante no celular: pode ser usado, mas sem cobrir conteúdo nem o rodapé. Encontrei apenas fontes comerciais sobre o assunto, sem estudo sólido.

### Copy que valoriza o feito à mão
- Descreva o momento de uso, e não só o material. A Big Cartel sugere trocar "feito à mão" por uma cena concreta de uso ([Big Cartel](https://www.bigcartel.com/resources/blog/article/how-to-write-product-descriptions)). Exemplo de padrão: em vez de "bolsa de fio de algodão", algo como "companheira de feira de domingo" (redigir original).
- Linguagem sensorial e frases curtas, de até cerca de 15 palavras ([Wisepops](https://wisepops.com/blog/product-descriptions); fonte secundária).
- Explique que pequenas variações entre peças são marca do trabalho manual e mostre a história da artesã ([Main Street Collective](https://www.mainstreetco.us/blogs/main-street-collective-blog/how-to-write-product-descriptions-that-feel-natural-not-salesy)).
- Mostre pessoas reais usando o produto para dar confiança ([Shopify Help](https://help.shopify.com/docs/marketplaces/product-description)).
- Fale com uma cliente específica e use vocabulário da marca em vez de ficha técnica ([Format](https://format.com/magazine/product-description-writing)). Ainda assim, informe medidas, fio, forro e cuidados no FAQ ou no card.
- Vocabulário sugerido (redação própria): ponto a ponto, tecida à mão, peça única, feita sob encomenda, no seu tempo, fio escolhido a dedo, cores que você escolhe. Não use números (horas, quantidade de peças) sem confirmar com a Emmeline.

### Termos de busca para fotos livres
Licenças: [Unsplash](https://unsplash.com/license) (uso comercial livre; não pode revender sem modificar nem montar serviço concorrente), [Pexels](https://www.pexels.com/license/) (não pode sugerir endosso de pessoa ou marca nem usar como marca), [Pixabay](https://pixabay.com/service/license-summary/) (não pode usar para fins comerciais conteúdo com marca ou logo reconhecível). As licenças não substituem autorização de imagem de pessoas ([licenseorg](https://licenseorg.com/blog/free-stock-photos-licensing-traps); fonte secundária).

| Banco | Volume para "crochet bag" | Termos sugeridos |
|---|---|---|
| [Pexels](https://www.pexels.com/search/crochet%20bag/) | cerca de 39,2 mil fotos | `crochet bag`, `crochet handbag`, `crochet purse`, `crochet tote bag`, `knitted bag`, `woman holding crochet bag`, `crochet hands`, `yarn balls`, `crochet hook yarn` |
| [Pixabay](https://pixabay.com/images/search/crochet%20bag/) | cerca de 8,9 mil resultados | `crochet bag`, `crochet`, `yarn`, `knitting`, `hobby`, `handmade bag` |
| [Unsplash](https://unsplash.com/s/photos/crochet-bag) | cerca de 670 fotos | `crochet bag`, `crochet tote`, `handcrafted bag`, `slow fashion`, `textile art`, `yarn burgundy`, `crocheting hands` |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Crochet) | categorias: *Crocheted objects*, *People crocheting*, *Crochet thread*, *Crochet tools* | navegar por essas categorias; a categoria "Crocheted bags" não existe (404) |

- Filtro de cor: termos como `burgundy yarn`, `wine red crochet`, `maroon knitted bag` e `bordeaux yarn` ajudam a manter a identidade vinho. A quantidade de resultados por cor não foi verificada.
- Evite: bolsas com etiqueta ou logo visível, rostos em destaque nos depoimentos e fotos de bolsas Wayuu (a tag aparece no Pixabay), que pertencem a uma tradição de outra cultura e podem confundir sobre a origem da peça (observação editorial).

---

## Riscos e o que evitar
- **Verde do WhatsApp com texto branco** (1,98:1): reprova no AA. Use o botão vinho com ícone, ou texto escuro sobre o verde.
- **Dourado como cor de texto sobre creme**: reprova (1,7 a 2,7:1).
- **Marsala `#955251` sobre rosé**: 4,1:1, só para texto grande.
- **Cormorant em tamanho pequeno ou peso leve**: fica ilegível no celular. Reserve-a para títulos.
- **Carrossel automático** no hero ou na vitrine ([NN/g](https://www.nngroup.com/articles/designing-effective-carousels/), [Baymard](https://baymard.com/research-articles/homepage-carousel)).
- **Fotos de banco como se fossem da marca**: guias do setor dizem que elas minam a credibilidade de negócios artesanais ([Seahawk](https://seahawkmedia.com/design/woodworking-websites/); fonte secundária). Marque todas como "substituir antes de publicar" e incentive a Emmeline a fotografar as próprias bolsas.
- **Fotos de baixa resolução**: imagens ruins podem ser piores do que nenhuma ([Baymard](https://baymard.com/blog/ensure-sufficient-image-resolution-and-zoom)). Mas comprima-as, porque o público acessa pelo celular.
- **Números inventados** (horas por peça, clientes atendidas, prazos): só com dados de `dados-negocio.md`.
- **Pessoas reconhecíveis em depoimentos fictícios**: risco de imagem. Prefira avatar com iniciais ou foto sem rosto.
- **Copiar texto de sites de referência**: proibido. Use as referências apenas como padrão.

---

## Fontes consultadas
- W3C — Understanding SC 1.4.3 Contrast (Minimum): https://w3c.github.io/wcag/understanding/contrast-minimum.html
- W3C — What's New in WCAG 2.2: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- BOIA — Target Size WCAG 2.2: https://www.boia.org/blog/understanding-target-size-under-wcag-2.2-and-how-it-affects-people-with-disabilities
- WhatsApp FAQ — How to use click to chat: https://faq.whatsapp.com/en/general/26000030
- Bird — click-to-chat link: https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link
- Baymard — Current state of product page UX: https://baymard.com/blog/current-state-ecommerce-product-page-ux
- Baymard — Image resolution and zoom: https://baymard.com/blog/ensure-sufficient-image-resolution-and-zoom
- Baymard — Homepage carousel: https://baymard.com/research-articles/homepage-carousel
- Let's Enhance (citando Baymard): https://letsenhance.io/blog/all/product-image-quality/
- NN/g — Designing effective carousels: https://www.nngroup.com/articles/designing-effective-carousels/
- Yale Usability — Hero images/carousels: https://usability.yale.edu/usability-best-practices/hero-imagescarousels
- LogRocket — Accordion UI design: https://blog.logrocket.com/ux-design/accordion-ui-design
- web.dev — Font best practices: https://web.dev/articles/font-best-practices
- MDN (espelho) — prefers-reduced-motion: https://docs.w3cub.com/css/@media/prefers-reduced-motion
- specification.website — Reduced motion: https://specification.website/spec/accessibility/reduced-motion/
- google/fonts METADATA — Cormorant Garamond: https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/METADATA.pb
- google/fonts METADATA — Lato: https://raw.githubusercontent.com/google/fonts/main/ofl/lato/METADATA.pb
- google/fonts METADATA — Fraunces: https://raw.githubusercontent.com/google/fonts/main/ofl/fraunces/METADATA.pb
- google/fonts METADATA — Inter: https://raw.githubusercontent.com/google/fonts/main/ofl/inter/METADATA.pb
- google/fonts METADATA — Playfair Display: https://raw.githubusercontent.com/google/fonts/main/ofl/playfairdisplay/METADATA.pb
- bonfx — Fonts that go with Cormorant Garamond: https://bonfx.com/what-fonts-go-with-cormorant-garamond/
- Jukebox Print — Editorial font pairings: https://www.jukeboxprint.com/fonts/font-pairing/editorial-font-pairing
- maxibestof — Playfair + Cormorant: https://maxibestof.nuxt.dev/typefaces/playfair/pairing/cormorant-garamond
- CIJ — Pantone 18-1438 Marsala: https://www.cijintl.com/in-the-press/pantone-reveals-color-of-the-year-for-2015-pantone-18-1438-marsala.html
- modeinfo — Marsala 18-1438: https://modeinfo.co.uk/Pantone-Color-of-the-year-2015-MARSALA-18-1438/
- Wix Explore — Festela: https://www.wix.com/explore/websites/site/festela-store
- Wix Explore — Lili Arnold: https://www.wix.com/explore/websites/site/lili-arnold
- Wix Explore — Scandinazn: https://www.wix.com/explore/websites/site/scandinazn
- ecomm.design — Emma Bridgewater: https://ecomm.design/?p=13891
- Seahawk Media — Woodworking websites: https://seahawkmedia.com/design/woodworking-websites/
- Big Cartel — Product descriptions: https://www.bigcartel.com/resources/blog/article/how-to-write-product-descriptions
- Wisepops — Product descriptions: https://wisepops.com/blog/product-descriptions
- Main Street Collective — Descriptions natural not salesy: https://www.mainstreetco.us/blogs/main-street-collective-blog/how-to-write-product-descriptions-that-feel-natural-not-salesy
- Shopify Help — Engaging product descriptions: https://help.shopify.com/docs/marketplaces/product-description
- Format — Product description writing: https://format.com/magazine/product-description-writing
- Alan Ranger — Etsy product photography rules: https://www.alanranger.com/blog-on-photography/etsy-product-photography-rules
- Unsplash License: https://unsplash.com/license
- Pexels License: https://www.pexels.com/license/
- Pixabay License summary: https://pixabay.com/service/license-summary/
- licenseorg — Free stock photo licensing traps: https://licenseorg.com/blog/free-stock-photos-licensing-traps
- Unsplash busca "crochet bag": https://unsplash.com/s/photos/crochet-bag
- Pexels busca "crochet bag": https://www.pexels.com/search/crochet%20bag/
- Pixabay busca "crochet bag": https://pixabay.com/images/search/crochet%20bag/
- Wikimedia Commons — Category:Crochet: https://commons.wikimedia.org/wiki/Category:Crochet

### Não encontrado
- O artigo original da NN/g sobre FAQ e acordeões (só achei citações secundárias).
- O texto do Etsy Seller Handbook sobre fotografia (só guias de terceiros).
- Estudos independentes sobre a conversão de botão flutuante de WhatsApp.
