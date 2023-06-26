// restrict page

const restrict = document.querySelectorAll(".restrict");

restrict.forEach((item) =>
  item.addEventListener("click", () => {
    alert("권한이 없습니다");
  })
);
