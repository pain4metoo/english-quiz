import MainBackgroundDark from "./MainBackgroundDark";
import { connect } from "react-redux";

let mapStateToProps = (state: any) => {
  return {
    isAnim: state.settings.isAnim,
  };
};

const MainBackgroundContainerDark =
  connect(mapStateToProps)(MainBackgroundDark);

export default MainBackgroundContainerDark;
