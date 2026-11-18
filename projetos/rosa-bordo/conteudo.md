# Conteúdo: Rosa Bordô | bonecas de pano

> Etapa 3 (redator), 2026-11-17. Entradas: `briefing.md`, `dados-negocio.md`, `pesquisa.md`, `design.md`.
> **Dados de contato, preços, prazos e pagamento são FICTÍCIOS** (pedido do usuário) e vêm de `dados-negocio.md`. O único dado real é o Instagram @arosabordo. O desenvolvedor marca cada dado fictício com `<!-- FICTÍCIO: substituir antes de publicar -->`.
> Os **modelos da coleção** (nomes, tamanhos e preços) e os **depoimentos** são exemplos: substituir antes de publicar.
> Palavras proibidas em todo o site: "comprar", "carrinho", "loja", "pronta-entrega", "certificada", "100% segura", "segura para bebês", "antialérgico" como garantia, selo Inmetro.
> `*itálico*` nos títulos = `<em>` (Fraunces itálico, ver design 2.2).

---

## 1. Promessa central e voz

**Promessa central:** bonecas de pano costuradas e bordadas à mão, sob encomenda e do jeitinho de quem vai ganhar, para quem quer dar um presente afetivo que vire memória de infância.

**Voz (3 adjetivos):** afetiva, delicada, direta.
- A artesã fala em 1ª pessoa ("eu costuro", "eu bordo") quando fala de si e do processo; a visitante é tratada por "você".
- Frases curtas, vocabulário de ateliê (ponto, retalho, linha, bordado), sem diminutivos em excesso (no máximo "rostinho", "jeitinho", "roupinha").

**Evitar:**
1. Clichês vazios ("qualidade e excelência", "o melhor preço", "produtos incríveis").
2. Promessas de segurança ou certificação ("100% segura", "certificada", "segura para bebês", "antialérgico"): falar de **cuidados**, não de garantias.
3. Linguagem de loja ("comprar", "carrinho", "estoque", "pronta-entrega"): tudo é **encomenda**.

---

## 2. Textos por seção (ordem do design)

### 2.0 Skip link e rótulos globais

- [skip-link] Pular para o conteúdo
- [aviso-nova-aba] (abre em nova aba) — texto `.sr-only` em todo link externo
- [aviso-whatsapp] (abre o WhatsApp em nova aba) — texto `.sr-only` nos CTAs de WhatsApp

### 2.1 Faixa do topo

- [faixa-texto] Feito à mão · Sob encomenda · Enviamos para todo o Brasil
- [faixa-texto-curta] (< 360px) Feito à mão · Enviamos para todo o Brasil

### 2.2 Cabeçalho

- [logo-aria-label] Rosa Bordô, início
- [nav-aria-label] Principal
- [nav-1] Coleção → `#colecao`
- [nav-2] Sobre → `#sobre`
- [nav-3] Personalize → `#personalize`
- [nav-4] Como encomendar → `#como-encomendar`
- [nav-5] Perguntas → `#perguntas`
- [nav-6] Contato → `#contato`
- [cta-cabecalho] Encomendar → WhatsApp (encomenda)
- [menu-abrir] Abrir menu
- [menu-fechar] Fechar menu

### 2.3 Hero carrossel (`#inicio`)

**Rótulos de acessibilidade**
- [hero-aria-roledescription] carrossel
- [hero-aria-label] Destaques da Rosa Bordô
- [btn-pausar] Pausar apresentação
- [btn-retomar] Retomar apresentação
- [btn-anterior] Slide anterior
- [btn-proximo] Próximo slide
- [indicadores-aria-label] Escolher slide
- [indicador-1] Coleção (1 de 4)
- [indicador-2] Personalizadas (2 de 4)
- [indicador-3] Feito à mão (3 de 4)
- [indicador-4] Presente (4 de 4)
- [slide-N-aria-label] 1 de 4 · 2 de 4 · 3 de 4 · 4 de 4

**Slide 1: Coleção** (`<h1>`, LCP)
- [slide-1-etiqueta] Feitas à mão, sob encomenda
- [slide-1-h1] Bonecas de pano feitas *ponto a ponto*
- [slide-1-subtitulo] Modelos para inspirar a sua encomenda, costurados e bordados à mão com carinho em cada detalhe.
- [slide-1-cta-primario] Encomendar minha boneca → WhatsApp (encomenda)
- [slide-1-cta-secundario] Ver os modelos → `#colecao`
- [slide-1-alt] Bonecas de pano coloridas, feitas à mão, lado a lado sobre uma toalha bordada.

