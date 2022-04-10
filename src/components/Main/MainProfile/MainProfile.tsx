import React from "react";
import { useRef } from "react";
import styles from "./MainProfile.module.scss";
import { Navigate, NavLink } from "react-router-dom";
import MainProfileAvatarsContainer from "./MainProfileAvatars/MainProfileAvatarsContainer";
import avatar from "../../../assets/svg/avatar.svg";
import { getLocalProfileAvatar } from "../../../services/auth.service";
import MainProfileCustomContainer from "./MainProfileCustom/MainProfileCustomContainer";

const MainProfile = (props: any) => {
  const newCustomImage: any = useRef(null);
  if (props.newCustomValues && newCustomImage.current) {
    newCustomImage.current.style.filter = props.newCustomValues;
  }
  const imageOnload = () => {
    if (props.newCustomValues && newCustomImage.current) {
      newCustomImage.current.style.filter = props.newCustomValues;
    } else {
      if (newCustomImage.current && !props.newCustomValues) {
        newCustomImage.current.style.filter = "none";
      }
    }
  };

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
      <div className={styles.profile_inner}>
        <div className={styles.profile_info_inner}>
          <div className={styles.profile_avatar}>
            <img
              className={styles.profile_avatar_img}
              src={props.profileAvatar || getLocalProfileAvatar || avatar}
              alt="profile-avatar"
              ref={newCustomImage}
              onLoad={imageOnload}
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
            <div className={styles.profile_name}>
              Имя:
              <span className={styles.profile_name_text}>
                {props.changeName || props.name.name}
              </span>
            </div>
            <div className={styles.profile_level}>
              Уровень английского:
              <span className={styles.profile_level_text}>
                {props.changeLevel || props.stage.stage}
              </span>
            </div>
            <div className={styles.profile_progress}>
              <p className={styles.profile_progress_text}>Ваш прогресс:</p>
              <p className={styles.profile_progress_text_value}>
                {getScore()} / 651 слова
              </p>
              <div className={styles.profile_progress_line}>
                <div
                  className={styles.profile_progress_line_inner}
                  style={{ width: (getScore() / 651) * 100 + "%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile_btn_inner}>
        <NavLink to="/category" className={styles.profile_btn}>
          начать игру
        </NavLink>
      </div>
    </section>
  );
};

export default MainProfile;
