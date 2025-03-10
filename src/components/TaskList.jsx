
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { updateTask, deleteTask } from '../api/tasks';

const TaskList = ({ tasks }) => { 
  const { setTasks } = useContext(TaskContext);

  const handleDelete = async (id) => {
    try {
        await deleteTask(id);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      } catch (error) {
        console.error('Error deleting task:', error);
      }
  };

  const handleToggle = async (id) => {
    try {
        const taskToToggle = tasks.find((task) => task.id === id);
        if (taskToToggle) {
          const updatedTask = await updateTask(id, { completed: !taskToToggle.completed });
          setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? updatedTask : task)));
        } else {
          setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
          );
        }
      } catch (error) {
        console.error('Error toggling task:', error);
      }
  };

  if (tasks.length === 0) {
    return <p>No hay tareas</p>;
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => handleToggle(task.id)}>
              {task.completed ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
