/* ==========================================================================
   TENDER SERVICES WEBSITE — MAIN SCRIPT
   Vanilla JavaScript only — no dependencies
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initStickyHeader();
  initMobileNav();
  initScrollReveal();
  initCounters();
  initFaqAccordion();
  initBackToTop();
  initContactForm();
  setActiveNavLink();
  initYear();
});

/* ---------- Sticky Navbar ---------- */
function initStickyHeader() {
  var header = document.querySelector(".site-header");
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile Navigation ---------- */
function initMobileNav() {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    nav.classList.toggle("open");
    document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.classList.remove("active");
      nav.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* ---------- Scroll-triggered Fade-in Animations ---------- */
function initScrollReveal() {
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  items.forEach(function (el) { observer.observe(el); });
}

/* ---------- Animated Counters ---------- */
function initCounters() {
  var counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var duration = 1600;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = target % 1 === 0 ? Math.floor(value) : value.toFixed(1);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target % 1 === 0 ? target : target.toFixed(1);
      }
    }

    window.requestAnimationFrame(step);
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach(function (el) { observer.observe(el); });
}

/* ---------- FAQ Accordion ---------- */
function initFaqAccordion() {
  var items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {
      var isActive = item.classList.contains("active");

      items.forEach(function (other) {
        other.classList.remove("active");
        other.querySelector(".faq-answer").style.maxHeight = null;
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ---------- Back to Top Button ---------- */
function initBackToTop() {
  var btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 500) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    },
    { passive: true }
  );

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Contact Form Validation ---------- */
function initContactForm() {
  var form = document.querySelector("#contact-form");
  if (!form) return;

  var successBox = document.querySelector(".form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;

    var fields = form.querySelectorAll("[data-required]");
    fields.forEach(function (field) {
      var wrapper = field.closest(".field");
      var value = field.value.trim();
      var isValid = value.length > 0;

      if (field.type === "email" && value.length > 0) {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }

      if (field.type === "tel" && value.length > 0) {
        isValid = /^[0-9+\-\s()]{7,20}$/.test(value);
      }

      if (!isValid) {
        wrapper.classList.add("invalid");
        valid = false;
      } else {
        wrapper.classList.remove("invalid");
      }
    });

    if (valid) {
      form.reset();
      if (successBox) {
        successBox.classList.add("show");
        successBox.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(function () {
          successBox.classList.remove("show");
        }, 6000);
      }
    }
  });

  form.querySelectorAll("[data-required]").forEach(function (field) {
    field.addEventListener("input", function () {
      field.closest(".field").classList.remove("invalid");
    });
  });
}

/* ---------- Highlight Active Nav Link ---------- */
function setActiveNavLink() {
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------- Footer Year ---------- */
function initYear() {
  var el = document.querySelector("#current-year");
  if (el) el.textContent = new Date().getFullYear();
}
