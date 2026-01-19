const WhyChooseUs = () => {
  return (
    <section className="why-choose-one">
      <div className="why-choose-one__shape-2 float-bob-y" />
      <div className="why-choose-one__shape-3 float-bob-x" />
      <div className="why-choose-one__shape-4 float-bob-x" />
      <div className="why-choose-one__shape-5 float-bob-y" />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="why-choose-one__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Why Choose us</span>
                </div>
                <h2 className="section-title__title">
                  Provide Our Clients
                  <br /> Best It Services
                </h2>
              </div>
              <p className="why-choose-one__text">
                Penatibus pulvinar hac lacinia interdum fermentum tortor leo a
                montes ridlus nisi mauris quis potenti habitant cum consequat
                varius est maecenas pretiun dignissim facilisi top level
                vehicula.
              </p>
              <ul className="why-choose-one__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-solution" />
                  </div>
                  <div className="content">
                    <h3>Creative Solution</h3>
                    <p>
                      Congue lacinia aenean venenatis arcu rutrum vitae sus
                      <br /> pena tibus lectus dapibus integer habitasses
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-mobile-app" />
                  </div>
                  <div className="content">
                    <h3>Customer Support</h3>
                    <p>
                      Congue lacinia aenean venenatis arcu rutrum vitae sus
                      <br /> pena tibus lectus dapibus integer habitasses
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="why-choose-one__right">
              <div className="why-choose-one__img">
                <img
                  src="assets/images/resources/why-choose-one-img-1.jpg"
                  alt=""
                />
                <div className="why-choose-one__curved-circle">
                  <div className="curved-circle">NEW AGENCYDESIG 2023.</div>
                  {/* /.curved-circle */}
                  <div className="why-choose-one__video-link">
                    <a
                      href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                      className="video-popup"
                    >
                      <div className="why-choose-one__video-icon">
                        <span className="fa fa-play" />
                      </div>
                    </a>
                  </div>
                </div>
                {/* /.curved-circle */}
                <div className="why-choose-one__dot-1 float-bob-y">
                  <img
                    src="assets/images/shapes/why-choose-one-dot-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
