import MainBackgroundLight from "./MainBackgroundLight";
import { connect } from "react-redux";

let mapStateToProps = (state: any) => {
  return {
    isAnim: state.settings.settings.isAnim,
  };
};

const MainBackgroundContainerLight =
  connect(mapStateToProps)(MainBackgroundLight);

export default MainBackgroundContainerLight;
