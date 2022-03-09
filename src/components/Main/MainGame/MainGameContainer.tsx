import MainGame from "./MainGame";
import { connect } from "react-redux";
import { addAnswerCationCreator } from "./../../../redux/reducers/reducerGame";

let mapStateToProps = (state: any) => {
  return {
    category: state.category.category,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addAnswer: (type: string, answer: string) => {
      dispatch(addAnswerCationCreator(type, answer));
    },
  };
};

const MainGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainGame);

export default MainGameContainer;
