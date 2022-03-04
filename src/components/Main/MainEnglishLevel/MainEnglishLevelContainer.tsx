import MainEnglishLevel from "./MainEnglishLevel";
import { addLevelActionCreator } from "../../../redux/reducers/reducerLevel";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    stage: state.stage,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addLevel: (body: string) => {
      dispatch(addLevelActionCreator(body));
    },
  };
};

const MainEnglishLevelContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainEnglishLevel);

export default MainEnglishLevelContainer;
