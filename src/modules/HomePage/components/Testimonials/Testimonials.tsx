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
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const testimonials = [
    {
      text: "Добрий день, я вже можна сказати постійний клієнт у хлопців. Займаємось будівництвом приватних котеджів і таунхаусів. Можу сказати, що з даною компанією ми не мали жодних нюансів по роботі. Навпаки, директор часто виручав нас. Коли терміни були дуже короткі, ми були спокійні бо там завжди увійдуть в положення і підуть  на зустріч. Рекомендую і дякую за ефективну співпрацю!",
      rating: 5,
    },
    {
      text: "Вітаю, замовляв геологію ділянки під будівництво приватної садиби в м. Ужгород. Був здивований адекватністю цін на проведені роботи. За свої гроші ця компанія компанія точно потрапляє в категорію ціна якість",
      author: "Марина Коваленко",
      position: 'Керівник проекту "Нові обрії"',
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      text: "Доброго здоровʼя, товариство. Маю бажання поділитися враженнями від отриманих послуг по геодезичним зніманням, для невеличкого підприємства під Львовом! Шукав спеціалістів, які знають свою роботу, можуть проконсультувати і зробити як треба! З цим все чудово, Повністю заволений і готовий рекомендувати вас всім своїм знайомим! Окремо хочу подякувати геодезистам за пунктуальність. Ніби дрібниця, але така рідкість у наш час.",
      author: "Ігор Шевченко",
      position: "Власник земельної ділянки",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      text: "Доброго дня! Хочу висловити величезну подяку компанії Terra Axis за проведений комплекс геодезичних та геологічних робіт в с. Буштино. Зробили обʼєкт за приємною ціною у обговорений термін.",
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
