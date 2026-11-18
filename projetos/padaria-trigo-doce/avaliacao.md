# Avaliação de resultado: Padaria Trigo Doce

- **Data:** 2026-11-18
- **Ciclo:** 1 (de no máximo 3)
- **Entradas:** `briefing.md`, `design.md`, `imagens.md`, `site/` (index.html, styles.css, CHANGELOG.md), `capturas/` (celular, tablet, desktop), `inspecao-visual.md`, `avaliacao-tecnica.md`
- **Observação:** é um protótipo anterior ao redator e ao entrevistador. Por isso não existem `conteudo.md` nem `dados-negocio.md`, e a ausência deles não foi penalizada. Avaliei a copy direto no HTML. Os dados são fictícios por autorização do briefing.

## Decisão

**ITERAR (ciclo 1 de 3)**

A média da rubrica é **4,0** e nenhum critério ficou abaixo de 3, então o limiar numérico foi atingido, mas por pouco. A decisão é ITERAR porque o briefing tem uma restrição explícita ("acessível, WCAG 2.2 AA") que hoje não é cumprida: o selo do hero gira sem parar e não há como pausar (T1, WCAG 2.2.2, nível A, o único bloqueante técnico). A correção é pequena. Aproveito o mesmo ciclo para pedir o ajuste do hero abaixo de 1024 px (V1/T3), que hoje deixa a primeira tela do tablet sem nenhum texto, e para pedir melhorias no LCP, já que o briefing pede um site "leve" e o público usa principalmente o celular.

## Objetivos do briefing (verificáveis)

| # | Objetivo | Situação |
|---|---|---|
| O1 | Levar à encomenda pelo WhatsApp | OK. Há um CTA no cabeçalho, no hero, em cada card de Encomendas, no link de Destaques, no CTA final e na barra fixa do celular. As mensagens vêm prontas |
| O2 | Levar à visita à loja | OK. Endereço, horários (com o dia atual destacado) e o botão "Como chegar" |
| O3 | As 10 seções pedidas | OK. Todas existem, na ordem pedida |
| O4 | Preços de exemplo nos produtos | OK (8 produtos, com o aviso "Preços de exemplo") |
| O5 | Passo a passo "como encomendar" | OK (3 passos e a regra das 48h) |
| O6 | Equipe de 3 pessoas e 3 depoimentos marcados como exemplo | OK (selo "Exemplo" e as legendas de demonstração) |
| O7 | Aviso de site de demonstração no rodapé | OK |
| O8 | Visual claro e quente, título com personalidade, no máximo 2 fontes | OK (Fraunces SOFT e Nunito Sans) |
| O9 | Mobile first, acessível (WCAG 2.2 AA), leve | **Parcial.** Viola o WCAG 2.2.2 (T1). O LCP no celular é de 4,0 s (V2/T2) |
| O10 | Assets dentro de `site/` | OK (nenhum `../`) |

## Percurso por seção (ordem do HTML)

