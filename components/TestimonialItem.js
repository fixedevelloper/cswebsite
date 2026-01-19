"use client";
const TestimonialItem = ({
  item,
  className = "col-xl-4 col-lg-6 col-md-6",
}) => {
  return (
    <div className={className}>
      <div className="testimonial-one__single">
        <div className="testimonial-one__single-top">
          <div className="testimonial-one__single-top-inner">
            <div className="testimonial-one__shape-1">
              <img
                src="assets/images/shapes/testimonial-one-shape-1.png"
                alt=""
              />
            </div>
            <div className="testimonial-one__quote">
              <img src="assets/images/icon/icon-quote.png" alt="" />
            </div>
            <div className="testimonial-one__ratting">
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <p className="testimonial-one__text">{item.text}</p>
          </div>
        </div>
        <div className="testimonial-one__client-info-box">
          <div className="testimonial-one__client-img">
            <img src={item.image} alt="" />
          </div>
          <div className="testimonial-one__client-info">
            <p>Designer</p>
            <h3>{item.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;
