/* Barbearia Navalha - script.js (sem dependências, carregado com defer) */
(function () {
  'use strict';

  var root = document.documentElement;
  var header = document.querySelector('.site-header');
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.menu-toggle');
  var desktopQuery = window.matchMedia('(min-width: 900px)');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Cabeçalho com scroll ---------- */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  function setMenu(open, returnFocus) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    if (!open && returnFocus) {
      toggle.focus();
    }
  }

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(!isOpen(), false);
      if (isOpen()) {
        var first = nav.querySelector('a');
        if (first) first.focus();
      }
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a') && isOpen()) {
        setMenu(false, false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        setMenu(false, true);
      }
    });

    /* Mantém o foco dentro do header enquanto o menu está aberto */
    document.addEventListener('focusin', function (event) {
      if (isOpen() && !header.contains(event.target)) {
        toggle.focus();
      }
    });

    var onBreakpoint = function (event) {
      if (event.matches && isOpen()) setMenu(false, false);
    };
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', onBreakpoint);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(onBreakpoint);
    }
  }

  /* ---------- Link da seção atual (aria-current) ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-list a[href^="#"]'));

  if ('IntersectionObserver' in window && navLinks.length) {
    var linkById = {};
    navLinks.forEach(function (link) {
      linkById[link.getAttribute('href').slice(1)] = link;
    });

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) { link.removeAttribute('aria-current'); });
        var active = linkById[entry.target.id];
        if (active) active.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('main section[id]').forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Revelação ao rolar ---------- */
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var items = document.querySelectorAll('.reveal');
    root.classList.add('reveal-ready');

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    items.forEach(function (item) { revealObserver.observe(item); });
  }
})();
