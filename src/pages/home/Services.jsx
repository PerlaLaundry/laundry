import { useTranslation } from "react-i18next";

import small from "../../assets/small.png";
import big from "../../assets/big.png";

const ServiceTile = ({ tile }) => {
  const { icon, title, machineDescription, limit, price } = tile;

  return (
    <div className="service-tile">
      <img src={icon} alt={title} />
      <div className="info">
        <p className="title">{title}</p>
        <div className="description">
          <span>{machineDescription}: </span>
          <span className="limit">{limit}</span>
        </div>
        <p className="price">{price}</p>
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
      title: t("services.small.title"),
      machineDescription: t("services.machineDescription"),
      limit: t("services.small.limit"),
      price: "2000 Ft",
    },
    {
      id: "drying",
      icon: big,
      title: t("services.big.title"),
      machineDescription: t("services.machineDescription"),
      limit: t("services.big.limit"),
      price: "2300 Ft",
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