**Slide 2: Personalizadas** (`<h2>`)
- [slide-2-etiqueta] Do seu jeitinho
- [slide-2-h2] Com o jeitinho e o *nome* de quem vai ganhar
- [slide-2-subtitulo] Você escolhe a cor da pele, o cabelo e a roupinha. Eu bordo cada detalhe à mão.
- [slide-2-cta-primario] Quero uma personalizada → WhatsApp (personalizada)
- [slide-2-cta-secundario] Ver como personalizar → `#personalize`
- [slide-2-alt] Boneca de pano de cabelo cacheado de lã, laço vermelho e vestido xadrez vermelho e branco (foto ilustrativa).

**Slide 3: Feito à mão** (`<h2>`)
- [slide-3-etiqueta] No meu ateliê
- [slide-3-h2] Cada ponto é dado *à mão*
- [slide-3-subtitulo] Do molde ao rostinho bordado, cada boneca passa pelas minhas mãos, sem pressa.
- [slide-3-cta-primario] Conhecer a artesã → `#sobre`
- [slide-3-cta-secundario] — (sem botão secundário)
- [slide-3-alt] Mãos costurando um tecido claro com agulha e linha, sob luz natural.

**Slide 4: Presente** (`<h2>`)
- [slide-4-etiqueta] Presente com memória
- [slide-4-h2] Um presente para guardar *por muitos anos*
- [slide-4-subtitulo] Conte para quem é e para quando. A gente combina tudo pelo WhatsApp, sem complicação.
- [slide-4-cta-primario] Ver como encomendar → `#como-encomendar`
- [slide-4-cta-secundario] Ver no Instagram → `https://www.instagram.com/arosabordo/` (nova aba)
- [slide-4-alt] Boneca de pano de linho cru, com touquinha e olhos bordados, sentada numa cadeirinha de palha (foto ilustrativa).

> Os `alt` dos 4 slides já batem com as fotos entregues em `imagens.md`. O texto do slide 4 não menciona bebê, berço nem chupeta, e o `alt` também não (a chupeta é só objeto de cena e deve sair do quadro, se o recorte permitir).

### 2.4 Faixa de diferenciais

- [dif-1] Costurada à mão, ponto a ponto
- [dif-2] Rostinho bordado à mão
- [dif-3] Personalize do seu jeito
- [dif-4] Envio para todo o Brasil

### 2.5 Coleção (`#colecao`)

- [colecao-eyebrow] Coleção
- [colecao-h2] Modelos para inspirar a *sua* boneca
- [colecao-apoio] Cada boneca é feita sob encomenda, só depois da nossa conversa. Escolha um modelo como ponto de partida e mude o que quiser: tom de pele, cabelo, roupinha ou nome bordado.
- [colecao-link] Como encomendar → `#como-encomendar`
- [card-selo] Sob encomenda
- [card-preco-rotulo] a partir de
- [card-cta] Quero um modelo assim
- [card-etiqueta-bordado] Bordado à mão

> Modelos de EXEMPLO (nomes, tamanhos e preços FICTÍCIOS, dentro da faixa de `dados-negocio.md`). Substituir pelos modelos reais do @arosabordo antes de publicar.

