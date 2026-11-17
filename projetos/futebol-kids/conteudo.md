# Conteúdo: Futebol Kids (escolinha de futebol infantil, 4 a 12 anos)

> Copy final do site. O `desenvolvedor-frontend` usa estes textos sem reescrever.
> Entradas: `briefing.md`, `dados-negocio.md`, `pesquisa.md`, `design.md`.
> **Dados de contato, horários, preços, professores e depoimentos são FICTÍCIOS** (autorizado pelo usuário, site de demonstração). Contatos copiados de `dados-negocio.md` sem alteração. Os itens de exemplo estão marcados como **[EXEMPLO: substituir antes de publicar]**.

---

## 1. Promessa central e voz

**Promessa central:** a Futebol Kids é a escolinha onde crianças de 4 a 12 anos aprendem futebol brincando, com turmas por idade, professores formados em Educação Física e um ambiente seguro para os pais ficarem tranquilos. A primeira aula é grátis.

**Voz (3 adjetivos):** alegre, acolhedora e confiável.

**Evitar:**
1. Promessa de carreira ("formamos craques", "peneira", "futuro jogador", "garantia de resultado").
2. Exagero de saúde ("cura", "previne", "melhora as notas", percentuais de estudos). Usar "ajuda", "estimula", "contribui".
3. Clichês e jargão ("qualidade e excelência", "metodologia diferenciada", termos táticos), e dizer que o CREF é "obrigatório por lei".

Outras regras aplicadas: falar com os pais em "você"; a criança é "a criança", "seu filho ou sua filha"; nunca dizer que as crianças das fotos são alunas; nenhum nome de criança.

---

## 2. Textos por seção (ordem do `design.md`)

### 2.1 Cabeçalho fixo

- [skip-link] Pular para o conteúdo
- [logo-aria-label] Futebol Kids, voltar ao início
- [nav-aria-label] Principal
- [nav-1] Benefícios → `#beneficios`
- [nav-2] Turmas → `#turmas`
- [nav-3] Metodologia → `#metodologia`
- [nav-4] Horários → `#horarios`
- [nav-5] Planos → `#planos`
- [nav-6] Dúvidas → `#faq`
- [nav-7] Contato → `#contato`
- [cta-header] Aula grátis
- [cta-header-sr] (abre o WhatsApp em nova aba)
- [menu-abrir] Abrir menu
- [menu-fechar] Fechar menu

### 2.2 Hero (`#inicio`)

- [selo] 4 a 12 anos · meninos e meninas
- [h1] Futebol para crescer brincando
- [subtitulo] Na Futebol Kids, crianças de 4 a 12 anos aprendem a jogar, fazem amigos e gastam energia com professores formados em Educação Física. A primeira aula é por nossa conta.
- [cta-primario] Agendar aula grátis → WhatsApp com mensagem (ver §4.2)
- [cta-primario-sr] (abre o WhatsApp em nova aba)
- [cta-secundario] Ver turmas → `#turmas`

**Placar do seletor de idade**
- [placar-titulo] Quantos anos tem a criança?
- [placar-apoio] (opcional, `--fs-small`) Toque na idade e veja a turma certa.
- [chip-1-idade] 4 e 5 anos · [chip-1-turma] Fraldinha · Sub-6 → `#turma-fraldinha`
- [chip-2-idade] 6 e 7 anos · [chip-2-turma] Pré-mirim · Sub-8 → `#turma-pre-mirim`
- [chip-3-idade] 8 e 9 anos · [chip-3-turma] Mirim · Sub-10 → `#turma-mirim`
- [chip-4-idade] 10 a 12 anos · [chip-4-turma] Infantil · Sub-12 → `#turma-infantil`

### 2.3 Por que futebol faz bem (`#beneficios`)

- [eyebrow] Por que futebol
- [h2] Muito mais do que correr atrás da bola
- [lead] Cada aula mexe com o corpo, com a cabeça e com o coração. Veja o que o futebol ajuda a desenvolver na infância.

- [item-1-titulo] Coordenação motora
- [item-1-texto] Correr, saltar, chutar e mudar de direção estimulam o equilíbrio, a agilidade e a coordenação.

