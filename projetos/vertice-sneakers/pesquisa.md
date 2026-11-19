# Pesquisa — Vértice Sneakers (etapa 1)

> Pesquisa feita em 18/11/2026 para o briefing `briefing.md`. Todos os dados do negócio são fictícios (`dados-negocio.md`). Referências servem só como padrão; nada de texto, layout ou asset deve ser copiado.

## Resumo executivo
1. O visual premium do nicho segue o "quiet luxury": fundo escuro ou neutro, muito respiro, fotos de produto grandes e navegação mínima ([limely](https://www.limely.co.uk/blog/top-10-minimalist-luxury-ecommerce-websites), [redefineweb](https://redefineweb.com/blog/luxury-fashion-ecommerce-web-design-trends-2026/)).
2. O carrossel do hero deve seguir o padrão WAI-ARIA: botão de pausar/retomar primeiro na ordem de Tab, pausa ao focar ou passar o mouse, `aria-live` desligado durante o autoplay ([W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)).
3. Desempenho: o slide 1 fica no HTML, com `fetchpriority="high"` e sem lazy-load; os slides 2+ com lazy-load; transições só com `transform`/`opacity` ([web.dev LCP](https://web.dev/articles/optimize-lcp), [web.dev carousel](https://web.dev/articles/carousel-best-practices)).
4. A copy de luxo convida em vez de pressionar: sem urgência nem descontos, com verbos como "descobrir" e "explorar" e o foco em material, ofício e experiência ([Thoughtlab](https://www.thoughtlab.com/blog/luxury-brand-copywriting/), [MarketSmiths](https://www.marketsmiths.com/2023/crafting-elegance-3-tips-for-effective-luxury-copywriting/)).
5. SEO local: JSON-LD `ShoeStore` com endereço, telefone, horários e `priceRange` ([Google](https://developers.google.com/search/docs/appearance/structured-data/local-business), [schema.org](https://schema.org/ShoeStore)).

---

## Referências visuais
Os padrões foram observados via curadorias. Não copiar layout nem marca.

| Referência | Observação | Fonte |
|---|---|---|
| The Row, Totême, COS, Arket | Paletas neutras e contidas, muito espaço negativo, grade de produtos simples e estruturada | [limely](https://www.limely.co.uk/blog/top-10-minimalist-luxury-ecommerce-websites) |
| Aesop, Chanel, Fendi | Fotos de produto de alto impacto e navegação mínima e discreta | [limely](https://www.limely.co.uk/blog/top-10-minimalist-luxury-ecommerce-websites) |
| DeMellier London | Fotos atmosféricas e navegação por categorias, parecida com a seção "Coleções" do briefing | [limely](https://www.limely.co.uk/blog/top-10-minimalist-luxury-ecommerce-websites) |
| Kith (citado em curadoria) | Estética escura que põe o foco na silhueta do produto | [colorlib](https://colorlib.com/wp/clothing-brand-website-examples/) |
| SSENSE, Net-A-Porter (citados) | Comércio "editorial": foto em tela cheia e títulos confiantes | [redefineweb](https://redefineweb.com/blog/luxury-fashion-ecommerce-web-design-trends-2026/) |
| Tendência 2026 | O "quiet luxury" substitui o maximalismo de logos nas páginas premium | [redefineweb](https://redefineweb.com/blog/luxury-fashion-ecommerce-web-design-trends-2026/) |

Observação: as curadorias acima são blogs de agências, com interesse comercial. Trate-as como opinião e inspiração, não como dado.

---

## Padrões recomendados

### Layout e seções
- Hero em tela cheia (altura de cerca de 85 a 100svh) com foto de estúdio em fundo escuro. Título curto e um CTA por slide, em área de texto separada da imagem (texto em HTML, não embutido na foto) ([web.dev carousel](https://web.dev/articles/carousel-best-practices)).
- Usar de 4 a 5 slides no máximo. A NN/g recomenda 5 ou menos, porque o usuário raramente vê todos ([NN/g](https://www.nngroup.com/articles/designing-effective-carousels/)).
- Não depender só do carrossel para a informação importante: as coleções e o CTA de agendamento devem se repetir em outras seções, porque muitos usuários só veem o primeiro slide ([NN/g](https://www.nngroup.com/articles/designing-effective-carousels/), [web.dev](https://web.dev/articles/carousel-best-practices)).
- Grade de produtos simples (2 colunas no celular, 3 a 4 no desktop) com muito respiro ([limely](https://www.limely.co.uk/blog/top-10-minimalist-luxury-ecommerce-websites)).
- Cabeçalho fixo: usar `scroll-padding-top` igual à altura do cabeçalho, para que o foco e as âncoras não fiquem escondidos (WCAG 2.4.11, técnica C43) ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)).

### Carrossel do hero: especificação de acessibilidade (WAI-ARIA APG)
Fonte principal: [W3C APG Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- Contêiner `<section>` com `role="region"`, `aria-roledescription="carousel"` e `aria-label="Destaques"` (o nome não deve conter a palavra "carrossel").
- Cada slide em `role="group"`, com `aria-roledescription="slide"` e `aria-label="1 de 4"` (ou um nome único sem a palavra "slide").
- O botão de pausar/retomar é um `<button>` nativo e o **primeiro na ordem de Tab** dentro do carrossel. O rótulo descreve a ação seguinte ("Pausar apresentação" / "Retomar apresentação"), **sem `aria-pressed`**.
- O autoplay para quando o foco do teclado entra no carrossel e **não volta sozinho**. Ele também para enquanto o mouse está sobre o carrossel.
- O wrapper dos slides tem `aria-atomic="false"`, com `aria-live="off"` durante o autoplay e `aria-live="polite"` quando parado.
- As setas anterior/próximo não movem o foco ao serem ativadas.
- Indicadores: a variante "grouped" (botões, com o atual em `aria-disabled="true"`, não `disabled`) ou a "tabbed" (`tablist`/`tab`/`tabpanel`). A tabbed usa só uma parada de Tab e é mais amigável ao teclado.
- WCAG 2.2.2 (Pausar, Parar, Ocultar, nível A): conteúdo que se move sozinho por mais de 5 segundos precisa de um mecanismo de pausa. Uma pausa que só vale enquanto há foco não basta ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)).
- `prefers-reduced-motion: reduce` desliga o autoplay, e a transição vira um corte ou um fade curto. Mesmo assim, evitar zoom e pan, que podem incomodar pessoas com distúrbios vestibulares ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
- UX: indicador ativo bem diferente dos demais (não só uma pequena mudança de tamanho); pontos são pouco percebidos no celular, então convém mostrar também um contador "01 / 04" ou uma barra. Setas visíveis em todos os slides, controles dentro da área do carrossel e com contraste sobre a foto ([NN/g](https://www.nngroup.com/articles/designing-effective-carousels/)).
- Tempo do slide: a NN/g estima cerca de 3 palavras por segundo de leitura. Com título e CTA curtos, de 6 a 7 s por slide é razoável (inferência a partir de [NN/g](https://www.nngroup.com/articles/designing-effective-carousels/)). O loop deve continuar após o último slide.
- A NN/g desaconselha o autoplay no celular ([NN/g](https://www.nngroup.com/articles/designing-effective-carousels/)). Sugestão ao designer: considerar autoplay só a partir de cerca de 768 px, ou mantê-lo pausável, já que o briefing exige autoplay.
- Toque: suporte a swipe (pointer events), e as setas continuam disponíveis como alternativa.
- Alvos de toque: mínimo de 24x24 px (WCAG 2.5.8 AA); recomenda-se 44x44 px nos controles principais (2.5.5) ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)).

### Desempenho (LCP/CLS)
- Meta de LCP de até 2,5 s ([web.dev](https://web.dev/articles/optimize-lcp)).
- A imagem do slide 1 vai em `<img>` no HTML inicial, com `srcset`/`sizes`, `fetchpriority="high"` e **sem** `loading="lazy"`. Não usar `fetchpriority="high"` em mais de uma ou duas imagens ([web.dev](https://web.dev/articles/optimize-lcp)).
- Se a imagem estiver só no CSS, usar `<link rel="preload" as="image" fetchpriority="high">` ([web.dev](https://web.dev/articles/optimize-lcp)). Preferir `<img>`.
- Slides 2+ com `loading="lazy"` (pedido do briefing), mas o markup deles fica no HTML, nunca injetado por JS. Injetar conteúdo do carrossel via JS é apontado como o maior erro de desempenho ([web.dev carousel](https://web.dev/articles/carousel-best-practices)).
- Todos os slides com as mesmas dimensões intrínsecas (`width`/`height` definidos), porque qualquer slide pode virar o candidato a LCP ([web.dev carousel](https://web.dev/articles/carousel-best-practices)).
- Animar só `transform`/`opacity`, nunca `left`/`width`, e não inserir controles no hover, para evitar CLS ([web.dev carousel](https://web.dev/articles/carousel-best-practices)).
- Sugestão: WebP com cerca de 1600 a 1920 px de largura no desktop e cerca de 800 px no celular (via `srcset`). Mirar em menos de 250 KB no slide 1. É uma meta de projeto, não um dado de fonte.

### Tipografia (máximo de 2 famílias, Google Fonts)
| Uso | Família | Dados verificados |
|---|---|---|
| Títulos (serifa de alto contraste) | **Cormorant Garamond** | Christian Thalmann, OFL, eixo `wght` 300–700 + itálico, latin-ext ([METADATA](https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/METADATA.pb)) |
| Alternativa para títulos | Playfair Display | Claus Eggers Sørensen, OFL, `wght` 400–900, latin-ext ([METADATA](https://raw.githubusercontent.com/google/fonts/main/ofl/playfairdisplay/METADATA.pb)) |
| Texto e interface (sans geométrica refinada) | **Manrope** | Mikhail Sharanda, OFL, `wght` 200–800, latin-ext ([METADATA](https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/METADATA.pb)) |

- Recomendação: Cormorant Garamond (500–600) nos títulos grandes e Manrope (400/500/600) no texto, em rótulos com caixa alta e espaçamento entre letras de cerca de 0,12em, e nos botões. A Cormorant tem traço fino: usá-la só em tamanhos grandes (cerca de 28 px ou mais) sobre fundo escuro, para manter a legibilidade.
- Carregar com `display=swap` e só os pesos usados.

### Cor (paleta escura premium)
Proposta para o designer validar. As razões de contraste foram **calculadas por mim** com a fórmula de luminância relativa da WCAG, e devem ser conferidas numa ferramenta (limiares: 4,5:1 para texto normal e 3:1 para texto grande, a partir de cerca de 24 px, ou 18,5 px em negrito) ([W3C 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).

| Token | Hex | Uso | Contraste (calculado) |
|---|---|---|---|
| fundo | `#0E0E10` | fundo principal quase preto | — |
| superfície | `#1A1A1D` | cards, faixas alternadas | — |
| texto | `#F2EEE6` | texto principal (off-white quente) | cerca de 16,7:1 no fundo; cerca de 15:1 na superfície |
| texto-suave | `#A8A29A` | legendas, metadados | cerca de 7,6:1 no fundo; cerca de 6,9:1 na superfície |
| acento champanhe | `#C9A96E` | linhas finas, preços, CTA | cerca de 8,6:1 no fundo; texto `#0E0E10` sobre o botão champanhe tem cerca de 8,6:1 |
| acento cobre (alternativo) | `#B87333` | uso pontual | cerca de 5,1:1 no fundo (passa AA, mas com pouca folga) |

- Usar o acento com parcimônia (filetes, números, hover), coerente com o "quiet luxury" ([redefineweb](https://redefineweb.com/blog/luxury-fashion-ecommerce-web-design-trends-2026/)).
- Sobre as fotos do hero, aplicar um gradiente escuro (de baixo para cima ou da esquerda para a direita) atrás do texto, para garantir os 4,5:1 independentemente da foto.
- Foco visível: contorno de 2 px champanhe com `outline-offset` de 3 px.

### Animação
- Sutil: fade/translate de 8 a 16 px ao entrar na tela, de 300 a 600 ms, com `ease-out`. Transição do carrossel em crossfade com `opacity` ([web.dev carousel](https://web.dev/articles/carousel-best-practices)).
- Com `prefers-reduced-motion: reduce`, tudo vira estático ou fade de 0 a 150 ms, e o autoplay fica desligado ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).

### Copy de luxo (orientações para o redator)
- Convidar, não exigir: CTAs como "Descobrir a coleção", "Agendar atendimento", "Explorar edições limitadas" ([Thoughtlab](https://www.thoughtlab.com/blog/luxury-brand-copywriting/)).
- Persuadir pela emoção, pelo pertencimento e pelo orgulho, não pela urgência ou pelo medo de ficar de fora (FOMO). Nunca comparar com concorrentes ([Thoughtlab](https://www.thoughtlab.com/blog/luxury-brand-copywriting/)).
- Vocabulário de ofício, história e permanência. Benefícios como "higienização cortesia" em vez de "grátis" ([Thoughtlab](https://www.thoughtlab.com/blog/luxury-brand-copywriting/)).
- Detalhe concreto (material, origem, processo) em vez de promessa genérica de luxo. Usar storytelling aspiracional e sensorial (toque do couro, acabamento) ([MarketSmiths](https://www.marketsmiths.com/2023/crafting-elegance-3-tips-for-effective-luxury-copywriting/)).
- Cuidado: contenção demais pode soar como insegurança para um público que já conhece o mercado de luxo. Ser preciso e assertivo ([Giant Leap](https://giantleapdigital.co.uk/blog/luxury-copywriting-for-hnw-clients-how-to-write-copy-that-converts/)).

### SEO local
- JSON-LD com `@type: "ShoeStore"` (Store > LocalBusiness) ([schema.org](https://schema.org/ShoeStore)).
- Obrigatórios: `name` e `address` (PostalAddress completo). Recomendados: `telephone` com DDI e DDD, `url`, `priceRange` (ex.: "R$ 1.200–4.900", com menos de 100 caracteres) e `openingHoursSpecification` (`dayOfWeek`, `opens`, `closes`). Omitir `geo`, pois não há coordenadas ([Google](https://developers.google.com/search/docs/appearance/structured-data/local-business)).
- Horários (fictícios): segunda a sexta 10:00–20:00 e sábado 10:00–18:00. Domingo fechado: omitir ou usar `opens`/`closes` "00:00" ([Google](https://developers.google.com/search/docs/appearance/structured-data/local-business)).
- Não incluir `aggregateRating`/`review` com depoimentos de exemplo: o Google indica essas propriedades para sites que coletam avaliações de *outros* negócios ([Google](https://developers.google.com/search/docs/appearance/structured-data/local-business)).
- O ranking local depende de relevância, distância e proeminência. Manter endereço e horários precisos e coerentes com o Perfil da Empresa no Google (tarefa do dono, fora do site) ([Google Business](https://support.google.com/business/answer/7091)).
- Na página: `<title>` com nome, categoria e bairro/cidade; meta description; `lang="pt-BR"`; endereço em `<address>`; Open Graph com a imagem do hero.

---

## Fotos candidatas (para o gerador-imagens)
Licenças: Unsplash, uso livre comercial, sem atribuição obrigatória, sem revenda sem modificação ([Unsplash License](https://unsplash.com/license)). As fotos **Unsplash+ são pagas: não usar**. Pexels, uso livre, sem atribuição obrigatória, **sem sugerir endosso de marcas ou pessoas** e sem usar como marca ([Pexels License](https://www.pexels.com/license/)). Registrar autor e licença em `imagens.md` mesmo assim.

**Atenção a logos:** muitas fotos de tênis mostram Nike, Adidas, Jordan ou Dior. Pelo briefing e pela licença do Pexels (sem endosso de marca), preferir fotos sem logo visível ou cortar o enquadramento. O gerador-imagens precisa abrir cada foto e conferir, porque eu não vi as imagens, só as páginas.

### Hero (mínimo de 4, fundo escuro, iluminação de estúdio)
| # | URL | Autor | Status verificado | Observação |
|---|---|---|---|---|
| H1 | https://unsplash.com/photos/_0_b9c0HZPM | Jordan Hou | Unsplash License (grátis) | Tênis branco com emblema dourado, luz dramática. Combina com o acento champanhe |
| H2 | https://www.pexels.com/photo/designer-sneakers-in-studio-18155789/ | Ashis Sarker | Pexels, 3996x5444 (retrato) | "Luxury designer sneakers in studio". Cores extraídas: preto, cinza e marrom. Retrato: recortar para paisagem ou usar no celular |
| H3 | https://www.pexels.com/photo/designer-sneakers-in-studio-18155788/ | Ashis Sarker | Pexels (página listada na busca) | Mesma série de estúdio. Conferir logos |
| H4 | https://www.pexels.com/photo/designer-sneakers-in-a-studio-18155790/ | Ashis Sarker | Pexels (página listada na busca) | Estampa preto e branco. Pode ter monograma de marca: conferir |
| H5 | https://unsplash.com/photos/sneakers-arranged-on-dark-surface-sLsIeWssEDQ | Bennett | Unsplash License (grátis) | Três pares em superfície escura, luz baixa. **A página sugere Nike**: conferir logos |
| H6 | https://www.pexels.com/photo/white-sports-shoe-balancing-on-tip-12628401/ | hamza01nsr | Pexels (página listada) | Tênis branco equilibrado na ponta, fundo preto. Série com título "Nike" (12628400): conferir |
| H7 | https://www.pexels.com/photo/sleek-white-sneakers-with-black-stripes-display-30707531/ | howard-senton | Pexels (página listada) | Reflexo em fundo escuro. Listras podem indicar marca |
| H8 | https://www.pexels.com/photo/stylish-athletic-sneakers-on-textured-background-39559877/ | perfect-lens | Pexels (página listada) | Superfície escura texturizada |

### Produtos (6 a 8, de preferência uniformes, fundo escuro ou neutro)
| URL | Autor | Observação |
|---|---|---|
| https://unsplash.com/photos/t4g1gctAaKk | Mojtaba Fahiminia | Tênis branco e marrom (couro): bom para "Couro artesanal" |
| https://unsplash.com/photos/T9IqDhJVhEU | Mojtaba Fahiminia | Tênis sobre pedras, tom natural |
| https://unsplash.com/photos/sneakers-arranged-on-dark-surface-sLsIeWssEDQ | Bennett | Pode render recortes individuais |
| https://unsplash.com/photos/paisley-and-plaid-low-top-sneakers-4GPdcyXH7hs | Bennett | Low-top estampado em superfície escura: "Edições limitadas" |
| https://unsplash.com/photos/black-high-top-sneaker-with-glowing-laces-under-a-blacklight-GliJrDnMqO4 | Djamil Kabar | Cano alto preto, clima noturno |
| https://www.pexels.com/photo/a-person-wearing-white-sneakers-5022533/ | highroller | Vista de cima, minimalista, fundo preto |
| https://www.pexels.com/photo/sneakers-on-black-boxes-4271584/ | alleksana | Vertical, fundo escuro. O par 4271563 é Converse: conferir logo |
| https://www.pexels.com/photo/shoes-on-display-13536939/ | jibarofoto | Tênis brancos em superfície refletiva |

### Interior da loja / ambiente / ofício
| URL | Autor | Observação |
|---|---|---|
| https://unsplash.com/photos/white-sneakers-displayed-on-white-pedestals-indoors-869UYsCv7fg | atelierbyvineeth | Unsplash License. Pedestais, clima "moody" e minimalista: ótimo para "Sobre" e "Experiência" |
| https://unsplash.com/photos/modern-shoe-store-interior-with-display-shelves-aMjub3ilWa8 | Danny Greenberg | Unsplash License. Interior de sneaker store com prateleiras (luminosidade não verificada) |
| https://unsplash.com/photos/interior-of-a-dimly-lit-shop-with-shelves-of-goods-5_O_7Mu89Z8 | Elist Nguyen | Loja com luz baixa, prateleiras |
| https://unsplash.com/photos/modern-store-interior-with-bright-linear-lights-overhead-QOS6ykz0fKw | T. | Interior moderno com luz linear |
| https://unsplash.com/photos/a-man-walking-through-a-white-room-filled-with-shelves-VLe0ygXEDzI | Declan Sun | Galeria clara (contraste com o tema escuro) |
| https://www.pexels.com/photo/elegant-brown-men-s-dress-shoes-on-display-shelves-33812005/ | jinshu-pulpatta | Calçados de couro em prateleiras modernas |
| https://www.pexels.com/photo/shoemaker-working-in-his-workshop-13354699/ | tkirkgoz | Artesão costurando couro: "feito à mão", seção Sobre |
| https://www.pexels.com/photo/collection-of-handmade-leather-shoes-hanging-on-wall-in-manufacture-6888763/ | meruyert-gonullu | Calçados artesanais na parede (fundo violeta: talvez dessaturar) |

### Termos de busca sugeridos
- Hero: `sneaker dark background studio`, `luxury sneakers black`, `white leather sneaker dramatic light`, `sneaker low key photography`, `minimalist sneaker shadow`.
- Produto: `leather sneakers`, `suede sneaker`, `handmade sneaker`, `premium trainers studio`, `sneaker on pedestal`.
- Interior: `shoe store interior`, `sneaker boutique`, `luxury retail interior dark`, `shoe display shelf minimal`, `concept store interior`.
- Ofício/cuidado: `shoemaker leather workshop`, `sneaker cleaning`, `shoe care brush`, `leather stitching close up`.
- Depoimentos/equipe (marcar "substituir antes de publicar"): `portrait dark background man`, `portrait woman studio low key`.
- Wikimedia Commons: a busca de teste ("sneakers studio photograph") trouxe só 3 resultados irrelevantes. **Não encontrei candidatas boas lá**; priorizar Unsplash e Pexels. No Pixabay, a busca "sneakers black background" trouxe sobretudo fotos de pessoas e de marcas (Adidas, Chucks), com pouca utilidade.

---

## Riscos e o que evitar
- **Autoplay sem pausa ou que volta sozinho após o foco** falha a WCAG 2.2.2 e o padrão APG ([W3C 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)).
- **Lazy-load no slide 1** ou imagem do hero injetada por JS piora o LCP ([web.dev LCP](https://web.dev/articles/optimize-lcp), [web.dev carousel](https://web.dev/articles/carousel-best-practices)).
- **`aria-live="polite"` durante o autoplay** faz o leitor de tela anunciar cada troca. Deixar `off` enquanto o carrossel gira ([APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)).
- **Texto dentro da foto** ou sem véu escuro pode falhar no contraste 1.4.3 ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).
- **Pontos minúsculos como único indicador**: são pouco notados e podem ter alvo menor que 24 px ([NN/g](https://www.nngroup.com/articles/designing-effective-carousels/), [W3C 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)).
- **Cabeçalho fixo cobrindo o foco** ou as âncoras falha a 2.4.11 ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)).
- **Logos de marcas em destaque**: risco de sugerir endosso, o que a licença do Pexels proíbe ([Pexels License](https://www.pexels.com/license/)). Nomes de produto devem ser fictícios.
- **Fotos Unsplash+** são pagas: não baixar ([Unsplash License](https://unsplash.com/license)).
- **Copy de varejo popular** ("Compre já!", "Últimas unidades!", "Imperdível") e comparação com concorrentes quebram o tom ([Thoughtlab](https://www.thoughtlab.com/blog/luxury-brand-copywriting/)).
- **Avaliações falsas em schema** (`aggregateRating` com depoimentos de exemplo) ([Google](https://developers.google.com/search/docs/appearance/structured-data/local-business)).
- **Cormorant em tamanho pequeno**, com traço fino, perde legibilidade no fundo escuro. Usar só em títulos.
- **Zoom/pan contínuo (Ken Burns)** sem respeitar `prefers-reduced-motion` ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).

---

## Fontes consultadas
- W3C WAI-ARIA APG, Carousel Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/carousel/
- W3C, Understanding SC 2.2.2 Pause, Stop, Hide: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- W3C, Understanding SC 1.4.3 Contrast (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- W3C, Understanding SC 2.5.8 Target Size (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- W3C, Understanding SC 2.4.11 Focus Not Obscured (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html
- web.dev, Optimize LCP: https://web.dev/articles/optimize-lcp
- web.dev, Carousel best practices: https://web.dev/articles/carousel-best-practices
- NN/g, Designing Effective Carousels: https://www.nngroup.com/articles/designing-effective-carousels/
- MDN, prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- Google Search Central, LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Business Profile Help, ranking local: https://support.google.com/business/answer/7091
- schema.org, ShoeStore: https://schema.org/ShoeStore
- Google Fonts (metadados no GitHub): https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/METADATA.pb · https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/METADATA.pb · https://raw.githubusercontent.com/google/fonts/main/ofl/playfairdisplay/METADATA.pb
- Limely, Top 10 Minimalist Luxury Ecommerce Websites: https://www.limely.co.uk/blog/top-10-minimalist-luxury-ecommerce-websites
- Redefineweb, Luxury Fashion Ecommerce Web Design Trends 2026: https://redefineweb.com/blog/luxury-fashion-ecommerce-web-design-trends-2026/
- Colorlib, Clothing brand website examples: https://colorlib.com/wp/clothing-brand-website-examples/
- Thoughtlab, Luxury brand copywriting: https://www.thoughtlab.com/blog/luxury-brand-copywriting/
- MarketSmiths, 3 Tips for Effective Luxury Copywriting: https://www.marketsmiths.com/2023/crafting-elegance-3-tips-for-effective-luxury-copywriting/
- Giant Leap Digital, Luxury copywriting for HNW clients: https://giantleapdigital.co.uk/blog/luxury-copywriting-for-hnw-clients-how-to-write-copy-that-converts/
- Unsplash License: https://unsplash.com/license
- Pexels License: https://www.pexels.com/license/
- Buscas de fotos: https://unsplash.com/s/photos/sneakers-dark · https://unsplash.com/s/photos/leather-sneakers · https://unsplash.com/s/photos/sneaker-studio · https://unsplash.com/s/photos/shoe-store-interior · https://www.pexels.com/search/luxury%20sneakers/ · https://www.pexels.com/search/white%20sneakers%20black%20background/ · https://www.pexels.com/search/shoe%20store/ · https://pixabay.com/images/search/sneakers%20black%20background/ · https://commons.wikimedia.org (MediaSearch "sneakers studio photograph")
- Não acessíveis (descartadas): kijo.london (HTTP 403), mycodelesswebsite.com (verificação anti-bot), fonts.google.com (página sem conteúdo renderizável)
