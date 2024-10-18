import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../redux/authSlice"; 
import logo from "../images/Screenshot-logo.jpg"; 
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { loading, error, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {


    dispatch(resetPassword({email}));
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <div className="logo-container">
          <img src={logo} className="logone" alt="Logo" /> 
        </div>
        <div className="form-content">
          <h1>
            <b>Forgot Password</b>
          </h1>
          <p>Enter your email to receive a password reset link.</p>
          <input
            type="text"
            placeholder="Email"
         
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="reset-btn" onClick={handleReset}>
            Send Reset Link
          </button>
          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {message && <p>{message}</p>} 
          {error && <p>Error: {error}</p>} 
          <a href="/login" className="back-to-login">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
