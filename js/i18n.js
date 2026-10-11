/* =========================================================
   ML Obras — Internacionalización ES / EN
   Diccionario en memoria (sin fetch) + toggle persistente.
   ========================================================= */
(function () {
  "use strict";

  var STORAGE_KEY = "mlobras-lang";

  var translations = {
    es: {
      "meta.title": "ML Obras | Construcción, Reformas y Mantenimiento en Chascomús",
      "meta.description": "ML Obras, más de 20 años de experiencia en construcción, reformas, instalaciones, ampliaciones y mantenimiento integral. Chascomús, Buenos Aires. Presupuesto sin cargo.",

      "nav.home": "Inicio",
      "nav.about": "Nosotros",
      "nav.services": "Servicios",
      "nav.portfolio": "Portafolio",
      "nav.contact": "Contacto",
      "nav.cta": "Pedí tu presupuesto",

      "hero.eyebrow": "Construcción · Reformas · Mantenimiento",
      "hero.title": "Transformamos tu hogar en el lugar que soñás",
      "hero.subtitle": "Más de 20 años de experiencia en construcción, reformas, instalaciones, ampliaciones y mantenimiento integral para tu casa.",
      "hero.ctaPrimary": "Pedí tu presupuesto",
      "hero.ctaSecondary": "Sobre nosotros",
      "hero.stat1": "años de experiencia",
      "hero.stat2": "proyectos realizados",
      "hero.stat3": "y zona de cobertura",

      "about.tag": "Sobre nosotros",
      "about.title": "Construyendo confianza, calidad y soluciones a medida",
      "about.lead": "Somos una empresa familiar con más de 20 años en el rubro. Cada proyecto lo encaramos con dedicación, como si fuera para nuestra propia casa.",
      "about.card1.title": "Compromiso y Confianza",
      "about.card1.text": "La calidad está en el trato y en el trabajo. Cumplimos con lo que prometemos, trabajando con honestidad y cuidando tu inversión como si fuera propia.",
      "about.card2.title": "Experiencia Familiar",
      "about.card2.text": "Más de 20 años en el rubro. Somos una empresa familiar con trayectoria en construcción y reformas, con dedicación en cada proyecto.",
      "about.card3.title": "Soluciones Integrales",
      "about.card3.text": "Todo lo que tu hogar necesita: desde instalaciones y mantenimiento hasta ampliaciones y remodelaciones. Nos ocupamos de cada detalle.",

      "proceso.tag": "Cómo trabajamos",
      "proceso.title": "Tu proyecto, paso a paso",
      "proceso.lead": "Un proceso claro y transparente, del primer contacto a la entrega final. Sabés en qué etapa estás siempre.",
      "proceso.s1.title": "Visita y asesoramiento",
      "proceso.s1.text": "Nos acercamos a tu casa, escuchamos tu idea y relevamos el lugar. Sin cargo y sin compromiso.",
      "proceso.s2.title": "Presupuesto sin cargo",
      "proceso.s2.text": "Te armamos un presupuesto claro y por escrito, con plazos y materiales, para que decidas tranquilo.",
      "proceso.s3.title": "Ejecución y seguimiento",
      "proceso.s3.text": "Trabajamos con orden y prolijidad, avisándote en cada etapa. Vos seguís tu obra de cerca.",
      "proceso.s4.title": "Entrega y garantía",
      "proceso.s4.text": "Entregamos todo limpio y terminado, y quedamos a disposición ante cualquier consulta posterior.",
      "proceso.cta": "Arrancá tu proyecto",

      "services.tag": "Mis servicios",
      "services.title": "Soluciones completas para tu casa",
      "services.lead": "Desde obras nuevas hasta mantenimientos generales, brindamos servicios confiables, eficientes y personalizados para mejorar cada rincón de tu hogar. Combinamos experiencia, materiales de calidad y compromiso en cada proyecto.",
      "services.s1.title": "Construcción",
      "services.s1.text": "Obras nuevas, ampliaciones y estructuras con materiales de calidad y terminaciones cuidadas.",
      "services.s2.title": "Reformas",
      "services.s2.text": "Remodelación de baños, cocinas, fachadas y patios, optimizando cada espacio.",
      "services.s3.title": "Instalaciones",
      "services.s3.text": "Electricidad, plomería, gas y climatización, ejecutadas con seguridad y prolijidad.",
      "services.s4.title": "Mantenimiento",
      "services.s4.text": "Servicio integral y periódico para conservar tu hogar en perfecto estado.",
      "services.cta": "Consultá por tu proyecto",

      "portfolio.tag": "Mis proyectos",
      "portfolio.title": "Trabajos realizados",
      "portfolio.lead": "Conocé algunos de nuestros proyectos en baños, cocinas, fachadas, patios e instalaciones. Calidad, detalle y satisfacción del cliente en cada obra.",
      "portfolio.filter.all": "Todos",
      "portfolio.filter.bath": "Baños",
      "portfolio.filter.kitchen": "Cocinas",
      "portfolio.filter.facade": "Fachadas",
      "portfolio.filter.patio": "Patios",
      "portfolio.filter.install": "Instalaciones",
      "portfolio.item": "Ver proyecto",
      "portfolio.p1": "Remodelación completa del baño: revestimientos, sanitarios y grifería.",
      "portfolio.p2": "Renovación integral de cocina con mesada nueva y artefactos.",
      "portfolio.p3": "Refacción de fachada con revoque, zócalos y pintura.",
      "portfolio.p4": "Reacondicionamiento de patio: solados, canaletas y perímetro.",
      "portfolio.p5": "Instalación eléctrica y de luminarias en interior y exterior.",
      "portfolio.p6": "Baño renovado con ducha, mampara y nueva grifería.",
      "portfolio.p7": "Cocina ampliada con agrupación de instalaciones y terminaciones.",
      "portfolio.p8": "Frente y pintura exterior con sellado de grietas y paredes.",

      "testimonials.tag": "Testimonios",
      "testimonials.title": "Lo que dicen nuestros clientes",
      "testimonials.lead": "La confianza se construye obra tras obra. Estas son algunas opiniones de quienes ya trabajaron con nosotros.",
      "testimonials.t1.text": "“Nos reformaron el baño completo y quedó impecable. Cumplieron los plazos y dejaron todo limpio. Muy recomendables.”",
      "testimonials.t1.name": "Laura G.",
      "testimonials.t1.role": "Chascomús",
      "testimonials.t2.text": "“Hicieron la ampliación de nuestra casa. Excelente trato, prolijidad y materiales de primera. Un equipo de confianza.”",
      "testimonials.t2.name": "Roberto M.",
      "testimonials.t2.role": "Lezama",
      "testimonials.t3.text": "“Renovaron la cocina y las instalaciones. Siempre atentos a cada detalle y muy claros con el presupuesto.”",
      "testimonials.t3.name": "Silvina P.",
      "testimonials.t3.role": "Chascomús",
      "testimonials.t4.text": "“Hicieron la instalación eléctrica completa de la casa. Trabajo prolijo, seguro y en el plazo acordado.”",
      "testimonials.t4.name": "Marcos D.",
      "testimonials.t4.role": "Castelli",
      "testimonials.t5.text": "“Reformaron el patio y quedó hermoso. Precios claros, cero sorpresas y terminaron antes de lo previsto.”",
      "testimonials.t5.name": "Carolina F.",
      "testimonials.t5.role": "Ranchos",
      "testimonials.t6.text": "“Revoque y pintura de toda la fachada. Impecable el trabajo y la atención en cada consulta.”",
      "testimonials.t6.name": "Jorge R.",
      "testimonials.t6.role": "Dolores",

      "faq.tag": "Preguntas frecuentes",
      "faq.title": "Resolvemos tus dudas",
      "faq.q1": "¿El presupuesto tiene costo?",
      "faq.a1": "No. El presupuesto y la visita de asesoramiento son sin cargo y sin compromiso.",
      "faq.q2": "¿Qué zonas cubren?",
      "faq.a2": "Trabajamos en Chascomús y localidades cercanas de la zona. Consultanos por tu ubicación.",
      "faq.q3": "¿Cuánto demora una obra?",
      "faq.a3": "Depende del tipo y tamaño del proyecto. En la visita te damos un plazo estimado claro antes de comenzar.",
      "faq.q4": "¿Trabajan con materiales propios o del cliente?",
      "faq.a4": "Podemos encargarnos de todo, incluida la compra de materiales de calidad, o trabajar con los que aporte el cliente.",
      "faq.q5": "¿Ofrecen garantía por el trabajo?",
      "faq.a5": "Sí. Respaldamos cada trabajo realizado y quedamos a disposición ante cualquier consulta posterior.",

      "contact.tag": "Contacto",
      "contact.title": "¿Tenés un proyecto en mente?",
      "contact.lead": "Escribinos para solicitar un presupuesto, hacer una consulta o coordinar una visita. Respondemos rápido y con atención personalizada.",
      "contact.addressLabel": "Dirección",
      "contact.emailLabel": "Correo",
      "contact.hoursLabel": "Horarios",
      "contact.hours": "Lunes a Sábado de 8 a 18 h",

      "lightbox.cta": "Quiero algo similar",

      "form.title": "Pedí tu presupuesto",
      "form.name": "Nombre",
      "form.email": "Correo (opcional)",
      "form.service": "Tipo de servicio",
      "form.serviceOther": "Otro / Varios",
      "form.message": "Mensaje",
      "form.submit": "Enviar por WhatsApp",
      "form.note": "Al enviar se abrirá WhatsApp con tu mensaje ya escrito. También podés escribirnos directamente.",
      "form.error": "Por favor completá tu nombre y el mensaje.",

      "footer.desc": "Construcción, reformas, instalaciones y mantenimiento integral en Chascomús y zona.",
      "footer.rights": "Todos los derechos reservados.",
      "footer.credit": "Desarrollado por Bytech Technology.",

      "theme.dark": "Cambiar a modo oscuro",
      "theme.light": "Cambiar a modo claro",

      "carousel.prev": "Testimonio anterior",
      "carousel.next": "Testimonio siguiente",
      "carousel.dot": "Ir al testimonio",
      "misc.top": "Volver arriba",

      "wa.generic": "Hola ML Obras, quisiera hacer una consulta.",
      "wa.quote": "Hola ML Obras, quiero pedir un presupuesto para un proyecto.",
      "wa.form": "Hola ML Obras, quiero pedir un presupuesto.\n\nNombre: {name}\nCorreo: {email}\nServicio: {service}\nMensaje: {message}"
    },

    en: {
      "meta.title": "ML Obras | Construction, Renovation & Maintenance in Chascomús",
      "meta.description": "ML Obras: over 20 years of experience in construction, renovation, installations, extensions and full home maintenance. Chascomús, Buenos Aires. Free quote.",

      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "nav.cta": "Get a quote",

      "hero.eyebrow": "Construction · Renovation · Maintenance",
      "hero.title": "We turn your home into the place you dream of",
      "hero.subtitle": "Over 20 years of experience in construction, renovation, installations, extensions and full maintenance for your home.",
      "hero.ctaPrimary": "Get a quote",
      "hero.ctaSecondary": "About us",
      "hero.stat1": "years of experience",
      "hero.stat2": "projects completed",
      "hero.stat3": "and surrounding area",

      "about.tag": "About us",
      "about.title": "Building trust, quality and tailored solutions",
      "about.lead": "We are a family business with over 20 years in the trade. We approach every project with dedication, as if it were our own home.",
      "about.card1.title": "Commitment & Trust",
      "about.card1.text": "Quality lies in how we treat people and in our work. We deliver what we promise, acting honestly and looking after your investment as if it were our own.",
      "about.card2.title": "Family Experience",
      "about.card2.text": "Over 20 years in the trade. We are a family business with a track record in construction and renovation, with care in every project.",
      "about.card3.title": "Complete Solutions",
      "about.card3.text": "Everything your home needs: from installations and maintenance to extensions and remodeling. We take care of every detail.",

      "proceso.tag": "How we work",
      "proceso.title": "Your project, step by step",
      "proceso.lead": "A clear, transparent process from the first contact to final delivery. You always know which stage your project is in.",
      "proceso.s1.title": "Visit & advice",
      "proceso.s1.text": "We come to your home, listen to your idea and survey the site. Free and with no obligation.",
      "proceso.s2.title": "Free quote",
      "proceso.s2.text": "We prepare a clear written quote, with timelines and materials, so you can decide with peace of mind.",
      "proceso.s3.title": "Execution & follow-up",
      "proceso.s3.text": "We work tidily and keep you updated at every stage. You follow your project up close.",
      "proceso.s4.title": "Delivery & warranty",
      "proceso.s4.text": "We hand over everything clean and finished, and remain available for any follow-up questions.",
      "proceso.cta": "Start your project",

      "services.tag": "My services",
      "services.title": "Complete solutions for your home",
      "services.lead": "From new builds to general maintenance, we deliver reliable, efficient and tailored services to improve every corner of your home. We combine experience, quality materials and commitment in every project.",
      "services.s1.title": "Construction",
      "services.s1.text": "New builds, extensions and structures with quality materials and careful finishes.",
      "services.s2.title": "Renovation",
      "services.s2.text": "Remodeling of bathrooms, kitchens, facades and patios, making the most of every space.",
      "services.s3.title": "Installations",
      "services.s3.text": "Electrical, plumbing, gas and HVAC, carried out safely and neatly.",
      "services.s4.title": "Maintenance",
      "services.s4.text": "Comprehensive, ongoing service to keep your home in perfect condition.",
      "services.cta": "Ask about your project",

      "portfolio.tag": "My projects",
      "portfolio.title": "Completed work",
      "portfolio.lead": "Take a look at some of our projects in bathrooms, kitchens, facades, patios and installations. Quality, detail and client satisfaction in every job.",
      "portfolio.filter.all": "All",
      "portfolio.filter.bath": "Bathrooms",
      "portfolio.filter.kitchen": "Kitchens",
      "portfolio.filter.facade": "Facades",
      "portfolio.filter.patio": "Patios",
      "portfolio.filter.install": "Installations",
      "portfolio.item": "View project",
      "portfolio.p1": "Complete bathroom remodel: tiling, sanitary ware and faucets.",
      "portfolio.p2": "Full kitchen renovation with new countertop and fittings.",
      "portfolio.p3": "Facade refurbishment with rendering, skirting and paint.",
      "portfolio.p4": "Patio reconditioning: paving, gutters and perimeter.",
      "portfolio.p5": "Electrical and lighting installation indoors and outdoors.",
      "portfolio.p6": "Renovated bathroom with shower, screen and new faucets.",
      "portfolio.p7": "Extended kitchen with grouped installations and finishes.",
      "portfolio.p8": "Frontage and exterior painting with crack sealing and walls.",

      "testimonials.tag": "Testimonials",
      "testimonials.title": "What our clients say",
      "testimonials.lead": "Trust is built job after job. These are some reviews from people who have already worked with us.",
      "testimonials.t1.text": "“They fully renovated our bathroom and it turned out flawless. They met the deadlines and left everything clean. Highly recommended.”",
      "testimonials.t1.name": "Laura G.",
      "testimonials.t1.role": "Chascomús",
      "testimonials.t2.text": "“They built the extension to our house. Excellent service, neat work and top-quality materials. A team you can trust.”",
      "testimonials.t2.name": "Roberto M.",
      "testimonials.t2.role": "Lezama",
      "testimonials.t3.text": "“They renovated the kitchen and the installations. Always attentive to every detail and very clear with the quote.”",
      "testimonials.t3.name": "Silvina P.",
      "testimonials.t3.role": "Chascomús",
      "testimonials.t4.text": "“They did the complete electrical installation of the house. Neat, safe work delivered on schedule.”",
      "testimonials.t4.name": "Marcos D.",
      "testimonials.t4.role": "Castelli",
      "testimonials.t5.text": "“They remodeled the patio and it looks beautiful. Clear pricing, zero surprises and they finished ahead of time.”",
      "testimonials.t5.name": "Carolina F.",
      "testimonials.t5.role": "Ranchos",
      "testimonials.t6.text": "“Rendering and painting of the whole facade. Flawless work and great attention with every question.”",
      "testimonials.t6.name": "Jorge R.",
      "testimonials.t6.role": "Dolores",

      "faq.tag": "Frequently asked questions",
      "faq.title": "We answer your questions",
      "faq.q1": "Is the quote free?",
      "faq.a1": "No cost. The quote and the advisory visit are free and with no obligation.",
      "faq.q2": "Which areas do you cover?",
      "faq.a2": "We work in Chascomús and nearby towns in the area. Ask us about your location.",
      "faq.q3": "How long does a job take?",
      "faq.a3": "It depends on the type and size of the project. On the visit we give you a clear estimated timeframe before starting.",
      "faq.q4": "Do you work with your own materials or the client's?",
      "faq.a4": "We can take care of everything, including buying quality materials, or work with the ones you provide.",
      "faq.q5": "Do you offer a warranty on the work?",
      "faq.a5": "Yes. We stand behind every job and remain available for any follow-up questions.",

      "contact.tag": "Contact",
      "contact.title": "Do you have a project in mind?",
      "contact.lead": "Write to us to request a quote, ask a question or arrange a visit. We reply fast and with personal attention.",
      "contact.addressLabel": "Address",
      "contact.emailLabel": "Email",
      "contact.hoursLabel": "Opening hours",
      "contact.hours": "Monday to Saturday, 8 am – 6 pm",

      "lightbox.cta": "I want something similar",

      "form.title": "Get a quote",
      "form.name": "Name",
      "form.email": "Email (optional)",
      "form.service": "Type of service",
      "form.serviceOther": "Other / Various",
      "form.message": "Message",
      "form.submit": "Send via WhatsApp",
      "form.note": "On submit, WhatsApp will open with your message already written. You can also write to us directly.",
      "form.error": "Please fill in your name and message.",

      "footer.desc": "Construction, renovation, installations and full home maintenance in Chascomús and the surrounding area.",
      "footer.rights": "All rights reserved.",
      "footer.credit": "Developed by Bytech Technology.",

      "theme.dark": "Switch to dark mode",
      "theme.light": "Switch to light mode",

      "carousel.prev": "Previous testimonial",
      "carousel.next": "Next testimonial",
      "carousel.dot": "Go to testimonial",
      "misc.top": "Back to top",

      "wa.generic": "Hi ML Obras, I'd like to ask a question.",
      "wa.quote": "Hi ML Obras, I'd like to request a quote for a project.",
      "wa.form": "Hi ML Obras, I'd like to request a quote.\n\nName: {name}\nEmail: {email}\nService: {service}\nMessage: {message}"
    }
  };

  function normalize(lang) {
    return String(lang || "").toLowerCase().indexOf("en") === 0 ? "en" : "es";
  }

  function t(key, lang) {
    var dict = translations[lang] || translations.es;
    return dict[key] || (translations.es[key] || key);
  }

  function getLang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "es";
  }

  function applyLanguage(lang) {
    var code = normalize(lang);

    // Textos
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var value = t(key, code);
      if (value) nodes[i].textContent = value;
    }

    // Atributos aria-label
    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var j = 0; j < ariaNodes.length; j++) {
      var akey = ariaNodes[j].getAttribute("data-i18n-aria");
      var tag = ariaNodes[j].querySelector(".portfolio__tag");
      var label = t(akey, code);
      if (tag) label += ": " + tag.textContent;
      ariaNodes[j].setAttribute("aria-label", label);
    }

    // Meta
    document.documentElement.setAttribute("lang", code);
    document.title = t("meta.title", code);
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description", code));
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("meta.title", code));
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("meta.description", code));

    // Switch activo
    var btns = document.querySelectorAll(".lang-switch__btn");
    for (var k = 0; k < btns.length; k++) {
      var isActive = btns[k].getAttribute("data-lang") === code;
      btns[k].classList.toggle("is-active", isActive);
      btns[k].setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {}

    // Notificar al resto de la app (WhatsApp, form, etc.)
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: code } }));
  }

  function initialLang() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved) return normalize(saved);
    return normalize(navigator.language || "es");
  }

  // API pública
  window.MLI18N = {
    translations: translations,
    getLang: getLang,
    t: function (key) { return t(key, getLang()); },
    setLanguage: applyLanguage
  };

  // Init
  function init() {
    applyLanguage(initialLang());
    var btns = document.querySelectorAll(".lang-switch__btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        applyLanguage(this.getAttribute("data-lang"));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
