"""Monta a pasta de publicação do GitHub Pages.

Copia cada projetos/<nome>/site/ para _publicar/<nome>/ e gera a vitrine
(_publicar/index.html) com um card por site. Projeto novo com site/index.html
entra sozinho na vitrine.

Uso (na raiz do repositório):  python3 vitrine/montar.py
"""
import datetime
import html
import re
import shutil
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PROJETOS = RAIZ / "projetos"
VITRINE = RAIZ / "vitrine"
SAIDA = RAIZ / "_publicar"

# Arquivos de trabalho que não precisam ir para a internet
IGNORAR = shutil.ignore_patterns("*.md", ".DS_Store", "Thumbs.db")

SETA = ('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">'
        '<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" '
        'stroke-linecap="round" stroke-linejoin="round"/></svg>')


def ler_meta(index: Path):
    texto = index.read_text(encoding="utf-8", errors="ignore")
    titulo = re.search(r"<title>(.*?)</title>", texto, re.S | re.I)
    desc = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', texto, re.I)
    titulo = html.unescape(titulo.group(1).strip()) if titulo else index.parent.parent.name
    desc = html.unescape(desc.group(1).strip()) if desc else ""
    partes = re.split(r"\s+[|·–-]\s+", titulo, maxsplit=1)
    nome = partes[0]
    subtitulo = partes[1] if len(partes) > 1 else ""
    return nome, subtitulo, desc


def card(slug, nome, subtitulo, desc, tem_webp, tem_jpg):
    e = html.escape
    imagem = ""
    if tem_jpg:
        fonte_webp = f'<source srcset="capas/{slug}.webp" type="image/webp">' if tem_webp else ""
        imagem = (f'<picture>{fonte_webp}<img src="capas/{slug}.jpg" alt="" width="800" '
                  f'height="500" loading="lazy" decoding="async"></picture>')
    sub = f'<p class="tagline">{e(subtitulo)}</p>' if subtitulo else ""
    return (f'      <li class="card">\n'
            f'        {imagem}\n'
            f'        <div class="card-body">\n'
            f'          <h2><a href="{slug}/">{e(nome)}</a></h2>\n'
            f'          {sub}\n'
            f'          <p class="desc">{e(desc)}</p>\n'
            f'          <span class="open" aria-hidden="true">Abrir site {SETA}</span>\n'
            f'        </div>\n'
            f'      </li>')


def main():
    if SAIDA.exists():
        shutil.rmtree(SAIDA)
    (SAIDA / "capas").mkdir(parents=True)

    cards = []
    for site in sorted(PROJETOS.glob("*/site")):
        index = site / "index.html"
        if not index.is_file():
            continue
        slug = site.parent.name
        shutil.copytree(site, SAIDA / slug, ignore=IGNORAR)

        tem = {}
        for ext in ("webp", "jpg"):
            capa = VITRINE / "capas" / f"{slug}.{ext}"
            tem[ext] = capa.is_file()
            if tem[ext]:
                shutil.copy2(capa, SAIDA / "capas" / capa.name)

        nome, subtitulo, desc = ler_meta(index)
        cards.append(card(slug, nome, subtitulo, desc, tem["webp"], tem["jpg"]))
        print(f"  + {slug}")

    modelo = (VITRINE / "modelo.html").read_text(encoding="utf-8")
    pagina = (modelo
              .replace("{{CARDS}}", "\n".join(cards))
              .replace("{{TOTAL}}", str(len(cards)))
              .replace("{{PIXELS}}", "<span></span>" * 36)
              .replace("{{DATA}}", datetime.date.today().strftime("%d/%m/%Y")))
    (SAIDA / "index.html").write_text(pagina, encoding="utf-8")
    print(f"Vitrine montada com {len(cards)} sites em {SAIDA.name}/")


if __name__ == "__main__":
    main()
