import React from 'react';
import './MainContent.css'; // Assuming you add styles here

const MainContent = () => {
  return (
    <section className="main-content">
      <h1>Save Lives by Donating Blood!!</h1>
      <p>Our platform helps you find blood donation opportunities and connect you with those in need.</p>
      <button className="find-blood-drive">Find A Blood Drive</button>
      <button className="donate-now">Donate Now</button>
    </section>
  );
};

export default MainContent;