import MainSettings from "./MainSettings";
import { connect } from "react-redux";
import {
  isAnimFlagActionCreator,
  isThemeFlagActionCreator,
  isTypeAnimFlagActionCreator,
  isSoundFlagActionCreator,
  isNameFlagActionCreator,
  isLevelFlagActionCreator,
} from "./../../../redux/reducers/reducerSettings";

let mapStatetoProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
    isAnim: state.settings.settings.isAnim,
    isTheme: state.settings.settings.isTheme,
    isTypeAnim: state.settings.isTypeAnim,
    isSound: state.settings.isSound,
    isName: state.settings.isName,
    isLevel: state.settings.isLevel,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    isAnimFlag: (flag: boolean) => {
      dispatch(isAnimFlagActionCreator(flag));
    },
    isThemeFlag: (flag: boolean) => {
      dispatch(isThemeFlagActionCreator(flag));
    },
    isTypeAnimFlag: (flag: boolean) => {
      dispatch(isTypeAnimFlagActionCreator(flag));
    },
    isSoundFlag: (flag: boolean) => {
      dispatch(isSoundFlagActionCreator(flag));
    },
    isNameFlag: (flag: boolean) => {
      dispatch(isNameFlagActionCreator(flag));
    },
    isLevelFlag: (flag: boolean) => {
      dispatch(isLevelFlagActionCreator(flag));
    },
  };
};

const MainSettignsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainSettings);

export default MainSettignsContainer;
