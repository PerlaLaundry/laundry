import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Brand from "../../assets/brand.svg?react";
import FootNavigation from "../common/FootNavigation/FootNavigation";

const Footer = () => {
  const { t } = useTranslation();

  // TODO: Add final Instagram and Facebook page
  return (
    <footer className="footer">
      <div className="container">
        <Brand />
        <div className="social-media">
          <a href="https://www.facebook.com/perlaki.levente">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/perlakilevente">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="more-info">
        <FootNavigation
          title={t("footer.support")}
          links={[
            {
              id: "faq",
              text: t("footer.faq"),
              path: "./gyakran-ismetelt-kerdesek",
            },
            {
              id: "rules",
              text: t("footer.rules"),
              path: "./szabalyzat",
            },
          ]}
        />
        <FootNavigation
          title={t("footer.getInTouch")}
          links={[
            {
              id: "contact",
              text: "perla.laundry.pecs@gmail.com",
            },
          ]}
        />
      </div>
    </footer>
  );
};

export default Footer;
