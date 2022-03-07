import React from "react";
import styles from "./Main.module.scss";

import MainWelcomeContainer from "./MainWelcome/MainWelcomeContainer";
import MainEnglishLevelContainer from "./MainEnglishLevel/MainEnglishLevelContainer";
import MainProfileContainer from "./MainProfile/MainProfileContainer";
import { Routes, Route } from "react-router-dom";

const Main = (props: any) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<MainWelcomeContainer />} />
          <Route path="/level" element={<MainEnglishLevelContainer />} />
          <Route path="/profile" element={<MainProfileContainer />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
