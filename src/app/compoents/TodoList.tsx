// components/TodoList.tsx
import { ItodoProps } from '@/types/ItodoProps';

interface TodoListProps {
  tasks: ItodoProps[];
}

const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
};

export default TodoList;
