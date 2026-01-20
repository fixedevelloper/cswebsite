import Breadcrumb from "@/components/Breadcrumb";
import FutxoLayout from "@/Layout/FutxoLayout";
import Link from "next/link";
import CommentForm from "../../../components/CommentForm";
import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

// 🔹 SEO dynamique par post
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`,
      { cache: "no-store" }
  );

  if (!res.ok) {
    return {
      title: "Article introuvable | Creativ Solutions",
      description: "Cet article n’existe pas ou a été supprimé.",
    };
  }

  const { post } = await res.json();

  const siteUrl = "https://creativ-solutions.com";
  const image =
      post.image_url;

  return {
    title: `${post.title} | Creativ Solutions`,
    description: post.excerpt || post.meta_description || post.title,

    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Creativ Solutions",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "fr_FR",
      type: "article",
      publishedTime: post.created_at,
      authors: [post.user?.name],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}




/* 🔹 Page Server Component */

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params; // ✅ OBLIGATOIRE

  const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}?limit=5`,
      { cache: "force-cache" }
  );


  if (!res.ok) {
    return (
        <FutxoLayout>
          <Breadcrumb title="Article introuvable" />
        </FutxoLayout>
    );
  }

  const { post, latest_posts, categories } = await res.json();
  console.log(post)
  return (
      <FutxoLayout>
        <Breadcrumb title={post?.title} />

        <section className="blog-details">
          <div className="container">
            <div className="row">

              {/* CONTENU */}
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">

                  <div className="blog-details__img-1">
                    <Image
                        src={post.image_url}
                        alt={post?.title}
                        width={770}
                        height={424}
                        priority
                        unoptimized={true}
                    />
                  </div>

                  {/* META */}
                  <ul className="blog-details__meta list-unstyled">
                    <li>
                      <span className="fas fa-tags" />{" "}
                      {post.categories?.map(c => c.name).join(", ")}
                    </li>
                    <li>
                      <span className="fas fa-user" /> {post.user?.name}
                    </li>
                    <li>
                      <span className="fas fa-comments" />{" "}
                      {post.comments_count || 0} commentaire(s)
                    </li>
                  </ul>

                  <h1 className="blog-details__title-1">{post.title}</h1>

                  {/* CONTENU */}
                  {parse(post.content)}

                  {/* TAGS & PARTAGE */}
                  <div className="blog-details__bottom">
                    <p className="blog-details__tags">
                      {post?.tags?.map(tag => (
                          <Link
                              key={tag.id}
                              href={`/blog?tag=${tag.slug}`}
                              className="blog-tag"
                          >
                            {tag.name}
                          </Link>
                      ))}
                    </p>

                    <div className="blog-details__social-list">
                      <a href="#" title="Partager sur Facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#" title="Partager sur Twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" title="Partager sur Instagram">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#" title="Partager sur Pinterest">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </div>

                  {/* AUTEUR */}
                  <div className="author">
                    <div className="author__img">
                      <img
                          src={post.user?.avatar || "/assets/images/blog/author-img.jpg"}
                          alt={post.user?.name}
                      />
                    </div>

                    <div className="author__content">
                      <h3 className="author__name">{post.user?.name}</h3>
                      <p className="author__text">
                        {post.user?.bio || "Auteur de contenus chez Creativ Solutions."}
                      </p>

                      <div className="author__social">
                        {post.user?.facebook && (
                            <a href={post.user.facebook} target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                        )}
                        {post.user?.twitter && (
                            <a href={post.user.twitter} target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                        )}
                        {post.user?.instagram && (
                            <a href={post.user.instagram} target="_blank">
                              <i className="fab fa-instagram" />
                            </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* COMMENTAIRES */}
                  <div className="comment-one">
                    <h3 className="comment-one__title">
                      Commentaires ({post.comments?.length || 0})
                    </h3>

                    {post.comments?.map(comment => (
                        <div className="comment-one__single" key={comment.id}>
                          <div className="comment-one__image">
                            <img
                                src="/assets/images/blog/comment-avatar.png"
                                alt={comment.name}
                            />
                          </div>

                          <div className="comment-one__content">
                            <h3>{comment.name}</h3>
                            <p>{comment.message}</p>
                            <span>{comment.created_at}</span>
                          </div>
                        </div>
                    ))}
                  </div>

                  {/* FORMULAIRE */}
                  <div className="comment-form">
                    <CommentForm postId={post.id} />
                  </div>

                </div>
              </div>

              {/* SIDEBAR */}
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">

                  {/* CATÉGORIES */}
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Catégories</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      {categories.map(cat => (
                          <li key={cat.id}>
                            <Link href={`/blog?category=${cat.slug}`}>
                              {cat.name}
                              <span className="icon-right-arrow-1" />
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>

                  {/* ARTICLES RÉCENTS */}
                  <div className="sidebar__single sidebar__post">
                    <h3 className="sidebar__title">Articles récents</h3>
                    <ul className="sidebar__post-list list-unstyled">
                      {latest_posts.map(p => (
                          <li key={p.id}>
                            <div className="sidebar__post-image">
                              <img
                                  src={p.thumb_url || "/assets/images/blog/default.jpg"}
                                  alt={p.title}
                              />
                            </div>
                            <div className="sidebar__post-content">
                              <p>
                                <Link href={`/blog/${p.slug}`}>
                                  {p.title}
                                </Link>
                                <span className="sidebar__post-content-meta">
                          {p.created_at}
                        </span>
                              </p>
                            </div>
                          </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </FutxoLayout>

  );
};



export default BlogDetailPage;
