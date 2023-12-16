'use client'

import { supabase } from '@/app/libs/supabase/supabaseClient';
import { useQuery } from 'react-query';
import TodoList from './compoents/TodoList';
import TodoForm from './compoents/TodoForm';

const fetchTasks = async () => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) {
    throw error;
  }
  return data || [];
};

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
    <div>
      <h1>Todo List</h1>
      <TodoList tasks={tasks} />
      <TodoForm onAddTask={handleAddTask} />
    </div>
  );
};

export default Home;
