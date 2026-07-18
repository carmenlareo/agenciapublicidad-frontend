import React from 'react';
import styles from './NuevoPresupuestoModal.module.css';

const NuevoPresupuestoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Nuevo presupuesto</h2>
          <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>
        
        <form className={styles.form}>
          <div className={styles.field}>
            <label>CLIENTE</label>
            <select>
              <option value="">Seleccionar cliente...</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>DESCRIPCIÓN</label>
            <input type="text" placeholder="Campaña digital Q3..." />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>MONTO</label>
              <input type="number" defaultValue="0" />
            </div>
            <div className={styles.field}>
              <label>FECHA</label>
              <input type="date" />
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancelar</button>
            <button type="submit" className={styles.submitBtn}>Crear presupuesto</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevoPresupuestoModal;