import React from "react";
import "../assets/style/components/new.card.scss";
export default function NewsCard(props) {
  return (
    <div className="new__card">
      <div className="new__cover">
        <img src={props.cover} alt="cover new" />
      </div>
      <div className="new__detail">
        <p className="new__date">{props.publication}</p>
        <span className="new__title">{props.title}</span>
      </div>
    </div>
  );
}
