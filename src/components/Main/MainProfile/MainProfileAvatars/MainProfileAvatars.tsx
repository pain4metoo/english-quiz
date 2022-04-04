import React from "react";
import styles from "./MainProfileAvatars.module.scss";
// import { Navigate, NavLink } from "react-router-dom";

const MainProfileAvatars = (props: any) => {
  return (
    <section className={styles.avatars}>
      <h2 className={styles.avatars_title}>Выберите аватар</h2>
      <div className={styles.avatars_inner}>
        <div className={styles.avatars_elem}>
          <div className={styles.avatars_images}>
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <img
              className={styles.avatars_img}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
          </div>

          <div className={styles.avatars_change}>
            <img
              className={styles.avatars_image_full}
              src="https://cdn.fishki.net/upload/post/2020/07/13/3368436/7cb4754eb4f04723354bbe654e720bec.jpg"
              alt=""
            />
            <button className={styles.avatars_btn} type="button">
              Выбрать
            </button>
          </div>
        </div>
        <div className={styles.avatars_pages}>1 2 3...24</div>
      </div>
    </section>
  );
};

export default MainProfileAvatars;
