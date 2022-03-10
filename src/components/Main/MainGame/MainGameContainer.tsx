import MainGame from "./MainGame";
import { connect } from "react-redux";
import { addSoundActionCreator } from "./../../../redux/reducers/reducerGame";

let mapStateToProps = (state: any) => {
  return {
    data: state.data,
    category: state.category.category,
    url: state.url,
    previousAnswer: state.previousAnswer,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addSound: (value: string) => {
      dispatch(addSoundActionCreator(value));
    },
  };
};

const MainGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainGame);

export default MainGameContainer;
