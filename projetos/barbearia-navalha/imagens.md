# Imagens e assets: Barbearia Navalha

> Gerado pelo `gerador-imagens` a partir de `design.md` (seção 7). Data: 2026-11-14.
> Todos os SVG: XML validado, sem metadados, sem scripts, sem fontes externas, sem imagens embutidas, `viewBox` sem `width`/`height` fixos. Cores apenas da paleta: `#D4A94F`, `#F2EDE4`, `#B5ADA1`, `#141414`, `#1E1E1E`, `#2E2E2E`. Maior arquivo: 2,2 KB.

## SVG prontos

| # | Arquivo | Uso na página | viewBox / proporção | Texto alternativo | Status |
|---|---|---|---|---|---|
| 1 | `assets/logo-navalha.svg` | Logo no cabeçalho (32/36px de altura) e no rodapé (28px) | 0 0 200 40 (5:1) | Dentro do link: `alt=""`, porque o link tem `aria-label="Barbearia Navalha, início"`. Sozinho: "Barbearia Navalha" (já tem `<title>`) | pronto |
| 2 | `assets/monograma.svg` | CTA final (56px); base do favicon | 0 0 64 64 (1:1) | Decorativo no CTA: `alt=""` | pronto |
| 3 | `assets/favicon.svg` | `<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">` | 0 0 32 32 (1:1) | Não se aplica | pronto |
| 4 | `assets/brasao-hero.svg` | Hero, coluna direita (160px no mobile, até 420px no desktop) | 0 0 400 400 (1:1) | "Brasão da Barbearia Navalha" (`<title>` incluso). Arco inferior: "SOBRADINHO · DF" (atualizado em 2026-11-14) | pronto |
| 5 | `assets/divisor.svg` | Divisor sob os H2 das seções (96x12) | 0 0 96 12 (8:1) | Decorativo: `alt=""` / `aria-hidden="true"` | pronto |
| 6 | `assets/icones/ambiente.svg` | Diferencial "Ambiente acolhedor" (40px, latão) | 0 0 24 24 | Decorativo (`aria-hidden`) | pronto |
| 7 | `assets/icones/profissionais.svg` | Diferencial "Barbeiros experientes" (40px) | 0 0 24 24 | Decorativo | pronto |
| 8 | `assets/icones/produtos.svg` | Diferencial "Produtos selecionados" (40px) | 0 0 24 24 | Decorativo | pronto |
| 9a | `assets/icones/relogio.svg` | Linha de horários do hero e duração nos cards (16px) | 0 0 24 24 | Decorativo | pronto |
| 9b | `assets/icones/pin.svg` | Endereço na seção Contato | 0 0 24 24 | Decorativo | pronto |
| 9c | `assets/icones/telefone.svg` | Telefone na seção Contato e no rodapé | 0 0 24 24 | Decorativo | pronto |
| 9d | `assets/icones/info.svg` | Aviso "Depoimentos ilustrativos" | 0 0 24 24 | Decorativo | pronto |
| 9e | `assets/icones/seta-externa.svg` | Links externos (14px) | 0 0 24 24 | Decorativo + texto oculto "(abre em nova aba)" | pronto |
| 9f | `assets/icones/menu.svg` | Botão hambúrguer (24px) | 0 0 24 24 | Decorativo; o botão tem `aria-label="Abrir menu"` | pronto |
| 9g | `assets/icones/fechar.svg` | Botão hambúrguer aberto (24px) | 0 0 24 24 | Decorativo; o botão tem `aria-label="Fechar menu"` | pronto |
| 10a | `assets/icones/whatsapp.svg` | Botões "Agendar pelo WhatsApp" (20px) e rodapé (24px) | 0 0 24 24 | Decorativo; no rodapé o link tem `aria-label="WhatsApp da Barbearia Navalha"` | pronto |
| 10b | `assets/icones/instagram.svg` | Rodapé (24px) | 0 0 24 24 | Decorativo; o link tem `aria-label="Instagram da Barbearia Navalha (@barbearianavalha)"` | pronto |
| 11a | `assets/equipe/barbeiro-1.svg` | Avatar de Rafael Moreira (barba cheia) | 0 0 160 160 (1:1) | `alt=""` (nome no card) | substituído por `membro-N.jpg` (manter como fallback) |
| 11b | `assets/equipe/barbeiro-2.svg` | Avatar de Diego Santos (topete) | 0 0 160 160 (1:1) | `alt=""` | substituído por `membro-N.jpg` (manter como fallback) |
| 11c | `assets/equipe/barbeiro-3.svg` | Avatar de Lucas Almeida (boné) | 0 0 160 160 (1:1) | `alt=""` | substituído por `membro-N.jpg` (manter como fallback) |
| 12 | `assets/mapa-placeholder.svg` | Mapa da seção Contato | 0 0 800 500 (16:10) | "Mapa ilustrativo da região da Quadra 11, Sobradinho/DF" (`<title>` incluso). Atualizado em 2026-11-14 (endereço mudou para Sobradinho/DF) | pronto |

