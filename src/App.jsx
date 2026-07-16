import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProtectedRoute from './components/templates/ProtectedRoute/ProtectedRoute'; 
import Dashboard from './pages/Dashboard/Dashboard';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';


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
          
          
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;