# Avaliação de resultado: Reef Stack

- **Avaliador:** avaliador-resultado
- **Data:** 2026-11-16
- **Ciclo atual:** 2 de 3
- **Entradas do ciclo 2:** `briefing.md`, `conteudo.md` (Revisões > Ciclo 2), `design.md`, `site/` (CHANGELOG, iteração 2), `capturas/ciclo2-*` (celular 360, tablet 768, desktop 1280, `file://`), `inspecao-visual.md` (Ciclo 2) e `avaliacao-tecnica.md` (Ciclo 2: APROVADO COM RESSALVAS)

# Ciclo 2

## Decisão: APROVADO (ciclo 2 de 3)

**Média: 4,71.** Nenhum critério fica abaixo de 4. As duas razões que levaram a ITERAR no ciclo 1 foram resolvidas:

1. **WCAG 2.5.3 (B1):** o botão flutuante agora tem `aria-label="Pedir no WhatsApp (abre o WhatsApp)"`, que contém o rótulo visível. O avaliador técnico não aponta nenhum bloqueante, e o Lighthouse dá Acessibilidade 100.
2. **Marca do fluxo interno (I1/T1):** as etiquetas "Revisão técnica pendente" saíram. pH ("Alcalino e estável") e Nitrato ("Baixo e controlado") trazem um texto para o visitante, que vira convite para falar com a loja (`ciclo2-celular-abas-parametros-marinho.png`). O texto é idêntico ao de `conteudo.md` (linhas 273 e 275).

As melhorias M1 a M6 também entraram: hero do desktop inteiro na dobra, botão de pausa visível nas 3 larguras, degradê dos cartões conforme o design §5.4, `sizes` corrigidos, regiões de tabela com nomes únicos e redes fictícias sem `href="#"`.

**Por que os dois itens "importantes" do avaliador técnico não seguram a aprovação:**
- **C2-I1 (erro de CORS no console ao abrir por `file://`):** o visitante não vê nada. As fontes aparecem em Sora e Inter também no duplo clique (`ciclo2-celular-file-dobra.png` é igual à versão servida por http), e o site publicado roda por http, onde o console fica limpo. É uma questão de higiene técnica, não de resultado.
- **C2-I2 (LCP de 3,1 s, meta de 2,5 s):** a medição foi feita num servidor local **sem compressão**, e o próprio avaliador técnico prevê aceitar o valor se o excesso vier dessa latência. O LCP caiu de 3,5 s para 3,1 s, o CLS é 0 e o desempenho fica em 86–88. Isso atende à restrição "leve" do briefing num nível aceitável.

As duas correções somam cerca de 5 linhas no `<head>` e estão abaixo, em **Melhorias recomendadas**, como ajuste antes de publicar. Não justificam gastar o último ciclo de iteração.

## Objetivos do briefing (verificação do ciclo 2)

| Objetivo / restrição | Situação |
|---|---|
| CTA principal: WhatsApp | Cumprido. O botão flutuante agora some no hero, em `#visite` e no rodapé, onde já há CTA |
| CTA secundário: entrar no clube | Cumprido, sem mudança |
| 12 seções revisadas | Todas presentes, sem regressão (abas, menu, tabelas e formulário conferidos pelo inspetor) |
| Acessível (WCAG AA) | Cumprido. B1 resolvido, Acessibilidade 100. Ressalva menor: um pixel de 4,05:1 atrás do título do cartão em 360 px (C2-M2), 0,09% da área, com média de 16,3:1 |
| Leve | Aceitável: 0 requisições externas, fontes locais de 73 KB, LCP de 3,1 s sem compressão |
| Até 2 famílias de fonte | Cumprido (Sora + Inter, agora locais, OFL) |
| Parâmetros como faixas de referência, sem número sem fonte | Cumprido. pH e nitrato ficam qualitativos, de acordo com `pesquisa.md` |

## Percurso por seção (o que mudou)

