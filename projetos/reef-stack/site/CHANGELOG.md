# CHANGELOG: Reef Stack

## Iteração 2 (2026-11-16): correções de `avaliacao.md` e `avaliacao-tecnica.md` (ciclo 2)

### Correções obrigatórias
- **C1 (B1, WCAG 2.5.3)**: o `aria-label` do botão flutuante agora é "Pedir no WhatsApp (abre o WhatsApp)" e contém o rótulo visível.
- **C2 (I1/T1)**: saíram as duas etiquetas "Revisão técnica pendente" da tabela marinha. pH ("Alcalino e estável") e Nitrato ("Baixo e controlado") usam a faixa e a observação de `conteudo.md` (Revisões > Ciclo 2), sem números. A versão empilhada (cartões abaixo de 600 px) usa o mesmo HTML e foi conferida em 360 px. A classe `.etiqueta-pendente` foi removida do CSS.
- **C3 (I2)**: o Google Fonts e os 2 `preconnect` foram removidos. Inter e Sora agora ficam em `assets/fonts/` (`inter-latin-var.woff2`, 48 KB, e `sora-latin-var.woff2`, 25 KB). São arquivos variáveis, com o subconjunto latin, os mesmos que o Google Fonts serve. Cada um cobre todos os pesos usados (Inter 400–700, Sora 600–700) num só arquivo, o que dá menos requisições que um arquivo por peso. Usam `@font-face` com `font-weight` em faixa, `font-display: swap` e o mesmo `unicode-range` latin, e as duas fontes têm `<link rel="preload" ... crossorigin>`. **Licença:** Inter (Rasmus Andersson) e Sora (Jonathan Barnbrook / Julián Moncada) são distribuídas sob a **SIL Open Font License 1.1**, que permite hospedar e redistribuir as fontes junto com o site, desde que não sejam vendidas sozinhas. O LCP abaixo de 2,5 s deve ser confirmado pelo `inspetor-visual` (Lighthouse).
  - Observação: se o site for aberto direto do disco (`file://`), o Edge/Chrome bloqueia o `preload` por CORS e mostra um erro no console. As fontes aparecem mesmo assim, pelo `@font-face`. Num servidor (`http://`) não há erro nenhum (conferido).

### Melhorias recomendadas
- **M1**: o botão de pausa foi para o canto superior direito do hero (`top: 12px`) e aparece na primeira dobra em 360 px (76–120 px) e em 1280 px (84–128 px). A partir de 900 px, o hero passa a ter `padding` de `--sp-7` e `min-height: min(728px, 100vh - cabeçalho)`, e a cascata baixou de 72% para 44%. Em 1280 x 800, o hero termina em 800 px e "Mergulhar no marinho" fica inteiro (cartão até 742 px).
- **M2**: abaixo de 600 px, `.caminho-conteudo` tem `padding-top: 32px` e o degradê vai de .8 em 55% até transparente, como no design §5.4. A partir de 600 px, continua o degradê anterior.
- **M3**: `scroll-padding-bottom: 88px` no `html`. O botão flutuante agora também some quando `#visite` ou o rodapé aparecem na tela, porque essas áreas já têm botões de WhatsApp. É o mesmo IntersectionObserver do hero, agora com 3 alvos. Abaixo de 600 px, o botão mede 48 px e fica a 12 px da borda.
- **M4**: `sizes` corrigido. Loja: `(min-width: 900px) 560px, calc(100vw - 74px)`. Clube e vitrine: `calc(100vw - 64px)` entre 600 e 899 px e `calc(100vw - 40px)` abaixo de 600 px.
- **M5**: as regiões das tabelas passaram a se chamar "Parâmetros de água doce" e "Parâmetros de marinho", sem "role para o lado". O `tabindex="0"` saiu do HTML. Agora o JS só o coloca quando há rolagem (`scrollWidth > clientWidth`): o cálculo roda ao trocar de aba e ao redimensionar a janela.
- **M6**: Instagram e YouTube do rodapé deixaram de ser links (`href="#"`). Viraram `<span class="rede-em-breve">` sem foco, com borda tracejada, texto oculto "Instagram/YouTube da Reef Stack: em breve" e a nota visível "Perfis em breve". Os comentários `FICTÍCIO` continuam no HTML e o script que cancelava o clique foi removido. **Divergência de copy:** "em breve" e "Perfis em breve" não estão no `conteudo.md`. Entraram a pedido do orquestrador (M6) e o redator deve validá-los.

