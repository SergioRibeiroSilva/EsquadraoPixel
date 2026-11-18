# Avaliação de resultado: Rosa Bordô

- Data: 2026-11-17 · Iteração 2 (reavaliação após as correções do ciclo 1)
- Entradas: `briefing.md`, `design.md`, `conteudo.md` (Revisões > Ciclo 1), `site/` (index.html, styles.css, script.js, CHANGELOG.md, iteração 2), `capturas/` (celular, tablet, desktop), `inspecao-visual.md` (iteração 2), `avaliacao-tecnica.md` (iteração 2: APROVADO COM RESSALVAS)

## Decisão: APROVADO (ciclo 2 de 3)

A média ficou em **4,43** e nenhum critério está abaixo de 3. O requisito central do usuário continua cumprido e agora funciona bem também no celular. O hero é um carrossel grande, em tela larga, com **4 slides**, setas, indicadores, autoplay com pausa, teclado, swipe e respeito a `prefers-reduced-motion`. No celular, o assunto de cada foto fica acima do texto. Os três motivos que impediram a aprovação no ciclo 1 foram resolvidos:
- o menu do celular e do tablet abre em tela cheia;
- a etiqueta do hero tem contraste de 6,7:1;
- os 6 cards da vitrine descrevem as fotos que mostram.

O que sobrou são ajustes menores (T11 a T14, V6), listados como melhorias opcionais.

## Objetivos do briefing (verificação)

| Objetivo | Situação |
|---|---|
| Hero com grande carrossel, ao menos 3 imagens, setas, bolinhas, autoplay com pausa, reduced-motion, teclado | **Atendido**: 4 slides, padrão APG em `div` (T2 resolvido), recorte do celular corrigido (`celular-slide-1..4.png`) |
| Cabeçalho com logo, âncoras e botão "Encomendar" | **Atendido**: no celular e no tablet, o menu abre em tela cheia com os 6 links e "Encomendar" (`celular-menu-aberto.png`, `tablet-menu-aberto.png`) |
| Vitrine com 6 modelos (nome, descrição, tamanho, "a partir de R$") | **Atendido**: texto e foto batem nos 6 cards (`desktop-colecao.jpg`) |
| Sobre a artesã, processo e materiais | Atendido (o nome da artesã está pendente e anotado em comentário no HTML) |
| Personalizadas (pele, cabelo, roupinha, nome bordado) | Atendido |
| Como encomendar (passos) | Atendido |
| 3 depoimentos de exemplo | Atendido, com o selo "Exemplo". Depoimentos 2 e 3 coerentes com os modelos Lia e Matilde |
| FAQ (prazo, bebês, lavagem, envio, pagamento) | Atendido |
| CTA final + Instagram | Atendido |
| Rodapé com contato e redes | Atendido, com os dados fictícios marcados |
| CTA principal via WhatsApp | Atendido em todo o site |
| Paleta rosa + bordô, serifada + sans, pesponto | Atendido |

## Percurso por seção (ordem do HTML)

- **Faixa do topo**: cabe em 1 linha a 360 px, com a versão curta (`celular-dobra.png`).
- **Cabeçalho**: o desktop continua limpo. No celular, o painel ocupa a tela toda, os links são grandes e separados por pesponto, e o botão "Encomendar" fica em destaque. Esc e o foco funcionam. Problema menor: depois de voltar ao topo, "Coleção" continua sublinhado e com `aria-current` (T14/V11, visível em `desktop-slide-1.png`).
- **Hero carrossel**: é o ponto alto da página.
  - No desktop, o slide 1 em tela cheia e o slide 2 em moldura de pesponto sobre bordô dão variedade dentro do carrossel. Com a barra de controles à esquerda, a moldura fica livre. Essa divergência do design está justificada no CHANGELOG.
  - No celular, as capturas mostram o rosto da boneca (slides 1, 2 e 4) e as mãos com a linha (slide 3) acima da etiqueta. A etiqueta tem fundo próprio legível.
  - Pendências: a chupeta ainda aparece no slide 4 do desktop (V6, opcional). O CLS de 0,083 vem da troca de fonte no título (T11) e fica dentro do limite "bom".
