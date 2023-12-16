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
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;
