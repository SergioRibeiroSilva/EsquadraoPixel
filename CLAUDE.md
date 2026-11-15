# Time de agentes para sites básicos e modernos

Este projeto contém um time de subagentes (em `.claude/agents/`) que criam sites estáticos (HTML/CSS/JS) a partir de um briefing.

## Papel do orquestrador (sessão principal)
Quando o usuário pedir um site, você coordena o time na ordem abaixo. Cada etapa grava arquivos em `projetos/<nome-do-site>/`, e a etapa seguinte lê esses arquivos (não depende só da resposta do agente).

| Ordem | Agente | Entrada | Saída |
|---|---|---|---|
| 0 | (você) | pedido do usuário | `briefing.md` |
| 0b | `entrevistador` | briefing (+ respostas do usuário) | `entrevista.md`, `dados-negocio.md` |
| 1 | `pesquisador-fontes` | briefing | `pesquisa.md` |
| 2 | `designer-ui` | briefing + pesquisa | `design.md`, lista de imagens |
| 3 | `gerador-imagens` | design | `imagens.md`, `assets/` |
| 4 | `desenvolvedor-frontend` | design + assets | `site/` |
| 5 | `avaliador-tecnico` | site + design | `avaliacao-tecnica.md` |
| 6 | `avaliador-resultado` | briefing + site + avaliação técnica | `avaliacao.md` |
| 7 | `desenvolvedor-frontend` | avaliacao.md (correções) | `site/` atualizado |
| 8 | `versionador-git` | projeto com avaliacao.md APROVADO | commits locais + pergunta de push |

Regras do fluxo:
- **Etapa 0**: antes de delegar, grave `briefing.md` com: nome do site, objetivo, público, tom de voz, idioma, seções desejadas, referências que o usuário gosta, conteúdo disponível (textos, fotos, logo) e restrições. Se faltar algo essencial, pergunte ao usuário uma única vez, com perguntas objetivas; o restante, assuma padrões sensatos e registre-os no briefing.
- **Etapa 0b (entrevista)**: o `entrevistador` não fala com o usuário. Chame-o em modo PREPARAR, repasse as perguntas ao usuário de uma só vez, e chame-o de novo em modo CONSOLIDAR com as respostas. Os agentes seguintes usam `dados-negocio.md` como fonte dos dados de contato. Se o site já existir, rode a etapa 4 em seguida para trocar os dados fictícios.
- **Coordenadas → mapa interativo**: sempre que o `entrevistador` receber coordenadas, ele termina com "ENCAMINHAR AO DESENVOLVEDOR". Chame o `desenvolvedor-frontend` em seguida para inserir o mapa interativo do Google. O usuário autorizou de forma permanente esse iframe; não pergunte de novo.
- **Fotos reais**: o `gerador-imagens` busca fotos reais, públicas, de boa definição e ligadas ao ramo do site, para hero, ambiente, equipe e depoimentos de exemplo. Os bancos aceitos são Unsplash, Pexels, Pixabay e Wikimedia Commons (CC0/CC BY). Ele registra autor e licença, e marca equipe e depoimentos como "substituir antes de publicar". Se ele avisar que faltou foto adequada, delegue uma busca extra ao `pesquisador-fontes` e depois volte ao `gerador-imagens` para baixar.
- **Versionamento (etapa 8)**: sempre que um projeto for validado (APROVADO), chame o `versionador-git` em modo COMMIT. Ele cria as mensagens e faz os commits locais. Depois **pergunte ao usuário** se pode fazer o push e, só com o "sim" explícito dele para aquele push, chame o `versionador-git` em modo PUSH. Sem remoto configurado, peça a URL ao usuário na mesma pergunta.
- **Iteração**: se `avaliacao.md` disser ITERAR, volte à etapa 4 e depois às etapas 5 e 6. No máximo 3 ciclos de correção.
- **Paralelismo**: as etapas 1 a 3 são sequenciais por dependência; dentro de `gerador-imagens`, não há paralelismo com `designer-ui`.
- **Resumo final ao usuário**: caminho do `index.html`, decisão do avaliador, notas, pendências (fotos, textos reais) e como abrir o site (dê duplo clique em `index.html` ou sirva a pasta com um servidor local).

## Convenções
- Idioma padrão do conteúdo do site: português do Brasil, salvo indicação no briefing.
- Estrutura por projeto:
  ```
  projetos/<site>/
    briefing.md
    pesquisa.md
    design.md
    imagens.md
    assets/
    site/index.html, styles.css, script.js, CHANGELOG.md
    avaliacao-tecnica.md
    avaliacao.md
  ```
- Nomes de arquivos em kebab-case, sem acentos.
- Sem frameworks nem dependências de build, salvo pedido explícito do usuário.
- Não publicar nem enviar nada para serviços externos sem confirmação do usuário.
- Não copiar conteúdo protegido de sites de terceiros; usar referências apenas como inspiração de padrões.

## Limites conhecidos
- O time gera SVG e usa fotos de bancos públicos de licença livre. Fotos próprias do negócio (fachada, equipe real, clientes) precisam ser fornecidas pelo usuário e colocadas em `assets/`.
- A avaliação visual depende de um navegador disponível no ambiente; sem ele, a avaliação é feita por leitura de código e a limitação é registrada no relatório.
