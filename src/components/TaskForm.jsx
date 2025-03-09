import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { addTask } from "../api/task"; // Asegúrate de importar la función que guarda en la API


const TaskForm = () => {
    const [taskText, setTaskText] = useState('');
  const { setTasks } = useContext(TaskContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskText) return;

    // Crear una tarea local con un id temporal (esto se reemplazará con el id de la API)
    const newTask = {
      title: taskText,
      completed: false,
    };

    try {
      // Llamar a la API para agregar la tarea
      const addedTask = await addTask(newTask);  // Aquí usamos la función que hace el POST a la API

      // Actualizar el estado con la tarea que devuelve la API (con el id asignado)
      setTasks(prevTasks => [...prevTasks, addedTask]);

      // Limpiar el campo de texto
      setTaskText('');
    } catch (error) {
      console.error("Error al agregar la tarea", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Añadir nueva tarea"
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default TaskForm;