- [item-2-titulo] Amizades e equipe
- [item-2-texto] Em campo, a criança faz amigos, divide a bola e aprende que ninguém joga sozinho.

- [item-3-titulo] Autoestima
- [item-3-texto] Cada passe certo e cada gol comemorado ajudam a criança a confiar mais em si mesma.

- [item-4-titulo] Saúde e energia
- [item-4-texto] Ajuda a chegar aos 60 minutos diários de atividade recomendados e fortalece ossos e músculos. Uma ótima troca pelo tempo de tela.

- [item-5-titulo] Respeito e disciplina
- [item-5-texto] Regras, horários e espírito esportivo ensinam a ganhar, a perder e a respeitar colegas e professores.

- [nota-fonte] Recomendação de 60 minutos diários de atividade física para crianças e adolescentes: Organização Mundial da Saúde (OMS) e Sociedade Brasileira de Pediatria (SBP).

### 2.4 Turmas por idade (`#turmas`)

- [eyebrow] Turmas por idade
- [h2] Uma turma para cada fase
- [lead] Separamos as crianças por idade para que cada uma aprenda no seu ritmo, com desafios do tamanho certo.

**Card 1 (`#turma-fraldinha`)**
- [card-1-faixa-idade] 4 e 5 anos
- [card-1-titulo] Fraldinha
- [card-1-equivalente] Equivalente Sub-6
- [card-1-selo] SUB 6
- [card-1-intro] Aqui o futebol é brincadeira. Sem tática e sem competição: só diversão com a bola.
- [card-1-foco-titulo] Foco da fase
- [card-1-foco-1] Brincadeiras com bola para coordenação
- [card-1-foco-2] Correr, pular e equilibrar com alegria
- [card-1-foco-3] Primeiros combinados e convivência em grupo
- [card-1-link] Agendar aula grátis desta turma

**Card 2 (`#turma-pre-mirim`)**
- [card-2-faixa-idade] 6 e 7 anos
- [card-2-titulo] Pré-mirim
- [card-2-equivalente] Equivalente Sub-8
- [card-2-selo] SUB 8
- [card-2-intro] Hora de conhecer os primeiros fundamentos, ainda em formato de jogo e muita brincadeira.
- [card-2-foco-titulo] Foco da fase
- [card-2-foco-1] Conduzir, passar e chutar a bola
- [card-2-foco-2] Jogos em espaço pequeno, com muitos toques
- [card-2-foco-3] Esperar a vez e ajudar o colega
- [card-2-link] Agendar aula grátis desta turma

**Card 3 (`#turma-mirim`)**
- [card-3-faixa-idade] 8 e 9 anos
- [card-3-titulo] Mirim
- [card-3-equivalente] Equivalente Sub-10
- [card-3-selo] SUB 10
- [card-3-intro] A criança ganha mais domínio da bola e começa a entender o jogo em equipe.
- [card-3-foco-titulo] Foco da fase
- [card-3-foco-1] Drible, passe e finalização
- [card-3-foco-2] Noções simples de posição em campo
- [card-3-foco-3] Comunicação e cooperação com o time
- [card-3-link] Agendar aula grátis desta turma

**Card 4 (`#turma-infantil`)**
- [card-4-faixa-idade] 10 a 12 anos
- [card-4-titulo] Infantil
- [card-4-equivalente] Equivalente Sub-12
- [card-4-selo] SUB 12
- [card-4-intro] Mais técnica, mais jogo coletivo e a chance de participar de festivais e amistosos.
- [card-4-foco-titulo] Foco da fase
- [card-4-foco-1] Aperfeiçoar os fundamentos
- [card-4-foco-2] Jogo coletivo e tomada de decisão
- [card-4-foco-3] Espírito esportivo em festivais e amistosos
- [card-4-link] Agendar aula grátis desta turma

- [link-turma-sr] (abre o WhatsApp em nova aba)
- [nota-turmas] Os nomes das turmas são da Futebol Kids e não seguem uma tabela oficial. A turma é definida pela idade que a criança completa no ano.
- [cta-turmas] Agendar aula experimental grátis

### 2.5 Metodologia (`#metodologia`)

