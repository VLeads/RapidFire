import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./authentication.css";
import { Login } from "./sub-components/Login";
import { Signup } from "./sub-components/Signup";
import { LeftSidebarData } from "data/left-sidebar-data";

export const Authentication = () => {
  const [slider, setSlider] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const { logoImg } = LeftSidebarData;

  const pathname = useLocation();

  return (
    <div className="auth__container">
      <div className="auth__wrapper auth-left">
        <h2>Share moments</h2>
        <h2>Connect</h2>
        <h2>Know the World</h2>

        <div className="logo-name">
          Rapid <span style={{ color: "orange" }}>Fire</span>
        </div>
        <div className="made-with">
          
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/vleads"
              style={{
                textDecoration: "underline",
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Vishal Kumar
            </a>
          </p>
        </div>
      </div>
      <div className="auth__wrapper auth-right">
        <div className="logo-main">
          <div>
            <img className="logo-icon" src={logoImg.src} alt="logo" />
          </div>
        </div>
        <div className="auth">
          <h2>Join Us</h2>
          <button
            className="btn btn-primary"
            onClick={() => setIsSignupOpen(true)}
          >
            Sign Up now
          </button>
        </div>

        <div className="auth">
          <h2>Already have an account?</h2>
          <button
            className="btn btn-primary btn-primary-outline"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </button>
        </div>
        <Login isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
        <Signup isSignupOpen={isSignupOpen} setIsSignupOpen={setIsSignupOpen} />
      </div>
    </div>
  );
};
