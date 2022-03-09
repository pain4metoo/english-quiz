import React from "react";
import styles from "./MainGame.module.scss";
import { Link } from "react-router-dom";

const MainGame = (props: any) => {
  const giveAnswer = () => {
    let answer = "value";
    let type = props.category;
    props.addAnswer(type, answer);
  };

  return (
    <section className={styles.game}>
      <div className={styles.game_inner}>
        <div className={styles.game_navigation}>
          <Link to="/category" className={styles.game_previous}></Link>
          <Link to="/profile" className={styles.game_close}></Link>
        </div>

        <h1 className={styles.game_title}>{props.category}</h1>
        <button className={styles.game_btn} type="button"></button>
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
