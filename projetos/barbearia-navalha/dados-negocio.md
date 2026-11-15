# Dados do negócio: Barbearia Navalha

Fonte: informado pelo usuário em 2026-11-14 (quatro rodadas; ver `entrevista.md`).

## Dados para exibição
Use exatamente como abaixo no site.

| Campo | Exibição |
|---|---|
| Endereço | Quadra 11, Casa 40 – Sobradinho/DF – CEP 73040-114 |
| CEP | 73040-114 (confirmado) |
| WhatsApp | (61) 98585-7623 |
| Telefone | (61) 98585-7623 (mesmo número do WhatsApp; não há fixo) |
| E-mail | pastorsergioribeiro@gmail.com |
| Instagram | @pr.sergioribeiro |

### Horário de atendimento
| Dia | Horário |
|---|---|
| Segunda | 08:00–18:00 |
| Terça | 08:00–18:00 |
| Quarta | 08:00–18:00 |
| Quinta | 08:00–18:00 |
| Sexta | 08:00–18:00 |
| Sábado | 08:00–12:00 |
| Domingo | Fechado |
| Feriados | Fechado |

Sem intervalo de almoço. Versão resumida: "Seg a Sex 08:00–18:00 · Sáb 08:00–12:00 · Dom e feriados fechado".

### Coordenadas
- Latitude: -15.641449
- Longitude: -47.789564

Faixa válida e coerente com Sobradinho/DF. DDD 61 compatível com DF.

## Links prontos
| Uso | Link |
|---|---|
| Telefone (`tel:`) | `tel:+5561985857623` |
| WhatsApp | `https://wa.me/5561985857623` |
| WhatsApp com mensagem | `https://wa.me/5561985857623?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Navalha.` |
| E-mail | `mailto:pastorsergioribeiro@gmail.com` |
| Instagram | `https://www.instagram.com/pr.sergioribeiro/` |
| Abrir no Google Maps | `https://www.google.com/maps?q=-15.641449,-47.789564` |
| Como chegar (rota) | `https://www.google.com/maps/dir/?api=1&destination=-15.641449,-47.789564` |
| Embed do mapa interativo (iframe), OBRIGATÓRIO | `https://www.google.com/maps?q=-15.641449,-47.789564&z=16&output=embed` (aprovado pelo usuário em 2026-11-14) |

Mensagem do WhatsApp decodificada: "Olá! Gostaria de agendar um horário na Barbearia Navalha."

## Bloco JSON-LD sugerido
```json
{
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "name": "Barbearia Navalha",
  "telephone": "+55-61-98585-7623",
  "email": "pastorsergioribeiro@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Quadra 11, Casa 40",
    "addressLocality": "Sobradinho",
    "addressRegion": "DF",
    "postalCode": "73040-114",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -15.641449,
    "longitude": -47.789564
  },
  "hasMap": "https://www.google.com/maps?q=-15.641449,-47.789564",
  "sameAs": ["https://www.instagram.com/pr.sergioribeiro/"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ]
}
```

## Instruções para o desenvolvedor
1. Substituir em todo o site o número de teste (61) 99999-9999 / 5561999999999 pelo número real: exibição `(61) 98585-7623`, `tel:+5561985857623`, `https://wa.me/5561985857623` (com a mensagem codificada acima nos CTAs de agendamento) e `telephone` do JSON-LD `+55-61-98585-7623`. Remover qualquer aviso de "número de teste".
2. Seção de localização: manter sempre o endereço em texto e os botões "Abrir no Google Maps" e "Como chegar" (links acima).
3. Mapa interativo (obrigatório, aprovado pelo usuário em 2026-11-14): inserir o mapa interativo do Google na seção de localização, substituindo a imagem ilustrativa do mapa:
   ```html
   <iframe src="https://www.google.com/maps?q=-15.641449,-47.789564&z=16&output=embed"
     title="Mapa da Barbearia Navalha em Sobradinho/DF" loading="lazy"
     referrerpolicy="no-referrer-when-downgrade" width="100%" height="360"
     style="border:0" allowfullscreen></iframe>
   ```
   Endereço e links continuam visíveis junto ao mapa (acessibilidade e fallback).

## Pontos a confirmar
Nenhum no momento.

## Resolvidos (2026-11-14)
- Mapa interativo do Google (iframe): aprovado pelo usuário, de forma permanente (citação em `entrevista.md`, Rodada 4).
- Telefone/WhatsApp real informado na rodada 4: (61) 98585-7623 (substitui o número de teste (61) 99999-9999).
- CEP 73040-114 confirmado pelo usuário (corrige o "3040-114" digitado antes).
- Instagram @pr.sergioribeiro confirmado.
- E-mail informado para uso no site: pastorsergioribeiro@gmail.com.
- Formato da cidade: "Sobradinho/DF".
- Conjunto/setor: não informado; considerado inexistente.
