import MainScoreAnswers from "./MainScoreAnswers";
import { connect } from "react-redux";
import {
  getSoundDataThunkActionCreator,
  addCategoryActionCreator,
} from "./../../../../redux/reducers/reducerAnswers";

let mapStatetoProps = (state: any) => {
  return {
    category: state.score.category,
    categoryTranslate: state.answers.categoryTranslate,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    getSoundDataThunk: () => {
      getSoundDataThunkActionCreator(dispatch);
    },
    changeCategory: (category: string) => {
      dispatch(addCategoryActionCreator(category));
    },
  };
};

const MainScoreAnswersContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainScoreAnswers);

export default MainScoreAnswersContainer;
