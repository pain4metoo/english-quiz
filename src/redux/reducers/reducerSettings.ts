import { addLocalUser, addLocalLevel } from "../../services/auth.service";

const ANIM_FLAG = "ANIM_FLAG";
const THEME_FLAG = "THEME_FLAG";
const TYPE_ANIM = "TYPE_ANIM";
const SOUND_FLAG = "SOUND_FLAG";
const NAME_FLAG = "NAME_FLAG";
const LEVEL_FLAG = "LEVEL_FLAG";

const UPDATE_TEXT = "UPDATE_TEXT";
const ADD_NAME = "ADD_NAME";
const ADD_LEVEL = "ADD_LEVEL";
const SAVE_LEVEL = "SAVE_LEVEL";

interface Settings {
  settings: any;
}

const initialState: Settings = {
  settings: {
    isAnim: false,
    isTheme: false,
  },
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

export default settingsReducer;
