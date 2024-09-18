import "./Login.css";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import logo from "../images/Screenshot-logo.jpg";
import signimg from "../images/balco.jpeg";
import { signUp } from "../redux/authSlice";



const Register = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSignUp = () =>{

        console.log(email)
        console.log(password)

        dispatch(signUp(email, password))

    }
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="Confirm Password"
                        name="concirm password"
                    />

                    <button className="login-btn" onClick={handleSignUp}>Sign Up</button>
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