import React from 'react';
import './SignUp.css'; // Assuming you add styles here

const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="guest">
        <h2>Continue as Guest</h2>
        <button>Continue without sign up</button>
      </div>
      <div className="login">
        <h2>Login</h2>
        <form>
          <label>Email/Phone</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;