- **Hero:** no desktop 1280 x 800, a cascata cabe inteira e "Mergulhar no marinho" aparece completo (`ciclo2-desktop-dobra.png`). O botão de pausa fica no canto superior direito nas 3 larguras. No celular, a foto aparece na metade superior dos cartões (`ciclo2-celular-cartoes-zoom.png`), como o design pede.
- **Parâmetros (marinho):** a tabela ficou homogênea e confiável. As linhas qualitativas têm observações úteis e encaminham para o WhatsApp, o que reforça a loja como autoridade.
- **Rodapé:** Instagram e YouTube aparecem como ícones tracejados, sem link, com a nota "Perfis em breve". É honesto com o visitante e não deixa link morto.
- **Botão flutuante:** ainda cobre o fim de algumas linhas no celular, em 29% das posições de rolagem (`ciclo2-celular-flutuante-viewport.png`). O conteúdo continua acessível ao rolar, e o foco por Tab fica protegido pelo `scroll-padding-bottom`. É um item menor.

## Notas da rubrica (ciclo 2)

| # | Critério | Ciclo 1 | Ciclo 2 | Justificativa |
|---|---|---|---|---|
| 1 | Aderência ao briefing | 5 | 5 | As 12 seções e os 2 CTAs estão presentes. A restrição WCAG passou a ser cumprida com a correção de B1. |
| 2 | Hierarquia e clareza | 5 | 5 | Eyebrow, H1, subtítulo e CTA coral ficam claros em 5 segundos. No desktop, o hero agora mostra os dois caminhos inteiros na primeira dobra. |
| 3 | Estética moderna | 4 | 5 | Sem a cascata cortada e sem as etiquetas coral de "pendente", o ritmo visual ficou limpo. Os cartões do hero e as tabelas-cartão estão bem acabados nas 3 larguras. |
| 4 | Coerência com o design | 4 | 5 | O degradê voltou ao §5.4 e os tokens e componentes seguem o `design.md`. As divergências estão justificadas no CHANGELOG. |
| 5 | Qualidade do texto | 3 | 4 | Não há placeholders nem jargão interno, e pH e nitrato estão iguais ao `conteudo.md` (Revisões > Ciclo 2). Perde um ponto porque o microtexto "Perfis em breve" / "em breve" não está no `conteudo.md`. A divergência está justificada no CHANGELOG (M6) e o tom é coerente, então não conta como defeito, mas ainda falta a validação do redator. |
| 6 | Imagens e assets | 4 | 5 | `sizes` corrigidos (o Lighthouse não aponta mais a foto da loja), 0 imagens quebradas, proporções corretas, créditos completos e fontes locais com licença registrada. A falta de uma versão de 320w nos cartões (C2-M4, cerca de 55 KiB) é otimização opcional. |
| 7 | Experiência mobile | 4 | 4 | Hierarquia preservada, pausa na primeira dobra, tabelas legíveis e menu sem regressão. Perde um ponto pelo botão flutuante, que ainda cobre o fim de linhas (C2-M1), pelo LCP de 3,1 s e pelo pixel de contraste no cartão "Água doce" (C2-M2). |

**Média: 4,71** (33 / 7). Nenhum critério abaixo de 3. **Critério de aprovação atendido.**

## Correções obrigatórias

Nenhuma.

## Melhorias recomendadas (antes de publicar; não bloqueiam a aprovação)

