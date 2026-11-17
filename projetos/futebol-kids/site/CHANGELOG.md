# CHANGELOG: Futebol Kids (site)

## Iteração 2 · 2026-11-17 (vídeo de fundo no hero, pedido do usuário)

### Feito
- **Assets:** `assets/videos/hero.mp4` (3,26 MB) e `hero-poster.jpg` (158 KB) copiados para `site/assets/videos/`.
- **Imagem base (LCP e fallback), `design.md` §3.3.1 e §3.3.4:**
  - Novo contêiner `.hero-midia` com um `<picture>`. Abaixo de 900px, `hero-mobile.webp`/`.jpg` (4:5). A partir de 900px, a `<img>` usa `hero-poster.jpg` (1600x900).
  - A `<img>` tem `fetchpriority="high"`, não usa lazy e tem `alt=""`.
  - Os 2 preloads do `<head>` foram trocados pelos da spec: poster com `media="(min-width: 900px)"` e foto mobile WebP com `media="(max-width: 899px)"`, os dois com `fetchpriority="high"`. Não há preload do MP4.
  - `hero.jpg`/`hero-1280.jpg` saíram do HTML. Os arquivos continuam em `site/assets/fotos/`, mas não são usados.
- **Vídeo (`script.js`):**
  - Criado pelo JS depois do `load` (com `requestIdleCallback`, limite de 2 s), e só quando todas estas condições valem:
    - largura ≥ 900px;
    - sem `prefers-reduced-motion: reduce`;
    - sem `prefers-reduced-data: reduce`;
    - sem `saveData`;
    - conexão diferente de `2g` e `slow-2g`.
  - Atributos: `muted autoplay loop playsinline disablepictureinpicture`, `preload="auto"`, `poster`, `aria-hidden="true"` e `tabindex="-1"`, sem `controls`.
  - Entra com fade de 400 ms no evento `playing`.
  - Se houver `error` ou se `play()` for rejeitado (exceto `AbortError`), o vídeo e o botão são removidos e o poster fica. Testado bloqueando o MP4: sem botão órfão.
  - Tempo real:
    - Se o movimento reduzido passar para `reduce`, o vídeo e o botão são removidos. Se a preferência sair, eles são recriados.
    - Abaixo de 900px, o CSS esconde o vídeo e o botão, e o vídeo pausa. Ao voltar a 900px ou mais, retoma.
    - O vídeo pausa quando o hero sai da tela (IntersectionObserver, `threshold: 0`) e quando a aba fica oculta. Só retoma se o usuário não tiver pausado.
- **Botão pausar/reproduzir (§3.3.3):**
  - É um `<button>` de 48x48 criado junto com o vídeo, logo depois dos CTAs no DOM. A ordem de foco é CTA, CTA, botão, placar (conferido).
  - Usa `aria-label` e `title` que alternam entre "Pausar vídeo de fundo" e "Reproduzir vídeo de fundo", e `aria-controls="hero-video"`, sem `aria-pressed`.
  - Ícones SVG inline em `currentColor`, com `aria-hidden`.
  - Estilo: hover branco com ícone `--verde-900`, foco com anel amarelo e `scale(.94)` no ativo (só sem movimento reduzido).
  - A preferência fica em `localStorage['fk-hero-video']` (`pausado`/`tocando`), com `try/catch`. Com `pausado`, o vídeo é criado parado no 1º quadro (`preload="metadata"`, sem autoplay) e o botão mostra "Reproduzir".
- **Overlay:** agora é o `::after` de `.hero-midia`. No desktop, `background: var(--overlay-hero-lateral), var(--overlay-hero)`, com o novo token `--overlay-hero-lateral`. No mobile, `--overlay-hero-mobile`. Os valores reforçados da iteração 1 foram mantidos; são iguais ou mais fortes que os do design.
- **Texto:** lead em branco 100% (antes 94%). `text-shadow` no H1 e no lead a partir de 900px.
- **`object-position`:** tokens `--hero-midia-pos` (60% 45%), usado no poster e no vídeo, e `--hero-midia-pos-mobile` (50% 35%).
- **Camadas:** mídia (0), overlay (1), confete (2) e conteúdo (3). O arco, o placar, a bola e os confetes não mudaram.
- **Créditos no rodapé:** incluem o vídeo (Kampus Production, Pexels), como pede o checklist do `design.md` §8.
- **Verificação no Edge sem janela (playwright-core):**
  - 1366, 1920 e 900px: o vídeo toca e o botão funciona, inclusive a pausa fora da tela.
  - Movimento reduzido: o vídeo não é criado. Ao mudar para `reduce` em tempo real, ele é removido.
  - `saveData`: o vídeo não é criado.
  - 360px: só a foto, sem vídeo e sem rolagem horizontal.
  - Sem erros no console. HTML balanceado e sem `!important`.

