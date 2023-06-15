const slider = new A11YSlider(document.querySelector(".slider"), {
  slidesToShow: 1,
  arrows: true, // arrows enabled 767px and down
  dots: true,
  centerMode: true,
  responsive: {
    768: {
      slidesToShow: 2,
      arrows: false,
      dots: false,
    },
    960: {
      disable: false, // slider disabled 960px to 1279px
    },
    1280: {
      disable: false,
      slidesToShow: 3,
      dots: false, // dots enabled 1280px and up
    },
    2000: {
      disable: false,
      slidesToShow: 3,
    },
  },
});
