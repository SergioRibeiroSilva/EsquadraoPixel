# Pesquisa: Padaria Trigo Doce

Data: 2026-11-15. Projeto de teste, pesquisa objetiva.

## Resumo executivo
1. Bons sites de padaria têm o mesmo esqueleto: fotos do produto em destaque, credibilidade logo no início e **uma única ação clara**. Aqui essa ação é encomendar pelo WhatsApp. (Zarla, Colorlib, Hostinger)
2. Use o link oficial `https://wa.me/<DDI+DDD+número>?text=<mensagem codificada>`, com mensagem pronta para cada tipo de produto. (FAQ WhatsApp)
3. Paleta creme/marrom: texto marrom-escuro passa no AA com folga. **Terracota claro e verde WhatsApp com texto branco reprovam**, por isso use os tons escuros indicados abaixo.
4. Tipografia: Fraunces nos títulos (serifa suave, eixo SOFT) e uma sans legível no texto, dentro do limite de 2 famílias.
5. WCAG 2.2 AA: contraste de 4.5:1 (3:1 para texto grande), alvos de pelo menos 24x24 px e foco que o cabeçalho fixo não cubra.

## Referências visuais
Use só os padrões. Não copie textos nem imagens.
- https://www.zarla.com/inspiration/bakery : roundup de padarias reais (Leaven & Co, Magnolia Bakery, Self Raised). O padrão em comum é credibilidade logo no início, produto como visual principal e um único próximo passo.
- https://colorlib.com/wp/bakery-websites-design/ : 26 exemplos, entre eles um estúdio familiar de bolos personalizados (Ista Bake Studio). Combina fotos apetitosas com um pedido simples.
- https://webflow.com/blog/bakery-websites : exemplos curados. Serve para ver hierarquia de hero e grid de produtos.
- https://orderable.com/blog/bakery-website-examples/ : exemplos com foco em pedido (SusieCakes). Alerta que um fluxo de pedido confuso faz perder clientes.
- https://www.hostinger.com/tutorials/bakery-website-design/ : layout limpo que deixa os produtos em evidência.
- https://kitchenbusiness.com/?p=2839 : padarias artesanais (Poilâne, Tartine, Stohrer). Pontos fortes: cor, logo, navegação e cardápio bem visível.

Atenção: boa parte dessas listas vem de fornecedores de construtores de sites. São curadoria, não estudo de conversão. Não encontrei dados quantitativos confiáveis sobre conversão em sites de padaria.

## Padrões recomendados

