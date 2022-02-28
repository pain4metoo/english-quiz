import React from "react";
import styles from "./MainWelcome.module.scss";

const MainWelcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_window}></div>
    </section>
  );
};

export default MainWelcome;
