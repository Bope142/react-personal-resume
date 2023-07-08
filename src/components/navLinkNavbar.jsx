import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/link.nave.scss";

export default function NavLinkNavbar(props) {
  return (
    <Link className="link-item-nav" to={props.pathLink}>
      <span className="link__icons">
        <props.icons></props.icons>
      </span>
      <p className="text-link">{props.linkText}</p>
    </Link>
  );
}
