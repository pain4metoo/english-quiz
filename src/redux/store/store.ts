import { combineReducers, createStore } from "redux";
import nameReducer from "./../reducers/reducerName";

let reducers = combineReducers({
  name: nameReducer,
});

let store = createStore(reducers);

export default store;
