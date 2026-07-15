import Button from "../../components/atoms/Button/Button";
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    nombre: '', empresa: '', email: '', telefono: '', descripcion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/presupuestos/registro-completo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Solicitud enviada correctamente");
        setFormData({ nombre: '', empresa: '', email: '', telefono: '', descripcion: '' });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SOLUTIONS AGENCIA, Publicidad, Creatividad y Desarrollo.</h1>
      <h2 className={styles.subtitle}>Describe y cuéntanos qué necesitas.</h2>

      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.sede}`}>
          <div>📍</div>
          <div>
            <strong>Sede Creativa</strong>
            <p>C/ Distrito 404, Madrid</p>
          </div>
        </div>

        <div className={`${styles.card} ${styles.llamanos}`}>
          <div>📞</div>
          <div>
            <strong>Llámanos</strong>
            <p>+34 900 123 456</p>
          </div>
        </div>

        <div className={`${styles.card} ${styles.formulario}`}>
          <strong>Rellena nuestro FORMULARIO</strong>
        </div>
      </div>

      <div className={styles.formContainer}>

        <div className={styles.inputGroup}>
          <label>Nombre</label>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Nombre Empresa</label>
          <input placeholder="Nombre de tu empresa" />
        </div>


        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="email" placeholder="email@empresa.com" />
        </div>
        <div className={styles.inputGroup}>
          <label>Teléfono</label>
          <input type="tel" placeholder="+34 000 000 000" />
        </div>
        <div className={styles.inputGroup}>
          <label>Descripción</label>
          <textarea placeholder="Cuéntanos tu proyecto..." />
        </div>
        <button className={styles.submitBtn}>Solicitar Presupuesto</button>
      </div>

      <footer className={styles.footer}>
        <p>Agencia Publicidad SOLUTIONS 2026</p>
        <p>
          Privacidad | Terminos | <Link to="/admin">Admin</Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;