import React from "react";
import styles from "./MainWelcome.module.scss";
import { NavLink, Navigate } from "react-router-dom";

const MainWelcome = (props: any) => {
  const addNameStore = () => {
    props.addName();
  };

  const updateName = (e: any) => {
    let body = e.target.value;
    props.validName(body.length);
    props.updateText(body);
  };

  const validation = () => {
    let flag = props.name.isAuthName;
    if (flag === null) {
      return "";
    } else if (flag) {
      return `${styles.welcome_text_true}`;
    } else {
      return `${styles.welcome_text_error}`;
    }
  };

  if (props.isAuthName && props.isAuthLevel) {
    return <Navigate to="/profile" />;
  }

  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_bg}>
        <div className={styles.welcome_figure}></div>
        <div className={styles.welcome_inner}>
          <input
            className={`${styles.welcome_text} ${validation()}`}
            type="text"
            placeholder="Введите ваше имя.."
            value={props.newNameText}
            onChange={updateName}
          />
          <NavLink
            className={styles.welcome_btn}
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
