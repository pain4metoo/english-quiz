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
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: action.name };
    case "UPDATE_NAME":
      return { ...state, name: (action.newNameText += action.newNameText) };

    default:
      return state;
  }
};

export const addNameActionCreator = () => ({ type: ADD_NAME });

export const updateNameTextActionCreator = (text: string) => ({
  type: UPDATE_NAME,
  name: text,
});

export default nameReducer;
