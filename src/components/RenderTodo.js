import style from "./RenderTodo.module.css";
import { useDispatch } from "react-redux";
import { setCheck, deleteTodo } from "../features/todoSlice";

export default function RenderTodo({ name, done, id }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const deleteSelectTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={style.wrapper}>
      <p
        className={[
          style.item,
          done ? `${style.item__complete}` : `${style.item__incomplete}`,
        ].join(" ")}
      >
        <input
          onChange={handleCheck}
          className={style.checkbox}
          type="checkbox"
          name="todo"
          checked={done}
        />
        {name}
      </p>
      <button onClick={deleteSelectTodo} className={style.btn__delete}>
        Delete
      </button>
    </div>
  );
}
