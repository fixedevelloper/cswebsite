"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";


export const FaqItems = ({ className = "faq-one__right" }) => {
  const [activeKey, setActiveKey] = useState(0);

  // Questions/Réponses SEO-friendly pour CreativSolutions au Cameroun
  const datas = [
    {
      title: "Quels services digitaux offre CreativSolutions au Cameroun ?",
      content:
          "CreativSolutions propose la création de sites web professionnels, applications mobiles, design UX/UI, marketing digital et solutions e-commerce adaptées aux entreprises locales au Cameroun et en Afrique.",
    },
    {
      title: "Comment CreativSolutions peut améliorer ma présence en ligne ?",
      content:
          "Nous optimisons votre visibilité digitale grâce à des stratégies SEO locales, campagnes publicitaires ciblées et création de contenus attractifs pour toucher vos clients au Cameroun et dans la région Afrique centrale.",
    },
    {
      title: "Est-ce que CreativSolutions propose un accompagnement après le lancement ?",
      content:
          "Oui, nous offrons un support continu et des services de maintenance pour garantir que votre site ou application reste performant et sécurisé après sa mise en ligne.",
    },
    {
      title: "Combien de temps faut-il pour créer un site ou une application ?",
      content:
          "Le délai dépend de la complexité du projet, mais en moyenne, un site vitrine prend 2 à 4 semaines tandis qu'une application mobile peut prendre 6 à 12 semaines selon les fonctionnalités.",
    },
    {
      title: "Quels types d’entreprises peuvent bénéficier de vos services ?",
      content:
          "Nous travaillons avec des PME, startups, organisations locales et commerces en ligne au Cameroun et dans toute l’Afrique pour les aider à renforcer leur présence digitale et augmenter leurs ventes.",
    },
  ];

  return (
      <div className={`${className}`}>
        <Accordion className="accrodion-grp faq-one-accrodion" defaultActiveKey={"col-0"}>
          {datas.map((data, i) => (
              <div
                  className={`accrodion ${activeKey === i ? "active" : ""}`}
                  key={i}
                  itemScope
                  itemType="https://schema.org/Question"
              >
                <div className="accrodion-title" itemProp="name">
                  <Accordion.Toggle
                      as={"h4"}
                      eventKey={`col-${i}`}
                      onClick={() => setActiveKey(i)}
                  >
                    {data.title}
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey={`col-${i}`} className="accrodion-content">
                  <div className="pt-2" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div className="inner" itemProp="text">
                      <p>{data.content}</p>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
          ))}
        </Accordion>
      </div>
  );
};


export default FaqItems;
