import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.items}>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "black",
          })}
        >
          главная
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/score"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "black",
          })}
        >
          очки
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/instruction"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "black",
          })}
        >
          инструкция
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/settings"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "black",
          })}
        >
          настройки
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
