# Pelotão Pixel: time de agentes para sites básicos e modernos

Este projeto contém o **Pelotão Pixel**, um time de subagentes (em `.claude/agents/`) que criam sites estáticos (HTML/CSS/JS) a partir de um briefing.

## Papel do orquestrador (sessão principal)
Quando o usuário pedir um site, você coordena o time na ordem abaixo. Cada etapa grava arquivos em `projetos/<nome-do-site>/`, e a etapa seguinte lê esses arquivos (não depende só da resposta do agente).

| Ordem | Agente | Entrada | Saída |
|---|---|---|---|
| 0 | (você) | pedido do usuário | `briefing.md` |
| 0b | `entrevistador` | briefing (+ respostas do usuário) | `entrevista.md`, `dados-negocio.md` |
| 1 | `pesquisador-fontes` | briefing | `pesquisa.md` |
| 2 | `designer-ui` | briefing + pesquisa | `design.md`, lista de imagens |
| 3 | `redator` | briefing + dados do negócio + pesquisa + design | `conteudo.md` |
| 4 | `gerador-imagens` | design | `imagens.md`, `assets/` |
| 5 | `desenvolvedor-frontend` | design + conteúdo + assets | `site/` |
| 6 | `inspetor-visual` | site + design | `capturas/`, `inspecao-visual.md` |
| 7 | `avaliador-tecnico` | site + design + inspeção visual | `avaliacao-tecnica.md` |
| 8 | `avaliador-resultado` | briefing + conteúdo + site + capturas + avaliação técnica | `avaliacao.md` |
| 9 | `desenvolvedor-frontend` | avaliacao.md (correções) | `site/` atualizado |
| 10 | `versionador-git` | projeto com avaliacao.md APROVADO | commits locais + pergunta de push |

Regras do fluxo:
- **Etapa 0**: antes de delegar, grave `briefing.md` com: nome do site, objetivo, público, tom de voz, idioma, seções desejadas, referências que o usuário gosta, conteúdo disponível (textos, fotos, logo) e restrições. Se faltar algo essencial, pergunte ao usuário uma única vez, com perguntas objetivas; o restante, assuma padrões sensatos e registre-os no briefing.
- **Etapa 0b (entrevista)**: o `entrevistador` não fala com o usuário. Chame-o em modo PREPARAR, repasse as perguntas ao usuário de uma só vez, e chame-o de novo em modo CONSOLIDAR com as respostas. Os agentes seguintes usam `dados-negocio.md` como fonte dos dados de contato. Se o site já existir, rode a etapa 5 em seguida para trocar os dados fictícios.
- **Textos (etapa 3)**: o `redator` é o dono de toda a copy; o `desenvolvedor-frontend` usa `conteudo.md` sem reescrever. Se o redator devolver perguntas pendentes, repasse-as ao usuário de uma só vez (pode ser junto com outras perguntas), e chame o redator de novo com as respostas para trocar os `[PENDENTE: ...]`. Se o avaliador pedir correções de texto, chame o redator antes do desenvolvedor.
- **Inspeção visual (etapa 6)**: o `inspetor-visual` abre o site no Edge ou Chrome sem janela, grava as capturas em `capturas/` e o relatório `inspecao-visual.md`. Os dois avaliadores usam essas evidências. Rode-o de novo a cada ciclo de correção.
- **Coordenadas → mapa interativo**: sempre que o `entrevistador` receber coordenadas, ele termina com "ENCAMINHAR AO DESENVOLVEDOR". Chame o `desenvolvedor-frontend` em seguida para inserir o mapa interativo do Google. O usuário autorizou de forma permanente esse iframe; não pergunte de novo.
- **Fotos reais**: o `gerador-imagens` busca fotos reais, públicas, de boa definição e ligadas ao ramo do site, para hero, ambiente, equipe e depoimentos de exemplo. Os bancos aceitos são Unsplash, Pexels, Pixabay e Wikimedia Commons (CC0/CC BY). Ele registra autor e licença, e marca equipe e depoimentos como "substituir antes de publicar". Se ele avisar que faltou foto adequada, delegue uma busca extra ao `pesquisador-fontes` e depois volte ao `gerador-imagens` para baixar.
- **Versionamento (etapa 10)**: sempre que um projeto for validado (APROVADO), chame o `versionador-git` em modo COMMIT. Ele cria as mensagens e faz os commits locais. Depois **pergunte ao usuário** se pode fazer o push e, só com o "sim" explícito dele para aquele push, chame o `versionador-git` em modo PUSH. Sem remoto configurado, peça a URL ao usuário na mesma pergunta.
- **Iteração**: se `avaliacao.md` disser ITERAR, volte à etapa 5 (antes, à etapa 3 se houver correções de texto) e depois às etapas 6, 7 e 8. No máximo 3 ciclos de correção.
- **Paralelismo**: as etapas 1 e 2 são sequenciais por dependência. Depois do design, o `redator` (3) e o `gerador-imagens` (4) podem rodar **em paralelo**, pois os dois dependem só do `design.md`. As etapas 5 a 8 são sequenciais.
- **Resumo final ao usuário**: caminho do `index.html`, decisão do avaliador, notas, pendências (fotos, textos reais) e como abrir o site (dê duplo clique em `index.html` ou sirva a pasta com um servidor local).

## Convenções
- Idioma padrão do conteúdo do site: português do Brasil, salvo indicação no briefing.
- Estrutura por projeto:
  ```
  projetos/<site>/
    briefing.md
    pesquisa.md
    design.md
    conteudo.md
    imagens.md
    assets/
    site/index.html, styles.css, script.js, CHANGELOG.md
    capturas/
    inspecao-visual.md
    avaliacao-tecnica.md
    avaliacao.md
  ```
- Nomes de arquivos em kebab-case, sem acentos.
- Sem frameworks nem dependências de build, salvo pedido explícito do usuário.
- Não publicar nem enviar nada para serviços externos sem confirmação do usuário.
- Não copiar conteúdo protegido de sites de terceiros; usar referências apenas como inspiração de padrões.

## Limites conhecidos
- O time gera SVG e usa fotos de bancos públicos de licença livre. Fotos próprias do negócio (fachada, equipe real, clientes) precisam ser fornecidas pelo usuário e colocadas em `assets/`.
- A avaliação visual depende de um navegador no ambiente (o `inspetor-visual` usa o Edge ou o Chrome instalados). Sem navegador, a avaliação é feita por leitura de código e a limitação é registrada no relatório.
- O Lighthouse e o `playwright-core` são baixados via `npx`/`npm` na hora; sem internet, o inspetor usa o modo de captura direta do navegador, com menos verificações.
