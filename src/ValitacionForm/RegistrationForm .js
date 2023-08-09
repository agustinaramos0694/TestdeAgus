import React, { useState } from 'react';
import'./Register.css'

function RegistrationForm ()  {
  // Estado del formulario que almacena los datos ingresados por el usuario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Estado para almacenar los mensajes de error de validación
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Actualizamos el estado del formulario con los nuevos datos ingresados por el usuario
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de nombre
    if (!formData.name.trim()) {
      // Si el nombre está vacío, establecemos el mensaje de error correspondiente
      setErrors((prevErrors) => ({ ...prevErrors, name: 'El nombre es requerido' }));
      return;
    } else {
      // Si el nombre es válido, eliminamos el mensaje de error
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }

    // Validación de correo electrónico
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(formData.email)) {
      // Si el correo electrónico no es válido, establecemos el mensaje de error correspondiente
      setErrors((prevErrors) => ({ ...prevErrors, email: 'El correo electrónico no es válido' }));
      return;
    } else {
      // Si el correo electrónico es válido, eliminamos el mensaje de error
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    // Validación de contraseña
    if (formData.password.length < 6) {
      // Si la contraseña no cumple con los requisitos, establecemos el mensaje de error correspondiente
      setErrors((prevErrors) => ({ ...prevErrors, password: 'La contraseña debe tener al menos 6 caracteres' }));
      return;
    } else {
      // Si la contraseña es válida, eliminamos el mensaje de error
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    // Si pasa todas las validaciones, aquí puedes enviar los datos del formulario al servidor
    console.log('Datos enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre y Apellido:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        {errors.name && <span>{errors.name}</span>} {/* Mostrar mensaje de error si existe */}
      </div>

      <div>
        <label>Correo Electrónico:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        {errors.email && <span>{errors.email}</span>} {/* Mostrar mensaje de error si existe */}
      </div>

      <div>
        <label>Contraseña:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        {errors.password && <span>{errors.password}</span>} {/* Mostrar mensaje de error si existe */}
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistrationForm;