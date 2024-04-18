import React from "react";
import { NavLinkNavbar, selectItemNavBar } from "../components/navLinkNavbar";
import { ReactComponent as home_icons } from "../assets/icons/home.svg";
import { ReactComponent as contact_icons } from "../assets/icons/contact.svg";
import { ReactComponent as service_icons } from "../assets/icons/service.svg";
import { ReactComponent as work_icons } from "../assets/icons/work.svg";
// import { ReactComponent as blog_icons } from "../assets/icons/blog.svg";
import { ReactComponent as call_icons } from "../assets/icons/call.svg";
import { ReactComponent as github_icons } from "../assets/icons/github.svg";
import { ReactComponent as facebook_icons } from "../assets/icons/facebook_f.svg";
import { ReactComponent as linkedin_icons } from "../assets/icons/linkedin.svg";
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
      <IconsBulleLink
        pathLink="https://github.com/Bope142/"
        icons={github_icons}
      ></IconsBulleLink>
      <IconsBulleLink
        pathLink="https://web.facebook.com/profile.php?id=100063692963866"
        icons={facebook_icons}
      ></IconsBulleLink>
      <IconsBulleLink
        pathLink="https://www.linkedin.com/in/norbert-yemuang-bope-69662318a"
        icons={linkedin_icons}
      ></IconsBulleLink>
    </div>
  );
};
const BottomSectionNav = () => {
  return (
    <div className="section__bottom">
      <IconsSocialMedia></IconsSocialMedia>
      <div className="copy-section-nav">Copyright (c) 2024 Norbert Yemuang</div>
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
      case "/contact":
        selectItemNavBar(4);
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
