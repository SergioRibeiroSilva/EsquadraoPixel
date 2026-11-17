# Avaliação técnica: Futebol Kids (ciclo 1)

- **Data:** 2026-11-17
- **Arquivos avaliados:** `site/index.html` (934 linhas, 65,2 KB), `site/styles.css` (1025 linhas, 46,9 KB), `site/script.js` (226 linhas, 9,2 KB)
- **Evidências usadas:** `inspecao-visual.md` e `capturas/` (Edge 157 headless + Playwright + Lighthouse), `design.md`, além de leitura do código e scripts locais (balanceamento de tags, IDs, caminhos e cálculo de contraste)

## Veredito

**APROVADO COM RESSALVAS**

Não há nenhum bloqueante. A página não quebra, não tem erros de console nem recursos com falha, e as combinações de cor de texto passam no WCAG AA. Ficam 3 achados importantes (sobreposição do mapa, `og:image` com caminho relativo e LCP de 3,3 s) e 7 menores.

## Tabela de achados

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T1 | Acessibilidade / layout | `styles.css:829`, `styles.css:856-857` | O cartão de contato fica por cima do mapa. No celular, a margem é `margin: -32px 16px 0`. No desktop, o mapa ocupa as colunas 1-8 e o cartão começa na coluna 8 (`grid-column: 8 / span 5`), ou seja, as duas áreas se cruzam. O cartão cobre a atribuição do Google ("Termos", "Informar erro") e, no celular, também o seletor de camada. Isso deixa controles do mapa inacessíveis, e a atribuição do Google Maps incorporado não deve ficar oculta. Evidência: V1, `capturas/celular-mapa.png`, `capturas/desktop-mapa.png` (iframe de x=120 a 920 e cartão a partir de x≈820). | importante | Tirar a sobreposição. No desktop, use mapa em `1 / span 7` e cartão em `8 / span 5` (ou `9 / span 4`). No celular, troque a margem negativa por `margin-top: 16px`. Se a sobreposição for mantida por estética, ela deve ficar fora dos 40 px de baixo e da faixa direita do iframe. |
| T2 | SEO | `index.html:15`, `index.html:43` | `og:image` e o `image` do JSON-LD usam o caminho relativo `assets/fotos/og-image.jpg`. O Open Graph exige URL absoluta, e Facebook, WhatsApp e LinkedIn não mostram a prévia com caminho relativo. | importante | Trocar pela URL absoluta (`https://<dominio>/assets/fotos/og-image.jpg`) quando o domínio existir. Até lá, deixar um comentário `<!-- TROCAR: URL absoluta -->` e registrar como pendência de publicação. |
| T3 | Desempenho | `index.html:25`, `index.html:30`, `styles.css:961-965` | Lighthouse no celular: LCP de **3,3 s**, acima da meta "bom" de 2,5 s. Há `render-blocking` estimado em 720 ms (CSS do Google Fonts e `styles.css`), e a auditoria `lcp-discovery-insight` falhou. Além disso, o título e o texto do hero começam com `opacity: 0` (`@keyframes entrada`), com atraso de 80 a 240 ms mais 600 ms de duração, o que adia a pintura do conteúdo principal. | importante | (a) Auto-hospedar Nunito e Baloo 2 em woff2 com `<link rel="preload" as="font" crossorigin>` e `font-display: swap`, ou carregar o CSS do Google Fonts sem bloquear (`media="print" onload="this.media='all'"` mais `<noscript>`). (b) No hero, animar só o `transform`, sem `opacity: 0`, ou tirar a animação do `h1`. (c) Rodar o Lighthouse de novo e conferir qual é o elemento LCP. |
| T4 | Desempenho | `index.html:25` | A URL das fontes pede Baloo 2 no peso 600, mas a página não usa esse peso (o inspetor conferiu com `document.fonts`). É um arquivo de fonte baixado à toa. | menor | Trocar por `family=Baloo+2:wght@700;800`. |
| T5 | Responsividade | `styles.css:841` | Com `overflow-wrap: anywhere` nos links de contato, o e-mail quebra no meio da palavra ("contato@futebolkids.exem / plo") e os telefones quebram no hífen ("(00) 90000- / 0000") a 360 px. Evidência: V8, `capturas/celular-mapa.png`. | menor | Usar `overflow-wrap: break-word`. Nos números, envolver o texto em `<span style="white-space:nowrap">`. No e-mail, inserir `<wbr>` antes do `@`. |
| T6 | SEO | `index.html:3-32` | Faltam `<link rel="canonical">` e `og:url`. | menor | Incluir os dois com a URL absoluta final quando o domínio for definido. |
| T7 | Desempenho | `index.html:416-417` | Lighthouse aponta `image-delivery` (39 KiB), CSS não usado (14 KiB) e CSS/JS sem minificação (8 + 2 KiB). A foto do bento a partir de 900 px é `campo-sintetico.webp` em 1200x1200 (125 KB), mas ela aparece numa área de mais ou menos 600 px de largura. | menor | Gerar uma versão de cerca de 900 px (ou um `srcset` com `sizes="(min-width:900px) 50vw"`). Minificar CSS e JS na publicação (opcional, sem build obrigatório). |
| T8 | Acessibilidade (meta do design) | `styles.css:38-40` | No desktop, o título branco do hero tem contraste mínimo medido de **4,47:1** sobre a camisa branca da foto (V5). Passa no AA para texto grande (3:1, título com pelo menos 36 px e peso 800), mas fica abaixo da meta de 6,0:1 que o `design.md` §2.2 declara. | menor | Reforçar a parada de 40 a 72% do `linear-gradient(0deg, ...)` de `--overlay-hero`, por exemplo de .45 para .60, ou mudar o `object-position` no desktop. |
| T9 | Legibilidade | `styles.css:296-297`, `styles.css:874-876`, `styles.css:868-873` | Elementos decorativos ficam sob as letras do texto. Os confetes passam sob o botão "Agendar aula grátis" do hero (V4) e sob o título do CTA final (V3). A linha e o círculo do meio-campo atravessam o texto de apoio do CTA. Em pontos isolados, isso reduz o contraste local. Evidência: `capturas/desktop-dobra.png`, `capturas/celular-cta-final.png`. | menor | Mover os confetes para fora da caixa do texto (por exemplo, `top` maior ou `opacity: .3` no CTA) ou reduzir a opacidade do `::before` do CTA de .1 para .06. |
| T10 | Publicação | `index.html:34-58`, `index.html:808-839`, `index.html:548`, `567`, `586`, `897-899` | Endereço, telefone, WhatsApp, e-mail, Instagram, CREF e coordenadas são fictícios. O usuário autorizou isso para a demonstração (`dados-negocio.md`), e o aviso aparece no rodapé e no cartão. Não bloqueia este ciclo, mas impede a publicação real. | menor (pendência de publicação) | Trocar pelos dados reais antes de publicar e tirar as etiquetas "demonstração" e "Exemplo". |

