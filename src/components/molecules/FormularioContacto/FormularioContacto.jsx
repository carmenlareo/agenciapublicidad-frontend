import React, { useState } from 'react';
import axios from 'axios';
import styles from './FormularioContacto.module.css'; 

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Usamos la URL de tu backend
      await axios.post('http://127.0.0.1:8000/clientes/contacto-publico', formData);
      alert("Solicitud enviada correctamente");
      setFormData({ nombre: '', empresa: '', email: '', telefono: '', descripcion: '' });
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <>
    
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <label>Nombre</label>
          <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre completo" required />
        </div>

        <div className={styles.inputGroup}>
          <label>Nombre Empresa</label>
          <input name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nombre de tu empresa" required />
        </div>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@empresa.com" required />
        </div>

        <div className={styles.inputGroup}>
          <label>Teléfono</label>
          <input name="telefono" type="tel" value={formData.telefono} onChange={handleChange} placeholder="+34 000 000 000" />
        </div>

        <div className={styles.inputGroup}>
          <label>Descripción</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Cuéntanos tu proyecto..." />
        </div>

        <button id="enviar" type="submit" value="enviar" className={styles.submitBtn}>Solicitar Presupuesto</button>
       
      </form>
    </>
  );
};

export default FormularioContacto;