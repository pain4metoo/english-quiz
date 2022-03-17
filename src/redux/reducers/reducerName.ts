import {
  getLocalName,
  addLocalUser,
  getLocalAuthName,
  isAuthName,
} from "../../services/auth.service";

const ADD_NAME = "ADD_NAME";
const UPDATE_NAME = "UPDATE_NAME";
const VALID_NAME = "VALID_NAME";

interface Name {
  name: string;
  newNameText: string;
  url: string;
  isAuthName: boolean;
}

const initialState: Name = {
  name: getLocalName,
  newNameText: getLocalName,
  url: "/",
  isAuthName: getLocalAuthName,
};

const nameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_NAME":
      if (!state.isAuthName) {
        return {
          ...state,
          isAuthName: false,
          url: "/",
        };
      }
      return {
        ...state,
        name: state.newNameText,
        isAuthName: true,
      };
    case "UPDATE_NAME":
      let user = action.newNameText;
      addLocalUser(user);
      isAuthName(true);
      return {
        ...state,
        name: user,
        newNameText: user,
      };
    case "VALID_NAME":
      if (action.length > 0) {
        return {
          ...state,
          url: "/level",
          isAuthName: true,
        };
      } else {
        return {
          ...state,
          url: "/",
          isAuthName: false,
        };
      }

    default:
      return state;
  }
};

export const addNameActionCreator = () => ({ type: ADD_NAME });

export const updateNameTextActionCreator = (text: string) => ({
  type: UPDATE_NAME,
  newNameText: text,
});

export const validNameActionCreator = (length: number) => ({
  type: VALID_NAME,
  length: length,
});

export default nameReducer;
