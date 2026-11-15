# CHANGELOG: Arena Fight Sobradinho

## Iteração 2 (etapa 7, ciclo 1 de 3), 2026-11-15

Correções de `avaliacao.md` (ITERAR) e `avaliacao-tecnica.md`.

### Obrigatórias
- **B1 (bloqueante):** `position: relative` em `.table-wrap`. Os `.sr-only` das células da grade não escapam mais do contêiner rolável. Medido no Chrome headless (CDP, emulação mobile): `scrollWidth` = `innerWidth` em 360 px (360) e 768 px (768). O botão do menu fica visível (x 304–352 em 360 px).
- **C1:** Jiu-Jitsu passou a ser "Jiu-Jitsu brasileiro: desenvolvido no Brasil a partir do judô e do jiu-jitsu japonês, com foco na luta no chão…".
- **C2:** Wrestling passou a ser "Base no estilo livre, com clinch e projeções do greco-romano (exemplo: confirmar)", coerente com double e single leg.
- **C5:** a faixa de prova agora diz "Do zero ao competidor, no seu ritmo". O diferencial "Turmas por nível" diz "Turmas por nível em Muay Thai e Wrestling; nas demais, o professor adapta a aula ao seu nível (exemplo)", de acordo com a grade.
- **C6:** Karatê, "Para quem é", agora diz "Iniciantes a partir de 7 anos".
- **C3/C4/C7:** recebem "(exemplo: confirmar)" as turmas mistas (FAQ), o professor dedicado, a higienização e o sparring supervisionado, o condicionamento integrado, "1ª aula grátis" (faixa de prova), "A primeira aula é por nossa conta" (planos) e o "Sim" do FAQ sobre a gratuidade. Os CTAs "aula experimental grátis" ficaram como estão, porque são o objetivo do briefing. Se a gratuidade não for confirmada, todos precisam ser revistos.

### Recomendadas
- **M1:** no bloco `prefers-reduced-motion: reduce`, os tokens `--t-fast` e `--t-base` vão a `0s`, e `.cta-bar`, `.reveal` e a entrada do hero ficam com `transition/animation: none`. Medido com reduce emulado: `.btn`, `.cta-bar`, `.faq-ico`, `.aula` e as imagens dos cards ficam todos em `0s`. Usei o override de tokens no lugar do `!important` sugerido, porque a regra do projeto proíbe `!important`.
- **M2:** troquei a opacidade das aulas filtradas por cor. O nome fica em `--c-text-muted`, com peso 400, o monograma a 35% e a borda esquerda cinza. Contraste mínimo do texto: 6,1:1 sobre surface-2. Com opacidade, o nível ficaria abaixo de 4,5:1 em qualquer valor que ainda servisse para esmaecer (0,6 dá 3,1:1).
- **M3:** removido o `min-height: 32px` de `.contact-list .text-link`. Medido: 44 px e 53 px.
- **M4:** as redes sociais deixaram de ser links (`href="#"`). Viraram `<span class="social-off" role="img">` com `aria-label` "(exemplo: perfil a definir)", borda tracejada e a nota "Perfis a definir (exemplo)". Nenhum `a[href="#"]` restou na página.
- **M5:** `matchMedia` tem fallback para `addListener` (Safari < 14).
- **Hero mais claro:** a partir de 768 px, a foto ganhou `filter: brightness(1.25) saturate(1.05)` e o overlay horizontal ficou mais leve à direita (0,94 → 0,84 a 45% → 0,55 a 62% → 0,12). Uma faixa escura no topo (0,5 → 0 em 160 px) protege a navegação. No mobile, o topo do overlay foi de 0,55 para 0,50. Contraste medido sobre a foto real (pior pixel, com o texto oculto):
  - 360 px: eyebrow 5,94, H1 6,70, "MMA" 3,52 (texto grande, 3:1), lead 12,6;
  - 768 px: todos ≥ 7,1, "MMA" 5,38;
  - 1440 px: eyebrow 7,64, H1 5,66, "MMA" 5,86, lead 6,34, microcopy 5,67, navegação 7,81.

### Importantes de publicação
- **I1 (pendente, sem domínio):** `og:image` e o `image` do JSON-LD seguem relativos (`assets/og-image.png`). No `<head>` há um comentário PLACEHOLDER com o `og:url` e o `canonical` prontos para ativar, e a instrução de incluir `"url"` no JSON-LD quando houver domínio.
- **I2 (feito):** os 48 arquivos referenciados foram copiados de `../assets/` para `site/assets/` (mesma estrutura). Os caminhos em `index.html` e `styles.css` agora são `assets/…`, e a pasta `site/` pode ser publicada sozinha como raiz. A pasta `projetos/arena-fight-sobradinho/assets/` continua sendo a origem: se um asset mudar lá, copie de novo.

