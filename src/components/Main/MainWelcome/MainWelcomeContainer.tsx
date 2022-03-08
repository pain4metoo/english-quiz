import MainWelcome from "./MainWelcome";
import {
  addNameActionCreator,
  updateNameTextActionCreator,
  validNameActionCreator,
} from "../../../redux/reducers/reducerName";
import { addLevelActionCreator } from "../../../redux/reducers/reducerLevel";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    name: state.name,
    url: state.name.url,
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
  };
};

export let mapDispatchToProps = (dispatch: any) => {
  return {
    addName: () => {
      dispatch(addNameActionCreator());
    },
    updateText: (body: string) => {
      dispatch(updateNameTextActionCreator(body));
    },
    validName: (length: number) => {
      dispatch(validNameActionCreator(length));
    },
    updateLevel: (level: string) => {
      dispatch(addLevelActionCreator(level));
    },
  };
};

const MainWelcomeContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainWelcome);

export default MainWelcomeContainer;
