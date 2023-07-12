import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/link.nave.scss";

export const selectItemNavBar = (index) => {
  document.querySelectorAll(".link-item-nav").forEach((item) => {
    item.classList.remove("active-item");
  });
  document
    .querySelectorAll(".link-item-nav")
    [index].classList.add("active-item");
};
export function NavLinkNavbar(props) {
  return (
    <Link
      className="link-item-nav"
      to={props.pathLink}
      onClick={() => {
        selectItemNavBar(props.index);
      }}
    >
      <span className="link__icons">
        <props.icons></props.icons>
      </span>
      <p className="text-link">{props.linkText}</p>
    </Link>
  );
}
