import React from "react";
import styles from "./MainWelcome.module.scss";
import MainWelcomeBg from "./MainWelcomeBg/MainWelcomeBg";

const MainWelcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_bg}>
        <div className={styles.welcome_figure}></div>
        <MainWelcomeBg />
        <div className={styles.welcome_inner}>
          <input
            className={styles.welcome_text}
            type="text"
            placeholder="Введите ваше имя.."
          />
          <button className={styles.welcome_btn}>Далее</button>
        </div>
      </div>
    </section>
  );
};

export default MainWelcome;
