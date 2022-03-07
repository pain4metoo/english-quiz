import {
  getLocalName,
  addLocalUser,
  getLocalAuthName,
  isAuthName,
} from "../../services/auth.service";

let ADD_NAME = "ADD_NAME";
let UPDATE_NAME = "UPDATE_NAME";
let VALID_NAME = "VALID_NAME";

interface Name {
  name: string | null;
  newNameText: string | null;
  url: string;
  isAuthName: any;
}

const initialState: Name = {
  name: getLocalName,
  newNameText: getLocalName,
  url: "/english-quiz",
  isAuthName: getLocalAuthName,
};

const nameReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD_NAME":
      let name = {
        name: state.name,
        newNameText: state.newNameText,
      };
      if (!state.isAuthName) {
        stateCopy.isAuthName = false;
        stateCopy.url = "/english-quiz";
      }
      stateCopy.name = name.newNameText;
      return stateCopy;
    case "UPDATE_NAME":
      let user = (stateCopy.newNameText = action.newNameText);
      addLocalUser(user);
      isAuthName(true);
      return stateCopy;
    case "VALID_NAME":
      if (action.length > 0) {
        stateCopy.url = "/level";
        stateCopy.isAuthName = true;
        return stateCopy;
      } else {
        stateCopy.url = "/english-quiz";
        stateCopy.isAuthName = false;
        return stateCopy;
      }

    default:
      return stateCopy;
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
