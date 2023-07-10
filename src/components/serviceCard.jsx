import React from "react";
import "../assets/style/components/service.card.scss";

export default function ServiceCard(props) {
  return (
    <div className="service__card">
      <div className="card__icons">
        <props.icons></props.icons>
      </div>
      <div className="card__overview">
        <span className="title__service">{props.title}</span>
        <p className="service__overview">{props.overview}</p>
      </div>
    </div>
  );
}
