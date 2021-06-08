import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import style from "./Input.module.css";
// select todos
import { selectTodo } from "../features/todoSlice";
import { useSelector } from "react-redux";

export default function Input() {
  const todos = useSelector(selectTodo);
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todo.length === 0) {
      alert("Todo can not be empty");
    } else {
      dispatch(
        saveTodo({
          name: todo,
          done: false,
          id: Date.now(),
        })
      );
      setTodo("");
    }
  };

  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={style.btn} onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}
