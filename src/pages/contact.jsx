import React from "react";
import "../assets/style/pages/contact.page.scss";
import TitleSection from "../components/titleSection";
import ContactInfosCard from "../components/contactInfosCard";
import { ReactComponent as map_icons } from "../assets/icons/marker.svg";
import { ReactComponent as phone_icons } from "../assets/icons/call-phone.svg";
import { ReactComponent as mail_icons } from "../assets/icons/mail.svg";
import { InputForm, Memo } from "../components/controllForm";
import { ReactComponent as user_icons } from "../assets/icons/name-r.svg";
import { ReactComponent as sms_icons } from "../assets/icons/envelope-r.svg";
import { ReactComponent as call_icons } from "../assets/icons/phone_case.svg";
import { SimpleButton } from "../components/button";
const ContactSectionTitle = () => {
  return (
    <section className="contact__title_section">
      <TitleSection title="Entrer en contact" />
      <p className="text">
        Si vous avez besoin d'un développeur web et souhaitez en savoir plus sur
        mes services, faites-le n'hésitez pas à me contacter par email ou par
        téléphone.
      </p>
    </section>
  );
};

const InfosContact = () => {
  const listInfos = [
    {
      icons: map_icons,
      infos: "15 livulu,Lemba, Kinshasa DRC",
    },
    {
      icons: phone_icons,
      infos: "+243825687549",
    },
    {
      icons: mail_icons,
      infos: "irnorbertyemuang@gmail.com",
    },
  ];
  const componentsCardContact = listInfos.map((item) => (
    <ContactInfosCard key={item.infos} icons={item.icons} infos={item.infos} />
  ));
  return <div className="content__infos_contact">{componentsCardContact}</div>;
};

const ContactFom = () => {
  const listValueInputComponent = [
    {
      icons: user_icons,
      label: "Votre nom",
      name: "user-name",
      type: "text",
      placeholder: "Votre nom",
    },
    {
      icons: sms_icons,
      label: "Email",
      name: "user-email",
      type: "email",
      placeholder: "Votre Email",
    },
    {
      icons: call_icons,
      label: "Votre Numero de téléphone",
      name: "user-phone",
      type: "phone",
      placeholder: "Votre Numero de téléphone",
    },
  ];
  const componentInput = listValueInputComponent.map((item) => (
    <InputForm
      key={item.name}
      icons={item.icons}
      label={item.label}
      name={item.name}
      type={item.type}
      placeholder={item.placeholder}
    />
  ));
  return (
    <div className="content__form">
      <form action="">
        <div className="box-content">
          <div className="content-left">{componentInput}</div>
          <Memo
            name="message-user"
            placeholder="Votre message"
            label="Message"
          />
        </div>
        <SimpleButton label="Envoyer" classColorBtn="btn-clr-black" x />
      </form>
    </div>
  );
};
const ContactContentInfos = () => {
  return (
    <section className="contact__infos_content">
      <InfosContact />
      <ContactFom />
    </section>
  );
};
export default function ContactPage() {
  return (
    <main className="container__blog page__setcion">
      <ContactSectionTitle />
      <ContactContentInfos />
    </main>
  );
}
