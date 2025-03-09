import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { tasks, setTasks } = useContext(TaskContext); // Acceder al contexto
  const [taskTitle, setTaskTitle] = useState(""); // Estado local para el input

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    if (taskTitle.trim() === "") return; // Validar que no esté vacío

    // Crear nueva tarea
    const newTask = {
      id: tasks.length + 1, // Generar ID (mejor usar uuid en apps reales)
      title: taskTitle,
    };

    setTasks([...tasks, newTask]); // Agregar tarea al contexto
    setTaskTitle(""); // Limpiar el input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;
