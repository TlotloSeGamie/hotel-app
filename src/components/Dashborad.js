import React, { useState, useEffect } from "react";
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, getUsers } from "../redux/dbSlice"; 
import { getBookings, setLoading, addBookings } from "../redux/dbSlice";
import { fetchDataFirestore , fetchUsers, fetchRooms} from "../redux/bookingSlice";
import Modal from './Modal';
import BookingForm from "./BookingForm";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [bookingData, setBookingData] = useState({}); 
    const [selectedRoom, setSelectedRoom] = useState(null);  // Define selectedRoom state
    const dispatch = useDispatch();
    const [rooms, setRooms] = useState('')

    const {data, loading, error  ,list, room } = useSelector((state)=> state.booking);
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
        
        if (tabName === "reserve") {
            // dispatch(getBookings());
            fetchRooms(dispatch)
        }

        if (tabName === "manage-users") {
            dispatch(getBookings());
            fetchUsers(dispatch)
        }

        dispatch(setLoading());
        
        if (tabName === "reservations") {
            dispatch(getBookings());
            fetchDataFirestore(dispatch)
        }

        dispatch(setLoading());
    };

    // Handle room modal
    const openRoomModal = (room) => {
        setSelectedRoom(room);  // Set the selected room for modal
    };

    const closeRoomModal = () => {
        setSelectedRoom(null);  // Close the modal by clearing the selected room
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
            <li
              className={activeTab === "reservations" ? "active" : ""}
              onClick={() => handleTabClick("reservations")}
            >
              Reservations
            </li>
            <li
              className={activeTab === "reserve" ? "active" : ""}
              onClick={() => handleTabClick("reserve")}
            >
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
              <div className="overview">
                <h2>View</h2>
                <p>View statistics.</p>
              </div>
            )}

            {activeTab === "reserve" && (
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
                      {data.length > 0 ? (
                        data.map((room) => (
                          <tr key={room.id}>
                            <td>
                              <img
                                src={room.mainPicture}
                                alt={room.name}
                                className="room-image"
                              />
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

            {selectedRoom && (
              <Modal onClose={closeRoomModal}>
                <div className="room-details">
                  <h2>{selectedRoom.name}</h2>
                  <div className="room-images">
                    <img
                      src={selectedRoom.mainPicture}
                      alt="Main"
                      className="main-image"
                    />
                    {selectedRoom.additionalPictures.map((pic, index) => (
                      <img
                        key={index}
                        src={pic}
                        alt={`Additional ${index + 1}`}
                        className="additional-image"
                      />
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
              // <div className="reserve-room">
              //     <h2>Reserve Room</h2>
              //     <form onSubmit={handleSubmitBooking}>
              //         <label htmlFor="title">Title:</label>
              //         <input
              //             type="text"
              //             id="title"
              //             name="title"
              //             value={bookingData.title || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <label htmlFor="Firstname">First Name:</label>
              //         <input
              //             type="text"
              //             id="Firstname"
              //             name="Firstname"
              //             value={bookingData.Firstname || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <label htmlFor="Lastname">Last Name:</label>
              //         <input
              //             type="text"
              //             id="Lastname"
              //             name="Lastname"
              //             value={bookingData.Lastname || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <label htmlFor="Email">Email:</label>
              //         <input
              //             type="email"
              //             id="Email"
              //             name="Email"
              //             value={bookingData.Email || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <label htmlFor="phone">Phone:</label>
              //         <input
              //             type="tel"
              //             id="phone"
              //             name="phone"
              //             value={bookingData.phone || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <label htmlFor="checkIn">Check In:</label>
              //         <input
              //             type="date"
              //             id="checkIn"
              //             name="checkIn"
              //             value={bookingData.checkIn || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <label htmlFor="CheckOut">Check Out:</label>
              //         <input
              //             type="date"
              //             id="CheckOut"
              //             name="CheckOut"
              //             value={bookingData.CheckOut || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <label htmlFor="Price">Price:</label>
              //         <input
              //             type="text"
              //             id="Price"
              //             name="Price"
              //             value={bookingData.Price || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <label htmlFor="Paid">Status:</label>
              //         <input
              //             type="text"
              //             id="Paid"
              //             name="Paid"
              //             value={bookingData.Paid || ""}
              //             onChange={handleBookingChange}
              //         />
              //         <button type="submit">Reserve</button>
              //     </form>
              // </div>
              <>
                <button className="reserve-room">RESERVE ROOM</button>
              </>
            )}
          </section>
        </main>
      </div>
    );
};

export default AdminDashboard;
