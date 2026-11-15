# Dados do negócio — Emmeline Crochê

> **ATENÇÃO: TODOS OS DADOS DE CONTATO ABAIXO SÃO FICTÍCIOS. SUBSTITUIR ANTES DE PUBLICAR.**
> Fonte: o usuário pediu em 2026-11-15 para "usar fictícios por enquanto". Os valores foram definidos pelo orquestrador e servem só de exemplo plausível.
> Legenda: **[FICTÍCIO]** = fictício, substituir antes de publicar · **[ASSUMIDO]** = suposição do briefing aceita provisoriamente.

## 1. Dados para exibição (exatamente como aparecem no site)

| Campo | Texto no site | Status |
|---|---|---|
| Marca | Emmeline Crochê | [ASSUMIDO] nome a confirmar; sem logo (usar logotipo tipográfico em SVG) |
| WhatsApp | (11) 90000-0000 | [FICTÍCIO] |
| Telefone fixo | não exibir | sem fixo |
| E-mail | contato@emmelinecroche.com.br | [FICTÍCIO] |
| Instagram | @emmelinecroche | [FICTÍCIO] |
| Localização | São Paulo/SP · ateliê sem atendimento presencial | [FICTÍCIO] |
| Endereço | não exibir (sem ponto físico) | — |
| Mapa | não exibir (sem coordenadas) | — |
| Envio | Enviamos para todo o Brasil pelos Correios | [FICTÍCIO] |
| Frete | Por conta da compradora (calculado conforme o CEP) | REAL — informado pelo usuário em 2026-11-15 |
| Pagamento | Pix ou cartão de crédito em até 3x · 50% de sinal na encomenda | [FICTÍCIO] |
| Prazo de produção | 7 a 15 dias úteis (mais o prazo de envio) | [FICTÍCIO] |
| Faixa de preço | Bolsas de R$ 120 a R$ 380 (exibir como "a partir de R$ 120") | [FICTÍCIO] |

### Horário de atendimento [FICTÍCIO]

| Dia | Horário |
|---|---|
| Segunda a sexta | 09:00–18:00 |
| Sábado | 09:00–12:00 |
| Domingo e feriados | Fechado |

Texto curto sugerido: "Atendimento: seg a sex, 09:00–18:00 · sáb, 09:00–12:00".
Observação: pausa para almoço e feriados não foram informados; adotado "sem pausa" e "feriados fechado" como padrão fictício.

### Mensagem inicial do WhatsApp [FICTÍCIO]
"Olá! Vi o site da Emmeline Crochê e quero encomendar uma bolsa."

## 2. Links prontos

| Uso | Link |
|---|---|
| WhatsApp (com mensagem) | `https://wa.me/5511900000000?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Emmeline%20Croch%C3%AA%20e%20quero%20encomendar%20uma%20bolsa.` |
| WhatsApp (sem mensagem) | `https://wa.me/5511900000000` |
| E-mail | `mailto:contato@emmelinecroche.com.br` |
| Instagram | `https://www.instagram.com/emmelinecroche/` |
| Telefone (opcional, mesmo número) | `tel:+5511900000000` |
| Mapa / rota / embed | não se aplica (sem endereço físico nem coordenadas) |

Todos os links acima apontam para dados **[FICTÍCIOS]**: o número 90000-0000 não pertence à marca.

## 3. Bloco JSON-LD sugerido [FICTÍCIO]

Sem endereço físico: usar `address` só com cidade/UF, `areaServed` = Brasil, e sem `geo`.

```json
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Emmeline Crochê",
  "description": "Bolsas de crochê artesanais feitas à mão, sob encomenda.",
  "telephone": "+55-11-90000-0000",
  "email": "contato@emmelinecroche.com.br",
  "priceRange": "R$ 120 – R$ 380",
  "paymentAccepted": "Pix, cartão de crédito",
  "currenciesAccepted": "BRL",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "areaServed": { "@type": "Country", "name": "Brasil" },
  "sameAs": ["https://www.instagram.com/emmelinecroche/"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ]
}
```

Recomendação: como os dados são fictícios, o desenvolvedor pode incluir o JSON-LD já pronto, mas ele **deve ser revisado** junto com os demais dados antes de publicar.

## 4. Suposições do briefing (confirmadas provisoriamente)

- **Público** [ASSUMIDO]: mulheres de 25 a 55 anos que valorizam peças artesanais e compram pelo celular e pelas redes sociais.
- **Fotos** [ASSUMIDO]: sem fotos próprias. Usar fotos de banco público (bolsas de crochê, fios, mãos tecendo) marcadas "substituir antes de publicar".
- **Depoimentos** [ASSUMIDO]: 3 depoimentos de exemplo, marcados "substituir antes de publicar". Não apresentar como reais.
- **Logo** [ASSUMIDO]: logotipo tipográfico simples em SVG.

## 5. Pontos a confirmar (antes de publicar)

1. Nome definitivo da marca e se existe logo.
2. Número real de WhatsApp e mensagem inicial.
3. E-mail real (o domínio emmelinecroche.com.br existe e é da marca?).
4. @ real do Instagram e outras redes ou vitrines (Elo7, Pinterest etc.).
5. Cidade/UF real e confirmação de que não há ponto físico nem retirada no local.
6. Envio: só Correios? Há entrega local ou retirada? (frete: RESPONDIDO — pago pela compradora)
7. Horário real, pausa para almoço e atendimento em feriados.
8. Pagamento, sinal, prazo de produção e faixa de preço reais.
9. Fotos próprias das bolsas e depoimentos reais com autorização das clientes.

## 6. Fonte
Dados fictícios definidos a pedido do usuário em 2026-11-15 ("use fictícios por enquanto"). Nenhum dado real do negócio foi informado até agora.

## 7. Instruções para o desenvolvedor
- Não há coordenadas: **não inserir mapa** nem seção de endereço.
- Mostrar "São Paulo/SP · envio para todo o Brasil" no rodapé ou na seção de contato.
- CTA principal: link de WhatsApp com mensagem (seção 2). CTA secundário: Instagram.
- Deixar um comentário HTML perto dos dados de contato, por exemplo `<!-- FICTÍCIO: substituir antes de publicar (ver dados-negocio.md) -->`.
