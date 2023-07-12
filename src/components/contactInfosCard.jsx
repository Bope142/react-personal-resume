import React from "react";
import "../assets/style/components/contact.card.infos.scss";
export default function ContactInfosCard(props) {
  return (
    <div className="card__infos_contact">
      <props.icons></props.icons>
      <p className="contact__info_value">{props.infos}</p>
    </div>
  );
}
