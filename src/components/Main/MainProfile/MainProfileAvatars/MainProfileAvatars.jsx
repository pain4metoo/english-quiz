import React from "react";
import styles from "./MainProfileAvatars.module.scss";
// import { Navigate, NavLink } from "react-router-dom";

class MainProfileAvatars extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPages(null, 1);
  }

  componentDidUpdate() {
    if (this.props.renderAvatar) {
      this.props.getAvatars();
      this.props.renderAva(false);
    }
  }

  pagesControls() {
    const pagesArr = this.props.pages;
    return pagesArr.map((item, index) => {
      return this.props.pageCount === item ? (
        <span
          className={`${styles.avatars_page} ${styles.avatars_page_active}`}
          key={index}
          onClick={(e) => this.props.getPages(null, +e.target.textContent)}
        >
          {item}
        </span>
      ) : (
        <span
          className={styles.avatars_page}
          key={index}
          onClick={(e) => this.props.getPages(null, +e.target.textContent)}
        >
          {item}
        </span>
      );
    });
  }

  render() {
    return (
      <section className={styles.avatars}>
        <h2 className={styles.avatars_title}>Выберите аватар</h2>
        <div className={styles.avatars_inner}>
          <div className={styles.avatars_elem}>
            <div className={styles.avatars_images}>
              {this.props.avatars.map((item, index) => {
                return (
                  <img
                    className={styles.avatars_img}
                    src={`https://raw.githubusercontent.com/pain4metoo/words-data/master/avatars/${item}.jpg`}
                    key={index}
                    alt="profile-avatar"
                  />
                );
              })}
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
          <div className={styles.avatars_pages}>
            <span
              className={`${styles.avatars_pagination} ${styles.avatars_pagination_left}`}
              onClick={() => this.props.getPages("left", null)}
            >
              &lt;
            </span>
            {this.pagesControls()}
            <span
              className={`${styles.avatars_pagination} ${styles.avatars_pagination_right}`}
              onClick={() => this.props.getPages("right", null)}
            >
              &gt;
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default MainProfileAvatars;
