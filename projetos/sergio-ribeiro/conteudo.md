# Conteúdo: Sergio Ribeiro, "Influenciador de Esperança"

> Redator, 2026-11-17. Fontes: `briefing.md`, `dados-negocio.md` (PROVISÓRIO), `pesquisa.md`, `design.md`.
> O usuário não respondeu à entrevista. Por isso, todo dado não confirmado aparece como `[PENDENTE: ...]` com um texto provisório que já pode ir para o layout. O desenvolvedor deve manter o texto provisório e pôr `<!-- PENDENTE -->` no HTML.
> Versículos: Almeida Revista e Corrigida (ARC), copiados da pesquisa (seção 6, conferidos em bibliaonline.com.br/arc). Os textos não foram alterados. Trechos parciais começam ou terminam com reticências.
> Privacidade: não há nomes de filhos, da nora nem de diplomatas. A esposa aparece só como "Mônica", em texto e sem link.

---

## 1. Promessa central e voz

**Promessa central:** o Pr. Sergio Ribeiro leva esperança para o dia a dia de quem passa por aqui: na família, na igreja, no trabalho e nas amizades. É uma voz cristã, próxima e encorajadora, e qualquer pessoa pode conversar com ele.

**Voz (3 adjetivos):** calorosa, esperançosa, próxima.
- Primeira pessoa ("eu"), falando com "você".
- Frases curtas e voz ativa. A fé aparece como luz que ilumina, sem pressão para converter ninguém.
- Emoji: só a 🌼, no máximo em dois lugares (rodapé e, se quiser, na mensagem do Instagram).

**O que evitar:**
1. Clichês e exageros ("transformando vidas", "o melhor", "referência", "excelência").
2. Fatos não confirmados: cargo na igreja, anos de ministério, empresa, cargo em tecnologia, número de seguidores, datas de encontros.
3. Tom político ou institucional nas "Pontes", além de nomes, países e cargos diplomáticos. Também não anunciar eventos já passados como se fossem acontecer.

---

## 2. Textos por seção (ordem do `design.md`)

### 0. Link de pular
- [skip-link] Pular para o conteúdo

### 1. Cabeçalho
- [logo-texto] Sergio Ribeiro
- [logo-aria-label] Sergio Ribeiro, voltar ao início
- [nav-aria-label] Principal
- [nav-1] Sobre
- [nav-2] Esperança
- [nav-3] Ministério
- [nav-4] Tecnologia
- [nav-5] Contato
- [cta-cabecalho] Fale comigo
- [menu-abrir] Abrir menu
- [menu-fechar] Fechar menu

### 2. Hero (`#inicio`)
- [eyebrow] Pr. Sergio Ribeiro
- [h1] Influenciador de Esperança
  - (o traço amarelo fica sob a palavra "Esperança")
- [subtitulo] Cristão, marido e pai. Escrevo sobre fé, família e propósito para lembrar você de que sempre há um novo começo.
- [versiculo] “Novas são cada manhã; grande é a tua fidelidade.”
- [versiculo-referencia] Lamentações 3.23, ARC
- [cta-primario] Fale comigo
  - [cta-primario-aria-label] Fale comigo pelo WhatsApp
- [cta-secundario] Siga no Instagram
  - [cta-secundario-aria-label] Siga no Instagram: @pr.sergioribeiro

### 3. Sobre (`#sobre`)
- [eyebrow] Sobre mim
- [h2] Fé em casa, esperança na rua
- [paragrafo-1] Sou o Sergio Ribeiro, casado com a Mônica e pai de três filhos. Tudo o que escrevo nasce aqui: da fé que vivo em casa, da mesa cheia e das conversas de todo dia.
- [paragrafo-2] Acredito que esperança se compartilha. Às vezes ela vem num versículo, às vezes numa palavra de apoio a um amigo. E às vezes vem num pássaro que aparece na minha janela quase todos os dias, só para lembrar que Deus cuida dos detalhes.
- [paragrafo-3] Se você precisa de uma palavra de ânimo, de uma oração ou só de alguém para ouvir, pode me chamar.
- [traco-1] Cristão
- [traco-2] Casado com Mônica
- [traco-3] Pai de três filhos
- [traco-4] Brasília/DF `[PENDENTE: confirmar a cidade]`
- [legenda-retrato] Foto ilustrativa `[PENDENTE: trocar pela foto do Sergio]`
- [cta] Fale comigo
  - [cta-aria-label] Fale comigo pelo WhatsApp

