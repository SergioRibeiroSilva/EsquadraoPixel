# Inspeção visual: Sergio Ribeiro

## Ambiente
- Navegador: Microsoft Edge 157.0.4341.60, sem janela (Playwright `playwright-core`, `channel: 'msedge'`)
- Método: A (Playwright com o navegador instalado) e Lighthouse (mobile, Edge headless)
- Servido por: `http-server` local na porta 8080, sem cache (`-c-1`), parado ao fim
- Data: 2026-11-17
- Iteração: **ciclo 2** (confere o CHANGELOG "Iteração 2")
- Capturas feitas com `prefers-reduced-motion: reduce`, depois de rolar a página inteira para carregar as imagens `loading="lazy"`. Verificação separada com movimento ativo, rolando pela roda do mouse (passos de 300 px a cada 30 ou 60 ms, celular 360 e desktop 1440): todos os 24 `[data-reveal]` começam ocultos e **ficam visíveis**, com 0 restantes.
- Teste extra de robustez (C5): com `script.js` bloqueado, a classe `.js` sai no `load`. Os 24 `[data-reveal]` ficam visíveis, o menu aparece no modo estático (`display: block`) e o botão de menu fica oculto.

## Resumo
**PROBLEMAS ENCONTRADOS** (nenhum bloqueante). As correções pedidas foram confirmadas: o botão da faixa do Instagram fica em 1 linha a 360 px, o vão do card de Hebreus deixou de ficar entre o versículo e a referência, a linha "©" está alinhada com "Créditos das fotos" e o `label-content-name-mismatch` foi resolvido. Há **uma regressão nova**: a margarida SVG do rodapé aparece com 48x48 px em vez de 20x20 px. Continuam visíveis os dados pendentes de conteúdo (contato fictício, retrato ilustrativo, Tecnologia "em breve").

Contagem: bloqueante 0 · importante 2 · menor 4

## Achados

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V1 | todas | Contato | Dados de contato fictícios ainda visíveis: "(61) 90000-0000" e "contato@exemplo.com" (PENDENTE em `dados-negocio.md`) | `desktop-inteira.jpg` e `celular-inteira.png` (cards de contato) | importante (trocar antes de publicar) |
| V2 | todas | Sobre | O retrato é foto de banco, com a legenda "Foto ilustrativa" visível. Não é a foto do Sergio | `desktop-inteira.jpg`, `celular-inteira.png` | importante (substituir antes de publicar) |
| V3 | todas | Tecnologia | Conteúdo pendente exposto: chip "Áreas de atuação em breve" e a nota "LinkedIn e portfólio em breve." | `desktop-inteira.jpg`, `celular-inteira.png` | menor |
| V10 (novo, regressão) | todas | Rodapé | A margarida SVG após "Influenciador de Esperança" aparece com **48x48 px**, embora o HTML peça 20x20. A regra `.footer-marca img { width: 48px; height: 48px; }` (styles.css, linha 1163) é mais específica que `.footer-flor` (20px, linha 1172) e vence. A flor fica maior que a linha de texto, sobe acima dela (centro da flor 15-16 px acima do centro do texto) e afasta "Influenciador de Esperança" do nome | `desktop-rodape.png`; medida: `.footer-flor` com 48x48 em 360, 768, 1024, 1200 e 1440 | menor |
| V4 (residual) | desktop 1200-1440; tablet 768 | Uma palavra para hoje | **Desktop:** o vão do card de Hebreus 6.19 agora fica dividido acima e abaixo do versículo, com 143 px de cada lado a 1440 e 173 px a 1200. Já não abre um buraco entre o versículo e a referência, mas o card continua com bastante área vazia (cards de 595 px de altura a 1440). **Tablet 768 (2 colunas, sem mudança, como o CHANGELOG já previa):** sobram 199 px entre o versículo de Hebreus e a referência | `desktop-inteira.jpg`, `tablet-esperanca.png`; medidas por elemento | menor |
| V6 | celular | Hero (desempenho) | LCP de 3,2 s no Lighthouse mobile. Há recursos bloqueando a renderização (economia estimada de 610 ms, CSS das fontes) e `lcp-discovery-insight` com nota 0 | Lighthouse: LCP 3,2 s, `render-blocking-insight`, `lcp-discovery-insight` | menor |

Observação sobre `tablet-esperanca.png` e o recorte da Esperança no desktop: o cabeçalho fixo aparece por cima do título porque a captura do elemento foi feita com a página rolada. É efeito da captura, não um defeito do layout. A página inteira mostra o título sem sobreposição.

## Métricas

