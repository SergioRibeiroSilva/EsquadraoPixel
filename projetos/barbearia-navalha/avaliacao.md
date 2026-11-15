# Avaliação de resultado: Barbearia Navalha

Data: 2026-11-14 · Ciclo 1 de no máximo 3

> **Decisão atual (ciclo 3, final): APROVADO COM RESSALVAS**, média 4,71 e nenhum critério abaixo de 4. Veja a seção "Reavaliação — ciclo 3" no fim do arquivo. As seções dos ciclos 1 e 2 ficam como histórico.
Entradas: `briefing.md`, `design.md`, `avaliacao-tecnica.md` (achados T1 a T7), `site/index.html`, `site/styles.css`, `site/script.js`, `site/CHANGELOG.md`.
Método: leitura do HTML seção por seção, conferência com o design e capturas no Microsoft Edge headless (1280 px e 360 px, página inteira), além das capturas e medições do avaliador técnico. Limitação: nas capturas feitas logo após o carregamento, o hero aparece no meio da animação de entrada (botões e textos do brasão ainda invisíveis), e o CTA final aparece no meio da revelação ao rolar. Pelo CSS (`styles.css:1157-1187`), as animações terminam visíveis em até cerca de 1,6 s e só rodam com `prefers-reduced-motion: no-preference`. Por isso não conto isso como defeito.

## Decisão: ITERAR (ciclo 1)

Média: **4,0**. Mesmo assim, o critério 7 (Experiência mobile) ficou com **nota 2**, abaixo do mínimo de 3. O motivo é o menu mobile quebrado (T1), justamente no dispositivo principal do público ("acesso majoritariamente pelo celular"). Corrigidos T1 e T2, o site deve ser aprovado no próximo ciclo: o conteúdo, a copy e a estética já atendem ao briefing.

## Objetivos do briefing (verificáveis)

| Objetivo | Situação |
|---|---|
| CTA principal "Agendar" via WhatsApp | OK: 6 links wa.me idênticos (header, hero, serviços, contato, CTA final, rodapé), mensagem pronta, aviso de nova aba |
| 9 seções pedidas | OK: todas presentes, na ordem do briefing |
| 5 serviços com preço | OK: Corte, Barba, Corte + Barba (destaque), Pigmentação, Sobrancelha, com preço e duração |
| 3 diferenciais (ambiente, profissionais, produtos) | OK |
| 3 barbeiros e 3 depoimentos | OK. Os depoimentos estão marcados como exemplo (aviso visível + badge + comentário no HTML) |
| Endereço, mapa (placeholder) e horários | OK, com os dados fictícios do briefing |
| Rodapé com redes e contato | OK |
| Fundo escuro, acento latão, título serifado, respiro | OK |
| HTML/CSS/JS puro, no máximo 2 famílias de fonte | OK (Inter + Playfair Display) |
| Responsivo mobile-first e WCAG AA | **Falha parcial**: menu mobile inoperante abaixo de 900 px (T1) e logo transbordando abaixo de 360 px (T2) |

## Percurso por seção

