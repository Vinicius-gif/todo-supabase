'use client';

import { useState, useEffect } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../supabase/todoList";
import { ItodoProps } from "@/supabase/ItodoProps";
import { useTodos } from "./hooks/useTodos";
import TodoForm from "./compoents/todoForm";

export default function Home() {
  const { todos, setTodos }= useTodos();

  // const handleUpdateTodo = async (id: string, newTask: string) => {
  //   await updateTodo(id, newTask);
  //   fetchTodos();
  // };

  // const handleDeleteTodo = async (id: string) => {
  //   await deleteTodo(id);
  //   fetchTodos();
  // };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.task}
              // onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => console.log("click")}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
