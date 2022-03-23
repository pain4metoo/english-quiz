import MainGame from "./MainGame";
import { connect } from "react-redux";
import {
  addCategoryActionCreator,
  updateAnswerActionCreator,
  addAnswerActionCreator,
  addDataAnswersActionCreator,
  fetchingActionCreator,
  getSoundDataThunkActionCreator,
  getNewSoundDataThunkActionCreator,
} from "./../../../redux/reducers/reducerGame";

let mapStateToProps = (state: any) => {
  return {
    data: state.game.data,
    category: state.category.category,
    categoryTranslate: state.game.categoryTranslate,
    newAnswerText: state.game.newAnswerText,
    answer: state.game.answer,
    isFetching: state.game.isFetching,
    isPlay: state.game.isPlay,
    src: state.game.src,
    isAnswer: state.game.isAnswer,
    showAnswer: state.game.showAnswer,
    isRoundEnd: state.game.isRoundEnd,
    theme: state.settings.settings.isTheme,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addCategory: (category: string) => {
      dispatch(addCategoryActionCreator(category));
    },
    addDataAnswers: (data: Object) => {
      dispatch(addDataAnswersActionCreator(data));
    },
    updateAnswer: (text: string) => {
      dispatch(updateAnswerActionCreator(text));
    },
    addAnswer: () => {
      dispatch(addAnswerActionCreator());
    },
    fetch: (flag: boolean) => {
      dispatch(fetchingActionCreator(flag));
    },
    getSoundDataThunk: () => {
      getSoundDataThunkActionCreator(dispatch);
    },
    getNewSoundDataThunk: () => {
      getNewSoundDataThunkActionCreator(dispatch);
    },
  };
};

const MainGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainGame);

export default MainGameContainer;
