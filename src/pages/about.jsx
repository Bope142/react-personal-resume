import React from "react";
import TitleSection from "../components/titleSection";
import { ButtonIcons } from "../components/button";
import { ReactComponent as linking_icons } from "../assets/icons/linking.svg";
import profilUser from "../assets/images/profil.png";
import "../assets/style/pages/about.page.scss";
import Experience from "../components/experience";
const Overiew = () => {
  return (
    <div className="overview">
      <TitleSection title="Qui suis-je ?" />
      <p className="overview__intro_text">
        Bonjour ! Je suis Norbert, un Développeur Web & UI/UX Designer basé en
        RDC 🎆. Passionné par mon travail ❤️, je crée des solutions innovantes
        pour le Web. Découvrez mon portfolio et explorez mon univers de
        développement.
      </p>
      <p className="overview__full_text">
        💻🚀 Développeur polyvalent et créateur tech, je marie la puissance du
        code à l'esthétique de l'UI/UX pour donner vie à des solutions
        innovantes. Mon bagage académique solide m'a armé d'une compréhension
        approfondie des technologies de l'information, tandis que mon expérience
        pratique m'a permis de perfectionner mes compétences en développement.
      </p>
      {/* <ButtonIcons
        classColorBtn="btn-clr-black"
        label="Voir mes récentes réalisations "
        icons={linking_icons}
      /> */}
    </div>
  );
};

const AboutProfil = () => {
  return (
    <div className="overview__profil">
      <div className="my__profil">
        <img src={profilUser} alt="user profil" />
      </div>
    </div>
  );
};

const AboutOverview = () => {
  return (
    <section className="about__overview">
      <AboutProfil />
      <Overiew />
    </section>
  );
};
const MyExperience = () => {
  return (
    <div className="experience__content">
      <Experience
        dateExperience="NOV 2023 - DEC 2023"
        job="Développeur Backend NodeJs"
        overview="Développement d’une api rest pour la gestion administrative de l’entreprise GARI, et l’alimentations des données à l’application mobile."
      />
      <Experience
        dateExperience="JANV 2023 - FEV 2023"
        job="Développeur Web Frontend"
        overview="conception et réalisation du site vitrine pour le cabinet IA+ Consulting"
      />
      <Experience
        dateExperience="AVRIL 2020 - PRESENT"
        job="Consultant & Développeur Delphi"
        overview=" conception, réalisation et maintenance d’un logiciel de gestion pour l’imprimerie BLESS CENTER PRINT."
        isLastcard={true}
      />
    </div>
  );
};
const ExperienceOverview = () => {
  return (
    <div className="experience__overview">
      <TitleSection title="Mon expérience" />
      <p className="texte__overview">
        J'ai eu le plaisir de travailler avec des 🏢 dans divers secteurs 🏛️ Je
        suis toujours intéressé par les aventures ✨ et passionnantes🤩
      </p>
      <ButtonIcons
        classColorBtn="btn-clr-black"
        label="Télécharger mon CV"
        icons={linking_icons}
        link={
          "https://res.cloudinary.com/dxtwgo8aa/image/upload/v1713437960/qgan8xz1r5f11d6eoixo.pdf"
        }
      />
    </div>
  );
};
const AboutExperience = () => {
  return (
    <section className="about__experience">
      <ExperienceOverview />
      <MyExperience />
    </section>
  );
};
export default function AboutPage() {
  return (
    <main className="container__about_page page__setcion">
      <AboutOverview />
      <AboutExperience />
    </main>
  );
}
