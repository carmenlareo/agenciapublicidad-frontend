import React from 'react';
import { FiEye, FiEdit2, FiTrash2, FiMessageSquare } from 'react-icons/fi';
import styles from './PresupuestosList.module.css';

const presupuestos = [
  { id: 'P001', cliente: 'Valentina Ruiz', fecha: '2025-06-01', desc: 'Campaña digital Q3 — Brand awareness + conver...', monto: '4850 €', estado: 'Aceptado' },
  { id: 'P002', cliente: 'Martín Herrera', fecha: '2025-06-08', desc: 'Diseño de identidad corporativa — Branding com...', monto: 'Sin monto', estado: 'Pendiente' },
  { id: 'P003', cliente: 'Sofía Mendoza', fecha: '2025-06-14', desc: 'Desarrollo web + integración CRM — Fase 2', monto: '7200 €', estado: 'Pagado' },
  { id: 'P004', cliente: 'Diego Castillo', fecha: '2025-06-20', desc: 'Estrategia de redes sociales — Paquete semestral', monto: '950 €', estado: 'Enviado' },
];

const PresupuestosList = () => {
  // Función para obtener la clase del badge según el estado
  const getStatusClass = (estado) => {
    switch (estado) {
      case 'Aceptado': return styles.estadoAceptado;
      case 'Pendiente': return styles.estadoPendiente;
      case 'Pagado': return styles.estadoPagado;
      case 'Enviado': return styles.estadoEnviado;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <input className={styles.searchBar} placeholder="Buscar presupuesto..." />
        <button className={`${styles.filterBtn} ${styles.active}`}>Todos</button>
        <button className={styles.filterBtn}>Pendiente</button>
        <button className={styles.filterBtn}>Enviado</button>
        <button className={styles.filterBtn}>Aceptado</button>
        <button className={styles.filterBtn}>Rechazado</button>
        <button className={styles.filterBtn}>Pagado</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th><th>CLIENTE</th><th>FECHA</th><th>DESCRIPCIÓN</th><th>MONTO</th><th>ESTADO</th><th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {presupuestos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td style={{ fontWeight: 600 }}>{p.cliente}</td>
              <td>{p.fecha}</td>
              <td>{p.desc}</td>
              <td style={{ fontWeight: 600 }}>{p.monto}</td>
              <td>
                <span className={`${styles.statusBadge} ${getStatusClass(p.estado)}`}>
                  {p.estado === 'Enviado' ? 'Enviado por WA' : p.estado}
                </span>
              </td>
              <td>
                <div className={styles.actions}>
                  <FiEye /> 
                  <FiEdit2 /> 
                  {p.id === 'P002' || p.id === 'P004' ? <FiMessageSquare /> : null}
                  <FiTrash2 />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PresupuestosList;