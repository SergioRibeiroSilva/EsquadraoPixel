/* Corpo Diaconal · AD Catedral Baleia
   JavaScript mínimo, sem dependências. O site funciona sem ele (links com href pronto, FAQ nativo). */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     WhatsApp: constante única.
     A CONFIRMAR: número do WhatsApp da secretaria. (61) 9905-5252 tem 8 dígitos;
     pode ser (61) 99905-5252. Ao confirmar, troque aqui. Os href do HTML são
     só reserva para quem navega sem JavaScript: troque também com
     "localizar e substituir" de 556199055252 em index.html.
     ------------------------------------------------------------------ */
  var WHATSAPP = '556199055252';
  var TELEFONE_FIXO = '+556132427119'; // A CONFIRMAR
  var TELEFONE_FIXO_EXIBICAO = '(61) 3242-7119';

  var MENSAGENS = {
    geral: 'Olá! Gostaria de falar com a diaconia da Catedral Baleia.',
    ajuda: 'Olá! Gostaria de pedir oração, visita ou apoio da diaconia.',
    servir: 'Olá! Tenho interesse em servir no Corpo Diaconal.'
  };

  function linkWhatsApp(texto) {
    return 'https://wa.me/' + WHATSAPP + (texto ? '?text=' + encodeURIComponent(texto) : '');
  }

  document.querySelectorAll('[data-wa]').forEach(function (el) {
    var texto = MENSAGENS[el.getAttribute('data-wa')];
    el.setAttribute('href', linkWhatsApp(texto));
  });

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Cabeçalho: borda ao rolar ---------- */
  var cabecalho = document.getElementById('cabecalho');
  function aoRolar() {
    if (!cabecalho) return;
    cabecalho.classList.toggle('cabecalho--rolado', window.scrollY > 8);
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  /* ---------- Menu mobile ---------- */
  var botaoMenu = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu');
  var desktop = window.matchMedia('(min-width: 1100px)');

  function focaveisDoMenu() {
    var itens = Array.prototype.slice.call(menu.querySelectorAll('a[href], button:not([disabled])'));
    return [botaoMenu].concat(itens);
  }

  // Ciclo 2 (T9): com o menu aberto, o resto da página fica inerte para o leitor de tela.
  var areasInertes = Array.prototype.slice.call(document.querySelectorAll('main, .rodape'));
  function definirInerte(valor) {
    areasInertes.forEach(function (el) {
      el.inert = valor;
      if (valor) { el.setAttribute('inert', ''); } else { el.removeAttribute('inert'); }
    });
  }

  function abrirMenu() {
    menu.classList.add('nav--aberta');
    definirInerte(true);
    botaoMenu.setAttribute('aria-expanded', 'true');
    botaoMenu.setAttribute('aria-label', botaoMenu.getAttribute('data-rotulo-fechar'));
    document.body.classList.add('menu-aberto');
    var primeiro = menu.querySelector('a[href]');
    if (primeiro) primeiro.focus();
  }

  function fecharMenu(devolverFoco) {
    menu.classList.remove('nav--aberta');
    definirInerte(false);
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', botaoMenu.getAttribute('data-rotulo-abrir'));
    document.body.classList.remove('menu-aberto');
    if (devolverFoco) botaoMenu.focus();
  }

  function menuAberto() {
    return botaoMenu && botaoMenu.getAttribute('aria-expanded') === 'true';
  }

  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
      if (menuAberto()) { fecharMenu(true); } else { abrirMenu(); }
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a') && menuAberto()) fecharMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (!menuAberto()) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        fecharMenu(true);
        return;
      }
      if (e.key === 'Tab') {
        var focaveis = focaveisDoMenu();
        var primeiro = focaveis[0];
        var ultimo = focaveis[focaveis.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        } else if (focaveis.indexOf(document.activeElement) === -1) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    });

    var aoMudarLargura = function (mq) { if (mq.matches && menuAberto()) fecharMenu(false); };
    if (desktop.addEventListener) { desktop.addEventListener('change', aoMudarLargura); }
    else if (desktop.addListener) { desktop.addListener(aoMudarLargura); }
  }

  /* ---------- Scroll-spy (navegação desktop) ---------- */
  var linksNav = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  if ('IntersectionObserver' in window && linksNav.length) {
    var mapa = {};
    linksNav.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      var secao = document.getElementById(id);
      if (secao) mapa[id] = a;
    });
    var spy = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        linksNav.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = mapa[entrada.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(mapa).forEach(function (id) { spy.observe(document.getElementById(id)); });
  }

  /* ---------- Animação de entrada (só com JS e sem movimento reduzido) ---------- */
  var revelaveis = document.querySelectorAll('.revelar');
  if (!reduzMovimento && 'IntersectionObserver' in window && revelaveis.length) {
    document.documentElement.classList.add('revelar-ativo');
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          obs.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revelaveis.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) { el.classList.add('visivel'); }
      else { obs.observe(el); }
    });
  }

  /* ---------- Formulário "Precisa de ajuda?" ---------- */
  var form = document.getElementById('form-ajuda');
  if (form) {
    var fieldset = document.getElementById('opcoes-ajuda');
    var erro = document.getElementById('erro-tipo');
    var retorno = document.getElementById('retorno-ajuda');
    var radios = Array.prototype.slice.call(form.querySelectorAll('input[name="tipo"]'));
    var PEDIDOS = { oracao: 'oração', visita: 'uma visita', apoio: 'apoio social' };

    // Fallback de classe para navegadores sem :has()
    function atualizarCartoes() {
      radios.forEach(function (r) {
        r.closest('.opcao').classList.toggle('opcao--marcada', r.checked);
      });
    }

    function limparErro() {
      erro.hidden = true;
      fieldset.classList.remove('opcoes--erro');
      fieldset.removeAttribute('aria-describedby');
      radios.forEach(function (r) { r.removeAttribute('aria-invalid'); r.removeAttribute('aria-describedby'); });
    }

    function mostrarErro() {
      erro.hidden = false;
      fieldset.classList.add('opcoes--erro');
      fieldset.setAttribute('aria-describedby', 'erro-tipo');
      radios.forEach(function (r) { r.setAttribute('aria-invalid', 'true'); r.setAttribute('aria-describedby', 'erro-tipo'); });
      radios[0].focus();
    }

    radios.forEach(function (r) {
      r.addEventListener('change', function () { atualizarCartoes(); limparErro(); });
    });

    function montarMensagem(tipo) {
      var nome = document.getElementById('campo-nome').value.trim();
      var bairro = document.getElementById('campo-bairro').value.trim();
      var mensagem = document.getElementById('campo-mensagem').value.trim();
      var linhas = ['Olá! Gostaria de pedir ' + PEDIDOS[tipo] + ' da diaconia.'];
      if (nome) linhas.push('Nome: ' + nome);
      if (bairro) linhas.push('Bairro/região: ' + bairro);
      if (mensagem) linhas.push('Mensagem: ' + mensagem);
      return linhas.join('\n');
    }

    function textoComLink(antes, href, rotulo, depois, novaAba) {
      var frag = document.createDocumentFragment();
      frag.appendChild(document.createTextNode(antes));
      var a = document.createElement('a');
      a.href = href;
      a.textContent = rotulo;
      if (novaAba) {
        a.target = '_blank';
        a.rel = 'noopener';
        var oculto = document.createElement('span');
        oculto.className = 'visualmente-oculto';
        oculto.textContent = ' (abre o WhatsApp em nova aba)';
        a.appendChild(oculto);
      }
      frag.appendChild(a);
      frag.appendChild(document.createTextNode(depois));
      return frag;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      retorno.textContent = '';
      retorno.classList.remove('form-ajuda__retorno--falha');

      var marcado = radios.filter(function (r) { return r.checked; })[0];
      if (!marcado) { mostrarErro(); return; }
      limparErro();

      var url = linkWhatsApp(montarMensagem(marcado.value));
      var janela = window.open(url, '_blank');

      if (janela) {
        try { janela.opener = null; } catch (err) { /* ignora */ }
        retorno.textContent = 'Pronto! Abrimos o WhatsApp com sua mensagem. Revise e toque em enviar.';
      } else {
        retorno.classList.add('form-ajuda__retorno--falha');
        var frag = document.createDocumentFragment();
        frag.appendChild(document.createTextNode('Não conseguimos abrir o WhatsApp. '));
        var tentar = document.createElement('a');
        tentar.href = url;
        tentar.target = '_blank';
        tentar.rel = 'noopener';
        tentar.textContent = 'Toque aqui para tentar de novo';
        var oculto = document.createElement('span');
        oculto.className = 'visualmente-oculto';
        oculto.textContent = ' (abre o WhatsApp em nova aba)';
        tentar.appendChild(oculto);
        frag.appendChild(tentar);
        frag.appendChild(textoComLink(' ou ligue para ', 'tel:' + TELEFONE_FIXO, TELEFONE_FIXO_EXIBICAO, '.', false));
        retorno.appendChild(frag);
      }
    });
  }
})();
