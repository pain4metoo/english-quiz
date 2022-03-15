import React from "react";
import styles from "./MainBackground.module.scss";

const MainWelcomeBg = (props: any) => {
  const animationWin = () => {
    if (props.showAnswer) {
      return styles.win;
    }

    return "";
  };
  return (
    <div>
      <div className={`${styles.light} ${animationWin()} ${styles.x1}`}></div>
      <div className={`${styles.light} ${animationWin()} ${styles.x2}`}></div>
      <div className={`${styles.light} ${animationWin()} ${styles.x3}`}></div>
      <div className={`${styles.light} ${animationWin()} ${styles.x4}`}></div>
      <div className={`${styles.light} ${animationWin()} ${styles.x5}`}></div>
      <div className={`${styles.light} ${animationWin()} ${styles.x6}`}></div>
      <div className={`${styles.light} ${animationWin()} ${styles.x7}`}></div>
      <div className={`${styles.light} ${animationWin()} ${styles.x8}`}></div>
      <div className={`${styles.light} ${animationWin()} ${styles.x9}`}></div>
    </div>
  );
};

export default MainWelcomeBg;
