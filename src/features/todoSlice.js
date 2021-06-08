import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    saveTodo: (state, { payload }) => {
      state.todoList.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todoList = state.todoList.filter((item) => item.id !== payload);
    },
    setCheck: (state, { payload }) => {
      state.todoList.map((item) => {
        if (payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
        return item;
      });
    },
  },
});

export const { saveTodo, deleteTodo, setCheck } = todoSlice.actions;

export const selectTodo = (state) => state.todos.todoList;

export default todoSlice.reducer;