| Card | Foto | [titulo] | [descricao] | [etiqueta-tamanho] | [preco] | [alt] |
|---|---|---|---|---|---|---|
| 1 | `modelo-1` | Lia | Cachos ruivos de lã, laço no alto e vestidinho estampado. | 30 cm | R$ 129 | Boneca de pano de cabelo ruivo cacheado de lã, laço no alto, vestido estampado em preto e branco e sandalinhas (foto ilustrativa). |
| 2 | `modelo-3` | Cecília | Maria-chiquinha, bochechas bordadas e vestido amarelo com rendinha. | 35 cm | R$ 159 | Boneca de pano de maria-chiquinha castanha, rostinho bordado e vestido amarelo com barrado de renda, deitada na grama (foto ilustrativa). |
| 3 | `modelo-4` | Matilde | Jardineira pink, meias listradas e cabelo de lã vermelho. | 35 cm | R$ 159 | Boneca de pano de cabelo vermelho de lã, jardineira pink e meias listradas, sentada numa prateleira (foto ilustrativa). |
| 4 | `modelo-5` | Maria Flor | Boina e saia jeans, sapatinhos vermelhos e uma bonequinha de companhia. | 40 cm | R$ 219 | Boneca de pano de cabelo longo, boina e saia jeans, jaqueta escura e sapatinhos vermelhos, segurando uma bonequinha (foto ilustrativa). |
| 5 | `modelo-6` | Aurora | Coelhinha de jardineira pastel e orelhas compridas. | 40 cm | R$ 249 | Coelhinhas de tecido com jardineiras em tons pastel (foto ilustrativa). |
| 6 | `modelo-2` | Benedita | A maior da coleção: cabelo de lã turquesa, casaquinho rosa e vestido de bolinhas. | 45 cm | R$ 389 | Boneca de pano de cabelo azul-turquesa de lã, casaquinho rosa e vestido de bolinhas (foto ilustrativa). |

> Textos e `alt` já conferidos com as fotos de `imagens.md` (coluna "Foto"). O desenvolvedor aplica exatamente como está, sem reescrever. A etiqueta [card-etiqueta-bordado] "Bordado à mão" não deve aparecer nos cards 3 (Matilde) e 4 (Maria Flor): as fotos mostram olhos aplicados e botões, não bordado.

**Mensagem de WhatsApp por card** (modelo: "Olá, Rosa Bordô! Vim pelo site e gostei do modelo [Nome]. Pode me contar como encomendar?"):

| Card | Link |
|---|---|
| Lia | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Vim%20pelo%20site%20e%20gostei%20do%20modelo%20Lia.%20Pode%20me%20contar%20como%20encomendar%3F` |
| Cecília | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Vim%20pelo%20site%20e%20gostei%20do%20modelo%20Cec%C3%ADlia.%20Pode%20me%20contar%20como%20encomendar%3F` |
| Matilde | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Vim%20pelo%20site%20e%20gostei%20do%20modelo%20Matilde.%20Pode%20me%20contar%20como%20encomendar%3F` |
| Maria Flor | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Vim%20pelo%20site%20e%20gostei%20do%20modelo%20Maria%20Flor.%20Pode%20me%20contar%20como%20encomendar%3F` |
| Aurora | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Vim%20pelo%20site%20e%20gostei%20do%20modelo%20Aurora.%20Pode%20me%20contar%20como%20encomendar%3F` |
| Benedita | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Vim%20pelo%20site%20e%20gostei%20do%20modelo%20Benedita.%20Pode%20me%20contar%20como%20encomendar%3F` |

- [card-cta-sr] Rótulo acessível do CTA: "Quero um modelo assim: [Nome] (abre o WhatsApp em nova aba)"
- [colecao-nota] As fotos são exemplos. Cada boneca é única e feita sob encomenda: cores e detalhes podem variar.

### 2.6 Sobre a artesã (`#sobre`)

- [sobre-eyebrow] Sobre a artesã
- [sobre-h2] Oi, que bom ter você *aqui*
- [sobre-p1] Eu sou a artesã por trás da Rosa Bordô. Cada boneca nasce na minha mesa de costura: escolho o tecido, risco o molde, recorto, costuro e encho com calma, até ela ganhar forma.
- [sobre-p2] O rostinho é a parte de que mais gosto. Olhos, bochechas e sorriso são bordados à mão, ponto por ponto, e é aí que cada boneca ganha a sua personalidade. Por isso, nenhuma sai igual à outra.
- [sobre-p3] Quando você me conta para quem é o presente, eu passo a costurar pensando nessa criança. É o meu jeito de colocar um pouco de afeto em cada ponto.
- [sobre-citacao] Uma boneca de pano não é só um brinquedo: é companhia, colo e lembrança de infância.
- [sobre-assinatura] Com carinho, a artesã da Rosa Bordô
- [sobre-materiais-titulo] (oculto ou eyebrow pequeno) Materiais que eu uso
- [material-1] Tecidos de algodão
- [material-2] Enchimento macio de fibra
- [material-3] Bordados feitos à mão
- [sobre-foto-alt] Mãos de mulher costurando um tecido, perto da janela.
- [sobre-foto-detalhe-alt] "" (decorativa: carretéis de linha / detalhe de bordado)

