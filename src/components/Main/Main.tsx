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
import MainScoreContainer from "./MainScore/MainScoreContainer";
import MainScoreAnswersContainer from "./MainScore/MainScoreAnswers/MainScoreAnswersContainer";
import MainHideBlock from "./MainHideBlock/MainHideBlock";
import { Routes, Route } from "react-router-dom";

const Main = (props: any) => {
  const theme = (tag: string) => {
    if (tag === "main") {
      if (props.theme) {
        return styles.main_light;
      } else {
        return styles.main_dark;
      }
    }
  };

  const hide = () => {
    if (props.isAvatarOpen || props.isCustomOpen) {
      return <MainHideBlock />;
    }
  };

  return (
    <main className={`${styles.main} ${theme("main")}`}>
      <MainBackgroundContainer />
      {hide()}
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<MainWelcomeContainer />} />
          <Route path="/level" element={<MainEnglishLevelContainer />} />
          <Route path="/profile" element={<MainProfileContainer />} />
          <Route path="/instruction" element={<MainInstructionContainer />} />
          <Route path="/settings" element={<MainSettingsContainer />} />
          <Route path="/category" element={<MainCategoryContainer />} />
          <Route path="/game" element={<MainGameContainer />} />
          <Route path="/score" element={<MainScoreContainer />} />
          <Route path="/answers" element={<MainScoreAnswersContainer />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
