import React from "react";
import styles from "./MainProfile.module.scss";
import { Navigate, NavLink } from "react-router-dom";

const MainProfile = (props: any) => {
  if (!props.isAuthLevel) {
    return <Navigate to="/" />;
  }

  const startGame = () => {};

  return (
    <section className={styles.profile}>
      <div className={styles.profile_inner}>
        <div className={styles.profile_info_inner}>
          <div className={styles.profile_avatar}></div>
          <div className={styles.profile_info}>
            <div className={styles.profile_name}>
              Добро пожаловать,
              <span className={styles.profile_name_text}>
                {props.name.name}!
              </span>
            </div>

            <div className={styles.profile_level}>
              Ваш уровень английского:
              <span className={styles.profile_level_text}>
                {props.stage.stage}
              </span>
            </div>

            <div className={styles.profile_progress}>
              <p className={styles.profile_progress_text}>Ваш прогресс:</p>
              <p className={styles.profile_progress_text_value}>157 / 1000</p>
              <div className={styles.profile_progress_line}>
                <div className={styles.profile_progress_line_inner}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile_btn_inner}>
        <NavLink
          to="/category"
          className={`${styles.profile_btn}`}
          onClick={startGame}
        >
          начать игру
        </NavLink>
      </div>
    </section>
  );
};

export default MainProfile;
