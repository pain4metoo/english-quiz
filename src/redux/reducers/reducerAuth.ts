let AUTH = "AUTH";

interface Auth {
  isAuth: boolean;
}

const initialState: Auth = {
  isAuth: false,
};

const authReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "AUTH":
      stateCopy.isAuth = true;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const authActionCreator = () => ({
  type: AUTH,
});

export default authReducer;
