import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/icons.bulle.scss";

export default function IconsBulleLink(props) {
  return (
    <Link className="icons-round icons-link" to={props.pathLink}>
      <props.icons></props.icons>
    </Link>
  );
}

export const IconsBulle = (props) => {
  return (
    <div className="icons-bulle">
      <props.icons></props.icons>
    </div>
  );
};
