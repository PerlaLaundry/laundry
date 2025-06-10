import { useTranslation } from "react-i18next";

import aboutUs from "../../assets/aboutUs.png";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="aboutUs-section" className="about-us">
      <div className="about-us-info">
        <div>
          <h2>{t("aboutUs.title")}</h2>
          <p>{t("aboutUs.description")}</p>
        </div>
        <div>
          <h3>{t("aboutUs.membership")}</h3>
          <p>{t("aboutUs.membershipDescription")}</p>
        </div>
      </div>
      <img src={aboutUs} alt="Live picture about laundry" />
    </section>
  );
};

export default AboutUs;
