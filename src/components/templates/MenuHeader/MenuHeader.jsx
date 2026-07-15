import React from 'react';
import Button from '../atoms/Button';
import { FaThLarge, FaUsers, FaFileInvoice } from 'react-icons/fa';
import styles from './MenuHeader.module.css'; // Importación de módulos

const MenuHeader = () => {
    return (
        <header className={styles.menuHeader}>
            <div className={styles.logoSection}>
                <div className={styles.logoBox}>A</div>
                <h1 className={styles.logoText}>Agencia CRM</h1>
            </div>

            <nav className={styles.navButtons}>
                <Button text="Dashboard" icon={<FaThLarge />} />
                <Button text="Clientes" icon={<FaUsers />} isActive={true} />
                <Button text="Presupuestos" icon={<FaFileInvoice />} />
            </nav>
        </header>
    );
};

export default MenuHeader;