# Avaliação técnica: Sergio Ribeiro (ciclo 2)

Arquivos avaliados: `site/index.html` (460 linhas), `site/styles.css` (1387 linhas), `site/script.js` (154 linhas), com `design.md`, `inspecao-visual.md` (ciclo 2), `capturas/` e `site/CHANGELOG.md` (Iteração 2 e "Ajuste pós-inspeção") como evidência.

## Veredito

**APROVADO COM RESSALVAS.**

As duas violações bloqueantes do ciclo 1 (WCAG 2.5.3, *Rótulo no nome*, T1 e T2) foram corrigidas e conferidas no código. O Lighthouse do ciclo 2 também aprovou a auditoria `label-content-name-mismatch` (Acessibilidade 100). Não há regressões técnicas. A regressão V10 da inspeção (margarida do rodapé a 48x48) foi corrigida depois da inspeção e está certa no CSS (detalhes abaixo).

Ressalvas: `og:image` relativo e falta de `og:url`/`canonical` (T3, resolver quando houver domínio) e LCP mobile de 3,2 s (T4).

Os dados de contato fictícios (WhatsApp `5561900000000`, `contato@exemplo.com`, cidade, igreja, retrato ilustrativo, Tecnologia "em breve") **não contam como falha técnica**. Estão em "Pendências de conteúdo".

Contagem: bloqueante 0 · importante 1 · menor 1

## Achados abertos

| ID | Área | Arquivo:linha | Problema | Severidade | Correção sugerida |
|---|---|---|---|---|---|
| T3 | SEO / compartilhamento | `site/index.html:14`, `:37` | `og:image` e `image` do JSON-LD continuam com caminho relativo (`assets/fotos/og-image.jpg`), e ainda faltam `og:url` e `<link rel="canonical">`. Sem URL absoluta, a prévia no WhatsApp, Facebook e LinkedIn sai sem imagem. | importante (resolver quando houver domínio, antes de publicar) | Usar `https://<dominio>/assets/fotos/og-image.jpg` e acrescentar `og:url` e `canonical` com a URL final. |
| T4 | Desempenho | `site/index.html:23` | O CSS do Google Fonts ainda bloqueia a renderização. Lighthouse mobile: LCP 3,2 s (meta de 2,5 s), economia estimada de 610 ms em `render-blocking-insight` e nota 0 em `lcp-discovery-insight`. Não hospedar as fontes localmente foi uma decisão registrada no CHANGELOG. | menor | Hospedar Fraunces e Inter localmente (woff2 com subset latin), com `preload` e `font-display: swap`. |

## Conferência das correções do ciclo 1

| ID ciclo 1 | Situação | Evidência |
|---|---|---|
| T1 (2.5.3, hero) | **corrigido** | `index.html:130`: texto visível "Siga no Instagram", `aria-label="Siga no Instagram: @pr.sergioribeiro"`. O nome começa pelo texto visível. Lighthouse `label-content-name-mismatch` aprovado. |
| T2 (2.5.3, card Contato) | **corrigido** | `index.html:394`: texto visível "Abrir perfil", `aria-label="Abrir perfil @pr.sergioribeiro no Instagram"`. |
| Faixa Instagram (2.5.3 + T6) | **corrigido** | `index.html:349-352`: texto "Siga no Instagram", `aria-label` começando por ele. `styles.css:1040`: padding menor abaixo de 480 px. Inspeção: 1 linha, 254x52 px a 360. |
| Demais `aria-label` | sem conflito | Os 13 `aria-label` de `index.html` foram conferidos. Os links com texto visível começam pelo texto exato ("Fale comigo pelo WhatsApp" nas linhas 102, 107, 126, 181, 375 e 454; "Quero participar do ministério..." na 284). Os elementos sem texto visível (logo na 83, menu na 89) não têm com que conflitar. Inspeção: 0 rótulos que não começam pelo texto visível. |
| "Voltar ao topo" | ok | `index.html:430-432`: sem `aria-label`; o nome vem de `<span class="sr-only">Voltar ao topo</span>`. O ícone tem `aria-hidden`. |
| T5 (robustez sem JS) | **corrigido** | `index.html:26`: no `load`, o script inline remove `.js` se `window.srPronto` não existir. `script.js:153` define a flag no fim. Inspeção: com `script.js` bloqueado, os 24 `[data-reveal]` ficam visíveis e o menu aparece no modo estático. |
| T7 ("©" desalinhado) | **corrigido** | `styles.css:1254-1258` (`.footer-base > p` com `min-height: 44px` e centralização). Inspeção: centros iguais a 768, 1024, 1200 e 1440. |
| T8 (alvo 42 px) | **corrigido** | `styles.css:1192-1197`: `min-width: 44px`. Inspeção: 0 alvos < 44 px. |
| T9 (emoji no rodapé) | **corrigido** | `index.html:410`: `margarida-mini.svg` com `alt=""`, 20x20. O arquivo existe em `site/assets/`. |
| V10 (regressão: flor a 48x48) | **corrigido no CSS, não medido no navegador** | `styles.css:1172`: o seletor passou para `.footer-marca .footer-flor` (especificidade 0,2,0), que vence `.footer-marca img` (0,1,1, linha 1163) e aplica 20x20. A flor está dentro do `<p>` e não é item do flex `.footer-marca`; o logo de 48 px continua com a regra da linha 1163. O `styles.css` (04:43) é posterior às capturas (04:42), então `desktop-rodape.png` ainda mostra a versão de 48 px. |
| C2/V4 (cards da Esperança) | aplicado, sem efeito técnico negativo | `styles.css:821-831`: só em ≥1200 px. Inspeção: sem rolagem horizontal. O espaço vazio que sobra no card é questão estética e fica com o avaliador de resultado. |