### 4. Esperança em palavras (`#esperanca`)
- [eyebrow] Esperança em palavras
- [h2] Uma palavra para hoje
- [linha-de-apoio] Versículos que me sustentam e que podem sustentar você também. Leia devagar e guarde o que tocar seu coração.

**Card 1** (ícone `icon-sol`)
- [card-1-versiculo] “Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo.”
- [card-1-referencia] Romanos 15.13 · ARC
- [card-1-reflexao] A esperança não depende só de você. Ela vem de Deus e transborda.

**Card 2** (ícone `icon-amanhecer`)
- [card-2-versiculo] “Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.”
- [card-2-referencia] Jeremias 29.11 · ARC
- [card-2-reflexao] Mesmo quando o caminho parece incerto, os planos de Deus para você são de paz.

**Card 3** (ícone `icon-ancora`)
- [card-3-versiculo] “…temos como âncora da alma segura e firme…”
- [card-3-referencia] Hebreus 6.19 · ARC
- [card-3-reflexao] A esperança é a âncora que mantém você firme quando o mar fica agitado.

**Card 4** (ícone `icon-asas`)
- [card-4-versiculo] “Mas os que esperam no Senhor renovarão as suas forças e subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.”
- [card-4-referencia] Isaías 40.31 · ARC
- [card-4-reflexao] Cansou? Esperar no Senhor é recuperar o fôlego para seguir em frente.

- [fecho-link] Receba uma palavra no Instagram
  - (destino: `https://www.instagram.com/pr.sergioribeiro/`)

> Nota ao desenvolvedor: as referências aparecem em caixa-alta pelo CSS (`text-transform`). No HTML, mantenha a grafia normal ("Romanos 15.13 · ARC") para leitores de tela.

### 5. Frente 01: Ministério (`#ministerio`)
- [numero] 01
- [eyebrow] Ministério
- [h2] Homens que caminham juntos
- [lead] Faço parte do ministério de homens da AD Catedral Baleia, em Brasília. `[PENDENTE: autorizar a citação da igreja e informar o papel exato no ministério]`
- [paragrafo] Ali aprendemos que nenhum homem precisa carregar o peso sozinho. Nos encontramos para orar, conversar com franqueza e fortalecer a fé, a família e a amizade.
- [item-1-titulo] Encontros
- [item-1-texto] Momentos para estudar a Palavra, ouvir e ser ouvido.
- [item-2-titulo] Confraternização
- [item-2-texto] Mesa farta e boas conversas que viram amizades.
- [item-3-titulo] Oração
- [item-3-texto] Um cuidando do outro, nas lutas e nas vitórias.
- [nota] As próximas datas são divulgadas no Instagram.
- [cta] Quero participar
  - [cta-aria-label] Quero participar do ministério de homens: falar pelo WhatsApp
- [selo-linha-1] AD Catedral Baleia `[PENDENTE: autorização para citar]`
- [selo-linha-2] Asa Sul, Brasília/DF

> Se a citação da igreja não for autorizada, use: [lead-alternativo] "Faço parte de um ministério de homens em Brasília." e retire o selo.
> Sem datas e sem cargo: não mencionar o Congresso de Homens nem o Centenário de Madureira (setembro de 2026, já realizado).

### 6. Frente 02: Tecnologia (`#tecnologia`)
- [numero] 02
- [eyebrow] Tecnologia
- [h2] Fé e tecnologia no mesmo propósito
- [frase-destaque] O portfólio fala por você.
- [paragrafo] Também trabalho com tecnologia, e levo para essa área o que aprendi na fé: servir bem, ser verdadeiro e compartilhar o que sei. Para quem está começando, meu conselho é simples. Mostre o que você faz, porque um bom portfólio abre portas que o currículo sozinho não abre.
- [chips-rotulo] Áreas de atuação
- [chip-provisorio] Áreas de atuação em breve `[PENDENTE: área ou função em tecnologia]`
- [links-provisorio] LinkedIn e portfólio em breve. `[PENDENTE: links de LinkedIn, portfólio e GitHub]`
- (quando chegarem os links) [botao-linkedin] Ver meu LinkedIn · [botao-portfolio] Ver meu portfólio

