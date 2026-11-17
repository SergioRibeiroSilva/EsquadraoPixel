# CHANGELOG: Futebol Kids (site)

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