### Divergências do design (com motivo)
1. **Posição do botão em ≥ 1200px:** o design pede a fórmula `max(var(--gutter), calc((100vw - var(--container)) / 2 + var(--gutter)))`. Aqui o botão está posicionado em relação a `.hero-conteudo`, um container de largura total cuja base coincide com a do hero. Por isso, `right: var(--gutter)` já alinha o botão à borda do conteúdo em qualquer largura; a fórmula somaria o recuo duas vezes. O `bottom: calc(var(--arco) + 96px)` vale como na spec. Conferido: o botão não encosta no placar em 900, 1366 e 1920px.
2. **Texto dos créditos:** mudou de "Fotos: Unsplash. Ver créditos" para "Fotos: Unsplash · Vídeo: Pexels. Ver créditos", com o vídeo também no texto expandido. Como agora o site usa material do Pexels, o redator deve confirmar o texto final.

### Pendências
- Inspetor: conferir o contraste do texto sobre o poster e sobre os quadros de 0, 8 e 15 s do vídeo, com o texto oculto. Conferir também se o MP4 fragmentado, sem `faststart`, toca no Firefox e no Safari; se não tocar, o fallback é o poster.
- Substituir o vídeo por material próprio com autorização antes de publicar. Se houver ffmpeg, refazer o MP4 com `+faststart` (`imagens.md` §2.3).
- Redator: confirmar o texto dos créditos (divergência 2).

## Iteração 1 · 2026-11-17 (implementação inicial)

### Feito
- `index.html`, `styles.css` e `script.js` em HTML/CSS/JS puro, sem dependências. Os assets foram copiados para `site/assets/` e usados com caminhos relativos (todos conferidos, nenhum link quebrado).
- Tokens do `design.md` §2.8 passados para variáveis no `:root`. Mobile first, com breakpoints em 600, 900 e 1200px.
- 14 blocos na ordem do design: cabeçalho fixo, hero em tela cheia com arco e placar do seletor de idade, benefícios, turmas ("figurinhas" com selo Sub-X), metodologia (linha do tempo vertical no celular e horizontal com trajetória a partir de 900px), diferenciais (bento), horários (`<table>` real que vira cards no mobile, sem duplicar o conteúdo), professores, planos, depoimentos (carrossel com scroll-snap), FAQ (`<details>`), contato com mapa, CTA final e rodapé.
- Copy usada exatamente como em `conteudo.md`. Contatos e links tirados de `dados-negocio.md`.
- **Mapa interativo do Google:** iframe de `dados-negocio.md` com `src`, `title`, `loading="lazy"`, `referrerpolicy` e `allowfullscreen` sem alteração. Proporção 4/3 no celular e 16/10 (mínimo de 420px) no desktop, com fundo `--verde-100` e "Carregando o mapa…" enquanto carrega. O endereço também aparece em texto, junto com os botões "Como chegar" e "Abrir no Google Maps".
- JSON-LD `SportsActivityLocation` de `dados-negocio.md` §3, com a descrição sem alteração.
- Metadados: title, description, Open Graph e favicon SVG.
- Rodapé com o aviso "Site de demonstração — dados fictícios", a etiqueta "Dados fictícios de demonstração" no card de contato e os créditos das fotos num `<details>`.
- **Fotos:** todas com `<picture>` (WebP + JPG), `width`/`height` e `object-fit: cover`.
  - Hero com `fetchpriority="high"` e preload separado para mobile e desktop. Os ajustes de `object-position` sugeridos pelo gerador foram aplicados: 50% 35% no mobile e 50% 30% no desktop.
  - As demais fotos usam `loading="lazy"`.
  - Os retratos de professor seguem o gênero dos nomes: Camila = `equipe-3`, Diego = `equipe-2`.
