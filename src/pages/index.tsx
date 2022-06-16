import type { NextPage } from "next";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../components/Header";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import * as todoAction from "../redux/todo/todoAction";
import { RootState } from "../redux/rootReducer";
import Utilz from "../utils";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { newTodo, updateTodoList } = bindActionCreators(todoAction, dispatch);

  const { todoList } = useSelector((item: RootState) => item.todo);

  const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    const id = uuidv4();

    newTodo({
      id,
      title: value,
      completed: false,
    });
  };

  const handleClearCompleted = () => {
    const newTodoList = todoList.filter((item: any) => !item.completed);

    updateTodoList({ newList: newTodoList });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>All To-do's</title>
      </Head>

      <div className={styles.todoapp}>
        <Header onSubmit={handleChange} />
        <TodoList todoList={todoList} />
        <Footer
          completedCount={Utilz.remainingTodo(todoList)}
          remainingCount={Utilz.remainingTodo(todoList)}
          onClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
};

export default Home;
