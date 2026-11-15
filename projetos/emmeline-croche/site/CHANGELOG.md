# CHANGELOG: Emmeline Crochê (site)

## Iteração 2 (2026-11-15): correções do ciclo 1 (avaliacao.md ITERAR)

### Obrigatórias
- **B1 (WCAG 2.5.3):** removido o `aria-label` dos 6 botões "Quero esta". Agora o nome é `Quero esta<span class="sr-only">: Bolsa X, pelo WhatsApp (abre em nova aba)</span>`.
- **B1, revisão geral:** o botão do cabeçalho e o botão flutuante também perderam o `aria-label` e passaram a usar texto `.sr-only` depois do rótulo visível. No logo, o nome passou do `aria-label` do link para o `alt` da imagem ("Emmeline Crochê, início"). Sobram dois `aria-label` em controles: o botão de menu, que só tem ícone, e o `nav`/`ol`, que são landmarks e listas.
- **`design.md` atualizado** (§4.1, §4.3 item 5, §4.11, §5 e checklist §9): a regra deixou de recomendar `aria-label` divergente e passou a recomendar texto `.sr-only` depois do texto visível.
- **I1:** retirei o script inline do `<head>`. Agora a classe `js` é adicionada na primeira linha do IIFE de `script.js`. Se o script falhar, todos os `.reveal` ficam visíveis (verificado no Chrome headless simulando `script.js` ausente: página inteira visível).
- **M1:** criei o link `.menu-link` (`href="#menu"`), que só aparece sem a classe `js`, no mesmo lugar e no mesmo tamanho do botão. Ele abre o painel do menu via `:target`, e os links do menu o fecham ao navegar. Com JS, o botão `.menu-toggle` assume e o link some. Como os dois têm o mesmo tamanho, a troca não desloca o layout (verificado sem JS, com `#menu`).

### Recomendadas
- **Feito à mão (desktop ≥ 900px):** as colunas agora se esticam (`align-items: stretch`) e o mosaico usa uma foto grande em largura total que ocupa a altura disponível (`grid-template-rows: minmax(280px, 1fr) auto`), com as duas fotos quadradas embaixo. Assim o mosaico fica com a mesma altura do texto e o retrato, sem as faixas vazias de cerca de 230px (verificado em 1280px). O celular não muda.
- **Coerência entre texto e foto:** na Bolsa Lua, a frase agora é "Retangular de tiracolo, com aba e flores bordadas à mão.". Na Bolsa Noite, o material agora é "fio fosco em ponto pipoca". No depoimento 3, troquei "brilho discreto" por "textura discreta". O `design.md` §4.3 (tabela) foi atualizado.
- **Hero:** nenhuma foto de `assets/` serve como substituta. A `bolsa-marsala.jpg` tem a paleta certa, mas não mostra a bolsa inteira, só tem 800px e já está na coleção. Por isso apliquei um tratamento provisório em CSS: véu rosé `#F3DDD3` em `mix-blend-mode: multiply`, que leva o fundo menta para o bege quente, mais `saturate(.82) hue-rotate(-8deg)` na foto, que puxa o vermelho vivo para o carmim/vinho, e um filete interno vinho no arco. Está marcado no CSS para remover quando chegar a foto real.
- **M3:** os links das licenças, nos créditos, viraram uma lista com `display: inline-flex; min-height: 44px`.
- **M5:** gerei versões de 400px das 6 fotos de produto (`bolsa-*-400.jpg`, de 42 a 47 KB cada) e coloquei `srcset` com 400w/800w e `sizes="(min-width: 900px) 372px, (min-width: 600px) 45vw, 90vw"`.
- **I2/M4 (preparação para publicar):** coloquei no `<head>` um comentário PLACEHOLDER com `canonical`, `og:url` e as URLs absolutas de `og:image`/`twitter:image`, prontos para descomentar. No JSON-LD entraram `url`, `logo` e `image` com caminho relativo, e um comentário HTML acima explica como trocar pelas URLs absolutas do domínio.

### Pendências
- Domínio final: aplicar `canonical`, `og:url` e as URLs absolutas (og/twitter/JSON-LD) e decidir como publicar (pasta do projeto inteira ou `assets/` copiado para `site/`, item M2).
- Trocar a foto do hero por uma foto real (bolsa vinho sobre fundo neutro quente), remover o tratamento `.hero__frame::before`/`filter` e refazer a `og-image.jpg`.
- A coleção continua com fotos de banco em cores variadas (só a Marsala é vinho). Isso se resolve com as fotos reais.
- Continuam valendo as pendências da iteração 1: dados fictícios, depoimentos de exemplo e fotos de banco.

