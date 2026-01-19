import Link from "next/link";

export const VideoSection2 = () => {
  return (
    <section className="video-two">
      <div
        className="video-two__bg jarallax"
        data-jarallax=""
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(assets/images/backgrounds/video-two-bg.webp)",
        }}
      />
      <div className="video-two__shape-2" />
      <div className="container">
        <div className="video-two__inner">
          <div className="video-two__video-link">
            <div className="video-two__shape-1 float-bob-y">
              <img src="assets/images/shapes/video-two-shape-1.png" alt="" />
            </div>
            <a
              href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
              className="video-popup"
            >
              <div className="video-two__video-icon">
                <span className="fa fa-play" />
                <i className="ripple" />
              </div>
            </a>
          </div>
          <h3 className="video-two__title">
            Design Studio That Gets <br />
            Excited About
          </h3>
        </div>
      </div>
    </section>
  );
};
export const VideoSection3 = () => {
  return (
    <section className="video-three">
      <div
        className="video-three__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/video-three-bg.jpg)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="video-three__left">
              <h3 className="video-three__title">
                Grow With Community &amp;
                <br /> Experience Endless
                <br /> Possibilitics
              </h3>
              <div className="video-three__btn-box">
                <Link href="about" className="video-three__btn thm-btn">
                  Discover More
                  <span />
                  <span /> <span /> <span /> <span />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="video-three__right">
              <div
                className="video-three__img wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <img src="assets/images/resources/video-three-img.jpg" alt="" />
                <div className="video-three__video-link">
                  <a
                    href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                    className="video-popup"
                  >
                    <div className="video-three__video-icon">
                      <span className="fa fa-play" />
                      <i className="ripple" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