### Seções e fluxo de encomenda (WhatsApp)
- Página inicial com visão geral, produtos-assinatura e CTA principal. No cardápio, categorias, preço e foto por item (https://consultevo.com/hubspot-bakery-website-tips/).
- Formato oficial do link: `https://wa.me/5500900000000?text=...`. O número vai em formato internacional, sem zeros extras, parênteses ou hífens. O texto é codificado em URL e aparece já preenchido no campo de mensagem (https://faq.whatsapp.com/5913398998672934).
- A mensagem pode ser editada e só é enviada quando o cliente toca em enviar. O link não informa à empresa se houve clique (https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link). Por isso o passo a passo "como encomendar" deve deixar claro o que acontece depois.
- Aplicação sugerida:
  - Uma mensagem pronta diferente por CTA: "Olá! Quero encomendar um bolo personalizado", "...um kit de salgados", "...uma cesta de café da manhã".
  - Passo a passo em 3 etapas: escolha, chame no WhatsApp, combine data e retirada.
  - Abrir com `target="_blank" rel="noopener"` e avisar no rótulo acessível que o link abre o WhatsApp.
  - CTA fixo no rodapé da tela no celular, desde que não cubra o foco (ver acessibilidade).
- O botão oficial "Chat on WhatsApp" só existe em inglês (FAQ acima). Para um site em pt-BR, prefira um botão próprio com texto "Encomendar pelo WhatsApp" e ícone.

### Cor
Proposta de paleta. Os contrastes foram calculados por mim com a fórmula de luminância relativa da WCAG. O avaliador técnico deve confirmar com uma ferramenta.

| Uso | Cor | Contraste | Resultado |
|---|---|---|---|
| Fundo creme | #FBF5EC | - | - |
| Texto principal marrom-café | #3B2A1E sobre creme | ~12.6:1 | AA/AAA |
| Texto secundário marrom-médio | #6B4F3A sobre creme | ~6.9:1 | AA |
| Acento terracota escuro (links, títulos) | #A0482A sobre creme | ~5.6:1 | AA |
| Botão terracota com texto branco | #FFFFFF sobre #A0482A | ~6.1:1 | AA |
| Terracota "padrão" | #B5532E sobre creme | ~4.57:1 | passa por pouco, arriscado |
| Terracota claro | #CC7A50 sobre creme | ~3.0:1 | **reprova** em texto normal |
| Mel (só fundo/decoração) | #D9A441 com texto #3B2A1E | ~6.1:1 | AA |
| Verde WhatsApp com texto branco | #FFFFFF sobre #25D366 | ~2.0:1 | **reprova** |
| Verde WhatsApp com texto escuro | #3B2A1E sobre #25D366 | ~6.9:1 | AA |

- Regras: 4.5:1 para texto normal e 3:1 para texto grande (a partir de 18pt, ou 14pt em negrito). Os limites não são arredondados: 4.499:1 reprova (https://w3.org/WAI/WCAG20/Understanding/contrast-minimum, https://www.w3.org/WAI/WCAG22/Techniques/general/G18.html). O critério também vale para placeholder e para texto em hover ou foco.
- Texto sobre foto: use overlay escuro ou um painel creme por trás e meça o contraste no pior ponto da imagem (https://webaim.org/articles/contrast/).

### Tipografia
- Títulos: **Fraunces** (Google Fonts, variável), com eixos wght, opsz, SOFT (0 a 100) e WONK. Com SOFT alto, as formas ficam arredondadas e lembram Souvenir/Bookman, o que dá o tom artesanal sem usar script (https://fonts.google.com/specimen/Fraunces/about).
- Texto: uma sans humanista legível do Google Fonts (por exemplo Nunito Sans ou Inter), em 16 a 18px com line-height de 1.5 a 1.6. Não pesquisei comparativos entre sans. A escolha fica com o designer.
- Evite script em textos longos, preços e botões. Se usar script, só em detalhe decorativo curto.
- Carregue só os pesos necessários com `display=swap` (no máximo 2 famílias, conforme o briefing).

### Layout e animação
- Mobile-first, grid de produtos em cartões (foto, nome, preço de exemplo), seções intercaladas entre creme e tom mel claro.
- Animações discretas (fade-in no scroll), respeitando `prefers-reduced-motion`.
- Imagens otimizadas com `loading="lazy"`, porque desempenho e facilidade de encontrar o site pesam tanto quanto o design (https://consultevo.com/hubspot-bakery-website-tips/).

### Acessibilidade (WCAG 2.2 AA)
- 2.5.8: alvos de pelo menos 24x24 CSS px ou com espaçamento suficiente. Para CTAs no celular, recomendo 44x44 px, que é o nível AAA de 2.5.5 (https://w3.org/WAI/standards-guidelines/wcag/new-in-22/, https://dequeuniversity.com/resources/wcag-2.2).
- 2.4.11: o elemento focado não pode ficar totalmente escondido por cabeçalho fixo, barra fixa ou widget. Use `scroll-padding-top` e `scroll-padding-bottom` (fonte acima).
- Foco visível com contorno de alto contraste (ex.: 3px #3B2A1E com offset) e link "pular para o conteúdo".

## Riscos e o que evitar
- Terracota ou mel claros em texto pequeno reprovam o AA (ver tabela).
- Botão verde WhatsApp com texto branco reprova (~2:1). Use texto escuro ou o botão terracota escuro com ícone.
- CTA fixo no celular cobrindo o conteúdo ou o foco (2.4.11).
- Script em textos longos, porque prejudica a legibilidade.
- Fotos pesadas no hero deixando o site lento no 4G.
- Links wa.me com número mal formatado ou texto sem codificação (use `encodeURIComponent`).
- Depender de um único CTA no topo. Repita no hero, na seção de encomendas e no CTA final.
- Copiar layout ou texto dos sites de referência.

## Fontes consultadas
- https://faq.whatsapp.com/5913398998672934
- https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link
- https://w3.org/WAI/WCAG20/Understanding/contrast-minimum
- https://www.w3.org/WAI/WCAG22/Techniques/general/G18.html
- https://webaim.org/articles/contrast/
- https://w3.org/WAI/standards-guidelines/wcag/new-in-22/
- https://dequeuniversity.com/resources/wcag-2.2
- https://fonts.google.com/specimen/Fraunces/about
- https://www.zarla.com/inspiration/bakery
- https://colorlib.com/wp/bakery-websites-design/
- https://webflow.com/blog/bakery-websites
- https://orderable.com/blog/bakery-website-examples/
- https://www.hostinger.com/tutorials/bakery-website-design/
- https://kitchenbusiness.com/?p=2839
- https://consultevo.com/hubspot-bakery-website-tips/
