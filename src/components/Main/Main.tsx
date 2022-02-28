import React from "react";
import styles from "./Main.module.scss";
import MainWelcome from "./MainWelcome/MainWelcome";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainWelcome />
      </div>
    </main>
  );
};

export default Main;
