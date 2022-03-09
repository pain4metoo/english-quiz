import {
  getLocalAuthCategory,
  isAuthCategory,
} from "../../services/auth.service";

const CHANGE_CATEGORY = "CHANGE_CATEGORY";

interface Category {
  category: string | null;
}

const initialState: Category = {
  category: getLocalAuthCategory,
};

const categoryReducer = (state = initialState, action: any) => {
  let stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "CHANGE_CATEGORY":
      stateCopy.category = action.category;
      isAuthCategory(action.category);
      return stateCopy;

    default:
      return stateCopy;
  }
};

export const addCategoryReducer = (category: string) => ({
  type: CHANGE_CATEGORY,
  category: category,
});

export default categoryReducer;
