# Avaliação de resultado: Futebol Kids (ciclo 1)

- **Data:** 2026-11-17
- **Entradas:** `briefing.md`, `design.md`, `conteudo.md`, `site/` (index.html, styles.css, script.js, CHANGELOG.md), `capturas/` (celular 360, tablet 768, desktop 1440), `inspecao-visual.md`, `avaliacao-tecnica.md`
- **Observação:** os dados fictícios (contatos, preços, professores, depoimentos, coordenadas) foram autorizados pelo usuário e não contam como defeito.

## Decisão

**APROVADO** (ciclo 1)

Média **4,43**, nenhum critério abaixo de 3. Não há correção obrigatória. Há melhorias recomendadas: duas de composição que dão para ver (buracos na grade bento e cartão cobrindo o mapa). Elas podem ser feitas num ciclo opcional, sem bloquear a entrega.

## Objetivos mensuráveis do briefing

| Objetivo | Situação |
|---|---|
| CTA principal "aula experimental grátis" via WhatsApp, visível em qualquer ponto | Atendido: botão no cabeçalho, no hero, nos cards de turma, nos planos, no FAQ, no CTA final e no botão flutuante (celular) |
| CTA secundário "ver turmas e horários" | Atendido: "Ver turmas" no hero e seletor de idade que leva ao card da turma |
| Faixa etária 4 a 12 anos clara | Atendido: selo do hero, lead e placar com as 4 faixas |
| 14 seções pedidas | Atendido: as 14 estão presentes, na ordem do design |
| Segurança, diversão, desenvolvimento e valores | Atendido: benefícios, metodologia e bloco "Segurança" em destaque |
| Sem promessa de "virar profissional" e sem jargão | Atendido |
| Aviso "Site de demonstração — dados fictícios" no rodapé | Atendido, sem ficar coberto pelo botão flutuante |
| Mapa interativo com coordenadas fictícias | Atendido (o mapa carrega; ver M2 sobre a sobreposição) |
| WCAG AA, responsivo, sem frameworks | Atendido (Lighthouse: Acessibilidade 100, sem rolagem horizontal) |

## Percurso por seção

- **Cabeçalho:** funciona. O hambúrguer vai até 1099 px (divergência justificada no CHANGELOG).
- **Hero:** foto em tela cheia com arco e placar de idade. É o gesto forte do design e foi bem executado. No desktop, o confete passa sobre o botão amarelo (V4).
- **Benefícios:** faixa de ícones, com ritmo diferente de cards. Funciona.
- **Turmas:** cards "figurinha" com nome, idade e Sub-X em texto, nas cores certas. Funciona.
- **Metodologia:** linha do tempo sobre o campo escuro. O passo 3 fica cerca de 15 px desalinhado no desktop (V6).
- **Diferenciais:** a grade bento tem buracos no tablet e no desktop (V2). É o defeito visual mais aparente da página.
- **Horários:** tabela real que vira cards no celular. Funciona.
- **Professores, planos e depoimentos:** seguem o design. No plano "1x por semana", a lista fica esticada (V7).
- **FAQ:** acordeão nativo. Funciona.
- **Contato:** o cartão cobre a atribuição do Google e, no celular, o seletor de camada (V1/T1). O e-mail e o telefone quebram mal a 360 px (V8).
- **CTA final:** forte e claro. O confete e a linha do meio-campo passam sobre o texto (V3).
- **Rodapé:** completo, com o aviso de demonstração.

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | **5** | Estão presentes as 14 seções, todos os CTAs pedidos, o aviso de demonstração, o mapa, o desconto para irmãos e o FAQ com as 6 perguntas exigidas. Não há formulário com dados da criança. |
| 2 | Hierarquia e clareza | **5** | Em 5 segundos o visitante vê o selo "4 a 12 anos", o H1 "Futebol para crescer brincando", o lead que cita professores formados e aula grátis, e o botão amarelo dominante. O placar de idade resolve a próxima dúvida ("tem turma para meu filho?"). |
| 3 | Estética moderna | **4** | O hero em foto cheia com arco e placar é diferente dos 2 projetos anteriores (split em `sergio-ribeiro`, fundo animado em `reef-stack`), com justificativa no `design.md` §3.0. O ritmo varia entre as seções: faixa de ícones, figurinhas, linha do tempo, bento, tabela, carrossel e acordeão. A paleta e a tipografia transmitem um ar infantil sem ser bobo. Perde 1 ponto pelos buracos do bento e pelos confetes sobre o texto do hero e do CTA final. |
| 4 | Coerência com o design | **4** | Os tokens batem com o design (só `#EAD98A` está fora deles, em borda decorativa). A estrutura e os componentes seguem a especificação, e as divergências estão justificadas no CHANGELOG. Perde 1 ponto porque o bento não reproduz a grade "1 foto 2x2 + blocos" sem vazios, e o passo 3 da metodologia está desalinhado. |
| 5 | Qualidade do texto | **5** | A copy é a mesma de `conteudo.md`. O tom é alegre e confiável, com verbos sem exagero ("ajuda", "estimula"), e não há placeholders. A única divergência (créditos "Fotos: Unsplash") está justificada no CHANGELOG e corrige um erro factual. Falta só atualizar `conteudo.md`. |
| 6 | Imagens e assets | **4** | As fotos estão bem escolhidas: crianças de costas ou de longe, proporções corretas, nada distorcido ou quebrado. Os SVGs são coerentes. Perde 1 ponto porque o cartão de contato cobre a atribuição do Google Maps e a foto do bento fica ao lado de células vazias. |
| 7 | Experiência mobile | **4** | A hierarquia se mantém: hero centralizado, CTAs empilhados com largura total, placar 2x2, horários em cards, menu acessível e botão flutuante que não cobre o rodapé. Perde 1 ponto pela quebra do e-mail e do telefone no meio (V8) e pelo cartão que cobre os controles do mapa. |

