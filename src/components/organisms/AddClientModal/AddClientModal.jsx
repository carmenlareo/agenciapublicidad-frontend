import React, { useState } from 'react';
import { FiX, FiUserPlus } from 'react-icons/fi';
import styles from './AddClientModal.module.css';
import { crearCliente } from '../../../services/clienteService';

const AddClientModal = ({ onClose, onClientAdded }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        email: '',
        telefono: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await crearCliente(formData);
            if (onClientAdded) onClientAdded();
            onClose();
        } catch (err) {
            console.error("Error al guardar el cliente:", err);
            setError("No se pudo guardar el cliente. Verifica los datos.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <FiUserPlus className={styles.icon} /> Agregar nuevo cliente
                    </h2>
                    <button className={styles.closeBtn} onClick={onClose}><FiX /></button>
                </div>

                {error && <p style={{ color: 'red', padding: '0 20px' }}>{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGrid}>
                        <div className={styles.field}>
                            <label>NOMBRE COMPLETO</label>
                            <input 
                                type="text" 
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Valentina Ruiz" 
                                required 
                            />
                        </div>
                        <div className={styles.field}>
                            <label>EMPRESA</label>
                            <input 
                                type="text" 
                                name="empresa"
                                value={formData.empresa}
                                onChange={handleChange}
                                placeholder="Ruiz & Asociados" 
                                required 
                            />
                        </div>
                        <div className={styles.field}>
                            <label>EMAIL</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="contacto@empresa.com" 
                                required 
                            />
                        </div>
                        <div className={styles.field}>
                            <label>TELÉFONO</label>
                            <input 
                                type="tel" 
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="+34 657789876" 
                                required 
                            />
                        </div>
                    </div>

                    <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <button type="button" onClick={onClose} className={styles.cancelBtn || ''}>Cancelar</button>
                        <button type="submit" disabled={loading} style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            {loading ? "Guardando..." : "Guardar cliente"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClientModal;