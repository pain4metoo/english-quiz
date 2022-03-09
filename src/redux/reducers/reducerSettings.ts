import {
  addLocalLevel,
  getLocalLevel,
  getLocalAuthLevel,
  isAuthLevel,
} from "./../../services/auth.service";

const CHANGE_LEVEL = "CHANGE_LEVEL";

interface Settings {
  level: string;
}

const initialState: Settings = {
  level: "test",
};

const nameReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    default:
      return stateCopy;
  }
};

//   export const addNameActionCreator = () => ({ type: ADD_NAME });

//   export const updateNameTextActionCreator = (text: string) => ({
//     type: UPDATE_NAME,
//     newNameText: text,
//   });

//   export const validNameActionCreator = (length: number) => ({
//     type: VALID_NAME,
//     length: length,
//   });

export default nameReducer;
