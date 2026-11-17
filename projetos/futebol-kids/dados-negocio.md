# Dados do negócio: Futebol Kids

> **ATENÇÃO: TODOS OS DADOS ABAIXO SÃO FICTÍCIOS. SUBSTITUIR ANTES DE PUBLICAR.**
> Uso de dados fictícios autorizado pelo usuário (site de demonstração).
> **Fonte:** dados fictícios informados pelo usuário/briefing em 2026-11-17.

## 1. Dados para exibição (exatamente como aparecem no site)

| Campo | Texto de exibição | Status |
|---|---|---|
| Nome | Futebol Kids | real (nome do projeto) |
| Endereço | Rua das Acácias, 450 – Jardim Esperança, Cidade Exemplo/UF – CEP 00000-000 | FICTÍCIO |
| Telefone | (00) 90000-0000 | FICTÍCIO |
| WhatsApp | (00) 90000-0000 | FICTÍCIO |
| E-mail | contato@futebolkids.exemplo | FICTÍCIO |
| Instagram | @futebolkids.exemplo | FICTÍCIO |

### Horário de atendimento (FICTÍCIO)

| Dia | Horário |
|---|---|
| Segunda | 08:00–20:00 |
| Terça | 08:00–20:00 |
| Quarta | 08:00–20:00 |
| Quinta | 08:00–20:00 |
| Sexta | 08:00–20:00 |
| Sábado | 08:00–12:00 |
| Domingo | Fechado |
| Feriados | [PENDENTE: não informado] |

Versão curta para rodapé: `Seg a Sex: 08:00–20:00 · Sáb: 08:00–12:00 · Dom: fechado`

Aviso obrigatório no rodapé: **"Site de demonstração — dados fictícios"**.

## 2. Links prontos (FICTÍCIOS)

| Uso | Link |
|---|---|
| Telefone | `tel:+5500900000000` |
| WhatsApp (simples) | `https://wa.me/5500900000000` |
| WhatsApp (aula experimental) | `https://wa.me/5500900000000?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20Futebol%20Kids.` |
| E-mail | `mailto:contato@futebolkids.exemplo` |
| Instagram | `https://www.instagram.com/futebolkids.exemplo/` |
| Abrir no Google Maps | `https://www.google.com/maps?q=-15.793889,-47.882778` |
| Como chegar (rota) | `https://www.google.com/maps/dir/?api=1&destination=-15.793889,-47.882778` |
| Mapa interativo (iframe) | `https://www.google.com/maps?q=-15.793889,-47.882778&z=16&output=embed` |

Mensagem do WhatsApp (decodificada): "Olá! Gostaria de agendar uma aula experimental gratuita na Futebol Kids."

Coordenadas (6 casas): latitude `-15.793889`, longitude `-47.882778` (faixas válidas; ponto genérico FICTÍCIO).

## 3. Bloco JSON-LD sugerido

```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Futebol Kids",
  "description": "Escolinha de futebol infantil para crianças de 4 a 12 anos. (Site de demonstração — dados fictícios)",
  "telephone": "+5500900000000",
  "email": "contato@futebolkids.exemplo",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua das Acácias, 450 – Jardim Esperança",
    "addressLocality": "Cidade Exemplo",
    "addressRegion": "UF",
    "postalCode": "00000-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -15.793889,
    "longitude": -47.882778
  },
  "hasMap": "https://www.google.com/maps?q=-15.793889,-47.882778",
  "sameAs": ["https://www.instagram.com/futebolkids.exemplo/"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
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

Observação: domingo fechado é representado pela ausência de entrada. Como os dados são fictícios, avaliar se vale publicar o JSON-LD antes de trocar pelos reais (dados fictícios em JSON-LD podem ser indexados).

## 4. Pontos a confirmar (antes de publicar)

1. **Todos os dados são fictícios**: endereço, telefone, WhatsApp, e-mail, Instagram, horário e coordenadas.
2. **DDD "00" não existe** e o número não é discável; `tel:` e `wa.me` não funcionam de verdade.
3. **CEP 00000-000 e UF "UF"** são placeholders inválidos.
4. **Coordenadas incoerentes com o endereço**: -15.793889, -47.882778 fica na região central de Brasília/DF, não em "Cidade Exemplo". O mapa mostrará Brasília.
5. **Domínio `.exemplo`** não existe: e-mail e Instagram são ilustrativos.
6. **Feriados e intervalo de almoço** não informados.
7. **Telefone fixo**: não informado; foi usado o mesmo número do WhatsApp.

## 5. Instruções para o desenvolvedor

- Na seção de **Localização e contato**, inserir o **mapa interativo do Google** (autorização permanente do usuário; não perguntar de novo):

```html
<iframe
  src="https://www.google.com/maps?q=-15.793889,-47.882778&z=16&output=embed"
  title="Mapa da localização da Futebol Kids (endereço fictício)"
  width="600" height="400" style="border:0;"
  loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
```

- Manter o **endereço em texto** ao lado/abaixo do mapa e os links **"Abrir no Google Maps"** e **"Como chegar"** (seção 2), com `target="_blank" rel="noopener"`.
- Deixar o iframe responsivo (largura 100%, proporção fixa via `aspect-ratio`) e com fundo/placeholder enquanto carrega.
- CTA principal "Aula grátis" deve usar o link de WhatsApp com mensagem (seção 2).
- Incluir no rodapé o aviso "Site de demonstração — dados fictícios".
- Usar este arquivo como única fonte dos dados de contato; ao receber os dados reais, trocar só aqui e no site.
