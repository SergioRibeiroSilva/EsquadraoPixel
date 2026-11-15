# CHANGELOG: Corpo Diaconal, AD Catedral Baleia

## v1 (2026-11-15): primeira versão (etapa 5)

### Feito
- `index.html`, `styles.css` e `script.js` com as 14 seções do `design.md`, na ordem e com a alternância de fundos prevista. Toda a copy vem de `conteudo.md`, sem reescrita.
- Tokens do `design.md` 2.7 no `:root`. Tipografia Lora + Source Sans 3 (Google Fonts, `display=swap`). Layout mobile first com breakpoints de 600, 900, 1100 e 1280px.
- **Mapa interativo do Google** (iframe) com as coordenadas de `dados-negocio.md` (-15.813602, -47.913748): `title` acessível, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"`, `allowfullscreen` e `border: 0`. Proporção 4:3 no celular e 16:11 a partir de 900px (altura mínima de 320px). Ao lado ficam o endereço em texto, "Como chegar", "Abrir no Google Maps" e o selo "Localização aproximada, a confirmar".
- **WhatsApp numa constante única**: `WHATSAPP = '556199055252'` em `script.js` (comentário A CONFIRMAR). Os links `[data-wa="geral|ajuda|servir"]` são montados a partir dela, com as 3 mensagens de `dados-negocio.md`. Os `href` do HTML ficam só como reserva para quem navega sem JavaScript.
- **Formulário "Precisa de ajuda?"**: monta a mensagem no modelo do `conteudo.md` (as linhas vazias são omitidas) e abre o `wa.me` em nova aba. O erro "Escolha uma opção de ajuda." aparece com ícone, `aria-invalid` e `aria-describedby`, e o foco vai para o primeiro rádio. Há mensagem de sucesso em `role="status"` e uma alternativa com link e telefone quando o pop-up é bloqueado. Sem JS, aparece o `<noscript>` do conteúdo.
- **Ícones e divisor de onda inline** (sprite `<symbol>` + `<use>`, copiados de `assets/`), para que o `currentColor` funcione. Ondas de cor fixa (`onda-hero`, `onda-fundo`, `onda-linha`) entram via `<img alt="" aria-hidden>`.
- **Fotos com `<picture>` WebP + JPG**, com `width`/`height`, `object-fit: cover` e o `alt` de `imagens.md`. O hero usa `fetchpriority="high"` e preload, sem lazy. No celular ele fica em 4:3 com `object-position: 50% 70%`; a partir de 900px, em 4:5 com moldura em arco. A foto de Servir só aparece a partir de 900px e a de Ajuda a partir de 1100px (com `object-position: 50% 40%`); as duas usam lazy.
- **Selo "a confirmar"** (componente 4.8), com variantes clara e escura e comentário `<!-- A CONFIRMAR -->` em todos os dados marcados: horários, WhatsApp, telefone, e-mail, CEP, Instagram, pastor presidente, coordenação, áreas, passos e coordenadas.
- **JSON-LD `Church`** de `dados-negocio.md` no `<head>`.
- **Créditos das fotos** no rodapé e na `figcaption` conforme a seção 3 de `imagens.md` (Josue Marinho, Wikimedia Commons, CC BY 3.0, recortada).
- **Acessibilidade**: link para pular ao conteúdo, landmarks, um único H1 e H2/H3/H4 em ordem. Menu mobile com `aria-expanded`, foco preso, Esc, retorno do foco e trava de rolagem. Scroll-spy com `aria-current`, foco visível (petróleo no claro, dourado no escuro), alvos de 44px ou mais, FAQ com `<details>` nativo, agenda em `<table>` com `caption` e aviso de nova aba em todos os links externos. As animações de entrada são progressivas (só com JS) e são desligadas com `prefers-reduced-motion`.
- **Verificação**: estrutura de tags, ids únicos, âncoras e referências ARIA conferidas por script. Todos os assets referenciados existem. Capturas no Edge headless a 360px (sem rolagem horizontal) e a 1280px.