1. **C2-I1 + C2-I2 (desenvolvedor, só no `<head>`, cerca de 5 linhas):** apagar os 2 `<link rel="preload" ... as="font">` (`index.html:26-27`). **Antes** do `<link rel="stylesheet">`, colocar: (a) o `<script>` com `classList.add('js')`, que vai criar os preloads de fonte só quando `location.protocol !== 'file:'`; (b) `<link rel="preload" href="assets/causticas.svg" as="image" fetchpriority="high">`. Resultado esperado: console sem erros em `file://` e em http, e LCP mais baixo. Se for aplicado, pedir ao `inspetor-visual` uma conferência rápida do console e do Lighthouse.
2. **C2-M2:** abaixo de 600 px, colocar `text-shadow: 0 1px 3px rgb(7 28 44 / .85)` em `.caminho-link` e `.caminho-apoio`. Meta: pior pixel com 4,5:1 ou mais.
3. **C2-M3:** limitar `atualizarRegioesRolaveis` à faixa de 600 a 720 px e adiar a chamada com `requestAnimationFrame` (menos TBT).
4. **C2-M1 (opcional):** abaixo de 900 px, esconder o botão flutuante enquanto a página rola para baixo e mostrá-lo de novo quando a rolagem parar ou voltar para cima.
5. **C2-M4 (opcional):** versão de 320w das fotos dos cartões-caminho.
6. **Redator:** validar e registrar em `conteudo.md` o microtexto das redes ("Perfis em breve" e o texto oculto "Instagram/YouTube da Reef Stack: em breve"). O texto some quando os perfis reais entrarem.

## Pendências para o usuário (não reprovam o site)

1. **Dados fictícios a substituir antes de publicar:** WhatsApp (`WHATSAPP_NUMERO` em `script.js` e os fallbacks no HTML), telefone, e-mail, endereço, horários, datas do clube e das oficinas, nome do responsável.
2. **Redes reais:** trocar os `<span class="rede-em-breve">` por links com `target="_blank" rel="noopener"` e os rótulos `[rede-*-aria]` do `conteudo.md`, e retirar a nota "Perfis em breve".
3. **Domínio real** para `canonical`, `og:url` e `og:image` (`SEU-DOMINIO`). Sem domínio, remover `canonical` e `og:url` na publicação.
4. **Preços "a partir de"**, **serviços** (quarentena, teste de água, entrega e área atendida) e **condições do clube** (mensalidade): confirmar ou retirar.
5. **Fotos próprias** (loja, vitrine, encontro do clube, retratos) e **depoimentos reais** com autorização.
6. **Validação técnica do marinho** por um aquarista, só se quiser números de pH e nitrato no site.
7. **Coordenadas reais**, para o mapa interativo, e **JSON-LD** com os dados reais (`dados-negocio.md` §3).
8. **Na publicação:** servir com gzip/brotli (M7). Isso também ajuda o LCP.

---

# Ciclo 1 (histórico)

## Decisão: ITERAR (iteração 1 de 3)

A média da rubrica é **4,14** e nenhum critério fica abaixo de 3, então os números passariam. Mesmo assim a decisão é ITERAR, por dois motivos:

1. **Uma restrição do briefing não está cumprida.** O briefing pede "acessível (WCAG AA)", e o botão flutuante do WhatsApp falha no critério 2.5.3 (nível A): o `aria-label` diz "Pedir **pelo** WhatsApp" e o rótulo visível diz "Pedir **no** WhatsApp" (B1 do avaliador técnico).
2. **Há uma marca do fluxo interno visível para o visitante.** As duas etiquetas "Revisão técnica pendente" na tabela marinha (pH e nitrato) tiram credibilidade justamente da seção que serve de prova de autoridade da loja (I1).

As duas correções são pequenas. Corrigidas, junto com o carregamento das fontes (I2), o site fica pronto para aprovação no ciclo 2.

**O que não pesou na decisão:** os dados de contato, endereço, horários, redes, preços, datas do clube e depoimentos fictícios (pedido do usuário, bem sinalizados com "Dados de exemplo", "(exemplo)" e o aviso no rodapé) e o placeholder `SEU-DOMINIO`. Esses itens estão em **Pendências para o usuário**.

## Objetivos do briefing (verificação)

