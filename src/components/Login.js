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
      alert("Successully logged-In!");
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="gone">
          <img src={logo} className="logone" />
        </div>
        <div className="ma-text">
          <h1>
            <b>Create an Account</b>
          </h1>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Forgot your password?</h5>
          <button className="login-btn" onClick={handleSignIn}>
            LOGIN
          </button>
          <h3>
            Don't have an account? <span>Sign Up</span>
          </h3>

          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {error && <p>Error: {error}</p>}

          <div className="or">
            <div className="line-1"></div>
            <h2>OR</h2>
            <div className="line2"></div>
          </div>
          <h3>Login with GOOGLE</h3>
        </div>
      </div>
      <div className="login-img">
        <div className="sign">
          <img src={loginimg} />
        </div>
      </div>
    </div>
  );
};

export default Login;
