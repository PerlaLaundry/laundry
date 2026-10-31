import { useTranslation } from "react-i18next";

import cardBack from "../../assets/card_back.png";
import cardFront from "../../assets/card_front.png";

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
          <div className="membership-bonuses">
            <h3>{t("aboutUs.membershipBenefits.title")}</h3>
            <p>{t("aboutUs.membershipBenefits.uploadBonuses")}</p>
          </div>
          <ul className="membership-bonus-list">
            <li>
              {t("aboutUs.membershipBenefits.bonuses.20000")}
              <small>{t("aboutUs.membershipBenefits.totals.20000")}</small>
            </li>
            <li>
              {t("aboutUs.membershipBenefits.bonuses.30000")}
              <small>{t("aboutUs.membershipBenefits.totals.30000")}</small>
            </li>
            <li>
              {t("aboutUs.membershipBenefits.bonuses.50000")}
              <small>{t("aboutUs.membershipBenefits.totals.50000")}</small>
            </li>
          </ul>
        </div>
      </div>
      <div className="membership-card" aria-label="Perla NFC card">
        <div className="membership-card-inner">
          <img
            className="membership-card-face membership-card-front"
            src={cardFront}
            alt="Perla NFC card front"
          />
          <img
            className="membership-card-face membership-card-back"
            src={cardBack}
            alt="Perla NFC card back"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
