import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook /* faInstagram */,
} from "@fortawesome/free-brands-svg-icons";

import Brand from "../../assets/brand.svg?react";
import FootNavigation from "../common/FootNavigation/FootNavigation";

const Footer = () => {
  const { t } = useTranslation();

  const supportLinks = [
    {
      id: "faq",
      text: t("footer.faq"),
      path: "./gyakran-ismetelt-kerdesek",
    },
    {
      id: "instructions",
      text: t("footer.instructions"),
      path: "./utmutato",
    },
    {
      id: "rules",
      text: t("footer.terms"),
      path: "./szabalyzat",
    },
  ];

  const contactLink = [
    {
      id: "contact",
      text: "perla.laundry.pecs@gmail.com",
    },
  ];

  // TODO: Add final Instagram page
  return (
    <footer className="footer">
      <div className="container">
        <Brand />
        <div className="social-media">
          <a
            href="https://www.facebook.com/profile.php?id=61571791765706"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          {/* <a href="https://www.instagram.com/perlakilevente">
            <FontAwesomeIcon icon={faInstagram} />
          </a> */}
        </div>
      </div>
      <div className="more-info">
        <FootNavigation title={t("footer.support")} links={supportLinks} />
        <FootNavigation title={t("footer.contact")} links={contactLink} />
      </div>
    </footer>
  );
};

export default Footer;
