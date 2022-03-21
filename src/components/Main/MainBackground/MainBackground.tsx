import React from "react";
import styles from "./MainBackground.module.scss";

const MainWelcomeBg = (props: any) => {
  const animationWin = () => {
    if (props.showAnswer) {
      return styles.win;
    }

    return "";
  };

  const isAnimation = () => {
    if (props.isAnim) {
      return styles.none;
    }

    return "";
  };
  return (
    <div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x1
        }`}
      ></div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x2
        }`}
      ></div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x3
        }`}
      ></div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x4
        }`}
      ></div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x5
        }`}
      ></div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x6
        }`}
      ></div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x7
        }`}
      ></div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x8
        }`}
      ></div>
      <div
        className={`${styles.light} ${animationWin()} ${isAnimation()} ${
          styles.x9
        }`}
      ></div>
    </div>
  );
};

export default MainWelcomeBg;
