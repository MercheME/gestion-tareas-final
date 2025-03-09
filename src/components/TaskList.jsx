// import React, { useContext, useEffect } from 'react';
// import { TaskContext } from '../context/TaskContext';
// import { updateTask } from '../api/task';
// import { deleteTask } from '../api/task';

// const TaskList = () => {
//   const { tasks, setTasks } = useContext(TaskContext);

//   useEffect(() => {
//     // Simulación de carga de tareas
//     setTasks([
//       { id: 1, title: "Aprender React" },
//       { id: 2, title: "Hacer ejercicios de código" }
//     ]);
//   }, [setTasks]);

//   const handleDelete = async (id) => {
//     await deleteTask(id);
//     setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
//   };

//   const handleToggle = async (id) => {
//     const taskToToggle = tasks.find(task => task.id === id);
//     const updatedTask = await updateTask(id, { completed: !taskToToggle.completed });
//     setTasks(prevTasks => prevTasks.map(task => task.id === id ? updatedTask : task));
//   };

//   if (tasks.length === 0) {
//     return <p>No hay tareas</p>;a
//   }


//   return (
//     <div>
//       <h2>Lista de Tareas</h2>
//       <ul>
//         {tasks.map(task => (
//             <li key={task.id}>
//             <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//                 {task.title}
//             </span>
//             <button onClick={() => handleToggle(task.id)}>
//                 {task.completed ? 'Desmarcar' : 'Completar'}
//             </button>
//             <button onClick={() => handleDelete(task.id)}>Eliminar</button>
//             </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { updateTask, deleteTask } from '../api/task';

const TaskList = ({ tasks }) => { // ✅ Ahora recibe `tasks` como prop
  const { setTasks } = useContext(TaskContext);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleToggle = async (id) => {
    const taskToToggle = tasks.find(task => task.id === id);
    if (!taskToToggle) return;
    const updatedTask = await updateTask(id, { completed: !taskToToggle.completed });
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? updatedTask : task));
  };

  if (!tasks.length) {
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
