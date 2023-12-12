'use client';

import { useState, useEffect } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../supabase/todoList";
import { ItodoProps } from "@/supabase/ItodoProps";

export default function Home() {
  const [todos, setTodos] = useState<ItodoProps[]>([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data, error } = await getTodos();
    if (data) setTodos(data);
    if (error) console.error(error);
  };

  const handleAddTodo = async () => {
    if (task.trim() === "") return;
    await addTodo(task);
    setTask("");
    fetchTodos();
  };

  const handleUpdateTodo = async (id: string, newTask: string) => {
    await updateTodo(id, newTask);
    fetchTodos();
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.task}
              onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
