import Link from "next/link";
import Image from "next/dist/client/legacy/image";
import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)",
        }}
      ></div>
      <div
        className="page-header__shape-1"
        style={{
          backgroundImage: "url(/assets/images/shapes/page-header-shape-1.jpg)",
        }}
      />
      <div className="page-header__shape-2">
          <Image
              src="/assets/images/shapes/page-header-shape-2.png"
              alt="Creativ Solutions - Agence digitale"
              width={589}
              height={600}
              priority
          />
      </div>
      <div className="container">
        <div className="page-header__inner">
          <h2>{title}</h2>
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Accueil</Link>{" "}
              </li>
              <li>
                <span> - </span>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Breadcrumb;
