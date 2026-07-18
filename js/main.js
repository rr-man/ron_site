/* ==========================================================================
   Ron · Portfolio — behavior
   No framework, no build step. Runs on DOMContentLoaded (script is deferred).
   Responsibilities:
     1. Theme toggle (persisted to localStorage, respects OS preference)
     2. Mobile nav toggle
     3. Render project cards from window.PROJECTS (js/projects.js)
     4. Footer year
   ========================================================================== */
(function () {
  "use strict";

  const THEME_KEY = "ron-site-theme";

  /* --- Theme -------------------------------------------------------------- */
  function preferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function initTheme() {
    applyTheme(preferredTheme());
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* --- Mobile nav --------------------------------------------------------- */
  function initNav() {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close the menu after tapping a link (mobile).
    menu.addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Projects ----------------------------------------------------------- */
  // External links always open in a new tab with rel="noopener".
  function makeLink(href, text, className) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.className = className;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  }

  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    const projects = window.PROJECTS;
    if (!grid || !Array.isArray(projects)) return;

    const fragment = document.createDocumentFragment();

    projects.forEach(function (p) {
      const li = document.createElement("li");
      li.className = "project-card";

      const title = document.createElement("h3");
      title.className = "project-card__title";
      title.textContent = p.title;

      const desc = document.createElement("p");
      desc.className = "project-card__desc";
      desc.textContent = p.description;

      const tags = document.createElement("ul");
      tags.className = "project-card__tags";
      (p.tags || []).forEach(function (tag) {
        const tagLi = document.createElement("li");
        tagLi.textContent = tag;
        tags.appendChild(tagLi);
      });

      li.append(title, desc, tags);

      const links = document.createElement("div");
      links.className = "project-card__links";

      if (p.demo) {
        links.appendChild(makeLink(p.demo, "Live demo →", "btn btn--primary btn--sm"));
      }
      if (p.repo) {
        links.appendChild(makeLink(p.repo, "View code", "project-card__code"));
      }
      if (links.children.length) li.appendChild(links);

      fragment.appendChild(li);
    });

    grid.replaceChildren(fragment);
  }

  /* --- Misc --------------------------------------------------------------- */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* --- Boot --------------------------------------------------------------- */
  initTheme();
  initNav();
  renderProjects();
  initYear();
})();
