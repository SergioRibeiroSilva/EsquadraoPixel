# CHANGELOG: Sergio Ribeiro, "Influenciador de Esperança"

## Iteração 1 (2026-11-17): primeira versão

### Feito
- `index.html`, `styles.css`, `script.js` criados a partir de `design.md`, `conteudo.md` (copy usada sem reescrita), `dados-negocio.md` e `imagens.md`.
- `assets/` e `assets/fotos/` copiados para `site/assets/`. Todos os caminhos referenciados foram conferidos (nenhum arquivo faltando).
- Tokens do `design.md` §2.7 em `:root`; Fraunces (eixo SOFT) + Inter via Google Fonts com `display=swap`.
- Seções na ordem do design: pular conteúdo, cabeçalho sticky (com borda ao rolar), hero com arco e margarida inline animada (abre uma vez), Sobre, Esperança (4 cards), Ministério, Tecnologia, Pontes, Instagram (sem embed nem glyph), Contato (3 canais), rodapé com créditos das fotos em `<details>`, barra fixa "Fale comigo" no mobile.
- Ícones em sprite SVG inline (`<symbol>` + `<use>`), para o `currentColor` funcionar. Usei esse caminho em vez de `mask-image` porque as máscaras CSS não carregam quando o site é aberto via `file://` (duplo clique).
- Menu mobile com `aria-expanded`/`aria-controls`, rótulo alternado, fecha com Esc, com clique em link ou fora do painel; devolve o foco; trava a rolagem. Sem JS, o menu aparece estático.
- Link ativo da navegação com `aria-current="true"` e sublinhado dourado (IntersectionObserver).
- Entrada ao rolar (`data-reveal`) só com JS e só em `prefers-reduced-motion: no-preference`; atraso escalonado de 80ms nos cards.
- JSON-LD `Person` com `sameAs` do Instagram. Meta description, Open Graph (`og-image.jpg`) e favicon SVG.
- Sem mapa nem iframe (não há coordenadas em `dados-negocio.md`).
- Validação: estrutura de tags balanceada, um único `<h1>`, todas as âncoras internas existem, sem rolagem horizontal em 360px (captura headless).

### Divergências do design (justificadas)
- **Movimento reduzido sem `!important`:** o design sugere um bloco `reduce` com `!important`, o que a regra do time proíbe. Em vez disso, todas as transições e animações ficam dentro de `@media (prefers-reduced-motion: no-preference)`; com `reduce`, nada se move e o conteúdo aparece direto (mesmo efeito).
- **Hero lado a lado a partir de 900px** (o design sugere 900px como preferência do tablet), com grade 7fr/5fr no lugar das 12 colunas exatas.
- **Contato:** fundo com `margarida-contorno.svg` a 12% (como indica o `imagens.md`) em vez da `margarida.svg` preenchida.
- **Card Instagram no Contato:** ícone `margarida-mini.svg` (opção prevista no design), sem glyph do Instagram.
- **Links do Instagram e do WhatsApp abrem na mesma aba** (preferência da pesquisa), então não há aviso "(abre em nova aba)".
- Um `<script>` inline de uma linha no `<head>` adiciona a classe `js` antes da pintura, para evitar que o menu mobile pisque. O resto do JS é `defer`.

### Pendências (antes de publicar)
- **WhatsApp fictício** `(61) 90000-0000` / `wa.me/5561900000000` em 7 links (cabeçalho, menu, hero, Sobre, Ministério, Contato, barra fixa), cada um com `<!-- PENDENTE -->`.
- **E-mail fictício** `contato@exemplo.com` (card e `mailto:`), também com `<!-- PENDENTE -->`.
- **JSON-LD:** `telephone`, `email` e `addressLocality` são provisórios; trocar ou remover.
- **Cidade** "Brasília/DF" (Sobre e Contato) a confirmar.
- **AD Catedral Baleia:** falta autorizar a citação e informar o papel exato (lead e selo do Ministério). Há texto alternativo pronto no `conteudo.md`.
- **Tecnologia:** área/função (chip "Áreas de atuação em breve") e links de LinkedIn e portfólio, que estão sem link ativo, como manda a regra.
- **Mônica:** confirmar se autoriza o nome (Sobre e Pontes). Ela aparece sem link.
- **Fotos a substituir:** `retrato-placeholder.jpg` (pela foto do Sergio; a legenda "Foto ilustrativa" está visível) e `foto-ministerio*.jpg` (por foto real do ministério, com autorização).
- `og:image` com caminho relativo: trocar pela URL absoluta quando houver domínio.

