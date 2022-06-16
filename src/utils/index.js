export default {
  pluralize: (count, word) => {
    return count === 1 ? word : word + "s";
  },
  remainingTodo: (todoList) => {
    const res = todoList.filter((item) => !item.completed);
    return res.length;
  },
  completedTodo: (todoList) => {
    const res = todoList.filter((item) => item.completed);
    return res.length;
  },
};
