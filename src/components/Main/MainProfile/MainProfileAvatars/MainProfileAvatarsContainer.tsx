import { connect } from "react-redux";
import {
  getPagesActionCreator,
  getFullAvaActionCreator,
  changeProfAvaActionCreator,
  showAvatarsActionCreator,
  toggleIsFetchingActionCreator,
  getImagesActionCreator,
} from "../../../../redux/reducers/reducerProfile";
import MainProfileAvatars from "./MainProfileAvatars";

let mapStatetoProps = (state: any) => {
  return {
    isShowAvatarMenu: state.profile.isShowAvatarMenu,
    pages: state.profile.pages,
    pageCount: state.profile.pageCount,
    avatars: state.profile.avatars,
    fullAvaSrc: state.profile.fullAvaSrc,
    isFetching: state.profile.isFetching,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    getPages: (side: string | null, currentPage: number | null) => {
      dispatch(getPagesActionCreator(side, currentPage));
    },
    getFullAva: (src: string) => {
      dispatch(getFullAvaActionCreator(src));
    },
    changeProfAva: () => {
      dispatch(changeProfAvaActionCreator());
    },
    showAvatars: (flag: boolean) => {
      dispatch(showAvatarsActionCreator(flag));
    },
    toggleIsFetching: (flag: boolean) => {
      dispatch(toggleIsFetchingActionCreator(flag));
    },
    getImages: (page: number) => {
      getImagesActionCreator(dispatch, page);
    },
  };
};

const MainProfileAvatarsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainProfileAvatars);

export default MainProfileAvatarsContainer;