- [eyebrow] Como é a aula
- [h2] Aprender brincando, do começo ao fim
- [lead] Toda aula começa e termina com jogo. No meio, um desafio de habilidade pensado para a idade da turma.

- [passo-1-numero] 1
- [passo-1-titulo] Jogo de aquecimento
- [passo-1-texto] A turma chega e já entra em campo com um jogo leve, para soltar o corpo e entrar no clima.

- [passo-2-numero] 2
- [passo-2-titulo] Desafio de habilidade
- [passo-2-texto] Brincadeiras com cones e bola treinam um fundamento por vez, como passe, drible ou chute.

- [passo-3-numero] 3
- [passo-3-titulo] Jogo final
- [passo-3-texto] Hora de usar o que aprendeu em jogos pequenos, em que todo mundo participa e toca muito na bola.

- [selo-1] Turmas reduzidas
- [selo-2] Jogos de até 4 contra 4
- [selo-3] Muito toque na bola

### 2.6 Diferenciais (`#diferenciais`)

- [eyebrow] Por que a Futebol Kids
- [h2] Cuidado que os pais enxergam
- [lead] (opcional) Tudo pensado para seu filho se divertir e você ficar tranquilo.

- [bloco-grande-titulo] Campo de grama sintética
- [bloco-grande-texto] Piso macio e uniforme, com linhas bem marcadas, para jogar com conforto o ano todo.

- [bloco-1-titulo] Professores com CREF
- [bloco-1-texto] Nossa equipe é formada em Educação Física, com registro no CREF e preparo para trabalhar com crianças.

- [bloco-seguranca-titulo] Segurança do início ao fim
- [bloco-seguranca-texto] Entrada controlada e criança entregue só a responsáveis cadastrados. Professores com formação em primeiros socorros, pausas para água e área com sombra.

- [bloco-2-titulo] Uniforme incluso
- [bloco-2-texto] Camiseta, calção e meião da escolinha já fazem parte da mensalidade.

- [bloco-3-titulo] Festivais e amistosos
- [bloco-3-texto] Encontros festivos com outras turmas e escolinhas, em que todos jogam e o placar é o que menos importa.

- [bloco-4-titulo] Relatório para os pais
- [bloco-4-texto] A cada semestre, você recebe um retorno sobre a evolução, a participação e a convivência da criança.

### 2.7 Grade de horários (`#horarios`)

- [eyebrow] Horários
- [h2] Encontre o melhor horário
- [aviso] Horários de exemplo. Confirme a vaga pelo WhatsApp.
- [caption] Horários das turmas da Futebol Kids (exemplo)
- [col-1] Turma · [col-2] Idade · [col-3] Dias · [col-4] Horário · [col-5] Duração

**[EXEMPLO: substituir antes de publicar]**

| Turma | Idade | Dias | Horário | Duração |
|---|---|---|---|---|
| Fraldinha (Sub-6) | 4 e 5 anos | Terça, quinta e sábado | Ter e Qui: 08:30 ou 17:00 · Sáb: 08:30 | 45 min |
| Pré-mirim (Sub-8) | 6 e 7 anos | Segunda, quarta e sexta | 09:00 ou 17:00 | 50 min |
| Mirim (Sub-10) | 8 e 9 anos | Terça, quinta e sábado | Ter e Qui: 10:00 ou 18:00 · Sáb: 09:30 | 60 min |
| Infantil (Sub-12) | 10 a 12 anos | Segunda, quarta e sexta | 14:00 ou 18:30 | 60 min |

- [selo-sub] Sub-6 / Sub-8 / Sub-10 / Sub-12 (pill ao lado do nome)
- [link-horarios] Não achou um horário bom? Fale com a gente → WhatsApp (mensagem §4.2, versão "horários")
- [link-horarios-sr] (abre o WhatsApp em nova aba)

### 2.8 Professores (`#equipe`)

- [eyebrow] Equipe
- [h2] Quem cuida do treino
- [lead] Professores que gostam de criança, entendem de movimento e sabem tornar cada aula divertida.

**[EXEMPLO: substituir antes de publicar] (nomes, fotos e registros ilustrativos)**

