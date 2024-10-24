import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { performLogout, updateProfileImage, setUser } from '../redux/authSlice';
import './Navbar.css';
import logo from '../images/Screenshot-logo.jpg';
import { FaHeart, FaUserCircle, FaCalendarCheck } from 'react-icons/fa';
import { fetchBookingToFirestore ,fetchLikedRooms } from '../redux/bookingSlice';

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showBookings, setShowBookings] = useState(false);
  const [showLikedRooms, setShowLikedRooms] = useState(false);
  

  const user = useSelector((state) => state.auth.user);
  const { userBookings, likedRooms } = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  console.log("user booking", userBookings);
  

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedProfileImage = localStorage.getItem('profileImage');

    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }

    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(fetchBookingToFirestore() ,fetchLikedRooms());
    const storedLikedRooms = localStorage.getItem('likedRooms'); 
    if (storedLikedRooms) {
      // setLikedRooms(JSON.parse(storedLikedRooms));
      console.log("Liked rooms fetched from localStorage:", JSON.parse(storedLikedRooms));
    }
  }, [dispatch]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
    if (showProfileModal) {
      setShowBookings(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('profileImage');
    dispatch(performLogout());
    setShowProfileModal(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('profileImage', reader.result);
      };

      if (user) {
        dispatch(updateProfileImage(user.uid, reader.result));
      }
      reader.readAsDataURL(file);
    }
  };

  const handleShowBookings = async () => {
    setShowBookings(true);
  };

  const handleShowLikedRooms = async () => {
    setShowLikedRooms(true);
    console.log("Showing liked rooms:", likedRooms); 
  };

  return (
    <div className={`nav-top ${shrink ? 'shrink' : ''}`}>
      <div className="nav-container">
        <img src={logo} alt="Logo" />
        <div className="navigation">
          <ul>
            <li><Link to="">HOME</Link></li>
            <li className="rooms-dropdown" onClick={toggleDropdown}>
              <Link to="#">ROOMS</Link>
              {showDropdown && (
                <div className="dropdown-menu">
                  <ul>
                    <li><Link to="/all-rooms">All Rooms</Link></li>
                    <li><Link to="/rooms/suites">Suites</Link></li>
                    <li><Link to="/rooms/family-room">Family Room</Link></li>
                    <li><Link to="/rooms/king-bed">King-Size Bed</Link></li>
                    <li><Link to="/rooms/queen-bed">Queen-Size Bed</Link></li>
                    <li><Link to="/rooms/double-bed">Double Bed</Link></li>
                    <li><Link to="/rooms/single-bed">Single Bed</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li><Link to="/dining">DINING</Link></li>
            <li><Link to="/meetings-events">MEETINGS & EVENTS</Link></li>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/about-us">ABOUT US</Link></li>
            <li><a href="#footer" className="contact-us-link">CONTACT US</a></li>
          </ul>
        </div>
        <ul className="logins">
          {user ? (
            <>
              <li className="user-icon" onClick={toggleProfileModal}>
                <FaUserCircle size={80} color="#0282c3" />
                <span className="user-name">{user.userName}</span>
              </li>
              {showProfileModal && (
                <div className="profile-overlay">
                  <div className="profile-mid">
                    <div className="profile-content">
                      <h2>User Profile</h2>
                      <div className="edit-profile">
                        <input
                          type="file"
                          id="profile-image-upload"
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                        <label htmlFor="profile-image-upload" className="circle-label">
                          {profileImage ? (
                            <img src={profileImage} alt="Profile" className="profile-image-large" />
                          ) : (
                            <FaUserCircle size={210} color="#0282c3" className="circle" />
                          )}
                        </label>
                      </div>
                      <ul>
                        <li><strong>Username:</strong> {user.userName}</li>
                        <li><strong>Email:</strong> {user.email}</li>
                        <li><strong>Phone:</strong> {user.phone}</li>
                      </ul>
                      <div className="users-thingies">
                        <ul>
                          <li>
                            <a href="#" className="booking-list" onClick={handleShowBookings}>
                              Your Bookings <FaCalendarCheck size={30} color="#0282c3" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="favor-list" onClick={handleShowLikedRooms}>
                              Favourites <FaHeart size={30} color="#ff0000" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {showBookings && (
                        <div className="user-bookings">
                          <h3>Your Bookings:</h3>
                          {Array.isArray(userBookings) && userBookings.length > 0 ? (
                            <table className="booking-table">
                              <thead>
                                <tr>
                                  <th>Room Name</th>
                                  <th>Check-in Date</th>
                                  <th>Check-out Date</th>
                                  <th>Price /night</th>
                                  <th>Total Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {userBookings.map((booking) => (
                                  <tr key={booking.id}>
                                    {booking.roomDetails ? (
                                      <>
                                        <td>{booking.roomDetails.name}</td>
                                        <td>{booking.roomDetails.checkInDate}</td>
                                        <td>{booking.roomDetails.checkOutDate}</td>
                                        <td>R{booking.roomDetails.totalPrice}</td>
                                        <td>R{booking.roomDetails.roomPrice}</td>
                                      </>
                                    ) : (
                                      <td colSpan="4">Booking details are incomplete.</td>
                                    )}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p>No bookings found.</p>
                          )}
                        </div>
                      )}

                      {showLikedRooms && (
                        <div className="user-likes">
                          <h3>Your Liked Rooms:</h3>
                          {Array.isArray(userBookings) && userBookings.length > 0 ? (
                            <ul>
                              {console.log("Liked rooms to be displayed:", likedRooms)} 
                              {likedRooms.map((booking) => (
                                <li key={booking.roomDetails.roomId}>{booking.roomDetails.name}</li>
                              ))}
                              
                            </ul>
                          ) : (
                            <p>No liked rooms found.</p>
                          )}
                        </div>
                      )}

                      <button onClick={toggleProfileModal} className="close-btn">CLOSE</button>
                      <button onClick={handleLogout} className="logout-btn">LOGOUT</button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <li><Link to="/login" className="login-link">LOGIN</Link></li>
              <li><Link to="/register" className="sign-up-link">SIGN UP</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
