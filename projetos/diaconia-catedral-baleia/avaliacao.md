# Avaliação de resultado: Corpo Diaconal, AD Catedral Baleia

- Data: 2026-11-15
- Iteração: **ciclo 1** (de no máximo 3)
- Entradas: `briefing.md` (com a atualização final: seguir com dados públicos marcados "a confirmar"), `dados-negocio.md`, `conteudo.md`, `design.md`, `imagens.md`, `site/` (index.html, styles.css, script.js, CHANGELOG.md), `capturas/` (celular, tablet, desktop), `inspecao-visual.md`, `avaliacao-tecnica.md` (REPROVADO)

## Decisão

**ITERAR (ciclo 1 → 2)**

Média **3,86** (abaixo de 4,0) e um critério abaixo de 3: **Experiência mobile = 2**. No celular e no tablet, o menu aberto mostra só "Quem somos" (5 dos 6 links e o botão do WhatsApp ficam escondidos, `capturas/celular-menu-aberto.png`). O público do briefing usa muito o celular, então o defeito pesa no resultado. O restante está muito perto de ser aprovado: todas as seções do briefing estão presentes, a copy segue o `conteudo.md` à risca, o visual é sóbrio e atual, e os dados "a confirmar" estão bem sinalizados.

## Objetivos do briefing (verificação)

| Objetivo | Situação |
|---|---|
| 12 seções pedidas (cabeçalho, hero, quem somos, base bíblica, o que fazemos, liderança, escala, servir, ajuda, FAQ, localização com mapa, rodapé com redes) | Todas presentes, na ordem do design |
| CTA principal via WhatsApp ("Fale com a diaconia") | Presente no cabeçalho, no hero, na faixa, na localização e no CTA final. Número numa constante única, com selo |
| CTA secundário (horários e escala) | "Ver horários e agenda" no hero e na faixa |
| Base bíblica (Atos 6; 1 Tm 3.8-13) | Presente, com citação em destaque e 3 cards (ARC) |
| Pedir ajuda (oração, visita, apoio social) | Formulário que monta a mensagem do WhatsApp, sem guardar dados |
| Mapa interativo (coordenadas -15.813602, -47.913748) | Presente e funcionando (`desktop-secao-localizacao.png`) |
| Dados públicos marcados "a confirmar" | Selo visível e consistente em horários, WhatsApp, telefone, e-mail, CEP, Instagram, pastor, áreas, passos e liderança |
| Não inventar nomes, sem tom político, sem confundir com a Catedral Metropolitana | Cumprido. Liderança usa placeholders com a nota "Nomes e fotos serão publicados com autorização da liderança." |
| Mobile-first e acessível | Base sólida (contraste AA, foco, movimento reduzido), mas o menu mobile está quebrado (T1) |

## Percurso por seção (resumo)

