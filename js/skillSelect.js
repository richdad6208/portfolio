const images = document.querySelectorAll(".skill_wrap img");
const bigImages = document.querySelectorAll(".bigSkill_wrap");
const pages = document.querySelectorAll(".desc_wrap .text_wrap  p");

const changeSkill = (clicked) => {
for (i=0; i<bigImages.length; i++) {
bigImages[i].classList.remove("activated");
}
bigImages[clicked].classList.add("activated");
}

const changePage = (clicked) => {
for (i=0; i<pages.length; i++) {
pages[i].classList.remove("activated");
}
pages[clicked].classList.add("activated");
}

images.forEach((item,index) => {
item.addEventListener("click", ()=> {
for (i = 0; i < images.length; i++) {
images[i].classList.remove("skillSelect");
}
images[index].classList.add("skillSelect");
changeSkill(index);
changePage(index);
})
});