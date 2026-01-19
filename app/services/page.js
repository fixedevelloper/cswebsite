import Breadcrumb from "@/components/Breadcrumb";
import Process from "@/components/Process";
import { Services2 } from "@/components/Services";
import FutxoLayout from "@/Layout/FutxoLayout";

export const metadata = {
  title: "Services",
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
