import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { performLogout } from '../redux/authSlice'; 
import { setUser } from '../redux/authSlice'; 
import "./Navbar.css";
import logo from '../images/Screenshot-logo.jpg';
import { FaHeart, FaUserCircle } from 'react-icons/fa'; 
import { FaCalendarCheck } from 'react-icons/fa'

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false); 
  const user = useSelector((state) => state.auth.user); 
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('user'); 
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser))); 
    }
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    dispatch(performLogout());
    setShowProfileModal(false); 
  };

  return (
    <div className={`nav-top ${shrink ? 'shrink' : ''}`}>
      <div className="nav-container">
        <img src={logo} alt="Logo" />
        <div className="navigation">
          <ul>
            <li><Link to="/">HOME</Link></li>
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
                <FaUserCircle size={30} color="#0282c3"/>{user.userName}
              </li>
              {showProfileModal && (
                <div className="profile-overlay">
                  <div className='profile-mid'>
                    <div className="profile-content">
                      <h2>User Profile</h2>
                      <div className=''>
                      {/* <div>
                        <label htmlFor="image">Upload Image:</label>
                        <input
                          name="image"
                          type="file"
                          accept="image/*"
                          // onChange={handleFileChange}
                        />
                      </div> */}
                      <div className='edit-profile'>
                        <FaUserCircle size={210} color="#0282c3" className='circle'/>
                        <button className='edit-button'> edit</button>
                      </div>
                      {/* {user.userName} */}
                        <ul>
                          <li><strong>Username:</strong> {user.userName}</li>
                          <li><strong>Email:</strong> {user.email}</li>
                          <li><strong>Phone:</strong> {user.phone}</li>
                        </ul>
                      </div>
                      <div className='users-thingies'>
                        <ul>
                          <li><a href='#' className='booking-list'>Your Bookings <FaCalendarCheck size={30} color="#0282c3" /></a></li>
                          <li><a href='#' className='booking-list'>Favourites <FaHeart size={30} color="#ff0000" /></a></li>
                        </ul>
                      </div>
                      <button onClick={handleLogout} className="logout-btn">LOGOUT</button>
                      <button onClick={toggleProfileModal} className="close-btn">CLOSE</button>
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
