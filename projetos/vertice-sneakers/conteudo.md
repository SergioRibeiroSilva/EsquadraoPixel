# Conteúdo: Vértice Sneakers (etapa 3)

> Entradas: `briefing.md`, `dados-negocio.md` (dados fictícios, a pedido do usuário), `pesquisa.md` e `design.md`. Data: 18/11/2026.
> O desenvolvedor usa estes textos sem reescrever. Os elementos aparecem entre colchetes. Contatos vêm exatamente de `dados-negocio.md`.
> As políticas da loja (trocas, envio, pagamento, higienização) e os produtos são **dados de demonstração**, coerentes com o pedido de site fictício. Estão listados na seção 6 para troca antes de publicar.

---

## 1. Promessa central e voz

**Promessa central:** a Vértice é uma boutique de tênis de alto padrão que reúne pares de couro artesanal, edições limitadas e performance premium, com autenticidade garantida e atendimento com hora marcada, para quem escolhe um tênis como escolhe uma peça de design.

**Voz:** sofisticada, confiante, concisa.

**Evitar:**
1. Urgência e linguagem de varejo popular ("compre já", "últimas unidades", "imperdível", "promoção", "grátis").
2. Clichês vazios ("qualidade e excelência", "o melhor do mercado") e comparação com concorrentes.
3. Gírias de sneakerhead em excesso e anglicismos desnecessários (usar "edição limitada", não "drop"; "lançamento", não "hype").

Verbos preferidos nos CTAs: descobrir, explorar, conhecer, agendar, reservar.

---

## 2. Textos por seção (na ordem do `design.md`)

### 2.0 Elementos globais

- [link-pular] Pular para o conteúdo
- [logo-alt] Vértice Sneakers, início
- [sr-nova-aba-whatsapp] (abre o WhatsApp em nova aba)
- [sr-nova-aba] (abre em nova aba)

### 2.1 Cabeçalho

- [nav-1] Coleções
- [nav-2] Produtos
- [nav-3] A boutique
- [nav-4] Experiência
- [nav-5] Dúvidas
- [nav-6] Visite
- [cabecalho-cta] Agendar atendimento
- [menu-abrir] Abrir menu
- [menu-fechar] Fechar menu
- [menu-aria-label] Menu principal
- [menu-movel-cta] Agendar pelo WhatsApp
- [menu-movel-endereco] Alameda das Palmeiras, 1200, loja 3, Jardim Europa, Cidade Exemplo/UF

### 2.2 Hero carrossel (`#inicio`)

Rótulos de acessibilidade:
- [carrossel-aria-label] Destaques
- [carrossel-roledescription] carrossel
- [slide-roledescription] slide
- [slide-1-aria-label] 1 de 4 (e assim por diante: "2 de 4", "3 de 4", "4 de 4")
- [tablist-aria-label] Escolha o destaque
- [btn-pausar] Pausar apresentação
- [btn-retomar] Retomar apresentação
- [btn-anterior] Destaque anterior
- [btn-proximo] Próximo destaque
- [contador] 01 / 04

Abas do índice editorial:
- [aba-1] 01 · Couro artesanal
- [aba-2] 02 · Edições limitadas
- [aba-3] 03 · Performance premium
- [aba-4] 04 · Hora marcada

**Slide 1 (Couro artesanal)**
- [slide-1-eyebrow] Couro artesanal
- [slide-1-h1] Tênis de couro, costurados à mão.
- [slide-1-lead] A curadoria da Vértice reúne pares de couro integral, com acabamento artesanal feito para durar.
- [slide-1-cta] Descobrir a coleção
- [slide-1-alt] Tênis de couro claro com detalhe dourado, iluminado de lado sobre fundo escuro.

**Slide 2 (Edições limitadas)**
- [slide-2-eyebrow] Edições limitadas
- [slide-2-h2] Pares raros, tiragem numerada.
- [slide-2-lead] Modelos de pequena tiragem, com procedência verificada e autenticidade garantida em cada par.
- [slide-2-cta] Explorar edições limitadas
- [slide-2-alt] Par de tênis de design marcante em tons de preto, cinza e marrom, em estúdio escuro.

