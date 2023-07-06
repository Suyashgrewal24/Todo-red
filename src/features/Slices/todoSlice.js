import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    edit: {
      todo: {},
      isEdit: false,
    },
  },
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload);
    },
    remove: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    },
    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };
    },
    updateTodo: (state, action) => {
      const { id, text, title } = action.payload;
      const updatedTodos = state.todos.map((item) =>
        item.id === id ? { ...item, text, title } : item
      );
      return {
        ...state,
        todos: updatedTodos,
        edit: { todo: {}, isEdit: false },
      };
    },
  },
});

export const { add, remove, edit, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
