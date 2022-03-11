import React from "react";
import styles from "./MainGame.module.scss";
import { Link } from "react-router-dom";

const MainGame = (props: any) => {
  console.log(props);
  const getRandomUrl = () => {
    let random = Math.ceil(Math.random() * 10);

    let currentUrl = `https://raw.githubusercontent.com/pain4metoo/words-data/master/${props.category}/${random}.mp3`;
    props.addTrueAnswer(String(random));

    return currentUrl;
  };

  const addAnswerStore = () => {
    props.addAnswer();
  };

  const updateAnswerStore = (e: any) => {
    let body = e.target.value;
    props.updateAnswer(body);
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
          // onClick={getValue}
        ></button>
        <audio controls src={getRandomUrl()}></audio>
        <div className={styles.game_answer}>
          <textarea
            className={styles.game_field}
            placeholder="Введите, что услышали"
            onChange={updateAnswerStore}
          ></textarea>
          <button
            className={styles.game_answer_btn}
            type="button"
            onClick={addAnswerStore}
          >
            Отправить
          </button>
          <span className={styles.game_line} id="line"></span>
        </div>
      </div>
    </section>
  );
};

export default MainGame;
