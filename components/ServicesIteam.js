import Link from "next/link";
import React from "react";
import Image from "next/image";


const ServicesIteam = ({
                         image,
                         icon,
                         title,
                         link,
                         description,
                         index,
                         className = "col-xl-4 col-lg-4",
                       }) => {
  return (
      <div
          className={`wow fadeInUp ${className}`}
          data-wow-delay={`${index * 100}ms`}
          key={index}
          itemScope
          itemType="https://schema.org/Service"
      >
        <div className="services-two__single">
          {/* Image avec alt optimisé */}
          <div className="services-two__img">
            <Image width={370} height={300} src={image} alt={`${title} - Creativ Solutions Cameroun`} itemProp="image" />
          </div>

          <div className="services-two__content-box">
            <div className="services-two__content-inner">
              {/* Icône */}
              <div className="services-two__icon">
                <span className={icon} />
              </div>

              {/* Titre SEO-friendly */}
              <h3 className="services-two__title" itemProp="name">
                <Link href={link} title={`${title} au Cameroun`} itemProp="url">
                  {title}
                </Link>
              </h3>

              {/* Description SEO-friendly */}
              <p className="services-two__text" itemProp="description">
                {description}
              </p>

              <div className="services-two__shape-1">
                <img src="assets/images/shapes/services-two-shape-1.png" alt="" />
              </div>
            </div>

            {/* Bouton + CTA */}
            <div className="services-two__plus">
              <Link href={link} aria-label={`En savoir plus sur ${title} au Cameroun`} itemProp="url">
                <span className="fas fa-plus" />
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ServicesIteam;

/*
const ServicesIteam = ({
  image,
  icon,
  title,
  link,
                         description,
  index,
  className = "col-xl-4 col-lg-4",
}) => {
  return (
    <div
      className={`wow fadeInUp ${className}`}
      data-wow-delay={`${index * 100}ms`}
      key={index}
    >
      <div className="services-two__single">
        <div className="services-two__img">
          <img src={image} alt="" />
        </div>
        <div className="services-two__content-box">
          <div className="services-two__content-inner">
            <div className="services-two__icon">
              <span className={icon} />
            </div>
            <h3 className="services-two__title">
              <Link href={link}>{title}</Link>
            </h3>
            <p className="services-two__text">
              {description}
            </p>
            <div className="services-two__shape-1">
              <img src="assets/images/shapes/services-two-shape-1.png" alt="" />
            </div>
          </div>
          <div className="services-two__plus">
            <a href={link}>
              <span className="fas fa-plus" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesIteam;
*/
