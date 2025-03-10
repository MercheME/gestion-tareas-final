
import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { addTask } from '../api/tasks';

const TaskForm = () => {
  const { setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title: title,
      completed: false,
    };

    try {
      const addedTask = await addTask(newTask);
      setTasks((prevTasks) => [...prevTasks, addedTask]);
      setTitle('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type='text'
    //     value={title}
    //     onChange={(e) => setTitle(e.target.value)}
    //     placeholder='Nueva tarea...'
    //   />
    //   <button type='submit'>Agregar</button>
    // </form>
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea..."
        className="py-3 px-4 rounded-md bg-gray-100 w-full md:w-[400px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="py-3 px-6 bg-indigo-500 text-white rounded-md font-semibold w-full md:w-[400px] hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Agregar
      </button>
    </form>

  );
};

export default TaskForm;