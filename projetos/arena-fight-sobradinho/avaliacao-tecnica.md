# Avaliação técnica: Arena Fight Sobradinho (etapa 5)

Data: 2026-11-15. Arquivos avaliados: `site/index.html` (757 linhas), `site/styles.css` (733), `site/script.js` (156), comparados com `design.md`.

> **Veredito atual (reavaliação, ciclo 1): APROVADO COM RESSALVAS.** Ver a seção "Reavaliação — ciclo 1" ao final. O texto abaixo registra a 1ª avaliação.

## Veredito (1ª avaliação): REPROVADO

Há 1 bloqueante. Em celular e tablet (360 e 768 px), a página fica mais larga que a tela, e o botão do menu e a barra de CTA fixa vão parar fora da área visível. A correção é de uma linha de CSS e foi testada: com ela, a largura volta a 360 px e o menu funciona por completo. Fora isso, o site está sólido. Os demais achados são importantes ou menores.

Contagem: **1 bloqueante, 2 importantes, 13 menores** (6 técnicos e 7 de copy/fatos).

## Método

- Renderizei a página no Chrome headless via DevTools Protocol, com emulação de dispositivo em 360×740 e 768×1024 (modo mobile, respeitando o meta viewport) e em 1440×900 (desktop).
- Medi largura do layout, áreas de toque, bytes transferidos (sem cache, rolando a página toda para carregar os lazy), teclado no menu mobile e `prefers-reduced-motion: reduce` emulado.
- Medi o contraste do hero sobre a foto real: tirei screenshots com o texto oculto e calculei a luminância do fundo dentro da caixa de cada texto, no pior pixel e no percentil 95.
- Os demais contrastes saem da fórmula de luminância relativa (WCAG 2.1).
- Fiz um parser do HTML para checar tags balanceadas, IDs duplicados, âncoras, caminhos de assets e alt/dimensões de imagens. O JSON-LD foi validado com `json.loads`.
- Lighthouse não foi executado. Métricas de tempo (LCP/CLS) **não medidas**; as de peso e de requisições foram medidas.