**Professor 1**
- [prof-1-camisa] 10
- [prof-1-nome] Prof. Rafael Moura
- [prof-1-cargo] Coordenador pedagógico
- [prof-1-registro] CREF 000000-G/UF
- [prof-1-texto] Planeja as aulas de todas as turmas para que cada fase tenha desafios na medida certa.
- [prof-1-chip-1] Pedagogia do esporte
- [prof-1-chip-2] Primeiros socorros

**Professor 2**
- [prof-2-camisa] 7
- [prof-2-nome] Profa. Camila Duarte
- [prof-2-cargo] Professora da Fraldinha e do Pré-mirim
- [prof-2-registro] CREF 000000-G/UF
- [prof-2-texto] Transforma cada fundamento em brincadeira e deixa os pequenos à vontade desde o primeiro dia.
- [prof-2-chip-1] Psicomotricidade
- [prof-2-chip-2] Educação infantil

**Professor 3**
- [prof-3-camisa] 9
- [prof-3-nome] Prof. Diego Santana
- [prof-3-cargo] Professor do Mirim e do Infantil
- [prof-3-registro] CREF 000000-G/UF
- [prof-3-texto] Incentiva o jogo coletivo e o respeito em campo, do aquecimento ao último apito.
- [prof-3-chip-1] Jogo em equipe
- [prof-3-chip-2] Festivais e amistosos

- [aviso-equipe] Fotos, nomes e registros ilustrativos (site de demonstração).

### 2.9 Planos e mensalidades (`#planos`)

- [eyebrow] Planos
- [h2] Escolha quantas vezes por semana
- [lead] Todos os planos incluem uniforme e a mesma atenção dos professores. Comece com uma aula grátis e decida depois.

**[EXEMPLO: substituir antes de publicar] (valores fictícios)**

**Plano 1**
- [plano-1-titulo] 1x por semana
- [plano-1-preco] R$ 149 /mês
- [plano-1-item-1] 1 aula por semana
- [plano-1-item-2] Uniforme incluso
- [plano-1-item-3] Relatório semestral para os pais
- [plano-1-cta] Começar com aula grátis

**Plano 2 (destaque)**
- [plano-2-selo] Mais escolhido
- [plano-2-titulo] 2x por semana
- [plano-2-preco] R$ 229 /mês
- [plano-2-item-1] 2 aulas por semana
- [plano-2-item-2] Uniforme incluso
- [plano-2-item-3] Relatório semestral para os pais
- [plano-2-item-4] Participação nos festivais
- [plano-2-cta] Começar com aula grátis

**Plano 3**
- [plano-3-titulo] 3x por semana
- [plano-3-preco] R$ 299 /mês
- [plano-3-item-1] 3 aulas por semana
- [plano-3-item-2] Uniforme incluso
- [plano-3-item-3] Relatório semestral para os pais
- [plano-3-item-4] Participação nos festivais e amistosos
- [plano-3-cta] Começar com aula grátis

- [plano-cta-sr] (abre o WhatsApp em nova aba)
- [irmaos-texto] Irmãos ganham 10% de desconto na mensalidade de cada um.
- [nota-planos] Valores de exemplo. Uniforme incluso em todos os planos.

Formato do preço para o desenvolvedor: "R$" e "/mês" pequenos; número grande ("149"). Texto acessível do preço: "149 reais por mês".

### 2.10 Depoimentos de pais (`#depoimentos`)

- [eyebrow] Depoimentos
- [h2] O que dizem as famílias
- [carrossel-aria-label] Depoimentos de pais
- [slide-aria-label] 1 de 3 / 2 de 3 / 3 de 3
- [seta-anterior] Depoimento anterior
- [seta-proxima] Próximo depoimento
- [indicador] Ir para o depoimento 1 / 2 / 3
- [estrelas-alt] 5 de 5 estrelas
- [selo-exemplo] Exemplo

**[EXEMPLO: substituir antes de publicar] (textos e nomes fictícios; exibir o selo "Exemplo" em cada card)**

**Depoimento 1**
- [dep-1-texto] Meu filho era tímido e agora conta os dias para o treino. Os professores têm muita paciência com os pequenos.
- [dep-1-nome] Juliana P.
- [dep-1-relacao] Mãe de aluno da Fraldinha (5 anos)

