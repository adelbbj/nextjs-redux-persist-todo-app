import { setCookie } from "nookies";
import { useSelector } from "react-redux";

const StorePersist = ({ children }) => {
  const { todoList } = useSelector((item) => item.todo);

  if (todoList.length) {
    setCookie(null, "todos", JSON.stringify(todoList), {
      maxAge: 60 * 60,
      path: "/",
    });
  }

  return <>{children}</>;
};

export default StorePersist;
