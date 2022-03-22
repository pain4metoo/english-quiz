import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = (props: any) => {
  const theme = (tag: string) => {
    if (tag === "link") {
      if (props.theme) {
        return styles.link_light;
      } else {
        return styles.link_dark;
      }
    } else if (tag === "active_link") {
      if (props.theme) {
        return "black";
      } else {
        return "white";
      }
    }
  };

  return (
    <ul className={styles.items}>
      <li className={styles.item}>
        <NavLink
          className={`${styles.link} ${theme("link")}`}
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : theme("active_link"),
          })}
        >
          главная
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={`${styles.link} ${theme("link")}`}
          to="/score"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : theme("active_link"),
          })}
        >
          очки
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={`${styles.link} ${theme("link")}`}
          to="/instruction"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : theme("active_link"),
          })}
        >
          вопрос/ответ
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={`${styles.link} ${theme("link")}`}
          to="/settings"
          style={({ isActive }) => ({
            color: isActive ? "#539bf5" : theme("active_link"),
          })}
        >
          настройки
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
