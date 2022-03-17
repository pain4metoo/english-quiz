import { getLocalPreviusAnswer } from "../../services/auth.service";
import { getData } from "./../../api/api";

const ADD_DATA = "ADD_DATA";

interface Score {
  data: object;
  answers: object;
}

const initialState: Score = {
  data: {},
  answers: getLocalPreviusAnswer,
};

const scoreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

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
