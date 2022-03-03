let CHANGE_LEVEL = "CHANGE_LEVEL";

interface Level {
  level: string;
}

const initialState: Level = {
  level: "Начальный",
};

const levelReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "CHANGE_LEVEL":
      let level = {
        level: state.level,
      };
      stateCopy.level = level.level;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const updateLevelActionCreator = (text: string) => ({
  type: CHANGE_LEVEL,
  level: text,
});

export default levelReducer;
