import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getStepsArray } from "../utils/utils";

const FAQ = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const questions = getStepsArray(10).map((item, index) => (
    <div key={`question-${index}`} className="question">
      <h3>{t(`faq.questions.${item}.question`)}</h3>
      <p>{t(`faq.questions.${item}.answer`)}</p>
    </div>
  ));

  return (
    <section className="faq">
      <h2>{t("faq.title")}</h2>
      <div className="content">
        <div className="questions">{questions}</div>
      </div>
    </section>
  );
};

export default FAQ;
