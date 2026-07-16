// src/components/organisms/LoginForm/LoginForm.jsx
import React from 'react';
import styles from './LoginForm.module.css';



const LoginForm = () => {
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