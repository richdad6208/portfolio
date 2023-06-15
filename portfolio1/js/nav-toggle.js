const navToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  navigation.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "false")
    : navToggle.setAttribute("aria-expanded", "true");
  navigation.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
  
});
