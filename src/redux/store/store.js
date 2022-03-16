import { applyMiddleware, combineReducers, createStore } from "redux";
import levelReducer from "../reducers/reducerLevel";
import nameReducer from "../reducers/reducerName";
import categoryReducer from './../reducers/reducerCategory';
import gameReducer from "./../reducers/reducerGame";
import scoreReducer from './../reducers/reducerScore';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
  name: nameReducer,
  stage: levelReducer,
  category: categoryReducer,
  game: gameReducer,
  score: scoreReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
