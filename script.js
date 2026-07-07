(function () {
  var menuButton = document.querySelector(".menu-button");
  var siteNav = document.querySelector(".site-nav");
  if (menuButton && siteNav) {
    menuButton.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", isOpen);
    });
  }

  var rm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    }, { threshold: 0.16 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
  }

  var prog = document.createElement("div");
  prog.id = "progress";
  document.body.appendChild(prog);
  var hero = document.querySelector(".portfolio-hero");
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (h > 0 ? (y / h * 100) : 0) + "%";
    if (hero && !rm) hero.style.backgroundPositionY = (y * 0.15) + "px";
  }, { passive: true });
})();
