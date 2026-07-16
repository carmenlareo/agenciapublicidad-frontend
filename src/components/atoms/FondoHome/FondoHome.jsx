
import React from 'react';
import styles from './FondoHome.module.css'; 
import fondoImage from '../../../assets/fondoSolutionsvg.svg';

const FondoHome = ({ children }) => {
  return (
    <div 
      className={styles.contenedor} 
      style={{ backgroundImage: `url(${fondoImage})` }} // Aplicado dinámicamente
    >
      {children}
    </div>
  );
};

export default FondoHome;