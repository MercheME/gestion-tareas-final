import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, isLoggedIn, setIsLoggedIn }}>
      {children}
    </TaskContext.Provider>
  );
};