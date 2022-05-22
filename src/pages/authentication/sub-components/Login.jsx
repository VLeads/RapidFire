import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { login } from "redux/slices/authSlice";

export const Login = ({ isLoginOpen, setIsLoginOpen }) => {
  const [inputType, setInputType] = useState("password");
  const [loginFormData, setLoginFormData] = useState({
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

    setLoginFormData((loginFormData) => ({
      ...loginFormData,
      [e.target.name]: value,
    }));
  };

  const togglePassword = () => {
    setInputType((inputType) =>
      inputType === "password" ? "text" : "password"
    );
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    dispatch(login(e, loginFormData));
  };

  return (
    <div
      id="myModal"
      className="modal"
      style={isLoginOpen ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content box-shadow">
        <div className="modal-body">
          <form
            className="card-vertical signup-form"
            onSubmit={(e) => submitLoginHandler(e)}
          >
            <div className="close-icon" onClick={() => setIsLoginOpen(false)}>
              &times;
            </div>
            <h3>Login</h3>

            <div className="input-group-parent">
              <div className="input-group">
                <label>username</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="username"
                  maxLength="40"
                  name="username"
                  onChange={inputChange}
                  value={loginFormData.username}
                  required
                />
              </div>

              <div className="input-group ">
                <label> Password </label>
                <div className="password-input">
                  <input
                    className="input-box"
                    type={inputType}
                    placeholder="******"
                    name="password"
                    maxLength="28"
                    onChange={inputChange}
                    value={loginFormData.password}
                    required
                  />
                  <div
                    type=""
                    className="password-eye-btn"
                    onClick={() => {
                      togglePassword();
                    }}
                  >
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
                <label htmlFor="accept">
                  <input type="checkbox" name="accept" />
                  Remember me
                </label>
                <a className="forgot-pass" href="">
                  Forgot your Password?
                </a>
              </div>

              <button className="btn btn-primary" type="submit">
                Login
              </button>
              <button
                className="btn btn-secondary"
                value="guest"
                onClick={(e) => {
                  submitLoginHandler(e);
                }}
              >
                Login as Guest
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
