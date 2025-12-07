import { useState, useEffect } from "react";
import styles from "./Hero.module.scss";

const SLIDES = [
  {
    title: "Робимо те, що любимо!",
    text: "Дізнайтесь за 30 хвилин вартість необхідної послуги",
    image:
      "https://images.unsplash.com/photo-1628158088803-4200c2be52f1?w=1600&h=900&fit=crop",
  },
  {
    title: "Сучасні технології",
    text: "GPS та лазерне обладнання для високоточних вимірювань",
    image:
      "https://images.unsplash.com/photo-1721244654392-9c912a6eb236?w=1600&h=900&fit=crop",
  },
  {
    title: "Досвід та надійність",
    text: "Понад 25 років на ринку геодезичних послуг",
    image:
      "https://images.unsplash.com/photo-1660296444887-b61e3882401c?w=1600&h=900&fit=crop",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.hero__slider}>
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`${styles.hero__slide} ${
              current === index ? styles["hero__slide--active"] : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.hero__image}
            />

            <div className={styles.hero__overlay}></div>

            <div className={styles.hero__contentWrapper}>
              <div className={styles.hero__contentInner}>
                <h1 className={styles.hero__title}>{slide.title}</h1>
                <p className={styles.hero__text}>{slide.text}</p>

                <a href="#calculator" className={styles.hero__button}>
                  ДІЗНАТИСЬ ВАРТІСТЬ
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.hero__dots}>
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`${styles.hero__dot} ${
                current === index ? styles["hero__dot--active"] : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
