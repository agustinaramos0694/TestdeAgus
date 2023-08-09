import React, { useState } from 'react';
import './Login.css'

function LoginForm (props)  {
  // Estado para almacenar el nombre de usuario
  const [username, setUsername] = useState('');

  // Estado para almacenar la contraseña
  const [password, setPassword] = useState('');

  // Estado para almacenar el mensaje de bienvenida o error
  const [message, setMessage] = useState('');

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Simulamos la validación del usuario y la contraseña (puedes reemplazar esta lógica con una llamada a un servidor)
    if (username === 'usuario' && password === '123456') {
      // Si las credenciales son válidas, mostramos un mensaje de bienvenida
      setMessage('¡Bienvenido! Has iniciado sesión exitosamente.');
    } else {
      // Si las credenciales no son válidas, mostramos un mensaje de error
      setMessage('Usuario o contraseña incorrectos. Inténtalo nuevamente.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <div>
        <label>Usuario:</label>
        {/* Campo de texto para ingresar el nombre de usuario */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        {/* Campo de texto para ingresar la contraseña */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* Botón para iniciar sesión */}
      <button onClick={props.handleLogin()}>Iniciar Sesión</button>
      {/* Mostramos el mensaje de bienvenida o error */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;



