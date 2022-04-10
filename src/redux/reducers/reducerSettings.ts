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
const LEVEL_FLAG = "LEVEL_FLAG";
const NAME_FLAG = "NAME_FLAG";
const SAVE_SETTINGS = "SAVE_SETTINGS";

interface Settings {
  isAnim: boolean;
  isTheme: boolean;
  isName: boolean;
  isLevel: boolean;
  name: string;
  level: string;
  newLevel: string;
  newName: string;
  saveSet: boolean;
}

const initialState: Settings = {
  isAnim: false,
  isTheme: false,
  isName: false,
  isLevel: false,
  name: getLocalName,
  newName: "",
  level: getLocalLevel,
  newLevel: "",
  saveSet: false,
};

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ANIM_FLAG:
      return {
        ...state,
        isAnim: action.flag,
      };
    case THEME_FLAG:
      return {
        ...state,
        isTheme: action.flag,
      };
    case NAME_FLAG:
      return {
        ...state,
        isName: action.flag,
      };
    case LEVEL_FLAG:
      return {
        ...state,
        isLevel: action.flag,
      };
    case CHANGE_NAME:
      return {
        ...state,
        isName: true,
        newName: action.name,
      };
    case CHANGE_LEVEL:
      return {
        ...state,
        isLevel: true,
        newLevel: action.level,
      };

    case SAVE_SETTINGS:
      if (state.isName) {
        addLocalUser(state.newName);
      }
      if (state.isLevel) {
        addLocalLevel(state.newLevel);
      }
      return {
        ...state,
        newName: state.newName,
        newLevel: state.newLevel,
        isAnim: false,
        isTheme: false,
        isName: false,
        isLevel: false,
        saveSet: true,
      };
    default:
      return state;
  }
};

export const saveSettingsActionCreator = () => ({
  type: SAVE_SETTINGS,
});

export const isLevelFlagActionCreator = (flag: boolean) => ({
  type: LEVEL_FLAG,
  flag: flag,
});

export const isNameFlagActionCreator = (flag: boolean) => ({
  type: NAME_FLAG,
  flag: flag,
});

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