**Depoimento 2**
- [dep-2-texto] Gosto de saber quem está com a minha filha. Na saída, só entregam a criança para quem está cadastrado.
- [dep-2-nome] Marcos A.
- [dep-2-relacao] Pai de aluna do Mirim (8 anos)

**Depoimento 3**
- [dep-3-texto] Ele trocou boa parte do tempo no celular pela bola. Volta cansado, feliz e cheio de histórias dos amigos.
- [dep-3-nome] Fernanda L.
- [dep-3-relacao] Mãe de aluno do Infantil (11 anos)

### 2.11 Perguntas frequentes (`#faq`)

- [eyebrow] Dúvidas
- [h2] Perguntas frequentes
- [intro] Separamos as dúvidas mais comuns dos pais. Não encontrou a sua? Fale com a gente.
- [cta-faq] Perguntar no WhatsApp → WhatsApp (mensagem §4.2, versão "dúvida")
- [cta-faq-sr] (abre o WhatsApp em nova aba)

- [faq-1-pergunta] Qual idade a criança precisa ter?
- [faq-1-resposta] Atendemos crianças de 4 a 12 anos, divididas em quatro turmas por idade: Fraldinha (4 e 5), Pré-mirim (6 e 7), Mirim (8 e 9) e Infantil (10 a 12).

- [faq-2-pergunta] Meu filho precisa saber jogar?
- [faq-2-resposta] Não. Muitas crianças chegam sem nunca ter jogado. Os professores adaptam as atividades para que todos participem, do iniciante ao que já tem prática.

- [faq-3-pergunta] Meninas podem participar?
- [faq-3-resposta] Claro! As turmas são para meninos e meninas. Futebol é para todo mundo que gosta de brincar com a bola.

- [faq-4-pergunta] Como funciona a aula grátis?
- [faq-4-resposta] Você chama no WhatsApp, escolhemos juntos a turma e o horário, e a criança faz uma aula completa sem custo e sem compromisso de matrícula.

- [faq-5-pergunta] O que a criança precisa levar?
- [faq-5-resposta] Roupa confortável, tênis ou chuteira society, garrafinha de água e protetor solar. Na aula grátis, não precisa de uniforme.

- [faq-6-pergunta] E quando chove?
- [faq-6-resposta] Com chuva fraca, a aula acontece normalmente. Com chuva forte ou raios, a aula é suspensa por segurança e avisamos os responsáveis pelo WhatsApp com antecedência sempre que possível.

- [faq-7-pergunta] Os pais podem assistir às aulas?
- [faq-7-resposta] Sim. Há um espaço para os responsáveis acompanharem de fora do campo. Só pedimos que deixem as orientações durante a aula com os professores.

- [faq-8-pergunta] Como é a segurança na entrada e na saída?
- [faq-8-resposta] A entrada é controlada e a criança só é entregue a responsáveis cadastrados na matrícula. Se outra pessoa for buscar, é só avisar antes pelo WhatsApp.

### 2.12 Localização e contato (`#contato`)

- [eyebrow] Contato
- [h2] Venha conhecer a gente
- [lead] Estamos no Jardim Esperança. Passe para conhecer o campo ou chame no WhatsApp para agendar a aula grátis.

**Card de contato (dados de `dados-negocio.md`, FICTÍCIOS)**
- [card-titulo] Futebol Kids
- [endereco] Rua das Acácias, 450 – Jardim Esperança, Cidade Exemplo/UF – CEP 00000-000
- [rotulo-whatsapp] WhatsApp: (00) 90000-0000
- [rotulo-telefone] Telefone: (00) 90000-0000
- [rotulo-email] E-mail: contato@futebolkids.exemplo
- [rotulo-instagram] Instagram: @futebolkids.exemplo
- [rotulo-horario] Horário de atendimento
- [horario-1] Segunda a sexta: 08:00–20:00
- [horario-2] Sábado: 08:00–12:00
- [horario-3] Domingo: fechado
- [botao-rota] Como chegar
- [botao-maps] Abrir no Google Maps
- [botoes-sr] (abre em nova aba)
- [etiqueta] Dados fictícios de demonstração
- [mapa-carregando] Carregando o mapa…
- [mapa-title] Mapa da localização da Futebol Kids (endereço fictício) (manter exatamente como em `dados-negocio.md`)

