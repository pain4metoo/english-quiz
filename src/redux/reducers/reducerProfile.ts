import {
  addLocalProfileAvatar,
  addLocalCustomValues,
  getLocalCustomValues,
  addLocalCustomValuesObj,
  getLocalCustomValuesObj,
} from "../../services/auth.service";

import { getImages } from "../../api/api";

const SHOW_AVATARS = "SHOW_AVATARS";
const GET_PAGES_AVA = "GET_PAGES_AVA";
const GET_AVATARS = "GET_AVATARS";
const GET_FULL_AVATAR = "GET_FULL_AVATAR";
const IS_PROFILE_AVA = "IS_PROFILE_AVA";
const SHOW_CUSTOM = "SHOW_CUSTOM";
const CUSTOM_AVATAR = "CUSTOM_AVATAR";
const SAVE_CUSTOM = "SAVE_CUSTOM";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

interface customCounts {
  blur: number;
  invert: number;
  sepia: number;
  saturate: number;
  shade: number;
}

interface Profile {
  isShowAvatarMenu: boolean;
  isShowCustomMenu: boolean;
  pages: Array<number>;
  avatars: Array<number>;
  pageSize: number;
  totalPages: number;
  imagesCount: number;
  pageCount: number;
  fullAvaSrc: string;
  profileAvatar: string;
  customValue: customCounts;
  newCustomValues: string;
  isFetching: boolean;
}

const initialState: Profile = {
  isShowAvatarMenu: false,
  isShowCustomMenu: false,
  pages: [],
  avatars: [],
  pageSize: 9,
  totalPages: 56,
  imagesCount: 504,
  pageCount: 1,
  fullAvaSrc: "",
  profileAvatar: "",
  customValue: getLocalCustomValuesObj || {
    blur: 0,
    invert: 0,
    sepia: 0,
    saturate: 0,
    shade: 0,
  },
  newCustomValues: getLocalCustomValues || "",
  isFetching: false,
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_AVATARS:
      return {
        ...state,
        isShowAvatarMenu: action.flag,
      };

    case GET_PAGES_AVA:
      state.pages = [];
      let count = state.pageCount;

      if (action.side && !action.currentPage) {
        if (action.side === "left") {
          if (count > 1) {
            count--;
          } else {
            count = state.totalPages;
          }
        } else if (action.side === "right") {
          if (count < state.totalPages) {
            count++;
          } else {
            count = 1;
          }
        }
        state.pageCount = count;
      } else if (!action.side && action.currentPage) {
        state.pageCount = action.currentPage;
      }

      let center = state.pageCount;
      let left = 2;
      let right = 2;
      if (center === state.totalPages) {
        right = 0;
        left = 4;
      } else if (center === state.totalPages - 1) {
        right = 1;
        left = 3;
      } else if (center === 2) {
        right = 3;
        left = 1;
      } else if (center === 1) {
        right = 4;
        left = 0;
      }
      for (let i = center - left; i <= center + right; i++) {
        state.pages.push(i);
      }
      return {
        ...state,
        pages: state.pages,
      };

    case GET_AVATARS:
      let intervalStart = state.pageCount * state.pageSize;
      let intervalEnd = state.pageCount * state.pageSize + state.pageSize;
      state.avatars = [];
      if (state.pageCount === 1) {
        intervalStart = 1;
        intervalEnd = 10;
      }

      for (let i = intervalStart; i < intervalEnd; i++) {
        state.avatars.push(i);
      }

      return {
        ...state,
        avatars: state.avatars,
      };

    case GET_FULL_AVATAR:
      state.fullAvaSrc = action.src;
      return {
        ...state,
        fullAvaSrc: action.src,
      };

    case IS_PROFILE_AVA:
      if (state.fullAvaSrc) {
        addLocalProfileAvatar(state.fullAvaSrc);
      }
      addLocalCustomValues("");
      addLocalCustomValuesObj({
        blur: 0,
        invert: 0,
        sepia: 0,
        saturate: 0,
        shade: 0,
      });
      return {
        ...state,
        profileAvatar: state.fullAvaSrc,
        isShowAvatarMenu: false,
        newCustomValues: "",
        customValue: {
          blur: 0,
          invert: 0,
          sepia: 0,
          saturate: 0,
          shade: 0,
        },
      };

    case SHOW_CUSTOM:
      return {
        ...state,
        isShowCustomMenu: action.flag,
        newCustomValues: state.newCustomValues,
      };

    case CUSTOM_AVATAR:
      let copyCustomValue = {
        blur: state.customValue.blur,
        invert: state.customValue.invert,
        sepia: state.customValue.sepia,
        saturate: state.customValue.saturate,
        shade: state.customValue.shade,
      };
      if (action.target.name === "blur") {
        copyCustomValue.blur = action.target.value;
      } else if (action.target.name === "invert") {
        copyCustomValue.invert = action.target.value;
      } else if (action.target.name === "sepia") {
        copyCustomValue.sepia = action.target.value;
      } else if (action.target.name === "saturate") {
        copyCustomValue.saturate = action.target.value;
      } else if (action.target.name === "shade") {
        copyCustomValue.shade = action.target.value;
      }

      return {
        ...state,
        customValue: copyCustomValue,
      };

    case SAVE_CUSTOM:
      addLocalCustomValues(action.values);
      addLocalCustomValuesObj(state.customValue);
      return {
        ...state,
        newCustomValues: action.values,
        isShowCustomMenu: false,
      };

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.flag,
      };
    default:
      return state;
  }
};

export const saveAvatarValuesActionCreator = (values: string) => ({
  type: SAVE_CUSTOM,
  values: values,
});

export const customAvatarActionCreator = (target: string) => ({
  type: CUSTOM_AVATAR,
  target: target,
});

export const showCustomActionCreator = (flag: boolean) => ({
  type: SHOW_CUSTOM,
  flag: flag,
});

export const changeProfAvaActionCreator = () => ({
  type: IS_PROFILE_AVA,
});

export const getFullAvaActionCreator = (src: string) => ({
  type: GET_FULL_AVATAR,
  src: src,
});

export const getPagesActionCreator = (
  side: string | null,
  currentPage: number | null
) => ({
  type: GET_PAGES_AVA,
  side: side,
  currentPage: currentPage,
});

export const getAvatarsActionCreator = (response: any) => ({
  type: GET_AVATARS,
  avatars: response,
});
export const showAvatarsActionCreator = (flag: boolean) => ({
  type: SHOW_AVATARS,
  flag: flag,
});

export const toggleIsFetchingActionCreator = (flag: boolean) => ({
  type: TOGGLE_FETCHING,
  flag: flag,
});

export const getImagesActionCreator = (dispatch: any, page: number) => {
  dispatch(toggleIsFetchingActionCreator(true));
  getImages(page).then((response) => {
    dispatch(toggleIsFetchingActionCreator(false));
    dispatch(getAvatarsActionCreator(response));
  });
};

export default profileReducer;
