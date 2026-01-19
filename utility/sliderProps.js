import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Grid,
  Navigation,
  Pagination,
  Parallax,
  Thumbs,
} from "swiper/modules";
SwiperCore.use([
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  Parallax,
  FreeMode,
  Thumbs,
]);
export const sliderProps = {
  homeSlider: {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 8000,
    },
  },
  portfolioSlider: {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  },
  portfolioSlider2: {
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    speed: 500,
    navigation: {
      nextEl: ".icon-right-arrow",
      prevEl: ".icon-left-arrow",
    },
    pagination: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  },
  testimonial: {
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".icon-right-arrow",
      prevEl: ".icon-left-arrow",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  },
  testimonial2: {
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: ".owl-next",
      prevEl: ".owl-prev",
    },
  },
};
