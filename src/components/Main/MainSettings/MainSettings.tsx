import styles from "./MainSettings.module.scss";
import { Navigate } from "react-router-dom";
import volumeOff from "../../../assets/svg/mute.svg";
import volumeOn from "../../../assets/svg/on.svg";

const MainSettings = (props: any) => {
  console.log(props);
  if (!props.isAuthName && !props.isAuthLevel) {
    return <Navigate to="/" />;
  }

  const addNameStore = () => {
    props.addName();
  };

  const updateName = (e: any) => {
    let body = e.target.value;
    props.updateText(body);
  };

  const changeLevel = (e: any) => {
    let level = e.target.value;
    props.updateLevel(level);
  };

  return (
    <section className={styles.settings}>
      <div className={styles.settings_inner}>
        <h3 className={styles.settings_title}>Настройки приложения</h3>

        <div className={styles.settings_block}>
          <div className={styles.settings_left}>
            <div className={styles.settings_item}>
              <p className={styles.settings_anim_text}>
                Настройка анимации фона
              </p>
              <div className={styles.center}>
                <input type="checkbox" />
                <p className={styles.settings_anim_description}>
                  включение/отключение анимации
                </p>
              </div>
            </div>

            <div className={styles.settings_item}>
              <p className={styles.settings_theme_text}>
                Сменить тему приложения
              </p>
              <div className={styles.center}>
                <input type="checkbox" />
                <p className={styles.settings_theme_description}>
                  белая/чёрная тема
                </p>
              </div>
            </div>

            <div className={styles.settings_item}>
              <p className={styles.settings_lang_text}>
                Сменить язык приложения
              </p>
              <div className={styles.center}>
                <input type="checkbox" />
                <p className={styles.settings_lang_description}>
                  русский/английский
                </p>
              </div>
            </div>
          </div>

          <div className={styles.settings_right}>
            <div className={styles.settings_item}>
              <p className={styles.settings_volume_text}>Настройка звука</p>
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
            <div className={styles.settings_item}>
              <p className={styles.settings_name_text}>Изменить имя</p>
              <input
                className={styles.settings_name_change}
                type="text"
                placeholder="Введите новое имя..."
                onChange={updateName}
              />
            </div>

            <div className={styles.settings_item}>
              <p className={styles.settings_level_text}>Изменить уровень</p>
              <select className={styles.settings_list} onClick={changeLevel}>
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
            className={`${styles.settings_btn} ${styles.settings_btn_clear}`}
            type="button"
          >
            Сбросить
          </button>
          <button
            className={`${styles.settings_btn} ${styles.settings_btn_save}`}
            type="button"
            onClick={addNameStore}
          >
            Сохранить
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSettings;
