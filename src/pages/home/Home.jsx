import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Introduction from "./Introduction";
import Services from "./Services";
import HowToUse from "./HowToUse";
import AboutUs from "./AboutUs";
import Location from "./Location";

const Home = () => {
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
      <AboutUs />
      <Location />
    </div>
  );
};

export default Home;
