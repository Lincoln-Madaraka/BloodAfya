import React from 'react';
import './FAQPage.css'; // Assuming you add styles here

const FAQPage = () => {
  return (
    <section className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>What is BloodAfya?</h2>
        <p>BloodAfya connects blood donors with recipients who need blood.</p>
      </div>
      <div className="faq-item">
        <h2>How can I donate blood?</h2>
        <p>Find a blood drive and register to donate.</p>
      </div>
      {/* Add more FAQ items as needed */}
    </section>
  );
};

export default FAQPage;