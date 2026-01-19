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

// template styles
import '@css/futxo.css';
import '@css/futxo-responsive.css';
import "./globals.css";
import PreLoader from '@/Layout/PreLoader';

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
      <body>
        <PreLoader />
        {children}
      </body>
    </html>
  );
}
