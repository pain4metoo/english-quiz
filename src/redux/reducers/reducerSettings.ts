const ANIM_FLAG = "ANIM_FLAG";
const THEME_FLAG = "THEME_FLAG";
const TYPE_ANIM = "TYPE_ANIM";
const SOUND_FLAG = "SOUND_FLAG";
const NAME_FLAG = "NAME_FLAG";
const LEVEL_FLAG = "LEVEL_FLAG";

interface Settings {
  settings: any;
}

const initialState: Settings = {
  settings: {
    isAnim: false,
    isTheme: false,
    isTypeAnim: false,
    isSound: false,
    isName: false,
    isLevel: false,
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

export const isTypeAnimFlagActionCreator = (flag: boolean) => ({
  type: TYPE_ANIM,
  flag: flag,
});

export const isSoundFlagActionCreator = (flag: boolean) => ({
  type: SOUND_FLAG,
  flag: flag,
});

export const isNameFlagActionCreator = (flag: boolean) => ({
  type: NAME_FLAG,
  flag: flag,
});

export const isLevelFlagActionCreator = (flag: boolean) => ({
  type: LEVEL_FLAG,
  flag: flag,
});

export default settingsReducer;