**Slide 3 (Performance premium)**
- [slide-3-eyebrow] Performance premium
- [slide-3-h2] Leveza técnica, acabamento de ateliê.
- [slide-3-lead] Materiais técnicos e entressolas leves, com o cuidado de acabamento que você espera de uma peça de luxo.
- [slide-3-cta] Conhecer a linha
- [slide-3-alt] Tênis esportivo branco em ângulo dinâmico sobre fundo preto.

**Slide 4 (Hora marcada)**
- [slide-4-eyebrow] Hora marcada
- [slide-4-h2] A boutique reservada para você.
- [slide-4-lead] Sala privativa, consultor dedicado e uma pré-seleção feita para o seu estilo, sem pressa.
- [slide-4-cta] Agendar atendimento
- [slide-4-link-secundario] Ou fale pelo WhatsApp
- [slide-4-alt] Tênis brancos expostos sobre pedestais em um ambiente de boutique minimalista e pouco iluminado.

> Nota ao desenvolvedor: os `alt` do hero seguem as descrições do `design.md` (seção 6.1). Se a foto escolhida pelo `gerador-imagens` for diferente (cor ou composição), ajuste só a descrição visual, sem citar marcas, e registre no `CHANGELOG.md`.

### 2.3 Coleções (`#colecoes`)

- [eyebrow] Coleções
- [h2] Quatro caminhos para o mesmo cuidado.
- [lead] Cada coleção nasce de um critério: material, raridade, desempenho ou permanência. Escolha por onde começar.

- [tile-1-titulo] Couro artesanal
- [tile-1-descricao] Couro integral, costura à mão e o toque que melhora com o uso.
- [tile-2-titulo] Performance premium
- [tile-2-descricao] Tecnologia leve para o movimento, com acabamento de boutique.
- [tile-3-titulo] Edições limitadas
- [tile-3-descricao] Tiragens pequenas, procedência verificada.
- [tile-4-titulo] Clássicos atemporais
- [tile-4-descricao] Linhas puras que atravessam estações.
- [tile-link] Explorar →
- [tile-aria] Explorar a coleção [nome da coleção] (ex.: "Explorar a coleção Couro artesanal")

Alt das fotos dos tiles (decorativas em relação ao texto do link; se o desenvolvedor optar por `alt` descritivo, usar):
- [tile-1-alt] Detalhe de tênis de couro em tons de marrom e branco.
- [tile-2-alt] Tênis técnico sobre superfície escura.
- [tile-3-alt] Tênis de cano baixo com estampa marcante sobre superfície escura.
- [tile-4-alt] Tênis branco minimalista sob luz suave.

### 2.4 Produtos em destaque (`#produtos`)

- [eyebrow] Curadoria da estação
- [h2] Escolhidos um a um.
- [nota] Preços de exemplo, sujeitos à disponibilidade de numeração.

Filtro:
- [filtro-aria-label] Filtrar por coleção
- [chip-1] Todos
- [chip-2] Couro artesanal
- [chip-3] Performance premium
- [chip-4] Edições limitadas
- [chip-5] Clássicos atemporais
- [anuncio-contagem] "8 modelos" / "2 modelos" / "1 modelo" (formato: "[N] modelos" no plural, "1 modelo" no singular)

Cards (coleção · nome · material · preço · selo):

