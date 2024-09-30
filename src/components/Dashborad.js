import React, { useState } from "react";
import './Dashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <h2>Admin Panel</h2>
                <ul className="sidebar-nav">
                    <li 
                        className={activeTab === "overview" ? "active" : ""}
                        onClick={() => handleTabClick("overview")}
                    >
                        Overview
                    </li>
                    <li 
                        className={activeTab === "manage-users" ? "active" : ""}
                        onClick={() => handleTabClick("manage-users")}
                    >
                        Manage Users
                    </li>
                    <li 
                        className={activeTab === "manage-content" ? "active" : ""}
                        onClick={() => handleTabClick("manage-content")}
                    >
                        Manage Content
                    </li>
                    <li 
                        className={activeTab === "reports" ? "active" : ""}
                        onClick={() => handleTabClick("reports")}
                    >
                        View Reports
                    </li>
                </ul>
            </aside>

            <main className="main-content">
                <header className="admin-header">
                    <h1>Welcome, Admin</h1>
                </header>

                <section className="content-section">
                    {activeTab === "overview" && (
                        <div className="dashboard-overview">
                            <h2>Overview</h2>
                            <p>Here's a summary of the admin activities.</p>
                        </div>
                    )}
                    {activeTab === "manage-users" && (
                        <div className="manage-users">
                            <h2>Manage Users</h2>
                            <p>Here, you can view, edit, or remove users from the system.</p>
                        </div>
                    )}
                    {activeTab === "manage-content" && (
                        <div className="manage-content">
                            <h2>Manage Content</h2>
                            <p>Manage the website content, add or remove sections.</p>
                        </div>
                    )}
                    {activeTab === "reports" && (
                        <div className="view-reports">
                            <h2>View Reports</h2>
                            <p>View system reports and performance statistics.</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
