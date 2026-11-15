/* Emmeline Crochê — interações mínimas, sem dependências. */
(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;

  /* A classe "js" só existe se este script rodar: sem ele, o CSS mantém
     todo o conteúdo visível e a navegação estática no celular. */
  root.classList.add("js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hasIO = "IntersectionObserver" in window;

  /* ---------- Cabeçalho: estado ao rolar ---------- */
  var header = doc.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var toggle = doc.querySelector(".menu-toggle");
  var nav = doc.getElementById("menu");
  var desktopMQ = window.matchMedia("(min-width: 900px)");

  function isOpen() {
    return toggle && toggle.getAttribute("aria-expanded") === "true";
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    header.classList.add("is-open");
    doc.body.classList.add("menu-open");
    var first = nav.querySelector("a");
    if (first) first.focus();
  }

  function closeMenu(returnFocus) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    header.classList.remove("is-open");
    doc.body.classList.remove("menu-open");
    if (returnFocus) toggle.focus();
  }

  if (toggle && nav && header) {
    toggle.addEventListener("click", function () {
      if (isOpen()) closeMenu(true); else openMenu();
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && isOpen()) closeMenu(false);
    });

    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) closeMenu(true);
    });

    /* Ao sair do menu com Tab, fecha sem prender o foco */
    nav.addEventListener("focusout", function (e) {
      if (!isOpen()) return;
      var next = e.relatedTarget;
      if (next && !nav.contains(next) && next !== toggle) closeMenu(false);
    });

    var onMQ = function (e) { if (e.matches && isOpen()) closeMenu(false); };
    if (desktopMQ.addEventListener) desktopMQ.addEventListener("change", onMQ);
    else if (desktopMQ.addListener) desktopMQ.addListener(onMQ);
  }

  /* ---------- Link ativo na navegação ---------- */
  var navLinks = Array.prototype.slice.call(doc.querySelectorAll(".site-nav__link"));
  if (hasIO && navLinks.length) {
    var linkById = {};
    navLinks.forEach(function (link) {
      linkById[link.getAttribute("href").slice(1)] = link;
    });
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (l) { l.removeAttribute("aria-current"); });
        var link = linkById[entry.target.id];
        if (link) link.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    doc.querySelectorAll("main > section[id]").forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------- Revelação ao rolar ---------- */
  var reveals = Array.prototype.slice.call(doc.querySelectorAll(".reveal"));

  /* Atraso escalonado de 80ms (máx. 400ms) dentro de cada grade */
  [".products", ".steps", ".features", ".testimonials"].forEach(function (sel) {
    var list = doc.querySelector(sel);
    if (!list) return;
    Array.prototype.forEach.call(list.children, function (item, i) {
      if (item.classList.contains("reveal")) {
        item.style.setProperty("--reveal-delay", Math.min(i * 80, 400) + "ms");
      }
    });
  });

  if (!hasIO || reduceMotion.matches) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Botão flutuante (só < 900px pelo CSS) ---------- */
  var fab = doc.querySelector(".fab");
  var heroCta = doc.getElementById("hero-cta");
  var hideZones = [doc.getElementById("encomendar"), doc.querySelector(".site-footer")].filter(Boolean);

  if (fab && heroCta && hasIO) {
    var heroGone = false;
    var inHideZone = new Set();

    var updateFab = function () {
      fab.classList.toggle("is-visible", heroGone && inHideZone.size === 0);
    };

    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        heroGone = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      });
      updateFab();
    }).observe(heroCta);

    var zoneObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) inHideZone.add(entry.target);
        else inHideZone.delete(entry.target);
      });
      updateFab();
    });
    hideZones.forEach(function (z) { zoneObserver.observe(z); });
  } else if (fab) {
    fab.classList.add("is-visible");
  }

  /* ---------- Avatares: iniciais como fallback se o retrato falhar ---------- */
  doc.querySelectorAll(".avatar__img").forEach(function (img) {
    var fallback = function () {
      var avatar = img.closest(".avatar");
      if (avatar) avatar.classList.add("is-fallback");
    };
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
      /* Já terminou de carregar sem sucesso (lazy ainda não carregado tem complete=false) */
      fallback();
    }
    img.addEventListener("error", fallback);
  });

  root.classList.add("js-ready");
})();
