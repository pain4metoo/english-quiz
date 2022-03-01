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
            color: isActive ? "#539bf5" : "white",
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
            color: isActive ? "#539bf5" : "white",
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
            color: isActive ? "#539bf5" : "white",
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
            color: isActive ? "#539bf5" : "white",
          })}
        >
          Настройки
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
