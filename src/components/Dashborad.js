import React, { useState, useEffect } from "react";
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, getUsers } from "../redux/dbSlice"; 
import { getBookings, setLoading, addBookings } from "../redux/dbSlice";
import { fetchDataFirestore, fetchUsers, fetchRooms } from "../redux/bookingSlice"; 
import Modal from './Modal'; // Ensure this is the correct path for your Modal component

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [bookingData, setBookingData] = useState({});
    const [selectedRoom, setSelectedRoom] = useState(null); // State for the selected room
    const dispatch = useDispatch();

    const { data, loading, error, list, rooms } = useSelector((state) => state.booking);

    const userState = useSelector((state) => state.data);
    const bookingState = useSelector((state) => state.booking);
    
    const users = userState ? userState.data : [];
    const loadingUsers = userState ? userState.loading : false;
    
    const bookings = bookingState ? bookingState.data : [];
    const loadingBookings = bookingState ? bookingState.loading : false;

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        dispatch(setLoading()); // Dispatch loading action once at the beginning

        if (tabName === "overview") {
            // Fetch rooms when the overview tab is clicked
            dispatch(fetchRooms());
        }

        if (tabName === "manage-users") {
            dispatch(getBookings());
            dispatch(fetchUsers());
        }

        if (tabName === "reservations") {
            dispatch(getBookings());
            dispatch(fetchDataFirestore());
        }
    };

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const handleSubmitBooking = (e) => {
        e.preventDefault();
        dispatch(addBookings(bookingData));
        setBookingData({});
    };

    // Function to open the modal and set the selected room
    const openRoomModal = (room) => {
        setSelectedRoom(room);
    };

    // Function to close the modal
    const closeRoomModal = () => {
        setSelectedRoom(null);
    };

    return (
        <div className="admin-dashboard">
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

            <main className="main-content">
                <header className="admin-header">
                    <h1>Welcome, Admin</h1>
                </header>

                <section className="content-section">
                    {activeTab === "overview" && (
                        <div className="manage-rooms">
                            <h2>Manage Rooms</h2>
                            {loading ? (
                                <p>Loading rooms...</p>
                            ) : (
                                <table className="rooms-table">
                                    <thead>
                                        <tr>
                                            <th>Picture</th>
                                            <th>Room Name</th>
                                            <th>Price</th>
                                            <th>Bathroom</th>
                                            <th>Bedroom</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rooms.length > 0 ? (
                                            rooms.map((room) => (
                                                <tr key={room.id}>
                                                    <td>
                                                        <img src={room.mainPicture} alt={room.name} className="room-image" />
                                                    </td>
                                                    <td>{room.name}</td>
                                                    <td>{room.price}</td>
                                                    <td>{room.bathroom}</td>
                                                    <td>{room.bedroom}</td>
                                                    <td>
                                                        <button onClick={() => openRoomModal(room)}>
                                                            View Details
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6">No rooms available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}

                    {/* Modal for room details */}
                    {selectedRoom && (
                        <Modal onClose={closeRoomModal}>
                            <div className="room-details">
                                <h2>{selectedRoom.name}</h2>
                                <div className="room-images">
                                    <img src={selectedRoom.mainPicture} alt="Main" className="main-image" />
                                    {selectedRoom.additionalPictures.map((pic, index) => (
                                        <img key={index} src={pic} alt={`Additional ${index + 1}`} className="additional-image" />
                                    ))}
                                </div>
                                <p>Price: {selectedRoom.price}</p>
                                <p>Bathroom: {selectedRoom.bathroom}</p>
                                <p>Bedroom: {selectedRoom.bedroom}</p>
                                <p>Highlights:</p>
                                <ul>
                                    {selectedRoom.highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </Modal>
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
                                                    <td>{booking.status}</td>
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
                        <div className="reserve">
                            <h2>Make a Reservation</h2>
                            <form onSubmit={handleSubmitBooking}>
                                <input
                                    type="text"
                                    name="title"
                                    value={bookingData.title || ''}
                                    onChange={handleBookingChange}
                                    placeholder="Title"
                                    required
                                />
                                <input
                                    type="text"
                                    name="Firstname"
                                    value={bookingData.Firstname || ''}
                                    onChange={handleBookingChange}
                                    placeholder="First Name"
                                    required
                                />
                                <input
                                    type="text"
                                    name="Lastname"
                                    value={bookingData.Lastname || ''}
                                    onChange={handleBookingChange}
                                    placeholder="Last Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    value={bookingData.Email || ''}
                                    onChange={handleBookingChange}
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={bookingData.phone || ''}
                                    onChange={handleBookingChange}
                                    placeholder="Phone"
                                    required
                                />
                                <input
                                    type="date"
                                    name="checkIn"
                                    value={bookingData.checkIn || ''}
                                    onChange={handleBookingChange}
                                    placeholder="Check In"
                                    required
                                />
                                <input
                                    type="date"
                                    name="CheckOut"
                                    value={bookingData.CheckOut || ''}
                                    onChange={handleBookingChange}
                                    placeholder="Check Out"
                                    required
                                />
                                <input
                                    type="number"
                                    name="Price"
                                    value={bookingData.Price || ''}
                                    onChange={handleBookingChange}
                                    placeholder="Price"
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
