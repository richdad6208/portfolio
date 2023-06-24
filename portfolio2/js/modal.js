const tableA = document.querySelectorAll(".table__title a");
const dialog = document.querySelector(".dialog");
const dialogButton = document.querySelectorAll(".dialog button");

tableA.forEach((item) =>
  item.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.showModal();
    document.body.classList.add("stop-scrolling");
  })
);

dialogButton.forEach((item) =>
  item.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("stop-scrolling");
    dialog.close();
  })
);
