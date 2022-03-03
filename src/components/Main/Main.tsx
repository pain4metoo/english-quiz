import React from "react";
import styles from "./Main.module.scss";
import MainWelcome from "./MainWelcome/MainWelcome";
import MainEnglishLevel from "./MainEnglishLevel/MainEnglishLevel";
import MainProfile from "./MainProfile/MainProfile";
// import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainWelcome />
        {/* <MainEnglishLevel /> */}
        {/* <MainProfile /> */}
      </div>
    </main>
  );
};

export default Main;
