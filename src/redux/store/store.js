import { combineReducers, createStore } from "redux";
import levelReducer from "../reducers/reducerLevel";
import nameReducer from "../reducers/reducerName";
import authReducer from "../reducers/reducerAuth";
import categoryReducer from './../reducers/reducerCategory';

let reducers = combineReducers({
  name: nameReducer,
  stage: levelReducer,
  isAuth: authReducer,
  category: categoryReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