- **Header**: logo, nav e botão "Agendar" sempre visível. Funciona muito bem no desktop. No mobile, o hambúrguer abre um painel de só 64 px, com 1 de 5 links visível (T1). Abaixo de 360 px, o monograma transborda o header (T2).
- **Hero**: em 5 segundos fica claro o que é ("Barbearia clássica · Centro de São Paulo"), o que oferece (H1 forte) e o que fazer (CTA latão "Agendar pelo WhatsApp" + ghost "Ver serviços e preços" + horário). O brasão em traço latão é o gesto visual pedido no design. No mobile o brasão fica acima do texto, com os botões em largura total.
- **Serviços**: cards limpos, com preço em latão e destaque claro no combo. CTA e formas de pagamento logo abaixo. No desktop, os 2 cards da segunda linha ficam alinhados à esquerda, deixando um vazio à direita (T5, contra o design 4.3).
- **Sobre**: 2 colunas sem cards, como no design, o que varia bem o ritmo. Ícones coerentes.
- **Equipe**: avatares SVG com proporção correta e borda latão. Cards horizontais no mobile e verticais no desktop, conforme o design.
- **Depoimentos**: aviso de exemplo bem resolvido e sem estrelas. Legível.
- **Horários e localização**: tabela clara, "Fechado" escrito, telefone clicável, CTA e "Como chegar". O mapa placeholder está marcado como ilustrativo.
- **CTA final**: bloco destacado, com microcopy honesta ("Você será levado ao WhatsApp...").
- **Rodapé**: 3 colunas no desktop, empilhado no mobile. Aviso de "dados fictícios" no copyright.

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | 4 | As 9 seções, os 5 serviços com preço, a equipe, os depoimentos, os dados de contato e as restrições técnicas estão todos atendidos. Perde 1 ponto porque a navegação por âncoras do cabeçalho (seção 1 do briefing) não funciona no celular, que é o canal principal. |
| 2 | Hierarquia e clareza | 5 | Eyebrow + H1 + lead + CTA primário acima da dobra em 360 e 1280 px. O botão "Agendar" fica fixo no header, e os preços vêm logo depois do hero. |
| 3 | Estética moderna | 4 | Paleta contida (um só acento), Playfair grande, bom respiro e alternância bg/surface sem clichês vintage. A última linha de serviços desalinhada (T5) quebra a simetria da página no desktop. |
| 4 | Coerência com o design | 4 | Tokens idênticos, estrutura e copy fiéis, e as divergências estão justificadas no CHANGELOG (padding do hero, logo flexível). Desvios: centralização da grade de serviços (T5) e o painel do menu que não ocupa a tela cheia (T1). |
| 5 | Qualidade do texto | 5 | Copy clara, confiante e acolhedora, sem gírias e sem placeholders visíveis. Não promete "agendamento confirmado". O que é fictício está sinalizado de forma honesta. |
| 6 | Imagens e assets | 4 | SVGs coerentes, com `width`/`height` e alt corretos. O monograma fica distorcido em tamanho abaixo de 360 px (T2). Os caminhos `../assets/` quebram se só a pasta `site/` for publicada (T4). |
| 7 | Experiência mobile | **2** | O layout de conteúdo em 360 px é excelente: sem rolagem horizontal e com alvos de 44 px. Mas o menu mobile está inoperante em todas as larguras abaixo de 900 px (T1, bloqueante) e o logo transborda em 320 px (T2). Para um público que acessa principalmente pelo celular, isso impede a aprovação. |

**Média: 28 / 7 = 4,0.** Há um critério abaixo de 3, então a decisão é **ITERAR**.

## Correções obrigatórias (este ciclo)

1. **[T1, bloqueante] Menu mobile.** Hoje o `backdrop-filter` de `.site-header` (`styles.css:337-343`) cria um containing block, e o `.nav` fixo (`styles.css:421-432`) fica com 64 px de altura. Resultado esperado: com o menu aberto, em 320, 360 e 768 px, o painel ocupa toda a área abaixo do header (altura igual à viewport menos `--header-h`), com fundo `--color-bg` opaco e os 5 links visíveis e clicáveis (Playfair 600 1.75rem, 56 px cada). O conteúdo da página não deve aparecer por baixo. Caminho sugerido: mover o fundo translúcido e o blur para `.site-header::before` (`position:absolute; inset:0; z-index:-1`), ou desligar o `backdrop-filter` abaixo de 900 px. Teste com o menu aberto, inclusive pelo teclado (Tab, Esc).
2. **[T2] Logo abaixo de 360 px.** O monograma aparece com 106,8 x 106,8 px dentro de um header de 64 px. Resultado esperado: em 320 px, o monograma tem no máximo 32 a 40 px de altura, fica centralizado verticalmente no header e não é cortado. Por exemplo: `.logo img { height: 32px; width: auto; }` e `width="32" height="32"` no `<source>`.
3. **[T5] Centralizar a última linha de serviços no desktop (≥900 px)**, conforme o design 4.3. Resultado esperado: em 1280 px, os 2 cards da segunda linha ficam centralizados sob os 3 de cima. Por exemplo: flex com `flex-wrap: wrap; justify-content: center` e cards `flex: 0 1 340px`, mantendo 1 coluna no mobile e 2 a partir de 600 px.

## Melhorias recomendadas (entram neste ciclo se couberem; não bloqueiam)

