# Avaliação de resultado: Arena Fight Sobradinho

## Reavaliação — ciclo 1

Data: 2026-11-15. Entradas: `briefing.md`, a avaliação anterior (abaixo, mantida como histórico), `avaliacao-tecnica.md` (reavaliação: APROVADO COM RESSALVAS, 0 bloqueantes), `site/CHANGELOG.md` (iteração 2) e `site/`.

### Decisão: APROVADO (após o ciclo 1 de 3)

As 6 correções obrigatórias do ciclo anterior foram aplicadas e conferidas. B1 está resolvido: a avaliação técnica mediu `scrollWidth` igual a `innerWidth` em 360, 768 e 1440 px, e na minha captura a 360 px o botão do menu e a barra CTA aparecem inteiros. C1 a C7 também estão resolvidos. Todas as recomendadas foram feitas (M1 a M5 e o hero mais claro), exceto M6, que é opcional. Restam três itens menores que não bloqueiam a entrega (M7, C8, I1) e as pendências de conteúdo real.

Método e limitação: capturei a página no Chrome headless em 1440×900 e em 360×740. No Windows, o Chrome headless tem largura mínima de janela, então a captura direta em 360 px sai cortada. Por isso fiz a vista mobile com um iframe de 360 px. Nessa vista, a barra CTA apareceu por cima do CTA do hero e a seção #planos ficou vazia. As duas coisas são artefatos da captura: o IntersectionObserver e as animações `.reveal` não terminam dentro do orçamento de tempo do headless. A avaliação técnica confirmou, com emulação de dispositivo, que a barra fica oculta no topo e que a revelação funciona.

### Verificação das correções do ciclo anterior

| Item | Situação | Onde |
|---|---|---|
| 1. B1, overflow no mobile | Corrigido | `styles.css:479`. Medido pelo avaliador técnico e confirmado na captura de 360 px |
| 2. C1, Jiu-Jitsu | Corrigido | `index.html:217`, agora segue a nota de conteúdo do design |
| 3. C2, estilos de Wrestling | Corrigido | `index.html:196`, com "(exemplo: confirmar)" |
| 4. C5, turmas por nível | Corrigido, com um resíduo (C8) | `index.html:128` e `:314` |
| 5. C6, idade no Karatê | Corrigido | `index.html:161` |
| 6. C3, C4 e C7, promessas sem selo | Corrigido | turmas mistas, professor dedicado, higiene e sparring, condicionamento e gratuidade agora levam "(exemplo: confirmar)" |
| Recomendadas M1 a M5 e hero | Feitas | Na captura de 1440 px, o treino agora se reconhece no hero (a figura e o golpe aparecem), e todos os contrastes passam no AA |

### Notas da rubrica (ciclo 1)

| # | Critério | Antes | Agora | Justificativa |
|---|---|---|---|---|
| 1 | Aderência ao briefing | 5 | 5 | Estão presentes as 13 seções, as 4 modalidades, o posicionamento de formação completa para o MMA, o CTA via WhatsApp e Sobradinho-DF. Os dados fictícios estão marcados |
| 2 | Hierarquia e clareza | 5 | 5 | Em desktop e em 360 px, a dobra mostra o que é, onde fica e o que fazer. Os chips das modalidades quebram em 2 linhas no mobile sem perder a leitura |
| 3 | Estética moderna | 4 | 4 | Com o hero mais claro, a primeira dobra comunica treino de luta. A foto continua sombria e de baixa nitidez, o que combina com a direção visual, mas não chega a ser excelente |
| 4 | Coerência com o design | 4 | 5 | O reduced-motion agora é completo, sem `!important`, e o Jiu-Jitsu segue a nota de conteúdo do design. Os tokens e a estrutura se mantêm |
| 5 | Qualidade do texto | 4 | 4 | As imprecisões e as promessas sem selo foram corrigidas. Fica um resíduo de incoerência: o plano Foco ainda diz "Turmas por nível" (C8) |
| 6 | Imagens e assets | 4 | 4 | As fotos estão bem aplicadas, e os assets agora ficam dentro de `site/assets/`, o que permite publicar a pasta sozinha. O hero melhorou, mas a foto em si é pouco nítida |
| 7 | Experiência mobile | 2 | 4 | Não há mais rolagem horizontal. O menu é acessível e prende o foco, a barra CTA funciona e os alvos de toque têm 44 px ou mais. Perde 1 ponto pelo deslocamento dobrado das âncoras (M7): a seção para a 160 px do topo, em vez de cerca de 80 |

