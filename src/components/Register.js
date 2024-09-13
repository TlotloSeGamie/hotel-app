import "./Login.css";
import logo from "../images/Screenshot-logo.jpg";
import signimg from "../images/balco.jpeg";

const Register = () => {
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
                        placeholder="Username"
                        name="username"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        type="number"
                        placeholder="Contact Phone"
                        name="contact"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <input 
                        type="password"
                        placeholder="Confirm Password"
                        name="concirm password"
                    />

                    <button className="login-btn">Sign Up</button>
                    <h3>Already have an account? <span>Login</span></h3>
                    
                </div>
            </div>
            <div className="reg-img">
                <img src={signimg} className="sign"/>
            </div>
        </div>
    )
}

export default Register;