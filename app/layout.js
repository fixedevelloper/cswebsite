
import React from "react";
import '@vendors/bootstrap/css/bootstrap.min.css';
import '@vendors/animate/animate-used.css';
import '@vendors/animate/custom-animate.css';
import '@vendors/fontawesome/css/all.min.css';
import '@vendors/jarallax/jarallax.css';
import '@vendors/jquery-magnific-popup/jquery.magnific-popup.css';
import '@vendors/futxo-icons/style.css';
import '@vendors/reey-font/stylesheet.css';
import { Manrope, Syne } from "next/font/google";
// template styles
import '@css/futxo.css';
import '@css/futxo-responsive.css';
import "./globals.css";
import PreLoader from '@/Layout/PreLoader';
import AnalyticsTracker from "../Layout/AnalyticsTracker";
import CookieConsent from "@/Layout/CookieConsent";
import { SITE_URL } from "@/utility/site";

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
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  title: {
    template: "%s | Creativ Solutions",
    default: "Création de sites web & applications | Creativ Solutions",
    absolute: "",
  },
  description: "Agence digitale spécialisée en création de sites web, e-commerce et applications mobiles au Cameroun.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${syne.variable}`}>
    <head>
      <meta name="robots" content="index, follow" />
      <link
          rel="preload"
          as="image"
          href="/assets/images/shapes/main-slider-two-shape-1.webp"
          fetchPriority="high"
      />

      {/* Google Analytics */}

    </head>
    <body>
    <CookieConsent />
      <AnalyticsTracker />
        <PreLoader />
        {children}
      </body>
    </html>
  );
}