> Não citar empresa nem cargo. Não criar links ativos para URLs fictícias.

### 7. Frente 03: Pontes e comunidades (`#pontes`)
- [numero] 03
- [eyebrow] Pontes e comunidades
- [h2] Amizade que atravessa fronteiras
- [paragrafo] Brasília reúne gente de muitos lugares, e isso me encanta. Com a Mônica, tenho a alegria de participar de celebrações de outras comunidades a convite de amigos queridos. Cada encontro me lembra que respeito, escuta e hospitalidade constroem pontes entre os povos, e que a esperança fala todas as línguas.
- [chip-1] Respeito
- [chip-2] Escuta
- [chip-3] Hospitalidade

### 8. Instagram (`#instagram`)
- [eyebrow] No dia a dia
- [handle] @pr.sergioribeiro
- [linha] Versículos, família, os encontros do ministério e pequenas alegrias do cotidiano. Acompanhe por lá.
- [botao] Siga no Instagram
  - [botao-aria-label] Siga no Instagram: @pr.sergioribeiro
  - (o handle já aparece visível no [handle] logo acima; o rótulo curto cabe em 1 linha no celular de 360 px)
  - Se abrir em nova aba: acrescentar `<span class="sr-only"> (abre em nova aba)</span>`.

### 9. Contato (`#contato`)
- [eyebrow] Contato
- [h2] Vamos conversar?
- [linha-de-apoio] Quer uma palavra de ânimo, um pedido de oração ou falar sobre o ministério ou tecnologia? Me chame no WhatsApp. Eu leio cada mensagem e respondo assim que puder.

**Card 1: WhatsApp (destaque)**
- [card-1-titulo] WhatsApp
- [card-1-dado] (61) 90000-0000 `[PENDENTE: número real de WhatsApp]`
- [card-1-texto] Respondo assim que puder.
- [card-1-botao] Fale comigo
  - [card-1-botao-aria-label] Fale comigo pelo WhatsApp

**Card 2: E-mail**
- [card-2-titulo] E-mail
- [card-2-dado] contato@exemplo.com `[PENDENTE: e-mail real]`
- [card-2-texto] Para convites e assuntos com mais detalhes.
- [card-2-botao] Enviar e-mail

**Card 3: Instagram**
- [card-3-titulo] Instagram
- [card-3-dado] @pr.sergioribeiro
- [card-3-texto] Mensagens e novidades do dia a dia.
- [card-3-botao] Abrir perfil
  - [card-3-botao-aria-label] Abrir perfil @pr.sergioribeiro no Instagram

- [localizacao] Brasília/DF `[PENDENTE: confirmar a cidade]`

### 10. Rodapé
- [rodape-nome] Sergio Ribeiro
- [rodape-assinatura] Influenciador de Esperança 🌼 (emoji em `<span aria-hidden="true">`)
- [rodape-frase] Esperança se compartilha.
- [rodape-nav-titulo] Navegação
- [rodape-nav] Sobre · Esperança · Ministério · Tecnologia · Contato
- [rodape-redes-titulo] Redes
- [rodape-instagram] Instagram: @pr.sergioribeiro
- [voltar-topo] Voltar ao topo
- [copyright] © 2026 Sergio Ribeiro
- [creditos-link] Créditos das fotos
- [creditos-intro] Fotos ilustrativas de bancos de imagens livres. Autores e licenças:
- [creditos-item-modelo] "{descrição}": foto de {autor}, {banco}, {licença}. (preencher com os dados do `imagens.md`)

### 11. Barra fixa (mobile)
- [barra-aria-label] Atalho de contato
- [barra-botao] Fale comigo
  - [barra-botao-aria-label] Fale comigo pelo WhatsApp

---

## 3. SEO e compartilhamento

- [title] Pr. Sergio Ribeiro · Influenciador de Esperança (47 caracteres)
  - Com a cidade confirmada, opção: "Pr. Sergio Ribeiro · Influenciador de Esperança · DF" (52)
