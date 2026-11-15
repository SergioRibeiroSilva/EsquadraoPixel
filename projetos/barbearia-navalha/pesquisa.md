# Pesquisa — Barbearia Navalha

> Pesquisa enxuta (projeto de teste). Data: 2026-11-14. Só padrões, nada copiado de sites de terceiros.

## Perguntas de pesquisa
1. Quais padrões visuais e de seções aparecem em sites de barbearia com fundo escuro e detalhes dourados?
2. Como montar o CTA de agendamento pelo WhatsApp do jeito correto?
3. Quais requisitos WCAG 2.2 AA mais afetam esta landing (contraste, alvo de toque, foco)?
4. Como usar animação sem atrapalhar a acessibilidade?

## Resumo executivo
- O padrão do nicho é fundo preto ou carvão com **um único** acento (dourado, latão ou âmbar), tipografia serifada ou com cara de brasão e **um botão de agendamento bem visível** (https://www.zarla.com/guides/barbershop-website-examples).
- A ordem mais comum das seções é hero forte, serviços com preço, equipe, galeria/depoimentos, horário e local, o que já bate com o briefing (mesma fonte).
- CTA: `https://wa.me/5511900000000?text=<mensagem codificada para URL>`, com o número no formato internacional, sem +, parênteses nem traços (https://faq.whatsapp.com/5913398998672934).
- Acessibilidade AA: contraste de 4.5:1 no texto, alvo de toque de pelo menos 24x24 px (ideal 44x44), foco visível e nunca escondido (https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/, https://dequeuniversity.com/resources/wcag-2.2).
- Animações discretas, desligadas quando o usuário ativa `prefers-reduced-motion` (https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

## Referências visuais
Exemplos citados em artigos de curadoria. Observei os padrões descritos nos artigos, sem abrir os sites um por um.
- **Imperium Barbershop**: brasão dourado, títulos serifados, botão de agendar âmbar e headline que cita a cidade. Lição: uma afirmação específica com o nome do lugar convence mais (https://www.zarla.com/guides/barbershop-website-examples).
- **Long & Short Barber Co**: um só botão dourado sobre preto, paleta disciplinada. Uma foto calorosa no hero quebra a frieza do tema escuro (mesma fonte).
- **Ironside & Crowe Barber Co**: carvão + latão com ar tradicional, e a tabela de preços fica perto do topo (mesma fonte).
- **Master Barbers LA**: brasão vitoriano grande no lugar de foto, a tipografia carrega a marca. Útil aqui porque ainda não temos fotos (mesma fonte).
- **Golden Gate Barbershop** (Webflow): tema escuro com dourado e layout moderno (https://webflow.com/made-in-webflow/website/gg-barbershop, citado em https://nanoglobals.com/barbershop-websites/).

## Padrões recomendados

### Layout
- Mobile-first, uma coluna no celular, grade de 2 ou 3 colunas para serviços e equipe a partir do tablet. Respiro generoso, como pede o briefing.
- Hero com uma única ideia forte (headline + CTA). Sem fotos, o centro visual pode ser o logotipo/brasão em SVG (https://www.zarla.com/guides/barbershop-website-examples).
- Botão "Agendar" fixo no cabeçalho. Os guias do nicho recomendam deixar o agendamento visível no topo de todas as telas (https://www.zarla.com/guides/barbershop-website-examples, https://nanoglobals.com/barbershop-websites/).
- Serviços com preço logo depois do hero (padrão Ironside & Crowe, fonte acima).

### Tipografia (Google Fonts, no máximo 2 famílias)
- Títulos: uma serifada de alto contraste ou uma condensada forte, como pede o briefing. Sugestões: Playfair Display (https://fonts.google.com/specimen/Playfair+Display) ou Oswald (https://fonts.google.com/specimen/Oswald).
- Texto corrido: uma sans-serif legível, por exemplo Inter (https://fonts.google.com/specimen/Inter).
- Essas fontes são sugestões; a escolha final fica com o designer.

### Cor
- Base preta ou carvão, um acento metálico quente e texto em off-white (https://www.zarla.com/guides/barbershop-website-examples).
- Dourado sobre preto costuma passar bem no contraste. O risco é o contrário: texto escuro sobre botão dourado, ou dourado escuro sobre carvão. Confira cada par no WebAIM (https://webaim.org/resources/contrastchecker/). Mínimos: 4.5:1 para texto normal, 3:1 para texto grande e componentes de interface (https://dequeuniversity.com/resources/wcag-2.2).

### Animação
- Use poucas: fade/slide curto ao rolar, hover nos botões e nos cards.
- Coloque tudo dentro de `@media (prefers-reduced-motion: no-preference)` ou anule em `reduce` (https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

### Seções (validadas com o briefing)
Cabeçalho + Agendar, hero, serviços com preço, diferenciais, equipe, depoimentos, horário e mapa, CTA final, rodapé. Bate com os blocos recorrentes do nicho (https://www.zarla.com/guides/barbershop-website-examples). Os depoimentos são fictícios e precisam ser marcados como exemplo no conteúdo.

### Acessibilidade (WCAG 2.2 AA)
- 2.5.8 Tamanho do alvo (AA): pelo menos 24x24 CSS px ou espaçamento suficiente. Para botões e links de toque, prefira 44x44 (https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/, https://dequeuniversity.com/resources/wcag-2.2).
- 2.4.7 Foco visível e 2.4.11 Foco não encoberto (AA): o cabeçalho fixo não pode cobrir o elemento focado. Use `scroll-padding-top` (https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).
- 2.4.13 Aparência do foco é AAA, então é opcional. Mesmo assim vale um contorno de 2px com contraste de 3:1 (mesma fonte).
- Links do WhatsApp e do Instagram com texto acessível (ex.: "Agendar pelo WhatsApp"). O mapa em imagem precisa de `alt` e do endereço também em texto.

## Riscos e o que evitar
- **Dourado com contraste baixo**: texto pequeno em dourado escuro sobre carvão pode reprovar no 4.5:1. Teste no WebAIM (https://webaim.org/resources/contrastchecker/).
- **Vários acentos de cor**: o nicho funciona com um acento só (https://www.zarla.com/guides/barbershop-website-examples).
- **Link do WhatsApp mal formatado**: nada de `+`, parênteses ou traços, e a mensagem precisa ser codificada para URL (espaço = `%20`). A própria página de ajuda do WhatsApp tem exemplos com erros (`wa.me//`, `%2s`), então não copie dela sem conferir (https://faq.whatsapp.com/5913398998672934).
- **Mensagem pré-preenchida**: o usuário ainda precisa tocar em enviar. A copy não deve prometer que o "agendamento está confirmado" (https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link).
- **Cabeçalho fixo cobrindo âncoras e foco** (WCAG 2.4.11, fonte W3C acima).
- **Animações pesadas ou sem respeitar reduced-motion** (fonte MDN acima).
- **Clichês de "vintage"** em excesso (texturas, muitos ornamentos) pesam a página e contrariam o pedido de respiro e leveza do briefing (decisão de projeto, sem fonte externa).
- **Não encontrei** estatísticas confiáveis de conversão específicas de barbearias. Não use números nesse sentido.

## Fontes consultadas
- https://www.zarla.com/guides/barbershop-website-examples
- https://nanoglobals.com/barbershop-websites/
- https://webflow.com/made-in-webflow/website/gg-barbershop
- https://faq.whatsapp.com/5913398998672934
- https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link
- https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- https://dequeuniversity.com/resources/wcag-2.2
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- https://webaim.org/resources/contrastchecker/
- https://fonts.google.com/specimen/Playfair+Display
- https://fonts.google.com/specimen/Oswald
- https://fonts.google.com/specimen/Inter
