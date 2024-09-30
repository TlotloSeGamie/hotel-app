import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { performLogout } from '../redux/authSlice'; 
import "./Navbar.css";
import logo from '../images/Screenshot-logo.jpg';
import { FaUserCircle } from 'react-icons/fa'; 

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false); 
  const user = useSelector((state) => state.auth.user); 
  const dispatch = useDispatch();
  const profileRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfile]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    dispatch(performLogout());
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
              <li className="user-icon" onClick={toggleProfile}>
                <FaUserCircle size={30} color="blue" />
              </li>
              {showProfile && (
                <div className="profile-popup" ref={profileRef}>
                  <ul>
                    <li><strong>Username:</strong> {user.userName}</li>
                    <li><strong>Email:</strong> {user.email}</li>
                    <li><strong>Phone:</strong> {user.phone}</li>
                    <li>
                      <button onClick={handleLogout} className="logout-btn">LOGOUT</button>
                    </li>
                  </ul>
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
