"use client"; // ⚠️ Obligatoire pour useState et useEffect

import React, { useState, useEffect } from "react";
import {Blog2} from "./Blog";

const BlogPagination = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 3;

    const fetchPosts = async (page = 1) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/posts?limit=${limit}&page=${page}`,
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
            setTotalPages(data.meta?.last_page[1] || 1);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    return (
        <>
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
