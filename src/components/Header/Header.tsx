import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Clock, Mail } from "lucide-react";

import { useTheme } from "../../shared/hooks/useTheme";
import styles from "./Header.module.scss";
import { NavigateLinks } from "../NavigateLinks";
import { CalculatorButton } from "../CalculatorButton";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";

      window.scrollTo(0, scrollY);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled ? styles["header--scrolled"] : ""
        }`}
      >
        <div className={styles.header__container}>
          <Link to="/" className={styles.header__logo}>
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

            <div className={styles["header__logo-texts"]}>
              <p className={styles.header__companyName}>TerraAxis</p>

              <p className={styles.header__slogan}>
                PRECISION IN EVERY COORDINATE
              </p>
            </div>
          </Link>

          <nav className={styles.nav}>
            <NavigateLinks />
            <div className={styles.nav__schedule}>
              <Clock className={styles.nav__icon} />
              <span className={styles.nav__text}>Пн-Пт: 9:00 - 18:00</span>
            </div>

            <button onClick={toggleTheme} className={styles.nav__themeBtn}>
              {theme === "light" ? <Moon /> : <Sun />}
            </button>

            <CalculatorButton text="ЗАМОВИТИ ДЗВІНОК" isScroll />
          </nav>

          <div className={styles.mobileControls}>
            <button
              onClick={toggleTheme}
              className={styles.mobileControls__themeBtn}
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </button>

            <a className={styles.nav__PhoneBtn} href="tel:+380507850511">
              ДЗВІНОК
            </a>

            <button
              className={styles.mobileControls__menuToggle}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles["mobileMenu--open"] : ""
        }`}
      >
        <NavigateLinks onClose={() => setIsMenuOpen(false)} />
        <div
          style={{
            borderTop: "1px solid #A7A7461A",
            paddingTop: "24px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div className={styles.nav__schedule}>
            <Clock className={styles.nav__icon} />
            <span className={styles.nav__text}>Пн-Пт: 9:00 - 18:00</span>
          </div>
          <a href="mailto:info@terraaxis.com" className={styles.contactLink}>
            <div className={styles.iconWrapper}>
              <Mail className="w-5 h-5" />
            </div>
            <span>info@terraaxis.com</span>
          </a>
        </div>
      </div>
    </>
  );
}
