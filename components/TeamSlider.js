"use client";
import TeamIteam from "@/components/TeamIteam";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamSlider = () => {
  const teamData = [
    {
      name: "Kevin Smith",
      title: "Designer",
      image: "team-2-1.jpg",
      delay: "100ms",
      animationClass: "fadeInLeft",
    },
    {
      name: "Christine Eve",
      title: "Web Developer",
      image: "team-2-2.jpg",
      delay: "200ms",
      animationClass: "fadeInUp",
    },
    {
      name: "Mike Hardson",
      title: "Designer",
      image: "team-2-3.jpg",
      delay: "300ms",
      animationClass: "fadeInRight",
    },
    {
      name: "Asle Brown",
      title: "Designer",
      image: "team-2-4.jpg",
      delay: "400ms",
      animationClass: "fadeInLeft",
    },
    {
      name: "Jessica Smith",
      title: "Designer",
      image: "team-2-5.jpg",
      delay: "500ms",
      animationClass: "fadeInUp",
    },
    {
      name: "Alesha Smith",
      title: "Designer",
      image: "team-2-6.jpg",
      delay: "600ms",
      animationClass: "fadeInRight",
    },
    {
      name: "Kevin Smith",
      title: "Designer",
      image: "team-2-1.jpg",
      delay: "100ms",
      animationClass: "fadeInLeft",
    },
    {
      name: "Christine Eve",
      title: "Web Developer",
      image: "team-2-2.jpg",
      delay: "200ms",
      animationClass: "fadeInUp",
    },
    {
      name: "Mike Hardson",
      title: "Designer",
      image: "team-2-3.jpg",
      delay: "300ms",
      animationClass: "fadeInRight",
    },
    {
      name: "Asle Brown",
      title: "Designer",
      image: "team-2-4.jpg",
      delay: "400ms",
      animationClass: "fadeInLeft",
    },
    {
      name: "Jessica Smith",
      title: "Designer",
      image: "team-2-5.jpg",
      delay: "500ms",
      animationClass: "fadeInUp",
    },
    {
      name: "Alesha Smith",
      title: "Designer",
      image: "team-2-6.jpg",
      delay: "600ms",
      animationClass: "fadeInRight",
    },
  ];
  return (
    <section className="team-carousel-page">
      <div className="container">
        <Swiper
          {...sliderProps.testimonial}
          className="team-carousel thm-owl__carousel  carousel-dot-style"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamIteam member={member} className="item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default TeamSlider;
