import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavigateLinks.module.scss";
import classNames from "classnames";
import { useState, useEffect } from "react";

type ServiceItem = {
  name: string;
  path: string;
};

const services: ServiceItem[] = [
  { name: "Топографічні та кадастрові зйомки", path: "/service/topographic-cadastral" },
  { name: "Геодезичні роботи в гірничій промисловості", path: "/service/mining-geodesy" },
  {
    name: "Вишукування під реконструкцію та будівництво",
    path: "/service/engineering-geological-surveys",
  },
  {
    name: "Геологія під будівництво",
    path: "/service/construction-geology",
  },
  { name: "Лабораторний аналіз води", path: "/service/water-analysis" },
  { name: "Буріння свердловин на воду", path: "/service/water-well-drilling" },
  { name: "3D лазерне сканування будівель", path: "/service/3d-laser-scanning-complex" },
  {
    name: "3D сканування фасаду",
    path: "/service/3d-scanning-and-industrial-inventory",
  },
];

export const NavigateLinks = ({ isMenuOpen }: { isMenuOpen?: boolean }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const location = useLocation();
  const isAnyServiceActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const getLinkClass = ({
    isActive,
    drop,
  }: {
    isActive: boolean;
    drop?: boolean;
  }) =>
    classNames(drop ? styles["nav__link-drop"] : styles.nav__link, {
      [styles["is-active"]]: isActive,
    });

  return (
    <div
      className={styles.nav__links}
      style={{
        flexDirection: isMenuOpen ? "column" : undefined,
        gap: isMenuOpen ? "16px" : undefined,
        marginTop: isMenuOpen ? "24px" : undefined,
      }}
    >
      <NavLink to="/" className={getLinkClass}>
        ГОЛОВНА
      </NavLink>

      {/* ПОСЛУГИ */}
      <div
        className={styles.dropdown}
        onMouseEnter={() => isDesktop && setIsServicesOpen(true)}
        onMouseLeave={() => isDesktop && setIsServicesOpen(false)}
      >
        <button
          className={classNames(styles.nav__link, styles.dropdown__button, {
            [styles["is-active"]]: isAnyServiceActive,
          })}
          onClick={() => !isDesktop && setIsServicesOpen(!isServicesOpen)}
        >
          ПОСЛУГИ
        </button>

        {(isServicesOpen || isDesktop) && (
          <div className={styles.dropdown__menu}>
            {services.map((service) => (
              <NavLink
                key={service.path}
                to={service.path}
                className={({ isActive }) =>
                  getLinkClass({ isActive, drop: true })
                }
              >
                {service.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <NavLink to="/about" className={getLinkClass}>
        ПРО НАС
      </NavLink>
    </div>
  );
};