### Divergências do design (justificadas)
1. **Crédito da foto do templo**: o `design.md` e o `conteudo.md` ([figcaption] e [creditos]) citam "Gabriel Jabur/Agência Brasília, CC BY 2.0". Essa foto não foi usada (ver `imagens.md`), então foi aplicado o texto de `imagens.md` seção 3. **O redator deve atualizar o `conteudo.md`.**
2. **Logotipo inline** (símbolo SVG + texto HTML) em vez de `<img src="logo-diaconia.svg">`. Assim o "Corpo Diaconal" sai em Lora: dentro de `<img>`, o SVG não carrega fontes web e cairia em Georgia. Visual e cores iguais aos do SVG.
3. **Servir**: o cabeçalho da seção (eyebrow, H2, lead e versículo) fica numa linha inteira acima das 2 colunas (requisitos | passos), para equilibrar as alturas. O conteúdo e a ordem de leitura não mudaram.
4. **Agenda**: a tabela usa as colunas Culto | Dia | Horário (o design sugeria começar pelo dia), porque as linhas "Culto de ensino" e "Santa Ceia" não têm dia definido. A Santa Ceia mostra "–" (decorativo) na coluna de horário.
5. **Navegação desktop**: o espaço entre os links é de 4px entre 1100 e 1279px (16px a partir de 1280px), para caber logo, 6 links e o CTA sem quebrar a linha.
6. **Painel do formulário** branco também no celular (o design prevê o painel a partir de 900px), para destacar os campos sobre o fundo creme.
7. **Aviso da agenda**: usado o texto do `conteudo.md` ("Horários sujeitos a alteração. Confirme com a secretaria da igreja."), que tem prioridade sobre o exemplo do design.
8. **Modo escuro**: não implementado (é opcional; a paleta foi validada só para o tema claro).

### Pendências (antes de publicar)
- **WhatsApp (61) 9905-5252**: confirmar se tem 9 dígitos. Trocar em `script.js` (`WHATSAPP`) e localizar/substituir `556199055252` no `index.html`.
- **A CONFIRMAR** (`dados-negocio.md`): CEP, telefone fixo, e-mail, Instagram, coordenadas, horários dos cultos, nome do pastor presidente, áreas de atuação e passos de ingresso. Ao confirmar cada dado, apague o `<span class="selo-confirmar">` correspondente. Se a igreja não confirmar algum campo do JSON-LD, remova-o.
- **Liderança**: placeholders `[Nome do ...]` e `avatar-placeholder.svg`, até a liderança autorizar nomes e fotos.
- **Fotos ilustrativas** (hero, servir, ajuda) e a foto do templo, que é anterior à restauração de 2015: substituir por fotos reais da igreja.
- **Citações ARC**: conferir a redação (pendência 5 do `conteudo.md`).
- **`og:image` e `og:url`**: trocar por URLs absolutas depois da publicação ([PLACEHOLDER]).
- **Assets**: o site referencia `../assets/` (abre com duplo clique em `index.html`). Para publicar, suba a pasta `assets/` junto, no mesmo nível de `site/`, ou ajuste os caminhos.

## v2 (2026-11-15): ciclo 2 (correções de `avaliacao.md` e `avaliacao-tecnica.md`)

