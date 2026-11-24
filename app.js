// Monta as páginas a partir de config.js e casos.js (não precisa editar este arquivo)
(function () {
  const P = window.PERFIL || {}, C = window.CASOS || [];
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---- idioma: ?lang=en na URL > escolha salva > idioma do navegador
  const params = new URLSearchParams(location.search);
  let salvo = null;
  try { salvo = localStorage.getItem("lang"); } catch (e) { /* sem storage */ }
  const L = (params.get("lang") || salvo || (navigator.language || "pt").slice(0, 2)) === "en" ? "en" : "pt";
  document.documentElement.lang = L === "en" ? "en" : "pt-BR";
  const t = v => (v && typeof v === "object" && !Array.isArray(v) && ("pt" in v || "en" in v)) ? (v[L] ?? v.pt) : v;
  const img = s => String(s).replace("{lang}", L);

  const UI = {
    pt: { projetos: "Projetos", processo: "Como trabalho", sobre: "Sobre", verProjetos: "Ver projetos ↓", painel: "Abrir o painel ↗",
      curriculo: "Currículo", dashboards: "Um projeto, seis ângulos",
      introProjetos: "Uma rede de supermercados fictícia, do banco de dados ao painel. Cada case traz o problema de negócio, o modelo de dados e as decisões de design.",
      metodo: "Método", introProcesso: "Quase tudo o que faço passa por estas etapas.", quem: "Quem faz", abrir: "Abrir case →",
      todos: "← todos os projetos", caso: "Case", interativo: "Painel interativo: clique, filtre e navegue pelas páginas",
      tela: "abrir em tela cheia ↗", previa: "Prints do painel", oProblema: "O problema", oModelo: "O modelo de dados",
      decisoes: "Decisões de design", codigo: "Código e dados no GitHub ↗", voltar: "voltar", todosP: "Todos os projetos",
      proximo: "próximo case", ficticio: "dados 100% fictícios", contato: "Falar comigo", naoEncontrado: "Case não encontrado.",
      matriz: "Matriz de barramento: cada fato, o grão e as dimensões que ele usa." },
    en: { projetos: "Projects", processo: "How I work", sobre: "About", verProjetos: "See projects ↓", painel: "Open the dashboard ↗",
      curriculo: "Résumé", dashboards: "One project, six angles",
      introProjetos: "A fictional supermarket chain, from database to dashboard. Each case covers the business problem, the data model and the design decisions.",
      metodo: "Method", introProcesso: "Almost everything I do goes through these steps.", quem: "Who I am", abrir: "Open case →",
      todos: "← all projects", caso: "Case", interativo: "Interactive dashboard: click, filter and move between pages",
      tela: "open full screen ↗", previa: "Dashboard screenshots", oProblema: "The problem", oModelo: "The data model",
      decisoes: "Design decisions", codigo: "Code and data on GitHub ↗", voltar: "back", todosP: "All projects",
      proximo: "next case", ficticio: "100% fictional data", contato: "Get in touch", naoEncontrado: "Case not found.",
      matriz: "Bus matrix: each fact table, its grain and the dimensions it uses." },
  }[L];

  const linkCom = (href, extra) => {
    const u = new URL(href, location.href);
    Object.entries(extra).forEach(([k, v]) => v ? u.searchParams.set(k, v) : u.searchParams.delete(k));
    return u.pathname.split("/").pop() + u.search + u.hash;
  };
  const embed = pagina => P.relatorio ? P.relatorio + (pagina ? (P.relatorio.includes("?") ? "&" : "?") + "pageName=" + pagina : "") : "";

  function topo() {
    const outro = L === "pt" ? "en" : "pt";
    const h = $("#topo");
    if (h) h.innerHTML = `<div class="contem"><a class="logo" href="index.html">${esc(P.nome)}<span>.</span></a>
      <nav><a href="index.html#projetos">${UI.projetos}</a><a href="index.html#processo">${UI.processo}</a><a href="index.html#sobre">${UI.sobre}</a>
      ${P.github ? `<a href="${esc(P.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}
      <a class="idioma" href="${esc(linkCom(location.href, { lang: outro }))}" data-lang="${outro}" aria-label="${outro === "en" ? "English version" : "Versão em português"}">${outro.toUpperCase()}</a></nav></div>`;
    document.querySelectorAll("a.idioma").forEach(a => a.addEventListener("click", () => {
      try { localStorage.setItem("lang", a.dataset.lang); } catch (e) { /* sem storage */ }
    }));
    const f = $("#rodape");
    if (f) f.innerHTML = `<div class="contem"><span>© ${new Date().getFullYear()} ${esc(P.nome)} · ${UI.ficticio}</span>
      <span>${P.email ? `<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>` : ""}</span></div>`;
  }

  function botoesContato(extraClasse) {
    return `${P.linkedin ? `<a class="btn ${extraClasse || ""}" href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : ""}
      ${P.github ? `<a class="btn" href="${esc(P.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}
      ${P.curriculo ? `<a class="btn" href="${esc(P.curriculo)}" target="_blank" rel="noopener">${UI.curriculo}</a>` : ""}`;
  }

  function inicio() {
    const hero = $("#hero");
    if (!hero) return;
    document.title = `${P.nome} · ${t(P.cargo)}`;
    hero.innerHTML = `<div class="contem"><div class="eyebrow">${L === "en" ? "BI portfolio" : "Portfólio de BI"} · ${esc(t(P.localizacao))}</div>
      <h1>${esc(P.nome)}</h1><p class="cargo">${esc(t(P.cargo))}</p><p class="frase">${esc(t(P.frase))}</p>
      <div class="botoes"><a class="btn cheio" href="#projetos">${UI.verProjetos}</a>
        ${P.relatorio ? `<a class="btn" href="${esc(P.relatorio)}" target="_blank" rel="noopener">${UI.painel}</a>` : ""}
        ${botoesContato()}</div>
      <div class="ferramentas">${(P.ferramentas || []).map(f => `<span>${esc(t(f))}</span>`).join("")}</div></div>`;
    $("#t-projetos").textContent = UI.projetos; $("#t-dashboards").textContent = UI.dashboards; $("#t-intro").textContent = UI.introProjetos;
    $("#t-metodo").textContent = UI.metodo; $("#t-processo").textContent = UI.processo; $("#t-intro-processo").textContent = UI.introProcesso;
    $("#t-sobre").textContent = UI.sobre; $("#t-quem").textContent = UI.quem;
    $("#lista-casos").innerHTML = C.map(c => `<a class="caso" href="${esc(linkCom("caso.html", { id: c.id, lang: params.get("lang") }))}">
      <div class="img"><img src="${esc(img(c.imagens[0]))}" alt="${esc(t(c.titulo))}" loading="lazy"></div>
      <div class="txt"><div class="num">${esc(c.numero)}</div><h3>${esc(t(c.titulo))}</h3><div class="sub">${esc(t(c.subtitulo))}</div>
        <p>${esc(t(c.resumo))}</p><div class="tags">${(c.tags || []).map(x => `<span>${esc(t(x))}</span>`).join("")}</div>
        <div class="mais">${UI.abrir}</div></div></a>`).join("");
    $("#lista-processo").innerHTML = (P.processo || []).map((e, i) => `<div class="etapa"><div class="n">0${i + 1}</div>
      <h4>${esc(t(e.titulo))}</h4><p>${esc(t(e.texto))}</p></div>`).join("");
    $("#texto-sobre").innerHTML = (t(P.sobre) || []).map(p => `<p>${esc(p)}</p>`).join("") +
      `<div class="botoes" style="margin-top:20px">${P.email ? `<a class="btn cheio" href="mailto:${esc(P.email)}">${UI.contato}</a>` : ""}${botoesContato()}</div>`;
  }

  function caso() {
    const alvo = $("#caso");
    if (!alvo) return;
    const i = C.findIndex(c => c.id === params.get("id"));
    const c = C[i < 0 ? 0 : i];
    if (!c) { alvo.innerHTML = `<div class="contem"><p>${UI.naoEncontrado}</p></div>`; return; }
    document.title = `${t(c.titulo)} · ${P.nome}`;
    const prox = C[((i < 0 ? 0 : i) + 1) % C.length];
    const url = c.pagina ? embed(c.pagina) : "";
    const painel = url
      ? `<div class="painel"><div class="barra"><span>${UI.interativo}</span><a href="${esc(url)}" target="_blank" rel="noopener">${UI.tela}</a></div>
           <div class="moldura"><iframe title="${esc(t(c.titulo))}" src="${esc(url)}" allowfullscreen loading="lazy"></iframe></div></div>`
      : "";
    const prints = `<div class="galeria">${c.imagens.map(s => `<a href="${esc(img(s))}" target="_blank" rel="noopener"><img src="${esc(img(s))}" alt="${esc(t(c.titulo))}" loading="lazy"></a>`).join("")}</div>`;
    const repo = P.repositorio ? `<p style="margin-top:20px"><a class="btn" href="${esc(P.repositorio)}" target="_blank" rel="noopener">${UI.codigo}</a></p>` : "";
    alvo.innerHTML = `<div class="contem">
      <div class="caso-topo"><a class="voltar" href="${esc(linkCom("index.html#projetos", { lang: params.get("lang") }))}">${UI.todos}</a>
        <div class="eyebrow" style="margin-top:28px">${UI.caso} ${esc(c.numero)}</div>
        <h1>${esc(t(c.titulo))}</h1><p class="sub">${esc(t(c.resumo))}</p>
        <div class="tags">${(c.tags || []).map(x => `<span>${esc(t(x))}</span>`).join("")}</div>
        <div class="destaques">${(c.destaques || []).map(d => `<div><b>${esc(t(d.valor))}</b><span>${esc(t(d.rotulo))}</span></div>`).join("")}</div></div>
      ${painel || `<div class="eyebrow" style="margin-top:32px">${UI.previa}</div>${prints}`}
      <div class="texto-caso"><h2>${UI.oProblema}</h2><div><p>${esc(t(c.problema))}</p></div></div>
      <div class="texto-caso"><h2>${UI.oModelo}</h2><div><p>${esc(t(c.modelagem))}</p>
        ${c.matriz ? `<figure><img src="img/modelo-${L}.svg" alt="${UI.matriz}" loading="lazy"><figcaption>${UI.matriz}</figcaption></figure>` : ""}</div></div>
      <div class="texto-caso"><h2>${UI.decisoes}</h2><div><ul>${(t(c.decisoes) || []).map(d => `<li>${esc(d)}</li>`).join("")}</ul>${repo}</div></div>
      ${painel ? `<div class="texto-caso"><h2>${UI.previa}</h2><div>${prints}</div></div>` : ""}
      <div class="proximo"><a href="${esc(linkCom("index.html#projetos", { lang: params.get("lang") }))}"><small>${UI.voltar}</small><b>${UI.todosP}</b></a>
        <a href="${esc(linkCom("caso.html", { id: prox.id, lang: params.get("lang") }))}" style="text-align:right"><small>${UI.proximo}</small><b>${esc(t(prox.titulo))} →</b></a></div>
    </div>`;
  }

  topo(); inicio(); caso();
})();