- **Cabeçalho**: no desktop, a marca, os 6 links e o CTA cabem bem (`desktop-dobra.png`). No celular e no tablet, o painel do menu fica preso à altura do cabeçalho (T1, bloqueante).
- **Hero**: a mensagem fica clara em 5 segundos ("Servir com alegria, acolher com amor"), com dois CTAs bem hierarquizados e Marcos 10.45. A foto em arco no desktop é elegante. No celular, a dobra mostra título, subtítulo e os 2 CTAs.
- **Faixa de informações**: 3 cards legíveis, com selo "A CONFIRMAR" discreto e bem integrado.
- **Quem somos / Base bíblica / O que fazemos**: fiéis ao conteúdo. A foto real do templo reforça a identidade. Os 7 cards de área mais o card-CTA marinho fecham bem a grade.
- **Liderança**: os placeholders "[Nome do ...]" aparecem com avatar genérico, selo e nota de autorização. É uma pendência do usuário e está bem apresentada, então não reprova.
- **Agenda**: legível no desktop. No celular, a tabela quebra o nome palavra por palavra ("Culto / da / manhã") e o dia ocupa 3 ou 4 linhas (`celular-agenda-tabela.png`, T2).
- **Servir / Ajuda / FAQ**: estão bons. O formulário é claro no celular, com cards de rádio grandes e rótulos "(opcional)" (`celular-secao-ajuda.png`).
- **Localização**: o mapa, o endereço e os botões funcionam. O e-mail quebra em "...com." / "br" (T6).
- **CTA final e rodapé**: estão coerentes. Os créditos já seguem a seção 3 do `imagens.md` (Josue Marinho, CC BY 3.0).

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | **4** | As 12 seções e todos os objetivos estão presentes. Perde um ponto porque a navegação por âncoras, pedida no item 1 do briefing, não funciona no celular nem no tablet. |
| 2 | Hierarquia e clareza | **4** | Hero exemplar: o visitante entende o que é o site e o que fazer em 5 segundos, com a ordem de CTAs certa. Perde um ponto pela navegação mobile inutilizada e pela agenda difícil de ler no celular. |
| 3 | Estética moderna | **5** | Marinho, dourado e creme, Lora com Source Sans 3, bastante respiro e alternância de fundos. As ondas fazem referência à baleia sem cair no clichê. O resultado é sóbrio e atual, como pede o briefing. |
| 4 | Coerência com o design | **4** | Tokens, tipografia, estrutura e componentes (selo 4.8, cards, painel do formulário) seguem o `design.md`. As 8 divergências estão justificadas no CHANGELOG. Perde um ponto porque o cabeçalho translúcido quebra o comportamento previsto do menu mobile. |
| 5 | Qualidade do texto | **4** | O texto do site bate com o `conteudo.md` (comparação automática: só os créditos da foto divergem, e isso está justificado no CHANGELOG). Não há `[PENDENTE]` nem Lorem, e o tom é reverente e acolhedor. Perde um ponto porque o `conteudo.md` ficou desatualizado: o crédito ainda cita a Agência Brasília e a tabela de alts não descreve as fotos usadas. |
| 6 | Imagens e assets | **4** | Proporções corretas, `<picture>` WebP, `width/height` certos, foto real do templo e créditos de licença no lugar. Perde um ponto porque os assets estão fora de `site/` (T3), o `og:image` é relativo (T4) e a foto do templo é anterior à restauração de 2015 (pendência). |
| 7 | Experiência mobile | **2** | O menu mostra 1 de 6 links e esconde o botão do WhatsApp (bloqueante). A tabela da agenda quebra palavra por palavra e o e-mail quebra em "br". O resto do celular (hero, cards, formulário, mapa) está bom, mas o defeito de navegação impede nota 3. |

**Média: 27 / 7 = 3,86** → reprovado pelo critério (exige média ≥ 4,0 e nenhum critério abaixo de 3).

## Correções obrigatórias

### A. TEXTO (para o redator, rodar antes do desenvolvedor)

1. **Crédito da foto do templo em `conteudo.md`**: trocar os dois trechos que citam "Gabriel Jabur/Agência Brasília (CC BY 2.0)" pelo texto da seção 3 do `imagens.md`:
   - [figcaption] → "Templo da AD Catedral Baleia, SGAS 910, Asa Sul. Foto: Josue Marinho / Wikimedia Commons, CC BY 3.0 (recortada)."
   - [creditos] do rodapé → "Foto do templo: Josue Marinho, via Wikimedia Commons, CC BY 3.0 (recortada). Demais fotos: Unsplash (G + L) e Pexels (cottonbro studio, Tima Miroshnichenko)."
   - Remover a linha [figcaption-alternativa] e a linha `quem-somos-acolhimento.jpg` da tabela de alts (esse plano B não foi usado).
   - Registrar a mudança em "Revisões". O site já usa esse texto, então o desenvolvedor não precisa mudar nada aqui.
2. **Tabela de textos alternativos (`conteudo.md` seção 3)**: alinhar ao que as fotos de fato mostram (alts do `imagens.md`). Hoje o alt do hero diz "Voluntários recebem pessoas na entrada", mas a foto mostra uma cesta de ofertas entre os bancos. Sugestão para o hero: evitar afirmar que a pessoa da foto de banco é diácono, por exemplo "Cesta de ofertas passa entre os bancos durante o culto (foto ilustrativa)". Se o redator mudar algum alt, o desenvolvedor aplica a mudança no `index.html`.
3. **(opcional, se o redator quiser)**: microtexto para a agenda empilhada no celular. Não é necessário, porque os textos atuais servem.

