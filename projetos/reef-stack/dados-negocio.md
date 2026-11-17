# Dados do negócio: Reef Stack

> **Fonte:** informado pelo usuário em 2026-11-16. Tipo (loja + clube) e nome ("Reef Stack") foram informados. Para todo o resto, o usuário disse "pode criar fictícios".
> **ATENÇÃO:** os itens marcados com **[FICTÍCIO]** são exemplos inventados e devem ser trocados antes de publicar. No site, o desenvolvedor deve deixar um comentário HTML `<!-- FICTÍCIO: substituir antes de publicar -->` junto de cada um. Durante o desenvolvimento, também pode exibir um selo discreto como "dados de exemplo".
> **Sem coordenadas, então sem mapa.** Não crie nem estime coordenadas: uma coordenada fictícia apontaria para um imóvel real.

## 1. Dados para exibição (exatamente como aparecem no site)

| Campo | Valor exibido | Situação |
|---|---|---|
| Nome | Reef Stack | Informado |
| Tipo | Loja de aquarismo (água doce e marinho) + Clube Reef Stack (comunidade) | Informado |
| Slogan | (o redator propõe) | Pendente (redator) |
| Responsável | Equipe Reef Stack | [FICTÍCIO] |
| CNPJ | não exibir até haver dado real | Pendente |
| WhatsApp | (11) 90000-0000 | [FICTÍCIO] |
| Telefone fixo | (11) 0000-0000 | [FICTÍCIO] (formato propositalmente inválido) |
| E-mail | contato@reefstack.example | [FICTÍCIO] (`.example` é domínio reservado, RFC 2606) |
| Instagram | @reefstack_exemplo | [FICTÍCIO] |
| YouTube | @reefstack_exemplo | [FICTÍCIO] |
| Endereço (1 linha) | Rua Exemplo, s/n, Bairro Exemplo, São Paulo – SP, CEP 00000-000 | [FICTÍCIO] |
| Atendimento | Loja física + pedidos pelo WhatsApp com entrega (área de entrega a definir) | [FICTÍCIO] |

### Horário da loja [FICTÍCIO]

| Dia | Horário |
|---|---|
| Segunda-feira | Fechado |
| Terça a sexta | 10:00–19:00 |
| Sábado | 09:00–18:00 |
| Domingo | 10:00–14:00 |
| Feriados | Fechado (confirmar pelo WhatsApp) |

A loja não fecha para almoço. O atendimento pelo WhatsApp segue o horário da loja.

### Clube Reef Stack: encontros [FICTÍCIO]

| Atividade | Frequência | Horário | Local |
|---|---|---|---|
| Encontro mensal (bate-papo, dúvidas, troca de mudas e frags) | 2º sábado de cada mês | 14:00–17:00 | Na loja (endereço acima) |
| Oficina prática (ex.: ciclagem, aquapaisagismo, preparo de água salgada) | 4º sábado de cada mês | 10:00–12:00 | Na loja, vagas limitadas, inscrição pelo WhatsApp |
| Grupo online dos membros | Contínuo | — | Grupo de WhatsApp (convite após a inscrição) |

Participação: gratuita para iniciantes no primeiro encontro. Condições de associação: pendente (o redator não deve inventar preço da mensalidade, ou deve marcar como `[PENDENTE]`).

## 2. Links prontos

> Todos usam o número fictício. Antes de publicar, troque `5511900000000` pelo número real em todos os links.

