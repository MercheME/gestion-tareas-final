import React from 'react';

const TaskFilter = ({ setFilter }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <button
        onClick={() => setFilter('all')}
        className="py-2 px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Todas
      </button>
      <button
        onClick={() => setFilter('completed')}
        className="py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Completadas
      </button>
      <button
        onClick={() => setFilter('pending')}
        className="py-2 px-6 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Pendientes
      </button>
    </div>

    // <div>
    //   <button onClick={() => setFilter('all')}>Todas</button>
    //   <button onClick={() => setFilter('completed')}>Completadas</button>
    //   <button onClick={() => setFilter('pending')}>Pendientes</button>
    // </div>
  );
};

export default TaskFilter;