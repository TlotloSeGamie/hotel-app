import React, { useState } from 'react';
import "./Rooms.css";
import { FaBath, FaBed } from "react-icons/fa";
import executive from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-1.jpg";
import additionalImage1 from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-1.jpg";
import additionalImage2 from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-2.jpg";
import additionalImage3 from "../images/executive suite/I-Resort-Crete-Gold-Junior-Suite-Sea-View-2-600x454.jpg";
import additionalImage4 from "../images/executive suite/I-Resort-Crete-Gold-Suite-Sea-View-Private-Pool-2.jpg";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { GiGuardedTower } from 'react-icons/gi';

const Suites = ({ showDropdown }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roomData = [
    // Your room data goes here...
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

  if (showDropdown) {
    return null; // Render nothing if dropdown is visible
  }

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
            <div className="modal-body">
              <div className="modal-images">
                <div className="main-image">
                  <img src={selectedRoom.image} alt={selectedRoom.name} />
                </div>
                <div className="additional-images-grid">
                  {selectedRoom.additionalImages.map((image, index) => (
                    <div key={index} className="additional-image">
                      <img src={image} alt={`additional ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="room-info">
                <h2>{selectedRoom.name}</h2>
                <p>{selectedRoom.price}</p>
                <p><strong>Size:</strong> {selectedRoom.size}</p>
                <p><strong>Occupancy:</strong> {selectedRoom.occupancy}</p>
                <p><strong>Bed Options:</strong> {selectedRoom.bedOptions}</p>
                <p><strong>Bathroom Details:</strong> {selectedRoom.bathroomDetails}</p>
                <p><strong>Flooring:</strong> {selectedRoom.flooring}</p>
                <p><strong>View:</strong> {selectedRoom.view}</p>
                <p><strong>Accessibility:</strong> {selectedRoom.accessibility}</p>
                <ul>
                  {selectedRoom.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <button className="btn" onClick={handleBookNow}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suites;

