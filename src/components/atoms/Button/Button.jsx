import React from 'react';
import './Button.module.css'; // Mantiene su CSS global o local según prefieras

const Button = ({ text, icon, isActive, onClick }) => {
    return (
        <button 
            className={`btn-agencia ${isActive ? 'active' : ''}`} 
            onClick={onClick}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            <span className="btn-text">{text}</span>
        </button>
    );
};

export default Button;