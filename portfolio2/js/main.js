// navToggle

const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  if (nav.hasAttribute("data-visible"))
    navToggle.setAttribute("aria-expanded", "false");
  else navToggle.setAttribute("aria-expanded", "true");
  nav.toggleAttribute("data-visible");
});

// slider
const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider-item");
const imageCount = sliderItems.length;
const sliderPrev = document.querySelector(".slider__prev");
const sliderNext = document.querySelector(".slider__next");
let nowIndex = 1;
slider.style.width = `${imageCount * 200}%`;

for (i = 0; i < imageCount; i++) {
  const cloneLi = sliderItems[i].cloneNode("true");
  cloneLi.classList.add("cloned");
  slider.append(cloneLi);
}
const handleColor = () => {
  if (slider.style.left === "0%" || slider.style.left === "-200%") {
    sliderNext.classList.remove("active");
    sliderPrev.classList.add("active");
  } else {
    sliderPrev.classList.remove("active");
    sliderNext.classList.add("active");
  }
};
const handleMoveSlide = () => {
  slider.style.transition = "1s";
  slider.style.left = `${-100 * (nowIndex - 1)}%`;
  if (nowIndex === imageCount * 2) {
    slider.style.transition = "0s";
    slider.style.left = "0%";
    nowIndex = 1;
  }
  nowIndex++;
};
handleMoveSlide();
setInterval(handleMoveSlide, 10000);
setInterval(handleColor, 100);
sliderPrev.addEventListener("click", () => {
  slider.style.left = "0%";
  nowIndex = 2;
});
sliderNext.addEventListener("click", () => {
  slider.style.left = "-100%";
  nowIndex = 3;
});
