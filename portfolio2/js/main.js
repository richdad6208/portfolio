// navToggle

const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  if (nav.hasAttribute("data-visible"))
    navToggle.setAttribute("aria-expanded", "false");
  else navToggle.setAttribute("aria-expanded", "true");
  nav.toggleAttribute("data-visible");
});