- [meta-description] Palavras de fé e esperança para o seu dia a dia. Conheça o Pr. Sergio Ribeiro, o ministério de homens e a tecnologia. Fale comigo pelo WhatsApp. (cerca de 147 caracteres)
- [og:title] Pr. Sergio Ribeiro, Influenciador de Esperança
- [og:description] Fé, família e propósito. Uma palavra de esperança para o seu dia e um convite para conversar.
- [og:image:alt] Margaridas iluminadas pelo sol da manhã, com o monograma SR.
- [og:locale] pt_BR
- [og:type] website

---

## 4. Microtextos

### Alt das imagens
(Ajuste a descrição se a foto escolhida pelo `gerador-imagens` mostrar outra cena; o alt descreve o ambiente, nunca diz que a pessoa é o Sergio.)
- [alt-foto-hero] Margaridas brancas iluminadas pelo sol dourado da manhã.
- [alt-retrato-placeholder] Foto ilustrativa: mãos segurando uma Bíblia ao pôr do sol.
  - Se for o `retrato-placeholder.svg`: "Espaço reservado para a foto do Sergio Ribeiro."
- [alt-foto-ministerio] Grupo de homens conversando e orando juntos, em foto ilustrativa.
- [alt-foto-tecnologia] Notebook aberto com código na tela, sobre uma mesa clara com luz natural.
- [alt-og-image] Margaridas iluminadas pelo sol da manhã, com o monograma SR.
- Decorativos, com `alt=""` ou `aria-hidden="true"`: margaridas, traço sob "Esperança", ornamentos, ilustração das pontes, quadrado amarelo, números 01/02/03, ícones ao lado de texto.
- [logo] O `logo-sr.svg` fica dentro do link com `aria-label` (seção 1), então use `alt=""`.

### WhatsApp
- [whatsapp-mensagem-padrao] Olá, Pr. Sergio! Vim pelo seu site.
  - link: `https://wa.me/5561900000000?text=Ol%C3%A1%2C%20Pr.%20Sergio!%20Vim%20pelo%20seu%20site.` `[PENDENTE: número real]`
- [whatsapp-mensagem-ministerio] (botão "Quero participar") Olá, Pr. Sergio! Vi o site e quero participar dos encontros do ministério de homens.
  - link: `https://wa.me/5561900000000?text=Ol%C3%A1%2C%20Pr.%20Sergio!%20Vi%20o%20site%20e%20quero%20participar%20dos%20encontros%20do%20minist%C3%A9rio%20de%20homens.` `[PENDENTE: número real]`

### E-mail
- [email-assunto] Contato pelo site
  - link: `mailto:contato@exemplo.com?subject=Contato%20pelo%20site` `[PENDENTE: e-mail real]`

### Botões e links (resumo)
| Elemento | Texto visível | Rótulo acessível |
|---|---|---|
| CTA principal (hero, Sobre, cabeçalho, barra fixa, card WhatsApp) | Fale comigo | Fale comigo pelo WhatsApp |
| Logo (cabeçalho) | Sergio Ribeiro (ou só o monograma SR) | Sergio Ribeiro, voltar ao início |
| CTA secundário (hero) | Siga no Instagram | Siga no Instagram: @pr.sergioribeiro |
| Ministério | Quero participar | Quero participar do ministério de homens: falar pelo WhatsApp |
| Card e-mail | Enviar e-mail | (o próprio texto) |
| Card Instagram | Abrir perfil | Abrir perfil @pr.sergioribeiro no Instagram |
| Faixa Instagram | Siga no Instagram | Siga no Instagram: @pr.sergioribeiro |
| Esperança | Receba uma palavra no Instagram | (o próprio texto) |
| Rodapé (redes) | Instagram: @pr.sergioribeiro | (o próprio texto) |
| Rodapé | Voltar ao topo | (o próprio texto) |
| Link em nova aba (se houver) | + "(abre em nova aba)" em `sr-only`, sempre no fim | |

> Regra (WCAG 2.5.3, Rótulo no Nome): todo `aria-label` começa com o texto visível exato e contínuo, e só acrescenta informação depois dele. Na dúvida, não use `aria-label`: o próprio texto basta. O sufixo "(abre em nova aba)" vai sempre no fim.
> Logo: mantenha o `logo-sr.svg` com `alt=""` e, se o nome "Sergio Ribeiro" aparecer em texto ao lado, o rótulo já começa por ele. Se aparecer só o monograma (imagem decorativa do nome), o rótulo "Sergio Ribeiro, voltar ao início" é o nome por extenso das iniciais e é aceito.

