import { applyMiddleware, combineReducers, createStore } from "redux";
import levelReducer from "../reducers/reducerLevel";
import nameReducer from "../reducers/reducerName";
import categoryReducer from './../reducers/reducerCategory';
import gameReducer from "./../reducers/reducerGame";
import  thunkMiddleware  from 'redux-thunk';

let reducers = combineReducers({
  name: nameReducer,
  stage: levelReducer,
  category: categoryReducer,
  game: gameReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
