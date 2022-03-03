import MainEnglishLevel from "./MainEnglishLevel";
import { updateLevelActionCreator } from "../../../redux/reducers/reducerLevel";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    level: state.level,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addLevel: (body: string) => {
      dispatch(updateLevelActionCreator(body));
    },
  };
};

const MainEnglishLevelContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainEnglishLevel);

export default MainEnglishLevelContainer;
