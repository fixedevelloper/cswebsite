import Breadcrumb from "@/components/Breadcrumb";
import FutxoLayout from "@/Layout/FutxoLayout";
import React  from "react";
import DevisForm from "../../components/DevisForm";

export const metadata = {
    title: "Demandez un devis gratuit | CSCREATIV – Creativ Solution",
    description:
        "Demandez un devis gratuit pour votre projet digital : site web, application mobile, logiciel métier, fintech ou IA. Réponse rapide sous 24h.",
    keywords:
        "devis informatique Cameroun, agence IT Douala, devis site web, devis application mobile, Creativ Solution",
};

const DevisPage = () => {
    return (
        <FutxoLayout>
            {/* Fil d'Ariane */}
            <Breadcrumb title="Demandez un devis" />

            {/* Section devis */}
            <section className="contact-page">
                <div className="container">
                    <div className="row">

                        {/* Colonne gauche */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="contact-page__left">
                                <h3 className="contact-page__title">
                                    Demandez votre devis gratuit
                                </h3>
                                <p className="mt-2">
                                    Parlez-nous de votre projet. Notre équipe vous proposera
                                    une solution adaptée à vos objectifs et à votre budget.
                                </p>

                                <ul className="mt-4 list-unstyled">
                                    <li>✅ Devis gratuit et sans engagement</li>
                                    <li>⏱ Réponse sous 24h</li>
                                    <li>🔒 Données confidentielles</li>
                                    <li>🤝 Accompagnement personnalisé</li>
                                </ul>
                            </div>
                        </div>

                        {/* Colonne droite */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="contact-page__right">
                                <DevisForm />
                                <div className="result" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </FutxoLayout>
    );
};

export default DevisPage;

