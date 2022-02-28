import React from "react";
import styles from "./Main.module.scss";
import MainWelcome from "./MainWelcome/MainWelcome";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Routes>
          <Route path="/welcome" element={<MainWelcome />}></Route>
        </Routes>
      </div>
    </main>
  );
};

export default Main;
