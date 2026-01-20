"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Header = ({ header, singlePage }) => {
  const HeaderComponent = HeaderMenu;
  return <HeaderComponent singlePage={singlePage} />;
};


const HeaderMenu = ({ singlePage }) => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
      <Fragment>
        <header className="main-header-two" id="header-sticky">
          <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner bg-white">
                <div className="main-menu-two__logo">
                  <Link href="/">
                    <Image
                        src="/assets/images/resources/logo.png"
                        alt="Creativ Solutions - Agence digitale"
                        width={115}
                        height={60}
                        priority
                    />
                  </Link>
                </div>

                {/* Top contact + social */}
                <div className="main-menu-two__top">
                  <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                      <li>
                        <div className="icon"><i className="icon-envelope" /></div>
                        <div className="text">
                          <p>
                            <a href="mailto:info@creativsolution.com">
                              info@creativsolution.com
                            </a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><i className="icon-time" /></div>
                        <div className="text">
                          <p>Horaires : Lun – Ven 8h00 – 18h00</p>
                        </div>
                      </li>
                    </ul>

                    <div className="main-menu-two__top-menu-and-social">
                      <ul className="list-unstyled main-menu-two__top-menu">
                        <li><Link href="/about">À propos</Link></li>
                        <li><Link href="/help">Aide</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>

                      <div className="main-menu-two__top-social-box">
                        <p className="main-menu-two__top-social-title">Suivez-nous :</p>
                        <div className="main-menu-two__top-social">
                          <a href="#"><i className="fab fa-twitter" /></a>
                          <a href="#"><i className="fab fa-facebook" /></a>
                          <a href="#"><i className="fab fa-pinterest-p" /></a>
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom menu */}
                <div className="main-menu-two__bottom">
                  <div className="main-menu-two__bottom-inner">
                    <div className="main-menu-two__main-menu-box">
                      <a
                          href="#"
                          className="mobile-nav__toggler"
                          onClick={() => setMobileMenuToggle(true)}
                      >
                        <i className="fa fa-bars" />
                      </a>
                      <Menu singlePage={singlePage} />
                    </div>

                    <div className="main-menu-two__right">
                      <div className="main-menu-two__btn-box">
                        <Link href="/demandez-devis" className="main-menu-two__btn">
                          Obtenir une solution
                        </Link>
                      </div>

                      <div className="main-menu-two__call">
                        <div className="main-menu-two__call-icon">
                          <span className="icon-chatting" />
                        </div>
                        <div className="main-menu-two__call-content">
                          <p className="main-menu-two__call-sub-title">Appelez à tout moment</p>
                          <h5 className="main-menu-two__call-number">
                            <a href="tel:+237675066919">+237 675 06 69 19</a>
                          </h5>
                        </div>
                      </div>

                      <div className="main-menu-two__search-box">
                        <a
                            href="#"
                            className="main-menu-two__search search-toggler icon-search"
                            onClick={() => setSearchToggle(true)}
                        >
                          <span>Recherche...</span>
                        </a>
                      </div>

                      <div className="main-menu-two__nav-sidebar-icon">
                        <a
                            className="navSidebar-button"
                            href="#"
                            onClick={() => setToggle(true)}
                        >
                          <span className="icon-menu" />
                        </a>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </nav>
        </header>

        <Sidebar toggle={toggle} setToggle={setToggle} />
        <SearchPopup active={searchToggle} setActive={setSearchToggle} />
        <MobileMenu
            mobileMenuToggle={mobileMenuToggle}
            setMobileMenuToggle={setMobileMenuToggle}
            singlePage={singlePage}
        />
      </Fragment>
  );
};