> Nome da artesã não informado: a assinatura usa "a artesã da Rosa Bordô". Para personalizar depois, trocar por "Com carinho, [Nome]" e o h2 por "Oi, eu sou a [Nome]" (ver Pendências).

### 2.7 Personalize (`#personalize`)

- [personalize-eyebrow] Do seu jeitinho
- [personalize-h2] Monte a boneca de *quem você ama*
- [personalize-lead] Escolha os detalhes que lembram a criança que vai ganhar. A gente conversa sobre cada um deles pelo WhatsApp antes de eu começar a costurar.
- [grupo-1-h3] Cor da pele
- [grupo-1-legendas] Porcelana · Areia · Mel · Canela · Cacau · Café
  (na ordem das 6 amostras do design: `#F3D6C1`, `#E8B896`, `#C98E63`, `#A86B42`, `#7A4A2A`, `#4E2E1A`)
- [grupo-2-h3] Cabelo
- [grupo-2-chips] Cacheado · Liso · Trancinhas · Coque
- [grupo-2-nota] Fios de lã em várias cores.
- [grupo-3-h3] Roupinha
- [grupo-3-chips] Vestido · Jardineira · Macacão · Conjunto
- [grupo-4-h3] Nome bordado
- [grupo-4-exemplo] Helena
- [grupo-4-nota] Para bebês, faço todos os detalhes bordados, sem botões nem acessórios soltos.
- [personalize-cta] Quero uma personalizada → WhatsApp (personalizada)
- [personalize-info] A partir de R$ 189 · 15 a 25 dias úteis de produção (FICTÍCIO)
- [personalize-foto-alt] Bonecas de pano com tons de pele e cabelos diferentes, lado a lado.

### 2.8 Como encomendar (`#como-encomendar`)

- [passos-eyebrow] Passo a passo
- [passos-h2] Como encomendar a *sua* boneca
- [passo-1-titulo] Escolha um modelo ou conte sua ideia
- [passo-1-texto] Pode ser um modelo da coleção ou só uma ideia. Me mande uma mensagem pelo WhatsApp.
- [passo-2-titulo] Combinamos os detalhes
- [passo-2-texto] Juntas, definimos pele, cabelo, roupinha, nome bordado, valor e a data em que você precisa.
- [passo-3-titulo] Sinal e mãos à obra
- [passo-3-texto] Com o sinal de 50%, eu começo a costurar. A produção leva de 15 a 25 dias úteis.
- [passo-4-titulo] Sua boneca a caminho
- [passo-4-texto] Você paga o restante, eu embalo com carinho e envio pelos Correios para todo o Brasil.
- [passos-cta] Começar minha encomenda → WhatsApp (encomenda)

> Prazo e sinal FICTÍCIOS (de `dados-negocio.md`): marcar com comentário HTML.

### 2.9 Depoimentos (`#depoimentos`)

> **DEPOIMENTOS DE EXEMPLO: substituir antes de publicar.** Exibir um selo visível "Exemplo" em cada card (ou uma linha sob o título: "Depoimentos de exemplo"). Avatar só com iniciais, sem foto.

- [depo-eyebrow] Carinho de quem recebeu
- [depo-h2] Bonecas que já ganharam *colo*
- [depo-selo] Exemplo
- [depo-1-texto] Encomendei para o primeiro aniversário da minha neta, com o nome dela bordado. Ela não larga a boneca, e eu me emocionei ao abrir a caixa.
- [depo-1-nome] Marta R. · [depo-1-iniciais] MR · [depo-1-cidade] Campinas – SP · [depo-1-modelo] Boneca personalizada
- [depo-2-texto] Pedi uma boneca com cabelo cacheado igual ao da minha filha. Ela se reconheceu na hora. Todo o processo pelo WhatsApp foi muito tranquilo.
- [depo-2-nome] Juliana S. · [depo-2-iniciais] JS · [depo-2-cidade] Belo Horizonte – MG · [depo-2-modelo] Modelo Lia
- [depo-3-texto] Dei de presente para a minha afilhada e a jardineira pink virou a roupa preferida dela. Dá para ver o cuidado em cada ponto.
- [depo-3-nome] Fernanda L. · [depo-3-iniciais] FL · [depo-3-cidade] Curitiba – PR · [depo-3-modelo] Modelo Matilde