## Achados

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| B1 | Responsividade / A11y | `styles.css:478-482` + `index.html:359-427` (`<span class="sr-only">` nas células da grade) | Os `.sr-only` têm `position:absolute`, mas nenhum ancestral posicionado dentro de `.table-wrap`. Por isso escapam do contêiner rolável e esticam o documento. **Medido:** em 360 px, a largura do layout vai a **887 px** (em 768 px, a 899 px). Header e `.cta-bar` fixos esticam junto: o botão do menu fica em x=831–879 (fora da tela, ver screenshot) e o texto da barra CTA sai do centro visível. O `overflow-x:hidden` do `body` não impede isso no mobile (iOS Safari e Chrome Android). Sem acesso visível à navegação, a página fica quebrada no celular. Removendo os `.sr-only` da tabela, a largura volta a 360. | **Bloqueante** | Adicionar `position: relative;` em `.table-wrap` (styles.css:478). **Testado:** com essa linha, `innerWidth` = `scrollWidth` = 360, e o menu abre, prende o foco e fecha com Esc devolvendo o foco ao botão. Alternativa: `.grade td { position: relative; }`. |
| I1 | SEO | `index.html:14`, `index.html:31` | `og:image` e o `image` do JSON-LD usam caminho relativo (`../assets/og-image.png`). Open Graph e schema.org exigem URL absoluta, então a prévia no WhatsApp e nas redes sai sem imagem. Já está comentado como PLACEHOLDER, mas impede a publicação correta. | Importante | Ao publicar, trocar por `https://<dominio>/assets/og-image.png` e incluir `og:url`, `<link rel="canonical">` e `"url"` no JSON-LD (que hoje não tem `url`). |
| I2 | Publicação | `index.html:14,17,61,95-98,...`; `styles.css:661` | Todos os assets são referenciados como `../assets/`, fora da pasta `site/`. Se só `site/` for publicada como raiz do servidor, todas as imagens, o favicon e o padrão do CTA final dão 404. Localmente, por `file://`, funciona. É a mesma convenção do projeto anterior (barbearia-navalha). | Importante | No deploy, publicar a pasta do projeto inteira (com `site/` e `assets/`) ou copiar `assets/` para dentro de `site/` e trocar `../assets/` por `assets/`. |
| M1 | Movimento reduzido | `styles.css:728-733` | O reset `*, *::before, *::after { transition-duration: 0s }` tem especificidade 0, e o shorthand `transition` das classes o sobrescreve. **Medido com reduce emulado:** `.btn` mantém 0,15 s, a `.cta-bar` mantém 0,25 s de deslize (`translateY(100%)`) e o `.faq-ico` mantém 0,25 s de rotação. Revelação e animação do hero estão corretamente desligadas. Não viola o AA (o 2.3.3 é AAA), mas contraria o design. | Menor | Usar `transition-duration: 0.01ms !important; animation-duration: 0.01ms !important;` no bloco reduce, ou zerar explicitamente `.cta-bar`, `.faq-ico` e `.nav-list a::after`. |
| M2 | Contraste | `styles.css:516` | O filtro da grade aplica `opacity:.35` às aulas não filtradas, que continuam sendo links ativos. Contraste resultante: nome **3,05:1** e nível **1,93:1** (abaixo de 4,5:1). | Menor | Subir a opacidade para cerca de 0,55 ou esconder as células filtradas (`visibility:hidden` com texto "sem aula" para leitor de tela). |
| M3 | Toque | `styles.css:642` | `.contact-list .text-link` tem `min-height: 32px`. **Medido:** WhatsApp 210×32 e e-mail 274×32. Passa no WCAG 2.5.8 (24 px), mas fica abaixo dos 44 px do checklist do projeto. Os links "FAQ" do header e do rodapé medem 29–33 px de largura (texto curto; passa nos 24 px). | Menor | Remover a sobrescrita de 32 px (o `.text-link` base já tem 44 px). |
| M4 | Links | `index.html:740-742` | Redes sociais com `href="#"` levam ao topo da página. Estão rotuladas como exemplo, mas são links mortos. | Menor | Pôr os links reais ou remover a lista até existir perfil. |
| M5 | Robustez JS | `script.js:73` | `desktopMQ.addEventListener('change', …)` dá erro no Safari < 14. O erro interrompe o resto do script, e como `.js .reveal` já começou com `opacity:0`, as seções com `.reveal` ficariam invisíveis. O público afetado hoje é pequeno, mas a consequência é sumir conteúdo. | Menor | Usar `desktopMQ.addEventListener ? desktopMQ.addEventListener('change', fn) : desktopMQ.addListener(fn)`. |
| M6 | Desempenho / privacidade | `index.html:18-20` | Google Fonts externo: 2 hosts e 3 arquivos woff2 por página. Já tem `display=swap` e `preconnect` (ok). A requisição a terceiros envia o IP do visitante ao Google (ponto de atenção para a LGPD). | Menor | Opcional: hospedar Barlow Condensed e Inter localmente (woff2 com subset latin). |
| C1 | Fatos: Jiu-Jitsu | `index.html:214` | "Arte desenvolvida no Brasil para a luta no chão" é impreciso sem o qualificador. O jiu-jitsu (jujutsu) é japonês. O que foi desenvolvido no Brasil é o **Jiu-Jitsu brasileiro**, a partir do judô/jiu-jitsu ensinado por Mitsuyo Maeda e adaptado pela família Gracie. O tema não está coberto por `pesquisa.md`. O resto da linha está correto: guarda, raspagens, passagens, finalizações, com e sem quimono (no-gi). | Menor | "Jiu-Jitsu brasileiro: desenvolvido no Brasil a partir do judô e do jiu-jitsu japonês, com foco na luta no chão…". |
| C2 | Fatos: Wrestling | `index.html:193,196` | "Estilos livre e greco-romano" afirma que a escola ensina os dois. O greco-romano proíbe ataques abaixo da cintura, então "Quedas (double e single leg)" vale só para o livre. A descrição dos estilos está correta (pesquisa.md:97), mas ensinar os dois é dado do negócio, ainda não confirmado. "Uma das bases mais valorizadas no MMA" é opinião atenuada; aceitável. | Menor | Confirmar com o cliente, ou reescrever: "Base no estilo livre, com clinch e projeções do greco-romano". |
| C3 | Copy sem marcação | `index.html:653` | "Todas as turmas são mistas" é política do negócio sem o selo "(exemplo)". `pesquisa.md:116` pede para confirmar. O fato "livre feminino olímpico desde 2004" está correto (Atenas 2004). | Menor | Acrescentar "(exemplo: confirmar)" ou confirmar com o cliente. |
| C4 | Copy sem marcação | `index.html:301,306,316` | "Um professor dedicado para cada uma das quatro modalidades", "Tatame e equipamentos higienizados, sparring sempre supervisionado" e "Condicionamento integrado às aulas" são promessas do negócio sem confirmação nem selo de exemplo (design.md:567 pede copy sem afirmações inventadas). | Menor | Confirmar na entrevista ou marcar como exemplo. |
| C5 | Coerência | `index.html:311` vs `index.html:359-425` | "Turmas por nível: iniciante, intermediário e avançado" contradiz a grade, em que Karatê, Jiu-Jitsu e parte do Wrestling/Muay Thai são "Todos os níveis". Só o Muay Thai tem iniciante e avançado separados. | Menor | Ajustar o texto ("Turmas separadas por nível em Muay Thai e Wrestling; nas demais, o professor adapta ao nível") ou a grade de exemplo. |
| C6 | Coerência | `index.html:158` | Karatê "Para quem é: Iniciantes de todas as idades", mas a única turma infantil é de 7 a 13 anos (linhas 395, 645). | Menor | "Iniciantes a partir de 7 anos…". |
| C7 | Copy / prova | `index.html:126`, `index.html:449` | "1ª aula grátis" aparece como fato sem selo. O briefing define a aula grátis como objetivo, mas a entrevista ainda pergunta "A aula experimental é gratuita?" (entrevista.md:60). | Menor | Manter se o cliente confirmar na entrevista; senão, marcar como exemplo. |

