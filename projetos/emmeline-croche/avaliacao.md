# Avaliação de resultado: Emmeline Crochê

- Data: 2026-11-15 (reavaliação após o ciclo 1 de correções)
- Entradas: `briefing.md`, `design.md`, `site/` (index.html, styles.css, script.js, CHANGELOG.md, Iteração 2) e `avaliacao-tecnica.md` (APROVADO COM RESSALVAS: 0 bloqueantes; I2, M2 e M4 dependem do domínio final; M6 é menor)
- Método: leitura do HTML e capturas no Google Chrome headless via DevTools Protocol. Em 360 px, emulação de celular (`mobile: true` e user agent Android). Também 1280 px. Capturei o hero no topo, sem rolagem, e as seções Coleção, Feito à mão e Depoimentos depois de rolar a página inteira, para disparar o lazy-load e as revelações. Medido: `scrollWidth` 360/1280 (sem rolagem horizontal) e 0 imagens quebradas.
- Limitação: numa captura do Sobre em 360 px feita sem rolagem, o mosaico apareceu vazio. Isso acontece porque as revelações só disparam com a rolagem; é efeito da ferramenta. Refeita com rolagem, a captura mostra a seção completa. O relatório técnico também confirma que, sem JS, todo o conteúdo fica visível.

## Decisão: APROVADO (ciclo 2 de no máximo 3)

As duas correções obrigatórias do ciclo 1 (B1 e I1) foram feitas e confirmadas no relatório técnico. As três melhorias recomendadas que pedi para verificar também foram resolvidas e conferidas nas capturas. A média é 4,71 e nenhum critério ficou abaixo de 4. O que resta depende de domínio, fotos e dados reais do usuário e está listado em pendências.

## Verificação das correções recomendadas no ciclo 1

| Item | Situação | Evidência (capturas 360 e 1280) |
|---|---|---|
| Vazio no mosaico "Feito à mão" (desktop) | **Resolvido** | Em 1280 px, o mosaico e a coluna de texto ocupam exatamente a mesma faixa (y 2925–3711). A foto grande ocupa a largura total do mosaico (576×491) e as duas quadradas ficam embaixo (280×280). Não há mais faixas vazias. O recorte paisagem da foto das mãos tecendo ficou natural. Em 360 px, a ordem texto → mosaico → citação → retrato → etapas foi mantida. |
| Texto da Bolsa Lua | **Resolvido** | "Retangular de tiracolo, com aba e flores bordadas à mão." O texto agora corresponde à foto (bolsa retangular com aba marrom e bordado floral). |
| Texto da Bolsa Noite | **Resolvido** | "26 × 14 cm · fio fosco em ponto pipoca · forrada" corresponde à foto. No depoimento 3, "textura discreta" substituiu "brilho". Não sobrou "meia-lua" nem "brilho" no HTML. |
| Hero mais próximo da paleta vinho | **Resolvido como provisório** | O véu rosé em `multiply` levou o fundo menta para um bege quente, que agora conversa com o creme da página e com o bloco rosé texturizado. O filtro puxou a bolsa do vermelho vivo para um carmim mais fechado, e o filete vinho no arco amarra a moldura à paleta. O casaco escuro continua lá, mas a primeira impressão deixou de ter choque cromático. O CSS está marcado para remoção quando a foto real chegar. O relatório técnico confirma que não há impacto no contraste dos textos nem no LCP. |
| B1, I1, M1, M3, M5 | **Corrigidos** | Ver `avaliacao-tecnica.md`. |

## Percurso por seção (o que mudou)

