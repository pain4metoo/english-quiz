import React from "react";
import styles from "./Header.module.scss";
import image from "../../assets/image/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <img className={styles.logo} src={image} alt="header-logo" />
        <nav className={styles.menu}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Главная
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Очки
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Инструкция
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Настройки
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
