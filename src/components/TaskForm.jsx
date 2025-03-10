
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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Nueva tarea...'
      />
      <button type='submit'>Agregar</button>
    </form>
  );
};

export default TaskForm;