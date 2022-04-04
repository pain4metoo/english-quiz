const SHOW_AVATARS = "SHOW_AVATARS";

interface Profile {
  isShowAvatarMenu: boolean;
}

const initialState: Profile = {
  isShowAvatarMenu: false,
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_AVATARS:
      return {
        ...state,
        isShowAvatarMenu: action.flag,
      };
    default:
      return state;
  }
};

export const showAvatarsActionCreator = (flag: boolean) => ({
  type: SHOW_AVATARS,
  flag: flag,
});

export default profileReducer;
