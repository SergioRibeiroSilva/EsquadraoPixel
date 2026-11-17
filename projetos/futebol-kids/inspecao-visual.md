# Inspeção visual: Futebol Kids

## Ambiente
- **Navegador:** Microsoft Edge 157.0.4341.60 (headless), via `playwright-core` (`channel: 'msedge'`)
- **Método:** A (Playwright com o navegador instalado), mais Lighthouse via `npx`
- **Servidor:** servidor estático local (Node `http` e `http-server` na porta 8083 para o Lighthouse), encerrado no fim
- **Data:** 2026-11-17
- **Iteração:** ciclo 1 (primeira inspeção, sem rodada anterior para comparar)
- **Larguras:** celular 360x800, tablet 768x1024, desktop 1440x900; testes extras de menu em 1024, 1099, 1100 e 1280

## Resumo
**PROBLEMAS ENCONTRADOS**: nenhum bloqueante. 2 importantes e 6 menores. Não há rolagem horizontal, imagens quebradas, erros de console nem requisições com falha. O contraste do hero passa no WCAG AA nas três larguras. O menu hambúrguer troca exatamente entre 1099 e 1100 px. O foco do teclado não fica escondido sob o cabeçalho fixo nem sob o botão flutuante. O mapa carrega.

## Tabela de achados

| ID | Largura | Seção | Problema observado | Evidência | Severidade |
|---|---|---|---|---|---|
| V1 | celular, desktop | Contato (mapa) | O cartão de contato fica por cima da parte de baixo do mapa (celular) e da faixa direita do mapa (desktop). Ele cobre a atribuição do Google ("Termos", "Informar erro"; no desktop o texto aparece cortado em "Ir…") e, no celular, também o seletor de camada (miniatura de satélite) e o canto inferior do mapa | `capturas/celular-mapa.png`, `capturas/desktop-mapa.png`; no desktop o iframe mede 800x500 a partir de x=120 e o cartão começa em x≈820 | importante |
| V2 | tablet, desktop | Diferenciais (grade "bento") | A grade fica com buracos. No tablet, "Professores com CREF" fica sozinho numa linha com a coluna direita vazia, e "Relatório para os pais" fica sozinho na última linha. No desktop, "Relatório para os pais" fica sozinho na última linha, com ~2/3 da largura vazios | `capturas/tablet-inteira.jpg` (seção "Cuidado que os pais enxergam"), `capturas/desktop-inteira.jpg` | importante |
| V3 | celular, desktop | CTA final | Os confetes decorativos passam por cima das letras do título "Que tal começar com uma aula grátis?" (triângulo verde em "tal", pontos em "começar"). A linha do meio-campo e o círculo central do fundo atravessam a 1ª linha do texto de apoio (desktop) e a linha "vê de perto" (celular) | `capturas/celular-cta-final.png`, `capturas/desktop-inteira.jpg` (fim da página) | menor |
| V4 | desktop | Hero | Os confetes do hero passam por cima do botão amarelo "Agendar aula grátis" (um triângulo azul sobre "aula" e um ponto sobre "grátis") | `capturas/desktop-dobra.png` | menor |
| V5 | desktop | Hero | O título branco cruza a camisa branca de uma criança ("MBAPPE"). O contraste mínimo medido ali é **4,47:1** (p99 6,6:1). Passa no AA para texto grande (3:1), mas fica abaixo dos ≥ 6,0:1 que o design.md (§2.2) declara | `capturas/desktop-hero-sem-texto.png` + medição de pixels | menor |
| V6 | desktop | Metodologia | O passo 3 ("Jogo final") está ~15 px mais alto que os passos 1 e 2: o ícone e o H3 não se alinham com os dos outros passos | `capturas/desktop-inteira.jpg` (ícone/H3 do passo 3 em y≈1497/1540 do segmento contra ≈1512/1555 nos outros) | menor |
| V7 | desktop | Planos | No cartão "1x por semana", os 3 itens da lista ficam muito espaçados (esticados até a altura dos outros cartões), enquanto os cartões 2x e 3x têm espaçamento compacto | `capturas/desktop-inteira.jpg` (seção Planos) | menor |
| V8 | celular | Contato | O e-mail quebra no meio da palavra ("contato@futebolkids.exem / plo") e os telefones quebram no hífen ("(00) 90000- / 0000") | `capturas/celular-inteira.jpg` (cartão de contato), `capturas/celular-mapa.png` | menor |

## Verificações pedidas

### Contraste do texto do hero sobre a foto real
Método: o texto, o cabeçalho, o confete e o placar foram ocultados. Depois a captura foi feita e a luminância de cada pixel foi medida dentro da caixa de cada texto, para comparar com o branco.

| Elemento | Celular (pior pixel / p99) | Tablet | Desktop | Exigido |
|---|---|---|---|---|
| Título (texto grande) | 5,14:1 / 5,56:1 | 9,79:1 / 11,2:1 | **4,47:1** / 6,60:1 | 3:1 |
| Parágrafo de apoio (texto normal) | 8,93:1 / 10,57:1 | 10,66:1 / 11,6:1 | 9,69:1 / 10,94:1 | 4,5:1 |
| Botão "Ver turmas" (contorno) | 11,76:1 | 11,96:1 | 11,95:1 | 4,5:1 |

O selo amarelo tem fundo próprio, então não depende da foto. Tudo passa no AA (só o título no desktop fica abaixo da meta do design: V5). Capturas: `celular-hero-sem-texto.png`, `desktop-hero-sem-texto.png`. No celular, a foto aparece escurecida e as crianças ficam quase todas atrás do texto. Isso está descrito aqui, sem juízo de gosto.

