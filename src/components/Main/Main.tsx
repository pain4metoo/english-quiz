import React from "react";
import styles from "./Main.module.scss";
import MainWelcome from "./MainWelcome/MainWelcome";
import MainEnglishLevel from "./MainEnglishLevel/MainEnglishLevel";
// import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <MainWelcome />
      {/* <MainEnglishLevel /> */}
    </main>
  );
};

export default Main;
