import FutxoLayout from "@/Layout/FutxoLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetails from "@/components/ServiceDetails";
import Image from "next/image";
import {generateSEO} from "../../../utility/seo";
import React from "react";

export const metadata = generateSEO({
    title: "Création de site web professionnel | Creativ Solutions",
    description:
        "Nous créons des sites web professionnels, modernes et performants pour votre entreprise au Cameroun et en Afrique.",
    image: "/assets/images/services/create-website.webp",
    url: "https://creativsolutions.cm/services/creation-site-web",
    keywords: ["site web", "agence digitale Cameroun", "SEO", "marketing digital"],
});

const tabs = [
    {
        key: "specializations",
        title: "Spécialisations",
        content:
            "Nous développons des sites vitrines, e-commerce, et applications web sur mesure, adaptés à votre entreprise.",
        points: [
            { text: "Sites vitrines professionnels" },
            { text: "Boutiques en ligne sécurisées" },
            { text: "Applications web sur mesure" },
        ],
        image: "/assets/images/services/create-website.webp",
    },
    {
        key: "intelligence",
        title: "Intelligence",
        content:
            "Nos solutions intègrent les meilleures pratiques SEO et analytics pour augmenter la visibilité et les performances de votre site.",
    },
    {
        key: "precautions",
        title: "Précautions",
        content:
            "Nous assurons la sécurité, la maintenance et la conformité RGPD de tous nos sites web pour protéger vos données et celles de vos clients.",
    },
    {
        key: "support",
        title: "Support",
        content:
            "Notre équipe fournit un support technique continu et des mises à jour régulières pour garantir un fonctionnement optimal.",
    },
];

const sidebarCategories = [
    { href: "/services/conception-graphique-UI-UX-Design", text: "UI/UX Designing" },
    { href: "/services/creation-site-web", text: "Création de site web" },
    { href: "/services/creation-site-ecommerce", text: "Création de site e-commerce" },
    { href: "/services/devellopement-applications-web-mobile", text: "Développement d’applications" },
    { href: "/services/marketing-strategy", text: "Marketing Strategy" },
];

const documents = [
    { text: "Télécharger la brochure PDF", href: "/assets/docs/brochure.pdf" },
    { text: "Télécharger la documentation", href: "/assets/docs/document.docx" },
];

const support = {
    title: "Nous sommes toujours là pour vous aider",
    text: "Contactez notre équipe pour toute question ou support technique.",
    btnText: "Envoyer un message",
    btnHref: "/contact",
    bgImage: "/assets/images/backgrounds/services-details-support-bg.jpg",
};

const page = () => {
    return (
        <FutxoLayout>
            <Breadcrumb title="Création de site web professionnel" />

            <ServiceDetails
                thumbnail="/assets/images/services/create-website.webp"
                title="Création de site web professionnel"
                activeCategory="creation-site-web"
                description="Boostez votre visibilité en ligne avec un site web moderne et performant, conçu sur mesure pour votre entreprise."
                tabs={tabs}
                sidebarCategories={sidebarCategories}
                documents={documents}
                support={support}
            />
        </FutxoLayout>
    );
};

export default page;
