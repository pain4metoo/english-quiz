import React from "react";
import styles from "./MainScore.module.scss";
import { Link } from "react-router-dom";

const MainScore = (props: any) => {
  let nounProgress: number = (props.answers.noun.length / 30) * 100;
  let adjectiveProgress: number = (props.answers.adjective.length / 30) * 100;
  let verbProgress: number = (props.answers.verb.length / 30) * 100;
  let otherProgress: number = (props.answers.other.length / 30) * 100;

  console.log(props.answers.noun.length);

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
            <div
              className={styles.score_progress}
              style={{ width: nounProgress + "%" }}
            ></div>
          </div>
          <span className={styles.score_value}>
            {props.answers.noun.length} / 30
          </span>
        </div>

        <div className={styles.score_content}>
          <div
            className={`${styles.score_category} ${styles.score_category_2}`}
          >
            <p className={styles.score_text}>Прилагательные</p>
          </div>
          <div className={`${styles.score_result} ${styles.score_result_2}`}>
            <div
              className={styles.score_progress}
              style={{ width: adjectiveProgress + "%" }}
            ></div>
          </div>
          <span className={styles.score_value}>
            {props.answers.adjective.length} / 30
          </span>
        </div>

        <div className={styles.score_content}>
          <div
            className={`${styles.score_category} ${styles.score_category_3}`}
          >
            <p className={styles.score_text}>Глаголы</p>
          </div>
          <div className={`${styles.score_result} ${styles.score_result_3}`}>
            <div
              className={styles.score_progress}
              style={{ width: verbProgress + "%" }}
            ></div>
          </div>
          <span className={styles.score_value}>
            {props.answers.verb.length} / 30
          </span>
        </div>

        <div className={styles.score_content}>
          <div
            className={`${styles.score_category} ${styles.score_category_4}`}
          >
            <p className={styles.score_text}>Другое</p>
          </div>
          <div className={`${styles.score_result} ${styles.score_result_4}`}>
            <div
              className={styles.score_progress}
              style={{ width: otherProgress + "%" }}
            ></div>
          </div>
          <span className={styles.score_value}>
          {props.answers.other.length} / 30
        </span>
        </div>

      </div>
    </section>
  );
};

export default MainScore;
