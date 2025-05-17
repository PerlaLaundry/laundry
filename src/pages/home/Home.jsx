import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Introduction from "./Introduction";
import Services from "./Services";
import HowToUse from "./HowToUse";
import AboutUs from "./AboutUs";
import Location from "./Location";

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
      <div className="intro-video">
        <iframe
          src="https://www.youtube.com/embed/y6120QOlsfU?si=pxHLOdwk2rqUn9oA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <h2>{t("introduction.video")}</h2>
      </div>
      <HowToUse />
      <AboutUs />
      <Location />
    </div>
  );
};

export default Home;
