import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './LoginForm.module.css';
import api from '../../../api/api';




const LoginForm = () => {
  const navigate = useNavigate(); // 2. Inicializa el hook

  // 3. La función debe estar DENTRO del componente
 const handleLogin = async (credentials) => {
  try {
    // Usamos TU instancia de axios configurada
    const response = await api.post('/login', credentials); 
    
    // Guardamos el token (ajusta 'access_token' según lo que envíe tu backend)
    localStorage.setItem('token', response.data.access_token);
    
    // Redirigimos al dashboard (asegúrate de que la ruta en App.jsx sea /admin o /dashboard)
    navigate('/admin'); 
  } catch (error) {
    console.error("Error al loguearse", error);
    alert("Usuario o contraseña incorrectos");
  }
};


  
  return (
    <div className={styles.card}>
            <div className={styles.logo}>SOLUTIONS Agencia Digital</div>
            <h2 className={styles.titulo}>ACCESO ADMINISTRADOR</h2>
            
            <form>
                <div className={styles.inputGroup}>
                    <label>Usuario:</label>
                    <div className={styles.inputWrapper}>
                        <span className={styles.icono}>👤</span>
                        <input type="text" />
                    </div>
                </div>
                
                <div className={styles.inputGroup}>
                    <label>Contraseña:</label>
                    <div className={styles.inputWrapper}>
                        <span className={styles.icono}>🔒</span>
                        <input type="password" />
                    </div>
                </div>
                
                <button type="submit" className={styles.botonIngresar}>
                    ACCEDER
                </button>
            </form>
            
            <p className={styles.footerText}>
                Solo personal autorizado de SOLUTIONS Digital.
            </p>
        </div>
  );
};

export default LoginForm;