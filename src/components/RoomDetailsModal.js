import React from 'react';
import './RoomDetailsModal.css'; 

const RoomDetailsModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="images">
          <img src={room.mainImage} alt={room.name} />
          {room.additionalImages.map((img, index) => (
            <div className='additional'>
                <img key={index} src={img} alt={`Additional image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className='main-details'>
            <div className='bedroom'>
                <h2>{room.name}</h2>
                <p>Price: ${room.price}</p>
            </div>
            <div className='bathroom'>
                <p>Bathroom: {room.bathroom}</p>
                <p>Bedroom: {room.bedroom}</p>
            </div>
        </div>
        
        <h3>Highlights:</h3>
        <ul>
          {room.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
