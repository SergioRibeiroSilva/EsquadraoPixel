# Pesquisa — Rosa Bordô | bonecas de pano

> Pesquisado em 2026-11-17 para orientar design (etapa 2), copy (etapa 3) e imagens (etapa 4). Todas as afirmações trazem a URL de origem. Padrões, não cópias.

## Resumo executivo
1. Sites de bonecas artesanais que funcionam colocam a artesã e o processo à frente, com fotos grandes, muito respiro e tom de "livro de histórias" ([Aeolidia/Bamboletta](https://aeolidia.com/ecommerce-website-handmade-dolls-bamboletta/), [Freshy Sites](https://freshysites.com/?p=60171)).
2. O carrossel do hero deve seguir o padrão WAI-ARIA (region + `aria-roledescription`, botão pausar/retomar, pausa em hover/foco, `aria-live` alternando) e a WCAG 2.2.2; a primeira imagem é o LCP: no HTML, sem lazy, `fetchpriority="high"` ([W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/), [web.dev](https://web.dev/articles/fetch-priority)).
3. Paleta proposta (bordô #6E1A37 sobre creme #FBF5EF ≈ 10,4:1) passa AA com folga; rosa médio só como fundo/decoração, nunca com texto branco (≈ 2,0:1).
4. Par de fontes recomendado: Fraunces (títulos, serifada "soft") + Nunito (texto), ambas variáveis e OFL no Google Fonts.
5. Risco legal: brinquedos no Brasil exigem certificação Inmetro; "sob encomenda" é isento, mas não pode ser exposto em loja virtual/catálogo. Redigir como "encomendas personalizadas", sem selo Inmetro e sem prometer "seguro para bebês" ([Inmetro FAQ](https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/brinquedos/o-que-sao-os-brinquedos-sob-encomenda-e-de-que-forma-devem-atender-ao-regulamento)).

## Perguntas de pesquisa
1. Que padrões visuais e de seções usam sites de bonecas/brinquedos artesanais modernos?
2. Como construir um carrossel grande no hero que seja acessível e não prejudique o LCP/CLS?
3. Quais combinações rosa + bordô + neutros passam no contraste WCAG AA?
4. Que par de Google Fonts transmite afeto sem perder legibilidade?
5. O que dizer, com responsabilidade, sobre segurança para bebês, lavagem e personalização? Que fotos livres servem ao carrossel?

## Referências visuais
- **Bamboletta (estudo de caso Aeolidia)**: https://aeolidia.com/ecommerce-website-handmade-dolls-bamboletta/ — tipografia de "livro de histórias", ilustrações feitas à mão, clima suave e acolhedor; cabeçalho comunica "feito à mão" e "envio"; seção "Meet Our Dolls" e feed do Instagram como bastidores. Aplicar: faixa curta "Feito à mão · Enviamos para todo o Brasil" no topo; ornamentos SVG de linha/pesponto no lugar das ilustrações.
- **Freshy Sites — sites de artesãos**: https://freshysites.com/?p=60171 — liderar pela pessoa ("por que faço / como faço"), mostrar processo, muito espaço em branco, grade para coleções, prova social com fotos de uso. Aplicar: seção "Sobre a artesã" com foto das mãos costurando e voz em 1ª pessoa; vitrine em grade de 6 cards.
- **Duda — modelo de loja de artesanato**: https://www.duda.co/website-builder/handmade-crafts-store — páginas de produto, bio da artista, histórias do ofício e close-ups de detalhe. Aplicar: cards com foto de detalhe (bordado do rosto) no hover/foco.
- **Seesucht Manufaktur (Wix)**: https://www.wix.com/explore/websites/site/seesucht-manufaktur — poucos "mais queridos" em destaque e sinais de confiança (políticas) no rodapé. Aplicar: rodapé com prazo, envio e formas de pagamento.
- **While She Naps — rag dolls**: https://whileshenaps.com/awesome-handmade-toys-rag-dolls/ — referência de fotografia de produto de bonecas de pano (fundo neutro, luz natural). Usar só como referência de estilo fotográfico.

## Padrões recomendados

### Layout e seções
- Mobile-first, uma coluna no celular; vitrine em grade 1/2/3 colunas. Público vem do Instagram pelo celular (briefing).
- Ordem sugerida (do briefing): hero-carrossel → coleção → sobre/processo → personalização → como encomendar (3–4 passos) → depoimentos → FAQ (`<details>`) → CTA final + Instagram → rodapé.
- Generoso espaço em branco e poucas peças por vez reforçam a sensação de cuidado ([Freshy Sites](https://freshysites.com/?p=60171)).
- Copy do carrossel: frases claras e CTA descritivo ("Encomendar minha boneca"), não slogans vagos ([NN/g](https://www.nngroup.com/articles/auto-forwarding/)).

### Carrossel do hero (acessibilidade)
- Container `<section>` com `aria-roledescription="carousel"` e `aria-label` (ex.: "Destaques"); cada slide com `role="group"`, `aria-roledescription="slide"` e rótulo "1 de 3" ou nome do slide, sem repetir a palavra "slide" ([W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)).
- Botão nativo pausar/retomar, primeiro na ordem de Tab dentro do carrossel; rótulo muda ("Pausar apresentação"/"Retomar apresentação"), sem `aria-pressed` ([W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)). Atualizar só o rótulo/atributos via JS, não recriar o botão, para não perder o foco ([W3C WAI Tutorials](https://www.w3.org/WAI/tutorials/carousels/animations/)).
- Rotação para quando o foco do teclado entra (só retoma se a pessoa pedir) e durante o hover do mouse ([W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)).
- Wrapper dos slides com `aria-atomic="false"` e `aria-live="off"` enquanto gira / `"polite"` quando parado ([W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)).
- Setas e bolinhas não movem o foco; bolinha do slide atual com `aria-disabled="true"` (não `disabled`) para seguir focável ([W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)). Slides ocultos: `aria-hidden="true"` + `inert` para tirar links ocultos do Tab ([W3C WAI Tutorials](https://www.w3.org/WAI/tutorials/carousels/animations/)).
- WCAG 2.2.2 (nível A): movimento automático com mais de 5 s ao lado de outro conteúdo exige mecanismo de pausar/parar ([W3C Understanding 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)).
- Intervalo: a NN/g mostra que 5 s foi rápido demais para ler e recomenda evitar autoavanço ([NN/g](https://www.nngroup.com/articles/auto-forwarding/)). Como o autoplay é pedido do usuário, sugerimos intervalo longo (7–8 s, decisão nossa, não de fonte) e texto curto por slide.
- `prefers-reduced-motion: reduce`: sem autoplay e sem transição deslizante (troca instantânea ou fade curto) — via CSS e `matchMedia` ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
- Alvos de toque de setas/bolinhas/pausa com ao menos 24×24 px (WCAG 2.5.8 AA); recomendamos 44×44 px no celular ([W3C Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)).
- Teclado: Tab/Shift+Tab pelos controles; setas do teclado são opcionais no padrão.

### Carrossel do hero (desempenho)
- Todos os slides no HTML (não injetar por JS); o carrossel do topo costuma ser o LCP ([web.dev carrossel](https://web.dev/articles/carousel-best-practices)).
- Primeira imagem com `fetchpriority="high"` e sem `loading="lazy"`; demais com `fetchpriority="low"`/`loading="lazy"` ([web.dev fetch priority](https://web.dev/articles/fetch-priority)).
- Mesmas dimensões intrínsecas em todos os slides (senão outro slide vira LCP); `width`/`height` declarados; `srcset` com 2–3 larguras ([web.dev carrossel](https://web.dev/articles/carousel-best-practices)).
- Animar só `transform`/`opacity`; não animar `left`/`width`; controles não devem aparecer/sumir no hover deslocando layout (CLS) ([web.dev carrossel](https://web.dev/articles/carousel-best-practices)).
- Formato: WebP/AVIF ou JPEG bem comprimido, ~1600–1920 px de largura para o hero (sugestão nossa).

### Cor (contraste calculado pela fórmula de luminância relativa da WCAG; conferir no [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
| Papel | Cor | Uso | Contraste |
|---|---|---|---|
| Bordô (primária) | `#6E1A37` | títulos, botões, links, foco | sobre creme ≈ 10,4:1; branco sobre bordô ≈ 11,3:1 |
| Creme (fundo) | `#FBF5EF` | fundo geral | — |
| Rosa claro (fundo de seção) | `#F6DDE3` | faixas alternadas | bordô sobre ele ≈ 8,8:1 |
| Rosa médio (acento) | `#E8A3B5` | fundos de selo, ornamentos | bordô sobre ele ≈ 5,5:1 (ok); **branco sobre ele ≈ 2,0:1 (reprova)**; sobre creme ≈ 1,9:1 (só decorativo) |
| Texto | `#3A2A2E` | corpo | sobre creme ≈ 12,5:1 |
| Sálvia (acento) | `#7A8F6E` | ícones/linhas | sobre creme ≈ 3,2:1 (só elementos gráficos, 3:1) |
| Sálvia escuro | `#4F6146` | texto de apoio/etiquetas | sobre creme ≈ 6,2:1 |
- Regras AA: 4,5:1 texto normal, 3:1 texto grande e componentes de interface ([WCAG 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)).
- Texto sobre foto no hero: usar véu/gradiente bordô ou caixa creme atrás do texto; não confiar na foto.

### Tipografia
- **Títulos: Fraunces** — serifada "Old Style soft", inspirada em Windsor/Souvenir/Cooper; eixos variáveis SOFT, WONK, opsz e wght; licença OFL ([GitHub Fraunces](https://github.com/undercasetype/Fraunces), [google/fonts](https://github.com/google/fonts/tree/main/ofl/fraunces)). Sugestão: SOFT 100, peso 500–600, WONK 1 só em display grande.
- **Texto: Nunito** — sans arredondada, variável no eixo de peso ([google/fonts](https://github.com/google/fonts/tree/main/ofl/nunito)). Corpo 17–18 px, entrelinha 1,6.
- Carregar só os pesos usados, com `display=swap` e `preconnect`.
- Alternativa (não verificada em detalhe nesta pesquisa): Lora + Nunito Sans.

### Animação e detalhes
- Pesponto tracejado: `border: 2px dashed` ou SVG `stroke-dasharray` em cards/divisores (padrão visual do briefing).
- Microinterações discretas (elevação de card, sublinhado tracejado); tudo desligado em `prefers-reduced-motion` ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
- Foco visível: contorno bordô 3 px com `outline-offset`.

### Conteúdo (insumos para o redator)
- **Segurança para bebês** (formular como cuidados, não como certificação):
  - Olhos e boca bordados (sem botões, contas ou olhos plásticos) para menores de 3 anos; guias de segurança apontam olhos plásticos como risco de engasgo ([Funky Friends Factory](https://www.funkyfriendsfactory.com/blog/toy-safety-tips-for-home-made-toys/), [IKEA Kramig](https://ikea.ee/en/products/kramig-soft-toy-black-white-art-30221316)).
  - Costuras firmes, sem fios soltos; sem fitas/cordões acima de 22 cm; enchimento limpo; descartar se rasgar ([ACCC Product Safety Australia](https://www.productsafety.gov.au/products/babies-kids/toys/stuffed-toys)).
  - Partes pequenas são risco para menores de 3 anos; tecido/fio soltos não contam como "small part" na regra norte-americana ([CPSC](https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Small-Parts-for-Toys-and-Childrens-Products)).
  - Não deixar bonecas/pelúcias no berço durante o sono do bebê (até 1 ano) ([HealthyChildren/AAP](https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx)).
- **Lavagem/cuidados**: preferir limpeza localizada com pano úmido e sabão neutro, enxaguar com pano de água limpa, secar à sombra/deitada sobre toalha; evitar encharcar, calor e alvejante; testar a cor em área escondida ([Wyld Bub](https://wyldbub.com/blogs/news/how-to-wash-clean-kids-dolls-toy-care-tips-from-wyld-bub), [Nova Natural](https://blog.novanatural.com/?p=3029), [Seventh Generation](https://www.seventhgeneration.com/blog/how-to-clean-stuffed-animals)). Não encontrei fonte primária de norma específica para lavagem de bonecas de pano artesanais.
- **Personalização**: cor de pele, cabelo, roupinha, nome bordado (do briefing); apresentar como "monte a sua" com chips visuais, e lembrar que nome bordado é o único detalhe aplicado em bebês (sem acessórios soltos).

## Riscos e o que evitar
- **Regulação Inmetro**: brinquedo para crianças até 14 anos deve ser certificado e registrado ([Agência Brasil](https://agenciabrasil.ebc.com.br/geral/noticia/2022-06/regulamento-para-brinquedos-no-brasil-completa-30-anos), [Inmetro FAQ registro](https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/brinquedos/se-um-brinquedo-nao-possui-registro-no-inmetro-e-esta-sendo-comercializado-em-territorio-nacional-ele-esta-irregular)). Peças **sob encomenda** são isentas de certificação, mas devem atender ao regulamento, **não podem ser oferecidas para venda direta em loja virtual ou catálogo** e não podem usar o selo/marca Inmetro ([Inmetro FAQ sob encomenda](https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/brinquedos/o-que-sao-os-brinquedos-sob-encomenda-e-de-que-forma-devem-atender-ao-regulamento)). Recomendações: apresentar a vitrine como "modelos de inspiração para sua encomenda" (sem carrinho, sem "comprar agora"), não usar selo Inmetro, evitar "certificada" ou "100% segura"; registrar pendência para a artesã confirmar com o Inmetro/OCP. Isto não é parecer jurídico.
- **Autoplay**: NN/g desaconselha autoavanço (pouco tempo de leitura, parece anúncio) ([NN/g](https://www.nngroup.com/articles/auto-forwarding/)). Mitigar com intervalo longo, pausa visível e mensagem principal fixa/repetida.
- **Contraste**: rosa médio com texto branco reprova AA; rosa sobre creme é só decorativo.
- **Fotos de banco**: muitas são retrato (2:3); no hero 16:9 usar `object-fit: cover` com `object-position` ajustado, ou layout dividido (foto + painel creme). Evitar fotos "creepy"/bonecas quebradas que aparecem nas buscas. Unsplash+ é pago: conferir na página de cada foto. Pexels proíbe sugerir endosso de pessoas identificáveis e usar a imagem como marca ([Pexels License](https://www.pexels.com/license/)).
- **Busca "ragdoll"** em Pexels retorna gatos da raça Ragdoll; usar "handmade doll", "cloth doll".
- Não copiar textos nem ilustrações da Bamboletta ou de outros sites.

## Indicações de fotos (banco livre) — verificar licença na página antes de baixar
Hero (preferir paisagem ou recorte largo):
| # | URL | Conteúdo | Autor | Licença / formato |
|---|---|---|---|---|
| 1 | https://www.pexels.com/photo/a-group-of-dolls-on-a-table-with-a-tablecloth-27782862/ | bonecas artesanais coloridas sobre tecido bordado | Mariya Klyachko | Pexels; 6537×4358 paisagem |
| 2 | https://www.pexels.com/photo/photo-of-a-woman-s-hands-sewing-6876052/ | mãos costurando tecido branco (processo) | Sara Puig Sanz | Pexels; 5184×3456 paisagem |
| 3 | https://www.pexels.com/photo/charming-handmade-doll-display-with-dark-hair-38286876/ | boneca de pano com vestido estampado | Enio Engenheiro | Pexels; 3456×5184 retrato |
| 4 | https://www.pexels.com/photo/handmade-doll-with-miniature-companion-35343461/ | boneca de pano com miniatura, parede texturizada, tons vermelho/bege | bahar (@bahar-406314994) | Pexels; 4993×6659 retrato |
| 5 | https://www.pexels.com/photo/charming-handmade-fabric-rabbit-dolls-in-pastel-dresses-38238529/ | coelhinhas de tecido com vestidos pastel | zeynepshoots | Pexels; 4000×6000 retrato |
| 6 | https://pixabay.com/photos/doll-handmade-toy-hair-fashion-3361741/ | boneca de pano, cabelo de lã, casaco rosa, vestido de bolinhas, fundo branco | ErikaWittlieb | Pixabay Content License; 3527×3917 |
| 7 | https://pixabay.com/photos/doll-baby-doll-rag-doll-baby-toy-1550807/ | boneca de pano de vestido amarelo na grama | jennifervara | Pixabay Content License; 3456×4608 retrato |
| 8 | https://unsplash.com/photos/5CvJwtQsMnU | boneca de pano e flores secas em jarra branca | Kate Andress | Unsplash License (gratuita) |
| 9 | https://unsplash.com/photos/92bwSf5NecY | duas bonecas de tricô coloridas penduradas | Mavi Atlas | Unsplash License (gratuita) |
| 10 | https://unsplash.com/photos/xssNT5VjsyM | carretéis de linha coloridos (textura/processo) | Victor Volkov | Unsplash License (gratuita) |
Outros candidatos não verificados individualmente: Pexels mãos costurando [11482124](https://www.pexels.com/photo/close-up-of-woman-hands-sewing-11482124/), [27782858](https://www.pexels.com/photo/two-hands-holding-threads-27782858/), bordado [29796875](https://www.pexels.com/photo/traditional-embroidery-with-colorful-patterns-29796875/), bonecas de tricô [7456865](https://www.pexels.com/photo/a-close-up-shot-of-knitted-dolls-7456865/); Pixabay [rag doll 299992](https://pixabay.com/photos/doll-rag-doll-toys-299992/), [ginger 14332](https://pixabay.com/photos/doll-toy-rag-cloth-kids-ginger-14332/); Wikimedia Commons [Category:Rag dolls](https://commons.wikimedia.org/wiki/Category:Rag_dolls) (ex.: "Hand made dolls.jpg", "Knitted rag doll.jpg"; conferir licença CC de cada arquivo).
Sugestão de trio para o carrossel: (1) boneca em destaque — #6 ou #3; (2) processo/mãos — #2; (3) coleção — #1. Todas marcadas "substituir antes de publicar" pelas fotos do @arosabordo.

## Fontes consultadas
- https://www.w3.org/WAI/ARIA/apg/patterns/carousel/
- https://www.w3.org/WAI/tutorials/carousels/animations/
- https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- https://webaim.org/resources/contrastchecker/
- https://web.dev/articles/carousel-best-practices
- https://web.dev/articles/fetch-priority
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- https://www.nngroup.com/articles/auto-forwarding/
- https://aeolidia.com/ecommerce-website-handmade-dolls-bamboletta/
- https://freshysites.com/?p=60171
- https://www.duda.co/website-builder/handmade-crafts-store
- https://www.wix.com/explore/websites/site/seesucht-manufaktur
- https://whileshenaps.com/awesome-handmade-toys-rag-dolls/
- https://github.com/undercasetype/Fraunces
- https://github.com/google/fonts/tree/main/ofl/fraunces
- https://github.com/google/fonts/tree/main/ofl/nunito
- https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/brinquedos/o-que-sao-os-brinquedos-sob-encomenda-e-de-que-forma-devem-atender-ao-regulamento
- https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/brinquedos/se-um-brinquedo-nao-possui-registro-no-inmetro-e-esta-sendo-comercializado-em-territorio-nacional-ele-esta-irregular
- https://agenciabrasil.ebc.com.br/geral/noticia/2022-06/regulamento-para-brinquedos-no-brasil-completa-30-anos
- https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Small-Parts-for-Toys-and-Childrens-Products
- https://www.productsafety.gov.au/products/babies-kids/toys/stuffed-toys
- https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx
- https://www.funkyfriendsfactory.com/blog/toy-safety-tips-for-home-made-toys/
- https://ikea.ee/en/products/kramig-soft-toy-black-white-art-30221316
- https://wyldbub.com/blogs/news/how-to-wash-clean-kids-dolls-toy-care-tips-from-wyld-bub
- https://blog.novanatural.com/?p=3029
- https://www.seventhgeneration.com/blog/how-to-clean-stuffed-animals
- https://www.pexels.com/license/
- https://unsplash.com/s/photos/rag-doll · https://unsplash.com/s/photos/handmade-doll · https://unsplash.com/s/photos/sewing-fabric
- https://www.pexels.com/search/handmade%20doll/ · https://www.pexels.com/search/hand%20sewing/
- https://pixabay.com/images/search/rag%20doll/
- https://commons.wikimedia.org/wiki/Category:Rag_dolls
- Páginas individuais das fotos listadas na tabela acima.