### 2.13 CTA final (`#aula-gratis`)

- [h2] Que tal começar com uma aula grátis?
- [lead] Traga a criança para uma aula de experiência. Ela se diverte, conhece a turma e você vê de perto como trabalhamos.
- [cta] Agendar aula experimental grátis
- [cta-sr] (abre o WhatsApp em nova aba)
- [microcopy] Resposta no horário de atendimento. Sem compromisso.

### 2.14 Rodapé

- [logo-alt] Futebol Kids
- [assinatura] Futebol para crescer brincando, com alegria, respeito e cuidado em cada aula.
- [col-contato-titulo] Contato
- [endereco] Rua das Acácias, 450 – Jardim Esperança, Cidade Exemplo/UF – CEP 00000-000
- [whatsapp] WhatsApp: (00) 90000-0000
- [email] contato@futebolkids.exemplo
- [horario-curto] Seg a Sex: 08:00–20:00 · Sáb: 08:00–12:00 · Dom: fechado
- [col-redes-titulo] Siga a gente
- [instagram-aria] Instagram da Futebol Kids (abre em nova aba)
- [col-links-titulo] Links rápidos (pode ficar na mesma coluna das redes)
- [link-1] Turmas · [link-2] Horários · [link-3] Planos · [link-4] Dúvidas · [link-5] Contato
- [copyright] © 2026 Futebol Kids
- [aviso-demo] Site de demonstração — dados fictícios
- [creditos] Fotos: Unsplash · Vídeo: Pexels. Ver créditos
- [voltar-topo] Voltar ao topo

### 2.15 Botão flutuante de WhatsApp (mobile)

- [fab-aria-label] Agendar aula grátis pelo WhatsApp (abre em nova aba)

---

## 3. SEO e compartilhamento

- [title] Futebol Kids | Escolinha de futebol infantil de 4 a 12 anos (59 caracteres)
- [meta-description] Futebol para crianças de 4 a 12 anos no Jardim Esperança: aulas lúdicas, turmas por idade e professores com CREF. Agende uma aula grátis! (137 caracteres)
- [og:title] Futebol Kids: futebol para crescer brincando
- [og:description] Escolinha de futebol para meninos e meninas de 4 a 12 anos. Turmas por idade, ambiente seguro e primeira aula grátis.
- [og:image:alt] Crianças jogando futebol em um campo gramado, com o logotipo da Futebol Kids
- [og:locale] pt_BR
- [og:site_name] Futebol Kids
- [json-ld-description] Usar a de `dados-negocio.md` §3, sem alterar.

---

## 4. Microtextos

### 4.1 Formulário

**Não há formulário** (decisão do design, LGPD art. 14 e ECA). Toda conversão vai para o WhatsApp do responsável. Nenhum campo, rótulo ou mensagem de erro a escrever.

### 4.2 Mensagens do WhatsApp (pré-preenchidas)

Base: `https://wa.me/5500900000000?text=` + texto codificado.

| Uso | Mensagem (decodificada) | Parâmetro `text` codificado |
|---|---|---|
| Padrão (cabeçalho, hero, planos, CTA final, botão flutuante) | Olá! Gostaria de agendar uma aula experimental gratuita na Futebol Kids. | `Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20Futebol%20Kids.` (igual ao de `dados-negocio.md`) |
| Card Fraldinha | Olá! Gostaria de agendar uma aula experimental gratuita na Futebol Kids para a turma Fraldinha. | `Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20Futebol%20Kids%20para%20a%20turma%20Fraldinha.` |
| Card Pré-mirim | Olá! Gostaria de agendar uma aula experimental gratuita na Futebol Kids para a turma Pré-mirim. | `Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20Futebol%20Kids%20para%20a%20turma%20Pr%C3%A9-mirim.` |
| Card Mirim | Olá! Gostaria de agendar uma aula experimental gratuita na Futebol Kids para a turma Mirim. | `Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20Futebol%20Kids%20para%20a%20turma%20Mirim.` |
| Card Infantil | Olá! Gostaria de agendar uma aula experimental gratuita na Futebol Kids para a turma Infantil. | `Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20Futebol%20Kids%20para%20a%20turma%20Infantil.` |
| Horários | Olá! Vi os horários no site e gostaria de saber se há outras opções. | `Ol%C3%A1%21%20Vi%20os%20hor%C3%A1rios%20no%20site%20e%20gostaria%20de%20saber%20se%20h%C3%A1%20outras%20op%C3%A7%C3%B5es.` |
| Dúvida (FAQ) | Olá! Vi o site da Futebol Kids e tenho uma dúvida. | `Ol%C3%A1%21%20Vi%20o%20site%20da%20Futebol%20Kids%20e%20tenho%20uma%20d%C3%BAvida.` |

