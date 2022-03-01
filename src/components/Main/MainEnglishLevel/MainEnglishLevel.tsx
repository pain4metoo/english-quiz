import React from "react";
import styles from "./MainEnglishLevel.module.scss";
// import { Routes, Route } from "react-router-dom";
import levelImg1 from "../../../assets/svg/level-1.svg";
import levelImg2 from "../../../assets/svg/level-2.svg";
import levelImg3 from "../../../assets/svg/level-3.svg";

const MainEnglishLevel = () => {
  return (
    <section className={styles.english}>
      <div className={styles.container}>
        <div className={styles.english_inner}>
          <h2 className={styles.english_text}>
            Какой у вас уровень английского?
          </h2>
          <div className={styles.english_cards}>
            <div className={`${styles.english_card} ${styles.english_card_1}`}>
              <img className={styles.english_img} src={levelImg1} alt="card" />
              <p className={styles.english_level}>Базовый</p>
              <p className={styles.english_description}>
                Study smarter, get better grades, and fulfill your true
                potential by learning in the way that makes sense for you.
              </p>
              <button className={styles.english_btn} type="button">
                Выбрать
              </button>
            </div>
            <div className={`${styles.english_card} ${styles.english_card_2}`}>
              <img className={styles.english_img} src={levelImg2} alt="card" />
              <p className={styles.english_level}>Базовый</p>
              <p className={styles.english_description}>
                Study smarter, get better grades, and fulfill your true
                potential by learning in the way that makes sense for you.
              </p>
              <button className={styles.english_btn} type="button">
                Выбрать
              </button>
            </div>
            <div className={`${styles.english_card} ${styles.english_card_3}`}>
              <img className={styles.english_img} src={levelImg3} alt="card" />
              <p className={styles.english_level}>Базовый</p>
              <p className={styles.english_description}>
                Study smarter, get better grades, and fulfill your true
                potential by learning in the way that makes sense for you.
              </p>
              <button className={styles.english_btn} type="button">
                Выбрать
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainEnglishLevel;
