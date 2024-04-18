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
// import { ReactComponent as instagram_icons } from "../assets/icons/instagram.svg";
import { ReactComponent as linkedin_icons } from "../assets/icons/linkedin.svg";
import IconsBulleLink from "../components/iconsBulle";

const TextOverivew = () => {
  return (
    <div className="text__overview">
      <span>JE SUIS</span>
      <span>
        <strong>NORBERT YEMUANG...</strong>
      </span>
    </div>
  );
};
const MyOccupation = () => {
  return (
    <div className="my__occupation">
      <strong>Développeur Web & UI/UX Designer </strong> basé en{" "}
      <strong>RDC</strong>
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
export default function HomePage() {
  return (
    <main className="container__home_page page__setcion">
      <div className="overview__profil">
        <TextOverivew />
        <MyOccupation />
        <ButtonIcons
          classColorBtn="btn-clr-black"
          label="Télécharger mon CV"
          icons={linking_icons}
          link={
            "https://res.cloudinary.com/dxtwgo8aa/image/upload/v1713437960/qgan8xz1r5f11d6eoixo.pdf"
          }
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
