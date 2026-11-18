/* Padaria Trigo Doce | interações (sem dependências) */
(function () {
  "use strict";

  var reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var temIO = "IntersectionObserver" in window;

  /* Cabeçalho: sombra ao rolar */
  var cabecalho = document.getElementById("cabecalho");
  function aoRolar() {
    cabecalho.classList.toggle("cabecalho--rolado", window.scrollY > 8);
  }
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  /* Menu móvel */
  var botaoMenu = document.querySelector(".nav__botao");
  var nav = document.querySelector(".nav");
  function menuAberto() { return botaoMenu.getAttribute("aria-expanded") === "true"; }
  function abrirMenu() {
    botaoMenu.setAttribute("aria-expanded", "true");
    botaoMenu.setAttribute("aria-label", "Fechar menu");
    nav.classList.add("nav--aberta");
  }
  function fecharMenu(devolverFoco) {
    if (!menuAberto()) return;
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("nav--aberta");
    if (devolverFoco) botaoMenu.focus();
  }
  botaoMenu.addEventListener("click", function () {
    if (menuAberto()) fecharMenu(false); else abrirMenu();
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) fecharMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuAberto()) fecharMenu(true);
  });
  document.addEventListener("click", function (e) {
    if (menuAberto() && !e.target.closest(".nav") && !e.target.closest(".nav__botao")) fecharMenu(false);
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", function (m) {
    if (m.matches) fecharMenu(false);
  });

  /* Filtro de produtos */
  var chips = document.querySelectorAll(".chip");
  var cards = document.querySelectorAll(".card-produto");
  var status = document.getElementById("filtro-status");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var filtro = chip.getAttribute("data-filtro");
      var total = 0;
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      cards.forEach(function (card) {
        var mostra = filtro === "todos" || card.getAttribute("data-categoria") === filtro;
        card.hidden = !mostra;
        if (mostra) { total += 1; card.classList.add("revelado"); }
      });
      var nome = filtro === "todos" ? "todas as categorias" : chip.textContent.trim();
      status.textContent = total + (total === 1 ? " produto em " : " produtos em ") + nome;
    });
  });

  /* Horários: destaca o dia de hoje */
  var hoje = new Date().getDay();
  document.querySelectorAll(".horarios tr[data-dias]").forEach(function (linha) {
    var dias = linha.getAttribute("data-dias").split(",");
    if (dias.indexOf(String(hoje)) !== -1) {
      linha.classList.add("hoje");
      var selo = document.createElement("span");
      selo.className = "hoje__selo";
      selo.textContent = "Hoje";
      linha.querySelector("th").appendChild(selo);
    }
  });

  /* Animação de entrada */
  var revelar = document.querySelectorAll(".revelar");
  if (reduzMovimento || !temIO) {
    revelar.forEach(function (el) { el.classList.add("revelado"); });
  } else {
    var ioRevelar = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("revelado");
          ioRevelar.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revelar.forEach(function (el) { ioRevelar.observe(el); });
  }

  /* Barra fixa no celular: aparece após o hero e some no CTA final */
  var barra = document.getElementById("barra-mobile");
  var hero = document.getElementById("inicio");
  var cta = document.getElementById("encomendar");
  if (barra && !temIO) barra.classList.add("barra-mobile--pronta");
  if (barra && temIO) {
    var heroVisivel = true;
    var ctaVisivel = false;
    var atualizarBarra = function () {
      var oculta = heroVisivel || ctaVisivel;
      barra.classList.toggle("barra-mobile--oculta", oculta);
    };
    new IntersectionObserver(function (en) {
      heroVisivel = en[0].isIntersecting; atualizarBarra();
    }).observe(hero);
    new IntersectionObserver(function (en) {
      ctaVisivel = en[0].isIntersecting; atualizarBarra();
    }).observe(cta);
    atualizarBarra();
    /* Libera a transição só depois do 1º estado, para a barra não deslizar ao carregar */
    requestAnimationFrame(function () { barra.classList.add("barra-mobile--pronta"); });
  }

  /* Navegação: item ativo por seção */
  var links = document.querySelectorAll(".nav__lista a");
  if (temIO) {
    var mapa = {};
    links.forEach(function (a) { mapa[a.getAttribute("href").slice(1)] = a; });
    var ioNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        var alvo = mapa[en.target.id];
        if (alvo) alvo.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { ioNav.observe(s); });
  }
})();
