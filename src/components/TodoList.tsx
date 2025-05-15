"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  toggleEdit,
} from "../features/todo/todoSlice";
import { RootState } from "../redux/store";
import { useState } from "react";


export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="relative bg-zinc-900 p-6 rounded-lg shadow-xl text-white max-w-xl mx-auto mt-10">
      
      <h2 className="text-2xl font-semibold mb-4">📝 Modern Todo List</h2>

      <div className="flex items-center gap-2 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
          placeholder="Enter a new todo..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-zinc-800 p-3 rounded"
          >
            {todo.isEditing ? (
              <input
                type="text"
                defaultValue={todo.text}
                placeholder="Edit todo"
                title="Edit todo"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(
                      updateTodo({ id: todo.id, newText: e.currentTarget.value })
                    );
                    dispatch(toggleEdit(todo.id));
                  }
                }}
                className="flex-1 bg-transparent border-b border-zinc-500 px-2 py-1 text-white"
              />
            ) : (
              <span className="flex-1">{todo.text}</span>
            )}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => dispatch(toggleEdit(todo.id))}
                className="text-sm bg-yellow-600 px-2 py-1 rounded hover:bg-yellow-700"
              >
                {todo.isEditing ? "Save" : "Edit"}
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-sm bg-red-600 px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