| # | [coleção] | [nome] | [material] | [preço] | [selo] |
|---|---|---|---|---|---|
| 01 | Couro artesanal | Atelier Low | Couro de bezerro integral, costura à mão e sola de borracha natural | R$ 2.890 | Feito à mão |
| 02 | Couro artesanal | Ofício Mid | Camurça e couro nobuck, forro em couro macio | R$ 3.150 | Feito à mão |
| 03 | Performance premium | Aero Runner | Malha técnica respirável, entressola de espuma leve e reforços em couro | R$ 1.490 | — |
| 04 | Performance premium | Pulso Trainer | Nylon técnico e camurça, entressola com amortecimento responsivo | R$ 1.890 | — |
| 05 | Edições limitadas | Duna 01 | Couro branco e nobuck areia, detalhe laranja no calcanhar, par numerado | R$ 4.900 | Edição limitada |
| 06 | Edições limitadas | Mosaico Low | Couro granulado verde-água e biqueira em camurça perfurada, par numerado | R$ 3.980 | Edição limitada |
| 07 | Clássicos atemporais | Ônix Plataforma | Couro liso preto, sola plataforma branca e aba de contraste no calcanhar | R$ 1.390 | — |
| 08 | Clássicos atemporais | Cânone Court | Camurça azul com costura tipo mocassim, sola de borracha cinza | R$ 1.690 | — |

- [card-cta] Reservar
- [card-cta-aria] Reservar [nome] pelo WhatsApp (abre em nova aba) (ex.: "Reservar Atelier Low pelo WhatsApp (abre em nova aba)")
- [card-alt] [nome], tênis de [material resumido] (ex.: "Atelier Low, tênis de couro integral claro"). Ajustar cor conforme a descrição de cada foto em `imagens.md`.

Mensagens de WhatsApp por produto (`wa-produto`), prontas para codificar:
- Olá! Vim pelo site da Vértice e gostaria de reservar o Atelier Low.
- Olá! Vim pelo site da Vértice e gostaria de reservar o Ofício Mid.
- Olá! Vim pelo site da Vértice e gostaria de reservar o Aero Runner.
- Olá! Vim pelo site da Vértice e gostaria de reservar o Pulso Trainer.
- Olá! Vim pelo site da Vértice e gostaria de reservar o Duna 01.
- Olá! Vim pelo site da Vértice e gostaria de reservar o Mosaico Low.
- Olá! Vim pelo site da Vértice e gostaria de reservar o Ônix Plataforma.
- Olá! Vim pelo site da Vértice e gostaria de reservar o Cânone Court.

> Nota: se a foto de um produto não combinar com o material descrito (ex.: foto de tênis de malha na linha de couro), o desenvolvedor pode trocar a ordem das fotos dentro da mesma coleção. Se ainda assim não combinar, peça ao redator um ajuste de material.

### 2.5 Diferenciais (`#diferenciais`)

- [h2] O que vem com cada par.

- [item-1-numero] 01
- [item-1-titulo] Curadoria
- [item-1-texto] Cada modelo passa por uma seleção de material, construção e acabamento. Só entra na vitrine o que nós mesmos usaríamos por muitos anos.
- [item-2-numero] 02
- [item-2-titulo] Autenticidade garantida
- [item-2-texto] Todo par é verificado antes da venda, com conferência de procedência, costuras, etiquetas e embalagem. Você recebe o certificado de autenticidade da boutique.
- [item-3-numero] 03
- [item-3-titulo] Atendimento personalizado
- [item-3-texto] Um consultor acompanha você do primeiro contato à prova final, com indicação de numeração, combinações e cuidados de cada material.
- [item-4-numero] 04
- [item-4-titulo] Cuidado pós-venda
- [item-4-texto] A primeira higienização é cortesia da casa. Depois, seguimos à disposição para limpeza, hidratação do couro e pequenos reparos.

### 2.6 A boutique (`#boutique`, faixa clara)

- [eyebrow] A boutique
- [h2] Um tênis merece o cuidado de um sapato sob medida.
- [paragrafo-1] A Vértice nasceu dessa convicção. Reunimos, em um só endereço, pares que unem design, matéria-prima nobre e construção honesta: do couro costurado à mão às edições de pequena tiragem.
- [paragrafo-2] Aqui, a escolha é feita com calma. Você toca o couro, sente o peso da sola, prova com o tempo que precisar. Nossa curadoria olha para o que permanece, não para o que passa.
- [citacao] "Escolhemos cada par como quem escolhe uma peça para a vida inteira."
- [citacao-autoria] Curadoria Vértice