### Menu hambúrguer até 1099 px
| Largura | Botão de menu | Menu em linha visível | Rolagem horizontal | Cabeçalho transborda |
|---|---|---|---|---|
| 1024 | visível | não | não | não |
| 1099 | visível | não | não | não |
| 1100 | oculto | sim | não | não |
| 1280 | oculto | sim | não | não |

Comportamento no celular:
- Ao abrir o menu, `aria-expanded="true"`, o rótulo vira "Fechar menu", o foco vai para "Benefícios" e a rolagem do `body` fica travada.
- O Tab circula dentro do painel: links → "Aula grátis" → "Fechar menu" → logo → links.
- Esc fecha o menu e devolve o foco ao botão.
- Tocar num link fecha o menu e rola até a seção, com o H2 de Turmas em y=266, abaixo do cabeçalho de 65 px.
- Os 7 links medem 320x56.

Capturas: `celular-menu-aberto.png`, `celular-menu-fechado.png`.

### Foco visível x cabeçalho fixo e botão flutuante
Todos os elementos focáveis foram percorridos com Tab nas 3 larguras (53, 52 e 53 elementos), com 650 ms de espera a cada passo. Para cada um foi conferido se o retângulo cruza o cabeçalho fixo ou o botão flutuante do WhatsApp, e se há contorno de foco.
- **Nenhum elemento ficou sob o cabeçalho nem sob o botão flutuante** depois de terminada a rolagem. O único sinal foi o "Pular para o conteúdo", que é desenhado de propósito acima do cabeçalho.
- Todos os elementos têm contorno de foco: azul de 3 px sólido no claro, com variante para o tema escuro.
- Observação sem severidade: durante a rolagem suave, o link "Não achou um horário bom?" passa por baixo do botão flutuante por uma fração de segundo antes de assentar em y=373. A posição final está correta.
- `capturas/desktop-foco.png`: foco visível em "Horários" no menu do desktop.

### Mapa (iframe)
- O iframe está presente: `https://www.google.com/maps?q=-15.793889,-47.882778&z=16&output=embed`, com `loading="lazy"` e título acessível.
- O frame carregou nas 3 larguras (`google.com/maps/embed?...` aparece na lista de frames) e o mapa aparece com o marcador nas capturas de viewport.
- Tamanhos: celular 320x240, tablet 707x530, desktop 800x500.
- Nas capturas de página inteira (`*-inteira.jpg`) o mapa aparece como um bloco verde-claro vazio. Isso é uma limitação da captura fullPage com iframe de outro domínio, e não uma falha do site: veja `celular-mapa.png` e `desktop-mapa.png`.
- Sobreposição do cartão: V1.

## Métricas

| Métrica | Celular | Tablet | Desktop |
|---|---|---|---|
| Rolagem horizontal (`scrollWidth` x `innerWidth`) | 360 / 360: **não** | 768 / 768: **não** | 1440 / 1440: **não** |
| Imagens quebradas | 0 | 0 | 0 |
| Imagens não carregadas no fim da rolagem | 3 (`treino-cones.jpg`, `trajetoria-bola.svg`, `bola-apito.svg`: elementos ocultos nessas larguras, com carregamento adiado; não aparecem quebrados na tela) | 3 (as mesmas) | 0 |
| Erros/avisos de console | 0 | 0 | 0 |
| Requisições com status ≥ 400 ou falha | 0 | 0 | 0 |
| Alvos de toque < 44 px | 0 interativos (só os 4 H3 das turmas com `tabindex="-1"`, alvos de foco programático e não de toque) | — | — |
| Placeholders visíveis (`[PLACEHOLDER`, `[PENDENTE`, Lorem) | 0 | 0 | 0 |
| Imagens distorcidas (proporção ≠ natural, sem `object-fit`) | 0 | 0 | 0 |
| Altura da página | 19.728 px | 15.837 px | 12.451 px |

**Fontes** (`document.fonts`): Baloo 2 700/800 e Nunito 400/600/700/800 carregadas, e `document.fonts.check` deu verdadeiro para as duas famílias, como pede o design.md. O peso Baloo 2 600, que está pedido na URL, não foi usado na página.

**Lighthouse** (celular, Edge headless, servidor local sem compressão):

| Desempenho | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|
| **91** | **100** | **100** | **100** |

- FCP 1,9 s; LCP 3,3 s; CLS 0; TBT 0 ms.
- Alertas: `render-blocking` (est. 720 ms, CSS das Google Fonts e styles.css), `lcp-discovery-insight` (falhou), `unused-css-rules` (14 KiB), CSS/JS sem minificação (8 + 2 KiB), `image-delivery` (39 KiB) e `bf-cache` (2 motivos).
- O alerta `document-latency` (43 KiB) vem da falta de compressão no servidor local de teste.

## Capturas (`capturas/`)
- `celular-inteira.jpg`, `tablet-inteira.jpg` e `desktop-inteira.jpg`: página inteira, salvas em JPEG q80 porque em PNG passavam de 1,5 MB
- `celular-dobra.png`, `tablet-dobra.png`, `desktop-dobra.png`
- `desktop-foco.png`: foco em "Horários"
- `celular-menu-aberto.png`, `celular-menu-fechado.png`
- `celular-mapa.png` (2x), `desktop-mapa.png`, `celular-cta-final.png` (2x)
- `celular-hero-sem-texto.png`, `desktop-hero-sem-texto.png`: base da medição de contraste

## Comparação com a rodada anterior
Não se aplica (ciclo 1).
