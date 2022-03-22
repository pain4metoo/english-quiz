import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    theme: state.settings.settings.isTheme,
  };
};

const NavbarContainer = connect(mapStatetoProps)(Navbar);

export default NavbarContainer;
