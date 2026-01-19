"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";


export const HomeSlider2 = () => {
  return (
    <section className="main-slider-two">
      <Swiper
        {...sliderProps.homeSlider}
        className="main-slider-two__carousel  thm-owl__carousel"
      >
        <SwiperSlide className="item main-slider-two__slide-1">
          <div
            className="main-slider-two__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-2-1.jpg)",
            }}
          ></div>
          {/* /.slider-one__bg */}
          <div
            className="main-slider-two__shape-1 float-bob-y"
            style={{
              backgroundImage:
                "url(assets/images/shapes/main-slider-two-shape-1.jpg)",
            }}
          />
          <div className="main-slider-two__shape-2 img-bounce">
            <img
              src="assets/images/shapes/main-slider-two-shape-2.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="main-slider-two__content">
              <p className="main-slider-two__sub-title">
                Nous concevons des solutions numériques innovantes, performantes et parfaitement organisées pour<br /> développer votre activité.
              </p>
              <h2 className="main-slider-two__title">
                Donnez vie à<br />vos idées digitale
              </h2>
              <div className="main-slider-two__btn-box">
                <Link href="contact" className="thm-btn main-slider-two__btn">
                  Demander un devis<span />
                  <span /> <span /> <span /> <span />{" "}
                </Link>
              </div>
              <div className="main-slider-two__video-link">
                <a
                  href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                  className="video-popup"
                >
                  <div className="main-slider-two__video-icon">
                    <span className="fa fa-play" />
                    <i className="ripple" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item main-slider-two__slide-2">
          <div
            className="main-slider-two__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-2-2.jpg)",
            }}
          ></div>
          {/* /.slider-one__bg */}
          <div
            className="main-slider-two__shape-1 float-bob-y"
            style={{
              backgroundImage:
                "url(assets/images/shapes/main-slider-two-shape-1.jpg)",
            }}
          />
          <div className="main-slider-two__shape-2 img-bounce">
            <img
              src="assets/images/shapes/main-slider-two-shape-2.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="main-slider-two__content">
              <p className="main-slider-two__sub-title">
                Sites web professionnels, plateformes e-commerce et applications web & mobiles conçus<br /> pour la performance et la croissance.
              </p>
              <h2 className="main-slider-two__title">
                Des solutions digitales  <br /> qui performent
              </h2>
              <div className="main-slider-two__btn-box">
                <Link href="contact" className="thm-btn main-slider-two__btn">
                  Découvrir nos services<span />
                  <span /> <span /> <span /> <span />{" "}
                </Link>
              </div>
              <div className="main-slider-two__video-link">
                <a
                  href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                  className="video-popup"
                >
                  <div className="main-slider-two__video-icon">
                    <span className="fa fa-play" />
                    <i className="ripple" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item main-slider-two__slide-3">
          <div
            className="main-slider-two__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-2-1.webp)",
            }}
          ></div>
          {/* /.slider-one__bg */}
          <div
            className="main-slider-two__shape-1 float-bob-y"
            style={{
              backgroundImage:
                "url(assets/images/shapes/main-slider-two-shape-1.jpg)",
            }}
          />
          <div className="main-slider-two__shape-2 img-bounce">
            <img
              src="assets/images/shapes/main-slider-two-shape-2.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="main-slider-two__content">
              <p className="main-slider-two__sub-title">
                De la stratégie à la réalisation, nous vous accompagnons avec méthode,<br /> créativité et rigueur.
              </p>
              <h2 className="main-slider-two__title">
                Votre partenaire  <br /> pour réussir en ligne
              </h2>
              <div className="main-slider-two__btn-box">
                <Link href="contact" className="thm-btn main-slider-two__btn">
                  Voir nos réalisations <span />
                  <span /> <span /> <span /> <span />{" "}
                </Link>
              </div>
              <div className="main-slider-two__video-link">
                <a
                  href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                  className="video-popup"
                >
                  <div className="main-slider-two__video-icon">
                    <span className="fa fa-play" />
                    <i className="ripple" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

