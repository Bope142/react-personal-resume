import React from "react";
import { NavLinkNavbar, selectItemNavBar } from "../components/navLinkNavbar";
import { ReactComponent as home_icons } from "../assets/icons/home.svg";
import { ReactComponent as contact_icons } from "../assets/icons/contact.svg";
import { ReactComponent as service_icons } from "../assets/icons/service.svg";
import { ReactComponent as work_icons } from "../assets/icons/work.svg";
import { ReactComponent as blog_icons } from "../assets/icons/blog.svg";
import { ReactComponent as call_icons } from "../assets/icons/call.svg";
import { ReactComponent as github_icons } from "../assets/icons/github.svg";
import { ReactComponent as facebook_icons } from "../assets/icons/facebook_f.svg";
import { ReactComponent as instagram_icons } from "../assets/icons/instagram.svg";
import "../assets/style/parts.pages/navbar.scss";
import IconsBulleLink from "../components/iconsBulle";

const TitleNavBar = () => {
  return (
    <div className="title__nav__bar">
      <h1>Norbert.Dev</h1>
    </div>
  );
};
const IconsSocialMedia = () => {
  return (
    <div className="social__media_nav">
      <IconsBulleLink pathLink="/" icons={github_icons}></IconsBulleLink>
      <IconsBulleLink pathLink="/" icons={facebook_icons}></IconsBulleLink>
      <IconsBulleLink pathLink="/" icons={instagram_icons}></IconsBulleLink>
    </div>
  );
};
const BottomSectionNav = () => {
  return (
    <div className="section__bottom">
      <IconsSocialMedia></IconsSocialMedia>
      <div className="copy-section-nav">Copyright (c) 2023 Norbert Yemuang</div>
    </div>
  );
};
export default class Navbar extends React.Component {
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
      <div className="nav-bar">
        <TitleNavBar />
        <div className="link__nav">
          <NavLinkNavbar
            index={0}
            pathLink="/"
            linkText="Home"
            icons={home_icons}
          />
          <NavLinkNavbar
            index={1}
            pathLink="/about"
            linkText="About"
            icons={contact_icons}
          />
          <NavLinkNavbar
            index={2}
            pathLink="/service"
            linkText="Services"
            icons={service_icons}
          />
          <NavLinkNavbar
            index={3}
            pathLink="/work"
            linkText="Works"
            icons={work_icons}
          />
          <NavLinkNavbar
            index={4}
            pathLink="/blog"
            linkText="Blog"
            icons={blog_icons}
          />
          <NavLinkNavbar
            index={5}
            pathLink="/contact"
            linkText="Contact"
            icons={call_icons}
          />
        </div>
        <BottomSectionNav />
      </div>
    );
  }
}
