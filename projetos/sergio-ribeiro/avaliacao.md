# Avaliação de resultado: Sergio Ribeiro, "Influenciador de Esperança"

Ciclo 2, 2026-11-17. Evidências: `briefing.md`, `design.md`, `conteudo.md` (seção Revisões, ciclo 2), `site/` (index.html, styles.css, CHANGELOG.md: Iteração 2 e "Ajuste pós-inspeção"), `capturas/` (vistas com a ferramenta Read: `desktop-inteira.jpg`, `desktop-rodape.png`, `celular-instagram.png`), `inspecao-visual.md` (ciclo 2) e `avaliacao-tecnica.md` (ciclo 2: APROVADO COM RESSALVAS).

## Decisão

**APROVADO (ciclo 2)**

As duas correções obrigatórias do ciclo 1 (WCAG 2.5.3, T1 e T2) foram feitas primeiro no `conteudo.md` e depois no HTML. Conferi as linhas 130, 349 e 394 do `index.html`: os três rótulos começam pelo texto visível. O Lighthouse aprovou `label-content-name-mismatch` (Acessibilidade 100), e o portão técnico agora está APROVADO COM RESSALVAS. Das melhorias opcionais, entraram R1, R2, C1 a C6. A única regressão da inspeção, V10 (margarida do rodapé a 48x48), foi corrigida no CSS depois das capturas: `.footer-marca .footer-flor` (`styles.css:1172`) vence `.footer-marca img` por especificidade. Ainda não há captura que mostre essa correção (`desktop-rodape.png` é anterior a ela), mas é um ajuste menor e decorativo e não justifica outro ciclo.

Média **4,71**, sem nenhum critério abaixo de 3.

## Objetivos do briefing (checagem)

| Objetivo / seção pedida | Situação |
|---|---|
| Apresentar fé, família e propósito | Atendido (hero e Sobre). A privacidade foi respeitada: nenhum nome de filho, e a esposa aparece só como "Mônica", em texto, sem link |
| Ministério de homens da AD Catedral Baleia | Atendido, sem inventar datas nem cargo. Nenhum evento já passado aparece como futuro |
| Tecnologia ("o portfólio fala por você") | Atendido. As áreas e os links aparecem como "em breve", sem link fictício |
| CTA "Fale comigo" (WhatsApp) e "Siga no Instagram" | Atendido: cabeçalho, hero, Sobre, Ministério, Contato e barra fixa no mobile |
| As 10 seções do briefing | Todas presentes, na ordem do design |
| Restrições (HTML/CSS/JS puro, 2 famílias de fontes, WCAG AA, leve) | Atendidas: 68,3 KB de código; Lighthouse 92/100/100/100; 0 falhas de 2.5.3 |

## Percurso por seção (o que mudou no ciclo 2)

