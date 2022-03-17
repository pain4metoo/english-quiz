import MainScore from "./MainScore";
import { connect } from "react-redux";
import {
  getSoundDataThunkActionCreator,
  addCategoryActionCreator,
} from "./../../../redux/reducers/reducerScore";

let mapStateToProps = (state: any) => {
  return {
    data: state.score.data,
    answers: state.score.answers,
    categoryLength: state.score.categoryLength,
    category: state.score.category,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    changeCategory: (category: string) => {
      dispatch(addCategoryActionCreator(category));
    },
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
