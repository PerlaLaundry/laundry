import { useTranslation } from "react-i18next";

import bigBrand from "../../assets/big-brand.png";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="aboutUs-section" className="about-us">
      <img src={bigBrand} alt="Live picture about laundry" />
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
    </section>
  );
};

export default AboutUs;