Contadores (fatos do próprio site, sem números inventados):
- [contador-1-numero] 4
- [contador-1-legenda] Coleções autorais
- [contador-2-numero] 34–45
- [contador-2-legenda] Numerações disponíveis
- [contador-3-numero] 1:1
- [contador-3-legenda] Um consultor por visita

- [foto-alt] Mãos de um artesão costurando uma peça de couro em sua bancada.

### 2.7 Faixa de ambiente

- [foto-alt] (vazio, decorativa: `alt=""`)

### 2.8 Experiência com hora marcada (`#experiencia`)

- [eyebrow] Experiência
- [h2] Sua visita, do seu jeito.
- [lead] O atendimento com hora marcada transforma a compra em uma conversa. Veja como funciona.

Passos (`<ol>`):
- [passo-1-titulo] Agende
- [passo-1-texto] Escolha o dia e o período pelo formulário ou pelo WhatsApp. Confirmamos o horário em seguida.
- [passo-2-titulo] Receba uma pré-seleção
- [passo-2-texto] A partir do seu estilo e da sua numeração, o consultor separa os modelos antes da sua chegada.
- [passo-3-titulo] Experimente com calma
- [passo-3-texto] Na sala privativa, você prova cada par sem pressa, com orientação sobre ajuste, material e conservação.
- [passo-4-titulo] Leve com cuidado contínuo
- [passo-4-texto] Seu par sai com certificado de autenticidade e a primeira higienização cortesia, para quando precisar.

Formulário (`#agendar`):
- [form-titulo] Agende seu atendimento
- [form-apoio] Preencha o que souber. Só o nome é obrigatório.
- [campo-nome-rotulo] Nome
- [campo-nome-placeholder] Como prefere ser chamado
- [campo-colecao-rotulo] Coleção de interesse
- [campo-colecao-opcoes] Selecione (opção vazia) · Couro artesanal · Performance premium · Edições limitadas · Clássicos atemporais · Ainda não sei
- [campo-numeracao-rotulo] Numeração
- [campo-numeracao-opcoes] Selecione (opção vazia) · 34 · 35 · 36 · 37 · 38 · 39 · 40 · 41 · 42 · 43 · 44 · 45 · Não sei
- [campo-numeracao-ajuda] Se estiver em dúvida, medimos na boutique.
- [campo-dia-rotulo] Dia preferido
- [campo-dia-opcoes] Selecione (opção vazia) · Segunda · Terça · Quarta · Quinta · Sexta · Sábado
- [campo-dia-ajuda] Aos domingos a boutique fica fechada.
- [campo-periodo-legend] Período
- [campo-periodo-opcoes] Manhã · Tarde · Fim de tarde
- [form-botao] Enviar pelo WhatsApp
- [form-botao-sr] (abre o WhatsApp em nova aba)
- [form-privacidade] Seus dados vão só para a conversa no WhatsApp; nada fica salvo no site.
- [form-telefone] Prefere ligar? (00) 3000-0000
- [form-fallback-sem-js] Agendar pelo WhatsApp

Mensagens do formulário:
- [erro-nome-vazio] Informe seu nome para continuarmos.
- [erro-nome-curto] O nome precisa ter pelo menos 2 letras.
- [sucesso] Pronto. Abrimos o WhatsApp com a sua mensagem; é só tocar em enviar.
- [aviso-popup-bloqueado] Não conseguimos abrir o WhatsApp. Toque aqui para continuar a conversa. (link para `wa-form` montado)

Modelo da mensagem montada (`wa-form`), omitindo campos vazios:
> Olá! Vim pelo site da Vértice e gostaria de agendar um atendimento. Nome: [nome]. Interesse: [coleção]. Numeração: [numeração]. Preferência: [dia], [período].

Exemplo completo: "Olá! Vim pelo site da Vértice e gostaria de agendar um atendimento. Nome: Ana. Interesse: Couro artesanal. Numeração: 37. Preferência: sábado, manhã."

