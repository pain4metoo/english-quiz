import React from "react";
import styles from "./Main.module.scss";
import MainWelcome from "./MainWelcome/MainWelcome";
// import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <MainWelcome />
    </main>
  );
};

export default Main;