**Média: 4,43** (31/7). Nenhum critério ficou abaixo de 3. **Aprovado.**

### Correções obrigatórias

Nenhuma.

### Melhorias recomendadas (não bloqueantes; podem entrar junto com a troca para os dados reais)

1. **[C8]** Em `index.html:464`, no plano Foco, trocar "Turmas por nível" por "Aulas adaptadas ao seu nível", para ficar coerente com a grade e com `:314`.
2. **[M7]** Manter um só deslocamento de âncora: remover o `scroll-padding-top` de `html` (`styles.css:74`) ou os `scroll-margin-top` (`styles.css:136` e `:398`). **Resultado esperado:** ao tocar em um item do menu, o topo da seção fica a cerca de 80 px do topo da tela.
3. **[Hero]** Quando houver foto real da escola (treino com boa luz e nitidez), trocar a do banco. Se o mobile também for clareado, medir de novo o contraste do "MMA" vermelho, que hoje está em 3,51:1 em 360 px, com pouca folga.
4. **[M6]** Opcional: hospedar as fontes localmente (LGPD e desempenho).

### Pendências para o usuário (não bloqueantes)

- Nome real da escola e logo, se houver (o nome atual é provisório).
- Dados reais: WhatsApp (hoje é o fictício 5561900000000 em todos os links), endereço, e-mail, Instagram e demais redes, horário de funcionamento e coordenadas para o mapa interativo (etapa 0b).
- Grade real de horários, valores dos planos e regra da matrícula.
- Confirmar o que está marcado como "(exemplo: confirmar)": aula experimental gratuita (se não for gratuita, rever todos os CTAs), turmas mistas, estilos de Wrestling, um professor por modalidade, política de sparring e higiene, condicionamento integrado, empréstimo de equipamento, quimono na aula experimental e idade da turma kids.
- Professores reais (nome, graduação, foto) e depoimentos reais com autorização. As fotos atuais estão marcadas como "substituir antes de publicar".
- **Publicação [I1]:** com o domínio definido, usar URL absoluta no `og:image` e no `image` do JSON-LD, e ativar `og:url`, `canonical` e `url`. Os comentários PLACEHOLDER já estão em `index.html:13-17`. Publicar a pasta `site/`.

---

# Histórico: avaliação inicial (etapa 6)


Data: 2026-11-15. Entradas: `briefing.md`, `design.md`, `avaliacao-tecnica.md` (REPROVADO: 1 bloqueante, 2 importantes, 13 menores) e `site/` (index.html, styles.css, script.js).

## Decisão: ITERAR (ciclo 1 de 3)

O site cumpre o briefing por completo e está visualmente forte no desktop. Ele não pode ser entregue porque, no celular, a página fica mais larga que a tela: o botão do menu e a barra de CTA saem da área visível. O briefing diz que o acesso é "majoritariamente pelo celular", então isso derruba o critério 7 para abaixo de 3. A correção é pequena. As demais são de copy e de fatos.

Método e limitação: capturei a página no Chrome headless em 1440 px (dobra e página inteira). Para o mobile, usei a captura de página inteira e as medições da avaliação técnica (360 e 768 px com emulação de dispositivo). Nas capturas de página inteira, as imagens com `loading="lazy"` às vezes não carregaram (ex.: a foto de "Sua primeira aula"). Conferi o markup e os arquivos: caminho, dimensões e `alt` estão corretos, então isso é artefato da captura, não defeito.

## Objetivos do briefing (checagem)

| Objetivo | Status |
|---|---|
| Landing de uma página com CTA principal "aula experimental grátis" via WhatsApp | Atendido: CTA no header, no hero, em cada modalidade, na grade, nos planos, nos depoimentos, no contato, no CTA final e na barra fixa mobile |
| Posicionar como formação completa para o MMA | Atendido: H1 "Formação completa para o MMA em Sobradinho"; lead "Em pé, nas quedas e no chão"; método em 4 etapas até a integração MMA; plano "Arena Completo" |
| 4 modalidades, incluindo Jiu-Jitsu, com o que se aprende, para quem é e o papel no MMA | Atendido: 4 cards com eyebrow da fase da luta ("Distância e timing", "Trocação e clinch", "Quedas e controle", "Solo e finalizações") |
| Sobradinho-DF e região | Atendido: H1, eyebrow, title, meta, JSON-LD e contato (Sobradinho II, Planaltina, Lago Oeste) |
| As 13 seções pedidas | Todas presentes, na ordem do briefing (header, hero, modalidades, método, diferenciais, grade, professores, planos, depoimentos, FAQ, contato, CTA final, rodapé). Planos vêm antes de professores, como prevê o design: aceitável |
| FAQ com experiência, idade mínima e o que levar | Atendido, e vai além (sparring, quimono, mulheres, dor muscular, gratuidade) |
| Dados fictícios claramente marcados | Atendido: selo âmbar "Exemplo" em grade, planos, professores, depoimentos e contato, aviso no rodapé e comentários `EXEMPLO` no HTML |
| Tom enérgico, motivador e acolhedor, sem agressividade | Atendido: "Competir é opção, não obrigação", "Sem sparring nas primeiras aulas", sem linguagem de briga |
| Mobile-first, legível | **Não atendido** (bloqueante B1) |

