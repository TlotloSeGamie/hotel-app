import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Rooms.css";
import { FaBath, FaBed } from "react-icons/fa";
import executive from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-1.jpg";
import additionalImage1 from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-1.jpg";
import additionalImage2 from "../images/executive suite/I-Resort-Crete-Gold-Double-Room-Sea-View-2.jpg";
import additionalImage3 from "../images/executive suite/I-Resort-Crete-Gold-Junior-Suite-Sea-View-2-600x454.jpg";
import additionalImage4 from "../images/executive suite/I-Resort-Crete-Gold-Suite-Sea-View-Private-Pool-2.jpg";
import goldexecutive from "../images/rooms/960x0.webp";
import premuim from "../images/rooms/1-credit-the-setai-miami-beach.jpg";
import royal from "../images/rooms/16._Royal_Suite_bedroom.jpg";
import pier from "../images/rooms/1099796_circle.jpg";
import privatepool from "../images/rooms/40919557-768x512-1.jpeg"
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { GiGuardedTower } from 'react-icons/gi';

import {fetchData } from '../redux/dbSlice'
import Footer from './Footer';

const Allrooms = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, loading, error } = useSelector((state) => state.data);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData()); // Fetch data from Firestore
      }, [dispatch]);

      console.log(data)

    const roomData = [
        {
            name: "Matte-BLK Executive Deluxe Suite",
            price: "R8,500/ night",
            image: goldexecutive,
            bathroom: "1 Bathroom",
            bedroom: "1 Bedroom",
            size: "500 sq. ft. (46 sq. meters)",
            occupancy: "2 adults and 1 child",
            bedOptions: "One king-sized bed, with an option for an additional roll away bed upon request",
            bathroomDetails: "Spacious walk-in rain shower, vanity area with double sinks, and premium toiletries",
            flooring: "Elegant tiled floors for a modern, clean look",
            view: "Garden, pool, or mountain views, depending on availability",
            accessibility: "Wheelchair accessible with widened doorways and an accessible shower option available upon request",
            highlights: [
                "King-sized bed with luxurious, high-thread-count linens",
                "Private balcony offering breathtaking views of the resort or surrounding nature",
                "Spacious seating area with contemporary furniture, ideal for relaxation or casual meetings",
                "Modern open layout with sleek décor that creates a tranquil, sophisticated ambiance",
                "En-suite bathroom with a walk-in rain shower and designer toiletries"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage4,
                additionalImage3
            ]
        },{
            name: "Premium Deluxe Suite",
            price: "R7,000/ night",
            image: premuim,
            bathroom: "1 Spacious Bathroom",
            bedroom: "1 Cozy Bedroom",
            size: "550 sq. ft. (51 sq. meters)",
            occupancy: "2 adults and 1 child",
            bedOptions: "One queen-sized bed with an additional roll-away bed for a child upon request",
            bathroomDetails: "Rainfall shower, soaking tub with jets, and a marble vanity with luxurious toiletries",
            flooring: "Carpeted with soft, premium-grade material for warmth and comfort",
            view: "City skyline or poolside views",
            accessibility: "Accessible with wide doorways and a zero-entry shower",
            highlights: [
                "Queen-sized bed with memory foam mattress and down comforters",
                "Private balcony with city skyline views, perfect for morning coffee or evening relaxation",
                "Comfortable seating area with a flat-screen TV and a cozy lounge chair",
                "Classic design with elegant fixtures and warm lighting",
                "Modern bathroom with deep soaking tub and a rainfall shower"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage3,
                additionalImage4
            ]
        }, {
            name: "Royal Suite",
            price: "R8,000/ night",
            image: royal,
            bathroom: "1 Grand Bathroom",
            bedroom: "1 Palatial Bedroom",
            size: "800 sq. ft. (74 sq. meters)",
            occupancy: "3 adults or 2 adults and 2 children",
            bedOptions: "King-sized four-poster bed with custom luxury linens, plus a queen-sized sofa bed in the lounge area",
            bathroomDetails: "Expansive marble bathroom with a steam shower, jacuzzi tub, dual vanities, and heated floors",
            flooring: "Luxurious marble floors with underfloor heating",
            view: "Breathtaking mountain and pool views",
            accessibility: "Accessible with an adjustable-height bed and a barrier-free bathroom",
            highlights: [
                "Four-poster king bed with premium linens and pillows",
                "Large private terrace with a seating area and stunning mountain views",
                "Separate living room with elegant furnishings and a dining space for 4 people",
                "High-end, contemporary design with a sophisticated color palette",
                "Spa-like bathroom with a jacuzzi tub, steam shower, and heated towel racks"
            ],
            additionalImages: [
                additionalImage1,
                additionalImage2,
                additionalImage3,
                additionalImage4
            ]
        }
        
        
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
                {data.map((room, index) => (
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
                            
                        </div>
                    </div>
                ))}
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
                                <p><strong>Room Size:</strong> {selectedRoom.size}</p>
                                <p><strong>Occupancy:</strong> {selectedRoom.occupancy}</p>
                                <p><strong>Bed Options:</strong> {selectedRoom.bedOptions}</p>
                                <p><strong>Bathroom Details:</strong> {selectedRoom.bathroomDetails}</p>
                                <p><strong>Flooring:</strong> {selectedRoom.flooring}</p>
                                <p><strong>View:</strong> {selectedRoom.view}</p>
                                <p><strong>Accessibility:</strong> {selectedRoom.accessibility}</p>
                                <ul>
                                   <p><strong>Room Highlights</strong></p> {selectedRoom.highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                                <button className="btn" onClick={handleBookNow}>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        <Footer />
        </div>
    );
};

export default Allrooms;