### B. CÓDIGO (para o desenvolvedor, em ordem de prioridade)

1. **[Bloqueante, T1] Menu mobile**: tirar o `backdrop-filter` do ancestral do `#menu`, passando o desfoque para `.cabecalho::before` (opção A do relatório técnico, com opacidade de .97, o que também resolve T13). Resultado esperado: em 360px e 768px, o painel aberto ocupa a altura `100vh - header` e mostra os 6 links e o botão "Fale com a diaconia" sem rolagem interna.
2. **[T2] Agenda no celular**: abaixo de 600px, empilhar cada linha (nome em negrito na linha 1, dia embaixo, horário à direita), com `role="table/row/rowheader/cell"`. Resultado esperado: nenhum nome de culto quebrado palavra por palavra em 360px.
3. **[T3] Assets dentro de `site/`**: copiar `assets/` para `site/assets/` e trocar `../assets/` por `assets/` no `index.html`. Resultado esperado: a pasta `site/` funciona sozinha como raiz publicada.
4. **[T4] SEO de compartilhamento**: incluir `<link rel="canonical">`, `og:url` e `og:image` absoluto com um placeholder de domínio único e fácil de achar (ex.: `https://DOMINIO-A-DEFINIR/`), documentado no CHANGELOG como pendência de publicação.
5. **[T6] E-mail no celular**: usar `overflow-wrap: break-word` e `<wbr>` depois do "@" (localização e rodapé). Resultado esperado: a quebra cai em "secretaria@" / "catedralbaleia.com.br", nunca em "br".
6. **[T8 + T9] Acessibilidade do menu e da marca**: `aria-label="Corpo Diaconal AD Catedral Baleia, voltar ao início"` nos dois links da marca, e `inert` em `main` e `.rodape` com o menu aberto.
7. **[T7] Alvos de toque**: `min-width: 44px` nos links do rodapé.

## Melhorias recomendadas (opcionais)

- **T11**: no JSON-LD, acrescentar `url`/`image` quando houver domínio e trocar `openingHoursSpecification` (horário de funcionamento) por evento ou retirar. Antes de publicar, remover os campos não confirmados.
- **T12**: `srcset` com versões de 640px das fotos (a do templo pesa 147 KB para cerca de 320px exibidos).
- **T10**: navegação visível sem JavaScript abaixo de 1100px, ou registrar como limitação conhecida.
- **Documentação**: o `design.md` ainda cita o crédito da Agência Brasília. Vale uma nota de que a seção 3 do `imagens.md` prevalece.
- **Hero no desktop**: as linhas de onda passam por trás da citação de Marcos 10.45. Está legível, mas reduzir a opacidade das ondas nessa área deixaria a leitura mais limpa.

## Pendências para o usuário (não reprovam o site)

1. **WhatsApp da secretaria**: confirmar se é (61) 9905-5252 ou (61) 99905-5252 (é o CTA principal).
2. **Liderança**: nomes, funções e fotos autorizadas da coordenação. Sem autorização, a seção pode ser retirada ou trocada por uma frase única.
3. **Pastor presidente**: autorizar a menção ao Pr. João Adair Ferreira.
4. **Dados a confirmar**: CEP, telefone fixo, e-mail, Instagram, horários dos cultos, culto de ensino, Santa Ceia, áreas de atuação e passos de ingresso.
5. **Fotos reais**: diaconia em serviço (hero, servir, ajuda) e uma foto atual do templo (as atuais são de 2011-2012, antes da restauração de 2015).
6. **Citações bíblicas**: conferir a redação ARC (Marcos 10.45, Atos 6.3, 1 Pedro 4.10, Gálatas 6.2).
7. **Domínio de publicação**: necessário para `og:url`, `canonical`, `og:image` e o `url` do JSON-LD.

---

# Ciclo 2

