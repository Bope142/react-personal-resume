import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/icons.bulle.scss";

export default function IconsBulleLink(props) {
  return (
    <Link className="icons-round" to={props.pathLink}>
      <props.icons></props.icons>
    </Link>
  );
}
