import Main from "./Main";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    theme: state.settings.settings.isTheme,
  };
};

const MainContainer = connect(mapStatetoProps)(Main);

export default MainContainer;
