/* Arena Fight Sobradinho - interações (sem dependências) */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('menu');
  var bar = document.getElementById('cta-bar');
  var desktopMQ = window.matchMedia('(min-width: 1024px)');
  var hasIO = 'IntersectionObserver' in window;

  /* ---------- Header: fundo após rolar ---------- */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  function isOpen() { return toggle.getAttribute('aria-expanded') === 'true'; }

  function focusables() {
    return Array.prototype.slice.call(nav.querySelectorAll('a[href], button:not([disabled])'));
  }

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    header.classList.add('is-open');
    document.body.classList.add('menu-open');
    updateBar();
    var first = focusables()[0];
    if (first) first.focus();
  }

  function closeMenu(returnFocus) {
    if (!isOpen()) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    header.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    updateBar();
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (isOpen()) closeMenu(true); else openMenu();
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') {
      closeMenu(true);
      return;
    }
    if (e.key === 'Tab') {
      // Mantém o foco entre o botão do menu e os itens do painel
      var items = [toggle].concat(focusables());
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  function onDesktopChange(e) {
    if (e.matches) closeMenu(false);
  }
  // M5: Safari < 14 só tem addListener no MediaQueryList
  if (desktopMQ.addEventListener) {
    desktopMQ.addEventListener('change', onDesktopChange);
  } else if (desktopMQ.addListener) {
    desktopMQ.addListener(onDesktopChange);
  }

  /* ---------- Barra CTA fixa ---------- */
  var barBlockers = new Set();

  function updateBar() {
    if (!bar) return;
    bar.classList.toggle('is-hidden', barBlockers.size > 0 || isOpen());
  }

  if (bar && hasIO) {
    var blockerIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) barBlockers.add(entry.target);
        else barBlockers.delete(entry.target);
      });
      updateBar();
    });
    ['hero-cta', 'cta-final', 'rodape'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) blockerIO.observe(el);
    });
  }

  /* ---------- Seção ativa na navegação ---------- */
  if (hasIO) {
    var links = {};
    nav.querySelectorAll('.nav-list a[href^="#"]').forEach(function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });
    var sectionIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = links[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].removeAttribute('aria-current'); });
          link.setAttribute('aria-current', 'true');
        } else if (link.getAttribute('aria-current')) {
          link.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) sectionIO.observe(sec);
    });
  }

  /* ---------- Revelação ao rolar ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (!hasIO || reduceMotion) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealIO = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { revealIO.observe(el); });
  }

  /* ---------- Filtro da grade de horários ---------- */
  var filter = document.querySelector('.filter');
  if (filter) {
    filter.hidden = false;
    var buttons = filter.querySelectorAll('[data-filter]');
    var cells = document.querySelectorAll('.grade td[data-mod]');
    filter.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      var value = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      cells.forEach(function (td) {
        td.classList.toggle('is-dim', value !== 'all' && td.getAttribute('data-mod') !== value);
      });
    });
  }
})();