### Verificação (Edge sem janela, playwright-core, http e file)
- 360, 768 e 1280 px: sem rolagem horizontal. Fontes carregadas (Inter 400–700, Sora 600–700). Nenhum link do Google Fonts. Nenhum "pendente" no HTML. Nenhum erro no console via http.
- Menu mobile (360 e 768): abre com `aria-expanded="true"` e `inert` em `main`. `Esc` fecha, tira o `inert` e devolve o foco ao botão do menu. As abas de parâmetros trocam sem erro. O botão flutuante fica escondido em `#visite` e visível em `#clube`.

### Pendências atualizadas
- A antiga pendência 6 (etiqueta "Revisão técnica pendente") foi resolvida no site. Se o usuário quiser números de pH e nitrato no marinho, falta a validação por um aquarista (pendência do usuário).
- Pendência 2: Instagram e YouTube agora aparecem como "em breve", sem link. Na publicação, troque por `<a href="URL real" target="_blank" rel="noopener">` com os rótulos `[rede-*-aria]` do `conteudo.md`.
- As demais pendências da iteração 1 continuam.

## Iteração 1 (2026-11-16): primeira versão

### Feito
- `index.html`, `styles.css` e `script.js` criados a partir de `design.md`, `conteudo.md` (copy usada sem reescrita), `dados-negocio.md` e `imagens.md`. O site é autocontido (`assets/...`) e abre com duplo clique. O único recurso externo é o Google Fonts (Sora 600/700 e Inter 400–700, `display=swap`).
- Seções na ordem do design §4: pular para o conteúdo, cabeçalho, hero, loja, doce × marinho, primeiros passos, parâmetros, clube, compromisso, depoimentos, FAQ, visite, rodapé e botão flutuante do WhatsApp.
- Tokens do design §2.7 viram variáveis no `:root`, com `.tema-escuro` no cabeçalho, no hero, no clube e no rodapé. O layout é mobile first, com breakpoints em 600, 900 e 1200 px.
- **WhatsApp**: o número fica numa única constante (`WHATSAPP_NUMERO` em `script.js`). As 5 mensagens (genérico, pedido, clube, montagem e kit iniciante) são montadas com `encodeURIComponent` em todo `a[data-wa]`. O `href` no HTML fica só como fallback sem JS. O formulário do clube monta a mensagem modelo do `conteudo.md`, abre o WhatsApp e mostra o texto de sucesso com o link "tentar de novo".
- **Abas doce × marinho**: seguem o padrão WAI-ARIA Tabs (setas, Home/End, `tabindex` móvel, ativação automática). As abas de espécies e de parâmetros ficam sincronizadas, e a escolha é guardada em `sessionStorage`. Os cartões-caminho do hero e os hashes `#especies-*` / `#parametros-*` ativam a aba certa. Sem JS, os dois painéis aparecem um após o outro e a lista de abas fica oculta.
- **Tabelas**: comparativo e parâmetros com `caption`, `th scope` e roles ARIA explícitos. Abaixo de 600 px, cada linha vira um cartão com `data-label`. Entre 600 e 700 px, a tabela de parâmetros rola dentro de uma região focável e rotulada.
- **Animações**: bolhas (6 no celular, 12 a partir de 600 px) e cáusticas animam só `transform`/`opacity`. O botão de pausa tem `aria-pressed` e guarda a escolha em `localStorage` (`reefstack-movimento`). As animações também param fora da tela (IntersectionObserver). Com `prefers-reduced-motion`, as bolhas somem, as cáusticas ficam paradas e o botão de pausa é ocultado.
- **Menu mobile**: cabeçalho com fundo sólido e sem `backdrop-filter`/`filter`/`transform`/`will-change` nos ancestrais. O painel é `position: fixed` e ocupa a tela toda (conferido no Edge em 360 px). Com o menu aberto: `inert` em `main`, rodapé, botão flutuante e link de pular; `body` sem rolagem; foco no primeiro link e Tab preso no cabeçalho. `Esc` fecha e devolve o foco ao botão. O ícone de três ondas vira X.
- Ícones inline num sprite `<symbol>` com `currentColor`. Logo `<img>` com 186×40 (viewBox real).
- Fotos em `<picture>` WebP + JPG com `srcset` nas larguras existentes: loja 640/1200, clube 640/1100, vitrine 640/1000, caminhos 480/800, espécies 480/720. As do hero não usam lazy (a primeira com `fetchpriority="high"`); as demais usam `loading="lazy"`. Os `alt` vêm de `imagens.md` (mais fiéis às fotos, como pede o `conteudo.md`).
- Dia de hoje destacado nos horários, com "Hoje" para leitores de tela. Sombra no cabeçalho ao rolar (sentinela), item ativo na navegação e botão flutuante que só aparece depois do hero.
- E-mails com `<wbr>` depois do `@`. Alvos de toque de 44 px ou mais, inclusive nos links do rodapé, nos ícones de redes, no `summary` e nos links dos créditos (verificado por script em 360 px).
- Créditos das fotos no rodapé, dentro de `<details>`, conforme `imagens.md` §1.1, incluindo os 3 CC BY obrigatórios com link para a obra e a licença e a indicação "Recortada e redimensionada".
- Verificação no Edge sem janela (playwright-core): sem rolagem horizontal em 360 e 1280 px; menu aberto em 360 px cobre a tela (64 → 780 px); Esc fecha e tira o `inert`; abas sincronizadas; nenhum asset faltando; nenhum erro no console; HTML balanceado, sem ids duplicados e com hierarquia de títulos correta.

