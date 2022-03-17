import React from "react";
import styles from "./MainScore.module.scss";
import { Link } from "react-router-dom";

class MainScore extends React.Component {
  componentDidMount() {
    this.props.getSoundDataThunk();
  }

  nounProgress() {
    if (this.props.data.noun) {
      return (
        (this.props.answers.noun.length / this.props.data.noun.length) * 100
      );
    }
  }

  nounTextProgress() {
    if (this.props.data.noun) {
      return this.props.answers.noun.length + "/" + this.props.data.noun.length;
    }
  }

  adjectiveProgress() {
    if (this.props.data.adjective) {
      return (
        (this.props.answers.adjective.length /
          this.props.data.adjective.length) *
        100
      );
    }
  }

  adjectiveTextProgress() {
    if (this.props.data.adjective) {
      return (
        this.props.answers.adjective.length +
        "/" +
        this.props.data.adjective.length
      );
    }
  }

  verbProgress() {
    if (this.props.data.verb) {
      return (
        (this.props.answers.verb.length / this.props.data.verb.length) * 100
      );
    }
  }

  verbTextProgress() {
    if (this.props.data.verb) {
      return this.props.answers.verb.length + "/" + this.props.data.verb.length;
    }
  }

  otherProgress() {
    if (this.props.data.other) {
      return (
        (this.props.answers.other.length / this.props.data.other.length) * 100
      );
    }
  }

  otherTextProgress() {
    if (this.props.data.other) {
      return (
        this.props.answers.other.length + "/" + this.props.data.other.length
      );
    }
  }

  render() {
    return (
      <section className={styles.score}>
        {console.log(this.props)}
        <div className={styles.score_inner}>
          <div className={styles.score_content}>
            <div
              className={`${styles.score_category} ${styles.score_category_1}`}
            >
              <p className={styles.score_text}>Существительные</p>
            </div>
            <div className={`${styles.score_result} ${styles.score_result_1}`}>
              <div
                className={styles.score_progress}
                style={{ width: this.nounProgress() + "%" }}
              ></div>
            </div>
            <span className={styles.score_value}>
              {this.nounTextProgress()}
            </span>
          </div>

          <div className={styles.score_content}>
            <div
              className={`${styles.score_category} ${styles.score_category_2}`}
            >
              <p className={styles.score_text}>Прилагательные</p>
            </div>
            <div className={`${styles.score_result} ${styles.score_result_2}`}>
              <div
                className={styles.score_progress}
                style={{ width: this.adjectiveProgress() + "%" }}
              ></div>
            </div>
            <span className={styles.score_value}>
              {this.adjectiveTextProgress()}
            </span>
          </div>

          <div className={styles.score_content}>
            <div
              className={`${styles.score_category} ${styles.score_category_3}`}
            >
              <p className={styles.score_text}>Глаголы</p>
            </div>
            <div className={`${styles.score_result} ${styles.score_result_3}`}>
              <div
                className={styles.score_progress}
                style={{ width: this.verbProgress() + "%" }}
              ></div>
            </div>
            <span className={styles.score_value}>
              {this.verbTextProgress()}
            </span>
          </div>

          <div className={styles.score_content}>
            <div
              className={`${styles.score_category} ${styles.score_category_4}`}
            >
              <p className={styles.score_text}>Другое</p>
            </div>
            <div className={`${styles.score_result} ${styles.score_result_4}`}>
              <div
                className={styles.score_progress}
                style={{ width: this.otherProgress() + "%" }}
              ></div>
            </div>
            <span className={styles.score_value}>
              {this.otherTextProgress()}
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default MainScore;
