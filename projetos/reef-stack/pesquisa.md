# Pesquisa: Aqua Vida, guia de aquarismo (água doce e marinho)

> Pesquisa feita em 2026-11-16 pelo pesquisador de fontes. Toda afirmação traz a URL de origem. **Aviso sobre as fontes:** boa parte do conteúdo técnico de aquarismo na web vem de lojas e fabricantes (Seachem, LiveAquaria, Bulk Reef Supply, API, Petz). Elas foram usadas quando concordam entre si. Fontes oficiais (Planalto, ICMBio, IBAMA, W3C, MDN, Google) foram priorizadas para legislação, acessibilidade e SEO. Números são **faixas de referência**, não regras absolutas, como pede o briefing.

---

## Resumo executivo

1. As fontes concordam que **água doce é o melhor começo**: custa menos, perdoa mais erros e exige menos equipamento. Marinho é mais caro e rigoroso, mas viável com estudo ([Tankarium](https://www.tankarium.com/saltwater-vs-freshwater-aquariums/), [Quality Marine](https://qualitymarine.com/news/how-hard-is-it-really)).
2. O conteúdo que não pode faltar é a **ciclagem (ciclo do nitrogênio) antes dos peixes**: amônia e nitrito devem chegar a 0. Leva semanas ([Petz](https://www.petz.com.br/blog/especies/peixes/ciclagem-de-aquario), [Seachem](https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank)).
3. Pela ética e pela lei brasileira, **não se solta animal de aquário na natureza** (Lei 9.605/98, arts. 31 e 61; caso do peixe-leão, acompanhado pelo ICMBio). Prefira peixes nascidos em cativeiro.
4. Sobre o visual: tons aquáticos com contraste AA, animação sutil desligada por `prefers-reduced-motion`, alvos de toque de 24 px ou mais (WCAG 2.2) e um FAQ sem esperar "rich result" do Google.
5. Fotos: Unsplash e Pexels (licença própria, crédito opcional) e Wikimedia Commons **somente CC0/CC BY**. Muitas boas fotos do Commons são CC BY-SA e ficam de fora pela regra do projeto.

---

## 1. Conteúdo técnico (para o redator)

### 1.1 Água doce × marinho

| Critério | Água doce | Marinho | Fonte |
|---|---|---|---|
| Custo inicial | Menor. Uma tabela de blog para 30 galões (~113 L) dá US$ 200–400 contra US$ 600–1.200+ no marinho. Um varejista estima o marinho em cerca do dobro | Maior. Programa da UC Santa Barbara: cerca de US$ 300 (10 gal) a US$ 1.600 (90 gal), em valores de 2018 | [Tankarium](https://www.tankarium.com/saltwater-vs-freshwater-aquariums/), [Reef Friendly Aquariums, UCSB](https://reeffriendlyaquariums.msi.ucsb.edu/node/5) |
| Preço dos animais | Muitos peixes populares custam menos de US$ 10 | Peixes marinhos populares costumam passar de US$ 20 | [Tankarium](https://www.tankarium.com/saltwater-vs-freshwater-aquariums/) |
| Dificuldade | Sistema mais estável e tolerante a erros | Parâmetros mais estreitos. Há quem diga que exige só "um pouco mais" de pesquisa e esforço | [Charterhouse Aquatics](https://charterhouse-aquatics.com/blogs/features/freshwater-vs-saltwater-aquariums-which-should-you-choose), [Quality Marine](https://qualitymarine.com/news/how-hard-is-it-really) |
| Manutenção | Trocas parciais regulares (10–20% por semana é comum). Estimativa de 1–2 h/semana | Mesmas trocas, mais testes e cuidado com equipamentos. Estimativa de 3–5 h/semana e conta de luz maior | [Tankarium](https://www.tankarium.com/saltwater-vs-freshwater-aquariums/), [AskAVet](https://askavet.com/blogs/news/freshwater-vs-saltwater-aquariums-vet-guide-for-2025) |
| Equipamentos | Filtro, aquecedor/termostato, iluminação, testes, condicionador de água | Tudo isso, mais sal marinho, refratômetro/densímetro, skimmer, bombas de circulação, rocha e, no recifal, iluminação forte | Ver 1.6 |

**Consenso:** começar no doce e migrar para o marinho depois de 1 a 2 anos de experiência é a recomendação mais comum ([Tankarium](https://www.tankarium.com/saltwater-vs-freshwater-aquariums/)).
**Ponto controverso:** o tamanho da diferença de dificuldade. Lojas especializadas em marinho defendem que a distância é pequena ([Quality Marine](https://qualitymarine.com/news/how-hard-is-it-really)). Os valores em dólar são estrangeiros e servem só para comparar proporções. **Não encontrei fonte confiável com preços em reais**, então não os invente.

### 1.2 Estilos de água doce

- **Comunitário:** várias espécies pacíficas e compatíveis convivendo. pH de 6,5 a 7,5 atende a maioria ([Seachem, guia do aquário comunitário tropical](https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank)).
- **Plantado / aquapaisagismo (aquascaping):**
  - *Nature Aquarium*: popularizado pelo japonês Takashi Amano e inspirado em jardins japoneses. A data de origem varia entre as fontes (anos 1980 ou 1990) ([Aquasabi](https://aquasabi.com/aquascaping-wiki_aquascaping_nature-aquarium-and-aquascaping), [Wikipedia: Aquascape](https://en.wikipedia.org/wiki/Aquascape)).
  - *Iwagumi*: minimalista, com poucas pedras (em geral número ímpar) e um tapete baixo de plantas ([Nature Aquariums](https://natureaquariums.com/blogs/news/aquascaping-styles-nature-aquarium-iwagumi-dutch-aquarium)).
  - *Holandês*: o mais antigo (Holanda, anos 1930). Plantio denso, exige podas frequentes ([Nature Aquariums](https://natureaquariums.com/blogs/news/aquascaping-styles-nature-aquarium-iwagumi-dutch-aquarium)).
- **Biótopo:** reproduz um habitat específico de um lugar geográfico, apenas com espécies que convivem ali na natureza. Não é o mesmo que Nature Aquarium ([Wikipedia: Aquascape](https://en.wikipedia.org/wiki/Aquascape), [Aquasabi](https://aquasabi.com/aquascaping-wiki_aquascaping_nature-aquarium-and-aquascaping)). Ideia para o redator: um biótopo amazônico (rio Negro) liga o tema ao Brasil.

**Espécies citadas como boas para iniciantes:** tetras, guppies (lebistes), bettas e danios. Oscars e barbos grandes não servem para o comunitário iniciante ([resumo de fontes de varejo e cuidado; ver Seachem](https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank), [RSPCA Austrália](https://kb.rspca.org.au/knowledge-base/how-should-i-care-for-my-tropical-fish/)). Para camarões: *Neocaridina* tolera GH de 4 a 14, enquanto *Caridina* (cristal) precisa de água mole, GH de 3 a 6 ([2Hr Aquarist](https://www.2hraquarist.com/blogs/ph-kh-gh-tds/gh-explained)).
**Atenção ao betta:** é popular, mas os machos brigam entre si ([Commons: arquivo "Betta splendens fighting"](https://commons.wikimedia.org/w/index.php?search=Betta+splendens+male&ns6=1&fulltext=1&profile=images) só ilustra o comportamento). Recomende um macho por aquário e não o "aquário-copo". **Não achei fonte primária que dê litragem mínima consensual**, então o redator não deve cravar um número.
**Nuance brasileira (controversa):** o tetra-cardinal (*Paracheirodon axelrodi*) do rio Negro ainda é capturado na natureza. O Projeto Piaba (Barcelos, AM) defende essa pesca como sustentável e como renda que desestimula o desmatamento. Um estudo do IFAM aponta mortalidade alta no transporte ([Wikipedia: Project Piaba](https://en.wikipedia.org/wiki/Project_Piaba), [Chao, 2001, PDF](https://projectpiaba.org/wp-content/uploads/2024/08/Chao-Universidade-do-Amazonas-2001-The-Fishery-Diversity-Conservation-of-Ornamental-Fishes-of-the-Rio-Negro.pdf), [Revista Nexus/IFAM](https://nexus.ifam.edu.br/index.php/revista-nexus/article/download/362/282/2392)). Sugestão: apresentar como "captura manejada pode ser sustentável; cativeiro é o padrão mais seguro". Não demonizar a captura em si.

### 1.3 Marinho: FOWLR × recifal, corais e espécies

- **FOWLR** (*Fish Only With Live Rock*, só peixes com rocha viva) aceita uma faixa de densidade mais larga (1,020 a 1,025). O **recifal** pede 1,023 a 1,025, e o recife natural fica em cerca de 1,025 ([Hanna Instruments, PDF](https://pages.hannainst.com/hubfs/006-finished-content/Aquarium/Saltwater-Aquarium-Water-Parameters-Guidelines-1.pdf), [LiveAquaria](https://www.liveaquaria.com/article/89/)). O FOWLR costuma ser a porta de entrada mais simples, já que dispensa luz forte e o controle fino de cálcio, alcalinidade e magnésio que os corais duros consomem ([Top Shelf Aquatics](https://topshelfaquatics.com/blogs/news/beginner-s-guide-to-coral-types-soft-corals-lps-sps)).
- **Corais, em linhas gerais** (a ordem de dificuldade é consenso; os números de luz variam entre lojas):
  - **Moles** (soft): os mais fáceis, toleram oscilações, pedem luz moderada e fluxo suave. Indicados para aquários com menos de 6 meses.
  - **LPS** (pólipos grandes, esqueleto calcário): dificuldade intermediária, luz e fluxo moderados. Melhores em aquário já estabilizado.
  - **SPS** (pólipos pequenos): os mais exigentes. Luz forte, fluxo intenso e variado, química estável.
  - Fontes: [Top Shelf Aquatics](https://topshelfaquatics.com/blogs/news/beginner-s-guide-to-coral-types-soft-corals-lps-sps), [Build Your Aquarium: LPS](https://www.buildyouraquarium.com/lps-corals/), [Build Your Aquarium: SPS](https://www.buildyouraquarium.com/sps-corals/). Os valores de PAR divergem (ex.: 30–150 / 100–200 / 200–500+), por isso **não convém publicar números de PAR**.
- **Peixes de cativeiro para iniciantes:** os palhaços *Amphiprion ocellaris* e *A. percula* criados em cativeiro são o "primeiro peixe marinho" clássico: resistentes e já acostumados a ração. Também aparecem com frequência gobies, grama-real (*Gramma loreto*) e firefish (*Nemateleotris*) ([LiveAquaria](https://www.liveaquaria.com/blogs/stocking-your-aquarium/popular-saltwater-fish-for-beginners), [TFH Magazine](https://www.tfhmagazine.com/articles/saltwater/beyond-damsels-best-saltwater-fish-for-beginners), [Bulk Reef Supply](https://www.bulkreefsupply.com/content/post/best-saltwater-aquarium-fish-for-beginners)). Peixes de cativeiro tendem a ser mais resistentes a doenças que os selvagens ([TFH Magazine](https://www.tfhmagazine.com/articles/saltwater/beyond-damsels-best-saltwater-fish-for-beginners)). A UF/IFAS registra cerca de 398 espécies marinhas ornamentais já reproduzidas em cativeiro, das quais cerca de 46 são comuns no comércio, segundo lista de 2019 ([UF/IFAS FA224](https://ask.ifas.ufl.edu/publication/FA224); não consegui abrir a página, o dado vem do resumo da busca e deve ser tratado com cautela).
- **Anêmona não é obrigatória para o palhaço.** Ele pode "adotar" coral mole, como mostra o Commons (palhaço hospedado em *Sarcophyton*). Não achei fonte primária forte para isso, então o redator pode citar como observação, sem regra.

### 1.4 Passo a passo de montagem (síntese)

1. Escolher o tipo (doce ou marinho) e o tamanho. Aquários maiores são mais estáveis (consenso de hobby). Escolher um local firme, longe do sol direto.
2. Montar substrato, decoração/rocha e equipamentos (filtro, aquecedor, iluminação). No marinho, preparar a água salgada e medir a densidade.
3. Tratar a água de torneira com condicionador (remove cloro/cloramina) ([API, lição 1, PDF](https://www.apifishcare.com/pdfs/API%20LESSON%201%20COMMUNITY%20AQUARIUM%20SETUP_1627498120.pdf)).
4. **Ciclar sem peixes** (ver 1.5).
5. Introduzir poucos peixes de cada vez, aclimatando e, de preferência, depois de uma quarentena (ver 1.8).
6. Manter a rotina: alimentar pouco, testar e fazer trocas parciais.

### 1.5 Ciclo do nitrogênio (ciclagem)

- Restos de comida e excrementos viram **amônia**, que é tóxica. Bactérias nitrificantes a transformam em **nitrito**, também tóxico, e depois em **nitrato**, bem menos tóxico, que sai com as trocas de água e é absorvido pelas plantas ([Zelpio, PT](https://zelpio.com/pt/blog/biological-filtration-saltwater-aquarium/), [Petz](https://www.petz.com.br/blog/especies/peixes/ciclagem-de-aquario)).
- Ciclar é colonizar o filtro com essas bactérias **antes** de pôr peixes, por exemplo adicionando uma pequena fonte de amônia e medindo amônia, nitrito e nitrato. O aquário está pronto quando amônia e nitrito ficam em 0 de forma constante ([Petz](https://www.petz.com.br/blog/especies/peixes/ciclagem-de-aquario), [Seachem](https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank)).
- **Prazo (varia):** de 3 a 8 semanas ou de 4 a 6 semanas, conforme a fonte em inglês. A Petz fala em 30 a 60 dias. Produtos com bactérias podem acelerar ([Petz](https://www.petz.com.br/blog/especies/peixes/ciclagem-de-aquario), [Charterhouse](https://charterhouse-aquatics.com/blogs/help-guides/25-common-beginner-aquarium-mistakes-and-how-to-avoid-them)).
- **Correção necessária:** um trecho da Petz diz que o nitrato também deve "zerar". O consenso das demais fontes é que **o nitrato sobe** no fim da ciclagem e é controlado com trocas. Não reproduza o "nitrato zerado" como critério.
- O nome popular para o problema de pôr peixes cedo demais é "síndrome do aquário novo" (*new tank syndrome*) ([Charterhouse](https://charterhouse-aquatics.com/blogs/help-guides/25-common-beginner-aquarium-mistakes-and-how-to-avoid-them)).

### 1.6 Equipamentos essenciais

- **Ambos:** aquário e móvel firme, filtro (mecânico + biológico), aquecedor com termostato, termômetro, iluminação com timer, kit de testes (amônia, nitrito, nitrato, pH), condicionador de água, sifão e baldes exclusivos ([API, PDF](https://www.apifishcare.com/pdfs/API%20LESSON%201%20COMMUNITY%20AQUARIUM%20SETUP_1627498120.pdf), [AskAVet](https://askavet.com/blogs/news/freshwater-vs-saltwater-aquariums-vet-guide-for-2025)).
- **Plantado (opcional):** substrato fértil, luz adequada às plantas, CO2 em sistemas avançados. Com CO2, o KH cai mais rápido e o pH oscila ao longo do dia ([2Hr Aquarist](https://www.2hraquarist.com/blogs/ph-kh-gh-tds/kh-levels-planted-aquarium)).
- **Marinho:** sal marinho sintético, refratômetro ou densímetro, skimmer (escumador de proteínas), bombas de circulação, rocha viva/seca. No recifal, iluminação adequada aos corais e testes de cálcio, alcalinidade e magnésio ([Hanna, PDF](https://pages.hannainst.com/hubfs/006-finished-content/Aquarium/Saltwater-Aquarium-Water-Parameters-Guidelines-1.pdf), [Top Shelf Aquatics](https://topshelfaquatics.com/blogs/news/beginner-s-guide-to-coral-types-soft-corals-lps-sps)).

### 1.7 Faixas de referência de parâmetros

> Para o redator e o designer: apresentar como **"faixas de referência"**, com nota de que a espécie manda e que **estabilidade importa mais que um número exato** ([RSPCA](https://kb.rspca.org.au/knowledge-base/how-should-i-care-for-my-tropical-fish/), [2Hr Aquarist](https://www.2hraquarist.com/blogs/ph-kh-gh-tds/kh-levels-planted-aquarium)).

**Água doce tropical (comunitário / plantado)**

| Parâmetro | Faixa de referência | Fonte |
|---|---|---|
| Temperatura | 24–26 °C (RSPCA); 22–27 °C (Seachem) | [RSPCA](https://kb.rspca.org.au/knowledge-base/how-should-i-care-for-my-tropical-fish/), [Seachem](https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank) |
| pH | 6,5–7,5 (comunitário); ciclídeos africanos 7,5–8,5 | [Seachem](https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank) |
| Amônia (NH3/NH4) | 0 ppm | idem |
| Nitrito (NO2) | 0 ppm | idem |
| Nitrato (NO3) | < 20 ppm (Seachem) até < 50 ppm (RSPCA). **Divergente** | [Seachem](https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank), [RSPCA](https://kb.rspca.org.au/knowledge-base/how-should-i-care-for-my-tropical-fish/) |
| GH | cerca de 4–8 dGH (plantado); 6–10 dGH (comunitário). Depende da espécie | [2Hr Aquarist, GH](https://www.2hraquarist.com/blogs/ph-kh-gh-tds/gh-explained) |
| KH | cerca de 2–7 dKH (plantado). Abaixo de 1 dKH há risco de queda brusca de pH | [2Hr Aquarist, KH](https://www.2hraquarist.com/blogs/ph-kh-gh-tds/kh-levels-planted-aquarium) |

**Marinho (FOWLR / recifal)**

| Parâmetro | Faixa de referência | Fonte |
|---|---|---|
| Temperatura | 24–27 °C (76–80 °F) | [LiveAquaria](https://www.liveaquaria.com/article/89/) |
| Densidade (SG) / salinidade | Recifal 1,023–1,025; FOWLR 1,020–1,025. Cerca de 35 ppt equivale a cerca de 1,025–1,026 | [Hanna, PDF](https://pages.hannainst.com/hubfs/006-finished-content/Aquarium/Saltwater-Aquarium-Water-Parameters-Guidelines-1.pdf), [LiveAquaria](https://www.liveaquaria.com/article/89/) |
| pH | cerca de 8,1–8,4 (valor usual de hobby; **confirmar**: não foi checado em fonte nesta rodada) | (a confirmar) |
| Amônia / nitrito | 0 | consenso |
| Nitrato | Baixo. Os alvos variam muito entre FOWLR e recifal (**não encontrei consenso numérico**) | (a confirmar) |
| Cálcio | cerca de 380–450 ppm (mar natural cerca de 420) | [LiveAquaria](https://www.liveaquaria.com/article/89/), [Colorado Exotic Animal Hospital](https://coloradoexoticanimalhospital.com/node/273) |
| Alcalinidade | 7–11 dKH (alvo prático comum de 7–9; mar natural cerca de 7) | [LiveAquaria](https://www.liveaquaria.com/article/89/), [Colorado Exotic Animal Hospital](https://coloradoexoticanimalhospital.com/node/273) |
| Magnésio | 1.200–1.400 ppm (mar natural cerca de 1.285). Ajuda a manter cálcio e alcalinidade em solução | idem |

### 1.8 Erros comuns de iniciante (consenso de várias fontes)

1. **Não ciclar** e pôr peixes no aquário novo ([Charterhouse](https://charterhouse-aquatics.com/blogs/help-guides/25-common-beginner-aquarium-mistakes-and-how-to-avoid-them)).
2. **Superpovoar** ou pôr muitos peixes de uma vez, o que sobrecarrega o filtro biológico ([PetMD](https://www.petmd.com/fish/slideshows/top-10-mistakes-fish-owners-make)).
3. **Alimentar demais**: a sobra apodrece, eleva amônia e nitrato e provoca água turva e algas ([PetMD](https://www.petmd.com/fish/slideshows/top-10-mistakes-fish-owners-make), [Aqueon](https://www.aqueon.com/articles/15-common-fish-tank-problems-and-how-to-avoid-them)).
4. **Pular a quarentena**: o hobby recomenda 21 a 28 dias para recém-chegados. A quarentena da loja não substitui a de casa ([Bulk Reef Supply](https://bulkreefsupply.com/content/post/top-10-beginner-mistakes-beginners-guide-ep-38a-38b-38c)).
5. **Não aclimatar**, pular trocas parciais, comprar por impulso sem pesquisar o tamanho adulto e a compatibilidade das espécies ([Charterhouse](https://charterhouse-aquatics.com/blogs/help-guides/25-common-beginner-aquarium-mistakes-and-how-to-avoid-them)).
6. **Mexer no pH sem necessidade**: só ajuste se a espécie realmente exigir ([Seachem](https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank)).
7. **No marinho**, pressa e pular etapas aparecem como erro clássico ([Reef Builders](https://reefbuilders.com/2017/09/15/mistakes-newbies-make)).

### 1.9 Bem-estar animal, legislação e ética no Brasil

- **Introduzir espécie animal no País** sem parecer técnico oficial favorável e licença: detenção de 3 meses a 1 ano e multa (Lei 9.605/1998, **art. 31**) ([Planalto](https://www.planalto.gov.br/ccivil_03/leis/l9605.htm)).
- **Disseminar espécies que possam causar dano** à fauna, à flora ou aos ecossistemas: reclusão de 1 a 4 anos e multa (**art. 61**) ([Planalto](https://www.planalto.gov.br/ccivil_03/leis/l9605.htm)).
- **Fauna silvestre nativa:** apanhar, vender, guardar ou manter em cativeiro sem autorização ou vinda de criadouro não autorizado é crime (**art. 29, caput e §1º, III**) ([Planalto](https://www.planalto.gov.br/ccivil_03/leis/l9605.htm)). Lição para o site: peixes nativos só de origem legal.
- **Ponto jurídico controverso:** se soltar no rio um peixe exótico **já presente** no Brasil se enquadra no art. 31 é discutido. Há quem sustente que o art. 31 trata só da entrada no País ([Comunidade Ambiental](https://comunidadeambiental.com.br/artigo/especie-exotica-pais-nao-crime-introducao/)). O art. 61 e leis estaduais podem se aplicar. Goiás, por exemplo, publicou em 2026 lei que proíbe soltar espécies exóticas ou alóctones em ambientes aquáticos ([LegisWeb](https://www.legisweb.com.br/legislacao/?id=496298)). **Redação segura para o site:** "Nunca solte peixes, plantas ou água de aquário na natureza. Além de causar danos ambientais, pode configurar crime ambiental." Não cite um artigo específico como certeiro para a soltura.
- **Aquários como via de invasão:** o órgão ambiental de Santa Catarina aponta o despejo de aquários entre as principais causas de invasão por animais exóticos ([IMA-SC](https://www.ima.sc.gov.br/index.php/downloads/especies-exoticas-invasoras/2439-exoticos-invasores/file)). Há registro de cerca de 90 espécies de peixes exóticos invasores em águas continentais brasileiras ([Revista UFG](https://revistas.ufg.br/vet/article/view/74647)).
- **Peixe-leão (*Pterois volitans*):** espécie do Indo-Pacífico, invasora no Atlântico. Segundo o ICMBio, a primeira ocorrência no Atlântico (Flórida, 1985) provavelmente se deveu à soltura por aquaristas. No Brasil há manejo em Fernando de Noronha e no litoral nordestino ([ICMBio, guia estratégico, PDF](https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/manejo-de-especies-exoticas-invasoras/arquivos/guia_estrategico_para_pesquisa_manejo_e_atividade_de_interpretacao_ambiental_sobre_o_peixe-leao.pdf)). **Não encontrei fonte que atribua a chegada ao Brasil a aquaristas**, então o site deve dizer apenas que a invasão no Atlântico tem provável origem em solturas de aquário.
- **Espécies ameaçadas:** a Portaria MMA nº 445/2014 lista peixes e invertebrados aquáticos ameaçados ([gov.br, PDF](https://www.gov.br/agricultura/pt-br/assuntos/mpa/pesca/ornamentais/arquivos/portaria_mma_n__445_2014.pdf)). Orientação: comprar só de lojas legalizadas e desconfiar de espécies nativas raras.
- **Normas de ornamentais (IBAMA/MPA):** o marco é fragmentado e passou por revisões. Exemplos: IN IBAMA 202/2008 (importação de marinhos), INI MPA/MMA 01/2012 (ornamentais continentais), consultas públicas de 2021–2022 e o manual de legislação do MPA de 2025 ([IN 202/2008, LegisWeb](https://www.legisweb.com.br/legislacao/?id=77503), [INI 01/2012, IBAMA](https://www.gov.br/ibama/pt-br/assuntos/biodiversidade/biodiversidade-aquatica/arquivos/ini-mpa-mma-n01-2012-peixes-ornamentais-continentais.pdf), [Manual de Legislação MPA 2025, PDF](https://www.gov.br/mpa/pt-br/assuntos/pesca/principais-recursos-pesqueiros/ornamentais-1/Manual_Legislacao_Completo_Final_2025_v1.pdf)). **Não consegui ler o texto vigente nem listas consolidadas de espécies permitidas.** O site não deve afirmar "espécie X é permitida/proibida". Basta orientar o leitor a comprar de comerciantes regularizados.
- **Cativeiro × captura (síntese):** prefira animais e corais **de cativeiro ou aquicultura**, que são mais resistentes e reduzem a pressão sobre recifes ([TFH Magazine](https://www.tfhmagazine.com/articles/saltwater/beyond-damsels-best-saltwater-fish-for-beginners), [Reef Friendly Aquariums, UCSB](https://reeffriendlyaquariums.msi.ucsb.edu/node/5)). Exceção a mencionar com nuance: captura manejada na Amazônia (Projeto Piaba, ver 1.2).
- **Bem-estar (conteúdo de apoio):** aquário de tamanho adequado ao adulto, espécies compatíveis, cardume para peixes gregários, temperatura estável e rotina de manutenção ([RSPCA](https://kb.rspca.org.au/knowledge-base/how-should-i-care-for-my-tropical-fish/)).

### 1.10 Consenso × controverso (quadro para o redator)

| Consenso (pode afirmar) | Controverso ou incerto (afirmar com cautela) |
|---|---|
| Ciclar antes dos peixes; amônia e nitrito em 0 | Prazo exato da ciclagem (3 a 8 semanas) |
| Doce é mais barato e mais tolerante | Tamanho real da diferença de dificuldade |
| Corais moles < LPS < SPS em dificuldade | Valores de PAR por grupo |
| Palhaço de cativeiro é bom primeiro peixe marinho | Necessidade de anêmona |
| Não soltar animais na natureza | Qual artigo penal se aplica a cada soltura |
| Estabilidade dos parâmetros importa | Limite de nitrato no doce (20 ou 50 ppm) |
| Preferir cativeiro | Captura amazônica manejada (Projeto Piaba) |

---

## 2. Referências visuais e padrões

### 2.1 Referências visuais (apenas padrões, não copiar)

- **Bancos de imagens aquáticas** como referência de composição: [Unsplash: aquascape](https://unsplash.com/s/photos/aquascape), [Pexels: reef aquarium](https://www.pexels.com/search/reef%20aquarium/). Fundo escuro com objeto iluminado, verdes saturados no plantado e azuis/violetas de LED actínico no recifal.
- **Sites institucionais de natureza e ciência marinha** (padrão a seguir: hero com foto ou vídeo de largura total, texto curto sobre sobreposição escura, seções em cartões, divisores ondulados). **Não analisei nenhum site concorrente específico nesta rodada.** Se o designer quiser um benchmark, peça uma busca extra.

### 2.2 Padrões recomendados

**Layout e seções**
- Hero de largura total com sobreposição em gradiente escuro (para garantir contraste do texto) e **dois CTAs lado a lado: "Água doce" e "Marinho"**, já previstos no briefing.
- Comparativo como **tabela responsiva**, que vira cartões empilhados no celular, com `<table>`, `<caption>` e `<th scope>` semânticos.
- Passo a passo como **lista ordenada** (`<ol>`) com marcadores numerados e uma ilustração do ciclo do nitrogênio em SVG (amônia → nitrito → nitrato), com texto alternativo.
- Parâmetros em duas tabelas (doce e marinho) com a nota "faixas de referência".
- FAQ com `<details>/<summary>`: acessível por padrão e sem JS.
- Divisores em onda (SVG) entre seções. Identidade "doce = verde" e "marinho = azul + coral".

**Cor (paleta aquática, a validar no contraste)**
- Base escura: azul-oceano profundo (ex.: #0B2A3F) para hero e rodapé. Texto claro sobre ele passa folgado no AA.
- Turquesa/ciano como acento. **Cuidado:** turquesa claro com texto branco costuma reprovar. Use-o em fundos com texto escuro, ou escureça o tom para botões.
- Verde-plantado (ex.: #1F6B4A) para a seção de água doce. Coral/laranja (ex.: #E8603C) como acento de CTA. Verifique o branco sobre coral: muitos laranjas não passam de 4,5:1. Se preciso, use texto escuro ou escureça o coral.
- WCAG AA: 4,5:1 para texto normal, 3:1 para texto grande e componentes de interface ([W3C, Understanding Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)). Ferramenta: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). Os hex acima são sugestões que o designer ainda não validou.

**Tipografia**
- Até 2 famílias do Google Fonts (restrição do briefing). Uma sans geométrica ou humanista para títulos e uma sans muito legível para o corpo, em 16 px ou mais no celular. (Escolha estética do designer; não há fonte externa que a imponha.)

**Animação**
- Bolhas subindo, cáusticas de luz (gradiente animado lento) e ondas nos divisores, sempre sutis e em loop lento.
- `prefers-reduced-motion: reduce` deve desligar ou trocar o movimento por fade. O recurso existe para quem tem distúrbios vestibulares ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
- Animação automática que dura mais de 5 s precisa poder ser pausada (WCAG 2.2.2 Pause, Stop, Hide) ([W3C, Understanding 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)). Para bolhas decorativas em loop, a solução mais simples é respeitar o reduced-motion **e** oferecer um botão de pausar, ou limitar a animação a poucos segundos.
- Evite vídeo de fundo pesado, que vai contra a restrição "leve" do briefing.

**Acessibilidade**
- Alvos de toque de **24×24 px ou mais** (WCAG 2.2, 2.5.8, nível AA). O ideal é 44×44 ([W3C, What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)).
- Foco visível (2.4.7) e foco não encoberto pelo cabeçalho fixo (2.4.11, novo na 2.2). Use `scroll-padding-top` nas âncoras ([W3C, What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)).
- Link "pular para o conteúdo", `lang="pt-BR"`, hierarquia correta de títulos e `alt` descritivo. Fotos decorativas levam `alt=""`.

**SEO**
- `<title>` e meta description únicos e descritivos ([Google Search Central, guia de primeiros passos](https://developers.google.com/search/docs/guides/get-started)). `alt` descritivo nas imagens ([Google, guia SEO em busca com IA 2026, PDF](https://services.google.com/fh/files/misc/2026_seo_in_ai_search_guide_for_marketers.pdf)).
- **FAQPage:** desde agosto de 2023, o Google só exibe o rich result de FAQ para sites governamentais e de saúde reconhecidos. O FAQ continua útil para o leitor, mas não se deve prometer destaque na busca. A marcação é opcional ([Google Search Central Blog](https://developers.google.com/search/blog/2023/08/howto-faq-changes)).
- Imagens com `width`/`height`, `loading="lazy"` abaixo da dobra e formatos WebP/AVIF (boa prática de desempenho; não verifiquei fonte nesta rodada).

---

## 3. Sugestões de fotos reais

> **Regra do projeto (CLAUDE.md):** Unsplash, Pexels, Pixabay e Wikimedia Commons **CC0/CC BY**. Arquivos do Commons em **CC BY-SA ficam fora** (marcados abaixo). Unsplash, Pexels e Pixabay usam licenças próprias que dispensam atribuição, mas o projeto credita mesmo assim. O `gerador-imagens` deve conferir licença e resolução de cada arquivo antes de baixar.

| Uso | Sugestão | Licença verificada | Observação |
|---|---|---|---|
| Hero (aquário plantado) | [Unsplash: "A fish tank filled with water and plants", Christian Ang (@shots)](https://unsplash.com/photos/a-fish-tank-filled-with-water-and-plants-9tbRnu_DxPY) | Unsplash License | Resolução não confirmada |
| Aquário plantado / Nature Aquarium | [Commons: Nature Aquarium Aquascape.jpg, Dileepkumardr](https://commons.wikimedia.org/wiki/File:Nature_Aquarium_Aquascape.jpg) | **CC0**, 5.376×3.072 | Ótima candidata. Enviada em 08/2026 por usuário pouco conhecido: o gerador deve confirmar que é foto real e não imagem gerada por IA |
| Plantado (alternativas) | [Unsplash: planted aquarium](https://unsplash.com/s/photos/planted-aquarium), [Unsplash: aquascape](https://unsplash.com/s/photos/aquascape) | Unsplash License | Página de busca |
| Neon (água doce) | [Commons: Neonsalmler Paracheirodon innesi.jpg, Holger Krisp](https://commons.wikimedia.org/wiki/File:Neonsalmler_Paracheirodon_innesi.jpg) | **CC BY 3.0**, 3.000×1.987 | Aceita (crédito obrigatório) |
| Neon (cardume) | [Commons: Paracheirodon innesi group.jpg](https://commons.wikimedia.org/wiki/File:Paracheirodon_innesi_group.jpg) | CC BY-SA 2.0 | **Fora da regra** |
| Betta | [Commons: Betta-splendens-male.jpg, Denise Chan](https://commons.wikimedia.org/wiki/File:Betta-splendens-male.jpg) | CC BY-SA 2.0 | **Fora da regra**. Buscar em [Pexels: betta](https://www.pexels.com/search/betta%20fish/) ou [Unsplash: aquarium fish](https://unsplash.com/s/photos/aquarium-fish) |
| Peixes de água doce em geral | [Unsplash: aquarium fish](https://unsplash.com/s/photos/aquarium-fish), [Pixabay: aquarium](https://pixabay.com/images/search/aquarium/) | Licenças próprias | Guppy, corydoras, platy: buscar por nome |
| Recife de corais / recifal | [Pexels: reef aquarium](https://www.pexels.com/search/reef%20aquarium/), [Pexels: reef tank](https://www.pexels.com/search/reef%20tank/), [Pexels: aquarium coral](https://www.pexels.com/search/aquarium%20coral/) | Pexels License | A busca mostra corais sob luz azul em aquário e palhaço com cirurgião-patela em recifal |
| Peixe-palhaço | [Commons: Amphiprion ocellaris (Clown anemonefish) by Nick Hobgood.jpg](https://commons.wikimedia.org/wiki/File:Amphiprion_ocellaris_(Clown_anemonefish)_by_Nick_Hobgood.jpg) | CC BY-SA 3.0 (foto destacada) | **Fora da regra** e tirada na natureza. Alternativas: Pexels/Unsplash "clownfish". A busca no Commons por [Amphiprion ocellaris aquarium](https://commons.wikimedia.org/w/index.php?search=Amphiprion+ocellaris+aquarium&ns6=1&fulltext=1&profile=images) traz arquivos de 6.000×4.000 do Aquarium Finisterrae, mas os que conferi são CC BY-SA 4.0 |
| Cirurgião-patela (Paracanthurus) | [Commons: Paracanthurus-hepatus-paletten-doktorfisch.jpg, Holger Krisp](https://commons.wikimedia.org/wiki/File:Paracanthurus-hepatus-paletten-doktorfisch.jpg) | **CC BY 3.0**, 3.000×1.863 (foto destacada) | Aceita. Foi tirada no Zoológico de Ulm. **Atenção ética:** o cirurgião-patela é em geral capturado na natureza e cresce muito, então **não deve aparecer como peixe de iniciante**. Use só como imagem de "recife/galeria" |
| Equipamentos | [Pixabay: aquarium tank](https://pixabay.com/images/search/aquarium%20tank/), [Pixabay: filtration tank](https://pixabay.com/images/search/filtration%20tank/) | Pixabay License | **Não encontrei fotos boas** de filtro ou aquecedor de aquário. Sugestão: ícones em SVG feitos pelo time |

---

## Riscos e o que evitar

- **Números como regra absoluta.** Sempre "faixa de referência", com a ressalva da espécie.
- **"Nitrato deve zerar" na ciclagem.** Está errado (ver 1.5).
- **Preços em reais** e litragens mínimas sem fonte. Não inventar.
- **Promover espécies selvagens, difíceis ou que crescem muito** como de iniciante (cirurgião-patela, oscar, peixe-leão).
- **Afirmar o que é permitido ou proibido pelo IBAMA** sem a norma vigente. Orientar a comprar de lojas regularizadas.
- **Animações sem `prefers-reduced-motion`** ou em loop infinito sem pausa. Branco sobre turquesa ou coral sem testar o contraste.
- **Usar fotos CC BY-SA ou sem licença conferida.** Usar foto de peixe na natureza com legenda de aquário.
- **Prometer rich result de FAQ no Google.**

---

## O que precisa ser confirmado com o usuário

1. **Natureza do site:** guia independente, loja, clube ou serviço de montagem/manutenção? Isso muda o tom sobre preços, CTAs e se pode haver indicação de produtos ou marcas.
2. **Região/cidade de atuação:** permite citar regras estaduais (ex.: lei de Goiás de 2026) ou fornecedores locais.
3. **Profundidade da legislação:** basta o aviso geral ("não solte, compre de lojas regularizadas") ou ele quer citar artigos da Lei 9.605/98?
4. **Posição sobre peixes de captura amazônica** (Projeto Piaba): apresentar como opção sustentável ou focar só em cativeiro?
5. **Se há fotos próprias** (aquários do usuário). Seriam melhores que bancos para hero e galeria.
6. **Se pode exibir faixas de preço** e em que moeda/fonte. Não há fonte em reais nesta pesquisa.
7. **Se o site deve incluir camarões, plantas e invertebrados** ou só peixes e corais.
8. **Valores a validar por um aquarista de confiança:** pH e nitrato do marinho, que não foram checados em fonte nesta rodada.

---

## Fontes consultadas

**Legislação e órgãos públicos**
- https://www.planalto.gov.br/ccivil_03/leis/l9605.htm
- https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/manejo-de-especies-exoticas-invasoras/arquivos/guia_estrategico_para_pesquisa_manejo_e_atividade_de_interpretacao_ambiental_sobre_o_peixe-leao.pdf
- https://www.gov.br/agricultura/pt-br/assuntos/mpa/pesca/ornamentais/arquivos/portaria_mma_n__445_2014.pdf
- https://www.gov.br/ibama/pt-br/assuntos/biodiversidade/biodiversidade-aquatica/arquivos/ini-mpa-mma-n01-2012-peixes-ornamentais-continentais.pdf (não foi possível ler o texto)
- https://www.gov.br/mpa/pt-br/assuntos/pesca/principais-recursos-pesqueiros/ornamentais-1/Manual_Legislacao_Completo_Final_2025_v1.pdf (não lido na íntegra)
- https://www.legisweb.com.br/legislacao/?id=77503
- https://www.legisweb.com.br/legislacao/?id=496298
- https://www.ima.sc.gov.br/index.php/downloads/especies-exoticas-invasoras/2439-exoticos-invasores/file
- https://revistas.ufg.br/vet/article/view/74647
- https://comunidadeambiental.com.br/artigo/especie-exotica-pais-nao-crime-introducao/

**Aquarismo (técnico)**
- https://www.petz.com.br/blog/especies/peixes/ciclagem-de-aquario
- https://zelpio.com/pt/blog/biological-filtration-saltwater-aquarium/
- https://seachem.zendesk.com/hc/en-us/articles/115000157074-Guide-The-Tropical-Community-Tank
- https://kb.rspca.org.au/knowledge-base/how-should-i-care-for-my-tropical-fish/
- https://www.apifishcare.com/pdfs/API%20LESSON%201%20COMMUNITY%20AQUARIUM%20SETUP_1627498120.pdf
- https://www.2hraquarist.com/blogs/ph-kh-gh-tds/kh-levels-planted-aquarium
- https://www.2hraquarist.com/blogs/ph-kh-gh-tds/gh-explained
- https://www.tankarium.com/saltwater-vs-freshwater-aquariums/
- https://qualitymarine.com/news/how-hard-is-it-really
- https://charterhouse-aquatics.com/blogs/features/freshwater-vs-saltwater-aquariums-which-should-you-choose
- https://charterhouse-aquatics.com/blogs/help-guides/25-common-beginner-aquarium-mistakes-and-how-to-avoid-them
- https://askavet.com/blogs/news/freshwater-vs-saltwater-aquariums-vet-guide-for-2025
- https://reeffriendlyaquariums.msi.ucsb.edu/node/5 (certificado do site com erro: conteúdo visto só pelo resumo da busca)
- https://pages.hannainst.com/hubfs/006-finished-content/Aquarium/Saltwater-Aquarium-Water-Parameters-Guidelines-1.pdf
- https://www.liveaquaria.com/article/89/
- https://coloradoexoticanimalhospital.com/node/273
- https://topshelfaquatics.com/blogs/news/beginner-s-guide-to-coral-types-soft-corals-lps-sps
- https://www.buildyouraquarium.com/lps-corals/
- https://www.buildyouraquarium.com/sps-corals/
- https://www.liveaquaria.com/blogs/stocking-your-aquarium/popular-saltwater-fish-for-beginners
- https://www.tfhmagazine.com/articles/saltwater/beyond-damsels-best-saltwater-fish-for-beginners
- https://www.bulkreefsupply.com/content/post/best-saltwater-aquarium-fish-for-beginners
- https://bulkreefsupply.com/content/post/top-10-beginner-mistakes-beginners-guide-ep-38a-38b-38c
- https://ask.ifas.ufl.edu/publication/FA224 (não abriu: redirecionamento)
- https://www.petmd.com/fish/slideshows/top-10-mistakes-fish-owners-make
- https://www.aqueon.com/articles/15-common-fish-tank-problems-and-how-to-avoid-them
- https://reefbuilders.com/2017/09/15/mistakes-newbies-make
- https://en.wikipedia.org/wiki/Aquascape
- https://aquasabi.com/aquascaping-wiki_aquascaping_nature-aquarium-and-aquascaping
- https://natureaquariums.com/blogs/news/aquascaping-styles-nature-aquarium-iwagumi-dutch-aquarium
- https://en.wikipedia.org/wiki/Project_Piaba
- https://projectpiaba.org/wp-content/uploads/2024/08/Chao-Universidade-do-Amazonas-2001-The-Fishery-Diversity-Conservation-of-Ornamental-Fishes-of-the-Rio-Negro.pdf
- https://nexus.ifam.edu.br/index.php/revista-nexus/article/download/362/282/2392

**Design, acessibilidade e SEO**
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- https://webaim.org/resources/contrastchecker/
- https://developers.google.com/search/docs/guides/get-started
- https://developers.google.com/search/blog/2023/08/howto-faq-changes
- https://services.google.com/fh/files/misc/2026_seo_in_ai_search_guide_for_marketers.pdf

**Fotos**
- https://unsplash.com/photos/a-fish-tank-filled-with-water-and-plants-9tbRnu_DxPY
- https://unsplash.com/s/photos/planted-aquarium
- https://unsplash.com/s/photos/aquascape
- https://unsplash.com/s/photos/aquarium-fish
- https://www.pexels.com/search/reef%20aquarium/
- https://www.pexels.com/search/reef%20tank/
- https://www.pexels.com/search/aquarium%20coral/
- https://pixabay.com/images/search/aquarium/
- https://pixabay.com/images/search/aquarium%20tank/
- https://commons.wikimedia.org/wiki/File:Nature_Aquarium_Aquascape.jpg
- https://commons.wikimedia.org/wiki/File:Neonsalmler_Paracheirodon_innesi.jpg
- https://commons.wikimedia.org/wiki/File:Paracheirodon_innesi_group.jpg
- https://commons.wikimedia.org/wiki/File:Betta-splendens-male.jpg
- https://commons.wikimedia.org/wiki/File:Amphiprion_ocellaris_(Clown_anemonefish)_by_Nick_Hobgood.jpg
- https://commons.wikimedia.org/wiki/File:Amphiprion_ocellaris.003_-_Aquarium_Finisterrae.jpg
- https://commons.wikimedia.org/wiki/File:Paracanthurus-hepatus-paletten-doktorfisch.jpg
- https://commons.wikimedia.org/wiki/Commons:Featured_pictures/Animals/Fish
