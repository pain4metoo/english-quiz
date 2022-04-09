import React from "react";
import styles from "./MainGame.module.scss";
import { Link } from "react-router-dom";
import preloader from "../../../assets/gif/preloader.gif";
import play from "../../../assets/svg/play.svg";
import playAnim from "../../../assets/image/play.png";

class MainGame extends React.Component {
  constructor(props) {
    super(props);
    this.audioValue = React.createRef();
  }
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
    if (this.props.isPlay) {
      this.createAudio();
      const audioDuration = this.audioValue.current.duration;
      this.props.animState(true);
      setTimeout(() => {
        this.props.animState(false);
      }, audioDuration + 1000);
      this.audioValue.current.play();
    }
  };

  createAuidoAnim = () => {
    if (this.props.isAnimPlay) {
      return (
        <img
          className={styles.game_btn_img}
          src={this.props.isFetching ? preloader : playAnim}
          alt="play"
        />
      );
    } else {
      return (
        <img
          className={styles.game_btn_img}
          src={this.props.isFetching ? preloader : play}
          alt="play"
        />
      );
    }
  };

  createAudio = () => {
    if (this.props.isPlay) {
      return (
        <audio
          src={this.props.src}
          ref={this.audioValue}
          preload="metadata"
        ></audio>
      );
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

  theme = (tag) => {
    if (tag === "send_btn") {
      if (this.props.theme) {
        return styles.game_answer_btn_light;
      } else {
        return styles.game_answer_btn_dark;
      }
    }
  };

  enterAnswer = (e) => {
    setTimeout(() => {
      if (e.key === "Enter") {
        this.addValueAnswer();
      }
    }, 0);
  };

  faultAnswer = () => {
    if (this.props.getAnswer === false) {
      return styles.game_line_fault;
    }
  };

  render() {
    return (
      <section className={styles.game}>
        <div className={`${styles.game_inner} ${this.showWinAnimation()}`}>
          {this.showEndRoundPopup()}
          <div className={styles.game_navigation}>
            <Link to="/category" className={styles.game_previous}>
              <svg
                className={styles.game_btn_previous}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="left-arrow-backward-sign"
                version="1.1"
                viewBox="0 0 15.699 8.707"
                xmlSpace="preserve"
              >
                <polygon points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 " />
              </svg>
            </Link>
            <Link to="/profile" className={styles.game_close}>
              <svg
                className={styles.game_btn_close}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <defs></defs>
                <title />
                <g id="cross">
                  <line x1="7" x2="25" y1="7" y2="25" />
                  <line x1="7" x2="25" y1="25" y2="7" />
                </g>
              </svg>
            </Link>
          </div>
          <h1 className={styles.game_title}>{this.props.categoryTranslate}</h1>
          <button
            className={styles.game_btn}
            type="button"
            onClick={this.addSong}
          >
            {this.createAuidoAnim()}
            {this.createAudio()}
          </button>
          <button
            className={styles.game_btn_skip}
            onClick={() => this.props.getNewSoundDataThunk()}
          >
            Пропустить слово
          </button>
          <div className={styles.game_showAnswer}>{this.showAnswer()}</div>
          <div className={styles.game_answer}>
            <textarea
              className={styles.game_field}
              placeholder="Введите, что услышали"
              onChange={this.updateAnswerText}
              value={this.props.newAnswerText}
              onKeyDown={this.enterAnswer}
            ></textarea>
            <button
              className={`${styles.game_answer_btn} ${this.theme("send_btn")}`}
              type="button"
              onClick={this.addValueAnswer}
            >
              Далее
            </button>
            <span
              className={`${styles.game_line} ${this.faultAnswer()}`}
              id="line"
            ></span>
          </div>
        </div>
      </section>
    );
  }
}

export default MainGame;