### Notas de implementação
- **Ícones** (6 a 10): `stroke="currentColor"`, traço 1.5, `aria-hidden="true"` já está no arquivo. Para herdar a cor do CSS (latão nos diferenciais, `--color-text` nos utilitários) eles precisam estar **inline** no HTML. Com `<img>`, o `currentColor` cai para preto. Alternativa sem inline: `mask-image: url(...)` com `background-color: currentColor`.
- **Brasão:** as linhas (anéis, escudo, navalha, tesoura, faixa) estão num único `<g>` com `stroke` e `fill="none"`, prontas para a animação de `stroke-dashoffset`, que só funciona com o SVG **inline**. Os anéis da tesoura e o pivô são `<circle>`, que também aceitam `stroke-dasharray`. Os textos ("BARBEARIA NAVALHA", "SOBRADINHO · DF" em `textPath` e "EST. 2026") são `<text>` com Georgia/serif do sistema, preenchidos em latão. Sugestão: dar fade-in nos textos depois do desenho dos traços. Se for inline, troque o `id` (`arc-top`, `arc-bot`) caso haja conflito.
- **Logo:** a palavra "NAVALHA" está desenhada em paths (não depende de fonte). Abaixo de 360px, se for preciso esconder a palavra, use `monograma.svg`.
- **Avatares:** silhueta em `#F2EDE4` com opacidade de 70% sobre `#1E1E1E`; detalhes em carvão. Já têm `aria-hidden="true"`. O CSS aplica recorte circular e borda latão.
- **Mapa:** o rótulo de via "Quadra 11" e o selo "Sobradinho/DF · mapa ilustrativo" usam fonte de sistema em `#B5ADA1`. Sem marcas de terceiros.

## Fotografias do ramo (bancos públicos, licença livre)

> Obtidas em 2026-11-15 no Wikimedia Commons, todas do mesmo ensaio (barbearia real, autor Mostafa Meraji), o que garante luz e estilo coerentes entre hero, ambiente e equipe. Licença **CC0 1.0** (domínio público): uso comercial livre, sem atribuição obrigatória (crédito opcional no rodapé: "Fotos: Mostafa Meraji / Wikimedia Commons, CC0"). Originais de 2667x4000 a 6960x4640 px (todos acima do mínimo). Recorte e redimensionamento feitos com Pillow, JPEG progressivo q84. Nenhuma tem logos, letreiros ou marcas visíveis no recorte final.
> As fotos F1–F3 substituem os prompts pendentes (resolvidos em `assets/prompts-imagens.md`).

