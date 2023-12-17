import { ItodoProps } from '@/types/ItodoProps';

interface TodoListProps {
  tasks: ItodoProps[];
}

const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <ul className="list-disc pl-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="bg-gray-100 rounded p-2 mb-2 hover:bg-gray-200 transition duration-300"
        >
          {task.task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
