import MainProfile from "./MainProfile";
import { connect } from "react-redux";
import {
  showAvatarsActionCreator,
  showCustomActionCreator,
} from "./../../../redux/reducers/reducerProfile";

let mapStatetoProps = (state: any) => {
  return {
    name: state.name,
    stage: state.stage,
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
    score: state.game.previousAnswers,
    data: state.score.data,
    theme: state.settings.settings.isTheme,
    changeName: state.settings.name,
    changeLevel: state.settings.level,
    isShowAvatarMenu: state.profile.isShowAvatarMenu,
    isShowCustomMenu: state.profile.isShowCustomMenu,
    profileAvatar: state.profile.profileAvatar,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    showAvatars: (flag: boolean) => {
      dispatch(showAvatarsActionCreator(flag));
    },
    showCustom: (flag: boolean) => {
      dispatch(showCustomActionCreator(flag));
    },
  };
};

const MainProfileContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainProfile);

export default MainProfileContainer;