Factualmente corretas (verificadas): Muay Thai como "arte das oito armas" (socos, cotoveladas, joelhadas e chutes) e o clinch (pesquisa.md:84-85). Karatê com kihon, kata e kumite (pesquisa.md:92). Wrestling livre e greco-romano como estilos olímpicos e o livre feminino desde 2004 (pesquisa.md:97). Terminologia de Jiu-Jitsu (guarda, raspagem, passagem, finalização, no-gi). Não há títulos, campeões, número de alunos nem notas inventados. Crédito do rodapé "Unsplash e Pexels" confere com imagens.md.

## Métricas (medidas)

| Métrica | 360 px | 768 px | 1440 px |
|---|---|---|---|
| Largura do layout (deveria ser = viewport) | **887** (com a correção B1: 360) | **899** | 1440 |
| Bytes transferidos (página toda rolada, sem cache) | 583 KB (com o bug; com a correção, carga inicial de 350 KB) | 541 KB | 737 KB |
| Requisições | 19 | 17 | 18 |
| Hosts externos | fonts.googleapis.com, fonts.gstatic.com | idem | idem |
| Imagem do hero servida | hero-treino-mobile.webp | hero-treino-960.webp | hero-treino-1440.webp |
| H1 (tamanho calculado) | 44,16 px | 67 px | 92 px |
| Fontes carregadas | sim | sim | sim |

Arquivos: index.html 74 KB (inclui sprite SVG inline e cerca de 40 links wa.me repetidos), styles.css 34 KB, script.js 5 KB. Pasta `assets/fotos` com 2,5 MB no disco (as variantes não baixam juntas).

**Contraste do hero sobre a foto real** (pior pixel / p95 do fundo):
- 360 px: eyebrow 6,63 / 7,48; H1 7,60 / 8,49; "MMA" em `#F87171` 3,87 / 4,03 (texto grande de 44 px/800, que exige 3:1: passa); lead 13,46; logo 7,55.
- 768 px: todos ≥ 12,4; "MMA" 5,87.
- 1440 px: todos ≥ 9,66; "MMA" 6,23; links da navegação sobre a foto 10,06 / 11,04.

**Contraste das combinações de tokens** (fórmula WCAG): `#F5F5F4` sobre bg/surface/surface-2 = 17,68 / 16,24 / 14,35. `#A1A1AA` = 7,52 / 6,91 / 6,11. `#F87171` = 6,97 / 6,40 / 5,66. Branco sobre `#DC2626` = 4,83; sobre `#B91C1C` = 6,47. `#DC2626` sobre bg/surface = 3,99 / 3,67, usado só em números ≥ 40 px e em elementos de UI: ok. Borda `#71717A` = 3,99 / 3,67, ok para UI (3:1). Selo âmbar sobre o próprio fundo translúcido ≥ 7,17. Anel de foco branco sobre bg = 19,28 e sobre vermelho = 4,83.

**Teclado (360 px, com a correção B1 aplicada no teste):**
- Ordem de Tab: skip link, logo, botão do menu, chips do hero.
- Ao abrir o menu: `aria-expanded="true"`, rótulo "Fechar menu", foco em "Modalidades", `body` com `overflow:hidden` e a barra CTA oculta.
- O Tab circula entre os 7 links, o CTA e o botão; Shift+Tab também funciona.
- Esc fecha o menu e devolve o foco ao botão.

