import React from "react";
import styles from "./MainBackground.module.scss";
import MainBackgroundContainerDark from "./MainBackgroundDark/MainBackgroundDarkContainer";
import MainBackgroundContainerLight from "./MainBackgroundLight/MainBackgroundLightContainer";

const MainBackground = (props: any) => {
  if (props.theme) {
    return <MainBackgroundContainerLight />;
  } else {
    return <MainBackgroundContainerDark />;
  }
};

export default MainBackground;
