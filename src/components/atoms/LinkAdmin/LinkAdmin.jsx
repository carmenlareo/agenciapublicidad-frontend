import React from 'react';
import { Link } from 'react-router-dom';

const LinkAdmin = ({ to, label }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {label}
    </Link>
  );
};

export default LinkAdmin;