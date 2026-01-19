import Link from "next/link";
import BlogItem from "./BlogItem";

const Blog = ({
  blogPosts = [
    {
      image: "blog-1-1.jpg",
      date: { day: 28, month: "Aug" },
      title: "Get Few Solutions To Hire a Best Candidate",
      delay: "100ms",
    },
    {
      image: "blog-1-2.jpg",
      date: { day: 28, month: "Aug" },
      title: "Digital Marketing Agency Pricing Guide",
      delay: "200ms",
    },
    {
      image: "blog-1-3.jpg",
      date: { day: 28, month: "Aug" },
      title: "Explore World's Local & Global Top Agencies",
      delay: "300ms",
    },
  ],
}) => {
  return (
    <section className="blog-one" id="blog">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Blog Posts</span>
          </div>
          <h2 className="section-title__title">
            Latest News From Our
            <br /> Blog Pages
          </h2>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <BlogItem key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

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
              de CreativSolutions
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

export const Blog3 = () => {
  return (
    <section className="blog-three" id="blog">
      <div className="container">
        <div className="blog-three__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                Recent Work Completed
              </span>
            </div>
            <h2 className="section-title__title">
              Latest Blog News &amp; <br />
              Articles
            </h2>
          </div>
          <div className="blog-three__btn-box">
            <Link href="blog-1" className="about-three__btn thm-btn">
              View All News
              <span />
              <span />
              <span />
              <span />
              <span />
            </Link>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="blog-three__left">
              <div className="blog-three__left-content-box">
                <div className="blog-three__left-content-img">
                  <img
                    src="assets/images/blog/blog-three-left-content-img-1.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-three__left-content">
                  <div className="blog-three__user">
                    <img
                      src="assets/images/blog/blog-three-user-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="blog-three__left-content-inner">
                    <div className="blog-three__shape-1">
                      <img
                        src="assets/images/shapes/blog-three-shape-1.png"
                        alt=""
                      />
                    </div>
                    <ul className="list-unstyled blog-three__meta">
                      <li>
                        <Link href="blog-details">
                          <i className="fas fa-user-circle" /> Admin
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-details">
                          <i className="fas fa-comments" /> 2 Comments
                        </Link>
                      </li>
                    </ul>
                    <h3 className="blog-three__title-1">
                      <Link href="blog-details">
                        Top Crypto Exchange Influencers <br /> In China
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="blog-three__right">
              <ul className="list-unstyled blog-three__list">
                <li>
                  <div className="blog-three__single">
                    <div className="blog-three__img">
                      <img src="assets/images/blog/blog-3-1.jpg" alt="" />
                    </div>
                    <div className="blog-three__content">
                      <ul className="list-unstyled blog-three__meta-two">
                        <li>
                          <Link href="blog-details">
                            <i className="fas fa-user-circle" />
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="blog-details">
                            <i className="fas fa-comments" /> 2 Comments
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-three__title-2">
                        <Link href="blog-details">
                          Get Few Solutions To Hire a Best Candidate
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-three__single">
                    <div className="blog-three__img">
                      <img src="assets/images/blog/blog-3-2.jpg" alt="" />
                    </div>
                    <div className="blog-three__content">
                      <ul className="list-unstyled blog-three__meta-two">
                        <li>
                          <Link href="blog-details">
                            <i className="fas fa-user-circle" />
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="blog-details">
                            <i className="fas fa-comments" /> 2 Comments
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-three__title-2">
                        <Link href="blog-details">
                          Business Strategy For Marketing System
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-three__single">
                    <div className="blog-three__img">
                      <img src="assets/images/blog/blog-3-3.jpg" alt="" />
                    </div>
                    <div className="blog-three__content">
                      <ul className="list-unstyled blog-three__meta-two">
                        <li>
                          <Link href="blog-details">
                            <i className="fas fa-user-circle" />
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="blog-details">
                            <i className="fas fa-comments" /> 2 Comments
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-three__title-2">
                        <Link href="blog-details">
                          Necessity May Give Us Best Virtual Court
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
