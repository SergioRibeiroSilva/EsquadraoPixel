# Avaliação técnica: Diaconia Catedral Baleia

- Data: 2026-11-15
- Iteração: 1
- Arquivos avaliados: `site/index.html` (773 linhas), `site/styles.css` (1300 linhas), `site/script.js` (251 linhas), `assets/`
- Evidências usadas: `inspecao-visual.md` e `capturas/` (Edge headless via Playwright), `design.md` (tokens e tabela de contraste)

## Veredito

**REPROVADO**: 1 bloqueante, 4 importantes, 8 menores.

O motivo é um único defeito: no celular e no tablet (< 1100px) o menu aberto mostra só o primeiro link (V1 da inspeção). O resto da base está sólido: HTML bem formado, contraste AA em todas as combinações, foco visível, movimento reduzido respeitado, sem rolagem horizontal, sem erro de console. Com T1 corrigido e T2 a T4 resolvidos, o site fica em condição de ser APROVADO.

## Achados

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T1 | Responsividade / A11y (WCAG 2.1.1, 1.4.10) | `styles.css:365-371` + `styles.css:416-429` | O `.cabecalho` tem `backdrop-filter: blur(8px)`, e isso o torna o bloco de referência dos filhos com `position: fixed`. Por isso o `#menu` (`top: var(--header-h); bottom: 0`) mede 65px de altura em vez da tela inteira. Medido pelo inspetor: altura 65px, `scrollHeight` 472px. 5 dos 6 links e o botão do WhatsApp ficam escondidos. Evidência: `capturas/celular-menu-aberto.png`. | **bloqueante** | Opção A (recomendada): passar o desfoque para um pseudo-elemento. Dentro do `@supports`, use `.cabecalho { background: transparent; }` e `.cabecalho::before { content:""; position:absolute; inset:0; z-index:-1; background: rgba(247,243,234,.92); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }`. O `.cabecalho` já cria contexto de empilhamento (`fixed` + `z-index:100`). Opção B (mínima): `body.menu-aberto .cabecalho { -webkit-backdrop-filter:none; backdrop-filter:none; background: var(--cor-creme); }`, colocada depois do bloco `@supports`. O JS já aplica `menu-aberto` (`script.js:57`). Depois, confira em 360px e 768px se o painel ocupa `100vh - header` e se o último item ("Fale com a diaconia") aparece. |
| T2 | Responsividade | `index.html:393-420`, `styles.css:840-857` | Tabela de cultos no celular: o nome quebra palavra por palavra ("Culto / da / manhã") e o dia ocupa 3 ou 4 linhas. A largura útil é de cerca de 272px (360 − 2×20 de margem − 2×24 de padding) para 3 colunas. Evidência: `capturas/celular-agenda-tabela.png`. | importante | Abaixo de 600px, empilhar cada linha: `@media (max-width:599px){ .tabela-cultos tr{display:grid; grid-template-columns:1fr auto; column-gap:var(--sp-3); padding-block:var(--sp-3);} .tabela-cultos tbody th,.tabela-cultos td{padding:0;} .tabela-cultos tbody th{grid-column:1;} .tabela-cultos__dia{grid-column:1;} .tabela-cultos__hora{grid-column:2; grid-row:1 / span 2; align-self:center;} }`. Mudar o `display` pode tirar a semântica de tabela no Safari, então acrescente `role="table"` na `<table>`, `role="row"` nos `<tr>`, `role="rowheader"` nos `<th scope="row">` e `role="cell"` nos `<td>`. O resultado fica assim: nome em negrito na linha 1, dia embaixo e horário à direita. |
| T3 | Estrutura / publicação | `index.html:16, 22, 28, 166, 186-187, 233-234, 239, 258, 356, 363, 370, 438, 450-451, 511-512, 698` | Todos os assets usam `../assets/`, que fica **fora** de `site/`. No `file://` funciona, mas se só a pasta `site/` for publicada como raiz, todas as imagens, o favicon e o og:image quebram. | importante | Copiar `assets/` para `site/assets/` e trocar `../assets/` por `assets/` no `index.html`. Na `styles.css` não há referência a arquivo, só data-URI. Outra saída é registrar no CHANGELOG que a raiz publicada deve ser a pasta do projeto, mas a cópia é mais segura. |
| T4 | SEO / compartilhamento | `index.html:10, 16` | `og:image` é relativo (`../assets/og-image.jpg`): Facebook e WhatsApp exigem URL absoluta e não mostram a prévia. Faltam `og:url` e `<link rel="canonical">` (o comentário da linha 10 cita `og:url`, mas a tag não existe). | importante | Quando houver domínio: `og:image` = `https://<dominio>/assets/og-image.jpg` (o arquivo já está em 1200x630, conferido), `<meta property="og:url" content="https://<dominio>/">` e `<link rel="canonical" href="https://<dominio>/">`. Até lá, manter o placeholder anotado como pendência de publicação. |
| T5 | Conteúdo pendente (pré-publicação) | `index.html:358, 365, 372` | Placeholders visíveis: "[Nome do coordenador da diaconia]", "[Nome do vice-coordenador]", "[Nome do secretário da diaconia]" (V3). Impede a publicação final, mas não é defeito de código. | importante | Trocar pelos nomes reais quando a igreja autorizar. Até lá, uma saída é esconder a seção `#lideranca` ou trocar os cards por uma frase única, como "Coordenação da diaconia: fale com a secretaria" (decisão do redator). |
| T6 | Responsividade | `styles.css:1145, 1158` | O e-mail quebra em "...com." / "br" no celular (V4) por causa de `overflow-wrap: anywhere`. Evidência: `capturas/celular-secao-localizacao.png`. | menor | No `.contato__link` e no `.contato__item dd`, usar `overflow-wrap: break-word` e inserir `<wbr>` depois do `@` no texto do link (`index.html:666`, e também `:737` no rodapé). Assim a quebra cai em "secretaria@" / "catedralbaleia.com.br". |
| T7 | A11y (alvos de toque) | `index.html:608` (links inline do FAQ), `:766` ("CC BY 3.0"), `:747-748` (rodapé) | Alvos menores que 44px medidos pelo inspetor (V5): "Precisa de ajuda?" 138x24, "WhatsApp" 72x24, "CC BY 3.0" 57x21, "Servir" 37x44, "Ajuda" 36x44. Os links inline dentro de frase são isentos no WCAG 2.5.8 (AA, 24px). A meta de 44px vem do checklist do projeto. | menor | Na `.rodape__lista a`, acrescentar `min-width: 44px`. Os links inline podem ficar como estão; se quiser, use `padding-block: .5em` no FAQ. |
| T8 | A11y (WCAG 2.5.3, Rótulo no nome) | `index.html:115, 716` | O texto visível da marca é "Corpo Diaconal / AD Catedral Baleia", mas o `aria-label` é "Corpo Diaconal **da** AD Catedral Baleia, voltar ao início". O "da" inserido quebra a correspondência exata com o texto visível, e quem usa comando de voz ("clicar Corpo Diaconal AD Catedral Baleia") pode não acionar o link. | menor | Trocar por `aria-label="Corpo Diaconal AD Catedral Baleia, voltar ao início"` nos dois links. |
| T9 | A11y (menu mobile) | `script.js:53-68` | Com o menu aberto, a armadilha de foco funciona, mas o `main` e o `footer` continuam acessíveis ao leitor de tela pelo cursor virtual. | menor | Em `abrirMenu()`, aplicar `document.querySelector('main').inert = true` e o mesmo no `.rodape`. Em `fecharMenu()`, voltar para `false`. |
| T10 | Robustez sem JS | `styles.css:412-414` | Sem JavaScript, abaixo de 1100px, `.nav` fica `display:none` e o botão do menu não aparece: a navegação principal some. O rodapé (`index.html:741-752`) ainda tem os links, o que reduz o impacto. | menor | Mostrar `.nav` sem JS com `html:not(.js) .nav { display:block; }` e uma lista simples (estática, abaixo do cabeçalho ou no fluxo). Também é aceitável registrar como limitação conhecida. |
| T11 | SEO (JSON-LD) | `index.html:35-78` | JSON-LD válido (o parse passou), tipo `Church`. Faltam `url` e `image`/`logo`. Publica dados marcados "a confirmar" (CEP, telefone, e-mail, Instagram, horários; ver comentário da linha 34). `openingHoursSpecification` descreve horário de funcionamento, não horário de culto. | menor | Acrescentar `"url": "https://<dominio>/"` e `"image": "https://<dominio>/assets/og-image.jpg"` quando houver domínio. Antes de publicar, remover os campos não confirmados. Para os cultos, trocar `openingHoursSpecification` por `event` (tipo `Event` com `eventSchedule`) ou retirar. |
| T12 | Desempenho | `index.html:233-234, 186-187, 511-512` | Fotos sem `srcset`/`sizes`: o celular baixa a versão de 1200px. O caso mais pesado é `templo-catedral-baleia.webp`, com 147 KB para cerca de 320px exibidos. | menor | Gerar uma versão de 640px de cada foto e usar `srcset="... 640w, ... 1200w" sizes="(min-width:900px) 40vw, 100vw"` no `<source>` e no `<img>`. |
| T13 | A11y (contraste limítrofe) | `styles.css:367, 394-401` | Com o cabeçalho translúcido (92% creme) sobre o hero marinho, o fundo efetivo fica em cerca de `#E4E3DD`. Ali, `.marca__l2` (11px, petróleo) dá **4,53:1**, quase no limite de 4,5. Partes claras do hero desfocadas podem variar o valor. | menor | A Opção A de T1 já resolve se a opacidade do pseudo-elemento subir para `.97`. Outra saída é usar fundo opaco `var(--cor-creme)`. |

