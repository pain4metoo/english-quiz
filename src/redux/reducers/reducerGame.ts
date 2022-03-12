const ADD_ANSWER = "ADD_ANSWER";
const UPDATE_ANSWER = "UPDATE_ANSWER";
const ADD_CURRENT_SRC = "ADD_CURRENT_SRC";
const ADD_CATEGORY = "ADD_CATEGORY";

interface Game {
  answerText: string;
  newAnswerText: string;
  trueAnswer: string;
  currentSrc: string;
  category: string;
  isAnswer: boolean | null;
  previousAnswer: [];
  showAnswer: any;
}

const initialState: Game = {
  answerText: "",
  newAnswerText: "",
  trueAnswer: "",
  currentSrc: "",
  category: "",
  isAnswer: null,
  previousAnswer: [],
  showAnswer: "",
};

const getRandomNumber = (arr: any) => {
  let random = Math.ceil(Math.random() * 10);
  let changeTypeNumber = String(random);
  if (!arr.includes(changeTypeNumber)) {
    return random;
  } else {
    let randomCount: number = getRandomNumber(arr);

    return randomCount;
  }
};

const getData = async () => {
  let sounds =
    "https://raw.githubusercontent.com/pain4metoo/words-data/master/words-data.json";

  const fetchSounds = await fetch(sounds);
  const data = await fetchSounds.json();

  return data;
};

const gameReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD_ANSWER":
      stateCopy.answerText = stateCopy.newAnswerText;
      if (stateCopy.showAnswer === stateCopy.answerText) {
        getData().then((value) => {
          stateCopy.showAnswer =
            value[stateCopy.category][stateCopy.trueAnswer - 1].eng;
        });

        if (!stateCopy.previousAnswer.includes(stateCopy.trueAnswer)) {
          stateCopy.previousAnswer.push(stateCopy.trueAnswer);
        }
        let previousAnswerArr = stateCopy.previousAnswer;
        let random = getRandomNumber(previousAnswerArr);
        stateCopy.trueAnswer = String(random);
        let url = `https://raw.githubusercontent.com/pain4metoo/words-data/master/${stateCopy.category}/${random}.mp3`;
        stateCopy.currentSrc = url;
        stateCopy.isAnswer = true;
      } else {
        stateCopy.isAnswer = false;
      }
      return stateCopy;

    case "UPDATE_ANSWER":
      stateCopy.newAnswerText = action.newAnswerText;
      stateCopy.isAnswer = false;
      return stateCopy;

    case "ADD_CURRENT_SRC":
      let previousAnswerArr = stateCopy.previousAnswer;
      let randomCount = getRandomNumber(previousAnswerArr);
      let url = `https://raw.githubusercontent.com/pain4metoo/words-data/master/${stateCopy.category}/${randomCount}.mp3`;
      stateCopy.trueAnswer = String(randomCount);
      
      getData().then((value) => {
        stateCopy.showAnswer =
          value[stateCopy.category][stateCopy.trueAnswer - 1].eng;
      });
      stateCopy.currentSrc = url;
      return stateCopy;

    case "ADD_CATEGORY":
      stateCopy.category = action.category;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const addAnswerTextActionCreator = () => ({ type: ADD_ANSWER });

export const updateAnswerTextActionCreator = (text: string) => ({
  type: UPDATE_ANSWER,
  newAnswerText: text,
});

export const addCurrentSrcActionCreator = () => ({
  type: ADD_CURRENT_SRC,
});

export const addCategoryActionCreator = (category: string) => ({
  type: ADD_CATEGORY,
  category: category,
});

export default gameReducer;
