import React from "react";
import svgPath from "../../helpers/svgPath";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <svg className={styles.svg__logo}>
          <use href={svgPath.logo + "#logo"}></use>
        </svg>
      </nav>
    </header>
  );
};

export default Header;
