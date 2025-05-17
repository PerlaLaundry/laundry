import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getStepsArray } from "../utils/utils";

const Instructions = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const steps = getStepsArray(6).map((item, index) => (
    <div key={`instructions-${index}`} className="instructions">
      <h4>{`${item}. ${t(`instructions.steps.${item}.text`)}`}</h4>
      {(item === 4 || item === 5) && (
        <ul className="children">
          <li>
            <p>{t(`instructions.steps.${item}.children.1.text`)}</p>
          </li>
          <li>
            <p>{t(`instructions.steps.${item}.children.2.text`)}</p>
          </li>
          <li>
            <p>{t(`instructions.steps.${item}.children.3.text`)}</p>
          </li>
        </ul>
      )}
    </div>
  ));

  return (
    <section className="instructions">
      <div className="content">
        <h2>{t("instructions.description")}</h2>
        <div className="instructions__steps">{steps}</div>
        <h4>{t("instructions.footer")}</h4>
        <h2>{t("instructions.emegency")}</h2>
      </div>
    </section>
  );
};

export default Instructions;
