import { Autoplay } from "swiper/modules";

// Importer uniquement les modules Swiper réellement utilisés : chaque module alourdit le bundle
export const sliderProps = {
  homeSlider: {
    modules: [Autoplay],
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 8000,
    },
  },
};
