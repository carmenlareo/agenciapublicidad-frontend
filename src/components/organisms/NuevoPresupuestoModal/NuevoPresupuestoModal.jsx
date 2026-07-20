import React, { useState, useEffect } from 'react';
import styles from './NuevoPresupuestoModal.module.css';
import * as clienteService from '../../../services/clienteService';

const NuevoPresupuestoModal = ({ isOpen, onClose, presupuesto, onSave }) => {
  if (!isOpen) return null;

  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    cliente_id: '',
    descripcion: '',
    monto: 0,
    estado: 'Pendiente'
  });

  // Cargar la lista de clientes al abrir el modal
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        // Intentamos llamar a la función común del servicio
        const data = await clienteService.getClientes();
        setClientes(data || []);
      } catch (error) {
        console.error("Error al cargar los clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  // Rellenar datos y asegurar que el cliente_id coincida al editar
  useEffect(() => {
    if (presupuesto) {
      setFormData({
        cliente_id: presupuesto.cliente_id || presupuesto.clienteId || '',
        descripcion: presupuesto.descripcion || '',
        monto: presupuesto.monto || 0,
        estado: presupuesto.estado || 'Pendiente'
      });
    } else {
      setFormData({
        cliente_id: '',
        descripcion: '',
        monto: 0,
        estado: 'Pendiente'
      });
    }
  }, [presupuesto]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, presupuesto ? presupuesto.id : null);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{presupuesto ? 'Editar Presupuesto' : 'Nuevo Presupuesto'}</h2>
          <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>CLIENTE</label>
            <select 
              name="cliente_id" 
              value={formData.cliente_id} 
              onChange={handleChange}
            >
              <option value="">Seleccionar cliente...</option>
              {clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nombre || cliente.name || cliente.razon_social}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label>DESCRIPCIÓN</label>
            <input 
              type="text" 
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Campaña digital Q3..." 
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>MONTO</label>
              <input 
                type="number" 
                name="monto"
                value={formData.monto}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            {presupuesto ? 'Actualizar Presupuesto' : 'Guardar Presupuesto'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NuevoPresupuestoModal;