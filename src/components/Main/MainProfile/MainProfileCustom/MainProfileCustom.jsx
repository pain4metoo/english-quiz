import React from "react";
import styles from "./MainProfileCustom.module.scss";
import { getLocalProfileAvatar } from "../../../../services/auth.service";
import avatar from "../../../../assets/svg/avatar.svg";

class MainProfileCustom extends React.Component {
  constructor(props) {
    super(props);
    this.customBlur = React.createRef();
  }

  componentDidMount() {
    if (this.props.newCustomValues) {
      this.customBlur.current.style.filter = this.props.newCustomValues;
    }
  }
  customAva(target) {
    this.props.customAvatar(target);

    if (this.props.customValue) {
      this.customBlur.current.style.filter = `blur(${
        this.props.customValue.blur
      }px) invert(${this.props.customValue.invert}%) sepia(${
        this.props.customValue.sepia
      }%) saturate(${this.props.customValue.saturate || 100}%) hue-rotate(${
        this.props.customValue.shade
      }deg)`;
    }
  }

  saveAvatar() {
    let customImageValues = this.customBlur.current.style.filter;
    if (customImageValues) {
      this.props.saveAvatarValues(customImageValues);
    } else {
      this.props.closeCustomAva(false);
    }
  }

  closeCustom() {
    this.props.closeCustomAva(false);
  }

  render() {
    return (
      <section className={styles.custom}>
        <h2 className={styles.custom_title_main}>Кастомизация</h2>
        <svg
          className={styles.custom_close}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          onClick={() => this.closeCustom()}
        >
          <defs></defs>
          <title />
          <g id="cross">
            <line x1="7" x2="25" y1="7" y2="25" />
            <line x1="7" x2="25" y1="25" y2="7" />
          </g>
        </svg>
        <div className={styles.custom_inner}>
          <div className={styles.custom_controls}>
            <div className={styles.custom_control}>
              <p className={styles.custom_title}>Размытие</p>
              <div className={styles.custom_range_block}>
                <input
                  className={styles.custom_range}
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  name="blur"
                  value={this.props.customValue.blur}
                  onChange={(e) => this.customAva(e.target)}
                  onClick={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>
                  {this.props.customValue.blur}
                </span>
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
                  onClick={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>
                  {this.props.customValue.invert}
                </span>
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
                  onClick={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>
                  {this.props.customValue.sepia}
                </span>
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
                  onClick={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>
                  {this.props.customValue.saturate}
                </span>
              </div>
            </div>

            <div className={styles.custom_control}>
              <p className={styles.custom_title}>Оттенок</p>
              <div className={styles.custom_range_block}>
                <input
                  className={styles.custom_range}
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  name="shade"
                  value={this.props.customValue.shade}
                  onChange={(e) => this.customAva(e.target)}
                  onClick={(e) => this.customAva(e.target)}
                />
                <span className={styles.custom_range_value}>
                  {this.props.customValue.shade}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.custom_image}>
            <img
              className={styles.custom_image_ava}
              src={this.props.currentAvatar || getLocalProfileAvatar || avatar}
              alt="profile-avatar"
              ref={this.customBlur}
            />
            <button
              className={styles.custom_btn}
              type="button"
              onClick={() => this.saveAvatar()}
            >
              Сохранить
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default MainProfileCustom;
