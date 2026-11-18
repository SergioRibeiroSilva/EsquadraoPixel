/* Rosa Bordô — interações (JS puro, sem dependências) */
(function () {
  'use strict';

  var mqReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Cabeçalho: borda ao rolar ---------- */
  var cabecalho = document.getElementById('cabecalho');
  function aoRolar() {
    if (cabecalho) cabecalho.classList.toggle('is-rolado', window.scrollY > 8);
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  /* ---------- Menu mobile ---------- */
  var nav = document.getElementById('menu');
  var botaoAbrir = document.querySelector('[data-menu-abrir]');
  var botaoFechar = document.querySelector('[data-menu-fechar]');
  var mqDesktop = window.matchMedia('(min-width: 1024px)');

  function focaveis(el) {
    return Array.prototype.filter.call(
      el.querySelectorAll('a[href], button:not([disabled])'),
      function (n) { return n.offsetParent !== null; }
    );
  }

  function abrirMenu() {
    nav.classList.add('is-aberto');
    botaoAbrir.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-aberto');
    var f = focaveis(nav);
    if (f.length) f[0].focus();
  }
  function fecharMenu(devolverFoco) {
    if (!nav.classList.contains('is-aberto')) return;
    nav.classList.remove('is-aberto');
    botaoAbrir.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-aberto');
    if (devolverFoco) botaoAbrir.focus();
  }

  if (nav && botaoAbrir) {
    botaoAbrir.addEventListener('click', abrirMenu);
    if (botaoFechar) botaoFechar.addEventListener('click', function () { fecharMenu(true); });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fecharMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (!nav.classList.contains('is-aberto')) return;
      if (e.key === 'Escape') { fecharMenu(true); return; }
      if (e.key === 'Tab') {
        var f = focaveis(nav);
        if (!f.length) return;
        var primeiro = f[0], ultimo = f[f.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
        else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
      }
    });
    mqDesktop.addEventListener('change', function (e) { if (e.matches) fecharMenu(false); });
  }

  /* ---------- Link ativo no menu ---------- */
  var linksNav = nav ? nav.querySelectorAll('.nav__lista a') : [];
  if ('IntersectionObserver' in window && linksNav.length) {
    var mapa = {};
    Array.prototype.forEach.call(linksNav, function (a) {
      var sec = document.querySelector(a.getAttribute('href'));
      if (sec) mapa[sec.id] = a;
    });
    var obsNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        Array.prototype.forEach.call(linksNav, function (a) { a.removeAttribute('aria-current'); });
        var link = mapa[en.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(mapa).forEach(function (id) { obsNav.observe(document.getElementById(id)); });
  }

  /* ---------- Revelação suave ---------- */
  var revelar = document.querySelectorAll('[data-revelar]');
  if ('IntersectionObserver' in window && !mqReduzido.matches && revelar.length) {
    document.documentElement.classList.add('js-revelar');
    var obsRev = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visivel'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    Array.prototype.forEach.call(revelar, function (el) { obsRev.observe(el); });
  }

  /* ---------- Hero carrossel (WAI-ARIA APG) ---------- */
  var hero = document.querySelector('.hero');
  if (hero) iniciarCarrossel(hero);

  function iniciarCarrossel(raiz) {
    var wrapper = raiz.querySelector('.hero__slides');
    var slides = Array.prototype.slice.call(raiz.querySelectorAll('.slide'));
    var controles = raiz.querySelector('.hero__controles');
    var btnPausa = raiz.querySelector('[data-hero-pausa]');
    var btnAnt = raiz.querySelector('[data-hero-anterior]');
    var btnProx = raiz.querySelector('[data-hero-proximo]');
    var indicadores = Array.prototype.slice.call(raiz.querySelectorAll('[data-hero-ir]'));
    var progresso = raiz.querySelector('.hero__progresso');
    if (slides.length < 2) return;

    var atual = 0;
    var parado = mqReduzido.matches;  // parado pelo usuário (botão, foco, swipe) ou movimento reduzido
    var hover = false;
    var visivelNaTela = true;
    var abaVisivel = !document.hidden;

    function carregar(i) {
      var img = slides[i] && slides[i].querySelector('img');
      if (img && img.loading === 'lazy') img.loading = 'eager';
    }

    function reiniciarProgresso() {
      raiz.classList.remove('hero--animando');
      void progresso.offsetWidth; // reflow para reiniciar a animação
      raiz.classList.add('hero--animando');
    }

    var iniciado = false;

    function mostrar(i) {
      var n = slides.length;
      atual = (i + n) % n;
      slides.forEach(function (s, k) {
        var ativo = k === atual;
        s.classList.toggle('is-ativo', ativo);
        if (ativo) {
          s.removeAttribute('aria-hidden');
          s.inert = false;
          s.removeAttribute('inert');
        } else {
          s.setAttribute('aria-hidden', 'true');
          s.inert = true;
          s.setAttribute('inert', '');
        }
      });
      indicadores.forEach(function (b, k) {
        if (k === atual) {
          b.setAttribute('aria-current', 'true');
          b.setAttribute('aria-disabled', 'true');
        } else {
          b.removeAttribute('aria-current');
          b.removeAttribute('aria-disabled');
        }
      });
      // Na inicialização, o próximo slide só carrega depois do 'load' (não disputa banda com o LCP)
      if (iniciado) carregar((atual + 1) % n);
      reiniciarProgresso();
    }

    function atualizarEstado() {
      var rodando = !parado && !hover && visivelNaTela && abaVisivel;
      raiz.classList.toggle('hero--rodando', rodando);
      raiz.classList.toggle('hero--parado', parado);
      btnPausa.setAttribute('aria-label', parado ? 'Retomar apresentação' : 'Pausar apresentação');
      wrapper.setAttribute('aria-live', parado ? 'polite' : 'off');
    }

    function parar() { parado = true; atualizarEstado(); }

    // O avanço automático acontece quando a barra de progresso termina (pausa junto com ela)
    progresso.addEventListener('animationend', function () {
      if (!parado && !hover && visivelNaTela && abaVisivel) mostrar(atual + 1);
    });

    btnPausa.addEventListener('click', function () {
      parado = !parado;
      if (!parado) reiniciarProgresso();
      atualizarEstado();
    });
    btnAnt.addEventListener('click', function () { mostrar(atual - 1); });
    btnProx.addEventListener('click', function () { mostrar(atual + 1); });
    indicadores.forEach(function (b, k) {
      b.addEventListener('click', function () { if (k !== atual) mostrar(k); });
    });

    // Foco do teclado dentro do carrossel: para (só volta com "Retomar")
    raiz.addEventListener('focusin', function (e) {
      if (e.target === btnPausa) return; // permite chegar ao botão e retomar
      if (!parado) parar();
    });

    // Hover: pausa temporária
    raiz.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { hover = true; atualizarEstado(); } });
    raiz.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') { hover = false; atualizarEstado(); } });

    // Teclado: setas, Home e End
    raiz.addEventListener('keydown', function (e) {
      var alvo = null;
      if (e.key === 'ArrowLeft') alvo = atual - 1;
      else if (e.key === 'ArrowRight') alvo = atual + 1;
      else if (e.key === 'Home') alvo = 0;
      else if (e.key === 'End') alvo = slides.length - 1;
      if (alvo === null) return;
      e.preventDefault();
      if (!parado) parar();
      mostrar(alvo);
    });

    // Swipe com Pointer Events
    var inicio = null;
    var houveSwipe = false;
    wrapper.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      inicio = { x: e.clientX, y: e.clientY, t: performance.now() };
      houveSwipe = false;
    });
    wrapper.addEventListener('pointerup', function (e) {
      if (!inicio) return;
      var dx = e.clientX - inicio.x;
      var dy = e.clientY - inicio.y;
      var dt = Math.max(performance.now() - inicio.t, 1);
      inicio = null;
      var ax = Math.abs(dx);
      if (ax <= Math.abs(dy)) return;
      if (ax > 50 || (ax > 30 && ax / dt > 0.3)) {
        houveSwipe = true;
        parar();
        mostrar(dx < 0 ? atual + 1 : atual - 1);
      }
    });
    wrapper.addEventListener('pointercancel', function () { inicio = null; });
    // Evita abrir um link ao terminar um arraste
    wrapper.addEventListener('click', function (e) {
      if (houveSwipe) { e.preventDefault(); e.stopPropagation(); houveSwipe = false; }
    }, true);

    // Aba oculta
    document.addEventListener('visibilitychange', function () {
      abaVisivel = !document.hidden;
      atualizarEstado();
    });

    // Fora da tela
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        visivelNaTela = en[0].isIntersecting;
        atualizarEstado();
      }, { threshold: 0.25 }).observe(raiz);
    }

    // Movimento reduzido (escuta mudanças)
    mqReduzido.addEventListener('change', function (e) {
      if (e.matches) parar();
    });

    controles.hidden = false;
    raiz.classList.add('hero--pronto');
    mostrar(0);
    iniciado = true;
    atualizarEstado();

    function carregarProximo() { carregar((atual + 1) % slides.length); }
    if (document.readyState === 'complete') carregarProximo();
    else window.addEventListener('load', carregarProximo, { once: true });
  }

  /* ---------- Botão flutuante (mobile) ---------- */
  var flutuante = document.querySelector('.flutuante');
  if (flutuante && 'IntersectionObserver' in window) {
    var alvos = [document.getElementById('inicio'), document.getElementById('encomendar'), document.getElementById('contato')].filter(Boolean);
    var visiveis = {};
    var obsFlu = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) { visiveis[en.target.id] = en.isIntersecting; });
      var mostrarBotao = !visiveis.inicio && !visiveis.encomendar && !visiveis.contato;
      flutuante.classList.toggle('is-visivel', mostrarBotao);
    });
    alvos.forEach(function (el) { obsFlu.observe(el); });
  }
})();
