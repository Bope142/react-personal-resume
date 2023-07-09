import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/nav.mobil.scss";
import { ReactComponent as home_icons } from "../assets/icons/home.svg";
import { ReactComponent as contact_icons } from "../assets/icons/contact.svg";
import { ReactComponent as service_icons } from "../assets/icons/service.svg";
import { ReactComponent as work_icons } from "../assets/icons/work.svg";
import { ReactComponent as blog_icons } from "../assets/icons/blog.svg";
import { ReactComponent as call_icons } from "../assets/icons/call.svg";

const ItemNav = (props) => {
  return (
    <Link className="nav__item" to={props.pathLink}>
      <span className="link__icons">
        <props.icons></props.icons>
      </span>
      <p className="text-link">{props.linkText}</p>
    </Link>
  );
};
export default function NavMobile() {
  return (
    <div className="nav__mobile">
      <ItemNav pathLink="/" linkText="Home" icons={home_icons} />
      <ItemNav pathLink="/about" linkText="About" icons={contact_icons} />
      <ItemNav pathLink="/service" linkText="Services" icons={service_icons} />
      <ItemNav pathLink="/work" linkText="Works" icons={work_icons} />
      <ItemNav pathLink="/blog" linkText="Blog" icons={blog_icons} />
      <ItemNav pathLink="/contact" linkText="Contact" icons={call_icons} />
    </div>
  );
}
