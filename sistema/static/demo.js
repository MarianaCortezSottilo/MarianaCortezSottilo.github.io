/* Versão de demonstração estática: navegação entre páginas geradas, aviso discreto no resto. */
(function () {
  const css = document.createElement('style');
  css.textContent =
    '.vv-demo{background:#eb6834;color:#fff;font:600 13px/1.4 system-ui,sans-serif;padding:7px 16px;display:flex;flex-wrap:wrap;gap:4px 18px;justify-content:center;text-align:center}' +
    '.vv-demo a{color:#fff;text-decoration:underline}' +
    '.vv-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%) translateY(20px);opacity:0;background:#1f2a24;color:#fff;font:500 14px/1.4 system-ui,sans-serif;padding:10px 18px;border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,.25);transition:.25s;z-index:99999;pointer-events:none;max-width:90vw;text-align:center}' +
    '.vv-toast.on{opacity:1;transform:translateX(-50%) translateY(0)}';
  document.head.appendChild(css);

  let t, el;
  function aviso(msg) {
    if (!el) { el = document.createElement('div'); el.className = 'vv-toast'; document.body.appendChild(el); }
    el.textContent = msg || 'Disponível na versão completa (código no GitHub).';
    el.classList.add('on'); clearTimeout(t); t = setTimeout(() => el.classList.remove('on'), 2600);
  }
  window.vvAviso = aviso;
  window.alert = (m) => aviso(String(m));
  window.confirm = () => { aviso('Ação desativada na demonstração.'); return false; };

  const mapa = (window.VV_MAPA || {})[window.VV_DIR] || {};
  function chave(path, params) {
    const ps = [...params].filter(([k, v]) => k !== 'u' && v !== '').sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : (a[1] < b[1] ? -1 : 1));
    const q = new URLSearchParams(ps).toString();
    return path + (q ? '?' + q : '');
  }

  window.vvVisao = function (v) {
    const d = (window.VV_VISOES || {})[v];
    if (!d) return aviso('Visão disponível na versão completa.');
    const alvo = (window.VV_MAPA[d] || {})[window.VV_KEY];
    location.href = '../' + d + '/' + (alvo || 'index.html');
  };

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-off]');
    if (a) { e.preventDefault(); aviso(); }
  }, true);

  document.addEventListener('submit', (e) => {
    const f = e.target;
    e.preventDefault(); e.stopImmediatePropagation();
    if ((f.method || 'get').toLowerCase() !== 'get') return aviso('Ação desativada: a demonstração é somente leitura.');
    const acao = new URL(f.getAttribute('action') || window.VV_KEY.split('?')[0], 'http://x');
    const k = chave(acao.pathname, new FormData(f));
    if (mapa[k]) location.href = mapa[k];
    else aviso('Esse filtro está disponível na versão completa.');
  }, true);

  // requestSubmit/submit() chamados por onchange="this.form.submit()" não disparam o evento 'submit'
  const orig = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function () {
    const ev = new Event('submit', { cancelable: true, bubbles: true });
    this.dispatchEvent(ev);
  };

  const f0 = window.fetch;
  window.fetch = function (u, o) {
    const m = ((o && o.method) || 'GET').toUpperCase();
    const local = typeof u === 'string' && u.startsWith('/');
    if (local) { aviso('Ação desativada: a demonstração é somente leitura.'); return Promise.reject(new Error('demo')); }
    return f0.apply(this, arguments);
  };
})();