| # | Arquivo | Uso | Página da foto | Autor | Banco | Licença | Download | Dimensões / peso | Alt sugerido | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| F1 | `assets/fotos/hero.jpg` | Hero, coluna da mídia (4:5). Sem `loading="lazy"`, com `fetchpriority="high"` | https://commons.wikimedia.org/wiki/File:Personal_stylist_-_Barbershop_In_Iran_-_Mostafa_Meraji_-_Canon_Photography_04.jpg | Mostafa Meraji (User:Mostafameraji) | Wikimedia Commons | CC0 1.0 | 2026-11-15 | 1200x1500, 160 KB | "Mãos de barbeiro com tesoura e pente fazendo um corte à tesoura" | pronto |
| F1b | `assets/fotos/hero-wide.jpg` | Alternativa: fundo do hero inteiro (16:9) com overlay carvão, se o desenvolvedor optar pela opção A abaixo | https://commons.wikimedia.org/wiki/File:Canon_Photography_Hairstyling_tool_barbershop_from_Iran_Mashhad_city_Mostafa_Meraji_03.jpg | Mostafa Meraji | Wikimedia Commons | CC0 1.0 | 2026-11-15 | 1600x900, 72 KB | Decorativa como fundo (`background-image`, sem alt). Se virar `<img>`: "Barbeiro corta o cabelo de um cliente com tesoura e pente" | pronto (opcional) |
| F2 | `assets/fotos/ambiente-1.jpg` | Seção Sobre (`#sobre`), 3:2, `loading="lazy"` | https://commons.wikimedia.org/wiki/File:Jorj_barbershop_in_mashhad_iran_canon_photography_mostafa_meraji_08.jpg | Mostafa Meraji | Wikimedia Commons | CC0 1.0 | 2026-11-15 | 1200x800, 122 KB | "Interior de barbearia com poltronas pretas clássicas, espelhos altos e vasos de espada-de-são-jorge sob luz natural" | pronto |
| E1 | `assets/equipe/membro-1.jpg` | Card de Rafael Moreira (fundador; barba cheia) | https://commons.wikimedia.org/wiki/File:Hairdressers_from_Iran,_Mashhad_City,_Mostafa_Meraji,_Canon_Photography.jpg | Mostafa Meraji | Wikimedia Commons | CC0 1.0 | 2026-11-15 | 480x480, 20 KB | "Foto ilustrativa de barbeiro de barba cheia e cabelo cacheado trabalhando" | substituir antes de publicar |
| E2 | `assets/equipe/membro-2.jpg` | Card de Diego Santos (barba na navalha) | https://commons.wikimedia.org/wiki/File:Hairdresser_From_Iran_07.jpg | Mostafa Meraji | Wikimedia Commons | CC0 1.0 | 2026-11-15 | 480x480, 17 KB | "Foto ilustrativa de barbeiro de coque e barba, concentrado no atendimento" | substituir antes de publicar |
| E3 | `assets/equipe/membro-3.jpg` | Card de Lucas Almeida (cortes texturizados) | https://commons.wikimedia.org/wiki/File:Hairdressers_from_Iran_02.jpg | Mostafa Meraji | Wikimedia Commons | CC0 1.0 | 2026-11-15 | 480x480, 28 KB | "Foto ilustrativa de barbeiro de cabelo longo cortando o cabelo de um cliente" | substituir antes de publicar |

### Notas de implementação (para o desenvolvedor-frontend)
- **Equipe:** trocar `assets/equipe/barbeiro-N.svg` por `assets/equipe/membro-N.jpg` (mesma ordem dos cards), `width="160" height="160" loading="lazy" decoding="async"`, `object-fit: cover`. Usar o `alt` "Foto ilustrativa..." da tabela (não mais `alt=""`, porque agora é foto de pessoa real que não é o profissional). As três são do mesmo ensaio, todas em ação, recorte de cabeça e ombros. Em E1 e E3 o rosto fica um pouco acima do centro: com recorte circular, use `object-position: center 35%`. Os SVG `barbeiro-1..3.svg` continuam em `assets/equipe/` como fallback e podem ser removidos depois. Recomenda-se nota no rodapé (já existe "equipe ilustrativa").
- **Hero, sem perder o brasão** (escolha uma):
  - **Opção A (recomendada): foto de fundo + brasão em primeiro plano.** `.hero { background: linear-gradient(90deg, rgba(20,20,20,.94) 0%, rgba(20,20,20,.82) 45%, rgba(20,20,20,.55) 100%), url(assets/fotos/hero-wide.jpg) center/cover; }` (no mobile use `hero.jpg` com gradiente vertical `180deg`, `.92` em cima e `.75` embaixo). O brasão SVG inline fica na coluna direita, animado como hoje. A foto `hero-wide` tem o lado esquerdo escuro, então o texto fica legível; com o overlay a .82, o off-white segue acima de 12:1.
  - **Opção B: foto e brasão juntos na coluna direita.** `hero.jpg` no quadro 4:5 (raio 16px, borda latão a 40%) e o brasão por cima, num selo circular de 120 a 160px no canto inferior esquerdo, sobreposto à moldura (`position:absolute; bottom:-24px; left:-24px; background:#141414; border-radius:50%; padding:12px`). Mantém a animação dos traços.
  - Nos dois casos: pré-carregar a foto (`<link rel="preload" as="image" href="assets/fotos/hero.jpg">` ou a `hero-wide`), sem `loading="lazy"`. Conversão para WebP fica opcional (os JPG já estão dentro das metas de peso).
