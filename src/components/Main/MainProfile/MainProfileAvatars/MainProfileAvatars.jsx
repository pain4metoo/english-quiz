import React from "react";
import styles from "./MainProfileAvatars.module.scss";
import no_photo from "../../../../assets/svg/avatar.svg";

class MainProfileAvatars extends React.Component {
  componentDidMount() {
    this.props.getPages(null, 1);
    this.props.getAvatars();
  }

  pagesControls() {
    const pagesArr = this.props.pages;
    return pagesArr.map((item, index) => {
      return this.props.pageCount === item ? (
        <span
          className={`${styles.avatars_page} ${styles.avatars_page_active}`}
          key={index}
          onClick={(e) => {
            this.props.getPages(null, +e.target.textContent);
            this.props.getAvatars();
          }}
        >
          {item}
        </span>
      ) : (
        <span
          className={styles.avatars_page}
          key={index}
          onClick={(e) => {
            this.props.getPages(null, +e.target.textContent);
            this.props.getAvatars();
          }}
        >
          {item}
        </span>
      );
    });
  }

  getFullAvatar(src) {
    this.props.getFullAva(src);
  }

  changeProfileAvatar() {
    this.props.changeProfAva();
  }

  closeAvatarMenu() {
    this.props.showAvatars(false);
  }

  render() {
    return (
      <section className={styles.avatars}>
        <h2 className={styles.avatars_title}>Выберите аватар</h2>
        <svg
          className={styles.avatars_close}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          onClick={() => this.closeAvatarMenu()}
        >
          <defs></defs>
          <title />
          <g id="cross">
            <line x1="7" x2="25" y1="7" y2="25" />
            <line x1="7" x2="25" y1="25" y2="7" />
          </g>
        </svg>
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
                    onClick={(e) => this.getFullAvatar(e.target.src)}
                  />
                );
              })}
            </div>

            <div className={styles.avatars_change}>
              <img
                className={styles.avatars_image_full}
                src={this.props.fullAvaSrc || no_photo}
                alt=""
              />
              <button
                className={styles.avatars_btn}
                type="button"
                onClick={() => this.changeProfileAvatar()}
              >
                Выбрать
              </button>
            </div>
          </div>
          <div className={styles.avatars_pages}>
            <span
              className={styles.avatars_pagination}
              onClick={() => {
                this.props.getPages("left", null);
                this.props.getAvatars();
              }}
            >
              <svg
                className={`${styles.avatars_arrow} ${styles.avatars_pagination_left}`}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 100 100"
              >
                <title />
                <polygon points="47.5 20 47.5 35 62.5 50 47.5 65 47.5 80 77.5 50 47.5 20" />
                <polygon points="22.5 20 22.5 35 37.5 50 22.5 65 22.5 80 52.5 50 22.5 20" />
              </svg>
            </span>
            {this.pagesControls()}
            <span
              className={`${styles.avatars_pagination} ${styles.avatars_pagination_right}`}
              onClick={() => {
                this.props.getPages("right", null);
                this.props.getAvatars();
              }}
            >
              <svg
                className={styles.avatars_arrow}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 100 100"
              >
                <title />
                <polygon points="47.5 20 47.5 35 62.5 50 47.5 65 47.5 80 77.5 50 47.5 20" />
                <polygon points="22.5 20 22.5 35 37.5 50 22.5 65 22.5 80 52.5 50 22.5 20" />
              </svg>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default MainProfileAvatars;
