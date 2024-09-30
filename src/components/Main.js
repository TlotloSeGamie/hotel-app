import { useState } from "react";
import "./Main.css"

const Main = () => {
    const [adminName, setAdminName] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [adminRole, setAdminRole] = useState("");
    const [password, setPassword] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!adminName || !adminEmail || !adminRole || !password) {
            alert("Please fill out all fields");
            return;
        }

        console.log("Form Submitted with: ", { adminName, adminEmail, adminRole, password });
        setFormSubmitted(true);
        
        setAdminName("");
        setAdminEmail("");
        setAdminRole("");
        setPassword("");
    };

    return (
        <div className="main-container">
            <h1>Admin Form</h1>
            {formSubmitted ? (
                <div className="success-message">
                    <p>Form submitted successfully!</p>
                </div>
            ) : (
                <form className="admin-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="adminName">Admin Name:</label>
                        <input
                            type="text"
                            id="adminName"
                            value={adminName}
                            onChange={(e) => setAdminName(e.target.value)}
                            placeholder="Enter Admin Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="adminEmail">Admin Email:</label>
                        <input
                            type="email"
                            id="adminEmail"
                            value={adminEmail}
                            onChange={(e) => setAdminEmail(e.target.value)}
                            placeholder="Enter Admin Email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="adminRole">Admin Role:</label>
                        <input
                            type="text"
                            id="adminRole"
                            value={adminRole}
                            onChange={(e) => setAdminRole(e.target.value)}
                            placeholder="Enter Admin Role"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Main;
