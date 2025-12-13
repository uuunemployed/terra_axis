import { useState } from 'react';
import styles from './FAQ.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}
import svgData from '../../../../../imports/svg-gm0tsg9zx4'; 

// 2. Вже тут, svgData – це об'єкт { p3808700: "..." }
// Нам не потрібен рядок const svgPaths = svgData.svgPaths, оскільки svgData вже є тим, що треба.

// Якщо ви хочете, щоб змінна називалася svgPaths:
const svgPaths = svgData;

export function ResponsiveFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Чи працюємо ми з ПДВ?',
      answer: 'Так, наша компанія TerraAxis є платником ПДВ. Ми надаємо всі необхідні документи з ПДВ для бухгалтерської звітності наших клієнтів.',
    },
    {
      question: 'Чи можлива відстрочка платежу?',
      answer: 'Так, для наших постійних клієнтів та великих проектів ми можемо розглянути можливість відстрочки платежу. Умови обговорюються індивідуально.',
    },
    {
      question: 'Чи є в наявності необхідне обладнання?',
      answer: 'Так, наша компанія має в наявності сучасне геодезичне обладнання: GPS приймачі, електронні тахеометри, нівеліри, лазерні сканери та інше професійне обладнання провідних світових виробників.',
    },
    {
      question: 'Чи можливо зменшити суму авансу?',
      answer: 'Стандартний аванс становить 50% від вартості робіт. Для постійних клієнтів можливе зменшення суми авансу до 30%. Умови обговорюються індивідуально залежно від обсягу та типу робіт.',
    },
    {
      question: 'Чи можна трохи відстрочити остаточний платіж?',
      answer: 'Так, ми розуміємо, що іноді виникають фінансові труднощі. Для наших клієнтів можлива відстрочка остаточного платежу на узгоджений термін.',
    },
    {
      question: 'Чи можливо виконати роботи раніше названого терміну?',
      answer: 'Так, при наявності вільних ресурсів та бригад ми можемо прискорити виконання робіт. Це обговорюється індивідуально та може вплинути на вартість послуг.',
    },
    {
      question: 'Чи виконуємо ми роботи на сході України?',
      answer: 'Так, ми працюємо по всій території України, включаючи східні регіони. Наші бригади готові виїхати на об\'єкт у будь-який регіон країни.',
    },
    {
      question: 'З яким обладнанням ми працюємо?',
      answer: 'Ми використовуємо обладнання провідних світових виробників: Leica, Trimble, Topcon, Sokkia. Все обладнання має актуальну повірку та сертифікати відповідності.',
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
            Представляємо Вашій увазі 8 найпопулярніших питань, які нам задають, а також відповіді на них.
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
                  <span className={`${styles.questionText} ${isOpen ? styles.active : ''}`}>
                    {faq.question}
                  </span>
                  <svg
                    className={`${styles.icon} ${isOpen ? styles.open : ''}`}
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
                
                <div className={`${styles.answerWrapper} ${isOpen ? styles.open : ''}`}>
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