### Estados e avisos
- [em-breve-tecnologia] LinkedIn e portfólio em breve.
- [em-breve-areas] Áreas de atuação em breve
- [nota-ministerio] As próximas datas são divulgadas no Instagram.
- [sem-js] Nada muda: todo o conteúdo aparece sem JavaScript.
- Formulário: **não há** neste site (o contato é por WhatsApp e e-mail). Se um dia for incluído, peça os microtextos ao redator.

---

## 5. Pendências (perguntas prontas para o usuário)

| # | Pergunta | Texto provisório em uso |
|---|---|---|
| 1 | Qual número de WhatsApp pode aparecer no site? | `[PENDENTE: número real de WhatsApp]` (61) 90000-0000 |
| 2 | Qual e-mail público podemos mostrar? | `[PENDENTE: e-mail real]` contato@exemplo.com |
| 3 | Que cidade/UF aparece no site? Brasília/DF está certo? | `[PENDENTE: confirmar a cidade]` Brasília/DF (no Sobre e no Contato) |
| 4 | Podemos citar a AD Catedral Baleia e o ministério de homens? Qual é o seu papel nele (sem cargo inventado)? | `[PENDENTE: autorizar a citação da igreja e informar o papel exato]` "Faço parte do ministério de homens da AD Catedral Baleia, em Brasília." Alternativa sem o nome da igreja já está pronta. |
| 5 | Qual é sua área ou função em tecnologia? | `[PENDENTE: área ou função em tecnologia]` chip "Áreas de atuação em breve" |
| 6 | Quais links profissionais podemos mostrar (LinkedIn, portfólio, GitHub)? | `[PENDENTE: links]` "LinkedIn e portfólio em breve." |
| 7 | A Mônica autoriza aparecer pelo nome no site (Sobre e Pontes)? E o link para @amonicaribeiro_? | Nome em texto, sem link. Se não autorizar: "Sou o Sergio Ribeiro, casado e pai de três filhos." e, nas Pontes, "Com minha esposa, tenho a alegria..." |
| 8 | Você tem uma foto sua para o Sobre? | `[PENDENTE: trocar pela foto do Sergio]` foto ilustrativa com a legenda "Foto ilustrativa" |
| 9 | Você responde em algum horário específico? (opcional) | "Respondo assim que puder." |
| 10 | Pode confirmar o lema e a bio completa do Instagram? Tem outras redes (YouTube, Facebook, site da igreja)? | Só o Instagram no site. |
| 11 | Gosta da frase do Sobre sobre o pássaro que visita sua janela, ou prefere outra lembrança? | Texto atual baseado no post público. |

---

## Revisões

### Ciclo 2 (2026-11-17), conforme `avaliacao.md`
1. Hero, `[cta-secundario-aria-label]`: "Siga @pr.sergioribeiro no Instagram" → "Siga no Instagram: @pr.sergioribeiro" (corrige T1, WCAG 2.5.3).
2. Contato > Card 3, `[card-3-botao-aria-label]`: "Abrir o perfil @pr.sergioribeiro no Instagram" → "Abrir perfil @pr.sergioribeiro no Instagram" (corrige T2, WCAG 2.5.3).
3. Faixa Instagram, `[botao]`: "Siga @pr.sergioribeiro no Instagram" → "Siga no Instagram"; novo `[botao-aria-label]` "Siga no Instagram: @pr.sergioribeiro" (melhoria R2, ajuda a resolver V7; o handle já está visível no `[handle]`).
4. `[alt-retrato-placeholder]` sincronizado com o alt em uso: "Foto ilustrativa: mãos segurando uma Bíblia ao pôr do sol." (melhoria R1).
5. Tabela "Botões e links" atualizada com os itens 1 a 3, mais as linhas do logo e do Instagram do rodapé, e a regra do WCAG 2.5.3 registrada abaixo dela.
6. Demais rótulos revisados e mantidos, pois já começam pelo texto visível: "Fale comigo pelo WhatsApp" (5 lugares), "Quero participar do ministério de homens: falar pelo WhatsApp", "Sergio Ribeiro, voltar ao início". "Voltar ao topo" passou a "(o próprio texto)" na tabela, sem `aria-label` redundante.
