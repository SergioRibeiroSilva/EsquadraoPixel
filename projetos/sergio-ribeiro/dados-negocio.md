# Dados de contato: Sergio Ribeiro (PROVISÓRIO)

> **Situação: PROVISÓRIO.** Gerado em 2026-11-17 a partir do briefing (dados públicos do Instagram). O usuário ainda não respondeu a entrevista (`entrevista.md`).
> Todo dado marcado `[PENDENTE]` é um **placeholder fictício** e precisa ser trocado antes de publicar. Os agentes podem usar os placeholders no layout, mas devem manter a marcação visível no `conteudo.md` e um comentário `<!-- PENDENTE -->` no HTML.
> Site pessoal: não há endereço, mapa nem horário comercial. Sem coordenadas, **não** há mapa a inserir.

## 1. Dados para exibição
| Campo | Exibição no site | Situação |
|---|---|---|
| Nome | Sergio Ribeiro (no texto: "Pr. Sergio Ribeiro") | público (Instagram) |
| Lema | Influenciador de Esperança 🌼 | público (bio) |
| Instagram | @pr.sergioribeiro | **confirmado** |
| WhatsApp | (61) 90000-0000 | **[PENDENTE: número real]** fictício; o DDD 61 também é suposição |
| E-mail | contato@exemplo.com | **[PENDENTE: e-mail real]** fictício |
| Cidade | Brasília/DF | **[PENDENTE: confirmar]** inferida pela igreja |
| Endereço / mapa | não exibir | assumido (site pessoal) |
| Horário de resposta | não exibir | **[PENDENTE: opcional]** |
| Esposa | "casado com Mônica" (só texto, sem link) | público na bio; **[PENDENTE: autorizar o link @amonicaribeiro_]** |
| Igreja / ministério | Ministério de homens da AD Catedral Baleia (Assembleias de Deus Madureira), Brasília/DF | **[PENDENTE: autorizar a citação e informar o papel exato]**. Não usar cargo inventado. |
| Tecnologia | área de atuação | **[PENDENTE: área/função]** |
| LinkedIn | https://www.linkedin.com/in/exemplo | **[PENDENTE]** fictício; não exibir como link ativo |
| Portfólio / GitHub | https://exemplo.com | **[PENDENTE]** fictício; não exibir como link ativo |
| Outras redes | nenhuma | **[PENDENTE]** |
| Foto | placeholder (monograma "SR" ou silhueta) | **[PENDENTE: foto própria em assets/]** |

## 2. Links prontos
| Uso | Link | Situação |
|---|---|---|
| Instagram | `https://www.instagram.com/pr.sergioribeiro/` | confirmado |
| WhatsApp | `https://wa.me/5561900000000?text=Ol%C3%A1%2C%20Pr.%20Sergio!%20Vim%20pelo%20seu%20site.` | **[PENDENTE]** fictício |
| Telefone | `tel:+5561900000000` | **[PENDENTE]** fictício (use só se ele quiser ligações) |
| E-mail | `mailto:contato@exemplo.com` | **[PENDENTE]** fictício |
| Esposa | `https://www.instagram.com/amonicaribeiro_/` | **[PENDENTE: autorização]**. Não linkar por enquanto. |
| Mapa / rota / embed | não se aplica | sem coordenadas |

Mensagem padrão do WhatsApp (decodificada): "Olá, Pr. Sergio! Vim pelo seu site."

## 3. JSON-LD sugerido (Person)
Trocar os campos `PENDENTE` antes de publicar, ou remover `telephone` e `email` se ele não quiser expô-los.
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sergio Ribeiro",
  "honorificPrefix": "Pr.",
  "description": "Influenciador de Esperança. Cristão, marido e pai.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brasília",
    "addressRegion": "DF",
    "addressCountry": "BR"
  },
  "telephone": "+5561900000000",
  "email": "contato@exemplo.com",
  "sameAs": [
    "https://www.instagram.com/pr.sergioribeiro/"
  ]
}
```
(Os campos `telephone` e `email` são PENDENTES e fictícios. `addressLocality` ainda depende de confirmação.)

## 4. Pontos a confirmar
1. Número de WhatsApp real, DDD e mensagem pronta (pergunta 1).
2. E-mail público (pergunta 1).
3. Cidade/UF a exibir e confirmação de que não haverá mapa (pergunta 2).
4. Horário de resposta, opcional (pergunta 3).
5. Área em tecnologia e links de LinkedIn, portfólio e GitHub (pergunta 4).
6. Autorização para citar a AD Catedral Baleia e o ministério de homens, além do papel e do título exatos (pergunta 5).
7. Autorização para o nome e o link da esposa (pergunta 6).
8. Foto própria (pergunta 7).
9. Outras redes e bio completa (pergunta 8).

## 5. Fonte
- Dados públicos: perfil @pr.sergioribeiro (leitura pública em 2026-11-17, conforme o briefing).
- Instagram confirmado pelo orquestrador em 2026-11-17.
- Demais dados: **ainda não informados pelo usuário**. Os placeholders foram criados em 2026-11-17.

## 6. Instruções para o desenvolvedor
- Sem coordenadas: **não** inserir mapa nem iframe.
- Botões de WhatsApp e e-mail podem usar os links fictícios acima, mas cada um deve ter o comentário `<!-- PENDENTE: trocar pelo dado real (dados-negocio.md) -->`.
- LinkedIn e portfólio: não criar links ativos para URLs fictícias. Use um texto ou bloco "em breve", ou omita até a resposta.
- Esposa: só texto, sem link, até a autorização.
