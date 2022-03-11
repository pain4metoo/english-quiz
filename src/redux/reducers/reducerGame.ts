const ADD_ANSWER = "ADD_ANSWER";
const UPDATE_ANSWER = "UPDATE_ANSWER";
const ADD_TRUE_ANSWER = "ADD_TRUE_ANSWER";

const getData = async () => {
  let sounds =
    "https://raw.githubusercontent.com/pain4metoo/words-data/master/words-data.json";

  const fetchSounds = await fetch(sounds);
  const data = await fetchSounds.json();
  return data;
};

interface Game {
  data: any;
  answerText: string;
  newAnswerText: string;
  trueAnswer: string;
  answersArr: [];
  isAnswer: boolean;
}

const initialState: Game = {
  data: getData(),
  answerText: "",
  newAnswerText: "",
  trueAnswer: "",
  answersArr: [],
  isAnswer: false,
};

const gameReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD_ANSWER":
      stateCopy.answerText = state.newAnswerText;
      stateCopy.answersArr.push(state.answerText);
      if (
        stateCopy.trueAnswer === stateCopy.answerText &&
        stateCopy.trueAnswer !== ""
      ) {
        stateCopy.isAnswer = true;
      } else {
        stateCopy.isAnswer = false;
      }
      return stateCopy;

    case "UPDATE_ANSWER":
      stateCopy.newAnswerText = action.newAnswerText;
      return stateCopy;

    case "ADD_TRUE_ANSWER":
      stateCopy.trueAnswer = action.trueAnswer;
      return state;
    default:
      return stateCopy;
  }
};

export const addAnswerTextActionCreator = () => ({ type: ADD_ANSWER });

export const updateAnswerTextActionCreator = (text: string) => ({
  type: UPDATE_ANSWER,
  newAnswerText: text,
});

export const addTrueAnswerActionCreator = (text: string) => ({
  type: ADD_TRUE_ANSWER,
  trueAnswer: text,
});

export default gameReducer;
