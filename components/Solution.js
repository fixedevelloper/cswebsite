import Link from "next/link";
import SolutionIteam from "./SolutionIteam";


export const Solution = ({
  extraClass,
  teamData = [
    {
      name: "Kevin Smith",
      title: "Designer",
      image: "team-2-1.jpg",
      delay: "100ms",
      animationClass: "fadeInLeft",
    },
    {
      name: "Christine Eve",
      title: "Web Developer",
      image: "team-2-2.jpg",
      delay: "200ms",
      animationClass: "fadeInUp",
    },
    {
      name: "Mike Hardson",
      title: "Designer",
      image: "team-2-3.jpg",
      delay: "300ms",
      animationClass: "fadeInRight",
    },
  ],
}) => {
  return (
    <section className={`team-two ${extraClass}`} id="team">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Expert Team</span>
          </div>
          <h2 className="section-title__title">
            Meet The Team Behind <br />
            Our Success
          </h2>
        </div>
        <div className="row">
          {teamData.map((solution, index) => (
            <SolutionIteam key={index} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};