> Observação: nenhum depoimento deve ser associado a bebê nem a berço.

### 2.10 Perguntas frequentes (`#perguntas`)

- [faq-eyebrow] Dúvidas
- [faq-h2] Perguntas *frequentes*
- [faq-apoio-titulo] Não achou sua dúvida?
- [faq-apoio-texto] Me chame no WhatsApp. Respondo de segunda a sexta, das 9h às 18h, e aos sábados, das 9h às 13h.
- [faq-cta] Perguntar no WhatsApp → `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20bonecas.`

**[faq-1-pergunta]** Quanto tempo leva para a minha boneca ficar pronta?
**[faq-1-resposta]** As bonecas personalizadas levam de 15 a 25 dias úteis de produção, mais o prazo dos Correios. Se você tem uma data especial, me conte logo no início da conversa. Às vezes tenho alguma boneca já pronta; nesse caso, eu aviso pelo WhatsApp e o envio fica mais rápido.

**[faq-2-pergunta]** A boneca pode ser dada para um bebê?
**[faq-2-resposta]** Para bebês, faço olhos e boca bordados, sem botões, contas ou peças soltas, com costuras reforçadas e sem fitas compridas. Mesmo assim, brinque junto e confira a boneca de vez em quando. E um cuidado importante: não deixe a boneca no berço enquanto o bebê dorme.

**[faq-3-pergunta]** Como lavar a boneca de pano?
**[faq-3-resposta]** Prefira limpar só a área suja com um pano úmido e sabão neutro, depois passe um pano com água limpa. Deixe secar deitada sobre uma toalha, à sombra. Evite encharcar, máquina de secar, calor e alvejante.

**[faq-4-pergunta]** Vocês enviam para a minha cidade?
**[faq-4-resposta]** Envio para todo o Brasil pelos Correios, por PAC ou SEDEX. O frete é calculado pelo seu CEP e eu te passo o valor junto com o orçamento.

**[faq-5-pergunta]** Quais são as formas de pagamento?
**[faq-5-resposta]** Pix ou cartão de crédito em até 3x sem juros. Nas encomendas personalizadas, você paga 50% de sinal na confirmação e os outros 50% antes do envio.

**[faq-6-pergunta]** Posso pedir uma boneca diferente dos modelos do site?
**[faq-6-resposta]** Pode, sim. Os modelos são só inspiração. Me mande a sua ideia, uma foto de referência ou as cores preferidas da criança, e eu te digo como fica e quanto custa.

**[faq-7-pergunta]** Dá para bordar o nome da criança?
**[faq-7-resposta]** Dá! O nome é bordado à mão na roupinha ou no corpo da boneca, na cor que você escolher. É o detalhe que mais emociona quem recebe.

> Prazos, envio e pagamento FICTÍCIOS (de `dados-negocio.md`).

### 2.11 CTA final + Instagram (`#encomendar`)

- [cta-final-h2] Vamos criar a *sua* boneca?
- [cta-final-lead] Me conte para quem é o presente e eu te ajudo a escolher cada detalhe. No Instagram, você acompanha as bonecas saindo do ateliê.
- [cta-final-primario] Encomendar pelo WhatsApp → WhatsApp (encomenda)
- [cta-final-secundario] Seguir @arosabordo → `https://www.instagram.com/arosabordo/` (nova aba)
- [instagram-faixa-aria-label] Ver mais no Instagram @arosabordo (abre em nova aba)
- [instagram-fotos-alt] "" (as 6 fotos ficam dentro de um único link com o rótulo acima; são decorativas)

### 2.12 Rodapé (`#contato`)

- [rodape-logo-alt] Rosa Bordô
- [rodape-assinatura] Bonecas de pano costuradas e bordadas à mão, sob encomenda, para virar memória de infância.
- [rodape-instagram] @arosabordo → Instagram (nova aba)
- [rodape-col2-titulo] Fale comigo
- [rodape-whatsapp-rotulo] WhatsApp: (11) 90000-0000 → `https://wa.me/5511900000000`
- [rodape-email-rotulo] E-mail: contato@rosabordo.com.br → `mailto:contato@rosabordo.com.br`
- [rodape-cidade] Ateliê em São Paulo – SP
- [rodape-horario] Seg a sex, 9h às 18h · Sáb, 9h às 13h
- [rodape-col3-titulo] Encomendas
- [rodape-envio] Envio para todo o Brasil pelos Correios (PAC ou SEDEX)
- [rodape-prazo] Personalizadas: 15 a 25 dias úteis de produção
- [rodape-pagamento] Pix ou cartão em até 3x sem juros
- [rodape-copyright] © 2026 Rosa Bordô · Feito à mão com carinho
- [rodape-creditos] Fotos ilustrativas: Pexels e Pixabay. Créditos em imagens.md.

