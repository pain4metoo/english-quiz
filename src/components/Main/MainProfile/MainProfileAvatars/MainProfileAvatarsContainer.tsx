import { connect } from "react-redux";
import {
  getPagesActionCreator,
  getAvatarsActionCreator,
  renderAvaActionCreator,
} from "../../../../redux/reducers/reducerProfile";
import MainProfileAvatars from "./MainProfileAvatars";

let mapStatetoProps = (state: any) => {
  return {
    isShowAvatarMenu: state.profile.isShowAvatarMenu,
    pages: state.profile.pages,
    pageCount: state.profile.pageCount,
    avatars: state.profile.avatars,
    renderAvatar: state.profile.renderAvatar,
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
    renderAva: (flag: boolean) => {
      dispatch(renderAvaActionCreator(flag));
    },
  };
};

const MainProfileAvatarsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(MainProfileAvatars);

export default MainProfileAvatarsContainer;
