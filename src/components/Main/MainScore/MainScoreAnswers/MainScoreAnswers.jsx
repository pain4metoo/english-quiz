import React from "react";
import styles from "./MainScoreAnswers.module.scss";

class MainScoreAnswers extends React.Component {
  componentDidMount() {
    this.props.getSoundDataThunk();
    this.props.getPages();
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

      return (
        <div className={styles.answers_items_list}>
          {currentAnswers.map((item, i) => {
            return (
              <ul className={styles.answers_items_lists} key={i}>
                {item.map((item, i) => {
                  return item !== undefined ? (
                    <li
                      className={styles.answers_item_list}
                      key={i}
                      onClick={() => this.playSound()}
                    >{`${item[0]} - ${item[1]}`}</li>
                  ) : (
                    ""
                  );
                })}
              </ul>
            );
          })}
        </div>
      );
    }
  }

  getNumberPage(page) {
    this.props.getWordsAnswers(page);
  }

  playSound(e) {
    let body = e.target.innerText;
    console.log(body);
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
                  className={styles.answers_page}
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