4. **[T3] Open Graph.** Adicionar `og:title`, `og:description`, `og:type="website"`, `og:locale="pt_BR"` e `og:image`. O link vai circular pelo WhatsApp, o canal principal do briefing. Se não houver PNG 1200x630, deixe `og:image` como pendência comentada no HTML e registre no CHANGELOG.
5. **[T6, parte 1] JSON-LD `BarberShop`** com endereço, telefone, horários (`openingHoursSpecification`) e `priceRange`, usando os dados fictícios e um comentário de pendência. O `canonical` fica para quando houver domínio.

## Adiados (não entram neste ciclo)

- **[T4] Caminhos `../assets/`**: funcionam localmente. Só importam na publicação, que depende de confirmação do usuário. Por enquanto, basta manter a nota no CHANGELOG. Resolver ao preparar a publicação (copiar para `site/assets/` e ajustar os caminhos).
- **[T6, canonical]**: depende de domínio.
- **[T7] Fontes locais / remover Playfair 600**: impacto pequeno, otimização opcional.

## Pendências para o usuário

- Fotos reais ou geradas externamente: F1 (hero, 4:5), F2 (ambiente, 3:2), F3 (3 retratos da equipe, 1:1). Os prompts estão em `imagens.md` e `assets/prompts-imagens.md`.
- Dados reais: endereço, WhatsApp, Instagram, preços, durações, nomes e especialidades da equipe, formas de pagamento.
- Depoimentos reais de clientes, para substituir os 3 exemplos.
- Logotipo definitivo, se houver (o atual é provisório, em SVG).
- Domínio e local de hospedagem (afetam T4 e o canonical do T6). Nada será publicado sem confirmação.
- Imagem de compartilhamento 1200x630 (Open Graph), se desejar uma prévia personalizada no WhatsApp.

---

## Reavaliação — ciclo 2

Data: 2026-11-14 · Ciclo 2 de no máximo 3
Entradas: esta avaliação (ciclo 1), `site/CHANGELOG.md` (Iteração 2), `avaliacao-tecnica.md` ("Reavaliação — ciclo 2": APROVADO COM RESSALVAS, novos achados menores T8 e T9) e o site.
Método: conferência das correções pelo CHANGELOG e pelas medições do avaliador técnico, que usou CDP com cliques e teclas reais em 320, 360, 768 e 1280 px. Também tirei capturas próprias no Edge headless (1280 px e 360 px, com `prefers-reduced-motion` forçado para evitar o estado intermediário das animações). Limitação: na captura "mobile", o Edge headless sem CDP aplica uma largura mínima de janela maior que 360 px, então a imagem sai cortada à direita. Isso é um artefato da ferramenta e não do site: as medições por CDP do avaliador técnico confirmam que não há rolagem horizontal em 320, 360, 600, 700 e 768 px. Por isso, a avaliação mobile se apoia nessas medições e na leitura do CSS. Não testei em iPhone real.

### Decisão: APROVADO

Média: **4,71**, e nenhum critério ficou abaixo de 4. As 3 correções obrigatórias do ciclo 1 (T1, T2, T5) e as 2 recomendadas (T3, T6 parte 1) foram feitas e verificadas. Os novos achados T8 e T9 são menores, não violam WCAG AA e ficam como melhorias opcionais.

### Verificação das correções do ciclo 1

| Item | Situação | Evidência |
|---|---|---|
| 1. [T1] Menu mobile | **Resolvido** | Painel com top 64 e altura igual à viewport menos 64 px em 320, 360 e 768 px. Fundo opaco, os 5 links com 56 px e clicáveis, Esc fecha e devolve o foco ao botão (medição técnica com teclas reais). |
| 2. [T2] Logo < 360 px | **Resolvido** | Monograma com 32 x 32 px, centralizado no header de 64 px. |
| 3. [T5] Serviços centralizados | **Resolvido** | Na captura de 1280 px, a 2ª linha (Pigmentação, Sobrancelha) fica centralizada sob as 3 de cima, e a simetria da página foi restabelecida. Entre 600 e 899 px, o card isolado também é centralizado, o que está documentado e é coerente com a intenção do design 4.3. |
| 4. [T3] Open Graph | **Feito (parcial, documentado)** | Título, descrição, locale e tipo presentes. `og:image` e `og:url` estão comentados como pendentes. |
| 5. [T6] JSON-LD BarberShop | **Feito** | Válido, e os dados batem com o conteúdo visível. |

### Notas da rubrica (ciclo 2)

