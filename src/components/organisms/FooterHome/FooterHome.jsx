import React from 'react';
import LinkAdmin from '../../atoms/LinkAdmin/LinkAdmin'; 
import styles from './FooterHome.module.css';

const FooterHome = () => {
  return (
    <footer className={styles.footer}>
      <p>Agencia Digital Solutions - 2026</p>
      <div className={styles.footerLinks}>
        <LinkAdmin to="/privacidad" label="Privacidad" /> |
        <LinkAdmin to="/terminos" label="Terminos" /> |
        {/* Aquí cambiamos el destino al path de la nueva página */}
        <LinkAdmin to="/Dashboard" label="Dashboard" /> |
        <LinkAdmin to="/login-admin" label="Admin" />
      </div>
    </footer>
  );
};

export default FooterHome;