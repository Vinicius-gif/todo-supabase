'use client';

import { useTodos } from "./hooks/useTodos";
import TodoForm from "./compoents/todoForm";

export default function Home() {
  const { todos }= useTodos();
  console.log(todos);

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
              onChange={() => console.log('augh')}
            />
            <button onClick={() => console.log("click")}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
