import React from 'react';
import LinkAdmin from '../../atoms/LinkAdmin'; // Importa el átomo
import styles from './FooterHome.module.css';

const FooterHome = () => {
  return (
    <footer className={styles.footer}>
      <p>Agencia publicidad Solutions 2026</p>
      <div className={styles.footerLinks}>
        <LinkAdmin to="/privacidad" label="Privacidad" /> | 
        <LinkAdmin to="/terminos" label="Terminos" /> | 
        <LinkAdmin to="/admin" label="Admin" />
      </div>
    </footer>
  );
};

export default FooterHome;