- **Diferenciais**: ok.
- **Coleção**: está resolvida. Lia (cachos ruivos e vestido estampado), Cecília (maria-chiquinha e vestido amarelo), Matilde (jardineira pink e meias listradas), Maria Flor (boina jeans e bonequinha), Aurora (coelhinha de jardineira pastel) e Benedita (cabelo turquesa e casaquinho rosa) batem com as fotos. A etiqueta "Bordado à mão" saiu dos cards 3 e 4, como pede o `conteudo.md`.
- **Sobre**: o ritmo e a voz em primeira pessoa estão bons. No celular e no tablet, o corte creme/branco do fundo passa no meio do texto (T13/V10). É cosmético e não afeta a legibilidade.
- **Personalize, Como encomendar, Depoimentos, FAQ, CTA final e Rodapé**: sem mudança desde o ciclo 1, e continuam ok.

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | 5 | As 10 seções estão presentes e funcionando em todas as larguras. O carrossel obrigatório tem 4 slides e todos os comportamentos pedidos. A vitrine agora descreve o que mostra. O CTA via WhatsApp aparece em todo o site |
| 2 | Hierarquia e clareza | 5 | Em 5 segundos fica claro o que é ("Bonecas de pano feitas ponto a ponto") e o que fazer ("Encomendar minha boneca"), também no celular, onde o título já não cobre o assunto da foto. As seções seguem a progressão ver, conhecer, personalizar e encomendar |
| 3 | Estética moderna | 4 | O hero full-bleed com crossfade, os slides em moldura de pesponto, a seção Personalize em bordô texturizado e o caminho dos passos fogem de "título + 3 cards". **Variedade:** o hero não é o "texto à esquerda + imagem à direita" fixo, e sim um carrossel em tela cheia com texto sobreposto; a moldura dos slides 2 e 4 está justificada no `design.md` (3.2.5). O teto de 3 não se aplica. Perde um ponto pelo corte seco do fundo do Sobre no celular, que quebra o ritmo da seção, e pela marcação do link ativo que fica presa em "Coleção" |
| 4 | Coerência com o design | 4 | Tokens, fontes, paleta e estrutura seguem o `design.md`. Os desvios do ciclo 1 (véu e etiqueta, `--foco-m`, `ul`) foram corrigidos. A nova divergência, controles à esquerda, está justificada no CHANGELOG. Sobra o fundo em degradê do Sobre aplicado também no layout empilhado (T13), que contraria a intenção do design de colunas |
| 5 | Qualidade do texto | 5 | O texto do site bate com o `conteudo.md` revisado: as 6 descrições, os `alt`, o link de WhatsApp de Matilde e os depoimentos 2 e 3 foram conferidos no HTML. Não há placeholder visível: os 4 "PENDENTE" estão só em comentários. O tom é afetivo e coerente com o briefing |
| 6 | Imagens e assets | 4 | As fotos são de boa definição e otimizadas (WebP, srcset, slide 1 com prioridade), sem distorção e com créditos. Os recortes do celular foram corrigidos e as fotos batem com os cards. Perde um ponto pela chupeta ainda visível no slide 4 do desktop (V6) e por todas as fotos serem de banco (pendência do usuário, não defeito) |
| 7 | Experiência mobile | 4 | O bloqueante foi resolvido: menu em tela cheia a 360 e 768 px, contraste da etiqueta em 6,7:1 e assunto das fotos acima do texto. Não há rolagem horizontal, os alvos têm 44 px ou mais e o Lighthouse dá Acessibilidade 100. Perde um ponto pelo corte do fundo no Sobre (T13), pelo TBT de 290 a 430 ms (T12) e pelo CLS de 0,083 (T11) |

**Média: 4,43** (31/7). Nenhum critério abaixo de 3. Aprovado.

## Correções obrigatórias

Nenhuma.

- **Redator**: nenhuma correção de texto.
- **Desenvolvedor**: nenhuma correção obrigatória. Os itens abaixo são opcionais e podem ir num ajuste rápido antes da publicação.

## Melhorias recomendadas (opcionais, para o `desenvolvedor-frontend`)

1. **Fundo do Sobre no celular e no tablet (T13/V10)**: fundo creme liso abaixo de 1024 px, com o degradê 50/50 só no desktop. Resultado esperado: nenhuma linha de cor atravessando o texto em `celular-inteira.jpg` e `tablet-inteira.jpg`.
2. **Link ativo preso em "Coleção" (T14/V11)**: ao voltar ao hero, remova o `aria-current` e o sublinhado de todos os links. Para isso, trate a saída da seção ou observe `#inicio`.
3. **TBT (T12)**: não leia `window.scrollY` de forma síncrona na carga. Use `requestAnimationFrame(aoRolar)` ou um sentinela com `IntersectionObserver`, e evite o `offsetWidth` forçado em `mostrar(0)`. Resultado esperado: TBT abaixo de 200 ms no perfil de celular.
4. **CLS (T11)**: use uma fonte reserva com métricas ajustadas (`size-adjust` / `ascent-override`) ou faça o preload da Fraunces 600 hospedada localmente. Resultado esperado: CLS perto de 0.
5. **Chupeta no slide 4 do desktop (V6)**: refaça o recorte 16:9 com a chupeta fora do quadro ou troque a foto (via `gerador-imagens`).

## Pendências para o usuário

- Fotos reais do @arosabordo para o hero (4 slides), os 6 modelos, o Sobre, o Personalize e a faixa do Instagram. Hoje todas são de banco (Pexels/Pixabay), marcadas "substituir antes de publicar".
- Nome da artesã (título do Sobre e assinatura da citação).
- Modelos reais da coleção: nomes, tamanhos e preços.
- Confirmar os materiais (algodão, fibra) e a prática de usar só detalhes bordados nas bonecas para bebês.
- Consulta ao Inmetro/OCP sobre a divulgação de bonecas prontas.
- 3 depoimentos reais, com autorização.
- Dados de contato reais (WhatsApp, e-mail, cidade, horários, envio, pagamento, prazos). Hoje são fictícios, veja `dados-negocio.md`.
- Domínio, para `og:image` absoluto, `og:url` e `canonical` (T6). Na publicação, envie a raiz do projeto ou copie `assets/` para dentro de `site/` (T7).
