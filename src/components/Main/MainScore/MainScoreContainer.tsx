import MainScore from "./MainScore";
import { connect } from "react-redux";
import { getSoundDataThunkActionCreator } from "./../../../redux/reducers/reducerScore";

let mapStateToProps = (state: any) => {
  return {
    data: state.score.data,
    answers: state.score.answers,
    categoryLength: state.score.categoryLength,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    getSoundDataThunk: () => {
      getSoundDataThunkActionCreator(dispatch);
    },
  };
};

const MainScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScore);

export default MainScoreContainer;
