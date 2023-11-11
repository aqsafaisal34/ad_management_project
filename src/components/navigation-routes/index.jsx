import React from 'react';
import { Link } from 'react-router-dom';


const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
};

function Navigation() {
  return (
    <div>
       <nav style={{ background: 'inherit', padding: '1rem' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-between' }}>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" style={linkStyle}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/plan-list" style={linkStyle}>
           Plan List
          </Link>
        </li>
        <li>
          <Link to="/create-plan" style={linkStyle}>
            Create Plan
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navigation
