import Link from "next/link";

export const Process = ({ extraClass = "" }) => {
  const steps = [
    {
      title: "Concept",
      description:
          "Nous analysons vos besoins pour concevoir une stratégie digitale adaptée à votre entreprise au Cameroun.",
      image: "concepts.jpg",
      link: "/process/concept",
    },
    {
      title: "Planification",
      description:
          "Planification détaillée du projet, des ressources et des délais pour garantir une livraison efficace.",
      image: "planification.avif",
      link: "/process/planification",
    },
    {
      title: "Design",
      description:
          "Création de maquettes et design UX/UI optimisé pour une expérience utilisateur fluide et engageante.",
      image: "design.avif",
      link: "/process/design",
    },
    {
      title: "Développement",
      description:
          "Développement web ou mobile professionnel avec des technologies modernes et robustes.",
      image: "devellopement.avif",
      link: "/process/developpement",
    },
    {
      title: "Tests",
      description:
          "Tests complets pour assurer la qualité, la performance et la compatibilité sur tous les supports.",
      image: "tests.webp",
      link: "/process/tests",
    },
    {
      title: "Lancement",
      description:
          "Mise en production et suivi post-lancement pour garantir la réussite de votre projet digital.",
      image: "lancement.avif",
      link: "/process/lancement",
    },
  ];

  return (
      <section className={`process-one ${extraClass}`}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Notre Processus</span>
            </div>
            <h2 className="section-title__title">
              Obtenez votre solution digitale en <br />
              6 étapes simples
            </h2>
          </div>
          <div className="row">
            {steps.map((step, index) => (
                <div className="col-xl-4 col-lg-4" key={index}>
                  <div className="process-one__single" itemScope itemType="https://schema.org/HowToStep">
                    <div className="process-one__img-box">
                      <div className="process-one__img">
                        <img
                            src={`assets/images/resources/${step.image}`}
                            alt={`${step.title} - Creativ Solutions Cameroun`}
                            itemProp="image"
                        />
                      </div>
                      <div className="process-one__count">{index + 1}</div>
                    </div>
                    <div className="process-one__content">
                      <div
                          className="process-one__shape-1"
                      /*    style={{
                            backgroundImage:
                                "url(assets/images/shapes/process-one-shape-1.png)",
                          }}*/
                      />
                      <h4 className="process-one__title" itemProp="name">
                        {step.title}
                      </h4>
                      <p className="process-one__text" itemProp="text">
                        {step.description}
                      </p>
                      <Link
                          href={step.link}
                          className="process-one__more-details"
                          aria-label={`Plus de détails sur ${step.title}`}
                          itemProp="url"
                      >
                        <span className="icon-next" /> Plus de détails
                      </Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Process;
