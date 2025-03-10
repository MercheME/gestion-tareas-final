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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuario"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;