Nenhuma mensagem pede nome, idade ou dados da criança.

### 4.3 Botões e textos acessíveis (resumo)

- Aviso de nova aba (sr-only): "(abre o WhatsApp em nova aba)" nos links de WhatsApp; "(abre em nova aba)" em Maps e Instagram.
- Ir para a turma (chips): o texto visível já basta ("4 e 5 anos, Fraldinha, Sub-6").
- Foco no card após o seletor: o H3 do card ("Fraldinha" etc.) recebe o foco; não precisa de texto extra.

### 4.4 Estados vazios e carregamento

- Mapa carregando: "Carregando o mapa…"
- Sem JavaScript: nenhum texto extra (tudo funciona sem JS).

### 4.5 Texto alternativo sugerido (alt)

Ajustar ao conteúdo real de cada foto em `imagens.md`. Nunca dizer que as crianças são alunas nem dar nome a elas.

| Imagem | alt sugerido |
|---|---|
| `hero.jpg` / `hero-mobile.jpg` | `""` (decorativa, o H1 já diz tudo). Se o desenvolvedor preferir alt: "Crianças correndo atrás da bola em um campo gramado ensolarado" |
| `turma-fraldinha.jpg` | Criança pequena brincando com uma bola de futebol na grama |
| `turma-pre-mirim.jpg` | Crianças fazendo um exercício com cones e bola em um campo |
| `turma-mirim.jpg` | Crianças jogando futebol em um campo gramado |
| `turma-infantil.jpg` | Crianças disputando a bola durante um jogo de futebol |
| `campo-sintetico.jpg` | Campo de grama sintética com linhas brancas e gol pequeno |
| `treino-cones.jpg` | Bola de futebol e cones coloridos sobre a grama |
| `equipe-1.jpg` | Foto ilustrativa do Prof. Rafael Moura |
| `equipe-2.jpg` | Foto ilustrativa da Profa. Camila Duarte |
| `equipe-3.jpg` | Foto ilustrativa do Prof. Diego Santana |
| `depoimento-1/2/3.jpg` | `""` (o nome vem logo ao lado) |
| `logo.svg` (cabeçalho) | Futebol Kids (o link usa o aria-label "Futebol Kids, voltar ao início") |
| `logo-branco.svg` (rodapé) | Futebol Kids |
| Ícones, confete, linhas de campo, bola, traço, bola-apito | `aria-hidden="true"` (decorativos) |

---

## 5. Pendências

Nenhum `[PENDENTE]` no texto: por autorização do usuário, contatos, horários, preços, professores e depoimentos são fictícios e já estão preenchidos. Antes de publicar um site real, substituir:

1. Contatos, endereço, horário de atendimento e mapa (de `dados-negocio.md`).
2. Grade de horários das turmas (§2.7) [EXEMPLO].
3. Nomes, cargos, registros CREF, textos e fotos dos professores (§2.8) [EXEMPLO].
4. Preços dos planos e percentual de desconto para irmãos (§2.9) [EXEMPLO].
5. Depoimentos, nomes e fotos (§2.10) [EXEMPLO]: usar só depoimentos reais com autorização.
6. Confirmar se os diferenciais valem para o negócio real: uniforme incluso, relatório semestral, festivais e amistosos, primeiros socorros, sombra e água, espaço para os pais assistirem e regra de chuva (§2.6 e §2.11).
7. Fotos de crianças: trocar por fotos próprias, com autorização escrita dos responsáveis.
