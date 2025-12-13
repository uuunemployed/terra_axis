import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.scss";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Чи працюємо ми з ПДВ?",
      answer:
        "Так, наша компанія TerraAxis є платником ПДВ. Ми надаємо всі необхідні документи з ПДВ для бухгалтерської звітності наших клієнтів.",
    },
    {
      question: "Чи можлива відстрочка платежу?",
      answer:
        "Так, для наших постійних клієнтів та великих проектів ми можемо розглянути можливість відстрочки платежу. Умови обговорюються індивідуально.",
    },
    {
      question: "Чи є в наявності необхідне обладнання?",
      answer:
        "Так, наша компанія має сучасне геодезичне обладнання: GPS приймачі, електронні тахеометри, нівеліри, лазерні сканери тощо.",
    },
    {
      question: "Чи можливо зменшити суму авансу?",
      answer:
        "Стандартний аванс — 50%. Для постійних клієнтів можливе зменшення до 30%.",
    },
    {
      question: "Чи можна трохи відстрочити остаточний платіж?",
      answer:
        "Так, можлива відстрочка остаточного платежу на узгоджений термін.",
    },
    {
      question: "Чи можливо виконати роботи раніше названого терміну?",
      answer:
        "Так, за наявності вільних ресурсів ми можемо прискорити виконання робіт.",
    },
    {
      question: "Чи виконуємо ми роботи на сході України?",
      answer:
        "Так, ми працюємо по всій території України, включно зі східними регіонами.",
    },
    {
      question: "З яким обладнанням ми працюємо?",
      answer:
        "Ми використовуємо обладнання Leica, Trimble, Topcon, Sokkia з актуальною повіркою.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faq__inner}>
        {/* Title */}
        <div className={styles["faq__title-block"]}>
          <h2 className={styles.faq__title}>Нас часто запитують</h2>
          <p className={styles.faq__subtitle}>
            Представляємо Вашій увазі 8 найпопулярніших питань та відповіді на
            них.
          </p>
        </div>

        {/* FAQ list */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faq__item}>
              <button
                className={styles.faq__button}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.faq__question}>{faq.question}</span>

                <ChevronDown
                  className={`${styles.faq__icon} ${
                    openIndex === index ? styles["faq__icon--open"] : ""
                  }`}
                />
              </button>

              <div
                className={
                  openIndex === index
                    ? styles["faq__answer-wrapper--open"]
                    : styles["faq__answer-wrapper--closed"]
                }
              >
                <p className={styles.faq__answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}