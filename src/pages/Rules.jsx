import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getStepsArray } from "../utils/utils";

const Rules = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const rules = [
    {
      text: "tips",
      children: getStepsArray(7),
    },
    {
      text: "use",
      children: getStepsArray(8),
    },
    {
      text: "notice",
      children: getStepsArray(2),
    },
  ];

  return (
    <section className="terms">
      <div className="content">
        <div className="rules">
          {rules.map((rule) => {
            return (
              <div key={rule.text} className="rule">
                <h2>{t(`terms.rules.${rule.text}.text`)}</h2>
                <ul className="children">
                  {rule.children.map((item) => {
                    return (
                      <li key={item}>
                        <p>{t(`terms.rules.${rule.text}.${item}`)}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rules;
