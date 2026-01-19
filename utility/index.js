import CircleType from "circletype";

export const futxoUtility = {
  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  stickyNav() {
    const header = document.getElementById("header-sticky");
    if (header) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 250) {
          header.classList.add("fixed-header");
        } else {
          header.classList.remove("fixed-header");
        }
      });
    }
  },
  scrollBtn() {
    var scrollBtn = document.querySelector(".scroll-to-target");
    if (scrollBtn) {
      scrollBtn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
    window.addEventListener("scroll", function () {
      var scrolling = window.pageYOffset || document.documentElement.scrollTop;

      if (scrolling > 500) {
        document
          .querySelector(".scroll-to-target")
          .classList.add("d-inline-block");
      } else {
        document
          .querySelector(".scroll-to-target")
          .classList.remove("d-inline-block");
      }
    });
  },
  circleText() {
    const circle = document.querySelectorAll(".curved-circle");
    circle.forEach((element) => {
      new CircleType(element);
    });
  },
};
