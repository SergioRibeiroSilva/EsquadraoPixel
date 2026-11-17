# Imagens e assets: Sergio Ribeiro, "Influenciador de Esperança"

> Autor: gerador-imagens · 2026-11-17 · Entradas: `design.md` (§2.1 cores, §4 seções, §8 pedidos de imagem) e `briefing.md`.
> **Onde estão:** SVGs em `projetos/sergio-ribeiro/assets/` e fotos em `projetos/sergio-ribeiro/assets/fotos/`. O desenvolvedor deve copiar as duas pastas para `site/assets/` e referenciar `assets/...` e `assets/fotos/...` com caminhos relativos.
> **Nenhuma imagem veio do Instagram.** As fotos vêm só do Unsplash (Unsplash License) e de uma cópia CC0 de foto do Unsplash no Wikimedia Commons.
> Todas as fotos foram baixadas em **2026-11-17**. Formato: JPG progressivo, sRGB, qualidade 80, sem EXIF. Recortes feitos aqui (proporções do design), então não é preciso ajustar `object-position`.

## 1. Fotos

| Arquivo (`assets/fotos/`) | Uso | Saída (dimensões · peso) | Página da foto | Autor | Banco · licença | Original | `alt` sugerido | Status |
|---|---|---|---|---|---|---|---|---|
| `foto-hero.jpg` + `foto-hero-800.jpg` | Hero, arco 4:5 | 1200x1500 · 128 KB; 800x1000 · 61 KB | https://commons.wikimedia.org/wiki/File:White_flower_field_(Unsplash).jpg (original: https://unsplash.com/photos/JdjdIjzJl94) | Alexandru Tudorache | Wikimedia Commons (cópia do Unsplash) · **CC0** | 5184x2912 (baixada a 3840x2157) | "Margaridas num campo iluminado pelo sol da manhã" | Pronto |
| `foto-ministerio.jpg` + `foto-ministerio-800.jpg` | Frente 01, Ministério, 4:3 | 1600x1200 · 164 KB; 800x600 · 48 KB | https://unsplash.com/photos/ShCVvQbQBDk | Jack Sharp | Unsplash · Unsplash License | 2304x1536 | "Dois homens oram juntos, cabeças encostadas e mão no ombro (foto ilustrativa)" | Pronto · **ambiente ilustrativo: substituir antes de publicar** por foto real do ministério de homens, com autorização |
| `foto-tecnologia.jpg` + `foto-tecnologia-800.jpg` | Frente 02, Tecnologia, 4:3 | 1600x1200 · 172 KB; 800x600 · 51 KB | https://unsplash.com/photos/SH6hmu0eoas | Daniil Komov | Unsplash · Unsplash License | 6048x4032 | "Notebook com código na tela sobre uma mesa de madeira, ao lado de uma caneca" | Pronto |
| `retrato-placeholder.jpg` | Sobre, retrato 4:5 | 800x1000 · 52 KB | https://unsplash.com/photos/TlE_LR4L28o | Priscilla Du Preez | Unsplash · Unsplash License | 5251x3501 | "Foto ilustrativa: mãos segurando uma Bíblia ao pôr do sol" | Pronto · **substituir antes de publicar** pela foto do Sergio |
| `og-image.jpg` | `og:image` (1200x630) | 1200x630 · 56 KB | Montagem própria: `logo-sr-claro.svg` + `margarida-contorno.svg` sobre faixa azul `#1E3A5F` + recorte da foto do hero | Esquadrão Pixel (foto: Alexandru Tudorache, CC0) | Arte própria + CC0 | — | — (meta tag) | Pronto |

Observações sobre as fotos:
1. **Retrato provisório:** o enquadramento mostra só tronco, mãos e uma Bíblia vermelha contra o pôr do sol. O rosto não aparece e a pessoa não é identificável, então a foto não passa por retrato do Sergio. A legenda "Foto ilustrativa" do design (§4.3) deve ficar visível. Fallback em SVG: `assets/retrato-placeholder.svg`.
2. **Ministério:** dois homens oram de cabeças baixas, de perfil e de costas, sem rostos frontais. Ao fundo, à direita, aparece o contorno escuro e desfocado de uma terceira pessoa. A foto é escura (luz de palco com luzinhas ao fundo). Por isso, numa seção creme, ela funciona melhor com `--radius-lg` e o selo branco sobreposto, como prevê o design.
3. **Tecnologia:** a caneca tem uma frase genérica em inglês, parcialmente cortada ("...ffee ... making me ...some"). Não é marca nem logo. O notebook não tem logo à vista.
4. **Hero:** a margarida principal fica no centro do recorte, a cerca de 40% da altura. Ela sobrevive ao recorte em arco (topo arredondado) sem perder o assunto.
5. `srcset` sugerido: `foto-hero-800.jpg 800w, foto-hero.jpg 1200w`; e, para cada frente, `-800.jpg 800w` com a versão de `1600w`.

