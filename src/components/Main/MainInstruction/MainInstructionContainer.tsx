import MainInstruction from "./MainInstruction";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
  };
};

const MainInstructionContainer = connect(mapStatetoProps)(MainInstruction);

export default MainInstructionContainer;
