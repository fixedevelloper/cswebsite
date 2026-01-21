
import React from "react";
import '@vendors/bootstrap/css/bootstrap.min.css';
import '@vendors/animate/animate.min.css';
import '@vendors/animate/custom-animate.css';
import '@vendors/fontawesome/css/all.min.css';
import '@vendors/jarallax/jarallax.css';
import '@vendors/jquery-magnific-popup/jquery.magnific-popup.css';
import '@vendors/odometer/odometer.min.css';
import '@vendors/swiper/swiper.min.css';
import '@vendors/futxo-icons/style.css';
import '@vendors/owl-carousel/owl.carousel.min.css';
import '@vendors/owl-carousel/owl.theme.default.min.css';
import '@vendors/bootstrap-select/css/bootstrap-select.min.css';
import '@vendors/jquery-ui/jquery-ui.css';
import '@vendors/reey-font/stylesheet.css';
import { Manrope, Syne } from "next/font/google";
// template styles
import '@css/futxo.css';
import '@css/futxo-responsive.css';
import "./globals.css";
import PreLoader from '@/Layout/PreLoader';
import AnalyticsTracker from "../Layout/AnalyticsTracker";


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
  display: "swap",
  variable: "--font-manrope",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  display: "swap",
  variable: "--font-syne",
});
export const metadata = {
  title: {
    template: "%s || Creativ Solutions || Création de sites web & applications",
    default: "Création de sites web & applications | Creativ Solutions",
    absolute: "",
  },
  description: "Agence digitale spécialisée en création de sites web, e-commerce et applications mobiles au Cameroun.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${syne.variable}`}>
      <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
            `,
          }}
      />
      <AnalyticsTracker />
        <PreLoader />
        {children}
      </body>
    </html>
  );
}
