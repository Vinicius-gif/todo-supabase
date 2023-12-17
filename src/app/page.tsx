'use client'

import { supabase } from '@/app/libs/supabase/supabaseClient';
import { useQuery } from 'react-query';
import TodoList from './compoents/TodoList';
import TodoForm from './compoents/TodoForm';
import { fetchTasks } from './libs/supabase/todoList';

const Home = () => {

  const { data: tasks = [], isLoading, refetch } = useQuery('todos', fetchTasks);

  const handleAddTask = async (task: string) => {
    await supabase.from('todos').upsert([{ task, completed: false }]);

    await refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <TodoList tasks={tasks} />
      <TodoForm onAddTask={handleAddTask} />
    </div>
  );
};

export default Home;