| Objetivo / seção revisada | Situação |
|---|---|
| CTA principal: comprar ou pedir orçamento pelo WhatsApp | Cumprido: cabeçalho, hero, cartões da loja, kit iniciante, Visite e botão flutuante, com 5 mensagens prontas |
| CTA secundário: entrar no clube | Cumprido: "Conhecer o clube" no hero, formulário "Quero participar" que abre o WhatsApp com mensagem pronta |
| 1. Cabeçalho + CTA WhatsApp | Presente |
| 2. Hero com dois caminhos (doce / marinho) | Presente: os cartões-caminho ativam a aba certa |
| 3. Loja (peixes, corais/frags, plantas, camarões, equipamentos, rações e testes, montagem) | Presente: 7 categorias |
| 4. Doce × Marinho + espécies para iniciantes | Presente: comparativo + abas de espécies, todas de cativeiro, com alerta do betta |
| 5. Primeiros passos / kit iniciante com ciclagem | Presente: 6 passos, SVG do ciclo do nitrogênio, nota "o nitrato não zera" (corrige o erro apontado na pesquisa) |
| 6. Parâmetros da água | Presente, **com pendência visível no marinho (I1)** |
| 7. Clube (benefícios, encontros, oficinas, troca de mudas/frags, grupo) + "Quero participar" | Presente |
| 8. Compromisso: bem-estar animal e procedência legal | Presente: inclui "Nunca solte na natureza" |
| 9. Depoimentos (exemplo) | Presente e marcado como exemplo |
| 10. FAQ com erros comuns | Presente: duas colunas (loja/clube e erros de iniciante) |
| 11. Visite a loja, sem mapa | Presente: mapa ilustrativo sem localização real, como o briefing pede |
| 12. Rodapé com redes e créditos das fotos | Presente: créditos completos, inclusive os CC BY |
| Restrições: sem framework, mobile first, até 2 famílias de fonte, faixas como referência, sem incentivo a espécie ameaçada | Cumpridas. Exceção: WCAG (B1) |

## Percurso por seção (ordem do HTML)

- **Cabeçalho:** logo, 6 âncoras e CTA coral bem destacado. No celular, menu de ondas que vira X. Funciona.
- **Hero:** a mensagem fica clara em 5 segundos ("Loja e clube de aquarismo", "Do rio ao recife, camada por camada", CTA WhatsApp). Os cartões-caminho são legíveis (pior contraste 6,46:1). Problemas: no desktop 1280 x 800, o título "Mergulhar no marinho" fica cortado na dobra e o botão de pausa fica abaixo dela (M1). No celular, o degradê cobre cerca de 60% do cartão e a foto quase some (M2).
- **Loja:** grade de 7 categorias com preços "a partir de" e destaque escuro em "Montagem e manutenção". Boa varredura. A faixa "Não sabe por onde começar?" faz uma boa ponte para o WhatsApp.
- **Doce × Marinho:** tabela comparativa que vira cartões no celular. Abas de espécies com fotos reais, nome científico, chips de nível e alerta do betta. Bom.
- **Primeiros passos:** passo a passo numerado, ciclagem destacada como "Essencial", ciclo do nitrogênio em SVG e kit iniciante com CTA. É a seção mais forte em autoridade.
- **Parâmetros:** a aba de água doce está completa e com fontes. A aba marinha tem pH e nitrato sem faixa e com a etiqueta "Revisão técnica pendente" (I1), o único ponto onde o site parece inacabado.
- **Clube:** foto do encontro, 4 benefícios, cartão do próximo encontro (marcado como exemplo) e formulário curto. Bom contraste no tema escuro.
- **Compromisso, depoimentos, FAQ:** coerentes com o tom responsável do briefing. Os depoimentos estão marcados como exemplo.
- **Visite:** endereço e horários com selo "Dados de exemplo", dia de hoje destacado, mapa ilustrativo. Correto.
- **Rodapé:** redes, créditos e aviso de dados fictícios. Instagram e YouTube com `href="#"` que não fazem nada (M6).
- **Botão flutuante:** útil, mas cobre o fim de linhas e a borda de cartões em 360 a 899 px (M3), e tem o problema de rótulo B1.

