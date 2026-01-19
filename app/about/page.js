import { AboutUS2 } from "@/components/AboutUs";
import Breadcrumb from "@/components/Breadcrumb";
import { Portfolio2 } from "@/components/Portfolio";
import Process from "@/components/Process";
import { VideoSection2 } from "@/components/VideoSection";
import FutxoLayout from "@/Layout/FutxoLayout";
export const metadata = {
    title: "À propos de CreativSolutions - Agence Web au Cameroun",
    description:
        "Découvrez CreativSolutions, agence spécialisée en création de sites web, applications et marketing digital au Cameroun et en Afrique.",
    keywords:
        "CreativSolutions, agence web Cameroun, création site web, application mobile, marketing digital Afrique",
};

const AboutPage = () => {
    return (
        <FutxoLayout>
            {/* Fil d'Ariane */}
            <Breadcrumb title="À propos de nous" />

            {/* Section About */}
            <AboutUS2
                title="Découvrez l'univers de CreativSolutions"
                text1="CreativSolutions est votre partenaire pour des solutions digitales professionnelles adaptées aux entreprises au Cameroun et en Afrique."
                text2="Nous combinons expertise, créativité et innovation pour transformer vos idées en projets concrets."
                points={[
                    { title: "Consultation gratuite", description: "Obtenez un premier diagnostic gratuit pour votre projet." },
                    { title: "Équipe experte", description: "Notre équipe maîtrise le développement web, mobile et le marketing digital." }
                ]}
            />

            {/* Section Portfolio */}
            <Portfolio2 extraClass="about-page-portfolio" />

            {/* Processus de travail */}
            <Process extraClass="about-page-process" steps={[
                { title: "Concept", text: "Définition précise de vos besoins et objectifs." },
                { title: "Design", text: "Création de maquettes et prototypes pour visualiser votre projet." },
                { title: "Développement", text: "Construction technique du site web ou application mobile." },
                { title: "Test", text: "Vérification de la qualité et compatibilité multi-supports." },
                { title: "Déploiement", text: "Mise en ligne et configuration optimale." },
                { title: "Support", text: "Maintenance et accompagnement pour la réussite de votre projet." }
            ]} />

            {/* Section vidéo / promotion */}
            <VideoSection2 />

            {/* Section équipe */}
        </FutxoLayout>
    );
};

export default AboutPage;
