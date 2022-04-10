import {
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
const CHANGE_LEVEL = "CHANGE_LEVEL";
const LEVEL_FLAG = "LEVEL_FLAG";
const NAME_FLAG = "NAME_FLAG";
const SAVE_SETTINGS = "SAVE_SETTINGS";
const VOLUME_FLAG = "VOLUME_FLAG";
const CHANGE_VOLUME = "CHANGE_VOLUME";

interface Settings {
  isAnim: boolean;
  isTheme: boolean;
  isName: boolean;
  isLevel: boolean;
  isVolume: boolean;
  volume: number;
  name: string;
  level: string;
  newLevel: string;
  newName: string;
  saveSet: boolean;
}

const initialState: Settings = {
  isAnim: getLocalAnim || false,
  isTheme: false,
  isName: false,
  isLevel: false,
  isVolume: false,
  volume: getLocalVolumeValue || 40,
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
    case CHANGE_LEVEL:
      return {
        ...state,
        newLevel: action.level,
      };
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.volume,
      };
    case SAVE_SETTINGS:
      if (state.isName) {
        addLocalUser(state.newName);
      }
      if (state.isLevel) {
        addLocalLevel(state.newLevel);
      }
      if (state.isVolume) {
        addLocalVolume(state.volume);
      }

      addLocalAnim(state.isAnim);

      return {
        ...state,
        newName: state.newName,
        newLevel: state.newLevel,
        isAnim: state.isAnim,
        isTheme: false,
        isVolume: false,
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
  type: CHANGE_LEVEL,
  level: level,
});

export default settingsReducer;