## Notas da rubrica

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Aderência ao briefing | 5 | As 12 seções revisadas e os dois CTAs estão presentes. As restrições técnicas e de responsabilidade são cumpridas (o B1 está no critério de acessibilidade e entra como correção obrigatória). |
| 2 | Hierarquia e clareza | 5 | O eyebrow "Loja e clube de aquarismo", o H1, o subtítulo e o CTA coral deixam claro o que é o site e o que fazer, nas três larguras. A navegação por âncoras acompanha a ordem das seções. |
| 3 | Estética moderna | 4 | Paleta oceano/musgo/coral bem aplicada, cáusticas sutis, tipografia Sora + Inter, bom respiro e ritmo claro/escuro. Perde um ponto pela cascata do hero cortada na dobra do desktop e pelas etiquetas coral de "pendente", que criam ruído visual na tabela. |
| 4 | Coerência com o design | 4 | Tokens, estrutura e componentes seguem o `design.md`. As divergências estão justificadas no CHANGELOG (ordem da cascata, ciclo vertical/horizontal). Pequeno desvio não justificado: o degradê dos cartões em 360 px cobre cerca de 60% em vez dos 55% do §5.4 (M2). |
| 5 | Qualidade do texto | 3 | A copy é clara, didática, sem placeholders e fiel ao `conteudo.md` (conferido: sem divergências não justificadas). Mesmo assim, a etiqueta "Revisão técnica pendente" é jargão interno exposto ao visitante, e "Alcalino e estável" / "Baixo e estável" ficam vagos numa coluna chamada "Faixa de referência". |
| 6 | Imagens e assets | 4 | Fotos reais, com proporção correta (0 distorcidas, 0 quebradas), WebP + JPG, créditos completos. Fotos da loja, do clube e dos depoimentos são de banco e estão marcadas para troca. Perde um ponto pelo `sizes` exagerado, que serve a foto da loja de 1200 px a cerca de 338 px (M4). |
| 7 | Experiência mobile | 4 | Hierarquia preservada, tabelas viram cartões legíveis, menu em tela cheia, alvos de 44 px ou mais, sem rolagem horizontal. Perde um ponto pelo botão flutuante sobre o texto, pelo botão de pausa fora da primeira dobra e pelo LCP de 3,5 s no celular (I2). |

**Média: 4,14** (29 / 7). Nenhum critério abaixo de 3.

## Correções obrigatórias

Ordem de execução: primeiro o **redator** (T1), depois o **desenvolvedor** (C1 a C3, aplicando o texto de T1).

### Texto (redator)

**T1. Tirar a "Revisão técnica pendente" da tabela marinha (I1 / V1).**
- A `pesquisa.md` **não tem fonte confiável** para os números: o pH de "cerca de 8,1–8,4" está marcado como "confirmar: não foi checado em fonte nesta rodada" (linha 101), e para o nitrato "não encontrei consenso numérico" (linha 103; ver também o item 8 da seção de validação). Por isso **não coloque números** nessas duas linhas.
- Reescreva as duas linhas para o visitante, sem a palavra "pendente", sem jargão interno e transformando a ressalva em convite para falar com a loja. O resultado esperado é algo nesta linha (o redator ajusta o tom):
  - **pH**, faixa: "Alcalino e estável". Observação: "A água do mar é naturalmente alcalina. Mais importante que um número exato é evitar variações bruscas. Traga uma amostra e a gente ajuda a ler o seu teste."
  - **Nitrato**, faixa: "Baixo e controlado". Observação: "O nível ideal muda bastante entre o aquário só de peixes (FOWLR) e o recifal, com corais. Fale com a gente para definir o alvo do seu sistema."
- Remova o item `[etiqueta-pendente]` do `conteudo.md` e atualize a nota de precisão técnica do topo (linha 5).
- Mantenha a validação por um aquarista apenas na seção de pendências do `conteudo.md` (item 4), como pendência para o usuário, e não no site.

### Código (desenvolvedor)

**C1. Botão flutuante do WhatsApp com nome acessível igual ao rótulo visível (B1, bloqueante WCAG 2.5.3).**
`index.html:1068-1070`: trocar para `aria-label="Pedir no WhatsApp (abre o WhatsApp)"`, ou adotar o padrão dos outros botões (`<span>` visível ou `visually-hidden` + "(abre o WhatsApp)" escondido, sem `aria-label`). Resultado esperado: o nome acessível contém exatamente "Pedir no WhatsApp".

