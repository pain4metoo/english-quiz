import { getData } from "../../api/api";
import {
  getLocalAnswersCategory,
  answersCategoryTranslate,
  getLocalCurrentAnswersCategory,
  addLocalData,
  getLocalData,
  getLocalPreviusAnswer,
} from "../../services/auth.service";

const ADD_CATEGORY = "ADD_CATEGORY";
const ADD_DATA = "ADD_DATA";
const GET_ANSWERS = "GET_ANSWERS";
const GET_PAGES = "GET_PAGES";
const ADD_SOUND = "ADD_SOUND";
const CHANGE_SOUND = "CHANGE_SOUND";

interface Answers {
  data: any;
  categoryTranslate: string;
  currentCategory: string;
  pageSize: number;
  answers: any;
  pages: Array<number>;
  interval: Array<number>;
  audioSrc: string;
  audioPlay: boolean;
  currentPage: number;
}

const initialState: Answers = {
  data: getLocalData,
  currentCategory: getLocalCurrentAnswersCategory,
  categoryTranslate: getLocalAnswersCategory,
  pageSize: 18,
  answers: getLocalPreviusAnswer,
  pages: [],
  interval: [],
  audioSrc: "",
  audioPlay: false,
  currentPage: 1,
};

const answersReducer = (state = initialState, action: any) => {
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
      answersCategoryTranslate(categoryTranslate);
      return {
        ...state,
        currentCategory: action.category,
        categoryTranslate: categoryTranslate,
      };

    case ADD_DATA:
      addLocalData(action.data);
      return {
        ...state,
        data: action.data,
      };
    case GET_PAGES:
      let pagesCount = Math.ceil(
        state.answers[state.currentCategory].length / state.pageSize
      );

      let pages = [];

      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
      state.interval = [0, 18];
      return {
        ...state,
        pages: pages,
        interval: [0, 18],
      };
    case GET_ANSWERS:
      if (action.page === 0) {
        return {
          ...state,
          interval: [0, 18],
          currentPage: 1,
        };
      }
      let intervalStart = action.page * 18;
      let intervalEnd = action.page * 18 + 18;
      return {
        ...state,
        interval: [intervalStart, intervalEnd],
        currentPage: action.page + 1,
      };
    case ADD_SOUND:
      let src = `https://raw.githubusercontent.com/pain4metoo/words-data/master/${state.currentCategory}/${action.track}.mp3`;
      return {
        ...state,
        audioSrc: src,
        audioPlay: true,
      };
    case CHANGE_SOUND:
      return {
        ...state,
        audioPlay: false,
      };
    default:
      return state;
  }
};

export const addCategoryActionCreator = (category: string) => ({
  type: ADD_CATEGORY,
  category: category,
});

export const addDataAnswersActionCreator = (data: object) => ({
  type: ADD_DATA,
  data: data,
});

export const getSoundDataThunkActionCreator = (dispatch: any) => {
  getData().then((response: any) => {
    dispatch(addDataAnswersActionCreator(response));
  });
};

export const getAnswersDataActionCreator = (page: number) => ({
  type: GET_ANSWERS,
  page: page,
});

export const getPagesActionCreator = () => ({
  type: GET_PAGES,
});

export const getNewSoundActionCreator = (name: string) => ({
  type: ADD_SOUND,
  track: name,
});

export const changeSoundActionCreator = () => ({
  type: CHANGE_SOUND,
});

export default answersReducer;
