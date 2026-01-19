import Breadcrumb from "@/components/Breadcrumb";
import FutxoLayout from "@/Layout/FutxoLayout";

export const metadata = {
  title: "Contactez CreativSolutions - Agence Web au Cameroun",
  description:
      "Contactez CreativSolutions pour vos projets web et marketing digital au Cameroun et en Afrique. Obtenez un devis gratuit dès aujourd'hui !",
  keywords:
      "contact CreativSolutions, agence web Cameroun, développement site web, marketing digital Afrique",
};

const ContactPage = () => {
  return (
      <FutxoLayout>
        {/* Fil d'Ariane */}
        <Breadcrumb title="Contactez-nous" />

        {/* Google Map */}
        <section className="google-map">
          <iframe
              title="Carte CreativSolutions - Localisation Cameroun"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
              className="google-map__one"
              allowFullScreen
              loading="lazy"
          />
        </section>

        {/* Section Contact */}
        <section className="contact-page">
          <div className="container">
            <div className="row">
              {/* Colonne gauche */}
              <div className="col-xl-4 col-lg-5">
                <div className="contact-page__left">
                  <h3 className="contact-page__title">Contactez-nous</h3>
                  <ul className="contact-page__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-map" />
                      </div>
                      <div className="content">
                        <h3>Adresse</h3>
                        <p>
                          16 Vastu Arcade, 5ème étage
                          <br />
                          Palace Road, Douala, Cameroun
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-telephone" />
                      </div>
                      <div className="content">
                        <h3>Téléphone</h3>
                        <a href="tel:+237882562584">+237 88 256 2584</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope" />
                      </div>
                      <div className="content">
                        <h3>Email</h3>
                        <a href="mailto:info@creativsolutions.cm">
                          info@creativsolutions.cm
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Colonne droite - Formulaire */}
              <div className="col-xl-8 col-lg-7">
                <div className="contact-page__right">
                  <form
                      action="/api/contact" // utiliser API interne pour traitement sécurisé
                      method="POST"
                      className="contact-page__form contact-form-validated"
                      noValidate
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="contact-page__input-box">
                          <input
                              type="text"
                              placeholder="Nom complet"
                              name="name"
                              required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__input-box">
                          <input
                              type="email"
                              placeholder="Adresse email"
                              name="email"
                              required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__input-box">
                          <input
                              type="tel"
                              placeholder="Téléphone"
                              name="phone"
                              required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="contact-page__input-box">
                          <input
                              type="text"
                              placeholder="Objet du message"
                              name="subject"
                              required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                        <textarea
                            name="message"
                            placeholder="Écrivez votre message"
                            required
                        />
                        </div>
                        <div className="contact-page__btn-box">
                          <button
                              type="submit"
                              className="thm-btn contact-page__btn"
                          >
                            Envoyer le message
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="result" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FutxoLayout>
  );
};

export default ContactPage;

