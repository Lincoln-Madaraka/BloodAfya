import React from 'react';
import { Link } from 'react-router-dom';
import BIGLOGO from '/assets/BIGLOGO.png';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <img src={BIGLOGO} alt="BIGLOGO" onClick={() => window.location.href = '/'} />
      <nav class>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/login">Login/Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;