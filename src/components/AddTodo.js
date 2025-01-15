import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;