## Iteração 1 (2026-11-15): primeira versão

### Feito
- `index.html`, `styles.css` e `script.js` em HTML/CSS/JS puro, mobile-first, com tokens do `design.md` (seção 2.6) no `:root`.
- Seções na ordem do design: cabeçalho fixo com menu mobile acessível, hero em arco com selo e bloco rosé texturizado, Coleção (6 cards com link de WhatsApp por modelo), Sobre (mosaico, citação e 4 etapas), Como encomendar (4 passos), Diferenciais, Depoimentos, FAQ (`<details>`), CTA final vinho, rodapé e botão flutuante (< 900px).
- Divisor `divisor-ponto.svg` entre as seções creme vizinhas (Hero/Coleção e Como encomendar/Diferenciais).
- Frete pago pela compradora (dado REAL) no passo 4 de "Como encomendar", na linha de pagamento abaixo dos passos, no FAQ ("Quem paga o frete?") e no rodapé.
- Dados de contato do `dados-negocio.md` (fictícios), com comentários HTML `FICTÍCIO`/`EXEMPLO` e um comentário geral no `<head>` avisando que dados e fotos são de exemplo.
- JSON-LD `Store` copiado do `dados-negocio.md`. Meta description, Open Graph, Twitter Card, favicon SVG/PNG e apple-touch-icon.
- Fotos: todas as 13 de `imagens.md`, com o `alt` sugerido, `width`/`height`, `object-fit: cover` e `loading="lazy"` fora do hero. Hero com `srcset` 800w/1200w, `fetchpriority="high"` e preload.
- Créditos das fotos num `<details>` "Créditos das fotos" no rodapé, com links das licenças Pexels e Unsplash.
- JS: classe `.is-scrolled` no header; menu com `aria-expanded`, Esc, foco no primeiro link e retorno ao botão, sem prender o foco; `aria-current` por IntersectionObserver; revelação ao rolar com atraso de 80ms (máx. 400ms); botão flutuante que aparece depois do CTA do hero e some no CTA final e no rodapé; fallback de iniciais nos avatares.
- `prefers-reduced-motion`: sem revelações, sem zoom nem translate, sem smooth scroll. Sem JS, todo o conteúdo fica visível.
- Verificado: tags balanceadas, um único `h1`, sem ids duplicados, todos os assets referenciados existem, sem rolagem horizontal em 360px (renderização headless no Chrome, 360px e 1280px).

### Desvios do design (justificados)
1. **Depoimentos com retratos** (o design 4.7 pedia só iniciais): feito a pedido do orquestrador. O avatar de iniciais em CSS fica por baixo da foto e aparece sozinho se ela não carregar. Cada card tem selo "Exemplo", `alt="Foto ilustrativa de cliente"` e a nota "Depoimentos e fotos ilustrativos".
2. **Foto extra `artesa-trabalhando.jpg`** no Sobre, abaixo da citação (o design previa só 3 fotos no mosaico). Entrou porque a regra é usar todas as fotos de `imagens.md`. A legenda diz "Foto ilustrativa".
3. **Frase da Bolsa Jardim**: troquei "Quadradinhos floridos unidos à mão" por "Rosas em relevo tecidas à mão, uma a uma", porque a foto não é granny square (ver `imagens.md`).
4. **Ícones como sprite SVG inline** (cópia dos `assets/icon-*.svg`) em vez de `<img>`: assim eles herdam `currentColor` e as cores dos tokens, e funcionam ao abrir o arquivo direto (via `file://`, `mask-image` falha no Chrome). Logo, selo e divisor continuam como `<img>` de `../assets/`.
5. **Trust line do hero**: usei o ícone de agulha em "Feita sob encomenda", porque o design não diz qual ícone usar nesse item.
6. **Header no desktop**: o botão diz "Encomendar" (`.btn--sm`). No menu mobile, ele mostra "Encomendar pelo WhatsApp" em largura total, como no design.
7. **Sobre no celular**: a ordem é texto, mosaico, citação, retrato e etapas (`display: contents` + `order`), seguindo o design 4.4.

### Pendências
- `og:image` com caminho relativo: trocar pela URL absoluta do domínio final.
- Sem JS, a navegação do celular fica oculta. As seções continuam acessíveis rolando a página e pelos CTAs.
- Antes de publicar, trocar todos os dados fictícios, as fotos de banco e os depoimentos de exemplo.