| Verificação | celular 360 | tablet 768 | desktop 1440 |
|---|---|---|---|
| Rolagem horizontal | não (scrollWidth 360) | não (768) | não (1440) |
| Elementos além da largura | `img.ornamento-esperanca`, `img.margarida-contato` (decorativos, recortados pelo contêiner, sem rolagem) | idem | idem |
| Imagens quebradas | 0 | 0 | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Erros de página (exceções JS) | 0 | 0 | 0 |
| Requisições com falha (≥400) | 0 | 0 | 0 |
| Alvos < 44 px | 0 (o link "Sobre" do rodapé agora mede 44x44) | 0 | 0 |
| Fontes | Fraunces 600-700 e 400 itálico; Inter 400/500/600 carregadas | idem | idem |
| Placeholders `[PENDENTE`/`[PLACEHOLDER`/Lorem no texto visível | 0 | 0 | 0 |
| `aria-label` que não começa pelo texto visível | 0 | 0 | 0 |
| Botão "Siga no Instagram" (faixa) | 1 linha, 254x52 px | 1 linha, 223x52 px | 1 linha, 223x52 px |
| Linha "©" x "Créditos das fotos" (centro vertical do texto) | empilhados (coluna única, esperado) | iguais (9407/9407) | iguais (7658/7658) |
| Altura da página | 10612 px | 9478 px | 7728 px |

Também medido a 1024 e 1200 px: botão do Instagram com 52 px de altura (1 linha), "©" e "Créditos" alinhados, sem rolagem horizontal.

**Menu mobile** (celular 360): abre com `aria-expanded="true"` e o painel visível (`celular-menu-aberto.png`). Esc fecha e devolve o foco ao botão. Clicar num link fecha o menu e rola até a seção (y = 2437; `celular-menu-fechado.png`). No tablet 768, o botão de menu aparece (`inline-flex`) junto com "Fale comigo" no cabeçalho.

**Barra fixa "Fale comigo"** (celular): oculta no hero, visível depois dele (77 px, encostada no rodapé da tela, `celular-barra-fixa.png`) e oculta de novo quando a seção Contato está na tela. A partir de 768 px fica com `display: none`.

**Teclado** (desktop): a ordem do Tab é coerente: pular para o conteúdo, marca, 5 links do menu, "Fale comigo" do cabeçalho, depois os botões do hero e das seções. Foco visível em todos, com contorno sólido de 3 px azul (#1E3A5F) em fundo claro ou amarelo (#F5C518) em fundo escuro. Captura: `desktop-foco.png` (foco no link "Sobre"). O "Voltar ao topo" tem o nome acessível "Voltar ao topo" (texto `sr-only`) e nenhum `aria-label`.

**Lighthouse** (mobile, Edge headless, servidor local): Desempenho **92** · Acessibilidade **100** · Boas práticas **100** · SEO **100**. FCP 1,7 s · LCP 3,2 s · CLS 0 · TBT 0 ms. A auditoria `label-content-name-mismatch` passou.

## Capturas (`capturas/`)
- `celular-dobra.png`, `celular-inteira.png`, `celular-menu-aberto.png`, `celular-menu-fechado.png`, `celular-barra-fixa.png`, `celular-instagram.png` (faixa do Instagram a 360)
- `tablet-dobra.png`, `tablet-inteira.jpg` (JPEG por tamanho), `tablet-esperanca.png`
- `desktop-dobra.png`, `desktop-inteira.jpg` (JPEG por tamanho), `desktop-foco.png`, `desktop-rodape.png`

## Comparação com a rodada anterior (ciclo 1)

| ID | Situação | Detalhe |
|---|---|---|
| V1 contato fictício | persiste | Depende de dados do usuário |
| V2 retrato ilustrativo | persiste | Depende de foto do usuário |
| V3 Tecnologia "em breve" | persiste | Depende de dados do usuário |
| V4 vão nos cards da Esperança | resolvido em parte | Desktop: o vão foi dividido acima e abaixo do versículo (143+143 px a 1440) e não fica mais entre o versículo e a referência. Tablet: sem mudança (199 px) |
| V5 rótulo diferente do texto (hero) | resolvido | `aria-label` "Siga no Instagram: @pr.sergioribeiro"; Lighthouse passou |
| V6 LCP mobile | persiste | 3,3 s → 3,2 s; fontes não foram hospedadas localmente (decisão registrada no CHANGELOG) |
| V7 botão da faixa em 3 linhas a 360 | resolvido | 1 linha, 254x52 px (`celular-instagram.png`) |
| V8 "©" desalinhado no rodapé | resolvido | Centros verticais iguais a 768, 1024, 1200 e 1440 (`desktop-rodape.png`) |
| V9 emoji 🌼 no rodapé | resolvido, com regressão | Trocado pela margarida SVG amarela, mas exibida a 48x48 em vez de 20x20 (novo V10) |
| "Sobre" do rodapé 42 px | resolvido | 44x44 |
| Regressões gerais | 1 (V10) | Sem rolagem horizontal, erros de console, imagens quebradas ou falhas no menu, na barra fixa, no foco ou nas animações |
