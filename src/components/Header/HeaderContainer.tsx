import Header from "./Header";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
    theme: state.settings.settings.isTheme,
  };
};

const HeaderContainer = connect(mapStatetoProps)(Header);

export default HeaderContainer;
