import MainBackground from "./MainBackground";
import { connect } from "react-redux";

let mapStateToProps = (state: any) => {
  return {
    theme: state.settings.isTheme,
  };
};

const MainBackgroundContainer = connect(mapStateToProps)(MainBackground);

export default MainBackgroundContainer;