- **Ambiente:** a foto é escura e tem chão claro com sombras de janela; fica bem ao lado dos diferenciais em `#sobre`, com raio 16px. `object-position: center 60%` se o quadro ficar mais baixo que 3:2.

## Fotos de depoimentos de exemplo (bancos públicos, licença livre)

> Regra fixa do usuário: depoimentos de exemplo usam retratos de bancos públicos com licença livre. Obtidas em 2026-11-14 via Wikimedia Commons (cópias CC0 de fotos publicadas originalmente no Unsplash). Recorte 1:1 centrado no rosto, redimensionadas para 320x320 px, JPEG qualidade 82 (17 a 21 KB). Licença CC0: não exige atribuição, crédito no rodapé opcional.
> **Status de todas: substituir antes de publicar** (por fotos de clientes reais, com autorização de uso de imagem). São pessoas reais em depoimentos inventados: manter o selo "Exemplo" em cada card e o aviso da seção.

| # | Arquivo | Card (autor fictício) | Página da foto | Origem | Autor | Banco | Licença | Download | Dimensões | Alt sugerido | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| D1 | `assets/depoimentos/depoimento-1.jpg` | Marcelo T. ("Melhor barba que já fiz...") | https://commons.wikimedia.org/wiki/File:Hipster_Professional_(Unsplash).jpg | https://unsplash.com/photos/izTZ-TtdwCs | rawpixel.com (@rawpixel) | Wikimedia Commons (origem Unsplash) | CC0 1.0 | 2026-11-14 | 320x320 | "Foto ilustrativa de um homem de barba cheia e cabelo penteado para trás" | substituir antes de publicar |
| D2 | `assets/depoimentos/depoimento-2.jpg` | André P. ("Atendimento pontual...") | https://commons.wikimedia.org/wiki/File:Man_with_crossed_arms_(Unsplash).jpg | https://unsplash.com/photos/VVEwJJRRHgk | Warren Wong (@wflwong) | Wikimedia Commons (origem Unsplash) | CC0 1.0 | 2026-11-14 | 320x320 | "Foto ilustrativa de um homem jovem sorrindo, de jaqueta escura" | substituir antes de publicar |
| D3 | `assets/depoimentos/depoimento-3.jpg` | Felipe R. ("Ambiente tranquilo...") | https://commons.wikimedia.org/wiki/File:Portrait_of_a_man_(Unsplash).jpg | https://unsplash.com/photos/B0m8ZIR-CF0 | William Stitt (@willpower) | Wikimedia Commons (origem Unsplash) | CC0 1.0 | 2026-11-14 | 320x320 | "Foto ilustrativa de um homem jovem de cabelo curto, com óculos de sol na cabeça" | substituir antes de publicar |

### Notas de implementação (para o desenvolvedor-frontend)
- Sugestão de uso: `<img src="assets/depoimentos/depoimento-1.jpg" alt="Foto ilustrativa ..." width="56" height="56" loading="lazy" decoding="async">` dentro do `<figcaption>`, antes do nome; recorte circular via CSS (`border-radius: 50%`, `object-fit: cover`) e borda `--color-border-strong` ou latão, coerente com os avatares da equipe.
- A foto D1 tem gravata vermelha na borda inferior do recorte; em 56 a 72px ela praticamente some. Se incomodar, use `object-position: center 30%`.
- Nenhuma das fotos tem marcas, logos ou texto visíveis.
