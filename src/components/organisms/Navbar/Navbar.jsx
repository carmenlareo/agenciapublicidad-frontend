import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes, FaThLarge, FaUsers, FaFileInvoiceDollar } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.mobileMenuOpen : ''}`}>
      <Link to="/" className={styles.logo}>Agencia SOLUTIONS</Link>

      <div className={styles.hamburgerContainer} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? `${styles.navBtn} ${styles.active}` : styles.navBtn}>
            <FaThLarge /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/clientes" className={({isActive}) => isActive ? `${styles.navBtn} ${styles.active}` : styles.navBtn}>
            <FaUsers /> Clientes
          </NavLink>
        </li>
        <li>
          <NavLink to="/presupuestos" className={({isActive}) => isActive ? `${styles.navBtn} ${styles.active}` : styles.navBtn}>
            <FaFileInvoiceDollar /> Presupuestos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;