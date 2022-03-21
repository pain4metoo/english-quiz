import MainBackground from "./MainBackground";
import { connect } from "react-redux";

let mapStateToProps = (state: any) => {
  return {
    showAnswer: state.game.showAnswer,
    isAnswer: state.game.isAnswer,
    isAnim: state.settings.settings.isAnim,
  };
};

const MainBackgroundContainer = connect(mapStateToProps)(MainBackground);

export default MainBackgroundContainer;
