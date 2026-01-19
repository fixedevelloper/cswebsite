import Link from "next/link";

const BlogItem = ({ post, className = "col-xl-4 col-lg-4" }) => {
  return (
    <div className={`wow fadeInUp ${className}`} data-wow-delay={post.delay}>
      <div className="blog-one__single">
        <div className="blog-one__img-box">
          <div className="blog-one__img">
            <img src={`assets/images/blog/${post.image}`} alt="" />
          </div>
          <div className="blog-one__date">
            <p>{new Date(post.created_at).toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "short",
            })}</p>
          </div>
        </div>
        <div className="blog-one__content">
          <div className="blog-one__content-inner">
            <div className="blog-one__shape-1">
              <img src="assets/images/shapes/blog-one-shape-1.png" alt="" />
            </div>
            <ul className="blog-one__meta list-unstyled">
              <li>
                <a href="#">
                  <span className="fas fa-user-circle" />
                  Admin
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fas fa-comments" />2 Comments
                </a>
              </li>
            </ul>
            <h3 className="blog-one__title">
              <Link href="blog-details">{post.title}</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogItem;
