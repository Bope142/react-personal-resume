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
      <TitleSection title="More about me" />
      <p className="overview__intro_text">
        👋 Hello ! I'm Norbert, a software Engineer based in DRC 🎆. I'm vary
        pasionate about the work❤️ that I do
      </p>
      <p className="overview__full_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        qui harum distinctio earum molestias. Fuga quaerat maxime rem odio.
        Maxime nulla dolorum blanditiis voluptate, consectetur distinctio.
        Doloremque incidunt odit quo.
      </p>
      <ButtonIcons
        classColorBtn="btn-clr-black"
        label="See All Project "
        icons={linking_icons}
      />
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
        dateExperience="NOV 2017 - PRESENT"
        job="Web Developer at XYZ Agency"
        overview=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        quisquam? Dolore dicta nulla, voluptatem hic voluptates magnam distinctio,
        vitae voluptas reiciendis itaque repudiandae fugiat libero modi provident
        quis enim alias!"
      />
      <Experience
        dateExperience="NOV 2017 - PRESENT"
        job="Web Developer at XYZ Agency"
        overview=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        quisquam? Dolore dicta nulla, voluptatem hic voluptates magnam distinctio,
        vitae voluptas reiciendis itaque repudiandae fugiat libero modi provident
        quis enim alias!"
      />
      <Experience
        dateExperience="NOV 2017 - PRESENT"
        job="Web Developer at XYZ Agency"
        overview=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        quisquam? Dolore dicta nulla, voluptatem hic voluptates magnam distinctio,
        vitae voluptas reiciendis itaque repudiandae fugiat libero modi provident
        quis enim alias!"
        isLastcard={true}
      />
    </div>
  );
};
const ExperienceOverview = () => {
  return (
    <div className="experience__overview">
      <TitleSection title="My experience" />
      <p className="texte__overview">
        I've had the pleasure to work with companies 🏢 across a variety of
        industries 🏛️ U'm alaways interested in now ✨ and exciting adventures🤩
      </p>
      <ButtonIcons
        classColorBtn="btn-clr-black"
        label="Download Resume"
        icons={linking_icons}
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
