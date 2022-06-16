import { TODO_NEW, TODO_LIST_UPDATE } from "../constants";

export const newTodo = (param) => {
  return async (dispatch) => {
    dispatch({ type: TODO_NEW, payload: param });
  };
};

export const updateTodoList = ({ newList }) => {
  return async (dispatch) => {
    dispatch({ type: TODO_LIST_UPDATE, payload: newList });
  };
};
