import { Map, Mountain, Building, Home, Droplet, FlaskConical, Scan, Camera } from "lucide-react";
import styles from "./Servises.module.scss";

interface ServicesProps {
  onServiceClick?: (serviceId: string) => void;
}

export function Services({ onServiceClick }: ServicesProps) {
  const services = [
    { id: "topographic-cadastral", icon: Map, title: "Топографічні та кадастрові зйомки", desc: "Геодезичні вимірювання на місцевості, складання топографічних планів, нанесення червоних ліній" },
    { id: "mining-geodesy", icon: Mountain, title: "Геодезичні роботи в гірничій промисловості", desc: "Складання топографічного плану, обрахунок обʼємів котлованів та насипів" },
    { id: "construction-survey", icon: Building, title: "Вишукування під реконструкцію та будівництво", desc: "Вишукування під реконструкцію цивільних та промислових споруд" },
    { id: "geology", icon: Home, title: "Геологія під будівництво", desc: "Геологія під будівництво будинків, котеджів, інженерних споруд" },
    { id: "water-analysis", icon: FlaskConical, title: "Лабораторний аналіз води", desc: "Комплексний хімічний та бактеріологічний аналіз води" },
    { id: "water-drilling", icon: Droplet, title: "Буріння свердловин на воду", desc: "Буріння свердловин різної глибини з облаштуванням" },
    { id: "laser-scanning", icon: Scan, title: "3D лазерне сканування будівель", desc: "Сканування складних контурів будівель і споруд" },
    { id: "facade-scanning", icon: Camera, title: "3D сканування фасаду", desc: "Інвентаризація промислових та інженерних комплексів" },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.services__container}>
        {/* Title */}
        <div className={styles.services__header}>
          <span className={styles.services__subtitle}>НАШІ ПОСЛУГИ</span>
          <h2 className={styles.services__title}>Що ми пропонуємо</h2>
          <div className={styles.services__divider}></div>
        </div>

        {/* Grid */}
        <div className={styles.services__grid}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onServiceClick?.(service.id)}
              className={styles.services__card}
            >
              <service.icon className={styles.services__icon} />

              <h3 className={styles.services__cardTitle}>{service.title}</h3>

              <p className={styles.services__desc}>{service.desc}</p>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.services__ctaWrapper}>
          <a href="#calculator" className={styles.services__cta}>
            ЗАМОВИТИ КОНСУЛЬТАЦІЮ
          </a>
        </div>
      </div>
    </section>
  );
}