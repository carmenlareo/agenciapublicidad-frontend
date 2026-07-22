import React, { useState } from 'react';
import Navbar from '../../components/organisms/Navbar/Navbar';
import NuevoPresupuestoModal from '../../components/organisms/AddPresupuestoModal/AddPresupuestoModal';
import styles from './Presupuestos.module.css';
import PresupuestosList from '../../components/organisms/PresupuestosList/PresupuestosList';
import { crearPresupuesto } from '../../services/presupuestosService';

const Presupuestos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <main className={styles.mainContent}>
                <div className={styles.toolbar}>
                    <button
                        className={styles.primaryButton}
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Nuevo
                    </button>

                </div>
                <PresupuestosList />
                {isModalOpen && (
                    <NuevoPresupuestoModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSave={() => {
                            window.location.reload(); // Recarga la lista al guardar con éxito
                        }}
                    />
                )}
            </main>
        </div>
    );
};

export default Presupuestos;