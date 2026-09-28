// utils/seo.js
import { DEFAULT_OG_IMAGE } from "./site";

/**
 * Génère les métadonnées SEO et OpenGraph pour une page/service
 * @param {Object} options
 * @param {string} options.title - Titre de la page
 * @param {string} options.description - Description de la page
 * @param {string} options.image - URL de l'image OpenGraph
 * @param {string} options.url - URL complète de la page
 * @param {Array<string>} options.keywords - Mots-clés
 * @returns {Object} Metadata compatible Next.js
 */
export const generateSEO = ({
                                title,
                                description,
                                image = DEFAULT_OG_IMAGE,
                                url = "/",
                                keywords = [],
                            }) => {
    return {
        title,
        description,
        keywords: keywords.join(", "),
        openGraph: {
            title,
            description,
            url,
            siteName: "Creativ Solutions",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
            locale: "fr_FR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
};