### 1.1 Créditos para o rodapé
Nenhuma foto exige atribuição: as do Unsplash usam a Unsplash License, e a foto do hero é CC0. Se o rodapé tiver um `<details>` "Créditos das fotos" (cortesia), use:
- Margaridas (início): Alexandru Tudorache, CC0, via Wikimedia Commons/Unsplash.
- Homens em oração (Ministério): Jack Sharp, Unsplash.
- Notebook com código (Tecnologia): Daniil Komov, Unsplash.
- Bíblia ao pôr do sol (Sobre, ilustrativa): Priscilla Du Preez, Unsplash.

## 2. SVGs (gerados pelo time, `assets/`)

Todos têm `viewBox`, não fixam `width`/`height` e não usam `<text>`: as letras do monograma são traços. Não há scripts nem imagens embutidas, e as cores são só as da paleta do `design.md` (mais `#6E4D00`, que o próprio §8 pede para os pontos do miolo). Os ícones usam `stroke="currentColor"`. O XML foi validado nos 30 arquivos, e nenhum passa de 2,7 KB.

| Arquivo | Uso | viewBox | `alt` / acessibilidade | Status |
|---|---|---|---|---|
| `logo-sr.svg` | Cabeçalho | 0 0 64 64 | Dentro do link com `aria-label="Sergio Ribeiro, voltar ao início"`; no `<img>`, use `alt=""` | Pronto |
| `logo-sr-claro.svg` | Rodapé (azul-noite) | 0 0 64 64 | Mesma regra: `alt="Sergio Ribeiro"` se estiver sozinho, ou `alt=""` se vier ao lado do nome | Pronto |
| `favicon.svg` | `<link rel="icon" type="image/svg+xml">` | 0 0 64 64 | — | Pronto (sem a margarida, que some em 16px) |
| `margarida.svg` | Hero (sobreposta ao arco) | 0 0 200 200 | Decorativa: `alt=""` + `aria-hidden="true"`. Grupos `#petalas` e `#miolo` para a animação. Para animar por CSS, insira o SVG inline | Pronto |
| `margarida-contorno.svg` | Contato (fundo, 420px a 12%) | 0 0 200 200 | Decorativa | Pronto |
| `margarida-mini.svg` | Sobre, Instagram, divisores | 0 0 48 48 | Decorativa | Pronto |
| `traco-sublinhado.svg` | Sob "Esperança" no h1 | 0 0 300 30, `preserveAspectRatio="none"` | Decorativa | Pronto |
| `ornamento-margaridas-fundo.svg` | Fundo da seção Esperança | 0 0 400 400 | Decorativa (aplicar 6% de opacidade no CSS) | Pronto |
| `ilustracao-pontes.svg` | Frente 03, Pontes | 0 0 320 160 | Decorativa. Ponte em arco com dois grupos de pessoas abstratas e uma margarida no topo, sem bandeiras nem mapas | Pronto |
| `retrato-placeholder.svg` | Fallback do retrato | 0 0 400 500 | `alt="Foto ilustrativa"`. Tem o comentário "substituir antes de publicar" | Pronto · **substituir antes de publicar** |
| `icon-menu`, `icon-close`, `icon-seta-direita`, `icon-seta-externa`, `icon-seta-cima`, `icon-conversa`, `icon-email`, `icon-pin`, `icon-cruz`, `icon-coracao`, `icon-familia`, `icon-igreja`, `icon-pessoas`, `icon-mesa`, `icon-maos`, `icon-codigo`, `icon-sol`, `icon-amanhecer`, `icon-ancora`, `icon-asas` (`.svg`) | Vários | 0 0 24 24, traço de 1.75 | Sempre `aria-hidden="true"`, porque acompanham texto. A cor vem do CSS via `currentColor`; para isso, insira inline ou use `mask-image` (em `<img>`, o `currentColor` vira preto) | Pronto (20 de 20) |

`icon-conversa` é um balão genérico, não o logo do WhatsApp. Nenhum glyph do Instagram ou do WhatsApp foi desenhado.

## 3. Pendências e lacunas
- **Nenhuma lacuna:** todas as fotos pedidas no §8.2 foram encontradas. Nenhum prompt foi necessário, por isso não existe `assets/prompts-imagens.md`.
- **Substituir antes de publicar:** `retrato-placeholder.jpg` e `.svg` (pela foto do Sergio) e `foto-ministerio*.jpg` (por foto real do ministério, com autorização das pessoas e da igreja).