| Seção | Funciona | Não funciona |
|---|---|---|
| Cabeçalho | Logo legível, âncoras e botão "Encomendar" terracota sempre visível, inclusive a 360 px. O menu móvel é acessível | "Sobre" mede 43 px de largura no desktop (menor) |
| Hero | No desktop, a promessa fica clara em 5 s: eyebrow, H1 grande ("Feito com carinho, todo dia."), subtítulo com bairro e horário, CTA principal e secundário, e chips de prova (fermentação, desde 1998, horário). A foto é forte e apetitosa | Selo em rotação infinita (T1). No tablet, a foto 4:5 ocupa a dobra inteira e o H1 só aparece depois de rolar (V1). No celular, o CTA do hero cai abaixo da dobra (V4), embora o botão do cabeçalho compense. O ramo de trigo passa por cima do "dia." no desktop (V3) |
| Destaques do dia | Grade de 8 produtos com foto, categoria, descrição curta e preço com unidade. Os filtros são acessíveis e o link final leva ao WhatsApp | No celular, 1 coluna com fotos grandes deixa a seção muito longa (8 cards de cerca de 450 px). Ver melhoria M3 |
| Encomendas | 3 ofertas claras com "a partir de" e um CTA por oferta. O passo a passo é objetivo e tem a nota de confirmação | Nenhum defeito |
| Sobre | Layout com foto sobreposta, que quebra o ritmo das grades. História afetiva e 3 diferenciais com ícone | Nenhum defeito |
| Equipe | Fotos circulares com o rosto inteiro, falas curtas e com personalidade | Nenhum defeito (as fotos são ilustrativas, como pede o briefing) |
| Depoimentos | Selo "Exemplo" visível em cada card, estrelas com texto para leitor de tela | Nenhum defeito |
| Horários e endereço | Ilustração da fachada, tabela de horários com o dia atual, endereço e contato | Links de contato com 27 px de altura (menor, T5) |
| CTA final | Fundo café com botão mel. É a seção de maior contraste da página e fecha bem | Nenhum defeito |
| Rodapé | 4 colunas, aviso de demonstração e créditos CC BY completos | Links com 32 px de altura (menor, T5) |
| Barra fixa (celular) | Aparece depois do hero e não cobre o rodapé | Aparece sobre o hero até o JS rodar (T8, menor) |

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | **5** | As 10 seções e todos os objetivos de conteúdo estão presentes, com o tom pedido. A falha de acessibilidade é técnica e entra na decisão, mas não falta nenhuma seção ou objetivo de conteúdo |
| 2 | Hierarquia e clareza | **4** | No desktop o visitante entende em 5 s o que é e o que fazer, e há uma única ação repetida com consistência. Perde um ponto porque no tablet (768) a primeira tela é só foto, sem H1 nem CTA de texto (V1), e porque no celular o CTA do hero fica abaixo da dobra (V4) |
| 3 | Estética moderna | **3** | A tipografia Fraunces SOFT, a paleta quente, os divisores em onda, o Sobre com foto sobreposta e o CTA final escuro dão personalidade, sem clichê. Pela regra de variedade, porém: (a) o hero repete o "texto à esquerda + foto à direita" do `emmeline-croche`. O `design.md` justifica isso pelo contraste (sem texto sobre a foto) e pelo produto como protagonista, então o teto formal não se aplica, mas o diferencial fica só no selo. (b) Quatro seções seguidas usam "título + 3 cards" (Encomendas, Equipe, Depoimentos, Horários). O ritmo fica repetitivo da metade da página para baixo, como mostra a captura `desktop-inteira.jpg` |
| 4 | Coerência com o design | **4** | Tokens, pares de cor, escala tipográfica, estrutura e ordem das seções batem com o `design.md`. As divergências estão justificadas no CHANGELOG (colunas do hero, sticky). Perde um ponto porque o `srcset` do hero usa 800w/1120w em vez de 800w/1400w, e porque o `sizes` não reflete a largura real da foto. A rotação do selo segue o design, mas o próprio design errou aqui: ela precisa mudar nos dois lugares |
| 5 | Qualidade do texto | **4** | A copy é afetiva, concreta e apetitosa ("Receita de vó, perfeita com um cafezinho", "O carinho, nada"). Os microtextos de ação são claros, os avisos de demonstração estão bem dosados e não há placeholder visível. Perde um ponto porque o `<title>` tem 82 caracteres e a description 167 (T10), e porque o selo diz "Forno a lenha", algo que nenhum outro trecho da página menciona (a história fala só em "forno aceso antes do sol nascer"). É uma promessa solta |
| 6 | Imagens e assets | **4** | As fotos são reais, de boa qualidade e ligadas a cada produto. Nenhuma está distorcida, os rostos aparecem inteiros nos círculos, os créditos estão completos e a ilustração da fachada e o logo SVG são coerentes. Perde um ponto porque a foto do hero no tablet fica grande demais e domina a tela, e porque as imagens pesam mais do que o necessário (o hero de 1120w vai para o celular e os cards são de 800 px) |
| 7 | Experiência mobile | **4** | A 360 px a hierarquia e a legibilidade se mantêm: corpo de 17 px, alvos principais de 44 px ou mais, menu acessível, filtros que quebram linha e barra fixa de WhatsApp bem resolvida. Perde um ponto pelo hero alto no celular e no tablet, pela página longa (15,3 mil px no celular) e pelo LCP de 4,0 s |

