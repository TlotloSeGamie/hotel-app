import "./Login.css";
import { useState, useEffect } from "react";
import { signIn } from "../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import logo from "../images/Screenshot-logo.jpg";
import loginimg from "../images/358884066.jpg";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (user) {
      alert("Successfully logged in!");
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="gone">
          <img src={logo} className="logone" alt="Logo" />
        </div>
        <div className="ma-text">
          <h1>
            <b>Login</b>
          </h1>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span 
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password
          </span>
          <button className="login-btn" onClick={handleSignIn}>
            LOGIN
          </button>
          <h5>
            Don't have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/register")}
            >
              Sign Up
            </span>
          </h5>

          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {error && <p>Error: {error}</p>}
        </div>

        
      </div>
      <div className="login-img">
        <div className="sign">
          <img src={loginimg} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
