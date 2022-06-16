import React from "react";
import classNames from "classnames";

import styles from "./SingleToDo.module.css";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

const SingleToDo = ({ todo, onToggle, onDestroy, onSave }) => {
  const inputRef = React.useRef();

  const [isEditing, setisEditing] = React.useState(false);
  const [title, setTitle] = React.useState(todo.title);

  const handleSubmit = () => {
    setisEditing(false);
    onSave({
      ...todo,
      title,
    });
  };

  const handleEdit = () => {
    setisEditing(true);

    setTimeout(() => {
      const node = inputRef.current;
      node.focus();
    }, 0);
  };

  const handleKeyDown = (event) => {
    if (event.which === ESCAPE_KEY) {
      setisEditing(false);
    } else if (event.which === ENTER_KEY) {
      handleSubmit(title);
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <li
      className={classNames(styles.todoItem, styles.editing, {
        completed: todo.completed,
      })}
    >
      <div className={styles.view}>
        <input
          className={styles.toggle}
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />

        {isEditing ? (
          <input
            type="text"
            ref={inputRef}
            className={styles.edit}
            value={title}
            onBlur={handleSubmit}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <label onDoubleClick={handleEdit}>{todo.title}</label>
        )}

        <button className={styles.destroy} onClick={onDestroy} />
      </div>
    </li>
  );
};

export default SingleToDo;
