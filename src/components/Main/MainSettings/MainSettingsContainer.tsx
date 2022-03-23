import MainSettings from "./MainSettings";
import { connect } from "react-redux";
import {
  isAnimFlagActionCreator,
  isThemeFlagActionCreator,
  changeNameActionCreator,
  changeLevelActionCreator,
} from "./../../../redux/reducers/reducerSettings";

let mapStatetoProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
    isAnim: state.settings.settings.isAnim,
    isTheme: state.settings.settings.isTheme,
    name: state.settings.name,
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
    changeName: (name: string) => {
      dispatch(changeNameActionCreator(name));
    },
    changeLevel: (level: string) => {
      dispatch(changeLevelActionCreator(level));
    },
  };
};

const MainSettignsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainSettings);

export default MainSettignsContainer;
