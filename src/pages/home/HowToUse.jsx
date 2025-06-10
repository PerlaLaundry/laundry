import { useTranslation } from "react-i18next";

import { getStepsArray } from "../../utils/utils";
import videoSrc from "../../assets/videos/tutorial.mp4";

const HowToUse = () => {
  const { t } = useTranslation();

  const steps = getStepsArray(5).map((step, index) => (
    <li key={`how-to-use-${step}`} style={{ "--index": index }}>
      <h3>{t(`howToUse.steps.${step}.title`)}</h3>
      <p>{t(`howToUse.steps.${step}.description`)}</p>
    </li>
  ));

  return (
    <section id="howToUse-section" className="howToUse">
      <video src={videoSrc} controls />
      <div className="content">
        <div>
          <h2>{t("howToUse.title")}</h2>
          <p>{t("howToUse.description")}</p>
        </div>
        <ul>{steps}</ul>
      </div>
    </section>
  );
};

export default HowToUse;
