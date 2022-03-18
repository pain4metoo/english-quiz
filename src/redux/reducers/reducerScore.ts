import { getLocalPreviusAnswer } from "../../services/auth.service";
import { getData } from "./../../api/api";
import {
  answersCategoryTranslate,
  getLocalAnswersCategory,
  answersCategory,
} from "../../services/auth.service";

const ADD_DATA = "ADD_DATA";
const ADD_CATEGORY = "ADD_CATEGORY";
interface Score {
  data: object;
  answers: object;
  category: string;
}

const initialState: Score = {
  data: {},
  answers: getLocalPreviusAnswer,
  category: getLocalAnswersCategory,
};

const scoreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.data,
      };
    case ADD_CATEGORY:
      answersCategoryTranslate(action.category);
      answersCategory(action.category);
      return {
        ...state,
        category: action.category,
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

export default scoreReducer;