| # | Critério | Ciclo 1 | Ciclo 2 | Justificativa |
|---|---|---|---|---|
| 1 | Aderência ao briefing | 4 | **5** | Todas as seções, serviços, equipe, depoimentos, contato e restrições técnicas atendidos. A navegação por âncoras agora funciona no celular, que é o canal principal. |
| 2 | Hierarquia e clareza | 5 | **5** | Sem mudança: eyebrow, H1, lead e CTA latão acima da dobra, e "Agendar" fixo no header. |
| 3 | Estética moderna | 4 | **5** | Com a grade de serviços centralizada, o ritmo visual no desktop ficou equilibrado. Paleta contida, Playfair com presença e bom respiro, sem clichês. |
| 4 | Coerência com o design | 4 | **5** | Tokens e estrutura fiéis. O menu agora ocupa a tela cheia, como especificado, e a grade 4.3 está centralizada. As divergências restantes são pequenas e estão justificadas no CHANGELOG. |
| 5 | Qualidade do texto | 5 | **5** | Sem mudança. Copy clara, sem placeholders visíveis, e o conteúdo fictício está sinalizado. Os textos do Open Graph seguem o mesmo tom. |
| 6 | Imagens e assets | 4 | **4** | O monograma agora tem proporção correta abaixo de 360 px. Perde 1 ponto pelos caminhos `../assets/` (T4, adiado de propósito para a publicação) e pela falta de `og:image`, o que deixa a prévia do link no WhatsApp só com texto. |
| 7 | Experiência mobile | 2 | **4** | O bloqueante foi resolvido: menu cheio, legível e operável por toque e teclado, sem rolagem horizontal em nenhuma largura testada. Não é 5 por causa de 2 arestas menores: o Tab para no botão "Fechar menu" em vez de voltar ao início (T8), e o link do logo fica com 32 x 44 px abaixo de 360 px (T9). Também falta teste em iOS real. |

**Média: 33 / 7 = 4,71.**


### Correções obrigatórias

Nenhuma.

### Melhorias recomendadas (opcionais, não bloqueiam)

1. **[T8] Ciclo de foco no menu aberto** (`script.js:55-60`). Resultado esperado: com o menu aberto, um Tab depois de "Fechar menu" leva o foco ao logo (ou a "Serviços"), e Shift+Tab no primeiro elemento leva a "Fechar menu", em vez de prender o foco no botão.
2. **[T9] Alvo de toque do logo < 360 px** (`styles.css:387-396`). Resultado esperado: em 320 px, o link do logo tem pelo menos 44 x 44 px, por exemplo com `min-width: 44px` e o monograma centralizado.
3. **[T7]** Fontes locais e remoção do peso Playfair 600, se não for usado. Otimização opcional.

### Pendências antes de publicar (técnicas, dependem de decisões do usuário)

- **T4**: definir a raiz publicada, ou copiar `assets/` para `site/assets/` e ajustar os caminhos.
- **T3/T6**: `og:image` (1200x630), `og:url`, `canonical` e `url` no JSON-LD, quando houver domínio.
- Conferir o menu mobile num iPhone real (Safari).

### Pendências para o usuário

- **Fotos**: F1 (hero, 4:5), F2 (ambiente, 3:2) e F3 (3 retratos da equipe, 1:1). Os prompts estão em `imagens.md` e `assets/prompts-imagens.md`. Até lá, o site usa o brasão e os avatares em SVG.
- **Dados reais**: endereço, WhatsApp, telefone, Instagram, preços, durações, nomes e especialidades da equipe e formas de pagamento. Atualizar também no JSON-LD.
- **Depoimentos reais**, para substituir os 3 exemplos (hoje sinalizados como "Exemplo").
- **Logotipo definitivo**, se houver. O atual é provisório.
- **Domínio e hospedagem**: afetam T4, `og:url` e `canonical`. Nada será publicado sem confirmação.
- **Imagem de compartilhamento 1200x630**, para a prévia do link no WhatsApp.

---

## Reavaliação — ciclo 3

