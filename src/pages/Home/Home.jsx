import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import React from 'react';
import FormularioContacto from '../../components/molecules/FormularioContacto/FormularioContacto';
import CardContainer from '../../components/molecules/CardContainer/CardContainer';
import FooterHome from '../../components/organisms/FooterHome/FooterHome';
import FondoHome from '../../components/atoms/FondoHome/FondoHome';
import fondoImage from '../../assets/fondoSolution.svg';

const Home = () => {

  return (
    <>
   
      <div className={styles.container}>

      <h1 className={styles.title}>SOLUTIONS DIGITAL AGENCIA, Publicidad, Creatividad y Desarrollo.</h1>
      <h2 className={styles.subtitle}>Describe y cuéntanos qué necesitas.</h2>
       
      <CardContainer />
      
      <FormularioContacto />
      
      <FooterHome />
      </div>

      

    </>
  );
};

export default Home;