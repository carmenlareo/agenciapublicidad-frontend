import React, { useState } from 'react';
import Navbar from '../../components/organisms/Navbar/Navbar';
import NuevoPresupuestoModal from '../../components/organisms/NuevoPresupuestoModal/NuevoPresupuestoModal';
import styles from './Presupuestos.module.css';
import PresupuestosList from '../../components/organisms/PresupuestosList/PresupuestosList';

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
                {/* Aquí irá tu tabla de presupuestos más adelante */}

                <NuevoPresupuestoModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </main>
        </div>
    );
};

export default Presupuestos;