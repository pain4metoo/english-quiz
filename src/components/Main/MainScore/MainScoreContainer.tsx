import MainScore from "./MainScore";
import { connect } from "react-redux";

let mapStateToProps = (state: any) => {
  return {
    answers: state.score.answers,
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
