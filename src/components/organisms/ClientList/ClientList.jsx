import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './ClientList.module.css';
import { getClientes } from '../../../services/clienteService';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const data = await getClientes();
                setClients(data);
            } catch (error) {
                console.error("Error al cargar los clientes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    const filteredClients = clients.filter(client => 
        client.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.empresa?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className={styles.container}>Cargando clientes...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <FiSearch />
                <input 
                    type="text" 
                    placeholder="Buscar por nombre o empresa..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>{filteredClients.length} registros</span>
            </div>

<div className={styles.tableContainer}>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CLIENTE</th>
                        <th>EMPRESA</th>
                        <th>EMAIL</th>
                        <th>TELÉFONO</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.nombre}</td>
                            <td>{client.empresa}</td>
                            <td>{client.email}</td>
                            <td>{client.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ClientList;