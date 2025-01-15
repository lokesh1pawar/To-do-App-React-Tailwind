import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;