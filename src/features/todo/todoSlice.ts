// features/todo/todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  isEditing?: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: crypto.randomUUID(), text: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<string>) =>
      state.filter((todo) => todo.id !== action.payload),
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; newText: string }>
    ) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) todo.text = action.payload.newText;
    },
    toggleEdit: (state, action: PayloadAction<string>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.isEditing = !todo.isEditing;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleEdit } = todoSlice.actions;
export default todoSlice.reducer;
