import React from "react";
import "../assets/style/pages/home.page.scss";
import profilUser from "../assets/images/profil.png";
import { ButtonIcons } from "../components/button";
import { ReactComponent as linking_icons } from "../assets/icons/linking.svg";
import { IconsBulle } from "../components/iconsBulle";
import { ReactComponent as phone_icons } from "../assets/icons/phone.svg";
import { ReactComponent as envelope_icons } from "../assets/icons/envelope.svg";
import { ReactComponent as github_icons } from "../assets/icons/github.svg";
import { ReactComponent as facebook_icons } from "../assets/icons/facebook_f.svg";
import { ReactComponent as instagram_icons } from "../assets/icons/instagram.svg";
import IconsBulleLink from "../components/iconsBulle";

const TextOverivew = () => {
  return (
    <div className="text__overview">
      <span>MY NAME</span>
      <span>
        IS <strong>NORBERT YEMUANG...</strong>
      </span>
    </div>
  );
};
const MyOccupation = () => {
  return (
    <div className="my__occupation">
      <strong>Software Engineer</strong> based in <strong>DRC</strong>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="social__media_contact">
      <div className="infos__social_media">
        <IconsBulle icons={phone_icons} /> <p>+248458895578</p>
      </div>
      <div className="infos__social_media">
        <IconsBulle icons={envelope_icons} /> <p>irnorbertyemuang@gamil.com</p>
      </div>
    </div>
  );
};

const LinkSocialMedia = () => {
  return (
    <div className="links">
      <IconsBulleLink pathLink="/" icons={github_icons}></IconsBulleLink>
      <IconsBulleLink pathLink="/" icons={facebook_icons}></IconsBulleLink>
      <IconsBulleLink pathLink="/" icons={instagram_icons}></IconsBulleLink>
    </div>
  );
};
export default function HomePage() {
  return (
    <main className="container__home_page page__setcion">
      <div className="overview__profil">
        <TextOverivew />
        <MyOccupation />
        <ButtonIcons
          classColorBtn="btn-clr-black"
          label="Let's talk with me "
          icons={linking_icons}
        />
        <Contact />
      </div>
      <div className="cover__profil">
        <img src={profilUser} alt="pic user" />
        <LinkSocialMedia />
      </div>
    </main>
  );
}
