import styles from "./MainSettings.module.scss";
import { Navigate } from "react-router-dom";
import volumeOff from "../../../assets/svg/mute.svg";
import volumeOn from "../../../assets/svg/on.svg";

const MainSettings = (props: any) => {
  console.log(props);
  if (!props.isAuthName && !props.isAuthLevel) {
    return <Navigate to="/" />;
  }

  const applySettings = (type: string) => {
    if (type === "isAnim") {
      if (props.isAnim) {
        props.isAnimFlag(false);
      } else {
        props.isAnimFlag(true);
      }
    } else if (type === "isTheme") {
      if (props.isTheme) {
        props.isThemeFlag(false);
      } else {
        props.isThemeFlag(true);
      }
    }
  };

  const theme = (tag: string) => {
    if (tag === "text") {
      if (props.isTheme) {
        return styles.settings_text_light;
      } else {
        return styles.settings_text_dark;
      }
    } else if (tag === "btn") {
      if (props.isTheme) {
        return styles.settings_btn_light;
      } else {
        return styles.settings_btn_dark;
      }
    } else if (tag === "input_circle") {
      if (props.isTheme) {
        return styles.circle_light;
      } else {
        return styles.circle_dark;
      }
    } else if (tag === "input_name") {
      if (props.isTheme) {
        return styles.settings_name_change_light;
      } else {
        return styles.settings_name_change_dark;
      }
    }
  };

  return (
    <section className={styles.settings}>
      <div className={styles.settings_inner}>
        <h3 className={`${styles.settings_title} ${theme("text")}`}>
          Настройки приложения
        </h3>

        <div className={styles.settings_block}>
          <div className={styles.settings_left}>
            <div className={styles.settings_item}>
              <p className={`${styles.settings_theme_text} ${theme("text")}`}>
                Сменить тему приложения
              </p>
              <div className={styles.center}>
                <input
                  className={theme("input_circle")}
                  type="checkbox"
                  onChange={() => applySettings("isTheme")}
                />
                <p
                  className={`${styles.settings_text_description} ${theme(
                    "text"
                  )}`}
                >
                  чёрная/белая
                </p>
              </div>
            </div>

            <div className={styles.settings_item}>
              <p className={`${styles.settings_anim_text} ${theme("text")}`}>
                Настройка анимации фона
              </p>
              <div className={styles.center}>
                <input
                  className={theme("input_circle")}
                  type="checkbox"
                  onChange={() => applySettings("isAnim")}
                />
                <p
                  className={`${styles.settings_text_description} ${theme(
                    "text"
                  )}`}
                >
                  включение/отключение анимации
                </p>
              </div>
            </div>

            <div className={styles.settings_item}>
              <p className={`${styles.settings_bg_text} ${theme("text")}`}>
                Сменить тип анимации фона
              </p>
              <div className={styles.center}>
                <input className={theme("input_circle")} type="checkbox" />
                <p
                  className={`${styles.settings_text_description} ${theme(
                    "text"
                  )}`}
                >
                  лучи/шум
                </p>
              </div>
            </div>
          </div>

          <div className={styles.settings_right}>
            <div className={`${styles.settings_item} ${styles.settings_sound}`}>
              <p className={`${styles.settings_volume_text} ${theme("text")}`}>
                Настройка звука
              </p>
              <div className={styles.settings_controls}>
                <input
                  className={styles.settings_range}
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                />
                <div className={styles.settings_volume}>
                  <img
                    className={`${styles.settings_volume_img} ${styles.settings_volume_off}`}
                    src={volumeOff}
                    alt="volume_off"
                  />
                  <img
                    className={`${styles.settings_volume_img} ${styles.settings_volum_on}`}
                    src={volumeOn}
                    alt="volume_on"
                  />
                </div>
              </div>
            </div>
            <div className={styles.settings_item}>
              <p className={`${styles.settings_name_text} ${theme("text")}`}>
                Изменить имя
              </p>
              <input
                className={`${styles.settings_name_change} ${theme(
                  "input_name"
                )}`}
                type="text"
                placeholder="Введите новое имя..."
                value={props.newNameText || props.newName}
              />
            </div>

            <div className={styles.settings_item}>
              <p className={`${styles.settings_level_text} ${theme("text")}`}>
                Изменить уровень
              </p>
              <select className={styles.settings_list}>
                <option className={styles.settings_list_item} value="начальный">
                  Начальный
                </option>
                <option className={styles.settings_list_item} value="средний">
                  Средний
                </option>
                <option
                  className={styles.settings_list_item}
                  value="продвинутый"
                >
                  Продвинутый
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.settings_btns}>
          <button
            className={`${styles.settings_btn} ${
              styles.settings_btn_clear
            } ${theme("btn")}`}
            type="button"
          >
            Сбросить
          </button>
          <button
            className={`${styles.settings_btn} ${
              styles.settings_btn_save
            } ${theme("btn")}`}
            type="button"
          >
            Сохранить
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSettings;