## Regressões

Nenhuma regressão técnica. Pela inspeção do ciclo 2: sem rolagem horizontal (360, 768, 1024, 1200, 1440), 0 imagens quebradas, 0 erros de console, 0 exceções JS, 0 requisições ≥400, 0 alvos < 44 px. Menu mobile, Esc, devolução de foco, barra fixa, ordem do Tab e foco visível funcionam. As 24 animações `data-reveal` terminam visíveis.

## Métricas

Medidas pelo `inspetor-visual`, ciclo 2 (Edge 157 headless + Lighthouse mobile) e não refeitas aqui:

| Métrica | Valor |
|---|---|
| Lighthouse (mobile) | Desempenho 92 · Acessibilidade 100 · Boas práticas 100 · SEO 100 |
| FCP / LCP / CLS / TBT | 1,7 s / 3,2 s / 0 / 0 ms |
| Rolagem horizontal (360 / 768 / 1440) | não / não / não |
| Imagens quebradas · erros de console · requisições ≥400 | 0 · 0 · 0 |
| Alvos < 44 px | 0 |
| Tamanho real da flor do rodapé após o ajuste V10 | não medido (o ajuste veio depois das capturas); conferido por leitura do CSS |

Medidas nesta avaliação:

| Métrica | Valor |
|---|---|
| HTML + CSS + JS | 31,1 KB + 32,0 KB + 5,2 KB = 68,3 KB (sem minificação) |
| Tags balanceadas / ids duplicados | sim / nenhum (parser `html.parser`) |
| Chaves no CSS | 308 `{` / 308 `}` |
| Títulos | 1 `h1`; sequência h1 > h2 > h3 sem saltos |
| Assets referenciados (`src`, `href`, `srcset`) | todos existem |
| Âncoras internas | todas têm destino |
| Origens externas | 2 (fonts.googleapis.com, fonts.gstatic.com), com `preconnect` |

### Contraste

Nenhuma cor nem token mudou desde o ciclo 1. As razões calculadas naquele ciclo continuam válidas: todas as combinações de texto passam em AA, e o pior caso é o dourado `#8A6100` sobre areia, com 4,68:1. A margarida nova do rodapé é decorativa (`alt=""`) e não entra na conta de contraste de texto.

## Itens verificados sem problema

- **HTML:** `lang="pt-BR"`, `charset`, `viewport`, `<title>`, `meta description`, `theme-color`, um único `<h1>`, hierarquia sem saltos, tags balanceadas, sem ids duplicados.
- **Links e assets:** todas as âncoras internas e todos os arquivos em `assets/`, inclusive `margarida-mini.svg` e as variantes do `srcset`, existem.
- **Acessibilidade:** WCAG 2.5.3 atendido em todos os controles com `aria-label`. Imagens decorativas com `alt=""`. Foco visível com 3 px. Link para pular ao conteúdo. Menu com `aria-expanded`/`aria-controls`. Sem formulários.
- **Movimento:** transições e animações só dentro de `prefers-reduced-motion: no-preference`; o JS também respeita `reduce`.
- **Robustez:** se o `script.js` falhar, o conteúdo e o menu continuam acessíveis (T5 corrigido).
- **Responsividade:** mobile first, `clamp()`, contêiner com `min()`, sem larguras fixas grandes, sem rolagem horizontal medida.
- **Desempenho:** `script.js` com `defer`, fontes com `display=swap` e `preconnect`, imagem LCP com `preload` e `fetchpriority="high"`, `width`/`height` em todas as imagens (CLS 0).
- **SEO:** título e descrição únicos, Open Graph (`og:title`, `og:description`, `og:image` com dimensões e alt), `twitter:card`, JSON-LD `Person`, marcação semântica. As ressalvas estão em T3.

## Pendências de conteúdo (não são falhas técnicas)

- WhatsApp fictício `5561900000000` em 7 links (`index.html:102, 107, 126, 181, 284, 375, 454`) e e-mail fictício `contato@exemplo.com` no card de Contato, todos marcados com `<!-- PENDENTE -->`.
- JSON-LD com `telephone`, `email` e `addressLocality` provisórios.
- Retrato e foto do ministério ilustrativos, citação da igreja sem autorização confirmada, cidade a confirmar, áreas de tecnologia e links de LinkedIn/portfólio "em breve", nome da Mônica a confirmar.
