import React from "react";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <NavLink to="/profile" className={styles.header_logo}>
          EN.CL
        </NavLink>
        <nav className={styles.menu}>
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
