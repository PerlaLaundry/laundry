import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import machine from "./assets/machine.png";
import brand from "./assets/brand.svg";
import favico from "../favico.png";
import i18n from "./utils/i18n";

const App = () => {
  const { t } = useTranslation();

  // Dev code to test the language switcher extention
  useEffect(() => {
    if (import.meta.env.VITE_API_ENV === "development") {
      const lang = localStorage.getItem("LOCALE_SWITCHER_LANGUAGE");

      i18n.changeLanguage(lang);
    }
    // eslint-disable-next-line
  }, [localStorage]);

  return (
    <div className="homepage">
      <div className="brand">
        <img src={brand} />
      </div>
      <div className="logo">
        <img className="machine" src={machine} alt="Machine" />
        <img className="favico rotating" src={favico} alt="Machine" />
      </div>
      <h1>{t("openingSoon")}</h1>
    </div>
  );
};

export default App;
