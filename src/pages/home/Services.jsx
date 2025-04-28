import { useTranslation } from "react-i18next";

import washing from "../../assets/washing.png";

const ServiceTile = ({ icon, title, description }) => {
  return (
    <div className="service-tile">
      <img src={icon} alt={title} />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const tiles = [
    {
      id: "washing",
      icon: washing,
      title: t("services.washing.title"),
      description: t("services.washing.description"),
    },
    {
      id: "drying",
      icon: washing,
      title: t("services.drying.title"),
      description: t("services.drying.description"),
    },
  ];

  return (
    <section id="services-section" className="services">
      <h2>{t("services.title")}</h2>
      <p>{t("services.description")}</p>
      <div className="tiles">
        {tiles.map((tile) => (
          <ServiceTile
            key={tile.id}
            icon={tile.icon}
            title={tile.title}
            description={tile.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