- Data: 2026-11-15
- Iteração: **ciclo 2** (de no máximo 3)
- Entradas: `briefing.md`, `conteudo.md` (seção "Revisões > Ciclo 2"), `design.md`, `site/` (CHANGELOG v2, `site/assets/` autocontido), `capturas/ciclo2-*` (celular, tablet, desktop), `inspecao-visual.md` (Ciclo 2: 0 bloqueantes, Lighthouse no celular 91/100/100/100) e `avaliacao-tecnica.md` (Ciclo 2: APROVADO COM RESSALVAS, 0 bloqueantes)

## Decisão (ciclo 2)

**APROVADO**

Média **4,71**, nenhum critério abaixo de 4. Todas as correções obrigatórias do ciclo 1 foram atendidas:

| Correção do ciclo 1 | Situação | Evidência |
|---|---|---|
| A1 Crédito da foto do templo no `conteudo.md` | feito | `conteudo.md` "Revisões > Ciclo 2", itens 1 e 2; não há mais citação da Agência Brasília |
| A2 Tabela de alts alinhada às fotos | feito | `conteudo.md:253-256` é igual aos `alt` de `index.html:194, 241, 458, 519` |
| B1 Menu mobile (bloqueante) | feito | `ciclo2-celular-menu-aberto.png`: os 6 links e o botão "Fale com a diaconia" aparecem sem rolagem; o mesmo vale para o tablet |
| B2 Agenda no celular | feito | `ciclo2-celular-agenda-tabela.png`: cada nome de culto ocupa uma linha, com o dia embaixo e o horário à direita |
| B3 `site/` autocontido | feito | não há mais `../assets`; 21 referências, todas existentes em `site/assets/` (relatório técnico) |
| B4 canonical, og:url e og:image absoluto | feito, com domínio provisório | `https://SEU-DOMINIO/` com comentário `[PLACEHOLDER]` em `index.html:10` (pendência de publicação) |
| B5 Quebra do e-mail | feito | `ciclo2-celular-secao-localizacao.png`: "secretaria@" / "catedralbaleia.com.br" |
| B6 Acessibilidade da marca e `inert` | feito | relatório técnico, T8 e T9 resolvidos |
| B7 Alvos de toque | feito em parte | só resta "CC BY 3.0" com 57x39 (passa no WCAG 2.5.8, menor) |

## Percurso por seção (ciclo 2, só o que mudou)

- **Cabeçalho e menu**: no celular, o painel aberto ocupa a tela toda, com links grandes em Lora, divisores dourados e o CTA marinho em largura total. A navegação por âncoras, pedida no item 1 do briefing, agora funciona em todas as larguras. No desktop o cabeçalho não mudou (`ciclo2-desktop-dobra.png`).
- **Hero**: continua com a mesma clareza. Na dobra do celular cabem o título, o subtítulo, os 2 CTAs e Marcos 10.45 (`ciclo2-celular-dobra.png`). O novo alt do hero não chama mais de diácono a pessoa da foto de banco.
- **Liderança**: os placeholders "[Nome do ...]" continuam, com avatar genérico e o selo "A CONFIRMAR" (`ciclo2-celular-secao-lideranca.png`). É pendência do usuário e está bem sinalizada.
- **Agenda**: legível no celular, com uma hierarquia clara (nome em negrito, dia em texto suave, horário em Lora).
- **Localização e contato**: o e-mail quebra no lugar certo e os selos "A CONFIRMAR" ficam alinhados aos dados.
- **Rodapé**: links com 44x44. Só o link "CC BY 3.0" fica abaixo da meta de 44px.

