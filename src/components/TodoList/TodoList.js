import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import SingleToDo from "../SingleToDo";
import * as todoAction from "../../redux/todo/todoAction";

import styles from "./TodoList.module.css";

const TodoList = ({ todoList }) => {
  const dispatch = useDispatch();

  const { updateTodoList } = bindActionCreators(todoAction, dispatch);

  const handleToggle = (todoToToggle) => {
    const newTodoList = [...todoList];

    const todoIndex = newTodoList.findIndex(
      (todo) => todo.id === todoToToggle.id
    );

    newTodoList[todoIndex] = {
      ...todoToToggle,
      completed: !todoList[todoIndex].completed,
    };

    updateTodoList({ newList: newTodoList });
  };

  const handleDestroy = (theTodo) => {
    const newTodoList = [...todoList];

    const todoIndex = newTodoList.findIndex((todo) => todo.id === theTodo.id);

    newTodoList.splice(todoIndex, 1);

    updateTodoList({ newList: newTodoList });
  };

  const handleSave = (theTodo) => {
    const newTodoList = [...todoList];

    const todoIndex = newTodoList.findIndex((todo) => todo.id === theTodo.id);

    newTodoList[todoIndex] = {
      ...theTodo,
    };

    updateTodoList({ newList: newTodoList });
  };

  return (
    <section id="main" className={styles.main}>
      <ul id="todoListView" className={styles.todoList}>
        {todoList &&
          todoList.map((todo, key) => (
            <SingleToDo
              key={key}
              todo={todo}
              onToggle={() => handleToggle(todo)}
              onDestroy={() => handleDestroy(todo)}
              onSave={handleSave}
            />
          ))}
      </ul>
    </section>
  );
};

export default TodoList;
