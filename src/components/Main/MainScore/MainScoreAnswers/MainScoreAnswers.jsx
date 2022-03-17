import React from "react";
import styles from "./MainScoreAnswers.module.scss";

class MainScoreAnswers extends React.Component {
  componentDidMount() {
    this.props.getSoundDataThunk();
  }

  componentDidUpdate() {}

  render() {
    return (
      <section className={styles.answers}>
        <div className={styles.answers_inner}>
          <h1 className={styles.answers_title}>
            {this.props.categoryTranslate}
          </h1>
          <div className={styles.answers_items}>
            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answer_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>
            
          </div>

          <div className={styles.answers_items}>
            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>
          </div>

          <div className={styles.answers_items}>
            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>

            <div className={styles.answers_item}>
              <span className={styles.answers_eng}>test</span>
              <span className={styles.answers_rus}>test</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainScoreAnswers;
