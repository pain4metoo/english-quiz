import {
  addLocalUser,
  getLocalName,
  addLocalLevel,
  getLocalLevel,
} from "../../services/auth.service";

const ANIM_FLAG = "ANIM_FLAG";
const THEME_FLAG = "THEME_FLAG";
const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_LEVEL = "CHANGE_LEVEL";

interface Settings {
  settings: any;
  name: string;
  level: string;
}

const initialState: Settings = {
  settings: {
    isAnim: false,
    isTheme: false,
  },
  name: getLocalName,
  level: getLocalLevel,
};

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ANIM_FLAG:
      return {
        ...state,
        isAnim: (state.settings.isAnim = action.flag),
      };
    case THEME_FLAG:
      return {
        ...state,
        isTheme: (state.settings.isTheme = action.flag),
      };
    case CHANGE_NAME:
      addLocalUser(action.name);
      return {
        ...state,
        name: action.name,
      };
    case CHANGE_LEVEL:
      addLocalLevel(action.level);
      return {
        ...state,
        level: action.level,
      };
    default:
      return state;
  }
};

export const isAnimFlagActionCreator = (flag: boolean) => ({
  type: ANIM_FLAG,
  flag: flag,
});

export const isThemeFlagActionCreator = (flag: boolean) => ({
  type: THEME_FLAG,
  flag: flag,
});

export const changeNameActionCreator = (name: string) => ({
  type: CHANGE_NAME,
  name: name,
});

export const changeLevelActionCreator = (level: string) => ({
  type: CHANGE_LEVEL,
  level: level,
});

export default settingsReducer;