**C2. Aplicar o texto de T1 na tabela marinha (I1).**
`index.html:607` e `609`: remover os dois `<span class="etiqueta etiqueta-pendente">` e colocar a faixa e a observação novas do `conteudo.md`. Se a classe `.etiqueta-pendente` ficar sem uso, removê-la do CSS. Atualizar o item 6 de pendências do `CHANGELOG.md`.

**C3. Fontes sem bloquear a renderização (I2).**
Hospedar Inter (400–700) e Sora (600–700) em woff2, subconjunto latin, em `site/assets/fontes/`, com `@font-face` e `font-display: swap`, e `preload` só para Sora 700 e Inter 400. Remover o CSS do Google Fonts e os 2 `preconnect`. Alternativa aceita: carregar o Google Fonts sem bloquear (`rel="preload" as="style"` + `onload` + `<noscript>`). Resultado esperado: LCP abaixo de 2,5 s no Lighthouse celular, sem perder as famílias do design. Verificar se as licenças (OFL) permitem hospedar, e registrar no CHANGELOG.

## Melhorias recomendadas (fazer no mesmo ciclo se der, sem bloquear a aprovação)

1. **M1, hero no desktop e botão de pausa:** levar o botão de pausa para o topo do hero (ou para perto dos botões de ação) e reduzir a cascata e o padding para o hero caber em 1280 x 800, sem cortar "Mergulhar no marinho".
2. **M3, botão flutuante:** `scroll-padding-bottom: 88px` no `html` e esconder o botão quando `#visite` ou o rodapé estiverem visíveis. Opcional: 48 px e `right: 12px` abaixo de 600 px.
3. **M4, `sizes` das fotos:** loja, clube e vitrine com os valores do relatório técnico, para o navegador escolher a versão de 640w.
4. **M5, regiões das tabelas:** nomes distintos ("Parâmetros de água doce" / "Parâmetros de marinho"), sem "role para o lado", e `tabindex="0"` só quando houver rolagem.
5. **M6, redes fictícias:** enquanto não houver perfis reais, mostrar Instagram e YouTube sem link (ou com `aria-disabled="true"` e o rótulo "perfil de exemplo"), em vez de `href="#"` que não faz nada.
6. **M2, degradê do cartão em 360 px:** voltar aos cerca de 55% do design, conferindo o contraste de novo.
7. **Opcional (pesquisa):** se o usuário quiser números de pH e nitrato no marinho, pedir ao `pesquisador-fontes` uma checagem em fonte confiável. Com fonte, o redator troca a faixa qualitativa pelos números citados.

## Pendências para o usuário (não reprovam o site)

1. **Dados fictícios a substituir antes de publicar** (conforme `dados-negocio.md` §4 e o CHANGELOG): WhatsApp (constante `WHATSAPP_NUMERO` em `script.js` e os fallbacks no HTML), telefone, e-mail, endereço, horários, Instagram e YouTube, datas do clube e das oficinas, nome do responsável.
2. **Domínio real** para `canonical`, `og:url` e `og:image` (`SEU-DOMINIO`, I3). Sem domínio, remover `canonical` e `og:url` na publicação.
3. **Preços "a partir de"** dos cartões da loja: confirmar valores ou tirá-los.
4. **Serviços citados como diferencial:** quarentena, teste de água com amostra e entrega (e a área atendida). Confirmar se são oferecidos.
5. **Condições do clube:** se há mensalidade depois do primeiro encontro gratuito.
6. **Fotos próprias:** loja, vitrine, encontro do clube e retratos dos depoimentos. **Depoimentos reais**, com autorização.
7. **Validação técnica do marinho** por um aquarista de confiança (pH, nitrato e demais faixas), se quiser números exatos no site.
8. **Coordenadas reais** da loja, para trocar o mapa ilustrativo pelo mapa interativo do Google. **JSON-LD** com os dados reais (modelo em `dados-negocio.md` §3).
9. **Na publicação:** servir com gzip/brotli (M7).
