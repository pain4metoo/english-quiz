import React from "react";
import styles from "./MainGame.module.scss";
import { Link } from "react-router-dom";
import preloader from "../../../assets/svg/preloader.svg";
import play from "../../../assets/svg/play.svg";

class MainGame extends React.Component {
  componentDidMount() {
    this.props.addCategory(this.props.category);
    this.props.getSoundDataThunk();
  }

  componentDidUpdate() {
    if (this.props.isAnswer) {
      this.props.getNewSoundDataThunk();
    }
  }

  updateAnswerText = (e) => {
    let text = e.target.value;
    this.props.updateAnswer(text);
  };

  addValueAnswer = () => {
    this.props.addAnswer();
  };

  addSong = () => {
    let audio = new Audio(this.props.src);
    if (this.props.isPlay) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  showAnswer = () => {
    if (this.props.showAnswer) {
      return <div>{this.props.answer}</div>;
    }
  };

  showWinAnimation = () => {
    if (this.props.showAnswer) {
      return styles.game_animation_win;
    }
  };

  showEndRoundPopup = () => {
    let flag = this.props.isRoundEnd;

    if (flag) {
      return (
        <div className={styles.game_round}>
          <div className={styles.game_round_inner}>
            <p className={styles.game_win_text}>Поздравляем!</p>
            <p className={styles.game_win_category}>
              {`Вы полностью прошли категорию ${this.props.categoryTranslate}`}
            </p>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <section className={styles.game}>
        <div className={`${styles.game_inner} ${this.showWinAnimation()}`}>
        {this.showEndRoundPopup()}
          <div className={styles.game_navigation}>
            <Link to="/category" className={styles.game_previous}></Link>
            <Link to="/profile" className={styles.game_close}></Link>
          </div>
          <h1 className={styles.game_title}>{this.props.categoryTranslate}</h1>
          <button
            className={styles.game_btn}
            type="button"
            onClick={this.addSong}
          >
            <img
              className={styles.game_btn_img}
              src={this.props.isFetching ? preloader : play}
              alt="play"
            />
          </button>
          <div className={styles.game_showAnswer}>{this.showAnswer()}</div>
          <div className={styles.game_answer}>
            <textarea
              className={styles.game_field}
              placeholder="Введите, что услышали"
              onChange={this.updateAnswerText}
              value={this.props.newAnswerText}
            ></textarea>
            <button
              className={styles.game_answer_btn}
              type="button"
              onClick={this.addValueAnswer}
            >
              Отправить
            </button>
            <span className={styles.game_line} id="line"></span>
          </div>
        </div>
      </section>
    );
  }
}

export default MainGame;
