import React from "react";

import styles from "./Header.module.css";

const Header = ({ onSubmit }) => {
  const inputRef = React.createRef();

  const handleOnPress = (e) => {
    if (e.target.value === "") return;

    if (e.code === "Enter" || e.code === "NumpadEnter") {
      onSubmit(e.target.value);
      inputRef.current.value = "";
    }
  };

  return (
    <header className={styles.header}>
      <h1>todo</h1>
      <div className={styles.headerBar} />
      <input
        className={styles.newTodo}
        placeholder="What needs to be done?"
        onKeyDown={handleOnPress}
        ref={inputRef}
      />
    </header>
  );
};

export default React.memo(Header);
