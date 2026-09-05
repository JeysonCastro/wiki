(() => {
  const wiki = window.ATLAS_WIKI;
  const pages = wiki.pages;
  const orderedIds = wiki.groups.flatMap(group => group.pages);
  const navigation = document.getElementById("navigation");
  const content = document.getElementById("content");
  const breadcrumbs = document.getElementById("breadcrumbs");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  const menuButton = document.getElementById("menuButton");
  const searchInput = document.getElementById("searchInput");
  const modal = document.getElementById("searchModal");
  const modalInput = document.getElementById("modalSearchInput");
  const results = document.getElementById("searchResults");
  const closeSearch = document.getElementById("closeSearch");
  const themeButton = document.getElementById("themeButton");

  const icons = {
    inicio: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5M9 21v-7h6v7"/>',
    "primeiros-passos": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "entenda-atlas": '<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>',
    atendimentos: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 9h10M7 13h7M7 17h4"/>',
    conversa: '<path d="M21 12a8 8 0 0 1-8 8H6l-3 2v-7a8 8 0 1 1 18-3Z"/>',
    "novo-atendimento": '<path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/>',
    "dados-cliente": '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    financeiro: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M7 15h3"/>',
    grupos: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20a6 6 0 0 1 12 0M14 16a5 5 0 0 1 7 4"/>',
    "chat-interno": '<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 10h8"/>',
    tarefas: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="m8 12 2.5 2.5L16 9M8 6h8"/>',
    reunioes: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10 5-3v10l-5-3"/>',
    "atlas-pulse": '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
    "agenda-os": '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01"/>',
    onu: '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="m8 12 2.5 2.5L16 9"/>',
    telefonia: '<path d="M7 4h3l1.5 5-2 1.5a15 15 0 0 0 4 4l1.5-2 5 1.5v3c0 1.7-1.3 3-3 3A13 13 0 0 1 4 7c0-1.7 1.3-3 3-3Z"/>',
    "smart-pager": '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    crm: '<path d="M4 4h16v16H4zM4 9h16M9 4v16"/>',
    metricas: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    automacoes: '<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>',
    administracao: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
    integracoes: '<path d="M8 12h8M6 8l-4 4 4 4M18 8l4 4-4 4"/>'
  };
  const iconSvg = name => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[name] || icons["entenda-atlas"]}</svg>`;
  const utilityIcon = name => ({
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>'
  }[name]);

  const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

  function buildNavigation() {
    navigation.innerHTML = wiki.groups.map(group => `
      <section class="nav-group">
        <span class="nav-label">${escapeHtml(group.label)}</span>
        ${group.pages.map(id => {
          const page = pages[id];
          return `<a class="nav-link" data-page-id="${id}" href="#/${id}"><span class="nav-icon">${iconSvg(id)}</span><span>${escapeHtml(page.shortTitle)}</span></a>`;
        }).join("")}
      </section>`).join("");
  }

  function renderSection(section) {
    let html = `<section><h2>${escapeHtml(section.heading)}</h2>`;
    if (section.cards) html += `<div class="topic-grid">${section.cards.map(([id, title, text]) => `<a class="topic-card" href="#/${id}"><span class="topic-card-icon">${iconSvg(id)}</span><span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p></span></a>`).join("")}</div>`;
    if (section.steps) html += `<ol class="steps">${section.steps.map(([title, text]) => `<li><strong>${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p></li>`).join("")}</ol>`;
    if (section.bullets) html += `<ul class="bullets">${section.bullets.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    if (section.list) html += `<div class="feature-list">${section.list.map(([title, text]) => `<div class="feature-row"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></div>`).join("")}</div>`;
    if (section.note) html += `<div class="note"><strong>Vale saber</strong>${escapeHtml(section.note)}</div>`;
    if (section.warning) html += `<div class="warning"><strong>Atenção</strong>${escapeHtml(section.warning)}</div>`;
    return html + `</section>`;
  }

  function articleNavigation(id) {
    const index = orderedIds.indexOf(id);
    const previous = pages[orderedIds[index - 1]];
    const next = pages[orderedIds[index + 1]];
    return `<nav class="article-nav" aria-label="Páginas relacionadas">
      ${previous ? `<a href="#/${orderedIds[index - 1]}"><small>← Anterior</small>${escapeHtml(previous.shortTitle)}</a>` : `<span></span>`}
      ${next ? `<a href="#/${orderedIds[index + 1]}"><small>Próximo →</small>${escapeHtml(next.shortTitle)}</a>` : ``}
    </nav>`;
  }

  function currentId() {
    const id = location.hash.replace(/^#\/?/, "") || "inicio";
    return pages[id] ? id : "inicio";
  }

  function renderPage() {
    const id = currentId();
    const page = pages[id];
    document.title = `${page.shortTitle} | Central Atlas`;
    breadcrumbs.innerHTML = `${escapeHtml(page.category)} <span aria-hidden="true">/</span> <strong>${escapeHtml(page.shortTitle)}</strong>`;
    content.innerHTML = `
      <article>
        <div class="article-eyebrow">${escapeHtml(page.category)}</div>
        <h1>${escapeHtml(page.title)}</h1>
        <p class="article-description">${escapeHtml(page.description)}</p>
        <div class="article-meta"><span>Atualizado em 03/09/2026</span><span>Leitura: ${escapeHtml(page.time)}</span><span>PT · ES · EN em preparação</span></div>
        ${renderScreenshots(page)}
        ${page.intro || ""}
        ${page.sections.map(renderSection).join("")}
        ${articleNavigation(id)}
      </article>`;
    navigation.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.pageId === id));
    closeSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
    content.focus({ preventScroll: true });
  }

  function renderScreenshots(page) {
    const screenshots = page.images || (page.image ? [{ src: page.image, alt: page.imageAlt, caption: page.imageCaption }] : []);
    if (!screenshots.length) return "";
    return `<div class="feature-gallery${screenshots.length > 1 ? " feature-gallery-multiple" : ""}">${screenshots.map((shot, index) => `
      <figure class="feature-shot">
        <button type="button" class="feature-shot-open" aria-label="Ampliar imagem: ${escapeHtml(shot.alt || page.shortTitle)}">
          <img src="${escapeHtml(shot.src)}" alt="${escapeHtml(shot.alt || `Tela do Atlas: ${page.shortTitle}`)}" loading="${index === 0 ? "eager" : "lazy"}">
          <span aria-hidden="true">Ampliar ↗</span>
        </button>
        <figcaption>${escapeHtml(shot.caption || `Conheça a área de ${page.shortTitle} no Atlas.`)}</figcaption>
      </figure>`).join("")}</div>`;
  }

  function closeImageViewer() {
    const viewer = document.querySelector(".image-viewer");
    if (viewer) viewer.remove();
    document.body.style.overflow = "";
  }

  content.addEventListener("click", event => {
    const button = event.target.closest(".feature-shot-open");
    if (!button) return;
    const image = button.querySelector("img");
    const viewer = document.createElement("div");
    viewer.className = "image-viewer";
    viewer.innerHTML = `<button type="button" aria-label="Fechar imagem">×</button><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}">`;
    viewer.addEventListener("click", viewerEvent => { if (viewerEvent.target === viewer || viewerEvent.target.tagName === "BUTTON") closeImageViewer(); });
    document.body.appendChild(viewer);
    document.body.style.overflow = "hidden";
  });

  function searchableText(id) {
    const page = pages[id];
    return [page.title, page.shortTitle, page.description, page.category, JSON.stringify(page.sections)].join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function performSearch(query) {
    const clean = query.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const matches = clean ? orderedIds.filter(id => searchableText(id).includes(clean)).slice(0, 10) : orderedIds.slice(0, 7);
    results.innerHTML = matches.length ? matches.map(id => `<a class="search-result" href="#/${id}"><strong>${escapeHtml(pages[id].shortTitle)}</strong><span>${escapeHtml(pages[id].description)}</span></a>`).join("") : `<div class="empty-search">Nenhum guia encontrado. Tente outra palavra.</div>`;
  }

  function openSearch(query = "") {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modalInput.value = query;
    performSearch(query);
    setTimeout(() => modalInput.focus(), 0);
  }

  function dismissSearch() {
    modal.hidden = true;
    document.body.style.overflow = "";
    searchInput.value = "";
  }

  function openSidebar() {
    sidebar.classList.add("open");
    backdrop.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    backdrop.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("atlas-wiki-theme", theme);
    themeButton.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${utilityIcon(theme === "dark" ? "sun" : "moon")}</svg>`;
  }

  buildNavigation();
  const storedTheme = localStorage.getItem("atlas-wiki-theme");
  setTheme(storedTheme || "dark");
  renderPage();

  addEventListener("hashchange", () => { renderPage(); if (!modal.hidden) dismissSearch(); });
  menuButton.addEventListener("click", () => sidebar.classList.contains("open") ? closeSidebar() : openSidebar());
  backdrop.addEventListener("click", closeSidebar);
  themeButton.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  searchInput.addEventListener("focus", () => openSearch(searchInput.value));
  searchInput.addEventListener("input", event => openSearch(event.target.value));
  modalInput.addEventListener("input", event => performSearch(event.target.value));
  closeSearch.addEventListener("click", dismissSearch);
  modal.addEventListener("click", event => { if (event.target === modal) dismissSearch(); });
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openSearch(); }
    if (event.key === "Escape") { if (document.querySelector(".image-viewer")) closeImageViewer(); else if (!modal.hidden) dismissSearch(); else closeSidebar(); }
  });
})();
