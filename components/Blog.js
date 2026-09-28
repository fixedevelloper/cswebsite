import Link from "next/link";

export const Blog2 = ({ blogPosts })=>  {
  return (
      <section className="blog-two" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
            <span className="section-title__tagline">
              Directement depuis notre blog
            </span>
            </div>
            <h2 className="section-title__title">
              Dernières actualités et conseils <br />
              de Creativ Solutions
            </h2>
          </div>

          <div className="row">
            {blogPosts.map((post, index) => (
                <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay={`${(index + 1) * 100}ms`}
                    key={post.id}
                >
                  <div className="blog-two__single">
                    <div className="blog-two__img">
                      <img
                          src={post.image_url} // URL complète depuis Laravel Media
                          alt={post.title}
                      />
                    </div>
                    <div className="blog-two__content">
                      <div className="blog-two__date">
                        <p>{new Date(post.created_at).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                        })}</p>
                      </div>
                      <div className="blog-two__comments">
                        <Link href={`/blog/${post.slug}`}>
                          <i className="fas fa-comments" /> {post.comments_count} Commentaire
                        </Link>
                      </div>
                      <h3 className="blog-two__title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="blog-two__text">{post.excerpt}</p>
                      <div className="blog-two__bottom">
                        <Link href={`/blog/${post.slug}`} className="blog-two__read-more">
                          Lire la suite
                        </Link>
                        <Link href={`/blog/${post.slug}`} className="blog-two__arrow">
                          <span className="icon-right-arrow-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