const Menu = ({ singlePage }) => {
  return (

        <ul className="main-menu__list">
          <Fragment>
            <li>
              <Link href="/" title="Accueil - Creativ Solutions">
                Accueil
              </Link>
            </li>

            <li className="dropdown">
              <Link href="#">  À propos</Link>


              <ul className="sub-menu">
                <li>
                  <Link
                      href="/about"
                      title="À propos de Creativ Solutions"
                  >
                    Creativ Solutions
                  </Link>
                </li>
                <li>
                  <Link
                      href="/nos-realisations"
                      title="Nos réalisations en développement web et digital"
                  >
                    Nos réalisations
                  </Link>
                </li>
                <li>
                  <Link
                      href="/nos-solutions"
                      title="Nos solutions digitales et technologiques"
                  >
                    Nos solutions
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">

                 <Link href="#">  Services</Link>

              <ul className="sub-menu">
                <li>
                  <Link
                      href="/services/creation-site-web"
                      title="Création de sites web professionnels"
                  >
                    Création de sites web professionnels
                  </Link>
                </li>
                <li>
                  <Link
                      href="/services/creation-site-ecommerce"
                      title="Création de sites e-commerce performants"
                  >
                    Création de sites e-commerce
                  </Link>
                </li>
                <li>
                  <Link
                      href="/services/devellopement-applications-web-mobile"
                      title="Développement d’applications web et mobiles"
                  >
                    Développement d’applications web & mobiles
                  </Link>
                </li>
                <li>
                  <Link
                      href="/services/conception-graphique-UI-UX-Design"
                      title="Conception graphique et UI UX Design"
                  >
                    Conception graphique & UI/UX Design
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/blog" title="Blog digital et actualités technologiques">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/contact" title="Contactez Creativ Solutions">
                Contact
              </Link>
            </li>
          </Fragment>
        </ul>

  );
};

const MobileMenu = ({ mobileMenuToggle, setMobileMenuToggle }) => {
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = (value) =>
      setActiveMenu(activeMenu === value ? "" : value);

  const activeStyle = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
      <div className={`mobile-nav__wrapper ${mobileMenuToggle ? "expanded" : ""}`}>
        <div
            className="mobile-nav__overlay mobile-nav__toggler"
            onClick={() => setMobileMenuToggle(false)}
        />

        <div className="mobile-nav__content" aria-label="Menu mobile principal">
        <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={() => setMobileMenuToggle(false)}
        >
          <i className="fa fa-times" />
        </span>

          <div className="logo-box">

            <Link href="/" title="Accueil - Creativ Solutions">
              <Image
                  src="/assets/images/resources/logo-black.png"
                  alt="Creativ Solutions - Agence digitale"
                  width={115}
                  height={60}
                  priority
              />

            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li>
                <Link href="/" title="Accueil Creativ Solutions">
                  Accueil
                </Link>
              </li>
              <li className="dropdown">
                <Link href="#">
                  Agence
                  <button
                      aria-label="dropdown toggler"
                      onClick={() => toggleMenu("agences")}
                      className={`${
                          activeMenu === "agences" ? "expanded" : ""
                      }`}
                  >
                    <i className="fa fa-angle-down" />
                  </button>
                </Link>
                <ul className="sub-menu" style={activeStyle("agences")}>
                  <li>
                    <Link href="/about" title="À propos de Creativ Solutions">
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/nos-realisations"
                        title="Nos réalisations en développement web et digital"
                    >
                      Nos réalisations
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/nos-solutions"
                        title="Nos solutions digitales et technologiques"
                    >
                      Nos solutions
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link href="#">
                  Services
                  <button
                      aria-label="dropdown toggler"
                      onClick={() => toggleMenu("services")}
                      className={`${
                          activeMenu === "services" ? "expanded" : ""
                      }`}
                  >
                    <i className="fa fa-angle-down" />
                  </button>
                </Link>

                <ul className="sub-menu" style={activeStyle("services")}>
                  <li>
                    <Link
                        href="/services"
                        title="Création de sites web professionnels"
                    >
                      Création de sites web professionnels
                    </Link>
                  </li>

                  <li>
                    <Link
                        href="/services-carousel"
                        title="Création de sites e-commerce"
                    >
                      Création de sites e-commerce
                    </Link>
                  </li>

                  <li>
                    <Link
                        href="/website-developement"
                        title="Développement d’applications web et mobiles"
                    >
                      Applications web & mobiles
                    </Link>
                  </li>

                  <li>
                    <Link
                        href="/ui-ux-designing"
                        title="Conception graphique et UI UX Design"
                    >
                      Conception graphique & UI/UX Design
                    </Link>
                  </li>

                  <li>
                    <Link
                        href="/marketing-strategy"
                        title="Marketing digital et stratégie en ligne"
                    >
                      Marketing digital
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/blog" title="Blog digital et actualités tech">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" title="Contactez Creativ Solutions">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:info@creativsolutions.com">
                info@creativsolutions.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+237675066919">+237 675 06 69 19</a>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" aria-label="Twitter" className="fab fa-twitter" />
              <a href="#" aria-label="Facebook" className="fab fa-facebook-square" />
              <a href="#" aria-label="Instagram" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
