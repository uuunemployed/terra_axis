import { Link } from "react-router-dom";
import type { Service } from "../../../../../types/service";
import styles from "./ServicesDetailSection.module.scss";
import { ArrowLeft, Check, Mail, Phone } from "lucide-react";

interface Props {
    service: Service | undefined;
}

export const ServicesDetailSection: React.FC<Props> = ({ service }) => {
    
  return (
    !service ? (
        <div>Така послуга відсутня</div>
    ) : (
      <><section className={styles.hero}>
          <div className={styles.imageContainer}>
            {/* Background Image */}
            <img
              src={service.image}
              alt="Геодезичні роботи"
              className={styles.image} />

            {/* Dark Gradient Overlay */}
            <div className={styles.overlay}></div>

            {/* Text Content */}
            <div className={styles.contentWrapper}>
              <div className={styles.container}>
                {/* Back Button */}
                <Link to='/' className={styles.backBtn}>
                  <ArrowLeft className={styles.icon} />
                  <span>Повернутися до послуг</span>
                </Link>

                {/* Main Heading */}
                <h1 className={styles.title}>
                  {service.title}
                </h1>

                {/* Subheading */}
                <p className={styles.subtitle}>
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section><div className={styles.mainContainer}>

            <div className={styles.gridWrapper}>

              {/* Left Column - Main Content */}
              <div className={styles.leftColumn}>

                {/* 1. Definition (Що це таке) */}
                <div>
                  <h2 className={styles.sectionTitle}>
                    Що таке {service.title}?
                  </h2>
                  <p className={styles.textBody}>
                    {service.definition}
                  </p>
                </div>

                {/* 2. Purpose (Для чого потрібно) */}
                {service.purpose && (
                  <div className={styles.purposeBox}>
                    <h3 className={styles.purposeTitle}>
                      {service.purpose.title}
                    </h3>
                    <ul className={styles.purposeList}>
                      {service.purpose.items.map((item, idx) => (
                        <li key={idx} className={styles.purposeItem}>
                          <span className={styles.bullet}>•</span>
                          <span className={styles.textBody}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 3. Types (Види робіт) */}
                {service.types && service.types.length > 0 && (
                  <div>
                    <h3 className={styles.sectionTitle}>
                      Основні види
                    </h3>
                    <div className={styles.typesList}>
                      {service.types.map((type, idx) => (
                        <div key={idx} className={styles.typeItem}>
                          <div className={styles.typeNumber}>
                            {idx + 1}
                          </div>
                          <div className={styles.typeContent}>
                            <h4>{type.title}</h4>
                            <p>{type.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Features (Особливості) */}
                {service.features && (
                  <div>
                    <h3 className={styles.sectionTitle}>
                      Особливості виконання
                    </h3>
                    <p className={styles.textBody}>
                      {service.features}
                    </p>
                  </div>
                )}

                {/* 5. Application Areas (Область застосування) */}
                {service.application_areas && service.application_areas.length > 0 && (
                  <div>
                    <h3 className={styles.sectionTitle}>
                      Область застосування
                    </h3>
                    <ul className={styles.areasGrid}>
                      {service.application_areas.map((area, idx) => (
                        <li key={idx} className={styles.areaItem}>
                          <div className={styles.areaDot}></div>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 6. Includes (Що включає послуга) */}
                {service.includes && service.includes.length > 0 && (
                  <div>
                    <h3 className={styles.sectionTitle}>
                      Що включає послуга
                    </h3>
                    <ul className={styles.includesList}>
                      {service.includes.map((item, index) => (
                        <li key={index} className={styles.includeItem}>
                          <div className={styles.checkIcon}>
                            <Check size={20} strokeWidth={3} />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 7. Process (Процес виконання) */}
                {service.process && service.process.length > 0 && (
                  <div>
                    <h3 className={styles.sectionTitle}>
                      Процес виконання робіт
                    </h3>
                    <div className={styles.processTimeline}>
                      {service.process.map((step) => (
                        <div key={step.step} className={styles.processStep}>
                          {/* Number Bubble */}
                          <div className={styles.stepBubble}>
                            {step.step}
                          </div>

                          {/* Content */}
                          <div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Sticky Sidebar */}
              <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarCard}>
                  <h3>{service.title}</h3>

                  {/* Price */}
                  <div className={styles.priceBlock}>
                    <div className={styles.priceLabel}>Ціна</div>
                    <div className={styles.priceValue}>від 3000 грн</div>
                  </div>

                  {/* Contact Info */}
                  <div className={styles.contactLinks}>
                    <a href="tel:+380123456789" className={styles.contactLink}>
                      <div className={styles.iconWrapper}>
                        <Phone className="w-5 h-5" />
                      </div>
                      <span>+380 12 345 67 89</span>
                    </a>
                    <a href="mailto:info@terraaxis.com" className={styles.contactLink}>
                      <div className={styles.iconWrapper}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <span>info@terraaxis.com</span>
                    </a>
                  </div>

                  {/* CTA Button */}
                  <button className={styles.ctaButton}>
                    Замовити консультацію
                  </button>

                  <p className={styles.disclaimer}>
                    Безкоштовна консультація та розрахунок вартості протягом 15 хвилин
                  </p>
                </div>
              </div>

            </div>
          </div></>
    )
  )
};
