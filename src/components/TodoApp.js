import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTasks = async () => {
      const localTasks = JSON.parse(localStorage.getItem('tasks'));
      if (localTasks) {
        setTasks(localTasks);
      } else {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        setTasks(
          data.todos.map((todo) => ({
            id: todo.id,
            text: todo.todo,
            completed: todo.completed,
          }))
        );
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="p-6 max-w-lg mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
        To-Do List
      </h1>
      <AddTodo onAdd={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        onToggle={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default TodoApp;
