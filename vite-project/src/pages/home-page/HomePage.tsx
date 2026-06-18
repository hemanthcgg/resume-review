import React, { useState } from "react";
import resumeIcon from "../../assets/hiring.png";
import "./HomePage.scss";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

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
                <LoginIcon fontSize="small" />
                Login
              </button>
              <button
                className={`btn ${activeTab === "signup" ? "btn--active" : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                <PersonAddAltOutlinedIcon fontSize="small" />
                Sign Up
              </button>
            </div>
            {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
};
