import React from "react";
import "../assets/style/pages/service.page.scss";
import TitleSection from "../components/titleSection";
// import { ButtonIcons } from "../components/button";
// import { ReactComponent as linking_icons } from "../assets/icons/linking.svg";
import ServiceCard from "../components/serviceCard";
import { ReactComponent as app_icons } from "../assets/icons/app.svg";
import { ReactComponent as support_icons } from "../assets/icons/support.svg";
import { ReactComponent as software_icons } from "../assets/icons/software.svg";
import { ReactComponent as test_icons } from "../assets/icons/test.svg";
import { ReactComponent as consultation_icons } from "../assets/icons/consultation.svg";
import { ReactComponent as security_icons } from "../assets/icons/security.svg";

const OveriewService = () => {
  return (
    <section className="service__overview">
      <TitleSection title="Mes Services" />
      {/* <p className="overview__detail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptatibus exercitationem consectetur dolore corrupti nihil explicabo
        optio repellendus adipisci facilis reiciendis cumque dolorem
        perferendis, harum repellat similique numquam. Optio, repellat!
      </p>
      <ButtonIcons
        classColorBtn="btn-clr-black"
        label="More Details "
        icons={linking_icons}
      /> */}
    </section>
  );
};

const ServiceList = () => {
  const listService = [
    {
      icons: app_icons,
      title: "Développement d'applications  web & site web :",
      overview:
        "Conception et développement des application web & site web  personnalisés pour répondre aux besoins des utilisateurs",
    },
    {
      icons: support_icons,
      title: "Entretien et assistance :",
      overview:
        "Mise à jour et maintenance du logiciel pour assurer son fonctionnement optimal et la satisfaction des exigences des clients.",
    },
    {
      icons: software_icons,
      title: "UI/UX Design",
      overview:
        "Création d'interfaces utilisateur attrayantes et intuitives pour une expérience utilisateur optimale.",
    },
    {
      icons: test_icons,
      title: "Évaluation et tests:",
      overview:
        "Tests de logiciels et évaluation de la qualité des services et des produits.",
    },
    {
      icons: consultation_icons,
      title: " Consultation:",
      overview:
        "Assistance et conseils techniques pour le développement et l'utilisation de logiciels.",
    },
    {
      icons: security_icons,
      title: "Sécurité :",
      overview:
        "Mise en place et gestion des mesures de sécurité des systèmes informatiques et de leurs données.",
    },
  ];
  const allService = listService.map((service, index) => (
    <ServiceCard
      key={index}
      icons={service.icons}
      title={service.title}
      overview={service.overview}
    />
  ));
  return <section className="service__content_list">{allService}</section>;
};
export default function ServicePage() {
  return (
    <main className="container__service_page page__setcion">
      <OveriewService />
      <ServiceList />
    </main>
  );
}
