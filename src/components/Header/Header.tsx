import React from "react";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <h1 className={styles.header_logo}>EN.CL</h1>
        <nav className={styles.menu}>
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
