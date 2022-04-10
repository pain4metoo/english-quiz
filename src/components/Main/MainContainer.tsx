import Main from "./Main";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    isAvatarOpen: state.profile.isShowAvatarMenu,
    isCustomOpen: state.profile.isShowCustomMenu,
  };
};

const MainContainer = connect(mapStatetoProps)(Main);

export default MainContainer;