### 2.9 Depoimentos (`#depoimentos`)

- [eyebrow] Clientes
- [h2] Quem já viveu a experiência.
- [aviso] Depoimentos ilustrativos, para demonstração.

Todos os três: **EXEMPLO, substituir antes de publicar** (nomes fictícios; fotos de banco de imagens).

- [depoimento-1-texto] Saí com um par que eu procurava havia meses. O consultor já tinha separado a minha numeração e ainda me explicou como conservar a camurça.
- [depoimento-1-nome] Rafael M.
- [depoimento-1-contexto] Colecionador · Exemplo
- [depoimento-1-alt] Retrato de Rafael M., cliente de exemplo.

- [depoimento-2-texto] A sala privativa faz toda a diferença. Provei com calma, sem ninguém apressando, e o couro é ainda mais bonito ao vivo.
- [depoimento-2-nome] Camila T.
- [depoimento-2-contexto] Arquiteta · Exemplo
- [depoimento-2-alt] Retrato de Camila T., cliente de exemplo.

- [depoimento-3-texto] Comprei uma edição limitada com o certificado de autenticidade da boutique. Meses depois, levei para higienizar e voltou como novo.
- [depoimento-3-nome] Eduardo L.
- [depoimento-3-contexto] Cliente da linha Edições limitadas · Exemplo
- [depoimento-3-alt] Retrato de Eduardo L., cliente de exemplo.

### 2.10 Perguntas frequentes (`#duvidas`)

Coluna esquerda:
- [eyebrow] Dúvidas
- [h2] Antes da sua visita.
- [texto] Reunimos as perguntas mais comuns. Se a sua não estiver aqui, um consultor responde pelo WhatsApp.
- [link] Fale com um consultor

Perguntas (`<details>`):
1. [pergunta-1] Como sei que o tênis é autêntico?
   [resposta-1] Todo par é verificado pela nossa equipe antes de entrar na vitrine: procedência, costuras, etiquetas e embalagem. Na compra, você recebe o certificado de autenticidade da Vértice.
2. [pergunta-2] Posso trocar se a numeração não servir?
   [resposta-2] Sim. Você tem até 30 dias para trocar, desde que o par esteja sem uso, com etiquetas e na embalagem original. A troca pode ser feita na boutique ou combinada pelo WhatsApp.
3. [pergunta-3] Como escolho a numeração certa?
   [resposta-3] Trabalhamos do 34 ao 45. Cada modelo tem uma forma; por isso o consultor indica o ajuste de cada par. Na boutique, medimos seu pé antes da prova.
4. [pergunta-4] Vocês enviam para outras cidades?
   [resposta-4] Sim, enviamos para todo o Brasil com seguro e código de rastreio. Prazo e valor do frete são informados no WhatsApp, conforme o seu CEP.
5. [pergunta-5] Como funciona a higienização cortesia?
   [resposta-5] A primeira higienização de cada par comprado na Vértice é cortesia. Basta agendar pelo WhatsApp e trazer o tênis à boutique. Também fazemos hidratação de couro e pequenos reparos.
6. [pergunta-6] Quais são as formas de pagamento?
   [resposta-6] Aceitamos Pix e cartões de crédito, com parcelamento combinado no atendimento.
7. [pergunta-7] Posso reservar um modelo antes de ir à loja?
   [resposta-7] Pode. Toque em "Reservar" no produto ou fale conosco pelo WhatsApp. Separamos o par na sua numeração, conforme a disponibilidade, para a sua visita.

### 2.11 Visite a boutique (`#visite`)

