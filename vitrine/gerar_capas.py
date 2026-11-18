"""Gera as capas da vitrine (vitrine/capas/<nome>.webp e .jpg, 800x500).

Abre cada projetos/<nome>/site/index.html num navegador sem janela (Chrome,
Chromium ou Edge), captura a primeira dobra em 1280x800 e reduz para 800x500.

Uso (na raiz do repositório):
  python vitrine/gerar_capas.py                  # só as capas que faltam
  python vitrine/gerar_capas.py rosa-bordo       # um projeto (refaz a capa)
  python vitrine/gerar_capas.py --todas          # refaz todas

Precisa do Pillow (pip install pillow). O navegador pode ser indicado pela
variável de ambiente NAVEGADOR; senão é procurado nos caminhos comuns.
"""
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PROJETOS = RAIZ / "projetos"
CAPAS = RAIZ / "vitrine" / "capas"
LARGURA, ALTURA = 1280, 800      # tela capturada
FINAL = (800, 500)               # tamanho da capa

CANDIDATOS = [
    "google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "msedge",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]


def achar_navegador():
    indicado = os.environ.get("NAVEGADOR")
    for nome in ([indicado] if indicado else []) + CANDIDATOS:
        caminho = shutil.which(nome) or (nome if Path(nome).is_file() else None)
        if caminho:
            return caminho
    sys.exit("Nenhum navegador encontrado. Instale o Chrome/Edge ou defina NAVEGADOR.")


def capturar(navegador, index: Path, destino_png: Path):
    with tempfile.TemporaryDirectory() as perfil:
        cmd = [
            navegador, "--headless=new", "--disable-gpu", "--hide-scrollbars",
            "--no-first-run", "--no-default-browser-check", "--mute-audio",
            f"--user-data-dir={perfil}",
            f"--window-size={LARGURA},{ALTURA}",
            "--virtual-time-budget=6000",
            f"--screenshot={destino_png}",
            index.resolve().as_uri(),
        ]
        if sys.platform.startswith("linux"):
            cmd.insert(1, "--no-sandbox")
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=90)
    return destino_png.is_file() and destino_png.stat().st_size > 0


def salvar(png: Path, slug: str):
    from PIL import Image
    im = Image.open(png).convert("RGB")
    im = im.crop((0, 0, min(im.width, LARGURA), min(im.height, ALTURA)))
    im = im.resize(FINAL, Image.LANCZOS)
    CAPAS.mkdir(parents=True, exist_ok=True)
    im.save(CAPAS / f"{slug}.webp", "WEBP", quality=78, method=6)
    im.save(CAPAS / f"{slug}.jpg", "JPEG", quality=80, optimize=True, progressive=True)


def main(args):
    todas = "--todas" in args
    nomes = [a for a in args if not a.startswith("--")]

    sites = sorted(p.parent for p in PROJETOS.glob("*/site/index.html"))
    if nomes:
        sites = [s for s in sites if s.parent.name in nomes]
        faltando = set(nomes) - {s.parent.name for s in sites}
        if faltando:
            print("Sem site/index.html:", ", ".join(sorted(faltando)))
    elif not todas:
        sites = [s for s in sites if not (CAPAS / f"{s.parent.name}.jpg").is_file()]

    if not sites:
        print("Nenhuma capa para gerar.")
        return 0

    navegador = achar_navegador()
    erros = 0
    with tempfile.TemporaryDirectory() as tmp:
        for site in sites:
            slug = site.parent.name
            png = Path(tmp) / f"{slug}.png"
            if capturar(navegador, site / "index.html", png):
                salvar(png, slug)
                print(f"  capa gerada: {slug}")
            else:
                erros += 1
                print(f"  FALHOU: {slug}")
    return 1 if erros else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
