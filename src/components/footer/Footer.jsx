import React from 'react';
import './Footer.css'; // Assuming you add styles here

const Footer = () => {
  return (
    <footer>
      <p>BloodAfya © 2024</p>
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="mailto:info@bloodafya.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;