## Percurso por seção

- **Header e hero (desktop):** a hierarquia é excelente. Em 5 segundos fica claro o que é (escola de MMA), onde fica (Sobradinho) e o que fazer (botão vermelho único). Os chips das 4 modalidades e a microcopy "Não precisa de experiência. Sem compromisso." reduzem o risco percebido. Ressalva: a foto do hero está muito escura e mal se lê como treino de luta. Funciona como textura, mas não comunica "artes marciais" sozinha.
- **Faixa de prova:** são 3 itens objetivos. "1ª aula grátis" depende de confirmação (C7).
- **Modalidades:** a grade 2×2 com foto, eyebrow da fase da luta, "Você aprende" e "Para quem é" está muito boa. Há erros de fato no Jiu-Jitsu (C1) e no Wrestling (C2), e uma incoerência de idade no Karatê (C6).
- **Método:** as 4 etapas numeradas e o card "Sua primeira aula" (checklist prático) estão bem resolvidos. As políticas estão marcadas como exemplo.
- **Diferenciais:** a foto e os 4 itens estão claros. "Turmas por nível" contradiz a grade (C5), e há promessas sem selo (C4).
- **Grade:** tabela com filtro por modalidade, rolagem horizontal com dica e selo de exemplo. É aqui que nasce o bug do mobile (B1). As aulas filtradas ficam com contraste baixo (M2).
- **Planos:** 3 planos com o do meio destacado ("Mais escolhido (exemplo)"). Coerentes com o posicionamento de MMA.
- **Professores e depoimentos:** fotos e selos "Substituir antes de publicar" estão aplicados. "Graduação: a informar" é honesto.
- **FAQ:** completo, com respostas curtas e tom correto. "Todas as turmas são mistas" está sem selo (C3).
- **Contato, CTA final e rodapé:** completos. O mapa é placeholder, o que é esperado até haver coordenadas. As redes sociais apontam para `#` (M4).

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | 5 | As 13 seções, as 4 modalidades, o posicionamento de formação completa para o MMA, o CTA via WhatsApp e a localização estão presentes. Os dados fictícios estão marcados |
| 2 | Hierarquia e clareza | 5 | O H1 traz modalidade, proposta e local. Há um CTA primário vermelho exclusivo, eyebrows "/" consistentes e o ritmo das seções é claro |
| 3 | Estética moderna | 4 | Tipografia condensada pesada, recortes diagonais, vermelho reservado ao CTA e bom uso de espaço, sem clichês de "luta agressiva". Perde 1 ponto pela foto do hero subexposta, que enfraquece a primeira dobra |
| 4 | Coerência com o design | 4 | Tokens, tipografia, estrutura, selo âmbar e barra CTA seguem o `design.md`. Desvios: o `prefers-reduced-motion` não zera todas as transições (M1), e a frase sobre o Jiu-Jitsu ignora a nota de conteúdo do design ("a partir do judô/jujutsu") |
| 5 | Qualidade do texto | 4 | A copy é clara, enérgica e acolhedora, sem placeholders crus. Perde 1 ponto por imprecisões de fato (C1, C2), incoerências internas (C5, C6) e promessas do negócio sem selo (C3, C4) |
| 6 | Imagens e assets | 4 | Fotos reais e pertinentes às 4 modalidades, `<picture>` com WebP, recortes mobile, proporções corretas e selos em equipe e depoimentos. Perde 1 ponto pela foto do hero escura demais |
| 7 | Experiência mobile | **2** | A estrutura e o CSS são mobile-first (breakpoints, `clamp()`, barra CTA, menu acessível). Mas o layout medido chega a 887 px em 360 px, e o botão do menu e a barra CTA saem da tela. No público "majoritariamente pelo celular", a navegação fica quebrada |

