import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Introduction from "./Introduction";
import Services from "./Services";
import HowToUse from "./HowToUse";

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // This is used to scroll to the section when the user clicks on the navigation
  // items in the header
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="homepage">
      <Introduction />
      <Services />
      <HowToUse />
      <div className="pricing">
        <p>{t("loremLong")}</p>
      </div>
      <div className="location">
        <p>{t("loremLong")}</p>
        <p>{t("loremLong")}</p>
      </div>
    </div>
  );
};

export default Home;
