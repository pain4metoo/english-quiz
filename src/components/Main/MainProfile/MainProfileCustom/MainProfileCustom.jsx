import React from "react";
import styles from "./MainProfileCustom.module.scss";
import { getLocalProfileAvatar } from "../../../../services/auth.service";
import avatar from "../../../../assets/svg/avatar.svg";

class MainProfileCustom extends React.Component {
  customAva(target) {
    this.props.customAvatar(target);
  }

  render() {
    return (
      <section className={styles.custom}>
        <h2 className={styles.custom_title_main}>Кастомизация</h2>
        <div className={styles.custom_inner}>
          <div className={styles.custom_controls}>
            <div className={styles.custom_control}>
              <p className={styles.custom_title}>Размытие</p>
              <div className={styles.custom_range_block}>
                <input
                  className={styles.custom_range}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  name="blur"
                  value={this.props.customValue.blur}
                  onChange={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>0</span>
              </div>
            </div>

            <div className={styles.custom_control}>
              <p className={styles.custom_title}>Инверсия</p>
              <div className={styles.custom_range_block}>
                <input
                  className={styles.custom_range}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  name="invert"
                  value={this.props.customValue.invert}
                  onChange={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>0</span>
              </div>
            </div>

            <div className={styles.custom_control}>
              <p className={styles.custom_title}>Сепия</p>
              <div className={styles.custom_range_block}>
                <input
                  className={styles.custom_range}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  name="sepia"
                  value={this.props.customValue.sepia}
                  onChange={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>0</span>
              </div>
            </div>

            <div className={styles.custom_control}>
              <p className={styles.custom_title}>Нысыщенность</p>
              <div className={styles.custom_range_block}>
                <input
                  className={styles.custom_range}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  name="saturate"
                  value={this.props.customValue.saturate}
                  onChange={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>0</span>
              </div>
            </div>

            <div className={styles.custom_control}>
              <p className={styles.custom_title}>Оттенок</p>
              <div className={styles.custom_range_block}>
                <input
                  className={styles.custom_range}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  name="shade"
                  value={this.props.customValue.shade}
                  onChange={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>0</span>
              </div>
            </div>
          </div>
          <div className={styles.custom_image}>
            <img
              className={styles.custom_image_ava}
              src={this.props.profileAvatar || getLocalProfileAvatar || avatar}
              alt="profile-avatar"
            />
            <button className={styles.custom_btn}>Сохранить</button>
          </div>
        </div>
      </section>
    );
  }
}

export default MainProfileCustom;
