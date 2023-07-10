import React from "react";
import "../assets/style/components/project.card.scss";
import { ButtonIcons } from "./button";
import { ReactComponent as linking_icons } from "../assets/icons/linking.svg";
export default function ProjectCard(props) {
  console.log(props.rigthPos);
  let classList = "";
  if (props.rigthPos) {
    classList = "project__card";
  } else {
    classList = "project__card card_left_cover";
  }
  return (
    <div className={classList}>
      <div className="project__overview">
        <span className="project__category">{props.category}</span>
        <span className="project__title">{props.title}</span>
        <p className="project__text_overview">{props.overview}</p>
        <ButtonIcons
          classColorBtn="btn-clr-white"
          label="See  Projects "
          icons={linking_icons}
        />
      </div>
      <div className="project__cover">
        <img src={props.cover} alt="cover project" />
      </div>
    </div>
  );
}
