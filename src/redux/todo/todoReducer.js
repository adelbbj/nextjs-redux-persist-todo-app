import { TODO_NEW, TODO_LIST_UPDATE } from "../constants";

const initialState = {
  todoList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_NEW:
      return { ...state, todoList: [...state.todoList, action.payload] };

    case TODO_LIST_UPDATE:
      return { ...state, todoList: [...action.payload] };

    default:
      return state;
  }
};
