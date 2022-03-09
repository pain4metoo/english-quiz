const NOUN = "NOUN";
const ADJECTIVE = "ADJECTIVE";
const VERB = "VERB";
const OTHER = "OTHER";

interface Game {}

const initialState: Game = {};

const gameReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "NOUN":
      return stateCopy;
    case "ADJECTIVE":
      return stateCopy;
    case "VERB":
      return stateCopy;
    case "OTHER":
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const addAnswerCationCreator = (type: string, answer: string) => ({
  type: type,
  answer: answer,
});

export default gameReducer;
