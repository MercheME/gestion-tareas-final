import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Login = () => {
  const { setIsLoggedIn } = useContext(TaskContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Credenciales para el login
    if (username === 'user' && password === 'pass') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-auto mt-15">
      <div className="xl:w-[700px] rounded-md px-10 bg-indigo-100 xl:shadow-xl flex flex-col justify-center bg-indigo-200 p-20">
        <h1 className="text-center text-3xl font-bold mt-2 mb-2">Login</h1>
        <hr className="mb-6" />
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="py-3 px-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="py-3 px-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400"
            />
            {/* <div className="flex justify-end mt-3 mb-4 w-full md:w-[500px] w-[300px]">
              <a href="#" className="text-blue-700">Forgot password?</a>
            </div> */}
            <button type="submit" className="py-3 bg-violet-400 text-white w-full md:w-[500px] w-[300px] rounded-md font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
  </div>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //     placeholder="Usuario"
    //   />
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     placeholder="Contraseña"
    //   />
    //   <button type="submit">Iniciar Sesión</button>
    // </form>
  );
};

export default Login;