- [eyebrow] Visite
- [h2] Um endereço para escolher com calma.
- [endereco-rotulo] Endereço
- [endereco] Alameda das Palmeiras, 1200, loja 3, Jardim Europa, Cidade Exemplo/UF, CEP 00000-000
- [horarios-rotulo] Horários
- [horario-1-dia] Segunda a sexta
- [horario-1-hora] 10h às 20h
- [horario-2-dia] Sábado
- [horario-2-hora] 10h às 18h
- [horario-3-dia] Domingo
- [horario-3-hora] Fechado
- [horarios-nota] Atendimento com hora marcada todos os dias úteis.
- [telefone-rotulo] Telefone
- [telefone] (00) 3000-0000
- [whatsapp-rotulo] WhatsApp
- [whatsapp] (00) 90000-0000
- [email-rotulo] E-mail
- [email] contato@verticesneakers.com.br
- [cta-primario] Agendar atendimento
- [cta-secundario] Abrir no Google Maps
- [cta-secundario-sr] (abre em nova aba)
- [foto-alt] Prateleiras de madeira escura com pares de tênis expostos sob luz quente de vitrine.

### 2.12 CTA final (`#agende`)

- [eyebrow] Hora marcada
- [h2] Seu próximo par começa com uma conversa.
- [apoio] Conte o que você procura. Preparamos a pré-seleção e reservamos a boutique para você.
- [cta-primario] Agendar pelo WhatsApp
- [link-secundario] Ou visite a boutique
- [foto-alt] (vazio, decorativa: `alt=""`)

### 2.13 Rodapé

- [assinatura] Boutique de tênis de alto padrão. Curadoria, autenticidade e cuidado em cada par.
- [col-nav-titulo] Navegue
- [col-nav-links] Coleções · Produtos · A boutique · Experiência · Dúvidas · Visite
- [col-contato-titulo] Contato
- [contato-endereco] Alameda das Palmeiras, 1200, loja 3, Jardim Europa, Cidade Exemplo/UF
- [contato-telefone] (00) 3000-0000
- [contato-whatsapp] WhatsApp (00) 90000-0000
- [contato-email] contato@verticesneakers.com.br
- [col-redes-titulo] Acompanhe
- [instagram-texto] @verticesneakers
- [instagram-aria] Instagram da Vértice (abre em nova aba)
- [col-horario-titulo] Horário
- [horario-resumo] Seg a Sex 10h–20h · Sáb 10h–18h · Dom fechado
- [copyright] © 2026 Vértice Sneakers
- [aviso-demo] Site de demonstração. Marca, endereço, contatos, produtos e depoimentos são fictícios.
- [creditos-fotos-rotulo] Fotos: (lista de autores e bancos conforme `imagens.md`, ex.: "Fotos: Nome do autor (Unsplash), Nome do autor (Pexels)")

### 2.14 Barra fixa no celular

- [barra-cta] Agendar pelo WhatsApp
- [barra-cta-sr] (abre o WhatsApp em nova aba)

---

## 3. SEO e compartilhamento

- [title] Vértice Sneakers | Tênis de alto padrão em Cidade Exemplo (57 caracteres)
- [meta-description] Boutique de tênis de alto padrão: couro artesanal, edições limitadas e autenticidade garantida. Agende seu atendimento com hora marcada. (138 caracteres)
- [og:title] Vértice Sneakers, boutique de tênis de alto padrão
- [og:description] Couro artesanal, edições limitadas e performance premium, com autenticidade garantida. Agende seu atendimento na boutique.
- [og:image:alt] Tênis de couro claro com detalhe dourado sobre fundo escuro, com o logotipo da Vértice.
- [og:locale] pt_BR
- [og:site_name] Vértice Sneakers
- [json-ld-priceRange] R$ 1.200–4.900
- [json-ld-description] Boutique de tênis de alto padrão com couro artesanal, edições limitadas e atendimento com hora marcada.

---

## 4. Microtextos

### WhatsApp
- [wa-geral] Olá! Vim pelo site da Vértice e gostaria de agendar um atendimento.
- [wa-produto] Olá! Vim pelo site da Vértice e gostaria de reservar o [nome do produto].
- [wa-form] ver modelo na seção 2.8.

### Botões e links recorrentes
- Agendar atendimento (âncora para `#agendar`)
- Agendar pelo WhatsApp (abre o WhatsApp)
- Reservar (produto)
- Explorar → (tiles)
- Fale com um consultor (FAQ)
- Abrir no Google Maps

