import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signup } from "redux/slices/authSlice";

export const Signup = ({ isSignupOpen, setIsSignupOpen }) => {
  const [inputType, setInputType] = useState("password");

  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { token, status } = useSelector((state) => state.auth);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/home";

  useEffect(() => {
    token && navigate(from, { replace: true });
  }, [token]);

  const inputChange = (e) => {
    const value = e.target.value;
    setSignupFormData((signupFormData) => ({
      ...signupFormData,
      [e.target.name]: value,
    }));
  };

  const togglePassword = () => {
    setInputType((inputType) =>
      inputType === "password" ? "text" : "password"
    );
  };

  const submitSignupHandler = (e) => {
    e.preventDefault();
    dispatch(signup(JSON.stringify(signupFormData)));
  };

  return (
    <div
      id="myModal"
      className="modal"
      style={isSignupOpen ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content box-shadow">
        <div className="modal-body">
          <form
            className="card-vertical signup-form"
            onSubmit={(e) => submitSignupHandler(e)}
          >
            <div className="close-icon" onClick={() => setIsSignupOpen(false)}>
              &times;
            </div>
            <h3>Signup</h3>

            <div className="input-group-parent">
              <div className="input-group">
                <label>First Name</label>
                <input
                  className="input-box"
                  maxLength="32"
                  type="text"
                  name="firstName"
                  placeholder="Vishal"
                  onChange={inputChange}
                  value={signupFormData.firstName}
                  required
                />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input
                  className="input-box"
                  maxLength="32"
                  type="text"
                  name="lastName"
                  placeholder="Kumar"
                  onChange={inputChange}
                  value={signupFormData.lastName}
                  required
                />
              </div>
              <div className="input-group">
                <label>Username</label>
                <input
                  className="input-box"
                  maxLength="40"
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={inputChange}
                  value={signupFormData.username}
                  required
                />
              </div>

              <div className="input-group">
                <label> Password </label>
                <div className="password-input">
                  <input
                    className="input-box"
                    maxLength="28"
                    type={inputType}
                    name="password"
                    placeholder="******"
                    onChange={inputChange}
                    value={signupFormData.password}
                    required
                  />
                  <div className="password-eye-btn" onClick={togglePassword}>
                    <i
                      className={`fa fa-eye${
                        inputType === "password" ? "-slash" : ""
                      }`}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>

              <div className="select-box">
                By continuing, you agree to RapidFire's Terms of Use and Privacy
                Policy.
              </div>

              <button className="btn btn-primary" type="submit">
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
