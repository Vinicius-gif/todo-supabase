'use client'

import { useState } from 'react';

interface TodoFormProps {
  onAddTask: (task: string) => void;
}

const TodoForm = ({ onAddTask }: TodoFormProps) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    onAddTask(task);
    setTask('');
  };

  return (
    <div className="my-4">
      <input
        className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoForm;
