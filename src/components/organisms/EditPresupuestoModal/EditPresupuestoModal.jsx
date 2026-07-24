import React, { useState, useEffect } from 'react';
import styles from './EditPresupuestoModal.module.css';


const EditPresupuestoModal = ({ isOpen, onClose, presupuesto, onPresupuestoActualizado }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    monto: '',
    descripcion: '',
    estado: 'pendiente'
  });

  useEffect(() => {
    if (presupuesto) {
      setFormData({
        nombre: presupuesto.nombre || '',
        monto: presupuesto.monto || '',
        descripcion: presupuesto.descripcion || '',
        estado: presupuesto.estado || 'pendiente'
      });
    }
  }, [presupuesto]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await presupuestoService.actualizarPresupuesto(presupuesto.id, formData);
      if (typeof onPresupuestoActualizado === 'function') {
        onPresupuestoActualizado();
      }
      onClose();
    } catch (error) {
      console.error("Error al actualizar presupuesto:", error.response?.data || error.message);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Editar Presupuesto</h2>
          <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="monto">Precio / Monto</label>
            <input 
              type="number" 
              id="monto" 
              name="monto" 
              value={formData.monto} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="descripcion">Descripción</label>
            <textarea 
              id="descripcion" 
              name="descripcion" 
              value={formData.descripcion} 
              onChange={handleChange} 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="estado">Estado</label>
            <select 
              id="estado" 
              name="estado" 
              value={formData.estado} 
              onChange={handleChange}
            >
              <option value="pendiente">Pendiente</option>
              <option value="aceptado">Aceptado</option>
              <option value="rechazado">Rechazado</option>
              <option value="pagado">Pagado</option>
              <option value="enviado_wa">Enviado por WA</option>
            </select>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={onClose} className={styles.cancelBtn}>Cancelar</button>
            <button type="submit" className={styles.saveBtn}>Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPresupuestoModal;