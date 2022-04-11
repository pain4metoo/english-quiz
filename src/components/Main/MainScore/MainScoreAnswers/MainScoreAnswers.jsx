import React from "react";
import styles from "./MainScoreAnswers.module.scss";

class MainScoreAnswers extends React.Component {
  componentDidMount() {
    this.props.getSoundDataThunk();
    this.props.getPages();
  }

  componentDidUpdate() {
    let audio = new Audio(this.props.audioSrc);
    audio.volume = this.props.volume / 100;
    if (this.props.audioPlay) {
      audio.play();
    } else {
      audio.pause();
    }

    this.props.changeSound();
  }

  showAnswers() {
    if (this.props.data) {
      let startNum = this.props.interval[0];
      let endNum = this.props.interval[1];
      let category = this.props.currentCategory;
      let answers = [];
      for (let i = startNum; i < endNum; i++) {
        if (
          this.props.data[category][this.props.answers[category][i]] !==
          undefined
        ) {
          let englishWord =
            this.props.data[category][this.props.answers[category][i]].eng;
          let russianWord =
            this.props.data[category][this.props.answers[category][i]].rus;

          answers.push([englishWord, russianWord]);
        }
      }

      let currentAnswers = [];
      for (let g = 0; g < 3; g++) {
        currentAnswers.push([]);

        for (let p = 0; p < 6; p++) {
          if (currentAnswers[g] !== undefined) {
            currentAnswers[g].push(answers.shift());
          }
        }
      }

      if (!currentAnswers[0][0]) {
        return (
          <p className={styles.answers_clear}>Список угаданных слов пуст :(</p>
        );
      } else {
        return (
          <div className={styles.answers_items_list}>
            {currentAnswers.map((item, i) => {
              return item[0] ? (
                <ul
                  className={`${styles.answers_items_lists} ${
                    styles[`answers_items_lists_${i + 1}`]
                  }`}
                  key={i}
                >
                  {item.map((item, i) => {
                    return item !== undefined ? (
                      <li
                        className={styles.answers_item_list}
                        key={i}
                        onClick={(e) => this.getSound(e.target.innerText)}
                      >{`${item[0]} - ${item[1]}`}</li>
                    ) : (
                      ""
                    );
                  })}
                </ul>
              ) : (
                <span className={styles.answers_hiden} key={i}></span>
              );
            })}
          </div>
        );
      }
    }
  }

  getNumberPage(page) {
    this.props.getWordsAnswers(page);
  }

  getSound(e) {
    let nameTrack = e;
    let indexEnd = nameTrack.indexOf(" ");
    nameTrack = nameTrack.split("").splice(0, indexEnd).join("");
    let track = `${nameTrack}-us`;
    this.props.newSound(track);
  }

  render() {
    return (
      <section className={styles.answers}>
        <div className={styles.answers_inner}>
          <h1 className={styles.answers_title}>
            {this.props.categoryTranslate}
          </h1>
          <div className={styles.answers_items}>{this.showAnswers()}</div>
          <div className={styles.answers_pages}>
            {this.props.pages.map((p, i) => {
              return (
                <span
                  className={`${styles.answers_page} ${
                    i + 1 === this.props.currentPage
                      ? styles.answers_page_active
                      : ""
                  }
                    `}
                  key={i}
                  onClick={() => this.getNumberPage(i)}
                >
                  {p}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default MainScoreAnswers;
