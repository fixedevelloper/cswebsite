import FutxoLayout from "@/Layout/FutxoLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetails from "@/components/ServiceDetails";

import React from "react";

// 🔹 SEO dynamique
export const metadata = {
    title: "Conception graphique & UI/UX Design | Creativ Solutions",
    description:
        "Créez des interfaces modernes et intuitives pour vos sites web et applications avec un design centré utilisateur. UI/UX Design et conception graphique par Creativ Solutions.",
    keywords:
        "UI/UX Design, conception graphique, design web, design mobile, Creativ Solutions, expérience utilisateur, design interface, branding",
    openGraph: {
        title: "Conception graphique & UI/UX Design | Creativ Solutions",
        description:
            "Boostez l'expérience utilisateur de vos sites et applications avec des interfaces modernes et intuitives, créées par notre équipe de designers.",
        url: "https://www.creativsolutions.cm/services/ui-ux-designing",
        siteName: "Creativ Solutions",
        images: [
            {
                url: "https://www.cscreativ.com/assets/images/services/create-website.webp",
                width: 1200,
                height: 630,
                alt: "UI/UX Design Creativ Solutions",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
};

const tabs = [
    {
        key: "specializations",
        title: "Spécialisations",
        content:
            "Nous créons des designs uniques et ergonomiques pour vos sites web et applications, afin de maximiser l’expérience utilisateur et l’impact visuel.",
        points: [
            { text: "UI Design moderne et responsive." },
            { text: "UX Design centré utilisateur pour une navigation intuitive." },
            { text: "Branding et identité visuelle cohérents." },
        ],
        image: "/assets/images/services/webdesign.webp",
    },
    {
        key: "intelligence",
        title: "Intelligence",
        content:
            "Nos designs prennent en compte l’analyse comportementale des utilisateurs pour améliorer l’engagement et la conversion.",
        points: [
            { text: "Tests utilisateurs et optimisation des parcours." },
            { text: "Wireframes et prototypes interactifs." },
        ],
    },
    {
        key: "precautions",
        title: "Précautions",
        content:
            "Nous respectons les standards d’accessibilité et les bonnes pratiques UX/UI pour garantir un produit utilisable et performant.",
        points: [
            { text: "Accessibilité et responsive design." },
            { text: "Cohérence des couleurs, typographies et éléments graphiques." },
        ],
    },
    {
        key: "support",
        title: "Support",
        content:
            "Après la livraison, nous offrons un accompagnement pour ajuster et améliorer vos interfaces selon les retours utilisateurs.",
        points: [
            { text: "Mises à jour et ajustements UI/UX." },
            { text: "Support pour l’intégration front-end." },
        ],
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
    { text: "Guide UI/UX Design", href: "/documents/guide-uiux.pdf" },
    { text: "Portfolio de créations graphiques", href: "/documents/portfolio.pdf" },
];

const support = {
    title: "Nous vous accompagnons",
    text: "Notre équipe de designers vous accompagne pour transformer vos idées en interfaces attrayantes et intuitives.",
    btnText: "Contactez-nous",
    btnHref: "/contact",
    bgImage: "/assets/images/backgrounds/support-bg.jpg",
};

const page = () => {
    return (
        <FutxoLayout>
            <Breadcrumb title="Conception graphique & UI/UX Design" />

            <ServiceDetails
                thumbnail="/assets/images/services/webdesign.webp"
                title="Conception graphique & UI/UX Design"
                activeCategory="conception-graphique-UI-UX-Design"
                description="Créez des interfaces modernes et intuitives pour vos sites web et applications avec un design centré utilisateur."
                tabs={tabs}
                sidebarCategories={sidebarCategories}
                documents={documents}
                support={support}
            />
        </FutxoLayout>
    );
};

export default page;

