import React from "react";
import NavLinkNavbar from "../components/navLinkNavbar";
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
export default function Navbar() {
  return (
    <div className="nav-bar">
      <TitleNavBar />
      <div className="link__nav">
        <NavLinkNavbar pathLink="/" linkText="Home" icons={home_icons} />
        <NavLinkNavbar pathLink="/" linkText="About" icons={contact_icons} />
        <NavLinkNavbar pathLink="/" linkText="Services" icons={service_icons} />
        <NavLinkNavbar pathLink="/" linkText="Works" icons={work_icons} />
        <NavLinkNavbar pathLink="/" linkText="Blog" icons={blog_icons} />
        <NavLinkNavbar pathLink="/" linkText="Contact" icons={call_icons} />
      </div>
      <BottomSectionNav />
    </div>
  );
}
