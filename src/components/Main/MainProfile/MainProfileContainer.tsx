import MainProfile from "./MainProfile";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    name: state.name,
    stage: state.stage,
  };
};

const MainProfileContainer = connect(mapStatetoProps)(MainProfile);

export default MainProfileContainer;
