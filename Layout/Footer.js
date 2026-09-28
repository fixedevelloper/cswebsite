import Link from "next/link";
import Image from "next/image";
import React from "react";
import NewsletterForm from "@/components/NewsletterForm";
import { projectData } from "@/utility/projetData";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    default:
      return <Footer1 />;
  }
};

const Footer1 = () => {
  const currentYear = new Date().getFullYear(); // Génère automatiquement l'année

  return (
      <footer className="site-footer">
        <div
            className="site-footer__bg float-bob-y"
            style={{
              backgroundImage: "url(/assets/images/shapes/site-footer-shape-2.png)",
            }}
        ></div>
        <div
            className="site-footer__shape-1 float-bob-x"
            style={{
              backgroundImage: "url(/assets/images/shapes/site-footer-shape-1.png)",
            }}
        />
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              {/* À propos */}
              <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="/">
                      <Image
                          src="/assets/images/resources/logo-black.png"
                          alt="Creativ Solutions - Agence digitale"
                          width={115}
                          height={60}
                          priority
                      />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">
                    Des solutions digitales innovantes pour booster votre entreprise.
                  </p>
                  <div className="site-footer__social">
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-facebook" /></a>
                    <a href="#"><i className="fab fa-pinterest-p" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>

              {/* Informations / Contact */}
              <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__explore">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Informations</h3>
                  </div>
                  <ul className="footer-widget__explore-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-envelope" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:info@cscreativ.com">
                            info@cscreativ.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-map" />
                      </div>
                      <div className="text">
                        <p>
                          Fin goudron Mbangue
                          <br /> Douala, Cameroun
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="footer-widget__open-hour">
                    <h4 className="footer-widget__open-hour-title">Horaires d'ouverture</h4>
                    <p className="footer-widget__open-hour-text">
                      Lun – Sam : 8h00 à 18h00
                      <br /> Dimanche : fermé
                    </p>
                  </div>
                </div>
              </div>

              {/* Portfolio */}
              <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__portfolio">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Portfolio</h3>
                  </div>
                  <ul className="footer-widget__portfolio-list list-unstyled clearfix">
                    {projectData.map((project) => (
                        <li key={project.id}>
                          <div className="footer-widget__portfolio-img">
                            <img
                                src={`/assets/images/solutions/${project.image}`}
                                alt={`Projet ${project.title}`}
                                loading="lazy"
                            />
                            <Link href="/nos-realisations" aria-label={`Voir le projet ${project.title}`}>
                              <span className="fas fa-arrow-right" />
                            </Link>
                          </div>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__contact">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Newsletter</h3>
                  </div>
                  <p className="footer-widget__contact-text">
                    Abonnez-vous à notre newsletter pour recevoir nos dernières mises à jour et actualités.
                  </p>
                  <NewsletterForm />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © {currentYear} Tous droits réservés par <Link href="/">Creativ Solutions</Link>
                {" · "}
                <button
                    type="button"
                    className="cookie-consent-link"
                    onClick={() => window.dispatchEvent(new Event("open-cookie-consent"))}
                >
                  Cookies
                </button>
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};


export default Footer;
