import React, { useState } from 'react';
import "./Rooms.css";
import { FaBath, FaBed } from "react-icons/fa";
import executive from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-1.jpg";
import { useNavigate } from 'react-router-dom'; 
import Navbar from './Navbar';

const Suites = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const roomData = [
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        {
            name: "Executive Suite",
            price: "R3,215/ night",
            image: executive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
        },
        
    ];

    const openModal = (room) => {
        setSelectedRoom(room);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRoom(null);
    };

    const navigate = useNavigate(); 

    const handleBookNow = () => {
        navigate('/checkout'); 
    };

    return (
        <div className="main">
            <Navbar />
            <div className="lines">
                <hr className="line"></hr>
                <h2>Top Apartments</h2>
                <hr className="line"></hr>
            </div>
            <div className="rooms-container">
                {roomData.map((room, index) => (
                    <div className="room-card" key={index} onClick={() => openModal(room)}>
                        <div className="image-container">
                            <img src={room.image} alt={room.name} />
                        </div>
                        <div className="room-content">
                            <div className="name">
                                <h4>{room.name}</h4>
                                <h4>{room.price}</h4>
                            </div>
                            <div className="bed">
                                <h5><FaBath className="icon-style" /> {room.bathroom}</h5>
                                <h5><FaBed className="icon-style" /> {room.bedroom}</h5>
                            </div>
                            <button className="btn" onClick={handleBookNow}>Book now</button> 
                        </div>
                    </div>
                ))}
                <div className="button">SEE ALL SUITES</div>
            </div>

            {isModalOpen && selectedRoom && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-header">
                            <img src={selectedRoom.image} alt={selectedRoom.name} />
                            <h2>{selectedRoom.name}</h2>
                            <p>{selectedRoom.price}</p>
                        </div>
                        <div className="modal-body">
                            <p>{selectedRoom.bathroom}</p>
                            <p>{selectedRoom.bedroom}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn" onClick={handleBookNow}>Book Now</button> 
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Suites;
