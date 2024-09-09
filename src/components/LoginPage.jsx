import React from 'react';
import './LoginPage.css'; // Assuming you add styles here

const LoginPage = () => {
  return (
    <section className="login-page">
      <h1>Login or Sign Up</h1>
      <div className="login-options">
        <div className="guest-login">
          <h2>Continue as Guest</h2>
          <button>Continue without sign up</button>
        </div>
        <div className="user-login">
          <h2>Login</h2>
          <form>
            <label>Email/Phone</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;