### Corrigido
1. **[Bloqueante, T1 + T13] Menu mobile**: o `backdrop-filter` saiu do `.cabecalho` e foi para `.cabecalho::before` (`position:absolute; inset:0; z-index:-1`, fundo `rgba(247,243,234,.97)`). Sem o filtro no ancestral, o `#menu` fixo volta a medir `100vh - header`. Conferido com Playwright + Edge headless: em 360px o painel mede 716px e em 768px mede 960px, e os 6 links e o botão "Fale com a diaconia" ficam visíveis sem rolagem. Capturas: `capturas/ciclo2-celular-menu-aberto.png` e `capturas/ciclo2-tablet-menu-aberto.png`. A opacidade de .97 também resolve o contraste limítrofe da `.marca__l2` (T13).
2. **[T2] Agenda no celular**: abaixo de 600px, cada `<tr>` vira grade (nome em negrito na linha 1, dia na linha 2, horário à direita e centralizado). Foram acrescentados `role="table|rowgroup|row|columnheader|rowheader|cell"` para manter a semântica de tabela quando o `display` muda. Em 360px, cada nome ocupa uma linha só (28px). Captura: `capturas/ciclo2-celular-agenda.png`.
3. **[T3] `site/` autocontido**: os assets usados foram copiados para `site/assets/` (favicon, og-image, 3 ondas, avatar e as 4 fotos em JPG/WebP), e todas as referências passaram de `../assets/` para `assets/`. O `styles.css` e o `script.js` não referenciavam arquivos. A pasta `assets/` do projeto continua sendo a fonte original.
4. **[T4 + T11] SEO**: `<link rel="canonical">`, `og:url` e `og:image` absolutos com o domínio provisório `https://SEU-DOMINIO/`. No JSON-LD entraram `url`, `image` e `logo` com o mesmo domínio. O JSON continua válido.
5. **[T6] E-mail**: `<wbr>` depois do "@" (localização e rodapé) e `overflow-wrap: break-word` no lugar de `anywhere`, em `.contato__item dd`, `.contato__link` e `.rodape__lista li`. A quebra agora cai em "secretaria@" / "catedralbaleia.com.br" (`capturas/ciclo2-celular-contato.png`).
6. **[T8] Nome acessível da marca**: `aria-label="Corpo Diaconal AD Catedral Baleia, voltar ao início"` nos dois links da marca, igual ao texto visível.
7. **[T9] `inert`**: com o menu aberto, `main` e `.rodape` recebem `inert` (propriedade e atributo). O atributo sai quando o menu fecha (Esc, clique em link ou passagem para desktop). Conferido por script.
8. **[T7] Alvos de toque**: `.rodape__lista a` passou a ter `min-width: 44px` ("Servir" e "Ajuda" medem 44x44). Os links inline do FAQ e o "CC BY 3.0" receberam `padding-block: .6em`, que aumenta a área de toque sem mudar a altura da linha (44px e 39px de altura; o WCAG 2.5.8 pede 24px).
9. **[T12] `srcset`**: versões de 640px das 4 fotos (JPG e WebP, em `site/assets/fotos/*-640.*`), com `srcset`/`sizes` no `<source>` e no `<img>`, além de `imagesrcset` no preload do hero. Em 360px o hero baixa `hero-servico-640.webp` (15 KB), e o templo cai de 147 KB para 64 KB.
10. **Texto (redator)**: o `alt` do hero passou a ser "Cesta de ofertas passa entre os bancos durante o culto (foto ilustrativa)".

### Verificação
- Tags equilibradas (script), JSON-LD válido e todos os `assets/` referenciados existem em `site/assets/`.
- Playwright + Edge headless: sem erros de console, sem rolagem horizontal (360, 768 e 1280px) e cabeçalho desktop sem mudança visual (`capturas/ciclo2-desktop-dobra.png`).

### Não feito (registrado)
- **T10 (navegação sem JS abaixo de 1100px)**: fica como limitação conhecida. Sem JavaScript, o rodapé continua com todos os links de seção.
- **`openingHoursSpecification` no JSON-LD**: mantido até a igreja confirmar os horários. Antes de publicar, retire-o ou troque-o por `Event`.

### Pendências atualizadas
- **Domínio**: trocar `https://SEU-DOMINIO/` pelo domínio real (localizar e substituir no `index.html`: canonical, og:url, og:image e JSON-LD url/image/logo).
- **Assets**: a pendência da v1 sobre `../assets/` foi resolvida. Publique só a pasta `site/`. Se trocar alguma foto, gere também a versão `-640` ou ajuste o `srcset`.
- As demais pendências da v1 continuam: WhatsApp, dados "a confirmar", liderança, fotos reais e citações ARC.