### Estados
- [filtro-vazio] Nenhum modelo nesta coleção no momento. Fale com um consultor para encomendas.
- [contagem-filtro] [N] modelos / 1 modelo
- [imagem-erro] (não exibir texto; manter o fundo `--cor-superficie`)

### Navegação acessível
- [nav-atual] `aria-current="true"` na seção visível (sem texto extra)
- [voltar-topo] (não previsto no design; se o desenvolvedor incluir, usar "Voltar ao início")

---

## 5. Pendências

Nenhuma pendência de contato: todos os dados vêm de `dados-negocio.md` (fictícios, a pedido do usuário).

---

## 6. Dados de demonstração assumidos (trocar antes de publicar um site real)

Estes itens não estão no briefing nem em `dados-negocio.md`. Foram criados como fictícios, coerentes com o pedido do usuário. Não são `[PENDENTE]`, mas precisariam de confirmação num site real:

1. Os 8 produtos (nomes, materiais e preços na faixa de R$ 1.200 a R$ 4.900 do briefing).
2. Prazo de troca de 30 dias, sem uso e com embalagem original.
3. Envio para todo o Brasil, com seguro e rastreio.
4. Formas de pagamento: Pix e cartões, com parcelamento combinado no atendimento.
5. Primeira higienização cortesia para pares comprados na boutique; certificado de autenticidade da Vértice.
6. Sala privativa e pré-seleção pelo consultor (do briefing e do design, tratadas como serviço da loja).
7. Os três depoimentos e seus nomes (Rafael M., Camila T., Eduardo L.): exemplos, substituir antes de publicar.

Os contadores da seção "A boutique" usam apenas fatos do próprio site (4 coleções, numeração 34–45, atendimento 1:1), sem anos de mercado nem números de clientes inventados.

---

## Revisões

### 18/11/2026: material dos produtos 05 a 08 ajustado às fotos (pedido do desenvolvedor, `site/CHANGELOG.md`)
Nomes, preços, selos e mensagens de WhatsApp mantidos (as mensagens citam só o nome, então não mudam).

| # | Nome | Antes | Depois | Alt sugerido (novo) |
|---|---|---|---|---|
| 05 | Noturno 01 → Duna 01 | Couro envernizado preto e camurça, par numerado | Couro branco e nobuck areia, detalhe laranja no calcanhar, par numerado | Duna 01, tênis de couro branco e nobuck areia |
| 06 | Mosaico Low | Jacquard estampado com recortes em couro, par numerado | Couro granulado verde-água e biqueira em camurça perfurada, par numerado | Mosaico Low, tênis de couro verde-água com sola creme |
| 07 | Linha Branca → Ônix Plataforma | Couro napa branco, forro em couro e sola costurada | Couro liso preto, sola plataforma branca e aba de contraste no calcanhar | Ônix Plataforma, tênis de couro preto com sola branca |
| 08 | Cânone Court | Couro e camurça em tom creme, sola de borracha crua | Camurça azul com costura tipo mocassim, sola de borracha cinza | Cânone Court, sapatênis de camurça azul |

### 18/11/2026: nomes trocados para combinar com as fotos (pedido do orquestrador)
- "Noturno 01" → "Duna 01": o par é branco e areia; o "01" mantém a ideia de edição numerada.
- "Linha Branca" → "Ônix Plataforma": o par é de couro preto com sola plataforma.
Trocados nos cards, nos alt e nas mensagens de reserva no WhatsApp. Os nomes antigos não apareciam em outras seções (hero, coleções, FAQ).

### Revisão do ciclo 1 (19/11/2026)
- Alt da foto da seção Visite: "Interior moderno de loja de calçados, com prateleiras iluminadas e pares em exposição." → "Prateleiras de madeira escura com pares de tênis expostos sob luz quente de vitrine." (a foto foi trocada pelo gerador-imagens).