## Itens verificados sem problema

- HTML: tags balanceadas, sem IDs duplicados, todas as âncoras internas existem, todos os caminhos de assets existem (inclusive srcset), `lang="pt-BR"`, `<title>`, `meta description`, `viewport` e `theme-color`.
- Um único `<h1>` e hierarquia h1 → h2 → h3 sem saltos (o rodapé usa h2).
- JSON-LD `ExerciseGym` é JSON válido, com endereço, horários, `areaServed` e `knowsAbout` com as 4 modalidades, sem `aggregateRating` nem `geo` (conforme design.md:369). Dados fictícios estão marcados como exemplo.
- Open Graph com `og:title`, `og:description`, `og:type`, `og:locale` e dimensões da imagem. Título e descrição com termos locais e as 4 modalidades.
- Imagens: todas com `alt` e `width`/`height`. Hero, avatares e logo dentro de link rotulado usam `alt=""` de forma adequada.
- Hero com `fetchpriority="high"` e sem lazy; todas as demais imagens com `loading="lazy"` e `decoding="async"`; `<picture>` com WebP e fallback JPG, recortes para mobile e `sizes` coerentes.
- Fontes com `display=swap` e `preconnect`. Script com `defer`. Classe `no-js`/`js` com navegação de fallback sem JS.
- Acessibilidade:
  - skip link funcional e `main` com `tabindex="-1"`;
  - `:focus-visible` global com anel branco de 3 px;
  - ícones com `aria-hidden` e `focusable="false"`;
  - links que abrem o WhatsApp avisam "abre em nova aba", e o rótulo contém o texto visível;
  - tabela com `caption`, `th scope` e `abbr`, região rolável focável e rotulada;
  - células vazias com "sem aula" para leitor de tela;
  - filtro com `aria-pressed`;
  - FAQ com `<details>/<summary>` nativos.
- `prefers-reduced-motion`: revelação ao rolar, entrada do hero, hover dos planos e `scroll-behavior` desligados (medido).
- Responsividade: breakpoints em 480, 768 e 1024 px, tipografia com `clamp()`, `img { max-width:100% }`. Em 1440 não há transbordo (o `.hero-deco` sai 12 px, mas é cortado pelo `overflow:hidden` do hero). Barra CTA fixa compensada com `padding-bottom` e `safe-area-inset`.
- Áreas de toque: botões ≥ 44 px, chips de 44 px, botão do menu 48×48, links de navegação 44–56 px de altura, redes sociais 44×44.

---

## Reavaliação — ciclo 1

Data: 2026-11-15. Arquivos: `site/index.html` (761 linhas), `site/styles.css` (746), `site/script.js` (162), `site/assets/` (49 arquivos). Entradas: este relatório, `avaliacao.md` e `site/CHANGELOG.md` (iteração 2).

### Veredito: APROVADO COM RESSALVAS

O bloqueante B1 foi corrigido e medido: não há transbordo horizontal em 360, 768 e 1440 px. Todos os achados M1 a M5 e C1 a C7 foram resolvidos. I2 foi resolvido, e I1 continua como placeholder aceitável enquanto não houver domínio. Não encontrei regressão. Sobram 1 pendência importante de publicação (I1) e 2 achados menores novos (M7 e C8). Nenhum deles impede a aprovação técnica.

Contagem atual: **0 bloqueantes, 1 importante (I1, pendente de publicação), 3 menores** (M6, que é opcional e vem da avaliação anterior, mais M7 e C8, novos).

### Método

- Chrome headless 157 controlado via DevTools Protocol, com script Node próprio.
- Emulação de dispositivo em 360×740 e 768×1024 (mobile, com toque) e em 1440×900 (desktop). Em cada largura, rolei a página inteira para carregar os lazy antes de medir.
- Contraste do hero: medi sobre a foto real. Oculto o texto, tiro um screenshot e calculo a luminância do fundo dentro da caixa de cada linha de texto, no pior pixel e no percentil 95.
- Menu testado por teclado (Enter, Tab, Shift+Tab, Esc) e clique em link.
- `prefers-reduced-motion: reduce` emulado em 360 e 1440 px.
- Validação estática com parser HTML próprio: tags, IDs, âncoras, `<use>`, caminhos e srcset, alt e dimensões, títulos, `!important` e JSON-LD com `json.loads`. Comparei `site/assets/` com `assets/` usando `diff -rq`.
- Lighthouse não foi executado. LCP e CLS **não medidos**.

