import { getLocalPreviusAnswer } from "../../services/auth.service";

interface Score {
  answers: object;
}

const initialState: Score = {
  answers: getLocalPreviusAnswer,
};

const scoreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default scoreReducer;
