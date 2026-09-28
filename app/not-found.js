import FutxoLayout from "@/Layout/FutxoLayout";
import Link from "next/link";
const E4040 = () => {
  return (
    <FutxoLayout noHeader noFooter>
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <h2 className="error-page__title">404</h2>
                <h3 className="error-page__tagline">
                  Oups, cette page est introuvable !
                </h3>
                <p className="error-page__text">
                  La page que vous cherchez n’existe pas ou a été déplacée.
                </p>
                <form className="error-page__form" action="/blog" method="get">
                  <div className="error-page__form-input">
                    <input type="search" name="search" placeholder="Rechercher un article…" aria-label="Rechercher un article" />
                    <button type="submit" aria-label="Lancer la recherche">
                      <i className="icon-search" />
                    </button>
                  </div>
                </form>
                <Link href="/" className="thm-btn error-page__btn">
                  Retour à l’accueil <span />
                  <span /> <span /> <span /> <span />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FutxoLayout>
  );
};
export default E4040;
