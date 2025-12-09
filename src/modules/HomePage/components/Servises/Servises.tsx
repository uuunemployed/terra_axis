import {
  Map,
  Mountain,
  Building,
  Home,
  Droplet,
  FlaskConical,
  Scan,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Servises.module.scss";


export function Services() {
  const services = [
    {
      slug: "topographic-cadastral",
      icon: Map,
      title: "Топографічні та кадастрові зйомки",
      desc: "Геодезичні вимірювання на місцевості, складання топографічних планів, нанесення червоних ліній",
    },
    {
      slug: "mining-geodesy",
      icon: Mountain,
      title: "Геодезичні роботи в гірничій промисловості",
      desc: "Складання топографічного плану, обрахунок обʼємів котлованів та насипів",
    },
    {
      slug: "engineering-geological-surveys",
      icon: Building,
      title: "Вишукування під реконструкцію та будівництво",
      desc: "Вишукування під реконструкцію цивільних та промислових споруд",
    },
    {
      slug: "construction-geology",
      icon: Home,
      title: "Геологія під будівництво",
      desc: "Геологія під будівництво будинків, котеджів, інженерних споруд",
    },
    {
      slug: "water-analysis",
      icon: FlaskConical,
      title: "Лабораторний аналіз води",
      desc: "Комплексний хімічний та бактеріологічний аналіз води",
    },
    {
      slug: "water-well-drilling",
      icon: Droplet,
      title: "Буріння свердловин на воду",
      desc: "Буріння свердловин різної глибини з облаштуванням",
    },
    {
      slug: "3d-laser-scanning-complex",
      icon: Scan,
      title: "3D лазерне сканування будівель",
      desc: "Сканування складних контурів будівель і споруд",
    },
    {
      slug: "3d-scanning-and-industrial-inventory",
      icon: Camera,
      title: "3D сканування фасаду",
      desc: "Інвентаризація промислових та інженерних комплексів",
    },
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
            <Link
              to={`/service/${service.slug}`}
              key={service.slug}
              className={styles.services__card}
            >   
                <service.icon className={styles.services__icon} />

                <h3 className={styles.services__cardTitle}>{service.title}</h3>

                <p className={styles.services__desc}>{service.desc}</p>
            </Link>
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
