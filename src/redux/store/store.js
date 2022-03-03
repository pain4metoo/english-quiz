import { combineReducers, createStore } from "redux";
import levelReducer from "../reducers/reducerLevel";
import nameReducer from "../reducers/reducerName";

let reducers = combineReducers({
  name: nameReducer,
  level: levelReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
