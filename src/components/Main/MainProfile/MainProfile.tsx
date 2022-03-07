import React from "react";
import styles from "./MainProfile.module.scss";
import { Navigate } from "react-router-dom";

const MainProfile = (props: any) => {
  if (!props.isAuthLevel) {
    return <Navigate to="/english-quiz" />;
  }

  return (
    <section className={styles.profile}>
      <div className={styles.profile_inner}>
        <div className={styles.profile_info_inner}>
          <div className={styles.profile_avatar}></div>
          <div className={styles.profile_info}>
            <div className={styles.profile_name_inner}>
              <p className={styles.profile_name}>Ваше имя:</p>
              <p className={styles.profile_name_text}>{props.name.name}</p>
            </div>

            <div className={styles.profile_level_inner}>
              <p className={styles.profile_level}>Уровень английского:</p>
              <p className={styles.profile_level_text}>{props.stage.stage}</p>
            </div>

            <div className={styles.profile_progress}>
              <p className={styles.profile_progress_text}>Ваш прогресс:</p>
              <p className={styles.profile_progress_text_value}>157 / 1000</p>
              <div className={styles.profile_progress_line}>
                <div className={styles.profile_progress_line_inner}></div>
              </div>
            </div>

            <div className={styles.profile_btns}>
              <button
                className={`${styles.profile_btn_score} ${styles.profile_btn}`}
                type="button"
              >
                очки
              </button>
              <button
                className={`${styles.profile_btns_game} ${styles.profile_btn}`}
                type="button"
              >
                начать игру
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProfile;