### Validação
- Tags balanceadas, sem IDs duplicados, 1 `<h1>`, todas as âncoras e `<use>` resolvem, 48 referências de assets existem em `site/assets/` e não há `!important`.
- Chrome headless em 360, 768 e 1440 px, sem rolagem horizontal. Em 1440 px, `scrollWidth` 1425 por causa da barra de rolagem.

### Pendências
- Confirmar com o cliente: gratuidade da aula experimental, turmas mistas, estilos de Wrestling, professor por modalidade, política de sparring/higiene, condicionamento integrado.
- I1: domínio para `og:image`, `og:url`, `canonical` e `url` do JSON-LD.
- M6 (opcional, não feito): hospedar as fontes localmente.
- Demais pendências da iteração 1 continuam (dados reais, coordenadas para o mapa, perfis das redes, fotos de equipe e depoimentos).

## Iteração 1 (etapa 4), 2026-11-15

### Feito
- `index.html`, `styles.css` e `script.js` criados do zero, em HTML/CSS/JS puro, sem dependências. Abre com duplo clique (`file://`). Os assets são referenciados em `../assets/`, sem cópia.
- Tokens do `design.md` (2.6) aplicados em `:root`. O site é escuro por padrão, então não há modo claro/escuro alternativo.
- Seções na ordem do design: skip link, header fixo, hero, faixa de prova, modalidades (4 cards com `id` `mod-*`), método + "Sua primeira aula", diferenciais, grade de horários, planos, professores, depoimentos, FAQ, contato, CTA final, rodapé e barra CTA fixa (mobile).
- Fotos sempre com `<picture>` (WebP primeiro e fallback JPG), `width`/`height`, `object-fit: cover` e `loading="lazy"` abaixo da dobra. Hero com recorte mobile 4:5, `fetchpriority="high"` e `alt=""`. Diferenciais com recorte 16:10 (mobile) e 4:5 (≥ 1024px).
- SVG inline: o sprite `icones.svg` vai no topo do `<body>`, junto com os ícones `icone-*.svg` e os monogramas `marca-*.svg`, convertidos em `<symbol>` para `<use>` funcionar via `file://`. O logo mono do rodapé também é inline (`currentColor`). O logo colorido do header continua em `<img>`.
- Dados fictícios marcados com selo âmbar `.badge-exemplo`, com "(exemplo)" no texto e `<!-- EXEMPLO: substituir -->` no HTML.
- Links wa.me (número fictício `5561900000000`) com mensagens por seção, modalidade, kids, FAQ e plano (design 6.1/6.2). Cada célula da grade leva à mensagem da sua modalidade.
- JS: header `.is-scrolled`, menu mobile (Esc, foco preso, retorno de foco, `body` sem rolagem), barra fixa que some com o CTA do hero, o CTA final, o rodapé ou o menu aberto (IntersectionObserver), seção ativa na navegação (`aria-current`), revelação ao rolar e filtro da grade (`aria-pressed` + `.is-dim`). Tudo respeita `prefers-reduced-motion`. Sem JS, a navegação vira uma linha rolável, o filtro fica oculto e a barra fica sempre visível.
- JSON-LD `ExerciseGym` com dados de exemplo, sem `aggregateRating` e sem `geo`.
- Mapa: `mapa-placeholder.svg` (sem coordenadas). Há um comentário no HTML com o iframe a inserir.
- Validação: tags balanceadas, `id`s únicos, 1 `<h1>`, todas as âncoras e `<use>` resolvem, 49 referências de assets existem e não há `!important`. Renderização conferida no Chrome headless a 1440px e a 360px (via iframe), sem rolagem horizontal.

### Divergências do design (com motivo)
- O mini-diagrama "Em pé / Clinch e quedas / Solo" foi omitido, como o design permitia. Os chips de papel no MMA nos cards já transmitem a informação.
- Na grade, as aulas "Integração MMA" e "Sparring MMA" não têm monograma em S11, então usam um marcador textual "MMA" com a mesma forma. O filtro por modalidade as esmaece.
- O botão "Abrir no Google Maps" ficou de fora: o design pede que ele fique oculto até haver endereço real.
- O JSON-LD `FAQPage` (opcional) não foi incluído.
- Abaixo de 480px, o `btn-lg` usa padding horizontal de 16px (em vez de 32px) para o CTA do hero caber melhor em 360px.

### Pendências
- [PLACEHOLDER] Nome real, endereço, WhatsApp, e-mail, redes, horários, grade, valores, professores e depoimentos (entrevista/`dados-negocio.md`).
- [PLACEHOLDER] Coordenadas reais, para trocar o placeholder pelo iframe do Google Maps e adicionar "Abrir no Google Maps"/"Como chegar".
- [PLACEHOLDER] URL absoluta do domínio para `og:image`, para a `image` do JSON-LD e para `og:url`/canonical.
- Links das redes no rodapé estão com `href="#"`, até o usuário informar as redes reais.
- Fotos de professores e depoimentos são ilustrativas: substituir antes de publicar.
