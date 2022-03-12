import MainGame from "./MainGame";
import { connect } from "react-redux";
import {
  addAnswerTextActionCreator,
  updateAnswerTextActionCreator,
  addCurrentSrcActionCreator,
  addCategoryActionCreator,
} from "./../../../redux/reducers/reducerGame";

let mapStateToProps = (state: any) => {
  return {
    data: state.game.data,
    newAnswerText: state.game.newAnswerText,
    category: state.category.category,
    currentSrc: state.game.currentSrc,
    isAnswer: state.game.isAnswer,
    trueAnswer: state.game.trueAnswer,
    showAnswer: state.game.showAnswer,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addAnswer: () => {
      dispatch(addAnswerTextActionCreator());
    },
    updateAnswer: (text: string) => {
      dispatch(updateAnswerTextActionCreator(text));
    },
    addCurrentSrc: () => {
      dispatch(addCurrentSrcActionCreator());
    },
    addCategory: (category: string) => {
      dispatch(addCategoryActionCreator(category));
    },
  };
};

const MainGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainGame);

export default MainGameContainer;