## Notas da rubrica (ciclo 2)

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | **5** | As 12 seções e todos os objetivos estão presentes e funcionando: CTA principal via WhatsApp, CTA secundário da agenda, base bíblica, formulário de ajuda e mapa interativo. A navegação por âncoras funciona no celular e no tablet. Os placeholders da liderança seguem a restrição do briefing de não inventar nomes. |
| 2 | Hierarquia e clareza | **5** | O visitante entende em 5 segundos o que é o site e o que fazer, nas 3 larguras. O menu mobile e a agenda empilhada deixaram de atrapalhar a leitura. |
| 3 | Estética moderna | **5** | O visual não mudou e continua sóbrio e atual: marinho, dourado e creme, Lora com Source Sans 3, bastante respiro e ondas discretas. O novo painel do menu segue a mesma linguagem. |
| 4 | Coerência com o design | **5** | Tokens, tipografia e componentes seguem o `design.md`. As divergências da v1 e a mudança do desfoque para `.cabecalho::before` estão justificadas no CHANGELOG e preservam o comportamento previsto do cabeçalho. |
| 5 | Qualidade do texto | **4** | O `conteudo.md` foi atualizado (créditos, alts) e bate com o site. Não há `[PENDENTE]` nem Lorem visíveis, e o tom é reverente e acolhedor. Perde um ponto porque os 3 nomes "[Nome do ...]" da liderança continuam visíveis (pendência do usuário, não defeito do time). |
| 6 | Imagens e assets | **4** | Proporções corretas, `srcset` de 640px, `<picture>` WebP, `site/assets/` autocontido, 0 imagens quebradas e créditos de licença corretos. Perde um ponto pelas pendências visíveis: avatares genéricos, fotos de banco ilustrativas e a foto do templo anterior à restauração de 2015. |
| 7 | Experiência mobile | **5** | Menu completo, agenda legível, e-mail sem quebra ruim, nenhuma rolagem horizontal e Lighthouse no celular com 91/100/100/100. O alvo de 39px do "CC BY 3.0" é residual e passa no WCAG. |

**Média: 33 / 7 = 4,71**, aprovado (média ≥ 4,0 e nenhum critério abaixo de 3).

## Correções obrigatórias (ciclo 2)

Nenhuma.

## Melhorias recomendadas (opcionais, não bloqueiam)

1. **T7r**: no link "CC BY 3.0" do rodapé, chegar a 44px de altura (ex.: `padding-block: .75em` em `.rodape__creditos a`).
2. **T14**: LCP de 3,3 s no celular. Hospedar as fontes em `site/assets/fonts/` ou carregar o CSS do Google Fonts sem bloquear, e medir de novo.
3. **T10**: navegação principal visível sem JavaScript abaixo de 1100px (hoje aceita como limitação, porque o rodapé tem os links).
4. **Hero no desktop**: diminuir a opacidade das ondas atrás da citação de Marcos 10.45 (sugestão do ciclo 1, ainda opcional).
5. **Liderança sem autorização**: se a igreja não for divulgar nomes, o redator pode trocar os 3 cards por uma frase única, como "A coordenação da diaconia atua junto ao ministério pastoral. Fale com a secretaria para conhecê-la.", e o desenvolvedor remove os avatares.

## Pendências consolidadas antes de publicar (usuário)

1. **WhatsApp da secretaria** (CTA principal): confirmar se é (61) 9905-5252 ou (61) 99905-5252. Trocar em `script.js` (`WHATSAPP`) e localizar/substituir `556199055252` no `index.html`.
2. **Liderança**: nomes, funções e fotos autorizadas da coordenação (os 3 placeholders "[Nome do ...]"), ou a decisão de resumir a seção (melhoria 5).
3. **Pastor presidente**: autorizar a menção ao Pr. João Adair Ferreira.
4. **Dados "a confirmar"**: CEP 70390-100, telefone (61) 3242-7119, e-mail da secretaria, Instagram, horários de domingo, culto de ensino, Santa Ceia, coordenadas do mapa, áreas de atuação e passos de ingresso. Ao confirmar cada dado, remover o `<span class="selo-confirmar">` correspondente.
5. **JSON-LD (T11r)**: antes de publicar, retirar os campos não confirmados (`telephone`, `email`, `sameAs` não confirmados) e trocar `openingHoursSpecification` por `event` ou removê-lo.
6. **Domínio (T4r)**: trocar `https://SEU-DOMINIO/` pelo domínio real em canonical, og:url, og:image e no JSON-LD (`url`, `image`, `logo`).
7. **Fotos reais**: diaconia em serviço (hero, servir, ajuda) e uma foto atual do templo (as atuais são de antes da restauração de 2015). Gerar também as versões `-640` ou ajustar o `srcset`.
8. **Citações bíblicas**: conferir a redação ARC (Marcos 10.45, Atos 6.3, 1 Pedro 4.10, Gálatas 6.2).
9. **Publicação**: publicar só a pasta `site/`, que agora é autocontida.
