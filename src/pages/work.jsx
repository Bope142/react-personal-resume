import React from "react";
import "../assets/style/pages/work.page.scss";
import TitleSection from "../components/titleSection";
// import { ButtonIcons } from "../components/button";
// import { ReactComponent as linking_icons } from "../assets/icons/linking.svg";
import ProjectCard from "../components/projectCard";
import cover_project_1 from "../assets/images/projects__cover/movie-chill.png";
import cover_project_2 from "../assets/images/projects__cover/project2.png";
import cover_project_3 from "../assets/images/projects__cover/project3.png";
import cover_project_4 from "../assets/images/projects__cover/project4.png";
import cover_project_5 from "../assets/images/projects__cover/project5.png";
import cover_project_6 from "../assets/images/projects__cover/project6.png";
const SectionTile = () => {
  return (
    <section className="work__title_section">
      <TitleSection title="Découvrez certains de mes derniers projets avec des idées créatives." />
      {/* <ButtonIcons
        classColorBtn="btn-clr-black"
        label="See All Projects "
        icons={linking_icons}
      /> */}
    </section>
  );
};

const ListProject = () => {
  const projects = [
    {
      title: "MOVIE APP",
      category: "Développement Web Full Stack",
      overview:
        "Une application que j'ai développée pour les passionnés de cinéma.",
      cover: cover_project_1,
      link: "https://movie-chill-nine.vercel.app/",
    },
    {
      title: "Template Site web restaurant",
      category: "Frontend Web",
      overview:
        "Un modèle de site Web que j'ai créé pour les restaurants, offrant une expérience élégante et conviviale.",
      cover: cover_project_2,
      link: "https://restaurantwebtemplate.netlify.app/",
    },
    {
      title: "Qoute APP",
      category: "Développement React",
      overview:
        "Une application que j'ai développée pour découvrir des citations inspirantes et motivantes.",
      cover: cover_project_3,
      link: "https://awesome-quotes.vercel.app/",
    },
    {
      title: "HerStoryAfrica",
      category: "Développement NextJs",
      overview:
        "HerStoryAfrica est une page web conçue pour offrir aux utilisateurs une collection soigneusement sélectionnée d'histoires inspirantes sur les femmes africaines.",
      cover: cover_project_4,
      link: "https://herstoryafrica.vercel.app/",
    },
    {
      title: "Template Site web immobilier",
      category: "Frontend Web",
      overview:
        "Découvrez ce modèle de site web immobilier élégant et moderne.",
      cover: cover_project_5,
      link: "https://realestateappweb.netlify.app/",
    },
    {
      title: "MOVIE APP",
      category: "Conception UI/UX",
      overview:
        "Explorez ce projet de conception pour une application cinématographique innovante.",
      cover: cover_project_1,
      link: "https://www.behance.net/gallery/195768255/MOVIE-WEBSITE",
    },
    {
      title: "LOGIN FORM",
      category: "Conception UI/UX",
      overview:
        "Explorez ce projet de conception pour une fenetere de connexio,.",
      cover: cover_project_6,
      link: "https://www.behance.net/gallery/189451145/login-form-uiux",
    },
  ];
  const cardProjects = projects.map((project, index) => (
    <ProjectCard
      key={index}
      icons={project.icons}
      title={project.title}
      category={project.category}
      overview={project.overview}
      cover={project.cover}
      rigthPos={index % 2 === 0 ? true : false}
      link={project.link}
    />
  ));
  return <section className="work__content_list">{cardProjects}</section>;
};
export default function WorkPage() {
  return (
    <main className="container__service_work page__setcion">
      <SectionTile />
      <ListProject />
    </main>
  );
}