| Uso | Link |
|---|---|
| Telefone fixo (tel) | `tel:+551100000000` [FICTÍCIO] |
| WhatsApp (tel, opcional) | `tel:+5511900000000` [FICTÍCIO] |
| WhatsApp genérico | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Reef%20Stack!%20Vim%20pelo%20site.` |
| WhatsApp: pedido/orçamento (CTA principal) | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Reef%20Stack!%20Vim%20pelo%20site%20e%20quero%20fazer%20um%20pedido%20ou%20or%C3%A7amento.` |
| WhatsApp: entrar no clube | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Reef%20Stack!%20Vim%20pelo%20site%20e%20quero%20participar%20do%20Clube%20Reef%20Stack.` |
| WhatsApp: agendar montagem/manutenção | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Reef%20Stack!%20Vim%20pelo%20site%20e%20quero%20agendar%20uma%20montagem%20ou%20manuten%C3%A7%C3%A3o%20de%20aqu%C3%A1rio.` |
| E-mail | `mailto:contato@reefstack.example` |
| Instagram | `https://www.instagram.com/reefstack_exemplo/` [FICTÍCIO] |
| YouTube | `https://www.youtube.com/@reefstack_exemplo` [FICTÍCIO] |
| Mapa / rota / embed | **Não gerar.** Sem coordenadas reais |

Mensagens decodificadas, para conferência:
- Genérico: "Olá, Reef Stack! Vim pelo site."
- Pedido: "Olá, Reef Stack! Vim pelo site e quero fazer um pedido ou orçamento."
- Clube: "Olá, Reef Stack! Vim pelo site e quero participar do Clube Reef Stack."
- Montagem: "Olá, Reef Stack! Vim pelo site e quero agendar uma montagem ou manutenção de aquário."

## 3. Bloco JSON-LD sugerido

> Use apenas como modelo. Com dados fictícios, a recomendação é **não publicar** o JSON-LD, ou mantê-lo comentado até haver dados reais. Sem `geo`, porque não há coordenadas.

```json
{
  "@context": "https://schema.org",
  "@type": "PetStore",
  "name": "Reef Stack",
  "description": "Loja de aquarismo de água doce e marinho e clube de aquaristas.",
  "telephone": "+55-11-90000-0000",
  "email": "contato@reefstack.example",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, s/n",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "00000-000",
    "addressCountry": "BR"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "10:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "14:00" }
  ],
  "sameAs": [
    "https://www.instagram.com/reefstack_exemplo/",
    "https://www.youtube.com/@reefstack_exemplo"
  ]
}
```

## 4. Pontos a confirmar (antes de publicar)

1. **Todos os dados de contato**: WhatsApp, fixo, e-mail, Instagram e YouTube reais.
2. **Endereço completo real** (rua, número, complemento, bairro, cidade, UF, CEP). Cidade/UF usados: São Paulo – SP, só para o DDD 11 bater.
3. **Coordenadas do local**: assim que chegarem, gerar o mapa interativo do Google (regra fixa do usuário).
4. **Horários reais** da loja e regra de feriados.
5. **Clube**: datas, horários e local reais dos encontros e oficinas, se há mensalidade, e em qual plataforma fica o grupo (WhatsApp, Discord etc.).
6. **Área de entrega** dos pedidos e se a loja faz montagem e manutenção a domicílio.
7. **Responsável e CNPJ** (se forem exibidos).
8. **Handles fictícios**: `reefstack_exemplo` pode existir ou vir a existir nas redes. Ver a instrução 3 abaixo.

## 5. Instruções para o desenvolvedor

1. Use os links da seção 2 nos CTAs: "Fazer pedido / orçamento" (principal, no cabeçalho e no hero), "Quero participar" (Clube) e "Agendar montagem/manutenção" (loja/serviços).
2. Seção "Visite a loja": endereço em texto, tabela de horários e botão de WhatsApp. **Sem iframe de mapa e sem links "Abrir no Google Maps" ou "Como chegar"** até haver coordenadas reais.
3. Redes sociais: enquanto forem fictícias, prefira `href="#"` com o comentário `<!-- FICTÍCIO -->`, para não mandar o visitante a um perfil de terceiros. Os links da seção 2 ficam prontos para quando houver os reais.
4. Marque cada dado fictício no HTML com `<!-- FICTÍCIO: substituir antes de publicar -->` e liste-os no `CHANGELOG.md` como pendências.
5. JSON-LD: deixe comentado ou omitido enquanto os dados forem fictícios.
