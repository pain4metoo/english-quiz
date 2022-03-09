import { combineReducers, createStore } from "redux";
import levelReducer from "../reducers/reducerLevel";
import nameReducer from "../reducers/reducerName";
import categoryReducer from './../reducers/reducerCategory';

let reducers = combineReducers({
  name: nameReducer,
  stage: levelReducer,
  category: categoryReducer,
  game: categoryReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
