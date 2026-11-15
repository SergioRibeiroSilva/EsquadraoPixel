# Imagens e assets: Corpo Diaconal, AD Catedral Baleia

> Autor: gerador-imagens · 2026-11-15 · Entradas: `design.md` (seção 6), `briefing.md`, `pesquisa.md`.
> Todas as fotos estão em `assets/fotos/` e todos os SVGs em `assets/`. Cores só da paleta do `design.md`.

## 1. Fotos

Data do download de todas: **2026-11-15**. Formatos: JPG progressivo (+ WebP para usar com `<picture>`), sem EXIF.

| Arquivo | Uso | Dimensões / peso | Fonte (página da foto) | Autor | Banco / licença | `alt` sugerido | Status |
|---|---|---|---|---|---|---|---|
| `fotos/hero-servico.jpg` + `.webp` | Hero (4:5) | 1200x1500 · 100 KB (WebP 32 KB) | https://unsplash.com/photos/8zuQyIqi7Ac | G + L (@_wonderinthewild) | Unsplash · Unsplash License (sem atribuição obrigatória) | "Diácono estende a cesta de ofertas entre os bancos durante o culto (foto ilustrativa)" | Pronto · **substituir antes de publicar** (ideal: foto real da diaconia) |
| `fotos/templo-catedral-baleia.jpg` + `.webp` | Quem somos (16:10) | 1200x750 · 167 KB (WebP 143 KB) | https://commons.wikimedia.org/wiki/File:Bras%C3%ADlia_DF_Brasil_-_Sede_Nacional_da_Assembl%C3%A9ia_de_Deus_-_panoramio.jpg | Josue Marinho | Wikimedia Commons · **CC BY 3.0** (https://creativecommons.org/licenses/by/3.0) | "Fachada do templo da Assembleia de Deus Catedral Baleia, na Asa Sul, entre palmeiras" | Pronto · crédito obrigatório (ver seção 3) |
| `fotos/templo-catedral-baleia-fachada.jpg` | Alternativa para Quem somos (16:10) | 1600x1000 · 153 KB | https://commons.wikimedia.org/wiki/File:SGAS_I_St._de_Grandes_%C3%81reas_Sul_910_-_Bras%C3%ADlia,_DF,_Brazil_-_panoramio.jpg | jose donizetti dias | Wikimedia Commons · **CC BY-SA 3.0** (https://creativecommons.org/licenses/by-sa/3.0) | "Fachada frontal em arco do templo da Assembleia de Deus Catedral Baleia, em Brasília" | Reserva (não usar junto com a principal) · crédito obrigatório |
| `fotos/servir-cestas.jpg` + `.webp` | Servir (16:9, ≥ 900px) | 1600x900 · 123 KB (WebP 49 KB) | https://www.pexels.com/photo/volunteers-boxing-foods-to-be-distributed-6591165/ | cottonbro studio | Pexels · Pexels License (sem atribuição obrigatória) | "Voluntários montam caixas de doação com frutas e alimentos (foto ilustrativa)" | Pronto · **substituir antes de publicar** (ideal: ação social real da igreja) |
| `fotos/ajuda-oracao.jpg` + `.webp` | Ajuda (3:4, ≥ 1100px) | 900x1200 · 94 KB (WebP 42 KB) | https://www.pexels.com/photo/women-sitting-on-bed-praying-6860374/ | Tima Miroshnichenko | Pexels · Pexels License (sem atribuição obrigatória) | "Duas mulheres oram de mãos dadas, com uma Bíblia aberta ao lado (foto ilustrativa)" | Pronto · **substituir antes de publicar** |
| `og-image.jpg` | Metadados `og:image` | 1200x630 · 45 KB | Gerado a partir de `og-image.svg` (arte própria) | Esquadrão Pixel | Arte original | "Corpo Diaconal, Assembleia de Deus Catedral Baleia, Brasília" | Pronto |

### Observações sobre as fotos
- **Foto do templo (Agência Brasília, Flickr)**: não foi usada, porque o Flickr não está na lista de bancos aceitos. No Wikimedia Commons foram achadas **duas fotos reais do próprio templo**, georreferenciadas a menos de 20 m das coordenadas da igreja (-15.8136, -47.9137). A principal é a de Josue Marinho (CC BY 3.0, sem cláusula share-alike).
- **Recorte da foto principal do templo**: o original (3296x2472) tem um carimbo de data da câmera ("27/06/2012") no canto inferior direito. O recorte 16:10 removeu esse carimbo. A licença CC BY exige indicar a modificação, e isso já consta no crédito.
- **As fotos do templo são de 2011 e 2012**, ou seja, anteriores à restauração reinaugurada em 11/07/2015 (pesquisa 1.1). A fachada atual pode estar diferente. **Recomendação: substituir por uma foto atual feita pela igreja.**
- **Foto reserva (`-fachada`)**: tem um carro de táxi com grafismo na lateral e uma pessoa pequena, de costas e não identificável. Ela é CC BY-SA 3.0. Como a foto foi recortada (adaptação), o compartilhamento da imagem modificada segue a mesma licença.
- **`quem-somos-acolhimento.jpg` (plano B)**: não foi gerado, porque o plano A (foto do templo) foi obtido.
- **Hero**: na foto, a cesta de ofertas fica no terço inferior e a mão de quem oferta, à direita. No recorte 4:3 do mobile, use `object-fit: cover; object-position: 50% 70%`.
- **Ajuda**: para recortes mais baixos, use `object-position: 50% 40%` (os rostos ficam no terço superior).
- **Servir**: nas blusas aparece a palavra "VOLUNTEER", pequena e sem marca comercial. Não há logos.
- **Liderança**: **não** foram usadas fotos de banco com rostos, conforme o design e o orquestrador. Use `avatar-placeholder.svg` até a igreja enviar fotos autorizadas.
- **Depoimentos**: o design não tem seção de depoimentos, então não foram baixados retratos.

