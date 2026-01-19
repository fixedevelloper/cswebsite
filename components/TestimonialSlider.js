"use client";
import TestimonialItem from "@/components/TestimonialItem";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const teamData = [
  {
    image: "assets/images/testimonial/testimonial-1-1.jpg",
    title: "David Smith",
    text: "To create a successful IT solution blog, it's important to have a clear understanding the target audience and their needs. This may a involve conducting the market research in analyzing customer feedback, and monitoring industry trends.",
  },
  {
    image: "assets/images/testimonial/testimonial-1-2.jpg",
    title: "Tina Brown",
    text: "To create a successful IT solution blog, it's important to have a clear understanding the target audience and their needs. This may a involve conducting the market research in analyzing customer feedback, and monitoring industry trends.",
  },
  {
    image: "assets/images/testimonial/testimonial-1-3.jpg",
    title: "Mike Hardson",
    text: "To create a successful IT solution blog, it's important to have a clear understanding the target audience and their needs. This may a involve conducting the market research in analyzing customer feedback, and monitoring industry trends.",
  },
  {
    image: "assets/images/testimonial/testimonial-1-1.jpg",
    title: "Strev Smith",
    text: "To create a successful IT solution blog, it's important to have a clear understanding the target audience and their needs. This may a involve conducting the market research in analyzing customer feedback, and monitoring industry trends.",
  },
  {
    image: "assets/images/testimonial/testimonial-1-2.jpg",
    title: "Jessica Brown",
    text: "To create a successful IT solution blog, it's important to have a clear understanding the target audience and their needs. This may a involve conducting the market research in analyzing customer feedback, and monitoring industry trends.",
  },
  {
    image: "assets/images/testimonial/testimonial-1-3.jpg",
    title: "Adam Hardson",
    text: "To create a successful IT solution blog, it's important to have a clear understanding the target audience and their needs. This may a involve conducting the market research in analyzing customer feedback, and monitoring industry trends.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-carousel-page">
      <div className="container">
        <Swiper
          {...sliderProps.testimonial}
          className="testimonial-carousel-style carousel-dot-style"
        >
          {teamData.map((item, i) => (
            <SwiperSlide key={i}>
              <TestimonialItem item={item} className="item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default TestimonialSlider;
