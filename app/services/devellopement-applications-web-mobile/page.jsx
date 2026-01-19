import FutxoLayout from "@/Layout/FutxoLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetails from "@/components/ServiceDetails";
import React from "react";


// 🔹 SEO dynamique
export const metadata = {
    title: "Développement d’application web et mobile | Creativ Solutions",
    description:
        "Développez des applications web et mobiles performantes et sur mesure pour votre entreprise. Android, iOS et web avec une expérience utilisateur optimale.",
    keywords:
        "Développement d’application, application mobile, application web, Android, iOS, UX/UI, Creativ Solutions, application sur mesure, développement fullstack",
    openGraph: {
        title: "Développement d’application web et mobile | Creativ Solutions",
        description:
            "Notre équipe crée des applications web et mobiles sur mesure, performantes et centrées utilisateur pour maximiser l’engagement et la productivité.",
        url: "https://www.creativsolutions.cm/services/devellopement-application-web-mobile",
        siteName: "Creativ Solutions",
        images: [
            {
                url: "https://www.creativsolutions.cm/assets/images/services/application-mobile.webp",
                width: 1200,
                height: 630,
                alt: "Développement d'application Creativ Solutions",
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
            "Nous développons des applications web et mobiles sur mesure, adaptées à vos besoins métier et à votre stratégie digitale.",
        points: [
            { text: "Applications web fullstack performantes." },
            { text: "Applications mobiles Android et iOS natives et hybrides." },
            { text: "Intégration API, paiement, et fonctionnalités avancées." },
        ],
        image: "/assets/images/services/app-development-points.jpg",
    },
    {
        key: "intelligence",
        title: "Intelligence",
        content:
            "Nous intégrons des fonctionnalités intelligentes comme notifications push, analytique et optimisation UX pour vos utilisateurs.",
        points: [
            { text: "Notifications et interactions personnalisées." },
            { text: "Analyse de performance et suivi d’usage." },
        ],
    },
    {
        key: "precautions",
        title: "Précautions",
        content:
            "Nous respectons les standards de sécurité et de performance pour garantir des applications fiables et robustes.",
        points: [
            { text: "Sécurité et protection des données." },
            { text: "Optimisation des performances et tests rigoureux." },
        ],
    },
    {
        key: "support",
        title: "Support",
        content:
            "Après le déploiement, nous assurons la maintenance, les mises à jour et l’accompagnement pour votre application.",
        points: [
            { text: "Maintenance corrective et évolutive." },
            { text: "Assistance et support technique continu." },
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
    { text: "Guide Développement d’applications", href: "/documents/guide-app.pdf" },
    { text: "Portfolio d’applications", href: "/documents/portfolio-app.pdf" },
];

const support = {
    title: "Nous accompagnons vos projets",
    text: "Notre équipe vous accompagne de l’idée jusqu’au déploiement de votre application web ou mobile, en garantissant performance et sécurité.",
    btnText: "Contactez-nous",
    btnHref: "/contact",
    bgImage: "/assets/images/backgrounds/support-bg.jpg",
};

const page = () => {
    return (
        <FutxoLayout>
            <Breadcrumb title="Développement d’application web et mobile" />

            <ServiceDetails
                thumbnail="/assets/images/services/application-mobile.webp"
                title="Développement d’application web et mobile"
                activeCategory="devellopement-applications-web-mobile"
                description="Développez des applications web et mobiles performantes et sur mesure, adaptées à votre entreprise."
                tabs={tabs}
                sidebarCategories={sidebarCategories}
                documents={documents}
                support={support}
            />
        </FutxoLayout>
    );
};

export default page;
