// import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export function Footer() {
  const services = [
    {
      slug: "topographic-cadastral",
      title: "Топографічні та кадастрові зйомки",
    },
    {
      slug: "mining-geodesy",
      title: "Геодезичні роботи в гірничій промисловості",
    },
    {
      slug: "engineering-geological-surveys",
      title: "Вишукування під реконструкцію та будівництво",
    },
    {
      slug: "construction-geology",
      title: "Геологія під будівництво",
    },
    {
      slug: "water-analysis",
      title: "Лабораторний аналіз води",
    },
    {
      slug: "water-well-drilling",
      title: "Буріння свердловин на воду",
    },
    {
      slug: "3d-laser-scanning-complex",
      title: "3D лазерне сканування будівель",
    },
    {
      slug: "3d-scanning-and-industrial-inventory",
      title: "3D сканування фасаду",
    },
  ];

  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoBlock}>
            <svg
              width="40"
              height="48"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#7F875F" stroke-width="2.5" stroke-linecap="butt">
                <circle cx="50" cy="60" r="35" />

                <line x1="50" y1="15" x2="50" y2="102" />

                <circle cx="50" cy="15" r="3.5" fill="#7F875F" stroke="none" />

                <line x1="15" y1="60" x2="85" y2="60" />

                <line x1="18.4" y1="75" x2="81.6" y2="75" />

                <line x1="25.5" y1="85" x2="74.5" y2="85" />
              </g>
            </svg>
            <p className={styles.description}>
              Професійні геодезичні послуги з 2020 року. Точність у кожній
              координаті.
            </p>
            {/* <div className={styles.social}>
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div> */}
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>НАВІГАЦІЯ</h3>
            <Link to="/" className={styles.link}>
              Головна
            </Link>
            <Link to="/about" className={styles.link}>
              Про нас
            </Link>
            <button
              onClick={scrollToCalculator}
              className={styles.link}
              style={{
                background: 'rgba(255, 255, 255, 0)',
                border: '0',
                textAlign: 'left'
              }}
            >
              Калькулятор
            </button>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>ПОСЛУГИ</h3>
            {services.map((service) => {
              console.log(service);
              return (
                <Link to={`service/${service.slug}`} className={styles.link}>
                  {service.title}
                </Link>
              );
            })}
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>КОНТАКТИ</h3>
            <div className={styles.contact}>
              <div className={styles.info}>
                <a href="tel:+380000000000">+38 (000) 000-00-00</a>
                <a href="mailto:info@terraaxis.com">info@terraaxis.com</a>
              </div>
              <div className={styles.address}>м. Ужгород</div>
              <div className={styles.hours}>ПН-ПТ: 9:00-18:00</div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>© 2025 uuu. Всі права захищено.</div>
          <div className={styles.bottomLinks}>
            <a href="#">Політика конфіденційності</a>
            <a href="#">Умови використання</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
