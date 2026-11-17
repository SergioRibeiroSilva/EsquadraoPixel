/* Reef Stack: interações (sem dependências) */
(function () {
  'use strict';

  /* =========================================================
     WhatsApp: número ÚNICO do site.
     FICTÍCIO: substituir antes de publicar (só dígitos, com DDI 55 e DDD).
     Os href no HTML são apenas fallback sem JavaScript.
     ========================================================= */
  var WHATSAPP_NUMERO = '5511900000000';

  var WHATSAPP_MENSAGENS = {
    generico: 'Olá, Reef Stack! Vim pelo site.',
    pedido: 'Olá, Reef Stack! Vim pelo site e quero fazer um pedido ou orçamento.',
    clube: 'Olá, Reef Stack! Vim pelo site e quero participar do Clube Reef Stack.',
    montagem: 'Olá, Reef Stack! Vim pelo site e quero agendar uma montagem ou manutenção de aquário.',
    kit: 'Olá, Reef Stack! Vim pelo site e quero montar meu kit iniciante.'
  };

  function linkWhatsApp(mensagem) {
    return 'https://wa.me/' + WHATSAPP_NUMERO + '?text=' + encodeURIComponent(mensagem);
  }

  document.querySelectorAll('a[data-wa]').forEach(function (a) {
    var msg = WHATSAPP_MENSAGENS[a.getAttribute('data-wa')] || WHATSAPP_MENSAGENS.generico;
    a.href = linkWhatsApp(msg);
  });

  var desktop = window.matchMedia('(min-width: 900px)');
  var temIO = 'IntersectionObserver' in window;

  /* =========================================================
     Menu mobile
     ========================================================= */
  var botaoMenu = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu-principal');
  var main = document.getElementById('conteudo');
  var rodape = document.querySelector('.rodape');
  var waFlutuante = document.querySelector('.wa-flutuante');
  var pular = document.querySelector('.pular');
  var foraDoMenu = [main, rodape, waFlutuante, pular];

  function definirInert(ativo) {
    foraDoMenu.forEach(function (el) {
      if (!el) return;
      if (ativo) { el.setAttribute('inert', ''); } else { el.removeAttribute('inert'); }
    });
  }

  function abrirMenu() {
    menu.classList.add('aberto');
    botaoMenu.setAttribute('aria-expanded', 'true');
    botaoMenu.setAttribute('aria-label', botaoMenu.dataset.rotuloFechar);
    document.body.classList.add('menu-aberto');
    definirInert(true);
    var primeiro = menu.querySelector('a');
    if (primeiro) {
      // espera a visibilidade mudar antes de focar
      window.requestAnimationFrame(function () { primeiro.focus(); });
    }
  }

  function fecharMenu(devolverFoco) {
    if (!menu.classList.contains('aberto')) return;
    menu.classList.remove('aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', botaoMenu.dataset.rotuloAbrir);
    document.body.classList.remove('menu-aberto');
    definirInert(false);
    if (devolverFoco) botaoMenu.focus();
  }

  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
      if (menu.classList.contains('aberto')) { fecharMenu(true); } else { abrirMenu(); }
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a') && !desktop.matches) fecharMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('aberto')) {
        e.preventDefault();
        fecharMenu(true);
      }
    });

    // Prende o Tab dentro do cabeçalho enquanto o menu estiver aberto
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !menu.classList.contains('aberto')) return;
      var focaveis = [botaoMenu].concat(Array.prototype.slice.call(menu.querySelectorAll('a')));
      var primeiro = focaveis[0];
      var ultimo = focaveis[focaveis.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    });

    var aoMudarLargura = function () { if (desktop.matches) fecharMenu(false); };
    if (desktop.addEventListener) { desktop.addEventListener('change', aoMudarLargura); }
    else if (desktop.addListener) { desktop.addListener(aoMudarLargura); }
  }

  /* =========================================================
     Cabeçalho com sombra após rolar (sentinela)
     ========================================================= */
  var cabecalho = document.querySelector('.cabecalho');
  var sentinela = document.querySelector('.sentinela-topo');
  if (temIO && cabecalho && sentinela) {
    new IntersectionObserver(function (entradas) {
      cabecalho.classList.toggle('rolado', !entradas[0].isIntersecting);
    }).observe(sentinela);
  }

  /* =========================================================
     Item ativo da navegação
     ========================================================= */
  var linksNav = Array.prototype.slice.call(document.querySelectorAll('.menu-lista a'));
  if (temIO && linksNav.length) {
    var mapaLinks = {};
    linksNav.forEach(function (a) { mapaLinks[a.getAttribute('href').slice(1)] = a; });
    var observadorSecoes = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        linksNav.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = mapaLinks[en.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { observadorSecoes.observe(s); });
  }

  /* =========================================================
     Botão flutuante do WhatsApp: aparece depois do hero e some
     em #visite e no rodapé (que já têm botões de WhatsApp)
     ========================================================= */
  var hero = document.getElementById('inicio');
  if (waFlutuante && hero && temIO) {
    waFlutuante.classList.add('escondido');
    var areasSemFlutuante = [hero, document.getElementById('visite'), document.querySelector('.rodape')].filter(Boolean);
    var visiveis = new Set();
    var observadorFlutuante = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) visiveis.add(en.target); else visiveis.delete(en.target);
      });
      waFlutuante.classList.toggle('escondido', visiveis.size > 0);
    });
    areasSemFlutuante.forEach(function (el) { observadorFlutuante.observe(el); });
  }

  /* =========================================================
     Animações: botão de pausa + pausa fora da tela
     ========================================================= */
  var raiz = document.documentElement;
  var botaoPausa = document.querySelector('.botao-pausa');
  var CHAVE_MOVIMENTO = 'reefstack-movimento';

  function lerPreferencia() {
    try { return window.localStorage.getItem(CHAVE_MOVIMENTO); } catch (e) { return null; }
  }
  function salvarPreferencia(valor) {
    try { window.localStorage.setItem(CHAVE_MOVIMENTO, valor); } catch (e) { /* sem armazenamento */ }
  }

  function aplicarPausa(pausado) {
    raiz.classList.toggle('movimento-pausado', pausado);
    if (!botaoPausa) return;
    botaoPausa.setAttribute('aria-pressed', String(pausado));
    botaoPausa.setAttribute('aria-label', pausado ? botaoPausa.dataset.ariaRetomar : botaoPausa.dataset.ariaPausar);
    var rotulo = botaoPausa.querySelector('.botao-pausa-rotulo');
    if (rotulo) rotulo.textContent = pausado ? botaoPausa.dataset.rotuloRetomar : botaoPausa.dataset.rotuloPausar;
  }

  if (botaoPausa) {
    botaoPausa.hidden = false;
    aplicarPausa(lerPreferencia() === 'pausado');
    botaoPausa.addEventListener('click', function () {
      var pausado = !raiz.classList.contains('movimento-pausado');
      aplicarPausa(pausado);
      salvarPreferencia(pausado ? 'pausado' : 'ativo');
    });
  }

  if (temIO) {
    var observadorAnimacao = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) { en.target.classList.toggle('fora-da-tela', !en.isIntersecting); });
    });
    document.querySelectorAll('.animado').forEach(function (el) { observadorAnimacao.observe(el); });
  }

  /* =========================================================
     Abas doce × marinho (WAI-ARIA Tabs), sincronizadas
     ========================================================= */
  var CHAVE_ABA = 'reefstack-aba';
  var gruposAbas = Array.prototype.slice.call(document.querySelectorAll('.abas[role="tablist"]'));

  function lerAba() {
    try { return window.sessionStorage.getItem(CHAVE_ABA); } catch (e) { return null; }
  }
  function salvarAba(tipo) {
    try { window.sessionStorage.setItem(CHAVE_ABA, tipo); } catch (e) { /* sem armazenamento */ }
  }

  /* Regiões de tabela: só entram no Tab quando há rolagem horizontal */
  var regioesRolaveis = Array.prototype.slice.call(document.querySelectorAll('.tabela-rolavel'));
  function atualizarRegioesRolaveis() {
    regioesRolaveis.forEach(function (r) {
      if (r.scrollWidth > r.clientWidth + 1) r.tabIndex = 0;
      else r.removeAttribute('tabindex');
    });
  }
  var esperaRegioes;
  window.addEventListener('resize', function () {
    window.clearTimeout(esperaRegioes);
    esperaRegioes = window.setTimeout(atualizarRegioesRolaveis, 150);
  });

  function ativarAba(tipo, opcoes) {
    opcoes = opcoes || {};
    if (tipo !== 'doce' && tipo !== 'marinho') return;
    gruposAbas.forEach(function (lista) {
      lista.setAttribute('data-ativo', tipo);
      lista.querySelectorAll('[role="tab"]').forEach(function (aba) {
        var ativa = aba.dataset.tipo === tipo;
        aba.setAttribute('aria-selected', String(ativa));
        aba.tabIndex = ativa ? 0 : -1;
        var painel = document.getElementById(aba.getAttribute('aria-controls'));
        if (painel) painel.hidden = !ativa;
        if (ativa && opcoes.focarEm === lista) aba.focus();
      });
    });
    salvarAba(tipo);
    atualizarRegioesRolaveis();
  }

  if (gruposAbas.length) {
    gruposAbas.forEach(function (lista) {
      lista.hidden = false;
      lista.querySelectorAll('[role="tab"]').forEach(function (aba) {
        var painel = document.getElementById(aba.getAttribute('aria-controls'));
        if (painel) {
          painel.setAttribute('role', 'tabpanel');
          painel.setAttribute('aria-labelledby', aba.id);
          painel.tabIndex = 0;
        }
        aba.addEventListener('click', function () { ativarAba(aba.dataset.tipo); });
      });

      lista.addEventListener('keydown', function (e) {
        var abas = Array.prototype.slice.call(lista.querySelectorAll('[role="tab"]'));
        var atual = abas.indexOf(document.activeElement);
        if (atual < 0) return;
        var proximo = null;
        if (e.key === 'ArrowRight') proximo = (atual + 1) % abas.length;
        else if (e.key === 'ArrowLeft') proximo = (atual - 1 + abas.length) % abas.length;
        else if (e.key === 'Home') proximo = 0;
        else if (e.key === 'End') proximo = abas.length - 1;
        if (proximo === null) return;
        e.preventDefault();
        ativarAba(abas[proximo].dataset.tipo, { focarEm: lista });
      });
    });

    // Estado inicial: hash > sessionStorage > doce
    var inicial = 'doce';
    var salvo = lerAba();
    if (salvo === 'doce' || salvo === 'marinho') inicial = salvo;
    var porHash = tipoDoHash(window.location.hash);
    if (porHash) inicial = porHash;
    ativarAba(inicial);
    if (porHash) {
      var alvo = document.getElementById(window.location.hash.slice(1));
      if (alvo) window.requestAnimationFrame(function () { alvo.scrollIntoView(); });
    }

    // Links que apontam para um painel ativam a aba antes de rolar
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var tipo = tipoDoHash(a.getAttribute('href'));
      if (tipo) ativarAba(tipo);
    });

    window.addEventListener('hashchange', function () {
      var tipo = tipoDoHash(window.location.hash);
      if (tipo) ativarAba(tipo);
    });
  }

  function tipoDoHash(hash) {
    if (hash === '#especies-doce' || hash === '#parametros-doce') return 'doce';
    if (hash === '#especies-marinho' || hash === '#parametros-marinho') return 'marinho';
    return null;
  }

  /* =========================================================
     Formulário do clube -> WhatsApp
     ========================================================= */
  var form = document.getElementById('form-clube');
  if (form) {
    var nome = form.querySelector('#form-nome');
    var erroNome = form.querySelector('#form-nome-erro');
    var sucesso = form.querySelector('.form-sucesso');
    var fallback = form.querySelector('.form-fallback');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valorNome = nome.value.trim();
      if (!valorNome) {
        nome.setAttribute('aria-invalid', 'true');
        nome.setAttribute('aria-describedby', 'form-nome-erro form-nome-ajuda');
        erroNome.hidden = false;
        sucesso.hidden = true;
        nome.focus();
        return;
      }
      nome.removeAttribute('aria-invalid');
      nome.setAttribute('aria-describedby', 'form-nome-ajuda');
      erroNome.hidden = true;

      var marcado = form.querySelector('input[name="interesse"]:checked');
      var interesse = marcado ? marcado.value : 'Os dois';
      var experiencia = form.querySelector('#form-experiencia').value;
      var mensagem = WHATSAPP_MENSAGENS.clube + ' Meu nome é ' + valorNome + '. Interesse: ' + interesse + '. Experiência: ' + experiencia + '.';
      var url = linkWhatsApp(mensagem);

      fallback.href = url;
      sucesso.hidden = false;
      window.open(url, '_blank', 'noopener');
    });
  }

  /* =========================================================
     Horário: destaca o dia de hoje
     ========================================================= */
  var hoje = String(new Date().getDay());
  document.querySelectorAll('.horarios [data-dias]').forEach(function (linha) {
    if (linha.getAttribute('data-dias').split(' ').indexOf(hoje) === -1) return;
    linha.classList.add('hoje');
    var dt = linha.querySelector('dt');
    if (dt) {
      var marcador = document.createElement('span');
      marcador.className = 'visually-hidden';
      marcador.textContent = ' Hoje';
      dt.appendChild(marcador);
    }
  });
})();
