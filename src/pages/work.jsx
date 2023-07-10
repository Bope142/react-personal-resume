import React from "react";
import "../assets/style/pages/work.page.scss";
import TitleSection from "../components/titleSection";
import { ButtonIcons } from "../components/button";
import { ReactComponent as linking_icons } from "../assets/icons/linking.svg";
import ProjectCard from "../components/projectCard";
import cover_project_1 from "../assets/images/projects__cover/project1.png";
import cover_project_2 from "../assets/images/projects__cover/project2.png";
import cover_project_3 from "../assets/images/projects__cover/project3.png";
import cover_project_4 from "../assets/images/projects__cover/project4.png";
const SectionTile = () => {
  return (
    <section className="work__title_section">
      <TitleSection title="Check out some;of my latest projects with creative ideas." />
      <ButtonIcons
        classColorBtn="btn-clr-black"
        label="See All Projects "
        icons={linking_icons}
      />
    </section>
  );
};

const ListProject = () => {
  const projects = [
    {
      title: "Snowlake Theme",
      category: "WEB DESIGN",
      overview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rerum pariatur cum animi reiciendis nihil, enim voluptas magnam quidem laboriosam quo fuga nostrum neque hic? Reiciendis dolor corporis at ipsa!",
      cover: cover_project_1,
    },
    {
      title: "Snowlake Theme",
      category: "WEB DESIGN",
      overview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rerum pariatur cum animi reiciendis nihil, enim voluptas magnam quidem laboriosam quo fuga nostrum neque hic? Reiciendis dolor corporis at ipsa!",
      cover: cover_project_2,
    },
    {
      title: "Snowlake Theme",
      category: "WEB DESIGN",
      overview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rerum pariatur cum animi reiciendis nihil, enim voluptas magnam quidem laboriosam quo fuga nostrum neque hic? Reiciendis dolor corporis at ipsa!",
      cover: cover_project_3,
    },
    {
      title: "Snowlake Theme",
      category: "WEB DESIGN",
      overview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rerum pariatur cum animi reiciendis nihil, enim voluptas magnam quidem laboriosam quo fuga nostrum neque hic? Reiciendis dolor corporis at ipsa!",
      cover: cover_project_4,
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
