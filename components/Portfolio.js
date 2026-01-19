"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const portfolioItems = [
  {
    id: 1,
    title: "Business Growth",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-1.jpg",
  },
  {
    id: 2,
    title: "Smart Visions",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-2.jpg",
  },
  {
    id: 3,
    title: "Data Analysis",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-3.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-4.jpg",
  },
  {
    id: 5,
    title: "UI/UX Design",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-5.jpg",
  },
  {
    id: 6,
    title: "Business Growth",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-1.jpg",
  },
  {
    id: 7,
    title: "Smart Visions",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-2.jpg",
  },
  {
    id: 8,
    title: "Data Analysis",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-3.jpg",
  },
  {
    id: 9,
    title: "Digital Marketing",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-4.jpg",
  },
  {
    id: 10,
    title: "UI/UX Design",
    subTitle: "Cloud Services",
    image: "/assets/images/project/portfolio-1-5.jpg",
  },
];

const Portfolio = ({ noTitle = false }) => {
  return (
    <section className="portfolio-one" id="portfolio">
      <div className="container">
        {noTitle ? null : (
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Our Portfolio</span>
            </div>
            <h2 className="section-title__title">
              Explore Our Best Recent
              <br /> Work Projects
            </h2>
          </div>
        )}

        <Swiper
          {...sliderProps.portfolioSlider}
          className="portfolio-one__carousel overflow-hidden"
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id} className="portfolio-one__single">
              <div className="portfolio-one__img-box">
                <div className="portfolio-one__img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-one__content">
                  <div className="portfolio-one__title-box">
                    <p className="portfolio-one__sub-title">{item.subTitle}</p>
                    <h3 className="portfolio-one__title">
                      <Link href="/portfolio-details">{item.title}</Link>
                    </h3>
                  </div>
                  <div className="portfolio-one__arrow">
                    <Link href={item.image}>
                      <span className="icon-right-arrow-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;

export const Portfolio2 = ({ extraClass = ""  }) => {
  const portfolioData = [
    {
      id: 1,
      image: "lec.png",
      subTitle: "E-commerce",
      title: "LEC",
      description:
          "Site e-commerce développé pour LEC au Cameroun, optimisé pour la conversion et l’expérience utilisateur.",
      detailLink: "/portfolio-details/lec",
      isActive: true,
    },
/*    {
      id: 2,
      image: "portfolio-2-2.jpg",
      subTitle: "E-commerce",
      title: "GIE Cameroun",
      description:
          "Boutique en ligne conçue pour GIE Cameroun, incluant gestion des produits et paiement sécurisé.",
      detailLink: "/portfolio-details/gie-cameroun",
      isActive: true,
    },*/
    {
      id: 3,
      image: "orayconseils.png",
      subTitle: "Développement",
      title: "Oray Conseils",
      description:
          "Application web sur-mesure pour Oray Conseils, optimisée pour la performance et le SEO local.",
      detailLink: "/portfolio-details/oray-conseils",
      isActive: true,
    },
    {
      id: 4,
      image: "wtc.jpeg",
      subTitle: "Application Mobile",
      title: "We-transfercah",
      description:
          "Application mobile développée pour We-transfercah afin d'améliorer la gestion et l’interaction des utilisateurs.",
      detailLink: "/portfolio-details/we-transfercah",
      isActive: true,
    },

  ];

  const [active, setActive] = useState(1);

  return (
      <section
          className={`portfolio-two ${extraClass}`}
          id="portfolio"
          itemScope
          itemType="https://schema.org/CreativeWork"
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Nos Réalisations</span>
            <h2 className="section-title__title">
              Découvrez nos projets récents <br />
              pour le Cameroun et l'Afrique
            </h2>
          </div>
          <ul className="list-unstyled portfolio-two__list row">
            {portfolioData.map((item) => (
                <li
                    key={item.id}
                    className={active === item.id ? "active  col-md-4" : "col-md-4"}
                    onMouseEnter={() => setActive(item.id)}
                    itemScope
                    itemType="https://schema.org/CreativeWork"
                >
                  <div className="portfolio-two__single">
                    <div
                        className="portfolio-two__img"
                        style={{
                          backgroundImage: `url(assets/images/solutions/${item.image})`,
                        }}
                    >
                      <div className="portfolio-two__title-box">
                        <div className="portfolio-two__title-box-inner">
                          <p className="portfolio-two__sub-title">
                            {item.subTitle}
                          </p>
                          <h4 className="portfolio-two__title" itemProp="name">
                            <Link href={item.detailLink}>{item.title}</Link>
                          </h4>
                          <p className="portfolio-two__description" itemProp="description">
                            {item.description}
                          </p>
                          <div className="portfolio-two__shape-1">
                            <img
                                src="assets/images/shapes/portfolio-two-shape-1.png"
                                alt={`Décoration du projet ${item.title}`}
                            />
                          </div>
                        </div>
                        <div className="portfolio-two__arrow">
                          <Link
                              href={item.detailLink}
                              className="img-popup"
                              aria-label={`Voir les détails du projet ${item.title}`}
                          >
                            <span className="icon-next" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </section>
  );
};



export const Portfolio3 = () => {
  const portfolioItems = [
    {
      image: "portfolio-3-1.jpg",
      title: "Seo optimization",
      category: "Web Designer",
    },
    {
      image: "portfolio-3-2.jpg",
      title: "Web Development",
      category: "Developer",
    },
    {
      image: "portfolio-3-3.jpg",
      title: "App Design",
      category: "UI/UX Designer",
    },
    {
      image: "portfolio-3-4.jpg",
      title: "Digital Marketing",
      category: "Marketer",
    },
    {
      image: "portfolio-3-1.jpg",
      title: "Seo optimization",
      category: "Web Designer",
    },
    {
      image: "portfolio-3-2.jpg",
      title: "Web Development",
      category: "Developer",
    },
    {
      image: "portfolio-3-3.jpg",
      title: "App Design",
      category: "UI/UX Designer",
    },
    {
      image: "portfolio-3-4.jpg",
      title: "Digital Marketing",
      category: "Marketer",
    },
  ];

  return (
    <section className="portfolio-three" id="portfolio">
      <div className="section-title text-center">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline">Our Portfolio</span>
        </div>
        <h2 className="section-title__title">
          Improve &amp; Enhance The Tech
          <br /> Projects
        </h2>
      </div>
      <Swiper
        className="portfolio-three__carousel"
        {...sliderProps.portfolioSlider2}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index} className="item">
            <div className="portfolio-three__single">
              <div className="portfolio-three__img-box">
                <div className="portfolio-three__img">
                  <img src={`assets/images/project/${item.image}`} alt="" />
                </div>
                <div className="portfolio-three__content">
                  <p className="portfolio-three__sub-title">{item.category}</p>
                  <h3 className="portfolio-three__title">
                    <Link href="portfolio-details">{item.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
