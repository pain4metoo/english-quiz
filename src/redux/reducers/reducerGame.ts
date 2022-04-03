import { getData } from "../../api/api";
import { getLocalPreviusAnswer, store } from "../../services/auth.service";

const ADD_CATEGORY = "ADD_CATEGORY";
const ADD_DATA = "ADD_DATA";
const ADD_ANSWER = "ADD_ANSWER";
const UPDATE_ANSWER = "UPDATE_ANSWER";
const FETCHING = "FETCHING";
const ADD_TRACK = "ADD_TRACK";
const CHANGE_ANIM = "CHANGE_ANIM";

interface Game {
  data: any;
  category: string;
  categoryTranslate: string;
  newAnswerText: string;
  answer: string;
  isFetching: boolean;
  src: string;
  isPlay: boolean;
  previusNumber: number;
  isAnswer: boolean;
  showAnswer: boolean;
  previousAnswers: any;
  isRoundEnd: boolean;
  isAnimPlay: boolean;
}

const initialState: Game = {
  data: {},
  category: "",
  categoryTranslate: "",
  newAnswerText: "",
  answer: "",
  isFetching: true,
  src: "",
  isPlay: false,
  previusNumber: 0,
  isAnswer: false,
  showAnswer: false,
  previousAnswers: getLocalPreviusAnswer,
  isRoundEnd: false,
  isAnimPlay: false,
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CATEGORY:
      let categoryTranslate: string = "";
      if (action.category === "noun") {
        categoryTranslate = "Существительные";
      } else if (action.category === "adjective") {
        categoryTranslate = "Прилагательные";
      } else if (action.category === "verb") {
        categoryTranslate = "Глаголы";
      } else if (action.category === "other") {
        categoryTranslate = "Другое";
      }
      return {
        ...state,
        category: action.category,
        categoryTranslate: categoryTranslate,
        showAnswer: false,
      };

    case ADD_DATA:
      return {
        ...state,
        data: action.data,
      };
    case UPDATE_ANSWER:
      return {
        ...state,
        newAnswerText: action.newAnswerText,
        showAnswer: false,
      };

    case ADD_ANSWER:
      let trueAnswer = state.data[state.category][state.previusNumber].eng;
      let russianAnswer = state.data[state.category][state.previusNumber].rus;
      let currentAnswer = state.newAnswerText;

      if (trueAnswer === currentAnswer) {
        state.previousAnswers[state.category].push(state.previusNumber);
        store.set("answers", state.previousAnswers);
        let answer = `${currentAnswer} - ${russianAnswer}`;

        return {
          ...state,
          isAnswer: true,
          answer: answer,
          newAnswerText: "",
          showAnswer: true,
        };
      }
      return {
        ...state,
        answer: state.newAnswerText,
        isAnswer: false,
        showAnswer: false,
      };
    case FETCHING:
      return {
        ...state,
        isFetching: action.flag,
      };
    case ADD_TRACK:
      let category = state.category;
      let length = state.data[category].length;
      let randomCount: number = Math.floor(Math.random() * length);

      if (state.previousAnswers[category].includes(randomCount)) {
        for (let i = 0; i <= length; i++) {
          if (!state.previousAnswers[category].includes(i)) {
            randomCount = i;
            break;
          }
        }
      }

      state.previusNumber = randomCount;

      if (randomCount === length) {
        return {
          ...state,
          isRoundEnd: true,
          category: state.category,
        };
      }
      let url = state.data[category][randomCount].track;

      console.log(url);

      let src = `https://raw.githubusercontent.com/pain4metoo/words-data/master/${category}/${url}.mp3`;
      return {
        ...state,
        src: src,
        isAnswer: false,
        isRoundEnd: false,
        isPlay: true,
      };
    case CHANGE_ANIM:
      return {
        ...state,
        isAnimPlay: action.flag,
      };

    default:
      return state;
  }
};

export const animStateActionCreator = (flag: boolean) => ({
  type: CHANGE_ANIM,
  flag: flag,
});

export const addCategoryActionCreator = (category: string) => ({
  type: ADD_CATEGORY,
  category: category,
});

export const addDataAnswersActionCreator = (data: object) => ({
  type: ADD_DATA,
  data: data,
});

export const addAnswerActionCreator = () => ({
  type: ADD_ANSWER,
});

export const updateAnswerActionCreator = (text: string) => ({
  type: UPDATE_ANSWER,
  newAnswerText: text,
});

export const fetchingActionCreator = (flag: boolean) => ({
  type: FETCHING,
  flag: flag,
});

export const addSoundActionCreator = () => ({
  type: ADD_TRACK,
});

export const getSoundDataThunkActionCreator = (dispatch: any) => {
  getData().then((response: any) => {
    dispatch(fetchingActionCreator(false));
    dispatch(addDataAnswersActionCreator(response));
    dispatch(addSoundActionCreator());
  });
};

export const getNewSoundDataThunkActionCreator = (dispatch: any) => {
  getData().then(() => {
    dispatch(addSoundActionCreator());
  });
};

export default gameReducer;