- **Hero:** igual ao ciclo 1, que já funcionava. O rótulo acessível do CTA secundário foi corrigido.
- **Uma palavra para hoje:** no desktop, o espaço que sobrava no card de Hebreus 6.19 agora fica dividido acima e abaixo do versículo (`desktop-inteira.jpg`). O resultado é equilibrado e não parece mais um buraco entre o versículo e a referência. Resta o vão no tablet de 768 px (2 colunas), que é menor.
- **Instagram:** o botão "Siga no Instagram" cabe em 1 linha a 360 px (`celular-instagram.png`), com o handle visível no título do card. V7 resolvido.
- **Contato:** o rótulo de "Abrir perfil" foi corrigido. A hierarquia continua igual.
- **Rodapé:** a margarida SVG substituiu o emoji, e o "©" está alinhado com "Créditos das fotos". O link "Sobre" tem 44 px. O tamanho da margarida (V10) foi corrigido no CSS depois da captura.

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | **5** | As 10 seções e os 4 objetivos estão presentes. A privacidade e a regra de não inventar fatos foram respeitadas, e as pendências aparecem como provisórias, como o briefing pede. |
| 2 | Hierarquia e clareza | **5** | O hero mostra quem é, a promessa e a ação numa só tela, nas 3 larguras. O CTA principal domina, e o secundário não compete com ele. |
| 3 | Estética moderna | **4** | Bom respiro, Fraunces SOFT com Inter, paleta creme, azul e amarelo bem dosada, e o arco com a margarida como assinatura. O emoji destoante saiu e o vão do desktop melhorou. Fica em 4 porque os cards da Esperança ainda têm bastante área vazia (595 px de altura a 1440 e 199 px de vão no tablet). |
| 4 | Coerência com o design | **5** | Os tokens, a ordem das seções, os breakpoints e os componentes seguem o `design.md`. As divergências, inclusive o SVG no lugar do emoji, estão justificadas no CHANGELOG. |
| 5 | Qualidade do texto | **5** | O texto visível bate com o `conteudo.md`, incluindo as Revisões do ciclo 2 (botão curto do Instagram e os rótulos acessíveis). Não há nenhum `[PENDENTE]` visível, o tom é caloroso e o `conteudo.md` voltou a ser a fonte da verdade, também nos rótulos e no alt. |
| 6 | Imagens e assets | **4** | As proporções estão corretas, não há imagem quebrada, os créditos estão completos e a margarida da marca ficou consistente. Fica em 4 porque o retrato de banco corta a cabeça e deixa claro que é um placeholder. É uma pendência de publicação, não um defeito de implementação. |
| 7 | Experiência mobile | **5** | Botão do Instagram em 1 linha, CTAs com largura total, menu acessível (Esc e devolução de foco), barra fixa que aparece e some no momento certo, 0 alvos menores que 44 px e nenhuma rolagem horizontal. |

**Média: 33 / 7 = 4,71.** Nenhum critério abaixo de 3.

## Correções obrigatórias

Nenhuma.

## Melhorias recomendadas (opcionais, para depois)

1. **V10, conferência:** na próxima captura, confirmar que a margarida do rodapé aparece com 20x20 px e alinhada ao texto. O CSS já está certo.
2. **V4, tablet 768:** reduzir o vão de 199 px no card de Hebreus 6.19 (por exemplo, aplicando a mesma centralização do versículo usada a partir de 1200 px).
3. **T4/V6, LCP mobile 3,2 s:** hospedar Fraunces e Inter localmente (woff2 com subset latin), com `preload`.

## Pendências de publicação (consolidadas)

Nenhuma delas impede a aprovação. Todas dependem do usuário e precisam ser resolvidas antes de publicar.

| # | Pendência | Onde aparece |
|---|---|---|
| 1 | Número real de WhatsApp | 7 links `wa.me/5561900000000` (cabeçalho, menu, hero, Sobre, Ministério, Contato, barra fixa), card "(61) 90000-0000" e `telephone` no JSON-LD |
| 2 | E-mail público real | Card e `mailto:contato@exemplo.com`, `email` no JSON-LD |
| 3 | Cidade/UF (Brasília/DF?) | Sobre, Contato, `addressLocality` no JSON-LD |
| 4 | Autorização para citar a AD Catedral Baleia e o papel no ministério de homens | Lead e selo do Ministério (há texto alternativo pronto no `conteudo.md`) |
| 5 | Área ou função em tecnologia e links de LinkedIn, portfólio ou GitHub | Chip "Áreas de atuação em breve" e nota "LinkedIn e portfólio em breve." |
| 6 | Autorização da Mônica para aparecer pelo nome (e decisão sobre o link para @amonicaribeiro_) | Sobre e Pontes (há texto alternativo pronto) |
| 7 | Foto do Sergio para o Sobre | `retrato-placeholder.jpg` (legenda "Foto ilustrativa") |
| 8 | Foto real do ministério, com autorização das pessoas (opcional) | `foto-ministerio*.jpg` |
| 9 | Domínio final | `og:image` e `image` do JSON-LD com URL absoluta, mais `og:url` e `canonical` (T3) |
| 10 | Opcionais | Horário de resposta, bio completa e lema, outras redes, aprovação da frase do pássaro na janela |
