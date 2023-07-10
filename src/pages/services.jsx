import React from "react";
import "../assets/style/pages/service.page.scss";
import TitleSection from "../components/titleSection";
import { ButtonIcons } from "../components/button";
import { ReactComponent as linking_icons } from "../assets/icons/linking.svg";
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
      <TitleSection title="My Services" />
      <p className="overview__detail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptatibus exercitationem consectetur dolore corrupti nihil explicabo
        optio repellendus adipisci facilis reiciendis cumque dolorem
        perferendis, harum repellat similique numquam. Optio, repellat!
      </p>
      <ButtonIcons
        classColorBtn="btn-clr-black"
        label="More Details "
        icons={linking_icons}
      />
    </section>
  );
};

const ServiceList = () => {
  const listService = [
    {
      icons: app_icons,
      title: "Application Development :",
      overview:
        "Design and development of custom software to meet user's needs",
    },
    {
      icons: support_icons,
      title: "Maintenance and support:",
      overview:
        "Update and maintenance of software to ensure its optimal functioning and satisfaction of customer requirements.",
    },
    {
      icons: software_icons,
      title: "software design :",
      overview:
        "Design and development of custom software to meet user's needs",
    },
    {
      icons: test_icons,
      title: "Assessment and testing :",
      overview:
        "Software testing and quality assessment of services and products.",
    },
    {
      icons: consultation_icons,
      title: "Consultation :",
      overview:
        "Technical assistance and advice for the development and use of software.",
    },
    {
      icons: security_icons,
      title: "Security :",
      overview:
        "Implementation and management of security measures for computer systems and their data.",
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
