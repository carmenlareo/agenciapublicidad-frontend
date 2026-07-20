import api from '../api/api';

export const getPresupuestos = async (estado = '', search = '') => {
  try {
    const params = {};
    if (estado && estado !== 'Todos') params.estado = estado;
    if (search) params.search = search;

    const response = await api.get('/presupuestos', { params });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los presupuestos:', error);
    throw error;
  }
};

export const deletePresupuesto = async (id) => {
    try {
        const response = await api.delete(`/presupuestos/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el presupuesto:', error);
        throw error;
    }
};

export const updatePresupuesto = async (id, presupuestoData) => {
  try {
    const response = await api.put(`/presupuestos/${id}`, presupuestoData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el presupuesto:', error);
    throw error;
  }
};