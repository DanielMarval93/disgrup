import React from "react";

const SocialShare = [
  {
    iconName: "socicon-whatsapp",
    link: "https://wa.me/34622063782?text=Hola!%20estaria%20interesado%20en%20un%20proyecto%20con%20ustedes",
    iconClass: "whatsapp",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/icymediagency",
    iconClass: "instagram",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://www.linkedin.com/",
    iconClass: "linkedin",
  },
];
const Social = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {SocialShare.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconName}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
