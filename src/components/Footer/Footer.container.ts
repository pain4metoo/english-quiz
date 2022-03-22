import Footer from "./Footer";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    theme: state.settings.settings.isTheme,
  };
};

const FooterContainer = connect(mapStatetoProps)(Footer);

export default FooterContainer;
