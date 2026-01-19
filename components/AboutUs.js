import Link from "next/link";
import Counter from "./Counter";


export const AboutUS2 = () => {
  return (
      <section className="about-two" id="about-creativ-solutions">
        <div className="container">
          <div className="row">
            {/* IMAGE */}
            <div className="col-xl-5">
              <div className="about-two__left">
                <div className="about-two__img-box">
                  <div className="about-two__img">
                    <img
                        src="assets/images/resources/about.webp"
                        alt="Creativ Solutions – Agence digitale au Cameroun"
                    />
                  </div>

                  <div className="about-two__big-text">Creativ Solutions</div>
                </div>
              </div>
            </div>

            {/* TEXTE */}
            <div className="col-xl-7">
              <div className="about-two__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    À propos de nous
                  </span>
                  </div>

                  <h2 className="section-title__title">
                    Agence digitale & technologique au Cameroun, au service de l’Afrique
                  </h2>
                </div>

                <p className="about-two__text-1">
                  <strong>Creativ Solutions</strong> est une agence digitale basée
                  au Cameroun, spécialisée dans la création de solutions
                  numériques innovantes pour les entreprises locales et africaines.
                  Nous accompagnons startups, PME et grandes entreprises dans leur
                  transformation digitale.
                </p>

                <p className="about-two__text-2">
                  De la conception de sites web professionnels au développement
                  d’applications, en passant par le marketing digital et le SEO,
                  nous aidons les entreprises africaines à gagner en visibilité,
                  en performance et en crédibilité.
                </p>

                <ul className="list-unstyled about-two__points">
                  <li>
                    <div className="icon">
                      <span className="icon-confirmation" />
                    </div>
                    <div className="content">
                      <h5>Expertise locale & africaine</h5>
                      <p>
                        Une parfaite compréhension <br />
                        du marché camerounais et africain
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="icon-confirmation" />
                    </div>
                    <div className="content">
                      <h5>Solutions digitales sur mesure</h5>
                      <p>
                        Web, mobile, SEO, marketing <br />
                        adaptés à vos objectifs business
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="about-two__btn-and-user">
                  <div className="about-two__btn-box">
                    <Link href="/contact" className="thm-btn about-two__btn">
                      Discutons de votre projet <span />
                      <span /> <span /> <span /> <span />
                    </Link>
                  </div>

                  <div className="about-two__user">
                    <div className="about-two__user-content">
                      <h5 className="about-two__user-name">
                        Creativ Solutions
                      </h5>
                      <p className="about-two__user-title">
                        Partenaire digital de confiance en Afrique
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

