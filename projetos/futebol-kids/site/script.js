/* Futebol Kids · script.js (sem dependências) */
(function () {
  'use strict';

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
  var temIO = 'IntersectionObserver' in window;

  /* ---------- Cabeçalho: sombra ao rolar ---------- */
  var header = document.querySelector('.site-header');
  function atualizaHeader() {
    if (header) header.classList.toggle('is-rolado', window.scrollY > 8);
  }
  atualizaHeader();
  window.addEventListener('scroll', atualizaHeader, { passive: true });

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  var mqMenu = window.matchMedia('(max-width: 1099px)');

  function menuAberto() { return toggle && toggle.getAttribute('aria-expanded') === 'true'; }

  function abreMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    menu.classList.add('is-aberto');
    document.body.classList.add('menu-aberto');
    var primeiro = menu.querySelector('a');
    if (primeiro) primeiro.focus();
  }

  function fechaMenu(devolveFoco) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    menu.classList.remove('is-aberto');
    document.body.classList.remove('menu-aberto');
    if (devolveFoco) toggle.focus();
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (menuAberto()) fechaMenu(false); else abreMenu();
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a') && menuAberto()) fechaMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (!menuAberto()) return;
      if (e.key === 'Escape') {
        fechaMenu(true);
        return;
      }
      if (e.key === 'Tab') {
        // Prende o foco no cabeçalho (logo, CTA, botão e links do painel)
        var focaveis = Array.prototype.slice.call(
          header.querySelectorAll('a[href], button:not([disabled])')
        ).filter(function (el) { return el.offsetParent !== null; });
        if (!focaveis.length) return;
        var primeiro = focaveis[0];
        var ultimo = focaveis[focaveis.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault(); ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault(); primeiro.focus();
        } else if (!header.contains(document.activeElement)) {
          e.preventDefault(); primeiro.focus();
        }
      }
    });

    var aoMudarMq = function () { if (!mqMenu.matches && menuAberto()) fechaMenu(false); };
    if (mqMenu.addEventListener) mqMenu.addEventListener('change', aoMudarMq);
  }

  /* ---------- Scrollspy ---------- */
  var linksNav = menu ? Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]')) : [];
  if (temIO && linksNav.length) {
    var mapaLinks = {};
    linksNav.forEach(function (a) { mapaLinks[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        linksNav.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = mapaLinks[en.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(mapaLinks).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) spy.observe(sec);
    });
  }

  /* ---------- Seletor de idade -> card da turma ---------- */
  document.querySelectorAll('.chip[data-turma]').forEach(function (chip) {
    chip.addEventListener('click', function (e) {
      var card = document.getElementById(chip.getAttribute('data-turma'));
      if (!card) return;
      e.preventDefault();
      card.classList.add('is-visivel'); // garante que não está oculto pelo reveal
      card.scrollIntoView({ behavior: reduzMovimento.matches ? 'auto' : 'smooth', block: 'start' });
      var titulo = card.querySelector('.turma-titulo');
      if (titulo) titulo.focus({ preventScroll: true });
      if (history.replaceState) history.replaceState(null, '', '#' + card.id);
      card.classList.remove('is-destacado');
      void card.offsetWidth;
      card.classList.add('is-destacado');
      window.setTimeout(function () { card.classList.remove('is-destacado'); }, 1600);
    });
  });

  /* ---------- Revelar ao rolar ---------- */
  var reveals = document.querySelectorAll('.reveal, .linha-tempo, .cta-final');
  if (temIO && !reduzMovimento.matches) {
    var obsReveal = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visivel');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { obsReveal.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visivel'); });
  }

  /* ---------- Carrossel de depoimentos (scroll-snap) ---------- */
  var trilho = document.querySelector('.carrossel-trilho');
  var controles = document.querySelector('.carrossel-controles');
  if (trilho && controles) {
    var slides = Array.prototype.slice.call(trilho.children);
    var setas = controles.querySelectorAll('.carrossel-seta');
    var pontos = controles.querySelectorAll('.carrossel-ponto');
    controles.hidden = false;

    var indiceAtual = function () {
      var inicio = trilho.getBoundingClientRect().left;
      var melhor = 0, menor = Infinity;
      slides.forEach(function (s, i) {
        var d = Math.abs(s.getBoundingClientRect().left - inicio - 4);
        if (d < menor) { menor = d; melhor = i; }
      });
      // no fim do trilho, considera o último
      if (trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4) melhor = slides.length - 1;
      return melhor;
    };

    var irPara = function (i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      var alvo = slides[i].offsetLeft - slides[0].offsetLeft;
      trilho.scrollTo({ left: alvo, behavior: reduzMovimento.matches ? 'auto' : 'smooth' });
    };

    var atualiza = function () {
      var i = indiceAtual();
      var noInicio = trilho.scrollLeft <= 4;
      var noFim = trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4;
      setas[0].setAttribute('aria-disabled', noInicio ? 'true' : 'false');
      setas[1].setAttribute('aria-disabled', noFim ? 'true' : 'false');
      pontos.forEach(function (p, n) {
        if (n === i) p.setAttribute('aria-current', 'true'); else p.removeAttribute('aria-current');
      });
    };

    setas.forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.getAttribute('aria-disabled') === 'true') return;
        irPara(indiceAtual() + Number(b.getAttribute('data-dir')));
      });
    });
    pontos.forEach(function (p) {
      p.addEventListener('click', function () { irPara(Number(p.getAttribute('data-indice'))); });
    });
    trilho.addEventListener('keydown', function (e) {
      if (e.target !== trilho) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); irPara(indiceAtual() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); irPara(indiceAtual() - 1); }
    });

    var pendente = null;
    trilho.addEventListener('scroll', function () {
      if (pendente) return;
      pendente = window.requestAnimationFrame(function () { pendente = null; atualiza(); });
    }, { passive: true });
    window.addEventListener('resize', atualiza);
    atualiza();
  }

  /* ---------- Mapa: esconde o "carregando" quando o iframe carrega ---------- */
  var iframe = document.querySelector('.mapa iframe');
  var placeholder = document.querySelector('.mapa-placeholder');
  if (iframe && placeholder) {
    iframe.addEventListener('load', function () { placeholder.classList.add('is-carregado'); });
  }

  /* ---------- Botão flutuante do WhatsApp ---------- */
  var fab = document.querySelector('.fab-whatsapp');
  if (fab && temIO) {
    var placar = document.getElementById('placar');
    var alvosOcultar = [document.getElementById('contato'), document.getElementById('aula-gratis')];
    var estado = { placarVisivel: true, finalVisivel: {} };

    var aplica = function () {
      var algumFinal = Object.keys(estado.finalVisivel).some(function (k) { return estado.finalVisivel[k]; });
      fab.classList.toggle('is-oculto', estado.placarVisivel || algumFinal);
    };

    fab.classList.add('is-oculto');
    var obsFab = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.target === placar) {
          // visível ou ainda abaixo do topo (início da página)
          estado.placarVisivel = en.isIntersecting || en.boundingClientRect.top > 0;
        } else {
          estado.finalVisivel[en.target.id] = en.isIntersecting;
        }
      });
      aplica();
    });
    if (placar) obsFab.observe(placar);
    alvosOcultar.forEach(function (el) { if (el) obsFab.observe(el); });
  }
})();
