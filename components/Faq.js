import { Fragment } from "react";
import FaqItems from "./FaqItems";
const Faq = () => {
  return <Fragment></Fragment>;
};
export default Faq;

export const Faq2 = () => {
  return (
      <section className="faq-two" id="faq">
        <div className="container">
          <div className="row">
            {/* Left side: points & images */}
            <div className="col-xl-6">
              <div className="faq-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Foire aux questions
                  </span>
                  </div>
                  <h2 className="section-title__title">
                    CreativSolutions: Plus qu'une agence digitale au Cameroun
                  </h2>
                </div>

                {/* Points forts / avantages */}
                <div className="faq-two__points-box">
                  <ul className="list-unstyled faq-two__points">
                    <li itemScope itemType="https://schema.org/Thing">
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p itemProp="description">
                          Développement d'applications web et mobiles pour entreprises locales
                        </p>
                      </div>
                    </li>
                    <li itemScope itemType="https://schema.org/Thing">
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p itemProp="description">
                          Stratégies marketing digital adaptées au marché africain
                        </p>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-unstyled faq-two__points faq-two__points--two">
                    <li itemScope itemType="https://schema.org/Thing">
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p itemProp="description">
                          Création graphique et design UX/UI professionnels
                        </p>
                      </div>
                    </li>
                    <li itemScope itemType="https://schema.org/Thing">
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p itemProp="description">
                          Support client et accompagnement post-lancement
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Images */}
                <ul className="list-unstyled faq-two__img-boxes">
                  <li>
                    <div className="faq-two__img">
                      <img
                          src="assets/images/resources/faq-two-img-1-1.jpg"
                          alt="Exemple de projet CreativSolutions au Cameroun"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="faq-two__img">
                      <img
                          src="assets/images/resources/faq-two-img-1-2.jpg"
                          alt="Equipe CreativSolutions au travail sur un projet digital"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side: Questions */}
            <div className="col-xl-6">
              <FaqItems className="faq-two__right" />
            </div>
          </div>
        </div>
      </section>
  );
};

