'use client'

import { ItodoProps } from '@/types/ItodoProps';
import { deleteTask } from '../libs/supabase/todoList';
import { useTodos } from '../hooks/useTodos';
import { supabase } from '../libs/supabase/supabaseClient';

interface TodoListProps {
  tasks: ItodoProps[];
}

const TodoList = ({ tasks }: TodoListProps) => {
  const { refetch } = useTodos();

  const handleDeleteTask = async (taskId: number) => {
      await deleteTask(taskId);

      await refetch()
  };

  const handleToggleComplete = async (taskId: number, completed: boolean) => {
    await supabase.from('todos').upsert([{ id: taskId, completed: !completed }]);
    await refetch();
  };

  return (
    <ul className="list-disc pl-4">
      {tasks.map((task) => (
        
        <li
          key={task.id}
          className="px-4 bg-gray-100 rounded p-2 mb-2 hover:bg-gray-200 transition duration-300 flex justify-between"
        >
          {task.task}
          <button 
            onClick={() => handleToggleComplete(task.id, task.completed)}
            className={`ml-2 px-2 py-1 ${
              task.completed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            } rounded`}
          >
            {task.completed ? 'Completa' : 'Incompleta'}
          </button>
          <button 
            onClick={() => handleDeleteTask(task.id)}
            className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 focus:outline-none"
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
