import MainSettings from "./MainSettings";
import { connect } from "react-redux";
import {
  isAnimFlagActionCreator,
  isThemeFlagActionCreator,
  changeNameActionCreator,
  changeLevelActionCreator,
  isNameFlagActionCreator,
  isLevelFlagActionCreator,
  saveSettingsActionCreator,
  isVolumeFlagActionCreator,
  changeVolumeActionCreator,
} from "./../../../redux/reducers/reducerSettings";

let mapStatetoProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
    isAnim: state.settings.isAnim,
    isTheme: state.settings.isTheme,
    isName: state.settings.isName,
    isLevel: state.settings.isLevel,
    name: state.name.name,
    newName: state.settings.newName,
    volume: state.settings.volume,
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
    isNameFlag: (flag: boolean) => {
      dispatch(isNameFlagActionCreator(flag));
    },
    isLevelFlag: (flag: boolean) => {
      dispatch(isLevelFlagActionCreator(flag));
    },
    isVolumeFlag: (flag: boolean) => {
      dispatch(isVolumeFlagActionCreator(flag));
    },
    changeName: (name: string) => {
      dispatch(changeNameActionCreator(name));
    },
    changeLevel: (level: string) => {
      dispatch(changeLevelActionCreator(level));
    },
    changeVolume: (volume: number) => {
      dispatch(changeVolumeActionCreator(volume));
    },
    saveSettings: () => {
      dispatch(saveSettingsActionCreator());
    },
  };
};

const MainSettignsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainSettings);

export default MainSettignsContainer;