## Iteração 2 (2026-11-17): correções do ciclo 1 (`avaliacao.md`, `avaliacao-tecnica.md`, `inspecao-visual.md`, `conteudo.md` > Revisões)

### Obrigatórios (WCAG 2.5.3, Rótulo no Nome)
- **T1/V5** `index.html` (hero, "Siga no Instagram"): `aria-label` passou a "Siga no Instagram: @pr.sergioribeiro".
- **T2** `index.html` (Contato, card 3, "Abrir perfil"): `aria-label` passou a "Abrir perfil @pr.sergioribeiro no Instagram".
- **Faixa Instagram (R2/V7/T6):** texto visível encurtado para "Siga no Instagram" (o handle já está no título do card) e `aria-label` "Siga no Instagram: @pr.sergioribeiro". Abaixo de 480px o padding lateral do botão cai para `--space-4`; o botão fica em 1 linha no celular de 360.
- **"Voltar ao topo":** o `aria-label` saiu, conforme `conteudo.md`. Como o link só tem ícone, o nome acessível vem agora de um `<span class="sr-only">Voltar ao topo</span>`. Sem ele, o link ficaria sem nome.
- **Alt do retrato (R1):** confirmado igual ao `conteudo.md`: "Foto ilustrativa: mãos segurando uma Bíblia ao pôr do sol." Não precisou mudar.
- Todos os `aria-label` de links foram conferidos por script: cada um começa com o texto visível exato. Os rótulos de botões e links só com ícone (menu, logo) não têm texto visível com que conflitar.

### Opcionais aplicados
- **C2/V4 (Esperança, 4 colunas a partir de 1200px):** o `blockquote` ocupa o espaço livre do card e centraliza o versículo nele. O vão do card de Hebreus 6.19 fica dividido acima e abaixo do texto, em vez de formar um buraco entre o versículo e a referência. A referência e a reflexão continuam presas à base. Em 1 e 2 colunas nada muda.
- **C3/V9/T9:** o emoji 🌼 do rodapé virou `assets/margarida-mini.svg` (`alt=""`, 20x20), com a cor da marca em qualquer sistema.
- **C4/V8/T7:** `.footer-base > p` com `min-height: 44px` e centralização vertical a partir de 768px. O "©" fica alinhado com "Créditos das fotos".
- **C6/T8:** links do `.footer-nav` com `min-width: 44px` ("Sobre" passa de 42 para 44px).
- **C5/T5 (robustez):** o script inline do `<head>` continua adicionando `.js` (evita que o menu pisque). Agora ele também verifica no `load` se `window.srPronto` existe. Essa flag é definida no fim do `script.js`. Se o arquivo falhar (404, bloqueio ou erro), a classe `.js` é removida: os `[data-reveal]` aparecem e o menu volta ao modo estático sem JS.
- **Fontes (C7/T4):** `preconnect` para as duas origens e `display=swap` já estavam no lugar e foram mantidos. Não hospedei as fontes localmente: isso exige baixar e fazer o subset dos woff2, o que fica fora do escopo de uma correção segura. Fica como melhoria futura para o LCP mobile (3,3 s).

### Validação
- Tags balanceadas (parser), sem ids duplicados novos. Todos os `assets/` referenciados existem.

### Pendências (sem mudança desde a iteração 1)
- WhatsApp e e-mail fictícios, JSON-LD provisório, cidade, autorização da AD Catedral Baleia, área de tecnologia e links, nome da Mônica, retrato e foto do ministério ilustrativos, `og:image`/`og:url`/`canonical` absolutos quando houver domínio.

### Ajuste pós-inspeção (ciclo 2)
- **V10:** a margarida do rodapé saía com 48x48 porque `.footer-marca img` vencia `.footer-flor` por especificidade. O seletor passou para `.footer-marca .footer-flor`, e ela volta a ter 20x20, alinhada ao texto.
