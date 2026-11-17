/* Sergio Ribeiro · Influenciador de Esperança
   JS mínimo, sem dependências. Carregado com defer. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var temIO = 'IntersectionObserver' in window;

  /* ---------- Cabeçalho: borda e sombra ao rolar ---------- */
  var header = document.querySelector('.site-header');
  function aoRolar() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu-principal');
  var desktop = window.matchMedia('(min-width: 1024px)');

  function menuAberto() {
    return toggle && toggle.getAttribute('aria-expanded') === 'true';
  }

  function abrirMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', toggle.dataset.labelClose);
    menu.classList.add('is-open');
    document.body.classList.add('menu-aberto');
  }

  function fecharMenu(devolverFoco) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', toggle.dataset.labelOpen);
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-aberto');
    if (devolverFoco) toggle.focus();
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (menuAberto()) fecharMenu(false); else abrirMenu();
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a') && menuAberto()) fecharMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuAberto()) fecharMenu(true);
    });

    document.addEventListener('click', function (e) {
      if (menuAberto() && !menu.contains(e.target) && !toggle.contains(e.target)) {
        fecharMenu(false);
      }
    });

    var aoMudarLargura = function (mq) {
      if (mq.matches && menuAberto()) fecharMenu(false);
    };
    if (desktop.addEventListener) desktop.addEventListener('change', aoMudarLargura);
    else if (desktop.addListener) desktop.addListener(aoMudarLargura);
  }

  /* ---------- Link ativo na navegação ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  if (temIO && links.length) {
    var secoes = links
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);

    var marcarAtivo = function (id) {
      links.forEach(function (a) {
        if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };

    var ioNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) marcarAtivo(en.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    secoes.forEach(function (s) { ioNav.observe(s); });

    // Limpa o ativo quando o hero volta à tela
    var heroNav = document.getElementById('inicio');
    if (heroNav) {
      new IntersectionObserver(function (entradas) {
        if (entradas[0].isIntersecting) marcarAtivo('');
      }, { rootMargin: '-45% 0px -50% 0px' }).observe(heroNav);
    }
  }

  /* ---------- Entrada ao rolar ---------- */
  var revelar = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

  // Atraso escalonado nos cards em grade (80ms, máx. 4 itens)
  ['.cards-versiculos', '.canais'].forEach(function (sel) {
    var grade = document.querySelector(sel);
    if (!grade) return;
    Array.prototype.forEach.call(grade.children, function (item, i) {
      item.style.setProperty('--reveal-delay', Math.min(i, 3) * 80 + 'ms');
    });
  });

  if (reduz || !temIO) {
    revelar.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var ioReveal = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    revelar.forEach(function (el) { ioReveal.observe(el); });
  }

  /* ---------- Barra fixa "Fale comigo" (mobile) ---------- */
  var barra = document.querySelector('[data-barra]');
  var hero = document.getElementById('inicio');
  var contato = document.getElementById('contato');

  if (barra && hero && contato && temIO) {
    var heroVisivel = true;
    var contatoVisivel = false;

    var atualizarBarra = function () {
      barra.classList.toggle('is-visible', !heroVisivel && !contatoVisivel);
    };

    new IntersectionObserver(function (entradas) {
      heroVisivel = entradas[0].isIntersecting;
      atualizarBarra();
    }).observe(hero);

    new IntersectionObserver(function (entradas) {
      contatoVisivel = entradas[0].isIntersecting;
      atualizarBarra();
    }).observe(contato);
  }

  /* Sinaliza ao fallback do <head> que o script rodou até o fim.
     Se este arquivo falhar, a classe .js é removida no load e o conteúdo aparece. */
  window.srPronto = true;
})();
