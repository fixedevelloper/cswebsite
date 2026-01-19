import React from "react";
export const revalidate = 3600; // Regénération toutes les 1h

export default async function sitemap() {
    const baseUrl = "https://cscreativ.com";

    let postUrls = [];

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/posts", {
            next: { revalidate: 3600 },
        });

        if (res.ok) {
            const posts = await res.json();

            console.log(posts.data)
            postUrls = posts.data.map((post) => ({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified: post.updated_at || new Date(),
                changeFrequency: "weekly",
                priority: 0.7,
            }));
        }
    } catch (error) {
        console.error("Erreur sitemap blog:", error);
    }

    const services = [
        "creation-site-web",
        "devellopement-applications-web-mobile",
        "conception-graphique-ui-ux-design",
        "creation-site-ecommerce",
    ];

    const serviceUrls = services.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        ...serviceUrls,
        ...postUrls,
    ];
}
