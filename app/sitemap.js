import React from "react";
export const revalidate = 3600; // Regénération toutes les 1h

// app/sitemap.js
export default async function sitemap() {
    const baseUrl = "https://cscreativ.com";

    let postUrls = [];

    try {
        // Récupère les posts depuis l'API
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
            next: { revalidate: 3600 },
        });

        if (res.ok) {
            const posts = await res.json();

            // Filtrer les posts publiés si ton API retourne un champ "published"
            const publishedPosts = posts.data.filter(post => post.published !== false);

            postUrls = publishedPosts.map(post => ({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified: post.updated_at ? new Date(post.updated_at).toISOString() : new Date().toISOString(),
                changeFrequency: "weekly",
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error("Erreur sitemap blog:", error);
    }

    // Pages de services
    const serviceSlugs = [
        "creation-site-web",
        "devellopement-applications-web-mobile",
        "conception-graphique-ui-ux-design",
        "creation-site-ecommerce",
    ];

    const serviceUrls = serviceSlugs.map(slug => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    // Pages principales
    const mainPages = [
        { url: baseUrl, changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
    ].map(p => ({ ...p, lastModified: new Date().toISOString() }));

    return [...mainPages, ...serviceUrls, ...postUrls];
}

