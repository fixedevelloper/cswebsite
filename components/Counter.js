"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end = 100, decimals = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
      <span
          ref={ref}
          className="count"
          data-from="0"
          data-to={end}
      >
      {inView ? (
          <CountUp
              start={0}
              end={end}
              duration={3}
              decimals={decimals}
          />
      ) : (
          "0"
      )}
    </span>
  );
};

export default Counter;
