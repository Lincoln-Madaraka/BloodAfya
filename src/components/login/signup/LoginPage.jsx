import React from 'react';
import './LoginPage.css'; // Assuming you add styles here

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-div">
        <h2>Guests/New Users</h2>
        <button className="signup-button">Sign Up</button>
        <p className="join-text">Join BloodAfya Today, Let's impact lives.</p>
        <hr className="divider"/>
        <a href="#" className="continue-link">Continue without signing up</a>
      </div>
    <div className="right-div">
        <h2>Users/Login</h2>
        <input type="text" placeholder="Email/Phone number" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-button">Login</button>
        <hr className="divider" />
        <a href="#" className="continue-link">Forgot Password?</a>
      </div>
    </div>
  );
};

export default LoginPage;