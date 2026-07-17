import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/api'; 
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Petición al endpoint /auth/login que vimos en tu Swagger
      const response = await api.post('/auth/login', credentials);
      
      // Guardamos el token recibido
      localStorage.setItem('token', response.data.access_token);
      
      // Redirección al Dashboard
      navigate('/admin');
    } catch (error) {
      console.error("Error al loguearse", error);
      alert("Credenciales incorrectas o error de conexión");
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.logo}>SOLUTIONS Agencia Digital</div>
      <h2 className={styles.titulo}>ACCESO ADMINISTRADOR</h2>

      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label>Usuario:</label>
          <div className={styles.inputWrapper}>
            <span className={styles.icono}>👤</span>
            <input 
              type="text" 
              name="username" 
              value={credentials.username} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Contraseña:</label>
          <div className={styles.inputWrapper}>
            <span className={styles.icono}>🔒</span>
            <input 
              type="password" 
              name="password" 
              value={credentials.password} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <button type="submit" style={{ marginTop: '20px', width: '100%', padding: '10px' }}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;