import { getLocalName, addLocalUser } from "../../services/auth.service";

let ADD_NAME = "ADD_NAME";
let UPDATE_NAME = "UPDATE_NAME";
let VALIDATION_NAME = "VALIDATION_NAME";

interface Name {
  name: string | null;
  newNameText: string | null;
  url: string;
  login: boolean | null;
}

const initialState: Name = {
  name: getLocalName,
  newNameText: getLocalName,
  url: "/english-quiz",
  login: null,
};

const nameReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD_NAME":
      let name = {
        name: state.name,
        newNameText: state.newNameText,
      };
      if (!action.length) {
        stateCopy.login = false;
        stateCopy.url = "/english-quiz";
      }

      stateCopy.name = name.newNameText;
      stateCopy.newNameText = "";
      return stateCopy;
    case "UPDATE_NAME":
      let user = (stateCopy.newNameText = action.newNameText);
      addLocalUser(user);
      return stateCopy;
    case "VALIDATION_NAME":
      if (action.length > 0) {
        stateCopy.login = true;
        stateCopy.url = "/level";
      }

      return stateCopy;

    default:
      return stateCopy;
  }
};

export const addNameActionCreator = () => ({ type: ADD_NAME });

export const updateNameTextActionCreator = (text: string) => ({
  type: UPDATE_NAME,
  newNameText: text,
});

export const validationName = (length: number) => ({
  type: VALIDATION_NAME,
  length: length,
});

export default nameReducer;