Data: 2026-11-15 · Ciclo 3 de no máximo 3 (último)
Entradas: `briefing.md` (atualizado com dados reais e mapa interativo obrigatório), `dados-negocio.md`, `imagens.md`, `site/CHANGELOG.md` (Iterações 3 a 6), `avaliacao-tecnica.md` ("Reavaliação — ciclo 3": APROVADO COM RESSALVAS, achados menores T7 a T13) e o site.
Método: capturas próprias de página inteira no Edge headless, com `prefers-reduced-motion` forçado: 1280 px direto e 360 px dentro de um iframe de 360 px (para contornar a largura mínima da janela headless). Também conferi no HTML as linhas citadas pelo avaliador técnico (T12 em `index.html:406`, T13 em `index.html:125` e `:491`). Limitações: o mapa do Google aparece cinza no headless (WebGL), então avaliei só o contêiner e a marcação. Não testei em iPhone real nem com leitor de tela.

### Decisão: APROVADO COM RESSALVAS (ciclo 3, final)

Média: **4,71**, e nenhum critério ficou abaixo de 4. O critério de aprovação (média de pelo menos 4,0 e nenhuma nota abaixo de 3) foi atendido. Não há correção obrigatória. As ressalvas abaixo são menores e, como este é o último ciclo, ficam listadas para uma rodada opcional ou para a preparação da publicação.

### As fotos e os dados reais melhoraram o resultado?

Sim, de forma clara.
- **Hero**: a foto escura de barbearia por trás do texto, com gradiente carvão e o brasão latão por cima, dá profundidade e transmite a "experiência da barbearia" pedida no briefing, sem perder legibilidade. O contraste medido passa AA no pior pixel em todas as larguras. Cada largura baixa só uma foto (`hero.jpg` no mobile, `hero-wide.jpg` no desktop).
- **Sobre**: a foto do ambiente na coluna do título mostra o "ambiente acolhedor" em vez de só afirmar. A ordem no mobile (título, foto, diferenciais) funciona bem. A foto não estava no design, mas a divergência está justificada no CHANGELOG e reforça o briefing.
- **Equipe e depoimentos**: os retratos com recorte circular e borda latão humanizam a página. Os avatares de 56 px nos depoimentos dão credibilidade visual, e o selo "Exemplo" continua honesto.
- **Dados reais**: endereço, CEP, telefone, WhatsApp, e-mail, Instagram, horários e coordenadas batem com `dados-negocio.md` no texto visível, nos links e no JSON-LD (verificado pelo avaliador técnico). O mapa interativo substituiu o placeholder, como o briefing agora exige, e o endereço em texto e os links "Abrir no Google Maps" e "Como chegar" continuam junto dele. Para o visitante, o site agora funciona de verdade: o botão leva ao WhatsApp certo e o mapa leva à porta.
- **Ressalva de conteúdo**: as fotos de equipe, depoimentos e ambiente são de banco de imagem (CC0). Estão sinalizadas como ilustrativas no `alt` e no aviso do rodapé, e precisam ser trocadas por fotos reais antes de publicar. Nomes, preços e depoimentos também continuam como exemplo, como o briefing prevê.

### Notas da rubrica (ciclo 3)

| # | Critério | Ciclo 2 | Ciclo 3 | Justificativa |
|---|---|---|---|---|
| 1 | Aderência ao briefing | 5 | **5** | As 9 seções seguem presentes. Os dados reais e o mapa interativo obrigatório (novas exigências do briefing) foram aplicados sem sobrar dado antigo visível. |
| 2 | Hierarquia e clareza | 5 | **5** | Eyebrow "Barbearia clássica · Sobradinho/DF", H1, lead e CTA latão continuam acima da dobra em 360 e 1280 px. A foto de fundo não compete com o texto, graças ao gradiente. |
| 3 | Estética moderna | 5 | **5** | As fotos escuras e de tom quente combinam com a paleta carvão e latão e quebram a monotonia das seções só de texto. O ritmo alterna texto, foto e cards sem clichê vintage. |
| 4 | Coerência com o design | 5 | **5** | Tokens, tipografia e estrutura mantidos. As fotos entraram nos lugares previstos em `imagens.md` (hero opção A, avatares 1:1). A foto do Sobre e o gradiente invertido no mobile são divergências pequenas e justificadas. |
| 5 | Qualidade do texto | 5 | **5** | A copy foi atualizada para Sobradinho/DF de forma natural ("na Quadra 11 de Sobradinho/DF"). Não há placeholders visíveis, e o aviso de demonstração é claro. O comentário desatualizado do T12 não aparece na página, então não pesa aqui. |
| 6 | Imagens e assets | 4 | **4** | Grande avanço: as fotos estão aplicadas com proporção correta (`object-fit`, `aspect-ratio`, `object-position` ajustado), com `width`/`height`, lazy e `alt` adequados. Continua com 4 pelas pendências de publicação: caminhos `../assets/` (T4) e a falta de `og:image`, que mantém a prévia no WhatsApp só com texto, embora agora já exista foto para criá-la. |
| 7 | Experiência mobile | 4 | **4** | Sem rolagem horizontal, menu operável, hero legível sobre a foto e boa ordem de leitura. Não chega a 5 por arestas visíveis: o botão do CTA final quebra em 2 linhas em 360 px ("Agendar pelo / WhatsApp"), e em 320 px os outros 3 também quebram (T10). Em 320 px, o horário do hero quebra dentro do intervalo "08:00– / 12:00" (T13). T8 e T9 continuam abertos. |

