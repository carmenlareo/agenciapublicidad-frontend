import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProtectedRoute from './components/templates/ProtectedRoute/ProtectedRoute'; 
import Dashboard from './pages/Dashboard/Dashboard';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import Clientes from './pages/Clientes/Clientes';
import Presupuestos from './pages/Presupuestos/Presupuestos';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Home />} />

          <Route path="/login-admin" element={<LoginAdmin />} />

          {/* Ruta Protegida */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/presupuestos" element={<Presupuestos />} />
          <Route path="/Dashboard" element={<Dashboard />} />


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;