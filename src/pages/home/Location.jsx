import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const opneningHours = days.map((day) => ({
    text: t(`location.days.${day}.text`),
    hours: t(`location.days.${day}.open`),
  }));

  const contactNumber = "+36 20 263 7000";

  return (
    <section id="location-section" className="location">
      <div className="location-info">
        <h2>{t("location.title")}</h2>
        <div className="extra-info">
          <div className="contact">
            <p>{t("location.address")}:</p>
            <span>
              <b>{t("location.description")}</b>
            </span>
          </div>
          <div className="contact">
            <p>{t("location.contact")}:</p>
            <span>
              <b>{contactNumber}</b>
            </span>
          </div>
          <p>{t("location.openingHours")}:</p>
          <div className="opening-hours">
            {opneningHours.map((day) => (
              <div key={day.text} className="day">
                <div className="day-name">
                  <span>
                    <b>{day.text}:</b>
                  </span>
                  <span>{day.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="location-iframe">
        <iframe
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.8302474383745!2d18.219516576855103!3d46.074425871090554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b1000393e3f7%3A0x988f517b878667bc!2sPerla%20Laundry!5e0!3m2!1shu!2shu!4v1746189056403!5m2!1shu!2shu"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Location;
