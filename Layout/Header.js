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
                        src="/assets/images/resources/logo-1.png"
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
                        <Link href="/contact" className="main-menu-two__btn">
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
const Menu1 = ({ singlePage }) => {
  const menus = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Team",
      href: "#team",
    },
    {
      label: "Blog",
      href: "#blog",
    },
  ];
  return (
      <ul className="main-menu__list">
        <li className="dropdown megamenu">
          <Link href="/">Home </Link>
          <ul>
            <li>
              <section className="home-showcase">
                <div className="container">
                  <div className="home-showcase__inner">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <div className="home-showcase__image">
                            <img
                                src="assets/images/home-showcase/home-showcase-1-1.jpg"
                                alt=""
                            />
                            <div className="home-showcase__buttons">
                              <Link
                                  href="/"
                                  className="thm-btn home-showcase__buttons__item"
                              >
                                Multi Page <span /> <span />
                                <span /> <span />
                                <span />{" "}
                              </Link>
                              <Link
                                  href="/index-one-page"
                                  className="thm-btn home-showcase__buttons__item"
                              >
                                One Page <span /> <span />
                                <span /> <span />
                                <span />{" "}
                              </Link>
                            </div>
                          </div>
                          <h3 className="home-showcase__title">Home Page 01</h3>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <div className="home-showcase__image">
                            <img
                                src="assets/images/home-showcase/home-showcase-1-2.jpg"
                                alt=""
                            />
                            <div className="home-showcase__buttons">
                              <Link
                                  href="/index2"
                                  className="thm-btn home-showcase__buttons__item"
                              >
                                Multi Page <span /> <span />
                                <span /> <span />
                                <span />{" "}
                              </Link>
                              <Link
                                  href="/index2-one-page"
                                  className="thm-btn home-showcase__buttons__item"
                              >
                                One Page <span /> <span />
                                <span /> <span />
                                <span />{" "}
                              </Link>
                            </div>
                          </div>
                          <h3 className="home-showcase__title">Home Page 02</h3>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <div className="home-showcase__image">
                            <img
                                src="assets/images/home-showcase/home-showcase-1-3.jpg"
                                alt=""
                            />
                            <div className="home-showcase__buttons">
                              <Link
                                  href="/index3"
                                  className="thm-btn home-showcase__buttons__item"
                              >
                                Multi Page <span /> <span />
                                <span /> <span />
                                <span />{" "}
                              </Link>
                              <Link
                                  href="/index3-one-page"
                                  className="thm-btn home-showcase__buttons__item"
                              >
                                One Page <span /> <span />
                                <span /> <span />
                                <span />{" "}
                              </Link>
                            </div>
                          </div>
                          <h3 className="home-showcase__title">Home Page 03</h3>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <div className="home-showcase__image">
                            <img
                                src="assets/images/home-showcase/home-showcase-1-4.jpg"
                                alt=""
                            />
                            <div className="home-showcase__buttons">
                              <Link
                                  href="/index-dark"
                                  className="thm-btn home-showcase__buttons__item"
                              >
                                View Page <span /> <span />
                                <span /> <span />
                                <span />{" "}
                              </Link>
                            </div>
                          </div>
                          <h3 className="home-showcase__title">Home Page 04</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </li>
        {singlePage ? (
            menus.map((menu) => (
                <li key={menu.label}>
                  <Link href={menu.href}>{menu.label}</Link>
                </li>
            ))
        ) : (
            <Fragment>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li className="dropdown">
                <Link href="#">Services</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/services-carousel">Services Carousel</Link>
                  </li>
                  <li>
                    <Link href="/ui-ux-designing">UI/UX Designing</Link>
                  </li>
                  <li>
                    <Link href="/website-developement">Website Developement</Link>
                  </li>
                  <li>
                    <Link href="/marketing-strategy">Marketing Strategy</Link>
                  </li>
                  <li>
                    <Link href="/digital-products">Digital Products</Link>
                  </li>
                  <li>
                    <Link href="/modern-designing">Modern Designing</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/team-carousel">Team Carousel</Link>
                  </li>
                  <li>
                    <Link href="/team-details">Team Details</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-carousel">Portfolio Carousel</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-details">Portfolio Details</Link>
                  </li>
                  <li>
                    <Link href="/case-single">Case Single</Link>
                  </li>
                  <li>
                    <Link href="/testimonials">Testimonals</Link>
                  </li>
                  <li>
                    <Link href="/testimonials-carousel">Testimonals Carousel</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/faq">Faq</Link>
                  </li>
                  <li>
                    <Link href="/404">404 Error</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="#">Blog</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/blog-1">Blog One</Link>
                  </li>
                  <li>
                    <Link href="/blog-2">Blog Two</Link>
                  </li>
                  <li>
                    <Link href="/blog-carousel">Blog Carousel</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </Fragment>
        )}
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
                  src="/assets/images/resources/logo-1.png"
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

              <li>
                <Link href="/about" title="À propos de Creativ Solutions">
                  À propos
                </Link>
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
const MobileMenu1 = ({ mobileMenuToggle, setMobileMenuToggle, singlePage }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
          setActiveMenu(activeMenu === value ? "" : value),
      activeLi = (value) =>
          value === activeMenu ? { display: "block" } : { display: "none" };

  const menus = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Team",
      href: "#team",
    },
    {
      label: "Blog",
      href: "#blog",
    },
  ];

  return (
      <div
          className={`mobile-nav__wrapper ${mobileMenuToggle ? "expanded" : ""}`}
      >
        <div
            className="mobile-nav__overlay mobile-nav__toggler"
            onClick={() => setMobileMenuToggle(false)}
        />
        <div className="mobile-nav__content">
        <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={() => setMobileMenuToggle(false)}
        >
          <i className="fa fa-times" />
        </span>
          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img src="assets/images/resources/logo-1.png" width={115} alt="" />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className="dropdown current megamenu">
                <Link href="/">
                  Home{" "}
                  <button
                      aria-label="dropdown toggler"
                      onClick={() => activeMenuSet("home")}
                      className={`${activeMenu === "home" ? "expanded" : ""}`}
                  >
                    <i className="fa fa-angle-down" />
                  </button>
                </Link>
                <ul style={activeLi("home")}>
                  <li>
                    <section className="home-showcase">
                      <div className="container">
                        <div className="home-showcase__inner">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                      src="assets/images/home-showcase/home-showcase-1-1.jpg"
                                      alt=""
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                        href="/"
                                        className="thm-btn home-showcase__buttons__item"
                                    >
                                      Multi Page <span /> <span />
                                      <span /> <span />
                                      <span />{" "}
                                    </Link>
                                    <Link
                                        href="/index-one-page"
                                        className="thm-btn home-showcase__buttons__item"
                                    >
                                      One Page <span /> <span />
                                      <span /> <span />
                                      <span />{" "}
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  Home Page 01
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                      src="assets/images/home-showcase/home-showcase-1-2.jpg"
                                      alt=""
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                        href="/index2"
                                        className="thm-btn home-showcase__buttons__item"
                                    >
                                      Multi Page <span /> <span />
                                      <span /> <span />
                                      <span />{" "}
                                    </Link>
                                    <Link
                                        href="/index2-one-page"
                                        className="thm-btn home-showcase__buttons__item"
                                    >
                                      One Page <span /> <span />
                                      <span /> <span />
                                      <span />{" "}
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  Home Page 02
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                      src="assets/images/home-showcase/home-showcase-1-3.jpg"
                                      alt=""
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                        href="/index3"
                                        className="thm-btn home-showcase__buttons__item"
                                    >
                                      Multi Page <span /> <span />
                                      <span /> <span />
                                      <span />{" "}
                                    </Link>
                                    <Link
                                        href="/index3-one-page"
                                        className="thm-btn home-showcase__buttons__item"
                                    >
                                      One Page <span /> <span />
                                      <span /> <span />
                                      <span />{" "}
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  Home Page 03
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                      src="assets/images/home-showcase/home-showcase-1-4.jpg"
                                      alt=""
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                        href="/index-dark"
                                        className="thm-btn home-showcase__buttons__item"
                                    >
                                      View Page <span /> <span />
                                      <span /> <span />
                                      <span />{" "}
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  Home Page 04
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                </ul>
              </li>
              {singlePage ? (
                  menus.map((menu) => (
                      <li key={menu.label}>
                        <Link href={menu.href}>{menu.label}</Link>
                      </li>
                  ))
              ) : (
                  <Fragment>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="dropdown">
                      <Link href="#">
                        Services
                        <button
                            aria-label="dropdown toggler"
                            onClick={() => activeMenuSet("services")}
                            className={`${
                                activeMenu === "services" ? "expanded" : ""
                            }`}
                        >
                          <i className="fa fa-angle-down" />
                        </button>
                      </Link>
                      <ul className="sub-menu" style={activeLi("services")}>
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="/services-carousel">Services Carousel</Link>
                        </li>
                        <li>
                          <Link href="/ui-ux-designing">UI/UX Designing</Link>
                        </li>
                        <li>
                          <Link href="/website-developement">
                            Website Developement
                          </Link>
                        </li>
                        <li>
                          <Link href="/marketing-strategy">Marketing Strategy</Link>
                        </li>
                        <li>
                          <Link href="/digital-products">Digital Products</Link>
                        </li>
                        <li>
                          <Link href="/modern-designing">Modern Designing</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="#">
                        Pages
                        <button
                            aria-label="dropdown toggler"
                            onClick={() => activeMenuSet("pages")}
                            className={`${activeMenu === "pages" ? "expanded" : ""}`}
                        >
                          <i className="fa fa-angle-down" />
                        </button>
                      </Link>
                      <ul className="sub-menu" style={activeLi("pages")}>
                        <li>
                          <Link href="/team">Our Team</Link>
                        </li>
                        <li>
                          <Link href="/team-carousel">Team Carousel</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-carousel">Portfolio Carousel</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-details">Portfolio Details</Link>
                        </li>
                        <li>
                          <Link href="/case-single">Case Single</Link>
                        </li>
                        <li>
                          <Link href="/testimonials">Testimonals</Link>
                        </li>
                        <li>
                          <Link href="/testimonials-carousel">
                            Testimonals Carousel
                          </Link>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/faq">Faq</Link>
                        </li>
                        <li>
                          <Link href="/404">404 Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="#">
                        Blog
                        <button
                            aria-label="dropdown toggler"
                            onClick={() => activeMenuSet("blog")}
                            className={`${activeMenu === "blog" ? "expanded" : ""}`}
                        >
                          <i className="fa fa-angle-down" />
                        </button>
                      </Link>
                      <ul className="sub-menu" style={activeLi("blog")}>
                        <li>
                          <Link href="/blog-1">Blog One</Link>
                        </li>
                        <li>
                          <Link href="/blog-2">Blog Two</Link>
                        </li>
                        <li>
                          <Link href="/blog-carousel">Blog Carousel</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </Fragment>
              )}
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@packageName__.com">needhelp@Futxo.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>
  );
};


export default Header;
