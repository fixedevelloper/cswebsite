"use client";
import Link from "next/link";
import { useState } from "react";

export const Portfolio2 = ({ extraClass = ""  }) => {
  const portfolioData = [
    {
      id: 1,
      image: "lec.png",
      subTitle: "E-commerce",
      title: "LEC",
      description:
          "Site e-commerce développé pour LEC au Cameroun, optimisé pour la conversion et l’expérience utilisateur.",
      detailLink: null, // pas encore de page de détail pour ce projet
      isActive: true,
    },
/*    {
      id: 2,
      image: "portfolio-2-2.jpg",
      subTitle: "E-commerce",
      title: "GIE Cameroun",
      description:
          "Boutique en ligne conçue pour GIE Cameroun, incluant gestion des produits et paiement sécurisé.",
      detailLink: null, // pas encore de page de détail pour ce projet
      isActive: true,
    },*/
    {
      id: 3,
      image: "orayconseils.png",
      subTitle: "Développement",
      title: "Oray Conseils",
      description:
          "Application web sur mesure pour Oray Conseils, optimisée pour la performance et le SEO local.",
      detailLink: null, // pas encore de page de détail pour ce projet
      isActive: true,
    },
    {
      id: 4,
      image: "wtc.jpeg",
      subTitle: "Application Mobile",
      title: "We-Transfer Cash",
      description:
          "Application mobile développée pour We-Transfer Cash afin d'améliorer la gestion et l’interaction des utilisateurs.",
      detailLink: null, // pas encore de page de détail pour ce projet
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
                          backgroundImage: `url(/assets/images/solutions/${item.image})`,
                        }}
                    >
                      <div className="portfolio-two__title-box">
                        <div className="portfolio-two__title-box-inner">
                          <p className="portfolio-two__sub-title">
                            {item.subTitle}
                          </p>
                          <h4 className="portfolio-two__title" itemProp="name">
                            {item.detailLink ? <Link href={item.detailLink}>{item.title}</Link> : item.title}
                          </h4>
                          <p className="portfolio-two__description" itemProp="description">
                            {item.description}
                          </p>
                          <div className="portfolio-two__shape-1">
                            <img
                                src="/assets/images/shapes/portfolio-two-shape-1.png"
                                alt={`Décoration du projet ${item.title}`}
                            />
                          </div>
                        </div>
                        {item.detailLink && (
                            <div className="portfolio-two__arrow">
                              <Link
                                  href={item.detailLink}
                                  className="img-popup"
                                  aria-label={`Voir les détails du projet ${item.title}`}
                              >
                                <span className="icon-next" />
                              </Link>
                            </div>
                        )}
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
