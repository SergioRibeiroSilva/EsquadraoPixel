/* Vértice Sneakers: interações (JS puro, sem dependências) */
(function () {
  "use strict";

  var reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
  var WA_NUMERO = "5500900000000";

  /* ---------------- Cabeçalho rolado ---------------- */
  var cabecalho = document.querySelector("[data-cabecalho]");
  function atualizaCabecalho() {
    if (cabecalho) cabecalho.classList.toggle("is-rolado", window.scrollY > 24);
  }
  window.addEventListener("scroll", atualizaCabecalho, { passive: true });
  atualizaCabecalho();

  /* ---------------- Menu móvel ---------------- */
  var menuBotao = document.querySelector("[data-menu-botao]");
  var menuPainel = document.querySelector("[data-menu]");
  var menuRotulo = document.querySelector("[data-menu-rotulo]");
  var desktop = window.matchMedia("(min-width: 1024px)");

  function focaveisMenu() {
    return [menuBotao].concat(Array.prototype.slice.call(menuPainel.querySelectorAll("a[href], button:not([disabled])")));
  }
  function abreMenu() {
    menuBotao.setAttribute("aria-expanded", "true");
    menuRotulo.textContent = "Fechar menu";
    menuPainel.classList.add("is-aberto");
    document.body.classList.add("menu-aberto");
    var primeiro = menuPainel.querySelector("a");
    if (primeiro) primeiro.focus();
  }
  function fechaMenu(devolverFoco) {
    menuBotao.setAttribute("aria-expanded", "false");
    menuRotulo.textContent = "Abrir menu";
    menuPainel.classList.remove("is-aberto");
    document.body.classList.remove("menu-aberto");
    if (devolverFoco) menuBotao.focus();
  }
  function menuAberto() { return menuBotao && menuBotao.getAttribute("aria-expanded") === "true"; }

  if (menuBotao && menuPainel) {
    menuBotao.addEventListener("click", function () {
      if (menuAberto()) fechaMenu(true); else abreMenu();
    });
    menuPainel.addEventListener("click", function (e) {
      if (e.target.closest("a") && !desktop.matches) fechaMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (!menuAberto()) return;
      if (e.key === "Escape") { fechaMenu(true); return; }
      if (e.key === "Tab") {
        var itens = focaveisMenu();
        var primeiro = itens[0];
        var ultimo = itens[itens.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
        else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
      }
    });
    desktop.addEventListener("change", function (m) { if (m.matches && menuAberto()) fechaMenu(false); });
  }

  /* ---------------- Link ativo no menu ---------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav-link]"));
  if ("IntersectionObserver" in window && navLinks.length) {
    var mapa = {};
    navLinks.forEach(function (a) { mapa[a.getAttribute("href").slice(1)] = a; });
    var obsNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        var link = mapa[en.target.id];
        if (!link) return;
        if (en.isIntersecting) {
          navLinks.forEach(function (l) { l.removeAttribute("aria-current"); });
          link.setAttribute("aria-current", "true");
        } else if (link.getAttribute("aria-current") === "true") {
          link.removeAttribute("aria-current");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(mapa).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) obsNav.observe(s);
    });
  }

  /* ---------------- Carrossel (APG, variante com abas) ---------------- */
  var carrossel = document.querySelector("[data-carrossel]");
  if (carrossel) iniciaCarrossel(carrossel);

  function iniciaCarrossel(raiz) {
    var controles = raiz.querySelector("[data-carrossel-controles]");
    var wrapper = raiz.querySelector("[data-carrossel-slides]");
    var slides = Array.prototype.slice.call(raiz.querySelectorAll('[role="tabpanel"]'));
    var abas = Array.prototype.slice.call(raiz.querySelectorAll('[role="tab"]'));
    var btnPausar = raiz.querySelector("[data-carrossel-pausar]");
    var btnAnterior = raiz.querySelector("[data-carrossel-anterior]");
    var btnProximo = raiz.querySelector("[data-carrossel-proximo]");
    var contador = raiz.querySelector("[data-carrossel-atual]");
    var total = slides.length;
    var INTERVALO = 7000;
    var atual = 0;
    var girando = false;    // autoplay ligado (não pausado pelo usuário)
    var hover = false;      // pausa temporária pelo mouse
    var oculto = false;     // aba do navegador oculta
    var decorrido = 0;
    var ultimoQuadro = null;

    controles.hidden = false;
    slides.forEach(function (s, i) {
      s.hidden = false;
      if (i !== atual) s.inert = true;
    });

    function pad(n) { return (n < 10 ? "0" : "") + n; }

    function carregaImagem(i) {
      var img = slides[i] && slides[i].querySelector("img");
      if (img && img.loading === "lazy") img.loading = "eager";
    }

    function mostra(i, focarAba) {
      i = (i + total) % total;
      if (i === atual && !focarAba) return;
      slides[atual].classList.remove("is-ativo");
      slides[atual].inert = true;
      abas[atual].setAttribute("aria-selected", "false");
      abas[atual].setAttribute("tabindex", "-1");
      abas[atual].style.removeProperty("--progresso");
      atual = i;
      carregaImagem(atual);
      slides[atual].inert = false;
      slides[atual].classList.add("is-ativo");
      abas[atual].setAttribute("aria-selected", "true");
      abas[atual].setAttribute("tabindex", "0");
      if (focarAba) abas[atual].focus();
      contador.textContent = pad(atual + 1);
      decorrido = 0;
      pintaProgresso();
      carregaImagem((atual + 1) % total);
    }

    function pintaProgresso() {
      var valor = girando ? Math.min(decorrido / INTERVALO, 1) : 1;
      abas[atual].style.setProperty("--progresso", valor.toFixed(4));
    }

    function quadro(t) {
      if (ultimoQuadro === null) ultimoQuadro = t;
      var dt = t - ultimoQuadro;
      ultimoQuadro = t;
      if (girando && !hover && !oculto) {
        decorrido += dt;
        if (decorrido >= INTERVALO) mostra(atual + 1);
        else pintaProgresso();
      }
      if (girando) requestAnimationFrame(quadro);
    }

    function liga() {
      girando = true;
      decorrido = 0;
      ultimoQuadro = null;
      btnPausar.setAttribute("aria-label", "Pausar apresentação");
      btnPausar.classList.remove("is-parado");
      wrapper.setAttribute("aria-live", "off");
      pintaProgresso();
      requestAnimationFrame(quadro);
    }
    function para() {
      girando = false;
      btnPausar.setAttribute("aria-label", "Retomar apresentação");
      btnPausar.classList.add("is-parado");
      wrapper.setAttribute("aria-live", "polite");
      pintaProgresso();
    }

    btnPausar.addEventListener("click", function () { if (girando) para(); else liga(); });
    btnAnterior.addEventListener("click", function () { mostra(atual - 1); });
    btnProximo.addEventListener("click", function () { mostra(atual + 1); });

    abas.forEach(function (aba, i) {
      aba.addEventListener("click", function () {
        if (girando) para();
        mostra(i);
      });
      aba.addEventListener("keydown", function (e) {
        var alvo = null;
        if (e.key === "ArrowRight") alvo = atual + 1;
        else if (e.key === "ArrowLeft") alvo = atual - 1;
        else if (e.key === "Home") alvo = 0;
        else if (e.key === "End") alvo = total - 1;
        if (alvo === null) return;
        e.preventDefault();
        mostra(alvo, true);
      });
    });

    // Para quando o foco de teclado entra no carrossel; não volta sozinho.
    raiz.addEventListener("focusin", function (e) {
      var teclado = true;
      try { teclado = e.target.matches(":focus-visible"); } catch (err) { teclado = true; }
      if (teclado && girando) para();
    });
    // Pausa temporária no hover.
    raiz.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") hover = true; });
    raiz.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") { hover = false; ultimoQuadro = null; } });
    document.addEventListener("visibilitychange", function () {
      oculto = document.hidden;
      ultimoQuadro = null;
    });

    // Swipe (Pointer Events).
    var inicioX = null, inicioY = 0, arrastou = false;
    wrapper.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      inicioX = e.clientX; inicioY = e.clientY; arrastou = false;
    });
    wrapper.addEventListener("pointermove", function (e) {
      if (inicioX === null) return;
      if (Math.abs(e.clientX - inicioX) > 10) arrastou = true;
    });
    wrapper.addEventListener("pointerup", function (e) {
      if (inicioX === null) return;
      var dx = e.clientX - inicioX;
      var dy = e.clientY - inicioY;
      inicioX = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (girando) para();
        mostra(dx < 0 ? atual + 1 : atual - 1);
      }
    });
    wrapper.addEventListener("pointercancel", function () { inicioX = null; });
    wrapper.addEventListener("click", function (e) {
      if (arrastou) { e.preventDefault(); e.stopPropagation(); arrastou = false; }
    }, true);
    wrapper.addEventListener("dragstart", function (e) { e.preventDefault(); });

    // Autoplay: ligado em todas as larguras (decisão do orquestrador), desligado com movimento reduzido.
    if (reduzMovimento.matches) para(); else liga();
    reduzMovimento.addEventListener("change", function (m) { if (m.matches && girando) para(); });
    carregaImagem(1);
  }

  /* ---------------- Filtro de produtos ---------------- */
  var filtros = document.querySelector("[data-filtros]");
  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-chip]"));
  var produtos = Array.prototype.slice.call(document.querySelectorAll("[data-colecao]"));
  var contagem = document.querySelector("[data-filtro-contagem]");
  var vazio = document.querySelector("[data-filtro-vazio]");

  function aplicaFiltro(valor, anunciar) {
    var n = 0;
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-chip") === valor)); });
    produtos.forEach(function (p) {
      var mostra = valor === "todos" || p.getAttribute("data-colecao") === valor;
      var estava = !p.hidden;
      p.hidden = !mostra;
      p.classList.remove("is-entrando");
      if (mostra) {
        n++;
        if (!estava && !reduzMovimento.matches) { void p.offsetWidth; p.classList.add("is-entrando"); }
      }
    });
    if (vazio) vazio.hidden = n !== 0;
    if (contagem && anunciar !== false) contagem.textContent = n === 1 ? "1 modelo" : n + " modelos";
  }
  if (filtros && chips.length) {
    filtros.hidden = false;
    chips.forEach(function (c) {
      c.addEventListener("click", function () { aplicaFiltro(c.getAttribute("data-chip")); });
    });
    document.querySelectorAll("[data-filtro]").forEach(function (link) {
      link.addEventListener("click", function () { aplicaFiltro(link.getAttribute("data-filtro")); });
    });
  }

  /* ---------------- Formulário de agendamento ---------------- */
  var form = document.querySelector("[data-form]");
  if (form) {
    var fallback = document.querySelector("[data-form-fallback]");
    var nome = form.querySelector("#f-nome");
    var erro = form.querySelector("[data-erro]");
    var status = form.querySelector("[data-form-status]");
    form.hidden = false;
    if (fallback) fallback.hidden = true;

    function mostraErro(msg) {
      erro.textContent = msg;
      erro.hidden = false;
      nome.setAttribute("aria-invalid", "true");
    }
    function limpaErro() {
      erro.textContent = "";
      erro.hidden = true;
      nome.removeAttribute("aria-invalid");
    }
    nome.addEventListener("input", function () { if (nome.getAttribute("aria-invalid")) limpaErro(); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "";
      var v = nome.value.trim();
      var letras = v.replace(/[^A-Za-zÀ-ÿ]/g, "");
      if (!v) { mostraErro("Informe seu nome para continuarmos."); nome.focus(); return; }
      if (letras.length < 2) { mostraErro("O nome precisa ter pelo menos 2 letras."); nome.focus(); return; }
      limpaErro();

      var colecao = form.colecao.value;
      var numeracao = form.numeracao.value;
      var dia = form.dia.value;
      var periodoEl = form.querySelector('input[name="periodo"]:checked');
      var periodo = periodoEl ? periodoEl.value : "";

      var msg = "Olá! Vim pelo site da Vértice e gostaria de agendar um atendimento. Nome: " + v + ".";
      if (colecao) msg += " Interesse: " + colecao + ".";
      if (numeracao) msg += " Numeração: " + numeracao + ".";
      var pref = [dia.toLowerCase(), periodo.toLowerCase()].filter(Boolean).join(", ");
      if (pref) msg += " Preferência: " + pref + ".";

      var url = "https://wa.me/" + WA_NUMERO + "?text=" + encodeURIComponent(msg);
      var janela = window.open(url, "_blank");
      if (janela) {
        try { janela.opener = null; } catch (err) { /* ignora */ }
        status.textContent = "Pronto. Abrimos o WhatsApp com a sua mensagem; é só tocar em enviar.";
      } else {
        status.textContent = "";
        var a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "Não conseguimos abrir o WhatsApp. Toque aqui para continuar a conversa.";
        status.appendChild(a);
      }
    });
  }

  /* ---------------- Dia atual nos horários ---------------- */
  var hoje = new Date().getDay();
  document.querySelectorAll("[data-dias]").forEach(function (tr) {
    if (tr.getAttribute("data-dias").split(",").indexOf(String(hoje)) !== -1) tr.classList.add("is-hoje");
  });

  /* ---------------- Revelação das seções ---------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var obsReveal = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visivel"); obs.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { obsReveal.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visivel"); });
  }

  /* ---------------- Barra fixa no celular ---------------- */
  var barra = document.querySelector("[data-barra-fixa]");
  var hero = document.getElementById("inicio");
  var ctaFinal = document.querySelector("[data-cta-final]");
  var rodape = document.querySelector("[data-rodape]");
  if (barra && hero && "IntersectionObserver" in window) {
    var heroVisivel = true, fimVisivel = false;
    var visiveisFim = new Set();
    function atualizaBarra() { barra.classList.toggle("is-visivel", !heroVisivel && !fimVisivel); }
    new IntersectionObserver(function (en) {
      heroVisivel = en[0].isIntersecting;
      atualizaBarra();
    }).observe(hero);
    var obsFim = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) visiveisFim.add(en.target); else visiveisFim.delete(en.target);
      });
      fimVisivel = visiveisFim.size > 0;
      atualizaBarra();
    });
    if (ctaFinal) obsFim.observe(ctaFinal);
    if (rodape) obsFim.observe(rodape);
  }
})();
