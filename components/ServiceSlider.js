"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import ServicesIteam from "./ServicesIteam";

const ServiceSlider = () => {
  const services = [
    {
      image: "assets/images/services/services-2-1.jpg",
      icon: "icon-illustration",
      title: "Graphic Designing",
      link: "ui-ux-designing",
    },
    {
      image: "assets/images/services/services-2-2.jpg",
      icon: "icon-ux-design",
      title: "UI/UX Designing",
      link: "ui-ux-designing",
    },
    {
      image: "assets/images/services/services-2-3.jpg",
      icon: "icon-social-media",
      title: "Social Marketing",
      link: "digital-products",
    },
    {
      image: "assets/images/services/services-2-1.jpg",
      icon: "icon-illustration",
      title: "Graphic Designing",
      link: "ui-ux-designing",
    },
    {
      image: "assets/images/services/services-2-2.jpg",
      icon: "icon-ux-design",
      title: "UI/UX Designing",
      link: "ui-ux-designing",
    },
    {
      image: "assets/images/services/services-2-3.jpg",
      icon: "icon-social-media",
      title: "Social Marketing",
      link: "digital-products",
    },
  ];
  return (
    <section className="services-carousel-page">
      <div
        className="services-two__shape-2 float-bob-y"
        style={{
          backgroundImage: "url(assets/images/shapes/services-two-shape-2.jpg)",
        }}
      />
      <div className="container">
        <Swiper
          {...sliderProps.testimonial}
          className="services-carousel thm-owl__carousel  carousel-dot-style overflow-hidden"
        >
          {services.map(({ image, icon, title, link }, index) => (
            <SwiperSlide key={index}>
              <ServicesIteam
                className="item"
                image={image}
                icon={icon}
                title={title}
                link={link}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default ServiceSlider;
