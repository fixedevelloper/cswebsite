"use client";
import { sliderProps } from "@/utility/sliderProps";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonals = () => {
  const testimonials = [
    {
      image: "testimonial-1-1.jpg",
      name: "David Smith",
      role: "Designer",
    },
    {
      image: "testimonial-1-2.jpg",
      name: "Tina Brown",
      role: "Designer",
    },
    {
      image: "testimonial-1-3.jpg",
      name: "Mike Hardson",
      role: "Designer",
    },
    {
      image: "testimonial-1-1.jpg",
      name: "David Smith",
      role: "Designer",
    },
    {
      image: "testimonial-1-2.jpg",
      name: "Tina Brown",
      role: "Designer",
    },
    {
      image: "testimonial-1-3.jpg",
      name: "Mike Hardson",
      role: "Designer",
    },
  ];

  return (
    <section className="testimonial-one">
      <div
        className="testimonial-one__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/testimonial-one-bg.jpg)",
        }}
      />
      <div
        className="testimonial-one__shape-2 float-bob-y"
        style={{
          backgroundImage:
            "url(assets/images/shapes/testimonial-one-shape-2.jpg)",
        }}
      />
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Testimonals</span>
          </div>
          <h2 className="section-title__title">
            What Our Clients Say
            <br /> About Solution
          </h2>
        </div>
        <div className="testimonial-one__carousel  ">
          <Swiper className="overflow-hidden" {...sliderProps.testimonial}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="item" key={index}>
                <div className="testimonial-one__single">
                  <div className="testimonial-one__single-top">
                    <div className="testimonial-one__single-top-inner">
                      <div className="testimonial-one__shape-1">
                        <img
                          src="assets/images/shapes/testimonial-one-shape-1.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__quote">
                        <img src="assets/images/icon/icon-quote.png" alt="" />
                      </div>
                      <div className="testimonial-one__ratting">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="fa fa-star" />
                        ))}
                      </div>
                      <p className="testimonial-one__text">
                        To create a successful IT solution blog, it's important
                        to have a clear understanding the target audience and
                        their needs. This may a involve conducting the market
                        research in analyzing customer feedback, and monitoring
                        industry trends.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-one__client-info-box">
                    <div className="testimonial-one__client-img">
                      <img
                        src={`assets/images/testimonial/${testimonial.image}`}
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-info">
                      <p>{testimonial.role}</p>
                      <h3>{testimonial.name}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;

export const Testimonals2 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="testimonial-two">
      <div
        className="testimonial-two__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/testimonial-two-bg.jpg)",
        }}
      />
      <div className="testimonial-two__side-img">
        <img
          src="assets/images/testimonial/testimonial-two-side-img-1.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="testimonial-two__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Our Testimonials
                  </span>
                </div>
                <h2 className="section-title__title">
                  What Our Clients Say About Solution
                </h2>
              </div>
              <div className="testimonial-two__slider">
                <div className="testimonal-two_thumb-container">
                  <div className="testimonial-two__thumb-outer-box">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={3}
                      freeMode={true}
                      watchSlidesProgress={true}
                      className="testimonial-two__thumb-carousel owl-theme"
                    >
                      <SwiperSlide className="testimonial-two__thumb-item">
                        <div className="testimonial-two__img-holder-box">
                          <div className="testimonial-two__img-holder">
                            <img
                              src="assets/images/testimonial/testimonial-2-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="testimonial-two__thumb-item">
                        <div className="testimonial-two__img-holder-box">
                          <div className="testimonial-two__img-holder">
                            <img
                              src="assets/images/testimonial/testimonial-2-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="testimonial-two__thumb-item">
                        <div className="testimonial-two__img-holder-box">
                          <div className="testimonial-two__img-holder">
                            <img
                              src="assets/images/testimonial/testimonial-2-3.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="owl-nav testimonial-nav">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <i className="icon-left-arrow-1" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <i className="icon-right-arrow-1" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="testimonial-two__main-content">
                  <Swiper
                    {...sliderProps.testimonial2}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="testimonial-two__carousel owl-carousel owl-theme overflow-hidden"
                  >
                    <SwiperSlide className="testimonial-two__item">
                      <div className="testimonial-two__inner-content">
                        <div className="testimonial-two__content-img">
                          <img
                            src="assets/images/testimonial/testimonial-two-content-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-two__content-box">
                          <p className="testimonial-two__text">
                            This is due to their excellent service,competitive
                            pricing and customer support.It's throughly
                            refresing to get such a personal touch
                          </p>
                          <div className="testimonial-two__client-info-and-quote">
                            <div className="testimonial-two__client-info">
                              <h4 className="testimonial-two__client-name">
                                Kevin Martin
                              </h4>
                              <p className="testimonial-two__client-sub-title">
                                Customer
                              </p>
                            </div>
                            <div className="testimonial-two__quote">
                              <span className="icon-quote" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-two__item">
                      <div className="testimonial-two__inner-content">
                        <div className="testimonial-two__content-img">
                          <img
                            src="assets/images/testimonial/testimonial-two-content-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-two__content-box">
                          <p className="testimonial-two__text">
                            This is due to their excellent service,competitive
                            pricing and customer support.It's throughly
                            refresing to get such a personal touch
                          </p>
                          <div className="testimonial-two__client-info-and-quote">
                            <div className="testimonial-two__client-info">
                              <h4 className="testimonial-two__client-name">
                                Adam Martin
                              </h4>
                              <p className="testimonial-two__client-sub-title">
                                Customer
                              </p>
                            </div>
                            <div className="testimonial-two__quote">
                              <span className="icon-quote" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-two__item">
                      <div className="testimonial-two__inner-content">
                        <div className="testimonial-two__content-img">
                          <img
                            src="assets/images/testimonial/testimonial-two-content-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-two__content-box">
                          <p className="testimonial-two__text">
                            This is due to their excellent service,competitive
                            pricing and customer support.It's throughly
                            refresing to get such a personal touch
                          </p>
                          <div className="testimonial-two__client-info-and-quote">
                            <div className="testimonial-two__client-info">
                              <h4 className="testimonial-two__client-name">
                                Kevin Smith
                              </h4>
                              <p className="testimonial-two__client-sub-title">
                                Customer
                              </p>
                            </div>
                            <div className="testimonial-two__quote">
                              <span className="icon-quote" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
