<div align="center">

# 🥖 Padaria Trigo Doce

### Padaria e confeitaria artesanal, com encomendas pelo WhatsApp

*"Feito com carinho, todo dia."*

![Status](https://img.shields.io/badge/status-prot%C3%B3tipo%20de%20teste-8250DF?style=flat-square)
![Avaliação](https://img.shields.io/badge/avalia%C3%A7%C3%A3o-n%C3%A3o%20realizada-999?style=flat-square)
![Dados](https://img.shields.io/badge/dados-fict%C3%ADcios-D9A441?style=flat-square)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

<table>
  <tr>
    <td width="74%"><img src="docs/preview-desktop.png" alt="Padaria Trigo Doce no desktop"></td>
    <td width="26%"><img src="docs/preview-celular.png" alt="Padaria Trigo Doce no celular"></td>
  </tr>
  <tr>
    <td align="center"><sub>Desktop · 1280 px</sub></td>
    <td align="center"><sub>Celular</sub></td>
  </tr>
</table>

---

## 📌 Sobre

**Projeto de teste** do fluxo do Esquadrão Pixel. Todos os dados são fictícios e não houve entrevista. É a landing page de uma padaria de bairro, com visual **claro e quente** que lembra o cheirinho de pão saindo do forno. O objetivo é levar o visitante a **encomendar pelo WhatsApp** (bolos, tortas, salgados para festas, cestas de café da manhã) e a visitar a loja.

| | |
|---|---|
| **Público** | Famílias do bairro, de 25 a 60 anos, e quem organiza aniversários e cafés da manhã |
| **Tom de voz** | Acolhedor, afetivo, caseiro e apetitoso |
| **CTA principal** | Encomendar pelo WhatsApp |
| **CTA secundário** | Ver produtos do dia |

---

## 🧭 Seções

1. **Hero** com selo "Forno a lenha · Fermentação natural" e informações rápidas
2. **Destaques do dia**: pães, doces, bolos e salgados com preços de exemplo
3. **Encomendas para festas**, com o passo a passo de como encomendar
4. **Sobre**: "Uma receita de família desde 1998"
5. **Equipe**: "Mãos que fazem a Trigo Doce"
6. **Depoimentos**: "O que dizem os vizinhos" (exemplos)
7. **Horários e endereço**, com link de mapa genérico (sem iframe, porque o endereço é fictício)
8. **CTA final**: "Bateu vontade? A gente prepara para você."
9. **Rodapé** com aviso de site de demonstração

---

## 🎨 Design system

**Conceito:** padaria artesanal com afeto. Fundo creme, tons de casca de pão e café, terracota nos CTAs e mel nos detalhes.

| Cor | Token | Hex | Uso |
|:-:|---|---|---|
| ![](https://placehold.co/28x28/FBF5EC/FBF5EC.png) | `--cor-creme` | `#FBF5EC` | Fundo |
| ![](https://placehold.co/28x28/3B2A1E/3B2A1E.png) | `--cor-cafe` | `#3B2A1E` | Texto e títulos |
| ![](https://placehold.co/28x28/6B4F3A/6B4F3A.png) | `--cor-marrom` | `#6B4F3A` | Texto de apoio |
| ![](https://placehold.co/28x28/A0482A/A0482A.png) | `--cor-terracota` | `#A0482A` | CTAs |
| ![](https://placehold.co/28x28/D9A441/D9A441.png) | `--cor-mel` | `#D9A441` | Selo e detalhes |

**Tipografia:** [Fraunces](https://fonts.google.com/specimen/Fraunces) nos títulos, com personalidade artesanal, e [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) no texto.

---

## 📊 Avaliação

Este protótipo **não passou pelo ciclo formal** de inspeção visual e avaliações (etapas 6 a 8). Ele serviu para testar as etapas de pesquisa, design, imagens e desenvolvimento.

---

## 🚀 Como abrir

```bash
cd projetos/padaria-trigo-doce/site
# duplo clique em index.html, ou:
python -m http.server 8080   # http://localhost:8080
```

---

## 📁 Arquivos do projeto

| Arquivo | Etapa | Conteúdo |
|---|---|---|
| [`briefing.md`](briefing.md) | 0 | Pedido e premissas (todos os dados fictícios) |
| [`pesquisa.md`](pesquisa.md) | 1 | Referências |
| [`design.md`](design.md) | 2 | Design system |
| [`imagens.md`](imagens.md) | 4 | Créditos e licenças |
| [`site/`](site/) | 5 | `index.html`, `styles.css`, `script.js`, [`CHANGELOG.md`](site/CHANGELOG.md), `assets/` |

---

## ⚠️ Para virar um site real

- [ ] Rodar as etapas 6 a 8 (inspeção visual e avaliações)
- [ ] Trocar os dados fictícios: Rua das Flores, 250; WhatsApp `(00) 90000-0000`; Instagram e horários
- [ ] Coordenadas reais, para o mapa interativo
- [ ] Fotos reais dos produtos, da loja e da equipe
- [ ] Preços e depoimentos reais, e tirar o aviso de demonstração
- [ ] JSON-LD (`Bakery`) e domínio

---

## 📸 Créditos

As fotos vêm de Unsplash e Wikimedia Commons e são ilustrativas. Os SVGs são originais. Os detalhes estão em [`imagens.md`](imagens.md).

<div align="center"><sub>Parte do <a href="../../README.md">Esquadrão Pixel</a></sub></div>
