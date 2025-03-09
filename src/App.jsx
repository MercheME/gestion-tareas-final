import React, { useState, useEffect, useContext } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import Login from './components/Login';
import { TaskContext } from './context/TaskContext';
import { fetchTasks } from './api/task';

function App() {
  const { tasks, setTasks, isLoggedIn } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (isLoggedIn) {
      fetchTasks().then(data => {
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          setTasks([]);
        }
      });
    }
  }, [setTasks, isLoggedIn]);

  const filteredTasks = Array.isArray(tasks) ? tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  }) : [];

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      {isLoggedIn ? (
        <>
          <TaskForm />
          <TaskFilter setFilter={setFilter} />
          <TaskList tasks={filteredTasks} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
