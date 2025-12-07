import { Shield, Target, Users, Clock } from 'lucide-react';
import styles from './WhyUs.module.scss';

export function WhyUs() {
  const advantages = [
    { icon: Shield, title: 'Надійність', desc: "Ми завжди на зв'язку та відповідальні за результат" },
    { icon: Target, title: 'Професійність', desc: "Професіоналізм досягається лише досвідом" },
    { icon: Users, title: 'Кваліфіковані фахівці', desc: 'Команда сертифікованих інженерів-геодезистів' },
    { icon: Clock, title: 'Дотримання термінів', desc: 'Виконуємо роботи точно у встановлені строки' },
  ];

  return (
    <section className={styles['why-us']}>
      <div className={styles['why-us__container']}>
        <div className={styles['why-us__title-block']}>
          <span className={styles['why-us__subtitle']}>НАШІ ПЕРЕВАГИ</span>
          <h2 className={styles['why-us__title']}>Чому обирають нас</h2>
          <div className={styles['why-us__underline']}></div>
        </div>

        <div className={styles['why-us__grid']}>
          {advantages.map((adv, i) => (
            <div key={i} className={styles['why-us__card']}>
              <div className={styles['why-us__icon-wrapper']}>
                <adv.icon className={styles['why-us__icon']} />
              </div>

              <h3 className={styles['why-us__card-title']}>{adv.title}</h3>
              <p className={styles['why-us__card-desc']}>{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}