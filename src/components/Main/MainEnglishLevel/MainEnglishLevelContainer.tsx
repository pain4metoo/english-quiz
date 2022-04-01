import MainEnglishLevel from "./MainEnglishLevel";
import { addLevelActionCreator } from "../../../redux/reducers/reducerLevel";
import { connect } from "react-redux";

let mapStateToProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
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
  mapStateToProps,
  mapDispatchToProps
)(MainEnglishLevel);

export default MainEnglishLevelContainer;
