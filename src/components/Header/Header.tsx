import React from "react";
import styles from "./Header.module.scss";
import image from "../../assets/image/logo.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <img className={styles.logo} src={image} alt="header-logo" />
        <nav className={styles.menu}>
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
