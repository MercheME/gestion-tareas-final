import React, { useState, useEffect, useContext } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import Login from './components/Login';
import { TaskContext } from './context/TaskContext';
import { fetchTasks } from './api/tasks';

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
    <div className="mt-10">
      <div class="text-center mb-8">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg class="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/>
          </svg>
        </div>
        <h1 class="text-center text-3xl font-bold mt-2 mb-2">Gestión de tareas</h1>
      </div>

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
