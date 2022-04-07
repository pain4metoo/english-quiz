import { connect } from "react-redux";
import MainProfileCustom from "./MainProfileCustom";
import {
  customAvatarActionCreator,
  saveAvatarValuesActionCreator,
  showCustomActionCreator,
} from "./../../../../redux/reducers/reducerProfile";

let mapStatetoProps = (state: any) => {
  return {
    currentAvatar: state.profile.profileAvatar,
    customValue: state.profile.customValue,
    newCustomValues: state.profile.newCustomValues,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    customAvatar: (target: string) => {
      dispatch(customAvatarActionCreator(target));
    },
    saveAvatarValues: (values: string) => {
      dispatch(saveAvatarValuesActionCreator(values));
    },
    closeCustomAva: (flag: boolean) => {
      dispatch(showCustomActionCreator(flag));
    },
  };
};

const MainProfileCustomContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainProfileCustom);

export default MainProfileCustomContainer;
