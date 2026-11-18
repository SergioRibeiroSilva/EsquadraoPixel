# Dados do negócio: Rosa Bordô

> **ATENÇÃO: dados FICTÍCIOS por pedido do usuário (2026-11-17). Substituir antes de publicar.**
> Único dado real: Instagram @arosabordo.
> No site, recomenda-se um comentário HTML `<!-- FICTÍCIO: substituir antes de publicar -->` junto a cada dado fictício.

## Dados para exibição (exatamente como aparecem no site)

| Campo | Valor de exibição | Status |
|---|---|---|
| Marca | Rosa Bordô | real |
| WhatsApp | (11) 90000-0000 | FICTÍCIO |
| E-mail | contato@rosabordo.com.br | FICTÍCIO |
| Cidade | São Paulo – SP | FICTÍCIO |
| Endereço físico | não exibir (ateliê sem atendimento presencial) | — |
| Instagram | @arosabordo | **real** |
| Envio | Enviamos para todo o Brasil pelos Correios (PAC ou SEDEX). Frete calculado pelo CEP. | FICTÍCIO |
| Prazo de produção | Pronta-entrega: postagem em até 3 dias úteis. Personalizadas: 15 a 25 dias úteis + prazo dos Correios. | FICTÍCIO |
| Formas de pagamento | Pix ou cartão de crédito em até 3x sem juros. Encomendas personalizadas: 50% de sinal na confirmação e 50% antes do envio. | FICTÍCIO |
| Faixa de preços | De R$ 129 a R$ 389 (bonecas personalizadas a partir de R$ 189) | FICTÍCIO |

### Horário de atendimento (WhatsApp) — FICTÍCIO

| Dia | Horário |
|---|---|
| Segunda a sexta | 09:00–18:00 |
| Sábado | 09:00–13:00 |
| Domingo e feriados | Fechado (mensagens respondidas no próximo dia útil) |

Versão curta para rodapé: **Seg a sex, 9h às 18h · Sáb, 9h às 13h**

## Links prontos

| Uso | Link |
|---|---|
| WhatsApp (simples) | `https://wa.me/5511900000000` |
| WhatsApp (encomenda, com mensagem) | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Vim%20pelo%20site%20e%20quero%20encomendar%20uma%20boneca.` |
| WhatsApp (personalizada) | `https://wa.me/5511900000000?text=Ol%C3%A1%2C%20Rosa%20Bord%C3%B4!%20Quero%20uma%20boneca%20personalizada.` |
| Telefone (se necessário) | `tel:+5511900000000` |
| E-mail | `mailto:contato@rosabordo.com.br` |
| Instagram (real) | `https://www.instagram.com/arosabordo/` |
| Mapa / rota / embed | não se aplica (sem endereço físico nem coordenadas) |

Mensagens decodificadas: "Olá, Rosa Bordô! Vim pelo site e quero encomendar uma boneca." / "Olá, Rosa Bordô! Quero uma boneca personalizada."

## Bloco JSON-LD sugerido (FICTÍCIO, exceto Instagram)

```html
<!-- FICTÍCIO: substituir telefone, e-mail, cidade e horários antes de publicar -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Rosa Bordô",
  "description": "Bonecas de pano artesanais e personalizadas, feitas à mão.",
  "telephone": "+55-11-90000-0000",
  "email": "contato@rosabordo.com.br",
  "priceRange": "R$ 129–R$ 389",
  "paymentAccepted": "Pix, Cartão de crédito",
  "currenciesAccepted": "BRL",
  "areaServed": { "@type": "Country", "name": "Brasil" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "sameAs": ["https://www.instagram.com/arosabordo/"],
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
      "closes": "13:00"
    }
  ]
}
</script>
```

Sem `geo` nem `streetAddress` (não há endereço físico).

## Pontos a confirmar (antes de publicar)
1. Número real de WhatsApp (e se aceita ligações).
2. E-mail real (ou remover o campo).
3. Cidade/UF real do ateliê (o DDD do WhatsApp deve bater com a UF, se for número local).
4. Horários reais de atendimento e política para feriados.
5. Formas de pagamento reais, parcelamento e política de sinal.
6. Modalidades de envio (Correios, transportadora, retirada) e se envia mesmo para todo o Brasil.
7. Prazos reais de produção (pronta-entrega e personalizadas).
8. Faixa de preços real e preços de cada modelo da vitrine.

## Fonte
- Instagram @arosabordo e nome "Rosa Bordô": informados pelo usuário em 2026-11-17.
- Demais dados: **FICTÍCIOS**, criados por pedido explícito do usuário em 2026-11-17 ("Use dados fictícios por enquanto").

## Instruções para o desenvolvedor
- Não há coordenadas: **não inserir mapa** nem links de rota.
- Usar os links prontos acima; CTA principal "Encomendar" aponta para o WhatsApp com mensagem.
- Marcar cada dado fictício no HTML com comentário `<!-- FICTÍCIO: substituir antes de publicar -->`.
- Exibir apenas cidade/UF, sem endereço físico.
