import React from "react";
import styles from "./MainWelcome.module.scss";
import { NavLink, Navigate } from "react-router-dom";

const MainWelcome = (props: any) => {
  if (props.isAuthName && props.isAuthLevel) {
    return <Navigate to="/profile" />;
  }
  const addNameStore = () => {
    props.addName();
  };

  const updateName = (e: any) => {
    let body = e.target.value;
    props.validName(body.length);
    props.updateText(body);
  };

  const validation = () => {
    let flag = props.isAuthName;
    if (flag === null) {
      return "";
    } else if (flag) {
      return `${styles.welcome_text_true}`;
    } else {
      return `${styles.welcome_text_error}`;
    }
  };

  const theme = (tag: string) => {
    if (tag === "btn") {
      if (props.theme) {
        return styles.welcome_btn_light;
      } else {
        return styles.welcome_btn_dark;
      }
    }
  };

  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_bg}>
        <div className={styles.welcome_figure}></div>
        <div className={styles.welcome_inner}>
          <input
            className={`${styles.welcome_text} ${validation()}`}
            type="text"
            value={props.newNameText}
            onChange={updateName}
            placeholder="Введите ваше имя..."
          />
          <NavLink
            className={`${styles.welcome_btn} ${theme("btn")}`}
            to={props.url}
            onClick={addNameStore}
          >
            далее
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MainWelcome;
