# Avaliação de resultado: Futebol Kids (ciclo 2)

- **Data:** 2026-11-17
- **Escopo do ciclo:** vídeo de fundo no hero desktop, pedido explícito do usuário ("esporte de ação"). O restante da página não mudou (`site/CHANGELOG.md`, "Iteração 2").
- **Entradas:** `briefing.md`, `design.md` (§3.0 e §3.3 revisadas), `conteudo.md`, `site/` (index.html, styles.css, script.js, CHANGELOG.md), `capturas/` do ciclo 2 (celular 360, tablet 768, desktop 900 e 1440, quadros do vídeo de 0, 8 e 15 s, Firefox), `inspecao-visual.md` (ciclo 2), `avaliacao-tecnica.md` (ciclo 2: APROVADO COM RESSALVAS), `imagens.md` §2.3.
- **Observação:** os dados fictícios (contatos, preços, professores, depoimentos, coordenadas) foram autorizados pelo usuário e não contam como defeito.

## Decisão

**APROVADO** (ciclo 2)

Média **4,43**, nenhum critério abaixo de 3. Nenhuma correção obrigatória. O vídeo cumpre o pedido do usuário e a §3.3 do design sem prejudicar a clareza, a acessibilidade ou o celular. As melhorias opcionais do ciclo 1 (bento, confetes, mapa, quebra de contatos) não entraram neste ciclo, porque o escopo foi só o vídeo. Elas continuam recomendadas, mas não bloqueiam a entrega.

## Objetivos mensuráveis do briefing (situação no ciclo 2)

| Objetivo | Situação |
|---|---|
| CTA principal "aula experimental grátis" via WhatsApp, visível em qualquer ponto | Atendido. No hero, o botão amarelo continua sendo o elemento mais forte sobre o vídeo (`desktop-dobra.png`) |
| CTA secundário "ver turmas e horários" | Atendido ("Ver turmas" e o placar de idade) |
| Faixa etária 4 a 12 anos clara | Atendido (selo, lead e placar) |
| 14 seções pedidas | Atendido, sem mudança |
| Segurança, diversão, desenvolvimento e valores | Atendido. O vídeo reforça a "ação" sem tirar o foco do cuidado |
| Imagem de crianças com cuidado | Atendido. A criança do primeiro plano aparece de costas, as outras de longe e sob overlay de 70 a 90%. O goleiro aparece de frente, mas pequeno e ao fundo (`imagens.md` §2.3) |
| Animações leves com `prefers-reduced-motion` | Atendido. Com movimento reduzido, o vídeo não é criado; ele tem botão de pausar (WCAG 2.2.2) e pausa fora da tela |
| Rápido no celular | Atendido no que cabe ao ciclo: o celular não baixa o MP4 nem o poster. O LCP de 3,5 s no celular vem do ciclo 1 (T3), e a avaliação técnica mostra que a queda não veio do vídeo |
| Aviso "Site de demonstração — dados fictícios" | Atendido |
| WCAG AA, responsivo, sem frameworks | Atendido (Acessibilidade 100, contraste do H1 sobre o vídeo ≥ 6,07:1, sem rolagem horizontal) |

## Percurso por seção (só o que muda no ciclo 2)

- **Hero desktop (900 e 1440 px):** o vídeo do pênalti num estádio vazio ao entardecer dá movimento e clima de "dia de jogo", como justifica a §3.0. O overlay lateral mantém a coluna de texto escura em todos os quadros (`desktop-hero-video-0s/8s/15s.jpg`). O H1, o lead e os dois CTAs seguem legíveis, e o botão de pausar (48x48, canto inferior direito) é discreto, não compete com o CTA e não encosta no placar. A troca do poster para o vídeo é invisível. **Persiste:** o confete do placar passa sobre "aula grátis" e logo abaixo do botão amarelo (V4/T9).
- **Hero celular e tablet:** sem mudança. A foto vertical continua, e nenhum byte de vídeo é baixado (`celular-dobra.png`, `tablet-dobra.png`).
- **Rodapé (créditos):** o resumo "Fotos: Unsplash · Vídeo: Pexels. Ver créditos" e o texto expandido estão corretos (ver critério 5).
- **Demais seções:** iguais ao ciclo 1. Os buracos da grade bento continuam visíveis em `desktop-inteira.jpg` ("Relatório para os pais" sozinho na última linha).

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | **5** | As 14 seções, os CTAs, o aviso de demonstração, o mapa e o FAQ continuam presentes. O vídeo atende ao pedido do usuário e respeita as restrições do briefing: crianças de costas ou de longe, animação com movimento reduzido e nada pesado no celular. |
| 2 | Hierarquia e clareza | **5** | O overlay em duas camadas mantém o texto como protagonista sobre o vídeo. Em 5 segundos o visitante lê o selo "4 a 12 anos", o H1 e o lead, e vê o botão amarelo dominante. O vídeo fica no centro-direita, onde não há texto, e o botão de pausar não disputa a atenção. |
| 3 | Estética moderna | **4** | O hero em vídeo com arco e placar é diferente dos projetos anteriores (split em `sergio-ribeiro`, fundo animado em `reef-stack`, foto com overlay diagonal em `arena-fight-sobradinho`), com justificativa na §3.0. O movimento dá a energia do esporte sem exagero, e o ritmo das seções continua variado. Perde 1 ponto, como no ciclo 1, pelos buracos do bento (V2) e pelos confetes sobre o CTA do hero (V4) e o título do CTA final (V3). |
| 4 | Coerência com o design | **4** | A §3.3 foi seguida à risca: imagem base como LCP, um preload por faixa, vídeo criado pelo JS depois do `load` e só quando permitido, atributos, overlay, `object-position`, botão de pausar, movimento reduzido e camadas. A avaliação técnica conferiu tudo. As 2 divergências (posição do botão em ≥ 1200 px e texto dos créditos) estão justificadas no CHANGELOG. Perde 1 ponto pelo bento fora da grade "1 foto 2x2 + blocos" e pelo passo 3 da metodologia desalinhado (V6), que vêm do ciclo 1. |
| 5 | Qualidade do texto | **5** | A copy do hero é a mesma de `conteudo.md`, sem placeholders. O crédito do rodapé é adequado: fiel à origem real dos assets (fotos do Unsplash, vídeo e poster do Pexels), curto, consistente com o formato já aprovado e com o detalhamento no `<details>` (autor, banco, licença, "ilustrativo"). A divergência com `conteudo.md` está justificada no CHANGELOG (divergência 2), então não conta como defeito. Falta só sincronizar `conteudo.md` (correção de texto opcional abaixo). |
| 6 | Imagens e assets | **4** | O clipe foi bem escolhido e bem tratado: sem marcas legíveis, sem áudio, 3,26 MB, poster idêntico ao 1º quadro e nitidez suficiente sob o overlay. Os candidatos com rostos de perto foram descartados com motivo (`imagens.md` §2.3). Perde 1 ponto porque o MP4 é fragmentado, sem `faststart`, e não foi testado no Safari (T13; o poster é o fallback). Também persistem o cartão sobre a atribuição do Google Maps (V1) e a foto do bento ao lado de células vazias. |
| 7 | Experiência mobile | **4** | Abaixo de 900 px nada mudou: a foto vertical continua, sem download de vídeo, a hierarquia se mantém, os CTAs ficam empilhados e o placar em 2x2. Perde 1 ponto, como no ciclo 1, pela quebra do e-mail e dos telefones a 360 px (V8) e pelo cartão que cobre os controles do mapa. |

