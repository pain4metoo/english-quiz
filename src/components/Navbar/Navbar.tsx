import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.items}>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/welcome"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "#08fdd8",
          })}
        >
          Главная
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/score"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "#08fdd8",
          })}
        >
          Очки
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/instruction"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "#08fdd8",
          })}
        >
          Инструкция
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/settings"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "#08fdd8",
          })}
        >
          Настройки
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
