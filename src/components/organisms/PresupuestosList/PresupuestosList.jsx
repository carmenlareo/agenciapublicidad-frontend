import React, { useState, useEffect } from 'react';
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './PresupuestosList.module.css';
import { getPresupuestos, deletePresupuesto, updatePresupuesto } from "../../../services/presupuestosService";
import NuevoPresupuestoModal from '../NuevoPresupuestoModal/NuevoPresupuestoModal';


const PresupuestosList = () => {
  const [presupuestos, setPresupuestos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [estadoFiltro, setEstadoFiltro] = useState('Todos');

  useEffect(() => {
    fetchPresupuestos();
  }, [estadoFiltro, searchTerm]);

  const fetchPresupuestos = async () => {
    try {
      const data = await getPresupuestos(estadoFiltro, searchTerm);
      setPresupuestos(data);
    } catch (error) {
      console.error("Error al cargar los presupuestos:", error);
    }
  };

  const handleWhatsAppShare = (presupuesto) => {
    // Aquí puedes personalizar el mensaje que se enviará por WhatsApp
    const clienteNombre = presupuesto.cliente?.name || presupuesto.cliente_nombre || 'Cliente';
    const mensaje = `Hola ${clienteNombre}, te compartimos el presupuesto por un monto de ${presupuesto.monto}. Descripción: ${presupuesto.descripcion}`;
    const telefono = presupuesto.cliente?.phone || ''; // Asegúrate de que el backend devuelva el teléfono del cliente

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const handleDelete = async (id) => {
    console.log("Intentando eliminar el presupuesto con ID:", id);
    if (window.confirm("¿Estás seguro de que deseas eliminar este presupuesto?")) {
      try {
        await deletePresupuesto(id);
        window.location.reload();
      } catch (error) {
        console.error("Error al eliminar el presupuesto:", error);
      }
    }
  };

const [isEditModalOpen, setIsEditModalOpen] = useState(false);
const [selectedPresupuesto, setSelectedPresupuesto] = useState(null);

const handleSavePresupuesto = async (formData, id) => {
  try {
    if (id) {
      // Si el ID existe, actualizamos el presupuesto existente
      await presupuestosService.updatePresupuesto(id, formData);
    } else {
      // Si no existe, creamos uno nuevo
      await presupuestosService.createPresupuesto(formData);
    }
    
    // Cerramos el modal y refrescamos la lista
    setIsEditModalOpen(false);
    setSelectedPresupuesto(null);
    // Llama aquí a tu función para recargar la tabla (ej. fetchPresupuestos o loadPresupuestos)
  } catch (error) {
    console.error("Error al guardar el presupuesto:", error);
  }
};


 const handleEdit = (item) => {
  setSelectedPresupuesto(item);
  setIsEditModalOpen(true);
};

  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Buscar presupuesto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.filters}>
          {['Todos', 'Pendiente', 'Enviado', 'Aceptado', 'Rechazado', 'Pagado'].map((estado) => (
            <button
              key={estado}
              className={`${styles.filterBtn} ${estadoFiltro === estado ? styles.active : ''}`}
              onClick={() => setEstadoFiltro(estado)}
            >
              {estado}
            </button>
          ))}
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>CLIENTE</th>
            <th>FECHA</th>
            <th>DESCRIPCIÓN</th>
            <th>MONTO</th>
            <th>ESTADO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {presupuestos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>{item.cliente_id}</td>
              <td>{item.fecha}</td>
              <td>{item.descripcion}</td>
              <td>{item.monto}</td>
              <td>
                <span className={`${styles.statusBadge} ${styles[item.estado?.toLowerCase()]}`}>
                  {item.estado}
                </span>
              </td>
              <td className={styles.actionsCell}>
                <button
                  title="Editar"
                  className={styles.actionBtn}
                  onClick={() => handleEdit(item)}
                >
                  <FiEdit2 />
                </button>
                <button title="Enviar por WhatsApp" className={`${styles.actionBtn} ${styles.whatsappBtn}`} onClick={() => handleWhatsAppShare(item)}>
                  <FaWhatsapp />
                </button>
                <button
                  title="Eliminar"
                  className={styles.actionBtn}
                  onClick={() => handleDelete(item.id)}
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

{isEditModalOpen && (
  <NuevoPresupuestoModal 
    isOpen={isEditModalOpen}
    presupuesto={selectedPresupuesto} 
    onClose={() => setIsEditModalOpen(false)} 
    onSave={(datosActualizados, id) => {
      // Aquí actualizarás la lista o llamarás a tu servicio
      setIsEditModalOpen(false);
    }}
  />
)}

    </div>
  );
};

export default PresupuestosList;