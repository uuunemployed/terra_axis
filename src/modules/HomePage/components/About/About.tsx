import styles from "./About.module.scss";

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__grid}>
          
          <div className={styles.about__imageCol}>
            <div className={styles.about__imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="TerraAxis офіс"
                className={styles.about__image}
              />
              <div className={styles.about__imageBorder}></div>
            </div>
          </div>

          <div className={styles.about__contentCol}>
            <h2 className={styles.about__title}>
              TerraAxis — Ваш надійний партнер у геодезії
            </h2>

            <p className={styles.about__text}>
              Компанія TerraAxis спеціалізується на наданні професійних геодезічних
              послуг з 2010 року. За цей час ми успішно реалізували понад 500 проектів.
            </p>

            <p className={styles.about__text}>
              Наша команда складається з висококваліфікованих спеціалістів, які
              володіють сучасним обладнанням та новітніми технологіями.
            </p>

            <div className={styles.about__stats}>
              <div className={styles.about__stat}>
                <div className={styles.about__statNumber}>15+</div>
                <div className={styles.about__statLabel}>Років досвіду</div>
              </div>

              <div className={styles.about__stat}>
                <div className={styles.about__statNumber}>500+</div>
                <div className={styles.about__statLabel}>Проєктів</div>
              </div>

              <div className={styles.about__stat}>
                <div className={styles.about__statNumber}>100%</div>
                <div className={styles.about__statLabel}>Якість робіт</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}