**Média: 4,0** (5 + 4 + 3 + 4 + 4 + 4 + 4 = 28 / 7). Nenhum critério ficou abaixo de 3.

## Correções obrigatórias

### Desenvolvedor-frontend (nesta ordem)

1. **Selo do hero sem loop infinito (T1, WCAG 2.2.2, restrição do briefing).** Em `styles.css` (`.hero__selo`, por volta das linhas 341 a 344), a animação deve ter no máximo 5 s no total: girar uma vez e parar (por exemplo, 1 ciclo de 4 s com desaceleração), ou não girar. Mantenha a animação só dentro de `prefers-reduced-motion: no-preference`. **Resultado esperado:** 5 s depois de carregar, nada na página se move sozinho. Atualize a linha do selo no `design.md` (seção 3.2 e 4.9) para registrar a mudança.
2. **Hero abaixo de 1024 px com texto na primeira tela (V1, V4, T3).** Reduza a altura da foto do hero no tablet e no celular: proporção 4:3 entre 560 e 1023 px e 5:4, ou altura máxima de cerca de 45svh, abaixo de 560 px, com `object-fit: cover` e o pão centralizado. Outra opção é passar o hero para 2 colunas a partir de 768 px. **Resultado esperado:** a 768x1024, o H1 inteiro e o botão "Encomendar pelo WhatsApp" aparecem sem rolar. A 360x800, o H1 aparece inteiro sem rolar, e o ideal é que o CTA do hero também apareça. Confira se o selo continua no canto inferior esquerdo sem cobrir o pão.
3. **LCP do hero no celular (V2, T2, restrição "leve").** (a) Gere versões de 480w e 640w do hero, e WebP se possível, usando `<picture>`. (b) Ajuste o `sizes` para a largura real (por exemplo, `(min-width: 1024px) 496px, calc(100vw - 40px)`) e atualize o `imagesrcset` do `preload` da mesma forma. (c) Remova o `decoding="async"` da `.hero__foto`. (d) Hospede as fontes localmente em woff2 com subconjunto latino, ou carregue o CSS das fontes sem bloquear a renderização. **Resultado esperado:** LCP de 2,5 s ou menos no Lighthouse do celular, e Desempenho de 90 ou mais.

### Texto (redator; neste protótipo sem redator, o desenvolvedor aplica)

4. **Selo "Forno a lenha".** Remova "Forno a lenha" do texto circular do selo e use, por exemplo, "Fermentação natural · Desde 1998", ou então sustente essa promessa na seção Sobre. Como o texto está convertido em path no SVG, o desenvolvedor precisa regerar o `selo-fermentacao.svg`. **Resultado esperado:** nenhuma promessa no selo que a página não sustente.

## Melhorias recomendadas (opcionais, por prioridade)

- **M1 (variedade, critério 3):** quebrar a sequência de 4 blocos de "título + 3 cards". Sugestões, sem obrigação: Equipe em faixa horizontal com fotos maiores e fala em destaque, ou Depoimentos com 1 citação grande e 2 menores, ou Horários em layout de 2 colunas (fachada + tabela ao lado) em vez de 3 cards. Isso levaria o critério 3 a 4.
- **M2:** afastar o ramo de trigo do H1 no desktop (V3, T14), para que ele não passe sobre "dia." nem sobre o subtítulo.
- **M3:** no celular, mostrar os produtos de Destaques em 2 colunas compactas ou em carrossel horizontal com rolagem nativa, para encurtar a página (hoje com 15,3 mil px).
- **M4:** alvos de toque de 44 px nos links do rodapé, do card de Contato e no "Sobre" do menu (V5, V6, T5).
- **M5:** barra fixa escondida desde o primeiro quadro quando há JS (T8). Transição da barra dentro de `prefers-reduced-motion` (T7). Contorno de foco do link "Pular" com contraste (T6).
- **M6:** `srcset` com 400w nos cards de produto e recompressão das imagens (T4). Remover os SVGs sem uso de `site/assets/svg/` (T12) e otimizar o logo e o selo com SVGO (T13).
- **M7:** encurtar o `<title>` para cerca de 60 caracteres e a description para cerca de 155 (T10).

## Pendências para o usuário

