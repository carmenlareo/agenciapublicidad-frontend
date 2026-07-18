import React from 'react';
import Navbar from '../../components/organisms/Navbar/Navbar';
import { FiDollarSign, FiCheckCircle, FiClock, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const metrics = [
    {
      id: 1,
      title: 'TOTAL COBRADO',
      value: '7200 €',
      description: 'Presupuestos pagados',
      icon: <FiDollarSign className={styles.iconBlue} />,
    },
    {
      id: 2,
      title: 'POR COBRAR',
      value: '6950 €',
      description: 'Aceptados, sin cobrar aún',
      icon: <FiCheckCircle className={styles.iconGreen} />,
    },
    {
      id: 3,
      title: 'EN GESTIÓN',
      value: '3',
      description: 'Pendientes o enviados por WA',
      icon: <FiClock className={styles.iconOrange} />,
    },
    {
      id: 4,
      title: 'RECHAZADOS',
      value: '1',
      description: 'Este período',
      icon: <FiTrendingUp className={styles.iconRed} />,
    },
  ];

  return (
    <div className={styles.dashboardPage}>
      <Navbar />
      
      <main className={styles.dashboardContainer}>
        <h4 className={styles.sectionTitle}>Resumen:</h4>

        <div className={styles.metricsGrid}>
          {metrics.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>{item.title}</span>
                <span className={styles.cardIcon}>{item.icon}</span>
              </div>
              <div className={styles.cardValue}>{item.value}</div>
              <div className={styles.cardDescription}>{item.description}</div>
            </div>
          ))}
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h3 className={styles.chartTitle}>Actividad facturación</h3>
              <p className={styles.chartSubtitle}>Últimos 6 meses</p>
            </div>
            <FiBarChart2 className={styles.chartIcon} />
          </div>
          <div className={styles.chartPlaceholder}></div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;