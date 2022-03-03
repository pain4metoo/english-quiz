let ADD_NAME = "ADD_NAME";
let UPDATE_NAME = "UPDATE_NAME";

interface Name {
  name: string;
  newNameText: string;
}

const initialState: Name = {
  name: "test",
  newNameText: "",
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
      stateCopy.newNameText = action.newNameText;
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

export default nameReducer;
