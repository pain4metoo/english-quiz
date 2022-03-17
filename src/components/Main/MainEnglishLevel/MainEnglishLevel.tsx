import React from "react";
import styles from "./MainEnglishLevel.module.scss";
// import { Routes, Route } from "react-router-dom";
import levelImg1 from "../../../assets/svg/level-1.svg";
import levelImg2 from "../../../assets/svg/level-2.svg";
import levelImg3 from "../../../assets/svg/level-3.svg";
import { NavLink, Navigate } from "react-router-dom";

const MainEnglishLevel = (props: any) => {
  if (!props.isAuthName) {
    return <Navigate to="/" />;
  } else if (props.isAuthLevel) {
    return <Navigate to="/profile" />;
  }

  const handlerClick = (level: string) => {
    props.addLevel(level);
  };

  return (
    <section className={styles.english}>
      <div className={styles.english_inner}>
        <h2 className={styles.english_title}>
          Какой у вас уровень английского?
        </h2>
        <div className={styles.english_cards}>
          <NavLink
            to="/profile"
            className={`${styles.english_card} ${styles.english_card_1}`}
            onClick={() => handlerClick("начальный")}
          >
            <img className={styles.english_img} src={levelImg1} alt="card" />
            <p className={`${styles.english_level} ${styles.english_level_1}`}>
              Начальный
            </p>
            <p className={styles.english_description}>
              «Прорыв» или начальный уровень английского языка. Словарный запас
              менее 1500 слов.Вы можете понимать и использовать повседневные
              выражения.
            </p>
            <button
              className={`${styles.english_btn} ${styles.english_btn_1}`}
              type="button"
            >
              выбрать
            </button>
          </NavLink>

          <NavLink
            to="/profile"
            className={`${styles.english_card} ${styles.english_card_2}`}
            onClick={() => handlerClick("средний")}
          >
            <img className={styles.english_img} src={levelImg2} alt="card" />
            <p className={`${styles.english_level} ${styles.english_level_2}`}>
              Средний
            </p>
            <p className={styles.english_description}>
              Средний уровень английского языка. Словарный запас около 3000
              слов. Вы можете правильно понимаеть суть высказываний на знакомые
              вам темы.
            </p>
            <button
              className={`${styles.english_btn} ${styles.english_btn_2}`}
              type="button"
            >
              выбрать
            </button>
          </NavLink>

          <NavLink
            to="/profile"
            className={`${styles.english_card} ${styles.english_card_3}`}
            onClick={() => handlerClick("продвинутый")}
          >
            <img className={styles.english_img} src={levelImg3} alt="card" />
            <p className={`${styles.english_level} ${styles.english_level_3}`}>
              Продвинутый
            </p>
            <p className={styles.english_description}>
              Владение в совершенстве. Словарный запас от 4500 слов и более.
              Самый высокий уровень, вы: понимаете практически все услышанное и
              прочитанное.
            </p>
            <button
              className={`${styles.english_btn} ${styles.english_btn_3}`}
              type="button"
            >
              выбрать
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MainEnglishLevel;
