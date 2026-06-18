import React from "react";

//Login form
const LoginForm: React.FC = () => (
  <>
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="********" required />
      </div>
      <button type="submit" className="submit-btn btn--primary">
        Login
      </button>
    </form>
  </>
);

export default LoginForm;
