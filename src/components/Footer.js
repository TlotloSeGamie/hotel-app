import React from "react";
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container" id="footer">
            <div className="footer-section address">
                <h3>Our Address</h3>
                <p>123 Main Street</p>
                <p>Kimberley, Northern Cape</p>
                <p>South Africa, 8301</p>
            </div>

            <div className="footer-section contact">
                <h3>Contact Us</h3>
                <p>Email: info@dagamiehotel.com</p>
                <p>Phone: +27 12 345 6789</p>

                <div className="social-media">
                    <h3>Follow Us</h3>
                    <div className="icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="icon google">
                            <FaGoogle />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-section map">
                <h3>Find Us Here</h3>
                <iframe
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6724.204214203633!2d24.757863127004214!3d-28.72800521899267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eebc2c26413ae1b%3A0xbde2234023a93498!2sKimberley%2C%208301%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1694620925482!5m2!1sen!2sza"
                    width="300"
                    height="200"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Footer;
