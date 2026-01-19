"use client";
import { useEffect, useState } from "react";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      className="preloader"
      style={{ display: isLoading ? "block" : "none" }}
    >
      <div className="preloader__image" />
    </div>
  );
};
export default PreLoader;
