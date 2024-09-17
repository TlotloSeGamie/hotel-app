import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"; 
import logo from '../images/Screenshot-logo.jpg'; 

const Navbar = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav-top ${shrink ? 'shrink' : ''}`}>
      <div className="nav-container">
        <img src={logo} alt="Logo" />
        <div className="navigation">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/rooms">ROOMS</Link></li>
            <li><Link to="/dining">DINING</Link></li>
            <li><Link to="/meetings-events">MEETINGS & EVENTS</Link></li>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/about-us">ABOUT US</Link></li>
            <li><a href="#footer" className="contact-us-link">CONTACT US</a></li> 
          </ul>
        </div>
        <ul className="logins">
          <li><Link to="/login" className="login-link">LOGIN</Link></li>
          <li><Link to="/register" className="sign-up-link">SIGN UP</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
