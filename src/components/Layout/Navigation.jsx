import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import i18n from "../../utils/i18n";
import Brand from "../../assets/brand.svg?react";
import hun from "../../assets/hun.png";
import eng from "../../assets/eng.png";

const Navigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const languages = [
    { code: "hu", src: hun },
    { code: "en", src: eng },
  ];

  const services = [
    {
      id: "services",
      scrollTo: "services-section",
      text: t("navigation.services"),
    },
    {
      id: "howToUse",
      scrollTo: "howToUse-section",
      text: t("navigation.howToUse"),
    },
    {
      id: "pricing",
      scrollTo: "pricing-section",
      text: t("navigation.pricing"),
    },
    {
      id: "aboutUs",
      scrollTo: "aboutUs-section",
      text: t("navigation.aboutUs"),
    },
    {
      id: "location",
      scrollTo: "location-section",
      text: t("navigation.location"),
    },
  ];

  const handleScrollToSection = (scrollTo) => {
    navigate("/", { state: { scrollTo } });
  };

  return (
    <div className="navigation">
      <div className="container">
        <div onClick={() => navigate("/")}>
          <Brand />
        </div>
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleScrollToSection(service.scrollTo)}
          >
            <p>{service.text}</p>
          </div>
        ))}
      </div>
      <div className="language-switcher">
        {languages.map((lang) => (
          <img
            src={lang.src}
            alt={lang.code}
            onClick={() => {
              i18n.changeLanguage(lang.code);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
