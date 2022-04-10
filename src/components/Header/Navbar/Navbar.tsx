import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = (props: any) => {
  return (
    <ul className={styles.items}>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : "white",
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
            color: isActive ? "#539bf5" : "white",
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
            color: isActive ? "#539bf5" : "white",
          })}
        >
          вопрос/ответ
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
          настройки
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
