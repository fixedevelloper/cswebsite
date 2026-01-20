import Breadcrumb from "@/components/Breadcrumb";
import FutxoLayout from "@/Layout/FutxoLayout";
import React  from "react";
import ContactForm from "../../components/contactForm";
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7959.153835203109!2d9.749797494974803!3d4.106139833470476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e6f37f5cea3%3A0x6892441e45529b2a!2zQmFuZ3XDqSwgRG91YWxh!5e0!3m2!1sfr!2scm!4v1768926004286!5m2!1sfr!2scm"
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
                          Fin goudron Mbangue
                          <br />
                        Douala, Cameroun
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-telephone" />
                      </div>
                      <div className="content">
                        <h3>Téléphone</h3>
                        <a href="tel:+237675066919">+237 675 066 919</a><br/>
                        <a href="tel:+237657285050">+237 657 285 050</a>
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
              <ContactForm />
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

