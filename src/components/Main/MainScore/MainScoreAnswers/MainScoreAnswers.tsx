import React from "react";
import styles from "./MainScoreAnswers.module.scss";

class MainScoreAnswers extends React.Component {
  render() {
    return (
      <section className={styles.answers}>
        <div className={styles.answers_inner}>
          <h1 className={styles.answers_title}>Ответы</h1>
        </div>
      </section>
    );
  }
}

export default MainScoreAnswers;
