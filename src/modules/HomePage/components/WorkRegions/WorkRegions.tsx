import { useState } from "react";
import { MapPin, Building2, Calendar, CheckCircle, Mountain } from 'lucide-react';
import styles from "./WorkRegions.module.scss";
import { CalculatorButton } from "../../../../components/CalculatorButton";

export function WorkRegions() {
  const [activeTab, setActiveTab] = useState<"all" | "zakarpattia">("all");

  const regions = [
    {
      name: "Закарпатська область",
      projects: 48,
      since: "2010",
      cities: ["Ужгород", "Мукачево", "Хуст", "Берегово", "Рахів", "Тячів"],
      highlight: true,
    },
    {
      name: "Львівська область",
      projects: 52,
      since: "2011",
      cities: ["Львів", "Дрогобич", "Стрий", "Червоноград", "Самбір"],
      highlight: false,
    },
    {
      name: "Київська область",
      projects: 40,
      since: "2013",
      cities: ["м.Київ", "Біла Цірква", "Яготин"],
      highlight: false,
    },
    {
      name: "Тернопільська область",
      projects: 32,
      since: "2015",
      cities: ["Тернопіль", "Чортків", "Кременець", "Бережани"],
      highlight: false,
    },
  ];

  const zakarpattia = [
    { name: "Ужгород", projects: 15, region: "Закарпатська обл." },
    { name: "Мукачево", projects: 12, region: "Закарпатська обл." },
    { name: "Хуст", projects: 8, region: "Закарпатська обл." },
  ];

  const totalCities = regions.reduce(
    (sum, region) => sum + region.cities.length,
    0
  );
  const zakarpattiaTotal = zakarpattia.reduce(
    (sum, city) => sum + city.projects,
    0
  );

  return (
    <section className={styles["work-regions"]}>
      <div className={styles["work-regions__container"]}>
        <div className={styles["work-regions__title"]}>
          <div className={styles["work-regions__title-row"]}>
            <MapPin className={styles["work-regions__title-icon"]} />
            <h2 className={styles["work-regions__title-text"]}>
              Де ми працюємо
            </h2>
          </div>
          <p className={styles["work-regions__title-subtitle"]}>
            Основні регіони роботи
          </p>
          <div className={styles["work-regions__title-divider"]}></div>
        </div>

        <div className={styles["stats"]}>
          <div className={styles["stats__item"]}>
            <div className={styles["stats__value"]}>{regions.length}+</div>
            <div className={styles["stats__label"]}>Областей</div>
          </div>

          <div className={styles["stats__item"]}>
            <div className={styles["stats__value"]}>{totalCities}+</div>
            <div className={styles["stats__label"]}>Міст</div>
          </div>

          <div className={styles["stats__item"]}>
            <div className={styles["stats__value"]}>300+</div>
            <div className={styles["stats__label"]}>Проектів</div>
          </div>

          <div className={styles["stats__item"]}>
            <div className={styles["stats__value"]}>2020</div>
            <div className={styles["stats__label"]}>Рік заснування</div>
          </div>
        </div>

        <div className={styles["work-regions__tabs"]}>
          <button
            onClick={() => setActiveTab("all")}
            className={`${styles["work-regions__tabs-button"]} ${
              activeTab === "all"
                ? styles["work-regions__tabs-button--active"]
                : ""
            }`}
          >
            ВСІ РЕГІОНИ
          </button>
          <button
            onClick={() => setActiveTab("zakarpattia")}
            className={`${styles["work-regions__tabs-button"]} ${
              activeTab === "zakarpattia"
                ? styles["work-regions__tabs-button--active"]
                : ""
            }`}
          >
            <Mountain className={styles["work-regions__tabs-icon"]} />
            ЗАКАРПАТТЯ
          </button>
        </div>

        {activeTab === "all" && (
          <div className={styles["work-regions__regions-grid"]}>
            {regions.map((region, idx) => (
              <div
                key={idx}
                className={styles["work-regions__regions-grid-item"]}
              >
                <div
                  className={styles["work-regions__regions-grid-item__header"]}
                >
                  <div
                    className={
                      styles["work-regions__regions-grid-item__header-block"]
                    }
                  >
                    <h3
                      className={
                        styles[
                          "work-regions__regions-grid-item__header-block-title"
                        ]
                      }
                    >
                      {region.name}
                    </h3>
                    <div
                      className={
                        styles["work-regions__regions-grid-item__info"]
                      }
                    >
                      <Calendar
                        className={
                          styles["work-regions__regions-grid-item__icon"]
                        }
                      />
                      З {region.since} року
                    </div>
                  </div>
                  <div
                    className={
                      styles["work-regions__regions-grid-item__projects"]
                    }
                  >
                    {region.projects} проектів
                  </div>
                </div>

                <div
                  className={
                    styles["work-regions__regions-grid-item__cities-title"]
                  }
                >
                  Основні міста
                </div>

                <div
                  className={styles["work-regions__regions-grid-item__cities"]}
                >
                  {region.cities.map((city, i) => (
                    <span
                      key={i}
                      className={
                        styles["work-regions__regions-grid-item__city"]
                      }
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <div
                  className={
                    styles["work-regions__regions-grid-item__status-divider"]
                  }
                ></div>

                <div
                  className={styles["work-regions__regions-grid-item__status"]}
                >
                  <CheckCircle
                    className={
                      styles["work-regions__regions-grid-item__status-icon"]
                    }
                  />
                  Активний регіон роботи
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "zakarpattia" && (
          <div>
            <div className={styles["work-regions__zakarpattia-hero"]}>
              <h3 className={styles["work-regions__zakarpattia-hero-title"]}>
                Закарпаття - наш спеціалізований регіон
              </h3>
              <p className={styles["work-regions__zakarpattia-hero-text"]}>
                З 2010 року реалізовано {zakarpattiaTotal}+ проектів
              </p>
            </div>
            <div className={styles["work-regions__zakarpattia-grid"]}>
              {zakarpattia.map((city, idx) => (
                <div
                  key={idx}
                  className={styles["work-regions__zakarpattia-grid-item"]}
                >
                  <h4
                    className={
                      styles["work-regions__zakarpattia-grid-item-title"]
                    }
                  >
                    {city.name}
                  </h4>
                  <div
                    className={
                      styles["work-regions__zakarpattia-grid-item-footer"]
                    }
                  >
                    <span
                      className={
                        styles["work-regions__zakarpattia-grid-item-projects"]
                      }
                    >
                      {city.projects} проектів
                    </span>
                    <span
                      className={
                        styles["work-regions__zakarpattia-grid-item-type"]
                      }
                    >
                      {city.region}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles["cta"]}>
          <div className={styles["cta__content"]}>
            <Building2 className={styles["cta__icon"]} color="#A7A746"/>

            <h3 className={styles["cta__title"]}>
              Потрібні наші послуги?
            </h3>

            <p className={styles["cta__text"]}>
              Ми готові виїхати на об'єкт у будь-який куточок Західної України!
              Наші мобільні бригади забезпечені всім необхідним обладнанням та
              транспортом для виконання робіт.
            </p>

            <CalculatorButton text="ЗВ'ЯЗАТИСЯ З НАМИ" isScroll={true} padding='1rem 2rem' bg={'#a7a746'} />
          </div>
        </div>
      </div>
    </section>
  );
}
