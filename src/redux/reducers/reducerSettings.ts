import {
  removeProgress,
  addLocalUser,
  getLocalName,
  addLocalLevel,
  getLocalLevel,
  addLocalVolume,
  getLocalVolumeValue,
  getLocalAnim,
  addLocalAnim,
} from "../../services/auth.service";

const ANIM_FLAG = "ANIM_FLAG";
const THEME_FLAG = "THEME_FLAG";
const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_LEVEL_SET = "CHANGE_LEVEL_SET";
const LEVEL_FLAG = "LEVEL_FLAG";
const NAME_FLAG = "NAME_FLAG";
const SAVE_SETTINGS = "SAVE_SETTINGS";
const VOLUME_FLAG = "VOLUME_FLAG";
const CHANGE_VOLUME = "CHANGE_VOLUME";
const SHOW_LEVELS = "SHOW_LEVELS";
const CLEAR_SETTINGS = "CLEAR_SETTINGS";
const RESET_PROGRESS = "RESET_PROGRESS";
const ACCEPT_RESET = "ACCEPT_RESET";

interface Settings {
  isAnim: boolean;
  isTheme: boolean;
  isName: boolean;
  isLevel: boolean;
  isVolume: boolean;
  volume: number;
  prevVolume: number;
  name: string;
  level: string;
  newLevel: string;
  newName: string;
  showLevels: boolean;
  clearSet: boolean;
  resetProgress: boolean;
  acceptReset: boolean;
  showWarning: boolean;
  showPopup: boolean;
}

const initialState: Settings = {
  isAnim: getLocalAnim || false,
  isTheme: false,
  isName: false,
  isLevel: false,
  isVolume: false,
  volume: getLocalVolumeValue || 30,
  prevVolume: getLocalVolumeValue,
  name: getLocalName,
  newName: "",
  level: getLocalLevel,
  newLevel: "",
  showLevels: false,
  clearSet: false,
  resetProgress: false,
  acceptReset: false,
  showWarning: false,
  showPopup: false,
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
    case VOLUME_FLAG:
      return {
        ...state,
        isVolume: action.flag,
      };
    case CHANGE_NAME:
      return {
        ...state,
        newName: action.name,
      };
    case CHANGE_LEVEL_SET:
      return {
        ...state,
        newLevel: action.level,
      };
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.volume,
        prevVolume: state.volume,
      };

    case "CLOSE_POPUP":
      return {
        ...state,
        showPopup: action.flag,
        clearSet: false,
      };
    case RESET_PROGRESS:
      if (state.showWarning && !action.flag) {
        return {
          ...state,
          resetProgress: action.flag,
          showWarning: false,
        };
      }
      return {
        ...state,
        resetProgress: action.flag,
      };
    case SAVE_SETTINGS:
      if (state.resetProgress && state.acceptReset && !state.showWarning) {
        removeProgress();
        setTimeout(() => {
          window.location.reload();
        }, 800);
      }
      if (action.flag) {
        addLocalVolume(30);
        return {
          ...state,
          newName: state.newName,
          newLevel: state.newLevel,
          isAnim: false,
          isTheme: false,
          volume: 30,
          isVolume: false,
          isName: false,
          isLevel: false,
          clearSet: true,
          showWarning: false,
          resetProgress: false,
          acceptReset: false,
        };
      } else {
        if (state.isName) {
          addLocalUser(state.newName);
        }
        if (state.isLevel) {
          addLocalLevel(state.newLevel);
        }
        if (state.isVolume) {
          addLocalVolume(state.volume);
        }
        if (state.resetProgress && !state.acceptReset) {
          return {
            ...state,
            showWarning: true,
          };
        }

        addLocalAnim(state.isAnim);

        return {
          ...state,
          newName: state.newName,
          newLevel: state.newLevel,
          isAnim: state.isAnim,
          level: state.newLevel,
          isTheme: false,
          isVolume: false,
          isName: false,
          isLevel: false,
          acceptReset: false,
          showWarning: false,
          showPopup: true,
        };
      }

    case SHOW_LEVELS:
      return {
        ...state,
        showLevels: action.flag,
      };
    case CLEAR_SETTINGS:
      return {
        ...state,
        clearSet: true,
        showPopup: true,
      };
    case ACCEPT_RESET:
      return {
        ...state,
        acceptReset: true,
        showWarning: false,
        resetProgress: true,
      };
    default:
      return state;
  }
};

export const closeSavePopupActionCreator = (flag: boolean) => ({
  type: "CLOSE_POPUP",
  flag: flag,
});

export const acceptResetStoreActionCreator = () => ({
  type: ACCEPT_RESET,
});

export const isResetFlagActionCreator = (flag: boolean) => ({
  type: RESET_PROGRESS,
  flag: flag,
});

export const clearSettingsActionCreator = () => ({
  type: CLEAR_SETTINGS,
});
export const showLevelMenuActionCreator = (flag: boolean) => ({
  type: SHOW_LEVELS,
  flag: flag,
});

export const saveSettingsActionCreator = (flag: boolean) => ({
  type: SAVE_SETTINGS,
  flag: flag,
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

export const isVolumeFlagActionCreator = (flag: boolean) => ({
  type: VOLUME_FLAG,
  flag: flag,
});

export const changeVolumeActionCreator = (volume: number) => ({
  type: CHANGE_VOLUME,
  volume: volume,
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
  type: CHANGE_LEVEL_SET,
  level: level,
});

export default settingsReducer;
