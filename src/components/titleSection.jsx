import React from "react";
import "../assets/style/components/title.section.scss";

export default function TitleSection(props) {
  return <span className="title__section">{props.title}</span>;
}
