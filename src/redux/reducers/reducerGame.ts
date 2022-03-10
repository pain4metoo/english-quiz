const NOUN = "NOUN";
const ADJECTIVE = "ADJECTIVE";
const VERB = "VERB";
const OTHER = "OTHER";
const ADD_SOUND = "ADD_SOUND";



interface Game {
  data: any;
  url: string;
  previousAnswer: [];
}

const initialState: Game = {
  data: 'test',
  url: "",
  previousAnswer: [],
};

const gameReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "ADD_SOUND":
      let randomCount = Math.ceil(Math.random() * 10);
      if (!stateCopy.previousAnswer.includes(randomCount)) {
        stateCopy.url = `https://raw.githubusercontent.com/pain4metoo/words-data/master/${action.category}/${randomCount}.mp3`;
      }
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const addSoundActionCreator = (category: string) => ({
  type: ADD_SOUND,
  category: category,
});

export default gameReducer;
