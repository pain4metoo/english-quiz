import MainWelcome from "./MainWelcome";
import {
  addNameActionCreator,
  updateNameTextActionCreator,
} from "../../../redux/reducers/reducerName";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    name: state.name,
    newNameText: state.newNameText,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addName: () => {
      dispatch(addNameActionCreator());
    },
    updateText: (text: string) => {
      dispatch(updateNameTextActionCreator);
    },
  };
};

const MainWelcomeContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainWelcome);

export default MainWelcomeContainer;
