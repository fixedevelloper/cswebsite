import Breadcrumb from "@/components/Breadcrumb";

import FutxoLayout from "@/Layout/FutxoLayout";
import React from "react";
import SolutionIteam from "../../components/SolutionIteam";

export const metadata = {
    title: "Nos solutions",
};

const page = () => {
    const solutionData = [
        {
            name: "GE-SCHOOL",
            title: "Application de gestion d’école",
            image: "solution.jpg",
            delay: "100ms",
            animationClass: "fadeInLeft",
        },
        {
            name: "We-Transfer Cash",
            title: "Envoi d'argent vers l'international",
            image: "wtc.jpeg",
            delay: "200ms",
            animationClass: "fadeInUp",
        },
        {
            name: "RentEase",
            title: "Application de gestion locative",
            image: "solution.jpg",
            delay: "300ms",
            animationClass: "fadeInRight",
        },
        {
            name: "Eparkwin",
            title: "Application de paris communautaires",
            image: "eparwin.png",
            delay: "400ms",
            animationClass: "fadeInRight",
        },
    ];

    return (
        <FutxoLayout>
            <Breadcrumb title="Nos solutions" />

            <section className="team-two mt-5" id="team">
                <div className="container">
                    <div
                        className="section-title text-center"
                        itemScope
                        itemType="https://schema.org/Service"
                    >
  <span className="section-title__tagline" itemProp="category">
    Solutions digitales professionnelles
  </span>

                        <h2 className="section-title__title" itemProp="name">
                            Nos solutions numériques pour la réussite de votre entreprise
                        </h2>

                        <p className="section-title__description" itemProp="description">
                            Nous concevons des applications web, mobiles et des plateformes digitales
                            innovantes adaptées aux besoins des entreprises au Cameroun et en Afrique.
                        </p>
                    </div>


                    <div className="row">
                        {solutionData.map((solution, index) => (
                            <SolutionIteam
                                key={index}
                                solution={solution}
                                className="col-xl-3 col-lg-4 col-md-6"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </FutxoLayout>
    );
};

export default page;
