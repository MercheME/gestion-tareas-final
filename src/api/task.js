// import axios from 'axios';

// const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// export const fetchTasks = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     return [];
//   }
// };

// export const addTask = async (task) => {
//   const response = await axios.post(API_URL, task);
//   return response.data;
// };

// export const deleteTask = async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
// };

// export const updateTask = async (id, updates) => {
//   const response = await axios.patch(`${API_URL}/${id}`, updates);
//   return response.data;
// };

import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const updateTask = async (id, updates) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};