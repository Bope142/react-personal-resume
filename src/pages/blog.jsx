import React from "react";
import TitleSection from "../components/titleSection";
import "../assets/style/pages/blog.page.scss";
import { ButtonIcons } from "../components/button";
import { ReactComponent as linking_icons } from "../assets/icons/linking.svg";
import NewsCard from "../components/newsCard";
import cover_project_1 from "../assets/images/projects__cover/project1.png";
const TileContent = () => {
  return (
    <div className="blog__title_section">
      <TitleSection title="READ MY BLOG" />
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        aspernatur qui quis minima quam molestias dolore? Doloremque cum dolorem
        neque, esse labore debitis ab, eos, est quidem reiciendis nam
        recusandae!
      </p>
    </div>
  );
};

const NewsContainer = () => {
  return (
    <div className="blog__content_list">
      <div className="list__news">
        <NewsCard
          cover={cover_project_1}
          title="12 Unique example of portfolio websites"
          publication="10 July,2023"
        />
        <NewsCard
          cover={cover_project_1}
          title="12 Unique example of portfolio websites"
          publication="10 July,2023"
        />
        <NewsCard
          cover={cover_project_1}
          title="12 Unique example of portfolio websites"
          publication="10 July,2023"
        />
      </div>
      <ButtonIcons
        classColorBtn="btn-clr-black"
        label="See All News "
        icons={linking_icons}
      />
    </div>
  );
};
export default function BlogPage() {
  return (
    <main className="container__blog page__setcion">
      <TileContent />
      <NewsContainer />
    </main>
  );
}
