"use client";
import BlogItem from "@/components/BlogItem";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogSlider = () => {
  const blogPosts = [
    {
      image: "blog-1-1.jpg",
      date: { day: 28, month: "Aug" },
      title: "Get Few Solutions To Hire a Best Candidate",
      delay: "100ms",
    },
    {
      image: "blog-1-2.jpg",
      date: { day: 28, month: "Aug" },
      title: "Digital Marketing Agency Pricing Guide",
      delay: "200ms",
    },
    {
      image: "blog-1-3.jpg",
      date: { day: 28, month: "Aug" },
      title: "Explore World's Local & Global Top Agencies",
      delay: "300ms",
    },
    {
      image: "blog-1-4.jpg",
      date: { day: 28, month: "Aug" },
      title: "Get Few Solutions To Hire a Best Candidate",
      delay: "400ms",
    },
    {
      image: "blog-1-5.jpg",
      date: { day: 28, month: "Aug" },
      title: "Digital Marketing Agency Pricing Guide",
      delay: "500ms",
    },
    {
      image: "blog-1-6.jpg",
      date: { day: 28, month: "Aug" },
      title: "Explore World's Local & Global Top Agencies",
      delay: "600ms",
    },
  ];
  return (
    <section className="blog-carousel-page">
      <div className="container">
        <Swiper
          {...sliderProps.testimonial}
          className="blog-carousel thm-owl__carousel  carousel-dot-style overflow-hidden"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <BlogItem post={post} className="item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default BlogSlider;
