import MainWelcome from "./MainWelcome";
import {
  addNameActionCreator,
  updateNameTextActionCreator,
  validationName,
} from "../../../redux/reducers/reducerName";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    name: state.name,
    validationName: state.name.login,
    url: state.name.url,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addName: () => {
      dispatch(addNameActionCreator());
    },
    updateText: (body: string) => {
      dispatch(updateNameTextActionCreator(body));
    },
    validation: (length: number) => {
      dispatch(validationName(length));
    },
  };
};

const MainWelcomeContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainWelcome);

export default MainWelcomeContainer;
