import React, { useState, useEffect } from "react";
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, getUsers } from "../redux/dbSlice"; 
import { getBookings, setLoading, addBookings } from "../redux/dbSlice"; // Import necessary actions from dbSlice
import { fetchDataFirestore , fetchUsers} from "../redux/bookingSlice";
const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [bookingData, setBookingData] = useState({}); // Add bookingData state
    const dispatch = useDispatch();

    // useEffect(()=> {
    //     fetchDataFirestore(dispatch)
    // },[])
    const {data, loading, error  ,list} = useSelector((state)=> state.booking);

    console.log(list);
    
    
    

    console.log(data);
    
    // Fetch users and bookings from Redux
    const userState = useSelector((state) => state.data);
    const bookingState = useSelector((state) => state.booking);
    
    const users = userState ? userState.data : [];
    const loadingUsers = userState ? userState.loading : false;
    
    const bookings = bookingState ? bookingState.data : [];
    const loadingBookings = bookingState ? bookingState.loading : false;

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        
        if (tabName === "manage-users") {
            dispatch(getBookings());
            fetchUsers(dispatch)
        }

        // Optionally set loading state here if necessary
        dispatch(setLoading());
        
        // Fetch bookings when "Reservations" tab is clicked
        if (tabName === "reservations") {
            dispatch(getBookings());
            fetchDataFirestore(dispatch)
        }



        // Optionally set loading state here if necessary
        dispatch(setLoading());
    };

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value }); // Update booking data
    };

    const handleSubmitBooking = (e) => {
        e.preventDefault();
        dispatch(addBookings(bookingData)); // Dispatch the booking data
        setBookingData({}); // Reset the form after submission
    };

    return (
        <div className="admin-dashboard">
            {/* Sidebar navigation */}
            <aside className="sidebar">
                <h2>Admin Panel</h2>
                <ul className="sidebar-nav">
                    <li className={activeTab === "overview" ? "active" : ""} onClick={() => handleTabClick("overview")}>Overview</li>
                    <li className={activeTab === "manage-users" ? "active" : ""} onClick={() => handleTabClick("manage-users")}>Manage Users</li>
                    <li className={activeTab === "manage-content" ? "active" : ""} onClick={() => handleTabClick("manage-content")}>Manage Content</li>
                    <li className={activeTab === "reports" ? "active" : ""} onClick={() => handleTabClick("reports")}>View Reports</li>
                    <li className={activeTab === "reservations" ? "active" : ""} onClick={() => handleTabClick("reservations")}>Reservations</li>
                    <li className={activeTab === "reserve" ? "active" : ""} onClick={() => handleTabClick("reserve")}>Reserve</li>
                </ul>
            </aside>

            {/* Main content area */}
            <main className="main-content">
                <header className="admin-header">
                    <h1>Welcome, Admin</h1>
                </header>

                <section className="content-section">
                    {/* Render tab content dynamically based on activeTab */}
                    {activeTab === "overview" && (
                        <div className="dashboard-overview">
                            <h2>Overview</h2>
                            <p>Here's a summary of the admin activities.</p>
                        </div>
                    )}
                    {activeTab === "manage-users" && (
                        <div className="manage-users">
                            <h2>Manage Users</h2>
                            {loadingUsers ? (
                                <p>Loading users...</p>
                            ) : (
                                <table className="users-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.length > 0 ? (
                                            list.map((user) => (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4">No users found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            )}
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
                    {activeTab === "reservations" && (
                    <div className="view-reservations">
                        <h2>Reservations</h2>
                        {loadingBookings ? (
                            <p>Loading reservations...</p>
                        ) : (
                            <table className="reservations-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Check In</th>
                                        <th>Check Out</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.length > 0 ? (
                                        bookings.map((booking) => (
                                            <tr key={booking.id}>
                                                <td>{booking.id}</td>
                                                <td>{booking.title}</td>
                                                <td>{booking.Firstname}</td>
                                                <td>{booking.Lastname}</td>
                                                <td>{booking.Email}</td>
                                                <td>{booking.phone}</td>
                                                <td>{booking.checkIn}</td>
                                                <td>{booking.CheckOut}</td>
                                                <td>{booking.Price}</td>
                                                <td>{booking.Paid}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="10">No reservations found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}

                    {activeTab === "reserve" && (
                        <div className="reserve-form">
                            <h2>Make a Reservation</h2>
                            <form onSubmit={handleSubmitBooking}>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={bookingData.title || ""}
                                    onChange={handleBookingChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="Firstname"
                                    placeholder="First Name"
                                    value={bookingData.Firstname || ""}
                                    onChange={handleBookingChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="Lastname"
                                    placeholder="Last Name"
                                    value={bookingData.Lastname || ""}
                                    onChange={handleBookingChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                    value={bookingData.Email || ""}
                                    onChange={handleBookingChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={bookingData.phone || ""}
                                    onChange={handleBookingChange}
                                    required
                                />
                                <input
                                    type="date"
                                    name="checkIn"
                                    placeholder="Check In"
                                    value={bookingData.checkIn || ""}
                                    onChange={handleBookingChange}
                                    required
                                />
                                <input
                                    type="date"
                                    name="CheckOut"
                                    placeholder="Check Out"
                                    value={bookingData.CheckOut || ""}
                                    onChange={handleBookingChange}
                                    required
                                />
                                <input
                                    type="number"
                                    name="Price"
                                    placeholder="Price"
                                    value={bookingData.Price || ""}
                                    onChange={handleBookingChange}
                                    required
                                />
                                <button type="submit" className="reserve-btn">Submit Reservation</button>
                            </form>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
