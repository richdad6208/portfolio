const aside = document.querySelector("aside");
window.addEventListener("scroll", () => {
console.log(window.scrollY);
if (window.scrollY !== 0) {
aside.classList.add("activated");
} else aside.classList.remove("activated");
});