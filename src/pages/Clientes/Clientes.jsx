import React, { useState } from 'react';
import { FiUserPlus, FiPlus } from 'react-icons/fi';
import Navbar from '../../components/organisms/Navbar/Navbar';
import AddClientModal from '../../components/organisms/AddClientModal/AddClientModal';
import styles from './Clientes.module.css';
import ClientList from '../../components/organisms/ClientList/ClientList';

const Clientes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      
      <main>
        <div className={styles.addClientCard} onClick={() => setIsModalOpen(true)}>
          <div className={styles.addClientContent}>
            <FiUserPlus className={styles.iconBackground} />
            <span>Agregar nuevo cliente</span>
          </div>
          <FiPlus className={styles.plusIcon} />
        </div>
        <ClientList />
      </main>

    
      {isModalOpen && <AddClientModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Clientes;