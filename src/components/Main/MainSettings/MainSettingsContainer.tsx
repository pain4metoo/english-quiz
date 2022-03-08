import MainSettings from "./MainSettings";
import { connect } from "react-redux";
import { mapDispatchToProps } from "./../MainWelcome/MainWelcomeContainer";

let mapStatetoProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
    name: state.name,
  };
};

const MainSettingsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainSettings);

export default MainSettingsContainer;
