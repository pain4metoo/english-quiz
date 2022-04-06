import { addLocalProfileAvatar } from "../../services/auth.service";

const SHOW_AVATARS = "SHOW_AVATARS";
const GET_PAGES = "GET_PAGES";
const GET_AVATARS = "GET_AVATARS";
const GET_FULL_AVATAR = "GET_FULL_AVATAR";
const IS_PROFILE_AVA = "IS_PROFILE_AVA";

interface Profile {
  isShowAvatarMenu: boolean;
  pages: Array<number>;
  avatars: Array<number>;
  pageSize: number;
  totalPages: number;
  imagesCount: number;
  pageCount: number;
  fullAvaSrc: string;
  profileAvatar: string;
}

const initialState: Profile = {
  isShowAvatarMenu: false,
  pages: [],
  avatars: [],
  pageSize: 9,
  totalPages: 56,
  imagesCount: 504,
  pageCount: 1,
  fullAvaSrc: "",
  profileAvatar: "",
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_AVATARS:
      return {
        ...state,
        isShowAvatarMenu: action.flag,
      };

    case GET_PAGES:
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
      return {
        ...state,
        profileAvatar: state.fullAvaSrc,
        isShowAvatarMenu: false,
      };
    default:
      return state;
  }
};

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
  type: GET_PAGES,
  side: side,
  currentPage: currentPage,
});

export const getAvatarsActionCreator = () => ({
  type: GET_AVATARS,
});
export const showAvatarsActionCreator = (flag: boolean) => ({
  type: SHOW_AVATARS,
  flag: flag,
});

export default profileReducer;
