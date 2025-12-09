import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Clock } from "lucide-react";
import { useTheme } from "../../shared/hooks/useTheme";
import styles from "./Header.module.scss";
import { NavigateLinks } from "../NavigateLinks";
import { CalculatorButton } from "../CalculatorButton";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles["header--scrolled"] : ""
      }`}
      style={{ height: isMenuOpen ? "100vh" : undefined }}
    >
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <p className={styles.header__companyName}>TerraAxis</p>
          <p className={styles.header__slogan}>PRECISION IN EVERY COORDINATE</p>
        </div>

        <nav className={styles.nav}>
          <NavigateLinks />

          <div className={styles.nav__schedule}>
            <Clock className={styles.nav__icon} />
            <span className={styles.nav__text}>Пн-Пт: 9:00 - 18:00</span>
          </div>

          <button onClick={toggleTheme} className={styles.nav__themeBtn}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          <CalculatorButton text="ЗАМОВИТИ ДЗВІНОК" />
        </nav>

        <div className={styles.mobileControls}>
          <button
            onClick={toggleTheme}
            className={styles.mobileControls__themeBtn}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          <CalculatorButton text="ДЗВІНОК" />

          <button
            className={styles.mobileControls__menuToggle}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu} style={{ flex: "1" }}>
          <NavigateLinks isMenuOpen={isMenuOpen} />
        </div>
      )}
    </header>
  );
}
