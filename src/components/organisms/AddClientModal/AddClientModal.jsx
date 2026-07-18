import React from 'react';
import { FiUserPlus, FiX, FiSave } from 'react-icons/fi';
import styles from './AddClientModal.module.css';

const AddClientModal = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <FiUserPlus className={styles.icon} /> Agregar nuevo cliente
          </h2>
          <button className={styles.closeBtn} onClick={onClose}><FiX /></button>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label>NOMBRE COMPLETO</label>
            <input type="text" placeholder="Valentina Ruiz" />
          </div>
          <div className={styles.field}>
            <label>EMPRESA</label>
            <input type="text" placeholder="Ruiz & Asociados" />
          </div>
          <div className={styles.field}>
            <label>EMAIL</label>
            <input type="email" placeholder="contacto@empresa.com" />
          </div>
          <div className={styles.field}>
            <label>TELÉFONO</label>
            <input type="tel" placeholder="+54 11 0000-0000" />
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancelar</button>
          <button className={styles.saveBtn}>
            <FiSave /> Guardar cliente
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;