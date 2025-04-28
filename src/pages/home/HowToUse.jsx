import { useTranslation } from "react-i18next";

const HowToUse = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: "step1",
      title: t("howToUse.steps.step1.title"),
      description: t("howToUse.steps.step1.description"),
    },
    {
      id: "step2",
      title: t("howToUse.steps.step2.title"),
      description: t("howToUse.steps.step2.description"),
    },
    {
      id: "step3",
      title: t("howToUse.steps.step3.title"),
      description: t("howToUse.steps.step3.description"),
    },
    {
      id: "step4",
      title: t("howToUse.steps.step4.title"),
      description: t("howToUse.steps.step4.description"),
    },
    {
      id: "step5",
      title: t("howToUse.steps.step5.title"),
      description: t("howToUse.steps.step5.description"),
    },
    {
      id: "step6",
      title: t("howToUse.steps.step6.title"),
      description: t("howToUse.steps.step6.description"),
    },
    {
      id: "step7",
      title: t("howToUse.steps.step7.title"),
      description: t("howToUse.steps.step7.description"),
    },
  ];

  return (
    <section id="howToUse-section" className="howToUse">
      <div className="content">
        <div>
          <h2>{t("howToUse.title")}</h2>
          <p>{t("howToUse.description")}</p>
        </div>
        <p>
          <b>{t("howToUse.footnote")}</b>
        </p>
      </div>
      <ul>
        {steps.map((step, index) => (
          <li key={step.id} style={{ "--index": index }}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowToUse;
