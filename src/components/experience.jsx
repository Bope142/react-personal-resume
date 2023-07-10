import React from "react";
import "../assets/style/components/experience.card.scss";
export default function Experience(props) {
  let classList = "";
  if (props.isLastcard) {
    classList = "experience_card experience_card_last";
  } else {
    classList = "experience_card";
  }
  return (
    <div className={classList}>
      <div className="experience__date">{props.dateExperience}</div>
      <div className="experience__details">
        <span className="experience__job_title">{props.job}</span>
        <p className="experience__overview">{props.overview}</p>
      </div>
    </div>
  );
}