- **Dados reais:** endereço, WhatsApp, Instagram, horários, preços e a história (Dona Lurdes, 1998) são fictícios. Para um negócio real, rodar a entrevista (etapa 0b) e trocar os dados.
- **Fotos próprias:** as da equipe e as dos avatares de depoimento são ilustrativas e precisam ser trocadas por fotos reais com autorização antes de publicar. Fachada e ambiente reais também são recomendados.
- **Depoimentos reais:** trocar os 3 depoimentos de exemplo por depoimentos de clientes, com autorização.
- **Localização:** sem coordenadas, o "Como chegar" abre uma busca genérica. Com as coordenadas, o mapa interativo do Google pode ser inserido.
- **Domínio:** necessário para o `og:url`, para a URL absoluta do `og:image`, para o `canonical` (T9) e para o JSON-LD `Bakery` (T11).

---

# Decisão (ciclo 2)

- **Data:** 2026-11-18
- **Ciclo:** 2 (de no máximo 3)
- **Entradas:** `site/CHANGELOG.md` (seção "Ciclo 2"), `inspecao-visual.md` (seção "Ciclo 2"), `avaliacao-tecnica.md` (seção "Ciclo 2"), `capturas/ciclo2-*` (dobras de celular, tablet e desktop, Depoimentos e página inteira no desktop)
- Como no ciclo 1, a falta de `conteudo.md` e `dados-negocio.md` e os dados fictícios não foram penalizados.

## Decisão: **APROVADO**

A média é **4,57** e nenhum critério ficou abaixo de 4. O único bloqueante (T1, WCAG 2.2.2) foi resolvido, e com isso a restrição de acessibilidade do briefing passa a ser cumprida (Lighthouse Acessibilidade 100). O N1 (TBT) é importante, mas não bloqueia: o LCP mediano é de 2,4 s, o CLS é 0 e a causa já foi diagnosticada. Ele fica como a primeira pendência antes de publicar.

## Conferência das correções obrigatórias do ciclo 1

| # | Correção | Status | Evidência |
|---|---|---|---|
| 1 | Selo sem loop infinito (T1) | **Resolvida** | Uma única volta de 4 s, só com `no-preference`. Nenhuma animação ativa aos 5,3 s. `design.md` atualizado (3.2 e 4.9) |
| 2 | Hero abaixo de 1024 px com texto na 1ª tela (V1, V4, T3) | **Resolvida** | `ciclo2-tablet-dobra.png`: hero em 2 colunas, com H1, os 2 CTAs e as provas na 1ª tela. `ciclo2-celular-dobra.png`: foto 16:10, H1 inteiro e os 2 CTAs sem rolar. O selo continua no canto, sem cobrir o pão |
| 3 | LCP do hero no celular (V2, T2) | **Resolvida, com ressalva** | `<picture>` com WebP e direção de arte, `sizes` coerente, sem `decoding="async"` e fontes sem bloquear a renderização. LCP mediano de 2,4 s (era 4,0 s), mas 1 das 3 rodadas deu 3,9 s, e o Desempenho ficou em 97, 87 e 79 por causa do TBT (N1). A meta de "Desempenho ≥ 90" não foi atingida de forma estável. Vai para as pendências antes de publicar |
| 4 | Selo sem "Forno a lenha" | **Resolvida** | O selo diz "Desde 1998 · Fermentação natural", e as duas promessas aparecem na página (chips e seção Sobre) |

Melhorias opcionais feitas: M1 (Depoimentos com destaque), M2 (ramo fora do H1), M4 (alvos de toque, exceto o "Sobre" do rodapé), M5 (T6, T7 e T8), M7 (título com 60 caracteres e descrição com 141) e parte da M6 (T12). Ficaram sem fazer: M3, T4 e T13.

## Notas da rubrica (ciclo 2)

