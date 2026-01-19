import { AboutUS2 } from "@/components/AboutUs";
import { Blog2 } from "@/components/Blog";
import { Faq2 } from "@/components/Faq";
import { HomeSlider2 } from "@/components/HomeSlider";
import { Portfolio2 } from "@/components/Portfolio";
import Process from "@/components/Process";
import { Services2 } from "@/components/Services";
import { VideoSection2 } from "@/components/VideoSection";
import FutxoLayout from "@/Layout/FutxoLayout";
import React from "react";
import {Solution} from "../components/Solution";


export const metadata = {
    title: "Création de sites web & applications | Creativ Solutions",
    description:
        "Creativ Solutions est une agence digitale au Cameroun spécialisée dans la création de sites web professionnels, applications mobiles et solutions de marketing digital pour entreprises et startups.",
    keywords:
        "Creativ Solutions, agence digitale Cameroun, création site web, développement application mobile, marketing digital, UI/UX design, E-commerce, applications web, Afrique, services digitaux",
};

// ISR: Rebuild tous les 60 sec
export const revalidate = 60;

const Homepage = async () => {
    // ✅ fetch côté serveur
    const res = await fetch("http://127.0.0.1:8000/api/posts/latest?limit=6", { cache: "no-store" });

    if (!res.ok) {
        console.error("Erreur API:", res.status, await res.text());
        return { props: { blogPosts: [] } };
    }

    const data = await res.json();


    const blogPosts = data.data.map((post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        created_at: post.created_at,
        comments_count: post.comments_count || 0,
        // Utilisation de la conversion 'thumb' si disponible
        image_url: post.thumb_url || post.image_url || "/assets/images/blog/default.jpg",
    }));


    return (
        <FutxoLayout header={2}>
            <HomeSlider2 />
            <AboutUS2 />
            <Services2 />
            <Portfolio2 />
            <Process />
            <VideoSection2 />
            <Faq2 />
            <section className="meeting-one">
                <div
                    className="meeting-one__bg jarallax"
                    data-jarallax=""
                    data-speed="0.2"
                    data-imgposition="50% 0%"
                    style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/meeting-one-bg.webp)",
                    }}
                />
                <div className="container">
                    <div className="meeting-one__inner">
                        <div className="meeting-one__icon">
                            <span className="icon-bpm" />
                        </div>
                        <h3 className="meeting-one__title">
                            CreativSolutions : Des solutions digitales <br />
                            pour booster votre entreprise au Cameroun et en Afrique
                        </h3>
                    </div>
                </div>
            </section>
            <Blog2 blogPosts={blogPosts} />
        </FutxoLayout>
    );
};

export default Homepage;

