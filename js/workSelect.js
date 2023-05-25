const img = document.querySelectorAll(".work_wrap > figure > img");
const figcaption = document.querySelectorAll(".work_wrap figcaption")
const button = document.querySelectorAll(".figcaption_wrap > button");

button.forEach((item, index) => item.addEventListener("click", () => {
figcaption[index].classList.remove("workSelect");
}))

img.forEach((item, index) =>item.addEventListener("click", ()=> {
for (i=0; i<img.length; i++) {
figcaption[i].classList.remove("workSelect");
}
figcaption[index].classList.add("workSelect");
}
)
);