**Média: 33 / 7 = 4,71.**

### Correções obrigatórias

Nenhuma.

### Correções recomendadas (ressalvas da aprovação)

**Rápidas (poucos minutos cada, sem risco de regressão):**
1. **[T12] Comentário desatualizado** em `index.html:406`. Resultado esperado: `<!-- Dados reais (dados-negocio.md) -->`, sem mencionar número de teste.
2. **[T13] Horários quebrando no meio do intervalo** em `index.html:125` (hero) e `:491` (rodapé). Resultado esperado: em 320 px, "Seg a Sex 08:00–18:00" e "Sáb 08:00–12:00" nunca se partem. Basta envolver cada intervalo em `<span class="nowrap">` (a classe já existe).
3. **[T10] Botões "Agendar pelo WhatsApp" em 2 linhas no mobile** (`styles.css:297-300` e `:1142-1152`). Resultado esperado: em 360 px, o botão do CTA final cabe em 1 linha (cerca de 58 px de altura), e em 320 px os 4 botões ficam em 1 linha sem transbordar. Sugestão: abaixo de 400 px, padding lateral de `.btn--large` entre 20 e 24 px e de `.cta-final` entre 16 e 20 px. Se ainda não couber em 320 px, usar `white-space: nowrap` com fonte um pouco menor.
4. **[T9] Alvo de toque do logo abaixo de 360 px** (`styles.css:391-400`). Resultado esperado: link do logo com pelo menos 44 x 44 px em 320 px (por exemplo, `min-width: 44px`).

**Médias (exigem teste de teclado ou em navegador comum):**
5. **[T8] Ciclo de foco no menu aberto** (`script.js:55-60`). Resultado esperado: Tab depois de "Fechar menu" volta ao primeiro elemento, e Shift+Tab no primeiro vai para "Fechar menu".
6. **[T11] Foco no mapa**. Conferir num navegador comum se o embed mostra foco visível. Se não mostrar, dar `tabindex="-1"` ao iframe (os links "Abrir no Google Maps" e "Como chegar" já cobrem a função) ou incluir um link "Pular mapa".
7. **[Opcional, desempenho]** Versão de cerca de 800 px em WebP de `hero.jpg` para o mobile (economia de cerca de 100 KB no LCP).
8. **[T7]** Fontes locais e remoção de pesos não usados.

### Pendências antes de publicar (técnicas, dependem de decisões do usuário)

- **T4**: definir a raiz publicada, ou copiar `assets/` para `site/assets/` e ajustar os 14 caminhos (HTML e `url()` do CSS). Sem isso, o hero perde a foto de fundo.
- **T3/T6**: criar `og:image` 1200x630 (pode partir de `hero-wide.jpg` com o brasão) e preencher `og:url`, `canonical` e `url` no JSON-LD quando houver domínio.
- Conferir o mapa renderizado e o menu mobile num navegador comum e num iPhone (Safari).

### Pendências para o usuário

- **Fotos reais** da equipe, do ambiente e dos clientes (com autorização de uso de imagem), para substituir as fotos de banco (CC0). A foto do hero pode continuar, se o usuário gostar, ou ser trocada por uma da própria barbearia.
- **Conteúdo real**: nomes e especialidades da equipe, preços e durações (revisar junto o `priceRange` do JSON-LD) e depoimentos reais. Quando tudo for real, remover o aviso "Site de demonstração" do rodapé e os selos "Exemplo".
- **Logotipo definitivo**, se houver.
- **Domínio e hospedagem**, que afetam T4, `og:url` e `canonical`. Nada será publicado sem confirmação.