## 2. SVGs (arte original)

Todos são XML válidos (conferidos com parser) e não têm fontes externas embutidas, scripts nem base64. Os ícones seguem o padrão do design: 24x24, traço de 1,75, `stroke="currentColor"` (a cor vem do CSS: petróleo `#1F6F78` nos cards), `aria-hidden="true"`.

| Arquivo | Uso | `alt` / acessibilidade | Tamanho | Status |
|---|---|---|---|---|
| `logo-diaconia.svg` | Cabeçalho (236x40) | Tem `<title>`: no `<img>`, use `alt="Corpo Diaconal, AD Catedral Baleia – início"` | 1,0 KB | Pronto |
| `logo-diaconia-claro.svg` | Rodapé (branco e dourado sobre marinho-900) | `alt="Corpo Diaconal, AD Catedral Baleia"` | 1,0 KB | Pronto |
| `favicon.svg` | Aba (`<link rel="icon" type="image/svg+xml">`) | n/a | 0,4 KB | Pronto |
| `og-image.svg` | Fonte do `og-image.jpg` | n/a | 1,9 KB | Pronto |
| `onda-hero.svg` | Hero e CTA final (1440x240, `preserveAspectRatio="none"`, traço que não escala) | decorativo, `alt=""` + `aria-hidden` | 0,7 KB | Pronto |
| `divisor-onda.svg` | Hero → faixa, Localização → CTA (1440x96, `fill="currentColor"`) | decorativo | 0,2 KB | Pronto. **Use inline** para o `currentColor` funcionar (em `<img>` ele vira preto). Para o uso invertido, aplique `transform: scaleY(-1)` |
| `onda-linha.svg` | Assinatura acima do H2 (120x12, dourado-escuro) | decorativo | 0,3 KB | Pronto |
| `onda-fundo.svg` | Fundo da Base bíblica (800x600, branco a 6%) | decorativo | 4,0 KB | Pronto |
| `avatar-placeholder.svg` | Liderança (120x120) | Tem `<title>Foto a definir</title>`; no `<img>`, use `alt=""` se o nome estiver ao lado | 0,5 KB | Pronto (placeholder) |
| `icone-recepcao.svg` | Recepção e acolhimento (porta aberta + mão acenando) | decorativo | 0,6 KB | Pronto |
| `icone-ordem.svg` | Ordem nos cultos (fileiras de bancos) | decorativo | 0,5 KB | Pronto |
| `icone-ceia.svg` | Santa Ceia (cálice + pão) | decorativo | 0,5 KB | Pronto |
| `icone-batismo.svg` | Apoio ao batismo (gota + água) | decorativo | 0,5 KB | Pronto |
| `icone-acao-social.svg` | Ação social (cesta com alimentos) | decorativo | 0,5 KB | Pronto |
| `icone-visitas.svg` | Visitas (casa com coração) | decorativo | 0,4 KB | Pronto |
| `icone-eventos.svg` | Eventos (calendário com estrela) | decorativo | 0,4 KB | Pronto |
| `icone-oracao.svg` | Ajuda: pedido de oração (mãos em oração) | decorativo | 0,4 KB | Pronto |
| `icone-whatsapp.svg` | Botões de CTA (balão + telefone, desenho próprio) | decorativo; quando o botão só tem ícone, use `aria-label` no botão | 0,5 KB | Pronto |
| `icone-relogio.svg`, `icone-pin.svg`, `icone-telefone.svg`, `icone-email.svg` | Faixa, Agenda, Localização | decorativos | 0,3 KB cada | Pronto |
| `icone-check.svg`, `icone-alerta.svg`, `icone-mais.svg`, `icone-menu.svg`, `icone-fechar.svg`, `icone-seta.svg` | Listas, erros, FAQ, menu | decorativos (`aria-label` no botão) | 0,3 KB cada | Pronto |
| `icone-facebook.svg`, `icone-youtube.svg`, `icone-instagram.svg` | Rodapé (glifos genéricos de contorno) | `aria-label="Facebook da igreja"` etc. no link | 0,3 KB cada | Pronto |

Dica para o desenvolvedor: para os ícones herdarem a cor via `currentColor`, coloque o SVG **inline** (ou use `mask-image` com `background-color`). Em `<img>`, o traço sai preto.

## 3. Créditos para o rodapé

Texto pronto (as licenças CC BY e CC BY-SA exigem atribuição):

> Foto do templo: Josue Marinho, via Wikimedia Commons, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) (recortada). Demais fotos: Unsplash (G + L) e Pexels (cottonbro studio, Tima Miroshnichenko). Imagens ilustrativas; substituir por fotos da diaconia antes de publicar.

Se a foto reserva for usada no lugar da principal: "Foto do templo: jose donizetti dias, via Wikimedia Commons, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) (recortada)."

`<figcaption>` sugerido em Quem somos: "Templo da AD Catedral Baleia, SGAS 910, Asa Sul. Foto: Josue Marinho / Wikimedia Commons, CC BY 3.0 (recortada)."

**Atenção ao design**: o crédito do rodapé no `design.md` ("Gabriel Jabur/Agência Brasília, CC BY 2.0") **não vale mais**, porque essa foto não foi usada. Use o texto acima.

## 4. Pendências
- Fotos reais da diaconia (hero, servir, ajuda) e fotos autorizadas da liderança: a igreja deve fornecer.
- Foto atual do templo, feita depois da restauração de 2015: recomendada.
- Nenhuma lacuna sem foto adequada, por isso `assets/prompts-imagens.md` não foi criado.