### Divergências do design (com motivo)
- **Cascata do hero (≥ 900 px)**: o cartão "Água doce" fica **à frente** do "Marinho" (o design colocava o marinho por cima). Com o marinho por cima, a legenda "Começar na água doce" ficava encoberta. A etiqueta "Marinho" foi para o canto superior direito para continuar visível.
- **Sublinhado em onda do H1**: usa `assets/onda-sublinhado.svg` como fundo com `box-decoration-break: clone`, para acompanhar cada linha quando "camada por camada" quebra (o SVG inline esticava além da palavra).
- **Ciclo do nitrogênio**: a versão horizontal aparece em 600–899 px e a partir de 1200 px; a vertical, abaixo de 600 px e entre 900 e 1199 px. No layout 7/5, a coluna estreita entre 900 e 1199 px deixaria os rótulos menores que 14 px.
- **Cartão "Montagem e manutenção"**: a variante escura só se aplica a partir de 900 px, como no design. Abaixo disso, o cartão é claro com ícone coral.
- **Facebook omitido** (não há perfil em `dados-negocio.md`). Os `aria-label` das redes ficaram sem "(abre em nova aba)", porque com `href="#"` nada abre. Ao trocar pelos links reais, use `target="_blank" rel="noopener"` e os rótulos do `conteudo.md`.
- **Instagram na seção Visite**: aparece como texto, sem link, enquanto for fictício.
- **Selo "Dados de exemplo"** no cartão de endereço e etiqueta "Exemplo" na nota dos depoimentos. São selos visuais permitidos por `dados-negocio.md`. O aviso do rodapé usa `--coral-400` sobre `--abismo-950` (cerca de 6,6:1).
- **Formulário**: "Os dois" vem marcado por padrão (sugestão do `conteudo.md`), então não há erro de interesse. Só o nome é validado.
- **Link "Precisa testar sua água?"** aponta para `#visite`.

### Pendências (antes de publicar)
1. **SEU-DOMINIO**: trocar `https://SEU-DOMINIO/` em `canonical`, `og:url` e `og:image` (`index.html`, no `<head>`).
2. **Dados FICTÍCIOS** (todos marcados com `<!-- FICTÍCIO -->` no HTML): número do WhatsApp (constante `WHATSAPP_NUMERO` em `script.js` e os fallbacks no HTML), telefone fixo (`tel:+551100000000`), e-mail, endereço, horários, Instagram/YouTube (`href="#"`), datas do clube e oficinas, preços "a partir de", diferenciais (quarentena, teste de água, entrega), entrega no FAQ e link de amostra de água.
3. **JSON-LD** omitido de propósito. Publicar com dados reais usando o modelo de `dados-negocio.md` §3.
4. **Mapa interativo**: não incluído (sem coordenadas reais). Quando chegarem, trocar o mapa ilustrativo pelo iframe do Google.
5. **Fotos a substituir**: loja, vitrine, encontro do clube e os 3 retratos de depoimento. Os depoimentos também são exemplos.
6. ~~**Revisão técnica**: pH e nitrato do marinho aparecem com a etiqueta "Revisão técnica pendente".~~ Resolvido na iteração 2.
7. Condições do clube (mensalidade) continuam pendentes. O texto remete ao WhatsApp.
