import Link from "next/link";
import React, { Fragment } from "react";
import Image from "next/dist/client/legacy/image";
const Sidebar = ({ toggle, setToggle }) => {
  return (
      <>
        <div
            className={`xs-sidebar-group info-group info-sidebar ${
                toggle ? "isActive" : ""
            }`}
        >
          <div
              className="xs-overlay xs-bg-black"
              onClick={() => setToggle(false)}
          />
          <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
              <div className="widget-heading">
                <a
                    href="#"
                    className="close-side-widget"
                    onClick={() => setToggle(false)}
                >
                  ✕
                </a>
              </div>

              <div className="sidebar-textwidget">
                <div className="sidebar-info-contents">
                  <div className="content-inner">

                    {/* LOGO */}
                    <div className="logo">
                      <Link href="/">
                        <Image
                            src="/assets/images/resources/logo-1.png"
                            alt="Creativ Solutions"
                            width={180}
                            height={60}
                            priority
                        />
                      </Link>
                    </div>

                    {/* À PROPOS */}
                    <div className="content-box">
                      <h4>À propos de nous</h4>
                      <p>
                        Creativ Solutions est une agence digitale spécialisée dans
                        la création de sites web, d’applications et le marketing
                        digital pour accompagner les entreprises dans leur
                        transformation numérique.
                      </p>
                    </div>

                    {/* FORMULAIRE DE DEVIS */}
                    <div className="form-inner">
                      <h4>Demander un devis gratuit</h4>

                      <form
                          action="assets/inc/sendemail.php"
                          className="contact-form-validated"
                          noValidate
                      >
                        <div className="form-group">
                          <input
                              type="text"
                              name="name"
                              placeholder="Votre nom"
                              required
                          />
                        </div>

                        <div className="form-group">
                          <input
                              type="email"
                              name="email"
                              placeholder="Adresse email"
                              required
                          />
                        </div>

                        <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Votre message..."
                        />
                        </div>

                        <div className="form-group message-btn">
                          <button
                              type="submit"
                              className="thm-btn form-inner__btn"
                          >
                            Envoyer la demande
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                          </button>
                        </div>
                      </form>

                      <div className="result" />
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
  );
};

export default Sidebar;