> Todos os contatos, horário, envio, prazo e pagamento: FICTÍCIOS (comentário HTML em cada um). Instagram: real.

### 2.13 Botão flutuante do WhatsApp (mobile)

- [flutuante-texto] Encomendar
- [flutuante-aria-label] Encomendar pelo WhatsApp (abre em nova aba)
- Link: WhatsApp (encomenda)

---

## 3. SEO e compartilhamento

- [title] Rosa Bordô | Bonecas de pano feitas à mão sob encomenda (55 caracteres)
- [meta-description] Bonecas de pano artesanais e personalizadas, costuradas e bordadas à mão em São Paulo. Enviamos para todo o Brasil. Encomende a sua pelo WhatsApp. (146 caracteres; cidade FICTÍCIA)
- [og:title] Rosa Bordô | Bonecas de pano feitas à mão
- [og:description] Bonecas de pano costuradas e bordadas à mão, do jeitinho de quem vai ganhar. Escolha um modelo ou conte sua ideia e encomende pelo WhatsApp.
- [og:image-alt] Bonecas de pano coloridas sobre toalha bordada, com o logo da Rosa Bordô.
- [og:locale] pt_BR
- [og:site_name] Rosa Bordô
- JSON-LD: usar o bloco de `dados-negocio.md` sem alterar.

---

## 4. Microtextos

**Links de WhatsApp** (de `dados-negocio.md`, FICTÍCIOS)

| Uso | Mensagem decodificada | Link |
|---|---|---|
| Encomenda (cabeçalho, slide 1, passos, CTA final, flutuante) | Olá, Rosa Bordô! Vim pelo site e quero encomendar uma boneca. | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Vim%20pelo%20site%20e%20quero%20encomendar%20uma%20boneca.` |
| Personalizada (slide 2, Personalize) | Olá, Rosa Bordô! Quero uma boneca personalizada. | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Quero%20uma%20boneca%20personalizada.` |
| Modelo da coleção | Olá, Rosa Bordô! Vim pelo site e gostei do modelo [Nome]. Pode me contar como encomendar? | ver tabela da seção 2.5 |
| Dúvida (FAQ) | Olá, Rosa Bordô! Tenho uma dúvida sobre as bonecas. | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20bonecas.` |
| Rodapé (simples) | — | `https://wa.me/5511900000000` |

**Botões e rótulos**
- Todos os CTAs começam com verbo e dizem o destino: "Encomendar minha boneca", "Quero uma personalizada", "Ver os modelos", "Conhecer a artesã", "Ver como encomendar", "Começar minha encomenda", "Perguntar no WhatsApp", "Encomendar pelo WhatsApp", "Seguir @arosabordo".
- Ícones sem texto: "Abrir menu" / "Fechar menu", "Pausar apresentação" / "Retomar apresentação", "Slide anterior" / "Próximo slide".

**Formulário:** o site não tem formulário (encomendas pelo WhatsApp). Nada a escrever.

**Estados vazios / sem JS:** sem JS, só o slide 1 aparece; ele funciona sozinho (título, subtítulo e CTA). Nenhum texto extra necessário.

**Erro de imagem / noscript:** não necessário.

---

## 5. Pendências

**Nenhuma pergunta para o usuário agora.** Os dados fictícios foram usados como estão, por pedido do usuário. Itens a trocar **antes de publicar** (já listados em `dados-negocio.md` e em `entrevista.md`), mais os específicos da copy:

