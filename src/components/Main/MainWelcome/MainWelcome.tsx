import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainWelcome.module.scss";
import MainWelcomeContainer from "./MainWelcomeContainer";

const MainWelcome = (props: any) => {
  const addName = (text: any) => {
    props.addName();
  };

  const updateName = (e: any) => {
    let body = e.target.value;

    props.updateNameTextActionCreator(body);
  };

  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_bg}>
        <div className={styles.welcome_figure}></div>
        <MainWelcomeContainer />
        <div className={styles.welcome_inner}>
          <input
            className={styles.welcome_text}
            type="text"
            placeholder="Введите ваше имя.."
            value={props.newNameText}
          />
          <button
            className={styles.welcome_btn}
            type="button"
            onClick={addName}
          >
            далее
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainWelcome;
