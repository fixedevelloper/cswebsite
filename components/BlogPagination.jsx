"use client"; // ⚠️ Obligatoire pour useState et useEffect

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {Blog2} from "./Blog";

const BlogPagination = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const limit = 6;
    // Recherche lancée depuis la loupe du menu ou la page 404 : /blog?search=...
    const search = useSearchParams().get("search")?.trim() || "";

    const fetchPosts = async (page = 1) => {
        try {
            const params = new URLSearchParams({ limit, page });
            if (search) params.set("search_global", search);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${params}`,
                { cache: "no-store" }
            );
            if (!res.ok) {
                console.error("Erreur API:", res.status);
                return;
            }
            const data = await res.json();

            const posts = data.data.map((post) => ({
                id: post.id,
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                created_at: post.created_at,
                comments_count: post.comments_count || 0,
                image_url: post.thumb_url || post.image_url || "/assets/images/blog/default.jpg",
            }));

            setBlogPosts(posts);
            // Anciennes versions de l'API : last_page renvoyé en double sous forme de tableau
            const lastPage = data.meta?.last_page;
            setTotalPages((Array.isArray(lastPage) ? lastPage[0] : lastPage) || 1);
        } catch (err) {
            console.error(err);
        } finally {
            setLoaded(true);
        }
    };

    // Nouvelle recherche : retour à la première page
    useEffect(() => {
        setPage(1);
    }, [search]);

    useEffect(() => {
        fetchPosts(page);
    }, [page, search]);

    return (
        <>
            {search && (
                <p className="text-center mt-5">
                    {loaded && blogPosts.length === 0
                        ? <>Aucun article ne correspond à « {search} ».</>
                        : <>Résultats pour « {search} »</>}
                </p>
            )}
            <Blog2 blogPosts={blogPosts} />
            {/* Pagination */}
            <div className="blog-pagination text-center mt-8 flex justify-center items-center gap-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="thm-btn"
                >
                    Précédent
                </button>
                <span>
          {page} / {totalPages}
        </span>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="thm-btn"
                >
                    Suivant
                </button>
            </div>
        </>
    );
};

export default BlogPagination;
