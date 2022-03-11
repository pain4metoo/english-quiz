import React from "react";
import styles from "./MainGame.module.scss";
import { Link } from "react-router-dom";

const MainGame = (props: any) => {
  console.log(props);
  // 1)При загрузке страницы в state передаётся рандомная ссылка на трек.
  // 2)При нажатии на кнопку Play проигрывается этот трек.
  // 3)При ответе в state передаётся ответ и сравнивается с правильным ответом.
  // 4)Если ответ правильный, то показывается это визуально и формируется следующая рандомная ссылка, с учётом прошлого ответа.
  // 5)Если ответ неправильный, то это визуально показывается и ссылка остаётся той же.

  const getData = async () => {
    let sounds =
      "https://raw.githubusercontent.com/pain4metoo/words-data/master/words-data.json";

    const fetchSounds = await fetch(sounds);
    const data = await fetchSounds.json();

    getValue(data);
  };

  const getValue = (data: any) => {
    data.then((value: any) => props.addSound(value));
  };

  return (
    <section className={styles.game}>
      <div className={styles.game_inner}>
        <div className={styles.game_navigation}>
          <Link to="/category" className={styles.game_previous}></Link>
          <Link to="/profile" className={styles.game_close}></Link>
        </div>
        <h1 className={styles.game_title}>{props.category}</h1>
        <button
          className={styles.game_btn}
          type="button"
          onClick={getValue}
        ></button>
        <audio src={props.url}></audio>
        <div className={styles.game_answer}>
          <textarea
            className={styles.game_field}
            placeholder="Введите, что услышали"
          ></textarea>

          <span className={styles.game_line} id="line"></span>
        </div>
      </div>
    </section>
  );
};

export default MainGame;
