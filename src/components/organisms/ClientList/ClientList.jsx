import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './ClientList.module.css';

const clients = [
  { id: 'C001', name: 'Valentina Ruiz', company: 'Ruiz & Asociados', email: 'v.ruiz@ruizasoc.com', phone: '+54 11 4523-8901' },
  { id: 'C002', name: 'Martín Herrera', company: 'Herrera Construcciones', email: 'martin@herreraconstruc.com', phone: '+54 11 3871-2244' },
  { id: 'C003', name: 'Sofía Mendoza', company: 'TechFarm S.A.', email: 'sofia.m@techfarm.ar', phone: '+54 11 5566-7788' },
];

const ClientList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <FiSearch />
        <input type="text" placeholder="Buscar por nombre o empresa..." />
        <span>{clients.length} registros</span>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>CLIENTE</th>
            <th>EMPRESA</th>
            <th>EMAIL</th>
            <th>TELÉFONO</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td className={styles.clientName}>{client.name}</td>
              <td>{client.company}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;