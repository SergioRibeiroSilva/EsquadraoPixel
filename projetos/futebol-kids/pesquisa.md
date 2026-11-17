# Pesquisa: Futebol Kids (escolinha de futebol infantil, 4 a 12 anos)

> Pesquisa feita em 2026-11-17 para orientar o design (`designer-ui`), a copy (`redator`) e a busca de fotos (`gerador-imagens`). Todas as afirmações trazem a URL de origem. Padrões extraídos, sem cópia de textos nem de assets.

## Perguntas de pesquisa
1. Que estrutura e padrões visuais usam sites de escolinhas e programas de futebol infantil?
2. O que os pais querem saber antes de matricular (segurança, metodologia, qualificação dos professores, faixas etárias)?
3. Quais benefícios do futebol e da atividade física na infância têm respaldo de fontes confiáveis, e como dizer isso sem exagero?
4. Que tipografias arredondadas e paletas servem ao nicho e passam no contraste WCAG AA?
5. Quais cuidados legais e éticos valem para imagens de crianças (licenças dos bancos, LGPD, ECA)?

---

## Resumo executivo
- Os pais priorizam **diversão e amigos**. Na pesquisa Project Play, "se divertir" (48%) e "jogar com amigos" (47%) lideram ([Project Play](https://projectplay.org/news/aspen-institute-national-survey-of-youth-and-sports-15-key-findings)). A copy deve vender diversão com segurança, não carreira.
- Benefícios com respaldo: 60 min/dia de atividade moderada a vigorosa (OMS 2020, SBP), coordenação motora, ossos e músculos, saúde mental e desenvolvimento social. O futebol em jogos reduzidos tem estudos com crianças de 8 a 12 anos ([Krustrup et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC5036233)).
- Os nomes das categorias (fraldinha, pré-mirim, mirim, infantil) **não seguem padrão nacional**: no critério CBF, pré-mirim tem 12 anos ([RBFF](https://www.rbff.com.br/index.php/rbff/article/view/1588/1171)). Mostre sempre a idade ao lado do nome da turma.
- Padrão de UX do nicho: cards de turma com nome e faixa etária bem visíveis, CTA repetido e números de confiança ([Little Kickers](https://www.littlekickers.co.uk)).
- Fotos de crianças em bancos livres **não vêm com autorização de imagem garantida** (Unsplash, Pexels e Pixabay avisam isso). Prefira crianças de costas, de longe ou desfocadas, ou cenas sem rosto, e nunca sugira que elas são alunas reais.

---

## Referências visuais
| Referência | Observação (padrão, não cópia) |
|---|---|
| [Little Kickers (home)](https://www.littlekickers.co.uk) | Hero com foto de ação em tela cheia. Grade de **4 cards por idade** (foto, nome em negrito, faixa etária na face do card, card inteiro clicável). Faixa de números (anos, unidades, treinadores). Lema curto sobre jogar sem pressão. CTA principal repetido no topo e no fim. Laranja vivo com acentos roxos, bola animada, recortes ilustrados e muito respiro. |
| [Little Kickers: Mighty Kickers](https://www.littlekickers.co.uk/mightykickers) | Página por faixa etária com foco de habilidades (driblar, passar, chutar, trabalho em equipe). Inspira o texto "foco de cada fase" nas turmas. |
| [FIFA Training Centre: Grassroots 4 a 8](https://www.fifatrainingcentre.com/en/practice/grassroots/4-to-8/small-team-exercises.php) | Referência de **metodologia** (não visual): times pequenos e iguais, de no máximo 4 contra 4, e muitos toques na bola. Sustenta o argumento de "turmas reduzidas e jogos em espaço pequeno". |
| [FIFA: Play-Practice-Play](https://www.fifatrainingcentre.com/en/practice/grassroots/grassroots-and-youth-football-essentials/grassroots-coaching-essentials/an-introduction-to-play-practice-play.php) | A aula começa e termina com jogo, com prática de habilidade no meio. Bom para ilustrar a metodologia em 3 passos (ícones numerados). |
| [Google Fonts: Baloo 2](https://fonts.google.com/specimen/Baloo+2/about) / [Fredoka](https://fonts.google.com/specimen/Fredoka/about) | Títulos arredondados e encorpados com cara infantil e sem perder a legibilidade. |

Não encontrei sites oficiais de escolinhas brasileiras (Zico 10, Neymar Sports etc.) com estrutura verificável nesta pesquisa. A busca trouxe só reportagens ([Folha Vitória](https://www.folhavitoria.com.br/tecnologia/escola-zico-10-de-futebol-feminino-impacta-no-desempenho-escolar-das-alunas/), [Consumidor Moderno](https://consumidormoderno.com.br/neymar-sports-franquias/)), por isso elas não entram como referência visual.

---

## Padrões recomendados

### Seções e conteúdo (o que os pais querem ver)
- **Diversão primeiro, sem pressão.** Diversão é o resultado que os pais mais desejam ([Project Play](https://projectplay.org/news/project-play-survey-11-of-sports-parents-believe-their-child-can-go-pro)). A AAP recomenda esporte organizado "pela diversão" e diz que forçar a criança não traz benefício duradouro ([HealthyChildren/AAP](https://healthychildren.org/English/news/Pages/AAP-Encourages-Organized-Sports.aspx)). A SBP também alerta para não forçar ([SBP](https://www.sbp.com.br/imprensa/detalhe/nid/em-manual-da-sbp-pediatras-orientam-pais-sobre-como-introduzir-atividades-fisicas-na-rotina-das-criancas-e-adolescentes-brasileiros/)). Isso confirma o tom do briefing, sem promessa de virar profissional.
- **Fraldinha (4 a 5 anos) como brincadeira.** Segundo a AAP, a maioria das crianças fica pronta para esporte organizado por volta dos 6 anos, e antes disso o brincar livre é mais benéfico ([HealthyChildren/AAP](https://healthychildren.org/English/news/Pages/AAP-Encourages-Organized-Sports.aspx)). Para 3 a 5 anos, a SBP indica atividades que desenvolvam a coordenação motora e brincadeiras com bola ([SBP](https://www.sbp.com.br/imprensa/detalhe/nid/em-manual-da-sbp-pediatras-orientam-pais-sobre-como-introduzir-atividades-fisicas-na-rotina-das-criancas-e-adolescentes-brasileiros/)). Descreva a turma como "aprender brincando", sem tática nem competição.
- **Segurança e qualificação.** Os checklists do Project Play pedem que os pais perguntem aos programas sobre ambiente seguro e líderes qualificados ([Project Play: parent resources](https://projectplay.org/parent-resources)). Guias para pais citam verificação de antecedentes dos treinadores, formação em primeiros socorros/RCP e noções sobre concussão ([NY Metro Parents](https://www.nymetroparents.com/article/Joining-A-Sports-League-Five-questions-every-parent-should-ask)). Sugestão de diferenciais (dados fictícios): professores com formação em primeiros socorros, entrada controlada, entrega da criança só a responsáveis cadastrados e água/sombra no intervalo.
- **CREF (cuidado com a afirmação).** A Lei 9.696/98 reserva as atividades de Educação Física a profissionais registrados nos CREFs ([Planalto](https://www.planalto.gov.br/ccivil_03/leis/l9696.htm)). O STJ (Tema 1.149) entendeu que treinadores de esporte sem atividade de preparação física não precisam do registro ([Lex](https://www.lex.com.br/trf1-confirma-que-treinador-de-futevolei-nao-e-obrigado-a-se-registrar-no-cref/)). **Copy:** apresente o CREF como diferencial ("professores formados em Educação Física, com registro no CREF"), nunca como "exigido por lei" para escolinhas. Com dados fictícios, use número de CREF claramente de exemplo (ex.: "CREF 000000-G/UF").
- **Turmas por idade.** Siga o padrão de cards com faixa etária na face ([Little Kickers](https://www.littlekickers.co.uk)). Como os nomes variam entre federações ([Revista Brasileira de Futebol, RBFF](https://www.rbff.com.br/index.php/rbff/article/view/1588/1171)), mostre **nome + idade + equivalente "Sub-X"**: Fraldinha 4 e 5 anos (Sub-6), Pré-mirim 6 e 7 (Sub-8), Mirim 8 e 9 (Sub-10), Infantil 10 a 12 (Sub-12). Uma nota curta pode explicar que são as turmas da escola.
- **Metodologia.** Jogos reduzidos de até 4 contra 4, muitos toques na bola e aula no formato jogo, habilidade, jogo ([FIFA Training Centre](https://www.fifatrainingcentre.com/en/practice/grassroots/4-to-8/small-team-exercises.php), [FIFA Play-Practice-Play](https://www.fifatrainingcentre.com/en/practice/grassroots/grassroots-and-youth-football-essentials/grassroots-coaching-essentials/an-introduction-to-play-practice-play.php)).
- **Meninas.** Há estudo com meninas de 10 a 12 anos mostrando ganhos de condicionamento com futebol na escola ([SDU](https://www.sdu.dk/en/om-sdu/institutter-centre/iob_idraet_og_biomekanik/nyt_iob/football-training-in-school-greatly-improves-girls-fitness)). Isso apoia a FAQ "meninas podem?" e fotos com meninas.
- **CTA de aula experimental.** O padrão de "aula de teste grátis" aparece em programas do nicho ([Little Kickers: Junior Kickers](https://littlekickers.co.uk/juniorkickers)). Repita o CTA no hero, depois das turmas, nos planos e no fim. Em celular, use botão fixo de WhatsApp.

### Benefícios para a copy (com fonte, sem exagero)
| Benefício | Como dizer | Fonte |
|---|---|---|
| Quantidade de atividade | "Ajuda a criança a chegar aos 60 minutos diários de atividade recomendados" (6 a 17 anos) | [OMS 2020, tradução DGS](https://www.desportoescolar.dge.mec.pt/sites/default/files/docs/translation_guidelines_oms_2020_port-pnpaf.pdf); [SBP](https://www.sbp.com.br/imprensa/detalhe/nid/em-manual-da-sbp-pediatras-orientam-pais-sobre-como-introduzir-atividades-fisicas-na-rotina-das-criancas-e-adolescentes-brasileiros/) |
| Ossos e músculos | "Correr, saltar e chutar fortalecem ossos e músculos" | [SBP](https://www.sbp.com.br/imprensa/detalhe/nid/em-manual-da-sbp-pediatras-orientam-pais-sobre-como-introduzir-atividades-fisicas-na-rotina-das-criancas-e-adolescentes-brasileiros/); [Bone Reports 2023](https://doaj.org/article/9cd76e006ff8414b9c4e95ceffb7695a) |
| Coordenação motora | "Desenvolve coordenação, equilíbrio e agilidade" | [SBP](https://www.sbp.com.br/imprensa/detalhe/nid/em-manual-da-sbp-pediatras-orientam-pais-sobre-como-introduzir-atividades-fisicas-na-rotina-das-criancas-e-adolescentes-brasileiros/); equilíbrio e salto: [EurekAlert, estudo FIFA 11 for Health](https://www.eurekalert.org/pub_releases/2018-06/uosd-fti060718.php) |
| Socialização e emoções | "Faz amigos, aprende a ganhar, perder e trabalhar em equipe" | [HealthyChildren/AAP](https://healthychildren.org/English/news/Pages/AAP-Encourages-Organized-Sports.aspx) |
| Saúde mental | "Está associado a melhor bem-estar" (associação, não cura) | [HealthyChildren/AAP](https://healthychildren.org/English/news/Pages/AAP-Encourages-Organized-Sports.aspx); [Guia de Atividade Física, RBAFS](https://rbafs.emnuvens.com.br/RBAFS/article/view/14567) |
| Menos tela | "Uma alternativa ativa ao tempo de tela" (SBP recomenda até 2 h/dia de tela recreativa a partir de 3 anos) | [SBP](https://www.sbp.com.br/imprensa/detalhe/nid/em-manual-da-sbp-pediatras-orientam-pais-sobre-como-introduzir-atividades-fisicas-na-rotina-das-criancas-e-adolescentes-brasileiros/) |

Regras de copy: prefira verbos como "ajuda", "contribui" e "estimula". Não prometa "melhora as notas", "cura ansiedade" nem "previne obesidade" como garantia. Não use percentuais de estudos estrangeiros como se fossem resultados da escola. O ganho de densidade óssea de 45% do estudo FIT FIRST vale para aquele estudo, não para a escolinha.

### Tipografia
- **Títulos:** Baloo 2 (variável, pesos 400 a 800, licença OFL) ([Google Fonts](https://fonts.google.com/specimen/Baloo+2/about); [Fontsource](https://cdn.jsdelivr.net/npm/@fontsource-variable/baloo-2@5.3.0/README.md)) ou Fredoka (variável em peso e largura) ([Google Fonts](https://fonts.google.com/specimen/Fredoka/about)). Fredoka funciona melhor em tamanhos de display do que em texto corrido ([Made Good Designs](https://madegooddesigns.com/?p=152114)).
- **Texto:** Nunito ou Nunito Sans, que combinam com os terminais arredondados ([Google Fonts: Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans/about); [Made Good Designs](https://madegooddesigns.com/?p=152114)). Corpo com 16 a 18 px no mínimo e entrelinha de cerca de 1,6.
- Carregue no máximo 2 famílias com `display=swap` e só os pesos usados, por desempenho.

### Cor (paleta do briefing com contraste AA)
- Requisito: 4,5:1 para texto normal e 3:1 para texto grande (24 px regular ou 18,5 px em negrito ou mais) ([W3C: 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)). Bordas de componentes e indicadores de foco pedem 3:1 ([W3C: novidades da WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)).
- **Verde-gramado:** use um tom escuro (na faixa de #166534 a #15803d) para botões com texto branco e para títulos. O verde vivo fica para fundos decorativos e ícones grandes.
- **Amarelo-sol:** nunca use como cor de texto sobre branco. Use como fundo de destaque com texto escuro (#1f2937 ou verde muito escuro), em selos e confetes.
- **Azul-céu:** fundo de seções alternadas com texto escuro. Para links, use azul escuro.
- **Laranja/coral:** acento em detalhes e ícones. Se for usado em botão, escureça até passar 4,5:1 com texto branco ou use texto escuro.
- Fundo creme ou branco quente. Confira cada par no verificador de contraste antes de fechar o `design.md`. Estes são pontos de partida, não valores já testados.

### Animação e interação
- Movimentos leves (bola quicando, confete, entrada em fade) dentro de `@media (prefers-reduced-motion: no-preference)` ou desligados com `reduce` ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
- Alvos de toque de pelo menos 24x24 px CSS (AA) ([W3C: 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)). Use 44x44 px nos botões principais (nível AAA de 2.5.5, recomendado para o público de celular) ([BOIA](https://www.boia.org/blog/understanding-target-size-under-wcag-2.2-and-how-it-affects-people-with-disabilities)).
- Foco visível em todos os elementos interativos ([W3C: 2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)). Com cabeçalho e botão de WhatsApp fixos, garanta que o foco não fique escondido: use `scroll-padding-top` (2.4.11, AA) ([W3C: novidades da WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)).
- FAQ com `<details>/<summary>` nativo. Link "pular para o conteúdo", como faz a home da Little Kickers ([Little Kickers](https://www.littlekickers.co.uk)).

### Termos de busca para fotos
Busque em inglês (mais resultados) e depois em português. Prefira fotos com crianças **de costas, à distância, em movimento desfocado ou só com pés e bola**.

| Uso | Termos sugeridos |
|---|---|
| Hero | `kids playing soccer`, `children football field`, `youth soccer game`, `kids soccer sunset`, `crianças jogando futebol` |
| Treino/metodologia | `kids soccer practice`, `soccer training cones`, `children soccer drills`, `soccer coach kids`, `treino futebol infantil` |
| Campo sintético | `artificial turf soccer field`, `synthetic grass football pitch`, `soccer field lines`, `campo grama sintética`, `futsal court` |
| Bola e detalhes | `soccer ball grass`, `soccer ball close up`, `kids soccer cleats`, `soccer goal net`, `bola de futebol` |
| Fraldinha (4 e 5 anos) | `toddler soccer`, `preschool soccer`, `little kid soccer ball` |
| Meninas | `girls soccer`, `girl playing football` |
| Equipe (substituir) | `soccer coach portrait`, `sports coach whistle`, `physical education teacher` |
| Depoimentos (substituir) | `parent child portrait outdoor`, `mother son park`, `father daughter smiling` |
| Wikimedia Commons | `Category:Youth association football`, `Category:Children playing association football`, `Category:Artificial turf`, `Category:Association football balls` (nomes de categoria a confirmar no Commons) |

---

## Riscos e o que evitar
- **Imagem de crianças sem autorização.** A licença do Unsplash não cobre o uso da imagem de pessoas reconhecíveis ([LicenseOrg](https://licenseorg.com/blog/free-stock-photos-licensing-traps)). O Unsplash diz que não consegue monitorar tudo o que é enviado ([Unsplash Help](https://help.unsplash.com/en/articles/2612329-releases-and-trademark)). O Pexels exclui pessoas identificáveis dos direitos licenciados e proíbe mostrá-las de forma negativa ([Pexels Terms](https://pexels.com/terms-of-service); [Pexels Help](https://help.pexels.com/hc/en-us/articles/360042332714-What-are-the-rules-for-using-Pexels-photos-or-videos)). O Pixabay avisa que uso comercial com pessoas identificáveis pode exigir consentimento e não garante que ele exista ([Pixabay Terms](https://pixabay.com/service/terms/)). O Commons não garante a ausência de restrições de direitos de personalidade ([Commons: identifiable people](https://c.enwp.org/wiki/Commons:Photographs_of_identifiable_people/checklist)). **Mitigação:** registre autor, URL e licença. Prefira fotos sem rosto ou de longe. Não use legendas com nome de criança. Não sugira que as crianças são alunas. Marque tudo como "substituir por fotos próprias com autorização dos responsáveis antes de publicar".
- **LGPD e ECA.** Dados de crianças exigem tratamento no melhor interesse delas e consentimento específico de um dos pais ou responsáveis (art. 14 da LGPD) ([Planalto: LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)). A ANPD admite outras bases legais, desde que se respeite o melhor interesse ([Lefosse](https://lefosse.com/noticias/alerta/anpd-publica-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes/)). O ECA protege a imagem da criança (art. 17) ([Planalto: ECA](https://www.planalto.gov.br/ccivil_03/leis/l8069.htm)). **No site:** não crie formulário que colete dados da criança. Mande para o WhatsApp do responsável. Se no futuro houver fotos reais de alunos, peça autorização escrita dos pais com a finalidade explicada ([Manual CMDCA Mogi Guaçu](https://digital.mogiguacu.sp.gov.br/wp-content/uploads/2026/06/MANUAL_USO_IMAGEM_VOZ_CRIANCAS_ADOLESCENTES_CMDCA-1.docx)). Isto é orientação de design, não parecer jurídico.
- **Promessas exageradas.** Evite "formamos craques", "peneira" e "garantia de resultado". A pressão dos pais afasta as crianças do esporte ([HealthyChildren/AAP](https://healthychildren.org/English/news/Pages/AAP-Encourages-Organized-Sports.aspx)).
- **"CREF obrigatório por lei".** A afirmação é juridicamente controversa para treinadores de esporte (ver acima). Use o CREF como diferencial.
- **Nomes de categoria como "oficiais".** Variam conforme a federação ([RBFF](https://www.rbff.com.br/index.php/rbff/article/view/1588/1171)). Sempre mostre a idade.
- **Visual "bobo" ou poluído.** Evite excesso de cores saturadas no texto, amarelo sobre branco, fontes cômicas no corpo e confete cobrindo conteúdo ou atrapalhando a leitura.
- **Animações sem controle.** Respeite `prefers-reduced-motion`. Nada piscando.
- **Fonte fraca descartada:** o site de perguntas e respostas "vocepergunta" tem faixas de categorias sobrepostas e contraditórias, por isso não foi usado.

---

## Fontes consultadas
- https://projectplay.org/news/aspen-institute-national-survey-of-youth-and-sports-15-key-findings
- https://projectplay.org/news/project-play-survey-11-of-sports-parents-believe-their-child-can-go-pro
- https://projectplay.org/parent-resources
- https://www.nymetroparents.com/article/Joining-A-Sports-League-Five-questions-every-parent-should-ask
- https://healthychildren.org/English/news/Pages/AAP-Encourages-Organized-Sports.aspx
- https://www.sbp.com.br/imprensa/detalhe/nid/em-manual-da-sbp-pediatras-orientam-pais-sobre-como-introduzir-atividades-fisicas-na-rotina-das-criancas-e-adolescentes-brasileiros/
- https://www.desportoescolar.dge.mec.pt/sites/default/files/docs/translation_guidelines_oms_2020_port-pnpaf.pdf
- https://rbafs.emnuvens.com.br/RBAFS/article/view/14567
- https://www.paho.org/pt/noticias/30-6-2021-ministerio-da-saude-do-brasil-lanca-guia-atividade-fisica-para-populacao
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5036233
- https://www.eurekalert.org/pub_releases/2018-06/uosd-fti060718.php
- https://www.sdu.dk/en/om-sdu/institutter-centre/iob_idraet_og_biomekanik/nyt_iob/football-training-in-school-greatly-improves-girls-fitness
- https://doaj.org/article/9cd76e006ff8414b9c4e95ceffb7695a
- https://www.rbff.com.br/index.php/rbff/article/view/1588/1171
- https://www.planalto.gov.br/ccivil_03/leis/l9696.htm
- https://www.lex.com.br/trf1-confirma-que-treinador-de-futevolei-nao-e-obrigado-a-se-registrar-no-cref/
- https://www.littlekickers.co.uk
- https://www.littlekickers.co.uk/mightykickers
- https://littlekickers.co.uk/juniorkickers
- https://www.fifatrainingcentre.com/en/practice/grassroots/4-to-8/small-team-exercises.php
- https://www.fifatrainingcentre.com/en/practice/grassroots/grassroots-and-youth-football-essentials/grassroots-coaching-essentials/an-introduction-to-play-practice-play.php
- https://fonts.google.com/specimen/Baloo+2/about
- https://fonts.google.com/specimen/Fredoka/about
- https://fonts.google.com/specimen/Nunito+Sans/about
- https://cdn.jsdelivr.net/npm/@fontsource-variable/baloo-2@5.3.0/README.md
- https://madegooddesigns.com/?p=152114
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html
- https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- https://www.boia.org/blog/understanding-target-size-under-wcag-2.2-and-how-it-affects-people-with-disabilities
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- https://help.unsplash.com/en/articles/2612329-releases-and-trademark
- https://licenseorg.com/blog/free-stock-photos-licensing-traps
- https://pexels.com/terms-of-service
- https://help.pexels.com/hc/en-us/articles/360042332714-What-are-the-rules-for-using-Pexels-photos-or-videos
- https://pixabay.com/service/terms/
- https://c.enwp.org/wiki/Commons:Photographs_of_identifiable_people/checklist
- https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- https://lefosse.com/noticias/alerta/anpd-publica-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes/
- https://www.planalto.gov.br/ccivil_03/leis/l8069.htm
- https://digital.mogiguacu.sp.gov.br/wp-content/uploads/2026/06/MANUAL_USO_IMAGEM_VOZ_CRIANCAS_ADOLESCENTES_CMDCA-1.docx
- https://www.folhavitoria.com.br/tecnologia/escola-zico-10-de-futebol-feminino-impacta-no-desempenho-escolar-das-alunas/
- https://consumidormoderno.com.br/neymar-sports-franquias/
