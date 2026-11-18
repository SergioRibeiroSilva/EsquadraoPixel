# Prompts de imagens fotográficas: Barbearia Navalha

Status: **F1, F2 e F3 resolvidas em 2026-11-15** com fotos reais CC0 do Wikimedia Commons (detalhes, fontes e alt em `imagens.md`). Os prompts abaixo ficam só como referência caso o cliente queira produzir fotos próprias.

Texto original: O time não gera fotos. Gere numa ferramenta externa ou, de preferência, use fotos reais do cliente, e coloque os arquivos em `assets/fotos/`. Entregue WebP com JPG de fallback.

Paleta de referência para direção de cor: carvão `#141414` / `#1E1E1E`, latão `#D4A94F`, off-white quente `#F2EDE4`.
Restrições em todos os prompts: sem texto, sem logotipos ou marcas, sem poste de barbearia vermelho e azul, sem filtros vintage nem granulação forte.

## F1: Hero (resolvida: `assets/fotos/hero.jpg` e `assets/fotos/hero-wide.jpg`)
- **Arquivo:** `assets/fotos/hero.jpg` (+ `hero.webp`, + versão `hero-800.jpg/.webp`)
- **Proporção / tamanho:** 4:5, 1200x1500 (e 800x1000)
- **Uso:** substitui o brasão na coluna direita do hero (`aspect-ratio: 4/5`, raio 16px, borda latão a 40%). Carregar sem `loading="lazy"`.
- **Prompt:** "Barbeiro aplicando toalha quente no rosto de um cliente numa barbearia clássica e moderna, luz quente lateral vindo da esquerda, sombras profundas, tons carvão quase preto com reflexos de latão, profundidade de campo rasa, fotografia editorial, enquadramento vertical 4:5, foco nas mãos e na toalha com vapor leve, sem texto, sem logotipos"
- **Negativo:** texto, logotipo, marca d'água, poste de barbearia, cores saturadas, azul, vermelho, granulação.
- **Alt sugerido:** "Barbeiro aplica toalha quente no rosto de um cliente na Barbearia Navalha"

## F2: Ambiente (resolvida: `assets/fotos/ambiente-1.jpg`)
- **Arquivo:** `assets/fotos/ambiente.jpg` (+ `.webp`)
- **Proporção / tamanho:** 3:2, 1600x1067
- **Uso:** opcional na seção Sobre (`#sobre`), ao lado dos diferenciais. `loading="lazy"`.
- **Prompt:** "Interior de barbearia com poltronas clássicas de couro escuro, espelhos com moldura de latão, iluminação quente e pontual, paredes em tom carvão, ambiente limpo e minimalista, sem pessoas, fotografia de arquitetura, lente grande angular moderada, horizontal 3:2, sem texto, sem logotipos"
- **Negativo:** texto, letreiros, marcas de produtos visíveis, madeira rústica em excesso, poste de barbearia, cores frias.
- **Alt sugerido:** "Interior da Barbearia Navalha com poltronas de couro escuro e espelhos com moldura de latão"

## F3: Retratos da equipe (resolvida: `assets/equipe/membro-1.jpg` a `-3.jpg`; substituir antes de publicar pelas fotos reais da equipe)
- **Arquivos:** `assets/fotos/barbeiro-1.jpg`, `barbeiro-2.jpg`, `barbeiro-3.jpg` (+ `.webp`)
- **Proporção / tamanho:** 1:1, 640x640
- **Uso:** substituem os avatares SVG em `assets/equipe/` nos cards de equipe (recorte circular, borda latão 2px). `alt=""` porque o nome está no texto do card. `loading="lazy"`.
- **Prompt:** "Retrato de barbeiro brasileiro de 25 a 40 anos, avental escuro, fundo carvão desfocado, luz suave quente lateral, expressão confiante e acolhedora, enquadramento do peito para cima, centralizado, formato quadrado 1:1, fotografia de retrato profissional, sem texto, sem logotipos"
- **Variações para distinguir os três:** (1) barba cheia bem aparada; (2) cabelo com topete; (3) boné escuro liso ou coque.
- **Observação:** fotos reais da equipe, com autorização de uso de imagem, são preferíveis a imagens geradas.
