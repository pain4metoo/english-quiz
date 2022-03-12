import React from "react";
import styles from "./MainGame.module.scss";
import { Link } from "react-router-dom";

const MainGame = (props: any) => {
  const addAnswerStore = () => {
    props.addAnswer();
  };

  const updateAnswerStore = (e: any) => {
    let body = e.target.value;
    props.updateAnswer(body);
  };

  const category = () => {
    if (props.category === "noun") {
      return "Существительные";
    } else if (props.category === "adjective") {
      return "Прилагательные";
    } else if (props.category === "verb") {
      return "Глаголы";
    } else if (props.category === "other") {
      return "Другое";
    }
  };

  if (props.trueAnswer === "") {
    props.addCategory(props.category);
    props.addCurrentSrc();
  }

  const getAnswer = () => {
    return props.isAnswer ? <div>{props.showAnswer}</div> : <div></div>;
  };

  return (
    <section className={styles.game}>
      <div className={styles.game_inner}>
        <div className={styles.game_navigation}>
          <Link to="/category" className={styles.game_previous}></Link>
          <Link to="/profile" className={styles.game_close}></Link>
        </div>
        <h1 className={styles.game_title}>{category()}</h1>
        <button
          className={styles.game_btn}
          type="button"
          // onClick={getValue}
        ></button>
        <audio controls src={props.currentSrc}></audio>
        {getAnswer()}
        <div className={styles.game_answer}>
          <textarea
            className={styles.game_field}
            placeholder="Введите, что услышали"
            onChange={updateAnswerStore}
            value={props.newAnswerText}
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
