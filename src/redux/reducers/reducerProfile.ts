const SHOW_AVATARS = "SHOW_AVATARS";
const GET_PAGES = "GET_PAGES";
const GET_AVATARS = "GET_AVATARS";
const RENDER_AVA = "RENDER_AVA";

interface Profile {
  isShowAvatarMenu: boolean;
  pages: Array<number>;
  avatars: Array<number>;
  pageSize: number;
  imagesCount: number;
  pageCount: number;
  renderAvatar: boolean;
}

const initialState: Profile = {
  isShowAvatarMenu: false,
  pages: [],
  avatars: [],
  pageSize: 9,
  imagesCount: 200,
  pageCount: 1,
  renderAvatar: true,
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_AVATARS:
      return {
        ...state,
        isShowAvatarMenu: action.flag,
      };

    case GET_PAGES:
      let pages: number = Math.ceil(state.imagesCount / state.pageSize);
      state.pages = [];
      let count = state.pageCount;

      if (action.side && !action.currentPage) {
        if (action.side === "left") {
          if (count > 1) {
            count--;
          } else {
            count = 23;
          }
        } else if (action.side === "right") {
          if (count < 23) {
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
      if (center === 23) {
        right = 0;
        left = 4;
      } else if (center === 22) {
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
      let intervalStart = state.pageCount * 9;
      let intervalEnd = state.pageCount * 9 + 9;
      state.avatars = [];
      if (state.pageCount === 1) {
        intervalStart = 1;
        intervalEnd = state.pageCount * 9;
      }

      for (let i = intervalStart; i <= intervalEnd; i++) {
        state.avatars.push(i);
      }
      console.log(state.avatars);
      return {
        ...state,
        avatars: state.avatars,
      };
    case RENDER_AVA:
      return {
        ...state,
        renderAvatar: action.flag,
      };
    default:
      return state;
  }
};

export const renderAvaActionCreator = (flag: boolean) => ({
  type: RENDER_AVA,
  flag: flag,
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
