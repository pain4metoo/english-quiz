import MainGame from "./MainGame";
import { connect } from "react-redux";
import {
  addAnswerTextActionCreator,
  updateAnswerTextActionCreator,
  addTrueAnswerActionCreator,
} from "./../../../redux/reducers/reducerGame";

let mapStateToProps = (state: any) => {
  return {
    data: state.game.data,
    category: state.category.category,
    answersArr: state.game.answersArr,
    isAnswer: state.game.isAnswer,
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
    addTrueAnswer: (text: string) => {
      dispatch(addTrueAnswerActionCreator(text));
    },
  };
};

const MainGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainGame);

export default MainGameContainer;
