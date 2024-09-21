import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How BloodAfya Works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1: Post a Blood Drive</h3>
          <p>
            Whether you're organizing a blood drive or need donors for a patient, post your blood drive with all the necessary details like location, blood type needed, and date.
          </p>
        </div>
        <div className="step">
          <h3>Step 2: Get Matched with Donors</h3>
          <p>
            BloodAfya uses intelligent matching algorithms to connect donors with blood recipients based on their blood type and location. Recipients can accept donations with just a few clicks.
          </p>
        </div>
        <div className="step">
          <h3>Step 3: Contact the Donor</h3>
          <p>
            Once a match is found, donors and recipients can contact each other to arrange for the donation process. BloodAfya ensures a smooth and easy communication process.
          </p>
        </div>
      </div>
      <div className="cta">
        <h4>Join BloodAfya Today!</h4>
        <p>Saving lives has never been easier. Sign up today and make a difference in your community.</p>
      </div>
    </section>
  );
};

export default HowItWorks;