### Achados descartados (não são defeitos)
- O `html-validate` aponta 12 vezes `role="list"` redundante em `<ul>`/`<ol>`. É intencional: compensa a perda de semântica no Safari com `list-style:none`. Pode ficar.
- O `html-validate` aponta `tel-non-breaking` em `index.html:661`. É preferência tipográfica, não erro de conformidade. Opcional: `(61)&nbsp;3242&#8209;7119`.
- `onda-hero.svg` esticado: tem `preserveAspectRatio="none"` e é decorativo, então é intencional.

## Lista priorizada para o desenvolvedor

1. **T1** (bloqueante): tirar o `backdrop-filter` do ancestral do `#menu` (pseudo-elemento `::before` ou `body.menu-aberto`). Conferir em 360px e 768px.
2. **T2**: tabela de cultos empilhada abaixo de 600px, com os papéis ARIA de tabela.
3. **T3**: levar os assets para dentro de `site/` (`site/assets/`) e trocar os caminhos `../assets/` por `assets/`.
4. **T4**: preparar `og:url`, `canonical` e `og:image` absoluto (placeholder de domínio documentado no CHANGELOG).
5. **T8 + T9**: `aria-label` da marca e `inert` com o menu aberto (2 linhas cada).
6. **T6 + T7**: `<wbr>` no e-mail e `min-width:44px` nos links do rodapé.
7. **T11 + T12 + T13 + T10**: JSON-LD (`url`, `image`, campos não confirmados), `srcset` nas fotos, opacidade do cabeçalho e navegação sem JS.
8. **T5**: pendência de conteúdo, com redator e usuário (nomes da liderança).

