import { useState } from "react";
import styles from "./FAQ.module.scss";

interface FAQItem {
  question: string;
  answer: string;
}
import svgData from "../../imports/svg-gm0tsg9zx4";

// 2. Вже тут, svgData – це об'єкт { p3808700: "..." }
// Нам не потрібен рядок const svgPaths = svgData.svgPaths, оскільки svgData вже є тим, що треба.

// Якщо ви хочете, щоб змінна називалася svgPaths:
const svgPaths = svgData;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Чи працюємо ми з ПДВ?",
      answer:
        "Так, наша компанія TerraAxis є платником ПДВ. Ми надаємо всі необхідні документи з ПДВ для бухгалтерської звітності наших клієнтів.",
    },
    {
      question: "Чи можлива відстрочка платежу?",
      answer:
        "Це можливо, при укладенні договору. Зазвичай 50% передоплати є мінімальним першим внеском, після завершення робіт та передачі отриманого результату замовнику, можливо розбити платіж на кілька частин.",
    },
    {
      question: "Чи є в наявності необхідне обладнання?",
      answer:
        "Звісно. Ми забезпечені буровими установками на базі Зіл-131 типу УРБ2 А2. Для буріння у важкодоступних місцях і на крутих схилах використовуємо ручні бури геолога із пробовідбірниками типу Едельмана.",
    },
    {
      question: "Чи можливо зменшити суму авансу?",
      answer:
        "Враховуючи всі ризики та попередній досвід співраці, сума авансу незмінна. Це 50% передоплати.",
    },
    {
      question: "Чи можливо виконати роботи раніше названого терміну?",
      answer:
        "Так, це можна обговорити на стадії укладення договору. В розумних межах зробимо все, що від нас залежить, для ефективної та успішної співраці.",
    },
    {
      question: "Чи можливо виконати роботи раніше названого терміну?",
      answer:
        "Так, при наявності вільних ресурсів та бригад ми можемо прискорити виконання робіт. Це обговорюється індивідуально та може вплинути на вартість послуг.",
    },
    {
      question: "Чи можливо виконання комплексу робіт для одного обʼєкту в однаковий термін?",
      answer:
        "Так можливо, зазвичай бригада геологіі та геодезистів працюють в парі, коли це необхідно!",
    },
    {
      question: "Чи є в наявності дозвільна документація?",
      answer:
        "Це першочергово. Ми за офіційну співпрацю. Наші працівники сертифіковані спеціалісти. Лабораторні дослідження відбуваються у атестованих лабораторіях.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Нас часто запитують</h2>
          <p>
            Представляємо Вашій увазі 8 найпопулярніших питань, які нам задають,
            а також відповіді на них.
          </p>
        </div>

        {/* FAQ Items */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className={styles.faqItem}>
                <button
                  onClick={() => toggleFaq(index)}
                  className={styles.questionButton}
                >
                  <span
                    className={`${styles.questionText} ${
                      isOpen ? styles.active : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`${styles.icon} ${isOpen ? styles.open : ""}`}
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d={svgPaths.p3808700}
                      stroke="#A7A746"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33276"
                    />
                  </svg>
                </button>

                <div
                  className={`${styles.answerWrapper} ${
                    isOpen ? styles.open : ""
                  }`}
                >
                  <div className={styles.answerContent}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