**Média: 31 / 7 = 4,43.** Nenhum critério abaixo de 3.

Limitação: a captura `celular-inteira.jpg` repete o hero e as primeiras seções depois do FAQ. A avaliação técnica confirma que o HTML tem um único H1 e nenhum ID duplicado. Por isso a repetição foi tratada como artefato da costura da captura de página inteira, e não como defeito do site.

## Correções obrigatórias

Nenhuma.

## Melhorias recomendadas (opcionais, por prioridade)

### Código (desenvolvedor-frontend)

1. **Bento de diferenciais sem buracos (V2).** Em `styles.css` (~linhas 580-594), a ordem do DOM (CREF, depois Segurança com 2 colunas) deixa células vazias. Resultado esperado: no desktop, a foto ocupa as colunas 1-2 por 3 linhas e os 5 blocos preenchem exatamente as 6 células à direita, sem nenhuma linha extra. No tablet, as 2 colunas também ficam sem vazios. Caminhos possíveis: `grid-auto-flow: dense`, colocar "Segurança" como primeiro bloco no DOM ou posicionar cada bloco explicitamente.
2. **O cartão de contato não deve cobrir o mapa (V1/T1).** Resultado esperado: a atribuição do Google ("Termos", "Informar erro") e o seletor de camada ficam visíveis nas 3 larguras. No desktop, mapa em `1 / span 7` e cartão em `8 / span 5`. No celular, cartão abaixo do mapa, sem margem negativa (ou com uma sobreposição que não chegue aos 40 px inferiores do iframe).
3. **Confetes fora do texto (V3, V4).** Resultado esperado: nenhum confete sobre o botão "Agendar aula grátis" do hero nem sobre o título do CTA final. A linha e o círculo do meio-campo do CTA também não devem cruzar o texto de apoio (reduzir a opacidade para cerca de .06 ou reposicionar).
4. **Quebra de contatos no celular (V8/T5).** Resultado esperado: os telefones não quebram no hífen (usar `white-space: nowrap` no número) e o e-mail quebra só antes do `@` (`<wbr>`), com `overflow-wrap: break-word` no lugar de `anywhere`.
5. **Alinhamento do passo 3 da metodologia (V6).** Resultado esperado: o ícone e o H3 dos 3 passos ficam na mesma linha de base no desktop.
6. **Lista do plano "1x por semana" (V7).** Resultado esperado: o mesmo espaçamento entre itens nos 3 planos, com o botão alinhado à base por `margin-top: auto`, sem esticar a lista.
7. **Desempenho (T3, T4).** Tirar o `opacity: 0` inicial do H1 do hero, remover o peso Baloo 2 600 da URL das fontes e carregar as fontes sem bloquear a renderização. Meta: LCP no celular ≤ 2,5 s.
8. **Contraste do título do hero no desktop (V5/T8).** Reforçar a parada intermediária do overlay para chegar à meta de 6:1 do design (hoje 4,47:1, que já passa no AA para texto grande).

### Texto (redator)

1. Atualizar `conteudo.md` linha 394 para "Fotos: Unsplash. Ver créditos", alinhando ao site e a `imagens.md` (divergência 5 do CHANGELOG).

## Pendências para o usuário

- Trocar todos os dados fictícios antes de publicar: endereço, WhatsApp, telefone, e-mail, Instagram, horários, preços, nomes e CREF dos professores, depoimentos e coordenadas do mapa (hoje apontam para Brasília). Tirar também as etiquetas de "demonstração".
- Substituir as fotos de crianças, equipe e depoimentos por fotos próprias, com autorização dos responsáveis. Refazer o `og-image.jpg`.
- Definir o domínio, para usar URL absoluta em `og:image` e no JSON-LD e para incluir `canonical` e `og:url` (T2, T6).
