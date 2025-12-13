import { useState } from "react";
import {
  Calculator as CalcIcon,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";
import styles from "./Calculator.module.scss";
import classNames from "classnames";

export function Calculator() {
  const [activeTab, setActiveTab] = useState<"consultation" | "calculator">(
    "consultation"
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [calcData, setCalcData] = useState({
    service: "",
    area: "",
    location: "",
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Дякуємо! Наш фахівець зв'яжеться з вами найближчим часом.");
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const basePrice =
      {
        topography: 150,
        cadastral: 200,
        geodetic: 180,
        engineering: 220,
      }[calcData.service] || 0;

    const area = parseFloat(calcData.area) || 0;
    const estimated = basePrice * area;
    setEstimatedPrice(estimated);
  };

  return (
    <section id="calculator" className={styles.calculator}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Прорахунок проєкту чи кошторису за 30 хвилин!
            </h2>

            <p className={styles.subtitle}>
              Опишіть завдання чи надайте технічне завдання нам, і ми зможемо
              вам надати розрахунок із вартістю, обсягами та термінами виконання
              робіт
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>30</div>
                <div className={styles.statLabel}>Хвилин на розрахунок</div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Підтримка</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${
                  activeTab === "consultation" ? styles.tab_active : ""
                }`}
                onClick={() => setActiveTab("consultation")}
              >
                КОНСУЛЬТАЦІЯ ФАХІВЦЯ
              </button>

              <button
                className={`${styles.tab} ${
                  activeTab === "calculator" ? styles.tab_active : ""
                }`}
                onClick={() => setActiveTab("calculator")}
              >
                ОНЛАЙН КАЛЬКУЛЯТОР
              </button>
            </div>

            {activeTab === "consultation" && (
              <form onSubmit={handleConsultationSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label className={styles.label}>Ваше ім'я *</label>
                  <div className={styles.inputWrap}>
                    <User className={styles.icon} />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Введіть ваше ім'я"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Телефон *</label>
                  <div className={styles.inputWrap}>
                    <Phone className={styles.icon} />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+38(0__) __ - __ - __"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <div className={styles.inputWrap}>
                    <Mail className={styles.icon} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  ВІДПРАВИТИ
                </button>
              </form>
            )}

            {activeTab === "calculator" && (
              <form onSubmit={handleCalculate} className={styles.form}>
                <div className={styles.field}>
                  <label className={styles.label}>Тип послуги *</label>
                  <div className={styles.inputWrap}>
                    <CalcIcon className={styles.icon} />
                    <select
                      required
                      value={calcData.service}
                      onChange={(e) =>
                        setCalcData({ ...calcData, service: e.target.value })
                      }
                      className={classNames(
                        styles.select,
                        calcData.service && styles["select--filled"]
                      )}
                    >
                      <option value="">Оберіть послугу</option>
                      <option value="topography">Топографічна зйомка</option>
                      <option value="cadastral">Кадастрові роботи</option>
                      <option value="geodetic">Геодезичний супровід</option>
                      <option value="engineering">
                        Інженерно-геологічні вишукування
                      </option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Площа (га) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={calcData.area}
                    placeholder="Введіть площу в гектарах"
                    onChange={(e) =>
                      setCalcData({ ...calcData, area: e.target.value })
                    }
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Місцезнаходження</label>
                  <div className={styles.inputWrap}>
                    <MapPin className={styles.icon} />
                    <input
                      type="text"
                      placeholder="Місто або регіон"
                      value={calcData.location}
                      onChange={(e) =>
                        setCalcData({ ...calcData, location: e.target.value })
                      }
                      className={styles.input}
                    />
                  </div>
                </div>

                <button type="submit" className={styles.calcBtn}>
                  РОЗРАХУВАТИ ВАРТІСТЬ
                </button>

                {estimatedPrice !== null && (
                  <div className={styles.resultBox}>
                    <div className={styles.resultHeader}>
                      <CheckCircle className={styles.resultIcon} />
                      <span className={styles.resultLabel}>
                        Орієнтовна вартість:
                      </span>
                    </div>

                    <div className={styles.resultValue}>
                      {estimatedPrice.toLocaleString("uk-UA")} грн
                    </div>

                    <p className={styles.resultNote}>
                      * Остаточна вартість визначається після огляду об'єкта
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
