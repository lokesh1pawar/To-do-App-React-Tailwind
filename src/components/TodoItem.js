const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center p-4 mb-4 rounded-lg shadow-md transition duration-200 ${
        task.completed
          ? 'bg-green-100 text-green-800'
          : 'bg-white text-gray-800'
      }`}
    >
      <span
        onClick={() => onToggle(task.id)}
        className={`flex-grow cursor-pointer text-lg ${
          task.completed ? 'line-through' : ''
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;