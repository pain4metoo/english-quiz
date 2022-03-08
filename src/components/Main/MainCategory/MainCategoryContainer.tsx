import MainCategory from "./MainCategory";
import { connect } from "react-redux";
import { addCategoryReducer } from "./../../../redux/reducers/reducerCategory";

let mapStatetoProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addCategory: (category: string) => {
      dispatch(addCategoryReducer(category));
    },
  };
};

const MainCategoryContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainCategory);

export default MainCategoryContainer;
