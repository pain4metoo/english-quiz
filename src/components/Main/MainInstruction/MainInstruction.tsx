import styles from "./MainInstruction.module.scss";
import { Navigate } from "react-router-dom";

const MainInstruction = (props: any) => {
  if (!props.isAuthName && !props.isAuthLevel) {
    return <Navigate to="/" />;
  }

  const newTheme = (theme: string) => {
    props.changeTheme(theme);
  };

  return (
    <section className={styles.instr}>
      <div className={styles.instr_inner}>
        <div className={styles.instr_themes}>
          <ul className={styles.instr_items}>
            <li className={styles.instr_item} onClick={() => newTheme("game")}>
              Об игре
            </li>
            <li
              className={styles.instr_item}
              onClick={() => newTheme("levels")}
            >
              Уровни сложности
            </li>
            <li
              className={styles.instr_item}
              onClick={() => newTheme("category")}
            >
              Категории
            </li>
          </ul>
        </div>
        <div className={styles.instr_answers}>
          {props.typeTheme === "game"
            ? props.answersFAQ.game.map((item: string, index: number) => {
                return (
                  <div className={styles.instr_block} key={index}>
                    <p className={styles.instr_ques}>{item}</p>
                    <div className={styles.instr_ans}>
                      {props.answersFAQ.gameAnswer[index]}
                    </div>
                  </div>
                );
              })
            : props.quest.map((item: string, index: number) => {
                return (
                  <div className={styles.instr_block} key={index}>
                    <p className={styles.instr_ques}>{item}</p>
                    <div className={styles.instr_ans}>{props.ans[index]}</div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default MainInstruction;
