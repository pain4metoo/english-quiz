import {
  addLocalLevel,
  getLocalLevel,
  getLocalAuthLevel,
  isAuthLevel,
} from "./../../services/auth.service";

const CHANGE_LEVEL = "CHANGE_LEVEL";

interface Level {
  stage: string;
  isAuthLevel: boolean;
}

const initialState: Level = {
  stage: getLocalLevel,
  isAuthLevel: getLocalAuthLevel,
};

const levelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_LEVEL":
      let level = action.stage;
      addLocalLevel(level);
      isAuthLevel(true);
      return {
        ...state,
        stage: level,
        isAuthLevel: true,
      };
    default:
      return state;
  }
};

export const addLevelActionCreator = (text: string) => ({
  type: CHANGE_LEVEL,
  stage: text,
});

export default levelReducer;
