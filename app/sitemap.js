import { SITE_URL } from "@/utility/site";

export const revalidate = 3600; // Regénération toutes les 1h

// Récupère tous les articles en parcourant la pagination de l'API
async function fetchAllPosts() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return [];

    const posts = [];
    let page = 1;
    let lastPage = 1;

    do {
        const res = await fetch(`${apiUrl}/api/posts?limit=100&page=${page}`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) break;

        const json = await res.json();
        posts.push(...(json.data ?? []));
        // Anciennes versions de l'API : last_page renvoyé en double sous forme de tableau
        const apiLastPage = json.meta?.last_page;
        lastPage = (Array.isArray(apiLastPage) ? apiLastPage[0] : apiLastPage) ?? 1;
        page++;
    } while (page <= lastPage);

    return posts;
}

export default async function sitemap() {
    const now = new Date().toISOString();

    let postUrls = [];
    try {
        const posts = await fetchAllPosts();
        postUrls = posts.map(post => ({
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: post.created_at ? new Date(post.created_at.replace(" ", "T")).toISOString() : now,
            changeFrequency: "weekly",
            priority: 0.7,
        }));
    } catch (error) {
        console.error("Erreur sitemap blog:", error);
    }

    const pages = [
        { path: "", changeFrequency: "weekly", priority: 1 },
        { path: "/services", changeFrequency: "monthly", priority: 0.9 },
        { path: "/services/creation-site-web", changeFrequency: "monthly", priority: 0.8 },
        { path: "/services/creation-site-ecommerce", changeFrequency: "monthly", priority: 0.8 },
        { path: "/services/developpement-applications-web-mobile", changeFrequency: "monthly", priority: 0.8 },
        { path: "/services/conception-graphique-ui-ux-design", changeFrequency: "monthly", priority: 0.8 },
        { path: "/nos-solutions", changeFrequency: "monthly", priority: 0.7 },
        { path: "/nos-realisations", changeFrequency: "monthly", priority: 0.7 },
        { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
        { path: "/demandez-devis", changeFrequency: "yearly", priority: 0.7 },
        { path: "/about", changeFrequency: "monthly", priority: 0.6 },
        { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    ].map(({ path, ...rest }) => ({ url: `${SITE_URL}${path}`, lastModified: now, ...rest }));

    return [...pages, ...postUrls];
}
