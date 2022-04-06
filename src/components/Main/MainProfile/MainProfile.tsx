import React from "react";
import styles from "./MainProfile.module.scss";
import { Navigate, NavLink } from "react-router-dom";
import MainProfileAvatarsContainer from "./MainProfileAvatars/MainProfileAvatarsContainer";
import avatar from "../../../assets/svg/avatar.svg";
import { getLocalProfileAvatar } from "../../../services/auth.service";
import MainProfileCustomContainer from "./MainProfileCustom/MainProfileCustomContainer";

const MainProfile = (props: any) => {
  if (!props.isAuthLevel) {
    return <Navigate to="/" />;
  }

  const getScore = () => {
    let previousAnswers: Array<Array<number>> = [];
    for (let key in props.score) {
      previousAnswers.push(props.score[key]);
    }
    return previousAnswers.reduce((a, b) => {
      return (a += b.length);
    }, 0);
  };

  const theme = (tag: string) => {
    if (tag === "text") {
      if (props.theme) {
        return styles.profile_text_light;
      } else {
        return styles.profile_text_dark;
      }
    } else if (tag === "btn") {
      if (props.theme) {
        return styles.profile_btn_light;
      } else {
        return styles.profile_btn_dark;
      }
    } else if (tag === "profile_inner") {
      if (props.theme) {
        return styles.profile_inner_light;
      } else {
        return styles.profile_inner_dark;
      }
    } else if (tag === "progress") {
      if (props.theme) {
        return styles.profile_progress_line_inner_light;
      } else {
        return styles.profile_progress_line_inner_dark;
      }
    } else if (tag === "progress-bg") {
      if (props.theme) {
        return styles.profile_progress_line_light;
      } else {
        return styles.profile_progress_line_dark;
      }
    }
  };

  const showAvatar = (flag: boolean) => {
    props.showAvatars(flag);
  };

  const showCustom = (flag: boolean) => {
    props.showCustom(flag);
  };

  const showAvatarsMenu = () => {
    if (props.isShowAvatarMenu) {
      return <MainProfileAvatarsContainer />;
    } else {
      props.showAvatars(false);
    }
  };

  const showCustomMenu = () => {
    if (props.isShowCustomMenu) {
      return <MainProfileCustomContainer />;
    } else {
      props.showCustom(false);
    }
  };

  return (
    <section className={styles.profile}>
      {showAvatarsMenu()}
      {showCustomMenu()}
      <div className={`${styles.profile_inner} ${theme("profile_inner")}`}>
        <div className={styles.profile_info_inner}>
          <div className={styles.profile_avatar}>
            <img
              className={styles.profile_avatar_img}
              src={props.profileAvatar || getLocalProfileAvatar || avatar}
              alt="profile-avatar"
            />
            <div className={styles.profile_avatar_download}>
              <div
                className={styles.profile_update_text}
                onClick={() => showAvatar(true)}
              >
                Изменить аватар
              </div>
              <div
                className={styles.profile_change_text}
                onClick={() => showCustom(true)}
              >
                Кастомизировать
              </div>
            </div>
          </div>
          <div className={styles.profile_info}>
            <div className={`${styles.profile_name} ${theme("text")}`}>
              Имя:
              <span className={`${styles.profile_name_text} ${theme("text")}`}>
                {props.changeName || props.name.name}
              </span>
            </div>
            <div className={`${styles.profile_level} ${theme("text")}`}>
              Уровень английского:
              <span className={styles.profile_level_text}>
                {props.changeLevel || props.stage.stage}
              </span>
            </div>
            <div className={styles.profile_progress}>
              <p className={`${styles.profile_progress_text} ${theme("text")}`}>
                Ваш прогресс:
              </p>
              <p
                className={`${styles.profile_progress_text_value} ${theme(
                  "text"
                )}`}
              >
                {getScore()} / 651 слова
              </p>
              <div
                className={`${styles.profile_progress_line} ${theme(
                  "progress-bg"
                )}`}
              >
                <div
                  className={`${styles.profile_progress_line_inner} ${theme(
                    "progress"
                  )}`}
                  style={{ width: (getScore() / 651) * 100 + "%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile_btn_inner}>
        <NavLink
          to="/category"
          className={`${styles.profile_btn} ${theme("btn")}`}
        >
          начать игру
        </NavLink>
      </div>
    </section>
  );
};

export default MainProfile;
