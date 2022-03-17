import MainScoreAnswers from "./MainScoreAnswers";
import { connect } from "react-redux";

let mapStatetoProps = (state: any) => {
  return {};
};

const MainScoreAnswersContainer = connect(mapStatetoProps)(MainScoreAnswers);

export default MainScoreAnswersContainer;
