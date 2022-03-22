import React from "react";
import styles from "./MainBackgroundDark.module.scss";

const MainWelcomeBgDark = (props: any) => {
  const isAnimation = () => {
    if (props.isAnim) {
      return styles.none;
    }

    return "";
  };

  return (
    <div className={styles.stars_inner}>
      <div className={`${styles.stars} ${isAnimation()}`}></div>
      <div className={`${styles.stars2} ${isAnimation()}`}></div>
      <div className={`${styles.stars3} ${isAnimation()}`}></div>
    </div>
  );
};

export default MainWelcomeBgDark;
