'use client'

import { useState } from 'react';
import { supabase } from '../libs/supabase/supabaseClient';
import { useTodos } from '../hooks/useTodos';

const TodoForm = () => {
  const [task, setTask] = useState('');

  const { isLoading, refetch } = useTodos();

  const handleAddTask = async (task: string) => {
    await supabase.from('todos').upsert([{ task, completed: false }]);

    setTask('');

    await refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-4 flex items-center justify-center">
      <input
        className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
        onClick={() => handleAddTask(task)}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoForm;
