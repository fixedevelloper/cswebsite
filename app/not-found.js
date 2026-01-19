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
                  Sorry We Can't Find That Page!
                </h3>
                <p className="error-page__text">
                  The page you are looking for was never existed.
                </p>
                <form className="error-page__form">
                  <div className="error-page__form-input">
                    <input type="search" placeholder="Search here" />
                    <button type="submit">
                      <i className="icon-search" />
                    </button>
                  </div>
                </form>
                <Link href="/" className="thm-btn error-page__btn">
                  go back to home <span />
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
