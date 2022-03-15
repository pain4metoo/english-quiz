import React from "react";
import styles from "./Main.module.scss";

import MainBackgroundContainer from "./MainBackground/MainBackgroundContainer";
import MainWelcomeContainer from "./MainWelcome/MainWelcomeContainer";
import MainEnglishLevelContainer from "./MainEnglishLevel/MainEnglishLevelContainer";
import MainProfileContainer from "./MainProfile/MainProfileContainer";
import MainInstructionContainer from "./MainInstruction/MainInstructionContainer";
import MainSettingsContainer from "./MainSettings/MainSettingsContainer";
import MainCategoryContainer from "./MainCategory/MainCategoryContainer";
import MainGameContainer from "./MainGame/MainGameContainer";
import { Routes, Route } from "react-router-dom";

const Main = (props: any) => {
  return (
    <main className={styles.main}>
      <MainBackgroundContainer />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<MainWelcomeContainer />} />
          <Route path="/level" element={<MainEnglishLevelContainer />} />
          <Route path="/profile" element={<MainProfileContainer />} />
          <Route path="/instruction" element={<MainInstructionContainer />} />
          <Route path="/settings" element={<MainSettingsContainer />} />
          <Route path="/category" element={<MainCategoryContainer />} />
          <Route path="/game" element={<MainGameContainer />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
