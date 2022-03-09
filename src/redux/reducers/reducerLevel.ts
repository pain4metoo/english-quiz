import {
  addLocalLevel,
  getLocalLevel,
  getLocalAuthLevel,
  isAuthLevel,
} from "./../../services/auth.service";

const CHANGE_LEVEL = "CHANGE_LEVEL";

interface Level {
  stage: string | null;
  isAuthLevel: boolean;
}

const initialState: Level = {
  stage: getLocalLevel,
  isAuthLevel: getLocalAuthLevel,
};

const levelReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "CHANGE_LEVEL":
      let level = (stateCopy.stage = action.stage);
      addLocalLevel(level);
      stateCopy.isAuthLevel = true;
      isAuthLevel(true);
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const addLevelActionCreator = (text: string) => ({
  type: CHANGE_LEVEL,
  stage: text,
});

export default levelReducer;
