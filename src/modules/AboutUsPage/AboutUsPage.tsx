import { Target, Users, FileCheck, Award, TrendingUp, Shield } from 'lucide-react';


// Імпортуємо SCSS-модуль
import styles from './AboutUs.module.scss';


export function AboutUsPage() {
  const stats = [
    { number: '200+', label: 'Виконаних проєктів' },
    { number: '4+', label: 'Роки досвіду' },
    { number: '100%', label: 'Задоволених клієнтів' },
    { number: '24/7', label: 'Підтримка' }
  ];

  const principles = [
    {
      icon: Target,
      title: 'Точність',
      description: 'Використовуємо сучасне обладнання та перевірені методики для отримання найточніших даних'
    },
    {
      icon: Award,
      title: 'Якість',
      description: 'Працюємо відповідно до ДБН та ДСТУ стандартів, забезпечуючи найвищу якість послуг'
    },
    {
      icon: TrendingUp,
      title: 'Швидкість',
      description: 'Ефективна організація польових та камеральних робіт для дотримання термінів'
    },
    {
      icon: Shield,
      title: 'Чесність',
      description: 'Прозоре ціноутворення, реалістичні терміни та відкрита комунікація з клієнтами'
    }
  ];

  const benefits = [
    {
      icon: FileCheck,
      title: 'Повний цикл інженерних вишукувань',
      description: 'Від польових робіт до готової дозвільної документації'
    },
    {
      icon: Target,
      title: 'Достовірні геологічні розрізи',
      description: 'Детальне дослідження ґрунтів та геологічних умов ділянки'
    },
    {
      icon: Shield,
      title: 'Проби ґрунтів і води',
      description: 'З повним документальним супроводом та лабораторними дослідженнями'
    },
    {
      icon: Users,
      title: 'Геодезичні роботи',
      description: 'Під різні масштаби проєктування та будь-які види будівництва'
    }
  ];

  // Функціонал, який раніше був у whileHover/initial/animate, тепер забезпечується CSS-класами та переходами.

  return (
    <div className={styles.aboutUs}>

      
      {/* Hero Section */}
      <section className={styles.aboutUs__hero}>
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__header}>
            <h1 className={styles.aboutUs__title}>
              ПРО <span className={styles.aboutUs__titleAccent}>TERRA AXIS</span>
            </h1>
            <p className={styles.aboutUs__subtitle}>
              Команда інженерів-практиків, що виконує інженерно-геологічні та інженерно-геодезичні 
              вишукування без посередників
            </p>
          </div>

          {/* Stats */}
          <div className={styles.aboutUs__stats}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={styles.aboutUs__statItem}
              >
                <div className={styles.aboutUs__statNumber}>
                  {stat.number}
                </div>
                <div className={styles.aboutUs__statLabel}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.aboutUs__content}>
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__grid}>
            {/* Left: Text Content */}
            <div className={styles.aboutUs__textContent}>
              <h2 className={styles.aboutUs__heading}>
                Хто ми такі?
              </h2>
              <div className={styles.aboutUs__textBlock}>
                <p>
                  Ми об'єднали фахівців з різних регіонів України, щоб клієнт отримував результат 
                  швидко, чітко та без зайвих посередників.
                </p>
                <p>
                  Маємо багаторічний досвід роботи у Західній та Центральній Україні. Реально знаємо 
                  специфіку регіональних умов: Карпати та передгір'я, Київщина та Полісся, 
                  водонасичені території, просадні та органогенні ґрунти, схили зі зсувними процесами.
                </p>
                <p>
                  Глибоке розуміння місцевої геології дозволяє нам ефективно вирішувати задачі 
                  будь-якої складності.
                </p>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className={styles.aboutUs__imagePlaceholder}>
              <div className={styles.aboutUs__imageOverlay} />
              <div className={styles.aboutUs__imageContent}>
                <Target className={styles.aboutUs__imageIcon} />
                <p className={styles.aboutUs__imageText}>
                  Професіоналізм у кожному проєкті
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Client Gets */}
      <section className={styles.aboutUs__benefits}>
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__sectionHeader}>
            <h2 className={styles.aboutUs__heading}>
              Що отримує <span className={styles.aboutUs__titleAccent}>клієнт?</span>
            </h2>
            <p className={styles.aboutUs__sectionSubtitle}>
              Ми забезпечуємо повний супровід: від польових робіт до формування технічних висновків, 
              звітів та дозвільної документації
            </p>
          </div>

          <div className={styles.aboutUs__benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={styles.aboutUs__benefitItem}
              >
                <div className={styles.aboutUs__benefitIconWrapper}>
                  <benefit.icon className={styles.aboutUs__benefitIcon} />
                </div>
                <h3 className={styles.aboutUs__benefitTitle}>
                  {benefit.title}
                </h3>
                <p className={styles.aboutUs__benefitDescription}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className={styles.aboutUs__principles}>
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__sectionHeader}>
            <h2 className={styles.aboutUs__heading}>
              Наші <span className={styles.aboutUs__titleAccent}>принципи</span>
            </h2>
          </div>

          <div className={styles.aboutUs__principlesGrid}>
            {principles.map((principle, index) => (
              <div
                key={index}
                className={styles.aboutUs__principleItem}
              >
                {/* Accent bar */}
                <div className={styles.aboutUs__principleAccentBar} />
                
                <principle.icon className={styles.aboutUs__principleIcon} />
                <h3 className={styles.aboutUs__principleTitle}>
                  {principle.title}
                </h3>
                <p className={styles.aboutUs__principleDescription}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.aboutUs__quote}>
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__quoteContent}>
            <div className={styles.aboutUs__quoteIcon}>"</div>
            <p className={styles.aboutUs__quoteText}>
              За останні 4 роки ми виконали понад 200 інженерних вишукувань різних типів складності
            </p>
            <p className={styles.aboutUs__quoteDetails}>
              Приватні будинки, торгові комплекси, виробничі будівлі, інфраструктура, ЛЕП, вежі засобів зв'язку
            </p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className={styles.aboutUs__final}>
        <div className={styles.aboutUs__container}>
          <div className={styles.aboutUs__finalContent}>
            <h2 className={styles.aboutUs__heading}>
              Terra Axis — це не разова послуга
            </h2>
            <p className={styles.aboutUs__finalText}>
              Це партнерство, яке допомагає впевнено рухатись від ідеї до реалізації
            </p>
            <a
              href="#calculator"
              className={styles.aboutUs__finalButton}
            >
              РОЗПОЧАТИ СПІВПРАЦЮ
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}