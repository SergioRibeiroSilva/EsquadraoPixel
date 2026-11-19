# Avaliação de resultado: Vértice Sneakers

- Etapa 8, ciclo 2. Data: 19/11/2026.
- Base: `briefing.md`, `design.md`, `conteudo.md`, `site/` (HTML, CSS, CHANGELOG), `capturas/` do ciclo 2 (celular 360, tablet 768, desktop 1440), `inspecao-visual.md` (OK, 0 bloqueantes, 0 importantes, 1 menor) e `avaliacao-tecnica.md` (APROVADO, 0 achados).
- Os dados fictícios (endereço, contatos, produtos, preços e depoimentos) foram pedidos pelo usuário e não contam como defeito.

## Decisão: APROVADO (ciclo 2 de 3)

Média de 4,57, sem nenhum critério abaixo de 4. As 7 correções obrigatórias do ciclo 1 foram aplicadas e conferidas nas capturas. A restrição WCAG 2.2 AA do briefing agora é cumprida (Lighthouse Acessibilidade 100 no celular e no desktop, T2 e T3 resolvidos). Resta 1 achado visual menor (C2-1), que não bloqueia a entrega.

## Objetivos do briefing (checagem)

| Objetivo | Situação |
|---|---|
| Landing de uma página que leva a agendar ou comprar pelo WhatsApp e a visitar a loja | Atendido |
| Hero com carrossel de no mínimo 4 imagens: autoplay pausável, setas, indicadores, teclado, toque e reduced-motion | Atendido: 4 slides, tudo medido nas 3 larguras |
| Coleções, 8 produtos (de R$ 1.390 a R$ 3.980), diferenciais, boutique, experiência, depoimentos de exemplo, FAQ, localização sem mapa, CTA final e rodapé | Atendido |
| Visual escuro premium, serifada de alto contraste, acento champanhe | Atendido |
| WCAG 2.2 AA | **Atendido** (no ciclo 1 não atendia) |
| Responsivo e mobile first | **Atendido** (no ciclo 1 era parcial): o menu abre inteiro com qualquer rolagem |
| Leve, com lazy-load nos slides 2 em diante | Atendido: Desempenho 94 no celular e 100 no desktop |

## Comparação com o ciclo 1

| Item | Ciclo 1 | Ciclo 2 |
|---|---|---|
| Menu do celular e do tablet depois de rolar (T1/V1) | Cortado, só mostrava "Coleções" | Painel inteiro com os 6 links, o WhatsApp e o endereço (`celular-menu-aberto-rolado.png`) |
| Abas do carrossel e Instagram (T2, T3; WCAG 2.5.3) | Falhavam | Corrigidos |
| Rádios "Período" (V2) | Ovais | Círculos de 20 px |
| h1 permanente (T5) | Dentro do slide 1 | `h1` fora dos slides, em `.sr-only`; divergência registrada no CHANGELOG |
| Faixa da boutique (V3) | Loja de talheres | Tênis brancos numa prateleira de madeira (`desktop-foto-faixa.jpg`) |
| Foto da Visite (V7) | Sapatos sociais | 4 tênis em prateleiras de madeira (`desktop-foto-visite.jpg`) |
| Acento solto no título (V4) | Circunflexo bem acima da letra | Acento junto da letra (`desktop-dobra.png`), com recorte de EB Garamond registrado no CHANGELOG |
| Tablet em retrato (V5) | Texto sobre o tênis | Recorte retrato, com o tênis acima do texto (`tablet-dobra.png`) |
| Logo sobre o slide 3 no celular (V6) | Cadarço atrás do logo | Mais fraco, mas ainda aparece (C2-1, menor) |
| Notas | 4 / 5 / 4 / 4 / 5 / 3 / 2 (média 3,86) | 5 / 5 / 5 / 4 / 5 / 4 / 4 (média 4,57) |

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | 5 | As 11 seções, o carrossel completo e todas as restrições (WCAG 2.2 AA, mobile first, sem frameworks, assets em `site/assets/`) estão cumpridos |
| 2 | Hierarquia e clareza | 5 | O hero diz em segundos o que é a loja e o que fazer; um único CTA por slide; as abas nomeadas funcionam como índice |
| 3 | Estética moderna | 5 | Editorial escuro, serifada grande com o acento agora correto, champanhe usado com moderação e bom espaço. O hero é justificado no `design.md` frente aos outros projetos. A página varia de layout (mosaico, grade com filtro, numerais, split, linha do tempo, escalonados) |
| 4 | Coerência com o design | 4 | Tokens, componentes e estrutura seguem o design. Há duas divergências justificadas no CHANGELOG: o h1 fora do slide, por acessibilidade, e a família de apoio para os acentos. A segunda é local e em recorte de cerca de 2 KB, sem pesar contra o limite de 2 famílias do Google Fonts |
| 5 | Qualidade do texto | 5 | Os títulos e o corpo batem com `conteudo.md`; o novo alt da Visite descreve a foto; não há placeholders; o tom é sofisticado e conciso |
| 6 | Imagens e assets | 4 | As fotos fora do ramo foram trocadas por fotos de tênis, e o hero e os produtos são fortes. Perde 1 ponto porque o tile "Couro artesanal" ainda mostra um sapato social e os fundos das fotos 02 e 05 não seguem o padrão dos outros produtos |
| 7 | Experiência mobile | 4 | O menu funciona, a hierarquia e a leitura são boas, a barra fixa do WhatsApp ajuda, e os alvos têm 44 px. Perde 1 ponto pelo cadarço do slide 3 que passa atrás do símbolo do logo (C2-1), ainda que o logo continue legível |

**Média: 32/7 = 4,57.** Nenhum critério abaixo de 3. **Aprovado.**

## Correções obrigatórias
Nenhuma.

## Melhorias recomendadas (opcionais, para uma revisão futura)
- **C2-1:** no celular, ajustar o `object-position` do slide 3 (por exemplo, `50% 40%`) para o cadarço sair da faixa do cabeçalho, ou trocar o recorte 9:16 dessa foto.
- **Tile "Couro artesanal":** trocar o sapato social por um close de tênis de couro (costura ou textura), sem logo.
- **Produtos 02 e 05:** uniformizar o fundo com o dos outros cards, se surgirem candidatas sem logo.
- **Licença da EB Garamond:** incluir o texto da SIL OFL 1.1 em `site/assets/fontes/`, junto dos recortes.

## Pendências para o usuário
- Todos os dados (endereço, telefones, e-mail, Instagram, produtos, preços e políticas) são fictícios. Troque-os pelos reais antes de uma publicação de verdade.
- As fotos dos 3 depoimentos são de bancos de imagens, usadas em depoimentos inventados. Substitua por clientes reais, com autorização.
- Fotos de produtos e da loja: o ideal é usar fotos do estoque e do espaço real.
- Sem coordenadas, o site não tem mapa interativo, só o link do Maps.
