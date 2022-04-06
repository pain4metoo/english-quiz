import { connect } from "react-redux";
import {
  getPagesActionCreator,
  getAvatarsActionCreator,
  getFullAvaActionCreator,
  changeProfAvaActionCreator,
  showAvatarsActionCreator,
} from "../../../../redux/reducers/reducerProfile";
import MainProfileAvatars from "./MainProfileAvatars";

let mapStatetoProps = (state: any) => {
  return {
    isShowAvatarMenu: state.profile.isShowAvatarMenu,
    pages: state.profile.pages,
    pageCount: state.profile.pageCount,
    avatars: state.profile.avatars,
    fullAvaSrc: state.profile.fullAvaSrc,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    getPages: (side: string | null, currentPage: number | null) => {
      dispatch(getPagesActionCreator(side, currentPage));
    },
    getAvatars: () => {
      dispatch(getAvatarsActionCreator());
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
  };
};

const MainProfileAvatarsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainProfileAvatars);

export default MainProfileAvatarsContainer;
