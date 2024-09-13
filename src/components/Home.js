import React, { useState } from "react";
import "./Home.css";
import { FaCalendarAlt } from "react-icons/fa";

const Home = () => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guests, setGuests] = useState("");

    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Welcome to Da Gamie Hotel & Resort</h1>
                    <h3>Where luxury and tranquility meet.</h3>
                </div>

                <div className="check">
                    <div className="date-container">
                        <FaCalendarAlt className="calendar-icon" />
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
                        <FaCalendarAlt className="calendar-icon" />
                        <input
                            type="date"
                            placeholder="Check-out"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            className="date-input"
                            onFocus={(e) => e.target.showPicker()}
                        />
                    </div>

                    <div className="guest-container">
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
                    </div>

                    <button className="search-btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