- **Ícones:** os SVG em `currentColor` viraram um sprite inline (`<symbol>` + `<use>`) para poder ser coloridos pelo CSS. Isso funciona também ao abrir por `file://`, onde `mask-image` é bloqueado.
- **Decisões finais sobre os rascunhos do design:** cargo dos professores em `--verde-800`, e anel de foco branco no botão amarelo.
- **Sem formulário:** toda conversão vai para o WhatsApp, com as mensagens de `conteudo.md` §4.2. Os links das turmas incluem o nome da turma.
- **Acessibilidade:**
  - Estrutura: skip link, landmarks, um único H1 e `aria-labelledby` em cada seção.
  - Foco: foco visível (azul no claro e amarelo no escuro), protegido com `scroll-padding` e `scroll-margin`.
  - Leitores de tela: aviso de nova aba em sr-only, e o preço é lido como "149 reais por mês".
  - Carrossel: `aria-roledescription`, "N de 3", setas do teclado e controles com `aria-disabled`/`aria-current`. Funciona sem JS.
  - Menu mobile: `aria-expanded`, Esc devolve o foco ao botão e o foco fica preso enquanto o menu está aberto.
  - Alvos de toque de 44px ou mais.
- **Movimento:** todas as animações ficam dentro de `prefers-reduced-motion: no-preference`:
  - Entrada do hero em CSS puro.
  - Bola do placar e bola do CTA.
  - Reveal só com `html.js`.
  - Trajetória desenhada com `clip-path`.
  - Pulso no card da turma vindo do seletor.
- **Botão flutuante do WhatsApp** (abaixo de 900px): aparece depois do placar e some no contato e no CTA final. Usa `visibility: hidden` e fica sempre visível sem JS.
- Verificações feitas: tags balanceadas, um H1, sem ids duplicados, todas as âncoras existem, sem `!important`. Capturas rápidas no Edge em 1366px e 360px.

### Divergências do design (com motivo)
1. **Hambúrguer até 1099px** (o design pede navegação completa a partir de 900px). Logo, 7 links e o botão "Aula grátis" não cabem em 900–1099px sem quebrar linha. As demais mudanças de 900px (header de 76px, hero desktop, sem botão flutuante) continuam valendo em 900px.
2. **Overlay do hero mais forte:**
   - Mobile: 85% a 50% da altura e 72% a 70%.
   - Desktop: 80% a 40% e 45% a 72%, mais um gradiente lateral à esquerda de até 55%.
   - Motivo: no celular o bloco de texto passa dos 55% inferiores previstos (H1, lead de 5 linhas e 2 botões empilhados). Com o reforço, o branco fica com ≥ 5,8:1 no pior caso. O inspetor deve conferir na captura real.
3. **FAQ:** o botão "Perguntar no WhatsApp" fica no fim do acordeão em todas as larguras, e não na coluna fixa do desktop. Assim existe um único link, na ordem natural de leitura (o design pede "no fim" no mobile).
4. **Trajetória da metodologia:** é desenhada com `clip-path`, e não com `stroke-dashoffset`, porque o SVG é usado como `<img>` e o traço já é tracejado. A bola do placar anima inteira; a sombra separada não foi animada.
5. **Créditos no rodapé:** "Fotos: Unsplash. Ver créditos" em vez de "Fotos: Unsplash, Pexels e Pixabay. Ver créditos". Segundo `imagens.md`, todas as fotos são do Unsplash, e o texto original estava factualmente errado.

### Pendências
- Redator: confirmar o texto dos créditos (divergência 5).
- Antes de publicar, substituir todos os dados fictícios: contatos, mapa e coordenadas (que hoje apontam para Brasília), horários, preços, professores e depoimentos. O JSON-LD também usa dados fictícios.
- Trocar as fotos de crianças, equipe e depoimentos por fotos próprias com autorização, e refazer o `og-image.jpg`. Em produção, usar URL absoluta no `og:image`.
- Inspetor: conferir o contraste do texto do hero sobre a foto real, nas duas larguras.
