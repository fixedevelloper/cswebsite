import Link from "next/link";
import React from "react";

const SolutionIteam = ({solution= {}, className = "col-xl-4 col-lg-4" }) => {
  return (
    <div
      className={`${className} wow ${solution.animationClass || ""}`}
      data-wow-delay={solution.delay}
    >
      <div className="team-two__single">
        <div className="team-two__img-box">
          <div className="team-two__content-box">
            <div className="team-two__content-box-inner">
              <div className="team-two__shape-1">
                <img src="assets/images/shapes/team-two-shape-1.png" alt="Solutions digitales professionnelles" />
              </div>
              <div className="team-two__title-box">
                <h4 className="team-two__name">
                  <Link href="nos-solutions/">{solution.name}</Link>
                </h4>
                <p className="team-two__sub-title">{solution.title}</p>
              </div>
            </div>
          </div>
          <div className="team-two__img">
            <img
                src={`/assets/images/solutions/${solution.image || "solution.jpg"}`}
                alt={solution.name || "Solution"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SolutionIteam;