**Média: 4,0** (28/7). O critério 7 está abaixo de 3, então o site **não é aprovado**. Com B1 corrigido, a nota mobile sobe para 4 ou 5 e a média passa de 4,3.

## Correções obrigatórias (ciclo 2)

1. **[B1, bloqueante] Overflow horizontal no mobile.** Em `styles.css:478`, adicionar `position: relative;` a `.table-wrap` (alternativa: `.grade td { position: relative; }`). **Resultado esperado:** em 360 e 768 px, `scrollWidth` igual à largura da tela, botão do menu visível no canto direito e barra CTA centralizada.
2. **[C1] Jiu-Jitsu, fato impreciso** (`index.html:214`). Trocar "Arte desenvolvida no Brasil para a luta no chão" por algo como "Jiu-Jitsu brasileiro: desenvolvido no Brasil a partir do judô e do jiu-jitsu japonês, com foco na luta no chão…". O título do card pode continuar "Jiu-Jitsu".
3. **[C2] Wrestling: estilos** (`index.html:193,196`). Trocar "Estilos livre e greco-romano" por "Base no estilo livre, com clinch e projeções do greco-romano" (ou marcar "(exemplo: confirmar)"). Assim, "double e single leg" fica coerente.
4. **[C5] "Turmas por nível" contra a grade** (`index.html:311`, e o item da faixa de prova na linha 125). Ajustar para "Turmas por nível em Muay Thai e Wrestling; nas demais, o professor adapta a aula ao seu nível", ou ajustar a grade de exemplo para que o texto seja verdadeiro.
5. **[C6] Karatê "iniciantes de todas as idades"** (`index.html:158`). Trocar por "Iniciantes a partir de 7 anos; quem gosta de técnica e precisão."
6. **[C3, C4, C7] Promessas do negócio sem selo.** Acrescentar "(exemplo: confirmar)", ou o selo, a: "Todas as turmas são mistas" (linha 653); "Um professor dedicado para cada modalidade", "Tatame e equipamentos higienizados, sparring sempre supervisionado" e "Condicionamento integrado às aulas" (linhas 301, 306, 316). "1ª aula grátis" (linhas 126, 449) pode ficar como está, porque é objetivo do briefing, mas deve ser listada como pendência de confirmação.

## Melhorias recomendadas (opcionais, mas sugeridas neste ciclo)

7. **[M2]** Aulas filtradas na grade: subir a opacidade de 0,35 para cerca de 0,55 (`styles.css:516`), ou escondê-las mantendo "sem aula" para leitor de tela.
8. **[M1]** No bloco `prefers-reduced-motion: reduce`, usar `transition-duration: 0.01ms !important; animation-duration: 0.01ms !important;` para cobrir `.btn`, `.cta-bar` e `.faq-ico`.
9. **[M3]** Remover o `min-height: 32px` de `.contact-list .text-link` (`styles.css:642`) para voltar aos 44 px de toque.
10. **[M5]** Em `script.js:73`, usar fallback `addListener` quando `addEventListener` não existir no `MediaQueryList`, para evitar seções invisíveis no Safari antigo.
11. **[M4]** Redes sociais com `href="#"`: remover a lista ou deixá-la como texto até haver perfis reais.
12. **Hero:** clarear um pouco a foto (reduzir levemente o overlay só na metade direita, fora da área do texto, ou ajustar a exposição do arquivo), para que o treino fique reconhecível, mantendo os contrastes medidos. Se não houver ganho, considerar outra foto do banco com mais luz.
13. **[M6]** Opcional: hospedar Barlow Condensed e Inter localmente (LGPD e desempenho).

## Pendências para o usuário (não bloqueiam a aprovação nesta fase)

- Nome real da escola (o atual é provisório) e logo, se houver.
- Dados reais: WhatsApp, endereço, e-mail, Instagram, horário de funcionamento e coordenadas para o mapa interativo (entrevista, etapa 0b).
- Grade real, valores dos planos e regra da matrícula.
- Confirmar: aula experimental gratuita, turmas mistas, estilos de Wrestling ensinados, política de sparring, empréstimo de luvas e caneleiras, quimono na aula experimental e idade da turma kids.
- Professores reais (nome, graduação, foto) e depoimentos reais com autorização.
- **Publicação [I1, I2]:** ao publicar, trocar `og:image` e o `image` do JSON-LD por URL absoluta, incluir `og:url`, `canonical` e `url`, e publicar a pasta do projeto inteira (ou mover `assets/` para dentro de `site/` e ajustar os caminhos `../assets/`).
