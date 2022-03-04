import MainWelcome from "./MainWelcome";
import {
  addNameActionCreator,
  updateNameTextActionCreator,
  changeUrlActionCreator,
} from "../../../redux/reducers/reducerName";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    name: state.name,
    newNameText: state.newNameText,
    url: state.url,
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
    changeUrl: () => {
      dispatch(changeUrlActionCreator());
    },
  };
};

const MainWelcomeContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainWelcome);

export default MainWelcomeContainer;
