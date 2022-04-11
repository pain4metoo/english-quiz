import MainInstruction from "./MainInstruction";
import { connect } from "react-redux";
import { changeThemeActionCreator } from "../../../redux/reducers/reducerInstruction";

let mapStatetoProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
    typeTheme: state.instruction.typeTheme,
    quest: state.instruction.quest,
    ans: state.instruction.ans,
    answersFAQ: state.instruction.answersFAQ,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    changeTheme: (theme: string) => {
      dispatch(changeThemeActionCreator(theme));
    },
  };
};

const MainInstructionContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainInstruction);

export default MainInstructionContainer;
