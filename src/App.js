import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Input from "./components/Input";
import RenderTodo from "./components/RenderTodo";
import { selectTodo } from "./features/todoSlice";

function App() {
  const todos = useSelector(selectTodo);

  return (
    <div className="app">
      <h1>Todo Redux</h1>
      <Input />
      {todos.map((todo) => (
        <RenderTodo
          key={todo.id}
          name={todo.name}
          done={todo.done}
          id={todo.id}
        />
      ))}
    </div>
  );
}

export default App;