| # | Critério | Ciclo 1 | Ciclo 2 | Justificativa |
|---|---|---|---|---|
| 1 | Aderência ao briefing | 5 | **5** | As 10 seções e todos os objetivos estão presentes. O O9 passa de "parcial" para "OK": não sobra violação de WCAG e o LCP mediano é ≤ 2,5 s |
| 2 | Hierarquia e clareza | 4 | **5** | Nas 3 larguras, a 1ª tela mostra o que é o site (eyebrow + H1), onde fica e quando abre (lead) e o que fazer (CTA WhatsApp). O selo agora é estático depois de 4 s e não disputa atenção |
| 3 | Estética moderna | 3 | **4** | Depoimentos com 1 citação grande em fundo café e 2 cards menores (`ciclo2-desktop-depoimentos.png`) quebram a sequência de "título + 3 cards" e dão um ponto de contraste no meio da página. O hero 2 colunas continua justificado no `design.md`. Não sobe a 5 porque Encomendas, Equipe e Horários ainda seguem o padrão de 3 colunas iguais (`ciclo2-desktop-inteira.jpg`) e porque a ponta do ramo aparece cortada sob o cabeçalho no desktop (N2) |
| 4 | Coerência com o design | 4 | **5** | O `srcset` e o `sizes` agora refletem o layout real. As divergências (hero 2 colunas a partir de 768 px, 16:10 no celular, Depoimentos com destaque, selo de uma volta) foram registradas no CHANGELOG e no `design.md`. Os tokens não mudaram |
| 5 | Qualidade do texto | 4 | **5** | O selo não faz mais promessa solta. Título e descrição estão no tamanho certo. Não há placeholder e o tom afetivo se mantém |
| 6 | Imagens e assets | 4 | **4** | O hero tem direção de arte correta por largura e não está distorcido, e não há SVG sem uso em `site/`. Perde um ponto porque os 8 cards ainda usam um único arquivo de 800 px (T4), porque os logos SVG pesam 23,6 KB cada (T13) e porque a ponta do ramo aparece cortada no desktop (N2) |
| 7 | Experiência mobile | 4 | **4** | O hero do celular ficou exemplar: foto 16:10, H1 e os 2 CTAs na 1ª tela. A barra fixa não pisca ao carregar e os alvos têm 44 px. Perde um ponto porque a página continua com 15,2 mil px (M3 não feita) e porque o TBT de 160 a 450 ms deixa o carregamento instável num celular modesto (N1) |

**Média: 4,57** (5 + 5 + 4 + 5 + 5 + 4 + 4 = 32 / 7). Nenhum critério abaixo de 3 (o mínimo é 4).

## Pendências antes de publicar

### Técnicas (desenvolvedor-frontend; não bloqueiam a aprovação do protótipo)
1. **N1 (importante):** hospedar as fontes localmente (woff2 com subconjunto latino, `preload`, `@font-face`) e aplicar `content-visibility: auto` com `contain-intrinsic-size` nas seções abaixo da dobra, nunca no hero. Medir de novo e buscar TBT ≤ 200 ms, LCP ≤ 2,5 s e Desempenho ≥ 90 nas 3 rodadas. Depois, conferir as âncoras do menu, a barra fixa e o "revelar".
2. **N2:** reduzir e baixar o ramo do hero (por exemplo 80x160, `top: -190px`) para que ele não fique atrás do cabeçalho. Conferir a 1440x900 e a 1280x720.
3. **N3:** `min-width: 44px` em `.rodape__col li > a` (link "Sobre" do rodapé com 40x44).
4. **T4 / T13:** `srcset` com 400w nos cards de produto, e SVGO no `logo.svg` e no `logo-claro.svg`.
5. **M3 (opcional):** Destaques em 2 colunas compactas no celular, para encurtar a página.

### Para o usuário
- **Dados reais:** endereço, WhatsApp, Instagram, horários, preços e história são fictícios. Rodar a entrevista (etapa 0b) para trocar.
- **Fotos próprias:** as fotos da equipe e dos avatares de depoimento são ilustrativas e precisam ser trocadas por fotos reais com autorização. Fachada e ambiente reais também são recomendados.
- **Depoimentos reais:** trocar os 3 de exemplo por depoimentos de clientes, com autorização.
- **Localização:** com as coordenadas, inserir o mapa interativo do Google no lugar da busca genérica do "Como chegar".
- **Domínio:** necessário para o `og:url`, para o `og:image` absoluto e para o `canonical` (T9). Com os dados reais, acrescentar o JSON-LD `Bakery` (T11).
