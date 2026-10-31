import { useTranslation } from "react-i18next";

import base from "../../assets/base.png";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <section className="introduction">
      <div className="content">
        <h2>{t("introduction.welcome")}</h2>
        <p>{t("introduction.description")}</p>
        <h3>{t("aboutUs.membership")}</h3>
        <p>{t("aboutUs.membershipDescription")}</p>
      </div>
      <img src={base} alt="Live picture about laundry" />
    </section>
  );
};

export default Introduction;
