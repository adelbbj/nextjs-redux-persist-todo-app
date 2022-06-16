import { combineReducers } from "redux";
import todo from "./todo/todoReducer";

export default combineReducers({
  todo,
});

export type RootState = any;