1. **Nome da artesã.** Pergunta: "Qual nome a artesã quer usar no site?" Provisório: [PENDENTE: nome da artesã] → hoje "a artesã da Rosa Bordô" (h2 do Sobre e assinatura).
2. **Modelos da coleção.** Pergunta: "Quais 6 bonecas reais devem aparecer, com nome, tamanho e preço?" Provisório: [PENDENTE: modelos reais] → Lia, Cecília, Matilde, Maria Flor, Aurora e Benedita (exemplos).
3. **Materiais.** Pergunta: "Os tecidos são de algodão e o enchimento é de fibra siliconizada? Alguma outra informação de material?" Provisório: [PENDENTE: confirmar materiais] → "Tecidos de algodão", "Enchimento macio de fibra", "Bordados feitos à mão".
4. **Cuidados para bebês.** Pergunta: "Nas bonecas para bebês, todos os detalhes são mesmo bordados, sem botões, contas ou acessórios soltos?" Provisório: [PENDENTE: confirmar prática] → FAQ 2 e nota do Personalize.
5. **Bonecas já prontas / Inmetro.** Pergunta: "Você costuma ter bonecas prontas para envio? Já confirmou com o Inmetro/OCP como divulgá-las?" Provisório: [PENDENTE: confirmar com Inmetro/OCP] → menção genérica só no FAQ 1, sem a expressão "pronta-entrega" e sem prazo.
6. **Depoimentos reais.** Pergunta: "Pode reunir 3 mensagens reais de clientes (com autorização), com nome e cidade?" Provisório: [PENDENTE: depoimentos reais] → 3 exemplos marcados "Exemplo".
7. **Contatos, horário, envio, prazo, pagamento e preços:** FICTÍCIOS, conforme `dados-negocio.md` ("Pontos a confirmar").

---

## Revisões

### Ciclo 1 (2026-11-17), conforme `avaliacao.md`, seção (a)

Preços e tamanhos foram mantidos. A tabela da coleção ganhou a coluna "Foto", com o arquivo de cada card.

1. **Card 1, Lia (`modelo-1`)**: de "vestidinho florido e tranças" para "Cachos ruivos de lã, laço no alto e vestidinho estampado". O `alt` foi reescrito.
2. **Card 2, Cecília (`modelo-3`)**: de "cabelo cacheado, laço e saia rodada" para "Maria-chiquinha, bochechas bordadas e vestido amarelo com rendinha". O `alt` foi reescrito.
3. **Card 3, Joaquim → Matilde (`modelo-4`)**: o nome passou a ser feminino. A descrição agora é "Jardineira pink, meias listradas e cabelo de lã vermelho". Também mudaram o `alt`, o link de WhatsApp do card (`...modelo%20Matilde...`) e a pendência 2.
4. **Card 4, Maria Flor (`modelo-5`)**: de "coroa de flores e vestido rosa" para "Boina e saia jeans, sapatinhos vermelhos e uma bonequinha de companhia". O `alt` foi reescrito. O nome ficou, porque é um nome próprio comum e não depende de flores na foto.
5. **Card 5, Aurora (`modelo-6`)**: "vestido pastel" virou "jardineira pastel", no texto e no `alt`.
6. **Card 6, Benedita (`modelo-2`)**: saiu "enxoval de roupinhas". O texto agora é "A maior da coleção: cabelo de lã turquesa, casaquinho rosa e vestido de bolinhas". O `alt` foi reescrito.
7. **Etiqueta "Bordado à mão"**: nova nota para não usá-la nos cards 3 e 4, porque as fotos mostram olhos aplicados e botões.
8. **Depoimento 3**: "afilhado / companheiro de todas as noites / Modelo Joaquim" mudou para "afilhada / a jardineira pink virou a roupa preferida dela / Modelo Matilde". A observação sobre o depoimento 3 foi trocada por uma regra geral: nenhum depoimento fala de bebê nem de berço.
9. **Depoimento 2**: o modelo passou de "Cecília" para "Lia", porque o texto fala em cabelo cacheado e agora a Cecília tem maria-chiquinha. O texto do depoimento não mudou.
10. **Hero**: os `alt` dos slides 2 e 4 agora descrevem as fotos realmente entregues. O do slide 4 não cita chupeta, e a etiqueta, o título e o subtítulo do slide 4 já não citavam bebê nem chupeta. A nota antiga sobre ajustar os `alt` foi substituída.
11. **Rodapé**: os créditos de fotos agora dizem "Pexels e Pixabay". Nenhuma foto do Unsplash foi usada, segundo `imagens.md`.
