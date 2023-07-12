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
      <TitleSection title="Get in touch" />
      <p className="text">
        If you need a web developer and want to know more about my services, do
        not hesitate to contact me by email or by phone.
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
      label: "Your Name",
      name: "user-name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      icons: sms_icons,
      label: "Mail",
      name: "user-email",
      type: "email",
      placeholder: "Your Email",
    },
    {
      icons: call_icons,
      label: "Your Phone Number",
      name: "user-phone",
      type: "phone",
      placeholder: "Your phone number",
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
            placeholder="Your message"
            label="Message"
          />
        </div>
        <SimpleButton label="Send Message" classColorBtn="btn-clr-black" x />
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