## Métricas

| Métrica | Valor | Fonte |
|---|---|---|
| Rolagem horizontal (360 / 768 / 1440) | não, em todas | inspecao-visual.md |
| Imagens quebradas | 0 de 12 | inspecao-visual.md |
| Erros/avisos de console | 0 | inspecao-visual.md |
| Requisições com falha | 0 | inspecao-visual.md |
| Alvos < 44px (celular) | 8 (ver T7) | inspecao-visual.md |
| Lighthouse | **não medido**: servidor local bloqueado pela permissão do ambiente; o Lighthouse falha com `file://` | inspecao-visual.md |
| Tags balanceadas / IDs duplicados / âncoras internas sem alvo | ok / 0 / 0 | parser Python (medido aqui) |
| html-validate (recommended) | 0 erros de conformidade; 14 avisos de estilo (ver "descartados") | `npx html-validate@8` (medido aqui) |
| JSON-LD | JSON válido | parser Python (medido aqui) |
| Peso do HTML + CSS + JS | 57,2 KB + 40,4 KB + 10,2 KB = 107,8 KB (sem compressão) | `wc -c` |
| Imagens na primeira dobra | hero WebP 32 KB (com preload e `fetchpriority="high"`) + SVGs < 1 KB | `wc -c` |
| Peso total das fotos WebP usadas | 273 KB (hero 32, templo 147, cestas 51, oração 43) | `wc -c` |
| Requisições externas | Google Fonts (1 CSS + woff2 de Lora 500/500i/600/700 e Source Sans 3 400/600/700); iframe do Google Maps (lazy) | index.html:24-26, 684 |
| Dimensões reais × `width/height` | todas batem (hero 1200x1500, templo 1200x750, cestas 1600x900, oração 900x1200, og-image 1200x630) | leitura dos cabeçalhos JPEG/WebP |

