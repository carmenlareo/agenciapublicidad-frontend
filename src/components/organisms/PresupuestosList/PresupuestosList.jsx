import React from 'react';
import { FiSearch, FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import styles from './PresupuestosList.module.css';

const presupuestos = [
  { id: 'P001', cliente: 'Valentina Ruiz', fecha: '2025-06-01', desc: 'Campaña digital Q3', monto: '4850 €', estado: 'Aceptado' },
  { id: 'P002', cliente: 'Martín Herrera', fecha: '2025-06-08', desc: 'Diseño de identidad', monto: 'Sin monto', estado: 'Pendiente' },
];

const PresupuestosList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <input className={styles.searchBar} placeholder="Buscar presupuesto..." />
        <button className={`${styles.filterBtn} ${styles.active}`}>Todos</button>
        <button className={styles.filterBtn}>Pendiente</button>
        <button className={styles.filterBtn}>Aceptado</button>
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
              <td style={{fontWeight: 600}}>{p.cliente}</td>
              <td>{p.fecha}</td>
              <td>{p.desc}</td>
              <td style={{fontWeight: 600}}>{p.monto}</td>
              <td><span className={styles.statusBadge}>{p.estado}</span></td>
              <td>
                <FiEye /> <FiEdit2 /> <FiTrash2 />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PresupuestosList;