import { getData } from "../../api/api";
import {
  getLocalAnswersCategory,
  answersCategory,
} from "../../services/auth.service";

const ADD_CATEGORY = "ADD_CATEGORY";
const ADD_DATA = "ADD_DATA";

interface Answers {
  data: object;
  categoryTranslate: string;
}

const initialState: Answers = {
  data: {},
  categoryTranslate: getLocalAnswersCategory,
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
      answersCategory(categoryTranslate);
      return {
        ...state,
        categoryTranslate: categoryTranslate,
      };

    case ADD_DATA:
      return {
        ...state,
        data: action.data,
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

export default answersReducer;
