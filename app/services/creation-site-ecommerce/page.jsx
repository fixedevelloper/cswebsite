import FutxoLayout from "@/Layout/FutxoLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetails from "@/components/ServiceDetails";
import {generateSEO} from "../../../utility/seo";

export const metadata = generateSEO({
    title: "Création de site e-commerce",
    description:
        "Nous créons des boutiques en ligne sécurisées et performantes, avec paiement en ligne et gestion des produits, pour votre entreprise au Cameroun et en Afrique.",
    image: "/assets/images/services/e-commerce-service.webp",
    url: "/services/creation-site-ecommerce",
    keywords: ["site e-commerce", "boutique en ligne", "agence digitale Cameroun", "paiement en ligne"],
});
const tabs = [
    {
        key: "specializations",
        title: "Spécialisations",
        content:
            "Nous créons des sites e-commerce sur mesure avec intégration complète du catalogue produits, paiement en ligne sécurisé et interface administrateur facile à utiliser.",
        points: [
            { text: "Design responsive et moderne adapté mobile et desktop." },
            { text: "Intégration des modes de paiement locaux et internationaux." },
            { text: "Optimisation SEO pour Google et autres moteurs de recherche." },
        ],
        image: "/assets/images/services/e-commerce-service.webp",
    },
    {
        key: "intelligence",
        title: "Intelligence",
        content:
            "Nous analysons vos besoins et votre marché pour proposer des fonctionnalités intelligentes : recommandations produits, promotions ciblées et gestion automatisée des stocks.",
        points: [
            { text: "Système de recommandations personnalisées." },
            { text: "Automatisation des emails et notifications clients." },
        ],
    },
    {
        key: "precautions",
        title: "Précautions",
        content:
            "Nous mettons en place des mesures de sécurité pour protéger vos données et celles de vos clients, et garantissons la conformité aux réglementations locales.",
        points: [
            { text: "SSL, sauvegardes automatiques et protection anti-fraude." },
            { text: "Conformité RGPD et lois locales sur les données." },
        ],
    },
    {
        key: "support",
        title: "Support",
        content:
            "Nous offrons un support continu pour votre site e-commerce afin de résoudre rapidement tout problème technique et garantir une expérience utilisateur optimale.",
        points: [
            { text: "Support technique disponible 7j/7." },
            { text: "Mises à jour et maintenance régulières." },
        ],
    },
];

const sidebarCategories = [
    { href: "/services/conception-graphique-ui-ux-design", text: "Conception graphique & UI/UX" },
    { href: "/services/creation-site-web", text: "Création de site web" },
    { href: "/services/creation-site-ecommerce", text: "Création de site e-commerce" },
    { href: "/services/developpement-applications-web-mobile", text: "Développement d’applications" },
];

const documents = [];

const support = {
    title: "Nous vous accompagnons",
    text: "Notre équipe vous offre un support complet pour votre site e-commerce, de la conception à la mise en ligne et au-delà.",
    btnText: "Contactez-nous",
    btnHref: "/contact",
    bgImage: "/assets/images/backgrounds/support-bg.jpg",
};

const page = () => {
    return (
        <FutxoLayout>
            <Breadcrumb title="Création de site e-commerce" />

            <ServiceDetails
                thumbnail="/assets/images/services/e-commerce-service.webp"
                title="Création de site e-commerce"
                activeCategory="creation-site-ecommerce"
                description="Boostez vos ventes en ligne avec un site e-commerce moderne, sécurisé et optimisé pour le SEO."
                tabs={tabs}
                sidebarCategories={sidebarCategories}
                documents={documents}
                support={support}
            />
        </FutxoLayout>
    );
};

export default page;
