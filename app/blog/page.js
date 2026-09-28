import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Breadcrumb";
import FutxoLayout from "@/Layout/FutxoLayout";
import React from "react";
import {Blog2} from "../../components/Blog";
import BlogPagination from "../../components/BlogPagination";


export const metadata = {
    title: "Blog | Creativ Solutions",
    description:
        "Dernières actualités, conseils et astuces digitales pour les entreprises au Cameroun et en Afrique par Creativ Solutions.",
    keywords:
        "blog Creativ Solutions, agence digitale Cameroun, création site web, marketing digital, conseils entreprises, développement applications",
    openGraph: {
        title: "Blog | Creativ Solutions",
        description:
            "Dernières actualités, conseils et astuces digitales pour les entreprises au Cameroun et en Afrique par Creativ Solutions.",
        url: "/blog",
        siteName: "Creativ Solutions",
        images: [
            {
                url: "/assets/images/services/create-website.webp",
                width: 1200,
                height: 630,
                alt: "Blog Creativ Solutions",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Creativ Solutions",
        description:
            "Dernières actualités, conseils et astuces digitales pour les entreprises au Cameroun et en Afrique par Creativ Solutions.",
        images: ["/assets/images/services/create-website.webp"],
    },
};


const BlogPage = async () => {

    return (
        <FutxoLayout>
            <Breadcrumb title={"Blog"} />
            <BlogPagination/>
        </FutxoLayout>
    );
};

export default BlogPage;