- **Hero:** a mensagem continua clara em 5 segundos. Em 360 px, o CTA principal, o secundário e a linha de confiança ficam acima da dobra. A foto tratada agora ancora a paleta em vez de competir com ela.
- **Coleção:** os textos correspondem às fotos. A grade 3×2 no desktop e a coluna única no celular continuam corretas. A variedade de cores das fotos de banco (terracota, rosa e marrom) continua, mas é pendência de fotos reais.
- **Feito à mão:** a seção ficou equilibrada no desktop. O bloco de duas colunas com etapas pontilhadas embaixo tem bom ritmo.
- **Demais seções:** não houve mudança visual relevante. Continuam como avaliado no ciclo 1 (bom).

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | 5 | As 10 seções estão presentes. O WhatsApp é o CTA dominante, com mensagem por contexto e por modelo, e o Instagram é o secundário. O frete real foi aplicado e os dados fictícios estão sinalizados. |
| 2 | Hierarquia e clareza | 5 | O h1, o lead e o CTA ficam acima da dobra em 360 e 1280 px. O ritmo creme → rosé → creme → vinho guia a leitura até o CTA final. |
| 3 | Estética moderna | 5 | Os dois pontos que tiravam nota foram resolvidos: o bloco "Feito à mão" está equilibrado e o hero não tem mais choque cromático. A tipografia, o respiro, o arco e a textura de ponto formam uma identidade própria, sem clichê. |
| 4 | Coerência com o design | 5 | Tokens, tipografia, espaçamentos e breakpoints conferem com o design. O `design.md` foi atualizado para o padrão `.sr-only`. O Sobre agora segue o layout de mosaico ao lado do texto, sem vazios. Os desvios restantes estão documentados no CHANGELOG. |
| 5 | Qualidade do texto | 5 | O tom é acolhedor e em primeira pessoa. Não há placeholder visível. As incoerências entre texto e foto (Lua e Noite) foram corrigidas, inclusive no depoimento. |
| 6 | Imagens e assets | 4 | Proporções, `object-fit`, `srcset` 400w/800w, `alt` e créditos estão corretos, e os SVGs estão bem resolvidos. O hero tratado ficou próximo da paleta. Perde um ponto porque a coleção ainda mistura cores fora do vinho, mas isso se resolve com as fotos reais e não com código. |
| 7 | Experiência mobile | 5 | Sem rolagem horizontal, h1 de 40 px, botões em largura total, botão flutuante sem cobrir o conteúdo, menu acessível com e sem JS e ordem do Sobre preservada. |

**Média: 4,71** (33/7). Nenhum critério abaixo de 4.

## Correções obrigatórias

Nenhuma.

## Melhorias recomendadas (opcionais, não bloqueiam a entrega)

1. **[M6] Fechar o menu sem JS:** dentro do `nav`, criar um link "Fechar menu" (`href="#topo"`, alvo ≥ 44 px), visível só em `html:not(.js) .site-nav:target`. O resultado esperado é que, sem JS, quem abrir o painel consiga fechá-lo sem precisar navegar.
2. **Ao receber a foto real do hero:** remover o bloco `.hero__frame::before` e o `filter` da `.hero__img` (`styles.css:527-540`) e refazer a `og-image.jpg` a partir da nova foto.

## Pendências para o usuário (antes de publicar)

- **Domínio final:** necessário para aplicar `canonical`, `og:url` e as URLs absolutas em `og:image`/`twitter:image` e no JSON-LD (I2, M4; os PLACEHOLDERs já estão no `<head>`). Também falta decidir como publicar: a pasta do projeto inteira ou `assets/` copiado para dentro de `site/` (M2).
- **Fotos reais das bolsas da Emmeline**, de preferência em tons de vinho sobre fundo neutro quente, além de fotos da artesã e do processo. Elas substituem as fotos de banco, a foto tratada do hero e a variedade de cores da coleção.
- **Dados de contato reais** (hoje todos FICTÍCIOS): WhatsApp, e-mail, Instagram, cidade, horários, formas de pagamento, sinal, prazo de produção e preços dos 6 modelos (ver `dados-negocio.md`).
- **Nome definitivo da marca e logo**, se houver. O logotipo tipográfico atual é provisório.
- **Depoimentos reais** com autorização das clientes. Hoje são 3 de exemplo, com retratos de banco e o selo "Exemplo".
- **Confirmar o envio** (Correios com rastreio?) e se há retirada ou entrega local.
