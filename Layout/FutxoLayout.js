"use client";
import EmbedPopup from "@/components/EmbedPopup";
import ImageView from "@/components/ImageView";
import { futxoUtility } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const FutxoLayout = ({ children, header, noHeader, noFooter, singlePage }) => {
  useEffect(() => {
    futxoUtility.scrollAnimation();
    futxoUtility.stickyNav();
    futxoUtility.scrollBtn();
    futxoUtility.circleText();
  }, []);

  return (
    <div className="page-wrapper">
      <EmbedPopup />
      <ImageView />
      {!noHeader && <Header header={header} singlePage={singlePage} />}
      {children}
      {!noFooter && <Footer />}
      <a href="#" className="scroll-to-target scroll-to-top">
        <i className="icon-right-arrow" />
      </a>
    </div>
  );
};
export default FutxoLayout;
