import MainScore from "./MainScore";
import { connect } from "react-redux";

let mapStateToProps = (state: any) => {
  return {
    data: state.game.data,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {};
};

const MainScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScore);

export default MainScoreContainer;