### Situação dos achados anteriores

| ID | Situação | Evidência |
|---|---|---|
| B1 | **Corrigido** | `styles.css:479` tem `position: relative` em `.table-wrap`. Medido: `scrollWidth` = `innerWidth` em 360 (360), 768 (768) e 1440 (1440), antes e depois de rolar a página. Nenhum elemento fora da tela, exceto a tabela rolável e o hero, que é recortado. O botão do menu fica em x=304–352 (360 px) e x=700–748 (768 px). A barra CTA ocupa x=0–360, com botão em x=20–340. |
| I1 | Pendente, aceitável | `index.html:13-17,34`: `og:image` e o `image` do JSON-LD seguem relativos. O comentário PLACEHOLDER traz `og:url`, `canonical` e `url` prontos. Não impede a aprovação técnica, mas precisa ser resolvido no deploy. |
| I2 | **Corrigido** | 0 ocorrências de `../assets` em HTML e CSS. As 50 referências (src, srcset, favicon, `url()` do CSS) existem em `site/assets/`. Os arquivos em comum com `assets/` são idênticos (`diff -rq` sem diferenças). Os 10 que só existem na origem não são referenciados, porque foram inlinados no sprite. |
| M1 | **Corrigido** | Com reduce emulado, a transição fica em 0s em `.btn`, `.cta-bar` (inclusive `.is-hidden`), `.faq-ico`, `.aula`, `.mod-media img`, `.chip`, `.site-header`, `.plan`, `.prof-media img` e `.nav-list a::after` (1440). Animação do hero: `none`. `.reveal` com opacidade 1. `scroll-behavior: auto`. Nenhum `!important`. |
| M2 | **Corrigido** | `styles.css:517-520`. Com o filtro "Karatê" ativo, as 24 células esmaecidas ficam com opacidade 1 no texto. Contraste mínimo: nome 6,11:1 e nível 6,11:1 (eram 3,05 e 1,93). |
| M3 | **Corrigido** | Sem `min-height: 32px`. Nenhum alvo fora da tabela tem altura abaixo de 44 px. Células `.aula` com no mínimo 44 px de altura. Os links "FAQ" (29–33×44) seguem como antes e passam no 2.5.8. |
| M4 | **Corrigido** | Nenhum `a[href="#"]`. As redes viraram `span.social-off` com `role="img"`, `aria-label` e a nota "Perfis a definir (exemplo)" (`index.html:742-747`). |
| M5 | **Corrigido** | `script.js:77-81` faz fallback para `addListener`. Nenhuma exceção JS em 5 carregamentos. |
| C1 | **Corrigido** | `index.html:217`: "Jiu-Jitsu brasileiro: desenvolvido no Brasil a partir do judô e do jiu-jitsu japonês". |
| C2 | **Corrigido** | `index.html:196`: "Base no estilo livre, com clinch e projeções do greco-romano (exemplo: confirmar)", coerente com double e single leg. |
| C3 | **Corrigido** | `index.html:656`: "todas as turmas são mistas (exemplo: confirmar)". |
| C4 | **Corrigido** | `index.html:304,309,319`: os três textos levam "(exemplo: confirmar)". |
| C5 | **Corrigido** (resíduo em C8) | `index.html:128` e `:314` reescritos de acordo com a grade. |
| C6 | **Corrigido** | `index.html:161`: "Iniciantes a partir de 7 anos". |
| C7 | **Corrigido** | `index.html:129`, `:452` e `:664` com "(exemplo: confirmar)". O H2 do CTA final (`:705`) e os itens "Aula experimental grátis" dos planos ficam sem selo, como `avaliacao.md` permite (são o objetivo do briefing). Continua como pendência de confirmação. |
| Hero clareado | **Aplicado, sem perda de AA** | A partir de 768 px, `filter: brightness(1.25) saturate(1.05)` (medido no computed style) e overlay mais leve à direita (`styles.css:20,339`). Contrastes medidos abaixo, todos dentro do AA. |

