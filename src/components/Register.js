import "./Login.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import logo from "../images/Screenshot-logo.jpg";
import signimg from "../images/balco.jpeg";
import { signUp } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";




const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [userName, setUserName] = useState('');
    const { user, loading, error } = useSelector((state) => state.auth);

    const navigate = useNavigate()

    console.log(loading)
    console.log(error);
    console.log(user)

    const dispatch = useDispatch()

    const handleSignUp = () => {

        dispatch(signUp({ email, password, userName, phone }))

    }
    useEffect(() => {
        if (user) {
            alert("Registered Successully!");
            navigate("/");
            
            
        }
    }, [user, navigate]);

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="gone">
                    <img src={logo} className="logone" />
                </div>
                <div className="ma-text" >
                    <h1><b>Create an Account</b></h1>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Contact Phone"
                        name="contact"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="concirm password"
                    />

                    <button className="login-btn" onClick={handleSignUp}>Sign Up</button>
                    <h3>Already have an account? <span>Login</span></h3>

                    {loading && <h1>Loading</h1>}
                    {error && <p>Error: {error}</p>}


                </div>
            </div>
            <div className="reg-img">
                <img src={signimg} className="sign" />
            </div>
        </div>
    )
}

export default Register;