import React from 'react';
import styles from './CardContainer.module.css'; // Apunta al nuevo archivo

const CardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.card} ${styles.sede}`}>
        <div>📍</div>
        <div>
          <strong>Sede Creativa</strong>
          <p>C/ Distrito 404, Madrid</p>
        </div>
      </div>

      <div className={`${styles.card} ${styles.llamanos}`}>
        <div>📞</div>
        <div>
          <strong>Llámanos</strong>
          <p>+34 900 123 456</p>
        </div>
      </div>

      {/* <div className={`${styles.card} ${styles.formulario}`}>
        <strong>Rellena nuestro FORMULARIO</strong>
      </div>*/}
    </div> 
  );
};

export default CardContainer;