import React from "react";

//Sign up form
const SignUpForm: React.FC = () => (
  <>
    <form className="signup-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="form-group">
        <label htmlFor="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" name="jobTitle" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" />
      </div>
      <button type="submit" className="submit-btn btn--primary">
        Sign Up
      </button>
    </form>
  </>
);

export default SignUpForm;
