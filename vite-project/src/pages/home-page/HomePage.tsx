import React, { useState } from "react";
import resumeIcon from "../../assets/hiring.png";
import "./HomePage.scss";

//Login form
const LoginForm = () => (
  <div className="form-container">
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit" className="submit-btn btn--primary">
        Login
      </button>
    </form>
  </div>
);

//Sign up form
const SignUpForm = () => (
  <div className="form-container">
    <form className="signup-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" required />
      </div>
      <div className="form-group">
        <label htmlFor="jobTitle">Job Title</label>
        <br />
        <input type="text" id="jobTitle" name="jobTitle" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <br />
        <textarea id="description" name="description" />
      </div>
      <button type="submit" className="submit-btn btn--primary">
        Sign Up
      </button>
    </form>
  </div>
);

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="home-page">
      <div className="home-page__info">
        <div className="home-page__info-content">
          <img
            src={resumeIcon}
            alt="Resume Review"
            className="home-page__icon"
          />
          <h1 className="home-page__title">Resume Review</h1>
          <p className="home-page__description">
            Your one-stop solution for resume feedback and mock interviews.
          </p>

          <div className="home-page__login">
            <div className="home-page__login-controls">
              <button
                className={`btn ${activeTab === "login" ? "btn--active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`btn ${activeTab === "signup" ? "btn--active" : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>
            <div className="home-page__login-form-section">
              {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
