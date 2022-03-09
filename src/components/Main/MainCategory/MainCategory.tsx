import React from "react";
import styles from "./MainCategory.module.scss";
import { Navigate, NavLink } from "react-router-dom";
import noun from "../../../assets/image/noun.png";
import adjective from "../../../assets/image/adjective.png";
import verb from "../../../assets/image/verb.png";
import other from "../../../assets/image/other.png";

const MainCategory = (props: any) => {
  if (!props.isAuthLevel && !props.isAuthName) {
    return <Navigate to="/" />;
  }

  const handlerClick = (category: string) => {
    props.addCategory(category);
  };

  return (
    <section className={styles.category}>
      <div className={styles.category_inner}>
        <h2 className={styles.category_title}>Выберите категорию слов</h2>
        <div className={styles.category_cards}>
          <NavLink
            to="/game"
            className={`${styles.category_card} ${styles.category_card_1}`}
            onClick={() => handlerClick("Существительные")}
          >
            <img className={styles.category_img} src={noun} alt="card" />
            <p
              className={`${styles.category_level} ${styles.category_level_1}`}
            >
              Существительные
            </p>
            <p className={styles.category_description}>
              Существительное — это часть речи, которая обозначает одушевленные
              и неодушевленные предметы
            </p>
            <button
              className={`${styles.category_btn} ${styles.category_btn_1}`}
              type="button"
            >
              выбрать
            </button>
          </NavLink>

          <NavLink
            to="/game"
            className={`${styles.category_card} ${styles.category_card_2}`}
            onClick={() => handlerClick("Прилагательные")}
          >
            <img className={styles.category_img} src={adjective} alt="card" />
            <p
              className={`${styles.category_level} ${styles.category_level_2}`}
            >
              Прилагательные
            </p>
            <p className={styles.category_description}>
              Имя прилагательное – это часть речи которая обозначает признак
              предмета и отвечает на вопросы
            </p>
            <button
              className={`${styles.category_btn} ${styles.category_btn_2}`}
              type="button"
            >
              выбрать
            </button>
          </NavLink>

          <NavLink
            to="/game"
            className={`${styles.category_card} ${styles.category_card_3}`}
            onClick={() => handlerClick("Глаголы")}
          >
            <img className={styles.category_img} src={verb} alt="card" />
            <p
              className={`${styles.category_level} ${styles.category_level_3}`}
            >
              Глаголы
            </p>
            <p className={styles.category_description}>
              Глагол - часть речи, которая означает состояние, действие
              предмета, либо лица.
            </p>
            <button
              className={`${styles.category_btn} ${styles.category_btn_3}`}
              type="button"
            >
              выбрать
            </button>
          </NavLink>

          <NavLink
            to="/game"
            className={`${styles.category_card} ${styles.category_card_4}`}
            onClick={() => handlerClick("Другое")}
          >
            <img className={styles.category_img} src={other} alt="card" />
            <p
              className={`${styles.category_level} ${styles.category_level_4}`}
            >
              Другое
            </p>
            <p className={styles.category_description}>
              Вам будут предложены: местоимение, имя числительные или наречия.
            </p>
            <button
              className={`${styles.category_btn} ${styles.category_btn_4}`}
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

export default MainCategory;
