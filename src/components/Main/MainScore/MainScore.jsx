import React from "react";
import styles from "./MainScore.module.scss";
import { Link } from "react-router-dom";

const MainScore = (props) => {
  return (
    <section className={styles.score}>
      <div className={styles.score_inner}>
        <div className={styles.score_content}>
          <div
            className={`${styles.score_category} ${styles.score_category_1}`}
          >
            <p className={styles.score_text}>Существительные</p>
          </div>
          <div className={`${styles.score_result} ${styles.score_result_1}`}>
            <div className={styles.score_progress}></div>
          </div>
        </div>

        <div className={styles.score_content}>
          <div
            className={`${styles.score_category} ${styles.score_category_2}`}
          >
            <p className={styles.score_text}>Прилагательные</p>
          </div>
          <div className={`${styles.score_result} ${styles.score_result_2}`}>
            <div className={styles.score_progress}></div>
          </div>
        </div>

        <div className={styles.score_content}>
          <div
            className={`${styles.score_category} ${styles.score_category_3}`}
          >
            <p className={styles.score_text}>Глаголы</p>
          </div>
          <div className={`${styles.score_result} ${styles.score_result_3}`}>
            <div className={styles.score_progress}></div>
          </div>
        </div>

        <div className={styles.score_content}>
          <div
            className={`${styles.score_category} ${styles.score_category_4}`}
          >
            <p className={styles.score_text}>Другое</p>
          </div>
          <div className={`${styles.score_result} ${styles.score_result_4}`}>
            <div className={styles.score_progress}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScore;
