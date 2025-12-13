import { useState } from "react";
import {
  Phone,
  Calendar,
  MapPin,
  FileText,
  CheckCircle,
  Truck,
} from "lucide-react";
import styles from "./InteractiveProcess.module.scss"; 

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "Консультація",
    duration: "15 хв",
    description:
      "Проводимо первинну консультацію, обговорюємо завдання, обсяг робіт та вартість.",
    details: ["Обговорення ТЗ", "Попередній розрахунок", "Узгодження термінів"],
    stepLabel: "Крок 1 з 6",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Планування",
    duration: "1 день",
    description:
      "Складаємо детальний план робіт, готуємо та підписуємо договір.",
    details: ["Аналіз ТЗ", "Підготовка договору", "Призначення дати"],
    stepLabel: "Крок 2 з 6",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Польові роботи",
    duration: "2-5 днів",
    description: "Виїзд на об'єкт та виконання геодезичних вимірювань.",
    details: ["Рекогносцирування", "Вимірювання", "Фотофіксація"],
    stepLabel: "Крок 3 з 6",
  },
  {
    id: 4,
    icon: FileText,
    title: "Камеральна обробка",
    duration: "3-7 днів",
    description: "Обробка даних та підготовка технічної документації.",
    details: ["Обробка даних", "Складання планів", "Підготовка звіту"],
    stepLabel: "Крок 4 з 6",
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Перевірка",
    duration: "1 день",
    description: "Контроль якості виконаних робіт інженерами.",
    details: ["Технічний контроль", "Перевірка розрахунків", "Коригування"],
    stepLabel: "Крок 5 з 6",
  },
  {
    id: 6,
    icon: Truck,
    title: "Здача робіт",
    duration: "1 день",
    description: "Передача готової документації замовнику.",
    details: ["Передача документів", "Консультації", "Супровід"],
    stepLabel: "Крок 6 з 6",
  },
];

export function InteractiveProcess() {
  const [activeStep, setActiveStep] = useState(3);

  const goToPrevious = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const goToNext = () => {
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  };

  const currentStep = steps[activeStep - 1];
  const StepIcon = currentStep.icon;

  const progressPercentage = ((activeStep - 1) / (steps.length - 1)) * 100;

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Як ми працюємо</h2>
          <p>
            6 простих кроків від консультації до отримання готової документації
          </p>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.desktopTimeline}>
            <div className={styles.connectionLines}>
              <div
                className={styles.progressBar}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className={styles.stepsGrid}>
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id <= activeStep;
                const isCurrent = step.id === activeStep;
                const iconBoxClass = `${styles.iconBox} ${
                  isActive ? styles.iconBoxActive : styles.iconBoxDefault
                } ${isCurrent ? styles.iconBoxCurrent : ""}`;
                const iconClass = `${styles.stepIcon} ${
                  isActive ? styles.iconActive : styles.iconInactive
                }`;
                const titleClass = `${styles.stepTitle} ${
                  isCurrent ? styles.titleCurrent : styles.titleDefault
                }`;

                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={styles.stepItem}
                  >
                    <div className={iconBoxClass}>
                      <Icon className={iconClass} />
                    </div>

                    <h3 className={titleClass}>{step.title}</h3>

                    <div className={styles.stepDuration}>{step.duration}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.mobileTimeline}>
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = step.id <= activeStep;
              const isCurrent = step.id === activeStep;
              const stateClass = isCurrent
                ? styles.mobileStateCurrent
                : isActive
                ? styles.mobileStateActive
                : styles.mobileStateDefault;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`${styles.mobileStepItem} ${stateClass}`}
                >
                  <div
                    className={styles.mobileIconBox}
                    style={{
                      backgroundColor: isCurrent
                        ? "rgba(255,255,255,0.2)"
                        : isActive
                        ? "#A7A746"
                        : "rgba(255,255,255,0.1)",
                    }}
                  >
                    <Icon
                      className={styles.stepIcon}
                      style={{ color: "white" }}
                    />
                  </div>
                  <div className={styles.mobileContent}>
                    <h3>{step.title}</h3>
                    <p>{step.duration}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div key={activeStep} className={styles.stepDetailsBox}>
          <div className={styles.detailsHeader}>
            <div className={styles.detailsIconBox}>
              <StepIcon className={styles.bigIcon} />
            </div>
            <div className={styles.detailsText}>
              <h3>{currentStep.title}</h3>
              <p>{currentStep.stepLabel}</p>
            </div>
          </div>

          <p className={styles.detailsDescription}>{currentStep.description}</p>

          <div className="mb-6">
            <h4 className={styles.detailsListTitle}>Що включає цей етап:</h4>
            <ul className={styles.detailsList}>
              {currentStep.details.map((detail, idx) => (
                <li key={idx} className={styles.detailItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.navigation}>
            <button
              onClick={goToPrevious}
              disabled={activeStep === 1}
              className={`${styles.navButton} ${
                activeStep === 1 ? styles.buttonDisabled : styles.buttonActive
              }`}
            >
              Попередній крок
            </button>

            <div className={styles.durationLabel}>
              Тривалість: {currentStep.duration}
            </div>

            <button
              onClick={goToNext}
              disabled={activeStep === steps.length}
              className={`${styles.navButton} ${
                activeStep === steps.length
                  ? styles.buttonDisabled
                  : styles.buttonActive
              }`}
            >
              Наступний крок
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