**Média: 31 / 7 = 4,43.** Nenhum critério abaixo de 3.

Limitação: o vídeo foi avaliado por capturas estáticas (poster e quadros de 0, 8 e 15 s) e pelas medições do inspetor. A fluidez do movimento em si não foi vista. O Safari e o iOS não foram testados porque não estão disponíveis no Windows.

## Correções obrigatórias

Nenhuma.

## Melhorias recomendadas (opcionais, por prioridade)

### Texto (redator), antes do desenvolvedor

1. **Sincronizar `conteudo.md` com o crédito do site.** `conteudo.md` linha 394 ainda diz "Fotos: Unsplash, Pexels e Pixabay. Ver créditos", o que está errado (não há nada do Pixabay). Resultado esperado: o resumo fica "Fotos: Unsplash · Vídeo: Pexels. Ver créditos", e o texto expandido entra em `conteudo.md` como está no site (`index.html:926`). O site não precisa mudar.

### Código (desenvolvedor-frontend)

1. **Bento sem buracos (V2).** É o defeito visual mais aparente da página. Resultado esperado: no desktop e no tablet, a foto e os 6 blocos preenchem a grade sem células vazias (`grid-auto-flow: dense`, reordenar o DOM ou posicionar cada bloco).
2. **Confetes fora dos CTAs (V4/T9, V3).** Afastar `.placar-confete` do botão "Agendar aula grátis" (em 900 e 1440 px) e tirar os confetes e a linha do meio-campo de cima do texto do CTA final.
3. **Cartão de contato fora do mapa (V1/T1).** A atribuição e os controles do Google ficam visíveis nas 3 larguras.
4. **Quebra de contatos no celular (V8/T5).** Telefones com `white-space: nowrap` e e-mail quebrando só antes do `@`.
5. **Foco no botão do vídeo ao encolher a janela (T11).** Se o botão estiver focado quando a largura cair abaixo de 900 px, mover o foco para o 1º CTA.
6. **Desempenho (T3, T4, T12).** Foto mobile do hero em ~720 px com `srcset`, Google Fonts sem bloquear a renderização e sem o peso 600, poster também em WebP. Meta: LCP no celular ≤ 2,5 s.
7. **Ajustes do ciclo 1 ainda abertos:** alinhar o passo 3 da metodologia (V6) e o espaçamento do plano "1x por semana" (V7).

## Pendências para o usuário (antes de publicar)

- **Vídeo do hero:** substituir `hero.mp4` e `hero-poster.jpg` por um vídeo próprio da escolinha, gravado com autorização dos responsáveis por todas as crianças que aparecem. Crianças de costas ou de longe, sem som, 10 a 20 s em loop, até ~2 MB. Na troca, recodificar com `-movflags +faststart` (comando em `imagens.md` §2.3), gerar o poster a partir do 1º quadro, testar no Safari/iOS e atualizar o crédito do rodapé (remover "Vídeo: Pexels").
- **Fotos:** trocar as fotos de crianças, equipe e depoimentos por fotos próprias com autorização. Refazer o `og-image.jpg` e a foto vertical do hero no celular. Quando nenhum material de banco restar, ajustar ou remover os créditos do rodapé.
- **Dados fictícios:** trocar endereço, WhatsApp, telefone, e-mail, Instagram, horários, preços, nomes e CREF dos professores, depoimentos, coordenadas do mapa (hoje em Brasília) e o JSON-LD. Retirar o aviso e as etiquetas de "demonstração".
- **Domínio:** definir, para usar URL absoluta em `og:image` e no JSON-LD e para incluir `canonical` e `og:url` (T2, T6).
- **Servidor:** publicar com compressão gzip ou brotli (maior ganho de LCP no celular, T3).
