import MainProfile from "./MainProfile";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {
    name: state.name,
    stage: state.stage,
    isAuthLevel: state.stage.isAuthLevel,
    isAuthName: state.name.isAuthName,
    score: state.game.previousAnswers,
    data: state.score.data,
  };
};

const MainProfileContainer = connect(mapStatetoProps)(MainProfile);

export default MainProfileContainer;
