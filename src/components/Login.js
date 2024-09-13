import "./Login.css";
import logo from "../images/Screenshot-logo.jpg";
import loginimg from "../images/358884066.jpg";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <div className="gone">
                <img src={logo} className="logone"/>
                </div>
                <div className="ma-text" >
                    <h1><b>Create an Account</b></h1>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                    />
                    <h5>Forgot your password?</h5>
                    <button className="login-btn">LOGIN</button>
                    <h3>Don't have an account? <span>Sign Up</span></h3>
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
    )
}

export default Login;