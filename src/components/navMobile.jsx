import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/nav.mobil.scss";
import { ReactComponent as home_icons } from "../assets/icons/home.svg";
import { ReactComponent as contact_icons } from "../assets/icons/contact.svg";
import { ReactComponent as service_icons } from "../assets/icons/service.svg";
import { ReactComponent as work_icons } from "../assets/icons/work.svg";
import { ReactComponent as blog_icons } from "../assets/icons/blog.svg";
import { ReactComponent as call_icons } from "../assets/icons/call.svg";

export const selectItemNavBar = (index) => {
  document.querySelectorAll(".nav__mobile .nav__item").forEach((item) => {
    item.classList.remove("active-item-mobile");
  });
  document
    .querySelectorAll(".nav__mobile .nav__item")
    [index].classList.add("active-item-mobile");
};

const ItemNav = (props) => {
  return (
    <Link
      onClick={() => {
        selectItemNavBar(props.index);
      }}
      className="nav__item"
      to={props.pathLink}
    >
      <span className="link__icons">
        <props.icons></props.icons>
      </span>
      <p className="text-link">{props.linkText}</p>
    </Link>
  );
};
export default class NavMobile extends React.Component {
  componentDidMount() {
    switch (window.location.pathname) {
      case "/about":
        selectItemNavBar(1);
        break;
      case "/service":
        selectItemNavBar(2);
        break;
      case "/work":
        selectItemNavBar(3);
        break;
      case "/blog":
        selectItemNavBar(4);
        break;
      case "/contact":
        selectItemNavBar(5);
        break;
      default:
        //home page
        selectItemNavBar(0);
        break;
    }
  }
  render() {
    return (
      <div className="nav__mobile">
        <ItemNav index={0} pathLink="/" linkText="Home" icons={home_icons} />
        <ItemNav
          index={1}
          pathLink="/about"
          linkText="About"
          icons={contact_icons}
        />
        <ItemNav
          index={2}
          pathLink="/service"
          linkText="Services"
          icons={service_icons}
        />
        <ItemNav
          index={3}
          pathLink="/work"
          linkText="Works"
          icons={work_icons}
        />
        <ItemNav
          index={4}
          pathLink="/blog"
          linkText="Blog"
          icons={blog_icons}
        />
        <ItemNav
          index={5}
          pathLink="/contact"
          linkText="Contact"
          icons={call_icons}
        />
      </div>
    );
  }
}
