import { SITE_URL } from "@/utility/site";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/plkaswer458725lost"],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
