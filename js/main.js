/* =========================================================
   ML Obras — Interacciones (nav, reveal, portfolio, FAQ,
   lightbox y contacto vía WhatsApp)
   ========================================================= */
(function () {
  "use strict";

  var PHONE = "5491133088871";

  function t(key) {
    return window.MLI18N ? window.MLI18N.t(key) : "";
  }

  function waUrl(message) {
    return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message);
  }

  /* ---------- WhatsApp: precarga de mensajes según idioma ---------- */
  function updateWaLinks() {
    var nodes = document.querySelectorAll("[data-wa]");
    Array.prototype.forEach.call(nodes, function (el) {
      var key = el.getAttribute("data-wa");
      var msgKey = key === "quote" ? "wa.quote" : "wa.generic";
      el.setAttribute("href", waUrl(t(msgKey)));
    });
  }
  document.addEventListener("languagechange", updateWaLinks);

  /* ---------- Header: sombra al scrollear ---------- */
  var header = document.getElementById("site-header");
  var ticking = false;
  function onScroll() {
    if (!header || ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Tema claro / oscuro ---------- */
  var themeToggle = document.getElementById("theme-toggle");

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("mlobras-theme", theme); } catch (e) {}
    updateThemeLabel();
  }

  function updateThemeLabel() {
    if (!themeToggle) return;
    // El label indica la acción: si estamos en oscuro, el botón pasa a claro.
    themeToggle.setAttribute("aria-label", t(currentTheme() === "dark" ? "theme.light" : "theme.dark"));
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }
  document.addEventListener("languagechange", updateThemeLabel);

  /* ---------- Menú móvil ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");
  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function (a) {
      a.addEventListener("click", closeNav);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) closeNav();
    });
  }

  /* ---------- Scrollspy: link activo ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav__link");
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          Array.prototype.forEach.call(navLinks, function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    Array.prototype.forEach.call(sections, function (s) { spy.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    Array.prototype.forEach.call(revealEls, function (el, i) {
      el.style.transitionDelay = (Math.min(i, 5) * 60) + "ms";
      revObs.observe(el);
    });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Portafolio: filtros ---------- */
  var filters = document.querySelectorAll(".filter");
  var items = document.querySelectorAll(".portfolio__item");
  Array.prototype.forEach.call(filters, function (btn) {
    btn.addEventListener("click", function () {
      var cat = btn.getAttribute("data-filter");
      Array.prototype.forEach.call(filters, function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      Array.prototype.forEach.call(items, function (item) {
        var show = cat === "all" || item.getAttribute("data-cat") === cat;
        item.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- Portafolio: lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxContent = document.getElementById("lightbox-content");
  var lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(item) {
    if (!lightbox || !lightboxContent) return;
    var ph = item.querySelector(".portfolio__ph");
    lightboxContent.innerHTML = "";
    if (ph) lightboxContent.appendChild(ph.cloneNode(true));
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    if (lightboxClose) lightboxClose.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxContent.innerHTML = "";
    document.body.style.overflow = "";
  }
  Array.prototype.forEach.call(items, function (item) {
    item.addEventListener("click", function () { openLightbox(item); });
  });
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* ---------- FAQ: acordeón animado (solo uno abierto) ---------- */
  var faqItems = document.querySelectorAll(".faq__item");
  Array.prototype.forEach.call(faqItems, function (item) {
    var btn = item.querySelector(".faq__q");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var willOpen = !item.classList.contains("is-open");

      Array.prototype.forEach.call(faqItems, function (other) {
        if (other === item) return;
        other.classList.remove("is-open");
        var otherBtn = other.querySelector(".faq__q");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
      });

      item.classList.toggle("is-open", willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  });

  /* ---------- Formulario de contacto -> WhatsApp ---------- */
  var form = document.getElementById("contact-form");
  var feedback = document.getElementById("form-feedback");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var f = form.elements;
      var name = (f.name.value || "").trim();
      var email = (f.email.value || "").trim();
      var service = f.service.value || "";
      var message = (f.message.value || "").trim();

      if (!name || !message) {
        if (feedback) feedback.textContent = t("form.error");
        return;
      }
      if (feedback) feedback.textContent = "";

      var text = t("wa.form")
        .replace("{name}", name)
        .replace("{email}", email || "—")
        .replace("{service}", service)
        .replace("{message}", message);

      window.open(waUrl(text), "_blank", "noopener");
      form.reset();
    });
  }

  /* ---------- Año dinámico ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Init ---------- */
  updateWaLinks();
  updateThemeLabel();
  onScroll();
})();
