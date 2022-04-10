import React from "react";
import styles from "./MainSettings.module.scss";
import { Navigate } from "react-router-dom";

class MainSettings extends React.Component {
  componentDidMount() {
    if (!this.props.isAuthName && !this.props.isAuthLevel) {
      return <Navigate to="/" />;
    }
  }

  applySettings(type, e) {
    if (type === "isAnim") {
      if (this.props.isAnim) {
        this.props.isAnimFlag(false);
      } else {
        this.props.isAnimFlag(true);
      }
    } else if (type === "isTheme") {
      if (this.props.isTheme) {
        this.props.isThemeFlag(false);
      } else {
        this.props.isThemeFlag(true);
      }
    } else if (type === "changeName") {
      let body = e.target.value;
      this.props.isNameFlag(true);
      this.props.changeName(body);
    } else if (type === "changeLevel") {
      let body = e.target.value;
      this.props.isLevelFlag(true);
      this.props.changeLevel(body);
    } else if (type === "changeVolume") {
      let body = e.value;
      this.props.isVolumeFlag(true);
      this.props.changeVolume(body);
    }
  }

  offVolume() {
    this.props.isVolumeFlag(true);
    this.props.changeVolume(0.1);
  }

  onVolume() {
    this.props.isVolumeFlag(true);
    this.props.changeVolume(40);
  }

  render() {
    return (
      <section className={styles.settings}>
        <div className={styles.settings_inner}>
          <h3 className={styles.settings_title}>Настройки приложения</h3>

          <div className={styles.settings_block}>
            <div className={styles.settings_left}>
              <div className={styles.settings_item}>
                <p className={styles.settings_text_left}>
                  Сменить тему приложения
                </p>
                <div className={styles.center}>
                  <input className={styles.input_circle} type="checkbox" />
                  <p className={styles.settings_text_description}>
                    в разработке
                  </p>
                </div>
              </div>

              <div className={styles.settings_item}>
                <p className={styles.settings_text_left}>
                  Настройка анимации фона
                </p>
                <div className={styles.center}>
                  <input
                    className={styles.input_circle}
                    type="checkbox"
                    checked={this.props.isAnim}
                    onChange={() => this.applySettings("isAnim", null)}
                  />
                  <p className={styles.settings_text_description}>
                    включение/отключение анимации
                  </p>
                </div>
              </div>

              {/* <div className={styles.settings_item}>
                <p className={`${styles.settings_text_right} ${theme("text")}`}>
                  Сменить тип анимации фона
                </p>
                <div className={styles.center}>
                  <input className={styles.input_circle} type="checkbox" />
                  <p
                    className={styles.settings_text_description}
                  >
                    лучи/шум
                  </p>
                </div>
              </div> */}
            </div>

            <div className={styles.settings_right}>
              <div className={styles.settings_item}>
                <p className={styles.settings_text_right}>Настройка звука</p>
                <div className={styles.settings_controls}>
                  <input
                    className={styles.settings_range}
                    type="range"
                    min="1"
                    max="100"
                    value={this.props.volume}
                    step="1"
                    onChange={(e) =>
                      this.applySettings("changeVolume", e.target)
                    }
                  />
                  <div className={styles.settings_volume}>
                    <svg
                      className={`${styles.settings_volume_img} ${styles.settings_volume_off}`}
                      onClick={() => this.offVolume()}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="32.000000pt"
                      height="32.000000pt"
                      viewBox="0 0 32.000000 32.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        className={styles.settings_volume_hover}
                        transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path d="M0 312 c0 -4 16 -23 35 -42 25 -24 32 -37 24 -46 -5 -7 -9 -39 -7 -71 l3 -58 35 -3 c23 -2 54 -19 92 -48 31 -24 59 -44 62 -44 3 0 6 12 6 27 l0 27 30 -29 c16 -16 33 -25 37 -21 7 7 -295 316 -309 316 -5 0 -8 -4 -8 -8z" />
                        <path d="M190 284 c-25 -20 -48 -39 -52 -43 -4 -4 19 -33 52 -66 l60 -59 0 102 c0 56 -3 102 -7 101 -5 0 -28 -16 -53 -35z" />
                      </g>
                    </svg>

                    <svg
                      className={`${styles.settings_volume_img} ${styles.settings_volum_on}`}
                      onClick={() => this.onVolume()}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="32.000000pt"
                      height="32.000000pt"
                      viewBox="0 0 32.000000 32.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        className={styles.settings_volume_hover}
                        transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path d="M108 275 c-35 -33 -55 -45 -77 -45 l-31 0 0 -70 0 -70 30 0 c23 0 44 -12 79 -45 26 -25 53 -45 60 -45 8 0 11 46 11 160 0 121 -3 160 -12 160 -7 0 -34 -21 -60 -45z" />
                        <path d="M200 270 c0 -5 8 -10 19 -10 25 0 69 -42 77 -74 3 -14 3 -38 0 -52 -8 -32 -52 -74 -77 -74 -11 0 -19 -4 -19 -10 0 -34 83 11 105 56 19 40 19 68 0 108 -22 45 -105 90 -105 56z" />
                        <path d="M200 220 c0 -5 9 -14 20 -20 13 -7 20 -21 20 -40 0 -19 -7 -33 -20 -40 -29 -16 -25 -32 5 -18 46 21 46 95 0 116 -14 7 -25 8 -25 2z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.settings_item} ${styles.settings_item_name}`}
              >
                <p className={styles.settings_text_right}>Изменить имя</p>
                <input
                  className={styles.settings_name_change}
                  type="text"
                  placeholder="Введите новое имя..."
                  value={this.props.newName || this.props.name}
                  onChange={(e) => this.applySettings("changeName", e)}
                  max="10"
                />
              </div>
              <div className={styles.settings_item}>
                <p className={styles.settings_text_right}>Изменить уровень</p>
                <select
                  className={styles.settings_list}
                  onChange={(e) => this.applySettings("changeLevel", e)}
                >
                  <option className={styles.settings_list_item} defaultChecked>
                    Выберите уровень
                  </option>
                  <option
                    className={styles.settings_list_item}
                    value="Начальный"
                  >
                    Начальный
                  </option>
                  <option className={styles.settings_list_item} value="Средний">
                    Средний
                  </option>
                  <option
                    className={styles.settings_list_item}
                    value="Продвинутый"
                  >
                    Продвинутый
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.settings_btns}>
            <button
              className={`${styles.settings_btn} ${styles.settings_btn_clear} `}
              type="button"
            >
              Сбросить
            </button>
            <button
              className={`${styles.settings_btn} ${styles.settings_btn_save}`}
              type="button"
              onClick={this.props.saveSettings}
            >
              Сохранить
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default MainSettings;
