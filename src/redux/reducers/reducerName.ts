import { getLocalName, addLocalUser } from "../../services/auth.service";

let ADD_NAME = "ADD_NAME";
let UPDATE_NAME = "UPDATE_NAME";
let CHANGE_URL = "CHANGE_URL";

interface Name {
  name: string | null;
  newNameText: string | null;
  url: any;
}

const initialState: Name = {
  name: getLocalName,
  newNameText: getLocalName,
  url: getLocalName ? "/level" : "/english-quiz",
};


const nameReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD_NAME":
      let name = {
        name: state.name,
        newNameText: state.newNameText,
      };
      stateCopy.name = name.newNameText;

      stateCopy.newNameText = "";
      return stateCopy;
    case "UPDATE_NAME":
      let user = (stateCopy.newNameText = action.newNameText);
      addLocalUser(user);
      return stateCopy;
    case "CHANGE_URL":
      let levelUrl = {
        url: state.url,
      };
      console.log(state)
      stateCopy.url = levelUrl.url;
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

export const changeUrlActionCreator = () => ({
  type: CHANGE_URL,
});

export default nameReducer;
