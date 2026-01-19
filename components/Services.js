import Link from "next/link";
import ServicesIteam from "./ServicesIteam";


export const Services2 = ({ extraClass = "" }) => {
  const services = [
    {
      image: "/assets/images/services/create-website.webp",
      icon: "icon-digital-marketing",
      title: "Création de Sites Web",
      link: "/website-development",
      description:
          "Développement de sites web professionnels, responsives et SEO-friendly, adaptés aux besoins des entreprises locales et startups.",
    },
    {
      image: "/assets/images/services/e-commerce-service.webp",
      icon: "icon-shopping-cart",
      title: "Sites E-commerce",
      link: "/ecommerce-development",
      description:
          "Conception de boutiques en ligne performantes pour vendre vos produits au Cameroun et à l’international avec sécurité et rapidité.",
    },
    {
      image: "/assets/images/services/application-mobile.webp",
      icon: "icon-mobile-app",
      title: "Applications Web & Mobile",
      link: "/app-development",
      description:
          "Développement d’applications web et mobile sur-mesure pour votre entreprise, afin d’améliorer vos services et votre communication.",
    },
    {
      image: "/assets/images/services/Graphique-conception-graphique.png",
      icon: "icon-illustration",
      title: "Conception Graphique",
      link: "/graphic-design",
      description:
          "Création de designs professionnels pour vos supports digitaux et imprimés. Boostez votre identité visuelle au Cameroun et en Afrique.",
    },
    {
      image: "/assets/images/services/webdesign.jpg",
      icon: "icon-ux-design",
      title: "UI/UX Design",
      link: "/ui-ux-designing",
      description:
          "Conception d’interfaces web et mobile ergonomiques et attractives. Optimisez l’expérience utilisateur pour augmenter vos conversions.",
    },
    {
      image: "/assets/images/services/digital-marketing.png",
      icon: "icon-social-media",
      title: "Marketing Digital",
      link: "/digital-marketing",
      description:
          "Stratégies digitales efficaces incluant réseaux sociaux, SEO et publicité ciblée pour développer votre présence en ligne au Cameroun et en Afrique.",
    },

  ];

  return (
      <section
          className={`services-two ${extraClass}`}
          id="services"
          itemScope
          itemType="https://schema.org/Service"
      >
        <div
            className="services-two__shape-2 float-bob-y"
            style={{
              backgroundImage: "url(assets/images/shapes/services-two-shape-2.jpg)",
            }}
        />
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Nos Services</span>
            </div>
            <h2 className="section-title__title">
              Découvrez les services professionnels <br />
              de Creativ Solutions au Cameroun
            </h2>
          </div>
          <div className="row">
            {services.map((service, index) => (
                <ServicesIteam
                    key={index}
                    index={index}
                    image={service.image}
                    icon={service.icon}
                    title={service.title}
                    link={service.link}
                    description={service.description}
                />
            ))}
          </div>
        </div>
      </section>
  );
};
