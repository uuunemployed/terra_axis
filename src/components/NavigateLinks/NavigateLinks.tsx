import { NavLink } from "react-router-dom";
import styles from "./NavigateLinks.module.scss";

import classNames from "classnames";

export const NavigateLinks = ({ isMenuOpen }: { isMenuOpen?: boolean }) => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.nav__link, { [styles["is-active"]]: isActive });

  return (
    <div
      className={styles.nav__links}
      style={{
        flexDirection: isMenuOpen ? "column" : undefined,
        gap: isMenuOpen ? "16px" : undefined,
        marginTop: isMenuOpen ? '24px' : undefined
      }}
    >
      {["home", "services", "about"].map((id, index) => (
        <NavLink
          key={index}
          to={id === "home" ? "/" : `/${id}`}
          className={getLinkClass}
          style={{ lineHeight: isMenuOpen ? "36px" : "" }}
        >
          {id === "home" && "ГОЛОВНА"}
          {id === "services" && "ПОСЛУГИ"}
          {id === "about" && "ПРО НАС"}
        </NavLink>
      ))}
    </div>
  );
};
