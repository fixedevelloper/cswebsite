import Breadcrumb from "@/components/Breadcrumb";
import Process from "@/components/Process";
import { Services2 } from "@/components/Services";
import FutxoLayout from "@/Layout/FutxoLayout";

export const metadata = {
  title: "Nos services",
  description:
      "Création de sites web et e-commerce, développement d’applications web et mobiles, conception graphique, UI/UX design et marketing digital au Cameroun et en Afrique.",
};

const page = () => {
  return (
    <FutxoLayout>
      <Breadcrumb title={"Services"} />
      <Services2 extraClass={"services-four"} />
      <Process extraClass={"process-two"} />
    </FutxoLayout>
  );
};
export default page;
