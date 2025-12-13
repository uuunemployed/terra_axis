import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, MapPin, FileText, CheckCircle, Truck } from 'lucide-react';
import styles from './InteractiveProcess.module.scss';

const steps = [
  {
    id: 1,
    icon: Phone,
    title: 'Консультація',
    duration: '15 хв',
    description: 'Проводимо первинну консультацію, обговорюємо завдання, обсяг робіт та вартість.',
    details: ['Обговорення ТЗ', 'Попередній розрахунок', 'Узгодження термінів'],
    stepLabel: 'Крок 1 з 6',
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Планування',
    duration: '1 день',
    description: 'Складаємо детальний план робіт, готуємо та підписуємо договір.',
    details: ['Аналіз ТЗ', 'Підготовка договору', 'Призначення дати'],
    stepLabel: 'Крок 2 з 6',
  },
  {
    id: 3,
    icon: MapPin,
    title: 'Польові роботи',
    duration: '2-5 днів',
    description: 'Виїзд на об\'єкт та виконання геодезичних вимірювань.',
    details: ['Рекогносцирування', 'Вимірювання', 'Фотофіксація'],
    stepLabel: 'Крок 3 з 6',
  },
  {
    id: 4,
    icon: FileText,
    title: 'Камеральна обробка',
    duration: '3-7 днів',
    description: 'Обробка даних та підготовка технічної документації.',
    details: ['Обробка даних', 'Складання планів', 'Підготовка звіту'],
    stepLabel: 'Крок 4 з 6',
  },
  {
    id: 5,
    icon: CheckCircle,
    title: 'Перевірка',
    duration: '1 день',
    description: 'Контроль якості виконаних робіт інженерами.',
    details: ['Технічний контроль', 'Перевірка розрахунків', 'Коригування'],
    stepLabel: 'Крок 5 з 6',
  },
  {
    id: 6,
    icon: Truck,
    title: 'Здача робіт',
    duration: '1 день',
    description: 'Передача готової документації замовнику.',
    details: ['Передача документів', 'Консультації', 'Супровід'],
    stepLabel: 'Крок 6 з 6',
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

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2>Як ми працюємо</h2>
          <p>6 простих кроків від консультації до отримання готової документації</p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className={styles.timelineWrapper}>
          
          {/* Desktop Timeline */}
          <div className={styles.desktopTimeline}>
            <div className={styles.connectionLines}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-[#A7A746]"
              />
            </div>

            <div className={styles.stepsGrid}>
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id <= activeStep;
                const isCurrent = step.id === activeStep;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: step.id * 0.1 }}
                    onClick={() => setActiveStep(step.id)}
                    className={styles.stepItem}
                  >
                    {/* Icon Box */}
                    <motion.div
                      animate={{
                        backgroundColor: isActive ? '#A7A746' : 'rgba(255,255,255,0.1)',
                        borderColor: isActive ? '#A7A746' : 'rgba(255,255,255,0.2)',
                        scale: isCurrent ? 1.05 : 1,
                      }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                      className={styles.iconBox}
                    >
                      <Icon
                        className={`${styles.stepIcon} ${isActive ? styles.iconActive : styles.iconInactive}`}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className={`${styles.stepTitle} ${isCurrent ? styles.titleCurrent : styles.titleDefault}`}>
                      {step.title}
                    </h3>

                    {/* Duration */}
                    <div className={styles.stepDuration}>
                      {step.duration}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className={styles.mobileTimeline}>
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = step.id <= activeStep;
              const isCurrent = step.id === activeStep;

              // Вибираємо правильний клас зі стилів
              const stateClass = isCurrent 
                ? styles.mobileStateCurrent 
                : isActive 
                ? styles.mobileStateActive 
                : styles.mobileStateDefault;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.id * 0.05 }}
                  onClick={() => setActiveStep(step.id)}
                  className={`${styles.mobileStepItem} ${stateClass}`}
                >
                  <div
                    className={styles.mobileIconBox}
                    style={{ backgroundColor: isCurrent ? 'rgba(255,255,255,0.2)' : isActive ? '#A7A746' : 'rgba(255,255,255,0.1)' }}
                  >
                    <Icon className={styles.stepIcon} style={{ color: 'white' }} />
                  </div>
                  <div className={styles.mobileContent}>
                    <h3>{step.title}</h3>
                    <p>{step.duration}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.stepDetailsBox}
        >
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
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={styles.detailItem}
                >
                  <CheckCircle className={styles.checkIcon} />
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={goToPrevious}
              disabled={activeStep === 1}
              className={`${styles.navButton} ${activeStep === 1 ? styles.buttonDisabled : styles.buttonActive}`}
            >
              Попередній крок
            </motion.button>

            <div className={styles.durationLabel}>Тривалість: {currentStep.duration}</div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={goToNext}
              disabled={activeStep === steps.length}
              className={`${styles.navButton} ${activeStep === steps.length ? styles.buttonDisabled : styles.buttonActive}`}
            >
              Наступний крок
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}