### Contraste (fórmula de luminância relativa da WCAG 2.x, calculado aqui)
| Combinação | Razão | Resultado |
|---|---|---|
| Texto #2B3442 sobre creme / branco / água | 11,34 / 12,56 / 10,81 | AAA |
| Marinho #0E2A47 sobre creme / água | 13,16 / 12,55 | AAA |
| Texto suave #5A6472 sobre creme / branco / água / selo | 5,42 / 6,00 / 5,17 / 5,24 | AA |
| Branco sobre marinho / marinho-700 / marinho-900 | 14,57 / 11,64 / 17,21 | AAA |
| Texto claro #C9D6E3 sobre marinho / marinho-900 / card translúcido (#1C3752) | 9,86 / 11,64 / 8,27 | AAA |
| Dourado #D4AF5A sobre marinho / marinho-900 / card translúcido | 7,00 / 8,26 / 5,87 | AA ou mais |
| Marinho sobre dourado / dourado-claro (botões) | 7,00 / 8,64 | AAA |
| Dourado-escuro #7C5E17 sobre creme / branco / água / selo #FBEFCF | 5,46 / 6,05 / 5,21 / 5,29 | AA |
| Petróleo #1F6F78 sobre creme / branco / água (texto, ícones, foco) | 5,26 / 5,83 / 5,02 | AA |
| Erro #A32D2D sobre branco | 7,07 | AAA |
| Borda de campo #7A8494 sobre branco / água (1.4.11) | 3,78 / 3,26 | ≥ 3:1 ok |
| Contorno do botão escuro (branco 70% sobre marinho) | 7,84 | ok |
| Petróleo sobre cabeçalho translúcido no hero (#E4E3DD) | 4,53 | limítrofe (T13) |

O dourado claro #D4AF5A não aparece sobre fundo claro em nenhum ponto: `.eyebrow--escuro`, `.selo-confirmar--escuro` e `--foco-escuro` só aparecem em hero, marinho, CTA e rodapé, conforme `styles.css:136-140, 246-254`.

## Itens verificados sem problema
- **HTML**: `<!DOCTYPE html>`, `lang="pt-BR"`, `charset`, `viewport`, `<title>` e `<meta description>` únicos e descritivos, `theme-color`, favicon SVG.
- **Títulos**: um único `<h1>` (linha 170) e hierarquia h1 > h2 > h3 > h4 sem saltos. O h4 só aparece nos passos, abaixo do h3 "Como dar o primeiro passo". O h3 oculto "Nossos valores" e os h2 do rodapé são coerentes.
- **Semântica**: `header`, `nav` com `aria-label` (Principal e Rodapé), `main#conteudo` com `tabindex="-1"`, `section` com `aria-labelledby`, `footer`, `blockquote` + `cite`, `dl` para contato, `details`/`summary` nativos no FAQ.
- **Links**: todas as âncoras internas existem. Os links externos têm `rel="noopener"` e o aviso "(abre em nova aba)" em texto oculto. Os caminhos de todos os assets referenciados existem em `assets/` (Glob conferido).
- **Imagens**: `alt` descritivo nas fotos de conteúdo, com "(foto ilustrativa)". Decorativas com `alt=""` e `aria-hidden`. Todas com `width`/`height`, e `loading="lazy"` abaixo da dobra.
- **Formulário**: `fieldset` + `legend` nos radios, `label for` em todos os campos, `autocomplete` (`name`, `address-level3`), `aria-describedby` na ajuda do bairro. O erro tem `aria-invalid` e `aria-describedby` dinâmicos e leva o foco ao primeiro radio. O retorno usa `role="status"` com `aria-live`. Há aviso em `<noscript>` e `action` de reserva para o wa.me.
- **Foco**: `:focus-visible` com contorno de 3px, petróleo no claro e dourado no escuro. Visível nos 15 primeiros Tabs (inspeção). Há link "Pular para o conteúdo". O foco dos cards de radio aparece via `:has()`.
- **Menu (lógica)**: `aria-expanded`, `aria-controls`, rótulo que alterna, fecha com Esc, armadilha de Tab, foco devolvido ao botão, fecha ao clicar em link e ao passar para desktop. O defeito é só de CSS (T1).
- **Movimento**: `prefers-reduced-motion` zera durações, desliga o `scroll-behavior: smooth` e a animação de entrada (CSS 1287-1292 e JS 134).
- **Responsividade**: breakpoints em 600, 900, 1100 e 1280. Tipografia com `clamp()`. `img, svg, iframe { max-width:100% }`. Container com `min(100% - 2*gutter, 1180px)`. Sem larguras fixas grandes. `scroll-margin-top` compensa o cabeçalho fixo.
- **Desempenho**: `script.js` com `defer`, fontes com `display=swap` e `preconnect`, preload da imagem LCP, WebP com fallback JPEG via `<picture>`, mapa com `loading="lazy"`, ícones em sprite inline (sem requisições extras).
- **SEO**: Open Graph (`og:title`, `og:description`, `og:type`, `og:locale`, `og:site_name`, `og:image:width/height/alt`) e `twitter:card`. O JSON-LD é JSON válido, com endereço, geo, `sameAs` e `hasMap`.
- **Segurança e privacidade**: sem armazenamento de dados. `window.open` anula `opener`. As mensagens do WhatsApp usam `encodeURIComponent`, e o retorno do formulário é montado com `createTextNode`/`textContent`, sem `innerHTML`.

---

# Ciclo 2

- Data: 2026-11-15
- Iteração: 2 (reavaliação após o CHANGELOG v2)
- Arquivos avaliados: `site/index.html` (779 linhas, 58,1 KB), `site/styles.css` (1330 linhas, 41,7 KB), `site/script.js` (261 linhas, 10,7 KB) e `site/assets/` (agora autocontido)
- Evidências usadas: seção "Ciclo 2" de `inspecao-visual.md`, `capturas/ciclo2-*`, `site/CHANGELOG.md` (v2) e medições feitas aqui (parser Python, `npx html-validate@8`, cálculo de contraste)

## Veredito (ciclo 2)

**APROVADO COM RESSALVAS**: 0 bloqueantes, 1 importante (pendência de conteúdo, não de código) e 5 menores.

O bloqueante T1 foi resolvido e T2, T3, T6, T8, T9, T12 e T13 também. Não há regressão: HTML bem formado, 0 imagens quebradas, 0 requisições com falha, 0 erros de console, sem rolagem horizontal nas 3 larguras. Lighthouse no celular: 91 / 100 / 100 / 100. As ressalvas restantes são pendências de publicação (nomes da liderança, domínio, dados "a confirmar") e ajustes finos, e nenhuma impede o site de funcionar.

## Conferência dos achados do ciclo 1

| ID | Situação | Evidência |
|---|---|---|
| T1 menu mobile (bloqueante) | **resolvido** | `styles.css:356-380`: o `.cabecalho` não tem mais `backdrop-filter`, que passou para `.cabecalho::before` (`position:absolute; inset:0; z-index:-1`). O `.cabecalho` (`fixed` + `z-index:100`) mantém o contexto de empilhamento, então o pseudo-elemento fica atrás do conteúdo do cabeçalho. Medido pelo inspetor: `#menu` com 736px de altura em 360px e 960px em 768px, todos os itens visíveis (`ciclo2-celular-menu-aberto.png`, `ciclo2-tablet-menu-aberto.png`). |
| T2 tabela de cultos | **resolvido** | `styles.css:869-884` (grade abaixo de 600px) e `index.html:400-424` (`role="table|rowgroup|row|columnheader|rowheader|cell"`). Medido: "Culto da manhã" ocupa 1 linha (175x28). `ciclo2-celular-agenda-tabela.png`. |
| T3 assets fora de `site/` | **resolvido** | Nenhuma ocorrência de `../assets` em `index.html`, `styles.css` ou `script.js` (grep). As 21 referências locais `assets/...` (incluindo `srcset` e `imagesrcset`) existem em `site/assets/` (script de verificação, 0 ausentes). |
| T4 og:image absoluto / og:url / canonical | **resolvido no código, pendente de domínio** | `index.html:11, 15, 20` com `https://SEU-DOMINIO/` e comentário de placeholder na linha 10. Vira T4r (menor, pré-publicação). |
| T5 nomes da liderança | **pendente** (conteúdo) | `index.html:363-377` ainda usa `avatar-placeholder.svg` e "[Nome do ...]"; V3 em `ciclo2-celular-secao-lideranca.png`. |
| T6 quebra do e-mail | **resolvido** | `index.html:673, 744` com `secretaria@<wbr>catedralbaleia.com.br`; `styles.css:1172, 1185, 1280` com `overflow-wrap: break-word`. Medido: quebra em "secretaria@" / "catedralbaleia.com.br". |
| T7 alvos de toque | **resolvido em parte** | `styles.css:1281` (`min-width/min-height: 44px` no rodapé, medido 44x44) e `styles.css:1306-1307` (`padding-block: .6em` nos links do FAQ e dos créditos). Resta "CC BY 3.0" com 57x39 (T7r). |
| T8 rótulo no nome da marca | **resolvido** | `index.html:122, 723`: `aria-label="Corpo Diaconal AD Catedral Baleia, voltar ao início"`. |
| T9 `inert` com menu aberto | **resolvido** | `script.js:53-60` aplica `inert` (propriedade e atributo) em `main` e `.rodape` ao abrir e retira ao fechar. O inspetor confirmou que `main` fica inerte e volta ao normal com Esc. |
| T10 navegação sem JS | **pendente (aceito como limitação)** | Registrado no CHANGELOG v2 ("Não feito"). O rodapé mantém os links de seção. Fica como menor. |
| T11 JSON-LD | **resolvido em parte** | `index.html:44-46` agora tem `url`, `image` e `logo`, e o JSON é válido (parse conferido aqui). `openingHoursSpecification` e os campos "a confirmar" (telefone, e-mail, CEP, `sameAs`) continuam (T11r). |
| T12 `srcset` nas fotos | **resolvido** | `index.html:193-194, 240-241, 457-458, 518-519`, com `sizes` coerentes. O preload (`index.html:32`) usa `imagesrcset` + `imagesizes` iguais ao `<source>` do hero, então não há download duplo. Medido: em 360px são baixadas `hero-servico-640.webp` (15 KB) e `templo-catedral-baleia-640.webp` (64 KB). |
| T13 contraste do cabeçalho | **resolvido** | Fundo do `::before` com `rgba(247,243,234,.97)`. Sobre o hero marinho, o fundo efetivo fica em cerca de `#F0EDE5`. Petróleo `.marca__l2`: **4,98:1** (antes 4,53). Marinho 12,46, texto 10,73, texto suave 5,13. Sem suporte a `backdrop-filter`, o fundo é creme opaco (`styles.css:361`). |

## Achados abertos (ciclo 2)

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T5 | Conteúdo pendente (pré-publicação) | `index.html:363-377` | Os placeholders "[Nome do coordenador da diaconia]", "[Nome do vice-coordenador]" e "[Nome do secretário da diaconia]" continuam visíveis, com avatar genérico. Não é defeito de código. | importante (conteúdo) | Trocar pelos nomes autorizados ou esconder/resumir a seção `#lideranca` antes de publicar (decisão do redator/usuário). |
| T4r | SEO (pré-publicação) | `index.html:11, 15, 20, 44-46` | O domínio provisório `https://SEU-DOMINIO/` está em canonical, og:url, og:image e JSON-LD. Se publicado assim, a prévia e o canonical apontam para um host inexistente. | menor | Substituir pelo domínio real na publicação (já documentado no CHANGELOG v2). |
| T7r | A11y (alvo de toque, meta do projeto) | `styles.css:1307`, rodapé (créditos) | O link "CC BY 3.0" mede 57x39 no celular (valor do inspetor). Passa no WCAG 2.5.8 (24px), mas não na meta de 44px do checklist. | menor | Em `.rodape__creditos a`, usar `padding-block: .75em` ou `display:inline-block; min-height:44px; line-height:44px`. |
| T10 | Robustez sem JS | `styles.css` (regra `.nav` abaixo de 1100px) | Sem JavaScript, a navegação principal não aparece abaixo de 1100px. Mitigado pelos links do rodapé e aceito como limitação no CHANGELOG v2. | menor | Opcional: `html:not(.js) .nav { display:block; }` com lista estática. |
| T11r | SEO (JSON-LD) | `index.html` (bloco JSON-LD: `openingHoursSpecification`, `telephone`, `email`, `sameAs`) | Publica dados ainda "a confirmar", e `openingHoursSpecification` descreve horário de funcionamento, não de culto. | menor | Antes de publicar, retirar os campos não confirmados e trocar os horários por `event` ou removê-los (já registrado no CHANGELOG v2). |
| T14 | Desempenho | `index.html:30` (CSS do Google Fonts) | Lighthouse no celular: LCP de **3,3 s**, acima da faixa "bom" (até 2,5 s). Performance 91, TBT 0 e CLS 0, então não é bloqueante. O CSS externo do Google Fonts é a única folha de terceiros que bloqueia a renderização. | menor | Opcional: hospedar os woff2 em `site/assets/fonts/` com `@font-face` + `font-display: swap` e preload da fonte do H1, ou carregar o CSS das fontes sem bloquear (técnica `media="print"` + `onload`). Medir de novo depois. |

### Achados descartados (ciclo 2)
- O `html-validate@8` aponta 37 avisos, todos `no-redundant-role` (os `role="list"` de antes e os novos papéis ARIA da tabela), `prefer-native-element` (o mesmo `ol role="list"`) e `tel-non-breaking`. Os papéis da tabela são intencionais (T2: o `display:grid` abaixo de 600px tira a semântica de tabela no Safari). Não são erros de conformidade.
- A célula de horário da Santa Ceia (`index.html:424`) tem só "–" com `aria-hidden`, então o leitor de tela lê uma célula vazia. É aceitável, porque a coluna "Dia" da mesma linha já explica ("consulte a data na secretaria").
- `overflow-wrap: anywhere` continua em `.info-card__valor` (`styles.css:659`). As capturas do ciclo 2 não mostram quebra ruim nos cartões, então não há defeito.

## Regressões
Nenhuma encontrada. Conferido:
- Estrutura: tags balanceadas, 0 IDs duplicados, 0 âncoras internas sem alvo, 0 referências ARIA (`aria-controls`, `aria-labelledby`, `aria-describedby`, `for`) quebradas. Um único `<h1>` (linha 177) e nenhum salto de nível. Todas as `<img>` com `alt` e `width`/`height` (parser Python, medido aqui).
- O cabeçalho desktop não mudou de aparência (`ciclo2-desktop-dobra.png`). O foco visível continua nos 15 primeiros Tabs (`ciclo2-desktop-foco.png`, `ciclo2-desktop-foco-tab15.png`).
- `prefers-reduced-motion` continua presente (`styles.css:1318`).
- O mapa carrega com o pino nas 3 larguras quando a seção fica à vista (inspeção).

## Métricas (ciclo 2)

| Métrica | Valor | Fonte |
|---|---|---|
| Lighthouse celular (Perf / A11y / BP / SEO) | **91 / 100 / 100 / 100**; FCP 1,8 s, LCP 3,3 s, TBT 0 ms, CLS 0 | inspecao-visual.md (Lighthouse 13.6.0 via http-server local) |
| Rolagem horizontal (360 / 768 / 1440) | não, em todas | inspecao-visual.md |
| Imagens quebradas / requisições com falha / console | 0 / 0 / 0 | inspecao-visual.md |
| Alvos < 44px (celular) | 4: 3 radios dentro de cartões-rótulo de cerca de 272x88 + "CC BY 3.0" 57x39 (antes eram 8) | inspecao-visual.md |
| Peso de HTML + CSS + JS | 58,1 + 41,7 + 10,7 = 110,4 KB, sem compressão (+2,6 KB em relação ao ciclo 1) | `wc -c` |
| Imagens no celular (360px) | hero 15 KB + templo 64 KB (WebP 640w); Servir e Ajuda ficam ocultas e não são baixadas | inspecao-visual.md + `ls` |
| Referências locais a assets | 21, todas existentes em `site/assets/` | script Python (medido aqui) |
| JSON-LD | JSON válido, com `url`, `image` e `logo` | parser Python (medido aqui) |
| html-validate | 0 erros de conformidade; 37 avisos de estilo (ver "descartados") | `npx html-validate@8` (medido aqui) |
| Contraste no cabeçalho translúcido sobre o hero | petróleo 4,98 / marinho 12,46 / texto 10,73 / texto suave 5,13 | fórmula WCAG (calculado aqui) |

As demais razões de contraste da tabela do ciclo 1 continuam valendo, porque os tokens de cor não mudaram.

## Lista para o próximo passo
1. **Antes de publicar** (usuário/redator): T5 (nomes da liderança), T4r (domínio) e T11r (campos não confirmados no JSON-LD), junto com as pendências do CHANGELOG (WhatsApp, dados "a confirmar", fotos reais).
2. **Opcional** (desenvolvedor): T7r (altura do link "CC BY 3.0"), T14 (fontes locais ou não bloqueantes) e T10.
