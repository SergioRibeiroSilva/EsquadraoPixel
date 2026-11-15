# Pesquisa — Arena Fight Sobradinho

> Etapa 1 (pesquisador-fontes), 2026-11-15. Base: `briefing.md`.
> Muitas fontes de conversão são blogs de fornecedores de software para academias (Gymdesk, Clubworx, Spark, Ground Standard). Trate-as como orientação de mercado, não como estudo independente. Números citados por elas não foram verificados.

## Resumo executivo
1. O padrão que converte no nicho é ter **uma oferta e uma ação**: "aula experimental grátis" visível já na primeira dobra, repetida ao longo da página e fixa no celular, com frase de redução de risco ao lado do botão ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it), [Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)).
2. O título deve dizer **modalidade + público + local** (ex.: "MMA em Sobradinho-DF"), e a página deve usar linguagem de boas-vindas ao iniciante, com grade de horários fácil de achar e prova social ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it)).
3. O conteúdo das modalidades pode se apoiar em fatos verificáveis: Muay Thai como "arte das oito armas" com clinch, Karatê (origem em Okinawa, kihon/kata/kumite, olímpico em Tóquio 2020) e Wrestling (estilos livre e greco-romano, base de quedas e controle no MMA) ([Wikipedia: Muay Thai](https://en.wikipedia.org/wiki/Muay_Thai), [Karate](https://en.wikipedia.org/wiki/Karate), [Amateur wrestling](https://en.wikipedia.org/wiki/Amateur_wrestling)).
4. Para o CTA, use o link oficial `https://wa.me/55DDDNUMERO?text=...` com a mensagem codificada para URL ([WhatsApp FAQ](https://faq.whatsapp.com/5913398998672934)). Para SEO local, use JSON-LD `ExerciseGym` com NAP e horários, e conecte o site a um Perfil da Empresa no Google ([Google](https://developers.google.com/search/docs/appearance/structured-data/local-business), [schema.org](https://schema.org/ExerciseGym), [Google Business Profile](https://support.google.com/business/answer/7091?hl=en)).
5. Acessibilidade (AA): contraste 4.5:1 no texto e 3:1 no texto grande, alvos de toque com pelo menos 24px, foco visível e `prefers-reduced-motion` ([W3C 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [W3C 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).

---

## Referências visuais
Use-as como fonte de padrões. Não copie textos, imagens nem layout literal.

| Referência | Observação / padrão a extrair |
|---|---|
| [Two Bridges Muay Thai](https://twobridgesmuaythai.com) | Hero em tela cheia com treino real, botão de inscrição persistente e aulas e preços a um clique na navegação, segundo a análise da [Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website). Aplicação: hero escuro com foto de treino em alto contraste e CTA fixo. |
| [Adayama BJJ](https://adayamabjj.com) | Foto real do tatame no hero, com a captação sobreposta ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)). Aplicação: no hero, o CTA de WhatsApp fica sobre a foto com overlay escuro. |
| [Triple Seven Jiu-Jitsu](https://triplesevenjj.com) | Nota e quantidade de avaliações em destaque na home ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)). Aplicação: um selo "avaliações no Google" perto do CTA, só quando houver avaliações reais (hoje fica como placeholder). |
| [Academia BJJ](https://academiabjj.ca) | Item "First Visit?" na navegação, que responde à hesitação do iniciante ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)). Aplicação: um bloco "Sua primeira aula" (o que levar, como funciona) perto do FAQ ou do método. |
| [East Austin Jiu-Jitsu Parlor](https://eastaustinjiujitsu.com) | Item único "Horários e Planos" na navegação e preços transparentes ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)). Aplicação: grade e planos em seções vizinhas. |
| [The School of Pilates](https://theschoolofpilates.com) | Seletor de caminho em 3 cartões, que ajuda o iniciante a escolher por onde começar ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)). Aplicação: os 3 cartões de modalidade (Karatê, Muay Thai, Wrestling), cada um com um CTA "Quero experimentar". |
| [Pure Barre](https://purebarre.com) | O CTA de aula grátis se repete várias vezes no mesmo viewport ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)). Aplicação: CTA no header, no hero, nos cartões de modalidade, nos planos e no fechamento. |

Estética do briefing (fundo escuro, acento vermelho ou laranja, títulos condensados, recortes diagonais): está de acordo com o que é comum no nicho, mas não encontrei estudo que comprove vantagem dessa paleta em conversão. É escolha de marca.

---

## Padrões recomendados

### Layout e seções
- **Ordem sugerida**, alinhada ao briefing e aos guias. Hero com CTA, depois prova rápida (3 números ou selos, apenas reais ou marcados como exemplo), modalidades, caminho do aluno, diferenciais, grade, professores, planos, depoimentos, FAQ, localização e CTA final ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it), [Ground Standard](https://groundstandard.com/how-to-create-a-high-converting-landing-page-for-martial-arts-gyms)).
- **Título do hero** com modalidade, público e local. Deixe filosofia e currículo mais para baixo ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it)).
- **CTA único e específico**, que nomeie a oferta ("Agendar aula experimental grátis") em vez de "Contato" ou "Saiba mais", no hero e no header fixo do celular ([Ground Standard](https://groundstandard.com/how-to-create-a-high-converting-landing-page-for-martial-arts-gyms), [Spark Membership](https://sparkmembership.com/what-makes-a-high-converting-landing-page-for-a-martial-arts-school/)).
- **Microcopy de redução de risco** junto ao botão, por exemplo "Não precisa de experiência. Sem compromisso." ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it)).
- **Grade de horários** achável em segundos pela navegação, separada por público (adulto, teen/kids) e com nome real da aula, horário, duração e o que vestir, mais um link "Experimentar esta aula" por linha. Não use PDF nem imagem estática da grade ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it), [Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)). Implemente como `<table>` HTML acessível com `<caption>` e `<th scope>`.
- **Prova social e confiança**: depoimentos curtos (primeiro nome e contexto) perto do CTA, credenciais dos professores e fotos reais assim que houver ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it)).
- **Planos**: as fontes divergem. A Ground Standard recomenda não mostrar preço na página de aula experimental ([Ground Standard](https://groundstandard.com/how-to-create-a-high-converting-landing-page-for-martial-arts-gyms)). A Gymdesk aponta "consulte o preço" como um dos padrões que não convertem ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)). Como o briefing pede planos, a sugestão é mostrá-los abaixo da dobra, depois da grade, sempre com o CTA da aula grátis em destaque e valores marcados como exemplo.

### Conversão via WhatsApp
- O formato oficial é `https://wa.me/<número internacional sem +, zeros, parênteses ou traços>?text=<mensagem codificada>`. A mensagem aparece pré-preenchida e o usuário pode editá-la. Funciona no celular e no WhatsApp Web ([WhatsApp FAQ](https://faq.whatsapp.com/5913398998672934)).
- Use mensagens diferentes por CTA para identificar a origem. Exemplo: "Olá! Quero agendar uma aula experimental de Muay Thai." (gerar com `encodeURIComponent`). Só pode haver um parâmetro `text` ([Bird](https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link)).
- O link não informa cliques nem envios ([Bird](https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link)). Sem analytics (o briefing não autoriza serviços externos), a mensagem pré-preenchida por seção é o rastreio possível.
- Abra em nova aba com `rel="noopener"` e deixe o destino claro no rótulo acessível, por exemplo `aria-label="Agendar aula experimental pelo WhatsApp (abre em nova aba)"`.

### Tipografia (máx. 2 famílias do Google Fonts)
- O padrão do nicho é um título **condensado e pesado** com texto corrido em sans de largura normal. Duas condensadas juntas deixam o layout apertado ([Font Alternatives — Bebas Neue + Inter](https://fontalternatives.com/pairings/bebas-neue-and-inter/), [Inspo AI](https://www.inspoai.io/blogs/condensed-fonts)).
- Opções para títulos:
  - **Bebas Neue**: máximo impacto, mas só tem maiúsculas e um peso. Use apenas em títulos curtos.
  - **Oswald**: mais versátil, com vários pesos.
  - **Barlow Condensed**: mais amigável, com muitos pesos.
- Para o corpo: **Inter**. A recomendação, de natureza opinativa, vem de sites de pareamento de fontes ([Font Alternatives — sports](https://fontalternatives.com/best-fonts-for/sports/)).
- Sugestão: Oswald ou Barlow Condensed (títulos) com Inter (corpo), usando `font-display: swap` e só os pesos usados.

### Cor
- Base escura (preto ou grafite) com acento vermelho ou laranja, conforme o briefing. **Verifique o contraste**: texto normal precisa de 4.5:1 e texto grande (24px, ou 18.5px em negrito) precisa de 3:1 ([W3C 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).
- Vermelhos puros (#FF0000 e parecidos) sobre preto costumam ficar abaixo de 4.5:1 em texto pequeno. Use o vermelho em fundos de botão com texto branco ou preto (confira a razão) e em títulos grandes. Nos textos pequenos, prefira branco ou cinza-claro. Confira cada par em um verificador de contraste antes de fechar a paleta.

### Animação
- Use poucas animações e com propósito: entrada suave das seções e hover nos cartões. Envolva tudo em `@media (prefers-reduced-motion: reduce)` para remover ou reduzir o movimento ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
- Evite parallax pesado e vídeo automático. O público acessa majoritariamente pelo celular, e a página precisa ser rápida ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it)).

### Acessibilidade (WCAG 2.2 AA)
- Alvos de toque com no mínimo 24×24 CSS px ou espaçamento equivalente (2.5.8, AA). O nível AAA pede 44×44 e é recomendável para os CTAs principais ([W3C 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)).
- Foco visível em todos os elementos interativos (2.4.7), com `:focus-visible` e contorno de alto contraste sobre o fundo escuro ([W3C 2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)).
- Menu mobile com `aria-expanded`, link "Pular para o conteúdo", FAQ com `<details>/<summary>` (nativo e acessível), `alt` descritivo nas fotos e iframe do mapa com `title`.

### SEO local
- O Google classifica resultados locais por **relevância, distância e proeminência**. Informação completa no Perfil da Empresa e avaliações (quantidade e nota) influenciam ([Google Business Profile Help](https://support.google.com/business/answer/7091?hl=en)). O site precisa ter NAP (nome, endereço, telefone) idêntico ao do Perfil.
- **JSON-LD**: o Google exige `name` e `address` e recomenda `geo` (com 5 casas decimais ou mais), `openingHoursSpecification` (hh:mm:ss), `telephone` com código do país e DDD, `url` e `priceRange`. Também recomenda usar o subtipo mais específico ([Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/local-business)). Aqui, o subtipo é **`ExerciseGym`** (Thing > Organization/Place > LocalBusiness > SportsActivityLocation > ExerciseGym) ([schema.org](https://schema.org/ExerciseGym)).
- **Não** inclua `aggregateRating` ou `review` sobre o próprio negócio. O Google recomenda essas propriedades só para sites que avaliam outros negócios ([Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/local-business)).
- Pode usar `FAQPage`, mas não espere rich result. Desde agosto de 2023, o Google só mostra FAQ rico para sites governamentais e de saúde reconhecidos ([Google Search Central Blog](https://developers.google.com/search/blog/2023/08/howto-faq-changes)). O FAQ continua útil para o usuário.
- `<title>` e `<h1>` com termos locais, por exemplo "Academia de MMA em Sobradinho-DF | Karatê, Muay Thai e Wrestling" ([Ground Standard](https://groundstandard.com/how-to-create-a-high-converting-landing-page-for-martial-arts-gyms)). Cite bairros e regiões atendidas no texto da localização (Sobradinho, Sobradinho II, Planaltina, Lago Oeste, conforme o briefing).
- Contexto local: Sobradinho é a RA V do DF. Sobradinho II virou uma RA separada (RA XXVI) pela Lei distrital nº 3.314/2004 ([resumo de busca, fontes IPE-DF/Codeplan](https://www.ipe.df.gov.br/documents/9915964/10215637/Sobradinho.pdf)). Use "Sobradinho e Sobradinho II" no texto, sem tratá-las como a mesma cidade.

---

## Conteúdo informativo das modalidades (para a copy, parafraseie)

### Muay Thai
- É a "arte das oito armas": golpes com punhos, cotovelos, joelhos e canelas ([Wikipedia](https://en.wikipedia.org/wiki/Muay_Thai), [Evolve MMA](https://evolve-mma.com/blog/what-is-muay-thai-the-art-of-8-limbs-explained/)).
- **Clinch**: ao contrário do boxe, os lutadores não são separados no clinch, e joelhadas e cotoveladas saem dele ([Wikipedia](https://en.wikipedia.org/wiki/Muay_Thai)). O clinch permite controlar cabeça e postura do oponente ([Fairtex](https://fairtexstore.com/blogs/news/the-art-of-eight-limbs-in-the-cage-why-muay-thai-is-the-foundation-of-mma-striking)).
- **Contribuição ao MMA**: trocação completa em pé, chutes baixos, clinch e defesa de quedas a partir dele. Fontes de treino citam Anderson Silva e Joanna Jędrzejczyk como exemplos de base no Muay Thai ([Fight.tv](https://www.fight.tv/post/how-muay-thai-has-impacted-mma-shaping-striking-and-fight-strategies)). Essas fontes são opinativas.
- Tradição: o *wai khru* e o *ram muay* honram os professores ([Wikipedia](https://en.wikipedia.org/wiki/Muay_Thai)). Isso combina com o tom de respeito do briefing.
- **Evite** datas de origem exatas (há alegações antigas sem evidência sólida) e "esporte olímpico". O COI reconheceu a IFMA em 2021, mas o Muay Thai não está no programa olímpico ([Wikipedia](https://en.wikipedia.org/wiki/Muay_Thai)).

### Karatê
- Surgiu no antigo Reino de Ryukyu (atual Okinawa), a partir do *te* local com influência chinesa. O nome passou a significar "mão vazia" nos anos 1930 ([Wikipedia](https://en.wikipedia.org/wiki/Karate)).
- O treino se divide em **kihon** (fundamentos), **kata** (formas) e **kumite** (combate). Estilos conhecidos: Shotokan, Goju-ryu, Shito-ryu, Wado-ryu e Kyokushin (contato pleno). Usa faixas kyu coloridas e graus dan ([Wikipedia](https://en.wikipedia.org/wiki/Karate)).
- Foi olímpico em Tóquio 2020 e não esteve em Paris 2024 ([Wikipedia](https://en.wikipedia.org/wiki/Karate)).
- **Contribuição ao MMA**: controle de distância, base móvel, entradas e saídas rápidas e chutes precisos. Lyoto Machida (Shotokan) e Stephen Thompson (Kenpo) são os exemplos mais citados ([Wikipedia](https://en.wikipedia.org/wiki/Karate), [Wikipedia: Lyoto Machida](https://en.wikipedia.org/wiki/Lyoto_Machida), [Bleacher Report](https://bleacherreport.com/articles/187770-lyoto-machida-fights-like-a-fencer)). Seja honesto: o karatê não é a base mais comum no MMA, mas funcionou muito bem para alguns atletas ([Wikipedia](https://en.wikipedia.org/wiki/Karate)). Na copy, posicione-o como "distância, timing e disciplina", sem exagero.

### Wrestling
- Os estilos olímpicos são o **livre** (permite atacar as pernas) e o **greco-romano** (só acima da cintura), ambos regidos pela United World Wrestling. O livre feminino entrou nos Jogos de Atenas 2004 ([Wikipedia](https://en.wikipedia.org/wiki/Amateur_wrestling)). Bom argumento para turmas mistas e femininas.
- **Contribuição ao MMA**: quedas, controle, defesa de quedas (sprawl) e a escolha de onde a luta acontece. Lutadores de wrestling como Dan Severn e Mark Coleman foram pioneiros do *ground and pound* ([Wikipedia: MMA](https://en.wikipedia.org/wiki/Mixed_martial_arts)). Muitos comentaristas consideram o wrestling a melhor base para o MMA ([Bleacher Report](https://bleacherreport.com/articles/963813-takedown-glory-why-wrestling-is-the-best-base-for-mma), [Evolve MMA](https://evolve-mma.com/blog/4-wrestling-takedowns-all-mma-fighters-need-to-know/)), mas isso é opinião debatida ([Bleacher Report 2018](https://bleacherreport.com/articles/1191341-why-wrestling-may-no-longer-be-the-best-base-for-mma), [MMA Sucka](https://mmasucka.com/opinion/traditional-wrestling-against-anti-grapplers/)). Na copy, prefira "uma das bases mais valorizadas".

### MMA (contexto)
- Esporte de contato pleno que combina trocação e luta agarrada. Tem raízes no **vale-tudo brasileiro** (anos 1920, desafios da família Gracie) e ganhou projeção com o UFC 1 em 1993. As regras unificadas foram adotadas em 2009. Com o tempo, os atletas passaram a treinar várias artes: trocadores aprenderam quedas e agarradores aprenderam trocação ([Wikipedia: MMA](https://en.wikipedia.org/wiki/Mixed_martial_arts)).
- **Lacuna**: o briefing não tem jiu-jitsu ou luta de solo (finalizações). Não prometa "MMA completo". Fale em "base de trocação, clinch e quedas para o MMA". Vale perguntar ao usuário se há jiu-jitsu ou aula de MMA integrada.

---

## FAQ comum de iniciantes (base para a seção; parafrasear)
| Pergunta | Base para a resposta |
|---|---|
| Preciso ter experiência ou condicionamento? | As aulas para iniciantes começam com aquecimento e fundamentos. Sentir-se perdido no começo é normal ([LI MMA](https://limixedmartialarts.com/mma-training-for-beginners-what-to-expect-in-your-first-class/), [Fighters Vault](https://fightersvault.com/blog/the-ultimate-guide-to-your-first-mma-class)). Não achei fonte sólida sobre exigência de condicionamento prévio. Responda com a política da escola. |
| Vou ter que lutar (sparring) na primeira aula? | Há escolas que não colocam o iniciante em sparring no primeiro dia ([LI MMA](https://limixedmartialarts.com/mma-training-for-beginners-what-to-expect-in-your-first-class/)). Confirme a política com o usuário. |
| O que levar? | Roupa confortável e garrafa de água. Bandagem e protetor bucal ajudam, e luvas e caneleiras vêm depois ([Fighters Vault](https://fightersvault.com/blog/the-ultimate-guide-to-your-first-mma-class)). O karatê pode exigir kimono mais tarde (confirmar). |
| Vou ficar dolorido? | É esperado sentir dor muscular nas primeiras sessões ([Fighters Vault](https://fightersvault.com/blog/the-ultimate-guide-to-your-first-mma-class)). |
| Qual a idade mínima? / Tem turma kids? | Não encontrei padrão universal. Depende da escola (placeholder até a entrevista). |
| Preciso escolher só uma modalidade? | Política da escola (sugestão: plano combo). Confirmar. |
| A aula experimental é gratuita? Como agendo? | Pelo WhatsApp, com o link de mensagem pré-preenchida. |
| Mulheres podem treinar? | Sim. O livre feminino é olímpico desde 2004, um argumento factual ([Wikipedia](https://en.wikipedia.org/wiki/Amateur_wrestling)). Confirmar se há turma feminina. |

---

## Riscos e o que evitar
- **Fotos de banco que parecem genéricas** reduzem a confiança ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website), [Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it)). Prefira fotos de treino com ação e luz dramática e marque-as para trocar por fotos reais.
- **Linguagem intimidadora ou vaga** ("excelência de classe mundial", violência explícita, sangue) afasta iniciantes e pais ([Clubworx](https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it), [Ground Standard](https://groundstandard.com/how-to-create-a-high-converting-landing-page-for-martial-arts-gyms)).
- **Grade escondida ou em PDF ou imagem**, e excesso de CTAs concorrentes ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website), [Ground Standard](https://groundstandard.com/how-to-create-a-high-converting-landing-page-for-martial-arts-gyms)).
- **Dados inventados**: não publique número de alunos, títulos, nota no Google ou "campeões" sem confirmação. Marque como exemplo. Não use `aggregateRating` no JSON-LD.
- **Afirmações factuais frágeis**: datas de origem do Muay Thai, "Muay Thai olímpico", "wrestling é a melhor base" como fato, "MMA completo" sem jiu-jitsu.
- **Nomes e imagens de atletas famosos** (Machida, Anderson Silva etc.): não use fotos nem sugira vínculo. Citações informativas no texto são aceitáveis, mas o ideal é nem precisar delas.
- **Credenciais dos professores**: no Brasil, há decisões judiciais (TRF1 e precedentes do STJ) que dispensam registro no CREF para instrutores de artes marciais, mas o CONFEF/CREF contesta isso ([Lex](https://www.lex.com.br/professores-e-escolas-exclusivas-de-artes-marciais-nao-precisam-de-registro-profissional-em-conselho-regional-de-educacao-fisica/), [Migalhas](https://www.migalhas.com.br/quentes/385474/stj-professor-de-tenis-nao-precisa-de-registro-profissional-no-cref)). Não cite "CREF" nem graduações (faixas, dan) sem dados reais. Use placeholders.
- **Acessibilidade em tema escuro**: vermelho sobre preto em texto pequeno, foco invisível, botões pequenos no celular e animações sem `prefers-reduced-motion`.
- **Desempenho**: vídeo de fundo, muitas fontes ou pesos e imagens sem `loading="lazy"`, `width`/`height` e versão WebP ou redimensionada.
- **Mapa do Google** (iframe): carregue com `loading="lazy"` e `title`. Ele só deve entrar com coordenadas reais da entrevista.

---

## Fontes consultadas
**Oficiais e normativas**
- https://faq.whatsapp.com/5913398998672934 — link de conversa (wa.me)
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/blog/2023/08/howto-faq-changes
- https://support.google.com/business/answer/7091?hl=en
- https://schema.org/ExerciseGym
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

**Enciclopédicas e modalidades**
- https://en.wikipedia.org/wiki/Mixed_martial_arts
- https://en.wikipedia.org/wiki/Muay_Thai
- https://en.wikipedia.org/wiki/Karate
- https://en.wikipedia.org/wiki/Amateur_wrestling
- https://en.wikipedia.org/wiki/Lyoto_Machida
- https://evolve-mma.com/blog/what-is-muay-thai-the-art-of-8-limbs-explained/
- https://evolve-mma.com/blog/4-wrestling-takedowns-all-mma-fighters-need-to-know/
- https://fairtexstore.com/blogs/news/the-art-of-eight-limbs-in-the-cage-why-muay-thai-is-the-foundation-of-mma-striking
- https://www.fight.tv/post/how-muay-thai-has-impacted-mma-shaping-striking-and-fight-strategies
- https://bleacherreport.com/articles/187770-lyoto-machida-fights-like-a-fencer
- https://bleacherreport.com/articles/963813-takedown-glory-why-wrestling-is-the-best-base-for-mma
- https://bleacherreport.com/articles/1191341-why-wrestling-may-no-longer-be-the-best-base-for-mma
- https://mmasucka.com/opinion/traditional-wrestling-against-anti-grapplers/
- (Britannica karate, Thai boxing, wrestling e MMA: acesso bloqueado (403), não usadas.)

**Conversão e design (fornecedores, opinativas)**
- https://www.clubworx.com/blog/why-your-martial-arts-schools-website-isnt-getting-you-trial-bookings-and-how-to-fix-it
- https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website
- https://groundstandard.com/how-to-create-a-high-converting-landing-page-for-martial-arts-gyms
- https://sparkmembership.com/what-makes-a-high-converting-landing-page-for-a-martial-arts-school/
- https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link
- https://fontalternatives.com/pairings/bebas-neue-and-inter/
- https://fontalternatives.com/best-fonts-for/sports/
- https://www.inspoai.io/blogs/condensed-fonts
- Sites citados como referência visual: twobridgesmuaythai.com, adayamabjj.com, triplesevenjj.com, academiabjj.ca, eastaustinjiujitsu.com, theschoolofpilates.com, purebarre.com (análise via Gymdesk; não visitados diretamente)

**FAQ de iniciantes**
- https://limixedmartialarts.com/mma-training-for-beginners-what-to-expect-in-your-first-class/
- https://fightersvault.com/blog/the-ultimate-guide-to-your-first-mma-class

**Contexto local e jurídico (Brasil)**
- https://www.ipe.df.gov.br/documents/9915964/10215637/Sobradinho.pdf
- https://www.lex.com.br/professores-e-escolas-exclusivas-de-artes-marciais-nao-precisam-de-registro-profissional-em-conselho-regional-de-educacao-fisica/
- https://www.migalhas.com.br/quentes/385474/stj-professor-de-tenis-nao-precisa-de-registro-profissional-no-cref
