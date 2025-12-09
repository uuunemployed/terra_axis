// import { useState } from "react";
// import styles from "./Testimonials.module.scss";
// import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

// export function Testimonials() {
//   const [current, setCurrent] = useState(0);

//   const testimonials = [
//     {
//       text: "Компанія TerraAxis виконала топографічну зйомку нашої ділянки швидко та якісно. Професійний підхід, сучасне обладнання та чіткі терміни. Рекомендую!",
//       author: "Олександр Петренко",
//       position: 'Директор ТОВ "БудІнвест"',
//       rating: 5,
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
//     },
//     {
//       text: "Замовляли геодезичний супровід будівництва. Фахівці компанії проявили високий рівень компетентності.",
//       author: "Марина Коваленко",
//       position: 'Керівник проекту "Нові обрії"',
//       rating: 5,
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
//     },
//     {
//       text: "Кадастрові роботи виконані на найвищому рівні. Все чітко та зрозуміло.",
//       author: "Ігор Шевченко",
//       position: "Власник земельної ділянки",
//       rating: 5,
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     },
//     {
//       text: "Інженерно-геологічні вишукування виконані максимально точно. Дякуємо!",
//       author: "Тетяна Мельник",
//       position: 'Головний інженер "ЕкоБуд"',
//       rating: 5,
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
//     },
//   ];

//   const prev = () =>
//     setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
//   const next = () =>
//     setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

//   return (
//     <section className={styles.testimonials}>
//       <div className={styles.container}>
//         <div className={styles.testimonials__header}>
//           <span className={styles.testimonials__subtitle}>Відгуки</span>
//           <h2 className={styles.testimonials__title}>Що кажуть наші клієнти</h2>
//           <div className={styles.testimonials__underline}></div>
//         </div>

//         <div className={styles.testimonials__slider}>
//           <button className={styles.testimonials__nav} onClick={prev}>
//             <ChevronLeft />
//           </button>

//           <div className={styles.testimonials__card}>
// <Quote className={styles.testimonials__quote} />

// <div className={styles.testimonials__stars}>
//   {[...Array(testimonials[current].rating)].map((_, i) => (
//     <Star key={i} className={styles.testimonials__star} />
//   ))}
// </div>

// <p className={styles.testimonials__text}>
//   "{testimonials[current].text}"
// </p>

// <div className={styles.testimonials__author}>
//   <img
//     src={testimonials[current].image}
//     alt={testimonials[current].author}
//     className={styles.testimonials__image}
//   />
//   <div>
//     <div className={styles.testimonials__name}>
//       {testimonials[current].author}
//     </div>
//     <div className={styles.testimonials__position}>
//       {testimonials[current].position}
//     </div>
//   </div>
// </div>
//           </div>

//           <button className={styles.testimonials__nav} onClick={next}>
//             <ChevronRight />
//           </button>
//         </div>

//         <div className={styles.testimonials__dots}>
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               className={`${styles.testimonials__dot} ${
//                 current === i ? styles.active : ""
//               }`}
//               onClick={() => setCurrent(i)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useRef } from "react";
import styles from "./Testimonials.module.scss";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const startX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const prev = () =>
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  const next = () =>
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) > 50) {
      // FIX: Use explicit if/else instead of an unassigned ternary expression
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const testimonials = [
    {
      text: "Компанія TerraAxis виконала топографічну зйомку нашої ділянки швидко та якісно. Професійний підхід, сучасне обладнання та чіткі терміни. Рекомендую!",
      author: "Олександр Петренко",
      position: 'Директор ТОВ "БудІнвест"',
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      text: "Замовляли геодезичний супровід будівництва. Фахівці компанії проявили високий рівень компетентності.",
      author: "Марина Коваленко",
      position: 'Керівник проекту "Нові обрії"',
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      text: "Кадастрові роботи виконані на найвищому рівні. Все чітко та зрозуміло.",
      author: "Ігор Шевченко",
      position: "Власник земельної ділянки",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      text: "Інженерно-геологічні вишукування виконані максимально точно. Дякуємо!",
      author: "Тетяна Мельник",
      position: 'Головний інженер "ЕкоБуд"',
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.testimonials__header}>
          <span className={styles.testimonials__subtitle}>Відгуки</span>
          <h2 className={styles.testimonials__title}>Що кажуть наші клієнти</h2>
          <div className={styles.testimonials__underline}></div>
        </div>

        <div
          className={styles.testimonials__slider}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className={styles.testimonials__nav} onClick={prev}>
            <ChevronLeft />
          </button>

          <div className={styles.testimonials__card}>
            <Quote className={styles.testimonials__quote} />
            <div className={styles.testimonials__stars}>
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className={styles.testimonials__star} />
              ))}
            </div>

            <p className={styles.testimonials__text}>
              "{testimonials[current].text}"
            </p>

            <div className={styles.testimonials__author}>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].author}
                className={styles.testimonials__image}
              />
              <div>
                <div className={styles.testimonials__name}>
                  {testimonials[current].author}
                </div>
                <div className={styles.testimonials__position}>
                  {testimonials[current].position}
                </div>
              </div>
            </div>
          </div>

          <button className={styles.testimonials__nav} onClick={next}>
            <ChevronRight />
          </button>
        </div>

        <div className={styles.testimonials__dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.testimonials__dot} ${
                current === i ? styles.active : ""
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
