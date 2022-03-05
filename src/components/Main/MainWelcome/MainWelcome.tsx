import React from "react";
import styles from "./MainWelcome.module.scss";
import MainWelcomeBg from "./MainWelcomeBg/MainWelcomeBg";
import { NavLink } from "react-router-dom";

const MainWelcome = (props: any) => {
  const addNameStore = () => {
    props.addName();
    validation();
  };

  const updateName = (e: any) => {
    let body = e.target.value;
    props.validation(body.length);
    props.updateText(body);
    validation();
  };

  const validation = () => {
    let flag = props.validationName;
    if (flag) {
      return `${styles.welcome_text_true}`;
    } else if (flag === null) {
      return "";
    } else if (!flag) {
      return `${styles.welcome_text_error}`;
    }
  };

  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_bg}>
        <div className={styles.welcome_figure}></div>
        <MainWelcomeBg />
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
