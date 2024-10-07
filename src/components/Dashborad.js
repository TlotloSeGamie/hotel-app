import React, { useState, useEffect } from "react";
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, getUsers } from "../redux/dbSlice"; 
import { getBookings, setLoading, addBookings } from "../redux/dbSlice";
import { fetchDataFirestore , fetchUsers, fetchRooms, fetchSummaryData, setRooms } from "../redux/bookingSlice";
import Modal from './Modal';
import BookingForm from "./BookingForm";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [bookingData, setBookingData] = useState({}); 
    const [selectedRoom, setSelectedRoom] = useState(null); 
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [rooms, setRooms] = useState('');
    const [guests, setGuests] = useState('');
    const [children, setChildren] = useState('');
    const dispatch = useDispatch();

    const {data, loading, error  ,list, room, totalRooms, totalUsers, bookedUsers, totalPrice  } = useSelector((state)=> state.booking);
    // const {Bookdata, Bookloading, Bookerror  ,Booklist, Bookroom } = useSelector((state)=> state.booking);
        console.log("data:", data);
        console.log("list of users:", list);
        console.log("Rooms:", room);
        
        
        


    const userState = useSelector((state) => state.data);
    const bookingState = useSelector((state) => state.booking);
    
    const users = userState ? userState.data : [];
    const loadingUsers = userState ? userState.loading : false;
    
    const bookings = bookingState ? bookingState.data : [];
    const loadingBookings = bookingState ? bookingState.loading : false;

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        
        if (tabName === "overview") {
          dispatch(getBookings());
          fetchSummaryData(dispatch)
        }

        if (tabName === "reserve") {
            // dispatch(getBookings());
            fetchRooms(dispatch)
        }

        if (tabName === "manage-users") {
            dispatch(getBookings());
            fetchUsers(dispatch)
        }
        
        if (tabName === "manage-rooms") {
          fetchRooms(dispatch);
        }

        dispatch(setLoading());
        
        if (tabName === "reservations") {
            dispatch(getBookings());
            fetchDataFirestore(dispatch)
        }

        dispatch(setLoading());
    };

    const openRoomModal = (room) => {
      setSelectedRoom(room);
      setIsBookingModalOpen(true); // Open modal
  };

  const closeRoomModal = () => {
      setSelectedRoom(null);
      setIsBookingModalOpen(false); // Close modal
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

    return (
      <div className="admin-dashboard">
        <aside className="sidebar">
          <h2>Admin Panel</h2>
          <ul className="sidebar-nav">
            <li className={activeTab === "overview" ? "active" : ""} onClick={() => handleTabClick("overview")}>
              Overview
            </li>
            <li className={activeTab === "manage-users" ? "active" : ""} onClick={() => handleTabClick("manage-users")}>
              Manage Users
            </li>
            <li className={activeTab === "manage-rooms" ? "active" : ""}onClick={() => handleTabClick("manage-rooms")}>
              Manage Rooms
            </li>
            <li className={activeTab === "manage-content" ? "active" : ""}onClick={() => handleTabClick("manage-content")} >
              Manage Content
            </li>
            <li className={activeTab === "reports" ? "active" : ""}onClick={() => handleTabClick("reports")}>
              View Reports
            </li>
            <li className={activeTab === "reservations" ? "active" : ""} onClick={() => handleTabClick("reservations")}>
              Reservations
            </li>
            <li className={activeTab === "reserve" ? "active" : ""} onClick={() => handleTabClick("reserve")} >
              Reserve
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
                      <ul>
                          <li>Total Rooms: {totalRooms}</li>
                          <li>Total Users: {totalUsers}</li>
                          <li>Total Booked Users: {bookedUsers}</li>
                          <li>Total Price of Rooms Booked: R{totalPrice.toFixed(2)}</li>
                      </ul>
                  </div>
              )}
            {activeTab === "manage-rooms" && (
              <div className="manage-rooms">
                <h2>Manage Rooms</h2>
                {loading ? (
                  <p>Loading rooms...</p>
                ) : (
                  <table className="rooms-table">
                    <thead>
                      <tr>
                        <th>Room Name</th>
                        <th>Price</th>
                        <th>Bathroom</th>
                        <th>Bedroom</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0 ? (
                        data.map((room) => (
                          <tr key={room.id}>
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
                          <td colSpan="5">No rooms available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}
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
              <div className="reserve-room">
                  <h2>Reserve Room</h2>
                  {loading ? (
                                <p>Loading rooms...</p>
                            ) : (
                                <table className="rooms-table">
                                    <thead>
                                        <tr>
                                            <th>Room Name</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((room) => (
                                                <tr key={room.id}>
                                                    <td>{room.name}</td>
                                                    <td>{room.price}</td>
                                                    <td>
                                                        <button onClick={() => openRoomModal(room)}>Reserve</button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3">No rooms available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}
                </section>

                {isBookingModalOpen && selectedRoom && ( // Conditional rendering for modal
                    <div className="booking-modal">
                        <div className="modal-content">
                            <h2>Booking Details</h2>
                            <div className="room-info">
                                <img src={selectedRoom.image} alt={selectedRoom.name} />
                                <div className="info-text">
                                  <h3>{selectedRoom.name}</h3>
                                  <p>Price: R{selectedRoom.price}</p>
                                  <ul></ul>
                                  <div className="select-container">
                                  <div className="date-container">
                                      <input
                                          type="date"
                                          placeholder="Check-in"
                                          value={checkInDate}
                                          onChange={(e) => setCheckInDate(e.target.value)}
                                          className="date-input"
                                          onFocus={(e) => e.target.showPicker()}
                                      />
                                  </div>

                                  <div className="date-container">
                                      <input
                                          type="date"
                                          placeholder="Check-out"
                                          value={checkOutDate}
                                          onChange={(e) => setCheckOutDate(e.target.value)}
                                          className="date-input"
                                          onFocus={(e) => e.target.showPicker()}
                                      />
                                  </div>

                                  
                                        <select
                                            className="rooms-input"
                                            value={rooms}
                                            onChange={(e) => setRooms(e.target.value)}
                                        >
                                            <option value="" disabled>Select Rooms</option>
                                            {[...Array(15).keys()].map(num => (
                                                <option key={num + 1} value={num + 1}>{num + 1} Rooms</option>
                                            ))}
                                        </select>
                                        <select
                                            className="guest-input"
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                        >
                                            <option value="" disabled>Select Guests</option>
                                            {[...Array(15).keys()].map(num => (
                                                <option key={num + 1} value={num + 1}>{num + 1} Guests</option>
                                            ))}
                                        </select>
                                        <select
                                            className="children-input"
                                            value={children}
                                            onChange={(e) => setChildren(e.target.value)}
                                        >
                                            <option value="" disabled>Select Children</option>
                                            {[...Array(15).keys()].map(num => (
                                                <option key={num + 1} value={num + 1}>{num + 1} Children</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <BookingForm
                                roomId={selectedRoom.id}
                                onChange={handleBookingChange}
                                onSubmit={handleSubmitBooking}
                            />
                            <button onClick={closeRoomModal}>Close</button>
                        </div>
                    </div>
                )}
            </main>
      </div>
    );
};

export default AdminDashboard;