Contagem: **0 bloqueantes, 3 importantes, 7 menores.**

Os achados V2 (buracos na grade bento), V6 (passo 3 desalinhado) e V7 (lista esticada no plano 1x), da inspeção visual, são de composição visual. Eles não afetam funcionamento, acessibilidade nem SEO, então ficam para o avaliador de resultado.

## Métricas

### Medidas pelo inspetor visual (Edge 157 headless)
| Métrica | Celular 360 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Rolagem horizontal | não | não | não |
| Imagens quebradas | 0 | 0 | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Requisições com falha (≥ 400) | 0 | 0 | 0 |
| Alvos de toque interativos < 44 px | 0 | — | — |
| Placeholders visíveis | 0 | 0 | 0 |

**Lighthouse (celular, servidor local sem compressão):** Desempenho 91 · Acessibilidade 100 · Boas práticas 100 · SEO 100. FCP 1,9 s · **LCP 3,3 s** · CLS 0 · TBT 0 ms.

### Medidas nesta avaliação
- **Peso dos arquivos-fonte:** 121,3 KB (HTML 65,2, que inclui um sprite SVG inline de cerca de 30 KB; CSS 46,9; JS 9,2).
- **Peso estimado do primeiro carregamento no celular:** cerca de 250 KB mais as fontes (HTML, CSS, JS, `hero-mobile.webp` de 123 KB, `logo.svg` e `confete.svg`). As demais imagens têm `loading="lazy"`.
- **Requisições externas:** Google Fonts (1 CSS + 6 woff2: Baloo 2 700/800/600 e Nunito 400/600/700/800 em arquivo variável/subset) e o iframe do Google Maps (lazy). Não há scripts de terceiros.
- **Balanceamento de tags:** nenhuma tag sem fechamento nem fechada fora de ordem (parser `html.parser`). Nenhum ID duplicado. 501 `{` e 501 `}` no CSS.
- **Caminhos:** todos os `src`, `srcset`, `href` locais e os `url()` do CSS existem em `site/assets/`. As âncoras internas (`#beneficios`, `#turmas`, `#turma-*`, `#metodologia`, `#horarios`, `#planos`, `#faq`, `#contato`, `#inicio`, `#topo`, `#conteudo`) apontam para IDs existentes.
- **Dimensões das imagens:** o `width`/`height` do HTML bate com a dimensão real de todos os JPGs (verificado no cabeçalho SOF). A única diferença é `campo-sintetico.jpg` (1200x1200), usado por direção de arte a partir de 900 px em contêiner com posição absoluta. CLS medido = 0.

