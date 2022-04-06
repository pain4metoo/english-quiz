import { connect } from "react-redux";
import MainProfileCustom from "./MainProfileCustom";
import { customAvatarActionCreator } from "./../../../../redux/reducers/reducerProfile";

let mapStatetoProps = (state: any) => {
  return {
    currentAvatar: state.profile.profileAvatar,
    customValue: state.profile.customValue,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    customAvatar: (target: string) => {
      dispatch(customAvatarActionCreator(target));
    },
  };
};

const MainProfileCustomContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainProfileCustom);

export default MainProfileCustomContainer;
