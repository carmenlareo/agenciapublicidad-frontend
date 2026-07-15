import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Verifica si el token existe en el almacenamiento local
  const isAuthenticated = !!localStorage.getItem('token'); 

  if (!isAuthenticated) {
    // Si no hay token, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si hay token, permite acceder al contenido
  return children;
};

export default ProtectedRoute;