### Contraste calculado (luminância relativa WCAG)
| Combinação | Razão | Exigido | Resultado |
|---|---|---|---|
| Branco / `--verde-700` (botão primário) | 5,02 | 4,5 | passa |
| `--verde-800` / `--creme` (botão secundário, títulos) | 6,90 | 4,5 | passa |
| `--verde-800` / `--azul-100` (títulos e botão nas seções azuis) | 6,21 | 4,5 | passa |
| `--verde-700` / `--creme` (eyebrow) | 4,85 | 4,5 | passa |
| `--tinta` / `--creme` (corpo) | 14,20 | 4,5 | passa |
| `--tinta-suave` / `--creme` · `/--azul-100` · `/branco` | 7,31 · 6,59 · 7,56 | 4,5 | passa |
| `--azul-700` / branco · `/--creme` (links) | 6,70 · 6,48 | 4,5 | passa |
| `--tinta` / cores das turmas (amarelo-400, azul-300, verde-300, coral-300) | 9,59 · 8,80 · 10,45 · 8,70 | 4,5 | passa |
| Branco / `--coral-700` (pílula Sub-x) | 5,18 | 4,5 | passa |
| `--amarelo-400` / `--verde-900` (eyebrow metodologia, foco escuro) | 5,95 | 4,5 / 3 | passa |
| `--amarelo-400` / `--verde-950` (títulos do rodapé) | 9,66 | 4,5 | passa |
| Branco 88% / `--verde-900` (microtexto do CTA) | 7,45 | 4,5 | passa |
| Branco 85% / `--verde-950` (créditos) | 11,05 | 4,5 | passa |
| Branco / `--verde-800` (botão flutuante, link de pular) | 7,13 | 4,5 | passa |
| Foco `--azul-700` / `--azul-100` (contorno, não texto) | 5,84 | 3 | passa |
| `--verde-400` / `--verde-900` (ícones e bordas dos selos) | 5,23 | 3 | passa |
| `--borda-campo` / `--creme` (borda dos pontos do carrossel) | 3,57 | 3 | passa |
| Hero: título / foto (desktop, pior pixel) | 4,47 (medido) | 3 (grande) | passa (abaixo da meta do design, T8) |

