import { useTranslation } from "react-i18next";

import small from "../../assets/small.png";
import big from "../../assets/big.png";

const ServiceTile = ({ tile }) => {
  const { t } = useTranslation();

  const { id, icon, title, capacity, limit, moreInformation } = tile;

  return (
    <div
      className={`service-tile ${id === "drying" ? "inverted-structure" : ""}`}
    >
      <img src={icon} alt={title} />
      <div className="info">
        <p className="title">{title}</p>
        <div className="description">
          <div>{capacity}: </div>
          <span className="limit">{limit}</span>
        </div>
        <div className="description">
          <div>{t("services.moreInformation")}: </div>
          <a
            className="limit"
            href={moreInformation}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("services.clickHere")}
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const tiles = [
    {
      id: "washing",
      icon: small,
      title: t("services.washer"),
      capacity: t("services.capacity"),
      limit: "10kg, 14kg",
      moreInformation:
        "https://lgprolaundry.com/laundry-products/commercial-washers/lg-giant-c-max/",
    },
    {
      id: "drying",
      icon: big,
      title: t("services.dryer"),
      capacity: t("services.capacity"),
      limit: "10kg, 14kg",
      moreInformation:
        "https://lgprolaundry.com/laundry-products/commercial-dryers/lg-titan-c-light/",
    },
  ];

  return (
    <section id="services-section" className="services">
      <h2>{t("services.title")}</h2>
      <span>{t("services.description1")}</span>
      <span>{t("services.description2")}</span>
      <div className="tiles">
        {tiles.map((tile) => (
          <ServiceTile key={tile.id} tile={tile} />
        ))}
      </div>
    </section>
  );
};

export default Services;
