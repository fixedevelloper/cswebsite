// Domaine public du site : seule source de vérité pour les URL absolues (canonical, sitemap, robots, OpenGraph)
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.cscreativ.com").replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/assets/images/services/create-website.webp";
