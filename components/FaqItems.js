"use client";

import { useState } from "react";


export const FaqItems = ({ className = "faq-one__right" }) => {
  const [activeKey, setActiveKey] = useState(null);

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

  const toggle = (index) => {
    setActiveKey(activeKey === index ? null : index);
  };

  return (
      <div className={`${className} faq-one-accrodion`}>
        {datas.map((data, i) => {
          const isActive = activeKey === i;
          return (
              <div
                  className={`faq-item ${isActive ? "active" : ""} mb-3 border rounded`}
                  key={i}
                  itemScope
                  itemType="https://schema.org/Question"
              >
                <div
                    className={`faq-title bg-transparent ${isActive ? "text-danger" : "text-dark"} px-4 py-3 rounded-top d-flex justify-content-between align-items-center`}
                    itemProp="name"
                    onClick={() => toggle(i)}
                    style={{ cursor: 'pointer' }}
                >
                  <span className={`${isActive ? "text-danger" : "text-dark"}`}>{data.title}</span>
                  <span className="faq-icon" style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)", transition: "0.3s" }}>+</span>
                </div>

                <div
                    className={`faq-content px-4 py-3 bg-light transition-all overflow-hidden`}
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                    style={{
                      maxHeight: isActive ? "500px" : "0",
                      opacity: isActive ? 1 : 0,
                      transition: "all 0.4s ease",
                    }}
                >
                  <div className="inner" itemProp="text">
                    <p className="m-0">{data.content}</p>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
  );
};




export default FaqItems;