### Achados novos

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| M7 | Navegação por âncora | `styles.css:74` + `styles.css:136` (e `:398` em `.mod-card`) | `scroll-padding-top` no `html` e `scroll-margin-top` nas seções somam os dois deslocamentos. **Medido:** ao tocar em "Planos" no menu (360 px), o topo da seção para em **160 px**, quando deveria ficar em cerca de 80 px (header de 64 + 16). Sobra uma faixa de 80 px do fim da seção anterior. Não quebra nada, mas é inconsistente. Já existia no ciclo anterior; não é regressão. | Menor | Manter só um dos dois: remover o `scroll-padding-top` do `html` ou os `scroll-margin-top` de `.section[id]`, `.hero[id]` e `.mod-card`. |
| C8 | Coerência (resíduo de C5) | `index.html:464` | O plano "Foco" ainda lista "Turmas por nível" sem qualificador, o que contradiz a grade (Karatê e Jiu-Jitsu são "Todos os níveis") e o texto corrigido em `:314`. | Menor | Trocar por "Turmas por nível em Muay Thai e Wrestling" ou por "Aulas adaptadas ao seu nível". |

M6 (fontes do Google) continua igual: opcional e menor.

### Métricas (reavaliação)

| Métrica | 360 px | 768 px | 1440 px |
|---|---|---|---|
| `innerWidth` / `scrollWidth` (depois de rolar tudo) | 360 / 360 | 768 / 768 | 1440 / 1440 |
| Elementos fora da viewport (exceto tabela e hero) | 0 | 0 | 0 |
| Botão do menu (x, tamanho) | 304–352, 48×48 | 700–748, 48×48 | oculto (nav desktop) |
| Barra CTA | 0–360, 77 px de altura | 0–768 | `display:none` |
| Hero servido | hero-treino-mobile.webp | hero-treino-960.webp | hero-treino-1440.webp |

**Contraste do hero sobre a foto real** (pior pixel / p95):

| Texto | 360 px | 768 px | 1440 px | Mínimo exigido |
|---|---|---|---|---|
| Eyebrow (13 px/700) | 5,76 / 6,49 | 12,72 / 13,11 | 13,35 / 13,66 | 4,5 |
| H1 | 6,51 / 6,93 | 11,56 / 13,13 | 5,59 / 8,45 | 3 (texto grande) |
| "MMA" em `#F87171` (44–92 px/800) | 3,51 / 3,62 | 5,38 / 5,73 | 5,90 / 6,72 | 3 (texto grande) |
| Lead | 12,58 / 13,36 | 10,14 / 13,00 | 7,96 / 10,59 | 4,5 |
| Microcopy | 19,25 | 10,68 / 12,20 | 13,33 / 13,81 | 4,5 |
| Chips | 13,33 / 13,65 | 8,90 / 9,37 | 12,43 / 12,78 | 4,5 |
| Links da navegação sobre a foto | não se aplica | não se aplica | 7,84 / 8,58 | 4,5 |

O pior caso é o "MMA" em 360 px (3,51:1, texto grande). Ele passa, mas com pouca folga. Em 360 px a foto não recebe filtro (`filter: none`), então clarear o mobile no futuro exige medir de novo.

**Menu mobile (360 px, teclado):**
- Enter no botão abre o menu. Ficam `aria-expanded="true"`, rótulo "Fechar menu", foco em "Modalidades", `body` com `overflow: hidden`, barra CTA oculta e nav com `display: flex`.
- O Tab percorre os 7 links, o CTA e o botão, e volta a "Modalidades" (foco preso). Shift+Tab também funciona.
- Esc fecha o menu e devolve o foco ao botão.
- Clicar em um link fecha o menu e rola até a seção (ver M7).

**Barra CTA (360 px):** oculta no topo, com o CTA do hero visível. Visível no meio da página (y=1800), ocupando x=0–360. Oculta no fim, com o rodapé e o CTA final visíveis. `body` com `padding-bottom` de 72 px.

**Tamanho:** index.html 74,7 KB, styles.css 34,9 KB, script.js 5,7 KB. `site/assets/` tem 2,9 MB no disco, mas as variantes não baixam juntas. Bytes transferidos não foram medidos de novo, porque o conjunto de imagens servidas não mudou.

### Itens verificados sem problema (reavaliação)

- HTML válido no parser: tags balanceadas, sem IDs duplicados, todas as âncoras e todos os `<use href>` resolvem, 1 `<h1>`, nenhum salto na hierarquia de títulos e todas as imagens com `alt`, `width` e `height`.
- JSON-LD válido. Nenhum `!important` no CSS. Nenhuma exceção JS.
- Os comentários PLACEHOLDER do `<head>` não contêm `--` e não quebram o documento.
- O foco visível, o skip link, a tabela acessível, o `aria-pressed` do filtro e os alvos de toque de 44 px ou mais (fora da tabela) seguem como na 1ª avaliação.
