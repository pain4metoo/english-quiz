import MainScoreAnswers from "./MainScoreAnswers";
import { connect } from "react-redux";
import {
  getSoundDataThunkActionCreator,
  addCategoryActionCreator,
  getAnswersDataActionCreator,
  getPagesActionCreator,
} from "./../../../../redux/reducers/reducerAnswers";

let mapStatetoProps = (state: any) => {
  return {
    data: state.answers.data,
    answers: state.answers.answers,
    category: state.score.category,
    categoryTranslate: state.answers.categoryTranslate,
    currentCategory: state.answers.currentCategory,
    pages: state.answers.pages,
    interval: state.answers.interval,
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
    getPages: () => {
      dispatch(getPagesActionCreator());
    },
    getWordsAnswers: (page: number) => {
      dispatch(getAnswersDataActionCreator(page));
    },
  };
};

const MainScoreAnswersContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainScoreAnswers);

export default MainScoreAnswersContainer;
