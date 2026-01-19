import Breadcrumb from "@/components/Breadcrumb";
import { Portfolio2 } from "@/components/Portfolio";
import FutxoLayout from "@/Layout/FutxoLayout";

export const metadata = {
  title: "Portfolio Details",
};

const page = () => {
  return (
    <FutxoLayout>
      <Breadcrumb title={"Portfolio Details"} />
      <section className="portfolio-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="portfolio-details__left">
                <div className="portfolio-details__content-box-one">
                  <div className="portfolio-details__content-one-img">
                    <img
                      src="assets/images/project/portfolio-details-content-one-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-details__content-one">
                    <h3 className="portfolio-details__content-one-title">
                      Financial{" "}
                    </h3>
                    <p className="portfolio-details__content-one-text-1">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollanim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium, totam rem aperiam
                    </p>
                    <p className="portfolio-details__content-one-text-2">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit
                    </p>
                  </div>
                </div>
                <div className="portfolio-details__planing">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="portfolio-details__planing-left">
                        <div className="portfolio-details__planing-img">
                          <img
                            src="assets/images/project/portfolio-details-planing-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7">
                      <div className="portfolio-details__planing-right">
                        <h3 className="portfolio-details__planing-title">
                          Financial Planning
                        </h3>
                        <p className="portfolio-details__planing-text">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <ul className="list-unstyled portfolio-details__planing-points">
                          <li>
                            <div className="icon">
                              <span className="icon-tick" />
                            </div>
                            <div className="text">
                              <p>
                                Duis aute irure dolor in reprehenderit in vo
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-tick" />
                            </div>
                            <div className="text">
                              <p>
                                {" "}
                                voluptate velit esse cillum dolore eu fugiat
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span className="icon-tick" />
                            </div>
                            <div className="text">
                              <p>
                                Kuis nostr exercitation ullamco laboris conse
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="portfolio-details__text-1">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut consequun magni dolores eos qui ratione
                  volsnesciunt.Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="portfolio-details__sidebar">
                <div className="portfolio-details__info">
                  <h3 className="portfolio-details__info-title">
                    Project Details
                  </h3>
                  <ul className="portfolio-details__info-list list-unstyled">
                    <li>
                      <div className="portfolio-details__info-left">
                        <p>Clients :</p>
                      </div>
                      <div className="portfolio-details__info-right">
                        <span>Jhon Albert</span>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-details__info-left">
                        <p>Project :</p>
                      </div>
                      <div className="portfolio-details__info-right">
                        <span>Financial</span>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-details__info-left">
                        <p>Service :</p>
                      </div>
                      <div className="portfolio-details__info-right">
                        <span>Corporate</span>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-details__info-left">
                        <p>Category :</p>
                      </div>
                      <div className="portfolio-details__info-right">
                        <span>Marketing</span>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-details__info-left">
                        <p>Date :</p>
                      </div>
                      <div className="portfolio-details__info-right">
                        <span>09 Nov 2023</span>
                      </div>
                    </li>
                    <li>
                      <div className="portfolio-details__info-left">
                        <p>Share :</p>
                      </div>
                      <div className="portfolio-details__info-right">
                        <span>Fb Tw In Be</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="portfolio-details__sidebar-img">
                  <img
                    src="assets/images/project/portfolio-details-sidebar-img.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Portfolio2 />
    </FutxoLayout>
  );
};
export default page;
