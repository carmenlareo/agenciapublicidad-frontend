import React from 'react';
import LoginForm from '../../components/organisms/LoginForm/LoginForm';
import styles from './LoginAdmin.module.css'; // Asegúrate de tener el fondo aquí

const LoginAdmin = () => {
    return (
        <div className={styles.contenedor}>
            <LoginForm />
        </div>
    );
};

export default LoginAdmin;