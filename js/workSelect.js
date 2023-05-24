const figure = document.querySelectorAll(".work_wrap figcaption");
const closeButton = document.querySelectorAll(".work_wrap figcaption button");

closeButton.forEach((item, index) => {item.addEventListener("click", () => {
figure[index].classList.remove("workSelect");
console.log(figure[index].className);
}
)})

figure.forEach((item,index) => item.addEventListener("click", () => {
for(i=0; i<figure.length; i++) {
figure[i].classList.remove("workSelect");
}
figure[index].classList.toggle("workSelect");
}))