Os tokens de cor do `styles.css` batem com os do `design.md`. A única cor fora dos tokens é `#EAD98A`, usada só na borda decorativa do bloco de segurança.

## Itens verificados sem problema

**Estrutura e HTML**
- `<!doctype html>`, `lang="pt-BR"`, `charset`, `viewport`, `<title>` com 62 caracteres e `<meta description>` com 137 caracteres, os dois únicos.
- Um único `<h1>` (`index.html:153`). A hierarquia h1 → h2 → h3 não tem saltos, e o rodapé usa h2.
- Landmarks: `header`, `nav aria-label="Principal"`, `main#conteudo`, `footer`. Cada seção tem `aria-labelledby`.
- O JSON-LD `SportsActivityLocation` está bem formado.

**Acessibilidade**
- Link "Pular para o conteúdo" funciona, com `main tabindex="-1"`.
- Imagens de conteúdo têm `alt` descritivo. As decorativas têm `alt=""` e `aria-hidden`. Os SVGs de ícone têm `aria-hidden` e `focusable="false"`. O logo do cabeçalho usa `aria-label` no link.
- Os links que abrem em nova aba avisam com texto `sr-only` ou `aria-label` e usam `rel="noopener"`.
- Foco visível global (`styles.css:132-133`) com variante para o tema escuro e para o botão amarelo. O inspetor confirmou que nenhum elemento focado fica sob o cabeçalho fixo nem sob o botão flutuante (53 elementos percorridos).
- Menu mobile: `aria-expanded`, `aria-controls` e rótulo dinâmico; o foco fica preso no painel, Esc fecha e o foco volta ao botão (confirmado pelo inspetor).
- O carrossel funciona com scroll-snap, setas do teclado, `aria-roledescription` e botões de 44 a 48 px. Os controles ficam ocultos sem JS.
- O FAQ usa `<details>`/`<summary>` nativos. A tabela de horários tem `caption`, `scope` e `role`s explícitos para manter a semântica quando vira cartões no celular.
- Os preços têm leitura alternativa (`sr-only` "149 reais por mês"), e as estrelas têm `role="img"` com `aria-label`.
- O iframe do mapa tem `title`.
- `prefers-reduced-motion` é respeitado. Todas as animações, a rolagem suave e o *reveal* ficam dentro de `no-preference` (`styles.css:958-1012`), há bloco `reduce` (`styles.css:1014-1016`) e o JS usa `behavior: 'auto'` quando há redução (`script.js:103`, `154`). Sem JS, o conteúdo com `.reveal` não fica oculto, porque depende de `html.js`.
- Alvos de toque de pelo menos 44 px: botões com 48/44/60 px, links do menu com 56 px, `.link-seta`, links do rodapé e do contato com 44 px, e chips com 64 px.

**Responsividade**
- Mobile first, com breakpoints em 600, 900, 1100 e 1200 px, mais ajustes finos em 339, 359 e 419 px.
- Tipografia e espaçamentos com `clamp()`. `img, svg, iframe { max-width: 100% }`. Não há larguras fixas grandes. O inspetor não mediu rolagem horizontal em nenhuma largura.
- O menu hambúrguer troca exatamente entre 1099 e 1100 px. Sem JS, o menu aparece em linha, com quebra.

**Desempenho**
- Script com `defer`. O único script inline (classe `js`) tem uma linha.
- `preconnect` para fonts.googleapis/gstatic e `display=swap` nas fontes.
- Imagem do hero com `fetchpriority="high"` e `preload` por mídia. Fotos em WebP com JPG de reserva, `loading="lazy"` abaixo da dobra, iframe lazy.
- Todas as imagens têm `width`/`height`. CLS = 0.

**SEO**
- Título e descrição únicos. `og:title`, `og:description`, `og:type`, `og:locale`, `og:site_name`, `og:image:width/height/alt` e `twitter:card` presentes.
- Estrutura semântica correta, e o Lighthouse dá 100 em SEO.
