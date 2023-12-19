'use client'

import TodoForm from './compoents/TodoForm';
import TodoList from './compoents/TodoList';
import { useTodos } from './hooks/useTodos';

const Home = () => {

  const { tasks } = useTodos();

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <TodoList tasks={tasks} />
      <TodoForm/>
    </div>
  );
};

export default Home;
