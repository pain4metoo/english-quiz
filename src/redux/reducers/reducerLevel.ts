import { addLocalLevel, getLocalLevel } from "./../../services/auth.service";

let CHANGE_LEVEL = "CHANGE_LEVEL";

interface Level {
  stage: string | null;
}

const initialState: Level = {
  stage: getLocalLevel,
};

const levelReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "CHANGE_LEVEL":
      let level = (stateCopy.stage = action.stage);
      addLocalLevel(level);
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
